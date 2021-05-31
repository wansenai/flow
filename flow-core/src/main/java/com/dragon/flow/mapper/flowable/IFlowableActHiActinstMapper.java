package com.dragon.flow.mapper.flowable;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.dragon.flow.model.flowable.FlowableActHiActinst;
import com.dragon.flow.model.flowable.FlowableActRuActinst;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-06 14:05
 **/
@Repository
public interface IFlowableActHiActinstMapper extends BaseMapper<FlowableActHiActinst> {

    List<FlowableActHiActinst> getActHiActinstsByProcessInstanceIdAndActId(@Param("processInstanceId") String processInstanceId, @Param("disActivityId")String disActivityId) ;

}
