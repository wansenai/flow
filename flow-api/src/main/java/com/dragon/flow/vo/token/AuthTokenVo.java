package com.dragon.flow.vo.token;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-19 09:19
 **/
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthTokenVo implements Serializable {
    private static final long serialVersionUID = 4540511921001816133L;
    private String appSn;
    private String appSecretKey;
}
