package com.dragon.flow.api.rest;

import com.dragon.flow.api.impl.AbstractFormApiImpl;
import com.dragon.flow.model.form.FormDataInfo;
import com.dragon.flow.model.form.FormInfo;
import com.dragon.flow.vo.flowable.runtime.StartProcessInstanceVo;
import com.dragon.tools.vo.ReturnVo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @program: flow
 * @description: 接口实现
 * @author: Bruce.Liu
 * @create: 2021-05-08 14:36
 **/
@Api(tags = "流程中心相关接口")
@RestController
@RequestMapping("/api/flow")
public class FormApiRest extends AbstractFormApiImpl {
    protected Logger logger = LoggerFactory.getLogger(this.getClass());


    @Override
    @ApiOperation(value = "通过modelKey获取表单结构对象", notes = "通过modelKey获取表单结构对象")
    @ApiImplicitParam(name = "modelKey", dataType = "String", required = true, value = "模型Key", defaultValue = "test_leave")
    @PostMapping(value = "/getFormInfoByModelKey", produces = "application/json")
    public ReturnVo<FormInfo> getFormInfoByModelKey(String modelKey) {
        return super.getFormInfoByModelKey(modelKey);
    }

    @Override
    @ApiOperation(value = "启动流程", notes = "启动流程")
    @ApiImplicitParam(name = "startProcessInstanceVo", dataType = "StartProcessInstanceVo", required = true)
    @PostMapping(value = "/startFormFlow", produces = "application/json")
    public ReturnVo<String> startFormFlow(@RequestBody StartProcessInstanceVo startProcessInstanceVo) {
        return super.startFormFlow(startProcessInstanceVo);
    }

    @Override
    @ApiOperation(value = "通过流程实例Id获取表单数据", notes = "通过流程实例Id获取表单数据")
    @ApiImplicitParam(name = "procInstId", dataType = "String", required = true, value = "流程实例ID", defaultValue = "xxxx")
    @PostMapping(value = "/getFormDataInfoByProcessInstanceId", produces = "application/json")
    public ReturnVo<FormDataInfo> getFormDataInfoByProcessInstanceId(String procInstId) {
        return super.getFormDataInfoByProcessInstanceId(procInstId);
    }

}
