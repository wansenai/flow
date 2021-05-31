package com.dragon.flow.model.privilege;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.dragon.tools.common.BaseModel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.math.BigInteger;


/**
 * 应用权限值
 * 
 * @Author:Bruce.Liu
 * @Since:  2021年04月20日
 */
@Data
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
@TableName(value = "tbl_privilege_pvalue")
public class AppPrivilegeValue extends BaseModel implements Serializable{
	private static final long serialVersionUID = -632584382751420885L;
	// id
	@TableId(type = IdType.ASSIGN_UUID)
	private String id;
	// 位
	private Integer position;
	// 权限值名称
	private String name;
	// 排序号
	private Integer orderNo;
	// 备注
	private String remark;
	// 临时变量
	@TableField(exist = false)
	private BigInteger state;
	//模块id  临时变量
	@TableField(exist = false)
	private String moduleId;
	//标记是否选中
	@TableField(exist = false)
	private boolean flag = false;

	public AppPrivilegeValue(Integer position, String name, Integer orderNo) {
		this.position = position;
		this.name = name;
		this.orderNo = orderNo;
	}
}
