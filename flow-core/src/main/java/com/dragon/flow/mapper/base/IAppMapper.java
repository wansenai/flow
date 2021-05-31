package com.dragon.flow.mapper.base;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.dragon.flow.model.base.App;
import org.springframework.stereotype.Repository;

/**
 * @program: flow
 * @description: 应用持久化mapper
 * @author: Bruce.Liu
 * @create: 2021-03-23 20:58
 **/
@Repository
public interface IAppMapper extends BaseMapper<App> {
}
