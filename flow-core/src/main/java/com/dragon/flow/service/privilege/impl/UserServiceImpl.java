package com.dragon.flow.service.privilege.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.exception.FlowException;
import com.dragon.flow.mapper.privilege.IUserMapper;
import com.dragon.flow.model.privilege.Group;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.model.privilege.UserGroup;
import com.dragon.flow.service.privilege.IGroupService;
import com.dragon.flow.service.privilege.IUserGroupService;
import com.dragon.flow.service.privilege.IUserService;
import com.dragon.tools.common.MD5Util;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import com.dragon.tools.vo.ReturnVo;
import groovyjarjarantlr.actions.python.CodeLexer;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;

/**
 * @program: flow
 * @description: UserServiceImpl
 * @author: Bruce.Liu
 * @create: 2021-03-23 23:21
 **/
@Service
public class UserServiceImpl extends ServiceImpl<IUserMapper, User> implements IUserService {
    @Lazy
    @Autowired
    private IUserGroupService userGroupService;
    @Lazy
    @Autowired
    private IGroupService groupService;

    @Override
    public ReturnVo<User> getUserByCode(String code) {
        ReturnVo<User> returnVo = new ReturnVo<>(ReturnCode.FAIL, "获取用户失败!");
        if (StringUtils.isNotBlank(code)){
            LambdaQueryWrapper<User> userLambdaQueryWrapper = new LambdaQueryWrapper<>();
            userLambdaQueryWrapper.eq(User::getUserNo, code);
            List<User> list = this.list(userLambdaQueryWrapper);
            if (CollectionUtils.isNotEmpty(list)){
                returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "获取用户成功");
                returnVo.setData(list.get(0));
            }
        }
        return returnVo;
    }

    @Override
    public User getUserByUsername(String username) {
        if (StringUtils.isNotBlank(username)){
            LambdaQueryWrapper<User> userLambdaQueryWrapper = new LambdaQueryWrapper<>();
            userLambdaQueryWrapper
                    .eq(User::getUsername, username).or()
                    .eq(User::getTel, username).or()
                    .eq(User::getUserNo, username);
            List<User> list = this.list(userLambdaQueryWrapper);
            if (CollectionUtils.isNotEmpty(list)){
                return list.get(0);
            }
        }
        return null;
    }

    @Override
    public ReturnVo<User> login(String username, String password) {
        ReturnVo<User> returnVo = null;
        if (StringUtils.isNotBlank(username) && StringUtils.isNotBlank(password)){
            LambdaQueryWrapper<User> userLambdaQueryWrapper = new LambdaQueryWrapper<>();
            userLambdaQueryWrapper.eq(User::getPassword, this.getMd5Password(password))
                    .and(obj -> obj.eq(User::getUsername, username.trim()).or()
                            .eq(User::getTel, username.trim()).or()
                            .eq(User::getUserNo, username.trim()));
            List<User> list = this.list(userLambdaQueryWrapper);
            if (CollectionUtils.isNotEmpty(list)){
                User user = list.get(0);
                returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
                returnVo.setData(user);
            } else {
                returnVo = new ReturnVo<>(ReturnCode.FAIL, "账号和密码不正确!");
            }
        } else {
            returnVo = new ReturnVo<>(ReturnCode.FAIL, "账号和密码不能为空!");
        }
        return returnVo;
    }

    @Override
    public PagerModel<User> getPagerModelByWrapper(User user, Query query) {
        //参数一是当前页，参数二是每页个数
        LambdaQueryWrapper<User> params = new LambdaQueryWrapper<>();
        if(StringUtils.isNotBlank(StringUtils.trim(user.getKeyword()))){
            params.like(User::getUserNo, StringUtils.trim(user.getKeyword()))
                    .or().like(User::getUsername, StringUtils.trim(user.getKeyword()))
                    .or().like(User::getEmail, StringUtils.trim(user.getKeyword()))
                    .or().like(User::getMobile, StringUtils.trim(user.getKeyword()));
        }
        IPage<User> queryPage = new Page<>(query.getPageNum(), query.getPageSize());
        IPage<User> page = this.page(queryPage, params);
        if (CollectionUtils.isNotEmpty(page.getRecords())){
            page.getRecords().forEach(u -> {
                LambdaQueryWrapper<UserGroup> userGroupLambdaQueryWrapper = new LambdaQueryWrapper<>();
                userGroupLambdaQueryWrapper.eq(UserGroup::getUserId, u.getId());
                List<UserGroup> list = userGroupService.list(userGroupLambdaQueryWrapper);
                List<String> groupIds = new ArrayList<>();
                if (CollectionUtils.isNotEmpty(list)){
                    list.forEach(userGroup -> groupIds.add(userGroup.getGroupId()));
                    List<Group> groups = groupService.listByIds(groupIds);
                    u.setGroups(groups);
                }
            });
        }
        return new PagerModel<>(page.getTotal(), page.getRecords());
    }

    @Override
    public List<User> getAll(User user) {
        QueryWrapper<User> params = new QueryWrapper<>(user);
        return this.list(params);
    }

    @Override
    public void setPassword(User user) {
        LambdaUpdateWrapper<User> userLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
        userLambdaUpdateWrapper.set(User::getUpdateTime, new Date())
                .set(User::getPassword, this.getMd5Password(user.getPassword()))
                .eq(User::getId, user.getId());
        this.update(userLambdaUpdateWrapper);
    }


    private String getMd5Password(String password) {
        if (StringUtils.isNotBlank(password)){
            return MD5Util.getMD5String(FlowConstant.MD5_PREFIX + password.trim());
        } else {
            throw new FlowException("password不能为空");
        }
    }

    @Override
    public void deleteByIds(List<String> userIds) {
        if (CollectionUtils.isNotEmpty(userIds)){
            //1、删除用户组关联
            LambdaQueryWrapper<UserGroup> userGroupLambdaQueryWrapper = new LambdaQueryWrapper<>();
            userGroupLambdaQueryWrapper.in(UserGroup::getUserId, userIds);
            userGroupService.remove(userGroupLambdaQueryWrapper);
            //2、删除用户
            this.removeByIds(userIds);
        }
    }
}
