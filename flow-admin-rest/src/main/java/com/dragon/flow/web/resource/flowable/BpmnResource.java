package com.dragon.flow.web.resource.flowable;

import com.dragon.flow.service.flowable.IFlowProcessDiagramService;
import com.dragon.flow.service.flowable.IFlowableBpmnService;
import com.dragon.flow.vo.flowable.model.HighLightedNodeVo;
import com.dragon.flow.vo.flowable.model.ModelInfoVo;
import com.dragon.flow.vo.flowable.task.ActivityVo;
import com.dragon.flow.web.resource.BaseResource;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.vo.ReturnVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.ByteArrayInputStream;
import java.util.List;

/**
 * @program: flow
 * @description: 流程引擎控制器
 * @author: Bruce.Liu
 * @create: 2021-04-22 14:49
 **/
@RestController
@RequestMapping("/flow/flowable/bpmn")
public class BpmnResource extends BaseResource {
    private static final String MODULE_SN = "Bpmn:";
    @Autowired
    private IFlowableBpmnService flowableBpmnService;
    @Autowired
    private IFlowProcessDiagramService flowProcessDiagramService;

    /**
     * 添加bpmnModel
     *
     * @param modelInfoVo 参数
     * @return
     */
    @PostMapping(value = "/saveBpmnModel", produces = "application/json")
    public ReturnVo<String> saveBpmnModel(@RequestBody ModelInfoVo modelInfoVo) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(modelInfoVo.getModelXml().getBytes());
        ReturnVo<String> representationReturnVo = flowableBpmnService.importBpmnModel(modelInfoVo.getModelId(),
                modelInfoVo.getFileName(), byteArrayInputStream, this.getLoginUser());
        if (!representationReturnVo.isSuccess()){
            returnVo = new ReturnVo<>(ReturnCode.FAIL, representationReturnVo.getMsg());
            return returnVo;
        } else {
            returnVo.setData(representationReturnVo.getData());
        }
        return returnVo;
    }

    /**
     * 发布Bpmn
     *
     * @param modelId 模型id
     * @return
     */
    @PostMapping(value = "/publishBpmn/{modelId}", produces = "application/json")
    public ReturnVo<String> publishBpmn(@PathVariable String modelId) {
        ReturnVo<String> returnVo = flowableBpmnService.publishBpmn(modelId);
        return returnVo;
    }

    /**
     * 停用Bpmn
     *
     * @param modelId 模型id
     * @return
     */
    @PostMapping(value = "/stopBpmn/{modelId}", produces = "application/json")
    public ReturnVo<String> stopBpmn(@PathVariable String modelId) {
        ReturnVo<String> returnVo = flowableBpmnService.stopBpmn(modelId);
        return returnVo;
    }

    /**
     * 获取
     *
     * @param modelId 模型id
     * @return
     */
    @GetMapping(value = "/getBpmnByModelId/{modelId}", produces = "application/json")
    public ReturnVo<ModelInfoVo> getBpmnByModelId(@PathVariable String modelId) {
        ReturnVo<ModelInfoVo> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "获取数据成功！");
        ModelInfoVo modelInfoVo = flowableBpmnService.loadBpmnXmlByModelId(modelId);
        returnVo.setData(modelInfoVo);
        return returnVo;
    }

    /**
     * 获取
     *
     * @param modelKey 模型key
     * @return
     */
    @GetMapping(value = "/getBpmnByModelKey/{modelKey}", produces = "application/json")
    public ReturnVo<ModelInfoVo> getBpmnByModelKey(@PathVariable String modelKey) {
        ReturnVo<ModelInfoVo> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "获取数据成功！");
        ModelInfoVo modelInfoVo = flowableBpmnService.loadBpmnXmlByModelKey(modelKey);
        returnVo.setData(modelInfoVo);
        return returnVo;
    }

    /**
     * 通过流程实例id获取流程图和高亮线和高亮节点
     *
     * @param processInstanceId 流程实例id
     * @return
     */
    @GetMapping(value = "/getHighLightedNodeVoByProcessInstanceId/{processInstanceId}", produces = "application/json")
    public ReturnVo<HighLightedNodeVo> getHighLightedNodeVoByProcessInstanceId(@PathVariable String processInstanceId) {
        ReturnVo<HighLightedNodeVo> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        HighLightedNodeVo highLightedNodeVo = flowProcessDiagramService.getHighLightedNodeVoByProcessInstanceId(processInstanceId);
        returnVo.setData(highLightedNodeVo);
        return returnVo;
    }

    /**
     * 过流程实例id获取节点的信息
     *
     * @param processInstanceId 流程实例id
     * @param activityId        节点id
     * @return
     */
    @GetMapping(value = "/getOneActivityVoByProcessInstanceIdAndActivityId/{processInstanceId}/{activityId}", produces = "application/json")
    public ReturnVo<ActivityVo> getOneActivityVoByProcessInstanceIdAndActivityId(@PathVariable String processInstanceId, @PathVariable String activityId) {
        ReturnVo<ActivityVo> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        ActivityVo processActivityVo = flowProcessDiagramService.getOneActivityVoByProcessInstanceIdAndActivityId(processInstanceId, activityId);
        returnVo.setData(processActivityVo);
        return returnVo;
    }

    /**
     * 通过流程实例id获取每个节点的审批人信息
     *
     * @param processInstanceId 流程实例id
     * @return
     */
    @GetMapping(value = "/getProcessActivityVosByProcessInstanceId/{processInstanceId}", produces = "application/json")
    public ReturnVo<List> getProcessActivityVosByProcessInstanceId(@PathVariable String processInstanceId) {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        List<ActivityVo> processActivityVos = flowProcessDiagramService.getProcessActivityVosByProcessInstanceId(processInstanceId);
        returnVo.setData(processActivityVos);
        return returnVo;
    }

}
