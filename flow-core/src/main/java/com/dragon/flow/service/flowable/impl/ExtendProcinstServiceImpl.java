package com.dragon.flow.service.flowable.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.IdWorker;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.enm.flowable.runtime.ProcessStatusEnum;
import com.dragon.flow.mapper.flowable.IExtendProcinstMapper;
import com.dragon.flow.model.flowable.ExtendHisprocinst;
import com.dragon.flow.model.flowable.ExtendProcinst;
import com.dragon.flow.service.flowable.IExtendHisprocinstService;
import com.dragon.flow.service.flowable.IExtendProcinstService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-21
 */
@Service
public class ExtendProcinstServiceImpl extends ServiceImpl<IExtendProcinstMapper, ExtendProcinst> implements IExtendProcinstService {

    @Autowired
    private IExtendHisprocinstService extendHisprocinstService;

    @Override
    public void deleteExtendProcinstByProcessInstanceId(String processInstanceId) {
        LambdaQueryWrapper<ExtendProcinst> extendProcinstLambdaQueryWrapper = new LambdaQueryWrapper<>();
        extendProcinstLambdaQueryWrapper.eq(ExtendProcinst::getProcessInstanceId, processInstanceId);
        this.remove(extendProcinstLambdaQueryWrapper);
    }

    @Override
    public void saveExtendProcinstAndHis(ExtendProcinst extendProcinst) {
        if (StringUtils.isBlank(extendProcinst.getId())) {
            extendProcinst.setId(IdWorker.get32UUID());
        }
        extendProcinst.setCreateTime(new Date());
        extendProcinst.setUpdateTime(new Date());
        this.saveOrUpdate(extendProcinst);
        ExtendHisprocinst extendHisprocinst = new ExtendHisprocinst();
        BeanUtils.copyProperties(extendProcinst, extendHisprocinst);
        this.extendHisprocinstService.saveOrUpdate(extendHisprocinst);
    }

    @Override
    public void updateStatus(ProcessStatusEnum processStatus, String processInstanceId) {
        LambdaUpdateWrapper<ExtendProcinst> extendProcinstLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
        extendProcinstLambdaUpdateWrapper.set(ExtendProcinst::getProcessStatus, processStatus.getType())
                .eq(ExtendProcinst::getProcessInstanceId, processInstanceId);
        this.update(extendProcinstLambdaUpdateWrapper);
        LambdaUpdateWrapper<ExtendHisprocinst> extendHisprocinstLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
        extendHisprocinstLambdaUpdateWrapper.set(ExtendHisprocinst::getProcessStatus, processStatus.getType())
                .eq(ExtendHisprocinst::getProcessInstanceId, processInstanceId);
        extendHisprocinstService.update(extendHisprocinstLambdaUpdateWrapper);
    }

    @Override
    public ExtendProcinst findExtendProcinstByProcessInstanceId(String processInstanceId) {
        LambdaQueryWrapper<ExtendProcinst> extendProcinstLambdaQueryWrapper = new LambdaQueryWrapper<>();
        extendProcinstLambdaQueryWrapper.eq(ExtendProcinst::getProcessInstanceId, processInstanceId);
        return this.getOne(extendProcinstLambdaQueryWrapper);
    }
}
