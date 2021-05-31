package com.dragon.flow.model.privilege;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.dragon.tools.common.BaseModel;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.apache.commons.lang.StringUtils;

import java.io.Serializable;
import java.math.BigInteger;
import java.util.List;

/**
 * @author bruce.liu
 * @Comment:角色权限
 * @Create Date 2021年04月20日
 */
@Data
@EqualsAndHashCode(callSuper = true)
@TableName(value = "tbl_privilege_acl")
public class ACL extends BaseModel implements Serializable {
    /**
     * 授权允许
     */
    public static final int ACL_YES = 1;

    /**
     * 授权不允许
     */
    public static final int ACL_NO = 0;

    /**
     * 授权不确定
     */
    public static final int ACL_NEUTRAL = -1;
    private static final long serialVersionUID = 8151000869357763311L;
    // id 32
    @TableId(type = IdType.ASSIGN_UUID)
    private String id;
    // 分类id 比方说用户id或者角色id32
    private String releaseId;
    // 模块id
    private String moduleId;
    // 模块标示
    private String moduleSn;
    /**
     * acl状态 5
     */
    private BigInteger aclState;
    // 临时变量-s
    @TableField(exist = false)
    private List<AppPrivilegeValue> values;
    //人员工号
    @TableField(exist = false)
    private String userNo;

    /**
     * 设置权限
     *
     * @param permission
     * @param yes
     */
    public void setPermission(int permission, boolean yes) {
        if (aclState == null){
            aclState = new BigInteger("0");
        }
        BigInteger temp = new BigInteger("1");
        temp = temp.shiftLeft(permission);
        if (yes){
            aclState = aclState.or(temp);
        } else {
            aclState = aclState.xor(temp);
        }
    }

    /**
     * 得到权限
     *
     * @param permission
     * @return
     */
    public int getPermission(int permission) {
        if (aclState == null){
            aclState = new BigInteger("0");
        }
        BigInteger temp = new BigInteger("1");
        temp = temp.shiftLeft(permission);
        temp = temp.and(aclState);
        if (StringUtils.isNotBlank(temp.toString()) && temp.toString() != "0"){
            return ACL_YES;
        }
        return ACL_NO;
    }
}
