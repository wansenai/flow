package com.dragon.flow.service.token;

import com.dragon.flow.constant.FlowFrontConstant;
import com.dragon.flow.properties.DragonFlowFrontProperties;
import com.dragon.flow.vo.token.AuthTokenVo;
import com.dragon.tools.vo.ReturnVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-20 23:12
 **/
@Service
public class TokenService {

    @Autowired
    private RestTemplate restTemplate;
    @Autowired
    private DragonFlowFrontProperties dragonFlowFrontProperties;

    public ReturnVo getToken() {
        HttpHeaders headers = new HttpHeaders();
        MediaType type = MediaType.parseMediaType("application/json; charset=UTF-8");
        headers.setContentType(type);
        headers.add("Accept", MediaType.APPLICATION_JSON.toString());
        String urlStr = dragonFlowFrontProperties.getFlowApiUrl() + FlowFrontConstant.GET_JWT_TOKEN_URL;
        AuthTokenVo params = new AuthTokenVo(dragonFlowFrontProperties.getAppSn(), dragonFlowFrontProperties.getAppSecretKey());
        HttpEntity<AuthTokenVo> httpEntity = new HttpEntity<>(params, headers);
        ResponseEntity<ReturnVo> responseEntity = restTemplate.postForEntity(urlStr, httpEntity, ReturnVo.class);
        ReturnVo returnVo = responseEntity.getBody();
        return returnVo;
    }
}
