package com.dragon.flow.vo.org;

import com.dragon.tools.common.BaseModel;
import lombok.Data;
import lombok.EqualsAndHashCode;


/**
 * basedata类
 * @author admin
 * @date 2018-10-22 17:40:27
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class RolePersonalVo extends BaseModel {
    /**
     *
     */
    private String id;
    /**
     * 人员姓名
     */
    private String name;
    /**
     * 人员工号
     */
    private String code;
    /**
     * 人员ID
     */
    private String personalId;
    /**
     * 组标识
     */
    private String roleId;



    // 临时变量 用于查询
    /**
     * 查询条件
     */
    private String keyWord;


    /*=====非表结构字段====*/
    /**
     * 组名
     */
    private String roleName;

    /**
     * 部门名称
     */
    private String deptName;
    /**
     * 部门ID
     */
    private String deptId;
    /**
     * 公司ID
     */
    private String companyId;
    /**
     * 公司名称
     */
    private String companyName;
    /**
     * 部门ID集合，以“,”隔开
     */
    private String deptIds;
    /**
     * 部门名称，以“,”隔开
     */
    private String deptNames;

}
