package com.dragon.flow.web.interceptor;

import com.baomidou.kisso.SSOConfig;
import com.baomidou.kisso.common.RsaKeyHelper;
import com.baomidou.kisso.security.token.SSOToken;
import com.baomidou.kisso.web.handler.SSOHandlerInterceptor;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.utils.FastJsonUtils;
import com.dragon.tools.vo.ReturnVo;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.ClassPathResource;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.security.PublicKey;
import java.util.Date;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-17 11:49
 **/
public class LoginHandlerInterceptor implements SSOHandlerInterceptor {

    protected Logger logger = LoggerFactory.getLogger(this.getClass());

    @Override
    public boolean preTokenIsNullAjax(HttpServletRequest request, HttpServletResponse response) {
        String jwtToken = request.getHeader("accessToken");
        try {
            if (StringUtils.isNotBlank(jwtToken)){
                SSOToken ssoToken = SSOToken.parser(jwtToken);
                if (ssoToken != null){
                    SSOConfig ssoConfig = SSOConfig.getInstance();
                    PublicKey publicKey = RsaKeyHelper.getRsaPublicKey(new ClassPathResource(ssoConfig.getRsaCertStore()).getInputStream());
                    Jws<Claims> crtClaimsJws = Jwts.parserBuilder().setSigningKey(publicKey).build().parseClaimsJws(jwtToken);
                    Date expiration = crtClaimsJws.getBody().getExpiration();
                    Date currDate = new Date();
                    boolean after = expiration.after(currDate);
                    if (!after){
                        this.resposeWriter(response, "认证失败,Token失效！");
                        return false;
                    }
                    return after;
                }
            }
            this.resposeWriter(response, "认证失败");
        } catch (Exception e) {
            this.resposeWriter(response, "认证失败");
        }
        return false;
    }

    private void resposeWriter(HttpServletResponse response, String message) {
        try {
            response.setHeader("Content-type", "text/html;charset=UTF-8");
            ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.FAIL, message);
            response.getWriter().write(FastJsonUtils.objectToJson(returnVo));
        } catch (Exception ep) {
            logger.error("response写入数据报错", ep);
        }
    }

    @Override
    public boolean preTokenIsNull(HttpServletRequest request, HttpServletResponse response) {
        return this.preTokenIsNullAjax(request, response);
    }

}
