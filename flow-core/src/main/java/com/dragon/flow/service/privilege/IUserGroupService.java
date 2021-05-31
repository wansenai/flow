package com.dragon.flow.service.privilege;

import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.privilege.Group;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.model.privilege.UserGroup;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;

import java.util.List;

/**
 * @program: flow
 * @description: 用户角色service
 * @author: Bruce.Liu
 * @create: 2021-03-23 23:23
 **/
public interface IUserGroupService extends IService<UserGroup> {
    /**
     * 通过用户id获取用户组列表
     * @param userId 用户id
     * @return
     */
    List<String> getGoupIdsByUserId(String userId) ;
    /**
     * 分页查询列表
     *
     * @param userGroup 条件
     * @param query    分页参数
     * @return
     */
    PagerModel<UserGroup> getPagerModelByWrapper(UserGroup userGroup, Query query);

    /**
     * 角色分配用户
     *
     * @param groupId     组id
     * @param users    用户列表
     * @param loginUser 登录用户
     */
    void addUserGroupsByGroup(String groupId, List<User> users, User loginUser);

    /**
     * 用户分配角色
     * @param userId 用户id
     * @param groups 组列表
     * @param loginUser 登录用户
     */
    void addUserGroupsByUser(String userId, List<Group> groups, User loginUser) ;
}