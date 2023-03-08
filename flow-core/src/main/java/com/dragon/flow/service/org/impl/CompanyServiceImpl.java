package com.dragon.flow.service.org.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.mapper.org.ICompanyMapper;
import com.dragon.flow.model.org.Company;
import com.dragon.flow.model.org.Department;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.service.org.ICompanyService;
import com.dragon.flow.service.org.IDepartmentService;
import com.dragon.flow.vo.org.OrgTreeVo;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.common.UUIDGenerator;
import com.dragon.tools.vo.ReturnVo;
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
 * @program: flow
 * @description: 公司service实现类
 * @author: Bruce.Liu
 * @create: 2021-03-23 22:39
 **/
@Service
public class CompanyServiceImpl extends ServiceImpl<ICompanyMapper, Company> implements ICompanyService {
    @Lazy
    @Autowired
    private IDepartmentService departmentService;

    @Override
    public Company getCompanyByCode(String code) {
        if (StringUtils.isNotBlank(code)){
            LambdaQueryWrapper<Company> companyLambdaQueryWrapper = new LambdaQueryWrapper<>();
            companyLambdaQueryWrapper.eq(Company::getCode, code).eq(Company::getDelFlag, FlowConstant.DEL_FLAG_1);
            return this.getOne(companyLambdaQueryWrapper);
        }
        return null;
    }

    @Override
    public ReturnVo<String> importCompany(List<Company> companies, User loginUser) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        if (CollectionUtils.isNotEmpty(companies)){
            List<String> codes = new ArrayList<>();
            companies.forEach(company -> codes.add(company.getCode()));
            if (CollectionUtils.isNotEmpty(codes)){
                LambdaQueryWrapper<Company> companyLambdaQueryWrapper = new LambdaQueryWrapper<>();
                companyLambdaQueryWrapper.in(Company::getCode, codes);
                List<Company> oldDbCompanies = this.list(companyLambdaQueryWrapper);
                Map<String, Company> oldDbCompanyMap = oldDbCompanies.stream().collect(Collectors.toMap(Company::getCode, company -> company));
                List<Company> oldCompanies = new ArrayList<>();
                List<Company> newCompanies = new ArrayList<>();
                if (CollectionUtils.isNotEmpty(companies)){
                    companies.forEach(company -> {
                        if (!oldDbCompanyMap.containsKey(company.getCode())){
                            company.setId(UUIDGenerator.generate());
                            newCompanies.add(company);
                        } else {
                            oldCompanies.add(company);
                        }
                    });
                }
                Map<String, Company> oldCompanyMap = oldCompanies.stream().collect(Collectors.toMap(Company::getCode, company -> company));
                oldDbCompanies.forEach(company -> {
                    Company newCompany = oldCompanyMap.get(company.getCode());
                    convert(company, newCompany);
                });
                List<Company> saveOrUpdateBatch = new ArrayList<>();
                saveOrUpdateBatch.addAll(newCompanies);
                saveOrUpdateBatch.addAll(oldDbCompanies);
                Map<String, Company> saveOrUpdateBatchMap = saveOrUpdateBatch.stream().collect(Collectors.toMap(Company::getCode, company -> company));
                saveOrUpdateBatch.forEach(company -> {
                    if (StringUtils.isNotBlank(company.getPcode())) {
                        company.setPid(saveOrUpdateBatchMap.get(company.getPcode()).getId());
                    }
                    Date date = new Date();
                    if (StringUtils.isNotBlank(company.getId())){
                        company.setUpdateTime(date);
                        company.setUpdator(loginUser.getUserNo());
                    } else {
                        company.setCreateTime(date);
                        company.setCreator(loginUser.getUserNo());
                    }
                });
                this.saveOrUpdateBatch(saveOrUpdateBatch);
            }
        }
        return returnVo;
    }

    //转化公司
    void convert(Company oldCompany, Company newCompany) {
        if (oldCompany != null && newCompany != null){
            oldCompany.setCode(newCompany.getCode());
            oldCompany.setPcode(newCompany.getPcode());
            oldCompany.setCname(newCompany.getCname());
            oldCompany.setEname(newCompany.getEname());
            oldCompany.setDescr(newCompany.getDescr());
            oldCompany.setShortName(newCompany.getShortName());
        }
    }

    @Override
    public void getAllCompanyIds(String id, List<String> ids) {
        if (ids == null){
            ids = new ArrayList<>();
        }
        ids.add(id);
        LambdaQueryWrapper<Company> companyLambdaQueryWrapper = new LambdaQueryWrapper<>();
        companyLambdaQueryWrapper.eq(Company::getPid, id).eq(Company::getDelFlag, FlowConstant.DEL_FLAG_1);
        long count = this.count(companyLambdaQueryWrapper);
        if (count > 0){
            List<Company> companyList = this.list(companyLambdaQueryWrapper);
            List<String> finalIds = ids;
            companyList.forEach(company -> this.getAllCompanyIds(company.getId(), finalIds));
        } else {
            return;
        }
    }

    @Override
    public void saveOrUpdate(Company company, User loginUser) {
        Date date = new Date();
        if (StringUtils.isNotBlank(company.getId())){
            company.setUpdateTime(date);
            company.setUpdator(loginUser.getUserNo());
        } else {
            company.setCreateTime(date);
            company.setCreator(loginUser.getUserNo());
        }
        this.saveOrUpdate(company);
    }

    @Override
    public ReturnVo<String> deleteByIds(List<String> ids) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        LambdaQueryWrapper<Department> departmentLambdaQueryWrapper = new LambdaQueryWrapper<>();
        departmentLambdaQueryWrapper.in(Department::getCompanyId, ids)
                .eq(Department::getDelFlag, FlowConstant.DEL_FLAG_1);
        long count = departmentService.count(departmentLambdaQueryWrapper);
        if (count > 0){
            returnVo = new ReturnVo<>(ReturnCode.FAIL, "请先删除相关部门！");
        } else {
            LambdaQueryWrapper<Company> companyLambdaQueryWrapper = new LambdaQueryWrapper<>();
            companyLambdaQueryWrapper.eq(Company::getDelFlag, FlowConstant.DEL_FLAG_1)
                    .eq(Company::getPid, ids.get(0));
            long companyCount = this.count(companyLambdaQueryWrapper);
            if (companyCount > 0){
                returnVo = new ReturnVo<>(ReturnCode.FAIL, "该公司还有子公司，请确认！");
            } else {
                LambdaUpdateWrapper<Company> companyLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
                companyLambdaUpdateWrapper.set(Company::getDelFlag, FlowConstant.DEL_FLAG_0)
                        .in(Company::getId, ids);
                this.update(companyLambdaUpdateWrapper);
            }
        }
        return returnVo;
    }

    @Override
    public List<OrgTreeVo> getCompanyTree(String keyword) {
        List<OrgTreeVo> orgTreeVos = new ArrayList<>();
        LambdaQueryWrapper<Company> companyLambdaQueryWrapper = new LambdaQueryWrapper<>();
        companyLambdaQueryWrapper.eq(Company::getStatus, 1).eq(Company::getDelFlag, FlowConstant.DEL_FLAG_1);
        if(StringUtils.isNotBlank(keyword)){
            companyLambdaQueryWrapper.like(Company::getCname,keyword)
                    .or().like(Company::getCode,keyword)
                    .or().like(Company::getEname,keyword)
                    .or().like(Company::getShortName,keyword);
        }
        List<Company> companies = this.list(companyLambdaQueryWrapper);
        if (CollectionUtils.isNotEmpty(companies)){
            companies.forEach(company -> {
                OrgTreeVo orgTreeVo = new OrgTreeVo(company.getId(), company.getPid(), company.getCname(), company.getShortName(), OrgTreeVo.COMPANY_TYPE);
                orgTreeVo.setCode(company.getCode());
                orgTreeVos.add(orgTreeVo);
            });
        }
        return orgTreeVos;
    }

    @Override
    public List<Company> getCompanies(Company company) {
        //参数一是当前页，参数二是每页个数
        LambdaQueryWrapper<Company> companyLambdaQueryWrapper = new LambdaQueryWrapper<>();
        if (StringUtils.isNotBlank(company.getKeyword())){
            companyLambdaQueryWrapper.like(Company::getCname, company.getKeyword()).or().like(Company::getCode, company.getKeyword());
        }
        if (company.getStatus() != null){
            companyLambdaQueryWrapper.eq(Company::getStatus, company.getStatus());
        }
        companyLambdaQueryWrapper.eq(Company::getDelFlag, 1).orderByAsc(Company::getOrderNo);
        return this.list(companyLambdaQueryWrapper);
    }
}