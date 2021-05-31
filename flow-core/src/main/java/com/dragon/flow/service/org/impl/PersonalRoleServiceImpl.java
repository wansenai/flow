package com.dragon.flow.service.org.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.mapper.org.IPersonalRoleMapper;
import com.dragon.flow.model.org.Personal;
import com.dragon.flow.model.org.PersonalRole;
import com.dragon.flow.model.org.Role;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.service.org.IPersonalRoleService;
import com.dragon.flow.service.org.IPersonalService;
import com.dragon.flow.service.org.IRoleService;
import com.dragon.flow.vo.org.RolePersonalVo;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-12
 */
@Lazy
@Service
public class PersonalRoleServiceImpl extends ServiceImpl<IPersonalRoleMapper, PersonalRole> implements IPersonalRoleService {
    @Lazy
    @Autowired
    private IPersonalService personalService;
    @Autowired
    private IRoleService roleService;
    @Autowired
    private IPersonalRoleMapper personalRoleMapper;

    @Override
    public void addPersonalRolesByRole(String roleId, List<Personal> personals, User loginUser) {
        if (StringUtils.isNotBlank(roleId)){
            LambdaQueryWrapper<PersonalRole> personalRoleLambdaQueryWrapper = new LambdaQueryWrapper<>();
            personalRoleLambdaQueryWrapper.eq(PersonalRole::getRoleId, roleId);
            this.remove(personalRoleLambdaQueryWrapper);
        }
        List<PersonalRole> prs = new ArrayList<>();
        Date date = new Date();
        if (CollectionUtils.isNotEmpty(personals) && StringUtils.isNotBlank(roleId)){
            personals.forEach(personal -> {
                PersonalRole pr = new PersonalRole();
                pr.setPersonalId(personal.getId());
                pr.setPersonalCode(personal.getCode());
                pr.setRoleId(roleId);
                pr.setCreateTime(date);
                pr.setCreator(loginUser.getUserNo());
                pr.setUpdateTime(date);
                pr.setUpdator(loginUser.getUserNo());
                prs.add(pr);
            });
            this.saveBatch(prs);
        }
    }

    @Override
    public void addPersonalRolesByPersonal(String personalId, List<Role> roles, User loginUser) {
        List<PersonalRole> prs = new ArrayList<>();
        Personal personal = personalService.getById(personalId);
        Date date = new Date();
        if (CollectionUtils.isNotEmpty(roles) && personal != null){
            roles.forEach(role -> {
                PersonalRole pr = new PersonalRole();
                pr.setPersonalId(personalId);
                pr.setPersonalCode(personal.getCode());
                pr.setRoleId(role.getId());
                pr.setCreateTime(date);
                pr.setCreator(loginUser.getUserNo());
                pr.setUpdateTime(date);
                pr.setUpdator(loginUser.getUserNo());
                prs.add(pr);
            });
            this.saveBatch(prs);
        }
    }

    @Override
    public List<RolePersonalVo> getRolePersonals(PersonalRole personalRole) {
        List<PersonalRole> personalRoles = this.personalRoleMapper.getAllByQuery(personalRole);

        Role role = roleService.getById(personalRole.getRoleId());

        List<RolePersonalVo> rolePersonalVos = new ArrayList<>();
        if(CollectionUtils.isNotEmpty(personalRoles)){
            List<String> codes = personalRoles.stream().map(e -> e.getPersonalCode()).distinct().collect(Collectors.toList());

            // 通过用户工号得到用户的其他信息设置进去
            List<Personal> personals = personalService.getPersonalsByCodes(codes);
            if(CollectionUtils.isNotEmpty(personals)){
                Map<String, Personal> personalMap = personals.stream().collect(Collectors.toMap(Personal::getCode, entity -> entity));
                personalRoles.stream().forEach(item->{
                    Personal personal = personalMap.get(item.getPersonalCode());
                    RolePersonalVo rolePersonalVo = new RolePersonalVo();
                    rolePersonalVo.setId(item.getId());
                    rolePersonalVo.setPersonalId(personal.getId());
                    rolePersonalVo.setRoleId(personalRole.getRoleId());
                    rolePersonalVo.setCode(personal.getCode());
                    rolePersonalVo.setName(personal.getName());
                    rolePersonalVo.setDeptId(personal.getDeptId());
                    rolePersonalVo.setDeptName(personal.getDeptName());
                    rolePersonalVo.setCompanyId(personal.getCompanyId());
                    rolePersonalVo.setCompanyName(personal.getCompanyName());
                    rolePersonalVo.setRoleName(role.getName());
                    rolePersonalVos.add(rolePersonalVo);
                });
            }

            // 查询角色对应人员所管理的组织
            /*personalRoles.stream().forEach(item->{
                try {
                    GroupUserOrg groupUserOrg = new GroupUserOrg();
                    groupUserOrg.setUserId(item.getUserId());
                    groupUserOrg.setGroupId(item.getGroupId());
                    List<GroupUserOrg> groupUserOrgs = groupUserOrgService.getAll(groupUserOrg);
                    if(CollectionUtils.isNotEmpty(groupUserOrgs)){
                        List<String> deptIds = groupUserOrgs.stream().map(GroupUserOrg::getOrgId).collect(Collectors.toList());
                        List<String> deptNames = groupUserOrgs.stream().map(GroupUserOrg::getOrgName).collect(Collectors.toList());
                        if(CollectionUtils.isNotEmpty(deptIds)){
                            item.setDeptIds(StringUtils.join(deptIds.toArray(), ","));
                            item.setDeptNames(StringUtils.join(deptNames.toArray(), ","));
                        }
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }
            });*/
        }

        return rolePersonalVos;
    }
}
