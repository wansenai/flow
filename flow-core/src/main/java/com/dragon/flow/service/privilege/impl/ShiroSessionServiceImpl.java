package com.dragon.flow.service.privilege.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.mapper.privilege.IShiroSessionMapper;
import com.dragon.flow.model.privilege.ShiroSession;
import com.dragon.flow.service.privilege.IShiroSessionService;
import org.springframework.stereotype.Service;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-04-02 10:33
 **/
@Service
public class ShiroSessionServiceImpl extends ServiceImpl<IShiroSessionMapper, ShiroSession> implements IShiroSessionService {
}
