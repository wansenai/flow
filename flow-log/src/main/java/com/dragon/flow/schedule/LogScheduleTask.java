package com.dragon.flow.schedule;

import com.dragon.flow.model.log.SysOperRecord;
import com.dragon.flow.service.ISysOperRecordService;
import com.dragon.tools.utils.FastJsonUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.io.Serializable;

@Slf4j
@Component
public class LogScheduleTask implements Serializable {

    @Autowired
    private ISysOperRecordService sysOperRecordService;
    @Autowired
    private LogQueue logQueue;

    @Scheduled(fixedRate = 500)
    public void consume() {
        if (logQueue.size() > 0) {
            String sysOperRecordStr = logQueue.take();
            if (sysOperRecordStr != null) {
//            log.info("线程名称"+Thread.currentThread().getName());
                SysOperRecord sysOperRecord = FastJsonUtils.jsonToObject(sysOperRecordStr, SysOperRecord.class);
                sysOperRecordService.saveSysOperRecord(sysOperRecord);
            }
        } else {
            try {
                Thread.sleep(5000);
            } catch (InterruptedException ite) {
                log.error("线程休眠失败", ite);
            }
        }
    }

}
