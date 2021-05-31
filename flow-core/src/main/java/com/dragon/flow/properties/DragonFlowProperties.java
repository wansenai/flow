package com.dragon.flow.properties;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * @Description: 项目的配置文件管理类
 * @Author: Bruce.liu
 * @Since:11:32 2021/3/17
 */
@Data
@Component
@ConfigurationProperties(prefix = "dragon.flow", ignoreUnknownFields = false)
public class DragonFlowProperties {

    /**
     * 是否开启消息
     */
    private boolean messageEnabled;

}
