package com.dragon.flow.mapper.privilege;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.dragon.flow.model.privilege.ShiroSession;
import org.springframework.stereotype.Repository;

/**
 * @program: flow
 * @description: session持久化
 * @author: Bruce.Liu
 * @create: 2021-04-02 10:31
 **/
@Repository
public interface IShiroSessionMapper extends BaseMapper<ShiroSession> {
}
