package com.dragon.flow.vo.flowable.task;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * @program: prodflow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-21 14:04
 **/
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ApproverVo implements Serializable {

    public static final String ROLE = "role";
    public static final String USER = "user";

    //类型 role 和user
    private String type;
    //编码标识
    private String code;
    //名称
    private String name;
    //电话
    private String mobile;
}
