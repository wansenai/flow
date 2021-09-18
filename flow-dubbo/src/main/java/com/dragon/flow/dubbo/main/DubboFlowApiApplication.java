package com.dragon.flow.dubbo.main;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 * @program: prodflow
 * @description: 启动类
 * @author: Bruce.Liu
 * @create: 2021-04-28 13:39
 **/
@Slf4j
@EnableAsync
@EnableScheduling
@EnableTransactionManagement
@SpringBootApplication(scanBasePackages = "com.dragon.flow")
public class DubboFlowApiApplication {
    public static void main(String[] args) {
        SpringApplication.run(DubboFlowApiApplication.class, args);
        log.info("###########################流程dubbo接口程序启动成功##################################");
    }
}
