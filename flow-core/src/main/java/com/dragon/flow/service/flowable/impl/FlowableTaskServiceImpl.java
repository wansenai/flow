package com.dragon.flow.service.flowable.impl;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.dragon.flow.enm.flowable.runtime.CommentTypeEnum;
import com.dragon.flow.enm.flowable.runtime.ProcessStatusEnum;
import com.dragon.flow.exception.FlowException;
import com.dragon.flow.mapper.flowable.IFlowableTaskMapper;
import com.dragon.flow.service.flowable.BaseProcessService;
import com.dragon.flow.service.flowable.IFlowableTaskService;
import com.dragon.tools.utils.DurationUtils;
import com.dragon.flow.vo.flowable.task.CompleteTaskVo;
import com.dragon.flow.vo.flowable.task.TaskQueryParamsVo;
import com.dragon.flow.vo.flowable.task.TaskVo;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.common.UUIDGenerator;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import com.dragon.tools.vo.ReturnVo;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.collections.MapUtils;
import org.apache.commons.lang.StringUtils;
import org.flowable.engine.ManagementService;
import org.flowable.engine.TaskService;
import org.flowable.task.api.DelegationState;
import org.flowable.task.api.Task;
import org.flowable.task.service.impl.persistence.entity.TaskEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * @program: flow
 * @description: 流程任务服务
 * @author: Bruce.Liu
 * @create: 2021-04-22 22:55
 **/
@Slf4j
@Service
public class FlowableTaskServiceImpl extends BaseProcessService implements IFlowableTaskService {

    @Autowired
    private IFlowableTaskMapper flowableTaskMapper;
    @Autowired
    private TaskService taskService;
    @Autowired
    private ManagementService managementService;

    @Override
    public Long getAppingTaskCont(TaskQueryParamsVo params) {
        return flowableTaskMapper.getAppingTaskCont(params);
    }

    @Override
    public PagerModel<TaskVo> getAppingTasksPagerModel(TaskQueryParamsVo paramsvo, Query query) {
        IPage<TaskVo> queryPage = new Page<>(query.getPageNum(), query.getPageSize());
        IPage<TaskVo> page = flowableTaskMapper.getAppingTasksPagerModel(queryPage, paramsvo);
        List<TaskVo> taskVoList = page.getRecords();
        this.setTaskVoData(taskVoList);
        return new PagerModel<>(page.getTotal(), page.getRecords());
    }

    @Override
    public ReturnVo<String> complete(CompleteTaskVo completeTaskVo) throws FlowException {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        try {
            if (completeTaskVo != null && StringUtils.isNotBlank(completeTaskVo.getTaskId())){
                TaskEntity task = (TaskEntity) taskService.createTaskQuery().taskId(completeTaskVo.getTaskId()).singleResult();
                if (task != null){
                    if (StringUtils.isBlank(completeTaskVo.getProcessInstanceId())){
                        completeTaskVo.setProcessInstanceId(task.getProcessInstanceId());
                    }
                    this.evictHighLightedNodeCache(task.getProcessInstanceId());
                    this.evictOneActivityVoCache(task.getProcessInstanceId(), task.getTaskDefinitionKey());
                    String taskId = completeTaskVo.getTaskId();
                    if (DelegationState.PENDING.equals(task.getDelegationState())){
                        Task subTask = this.createSubTask(task, task.getParentTaskId(), completeTaskVo.getUserCode());
                        taskService.complete(subTask.getId());
                        taskId = subTask.getId();
                        taskService.resolveTask(completeTaskVo.getTaskId(), completeTaskVo.getVariables());
                    } else {
                        flowableTaskMapper.updateHisAssignee(taskId, completeTaskVo.getUserCode());
                        if (MapUtils.isNotEmpty(completeTaskVo.getVariables())){
                            taskService.complete(completeTaskVo.getTaskId(), completeTaskVo.getVariables());
                        } else {
                            taskService.complete(completeTaskVo.getTaskId());
                        }
//                        taskService.setAssignee(taskId, completeTaskVo.getUserCode());
                        String parentTaskId = task.getParentTaskId();
                        if (StringUtils.isNotBlank(parentTaskId)){
                            String tableName = managementService.getTableName(TaskEntity.class);
                            String sql = "select count(1) from " + tableName + " where PARENT_TASK_ID_=#{parentTaskId}";
                            long subTaskCount = taskService.createNativeTaskQuery().sql(sql).parameter("parentTaskId", parentTaskId).count();
                            if (subTaskCount == 0){
                                Task ptask = taskService.createTaskQuery().taskId(parentTaskId).singleResult();
                                taskService.resolveTask(parentTaskId);
                                if (CommentTypeEnum.HJQ.toString().equals(ptask.getScopeType())){
                                    taskService.complete(parentTaskId);
                                }
                            }
                        }
                    }
                    completeTaskVo.setTaskId(taskId);
                    completeTaskVo.setActivityId(task.getTaskDefinitionKey());
                    completeTaskVo.setActivityName(task.getName());
                    this.addFlowCommentInfoAndProcessStatus(completeTaskVo);
                } else {
                    returnVo = new ReturnVo<>(ReturnCode.FAIL, "没有查询到任务!");
                }
            } else {
                returnVo = new ReturnVo<>(ReturnCode.FAIL, "taskId should not be null");
            }
        } catch (Exception e) {
            log.error("FlowableTaskServiceImpl - complete", e);
            throw new FlowException("审批任务报错", e);
        }
        return returnVo;
    }

    /**
     * 创建任务
     *
     * @param assignee 任务的执行者
     * @param ptask    父亲任务实体
     * @param ptaskId  父亲id
     * @return
     */
    private Task createSubTask(TaskEntity ptask, String ptaskId, String assignee) {
        TaskEntity task = null;
        if (ptask != null){
            task = (TaskEntity) taskService.newTask(UUIDGenerator.generate());
            task.setAssignee(assignee);
            task.setProcessInstanceId(ptask.getProcessInstanceId());
            task.setProcessDefinitionId(ptask.getProcessDefinitionId());
            task.setParentTaskId(ptaskId);
            task.setCategory(ptask.getCategory());
            task.setDescription(ptask.getDescription());
            task.setName(ptask.getName());
            task.setTaskDefinitionKey(ptask.getTaskDefinitionKey());
            task.setTaskDefinitionId(ptask.getTaskDefinitionId());
            task.setTenantId(ptask.getTenantId());
            task.setCreateTime(new Date());
            task.setPriority(ptask.getPriority());
            taskService.saveTask(task);
        }
        return task;
    }

    @Override
    public PagerModel<TaskVo> getApplyedTasksPagerModel(TaskQueryParamsVo paramsVo, Query query) {
        IPage<TaskVo> queryPage = new Page<>(query.getPageNum(), query.getPageSize());
        IPage<TaskVo> page = flowableTaskMapper.getApplyedTasksPagerModel(queryPage, paramsVo);
        List<TaskVo> taskVoList = page.getRecords();
        this.setTaskVoData(taskVoList);
        return new PagerModel<>(page.getTotal(), taskVoList);
    }

    private void setTaskVoData(List<TaskVo> taskVoList) {
        if (CollectionUtils.isNotEmpty(taskVoList)){
            long currTime = new Date().getTime();
            for (TaskVo taskVo : taskVoList) {
                taskVo.setProcessStatusName(ProcessStatusEnum.getEnumMsgByType(taskVo.getProcessStatus()));
                long time = taskVo.getCreateTime().getTime();
                long duration = currTime - time;
                taskVo.setStayHour(DurationUtils.getDuration(duration));
                Date startTime = taskVo.getStartTime();
                Date finishedTime = taskVo.getFinishedTime();
                if (taskVo.getFinishedTime() == null){
                    finishedTime = new Date();
                }
                long totalDuration = finishedTime.getTime() - startTime.getTime();
                taskVo.setTotalTime(DurationUtils.getDuration(totalDuration));
            }
        }
    }


}
