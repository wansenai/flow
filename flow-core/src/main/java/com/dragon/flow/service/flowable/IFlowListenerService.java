package com.dragon.flow.service.flowable;

import com.dragon.flow.model.flowable.FlowListener;
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
public interface IFlowListenerService extends IService<FlowListener> {
    /**
     * 查询监听器
     * @param flowListener 监听器
     * @return
     */
    List<FlowListener> getList(FlowListener flowListener) ;

    void deleteById(String id) ;
}
