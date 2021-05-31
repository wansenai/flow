package com.dragon.flow.enm.form;

import java.util.HashMap;
import java.util.Map;

/**
 * 流程授权功能范围
 *
 * @author bruce.liu
 */
public enum FlowAuthorizeRange {

    YXZB(1, "允许转办"),
    YXJQ(2, "允许加签"),
    YXZY(3, "允许转阅"),
    YXDY(4, "允许打印"),
    XJJDTYRYZDTG(5, "相近节点同一人自动跳过");

    private Integer code;
    private String message;

    private FlowAuthorizeRange(Integer code, String message) {
        this.code = code;
        this.message = message;
    }

    public static Map<String, String> getMap() {
        Map<String, String> map = new HashMap<String, String>();
        for (FlowAuthorizeRange i : values()) {
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
