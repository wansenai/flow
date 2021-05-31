package com.dragon.tools.utils;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Pattern;

/**
 * @Author:bruce.liu
 * @Since:2021年04月23日 下午5:46:41
 */
public class WebUtils {

	public static HttpSession getSession(HttpServletRequest request) {
		return request.getSession();
	}

	public static String getBasePath(HttpServletRequest request) {
		String path = request.getContextPath();
		String basePath = request.getScheme() + "://" + request.getServerName()
				+ ":" + request.getServerPort() + path + "/";
		return basePath;
	}

	public static byte[] InputStreamToByte(InputStream is) throws IOException {
		ByteArrayOutputStream bytestream = new ByteArrayOutputStream();
		int ch;
		while ((ch = is.read()) != -1) {
			bytestream.write(ch);
		}
		byte imgdata[] = bytestream.toByteArray();
		bytestream.close();
		return imgdata;
	}

	public static InputStream ByteToInputStream(byte[] data) {
		InputStream is = new ByteArrayInputStream(data);
		return is;
	}

	/**
	 * 取实际用户的访问地址。
	 * 
	 * @param request
	 *            当前请求。
	 * @return 客户端IP地址。
	 */
	public static String getIpAddr(HttpServletRequest request) {
		String ips = request.getHeader("x-forwarded-for");
		if (ips == null || ips.length() == 0 || "unknown".equalsIgnoreCase(ips)) {
			ips = request.getHeader("Proxy-Client-IP");
		}
		if (ips == null || ips.length() == 0 || "unknown".equalsIgnoreCase(ips)) {
			ips = request.getHeader("WL-Proxy-Client-IP");
		}
		if (ips == null || ips.length() == 0 || "unknown".equalsIgnoreCase(ips)) {
			ips = request.getRemoteAddr();
		}

		String[] ipArray = ips.split(",");
		String clientIP = null;
		for (String ip : ipArray) {
			if (!("unknown".equalsIgnoreCase(ip))) {
				clientIP = ip;
				break;
			}
		}
		return clientIP;
	}

	/**
	 * 查找指定请求中的指定名称的Cookie。
	 * 
	 * @param request
	 *            请求。
	 * @param name
	 *            cookie名称。
	 * @return 如果有相应名称的Cookie，则返回相应Cookie实例。没有返回null。
	 */
	public static Cookie findCookie(HttpServletRequest request, String name) {
		if (request != null) {
			Cookie[] cookies = request.getCookies();
			if (cookies != null && cookies.length > 0) {
				for (Cookie cookie : cookies) {
					if (cookie.getName().equals(name)) {
						return cookie;
					}
				}
			}
		}

		return null;
	}

	/**
	 * 查找指定请求中的指定名称Cookie的值，如果不存在将返回null。
	 * 
	 * @param request
	 *            请求。
	 * @param name
	 *            Cookie名称。
	 * @return cookie的值。
	 */
	public static String findCookieValue(HttpServletRequest request, String name) {
		Cookie cookie = findCookie(request, name);
		return cookie != null ? cookie.getValue() : null;
	}

	/**
	 * 增加一个Cookie,使用默认域名。
	 * 
	 * @param request
	 *            请求。
	 * @param response
	 *            响应。
	 * @param name
	 *            Cookie名称 。
	 * @param value
	 *            Cookie的值。
	 * @param maxAge
	 *            生命周期。
	 */
	public static void addCookie(HttpServletRequest request,
			HttpServletResponse response, String name, String value, int maxAge) {
		addCookie(request, response, name, value, null, maxAge);
	}

	/**
	 * 增加一个Cookie,使用指定域名。
	 * 
	 * @param request
	 *            请求。
	 * @param response
	 *            响应。
	 * @param name
	 *            Cookie名称 。
	 * @param value
	 *            Cookie的值。
	 * @param maxAge
	 *            生命周期。
	 */
	public static void addCookie(HttpServletRequest request,
			HttpServletResponse response, String name, String value,
			String domain, int maxAge) {
		String contextPath = request.getContextPath();
		if (contextPath == null || contextPath.isEmpty()) {
			contextPath = "/";
		}
		addCookie(request, response, name, value, domain, contextPath, maxAge);
	}

	/**
	 * 增加一个Cookie.ContextPath如果为空或者长度为0，将使用"/".
	 * 
	 * @param request
	 *            当前请求。
	 * @param response
	 *            当前响应。
	 * @param name
	 *            cookie名称
	 * @param value
	 *            cookie值
	 * @param domain
	 *            cookie域名
	 * @param contextPath
	 *            cookie路径。
	 * @param maxAge
	 *            有效时间。
	 */
	public static void addCookie(HttpServletRequest request,
			HttpServletResponse response, String name, String value,
			String domain, String contextPath, int maxAge) {
		if (request != null && response != null) {
			Cookie cookie = new Cookie(name, value);
			cookie.setMaxAge(maxAge);
			cookie.setSecure(request.isSecure());

			if (contextPath == null || contextPath.isEmpty()) {
				cookie.setPath("/");
			} else {
				cookie.setPath(contextPath);
			}

			if (domain != null && !domain.isEmpty()) {
				cookie.setDomain(domain);
			}

			response.addCookie(cookie);
		}
	}

	/**
	 * 失效一个Cookie.
	 * 
	 * @param request
	 *            当前请求。
	 * @param response
	 *            当前响应。
	 * @param name
	 *            Cookie名称。
	 * @param domain
	 *            Cookie域名。
	 * @param contextPath
	 *            有效路径。
	 */
	public static void failureCookie(HttpServletRequest request,
			HttpServletResponse response, String name, String domain,
			String contextPath) {
		if (request != null && response != null) {
			addCookie(request, response, name, null, domain, contextPath, 0);
		}
	}

	/**
	 * 将指定的Cookie失效掉。
	 * 
	 * @param request
	 *            请求
	 * @param response
	 *            响应。
	 * @param name
	 *            cookie名称。
	 * @param domain
	 *            cookie的域名。
	 */
	public static void failureCookie(HttpServletRequest request,
			HttpServletResponse response, String name, String domain) {
		String contextPath = request.getContextPath();
		if (contextPath == null || contextPath.isEmpty()) {
			contextPath = "/";
		}
		failureCookie(request, response, name, domain, contextPath);
	}

	/**
	 * 将指定的Cookie失效掉。
	 * 
	 * @param request
	 *            请求
	 * @param response
	 *            响应。
	 * @param name
	 *            cookie名称。
	 */
	public static void failureCookie(HttpServletRequest request,
			HttpServletResponse response, String name) {
		failureCookie(request, response, name, null);
	}

	/**
	 * 获取请求的完整地址。
	 * 
	 * @param request
	 *            请求。
	 * @return 完整地址。
	 */
	public static String completeTheRequestAddress(HttpServletRequest request) {
		StringBuilder buff = new StringBuilder(request.getRequestURL()
				.toString());
		String queryString = request.getQueryString();
		if (queryString != null) {
			buff.append("?").append(queryString);
		}

		return buff.toString();
	}

	/**
	 * 将换行符替换成html页面使用的换行元素。
	 * 
	 * @param source
	 *            原始字符串。
	 * @return 替换后的字符串。
	 */
	public static String enterToHtmlWrap(String source) {
		if (source == null || source.trim().isEmpty()) {
			return source;
		} else {
			return source.replaceAll("\r\n", "<br />");
		}
	}

	/**
	 * 一个客户端转向的方便工具方法.可以选择使用301或者302方式进行跳转.
	 * 
	 * @param response
	 *            当前响应.
	 * @param url
	 *            需要转向的地址.
	 * @param movePermanently
	 *            true表示进行301永久跳转,false表示302临时跳转.
	 * @throws IOException
	 *             I/O异常.
	 */
	public static void redirect(HttpServletResponse response, String url,
			boolean movePermanently) throws IOException {
		if (!movePermanently) {
			response.sendRedirect(url);
		} else {
			response.setStatus(HttpServletResponse.SC_MOVED_PERMANENTLY);
			response.setHeader("Location", url);
		}
	}

	/**
	 * 代理的名称,也代理了判断的顺序..
	 */
	private static final String[] AGENT_INDEX = { "MSIE", "Firefox", "Chrome",
			"Opera", "Safari" };
	/**
	 * 存放用户代理解析的正则容器.
	 */
	private static final Map<String, Pattern> AGENT_PATTERNS = new HashMap<String, Pattern>(
			AGENT_INDEX.length);

	static {
		AGENT_PATTERNS.put(AGENT_INDEX[0], Pattern.compile("MSIE ([\\d.]+)"));
		AGENT_PATTERNS.put(AGENT_INDEX[1], Pattern.compile("Firefox/(\\d.+)"));
		AGENT_PATTERNS.put(AGENT_INDEX[2], Pattern.compile("Chrome/([\\d.]+)"));
		AGENT_PATTERNS.put(AGENT_INDEX[3],
				Pattern.compile("Opera[/\\s]([\\d.]+)"));
		AGENT_PATTERNS
				.put(AGENT_INDEX[4], Pattern.compile("Version/([\\d.]+)"));
	}

}
