package com.dragon.flow.api.impl;

import com.dragon.flow.api.IFormApi;
import com.dragon.flow.model.form.FormInfo;
import com.dragon.flow.service.form.IFormInfoService;
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
    @Override
    public ReturnVo<FormInfo> getFormInfoByModelKey(String modelKey) {
        ReturnVo<FormInfo> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        FormInfo formInfo = formInfoService.getModelInfoByCode(modelKey);
        returnVo.setData(formInfo);
        return returnVo;
    }
}
