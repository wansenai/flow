package com.dragon.flow.listener.task.execution;

import lombok.extern.slf4j.Slf4j;
import org.flowable.engine.delegate.TaskListener;
import org.flowable.task.service.delegate.DelegateTask;
import org.springframework.stereotype.Component;

/**
 * @author bruce.liu
 * @description 任务监听测试
 * @date 2021/7/22 8:44
 */
@Slf4j
@Component("taskListenerTest")
public class TaskListenerTest implements TaskListener {
    @Override
    public void notify(DelegateTask delegateTask) {
        String name = delegateTask.getName();
        log.error("执行了监听:" +name);
    }
}
