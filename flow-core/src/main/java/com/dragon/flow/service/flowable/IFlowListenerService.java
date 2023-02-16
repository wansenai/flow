package com.dragon.flow.service.flowable;

import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.flowable.FlowListener;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;

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
     * 查询监听器 并把参数查出来
     * @param flowListener 参数
     * @return
     */
    List<FlowListener> getListAndParams(FlowListener flowListener) ;
    /**
     * 查询监听器
     * @param flowListener 监听器
     * @return
     */
    List<FlowListener> getList(FlowListener flowListener) ;

    /**
     * 分页查询监听器列表
     * @param flowListener
     * @param query
     * @return
     */
    PagerModel<FlowListener> getPagerModel(FlowListener flowListener, Query query);

    void deleteById(String id) ;

    /**
     * 通过类型和名称查询对象
     * @param type 类型
     * @param name 名称
     * @return
     */
    FlowListener getFlowListenerByNameAndType(String type,String name) ;
    FlowListener getFlowListenerById(String id);
}
