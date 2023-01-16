package com.dragon.flow.enm.privilege;

/**
 * 系统配置枚举
 *
 * @author bruce.liu
 * @date 2021/4/16
 */
public enum SystemConfigEnum {

    // LOGO配置
    LOGO("logo"),
    // 系统图标
    FAVICON("favicon"),
    // 登录页背景
    LOGIN_BG("login_bg"),
    // 系统名称
    SYSTEM_NAME("system_name")
    ;

    public String getSn() {
        return sn;
    }

    private String sn;

    SystemConfigEnum(String sn) {
        this.sn = sn;
    }

}
