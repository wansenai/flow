package com.dragon.flow.config;


import com.dragon.flow.listener.global.GlobalProcistEndListener;
import com.dragon.flow.listener.global.GlobalProcistStartListener;
import com.dragon.flow.listener.global.GlobalTaskCreateListener;
import org.flowable.common.engine.api.delegate.event.FlowableEngineEventType;
import org.flowable.common.engine.api.delegate.event.FlowableEventDispatcher;
import org.flowable.spring.SpringProcessEngineConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.event.ContextRefreshedEvent;

/**
 * @author : bruce.liu
 * @title: : FlowableGlobListenerConfig
 * @projectName : flowable
 * @description: 全局监听配置 ContextRefreshedEvent在类被初始化之后触发
 * @date : 2021/05/11
 */
@Configuration
public class FlowableGlobListenerConfig implements ApplicationListener<ContextRefreshedEvent> {
    @Autowired
    private SpringProcessEngineConfiguration configuration;
    @Autowired
    private GlobalProcistEndListener globalProcistEndListener;
    @Autowired
    private GlobalProcistStartListener globalProcistStartListener;
    @Autowired
    private GlobalTaskCreateListener globalTaskCreateListener;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        FlowableEventDispatcher dispatcher = configuration.getEventDispatcher();
        //添加流程实例创建全局监听
        dispatcher.addEventListener(globalProcistStartListener, FlowableEngineEventType.PROCESS_STARTED);
        //添加流程实例结束全局监听
        dispatcher.addEventListener(globalProcistEndListener, FlowableEngineEventType.PROCESS_COMPLETED);
        dispatcher.addEventListener(globalTaskCreateListener, FlowableEngineEventType.TASK_CREATED);
    }
}
