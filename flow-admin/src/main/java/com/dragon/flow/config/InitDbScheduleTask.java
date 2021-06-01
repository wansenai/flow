package com.dragon.flow.config;

import com.dragon.flow.service.init.IInitSqlService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

@Configuration
@EnableScheduling
public class InitDbScheduleTask {

    @Autowired
    private IInitSqlService initSqlService;

    @Scheduled(cron = "0 0 3 * * ?")
    public void initSql() {
        initSqlService.initSql();
    }
}
