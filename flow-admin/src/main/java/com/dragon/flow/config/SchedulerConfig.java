package com.dragon.flow.config;

import com.dragon.flow.service.init.IInitSqlService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

/**
 * @author bruce.liu
 * @description 配置定时任务
 * @date 2021/8/26 17:24
 */
@Configuration
@EnableScheduling
@ConditionalOnProperty(prefix = "scheduling", name = "enabled", havingValue = "true", matchIfMissing = true)
public class SchedulerConfig {

    @Autowired
    private IInitSqlService initSqlService;

    /**
     * 每天凌晨三天清理数据
     */
//    @Scheduled(cron = "0 0 3 * * ?")
//    public void initSql() {
//        initSqlService.initSql();
//    }
}
