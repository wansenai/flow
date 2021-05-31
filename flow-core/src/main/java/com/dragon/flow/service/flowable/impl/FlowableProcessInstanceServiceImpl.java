package com.dragon.flow.service.flowable.impl;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.core.toolkit.IdWorker;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.enm.flowable.runtime.CommentTypeEnum;
import com.dragon.flow.enm.flowable.runtime.ProcessStatusEnum;
import com.dragon.flow.enm.flowable.runtime.StartVariableEnum;
import com.dragon.flow.mapper.flowable.IFlowableProcessInstanceMapper;
import com.dragon.flow.model.flowable.CommentInfo;
import com.dragon.flow.model.flowable.ExtendHisprocinst;
import com.dragon.flow.model.flowable.ExtendProcinst;
import com.dragon.flow.model.org.Personal;
import com.dragon.flow.service.flowable.*;
import com.dragon.flow.service.org.IPersonalService;
import com.dragon.flow.utils.DurationUtils;
import com.dragon.flow.utils.ElUtils;
import com.dragon.flow.vo.flowable.processinstance.InstanceQueryParamsVo;
import com.dragon.flow.vo.flowable.processinstance.ProcessInstanceVo;
import com.dragon.flow.vo.flowable.runtime.StartProcessInstanceVo;
import com.dragon.flow.vo.flowable.processinstance.EndVo;
import com.dragon.flow.vo.flowable.task.ApproverVo;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import com.dragon.tools.utils.FastJsonUtils;
import com.dragon.tools.vo.ReturnVo;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.collections.MapUtils;
import org.apache.commons.lang.StringUtils;
import org.flowable.bpmn.model.*;
import org.flowable.engine.*;
import org.flowable.engine.history.HistoricProcessInstance;
import org.flowable.engine.repository.ProcessDefinition;
import org.flowable.engine.runtime.Execution;
import org.flowable.engine.runtime.ProcessInstance;
import org.flowable.identitylink.api.IdentityLink;
import org.flowable.task.api.Task;
import org.flowable.task.service.impl.persistence.entity.TaskEntity;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.*;
import java.util.stream.Collectors;

/**
 * @program: flow
 * @description: 流程实例service实现类
 * @author: Bruce.Liu
 * @create: 2021-04-20 14:47
 **/
@Slf4j
@Service
public class FlowableProcessInstanceServiceImpl extends BaseProcessService implements IFlowableProcessInstanceService {

    @Autowired
    private RepositoryService repositoryService;
    @Autowired
    private HistoryService historyService;
    @Autowired
    private IPersonalService personalService;
    @Autowired
    private ObjectMapper objectMapper;
    @Autowired
    private IBpmnModelService bpmnModelService;
    @Autowired
    private IdentityService identityService;
    @Autowired
    private RuntimeService runtimeService;
    @Autowired
    private IExtendHisprocinstService extendHisprocinstService;
    @Autowired
    private IExtendProcinstService extendProcinstService;
    @Autowired
    private IFlowableProcessInstanceMapper flowableProcessInstanceMapper;
    @Autowired
    private TaskService taskService;
    @Autowired
    private CacheManager cacheManager;

    @Override
    public ReturnVo<String> stopProcess(EndVo endVo) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        TaskEntity task = (TaskEntity) taskService.createTaskQuery().taskId(endVo.getTaskId()).singleResult();
        ProcessInstance processInstance = runtimeService.createProcessInstanceQuery().processInstanceId(endVo.getProcessInstanceId()).singleResult();
        if (processInstance != null){
            ProcessInstance subPprocessInstance = runtimeService.createProcessInstanceQuery().superProcessInstanceId(endVo.getProcessInstanceId()).singleResult();
            List<EndEvent> disActivitys = null;
            if (subPprocessInstance != null){
                disActivitys = bpmnModelService.findEndFlowElement(subPprocessInstance.getProcessDefinitionId());
            } else {
                disActivitys = bpmnModelService.findEndFlowElement(processInstance.getProcessDefinitionId());
            }
            if (CollectionUtils.isNotEmpty(disActivitys)){
                String distFilwElementId = disActivitys.get(0).getId();
                List<String> executionIds = new ArrayList<>();
                if (bpmnModelService.checkActivitySubprocessByActivityId(task.getProcessDefinitionId(),
                        distFilwElementId)
                        && bpmnModelService.checkActivitySubprocessByActivityId(task.getProcessDefinitionId(),
                        task.getTaskDefinitionKey())){
                    Execution executionTask = runtimeService.createExecutionQuery().executionId(task.getExecutionId()).singleResult();
                    String parentId = executionTask.getParentId();
                    List<Execution> executions = runtimeService.createExecutionQuery().parentId(parentId).list();
                    executions.forEach(execution -> executionIds.add(execution.getId()));
                    this.moveExecutionsToSingleActivityId(executionIds, distFilwElementId);
                } else {
                    List<Execution> executions = runtimeService.createExecutionQuery().parentId(task.getProcessInstanceId()).list();
                    executions.forEach(execution -> executionIds.add(execution.getId()));
                    this.moveExecutionsToSingleActivityId(executionIds, distFilwElementId);
                }
                this.evictHighLightedNodeCache(task.getProcessInstanceId());
                this.evictOneActivityVoCache(task.getProcessInstanceId(), task.getTaskDefinitionKey());
            }
            endVo.setActivityId(task.getTaskDefinitionKey());
            endVo.setActivityName(task.getName());
            this.addFlowCommentInfoAndProcessStatus(endVo);
        } else {
            returnVo = new ReturnVo<>(ReturnCode.FAIL, "未找到流程实例，请确认!");
        }
        return returnVo;
    }

    /**
     * 执行跳转
     */
    protected void moveExecutionsToSingleActivityId(List<String> executionIds, String activityId) {
        runtimeService.createChangeActivityStateBuilder()
                .moveExecutionsToSingleActivityId(executionIds, activityId)
                .changeState();
    }

    @Override
    public PagerModel<ProcessInstanceVo> findMyProcessinstancesPagerModel(InstanceQueryParamsVo paramsVo, Query query) {
        IPage<ProcessInstanceVo> queryPage = new Page<>(query.getPageNum(), query.getPageSize());
        IPage<ProcessInstanceVo> page = flowableProcessInstanceMapper.findMyProcessinstancesPagerModel(queryPage, paramsVo);
        List<ProcessInstanceVo> processInstanceVos = page.getRecords();
        this.setMyProcessinstances(processInstanceVos);
        return new PagerModel<>(page.getTotal(), processInstanceVos);
    }

    private void setMyProcessinstances(List<ProcessInstanceVo> processInstanceVos) {
        if (CollectionUtils.isNotEmpty(processInstanceVos)){
            processInstanceVos.forEach(processInstanceVo -> {
                processInstanceVo.setProcessStatusName(ProcessStatusEnum.getEnumMsgByType(processInstanceVo.getProcessStatus()));
                Date startTime = processInstanceVo.getStartTime();
                Date endTime = processInstanceVo.getEndTime();
                if (processInstanceVo.getEndTime() == null){
                    List<Task> list = taskService.createTaskQuery().processInstanceId(processInstanceVo.getProcessInstanceId()).list();
                    List<String> userCodes = new ArrayList<>();
                    List<String> roleSns = new ArrayList<>();
                    if (CollectionUtils.isNotEmpty(list)){
                        list.forEach(task -> {
                            if (StringUtils.isNotBlank(task.getAssignee())){
                                userCodes.add(task.getAssignee());
                            }
                            List<IdentityLink> identityLinksForTask = taskService.getIdentityLinksForTask(task.getId());
                            if (CollectionUtils.isNotEmpty(identityLinksForTask)){
                                identityLinksForTask.forEach(identityLink -> {
                                    String userCode = identityLink.getUserId();
                                    String roleSn = identityLink.getGroupId();
                                    if (StringUtils.isNotBlank(userCode)){
                                        userCodes.add(userCode);
                                    }
                                    if (StringUtils.isNotBlank(roleSn)){
                                        roleSns.add(roleSn);
                                    }
                                });
                            }
                        });
                    }
                    List<Personal> personals = new ArrayList<>();
                    if (CollectionUtils.isNotEmpty(userCodes)){
                        List<Personal> ps = personalService.getPersonalsByCodes(userCodes);
                        personals.addAll(ps);
                    }
                    if (CollectionUtils.isNotEmpty(roleSns)){
                        List<Personal> rs = personalService.getPersonalsByRoleSns(roleSns);
                        personals.addAll(rs);
                    }
                    List<ApproverVo> approverVoList = new ArrayList<>();
                    if (CollectionUtils.isNotEmpty(personals)){
                        personals.forEach(personal ->
                                approverVoList.add(new ApproverVo(ApproverVo.USER, personal.getCode(), personal.getName(), personal.getMobile()))
                        );
                    }
                    processInstanceVo.setCurrentAssignees(approverVoList);
                    endTime = new Date();
                }
                long duration = endTime.getTime() - startTime.getTime();
                processInstanceVo.setTotalTime(DurationUtils.getDuration(duration));
            });
        }
    }

    @Override
    public ReturnVo<ProcessInstance> startProcessInstanceByKey(StartProcessInstanceVo params) {
        ReturnVo<ProcessInstance> returnVo = null;
        Cache cache = cacheManager.getCache(FlowConstant.CACHE_START_PROCESSINSTANCE);
        String key = FastJsonUtils.objectToJson(params);
        if (cache.get(key) != null){
            returnVo = new ReturnVo<>(ReturnCode.FAIL, "请勿重复提交流程!");
            return returnVo;
        } else {
            cache.put(key, 1);
        }
        if (StringUtils.isNotBlank(params.getProcessDefinitionKey())
                && StringUtils.isNotBlank(params.getBusinessKey())
                && StringUtils.isNotBlank(params.getAppSn())){
            ProcessDefinition processDefinition = repositoryService.createProcessDefinitionQuery().processDefinitionKey(params.getProcessDefinitionKey())
                    .latestVersion().singleResult();
            if (processDefinition != null && processDefinition.isSuspended()){
                returnVo = new ReturnVo<>(ReturnCode.FAIL, "此流程已经挂起,请联系系统管理员!");
                return returnVo;
            }
            String creator = params.getCreator();
            if (StringUtils.isBlank(creator) && StringUtils.isNotBlank(params.getCurrentUserCode())){
                creator = params.getCurrentUserCode();
                params.setCreator(creator);
            }
            if (StringUtils.isNotBlank(creator) && StringUtils.isBlank(params.getCurrentUserCode())){
                params.setCurrentUserCode(params.getCreator());
            }
            Personal personal = personalService.getPersonalByCode(params.getCurrentUserCode());
            if (personal == null){
                returnVo = new ReturnVo<>(ReturnCode.FAIL, "工号为：" + params.getCurrentUserCode() + "的当前发起人用户匹配不到，请确认!");
                return returnVo;
            } else {
                if (StringUtils.isBlank(params.getDeptId())){
                    params.setDeptId(personal.getDeptId());
                }
            }
            this.getStartVariables(params, personal);
            returnVo = this.checkProcessInstance(params);
            if (!returnVo.isSuccess()){
                return returnVo;
            }
            identityService.setAuthenticatedUserId(creator);
            ProcessInstance processInstance = runtimeService.createProcessInstanceBuilder()
                    .processDefinitionKey(params.getProcessDefinitionKey().trim())
                    .name(params.getFormName().trim())
                    .businessKey(params.getBusinessKey().trim())
                    .variables(params.getVariables())
                    .tenantId(params.getAppSn().trim())
                    .start();
            this.createExtendProcinst(params, processInstance, creator);
            CommentInfo commentInfo = new CommentInfo(CommentTypeEnum.TJ.name(), creator, processInstance.getProcessInstanceId(), CommentTypeEnum.TJ.getName());
            BpmnModel bpmnModel = bpmnModelService.getBpmnModelByProcessDefId(processInstance.getProcessDefinitionId());
            StartEvent start = bpmnModelService.findStartFlowElement(bpmnModel.getMainProcess());
            if (start != null){
                commentInfo.setActivityId(start.getId());
                commentInfo.setActivityName(start.getName());
            }
            this.addFlowCommentInfo(commentInfo);
            returnVo.setData(processInstance);
        } else {
            returnVo = new ReturnVo<>(ReturnCode.FAIL, " Parameters should not be null");
        }
        identityService.setAuthenticatedUserId(null);
        return returnVo;
    }

    /**
     * 创建流程实例扩展表信息
     *
     * @param params          启动参数
     * @param processInstance 流程实例对象
     * @param creator         创建人
     * @throws Exception
     */
    private String createExtendProcinst(StartProcessInstanceVo params, ProcessInstance processInstance, String creator) {
        ExtendProcinst extendProcinst = new ExtendProcinst();
        extendProcinst.setCurrentUserCode(params.getCurrentUserCode());
        extendProcinst.setProcessInstanceId(processInstance.getId());
        extendProcinst.setProcessDefinitionId(processInstance.getProcessDefinitionId());
        extendProcinst.setProcessStatus(ProcessStatusEnum.SPZ.toString());
        extendProcinst.setProcessName(params.getFormName());
        extendProcinst.setModelKey(params.getProcessDefinitionKey());
        extendProcinst.setBusinessKey(params.getBusinessKey());
        extendProcinst.setTenantId(params.getAppSn());
        extendProcinst.setCurrentUserCode(params.getCurrentUserCode());
        extendProcinst.setCreator(creator);
        String processStatus = extendProcinst.getProcessStatus();
        HistoricProcessInstance historicProcessInstance = historyService.createHistoricProcessInstanceQuery().processInstanceId(processInstance.getProcessInstanceId()).singleResult();
        if (historicProcessInstance.getEndTime() != null){
            extendProcinst.setProcessStatus(ProcessStatusEnum.BJ.toString());
            extendProcinst.setProcessName(params.getFormName());
            extendProcinst.setBusinessKey(params.getBusinessKey());
            extendProcinst.setProcessDefinitionId(historicProcessInstance.getProcessDefinitionId());
            extendProcinst.setModelKey(params.getProcessDefinitionKey());
            extendProcinst.setTenantId(params.getAppSn());
            extendProcinst.setCurrentUserCode(params.getCurrentUserCode());
            extendProcinst.setId(IdWorker.get32UUID());
            extendProcinst.setCreateTime(new Date());
            extendProcinst.setUpdateTime(new Date());
            ExtendHisprocinst extendHisprocinst = new ExtendHisprocinst();
            BeanUtils.copyProperties(extendProcinst, extendHisprocinst);
            extendHisprocinstService.save(extendHisprocinst);
            processStatus = extendHisprocinst.getProcessStatus();
        } else {
            extendProcinstService.saveExtendProcinstAndHis(extendProcinst);
        }
        return processStatus;
    }

    /**
     * 判断条件参数是否设置过
     *
     * @param params 参数
     * @return
     */
    private ReturnVo<ProcessInstance> checkProcessInstance(StartProcessInstanceVo params) {
        ReturnVo<ProcessInstance> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        ProcessDefinition lastProcessDefinition = repositoryService.createProcessDefinitionQuery().latestVersion().processDefinitionKey(StringUtils.trim(params.getProcessDefinitionKey())).singleResult();
        if (lastProcessDefinition == null){
            returnVo.setMsg("【" + params.getProcessDefinitionKey() + "】流程定义未找到！");
            returnVo.setCode(ReturnCode.FAIL);
            log.error("【" + params.getProcessDefinitionKey() + "】流程定义未找到！");
            return returnVo;
        }
        List<UserTask> datas = bpmnModelService.findUserTasksByProcessDefId(lastProcessDefinition.getId());
        List<UserTask> userTasks = new ArrayList<>();
        if (CollectionUtils.isNotEmpty(datas)){
            userTasks = datas.stream().filter(userTask -> StringUtils.indexOf(userTask.getAssignee(), "${") != -1).collect(Collectors.toList());
        }
        List<String> elexps = new ArrayList<>();
        userTasks.forEach(userTask -> elexps.add(userTask.getAssignee()));
        Map<String, Object> variables = params.getVariables();
        Map<String, String> keys = new HashMap<>();
        variables.forEach((k, v) -> {
            if (v instanceof String){
                keys.put(k, k);
            } else if (v instanceof ObjectNode){
                ObjectNode node = (ObjectNode) v;
                Iterator<String> nodeKeys = node.fieldNames();
                while (nodeKeys.hasNext()) {
                    String nodeKey = nodeKeys.next();
                    String enumMsg = StartVariableEnum.getEnumMsgByCode(nodeKey);
                    String tempNodeKey = k + "." + nodeKey;
                    keys.put(tempNodeKey, enumMsg);
                }
            }
        });
        for (String assigneeEl : elexps) {
            if (StringUtils.isNotBlank(assigneeEl)){
                String assignee = ElUtils.getOriginalValue(assigneeEl);
                if (!keys.containsKey(assignee)){
                    String code = ElUtils.getSpotValue(assignee);
                    String enumMsg = StartVariableEnum.getEnumMsgByCode(code);
                    if (StringUtils.isNotBlank(enumMsg)){
                        returnVo = new ReturnVo<>(ReturnCode.FAIL, enumMsg + "的参数没有设置，请联系管理员!");
                    }
                    break;
                }
            }
        }
        return returnVo;
    }

    @Override
    public Map<String, Object> getStartVariables(StartProcessInstanceVo params, Personal personal) {
        Map<String, Object> variables = null;
        if (params.getVariables() == null){
            variables = new HashMap<>();
            params.setVariables(variables);
        } else {
            Map<String, Object> formMap = params.getVariables();
            if (!formMap.containsKey(StartVariableEnum.FORM.getCode())){
                ObjectNode formNode = objectMapper.createObjectNode();
                Map<String, Object> listMap = new HashMap<>();
                if (MapUtils.isNotEmpty(formMap)){
                    formMap.forEach((k, v) -> {
                        if (v instanceof java.util.List){
                            String key = StartVariableEnum.FORM.getCode() + "_" + k;
                            listMap.put(key, v);
                        } else if (v instanceof java.lang.String){
                            formNode.put(k, String.valueOf(v));
                        } else if (v instanceof Integer){
                            formNode.put(k, Integer.valueOf(v + ""));
                        } else if (v instanceof Float){
                            formNode.put(k, Float.valueOf(v + ""));
                        } else if (v instanceof Double){
                            formNode.put(k, Double.valueOf(v + ""));
                        } else if (v instanceof Long){
                            formNode.put(k, Long.valueOf(v + ""));
                        } else if (v instanceof BigDecimal){
                            formNode.put(k, new BigDecimal(v + ""));
                        } else {
                            String s = String.valueOf(v);
                            if (s.startsWith("0")){
                                formNode.put(k, s);
                            } else {
                                formNode.putPOJO(k, v);
                            }
                        }
                    });
                }
                formMap = new HashMap<>();
                params.setVariables(formMap);
                params.getVariables().put(StartVariableEnum.FORM.getCode(), formNode);
                if (MapUtils.isNotEmpty(listMap)){
                    listMap.forEach((k, v) -> params.getVariables().put(k, v));
                }
            }
            params.getVariables().put(FlowConstant.FLOW_SUBMITTER_VAR, "");
            params.getVariables().put(FlowConstant.FLOWABLE_SKIP_EXPRESSION_ENABLED, true);
            if (StringUtils.isBlank(params.getDeptId())){
                params.setDeptId(personal.getDeptId());
            }
            variables = params.getVariables();
        }
        return variables;
    }
}
