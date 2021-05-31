package com.dragon.flow.model.privilege;

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
 * @Comment:角色
 * @author bruce.liu
 * @Create Date 2021年3月11日
 */
@Data
@EqualsAndHashCode(callSuper = true)
@TableName(value = "tbl_privilege_group")
public class Group extends BaseModel implements Serializable{
	private static final long serialVersionUID = 7494810510834877601L;
	//id 32
	@TableId(type = IdType.ASSIGN_UUID)
	private String id;
	// 名称 20
	private String name;
	// 标示 30
	private String sn;
	// 备注 80
	private String note;
	/**
	 * 有效状态（1：有效；0：失效）
	 */
	private Integer validState;
	@TableField(exist = false)
	private List<User> users;
}
