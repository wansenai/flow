package com.dragon.flow.vo;

import lombok.Data;

/**
 * @program: flow
 * @description: 判断字段是否存在的参数VO
 * @author: Bruce.Liu
 * @create: 2021-04-23 21:32
 **/
@Data
public class CheckExistVo {
    //主键
    private String id;
    //字段名
    private String field;
    //字段值
    private String fieldValue;
    //字段备注
    private String fieldName;
}
