package com.dragon.flow.service.form;

import com.dragon.flow.vo.flowable.runtime.StartProcessInstanceVo;
import com.dragon.tools.vo.ReturnVo;

/**
 * @program: flow
 * @description: 表单流程操作类
 * @author: Bruce.Liu
 * @create: 2023-02-19 14:20
 **/
public interface IFormFlowOperationService {

    ReturnVo<String> startFormFlow(StartProcessInstanceVo params) ;
}
