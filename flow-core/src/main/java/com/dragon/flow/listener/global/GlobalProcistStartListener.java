package com.dragon.flow.listener.global;

import com.baomidou.mybatisplus.core.toolkit.IdWorker;
import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.enm.flowable.runtime.ProcessStatusEnum;
import com.dragon.flow.model.flowable.ExtendProcinst;
import com.dragon.flow.service.flowable.IExtendProcinstService;
import com.dragon.flow.vo.flowable.processinstance.ProcessInstanceVo;
import com.dragon.tools.common.UUIDGenerator;
import org.apache.commons.lang.StringUtils;
import org.flowable.engine.RuntimeService;
import org.flowable.engine.delegate.event.AbstractFlowableEngineEventListener;
import org.flowable.engine.delegate.event.FlowableProcessStartedEvent;
import org.flowable.engine.delegate.event.impl.FlowableEntityEventImpl;
import org.flowable.engine.impl.persistence.entity.ExecutionEntityImpl;
import org.flowable.engine.runtime.ProcessInstance;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.CacheManager;
import org.springframework.stereotype.Component;

/**
 * @author : bruce.liu
 * @title: : GlobalProcistStartListener
 * @projectName : flow
 * @description: 全局的流程启动的监听器
 * @date : 2021/05/11 10:33
 */
@Component
public class GlobalProcistStartListener extends AbstractFlowableEngineEventListener {
    protected Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private RuntimeService runtimeService;
    @Autowired
    private IExtendProcinstService extendProcinstService;

    @Override
    protected void processStarted(FlowableProcessStartedEvent event) {
        FlowableEntityEventImpl flowableEntityEvent = (FlowableEntityEventImpl) event;
        ExecutionEntityImpl processInstance = (ExecutionEntityImpl) flowableEntityEvent.getEntity();
        //创建子流程的扩展信息
        ExecutionEntityImpl parent = processInstance.getParent();
        if (StringUtils.isNotBlank(parent.getProcessInstanceId()) && StringUtils.isBlank(parent.getBusinessKey())){
            ProcessInstance superProcessInstance = runtimeService.createProcessInstanceQuery().processInstanceId(processInstance.getRootProcessInstanceId()).singleResult();
            //1、创建扩展信息
            ExtendProcinst extendProcinst = extendProcinstService.findExtendProcinstByProcessInstanceId(processInstance.getProcessInstanceId());
            if (extendProcinst == null){
                extendProcinst = new ExtendProcinst();
                extendProcinst.setProcessInstanceId(processInstance.getProcessInstanceId());
                extendProcinst.setModelKey(processInstance.getProcessDefinitionKey());
                extendProcinst.setProcessDefinitionId(processInstance.getProcessDefinitionId());
                extendProcinst.setId(IdWorker.get32UUID());
                extendProcinst.setCurrentUserCode(parent.getStartUserId());
                extendProcinst.setProcessStatus(ProcessStatusEnum.SPZ.toString());
                extendProcinstService.saveExtendProcinstAndHis(extendProcinst);
                //2、修改业务表单id到子流程中
                runtimeService.updateBusinessKey(processInstance.getProcessInstanceId(), superProcessInstance.getBusinessKey());
                runtimeService.setProcessInstanceName(processInstance.getProcessInstanceId(), superProcessInstance.getName());
            }
        }
    }
}
