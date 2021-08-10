package com.dragon.flow.service.flowable;

import org.flowable.bpmn.model.Process;
import org.flowable.bpmn.model.*;
import org.flowable.task.service.impl.persistence.entity.TaskEntity;

import java.util.List;

/**
 * @Description: bpmnModel service
 * @Author: Bruce.liu
 * @Since:10:45 2021/05/24
 */
public interface IBpmnModelService {
    /**
     * 判断节点是不是子流程的节点
     * @param processDefId 流程定义id
     * @param activityId 节点id
     * @return
     */
    boolean checkActivitySubprocessByActivityId(String processDefId, String activityId);
    /**
     * 判断当前任务是不是多实例节点
     * @param task 当前任务
     * @return
     */
    boolean checkMultiInstance(TaskEntity task);

    /**
     * 获取任务节点的监听器列表
     *
     * @param activityId          节点id
     * @param processDefinitionId 流程定义id
     * @return
     */
    List<String> getStrUserTaskListeners(String activityId, String processDefinitionId);

    /**
     * 获取任务节点的监听器列表
     *
     * @param activityId          节点id
     * @param processDefinitionId 流程定义id
     * @return
     */
    List<FlowableListener> getUserTaskListeners(String activityId, String processDefinitionId);

    /**
     * 获取节点
     *
     * @param activityId 节点id
     * @param bpmnModel  model
     * @return
     */
    FlowElement getFlowElementByActivityIdAndProcessDefinitionId(String activityId, BpmnModel bpmnModel);

    /**
     * 获取节点
     *
     * @param activityId          节点id
     * @param processDefinitionId 流程定义id
     * @return
     */
    FlowElement getFlowElementByActivityIdAndProcessDefinitionId(String activityId, String processDefinitionId);

    /**
     * 获取自定义单个属性值
     *
     * @param activityId          节点id
     * @param processDefinitionId 流程定义id
     * @param customPropertyName  属性名
     * @return
     */
    String getSingleCustomProperty(String activityId, String processDefinitionId, String customPropertyName);

    /**
     * 获取自定义单个属性值
     *
     * @param activityId         节点id
     * @param bpmnModel          模型
     * @param customPropertyName 属性名
     * @return
     */
    String getSingleCustomProperty(String activityId, BpmnModel bpmnModel, String customPropertyName);

    /**
     * 获取自定义属性值
     *
     * @param activityId          节点id
     * @param processDefinitionId 流程定义id
     * @param customPropertyName  属性名
     * @return
     */
    List<ExtensionElement> getCustomProperty(String activityId, String processDefinitionId, String customPropertyName);

    /**
     * 获取自定义属性值
     *
     * @param activityId         节点id
     * @param bpmnModel          模型
     * @param customPropertyName 属性名
     * @return
     */
    List<ExtensionElement> getCustomProperty(String activityId, BpmnModel bpmnModel, String customPropertyName);

    /**
     * 获取ServiceTask
     * @param bpmnModel
     * @return
     */
    List<ServiceTask> findServiceTasksByBpmnModel(BpmnModel bpmnModel);
    /**
     * 获取UserTask
     *
     * @param bpmnModel bpmnModel
     * @return
     */
    List<UserTask> findUserTasksByBpmnModel(BpmnModel bpmnModel);

    /**
     * 获取UserTask 列表
     *
     * @param processDefId 流程定义id
     * @return
     */
    List<UserTask> findUserTasksByProcessDefId(String processDefId);

    /**
     * 通过流程定义id获取 BpmnModel
     *
     * @param processDefId 流程定义id
     * @return
     */
    BpmnModel getBpmnModelByProcessDefId(String processDefId);

    /**
     * 获取开始节点
     *
     * @param process 流程
     * @return FlowElement
     */
    StartEvent findStartFlowElement(Process process);

    /**
     * 获取end节点
     *
     * @param processDefId 流程定义id
     * @return FlowElement
     */
    List<EndEvent> findEndFlowElement(String processDefId);

    /**
     * 通过名称获取节点
     *
     * @param processDefId 流程定义id
     * @param name         节点名称
     * @return
     */
    Activity findActivityByName(String processDefId, String name);
    Activity findActivityById(String processDefId, String activityId);
    Activity findActivityByBpmnModelAndId(BpmnModel bpmnModel, String activityId);
    List<FlowElement> findFlowElementByIds(BpmnModel bpmnModel, List<String> activityIds) ;
    /**
     * 通过流程定义的id获取所有的节点信息
     * @param processDefId 流程定义的id
     * @return
     */
    List<FlowNode> findFlowNodes(String processDefId);

    /**
     * 获取节点的坐标
     * @param bpmnModel bpmnModel
     * @param activityId 节点id
     * @return
     */
    GraphicInfo getGraphicInfo(BpmnModel bpmnModel, String activityId) ;

}
