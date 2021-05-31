package com.dragon.flow.service.hr;

import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.hr.Leave;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-28
 */
public interface ILeaveService extends IService<Leave> {

    void sendMessage(List<String> userCodes) ;
    /**
     * 添加请假
     * @param leave 请假参数
     */
    void saveLeave(Leave leave) ;

    /**
     * 通过id查询请假
     * @param id id
     * @return
     */
    Leave getLeaveById(String id) ;

    /**
     * 通过流程实例id获取请假
     * @param processInstanceId 流程实例id
     * @return
     */
    Leave getLeaveByProcessInstanceId(String processInstanceId) ;
}
