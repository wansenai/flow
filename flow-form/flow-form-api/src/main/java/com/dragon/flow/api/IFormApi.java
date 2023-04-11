package com.dragon.flow.api;

import com.dragon.flow.model.form.FormDataInfo;
import com.dragon.flow.model.form.FormInfo;
import com.dragon.flow.vo.flowable.runtime.StartProcessInstanceVo;
import com.dragon.tools.vo.ReturnVo;

/**
 * @program: flow
 * @description: 流程接口
 * @author: Bruce.Liu
 * @create: 2021-05-08 14:21
 **/
public interface IFormApi {
    /**
     * 通过modelKey获取表单结构数据
     *
     * @param modelKey 参数
     * @return
     */
    ReturnVo<FormInfo> getFormInfoByModelKey(String modelKey);

    /**
     * 发起流程
     *
     * @param formDataInfo 参数
     * @return
     */
    ReturnVo<String> startFormFlow(StartProcessInstanceVo startProcessInstanceVo) ;




}