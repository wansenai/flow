package com.dragon.flow.mapper.privilege;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.dragon.flow.model.privilege.LoginLog;
import org.springframework.stereotype.Repository;

/**
 * @program: flow
 * @description: 登录日志
 * @author: Bruce.Liu
 * @create: 2021-03-23 22:52
 **/
@Repository
public interface ILoginLogMapper extends BaseMapper<LoginLog> {
}
