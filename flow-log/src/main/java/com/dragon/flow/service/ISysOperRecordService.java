package com.dragon.flow.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.log.SysOperRecord;

/**
 * @program: prodflow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-04-30 10:33
 **/
public interface ISysOperRecordService extends IService<SysOperRecord> {
    void saveSysOperRecord(SysOperRecord sysOperRecord);
}
