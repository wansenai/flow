package com.dragon.flow.service.org.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.mapper.org.IRoleMapper;
import com.dragon.flow.model.org.PersonalRole;
import com.dragon.flow.model.org.Role;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.service.org.IPersonalRoleService;
import com.dragon.flow.service.org.IRoleService;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-12
 */
@Service
public class RoleServiceImpl extends ServiceImpl<IRoleMapper, Role> implements IRoleService {
    @Lazy
    @Autowired
    private IPersonalRoleService personalRoleService;
    @Autowired
    private IRoleMapper roleMapper;

    @Override
    public Role getRoleBySn(String sn) {
        if (StringUtils.isNotBlank(sn)) {
            LambdaQueryWrapper<Role> roleLambdaQueryWrapper = new LambdaQueryWrapper<>();
            roleLambdaQueryWrapper.eq(Role::getSn,sn);
            return getOne(roleLambdaQueryWrapper);
        }
        return null;
    }

    @Override
    public List<Role> getRolesBySns(List<String> sns) {
        if (CollectionUtils.isNotEmpty(sns)) {
            LambdaQueryWrapper<Role> roleLambdaQueryWrapper = new LambdaQueryWrapper<>();
            roleLambdaQueryWrapper.in(Role::getSn, sns);
            return this.list(roleLambdaQueryWrapper);
        }
        return null;
    }

    @Override
    public List<Role> getRolesByPersonalId(String personalId) {
        return roleMapper.getRolesByPersonalId(personalId);
    }

    @Override
    public List<Role> getRolesByPersonalIdList(List<String> personalIdList) {
        if(CollectionUtils.isNotEmpty(personalIdList)){
            return roleMapper.getRolesByPersonalIdList(personalIdList);
        }
        return null;
    }

    @Override
    public void saveOrUpdate(Role role, User loginUser) {
        Date date = new Date();
        if (StringUtils.isNotBlank(role.getId())){
            role.setUpdateTime(date);
            role.setUpdator(loginUser.getUserNo());
        } else {
            role.setCreateTime(date);
            role.setCreator(loginUser.getUserNo());
        }
        this.saveOrUpdate(role);
    }

    @Override
    public PagerModel<Role> getPagerModelByWrapper(Role role, String personalId, Query query) {
        IPage<Role> queryPage = new Page<>(query.getPageNum(), query.getPageSize());
        role.setPersonalId(personalId);
        IPage<Role> page = roleMapper.getPagerModel(queryPage, role);
        return new PagerModel<>(page.getTotal(), page.getRecords());
    }

    @Override
    public void deleteByIds(List<String> ids) {
        LambdaQueryWrapper<PersonalRole> personalRoleLambdaQueryWrapper = new LambdaQueryWrapper<>();
        personalRoleLambdaQueryWrapper.in(PersonalRole::getRoleId, ids);
        personalRoleService.remove(personalRoleLambdaQueryWrapper);
        LambdaUpdateWrapper<Role> roleLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
        roleLambdaUpdateWrapper.set(Role::getDelFlag, FlowConstant.DEL_FLAG_0)
                .in(Role::getId, ids);
        this.update(roleLambdaUpdateWrapper);
    }
}
