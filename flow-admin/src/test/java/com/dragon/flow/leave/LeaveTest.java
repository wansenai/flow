package com.dragon.flow.leave;

import com.dragon.flow.enm.flowable.runtime.CommentTypeEnum;
import com.dragon.flow.enm.flowable.runtime.ProcessStatusEnum;
import com.dragon.flow.main.FlowAdminApplication;
import com.dragon.flow.model.hr.Leave;
import com.dragon.flow.model.org.Personal;
import com.dragon.flow.service.flowable.IFlowableProcessInstanceService;
import com.dragon.flow.service.flowable.IFlowableTaskService;
import com.dragon.flow.service.hr.ILeaveService;
import com.dragon.flow.service.org.IPersonalService;
import com.dragon.flow.vo.flowable.task.CompleteTaskVo;
import com.dragon.flow.vo.flowable.processinstance.EndVo;
import com.dragon.flow.vo.flowable.task.TaskQueryParamsVo;
import com.dragon.flow.vo.flowable.task.TaskVo;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import org.apache.commons.collections.CollectionUtils;
import org.flowable.engine.TaskService;
import org.flowable.task.api.Task;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-11 13:47
 **/
@SpringBootTest(classes = FlowAdminApplication.class)
public class LeaveTest {

    @Autowired
    private ILeaveService leaveService;
    @Autowired
    private IPersonalService personalService;

    @Autowired
    private IFlowableTaskService flowableTaskService;
    @Autowired
    private IFlowableProcessInstanceService flowableProcessInstanceService;
    @Autowired
    private TaskService taskService;

    @Test
    public void testStartLeave() {
        Leave leave = new Leave();
        String applyerCode = "0000001";
        Personal personal = personalService.getPersonalByCode(applyerCode);
        if (personal != null){
            leave.setDeptId(personal.getDeptId());
            leave.setDeptName(personal.getDeptName());
            leave.setCompanyId(personal.getCompanyId());
            leave.setCompanyName(personal.getCompanyName());
        }
        leave.setApplyerCode(applyerCode);
        leave.setDays(2f);
        leave.setTitle("年假");
        leave.setNote("年假");
        leave.setType("1");
        leaveService.saveLeave(leave);
    }

    @Test
    public void testClearTask() {
        List<Task> list = taskService.createTaskQuery().list();
        if (CollectionUtils.isNotEmpty(list)) {
            list.forEach(task->{
                EndVo endVo = new EndVo();
                endVo.setUserCode(task.getAssignee());
                endVo.setTaskId(task.getId());
                endVo.setProcessInstanceId(task.getProcessInstanceId());
                endVo.setMessage("审批通过");
                flowableProcessInstanceService.stopProcess(endVo);
            });
        }
    }

    @Test
    public void testEnd() {
        TaskQueryParamsVo paramsvo = new TaskQueryParamsVo();
        paramsvo.setUserCode("0000001");
        Query query = new Query();
        PagerModel<TaskVo> pagerModel = flowableTaskService.getAppingTasksPagerModel(paramsvo, query);
        if (pagerModel != null){
            List<TaskVo> data = pagerModel.getRows();
            if (CollectionUtils.isNotEmpty(data)){
                data.forEach(taskVo -> {
                    EndVo endVo = new EndVo();
                    endVo.setUserCode(taskVo.getAssignee());
                    endVo.setTaskId(taskVo.getTaskId());
                    endVo.setProcessInstanceId(taskVo.getProcessInstanceId());
                    endVo.setMessage("审批通过");
                    endVo.setCommentTypeEnum(CommentTypeEnum.SP);
                    endVo.setProcessStatusEnum(ProcessStatusEnum.SPZ);
                    flowableProcessInstanceService.stopProcess(endVo);
                });
            }
        }
    }

    @Test
    public void testCompleteTask() {
        TaskQueryParamsVo paramsvo = new TaskQueryParamsVo();
        paramsvo.setUserCode("00008888");
        Query query = new Query();
        PagerModel<TaskVo> pagerModel = flowableTaskService.getAppingTasksPagerModel(paramsvo, query);
        if (pagerModel != null){
            List<TaskVo> data = pagerModel.getRows();
            if (CollectionUtils.isNotEmpty(data)){
                data.forEach(taskVo -> {
                    CompleteTaskVo completeTaskVo = new CompleteTaskVo();
                    completeTaskVo.setUserCode(taskVo.getAssignee());
                    completeTaskVo.setTaskId(taskVo.getTaskId());
                    completeTaskVo.setProcessInstanceId(taskVo.getProcessInstanceId());
                    completeTaskVo.setMessage("审批通过");
                    completeTaskVo.setCommentTypeEnum(CommentTypeEnum.SP);
                    completeTaskVo.setProcessStatusEnum(ProcessStatusEnum.SPZ);
                    flowableTaskService.complete(completeTaskVo);
                });
            }
        }
    }
}
