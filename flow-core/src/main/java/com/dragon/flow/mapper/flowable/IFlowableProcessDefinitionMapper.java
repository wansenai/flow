package com.dragon.flow.mapper.flowable;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.dragon.flow.model.flowable.FlowableProcessDefinition;
import org.springframework.stereotype.Repository;

/**
 * @program: flow
 * @description: 流程定义持久化
 * @author: Bruce.Liu
 * @create: 2021-03-27 01:04
 **/
@Repository
public interface IFlowableProcessDefinitionMapper extends BaseMapper<FlowableProcessDefinition> {
}
