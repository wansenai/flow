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
 * @Comment:模块
 * @Create  Date 2021年04月20日
 */
@Data
@EqualsAndHashCode(callSuper = true)
@TableName(value = "tbl_privilege_module")
public class Module extends BaseModel implements Serializable {
	private static final long serialVersionUID = -6731968999361092366L;
	// id 32
	@TableId(type = IdType.ASSIGN_UUID)
	private String id;
	/**
	 * 应用id
	 */
	private String appId;
	// 名称 20
	private String name;
	// 链接 40
	private String url;
	// 标示 20
	private String sn;
	/**
	 * 左侧菜单是否显示（1：显示，0：不显示）
	 */
	private Integer showStatus;
	/**
	 * 是否启用 ： 1启用；0禁用
	 */
	private Integer status;

	/* 图片路径 40 */
	private String image;
	/* 模块的排序号 5 */
	private Integer orderNo;
	/* 父模块id 32 */
	private String pid;
	/* 每个模块绑定的权限值 */
	private BigInteger state;
	//组件地址
	private String component;
	/**
	 * 临时变量 操作权限集合
	 */
	@TableField(exist = false)
	private List<AppPrivilegeValue> pvs;

	/**
	 * 设置权限
	 *
	 * @param permission
	 * @param yes
	 */
	public void setPermission(int permission, boolean yes) {
		if (state == null) {
			state = new BigInteger("0");
		}
		BigInteger temp = new BigInteger("1");
		temp = temp.shiftLeft(permission);
		if (yes) {
			state = state.or(temp);
		} else {
			state = state.xor(temp);
		}
	}

	/**
	 * 判断模块是否有这个位的权限
	 *
	 * @param permission
	 * @return
	 */
	public boolean getPermission(int permission) {
		if (state == null) {
			return false;
		}
		BigInteger temp = new BigInteger("1");
		temp = temp.shiftLeft(permission);
		temp = temp.and(state);
		if (StringUtils.isNotBlank(temp.toString()) && temp.toString() != "0") {
			return true;
		}
		return false;
	}

//	public void setUrl(String url) {
//		// url：‘/’开头
//		if(StringUtils.isNotBlank(url)){
//			url = StringUtils.trim(url);
//			if(url.contains("http://") || url.contains("https://")){
//				this.url = url;
//			}else{
//				this.url = UrlUtils.handelModelUrl(url);
//			}
//		}else{
//			this.url = "";
//		}
//	}

}
