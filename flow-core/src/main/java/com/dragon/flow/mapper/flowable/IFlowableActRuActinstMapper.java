package com.dragon.flow.mapper.flowable;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.dragon.flow.model.flowable.FlowableActRuActinst;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-06 14:05
 **/
@Repository
public interface IFlowableActRuActinstMapper extends BaseMapper<FlowableActRuActinst> {

    List<FlowableActRuActinst> getActRuActinstsByProcessInstanceIdAndActId(@Param("processInstanceId") String processInstanceId, @Param("disActivityId") String disActivityId);

    List<FlowableActRuActinst> getActRuActinstsByProcessInstanceIdAndEndTime(@Param("processInstanceId") String processInstanceId, @Param("endTime") Date endTime);

    List<FlowableActRuActinst> getFlowableActRuActinstByFlowableActRuActinst(@Param("actRuActinst")FlowableActRuActinst actRuActinst) ;
}
