package com.dragon.flow.enm.form;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author bruce.liu
 * @description 节点跳过枚举
 * @date 2021/6/18 22:22
 */
public enum TaskSkipSetEnum {
    NO_SKIP(1, "不跳过"),
    ADJOIN_SKIP(2, "相邻任务节点跳过"),
    REPEAT_SKIP(3, "重复任务跳过");

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

    public static List<Map<String, String>> getAllinfo() {
        List<Map<String, String>> list = new ArrayList<>();
        for (TaskSkipSetEnum item : TaskSkipSetEnum.values()) {
            Map<String, String> map = new HashMap<>();
            map.put("code", item.getCode() + "");
            map.put("message", item.getMessage());
            list.add(map);
        }
        return list;
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
