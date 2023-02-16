package com.dragon.flow.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.log.SysOperRecord;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;

/**
 * @program: prodflow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-04-30 10:33
 **/
public interface ISysOperRecordService extends IService<SysOperRecord> {
    void saveSysOperRecord(SysOperRecord sysOperRecord);

    /**
     * 分页查询操作日志
     *
     * @param sysOperRecord 参数
     * @param query    分页参数
     * @return
     */
    PagerModel<SysOperRecord> getPagerModelByWrapper(SysOperRecord sysOperRecord, Query query);

}
