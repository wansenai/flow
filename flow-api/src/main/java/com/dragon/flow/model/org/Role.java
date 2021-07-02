package com.dragon.flow.model.org;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.dragon.flow.enm.org.RoleTypeEnum;
import com.dragon.tools.common.BaseModel;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;
import java.util.List;

/**
 * @program: flow
 * @description: 人员角色
 * @author: Bruce.Liu
 * @create: 2021-04-10 14:01
 **/
@Data
@EqualsAndHashCode(callSuper = true)
@TableName(value = "tbl_org_role")
public class Role extends BaseModel implements Serializable {
    private static final long serialVersionUID = 8959889106626429471L;
    //id 32
    @TableId(type = IdType.ASSIGN_UUID)
    private String id;
    // 公司id
    private String companyId;
    //岗位id
    private String positionId;
    // 名称 20
    private String name;
    /**
     * 普通角色0 公司矩阵角色为1 部门矩阵角色为2
     *
     * @see RoleTypeEnum
     */
    private Integer type = 0;
    // 标示 30
    private String sn;
    // 备注 80
    private String note;
    //排序
    private int orderNo;
    @TableField(exist = false)
    private String companyName;
    @TableField(exist = false)
    private String personalId;
    @TableField(exist = false)
    private List<Company> companies;
    @TableField(exist = false)
    private List<Personal> personals;
}
