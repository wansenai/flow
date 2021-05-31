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
import java.util.Map;


/**
 * @author bruce.liu
 * @Comment: 用户
 * @Create Date 2021年3月23日
 */
@Data
@EqualsAndHashCode(callSuper = true)
@TableName(value = "tbl_privilege_user")
public class User extends BaseModel implements Serializable {
    private static final long serialVersionUID = 161570817714448869L;
    // id 32
    @TableId(type = IdType.ASSIGN_UUID)
    private String id;
    // 真实姓名 20
    private String realName;
    //工号
    private String userNo;
    // 用户名 30
    private String username;
    // 密码 40
    private String password;
    // 电话
    private String tel;
    // 手机
    private String mobile;
    // 座机 15
    private String phone;
    // 邮箱 30
    private String email;
    // 图像 30
    private String image;
    // 公司id
    private String companyId;
    // 部门id 32
    private String departmentId;
    // 性别 1标示男 0标示女
    private Integer sex;
    // 地址 100
    private String address;
    // 传真
    private String fax;
    // 失效月数
    private Integer failMonth;
    // 失效时间
    private Date failureTime;
    // 密码失效日期
    private Date pwdFtime;
    // 初始密码是否已修改 1是0否
    private Integer pwdInit;
    // 权限修改时间戳
    private Long aclTimestamp;
    // 临时变量：用户所属系统id
    @TableField(exist = false)
    private String appIds;
    // 临时变量:部门名称
    @TableField(exist = false)
    private String deptName;
    // 临时变量:账户失效时间str
    @TableField(exist = false)
    private String failureTimeStr = "-";
    // 临时变量:密码过期时间str
    @TableField(exist = false)
    private String pwdFtimeStr = "-";
    /**
     * 临时变量:是否失效标识 1失效，0未失效 ,2未设置失效时间
     */
    @TableField(exist = false)
    private Integer failFlag;
    @TableField(exist = false)
    private List<Group> groups;
    @TableField(exist = false)
    private String companyName;
}
