package com.dragon.flow.listener.leave;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.flowable.common.engine.api.delegate.Expression;
import org.flowable.engine.HistoryService;
import org.flowable.engine.RepositoryService;
import org.flowable.engine.delegate.DelegateExecution;
import org.flowable.engine.delegate.ExecutionListener;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

/**
 * @Description: 发送消息的监听器
 * @Author: Bruce.liu
 * @Since:13:40 2021/05/11
 */
@Component(value = "sendMessageExecutionCallListener")
public class SendMessageExecutionCallListener implements ExecutionListener {

    private static final long serialVersionUID = -5140234938739863473L;
    protected Logger logger = LoggerFactory.getLogger(getClass());
    /**
     * 抄送的用户的表达式 如${userIds}
     */
    private Expression userCodes;

    @Override
    public void notify(DelegateExecution execution) {
        Object obj = this.userCodes.getValue(execution);
        List<String> userCodeList = new ArrayList<>();
        if (obj instanceof String){
            String uids = (String) obj;
            if (StringUtils.isNotBlank(uids)){
                String[] split = uids.split(",");
                for (String userId : split) {
                    if (StringUtils.isNotBlank(userId)){
                        userCodeList.add(userId);
                    }
                }
            }
        } else if (obj instanceof List){
            userCodeList = (List<String>) obj;
        }
        if (CollectionUtils.isNotEmpty(userCodeList)){
            //TODO 发送消息
        }
    }

}
