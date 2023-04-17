package com.dragon.flow.api.impl.dubbo;

import com.dragon.flow.api.IFlowApi;
import com.dragon.flow.api.impl.AbstractFlowApiImpl;
import com.dragon.flow.exception.FlowException;
import com.dragon.flow.vo.flowable.model.HighLightedNodeVo;
import com.dragon.flow.vo.flowable.model.ModelInfoVo;
import com.dragon.flow.vo.flowable.processinstance.EndVo;
import com.dragon.flow.vo.flowable.processinstance.InstanceQueryParamsVo;
import com.dragon.flow.vo.flowable.runtime.StartProcessInstanceVo;
import com.dragon.flow.vo.flowable.task.ActivityVo;
import com.dragon.flow.vo.flowable.task.CompleteTaskVo;
import com.dragon.flow.vo.flowable.task.TaskQueryParamsVo;
import com.dragon.flow.vo.pager.ParamVo;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.vo.ReturnVo;
import org.apache.dubbo.config.annotation.DubboService;

import java.util.List;

/**
 * @author bruce.liu
 * @description 对外公开的dubbo接口
 * @date 2021/8/18 17:40
 */
@DubboService(version = "1.0.0")
public class DubboFlowApiImpl extends AbstractFlowApiImpl {
    @Override
    public ReturnVo<ModelInfoVo> loadBpmnXmlByModelKey(String modelKey) {
        return super.loadBpmnXmlByModelKey(modelKey);
    }

    @Override
    public ReturnVo<ActivityVo> getOneActivityVoByProcessInstanceIdAndActivityId(String processInstanceId, String activityId) {
        return super.getOneActivityVoByProcessInstanceIdAndActivityId(processInstanceId, activityId);
    }

    @Override
    public ReturnVo<PagerModel> findMyProcessinstancesPagerModel(ParamVo<InstanceQueryParamsVo> processInstanceVoParamVo) {
        return super.findMyProcessinstancesPagerModel(processInstanceVoParamVo);
    }

    @Override
    public ReturnVo<Long> getAppingTaskCont(TaskQueryParamsVo params) {
        return super.getAppingTaskCont(params);
    }

    @Override
    public ReturnVo<PagerModel> getAppingTasksPagerModel(ParamVo<TaskQueryParamsVo> taskQueryParamsVoParamVo) {
        return super.getAppingTasksPagerModel(taskQueryParamsVoParamVo);
    }

    @Override
    public ReturnVo<PagerModel> getApplyedTasksPagerModel(ParamVo<TaskQueryParamsVo> taskQueryParamsVoParamVo) {
        return super.getApplyedTasksPagerModel(taskQueryParamsVoParamVo);
    }

    @Override
    public ReturnVo<List> getCommentInfosByProcessInstanceId(String processInstanceId) {
        return super.getCommentInfosByProcessInstanceId(processInstanceId);
    }

    @Override
    public ReturnVo<String> startProcessInstanceByKey(StartProcessInstanceVo params) {
        return super.startProcessInstanceByKey(params);
    }

    @Override
    public ReturnVo<String> complete(CompleteTaskVo completeTaskVo) throws FlowException {
        return super.complete(completeTaskVo);
    }

    @Override
    public ReturnVo<String> stopProcess(EndVo endVo) {
        return super.stopProcess(endVo);
    }

    @Override
    public ReturnVo<HighLightedNodeVo> getHighLightedNodeVoByProcessInstanceId(String processInstanceId) {
        return super.getHighLightedNodeVoByProcessInstanceId(processInstanceId);
    }

    @Override
    public ReturnVo<List> getApps() {
        return super.getApps();
    }

    @Override
    public ReturnVo<List> getCategories() {
        return super.getApps();
    }
}
