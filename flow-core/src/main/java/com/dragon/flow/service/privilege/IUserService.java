package com.dragon.flow.service.privilege;

import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.privilege.User;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import com.dragon.tools.vo.ReturnVo;

import java.util.List;

/**
 * @program: flow
 * @description: 用户service
 * @author: Bruce.Liu
 * @create: 2021-03-23 23:13
 **/
public interface IUserService extends IService<User> {

    /**
     * 通过用户名查询用户
     * @param username 工号或者手机号码
     * @return
     */
    User getUserByUsername(String username);

    ReturnVo<User> getUserByCode(String code) ;

    /**
     * 分页查询列表
     *
     * @param user 条件
     * @param query    分页参数
     * @return
     */
    PagerModel<User> getPagerModelByWrapper(User user, Query query);

    /**
     * 分页查询列表
     * @param user 条件
     * @return
     */
    List<User> getAll(User user);

    /**
     * 设置密码
     * @param user 参数
     */
    void setPassword(User user) ;

    /**
     * 通过用户名和密码登录
     * @param username 用户工号  手机号码
     * @param password 密码
     * @return
     */
    ReturnVo<User> login(String username, String password) ;

    /**
     * 删除用户
     * @param userIds 用户id列表
     */
    void deleteByIds(List<String> userIds) ;
}
