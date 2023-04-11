package com.dragon.flow.api;

import com.dragon.flow.exception.FlowException;
import com.dragon.flow.model.flowable.ModelInfo;
import com.dragon.flow.vo.flowable.model.HighLightedNodeVo;
import com.dragon.flow.vo.flowable.model.ModelInfoVo;
import com.dragon.flow.vo.flowable.processinstance.InstanceQueryParamsVo;
import com.dragon.flow.vo.flowable.processinstance.StartorBaseInfoVo;
import com.dragon.flow.vo.flowable.runtime.StartProcessInstanceVo;
import com.dragon.flow.vo.flowable.task.ActivityVo;
import com.dragon.flow.vo.flowable.task.CompleteTaskVo;
import com.dragon.flow.vo.flowable.processinstance.EndVo;
import com.dragon.flow.vo.flowable.task.TaskQueryParamsVo;
import com.dragon.flow.vo.pager.ParamVo;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.vo.ReturnVo;

import java.util.List;

/**
 * @program: flow
 * @description: 流程接口
 * @author: Bruce.Liu
 * @create: 2021-05-08 14:21
 **/
public interface IFlowApi {
    /**
     * 通过modelKey获取模型对象
     *
     * @param modelKey 参数
     * @return
     */
    ReturnVo<ModelInfoVo> loadBpmnXmlByModelKey(String modelKey);

    /**
     * 通过modelKey获取模型对象
     *
     * @param modelKey 参数
     * @return
     */
    ReturnVo<ModelInfo> getModelInfoByModelKey(String modelKey);

    /**
     * 通过流程实例id获取头部信息
     * @param processInstanceId 流程实例id
     * @return
     */
    ReturnVo<StartorBaseInfoVo> getStartorBaseInfoVoByProcessInstanceId(String processInstanceId);

    /**
     * 通过modelKey获取模型对象
     *
     * @param params 参数
     */
    ReturnVo<PagerModel> getModelInfoVoByPagerModel(ParamVo<ModelInfo> params);

    /**
     * 过流程实例id获取节点的信息
     *
     * @param processInstanceId 流程实例id
     * @param activityId        节点id
     * @return
     */
    ReturnVo<ActivityVo> getOneActivityVoByProcessInstanceIdAndActivityId(String processInstanceId, String activityId);

    /**
     * 查询我的流程列表
     *
     * @param processInstanceVoParamVo 分页查询参数
     * @return
     * @throws Exception
     */
    ReturnVo<PagerModel> findMyProcessinstancesPagerModel(ParamVo<InstanceQueryParamsVo> processInstanceVoParamVo);

    /**
     * @param taskQueryParamsVoParamVo 分页查询参数
     * @return
     */
    ReturnVo<PagerModel> getAppingTasksPagerModel(ParamVo<TaskQueryParamsVo> taskQueryParamsVoParamVo);

    /**
     * @param taskQueryParamsVoParamVo 分页查询参数
     * @return
     */
    ReturnVo<PagerModel> getApplyedTasksPagerModel(ParamVo<TaskQueryParamsVo> taskQueryParamsVoParamVo);

    /**
     * 获取审批记录列表
     *
     * @param processInstanceId 流程实例id
     * @return
     */
    ReturnVo<List> getCommentInfosByProcessInstanceId(String processInstanceId);

    /**
     * 启动流程
     *
     * @param params 启动参数
     * @return 流程实例
     */
    ReturnVo<String> startProcessInstanceByKey(StartProcessInstanceVo params);

    /**
     * 执行任务
     *
     * @param completeTaskVo 执行任务VO
     * @return 返回信息
     */
    ReturnVo<String> complete(CompleteTaskVo completeTaskVo) throws FlowException;

    /**
     * 终止流程
     *
     * @param endVo 基本参数
     * @return
     */
    ReturnVo<String> stopProcess(EndVo endVo);

    /**
     * 通过流程实例id获取高亮信息
     *
     * @param processInstanceId 流程实例id
     * @return
     */
    ReturnVo<HighLightedNodeVo> getHighLightedNodeVoByProcessInstanceId(String processInstanceId);

    /**
     * 获取待办数量
     * @param params
     * @return
     */
    ReturnVo<Long> getAppingTaskCont(TaskQueryParamsVo params);

    /**
     * 获取所有的apps
     * @return
     */
    ReturnVo<List> getApps();

    /**
     * 获取所有流程分类
     * @return
     */
    ReturnVo<List> getCategories();
}
