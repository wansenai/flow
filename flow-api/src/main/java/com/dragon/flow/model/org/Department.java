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
 * @Comment:部门
 * @author bruce.liu
 * @Create Date 2021年3月11日
 */
@Data
@EqualsAndHashCode(callSuper = true)
@TableName(value = "tbl_org_department")
public class Department extends BaseModel implements Serializable{
	private static final long serialVersionUID = 5881655109164147308L;
	/* 主键  32*/
	@TableId(type = IdType.ASSIGN_UUID)
	private String id;
	/**
	 * 公司id
	 */
	private String companyId;
	/*  名称  20 */
	private String name;
	private String code;
	/* 备注 80 */
	private String note;
	/* 父id 32 */
	private String pid;
	/**排序号*/
	private Integer orderNo;
	//部门领导
	private String leaderCode;
	//部门领导
	@TableField(exist = false)
	private String leaderName;
	//父亲code
	@TableField(exist = false)
	private String pcode;
	//公司的code
	@TableField(exist = false)
	private String companyCode;
	/**
	 * 分管领导工号
	 */
	private String superiorCode;
	/**
	 * 分管领导姓名
	 */
	@TableField(exist = false)
	private String superiorName;
	/**
	 * 查询条件 - 【临时属性】
	 */
	@TableField(exist = false)
	private List<String> companyIds;
	@TableField(exist = false)
	private String companyName;

}
