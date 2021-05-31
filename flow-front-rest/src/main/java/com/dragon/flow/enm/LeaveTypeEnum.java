package com.dragon.flow.enm;

import java.io.Serializable;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-23 15:02
 **/
public enum LeaveTypeEnum implements Serializable {
    TX(1, "调休"),
    SJ(2, "事假"),
    NJ(3, "年假");
    private Integer type;
    private String msg;

    LeaveTypeEnum(Integer type, String msg) {
        this.msg = msg;
        this.type = type;
    }


    /**
     * 通过type获取Msg
     *
     * @param type
     * @return
     * @Description:
     */
    public static String getEnumMsgByType(Integer type) {
        for (LeaveTypeEnum e : LeaveTypeEnum.values()) {
            if (e.getType().equals(type)){
                return e.msg;
            }
        }
        return "";
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
