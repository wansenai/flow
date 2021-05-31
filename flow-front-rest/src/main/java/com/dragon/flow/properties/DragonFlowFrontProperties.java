package com.dragon.flow.properties;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-11 22:10
 **/
@Data
@Configuration
public class DragonFlowFrontProperties {
    @Value("${dragon.flow.front.flow-api-url:}")
    private String flowApiUrl;
    @Value("${dragon.flow.front.httppool.maxtotal:}")
    private Integer maxtotal;
    @Value("${dragon.flow.front.httppool.default-max-per-route:}")
    private Integer defaultMaxPerRoute;
    @Value("${dragon.flow.front.httppool.connect-timeout:}")
    private Integer connectTimeout;
    @Value("${dragon.flow.front.httppool.connection-request-timeout:}")
    private Integer connectionRequestTimeout;
    @Value("${dragon.flow.front.httppool.socket-timeout:}")
    private Integer socketTimeout;
    @Value("${dragon.flow.front.httppool.validate-after-inactivity:}")
    private Integer validateAfterInactivity;
    @Value("${dragon.flow.api.app-sn:}")
    private String appSn;
    @Value("${dragon.flow.api.app-secret-key:}")
    private String appSecretKey;
}
