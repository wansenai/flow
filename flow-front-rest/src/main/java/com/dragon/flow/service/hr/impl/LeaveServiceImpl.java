package com.dragon.flow.service.hr.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.mapper.hr.ILeaveMapper;
import com.dragon.flow.model.hr.Leave;
import com.dragon.flow.service.hr.ILeaveService;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

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

    @Override
    public void sendMessage(List<String> userCodes) {
        System.out.println(userCodes.toString());
    }

    @Override
    public void saveLeave(Leave leave) {
        leave.setCreateTime(new Date());
        this.save(leave);
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
