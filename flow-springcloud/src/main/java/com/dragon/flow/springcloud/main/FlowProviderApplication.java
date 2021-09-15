package com.dragon.flow.springcloud.main;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 * @program: prodflow
 * @description: springcloud启动类
 * @author: Bruce.Liu
 * @create: 2021-09-15 13:39
 **/
@Slf4j
@EnableAsync
@EnableScheduling
@EnableDiscoveryClient
@EnableTransactionManagement
@SpringBootApplication(scanBasePackages = "com.dragon.flow")
public class FlowProviderApplication {

	public static void main(String[] args) {
		SpringApplication.run(FlowProviderApplication.class, args);
	}

}
