package com.dragon.flow.service.flowable.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.mapper.flowable.IFlowListenerMapper;
import com.dragon.flow.model.flowable.FlowListener;
import com.dragon.flow.model.flowable.FlowListenerParam;
import com.dragon.flow.service.flowable.IFlowListenerParamService;
import com.dragon.flow.service.flowable.IFlowListenerService;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-06-28
 */
@Service
public class FlowListenerServiceImpl extends ServiceImpl<IFlowListenerMapper, FlowListener> implements IFlowListenerService {

    @Autowired
    private IFlowListenerParamService flowListenerParamService;

    @Override
    public List<FlowListener> getListAndParams(FlowListener flowListener) {
        List<FlowListener> listeners = this.getList(flowListener);
        if (CollectionUtils.isNotEmpty(listeners)) {
            listeners.forEach(listener -> {
                List<FlowListenerParam> listenerParams = flowListenerParamService.getListByListenerId(listener.getId());
                listener.setFlowListenerParamList(listenerParams);
            });
        }
        return listeners;
    }

    @Override
    public List<FlowListener> getList(FlowListener flowListener) {
        LambdaQueryWrapper<FlowListener> flowListenerLambdaQueryWrapper = new LambdaQueryWrapper<>();
        if (StringUtils.isNotBlank(flowListener.getListenerType())) {
            flowListenerLambdaQueryWrapper.eq(FlowListener::getListenerType, flowListener.getListenerType());
        }
        if (StringUtils.isNotBlank(flowListener.getName())) {
            flowListenerLambdaQueryWrapper.like(FlowListener::getName, flowListener.getName());
        }
        return this.list(flowListenerLambdaQueryWrapper);
    }

    @Override
    public PagerModel<FlowListener> getPagerModel(FlowListener flowListener, Query query) {
        IPage<FlowListener> queryPage = new Page<>(query.getPageNum(), query.getPageSize());
        LambdaQueryWrapper<FlowListener> lambdaQueryWrapper = new LambdaQueryWrapper<>();
        if (StringUtils.isNotBlank(flowListener.getListenerType())) {
            lambdaQueryWrapper.eq(FlowListener::getListenerType, flowListener.getListenerType());
        }
        if (StringUtils.isNotBlank(flowListener.getKeyword())) {
            lambdaQueryWrapper
                    .like(FlowListener::getName, flowListener.getKeyword())
                    .or()
                    .like(FlowListener::getValue, flowListener.getKeyword())
                    .or()
                    .like(FlowListener::getRemark, flowListener.getKeyword());
        }
        lambdaQueryWrapper.eq(FlowListener::getDelFlag, FlowConstant.DEL_FLAG_1)
                .orderByDesc(FlowListener::getCreateTime)
                .orderByAsc(FlowListener::getOrderNo);
        IPage<FlowListener> page = this.page(queryPage, lambdaQueryWrapper);
        return new PagerModel<>(page.getTotal(), page.getRecords());
    }

    @Override
    public void deleteById(String id) {
        LambdaQueryWrapper<FlowListenerParam> flowListenerParamLambdaQueryWrapper = new LambdaQueryWrapper<>();
        flowListenerParamLambdaQueryWrapper.eq(FlowListenerParam::getListenerId, id);
        flowListenerParamService.remove(flowListenerParamLambdaQueryWrapper);
        this.removeById(id);
    }

    @Override
    public FlowListener getFlowListenerByNameAndType(String type, String name) {
        LambdaQueryWrapper<FlowListener> flowListenerLambdaQueryWrapper = new LambdaQueryWrapper<>();
        flowListenerLambdaQueryWrapper.eq(FlowListener::getType, type)
                .eq(FlowListener::getName, name);
        return getOne(flowListenerLambdaQueryWrapper);
    }

    @Override
    public FlowListener getFlowListenerById(String id) {
        FlowListener flowListener = this.getById(id);
        List<FlowListenerParam> list = flowListenerParamService.getListByListenerId(id);
        flowListener.setFlowListenerParamList(list);
        return flowListener;
    }


}
