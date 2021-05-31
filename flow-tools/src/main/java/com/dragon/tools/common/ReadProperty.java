package com.dragon.tools.common;


/**
 * 读取配置文件 application.property
 * @Author:Bruce.Liu
 * @Since:2014年6月4日
 * @Version:1.1.0 浙江蘑菇加电子商务有限公司 2015 ~ 2016 版权所有
 */
public class ReadProperty {

	public DecryptPropertyPlaceholderConfigurer dppc;

	/**
	 * 读取配置文件的内容
	 * 
	 * @param key
	 * @return value
	 */
	public String getValue(String key) {
		return dppc.getValue(key);
	}

	public void setDppc(DecryptPropertyPlaceholderConfigurer dppc) {
		this.dppc = dppc;
	}
	
	
}
