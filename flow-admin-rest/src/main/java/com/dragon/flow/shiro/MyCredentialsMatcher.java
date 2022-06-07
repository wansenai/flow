//package com.dragon.flow.shiro;
//
//import com.dragon.flow.constant.FlowConstant;
//import com.dragon.tools.common.MD5Util;
//import org.apache.shiro.authc.AuthenticationInfo;
//import org.apache.shiro.authc.AuthenticationToken;
//import org.apache.shiro.authc.UsernamePasswordToken;
//import org.apache.shiro.authc.credential.SimpleCredentialsMatcher;
//
///**
// * @Description:
// * @Author: Bruce.liu
// * @Since:11:43 2021/05/3
// */
//public class MyCredentialsMatcher extends SimpleCredentialsMatcher {
//
//    @Override
//    public boolean doCredentialsMatch(AuthenticationToken token, AuthenticationInfo info) {
//        UsernamePasswordToken utoken = (UsernamePasswordToken) token;
//        String inPassword = new String(utoken.getPassword());
//        inPassword = MD5Util.getMD5String(FlowConstant.MD5_PREFIX + inPassword);
//        String dbPassword = (String) info.getCredentials();
//        return this.equals(inPassword, dbPassword);
//    }
//
//}