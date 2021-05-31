package com.dragon.flow.service.flowable;

import com.dragon.flow.enm.flowable.runtime.ProcessStatusEnum;
import com.dragon.flow.model.flowable.ExtendProcinst;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-21
 */
public interface IExtendProcinstService extends IService<ExtendProcinst> {
    /**
     * 通过流程实例删除运行时的扩展信息
     * @param processInstanceId 流程实例id
     */
    void deleteExtendProcinstByProcessInstanceId(String processInstanceId) ;

    /**
     * 保存流程实例扩展信息和历史流程实例扩展信息
     * @param extendProcinst 扩展信息
     */
    void saveExtendProcinstAndHis(ExtendProcinst extendProcinst) ;

    /**
     * 修改扩展信息的状态
     * @param processStatus 状态
     * @param processInstanceId 流程实例id
     */
    void updateStatus(ProcessStatusEnum processStatus, String processInstanceId) ;

    /**
     * 通过流程实例获取运行时的扩展信息
     * @param processInstanceId 流程实例id
     * @return
     */
    ExtendProcinst findExtendProcinstByProcessInstanceId(String processInstanceId) ;
}
