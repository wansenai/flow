package com.dragon.flow.enm.flowable.task;

import java.io.Serializable;
/**
 * 节点类型
 *
 * @author bruce.liu
 * @date 2021/05/10 09:34
 */
public enum NodeTypeEnum implements Serializable {

    NOTIFY("notify", "知会"), APPLY("apply", "审批"), NOAPPROVE("noapprove", "不审批"), BS("bs", "必审"),
    COORDINATION("coordination", "协同"), REVIEW("review", "评审"), APPLYING("applying", "审批中");

    // 类型
    private String type;
    // 描述
    private String description;

    NodeTypeEnum(String type, String description) {
        this.type = type;
        this.description = description;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
