package com.dragon.tools.vo;

import com.dragon.tools.common.BaseModel;

import java.io.Serializable;

/**
 * 数据库连接类
 *
 * @Author:bruce.liu
 * @Since:2021年04月23日 下午5:46:41
 */
public class DbSourceInfo extends BaseModel implements Serializable {


    /**
     *
     */

    private static final long serialVersionUID = 1L;

    /**
     *
     */
    private String id;

    /**
     * 用户id
     */
    private String userId;

    /**
     * 是否公用 1是0否
     */
    private Integer isCommon;

    /**
     * 数据源驱动类
     */
    private String driverClass;

    /**
     * IP地址
     */
    private String ip;

    /**
     * 端口
     */
    private String port;

    /**
     * 数据库名称
     */
    private String dbName;

    /**
     * 用户名
     */
    private String userName;

    /**
     * 密码
     */
    private String password;
	
	 /* //临时变量-s
    private String startTime; 
    private String endTime;
    //临时变量-e
    
    public String getStartTime() {
    	return startTime;
    }
    
    public void setStartTime(String startTime) {
    	this.startTime = startTime;
    }
    
    public String getEndTime() {
    	return endTime;
    }
    
    public void setEndTime(String endTime) {
    	this.endTime = endTime;
    }*/

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public Integer getIsCommon() {
        return isCommon;
    }

    public void setIsCommon(Integer isCommon) {
        this.isCommon = isCommon;
    }

    public String getDriverClass() {
        return driverClass;
    }

    public void setDriverClass(String driverClass) {
        this.driverClass = driverClass;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String getPort() {
        return port;
    }

    public void setPort(String port) {
        this.port = port;
    }

    public String getDbName() {
        return dbName;
    }

    public void setDbName(String dbName) {
        this.dbName = dbName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
