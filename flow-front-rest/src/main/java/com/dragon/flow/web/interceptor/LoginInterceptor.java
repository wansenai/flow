package com.dragon.flow.web.interceptor;

import com.dragon.flow.constant.FlowFrontConstant;
import com.dragon.flow.service.token.TokenService;
import com.dragon.tools.utils.CookiesUtil;
import com.dragon.tools.utils.FastJsonUtils;
import com.dragon.tools.vo.ReturnVo;
import org.apache.commons.lang.StringUtils;
import org.apache.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * @program: flow
 * @description: 拦截器
 * @author: Bruce.Liu
 * @create: 2021-05-13 11:36
 **/
public class LoginInterceptor extends HandlerInterceptorAdapter {

    @Autowired
    private TokenService tokenService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        HttpSession session = request.getSession();
        Object obj = session.getAttribute(FlowFrontConstant.LOGIN_ACCOUNT);
        if (obj != null){
            String token = CookiesUtil.get(request, FlowFrontConstant.REST_API_TOKEN);
            if (StringUtils.isBlank(token)){
                ReturnVo returnVo = tokenService.getToken();
                if (returnVo.isSuccess()){
                    token = (String) returnVo.getData();
                    CookiesUtil.crossDomainPut(response, FlowFrontConstant.REST_API_TOKEN, token, 5400);
                }
            }
            return true;
        }
        this.setReturn(response, 401, "用户未登录！");
        return false;
    }

    //返回错误信息
    private static void setReturn(HttpServletResponse response, int status, String msg) throws IOException {
        HttpServletResponse httpResponse = (HttpServletResponse) response;
        httpResponse.setHeader("Access-Control-Allow-Credentials", "true");
//        httpResponse.setHeader("Access-Control-Allow-Origin", HttpContextUtil.getOrigin());
        //UTF-8编码
        httpResponse.setCharacterEncoding("UTF-8");
        response.setContentType("application/json;charset=utf-8");
        response.setStatus(HttpStatus.SC_UNAUTHORIZED);
        ReturnVo<String> returnVo = new ReturnVo<>();
        returnVo.setCode(status + "");
        returnVo.setMsg(msg);
        String json = FastJsonUtils.objectToJson(returnVo);
        httpResponse.getWriter().print(json);
    }
}
