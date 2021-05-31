package com.dragon.flow.mapper.privilege;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.dragon.flow.model.privilege.User;
import org.springframework.stereotype.Repository;

/**
 * @program: flow
 * @description: 用户mapper
 * @author: Bruce.Liu
 * @create: 2021-03-23 23:20
 **/
@Repository
public interface IUserMapper extends BaseMapper<User> {
}
