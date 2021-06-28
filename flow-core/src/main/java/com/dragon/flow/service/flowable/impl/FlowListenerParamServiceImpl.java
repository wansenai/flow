package com.dragon.flow.service.flowable.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.dragon.flow.model.flowable.FlowListenerParam;
import com.dragon.flow.mapper.flowable.IFlowListenerParamMapper;
import com.dragon.flow.service.flowable.IFlowListenerParamService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-06-28
 */
@Service
public class FlowListenerParamServiceImpl extends ServiceImpl<IFlowListenerParamMapper, FlowListenerParam> implements IFlowListenerParamService {
    @Override
    public List<FlowListenerParam> getListByListenerId(String listenerId) {
        LambdaQueryWrapper<FlowListenerParam> flowListenerParamLambdaQueryWrapper = new LambdaQueryWrapper<>();
        flowListenerParamLambdaQueryWrapper.eq(FlowListenerParam::getListenerId, listenerId);
        return this.list(flowListenerParamLambdaQueryWrapper);
    }
}
