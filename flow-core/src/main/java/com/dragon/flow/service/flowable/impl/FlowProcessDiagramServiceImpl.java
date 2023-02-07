package com.dragon.flow.service.flowable.impl;

import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.enm.flowable.task.NodeStatusEnum;
import com.dragon.flow.enm.flowable.task.NodeTypeEnum;
import com.dragon.flow.exception.FlowException;
import com.dragon.flow.juel.IExpressionService;
import com.dragon.flow.model.flowable.ExtendHisprocinst;
import com.dragon.flow.model.org.Personal;
import com.dragon.flow.service.flowable.IBpmnModelService;
import com.dragon.flow.service.flowable.IExtendHisprocinstService;
import com.dragon.flow.service.flowable.IFlowProcessDiagramService;
import com.dragon.flow.service.org.IPersonalService;
import com.dragon.tools.utils.DurationUtils;
import com.dragon.flow.vo.flowable.model.HighLightedNodeVo;
import com.dragon.flow.vo.flowable.task.ActivityVo;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.flowable.bpmn.constants.BpmnXMLConstants;
import org.flowable.bpmn.model.*;
import org.flowable.common.engine.impl.de.odysseus.el.misc.TypeConverter;
import org.flowable.engine.HistoryService;
import org.flowable.engine.RepositoryService;
import org.flowable.engine.RuntimeService;
import org.flowable.engine.history.HistoricActivityInstance;
import org.flowable.engine.impl.bpmn.behavior.SequentialMultiInstanceBehavior;
import org.flowable.engine.runtime.ProcessInstance;
import org.flowable.task.api.history.HistoricTaskInstance;
import org.flowable.ui.modeler.serviceapi.ModelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

/**
 * @program: flow
 * @description: 画流程图service实现
 * @author: Bruce.Liu
 * @create: 2021-05-13 11:23
 **/
@Slf4j
@Service
public class FlowProcessDiagramServiceImpl implements IFlowProcessDiagramService {
    @Autowired
    private RuntimeService runtimeService;
    @Autowired
    private HistoryService historyService;
    @Autowired
    private IExtendHisprocinstService extendHisprocinstService;
    @Autowired
    private IBpmnModelService bpmnModelService;
    @Autowired
    private IPersonalService personalService;
    @Autowired
    private IExpressionService expressionService;
    @Autowired
    private TypeConverter typeConverter;
    @Autowired
    private CacheManager cacheManager;
    @Autowired
    private RepositoryService repositoryService;
    @Autowired
    private ModelService modelService;

    @Override
    public HighLightedNodeVo createCacheHighLightedNodeVoByProcessInstanceId(String processInstanceId) {
        HighLightedNodeVo highLightedNodeVo = this.findHighLightedNodeVoByProcessInstanceId(processInstanceId);
        Cache cache = cacheManager.getCache(FlowConstant.CACHE_PROCESS_HIGHLIGHTEDNODES);
        cache.put(processInstanceId, highLightedNodeVo);
        return highLightedNodeVo;
    }

    private HighLightedNodeVo findHighLightedNodeVoByProcessInstanceId(String processInstanceId) {
        ProcessInstance processInstance = runtimeService.createProcessInstanceQuery().processInstanceId(processInstanceId).singleResult();
        List<String> activeActivityIds = new ArrayList<>();
        List<String> highLightedFlows = new ArrayList<>();
        List<HistoricActivityInstance> historicSquenceFlows = historyService.createHistoricActivityInstanceQuery()
                .processInstanceId(processInstanceId).activityType(BpmnXMLConstants.ELEMENT_SEQUENCE_FLOW).list();
        historicSquenceFlows.forEach(historicActivityInstance -> highLightedFlows.add(historicActivityInstance.getActivityId()));
        String processDefinitionId = null;
        String modelName = null;
        if (processInstance == null) {
            ExtendHisprocinst extendHisprocinst = extendHisprocinstService.findExtendHisprocinstByProcessInstanceId(processInstanceId);
            processDefinitionId = extendHisprocinst.getProcessDefinitionId();
            List<HistoricActivityInstance> historicEnds = historyService.createHistoricActivityInstanceQuery()
                    .processInstanceId(processInstanceId).activityType(BpmnXMLConstants.ELEMENT_EVENT_END).list();
            List<String> finalActiveActivityIds = activeActivityIds;
            historicEnds.forEach(historicActivityInstance -> finalActiveActivityIds.add(historicActivityInstance.getActivityId()));
            modelName = extendHisprocinst.getProcessName();
        } else {
            processDefinitionId = processInstance.getProcessDefinitionId();
            activeActivityIds = runtimeService.getActiveActivityIds(processInstanceId);
            modelName = processInstance.getName();
        }
        BpmnModel bpmnModel = repositoryService.getBpmnModel(processDefinitionId);
        byte[] bpmnXML = modelService.getBpmnXML(bpmnModel);
        String modelXml = new String(bpmnXML, StandardCharsets.UTF_8);
        return new HighLightedNodeVo(highLightedFlows, activeActivityIds, modelXml, modelName);
    }

    @Override
    public HighLightedNodeVo getHighLightedNodeVoByProcessInstanceId(String processInstanceId) {
        Cache cache = cacheManager.getCache(FlowConstant.CACHE_PROCESS_HIGHLIGHTEDNODES);
        Cache.ValueWrapper valueWrapper = cache.get(processInstanceId);
        if (valueWrapper != null && valueWrapper.get() != null) {
            Object o = valueWrapper.get();
            if (o instanceof HighLightedNodeVo) {
                return (HighLightedNodeVo) o;
            }
        }
        HighLightedNodeVo highLightedNodeVo = this.findHighLightedNodeVoByProcessInstanceId(processInstanceId);
        cache.put(processInstanceId, highLightedNodeVo);
        return highLightedNodeVo;
    }

    @Override
    public ActivityVo getOneActivityVoByProcessInstanceIdAndActivityId(String processInstanceId, String activityId) {
        ActivityVo vo = null;
        if (StringUtils.isNotBlank(processInstanceId) && StringUtils.isNotBlank(activityId)) {
            Cache cache = cacheManager.getCache(FlowConstant.CACHE_PROCESS_ACTIVITYS);
            String key = processInstanceId + "-" + activityId;
            Cache.ValueWrapper valueWrapper = cache.get(key);
            if (valueWrapper != null && valueWrapper.get() != null) {
                Object o = valueWrapper.get();
                if (o instanceof ActivityVo) {
                    return (ActivityVo) o;
                }
            }
            List<HistoricTaskInstance> historicTaskInstances = historyService.createHistoricTaskInstanceQuery()
                    .processInstanceId(processInstanceId).taskDefinitionKey(activityId)
                    .orderByTaskCreateTime().desc().list();
            ExtendHisprocinst extendHisprocinst = extendHisprocinstService.findExtendHisprocinstByProcessInstanceId(processInstanceId);
            HistoricTaskInstance historicTaskInstance = null;
            if (CollectionUtils.isNotEmpty(historicTaskInstances)) {
                for (HistoricTaskInstance hisTask : historicTaskInstances) {
                    if (hisTask.getEndTime() == null) {
                        historicTaskInstance = hisTask;
                        break;
                    }
                }
                if (historicTaskInstance == null) {
                    historicTaskInstance = historicTaskInstances.get(0);
                }
            }
            BpmnModel bpmnModel = bpmnModelService.getBpmnModelByProcessDefId(extendHisprocinst.getProcessDefinitionId());
            Activity activity = bpmnModelService.findActivityByBpmnModelAndId(bpmnModel, activityId);
            if (activity instanceof UserTask) {
                UserTask userTask = (UserTask) activity;
                if (historicTaskInstance == null) {
                    vo = this.setUnStartTaskNodeInfo(userTask, bpmnModel, extendHisprocinst);
                    vo.setStatus(NodeStatusEnum.PENDING.getDescription());
                } else {
                    if (this.checkUserTaskExist(processInstanceId, bpmnModel, userTask)) {
                        vo = this.setUserTask(historicTaskInstances, historicTaskInstance, userTask, bpmnModel, extendHisprocinst);
                    } else {
                        vo = this.setUnStartTaskNodeInfo(userTask, bpmnModel, extendHisprocinst);
                        vo.setStatus(NodeStatusEnum.PENDING.getDescription());
                    }
                }
            } else if (activity instanceof ServiceTask) {

            }
            cache.put(key, vo);
        }
        return vo;
    }

    private boolean checkUserTaskExist(String processInstanceId, BpmnModel bpmnModel, UserTask userTask) {
        boolean flag = false;
        List<HistoricActivityInstance> historicSquenceFlows = historyService.createHistoricActivityInstanceQuery()
                .processInstanceId(processInstanceId).activityType(BpmnXMLConstants.ELEMENT_SEQUENCE_FLOW).list();
        List<String> squenceFlowIds = historicSquenceFlows.stream().map(HistoricActivityInstance::getActivityId).collect(Collectors.toList());
        List<FlowElement> flowElements = bpmnModelService.findFlowElementByIds(bpmnModel, squenceFlowIds);
        for (FlowElement flowElement : flowElements) {
            SequenceFlow sequenceFlow = (SequenceFlow) flowElement;
            FlowElement sourceFlowElement = sequenceFlow.getSourceFlowElement();
            FlowElement targetFlowElement = sequenceFlow.getTargetFlowElement();
            if (userTask.getId().equals(sourceFlowElement.getId()) || userTask.getId().equals(targetFlowElement.getId())) {
                flag = true;
                break;
            }
        }
        return flag;
    }

    @Override
    public List<ActivityVo> getProcessActivityVosByProcessInstanceId(String processInstanceId) {
        Cache cache = cacheManager.getCache(FlowConstant.CACHE_PROCESS_ACTIVITYS);
        Cache.ValueWrapper valueWrapper = cache.get(processInstanceId);
        if (valueWrapper != null && valueWrapper.get() != null) {
            Object o = valueWrapper.get();
            if (o instanceof List) {
                return (List<ActivityVo>) o;
            }
        }
        List<ActivityVo> datas = new ArrayList<>();
        ExtendHisprocinst extendHisprocinst = extendHisprocinstService.findExtendHisprocinstByProcessInstanceId(processInstanceId);
        if (extendHisprocinst == null) {
            throw new FlowException(String.format("通过流程实例ID【%s】未找到扩展流程实例历史数据！", processInstanceId));
        }
        BpmnModel bpmnModel = bpmnModelService.getBpmnModelByProcessDefId(extendHisprocinst.getProcessDefinitionId());
        List<UserTask> userTasks = bpmnModelService.findUserTasksByBpmnModel(bpmnModel);
        if (CollectionUtils.isNotEmpty(userTasks)) {
            List<HistoricTaskInstance> historicTaskInstances = historyService.createHistoricTaskInstanceQuery().processInstanceId(processInstanceId).list();
            Map<String, HistoricTaskInstance> historicTaskInstanceMap = new HashMap<>();
            if (CollectionUtils.isNotEmpty(historicTaskInstances)) {
                historicTaskInstanceMap = historicTaskInstances.stream().collect(Collectors.toMap(HistoricTaskInstance::getTaskDefinitionKey, Function.identity(), (key1, key2) -> key2));
            }
            for (UserTask userTask : userTasks) {
                ActivityVo vo = null;
                if (!historicTaskInstanceMap.containsKey(userTask.getId())) {
                    vo = this.setUnStartTaskNodeInfo(userTask, bpmnModel, extendHisprocinst);
                    vo.setStatus(NodeStatusEnum.PENDING.getDescription());
                } else {
                    HistoricTaskInstance historicTaskInstance = historicTaskInstanceMap.get(userTask.getId());
                    vo = this.setUserTask(historicTaskInstances, historicTaskInstance, userTask, bpmnModel, extendHisprocinst);
                }
                datas.add(vo);
            }
        }
        cache.put(processInstanceId, datas);
        return datas;
    }

    private ActivityVo setUserTask(List<HistoricTaskInstance> historicTaskInstances, HistoricTaskInstance historicTaskInstance, UserTask userTask, BpmnModel bpmnModel, ExtendHisprocinst extendHisprocinst) {
        ActivityVo vo = null;
        if (historicTaskInstance != null && historicTaskInstance.getEndTime() == null) {
            String assignee = historicTaskInstance.getAssignee();
            vo = this.setUnStartTaskNodeInfo(userTask, bpmnModel, extendHisprocinst, assignee);
            List<Date> createTimes = new ArrayList<>();
            historicTaskInstances.forEach(hisTask -> createTimes.add(hisTask.getCreateTime()));
            vo.setStartDate(Collections.min(createTimes));
            vo.setStatus(NodeStatusEnum.PROCESSING.getDescription());
        } else {
            try {
                vo = this.setXYWH(userTask, bpmnModel, extendHisprocinst);
                List<String> personalCodes = new ArrayList<>();
                List<Date> createTimes = new ArrayList<>();
                List<Date> endTimes = new ArrayList<>();
                if (FlowConstant.FLOW_SUBMITTER.equals(userTask.getName())) {
                    personalCodes.add(extendHisprocinst.getCurrentUserCode());
                } else {
                    historicTaskInstances.forEach(hisTask -> {
                        createTimes.add(hisTask.getCreateTime());
                        endTimes.add(hisTask.getEndTime());
                        String assignee = hisTask.getAssignee();
                        if (StringUtils.isNotBlank(assignee)) {
                            personalCodes.add(assignee);
                        }
                    });
                }
                if (CollectionUtils.isNotEmpty(personalCodes)) {
                    List<Personal> personals = personalService.getPersonalsByCodes(personalCodes);
                    if (CollectionUtils.isNotEmpty(personals)) {
                        this.getApplyNames(personals, vo);
                    }
                }
                if (CollectionUtils.isNotEmpty(createTimes) && createTimes.size() > 0) {
                    vo.setStartDate(Collections.min(createTimes));
                }
                if (CollectionUtils.isNotEmpty(endTimes) && endTimes.size() > 0) {
                    vo.setEndDate(Collections.max(endTimes));
                }
                vo.setStatus(NodeStatusEnum.FINISH.getDescription());
                long duration = 0;
                if (userTask.getBehavior() instanceof SequentialMultiInstanceBehavior) {
                    for (HistoricTaskInstance taskInstance : historicTaskInstances) {
                        if (taskInstance.getDurationInMillis() != null) {
                            if (taskInstance.getDurationInMillis() != null) {
                                duration += taskInstance.getDurationInMillis();
                            }
                        }
                    }
                } else {
                    duration = historicTaskInstance.getDurationInMillis();
                }
                vo.setDuration(DurationUtils.getDuration(duration));
            } catch (Exception e) {
                e.printStackTrace();
                log.error("查询用户信息失败", e);
            }
        }
        return vo;
    }


    private ActivityVo setXYWH(UserTask userTask, BpmnModel bpmnModel, ExtendHisprocinst extendHisprocinst) {
        GraphicInfo graphicInfo = bpmnModelService.getGraphicInfo(bpmnModel, userTask.getId());
        ActivityVo vo = new ActivityVo();
        vo.setId(userTask.getId());
        vo.setX(graphicInfo.getX());
        vo.setY(graphicInfo.getY());
        vo.setWidth(graphicInfo.getWidth());
        vo.setHeight(graphicInfo.getHeight());
        vo.setDocumentation(userTask.getDocumentation());
        vo.setName(userTask.getName());
        vo.setProceInsId(extendHisprocinst.getProcessInstanceId());
        vo.setProceDefId(extendHisprocinst.getProcessDefinitionId());
        vo.setTaskDefKey(userTask.getId());
        try {
            String taskType = bpmnModelService.getSingleCustomProperty(userTask.getId(), bpmnModel, FlowConstant.NODE_TYPE);
            if (StringUtils.isNotBlank(taskType)) {
                if (taskType.equals(NodeTypeEnum.NOTIFY.getType())) {
                    vo.setNodeType(NodeTypeEnum.NOTIFY.getDescription());
                } else if (taskType.equals(NodeTypeEnum.NOAPPROVE.getType())) {
                    vo.setNodeType(NodeTypeEnum.NOAPPROVE.getDescription());
                } else if (taskType.equals(NodeTypeEnum.COORDINATION.getType())) {
                    vo.setNodeType(NodeTypeEnum.COORDINATION.getDescription());
                } else if (taskType.equals(NodeTypeEnum.REVIEW.getType())) {
                    vo.setNodeType(NodeTypeEnum.REVIEW.getDescription());
                } else if (taskType.equals(NodeTypeEnum.APPLYING.getType())) {
                    vo.setNodeType(NodeTypeEnum.APPLYING.getDescription());
                } else {
                    vo.setNodeType(NodeTypeEnum.APPLY.getDescription());
                }
            } else {
                vo.setNodeType(NodeTypeEnum.APPLY.getDescription());
            }
        } catch (Exception e) {
            log.error("查看节点类型报错", e);
            e.printStackTrace();
        }
        return vo;
    }

    private ActivityVo setUnStartTaskNodeInfo(UserTask userTask, BpmnModel bpmnModel,
                                              ExtendHisprocinst extendHisprocinst) {
        return this.setUnStartTaskNodeInfo(userTask, bpmnModel, extendHisprocinst, null);
    }

    private ActivityVo setUnStartTaskNodeInfo(UserTask userTask, BpmnModel bpmnModel,
                                              ExtendHisprocinst extendHisprocinst, String assignee) {
        ActivityVo vo = this.setXYWH(userTask, bpmnModel, extendHisprocinst);
        try {
            if (StringUtils.isNotBlank(assignee)){
                Personal personal = personalService.getPersonalByCode(assignee);
                List<Personal> personals = new ArrayList<>();
                personals.add(personal);
                this.getApplyNames(personals, vo);
            }else {
                if (StringUtils.isNotBlank(userTask.getAssignee())) {
                    MultiInstanceLoopCharacteristics loopCharacteristics = userTask.getLoopCharacteristics();
                    if (loopCharacteristics == null) {
                        String expressionValue = null;
                        if (FlowConstant.FLOW_SUBMITTER.equals(userTask.getName())) {
                            expressionValue = extendHisprocinst.getCurrentUserCode();
                        } else {
                            String processInstanceId = extendHisprocinst.getProcessInstanceId();
                            expressionValue = expressionService.getStrValue(processInstanceId, userTask.getAssignee());
                        }
                        if (StringUtils.isNotBlank(expressionValue)) {
                            List<Personal> personals = null;
                            if (StringUtils.contains(expressionValue, ",")) {
                                String[] assignees = expressionValue.split(",");
                                List<String> as = Arrays.asList(assignees);
                                try {
                                    if (CollectionUtils.isNotEmpty(as)) {
                                        personals = personalService.getPersonalsByCodes(as);
                                    }
                                } catch (Exception e) {
                                    log.error("查询知会的节点信息失败", e);
                                }
                            } else {
                                personals = new ArrayList<>();
                                Personal personal = personalService.getPersonalByCode(expressionValue);
                                if (personal != null) {
                                    personals.add(personal);
                                }
                            }
                            this.getApplyNames(personals, vo);
                        }
                    } else {
                        String inputDataItem = loopCharacteristics.getInputDataItem();
                        String processInstanceId = extendHisprocinst.getProcessInstanceId();
                        Object value = expressionService.getValue(processInstanceId, inputDataItem);
                        List<String> userCodes = null;
                        if (value instanceof ArrayList) {
                            userCodes = typeConverter.convert(value, ArrayList.class);
                        } else if (value instanceof HashSet) {
                            HashSet hashSet = typeConverter.convert(value, HashSet.class);
                            userCodes = new ArrayList<String>(hashSet);
                        }
                        if (CollectionUtils.isNotEmpty(userCodes)) {
                            if (CollectionUtils.isNotEmpty(userCodes)) {
                                List<Personal> personals = personalService.getPersonalsByCodes(userCodes);
                                this.getApplyNames(personals, vo);
                            }
                        }
                    }
                } else {
                    List<String> candidateUsers = userTask.getCandidateUsers();
                    List<String> candidateGroups = userTask.getCandidateGroups();
                    if (CollectionUtils.isNotEmpty(candidateUsers)) {
                        List<Personal> personals = personalService.getPersonalsByCodes(candidateUsers);
                        this.getApplyNames(personals, vo);
                    } else if (CollectionUtils.isNotEmpty(candidateGroups)) {
                        if (CollectionUtils.isNotEmpty(candidateGroups)) {
                            List<Personal> personals = personalService.getPersonalsByRoleSns(candidateGroups);
                            this.getApplyNames(personals, vo);
                        }
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
            log.error("解析节点信息出错", e);
        }
        return vo;
    }

    private void getApplyNames(List<Personal> personals, ActivityVo vo) {
        StringBuilder names = new StringBuilder("");
        if (CollectionUtils.isNotEmpty(personals)) {
            for (Personal personal : personals) {
                if (personal != null) {
                    names.append(personal.getName()).append(";");
                }
            }
        }
        if (names.length() > 0) {
            names = names.deleteCharAt(names.length() - 1);
        }
        vo.setApprover(names.toString());
    }
}
