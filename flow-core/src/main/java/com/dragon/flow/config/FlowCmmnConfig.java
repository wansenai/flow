//package com.dragon.flow.config;
//
//import org.flowable.cmmn.converter.CmmnXmlConverter;
//import org.flowable.cmmn.editor.json.converter.CmmnJsonConverter;
//import org.flowable.cmmn.spring.SpringCmmnEngineConfiguration;
//import org.flowable.spring.boot.EngineConfigurationConfigurer;
//import org.flowable.spring.boot.cmmn.Cmmn;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.core.task.SyncTaskExecutor;
//import org.springframework.core.task.TaskExecutor;
//
///**
// * @Description: flowable配置
// * @Author: Bruce.liu
// * @Since:18:44 2021/9/7
// */
//@Configuration
//public class FlowCmmnConfig implements EngineConfigurationConfigurer<SpringCmmnEngineConfiguration> {
//
//    @Override
//    public void configure(SpringCmmnEngineConfiguration configuration) {
//
//    }
//
//    @Cmmn
//    @Bean
//    public TaskExecutor cmmnTaskExecutor() {
//        return new SyncTaskExecutor();
//    }
//
//    @Bean
//    public CmmnXmlConverter createCmmnXmlConverter() {
//        return new CmmnXmlConverter();
//    }
//    @Bean
//    public CmmnJsonConverter createCmmnJsonConverter() {
//        return new CmmnJsonConverter();
//    }
//
//}
