package com.dragon.flow.service.flowable;

import com.dragon.flow.vo.flowable.model.HighLightedNodeVo;
import com.dragon.flow.vo.flowable.task.ActivityVo;

import java.util.List;

/**
 * @program: flow
 * @description: 画流程图service
 * @author: Bruce.Liu
 * @create: 2021-05-13 11:21
 **/
public interface IFlowProcessDiagramService {
    HighLightedNodeVo createCacheHighLightedNodeVoByProcessInstanceId(String processInstanceId);
    HighLightedNodeVo getHighLightedNodeVoByProcessInstanceId(String processInstanceId);
    ActivityVo getOneActivityVoByProcessInstanceIdAndActivityId(String processInstanceId, String activityId);
    List<ActivityVo> getProcessActivityVosByProcessInstanceId(String processInstanceId);
}


