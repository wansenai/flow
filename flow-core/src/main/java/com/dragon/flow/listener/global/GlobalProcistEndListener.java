package com.dragon.flow.listener.global;

import com.dragon.flow.enm.flowable.runtime.CommentTypeEnum;
import com.dragon.flow.enm.flowable.runtime.ProcessStatusEnum;
import com.dragon.flow.model.flowable.CommentInfo;
import com.dragon.flow.model.flowable.ExtendHisprocinst;
import com.dragon.flow.service.flowable.ICommentInfoService;
import com.dragon.flow.service.flowable.IExtendHisprocinstService;
import com.dragon.flow.service.flowable.IExtendProcinstService;
import org.flowable.common.engine.api.delegate.event.FlowableEngineEntityEvent;
import org.flowable.engine.HistoryService;
import org.flowable.engine.delegate.event.AbstractFlowableEngineEventListener;
import org.flowable.engine.delegate.event.impl.FlowableEntityEventImpl;
import org.flowable.engine.history.HistoricProcessInstance;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * @author : bruce.liu
 * @title: : GlobalProcistEndListener
 * @projectName : flow
 * @description: 流程结束全局监听器
 * @date : 2021/05/11 10:37
 */
@Component
public class GlobalProcistEndListener extends AbstractFlowableEngineEventListener {
    protected Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private IExtendProcinstService extendProcinstService;
    @Autowired
    private IExtendHisprocinstService extendHisprocinstService;
    @Autowired
    private HistoryService historyService;
    @Autowired
    private ICommentInfoService commentInfoService;

    @Override
    protected void processCompleted(FlowableEngineEntityEvent event) {
        FlowableEntityEventImpl flowableEntityEvent = (FlowableEntityEventImpl) event;
        String processInstanceId = flowableEntityEvent.getProcessInstanceId();
        //拷贝数据
        this.updateExtendInfoToHis(processInstanceId);
    }

    /**
     * 更新历史的扩展信息
     *
     * @param processInstanceId 流程实例id
     */
    private void updateExtendInfoToHis(String processInstanceId) {
        //1.更新历史的流程实例的扩展信息
        ExtendHisprocinst extendHisProcinst = extendHisprocinstService.findExtendHisprocinstByProcessInstanceId(processInstanceId);
        String processStatus = ProcessStatusEnum.ZZ.toString();
        if (extendHisProcinst != null && !ProcessStatusEnum.ZZ.toString().equals(extendHisProcinst.getProcessStatus())){
            processStatus = ProcessStatusEnum.BJ.toString();
            ExtendHisprocinst extendHisprocinst = new ExtendHisprocinst(processInstanceId, processStatus);
            extendHisprocinstService.updateAllStatusByProcessInstanceId(extendHisprocinst);
        }
        //流程结束信息如果是知会不用评论
        HistoricProcessInstance historicProcessInstance = historyService.createHistoricProcessInstanceQuery().processInstanceId(processInstanceId).singleResult();
        //流程一发起就结束信息添加
        if (historicProcessInstance == null){
            ExtendHisprocinst extendHisprocinst = new ExtendHisprocinst(processInstanceId, ProcessStatusEnum.BJ.toString());
            extendHisprocinstService.updateAllStatusByProcessInstanceId(extendHisprocinst);
        }
        CommentInfo commentInfo = new CommentInfo();
        commentInfo.setProcessInstanceId(processInstanceId);
        commentInfo.setType(CommentTypeEnum.SPJS.name());
        commentInfo.setMessage(CommentTypeEnum.getEnumMsgByType(CommentTypeEnum.SPJS.toString()));
        commentInfo.setPersonalCode("system");
        commentInfoService.saveComment(commentInfo);
        //删除运行时的流程实例扩展信息
        extendProcinstService.deleteExtendProcinstByProcessInstanceId(processInstanceId);
        //发送mongodb的消息数据
        //发送消息
            /*if (!processStatus.equals(ProcessStatusEnum.ZZ.toString()) && dragonFlowProperties.isMessageEnabled()) {
                this.sendMessage(processInstanceId);
            }*/
    }
}
