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
 * @ClassName FlowManagerApplication
 * @Description 后台管理入口
 * @Author bruce.liu
 * @Date 2021/3/16/016 20:52
 * @Version 1.0
 **/
@EnableAsync
@EnableAspectJAutoProxy
@EnableScheduling
@EnableTransactionManagement
@SpringBootApplication(scanBasePackages = "com.dragon.flow")
public class FlowDubboApplication {
    private static final Logger logger = LoggerFactory.getLogger(FlowDubboApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(FlowDubboApplication.class, args);
        logger.info("###########################流程后台程序启动成功##################################");
    }
}
