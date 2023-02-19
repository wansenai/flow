package com.dragon.flow.service.form.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.mapper.log.ISysOperRecordMapper;
import com.dragon.flow.model.log.SysOperRecord;
import com.dragon.flow.service.ISysOperRecordService;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import org.apache.commons.lang.StringUtils;
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

    @Override
    public PagerModel<SysOperRecord> getPagerModelByWrapper(SysOperRecord sysOperRecord, Query query) {
        if (query == null) query = new Query();
        //参数一是当前页，参数二是每页个数
        LambdaQueryWrapper<SysOperRecord> appLambdaQueryWrapper = new LambdaQueryWrapper<>();
        if (StringUtils.isNotBlank(sysOperRecord.getUserName())){
            appLambdaQueryWrapper
                    .like(SysOperRecord::getUserCode, sysOperRecord.getUserName())
                    .or()
                    .like(SysOperRecord::getUserName, sysOperRecord.getUserName());
        }

        if(StringUtils.isNotBlank(sysOperRecord.getUserCode())){
            appLambdaQueryWrapper.eq(SysOperRecord::getUserCode, sysOperRecord.getUserCode());
        }

        if (sysOperRecord.getStartTime() != null && sysOperRecord.getEndTime() != null) {
            appLambdaQueryWrapper.ge(SysOperRecord::getDateTime, sysOperRecord.getStartTime());
            appLambdaQueryWrapper.le(SysOperRecord::getDateTime, sysOperRecord.getEndTime());
        }
        appLambdaQueryWrapper.orderByDesc(SysOperRecord::getDateTime);
        IPage<SysOperRecord> queryPage = new Page<>(query.getPageNum(), query.getPageSize());
        IPage<SysOperRecord> page = this.page(queryPage, appLambdaQueryWrapper);
        return new PagerModel<>(page.getTotal(), page.getRecords());
    }
}
