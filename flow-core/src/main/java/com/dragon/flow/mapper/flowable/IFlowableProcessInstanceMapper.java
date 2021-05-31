package com.dragon.flow.mapper.flowable;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.dragon.flow.vo.flowable.processinstance.InstanceQueryParamsVo;
import com.dragon.flow.vo.flowable.processinstance.ProcessInstanceVo;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

/**
 * @program: flow
 * @description: 流程定义持久化
 * @author: Bruce.Liu
 * @create: 2021-03-27 01:04
 **/
@Repository
public interface IFlowableProcessInstanceMapper {

    IPage<ProcessInstanceVo> findMyProcessinstancesPagerModel(IPage<ProcessInstanceVo> page, @Param("params") InstanceQueryParamsVo params);
}
