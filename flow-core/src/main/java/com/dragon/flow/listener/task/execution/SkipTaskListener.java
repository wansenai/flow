package com.dragon.flow.listener.task.execution;

import org.flowable.bpmn.model.UserTask;
import org.flowable.engine.delegate.DelegateExecution;
import org.flowable.engine.delegate.ExecutionListener;
import org.springframework.stereotype.Component;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-11 16:59
 **/
@Component("skipTaskListener")
public class SkipTaskListener implements ExecutionListener {
    @Override
    public void notify(DelegateExecution execution) {
        UserTask userTask = (UserTask) execution.getCurrentFlowElement();
        userTask.setSkipExpression("${1==1}");
    }
}
