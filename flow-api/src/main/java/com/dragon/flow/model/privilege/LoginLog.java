package com.dragon.flow.model.privilege;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

/**
 * @Title:
 * @Description:日志
 * @Author:Bruce.Liu
 * @Since: Date 2021年04月20日
 */
@Data
@TableName(value = "tbl_privilege_login_log")
public class LoginLog implements Serializable {
	private static final long serialVersionUID = 9027786121654045706L;
	//id 自增长
	@TableId(type = IdType.ASSIGN_UUID)
	private String id;
	//访问ip
	private String ip;
	//操作人id
	private String operationId;
	//操作人的工号
	private String operationUsername;
	//操作人姓名
	private String operationPerson;
	//操作内容
	private String operationContent;
	//操作时间
	private Date operationTime;
	//操作时间 字符串
	@TableField(exist = false)
	private String operationTimeStr;
	@TableField(exist = false)
	private String startTimeStr;
	@TableField(exist = false)
	private String endTimeStr;
	@TableField(exist = false)
	private String keyword;
	public LoginLog(){}
	public LoginLog(String ip, String operationId,
			String operationUsername, String operationPerson,
			String operationContent) {
		this.ip = ip;
		this.operationId = operationId;
		this.operationUsername = operationUsername;
		this.operationPerson = operationPerson;
		this.operationContent = operationContent;
	}
}
