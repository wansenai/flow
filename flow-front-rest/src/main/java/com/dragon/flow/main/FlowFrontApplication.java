package com.dragon.flow.main;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 * @program: flow
 * @description: 前端启动类
 * @author: Bruce.Liu
 * @create: 2021-05-11 21:34
 **/
@EnableAsync
@EnableScheduling
@EnableAspectJAutoProxy
@EnableTransactionManagement
@SpringBootApplication(scanBasePackages = {"com.dragon.flow"})
public class FlowFrontApplication {
    private static final Logger logger = LoggerFactory.getLogger(FlowFrontApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(FlowFrontApplication.class, args);
        logger.info("###########################流程前台程序启动成功##################################");
    }
}
