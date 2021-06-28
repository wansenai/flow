package com.dragon.flow.enm.flowable.listener;

import java.io.Serializable;

/**
 * @author bruce.liu
 * @description 监听器值的类型
 * @date 2021/6/28 12:15
 */
public enum ListernerValueTypeEnum implements Serializable {
    CLASS("class", "类"),
    EXPRESSION("expression", "表达式"),
    DELEGATE_EXPRESSION("delegateExpression", "代理表达式");
    private String type;
    private String msg;

    ListernerValueTypeEnum(String type, String msg) {
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
