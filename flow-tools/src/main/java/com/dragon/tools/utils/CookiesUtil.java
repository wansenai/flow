package com.dragon.tools.utils;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.UnsupportedEncodingException;

/**
 * 用户中心Cookie相关的操作
 * 
 * @Title:
 * @Description:
 * @Author:bruce.liu
 * @Since:2021年04月23日 下午5:46:41
 * @Version:1.1.0
 */
public class CookiesUtil {

	/***
	 * -1 : indicating the cookie will persist until browser shutdown.
	 */
	private static int iDefaultValidSecond = -1;

	public CookiesUtil() {
	}

	/**
	 * Cross domain Put cookie to the client【MaxAge=-1】
	 * 
	 * @param response 输出
	 * @param name Cookie的名字
	 * @param value Cookie的值
	 */
	public static void crossDomainPut(HttpServletResponse response, String name, String value) {
		setP3PHeader(response);
		put(response, name, value, "/", iDefaultValidSecond);
	}

	/**
	 * Cross domain Put cookie to the client
	 * 
	 * @param response  输出
	 * @param name  Cookie的名字
	 * @param value Cookie的值
	 * @param ttl  Cookie生存秒数
	 */
	public static void crossDomainPut(HttpServletResponse response, String name, String value, int ttl) {
		setP3PHeader(response);
		put(response, name, value, ttl);
	}

	private static void setP3PHeader(HttpServletResponse response) {
		response.setHeader("P3P", "CP=\"CURa ADMa DEVa PSAo PSDo OUR BUS UNI PUR INT DEM STA PRE COM NAV OTC NOI DSP COR\"");
	}

	/**
	 * Put cookie to the client【MaxAge=-1】
	 * 
	 * @param response 输出
	 * @param name Cookie的名字
	 * @param value Cookie的值
	 */
	public static void put(HttpServletResponse response, String name, String value) {
		put(response, name, value, "/", iDefaultValidSecond);
	}

	/**
	 * 设定一个Cookie,有生存时间设定,单位为秒【路径为"/"】
	 * 
	 * @param response 输出
	 * @param name Cookie的名称
	 * @param value Cookie的值
	 * @param ttl Cookie生存秒数
	 */
	public static void put(HttpServletResponse response, String name, String value, int ttl) {
		put(response, name, value, "/", ttl);
	}

	/**
	 * 保存cookie
	 * 
	 * @param response
	 * @param name 名称
	 * @param value 值
	 * @param path 路径
	 * @param ttl 秒
	 */
	public static void put(HttpServletResponse response, String name, String value, String path, int ttl) {
		try {
			Cookie cookie = new Cookie(name, encode(value));
			cookie.setPath(path);
			cookie.setMaxAge(ttl); // 365天的秒数:31536000
			response.addCookie(cookie);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * get cookie from client
	 * 
	 * @param request
	 * @param name
	 * @return
	 */
	public static String get(HttpServletRequest request, String name) {
		Cookie[] cookies = request.getCookies();
		if (cookies == null)
			return "";

		String result = "";
		try {
			for (int i = 0; i < cookies.length; i++) {
				if (cookies[i].getName().equals(name)) {
					result = cookies[i].getValue();
					break;
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return decode(result);
	}

	/**
	 * 清除Cookie
	 * 
	 * @param response  HttpServletResponse
	 * @param name  String
	 */
	public static void remove(HttpServletResponse response, String name) {
		put(response, name, null, 0);
	}

	/**
	 * 清除所有的Cookie
	 * 
	 * @param request
	 *            HttpServletRequest
	 * @param response
	 *            HttpServletResponse
	 */
	public static void removeAll(HttpServletRequest request, HttpServletResponse response) {
		Cookie[] cookies = request.getCookies();
		if (cookies != null) {
			try {
				for (int i = 0; i < cookies.length; i++) {
					Cookie cookie = new Cookie(cookies[i].getName(), null);
					cookie.setPath("/");
					cookie.setMaxAge(0);
					response.addCookie(cookie);
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}

	/**
	 * 对给定字符进行 URL 编码
	 * 
	 * @param value
	 *            String
	 * @return String
	 */
	private static String encode(String value) {
		String result = "";
		if (!isEmpty(value)) {
			try {
				result = java.net.URLEncoder.encode(value, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
			}
		}
		return result;
	}

	/**
	 * 对给定字符进行 URL 解码
	 * 
	 * @param value
	 *            String
	 * @return String
	 */
	private static String decode(String value) {
		String result = "";
		if (!isEmpty(value)) {
			try {
				result = java.net.URLDecoder.decode(value, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
			}
		}
		return result;
	}

	/**
	 * 判断是否为空，为空返回true
	 * 
	 * @param value
	 *            String
	 * @return boolean
	 */
	private static boolean isEmpty(String value) {
		if (value == null || value.trim().equals(""))
			return true;
		else
			return false;
	}
}
