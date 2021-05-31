package com.dragon.flow.mapper.privilege;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.dragon.flow.model.privilege.UserGroup;
import org.springframework.stereotype.Repository;

/**
 * @program: flow
 * @description: 用户角色mapper
 * @author: Bruce.Liu
 * @create: 2021-03-23 23:22
 **/
@Repository
public interface IUserGroupMapper extends BaseMapper<UserGroup> {
}
