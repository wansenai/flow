package com.dragon.flow.service.privilege;

import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.privilege.ACL;
import com.dragon.flow.model.privilege.Module;
import com.dragon.flow.vo.privilege.ModulePermission;

import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * @program: flow
 * @description: acl service
 * @author: Bruce.Liu
 * @create: 2021-03-23 23:28
 **/
public interface IAclService extends IService<ACL> {


    /**
     * 获取模块列表和权限值
     *
     * @return
     */
    List<Module> getModuleAclsByGroupIds(List<String> groupIds) ;

    /**
     * 通过用户获取ACL列表
     *
     * @param userId 用户id
     * @return
     */
    Set<ACL> getAclsByUserId(String userId);

    /**
     * 通过用户获取模块的权限列表
     *
     * @param userId 用户的id
     * @return
     */
    Set<ModulePermission> getModulePermissionsByUserId(String userId);
    Set<ModulePermission> getModulePermissionsByAdminId(String admin);
    /**
     * 模块前面的全选和取消
     *
     * @param acl
     * @param yes
     * @throws Exception
     */
    void createAclByModule(ACL acl, boolean yes);

    /**
     * 全选和全部取消
     *
     * @param acl
     * @param yes true全选 false全部取消
     * @throws Exception
     */
    void createAllAcl(ACL acl, boolean yes);

    /**
     * 设置ACL的值
     *
     * @param acl      acl
     * @param position 多少位
     * @param yes      是否选中
     * @throws Exception
     */
    void createAcl(ACL acl, Integer position, boolean yes);

    /**
     * 设置ACL的值
     *
     * @param positions 位集合
     * @param moduleId  模块标识
     * @param groupId   组id
     */
    void setAclModuleList(List<Integer> positions, String moduleId, String groupId);

    /**
     * 获取权限集合
     * @param username 用户名
     * @param userId 用户id
     * @return
     */
    Map<String, List<Integer>> getAllPermissions(String username, String userId);
}
