package com.dragon.flow.model.org;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.dragon.tools.common.BaseModel;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * @program: flow
 * @description: 岗位人员
 * @author: Bruce.Liu
 * @create: 2021-04-28 22:40
 **/
@Data
@EqualsAndHashCode(callSuper = true)
@TableName(value = "tbl_org_role_position_personal")
public class RolePositionPersonal extends BaseModel {
    @TableId(type = IdType.ASSIGN_UUID)
    private String id;
    //公司id
    private String companyId;
    //角色id
    private String roleId;
    //岗位code
    private String positionCode;
    //人员Id
    private String personalId;
    @TableField(exist = false)
    private String roleNem;
    @TableField(exist = false)
    private String positionName;
    @TableField(exist = false)
    private String personalName;
}
