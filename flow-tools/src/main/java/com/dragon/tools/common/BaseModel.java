package com.dragon.tools.common;

import com.baomidou.mybatisplus.annotation.TableField;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

/**
 * 基本实体类
 */
@Data
public abstract class BaseModel{
	/** 创建时间 **/
	@JsonFormat(timezone = "GMT+8",pattern="yyyy-MM-dd HH:mm:ss")
	protected Date createTime;
	/** 创建人 **/
	protected String creator;
	/** 更新时间 **/
	@JsonFormat(timezone = "GMT+8",pattern="yyyy-MM-dd HH:mm:ss")
	protected Date updateTime;
	/** 更新人 **/
	protected String updator;
	/** 删除标识 0标识已删除 1标识未删除 **/
	protected Integer delFlag = 1;
	/**
	 * 查询关键字
	 * 临时变量 用于查询
	 */
	@TableField(exist = false)
	protected String keyword;

}
