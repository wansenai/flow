package com.dragon.flow.service.org.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.mapper.org.IPersonalMapper;
import com.dragon.flow.model.org.*;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.service.org.*;
import com.dragon.tools.common.UUIDGenerator;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import com.dragon.tools.vo.ReturnVo;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.*;
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
public class PersonalServiceImpl extends ServiceImpl<IPersonalMapper, Personal> implements IPersonalService {
    @Lazy
    @Autowired
    private IPersonalRoleService personalRoleService;
    @Autowired
    private IRoleService roleService;
    @Lazy
    @Autowired
    private ICompanyService companyService;
    @Lazy
    @Autowired
    private IDepartmentService departmentService;
    @Autowired
    private IPersonalMapper personalMapper;

    @Override
    public ReturnVo<Personal> importPersonals(List<Personal> personals, User loginUser) {
        if (CollectionUtils.isNotEmpty(personals)){
            List<String> codes = new ArrayList<>();
            Set<String> deptCodes = new HashSet<>();
            Set<String> companyCodes = new HashSet<>();
            personals.forEach(personal -> {
                codes.add(personal.getCode());
                deptCodes.add(personal.getDeptCode());
                companyCodes.add(personal.getCompanyCode());
            });
            LambdaQueryWrapper<Personal> personalLambdaQueryWrapper = new LambdaQueryWrapper<>();
            personalLambdaQueryWrapper.in(Personal::getCode, codes);
            List<Personal> oldDbPersonals = this.list(personalLambdaQueryWrapper);
            LambdaQueryWrapper<Company> companyLambdaQueryWrapper = new LambdaQueryWrapper<>();
            companyLambdaQueryWrapper.in(Company::getCode, companyCodes);
            List<Company> companyList = companyService.list(companyLambdaQueryWrapper);
            LambdaQueryWrapper<Department> departmentLambdaQueryWrapper = new LambdaQueryWrapper<>();
            departmentLambdaQueryWrapper.in(Department::getCode, deptCodes);
            List<Department> departmentList = departmentService.list(departmentLambdaQueryWrapper);
            Map<String, Company> companyMap = companyList.stream().collect(Collectors.toMap(Company::getCode, company -> company));
            Map<String, Department> departmentMap = departmentList.stream().collect(Collectors.toMap(Department::getCode, department -> department));
            Map<String, Personal> oldDbPersonalMap = oldDbPersonals.stream().collect(Collectors.toMap(Personal::getCode, personal -> personal));
            List<Personal> newPersonals = new ArrayList<>();
            personals.forEach(personal -> {
                if (StringUtils.isNotBlank(personal.getCompanyCode())){
                    Company company = companyMap.get(personal.getCompanyCode());
                    if (company != null){
                        personal.setCompanyId(company.getId());
                        personal.setCompanyName(company.getCname());
                    }
                }
                if (StringUtils.isNotBlank(personal.getDeptCode())){
                    Department department = departmentMap.get(personal.getDeptCode());
                    if (department != null){
                        personal.setDeptId(department.getId());
                        personal.setDeptName(department.getName());
                    }
                }
                Date date = new Date();
                if (!oldDbPersonalMap.containsKey(personal.getCode())){
                    personal.setId(UUIDGenerator.generate());
                    personal.setCreateTime(date);
                    personal.setCreator(loginUser.getUserNo());
                    newPersonals.add(personal);
                } else {
                    personal.setUpdateTime(date);
                    personal.setUpdator(loginUser.getUserNo());
                    Personal oldPersonal = oldDbPersonalMap.get(personal.getCode());
                    convert(oldPersonal, personal);
                    newPersonals.add(oldPersonal);
                }
            });
            this.saveOrUpdateBatch(newPersonals);
        }
        return null;
    }

    void convert(Personal oldPersonal, Personal newPersonal) {
        if (oldPersonal != null && newPersonal != null){
            oldPersonal.setCode(newPersonal.getCode());
            oldPersonal.setEmail(newPersonal.getEmail());
            oldPersonal.setFax(newPersonal.getFax());
            oldPersonal.setJobGradeCode(newPersonal.getJobGradeCode());
            oldPersonal.setJobGradeName(newPersonal.getJobGradeName());
            oldPersonal.setLeaderCode(newPersonal.getLeaderCode());
            oldPersonal.setLeaderName(newPersonal.getLeaderName());
            oldPersonal.setMobile(newPersonal.getMobile());
            oldPersonal.setName(newPersonal.getName());
            oldPersonal.setPositionCode(newPersonal.getPositionCode());
            oldPersonal.setPositionName(newPersonal.getPositionName());
            oldPersonal.setSex(newPersonal.getSex());
        }
    }

    @Override
    public void saveOrUpdate(Personal personal, User loginUser) {
        Date date = new Date();
        if (StringUtils.isNotBlank(personal.getId())){
            personal.setUpdateTime(date);
            personal.setUpdator(loginUser.getUserNo());
        } else {
            personal.setCreateTime(date);
            personal.setCreator(loginUser.getUserNo());
        }
        if (StringUtils.isNotBlank(personal.getCompanyId())){
            Company company = companyService.getById(personal.getCompanyId());
            personal.setCompanyName(company.getCname());
        }
        if (StringUtils.isNotBlank(personal.getDeptId())){
            Department department = departmentService.getById(personal.getDeptId());
            personal.setDeptName(department.getName());
        }
        this.saveOrUpdate(personal);
    }

    @Override
    public PagerModel<Personal> getPagerModelByWrapper(Personal personal, Query query) {
        return getPagerModelByWrapper(personal, query, false);
    }

    @Override
    public PagerModel<Personal> getPagerModelByWrapper(Personal personal, Query query, boolean showRoles) {
        IPage<Personal> queryPage = new Page<>(query.getPageNum(), query.getPageSize());
        IPage<Personal> page = this.personalMapper.getPagerModel(queryPage, personal);
        List<Personal> list = page.getRecords();
        if (showRoles && CollectionUtils.isNotEmpty(list)){
            List<String> personalIdList = list.stream().map(Personal::getId).collect(Collectors.toList());
            // 获取当前页的所有角色
            List<Role> rolesByPersonalList = roleService.getRolesByPersonalIdList(personalIdList);
            Map<String, List<Role>> personalRolesMap = rolesByPersonalList.stream().collect(Collectors.groupingBy(Role::getPersonalId));
            list.forEach(p -> {
                List<Role> roles = personalRolesMap.get(p.getId());
                if (CollectionUtils.isNotEmpty(roles)){
                    p.setRoles(roles);
                }
            });
        }
        return new PagerModel<>(page.getTotal(), list);
    }

    @Override
    public void deleteByIds(List<String> ids) {
        LambdaQueryWrapper<PersonalRole> personalRoleLambdaQueryWrapper = new LambdaQueryWrapper<>();
        personalRoleLambdaQueryWrapper.in(PersonalRole::getPersonalId, ids);
        personalRoleService.remove(personalRoleLambdaQueryWrapper);
        LambdaUpdateWrapper<Personal> personalLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
        personalLambdaUpdateWrapper.set(Personal::getDelFlag, FlowConstant.DEL_FLAG_0)
                .in(Personal::getId, ids);
        this.update(personalLambdaUpdateWrapper);
    }

    @Override
    public List<Personal> getPersonalsByCodes(List<String> codes) {
        List<Personal> personals = null;
        if(CollectionUtils.isNotEmpty(codes)) {
            LambdaQueryWrapper<Personal> personalQueryWrapper = new LambdaQueryWrapper<>();
            personalQueryWrapper.in(Personal::getCode, codes).eq(Personal::getDelFlag, FlowConstant.DEL_FLAG_1);
            personals = this.list(personalQueryWrapper);
        }
        return personals;
    }

    @Override
    public List<Personal> getPersonalsByRoleIds(List<String> roleIds) {
        List<Personal> personals = null;
        if(CollectionUtils.isNotEmpty(roleIds)) {
            personals = personalMapper.getPersonalsByRoleIds(roleIds);
        }
        return personals;
    }

    @Override
    public List<Personal> getPersonalsByRoleSns(List<String> roleSns) {
        List<Personal> personals = null;
        if(CollectionUtils.isNotEmpty(roleSns)) {
            personals = personalMapper.getPersonalsByRoleSns(roleSns);
        }
        return personals;
    }

    @Override
    public Personal getPersonalByCode(String code) {
        LambdaQueryWrapper<Personal> personalQueryWrapper = new LambdaQueryWrapper<>();
        personalQueryWrapper.eq(Personal::getCode, code).eq(Personal::getDelFlag, FlowConstant.DEL_FLAG_1);
        return this.getOne(personalQueryWrapper);
    }
    @Override
    public Personal getPersonalByThirdUserId(String thirdUserId) {
        LambdaQueryWrapper<Personal> personalQueryWrapper = new LambdaQueryWrapper<>();
        personalQueryWrapper.eq(Personal::getThirdUserId, thirdUserId).eq(Personal::getDelFlag, FlowConstant.DEL_FLAG_1);
        return this.getOne(personalQueryWrapper);
    }
}
