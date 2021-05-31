package com.dragon.flow.enm;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-13 17:01
 **/
public enum SourceEnum {
    ADMIN("admin"), FRONT("front");

    private String sn;

    SourceEnum(String sn) {
        this.sn = sn;
    }

    public String getSn() {
        return sn;
    }

    public void setSn(String sn) {
        this.sn = sn;
    }
}
