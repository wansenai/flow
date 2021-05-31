package com.dragon.flow.service.privilege.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.mapper.privilege.IAppPrivilegeValueMapper;
import com.dragon.flow.model.privilege.AppPrivilegeValue;
import com.dragon.flow.service.privilege.IAppPrivilegeValueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @program: flow
 * @description: 权限值service实现类
 * @author: Bruce.Liu
 * @create: 2021-03-24 10:00
 **/
@Service
public class AppPrivilegeValueServiceImpl extends ServiceImpl<IAppPrivilegeValueMapper, AppPrivilegeValue> implements IAppPrivilegeValueService {

}
