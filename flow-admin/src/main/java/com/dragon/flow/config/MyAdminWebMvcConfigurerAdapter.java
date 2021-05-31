package com.dragon.flow.config;

import com.baomidou.kisso.web.interceptor.SSOSpringInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-17 09:45
 **/
@Configuration
public class MyAdminWebMvcConfigurerAdapter extends MyWebMvcConfigurerAdapter {

    @Autowired
    private SSOSpringInterceptor ssoSpringInterceptor;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        super.addResourceHandlers(registry);
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        super.addInterceptors(registry);
        //拦截前端调用的API的接口
        registry.addInterceptor(ssoSpringInterceptor).addPathPatterns("/api/flow/**");
    }
}
