package com.dragon.tools.common;

import java.util.Calendar;

/**
 * 文件路径类
 * @Title:
 * @Description:
 * @Author:bruce.liu
 * @Since:2021年04月23日 下午5:46:41
 */
public class ComFilePart {
	
	/**
	 * 取得年月日
	 * @param module
	 * @return module+年/月/日/
	 * @Description:
	 * @author burce.liu 2021年04月27日 下午3:43:48
	 */
	public static String getFilePath(String module){
		StringBuilder path = new StringBuilder(module);
		Calendar now = Calendar.getInstance();
		int year = now.get(Calendar.YEAR);
		int month = now.get(Calendar.MONTH) + 1;
		int date = now.get(Calendar.DATE);
		path.append(year);
		path.append("/");
		path.append(month);
		path.append("/");
		path.append(date);
		path.append("/");
		return path.toString();
	}
	
	public static void main(String[] args) {
		System.err.println(getFilePath("/prdct/imgs/"));
	}
}
