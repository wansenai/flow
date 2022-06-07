//package com.dragon.flow.shiro;
//
//import com.dragon.tools.common.ReturnCode;
//import com.dragon.tools.utils.FastJsonUtils;
//import com.dragon.tools.vo.ReturnVo;
//import org.apache.http.HttpStatus;
//import org.apache.shiro.web.filter.authc.FormAuthenticationFilter;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//
//import javax.servlet.ServletRequest;
//import javax.servlet.ServletResponse;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//
///**
// * @program: flow
// * @description:
// * @author: Bruce.Liu
// * @create: 2021-04-11 23:27
// **/
//public class RestAuthorizationFilter extends FormAuthenticationFilter {
//    private static final Logger log = LoggerFactory.getLogger(RestAuthorizationFilter.class);
//
//    @Override
//    protected boolean onAccessDenied(ServletRequest request, ServletResponse response) throws Exception {
//        if (isLoginRequest(request, response)){
//            if (isLoginSubmission(request, response)){
//                if (log.isTraceEnabled()){
//                    log.trace("Login submission detected.  Attempting to execute login.");
//                }
//                return executeLogin(request, response);
//            } else {
//                if (log.isTraceEnabled()){
//                    log.trace("Login page view.");
//                }
//                return true;
//            }
//        } else {
//            if (log.isTraceEnabled()){
//                log.trace("Attempting to access a path which requires authentication.  Forwarding to the " +
//                        "Authentication url [" + getLoginUrl() + "]");
//            }
//            saveRequestAndRedirectToLogin(request, response);
//            return false;
//        }
//    }
//
//    @Override
//    protected void saveRequestAndRedirectToLogin(ServletRequest request, ServletResponse response) throws IOException {
//        saveRequest(request);
//        HttpServletResponse httpResponse = (HttpServletResponse) response;
//        httpResponse.setContentType("application/json;charset=utf-8");
//        httpResponse.setStatus(HttpStatus.SC_UNAUTHORIZED);
//        httpResponse.setHeader("Access-Control-Allow-Credentials", "true");
//        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.FAIL, "登录失效");
//        response.getWriter().print(FastJsonUtils.objectToJson(returnVo));
//    }
//}
