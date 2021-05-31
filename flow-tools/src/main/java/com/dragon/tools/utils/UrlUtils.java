package com.dragon.tools.utils;

import org.apache.commons.lang.StringUtils;

/***
 * url处理
 * @Author:bruce.liu
 * @Since:2021年04月23日 下午5:46:41
 */
public class UrlUtils {
	/**
	 * 去掉url最后的 '/' 例如 'http://127.0.0.1:8080/privilege-manager/' ---> 'http://127.0.0.1:8080/privilege-manager'
	 */
	public static String handelUrl(String url) {
		if (StringUtils.isNotBlank(url)) {
			url = url.trim();
			if (url.lastIndexOf("/") == url.length() - 1) {
				url = url.substring(0, url.length() - 1);
			}
		}
		return url;
	}

	/***
	 * 处理模块的url，最前面加上 '/' ,例如 'managment/privilege/icsystem/list.do' ---> '/managment/privilege/icsystem/list.do'
	 */
	public static String handelModelUrl(String url) {
		if (StringUtils.isNotBlank(url)) {
			url = url.trim();
			if (!url.substring(0, 1).equals("/")) {
				url = "/" + url;
			}
		}
		return url;
	}
}
