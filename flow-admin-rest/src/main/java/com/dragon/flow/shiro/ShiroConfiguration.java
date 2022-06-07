//package com.dragon.flow.shiro;
//
//import com.dragon.flow.constant.FlowConstant;
//import org.apache.shiro.authc.credential.CredentialsMatcher;
//import org.apache.shiro.cache.ehcache.EhCacheManager;
//import org.apache.shiro.mgt.SecurityManager;
//import org.apache.shiro.session.mgt.SessionManager;
//import org.apache.shiro.session.mgt.ValidatingSessionManager;
//import org.apache.shiro.session.mgt.quartz.QuartzSessionValidationScheduler;
//import org.apache.shiro.spring.LifecycleBeanPostProcessor;
//import org.apache.shiro.spring.security.interceptor.AuthorizationAttributeSourceAdvisor;
//import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
//import org.apache.shiro.web.mgt.CookieRememberMeManager;
//import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
//import org.apache.shiro.web.servlet.SimpleCookie;
//import org.apache.shiro.web.session.mgt.DefaultWebSessionManager;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.aop.framework.autoproxy.DefaultAdvisorAutoProxyCreator;
//import org.springframework.beans.factory.annotation.Qualifier;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//import javax.servlet.Filter;
//import java.util.HashMap;
//import java.util.LinkedHashMap;
//import java.util.Map;
//
///**
// * @Description: shiro 配置
// * @Author: Bruce.liu
// * @Since:11:38 2021/05/03
// */
//@Configuration
//public class ShiroConfiguration {
//
//    Logger logger = LoggerFactory.getLogger(ShiroConfiguration.class);
//
//    @Bean(name = "shiroFilter")
//    public ShiroFilterFactoryBean shiroFilter(@Qualifier("securityManager") SecurityManager manager) {
//        ShiroFilterFactoryBean factoryBean = new ShiroFilterFactoryBean();
//        factoryBean.setSecurityManager(manager);
//        //配置登录的url和登录成功的url
//        factoryBean.setLoginUrl("/login");
//        factoryBean.setSuccessUrl("/p/main.html");
//        factoryBean.setUnauthorizedUrl("/login");
//        //配置访问权限
//        LinkedHashMap<String, String> filterChainDefinitionMap = new LinkedHashMap<>();
//        //表示可以匿名访问
//        filterChainDefinitionMap.put("/a/**", "anon");
//        filterChainDefinitionMap.put("/api/**", "anon");
//        filterChainDefinitionMap.put("/s/**", "anon");
//        filterChainDefinitionMap.put("/p/*", "anon");
//        filterChainDefinitionMap.put("/file/**", "anon");
//        filterChainDefinitionMap.put("/test*", "anon");
//        filterChainDefinitionMap.put("/common/*", "anon");
//
//        //表示需要认证才可以访问
//        filterChainDefinitionMap.put("/flow/**", "authc");
//        Map<String, Filter> filters = new HashMap<>();
//        //自定义过滤器   解决前后台分离的问题
//        filters.put("authc", new RestAuthorizationFilter());
//        FlowLogoutFilter logoutFilter = new FlowLogoutFilter();
//        filters.put("logout", logoutFilter);
//        factoryBean.setFilters(filters);
//        factoryBean.setFilterChainDefinitionMap(filterChainDefinitionMap);
//        return factoryBean;
//    }
//
//    /**
//     * 配置核心安全事务管理器
//     */
//    @Bean(name = "securityManager")
//    public SecurityManager securityManager(@Qualifier("authRealm") AuthRealm authRealm) {
//        logger.info("--------------shiro已经加载----------------");
//        DefaultWebSecurityManager manager = new DefaultWebSecurityManager();
//        manager.setRealm(authRealm);
//        manager.setSessionManager(createSessionManager());
//        manager.setRememberMeManager(creatCookieRememberMeManager());
//        return manager;
//    }
//
//    /**
//     * 配置自定义的权限登录器
//     *
//     * @param matcher
//     * @return
//     */
//    @Bean(name = "authRealm")
//    public AuthRealm authRealm(@Qualifier("credentialsMatcher") CredentialsMatcher matcher) {
//        AuthRealm authRealm = new AuthRealm();
//        authRealm.setCredentialsMatcher(matcher);
//        return authRealm;
//    }
//
//    /**
//     * rememberMeManager管理器，写cookie，取出cookie生成用户信息
//     *
//     * @return
//     */
//    @Bean
//    public CookieRememberMeManager creatCookieRememberMeManager() {
//        CookieRememberMeManager cookieRememberMeManager = new CookieRememberMeManager();
//        SimpleCookie cookie = new SimpleCookie("remember_me");
//        cookie.setMaxAge(10000);
//        cookie.setHttpOnly(true);
//        cookie.setPath("/");
//        cookieRememberMeManager.setCookie(cookie);
//        return cookieRememberMeManager;
//    }
//
//    /**
//     * 创建自定义的sessionDao
//     *
//     * @return
//     */
//    @Bean
//    public MySessionDao createSessionDao() {
//        MySessionDao mySessionDao = new MySessionDao();
//        mySessionDao.setSessionIdGenerator(new JavaUuidSessionIdGenerator());
//        return mySessionDao;
//    }
//
//    /**
//     * 定义sessionManager
//     *
//     * @return
//     */
//    @Bean(name = "sessionManager")
//    public SessionManager createSessionManager() {
//        DefaultWebSessionManager sessionManager = new DefaultWebSessionManager();
//        sessionManager.setGlobalSessionTimeout(1000 * 3600 * 4);
//        sessionManager.setSessionValidationInterval(1000 * 5);
//        sessionManager.setDeleteInvalidSessions(true);
//        sessionManager.setSessionValidationScheduler(createQuartzSessionValidationScheduler(sessionManager));
//        sessionManager.setSessionValidationSchedulerEnabled(true);
//        sessionManager.setSessionDAO(createSessionDao());
//        sessionManager.setSessionIdCookieEnabled(true);
//        SimpleCookie cookie = new SimpleCookie(FlowConstant.DRAGON_SESSION_ID);
//        cookie.setMaxAge(-1);
//        cookie.setHttpOnly(true);
//        cookie.setPath("/");
//        sessionManager.setSessionIdCookie(cookie);
//        return sessionManager;
//    }
//
//    /**
//     * 创建QuartzSessionValidationScheduler
//     *
//     * @return
//     */
//    @Bean(name = "quartzSessionValidationScheduler")
//    public QuartzSessionValidationScheduler createQuartzSessionValidationScheduler(@Qualifier("sessionManager") SessionManager sessionManager) {
//        QuartzSessionValidationScheduler quartzSessionValidationScheduler = new QuartzSessionValidationScheduler();
//        quartzSessionValidationScheduler.setSessionValidationInterval(1000 * 60);
//        quartzSessionValidationScheduler.setSessionManager((ValidatingSessionManager) sessionManager);
//        return quartzSessionValidationScheduler;
//    }
//
//    /**
//     * 配置自定义的密码比较器
//     *
//     * @return
//     */
//    @Bean(name = "credentialsMatcher")
//    public CredentialsMatcher credentialsMatcher() {
//        return new MyCredentialsMatcher();
//    }
//
//    @Bean
//    public LifecycleBeanPostProcessor lifecycleBeanPostProcessor() {
//        return new LifecycleBeanPostProcessor();
//    }
//
//    @Bean
//    public DefaultAdvisorAutoProxyCreator defaultAdvisorAutoProxyCreator() {
//        DefaultAdvisorAutoProxyCreator creator = new DefaultAdvisorAutoProxyCreator();
//        creator.setProxyTargetClass(true);
//        return creator;
//    }
//
//    /**
//     * 开启shiro aop注解支持.
//     * 使用代理方式;所以需要开启代码支持;
//     *
//     * @param manager
//     * @return
//     */
//    @Bean
//    public AuthorizationAttributeSourceAdvisor authorizationAttributeSourceAdvisor(@Qualifier("securityManager") SecurityManager manager) {
//        AuthorizationAttributeSourceAdvisor advisor = new AuthorizationAttributeSourceAdvisor();
//        advisor.setSecurityManager(manager);
//        return advisor;
//    }
//
//}
