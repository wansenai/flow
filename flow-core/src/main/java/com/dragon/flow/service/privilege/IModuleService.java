package com.dragon.flow.service.privilege;

import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.privilege.Module;

import java.util.List;

/**
 * @program: flow
 * @description: 模块service
 * @author: Bruce.Liu
 * @create: 2021-03-23 23:08
 **/
public interface IModuleService  extends IService<Module> {
    /**
     * 添加或者修改模型
     * @param module 模块
     */
    void saveOrUpdateModule(Module module) ;
    /**
     * 删除模型
     * @param ids 参数
     */
    void deleteByIds(List<String> ids);
    /**
     * 删除模块的权限
     * @param appPrivilegeValueId 权限值id
     * @param moduleId 模块id
     */
    void deletePriVal(String appPrivilegeValueId, String moduleId);
    /**
     * 添加模块权限值
     * @param positions 权限值
     * @param moduleId 模块id
     */
    void addPriVal(List<Integer> positions, String moduleId);
    /**
     * 分页查询列表
     *
     * @param module 条件
     * @return
     */
    List<Module> getModules(Module module);

    /**
     * 通过模型id列表得到模型列表
     * @param moduleIds 模型id列表
     * @return
     */
    List<Module> getModulesByIds(List<String> moduleIds) ;

    /**
     * 通过标识获取模块
     * @param sn 标识
     * @return
     */
    Module getModuleBySn(String sn) ;


}