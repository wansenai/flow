package com.dragon.flow.service.hr.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.IdWorker;
import com.dragon.flow.model.hr.Leave;
import com.dragon.flow.mapper.hr.ILeaveMapper;
import com.dragon.flow.service.flowable.IFlowableProcessInstanceService;
import com.dragon.flow.service.hr.ILeaveService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.vo.flowable.runtime.StartProcessInstanceVo;
import com.dragon.tools.vo.ReturnVo;
import org.flowable.engine.runtime.ProcessInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-28
 */
@Service(value = "leaveService")
public class LeaveServiceImpl extends ServiceImpl<ILeaveMapper, Leave> implements ILeaveService {
    @Autowired
    private IFlowableProcessInstanceService flowableProcessInstanceService;

    @Override
    public void sendMessage(List<String> userCodes) {
        System.out.println(userCodes.toString());
    }

    @Override
    public void saveLeave(Leave leave) {
        String businessKey = IdWorker.get32UUID();
        //启动流程
        StartProcessInstanceVo startProcessInstanceVo = new StartProcessInstanceVo();
        startProcessInstanceVo.setBusinessKey(businessKey);
        startProcessInstanceVo.setCurrentUserCode(leave.getApplyerCode());
        startProcessInstanceVo.setCreator(leave.getApplyerCode());
        startProcessInstanceVo.setFlowLevelFlag(true);
        startProcessInstanceVo.setAppSn("flow");
        startProcessInstanceVo.setFormName(leave.getTitle());
        startProcessInstanceVo.setProcessDefinitionKey("test_leave");
        Map<String, Object> variables = new HashMap<>();
        variables.put("days", leave.getDays());
        variables.put("applyerCode", leave.getApplyerCode());
        List<String> userList = new ArrayList<>();
        userList.add("0000001");
        userList.add("000000999");
        variables.put("userList",userList);
        startProcessInstanceVo.setVariables(variables);
        ReturnVo<ProcessInstance> processInstanceReturnVo = flowableProcessInstanceService.startProcessInstanceByKey(startProcessInstanceVo);
        if (processInstanceReturnVo != null){
            ProcessInstance data = processInstanceReturnVo.getData();
            if (data != null){
                leave.setId(businessKey);
                leave.setProcessInstanceId(data.getProcessInstanceId());
                leave.setCreateTime(new Date());
                this.save(leave);
            }
        }
    }

    @Override
    public Leave getLeaveById(String id) {
        return this.getById(id);
    }

    @Override
    public Leave getLeaveByProcessInstanceId(String processInstanceId) {
        LambdaQueryWrapper<Leave> leaveLambdaQueryWrapper = new LambdaQueryWrapper<>();
        leaveLambdaQueryWrapper.eq(Leave::getProcessInstanceId, processInstanceId);
        return this.getOne(leaveLambdaQueryWrapper);
    }
}
