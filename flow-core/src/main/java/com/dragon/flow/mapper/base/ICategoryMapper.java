package com.dragon.flow.mapper.base;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.dragon.flow.model.base.Category;
import org.springframework.stereotype.Repository;

/**
 * @program: flow
 * @description: 分类持久化
 * @author: Bruce.Liu
 * @create: 2021-03-27 09:15
 **/
@Repository
public interface ICategoryMapper extends BaseMapper<Category> {
}
