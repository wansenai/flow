package com.dragon.flow.service.privilege.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.mapper.privilege.IUserGroupMapper;
import com.dragon.flow.model.privilege.Group;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.model.privilege.UserGroup;
import com.dragon.flow.service.privilege.IGroupService;
import com.dragon.flow.service.privilege.IUserGroupService;
import com.dragon.flow.service.privilege.IUserService;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * @program: flow
 * @description: 用户角色service
 * @author: Bruce.Liu
 * @create: 2021-03-23 23:24
 **/
@Service
public class UserGroupServiceImpl extends ServiceImpl<IUserGroupMapper, UserGroup> implements IUserGroupService {

    @Autowired
    private IUserService userService;
    @Autowired
    private IGroupService groupService;

    @Override
    public List<String> getGoupIdsByUserId(String userId) {
        LambdaQueryWrapper<UserGroup> userGroupLambdaQueryWrapper = new LambdaQueryWrapper<>();
        userGroupLambdaQueryWrapper.eq(UserGroup::getUserId, userId);
        List<UserGroup> userGroups = this.list(userGroupLambdaQueryWrapper);
        List<String> groupIds = new ArrayList<>();
        userGroups.forEach(userGroup -> groupIds.add(userGroup.getGroupId()));
        return groupIds;
    }

    @Override
    public PagerModel<UserGroup> getPagerModelByWrapper(UserGroup userGroup, Query query) {
        //参数一是当前页，参数二是每页个数
        QueryWrapper<UserGroup> params = new QueryWrapper<>(userGroup);
        IPage<UserGroup> queryPage = new Page<>(query.getPageNum(), query.getPageSize());
        IPage<UserGroup> page = this.page(queryPage, params);
        return new PagerModel<>(page.getTotal(), page.getRecords());
    }

    @Override
    public void addUserGroupsByUser(String userId, List<Group> groups, User loginUser) {
        if (StringUtils.isNotBlank(userId)){
            LambdaQueryWrapper<UserGroup> userGroupLambdaQueryWrapper = new LambdaQueryWrapper<>();
            userGroupLambdaQueryWrapper.eq(UserGroup::getUserId, userId);
            this.remove(userGroupLambdaQueryWrapper);
        }
        List<UserGroup> urs = new ArrayList<>();
        User user = userService.getById(userId);
        Date date = new Date();
        if (CollectionUtils.isNotEmpty(groups) && user != null){

            groups.forEach(group -> {
                UserGroup ur = new UserGroup();
                ur.setUserId(userId);
                ur.setUserNo(user.getUserNo());
                ur.setGroupId(group.getId());
                ur.setGroupSn(group.getSn());
                ur.setCreateTime(date);
                ur.setCreator(loginUser.getUserNo());
                ur.setUpdateTime(date);
                ur.setUpdator(loginUser.getUserNo());
                urs.add(ur);
            });
            this.saveBatch(urs);
        }
    }

    @Override
    public void addUserGroupsByGroup(String groupId, List<User> users, User loginUser) {
        if (StringUtils.isNotBlank(groupId)) {
            LambdaQueryWrapper<UserGroup> userGroupLambdaQueryWrapper = new LambdaQueryWrapper<>();
            userGroupLambdaQueryWrapper.eq(UserGroup::getGroupId, groupId);
            this.remove(userGroupLambdaQueryWrapper);
        }
        List<UserGroup> urs = new ArrayList<>();
        Group group = groupService.getById(groupId);
        Date date = new Date();
        if (CollectionUtils.isNotEmpty(users) && StringUtils.isNotBlank(groupId)){
            users.forEach(user -> {
                UserGroup userGroup = new UserGroup();
                userGroup.setUserId(user.getId());
                userGroup.setUserNo(user.getUserNo());
                userGroup.setGroupId(group.getId());
                userGroup.setGroupSn(group.getSn());
                userGroup.setCreateTime(date);
                userGroup.setCreator(loginUser.getUserNo());
                userGroup.setUpdateTime(date);
                userGroup.setUpdator(loginUser.getUserNo());
                urs.add(userGroup);
            });
            this.saveBatch(urs);
        }
    }
}
