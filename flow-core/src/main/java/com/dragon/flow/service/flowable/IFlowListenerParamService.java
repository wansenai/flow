package com.dragon.flow.service.flowable;

import com.dragon.flow.model.flowable.FlowListenerParam;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-06-28
 */
public interface IFlowListenerParamService extends IService<FlowListenerParam> {

    /**
     * 通过监听器id获取参数列表
     * @param listenerId 监听器id
     * @return
     */
    List<FlowListenerParam> getListByListenerId(String listenerId) ;
}
