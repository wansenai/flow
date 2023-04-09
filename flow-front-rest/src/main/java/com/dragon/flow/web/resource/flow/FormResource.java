package com.dragon.flow.web.resource.flow;

import com.dragon.flow.constant.FlowFrontConstant;
import com.dragon.flow.web.resource.BaseResource;
import com.dragon.tools.vo.ReturnVo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-12 23:00
 **/
@Slf4j
@RestController
@RequestMapping("/front/flow")
public class FormResource extends BaseResource {

    @Autowired
    private RestTemplate restTemplate;

    @GetMapping(value = "/getFormInfoByModelKey/{modelKey}", produces = "application/json")
    public ReturnVo getFormInfoByModelKey(HttpServletRequest request, @PathVariable String modelKey) {
        HttpHeaders headers = this.createHttpHeaders(request);
        HttpEntity httpEntity = new HttpEntity<>(headers);
        String url = this.getApiUrl(FlowFrontConstant.GET_FORMINFO_BYMODELKEY_URL) + "?modelKey=" + modelKey;
        ReturnVo returnVo = restTemplate.postForObject(url, httpEntity, ReturnVo.class, modelKey);
        return returnVo;
    }

}
