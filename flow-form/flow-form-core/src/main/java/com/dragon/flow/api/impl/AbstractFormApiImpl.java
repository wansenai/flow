package com.dragon.flow.api.impl;

import com.dragon.flow.api.IFormApi;
import com.dragon.flow.model.form.FormDataInfo;
import com.dragon.flow.model.form.FormInfo;
import com.dragon.flow.service.form.IFormDataInfoService;
import com.dragon.flow.service.form.IFormFlowOperationService;
import com.dragon.flow.service.form.IFormInfoService;
import com.dragon.flow.vo.flowable.runtime.StartProcessInstanceVo;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.vo.ReturnVo;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * @author bruce.liu
 * @description 抽象对外接口实现
 * @date 2021/8/18 17:47
 */
public abstract class AbstractFormApiImpl implements IFormApi {
    @Autowired
    private IFormInfoService formInfoService;
    @Autowired
    private IFormDataInfoService formDataInfoService;
    @Autowired
    private IFormFlowOperationService formFlowOperationService;

    @Override
    public ReturnVo<FormInfo> getFormInfoByModelKey(String modelKey) {
        ReturnVo<FormInfo> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        FormInfo formInfo = formInfoService.getModelInfoByCode(modelKey);
        returnVo.setData(formInfo);
        return returnVo;
    }

    @Override
    public ReturnVo<String> startFormFlow(StartProcessInstanceVo startProcessInstanceVo) {
        ReturnVo<String> returnVo = formFlowOperationService.startFormFlow(startProcessInstanceVo);
        return returnVo;
    }

    @Override
    public ReturnVo<FormDataInfo> getFormDataInfoByProcessInstanceId(String procInstId) {
        ReturnVo<FormDataInfo> returnVo = new ReturnVo<>(ReturnCode.FAIL, "获取表单数据失败！");
        try {
            FormDataInfo formDataInfo = formDataInfoService.getFormDataInfoByProcessInstanceId(procInstId);
            returnVo.setMsg("获取表单数据成功！");
            returnVo.setCode(ReturnCode.SUCCESS);
            returnVo.setData(formDataInfo);
        } catch (Exception e) {
            e.printStackTrace();
            returnVo.setMsg("获取表单数据异常！原因：" + e.getMessage());
        }
        return returnVo;
    }
}
