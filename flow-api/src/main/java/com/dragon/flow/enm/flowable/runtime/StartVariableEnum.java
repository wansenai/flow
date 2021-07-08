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

    USER("user", "人员信息"),
    UDEPT("udept", "人员部门变量"),
    UCOMPANY("ucompany", "人员公司变量"),
    COMPANY_ROLE("company", "公司角色层级审批领导"),
    MATRIX_COMPANY_ROLE("mcompany", "矩阵公司角色"),
    MATRIX_DEPT_ROLE("mdept", "矩阵部门角色"),
    FORM("form", "表单"),
    LCDB("lcdb", "流程底表"),
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
