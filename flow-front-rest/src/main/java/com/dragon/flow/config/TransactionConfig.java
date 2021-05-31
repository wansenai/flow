package com.dragon.flow.config;

import org.aspectj.lang.annotation.Aspect;
import org.springframework.aop.framework.autoproxy.BeanNameAutoProxyCreator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionManager;
import org.springframework.transaction.interceptor.*;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * 事务配置
 *
 * @author bruce.liu
 * @date 2021/3/25 11:07
 */
@Aspect
@Configuration
public class TransactionConfig {
    @Autowired
    private TransactionManager transactionManager;

    @Bean(name = "txAdvice")
    public TransactionInterceptor txAdvice() {
        NameMatchTransactionAttributeSource source = new NameMatchTransactionAttributeSource();
        /*只读事务，不做更新操作*/
        RuleBasedTransactionAttribute readOnlyTx = new RuleBasedTransactionAttribute();
        readOnlyTx.setReadOnly(true);
        readOnlyTx.setPropagationBehavior(TransactionDefinition.PROPAGATION_NOT_SUPPORTED);
        /*当前存在事务就使用当前事务，当前不存在事务就创建一个新的事务*/
        RuleBasedTransactionAttribute requiredTx = new RuleBasedTransactionAttribute(TransactionDefinition.PROPAGATION_REQUIRED,
                Collections.singletonList(new RollbackRuleAttribute(Exception.class)));
//        requiredTx.setTimeout(5);
        Map<String, TransactionAttribute> txMap = new HashMap<>();
        txMap.put("save*", requiredTx);
        txMap.put("insert*", requiredTx);
        txMap.put("create*", requiredTx);
        txMap.put("add*", requiredTx);
        txMap.put("update*", requiredTx);
        txMap.put("edit*", requiredTx);
        txMap.put("del*", requiredTx);
        txMap.put("drop*", requiredTx);
        txMap.put("remove*", requiredTx);
        txMap.put("import*", requiredTx);
        txMap.put("active*", requiredTx);
        txMap.put("stop*", requiredTx);
        /*************************   flowable   **************************/
        txMap.put("start*", requiredTx);
        txMap.put("revoke*", requiredTx);
        txMap.put("complete*", requiredTx);
        txMap.put("turn*", requiredTx);
        txMap.put("claim*", requiredTx);
        txMap.put("back*", requiredTx);
        txMap.put("deploy*", requiredTx);
        txMap.put("set*", requiredTx);
        txMap.put("before*", requiredTx);
        txMap.put("after*", requiredTx);
        txMap.put("activate*", requiredTx);
        txMap.put("publish*", requiredTx);
        txMap.put("suspend*", requiredTx);
        txMap.put("sync*", requiredTx);
        txMap.put("review*", requiredTx);
        txMap.put("copy*", requiredTx);
        /*************************   flowable   **************************/
        txMap.put("query*", readOnlyTx);
        txMap.put("find*", readOnlyTx);
        txMap.put("select*", readOnlyTx);
        txMap.put("get*", readOnlyTx);
        txMap.put("*", readOnlyTx);
        source.setNameMap(txMap);
        return new TransactionInterceptor(transactionManager, source);
    }

    @Bean
    public BeanNameAutoProxyCreator txProxy() {
        BeanNameAutoProxyCreator creator = new BeanNameAutoProxyCreator();
        creator.setInterceptorNames("txAdvice");
        creator.setBeanNames("*Service", "*ServiceImpl", "*component", "*componentImpl");
        creator.setProxyTargetClass(true);
        return creator;
    }

}
