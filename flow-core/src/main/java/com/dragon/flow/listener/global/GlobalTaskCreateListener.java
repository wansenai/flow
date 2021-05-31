package com.dragon.flow.listener.global;

import org.flowable.common.engine.api.delegate.event.FlowableEngineEntityEvent;
import org.flowable.common.engine.impl.event.FlowableEntityEventImpl;
import org.flowable.engine.delegate.event.AbstractFlowableEngineEventListener;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

/**
 * @author : bruce.liu
 * @title: : GlobalTaskListener
 * @projectName : flow
 * @description: 任务创建全局监听
 * @date : 2021/05/11
 */
@Component
public class GlobalTaskCreateListener extends AbstractFlowableEngineEventListener {

    protected Logger logger = LoggerFactory.getLogger(this.getClass());

    @Override
    protected void taskCreated(FlowableEngineEntityEvent event) {
        FlowableEntityEventImpl flowableEntityEvent = (FlowableEntityEventImpl) event;

    }


}
