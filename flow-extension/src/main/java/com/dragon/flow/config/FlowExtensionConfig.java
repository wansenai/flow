package com.dragon.flow.config;

import org.flowable.editor.language.json.converter.CustomBpmnJsonConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-14 15:31
 **/
@Configuration
public class FlowExtensionConfig {

    @Bean
    public CustomBpmnJsonConverter createCustomBpmnJsonConverter() {
        return new CustomBpmnJsonConverter();
    }
}
