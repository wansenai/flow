package com.dragon.flow.mapper.base;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.dragon.flow.model.base.Dictionary;
import org.springframework.stereotype.Repository;

/**
 * @program: flow
 * @description: 数据字典mapper
 * @author: Bruce.Liu
 * @create: 2021-03-29 10:18
 **/
@Repository
public interface IDictionaryMapper extends BaseMapper<Dictionary> {
}
