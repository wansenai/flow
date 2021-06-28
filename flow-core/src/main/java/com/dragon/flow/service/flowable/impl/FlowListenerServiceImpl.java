package com.dragon.flow.service.flowable.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.dragon.flow.model.flowable.FlowListener;
import com.dragon.flow.mapper.flowable.IFlowListenerMapper;
import com.dragon.flow.model.flowable.FlowListenerParam;
import com.dragon.flow.service.flowable.IFlowListenerParamService;
import com.dragon.flow.service.flowable.IFlowListenerService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
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
    public void deleteById(String id) {
        LambdaQueryWrapper<FlowListenerParam> flowListenerParamLambdaQueryWrapper = new LambdaQueryWrapper<>();
        flowListenerParamLambdaQueryWrapper.eq(FlowListenerParam::getListenerId, id);
        flowListenerParamService.remove(flowListenerParamLambdaQueryWrapper);
        this.removeById(id);
    }
}
