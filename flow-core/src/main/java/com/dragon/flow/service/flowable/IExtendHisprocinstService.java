package com.dragon.flow.service.flowable;

import com.dragon.flow.model.flowable.ExtendHisprocinst;
import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.flowable.ExtendProcinst;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-21
 */
public interface IExtendHisprocinstService extends IService<ExtendHisprocinst> {

    /**
     * 通过流程实例获取历史时的扩展信息
     * @param processInstanceId 流程实例id
     * @return
     */
    ExtendHisprocinst findExtendHisprocinstByProcessInstanceId(String processInstanceId) ;

    /**
     * 更新流程实例的状态
     * @param extendHisprocinst 历史流程实例扩展信息
     */
    void updateAllStatusByProcessInstanceId(ExtendHisprocinst extendHisprocinst);

}
