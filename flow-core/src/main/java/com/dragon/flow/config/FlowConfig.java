package com.dragon.flow.config;

import com.dragon.tools.common.SpringContextHolder;
import org.flowable.common.engine.impl.de.odysseus.el.misc.TypeConverter;
import org.flowable.common.engine.impl.de.odysseus.el.misc.TypeConverterImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @program: flow
 * @description: 流程配置
 * @author: Bruce.Liu
 * @create: 2021-04-01 23:36
 **/
@Configuration
public class FlowConfig {
    @Bean
    public SpringContextHolder springContextHolder() {
        SpringContextHolder springContextHolder = new SpringContextHolder();
        return springContextHolder;
    }

    @Bean
    public TypeConverter typeConverter() {
        return new TypeConverterImpl();
    }

}
