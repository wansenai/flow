package com.dragon.flow.api.impl;

import com.dragon.flow.api.IFlowApi;
import com.dragon.flow.exception.FlowException;
import com.dragon.flow.model.base.App;
import com.dragon.flow.model.base.Category;
import com.dragon.flow.model.flowable.CommentInfo;
import com.dragon.flow.model.flowable.ModelInfo;
import com.dragon.flow.service.base.IAppService;
import com.dragon.flow.service.base.ICategoryService;
import com.dragon.flow.service.flowable.*;
import com.dragon.flow.vo.flowable.model.HighLightedNodeVo;
import com.dragon.flow.vo.flowable.model.ModelInfoVo;
import com.dragon.flow.vo.flowable.processinstance.EndVo;
import com.dragon.flow.vo.flowable.processinstance.InstanceQueryParamsVo;
import com.dragon.flow.vo.flowable.processinstance.ProcessInstanceVo;
import com.dragon.flow.vo.flowable.processinstance.StartorBaseInfoVo;
import com.dragon.flow.vo.flowable.runtime.StartProcessInstanceVo;
import com.dragon.flow.vo.flowable.task.ActivityVo;
import com.dragon.flow.vo.flowable.task.CompleteTaskVo;
import com.dragon.flow.vo.flowable.task.TaskQueryParamsVo;
import com.dragon.flow.vo.flowable.task.TaskVo;
import com.dragon.flow.vo.pager.ParamVo;
import com.dragon.tools.common.BaseCommonConstant;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.vo.ReturnVo;
import org.flowable.engine.runtime.ProcessInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

/**
 * @author bruce.liu
 * @description 抽象对外接口实现
 * @date 2021/8/18 17:47
 */
public abstract class AbstractFlowApiImpl implements IFlowApi {
    @Autowired
    private IFlowableProcessInstanceService flowableProcessInstanceService;
    @Autowired
    private IFlowableTaskService flowableTaskService;
    @Autowired
    private ICommentInfoService commentInfoService;
    @Autowired
    private IFlowProcessDiagramService flowProcessDiagramService;
    @Autowired
    private IFlowableBpmnService flowableBpmnService;
    @Autowired
    private IAppService appService;
    @Autowired
    private ICategoryService categoryService;
    @Autowired
    private IModelInfoService modelInfoService;

    @Override
    public ReturnVo<ModelInfoVo> loadBpmnXmlByModelKey(String modelKey) {
        ReturnVo<ModelInfoVo> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        ModelInfoVo modelInfoVo = flowableBpmnService.loadBpmnXmlByModelKey(modelKey);
        returnVo.setData(modelInfoVo);
        return returnVo;
    }

    @Override
    public ReturnVo<ModelInfo> getModelInfoByModelKey(String modelKey) {
        ReturnVo<ModelInfo> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        ModelInfo modelInfo = modelInfoService.getModelInfoByModelKey(modelKey);
        returnVo.setData(modelInfo);
        return returnVo;
    }

    @Override
    public ReturnVo<PagerModel> getModelInfoVoByPagerModel(ParamVo<ModelInfo> params){
        ReturnVo<PagerModel> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        PagerModel<ModelInfo> pm = modelInfoService.getPagerModel(params.getEntity(), params.getQuery());
        returnVo.setData(pm);
        return returnVo;
    }

    @Override
    public ReturnVo<StartorBaseInfoVo> getStartorBaseInfoVoByProcessInstanceId(String processInstanceId){
        ReturnVo<StartorBaseInfoVo> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        StartorBaseInfoVo startorBaseInfoVo = flowableProcessInstanceService.getStartorBaseInfoVoByProcessInstanceId(processInstanceId);
        returnVo.setData(startorBaseInfoVo);
        return returnVo;
    }

    @Override
    public ReturnVo<ActivityVo> getOneActivityVoByProcessInstanceIdAndActivityId(String processInstanceId, String activityId) {
        ReturnVo<ActivityVo> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        ActivityVo processActivityVo = flowProcessDiagramService.getOneActivityVoByProcessInstanceIdAndActivityId(processInstanceId, activityId);
        returnVo.setData(processActivityVo);
        return returnVo;
    }

    @Override
    public ReturnVo<PagerModel> findMyProcessinstancesPagerModel(@RequestBody ParamVo<InstanceQueryParamsVo> processInstanceVoParamVo) {
        ReturnVo<PagerModel> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        PagerModel<ProcessInstanceVo> pagerModel = flowableProcessInstanceService.findMyProcessinstancesPagerModel(processInstanceVoParamVo.getEntity(), processInstanceVoParamVo.getQuery());
        returnVo.setData(pagerModel);
        return returnVo;
    }

    @Override
    public ReturnVo<Long> getAppingTaskCont(@RequestBody TaskQueryParamsVo params) {
        ReturnVo<Long> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        Long count = flowableTaskService.getAppingTaskCont(params);
        returnVo.setData(count);
        return returnVo;
    }

    @Override
    public ReturnVo<PagerModel> getAppingTasksPagerModel(@RequestBody ParamVo<TaskQueryParamsVo> taskQueryParamsVoParamVo) {
        ReturnVo<PagerModel> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        PagerModel<TaskVo> pagerModel = flowableTaskService.getAppingTasksPagerModel(taskQueryParamsVoParamVo.getEntity(), taskQueryParamsVoParamVo.getQuery());
        returnVo.setData(pagerModel);
        return returnVo;
    }

    @Override
    public ReturnVo<PagerModel> getApplyedTasksPagerModel(@RequestBody ParamVo<TaskQueryParamsVo> taskQueryParamsVoParamVo) {
        ReturnVo<PagerModel> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        PagerModel<TaskVo> pagerModel = flowableTaskService.getApplyedTasksPagerModel(taskQueryParamsVoParamVo.getEntity(), taskQueryParamsVoParamVo.getQuery());
        returnVo.setData(pagerModel);
        return returnVo;
    }

    @Override
    public ReturnVo<List> getCommentInfosByProcessInstanceId(String processInstanceId) {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        List<CommentInfo> commentInfoList = commentInfoService.getCommentInfosByProcessInstanceId(processInstanceId);
        returnVo.setData(commentInfoList);
        return returnVo;
    }

    @Override
    public ReturnVo<String> startProcessInstanceByKey(@RequestBody StartProcessInstanceVo params) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        ReturnVo<ProcessInstance> processInstanceReturnVo = flowableProcessInstanceService.startProcessInstanceByKey(params);
        if (processInstanceReturnVo.isSuccess()){
            returnVo.setData(processInstanceReturnVo.getData().getProcessInstanceId());
        } else {
            returnVo.setCode(processInstanceReturnVo.getCode());
            returnVo.setMsg(processInstanceReturnVo.getMsg());
        }
        return returnVo;
    }

    @Override
    public ReturnVo<String> complete(@RequestBody CompleteTaskVo completeTaskVo) throws FlowException {
        return flowableTaskService.complete(completeTaskVo);
    }

    @Override
    public ReturnVo<String> stopProcess(@RequestBody EndVo endVo) {
        return flowableProcessInstanceService.stopProcess(endVo);
    }

    @Override
    public ReturnVo<HighLightedNodeVo> getHighLightedNodeVoByProcessInstanceId(String processInstanceId) {
        ReturnVo<HighLightedNodeVo> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        HighLightedNodeVo highLightedNodeVo = flowProcessDiagramService.getHighLightedNodeVoByProcessInstanceId(processInstanceId);
        returnVo.setData(highLightedNodeVo);
        return returnVo;
    }

    @Override
    public ReturnVo<List> getApps() {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        List<App> apps = appService.list();
        returnVo.setData(apps);
        return returnVo;
    }

    @Override
    public ReturnVo<List> getCategories() {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        Category category = new Category();
        category.setFrontShow(BaseCommonConstant.YES);
        List<Category> categories = categoryService.getCategories(category);
        returnVo.setData(categories);
        return returnVo;
    }
}
