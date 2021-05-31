package com.dragon.flow.mapper.flowable;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.dragon.flow.vo.flowable.task.TaskQueryParamsVo;
import com.dragon.flow.vo.flowable.task.TaskVo;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

/**
 * @program: flow
 * @description: 任务mapper接口
 * @author: Bruce.Liu
 * @create: 2021-04-22 23:08
 **/
@Repository
public interface IFlowableTaskMapper {
    IPage<TaskVo> getApplyedTasksPagerModel(IPage<TaskVo> page, @Param("params") TaskQueryParamsVo params);

    IPage<TaskVo> getAppingTasksPagerModel(IPage<TaskVo> page, @Param("params") TaskQueryParamsVo params);
    Long getAppingTaskCont(@Param("params") TaskQueryParamsVo params);

    /**
     * 修改审批人
     *
     * @param taskId   任务id
     * @param assignee 审批人
     */
    void updateHisAssignee(@Param("taskId") String taskId, @Param("assignee") String assignee);

}
