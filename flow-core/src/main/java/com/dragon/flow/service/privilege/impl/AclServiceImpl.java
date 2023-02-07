package com.dragon.flow.service.privilege.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.IdWorker;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.mapper.privilege.IAclMapper;
import com.dragon.flow.mapper.privilege.IAppPrivilegeValueMapper;
import com.dragon.flow.model.privilege.*;
import com.dragon.flow.service.privilege.*;
import com.dragon.flow.vo.privilege.ModulePermission;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.collections.MapUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.*;

/**
 * @program: flow
 * @description: AclService实现类
 * @author: Bruce.Liu
 * @create: 2021-03-23 23:28
 **/
@Service
public class AclServiceImpl extends ServiceImpl<IAclMapper, ACL> implements IAclService {

    @Autowired
    private IGroupService groupService;
    @Autowired
    private IUserService userService;
    @Autowired
    private IUserGroupService userGroupService;
    @Autowired
    private IAclMapper aclMapper;
    @Autowired
    private IAppPrivilegeValueMapper appPrivilegeValueMapper;
    @Lazy
    @Autowired
    private IModuleService moduleService;
    @Autowired
    private CacheManager cacheManager;

    @Override
    public List<Module> getModuleAclsByGroupIds(List<String> groupIds) {
        LambdaQueryWrapper<AppPrivilegeValue> queryWrapper = new LambdaQueryWrapper<>();
        List<AppPrivilegeValue> spvs = appPrivilegeValueMapper.selectList(queryWrapper);
        List<ACL> acls = null;
        if (CollectionUtils.isNotEmpty(groupIds)){
            LambdaQueryWrapper<ACL> aclLambdaQueryWrapper = new LambdaQueryWrapper<>();
            aclLambdaQueryWrapper.in(ACL::getReleaseId, groupIds);
            acls = aclMapper.selectList(aclLambdaQueryWrapper);
        }
        List<Module> datas = moduleService.getModules(new Module());
        if (CollectionUtils.isNotEmpty(datas)){
            for (Module module : datas) {
                List<AppPrivilegeValue> msvs = this.getModuleSystemPrivilegeValues(spvs, acls, module);
                module.setPvs(msvs);
            }
        }
        return datas;
    }

    private List<AppPrivilegeValue> getModuleSystemPrivilegeValues(List<AppPrivilegeValue> spvs, List<ACL> acls, Module module) {
        List<AppPrivilegeValue> msvs = new ArrayList<>();
        for (AppPrivilegeValue spv : spvs) {
            boolean flag = module.getPermission(spv.getPosition());
            if (flag){
                spv.setModuleId(module.getId());
                boolean f = this.hasPermission(acls, module.getId(), spv.getPosition());
                if (f){
                    spv.setFlag(true);
                } else {
                    spv.setFlag(false);
                }
                AppPrivilegeValue clObj = new AppPrivilegeValue();
                // 对象一定要克隆一下，否则就会出现问题
                org.springframework.beans.BeanUtils.copyProperties(spv, clObj);
                msvs.add(clObj);
            }
        }
        return msvs;
    }

    private boolean hasPermission(List<ACL> acls, String moduleId, Integer position) {
        if (CollectionUtils.isNotEmpty(acls)){
            for (ACL acl : acls) {
                if (acl.getModuleId().equals(moduleId)){
                    int i = acl.getPermission(position);
                    return i > 0;
                }
            }
        }
        return false;
    }

    @Override
    public void createAclByModule(ACL acl, boolean yes) {
        // 修改用户的权限时间戳
        this.updateAclTimestampByAcl(acl);
        if (yes){
            LambdaUpdateWrapper<ACL> aclLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
            aclLambdaUpdateWrapper.eq(ACL::getModuleId, acl.getModuleId())
                    .eq(ACL::getReleaseId, acl.getReleaseId());
            ACL currAcl = this.getOne(aclLambdaUpdateWrapper);
            Module module = moduleService.getById(acl.getModuleId());
            if (currAcl != null){
                currAcl.setAclState(module.getState());
                this.updateById(currAcl);
            } else {
                ACL al = new ACL();
                al.setId(IdWorker.get32UUID());
                al.setAclState(module.getState() == null ? new BigInteger("0") : module.getState());
                al.setModuleId(module.getId());
                al.setModuleSn(module.getSn());
                al.setReleaseId(acl.getReleaseId());
                this.save(al);
            }
        } else {
            // 通过用户或角色id和系统标识和模块id删除所在的ACL列表
            ACL dacl = new ACL();
            dacl.setReleaseId(acl.getReleaseId());
//            dacl.setAppSn(acl.getAppSn());
            dacl.setModuleId(acl.getModuleId());
            LambdaQueryWrapper<ACL> aclLambdaQueryWrapper = new LambdaQueryWrapper<>();
            aclLambdaQueryWrapper.eq(ACL::getReleaseId, acl.getReleaseId())
//                    .eq(ACL::getAppSn, acl.getAppSn())
                    .eq(ACL::getModuleId, acl.getModuleId());
            this.remove(aclLambdaQueryWrapper);
        }
    }

    @Override
    public void setAclModuleList(List<Integer> positions, String moduleId, String groupId) {
        //1、删除模块的权限值
        LambdaQueryWrapper<ACL> aclLambdaQueryWrapper = new LambdaQueryWrapper<>();
        aclLambdaQueryWrapper.eq(ACL::getModuleId, moduleId);
        aclLambdaQueryWrapper.eq(ACL::getReleaseId, groupId);
        this.remove(aclLambdaQueryWrapper);
        //2、添加模块的已有权限值
        if (CollectionUtils.isNotEmpty(positions)){
            ACL acl = new ACL();
            acl.setId(IdWorker.get32UUID());
            acl.setReleaseId(groupId);
            acl.setModuleId(moduleId);
            Module module = moduleService.getById(moduleId);
            if (module != null){
                acl.setModuleSn(module.getSn());
            }
            positions.forEach(position -> acl.setPermission(position, true));
            this.saveOrUpdate(acl);
        }
    }

    @Override
    public void createAllAcl(ACL acl, boolean yes) {
        // 修改用户的权限时间戳
        this.updateAclTimestampByAcl(acl);
        LambdaQueryWrapper<ACL> aclLambdaQueryWrapper = new LambdaQueryWrapper<>();
        if (StringUtils.isNotBlank(acl.getReleaseId())){
            aclLambdaQueryWrapper.eq(ACL::getReleaseId, acl.getReleaseId());
        }
        this.remove(aclLambdaQueryWrapper);
        if (yes){
            List<Module> modules = moduleService.list();
            List<ACL> acls = new ArrayList<>();
            for (Module m : modules) {
                ACL al = new ACL();
                al.setAclState(m.getState() == null ? new BigInteger("0") : m.getState());
                al.setModuleId(m.getId());
                al.setModuleSn(m.getSn());
                al.setReleaseId(acl.getReleaseId());
                acls.add(al);
            }
            this.saveBatch(acls);
        }
    }

    @Override
    public void createAcl(ACL acl, Integer position, boolean yes) {
        // 修改用户的权限时间戳
        this.updateAclTimestampByAcl(acl);
        // 1：通过模块id和用户id得到ACL对象
        LambdaUpdateWrapper<ACL> aclLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
        aclLambdaUpdateWrapper.eq(ACL::getModuleId, acl.getModuleId())
                .eq(ACL::getReleaseId, acl.getReleaseId());
        ACL currAcl = this.getOne(aclLambdaUpdateWrapper);
        if (currAcl != null){
            currAcl.setPermission(position, yes);
            String aclState = currAcl.getAclState() == null ? "" : currAcl.getAclState().toString();
            if (StringUtils.isNotBlank(aclState) && !"0".equals(aclState)){
                this.updateById(currAcl);
            } else {
                this.removeById(currAcl.getId());
            }
        } else {
            Module module = moduleService.getById(acl.getModuleId());
            acl.setModuleSn(module.getSn());
            acl.setId(IdWorker.get32UUID());
            acl.setPermission(position, yes);
            this.save(acl);
        }
    }

    @Override
    public Map<String, List<Integer>> getAllPermissions(String username, String userId) {
        Map<String, List<Integer>> allPermissionMap = new HashMap<>();
        Set<ModulePermission> modulePermissions;
        if ("admin".equals(username)){
            modulePermissions = this.getModulePermissionsByAdminId(userId);
        } else {
            modulePermissions = this.getModulePermissionsByUserId(userId);
        }
        for (ModulePermission modulePermission : modulePermissions) {
            if (!allPermissionMap.containsKey(modulePermission.getModuleSn())){
                List<Integer> permissions = new ArrayList<>();
                permissions.add(modulePermission.getPermissionValue());
                allPermissionMap.put(modulePermission.getModuleSn(), permissions);
            } else {
                allPermissionMap.get(modulePermission.getModuleSn()).add(modulePermission.getPermissionValue());
            }
        }
        return allPermissionMap;
    }

    @Override
    public Set<ModulePermission> getModulePermissionsByUserId(String userId) {
//        Cache cache = cacheManager.getCache(FlowConstant.CACHE_ACL_PERMISSIONVALS);
//        Cache.ValueWrapper valueWrapper = cache.get(userId);
//        if (valueWrapper != null){
//            return (Set<ModulePermission>) valueWrapper.get();
//        }
        Set<ACL> acls = this.getAclsByUserId(userId);
        if (CollectionUtils.isEmpty(acls)){
            return null;
        }
        Set<ModulePermission> mps = new HashSet<>();
        List<AppPrivilegeValue> appPrivilegeValues = appPrivilegeValueMapper.selectList(null);
        // 得到用户拥有的权限值集合
        for (ACL acl : acls) {
            if (CollectionUtils.isNotEmpty(appPrivilegeValues)){
                appPrivilegeValues.forEach(sv -> {
                    int i = acl.getPermission(sv.getPosition());
                    if (i > 0){
                        this.setModulePermissionValue(mps, acl, sv);
                    }
                });
            }
        }
//        cache.put(userId, mps);
        return mps;
    }

    @Override
    public Set<ModulePermission> getModulePermissionsByAdminId(String userId) {
//        Cache cache = cacheManager.getCache(FlowConstant.CACHE_ACL_PERMISSIONVALS);
//        Cache.ValueWrapper valueWrapper = cache.get(userId);
//        if (valueWrapper != null){
//            return (Set<ModulePermission>) valueWrapper.get();
//        }
        List<Module> moduleList = moduleService.list();
        Set<ModulePermission> mps = new HashSet<>();
        List<AppPrivilegeValue> appPrivilegeValues = appPrivilegeValueMapper.selectList(null);
        for (Module module : moduleList) {
            if (CollectionUtils.isNotEmpty(appPrivilegeValues)){
                appPrivilegeValues.forEach(appPrivilegeValue -> {
                    ModulePermission mp = new ModulePermission();
                    mp.setModuleSn(module.getSn());
                    mp.setPermissionName(appPrivilegeValue.getName());
                    mp.setPermissionValue(appPrivilegeValue.getPosition());
                    mps.add(mp);
                });
            }
        }
//        cache.put(userId, mps);
        return mps;
    }

    private void setModulePermissionValue(Set<ModulePermission> mps, ACL acl, AppPrivilegeValue sv) {
        ModulePermission mp = new ModulePermission();
        mp.setModuleSn(acl.getModuleSn());
        mp.setPermissionName(sv.getName());
        mp.setPermissionValue(sv.getPosition());
        mps.add(mp);
    }

    @Override
    public Set<ACL> getAclsByUserId(String userId) {
        List<Group> groups = groupService.getGroupsByUserId(userId);
        Set<ACL> acls = new HashSet<>();
        Map<String, ACL> moduleAcls = new HashMap<>();
        if (CollectionUtils.isNotEmpty(groups)){
            List<String> groupIds = new ArrayList<>();
            for (Group group : groups) {
                groupIds.add(group.getId());
            }
            List<ACL> roleAcls = aclMapper.getAclsByGroupIds(groupIds);
            if (CollectionUtils.isNotEmpty(roleAcls)){
                for (ACL acl : roleAcls) {
                    String moduleId = acl.getModuleId();
                    if (moduleAcls.containsKey(acl.getModuleId())){
                        ACL mAcl = moduleAcls.get(moduleId);
                        BigInteger mAclState = mAcl.getAclState() == null ? new BigInteger("0") : mAcl.getAclState();
                        BigInteger aAclState = acl.getAclState() == null ? new BigInteger("0") : acl.getAclState();
                        mAcl.setAclState(mAclState.or(aAclState));
                        moduleAcls.put(acl.getModuleId(), mAcl);
                    } else {
                        moduleAcls.put(acl.getModuleId(), acl);
                    }
                }
            }
            // 转化成set
            if (MapUtils.isNotEmpty(moduleAcls)){
                moduleAcls.forEach((k, v) -> acls.add(v));
            }
        }
        return acls;
    }

    // 修改用户的权限时间戳
    private void updateAclTimestampByAcl(ACL acl) {
        // 修改用户的权限时间戳
        if (StringUtils.isNotBlank(acl.getReleaseId())){
            UserGroup ur = new UserGroup();
            ur.setGroupId(acl.getReleaseId());
            LambdaQueryWrapper<UserGroup> userGroupLambdaQueryWrapper = new LambdaQueryWrapper<>();
            userGroupLambdaQueryWrapper.eq(UserGroup::getGroupId, acl.getReleaseId());
            List<UserGroup> urs = userGroupService.list(userGroupLambdaQueryWrapper);
            List<String> userIds = new ArrayList<>();
            if (CollectionUtils.isNotEmpty(urs)){
                urs.forEach(userRole -> userIds.add(userRole.getUserId()));
            }
            if (CollectionUtils.isNotEmpty(userIds)){
                LambdaUpdateWrapper<User> userLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
                userLambdaUpdateWrapper.set(User::getAclTimestamp, System.currentTimeMillis())
                        .in(User::getId, userIds);
                userService.update(userLambdaUpdateWrapper);
            }
        }
    }
}
