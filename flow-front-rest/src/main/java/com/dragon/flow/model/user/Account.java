package com.dragon.flow.model.user;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.dragon.tools.common.BaseModel;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * @program: flow
 * @description: 账号
 * @author: Bruce.Liu
 * @create: 2021-05-12 11:38
 **/
@Data
@EqualsAndHashCode(callSuper = true)
@TableName("tbl_front_account")
public class Account extends BaseModel {
    @TableId(type = IdType.ASSIGN_UUID)
    private String id;
    private String code;
    private String username;
    private String tel;
    private String email;
    private String pwd;
    private String name;
    private Integer sex;
    @TableField(exist = false)
    private String keyword;
    @TableField(exist = false)
    private String deptName;
    @TableField(exist = false)
    private String companyName;
    @TableField(exist = false)
    private String sessionId;
}
