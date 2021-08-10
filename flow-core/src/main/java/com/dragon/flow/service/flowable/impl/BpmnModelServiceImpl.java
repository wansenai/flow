package com.dragon.flow.service.flowable.impl;

import com.dragon.flow.customcache.CustomDeploymentCache;
import com.dragon.flow.service.flowable.IBpmnModelService;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.collections.MapUtils;
import org.apache.commons.lang.StringUtils;
import org.flowable.bpmn.model.Process;
import org.flowable.bpmn.model.*;
import org.flowable.engine.RepositoryService;
import org.flowable.engine.impl.persistence.deploy.ProcessDefinitionCacheEntry;
import org.flowable.task.service.impl.persistence.entity.TaskEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;

/**
 * @Description: bpmnModel service
 * @Author: Bruce.liu
 * @Since:10:48 2021/04/21
 */
@Service
public class BpmnModelServiceImpl implements IBpmnModelService {
    @Autowired
    private RepositoryService repositoryService;
    @Autowired
    private CustomDeploymentCache customDeploymentCache;

    @Override
    public boolean checkActivitySubprocessByActivityId(String processDefId, String activityId) {
        boolean flag = true;
        List<FlowNode> activities = this.findFlowNodesByActivityId(processDefId, activityId);
        if (CollectionUtils.isNotEmpty(activities)) {
            flag = false;
        }
        return flag;
    }

    public List<FlowNode> findFlowNodesByActivityId(String processDefId, String activityId) {
        List<FlowNode> activities = new ArrayList<>();
        BpmnModel bpmnModel = this.getBpmnModelByProcessDefId(processDefId);
        List<Process> processes = bpmnModel.getProcesses();
        for (Process process : processes) {
            FlowElement flowElement = process.getFlowElement(activityId);
            if (flowElement != null) {
                FlowNode flowNode = (FlowNode) flowElement;
                activities.add(flowNode);
            }
        }
        return activities;
    }

    /**
     * 获取任务节点的监听器列表
     *
     * @param activityId          节点id
     * @param processDefinitionId 流程定义id
     * @return
     */
    @Override
    public List<String> getStrUserTaskListeners(String activityId, String processDefinitionId) {
        List<String> listeners = new ArrayList<>();
        List<FlowableListener> taskListeners = this.getUserTaskListeners(activityId, processDefinitionId);
        if (CollectionUtils.isNotEmpty(taskListeners)) {
            taskListeners.forEach(l -> listeners.add(l.getImplementation()));
        }
        return listeners;
    }

    /**
     * 获取任务节点的监听器列表
     *
     * @param activityId          节点id
     * @param processDefinitionId 流程定义id
     * @return
     */
    @Override
    public List<FlowableListener> getUserTaskListeners(String activityId, String processDefinitionId) {
        FlowElement flowElement = this.getFlowElementByActivityIdAndProcessDefinitionId(activityId, processDefinitionId);
        if (flowElement != null && flowElement instanceof UserTask) {
            UserTask userTask = (UserTask) flowElement;
            return userTask.getTaskListeners();
        }
        return null;
    }

    @Override
    public FlowElement getFlowElementByActivityIdAndProcessDefinitionId(String activityId, BpmnModel bpmnModel) {
        if (bpmnModel != null){
            List<Process> processes = bpmnModel.getProcesses();
            if (CollectionUtils.isNotEmpty(processes)) {
                for (Process process : processes) {
                    FlowElement flowElement = process.getFlowElement(activityId);
                    if (flowElement != null) {
                        return flowElement;
                    }
                }
            }
        }

        return null;
    }

    /**
     * 获取节点
     *
     * @param activityId          节点id
     * @param processDefinitionId 流程定义id
     * @return
     */
    @Override
    public FlowElement getFlowElementByActivityIdAndProcessDefinitionId(String activityId, String processDefinitionId) {
        BpmnModel bpmnModel = this.getBpmnModelByProcessDefId(processDefinitionId);
        return getFlowElementByActivityIdAndProcessDefinitionId(activityId, bpmnModel);
    }

    /**
     * 获取自定义单个属性值
     *
     * @param activityId          节点id
     * @param processDefinitionId 流程定义id
     * @param customPropertyName  属性名
     * @return
     */
    @Override
    public String getSingleCustomProperty(String activityId, String processDefinitionId, String customPropertyName) {
        List<ExtensionElement> customProperty = this.getCustomProperty(activityId, processDefinitionId, customPropertyName);
        return getSingleCustomPropertyValue(customProperty);
    }

    private String getSingleCustomPropertyValue(List<ExtensionElement> customProperty) {
        String value = null;
        if (CollectionUtils.isNotEmpty(customProperty)) {
            ExtensionElement extensionElement = customProperty.get(0);
            if (extensionElement != null) {
                value = extensionElement.getElementText();
            }
        }
        return value;
    }

    @Override
    public String getSingleCustomProperty(String activityId, BpmnModel bpmnModel, String customPropertyName) {
        List<ExtensionElement> customProperty = this.getCustomProperty(activityId, bpmnModel, customPropertyName);
        return getSingleCustomPropertyValue(customProperty);
    }

    @Override
    public List<ExtensionElement> getCustomProperty(String activityId, BpmnModel bpmnModel, String customPropertyName) {
        FlowElement flowElement = this.getFlowElementByActivityIdAndProcessDefinitionId(activityId, bpmnModel);
        return getExtensionElements(flowElement, customPropertyName);
    }

    private List<ExtensionElement> getExtensionElements(FlowElement flowElement, String customPropertyName) {
        if (flowElement != null && flowElement instanceof UserTask) {
            UserTask userTask = (UserTask) flowElement;
            Map<String, List<ExtensionElement>> extensionElements = userTask.getExtensionElements();
            if (MapUtils.isNotEmpty(extensionElements)) {
                List<ExtensionElement> values = extensionElements.get(customPropertyName);
                if (CollectionUtils.isNotEmpty(values)) {
                    return values;
                }
            }
        }
        return null;
    }

    /**
     * 获取自定义属性值
     *
     * @param activityId          节点id
     * @param processDefinitionId 流程定义id
     * @param customPropertyName  属性名
     * @return
     */
    @Override
    public List<ExtensionElement> getCustomProperty(String activityId, String processDefinitionId, String customPropertyName) {
        FlowElement flowElement = this.getFlowElementByActivityIdAndProcessDefinitionId(activityId, processDefinitionId);
        return getExtensionElements(flowElement, customPropertyName);
    }

    public List<ServiceTask> findServiceTasksByBpmnModel(BpmnModel bpmnModel) {
        List<ServiceTask> datas = new ArrayList<>();
        List<Process> processes = bpmnModel.getProcesses();
        processes.forEach(process -> {
            List<ServiceTask> userTasks = process.findFlowElementsOfType(ServiceTask.class);
            datas.addAll(userTasks);
        });
        return datas;
    }

    @Override
    public List<UserTask> findUserTasksByBpmnModel(BpmnModel bpmnModel) {
        List<UserTask> datas = new ArrayList<>();
        List<Process> processes = bpmnModel.getProcesses();
        processes.forEach(process -> {
            List<UserTask> userTasks = process.findFlowElementsOfType(UserTask.class);
            datas.addAll(userTasks);
        });
        return datas;
    }

    public boolean checkMultiInstance(TaskEntity task) {
        boolean flag = false;
        String processDefId = task.getProcessDefinitionId();
        String taskDefinitionKey = task.getTaskDefinitionKey();
        BpmnModel bpmnModel = this.getBpmnModelByProcessDefId(processDefId);
        List<UserTask> userTasks = this.findUserTasksByBpmnModel(bpmnModel);
        if (CollectionUtils.isNotEmpty(userTasks)) {
            for (UserTask userTask : userTasks) {
                if (userTask.getId().equals(taskDefinitionKey) && userTask.hasMultiInstanceLoopCharacteristics()) {
                    flag = true;
                    break;
                }
            }
        }
        return flag;
    }

    @Override
    public List<UserTask> findUserTasksByProcessDefId(String processDefId) {
        BpmnModel bpmnModel = this.getBpmnModelByProcessDefId(processDefId);
        return findUserTasksByBpmnModel(bpmnModel);
    }

    @Override
    public BpmnModel getBpmnModelByProcessDefId(String processDefId) {
        BpmnModel bpmnModel = null;
        if (customDeploymentCache.contains(processDefId)) {
            ProcessDefinitionCacheEntry processDefinitionCacheEntry = customDeploymentCache.get(processDefId);
            if(processDefinitionCacheEntry != null){
                bpmnModel = processDefinitionCacheEntry.getBpmnModel();
            }
        } else {
            bpmnModel = repositoryService.getBpmnModel(processDefId);
        }
        return bpmnModel;
    }

    /**
     * 获取end节点
     *
     * @return FlowElement
     */
    @Override
    public StartEvent findStartFlowElement(Process process) {
        List<StartEvent> startEvents = process.findFlowElementsOfType(StartEvent.class);
        if (CollectionUtils.isNotEmpty(startEvents)) {
            return startEvents.get(0);
        }
        return null;
    }

    /**
     * 获取end节点
     *
     * @param processDefId
     * @return FlowElement
     */
    @Override
    public List<EndEvent> findEndFlowElement(String processDefId) {
        BpmnModel bpmnModel = this.getBpmnModelByProcessDefId(processDefId);
        if (bpmnModel != null) {
            Process process = bpmnModel.getMainProcess();
            return process.findFlowElementsOfType(EndEvent.class);
        } else {
            return null;
        }
    }

    /**
     * 通过名称获取节点
     *
     * @param processDefId 流程定义id
     * @param name         节点名称
     * @return
     */
    @Override
    public Activity findActivityByName(String processDefId, String name) {
        Activity activity = null;
        BpmnModel bpmnModel = this.getBpmnModelByProcessDefId(processDefId);
        Process process = bpmnModel.getMainProcess();
        Collection<FlowElement> list = process.getFlowElements();
        for (FlowElement f : list) {
            if (StringUtils.isNotBlank(name)) {
                if (name.equals(f.getName())) {
                    activity = (Activity) f;
                    break;
                }
            }
        }
        return activity;
    }

    @Override
    public Activity findActivityByBpmnModelAndId(BpmnModel bpmnModel, String activityId) {
        Activity activity = null;
        Process process = bpmnModel.getMainProcess();
        Collection<FlowElement> list = process.getFlowElements();
        for (FlowElement f : list) {
            if (StringUtils.isNotBlank(activityId)) {
                if (activityId.equals(f.getId())) {
                    activity = (Activity) f;
                    break;
                }
            }
        }
        return activity;
    }

    @Override
    public List<FlowElement> findFlowElementByIds(BpmnModel bpmnModel, List<String> activityIds) {
        List<FlowElement> flowElements = new ArrayList<>();
        Process process = bpmnModel.getMainProcess();
        Collection<FlowElement> list = process.getFlowElements();
        for (FlowElement f : list) {
            if (CollectionUtils.isNotEmpty(activityIds)) {
                if (activityIds.contains(f.getId())) {
                    flowElements.add(f);
                }
            }
        }
        return flowElements;
    }

    @Override
    public Activity findActivityById(String processDefId, String activityId) {
        Activity activity = null;
        BpmnModel bpmnModel = this.getBpmnModelByProcessDefId(processDefId);
        Process process = bpmnModel.getMainProcess();
        Collection<FlowElement> list = process.getFlowElements();
        for (FlowElement f : list) {
            if (StringUtils.isNotBlank(activityId)) {
                if (activityId.equals(f.getId())) {
                    activity = (Activity) f;
                    break;
                }
            }
        }
        return activity;
    }

    public List<FlowNode> findFlowNodes(String processDefId) {
        List<FlowNode> flowNodes = new ArrayList<>();
        BpmnModel bpmnModel = this.getBpmnModelByProcessDefId(processDefId);
        Process process = bpmnModel.getMainProcess();
        Collection<FlowElement> list = process.getFlowElements();
        list.forEach(flowElement -> {
            if (flowElement instanceof FlowNode) {
                flowNodes.add((FlowNode) flowElement);
            }
        });
        return flowNodes;
    }

    @Override
    public GraphicInfo getGraphicInfo(BpmnModel bpmnModel, String activityId) {
        return bpmnModel.getGraphicInfo(activityId);
    }
}
