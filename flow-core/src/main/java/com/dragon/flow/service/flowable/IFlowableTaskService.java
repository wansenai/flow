package com.dragon.flow.service.flowable;

import com.dragon.flow.exception.FlowException;
import com.dragon.flow.vo.flowable.task.CompleteTaskVo;
import com.dragon.flow.vo.flowable.task.FlowNodeVo;
import com.dragon.flow.vo.flowable.task.TaskQueryParamsVo;
import com.dragon.flow.vo.flowable.task.TaskVo;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import com.dragon.tools.vo.ReturnVo;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @program: flow
 * @description: flowable的任务service
 * @author: Bruce.Liu
 * @create: 2021-04-20 14:16
 **/
public interface IFlowableTaskService {

    /**
     * @param paramsvo 查询参数
     * @param query    分页
     * @return
     */
    PagerModel<TaskVo> getAppingTasksPagerModel(TaskQueryParamsVo paramsvo, Query query);

    /**
     * @param paramsVo 查询参数
     * @param query    分页
     * @return
     */
    PagerModel<TaskVo> getApplyedTasksPagerModel(TaskQueryParamsVo paramsVo, Query query);

    /**
     * 执行任务
     *
     * @param completeTaskVo 执行任务VO
     * @return 返回信息
     */
    ReturnVo<String> complete(CompleteTaskVo completeTaskVo) throws FlowException;
    Long getAppingTaskCont(@Param("params") TaskQueryParamsVo params);


}
