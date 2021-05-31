package com.dragon.flow.config;

import com.baomidou.kisso.web.interceptor.SSOSpringInterceptor;
import com.dragon.flow.web.interceptor.LoginHandlerInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-17 11:41
 **/
@Configuration
public class KissoConfig {

    @Bean
    public SSOSpringInterceptor createSSOSpringInterceptor() {
        SSOSpringInterceptor ssoSpringInterceptor = new SSOSpringInterceptor();
        ssoSpringInterceptor.setHandlerInterceptor(new LoginHandlerInterceptor());
        return ssoSpringInterceptor;
    }
}
