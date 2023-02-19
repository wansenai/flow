package com.dragon.flow.service.form.impl;

import com.dragon.flow.service.form.IFormFlowOperationService;
import com.dragon.flow.service.flowable.IFlowableProcessInstanceService;
import com.dragon.flow.vo.flowable.runtime.StartProcessInstanceVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FormFlowOperationServiceImpl implements IFormFlowOperationService {

    @Autowired
    private IFlowableProcessInstanceService flowableProcessInstanceService;

    @Override
    public void startFormFlow(StartProcessInstanceVo params) {
        //1、启动流程

        //2、保存表单数据
        //3、撤回 任务审批
    }
}
