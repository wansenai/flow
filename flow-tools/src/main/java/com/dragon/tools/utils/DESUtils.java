package com.dragon.tools.utils;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.lang.StringUtils;

import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.DESedeKeySpec;
import java.security.Key;
import java.security.SecureRandom;

/**
 * DES加密
 * @Author:bruce.liu
 * @Since:2021年04月23日 下午5:46:41
 */
public class DESUtils {

	public static void main(String[] args) throws Exception {
		// 1:生成key
		String key = createKey();
		System.out.println("密钥是：" + key);
		String mw = encode("sdffafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafaddsafdf", key);
		System.out.println("把工资加密是：" + mw);
		String jm = decode(mw, key);
		System.out.println("解密密是：" + jm);
	}

	/**
	 * 创建key
	 * 
	 * @return
	 * @throws Exception
	 */
	public static String createKey() throws Exception {
		// 1.初始化key秘钥
		KeyGenerator keyGenerator = KeyGenerator.getInstance("DESede");
		keyGenerator.init(new SecureRandom());
		SecretKey secretKey = keyGenerator.generateKey();
		// 转换key秘钥
		DESedeKeySpec deSedeKeySpec = new DESedeKeySpec(secretKey.getEncoded());
		SecretKeyFactory secretKeyFactory = SecretKeyFactory.getInstance("DESede");
		Key key = secretKeyFactory.generateSecret(deSedeKeySpec);
		String keyencode = new String(Base64.encodeBase64(key.getEncoded()));
		return keyencode;
	}

	/**
	 * 获取key
	 * 
	 * @param dkey
	 * @return
	 * @throws Exception
	 */
	public static Key getKey(String dkey) throws Exception {
		byte[] keybyte = Base64.decodeBase64(dkey.getBytes());
		DESedeKeySpec deSedeKeySpec = new DESedeKeySpec(keybyte);
		SecretKeyFactory secretKeyFactory = SecretKeyFactory.getInstance("DESede");
		Key key = secretKeyFactory.generateSecret(deSedeKeySpec); // 获取到key秘钥
		return key;
	}

	/**
	 * 生成密文
	 * 
	 * @param salary
	 * @param key
	 * @return
	 * @throws Exception
	 */
	public static String encode(String salary, String key) throws Exception {
		// 3.进行加密
		Cipher cipher = Cipher.getInstance("DESede/ECB/PKCS5Padding");
		Key keyb = getKey(key);
		cipher.init(Cipher.ENCRYPT_MODE, keyb);
		String encodeStr = new String(Base64.encodeBase64(cipher.doFinal(salary.getBytes())));
		return encodeStr;
	}

	/**
	 * 解密
	 * 
	 * @param salarym
	 * @param key
	 * @return
	 * @throws Exception
	 */
	public static String decode(String salarym, String key) throws Exception {
		if(StringUtils.isNotBlank(salarym)){
			// 3.进行解密
			Cipher cipher = Cipher.getInstance("DESede/ECB/PKCS5Padding");
			Key keyb = getKey(key);
			cipher.init(Cipher.DECRYPT_MODE, keyb);
			return new String(cipher.doFinal(Base64.decodeBase64(salarym.getBytes())));
		}else {
			return "";
		}
	}

}
