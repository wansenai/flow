package com.dragon.flow.service.form;

import com.dragon.flow.vo.flowable.runtime.StartProcessInstanceVo;

/**
 * @program: flow
 * @description: 表单流程操作类
 * @author: Bruce.Liu
 * @create: 2023-02-19 14:20
 **/
public interface IFormFlowOperationService {
    /**
     *
     * @param params
     */
    void startFormFlow(StartProcessInstanceVo params) ;
}
