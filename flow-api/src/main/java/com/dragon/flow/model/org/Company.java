package com.dragon.flow.model.org;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.dragon.tools.common.BaseModel;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;
import java.util.List;

/**
 * 公司类
 * @author burce.liu
 * @date 2021-3-13 15:16:07
 */
@Data
@EqualsAndHashCode(callSuper = true)
@TableName(value = "tbl_org_company")
public class Company extends BaseModel implements Serializable{
    private static final long serialVersionUID = -8526694883060760613L;
    @TableId(type = IdType.ASSIGN_UUID)
    private String id;
    /**
     * 公司类型Id
     */
    private String typeId;
    /**
     * 上级公司id
     */
    private String pid;
    /**
     * 公司中文名称
     */
    private String cname;

    /**
     * 公司中文名称 - 简称
     */
    private String shortName;
    
    /**
     * 公司英文名称
     */
    private String ename;
    
    /**
     * 公司code
     */
    private String code;
    /**
     * 描述
     */
    private String descr;
    //排序
    private int orderNo;
    /**
     * 状态 1启用 0禁用
     */
    private Integer status;
    @TableField(exist = false)
    private String pcode;
    @TableField(exist = false)
    private String userName;//登入名
    @TableField(exist = false)
    private List<String> roleSnList;//角色标识
    /**
     * 查询条件 - 【临时属性】
     */
    @TableField(exist = false)
    private List<String> companyIds;
    @TableField(exist = false)
    private String typeCode;
    @TableField(exist = false)
    private String typeName;
}
