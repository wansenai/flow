package com.dragon.flow.config.modeler;

import org.flowable.ui.modeler.service.FlowableModelQueryService;
import org.flowable.ui.modeler.service.ModelImageService;
import org.flowable.ui.modeler.service.ModelServiceImpl;
import org.flowable.ui.modeler.serviceapi.ModelService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @program: flow
 * @description: 流程设计器serviceconfig
 * @author: Bruce.Liu
 * @create: 2020-12-24 18:33
 **/
@Configuration
public class ModelerBeanConfig {
//    @Autowired
//    private FlowableCommonAppProperties properties;
//    @Autowired
//    private UserDetailsService userDetailsService;
//    @Autowired
//    private PersistentTokenService persistentTokenService;

    @Bean
    public ModelService createModelService() {
        return new ModelServiceImpl();
    }

    @Bean
    public ModelImageService createModelImageService() {
        return new ModelImageService();
    }

    @Bean
    public FlowableModelQueryService createFlowableModelQueryService() {
        return new FlowableModelQueryService();
    }

//    @Bean
//    public CustomPersistentRememberMeServices CustomPersistentRememberMeServices() {
//        return new CustomPersistentRememberMeServices(properties, userDetailsService, persistentTokenService);
//    }
}
