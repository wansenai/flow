package com.dragon.tools.pager;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * 权限注解
 * @Author:bruce.liu
 * @Since:2021年04月23日 下午5:46:41
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface Permission {
	//系统标示
	String systemSn();
	//模块标示
	String moduleSn();
	//权限值
	int value();
}
