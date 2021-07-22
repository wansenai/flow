package com.dragon.flow.config;

import org.flowable.dmn.editor.converter.DmnJsonConverter;
import org.flowable.dmn.spring.SpringDmnEngineConfiguration;
import org.flowable.dmn.xml.converter.DmnXMLConverter;
import org.flowable.engine.ProcessEngineConfiguration;
import org.flowable.spring.boot.EngineConfigurationConfigurer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @Description: flowable配置
 * @Author: Bruce.liu
 * @Since:18:44 2021/9/7
 */
@Configuration
public class FlowDmnConfig implements EngineConfigurationConfigurer<SpringDmnEngineConfiguration> {

    @Override
    public void configure(SpringDmnEngineConfiguration configuration) {
        //设置是否升级 false不升级  true升级
        configuration.setDatabaseSchemaUpdate(ProcessEngineConfiguration.DB_SCHEMA_UPDATE_TRUE);
    }

    @Bean
    public DmnXMLConverter createDmnXMLConverter() {
        return new DmnXMLConverter();
    }

    @Bean
    public DmnJsonConverter createDmnJsonConverter() {
        return new DmnJsonConverter();
    }

}
