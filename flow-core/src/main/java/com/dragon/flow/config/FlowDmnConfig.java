package com.dragon.flow.config;

import org.flowable.dmn.editor.converter.DmnJsonConverter;
import org.flowable.dmn.spring.SpringDmnEngineConfiguration;
import org.flowable.dmn.xml.converter.DmnXMLConverter;
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
