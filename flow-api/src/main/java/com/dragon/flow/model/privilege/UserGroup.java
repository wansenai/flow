package com.dragon.flow.model.privilege;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.dragon.tools.common.BaseModel;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * @author bruce.liu
 * @Comment: 用户角色
 * @Create  Date 2021年04月20日
 */
@Data
@EqualsAndHashCode(callSuper = true)
@TableName(value = "tbl_privilege_user_group")
public class UserGroup extends BaseModel implements Serializable {
    private static final long serialVersionUID = 2009646948668150616L;
    //id 32
    @TableId(type = IdType.ASSIGN_UUID)
    private String id;
    //用户id 32
    private String userId;
    //用户工号
    private String userNo;
    //角色id 32
    private String groupId;
    //有效期
    private Integer validMonth;
    //截止时间
    private Date endDate;
    //临时字段-s
    @TableField(exist = false)
    private String longName;
    @TableField(exist = false)
    private String groupSn;
    @TableField(exist = false)
    private String ownCompany;
    //保存的行数据
    @TableField(exist = false)
    private List<UserGroup> saveRows;
    @TableField(exist = false)
    private String saveRowsJson;
    @TableField(exist = false)
    private String endDateStr;
    //临时字段-e
}
