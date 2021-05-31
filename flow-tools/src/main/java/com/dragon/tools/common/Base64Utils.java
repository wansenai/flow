package com.dragon.tools.common;

import org.apache.commons.codec.binary.Base64;

import java.io.UnsupportedEncodingException;


/**
 * @Title:
 * @Description:base64编码解码工具
 * @Author:bruce.liu
 * @Since:2021年04月23日 下午5:46:41
 */
public class Base64Utils {
	/**
	 * @param plainText
	 * @return
	 * @throws UnsupportedEncodingException 
	 * @Description:使用Base64加密算法加密字符串 return
	 */
	public static String encodeStr(String plainText) throws UnsupportedEncodingException {
		byte[] b = plainText.getBytes("UTF-8");
		Base64 base64 = new Base64();
		b = base64.encode(b);
		String s = new String(b);
		return s;
	}

	/**
	 * @param encodeStr
	 * @return
	 * @Description:使用Base64解密 return
	 */
	public static String decodeStr(String encodeStr) {
		byte[] b = encodeStr.getBytes();
		Base64 base64 = new Base64();
		b = base64.decode(b);
		String s = new String(b);
		return s;
	}
}
