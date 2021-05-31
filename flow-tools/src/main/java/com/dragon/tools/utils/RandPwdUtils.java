package com.dragon.tools.utils;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

/**
 * 随机生成密码
 * @Title:
 * @Description:
 * @Author:bruce.liu
 * @Since:2021年04月23日 下午5:46:41
 */
public class RandPwdUtils {
	public static void main(String[] args) {
		for (int i = 0; i < 500; i++) {
			System.err.println(randPassword(4, 2, 2));
		}
	}

	/**
	 * 
	 * @param numCnt 数字个数
	 * @param minCharCnt 小写字母个数
	 * @param maxCharCnt 大写字母个数
	 * @return
	 */
	public static String randPassword(int numCnt, int minCharCnt, int maxCharCnt) {
		if (numCnt < 1 || minCharCnt < 1 || maxCharCnt < 1) {
			return null;
		}
		List<String> list = new ArrayList<String>();
		list.add(randNumber(numCnt));
		list.add(ranMinChar(minCharCnt));
		list.add(ranMaxChar(maxCharCnt));
		// Collections.shuffle(list);
		StringBuilder password = new StringBuilder();
		for (int i = 0; i < list.size(); i++) {
			password.append(list.get(i));
		}

		List<Character> listChar = new ArrayList<Character>();
		for (int j = 0; j < password.length(); j++) {
			listChar.add(password.charAt(j));
		}
		Collections.shuffle(listChar);
		StringBuilder newPwd = new StringBuilder();
		for (Character item : listChar) {
			newPwd.append(item);
		}
		return newPwd.toString();
	}

	// 生成数字
	private static String randNumber(int n) {
		if (n < 1) {
			return null;
		}
		StringBuilder ranInt = new StringBuilder();
		for (int i = 0; i < n; i++) {
			ranInt.append(new Random().nextInt(10) + "");
		}
		return ranInt.toString();
	}

	// 生成小写字母
	private static String ranMinChar(int n) {
		if (n < 1) {
			return null;
		}
		String minChars = "abcdefghijklmnopqrstuvwxyz";
		StringBuilder ranMinChar = new StringBuilder();
		for (int i = 0; i < n; i++) {
			ranMinChar.append(minChars.charAt((int) (Math.random() * 26)));
		}
		return ranMinChar.toString();
	}

	// 生成大写字母
	private static String ranMaxChar(int n) {
		if (n < 1) {
			return null;
		}
		String minChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		StringBuilder ranMaxChar = new StringBuilder();
		for (int i = 0; i < n; i++) {
			ranMaxChar.append(minChars.charAt((int) (Math.random() * 26)));
		}
		return ranMaxChar.toString();
	}
}
