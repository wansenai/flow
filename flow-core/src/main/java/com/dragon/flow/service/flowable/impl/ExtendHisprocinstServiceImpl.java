package com.dragon.flow.service.flowable.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.enm.flowable.runtime.ProcessStatusEnum;
import com.dragon.flow.mapper.flowable.IExtendHisprocinstMapper;
import com.dragon.flow.model.flowable.ExtendHisprocinst;
import com.dragon.flow.model.flowable.ExtendProcinst;
import com.dragon.flow.service.flowable.IExtendHisprocinstService;
import com.dragon.flow.service.flowable.IExtendProcinstService;
import org.apache.commons.lang.StringUtils;
import org.flowable.engine.HistoryService;
import org.flowable.engine.history.HistoricProcessInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-21
 */
@Service
public class ExtendHisprocinstServiceImpl extends ServiceImpl<IExtendHisprocinstMapper, ExtendHisprocinst> implements IExtendHisprocinstService {
    @Lazy
    @Autowired
    private IExtendProcinstService extendProcinstService;
    @Autowired
    private HistoryService historyService;
    @Resource
    private ThreadPoolTaskExecutor executor;

    @Override
    public ExtendHisprocinst findExtendHisprocinstByProcessInstanceId(String processInstanceId) {
        LambdaQueryWrapper<ExtendHisprocinst> extendHisprocinstLambdaQueryWrapper = new LambdaQueryWrapper<>();
        extendHisprocinstLambdaQueryWrapper.eq(ExtendHisprocinst::getProcessInstanceId, processInstanceId);
        return this.getOne(extendHisprocinstLambdaQueryWrapper);
    }

    @Override
    public void updateAllStatusByProcessInstanceId(ExtendHisprocinst extendHisprocinst) {
        ExtendHisprocinst hisprocinst = findExtendHisprocinstByProcessInstanceId(extendHisprocinst.getProcessInstanceId());
        this.poolExecuteUpdateStatusByProcessInstanceId(hisprocinst.getProcessStatus(), extendHisprocinst.getProcessStatus(), extendHisprocinst.getProcessInstanceId());
        //处理子流程的扩展信息
        HistoricProcessInstance historicProcessInstance = historyService.createHistoricProcessInstanceQuery().processInstanceId(extendHisprocinst.getProcessInstanceId()).singleResult();
        if (historicProcessInstance != null) {
            String rootProcessInstanceId = historicProcessInstance.getSuperProcessInstanceId();
            if (StringUtils.isNotBlank(rootProcessInstanceId) && !rootProcessInstanceId.equals(extendHisprocinst.getProcessInstanceId())) {
                hisprocinst = this.findExtendHisprocinstByProcessInstanceId(rootProcessInstanceId);
                this.poolExecuteUpdateStatusByProcessInstanceId(hisprocinst.getProcessStatus(), extendHisprocinst.getProcessStatus(), rootProcessInstanceId);
            }
        }
    }

    private void updateStatusByProcessInstanceId(String oldStatus, String status, String processInstanceId) {
        if (!oldStatus.equals(ProcessStatusEnum.BJ.toString())
                && !oldStatus.equals(ProcessStatusEnum.ZZ.toString())) {
            LambdaUpdateWrapper<ExtendHisprocinst> extendHisprocinstLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
            extendHisprocinstLambdaUpdateWrapper.set(ExtendHisprocinst::getProcessStatus, status)
                    .eq(ExtendHisprocinst::getProcessInstanceId, processInstanceId);
            this.update(extendHisprocinstLambdaUpdateWrapper);
            LambdaUpdateWrapper<ExtendProcinst> extendProcinstLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
            extendProcinstLambdaUpdateWrapper.set(ExtendProcinst::getProcessStatus, status)
                    .eq(ExtendProcinst::getProcessInstanceId, processInstanceId);
            extendProcinstService.update(extendProcinstLambdaUpdateWrapper);
        }
    }

    private void poolExecuteUpdateStatusByProcessInstanceId(String oldStatus, String status, String processInstanceId) {
        executor.execute(() -> this.updateStatusByProcessInstanceId(oldStatus, status, processInstanceId));
    }
}
