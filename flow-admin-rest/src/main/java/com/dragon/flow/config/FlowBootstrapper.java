package com.dragon.flow.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

/**
 * @Description: 流程的初始化bean
 * @Author: Bruce.liu
 * @Since:16:36 2021/05/16
 */
@Component
public class FlowBootstrapper implements ApplicationListener<ContextRefreshedEvent> {
    private static final Logger LOGGER = LoggerFactory.getLogger(FlowBootstrapper.class);

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        //TODO 初始化数据
    }
}

