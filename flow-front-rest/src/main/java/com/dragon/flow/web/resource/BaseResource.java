package com.dragon.flow.web.resource;

import com.dragon.flow.constant.FlowFrontConstant;
import com.dragon.flow.model.user.Account;
import com.dragon.flow.properties.DragonFlowFrontProperties;
import com.dragon.tools.utils.CookiesUtil;
import com.dragon.tools.vo.ReturnVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;

import javax.servlet.http.HttpServletRequest;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-19 10:27
 **/
public abstract class BaseResource {

    @Autowired
    private DragonFlowFrontProperties dragonFlowFrontProperties;

    protected String getApiUrl(String apiUrl) {
        return dragonFlowFrontProperties.getFlowApiUrl() + apiUrl;
    }

    protected HttpHeaders createHttpHeaders(HttpServletRequest request) {
        String token = CookiesUtil.get(request, FlowFrontConstant.REST_API_TOKEN);
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Accept", "application/json");
        headers.add("accessToken", token);
        headers.add("X-Requested-With", "XMLHttpRequest");
        return headers;
    }

    protected Account getLoginAccount(HttpServletRequest request) {
        ReturnVo returnVo = (ReturnVo) request.getSession().getAttribute(FlowFrontConstant.LOGIN_ACCOUNT);
        return (Account)returnVo.getData();
    }
}
