package com.dragon.flow.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.mapper.log.ISysOperRecordMapper;
import com.dragon.flow.model.log.SysOperRecord;
import com.dragon.flow.service.ISysOperRecordService;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-30
 */
@Service
public class SysOperRecordServiceImpl extends ServiceImpl<ISysOperRecordMapper, SysOperRecord> implements ISysOperRecordService {
    @Override
    public void saveSysOperRecord(SysOperRecord sysOperRecord) {
        this.save(sysOperRecord);
    }
}
