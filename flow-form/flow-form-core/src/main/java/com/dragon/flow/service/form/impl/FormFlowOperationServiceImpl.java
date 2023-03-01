package com.dragon.flow.service.form.impl;

import com.dragon.flow.model.form.FormDataInfo;
import com.dragon.flow.service.flowable.IFlowableProcessInstanceService;
import com.dragon.flow.service.form.IFormDataInfoService;
import com.dragon.flow.service.form.IFormFlowOperationService;
import com.dragon.flow.vo.flowable.runtime.StartProcessInstanceVo;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.vo.ReturnVo;
import org.flowable.engine.runtime.ProcessInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class FormFlowOperationServiceImpl implements IFormFlowOperationService {

    @Autowired
    private IFlowableProcessInstanceService flowableProcessInstanceService;
    @Autowired
    private IFormDataInfoService formDataInfoService;

    @Override
    public ReturnVo<String> startFormFlow(StartProcessInstanceVo params) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.FAIL, "启动失败!");
        ReturnVo<ProcessInstance> processInstanceReturnVo = flowableProcessInstanceService.startProcessInstanceByKey(params);
        if (processInstanceReturnVo.isSuccess()) {
            ProcessInstance processInstance = processInstanceReturnVo.getData();
            FormDataInfo formDataInfo = new FormDataInfo();
            formDataInfo.setCreator(params.getCreator());
            formDataInfo.setCreateTime(new Date());
            formDataInfo.setUpdator(params.getCreator());
            formDataInfo.setUpdateTime(new Date());
            formDataInfo.setBusinessKey(params.getBusinessKey());
            formDataInfo.setProcessInstanceId(processInstance.getProcessInstanceId());
            formDataInfo.setModelKey(params.getProcessDefinitionKey());
            formDataInfo.setFormData(params.getFormData());
            formDataInfoService.saveOrUpdate(formDataInfo);
            returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "启动成功!");
            returnVo.setData(processInstance.getProcessInstanceId());
        } else {
            returnVo.setMsg(processInstanceReturnVo.getMsg());
        }
        return returnVo;
    }
}
