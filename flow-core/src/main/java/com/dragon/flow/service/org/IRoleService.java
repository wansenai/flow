package com.dragon.flow.service.org;

import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.org.Role;
import com.dragon.flow.model.privilege.User;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;

import java.util.List;

/**
 * <p>
 * 服务类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-12
 */
public interface IRoleService extends IService<Role> {
    /**
     * 通过人员id获取人员的角色列表
     *
     * @param personalId 人员id
     * @return
     */
    List<Role> getRolesByPersonalId(String personalId);

    /**
     * 通过人员id获取人员的角色列表
     *
     * @param personalIdList 人员idList
     * @return
     */
    List<Role> getRolesByPersonalIdList(List<String> personalIdList);

    /**
     * 通过标识获取角色
     * @param sn 标识
     * @return
     */
    Role getRoleBySn(String sn) ;
    List<Role> getRolesBySns(List<String> sns) ;

    /**
     * 分页查询角色信息
     *
     * @param role  角色参数
     * @param query 分页参数
     * @return
     */
    PagerModel<Role> getPagerModelByWrapper(Role role, String personalId, Query query);

    /**
     * 删除角色
     *
     * @param ids 参数
     */
    void deleteByIds(List<String> ids);

    /**
     * 添加或者修改
     *
     * @param role      role
     * @param loginUser loginUser
     */
    void saveOrUpdate(Role role, User loginUser);

}
