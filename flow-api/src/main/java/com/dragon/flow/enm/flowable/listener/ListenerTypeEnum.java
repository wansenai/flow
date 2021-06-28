package com.dragon.flow.enm.flowable.listener;

import java.io.Serializable;

/**
 * @author bruce.liu
 * @description 监听器类型
 * @date 2021/6/28 12:10
 */
public enum ListenerTypeEnum implements Serializable {
    EXECUTION_LISTENER("executionListener", "任务监听"),
    TASK_LISTENER("taskListener", "执行监听");
    private String type;
    private String msg;

    ListenerTypeEnum(String v, String msg) {
        this.msg = msg;
        this.type = type;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
