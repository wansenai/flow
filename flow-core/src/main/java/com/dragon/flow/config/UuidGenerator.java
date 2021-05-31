package com.dragon.flow.config;

import org.flowable.common.engine.impl.persistence.StrongUuidGenerator;

/**
 * @Description:
 * @Author: Bruce.liu
 * @Since:13:26 2021/9/8
 */
public class UuidGenerator extends StrongUuidGenerator {

    @Override
    public String getNextId() {
        String uuid = super.getNextId();
        uuid = uuid.replaceAll("-", "");
        return uuid;
    }

}
