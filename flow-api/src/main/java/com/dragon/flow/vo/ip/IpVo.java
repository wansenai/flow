package com.dragon.flow.vo.ip;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-23 13:47
 **/
@Data
@AllArgsConstructor
@NoArgsConstructor
public class IpVo implements Serializable {
    private String country;
    private String region;
    private String city;
}
