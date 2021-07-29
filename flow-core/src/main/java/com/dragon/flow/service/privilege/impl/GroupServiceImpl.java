package com.dragon.flow.service.privilege.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.mapper.privilege.IGroupMapper;
import com.dragon.flow.mapper.privilege.IUserGroupMapper;
import com.dragon.flow.model.privilege.ACL;
import com.dragon.flow.model.privilege.Group;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.model.privilege.UserGroup;
import com.dragon.flow.service.privilege.IAclService;
import com.dragon.flow.service.privilege.IGroupService;
import com.dragon.flow.service.privilege.IUserGroupService;
import com.dragon.flow.service.privilege.IUserService;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * @program: flow
 * @description: 角色service实现类
 * @author: Bruce.Liu
 * @create: 2021-03-23 23:14
 **/
@Service
public class GroupServiceImpl extends ServiceImpl<IGroupMapper, Group> implements IGroupService {
    @Lazy
    @Autowired
    private IUserGroupService userGroupService;
    @Autowired
    private IUserService userService;
    @Lazy
    @Autowired
    private IAclService aclService;
    @Autowired
    private IGroupMapper groupMapper;

    @Override
    public PagerModel<Group> getPagerModelByWrapper(Group group, Query query) {
        //参数一是当前页，参数二是每页个数
        LambdaQueryWrapper<Group> groupLambdaQueryWrapper = new LambdaQueryWrapper<>();
        if (StringUtils.isNotBlank(group.getKeyword())){
            groupLambdaQueryWrapper.like(Group::getName, group.getKeyword())
                    .or()
                    .like(Group::getSn, group.getKeyword());
        }
        IPage<Group> queryPage = new Page<>(query.getPageNum(), query.getPageSize());
        IPage<Group> page = this.page(queryPage, groupLambdaQueryWrapper);
        if (CollectionUtils.isNotEmpty(page.getRecords())){
            page.getRecords().forEach(g -> {
                LambdaQueryWrapper<UserGroup> userGroupLambdaQueryWrapper = new LambdaQueryWrapper<>();
                userGroupLambdaQueryWrapper.eq(UserGroup::getGroupId, g.getId());
                List<UserGroup> userGroups = userGroupService.list(userGroupLambdaQueryWrapper);
                if (CollectionUtils.isNotEmpty(userGroups)){
                    List<String> userIds = new ArrayList<>();
                    userGroups.forEach(userGroup -> userIds.add(userGroup.getUserId()));
                    List<User> users = userService.listByIds(userIds);
                    g.setUsers(users);
                }
            });
        }
        return new PagerModel<>(page.getTotal(), page.getRecords());
    }

    @Override
    public List<Group> getGroupsByUserId(String userId) {
        LambdaQueryWrapper<UserGroup> userRoleLambdaQueryWrapper = new LambdaQueryWrapper<>();
        userRoleLambdaQueryWrapper.eq(UserGroup::getUserId, userId);
        List<UserGroup> userGroups = userGroupService.list(userRoleLambdaQueryWrapper);
        if (CollectionUtils.isNotEmpty(userGroups)){
            List<String> groupIds = new ArrayList<>();
            userGroups.forEach(ur -> groupIds.add(ur.getGroupId()));
            LambdaQueryWrapper<Group> roleLambdaQueryWrapper = new LambdaQueryWrapper<>();
            roleLambdaQueryWrapper.in(Group::getId, groupIds);
            List<Group> roles = this.list(roleLambdaQueryWrapper);
            return roles;
        }
        return null;
    }

    @Override
    public List<Group> getAll(Group group) {
        LambdaQueryWrapper<Group> groupLambdaQueryWrapper = new LambdaQueryWrapper<>();
        List<Group> userGroups = groupMapper.selectList(groupLambdaQueryWrapper);
        return userGroups;
    }

    @Override
    public void deleteByIds(List<String> groupIds) {
        if (CollectionUtils.isNotEmpty(groupIds)){
            //1、删除权限值
            LambdaQueryWrapper<ACL> aclLambdaQueryWrapper = new LambdaQueryWrapper<>();
            aclLambdaQueryWrapper.in(ACL::getReleaseId, groupIds);
            aclService.remove(aclLambdaQueryWrapper);
            //2、删除用户组关联
            LambdaQueryWrapper<UserGroup> userGroupLambdaQueryWrapper = new LambdaQueryWrapper<>();
            userGroupLambdaQueryWrapper.eq(UserGroup::getGroupId, groupIds);
            userGroupService.remove(userGroupLambdaQueryWrapper);
            //3、删除组
            this.removeByIds(groupIds);
        }
    }
}
