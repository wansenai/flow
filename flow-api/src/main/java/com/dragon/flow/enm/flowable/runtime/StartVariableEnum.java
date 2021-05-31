package com.dragon.flow.enm.flowable.runtime;

import java.io.Serializable;

/**
 * @ProjectName: dragon
 * @ClassName: StartVariableEnum
 * @Author: bruce.liu
 * @Date: 2021/04/20 18:44
 * @Version: 1.0
 */
public enum StartVariableEnum implements Serializable {

    LCDB("lcdb", "流程底表"),
    DEPT("dept", "部门层级审批领导"),
    COMPANY("company", "公司层级审批领导"),
    PCOMPANY("pCompany", "父公司层级审批领导"),
    TCOMPANY("tCompany", "顶级公司层级审批领导"),
    USERDEPT("userDept", "人员部门"),
    FORM("form", "表单（自定义，业务）"),
    LINE("line", "汇报线");
    private String code;
    private String msg;

    StartVariableEnum(String code, String msg) {
        this.msg = msg;
        this.code = code;
    }


    /**
     * 通过code获取Msg
     *
     * @param code
     * @return
     * @Description:
     */
    public static String getEnumMsgByCode(String code) {
        for (StartVariableEnum e : StartVariableEnum.values()) {
            if (e.getCode().equals(code)) {
                return e.msg;
            }
        }
        return "";
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
