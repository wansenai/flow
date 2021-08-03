package com.dragon.flow.properties;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

/**
 * @Description: 项目的配置文件管理类
 * @Author: Bruce.liu
 * @Since:11:32 2021/3/17
 */
@Data
@Configuration
public class DragonFlowProperties {

    /**
     * 是否开启消息
     */
    @Value("${dragon.flow.message-enabled:}")
    private boolean messageEnabled;

}
