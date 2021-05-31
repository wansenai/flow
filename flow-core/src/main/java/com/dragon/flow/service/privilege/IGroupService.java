package com.dragon.flow.service.privilege;

import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.privilege.Group;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;

import java.util.List;

/**
 * @program: flow
 * @description: 角色service
 * @author: Bruce.Liu
 * @create: 2021-03-23 23:13
 **/
public interface IGroupService  extends IService<Group> {
    /**
     * 分页查询列表
     *
     * @param group 条件
     * @param query    分页参数
     * @return
     */
    PagerModel<Group> getPagerModelByWrapper(Group group, Query query);

    /**
     * 查询所有
     * @param group 条件
     * @return
     */
    List<Group> getAll(Group group);

    /**
     * 通过用户id获取角色列表
     * @param userId 用户的工号
     * @return
     */
    List<Group> getGroupsByUserId(String userId) ;

    /**
     * 删除组
     * @param groupIds 组的id
     */
    void deleteByIds(List<String> groupIds) ;
}
