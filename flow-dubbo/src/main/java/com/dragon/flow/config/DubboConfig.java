package com.dragon.flow.config;

import org.apache.dubbo.config.spring.context.annotation.EnableDubbo;
import org.springframework.context.annotation.Configuration;

/**
 * @author bruce.liu
 * @description dubbo配置
 * @date 2021/8/17 22:14
 */
@Configuration
@EnableDubbo(scanBasePackages = "com.dragon.flow.api.impl.dubbo")
public class DubboConfig {
}
