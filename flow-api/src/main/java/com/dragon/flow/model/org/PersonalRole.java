package com.dragon.flow.model.org;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.dragon.tools.common.BaseModel;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;
import java.util.Date;

/**
 * @program: flow
 * @description: 人员角色
 * @author: Bruce.Liu
 * @create: 2021-04-10 22:37
 **/
@Data
@EqualsAndHashCode(callSuper = true)
@TableName(value = "tbl_org_personal_role")
public class PersonalRole extends BaseModel implements Serializable {
    private static final long serialVersionUID = -2979237977885437662L;
    @TableId(type = IdType.ASSIGN_UUID)
    private String id;
    //人员id 32
    private String personalId;
    //人员工号
    private String personalCode;
    //角色id 32
    private String roleId;
    private Date endDate;
    private int validMonth;

}
