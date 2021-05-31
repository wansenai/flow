package com.dragon.flow.vo.pager;

import com.dragon.tools.pager.Query;
import lombok.Data;

import java.io.Serializable;


/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-03-30 22:01
 **/
@Data
public class  ParamVo<T> implements Serializable {
    //实体类
    private T entity;
    //分页参数
    private Query query;
}
