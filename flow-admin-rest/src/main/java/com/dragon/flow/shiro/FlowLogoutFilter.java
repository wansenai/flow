//package com.dragon.flow.shiro;
//
//import com.dragon.tools.common.ReturnCode;
//import com.dragon.tools.utils.FastJsonUtils;
//import com.dragon.tools.vo.ReturnVo;
//import org.apache.http.HttpStatus;
//import org.apache.shiro.session.SessionException;
//import org.apache.shiro.subject.Subject;
//import org.apache.shiro.web.filter.authc.LogoutFilter;
//import org.apache.shiro.web.util.WebUtils;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//
//import javax.servlet.ServletRequest;
//import javax.servlet.ServletResponse;
//import javax.servlet.http.HttpServletResponse;
//import java.util.Locale;
//
///**
// * @program: flow
// * @description:
// * @author: Bruce.Liu
// * @create: 2021-04-15 11:09
// **/
//public class FlowLogoutFilter extends LogoutFilter {
//    private static final Logger log = LoggerFactory.getLogger(FlowLogoutFilter.class);
//
//    @Override
//    protected boolean preHandle(ServletRequest request, ServletResponse response) throws Exception {
//        Subject subject = getSubject(request, response);
//        if (isPostOnlyLogout()){
//            if (!WebUtils.toHttp(request).getMethod().toUpperCase(Locale.ENGLISH).equals("POST")){
//                return onLogoutRequestNotAPost(request, response);
//            }
//        }
//        try {
//            subject.logout();
//        } catch (SessionException ise) {
//            log.debug("Encountered session exception during logout.  This can generally safely be ignored.", ise);
//        }
//        issueRedirect(request, response, null);
//        return false;
//    }
//
//    @Override
//    protected void issueRedirect(ServletRequest request, ServletResponse response, String redirectUrl) throws Exception {
//        HttpServletResponse httpResponse = (HttpServletResponse) response;
//        httpResponse.setContentType("application/json;charset=utf-8");
//        httpResponse.setStatus(HttpStatus.SC_UNAUTHORIZED);
//        httpResponse.setHeader("Access-Control-Allow-Credentials", "true");
//        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.FAIL, "注销成功");
//        response.getWriter().print(FastJsonUtils.objectToJson(returnVo));
//    }
//}
