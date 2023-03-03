package com.dragon.flow.enm.org;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author admin
 * @description 第三方平台
 * @date 2023/3/3 12:22
 */
public enum ThirdPartyTypeEnum {
    DING_TALK("DingTalk", "钉钉"),
    FEI_SHU("FeiShu", "飞书"),
    WEI_XIN("WeiXin", "企业微信");

    private String code;
    private String message;

    private ThirdPartyTypeEnum(String code, String message) {
        this.code = code;
        this.message = message;
    }

    public static Map<String, String> getMap() {
        Map<String, String> map = new HashMap<String, String>();
        for (ThirdPartyTypeEnum i : values()) {
            map.put(i.getCode() + "", i.getMessage());
        }
        return map;
    }

    public static List<Map<String, String>> getAllinfo() {
        List<Map<String, String>> list = new ArrayList<>();
        for (ThirdPartyTypeEnum item : ThirdPartyTypeEnum.values()) {
            Map<String, String> map = new HashMap<>();
            map.put("code", item.getCode() + "");
            map.put("message", item.getMessage());
            list.add(map);
        }
        return list;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
