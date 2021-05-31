package com.dragon.flow.service.flowable.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.mapper.flowable.IFlowableProcessDefinitionMapper;
import com.dragon.flow.model.flowable.FlowableProcessDefinition;
import com.dragon.flow.service.flowable.IFlowableProcessDefinitionService;
import org.springframework.stereotype.Service;

/**
 * @program: flow
 * @description: 流程定义服务实现
 * @author: Bruce.Liu
 * @create: 2021-04-23 11:31
 **/
@Service
public class FlowableProcessDefinitionServiceImpl extends ServiceImpl<IFlowableProcessDefinitionMapper, FlowableProcessDefinition> implements IFlowableProcessDefinitionService {
}
