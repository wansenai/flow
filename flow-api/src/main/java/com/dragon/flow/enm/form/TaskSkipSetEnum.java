package com.dragon.flow.enm.form;

import java.util.HashMap;
import java.util.Map;

/**
 * @author bruce.liu
 * @description 节点跳过枚举
 * @date 2021/6/18 22:22
 */
public enum  TaskSkipSetEnum {
    YXZB(1, "不跳过"),
    YXJQ(2, "相邻任务节点跳过"),
    YXZY(3, "重复任务跳过");

    private Integer code;
    private String message;

    private TaskSkipSetEnum(Integer code, String message) {
        this.code = code;
        this.message = message;
    }

    public static Map<String, String> getMap() {
        Map<String, String> map = new HashMap<String, String>();
        for (TaskSkipSetEnum i : values()) {
            map.put(i.getCode() + "", i.getMessage());
        }
        return map;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
