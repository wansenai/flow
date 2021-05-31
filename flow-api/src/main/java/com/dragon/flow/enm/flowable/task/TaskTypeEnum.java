package com.dragon.flow.enm.flowable.task;

import java.io.Serializable;

/**
 * @Description: 任务的类型
 * @Author: Bruce.liu
 * @Since:17:52 2018/6/11
 * 爱拼才会赢 2018 ~ 2030 版权所有
 */
public enum TaskTypeEnum implements Serializable {
    ZB("转办"),
    QJQ("前加签"),
    HJQ("后加签");
    // 类型
    private String type;

    private TaskTypeEnum(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
