package com.dragon.flow.service.privilege.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.IdWorker;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.mapper.privilege.IModuleMapper;
import com.dragon.flow.model.privilege.ACL;
import com.dragon.flow.model.privilege.AppPrivilegeValue;
import com.dragon.flow.model.privilege.Module;
import com.dragon.flow.service.privilege.IAclService;
import com.dragon.flow.service.privilege.IAppPrivilegeValueService;
import com.dragon.flow.service.privilege.IModuleService;
import org.apache.commons.beanutils.BeanUtils;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * @program: flow
 * @description: 模型service实现类
 * @author: Bruce.Liu
 * @create: 2021-03-23 23:09
 **/
@Service
public class ModuleServiceImpl extends ServiceImpl<IModuleMapper, Module> implements IModuleService {

    @Autowired
    private IModuleMapper moduleMapper;
    @Autowired
    private IAppPrivilegeValueService appPrivilegeValueService;
    @Autowired
    private IAclService aclService;

    @Override
    public void saveOrUpdateModule(Module module) {
        if (StringUtils.isBlank(module.getId())){
            module.setId(IdWorker.get32UUID());
            module.setState(new BigInteger("0"));
            List<Integer> positions = new ArrayList<>();
            positions.add(0);
            positions.add(1);
            positions.add(2);
            positions.add(3);
            positions.forEach(position -> module.setPermission(position, true));
        }
        module.setCreateTime(new Date());
        this.saveOrUpdate(module);
    }

    @Override
    public void deleteByIds(List<String> ids) {
        if (CollectionUtils.isNotEmpty(ids)){
            //1、删除ACL数据
            LambdaQueryWrapper<ACL> aclLambdaQueryWrapper = new LambdaQueryWrapper<>();
            aclLambdaQueryWrapper.in(ACL::getModuleId, ids);
            aclService.remove(aclLambdaQueryWrapper);
            //2、删除模型
            removeByIds(ids);
        }
    }

    @Override
    public void deletePriVal(String appPrivilegeValueId, String moduleId) {
        AppPrivilegeValue appPrivilegeValue = appPrivilegeValueService.getById(appPrivilegeValueId);
        Module module = this.getById(moduleId);
        module.setPermission(appPrivilegeValue.getPosition(), false);
        this.updateById(module);
        // 把acl也要相应的处理掉
        LambdaQueryWrapper<ACL> aclLambdaQueryWrapper = new LambdaQueryWrapper<>();
        aclLambdaQueryWrapper.eq(ACL::getModuleId, moduleId);
        List<ACL> acls = aclService.list(aclLambdaQueryWrapper);
        if (CollectionUtils.isNotEmpty(acls)){
            acls.forEach(acl -> acl.setPermission(appPrivilegeValue.getPosition(), false));
            aclService.updateBatchById(acls);
        }
    }

    @Override
    public void addPriVal(List<Integer> positions, String moduleId) {
        Module module = this.getById(moduleId);
        if (CollectionUtils.isNotEmpty(positions)){
            module.setState(new BigInteger("0"));
            positions.forEach(position -> module.setPermission(position, true));
            this.updateById(module);
        }
    }

    @Override
    public List<Module> getModules(Module module) {
        // 参数一是当前页，参数二是每页个数
        LambdaQueryWrapper<Module> moduleLambdaQueryWrapper = new LambdaQueryWrapper<>();
        if (StringUtils.isNotBlank(module.getKeyword())){
            moduleLambdaQueryWrapper.like(Module::getName, module.getKeyword()).or().like(Module::getSn, module.getKeyword());
        }
        moduleLambdaQueryWrapper.eq(Module::getStatus, 1).eq(Module::getDelFlag, 1).orderByAsc(Module::getOrderNo);
        List<Module> modules = this.list(moduleLambdaQueryWrapper);
        LambdaQueryWrapper<AppPrivilegeValue> appPrivilegeValueLambdaQueryWrapper = new LambdaQueryWrapper<>();
        appPrivilegeValueLambdaQueryWrapper.orderByAsc(AppPrivilegeValue::getOrderNo);
        List<AppPrivilegeValue> appPrivilegeValues = appPrivilegeValueService.list(appPrivilegeValueLambdaQueryWrapper);
        modules.forEach(m -> {
            List<AppPrivilegeValue> mapvs = new ArrayList<>();
            appPrivilegeValues.forEach(apv -> {
                boolean yes = false;
                if (apv.getPosition() != null){
                    yes = m.getPermission(apv.getPosition());
                }
                if (yes){
                    apv.setModuleId(m.getId());
                    AppPrivilegeValue clObj = new AppPrivilegeValue();
                    // 对象一定要克隆一下，否则就会出现问题
                    try {
                        BeanUtils.copyProperties(clObj, apv);
                    } catch (Exception e) {
                        log.error("克隆数据失败", e);
                    }
                    mapvs.add(clObj);
                }
            });
            m.setPvs(mapvs);
        });
        return modules;
    }

    @Override
    public List<Module> getModulesByIds(List<String> moduleIds) {
        return moduleMapper.getModulesByIds(moduleIds);
    }

    @Override
    public Module getModuleBySn(String sn) {
        LambdaQueryWrapper<Module> moduleLambdaQueryWrapper = new LambdaQueryWrapper<>();
        moduleLambdaQueryWrapper.eq(Module::getSn, sn);
        return this.getOne(moduleLambdaQueryWrapper);
    }
}
