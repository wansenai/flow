package com.dragon.flow.service.org.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.mapper.org.IDepartmentMapper;
import com.dragon.flow.model.org.Company;
import com.dragon.flow.model.org.Department;
import com.dragon.flow.model.org.Personal;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.service.org.ICompanyService;
import com.dragon.flow.service.org.IDepartmentService;
import com.dragon.flow.service.org.IPersonalService;
import com.dragon.flow.vo.org.OrgTreeVo;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.common.UUIDGenerator;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import com.dragon.tools.vo.ReturnVo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * @program: flow
 * @description: 部门service实现类
 * @author: Bruce.Liu
 * @create: 2021-03-23 22:45
 **/
@Service
@RequiredArgsConstructor
@Slf4j
public class DepartmentServiceImpl extends ServiceImpl<IDepartmentMapper, Department> implements IDepartmentService {

    @Autowired
    private ICompanyService companyService;
    @Autowired
    private IPersonalService personalService;
    @Autowired
    private IDepartmentMapper departmentMapper;

    @Override
    public ReturnVo<List> importDepartment(List<Department> departments, User loginUser) {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        if (CollectionUtils.isNotEmpty(departments)){
            List<String> codes = new ArrayList<>();
            departments.forEach(department -> {
                if (StringUtils.isNotBlank(department.getCode())){
                    codes.add(department.getCode());
                }
            });
            LambdaQueryWrapper<Department> departmentLambdaQueryWrapper = new LambdaQueryWrapper<>();
            departmentLambdaQueryWrapper.in(Department::getCode, codes);
            List<Department> oldDbDepartments = this.list(departmentLambdaQueryWrapper);
            Map<String, Department> oldDbDepartmentMap = oldDbDepartments.stream().collect(Collectors.toMap(Department::getCode, department -> department));
            List<Department> newDepartments = new ArrayList<>();
            List<Department> oldDepartments = new ArrayList<>();
            departments.forEach(department -> {
                String code = department.getCode();
                if (!oldDbDepartmentMap.containsKey(code)){
                    department.setId(UUIDGenerator.generate());
                    newDepartments.add(department);
                } else {
                    oldDepartments.add(department);
                }
            });
            Map<String, Department> oldDepartmentMap = oldDepartments.stream().collect(Collectors.toMap(Department::getCode, department -> department));
            if (CollectionUtils.isNotEmpty(oldDbDepartments)){
                oldDbDepartments.forEach(department -> {
                    Department newDepartment = oldDepartmentMap.get(department.getCode());
                    convert(department, newDepartment);
                });
            }
            List<Department> totalDepartments = new ArrayList<>();
            totalDepartments.addAll(newDepartments);
            totalDepartments.addAll(oldDbDepartments);
            Map<String, Department> saveOrUpdateBatchMap = totalDepartments.stream().collect(Collectors.toMap(Department::getCode, department -> department));
            List<Department> errorDepartments = new ArrayList<>();
            List<Department> saveOrUpdateBatch = new ArrayList<>();
            totalDepartments.forEach(department -> {
                if (StringUtils.isNotBlank(department.getPcode())){
                    department.setPid(saveOrUpdateBatchMap.get(department.getPcode()).getId());
                }
                Company company = companyService.getCompanyByCode(department.getCompanyCode());
                if (company != null){
                    department.setCompanyId(company.getId());
                    Date date = new Date();
                    if (StringUtils.isNotBlank(department.getId())){
                        department.setUpdateTime(date);
                        department.setUpdator(loginUser.getUserNo());
                    } else {
                        department.setCreateTime(date);
                        department.setCreator(loginUser.getUserNo());
                    }
                    saveOrUpdateBatch.add(department);
                }else {
                    //返回错误信息
                    errorDepartments.add(department);
                }
            });
            this.saveOrUpdateBatch(saveOrUpdateBatch);
            if (CollectionUtils.isNotEmpty(errorDepartments)) {
                returnVo = new ReturnVo<>(ReturnCode.FAIL, "公司查询不到，请确认");
                returnVo.setData(errorDepartments);
            }
        }
        return returnVo;
    }

    void convert(Department oldDepartment, Department newDepartment) {
        oldDepartment.setName(newDepartment.getName());
        oldDepartment.setLeaderCode(newDepartment.getLeaderCode());
        oldDepartment.setNote(newDepartment.getNote());
        oldDepartment.setOrderNo(newDepartment.getOrderNo());
    }

    public void getAllDepartmentIds(String id, List<String> ids) {
        if (ids == null){
            ids = new ArrayList<>();
        }
        ids.add(id);
        LambdaQueryWrapper<Department> departmentLambdaQueryWrapper = new LambdaQueryWrapper<>();
        departmentLambdaQueryWrapper.eq(Department::getPid, id).eq(Department::getDelFlag, FlowConstant.DEL_FLAG_1);
        long count = this.count(departmentLambdaQueryWrapper);
        if (count > 0){
            List<Department> companyList = this.list(departmentLambdaQueryWrapper);
            List<String> finalIds = ids;
            companyList.forEach(company -> this.getAllDepartmentIds(company.getId(), finalIds));
        } else {
            return;
        }
    }

    @Override
    public void saveOrUpdate(Department department, User loginUser) {
        Date date = new Date();
        if (StringUtils.isNotBlank(department.getId())){
            department.setUpdateTime(date);
            department.setUpdator(loginUser.getUserNo());
        } else {
            department.setCreateTime(date);
            department.setCreator(loginUser.getUserNo());
        }
        this.saveOrUpdate(department);
    }

    @Override
    public ReturnVo<String> deleteByIds(List<String> ids) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        LambdaQueryWrapper<Personal> personalLambdaQueryWrapper = new LambdaQueryWrapper<>();
        personalLambdaQueryWrapper.in(Personal::getDeptId, ids).eq(Personal::getDelFlag, FlowConstant.DEL_FLAG_1);
        long count = personalService.count(personalLambdaQueryWrapper);
        if (count > 0){
            returnVo = new ReturnVo<>(ReturnCode.FAIL, "请先移除部门相关人员!");
        } else {
            LambdaQueryWrapper<Department> departmentLambdaQueryWrapper = new LambdaQueryWrapper<>();
            departmentLambdaQueryWrapper.eq(Department::getDelFlag, FlowConstant.DEL_FLAG_1)
                    .eq(Department::getPid, ids.get(0));
            long departmentCount = this.count(departmentLambdaQueryWrapper);
            if (departmentCount > 0){
                returnVo = new ReturnVo<>(ReturnCode.FAIL, "该部门还存在子部门，请确认!");
            } else {
                LambdaUpdateWrapper<Department> departmentLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
                departmentLambdaUpdateWrapper.set(Department::getDelFlag, FlowConstant.DEL_FLAG_0)
                        .in(Department::getId, ids);
                this.update(departmentLambdaUpdateWrapper);
            }
        }
        return returnVo;
    }

    @Override
    public PagerModel<Department> getPagerModelByWrapper(Department department, Query query) {
        IPage<Department> queryPage = new Page<>(query.getPageNum(), query.getPageSize());
        IPage<Department> page = departmentMapper.getPagerModel(queryPage, department);
        return new PagerModel<>(page.getTotal(), page.getRecords());
    }

    @Override
    public List<Department> getAll(Department department) {
        return departmentMapper.getDepartments(department);
    }

    @Override
    public List<OrgTreeVo> getDepartmentTree(String companyId,String deptName) {
        List<OrgTreeVo> orgTreeVos = new ArrayList<>();
        LambdaQueryWrapper<Department> departmentLambdaQueryWrapper = new LambdaQueryWrapper<>();
        departmentLambdaQueryWrapper.eq(Department::getDelFlag, 1);
        if (StringUtils.isNotBlank(companyId)){
            departmentLambdaQueryWrapper.eq(Department::getCompanyId, companyId);
        }
        if (StringUtils.isNotBlank(deptName)){
            departmentLambdaQueryWrapper.like(Department::getName, deptName);
        }
        List<Department> departments = this.list(departmentLambdaQueryWrapper);
        if (CollectionUtils.isNotEmpty(departments)){
            departments.forEach(department -> {
                OrgTreeVo orgTreeVo = new OrgTreeVo(department.getId(), department.getPid(), department.getName(), department.getName(), "2");
                orgTreeVo.setCode(department.getCode());
                orgTreeVos.add(orgTreeVo);
            });
        }
        return orgTreeVos;
    }

    @Override
    public List<OrgTreeVo> getOrgTree() {
        List<OrgTreeVo> orgTreeVos = companyService.getCompanyTree(null);
        Map<String, OrgTreeVo> companyMap = orgTreeVos.stream().collect(Collectors.toMap(OrgTreeVo::getId, orgTreeVo -> orgTreeVo));
        List<Department> departments = departmentMapper.getDepartments(new Department());
        if (CollectionUtils.isNotEmpty(departments)){
            departments.forEach(department -> {
                OrgTreeVo orgTreeVo = new OrgTreeVo(department.getId(), department.getPid(), department.getName(), department.getName(), OrgTreeVo.DEPT_TYPE);
                if (StringUtils.isBlank(department.getPid())){
                    orgTreeVo.setPid(department.getCompanyId());
                }
                orgTreeVo.setLeaderCode(department.getLeaderCode());
                orgTreeVo.setLeaderName(department.getLeaderName());
                String companyId = department.getCompanyId();
                OrgTreeVo company = companyMap.get(companyId);
                // 部门如果找不到公司，说明这个部门数据有问题。不加入组织树
                if(company != null) {
                    orgTreeVo.setCompanyId(companyId);
                    orgTreeVo.setCompanyName(company.getName());
                    orgTreeVos.add(orgTreeVo);
                } else {
                    log.error("{}【{}】部门找不到公司", orgTreeVo.getName(), orgTreeVo.getId());
                }
            });
        }
        return orgTreeVos;
    }
}
