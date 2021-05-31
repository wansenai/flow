package com.dragon.flow.vo.privilege;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * 模块的权限
 * @author liuwenjun1
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ModulePermission implements Serializable {
	private static final long serialVersionUID = -2833175657670479109L;
	//模块表示
	private String moduleSn;
	//权限名称
	private String permissionName;
	//权限位数
	private int permissionValue;
}
