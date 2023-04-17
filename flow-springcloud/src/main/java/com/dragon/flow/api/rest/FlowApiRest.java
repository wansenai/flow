package com.dragon.flow.api.rest;

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
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @program: flow
 * @description: 接口实现
 * @author: Bruce.Liu
 * @create: 2021-09-15 14:36
 **/
@Api(tags = "流程中心相关接口")
@RestController
@RequestMapping("/api/flow")
public class FlowApiRest extends AbstractFlowApiImpl {

    @Override
    @ApiOperation(value = "通过modelKey获取模型对象", notes = "通过modelKey获取模型对象")
    @ApiImplicitParam(name = "modelKey", dataType = "String", required = true, value = "模型Key", defaultValue = "test_leave")
    @PostMapping(value = "/loadBpmnXmlByModelKey", produces = "application/json")
    public ReturnVo<ModelInfoVo> loadBpmnXmlByModelKey(String modelKey) {
        return super.loadBpmnXmlByModelKey(modelKey);
    }

    @Override
    @ApiOperation(value = "查询节点信息", notes = "查询节点信息")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "processInstanceId", dataType = "String", required = true, value = "流程实例id", defaultValue = "018273249827498324"),
            @ApiImplicitParam(name = "activityId", dataType = "String", required = true, value = "节点id", defaultValue = "12143334")
    })
    @PostMapping(value = "/getOneActivityVoByProcessInstanceIdAndActivityId", produces = "application/json")
    public ReturnVo<ActivityVo> getOneActivityVoByProcessInstanceIdAndActivityId(String processInstanceId, String activityId) {
        return super.getOneActivityVoByProcessInstanceIdAndActivityId(processInstanceId,activityId);
    }

    @Override
    @ApiOperation(value = "查询我发起的流程", notes = "查询我发起的流程列表")
    @ApiImplicitParam(name = "processInstanceVoParamVo", value = "分页查询参数", required = true, dataType = "ParamVo")
    @PostMapping(value = "/findMyProcessinstancesPagerModel", produces = "application/json")
    public ReturnVo<PagerModel> findMyProcessinstancesPagerModel(@RequestBody ParamVo<InstanceQueryParamsVo> processInstanceVoParamVo) {
        return super.findMyProcessinstancesPagerModel(processInstanceVoParamVo);
    }

    @Override
    @ApiOperation(value = "查询我的待办任务总数", notes = "查询我的待办任务总数")
    @ApiImplicitParam(name = "getAppingTaskCont", value = "查询参数", required = true, dataType = "params")
    @PostMapping(value = "/getAppingTaskCont", produces = "application/json")
    public ReturnVo<Long> getAppingTaskCont(@RequestBody TaskQueryParamsVo params) {
        return super.getAppingTaskCont(params);
    }

    @Override
    @ApiOperation(value = "查询我的待办任务", notes = "查询我的待办任务列表")
    @ApiImplicitParam(name = "getAppingTasksPagerModel", value = "分页查询参数", required = true, dataType = "ParamVo")
    @PostMapping(value = "/getAppingTasksPagerModel", produces = "application/json")
    public ReturnVo<PagerModel> getAppingTasksPagerModel(@RequestBody ParamVo<TaskQueryParamsVo> taskQueryParamsVoParamVo) {
        return super.getAppingTasksPagerModel(taskQueryParamsVoParamVo);
    }

    @Override
    @ApiOperation(value = "查询我的已办任务", notes = "查询我的已办任务列表")
    @ApiImplicitParam(name = "getApplyedTasksPagerModel", value = "分页查询参数", required = true, dataType = "ParamVo")
    @PostMapping(value = "/getApplyedTasksPagerModel", produces = "application/json")
    public ReturnVo<PagerModel> getApplyedTasksPagerModel(@RequestBody ParamVo<TaskQueryParamsVo> taskQueryParamsVoParamVo) {
        return super.getApplyedTasksPagerModel(taskQueryParamsVoParamVo);
    }

    @Override
    @ApiOperation(value = "查询当前流程的审批记录", notes = "查询当前流程的审批记录列表")
    @ApiImplicitParam(name = "getCommentInfosByProcessInstanceId", value = "流程实例id", required = true, dataType = "String")
    @PostMapping(value = "/getCommentInfosByProcessInstanceId", produces = "application/json")
    public ReturnVo<List> getCommentInfosByProcessInstanceId(String processInstanceId) {
        return super.getCommentInfosByProcessInstanceId(processInstanceId);
    }

    @Override
    @ApiOperation(value = "启动流程", notes = "启动流程")
    @ApiImplicitParam(name = "startProcessInstanceByKey", value = "启动流程", required = true, dataType = "StartProcessInstanceVo")
    @PostMapping(value = "/startProcessInstanceByKey", produces = "application/json")
    public ReturnVo<String> startProcessInstanceByKey(@RequestBody StartProcessInstanceVo params) {
        return super.startProcessInstanceByKey(params);
    }

    @Override
    @ApiOperation(value = "审批", notes = "审批")
    @ApiImplicitParam(name = "complete", value = "审批", required = true, dataType = "completeTaskVo")
    @PostMapping(value = "/complete", produces = "application/json")
    public ReturnVo<String> complete(@RequestBody CompleteTaskVo completeTaskVo) throws FlowException {
        return super.complete(completeTaskVo);
    }

    @Override
    @ApiOperation(value = "拒绝", notes = "拒绝")
    @ApiImplicitParam(name = "stopProcess", value = "拒绝", required = true, dataType = "endVo")
    @PostMapping(value = "/stopProcess", produces = "application/json")
    public ReturnVo<String> stopProcess(@RequestBody EndVo endVo) {
        return super.stopProcess(endVo);
    }

    @Override
    @ApiOperation(value = "获取高亮线和节点", notes = "获取高亮线和节点")
    @ApiImplicitParam(name = "getHighLightedNodeVoByProcessInstanceId", value = "getHighLightedNodeVoByProcessInstanceId", required = true, dataType = "String")
    @PostMapping(value = "/getHighLightedNodeVoByProcessInstanceId", produces = "application/json")
    public ReturnVo<HighLightedNodeVo> getHighLightedNodeVoByProcessInstanceId(String processInstanceId) {
        return super.getHighLightedNodeVoByProcessInstanceId(processInstanceId);
    }

    @Override
    @ApiOperation(value = "获取所有系统", notes = "获取所有系统")
    @ApiImplicitParam(name = "getApps", value = "getApps")
    @PostMapping(value = "/getApps", produces = "application/json")
    public ReturnVo<List> getApps() {
        return super.getApps();
    }

    @Override
    @ApiOperation(value = "获取所有流程分类", notes = "获取所有流程分类")
    @ApiImplicitParam(name = "getCategories", value = "getCategories")
    @PostMapping(value = "/getCategories", produces = "application/json")
    public ReturnVo<List> getCategories() {
        return super.getCategories();
    }
}
