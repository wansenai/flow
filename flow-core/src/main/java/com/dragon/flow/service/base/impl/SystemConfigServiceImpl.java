package com.dragon.flow.service.base.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.mapper.base.ISystemConfigMapper;
import com.dragon.flow.model.base.SystemConfig;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.service.base.ISystemConfigService;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import com.dragon.tools.vo.ReturnVo;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * @program: flow
 * @description: 系统配置service
 * @author: Bruce.Liu
 * @create: 2021-03-29 10:04
 **/
@Service
public class SystemConfigServiceImpl extends ServiceImpl<ISystemConfigMapper, SystemConfig> implements ISystemConfigService {
    @Override
    public PagerModel<SystemConfig> getPagerModelByWrapper(SystemConfig systemConfig, Query query) {
        LambdaQueryWrapper<SystemConfig> systemConfigLambdaQueryWrapper = new LambdaQueryWrapper<>();
        if (StringUtils.isNotBlank(systemConfig.getKeyword())){
            systemConfigLambdaQueryWrapper.like(SystemConfig::getConfigKey, systemConfig.getKeyword()).or()
                    .like(SystemConfig::getConfigName, systemConfig.getKeyword());
        }
        systemConfigLambdaQueryWrapper.eq(SystemConfig::getDelFlag, FlowConstant.DEL_FLAG_1)
                .orderByAsc(SystemConfig::getConfigOrder);
        IPage<SystemConfig> queryPage = new Page<>(query.getPageNum(), query.getPageSize());
        IPage<SystemConfig> page = this.page(queryPage, systemConfigLambdaQueryWrapper);
        return new PagerModel<>(page.getTotal(), page.getRecords());
    }

    @Override
    public List<SystemConfig> getConfigBySns(List<String> configSns) {
        List<SystemConfig> list = new ArrayList<>();
        LambdaUpdateWrapper<SystemConfig> systemConfigLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
        if(CollectionUtils.isNotEmpty(configSns)){
            systemConfigLambdaUpdateWrapper.in(SystemConfig::getConfigSn, configSns);
            systemConfigLambdaUpdateWrapper.eq(SystemConfig::getDelFlag, FlowConstant.DEL_FLAG_1);
            list = this.list(systemConfigLambdaUpdateWrapper);
        }
        return list;
    }

    @Override
    public void saveOrUpdate(SystemConfig systemConfig, User loginUser) {
        Date date = new Date();
        if (StringUtils.isNotBlank(systemConfig.getId())){
            systemConfig.setUpdateTime(date);
            systemConfig.setUpdator(loginUser.getUserNo());
        } else {
            systemConfig.setCreateTime(date);
            systemConfig.setCreator(loginUser.getUserNo());
        }
        this.saveOrUpdate(systemConfig);
    }

    @Override
    public ReturnVo<String> deleteByIds(String... ids) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        LambdaUpdateWrapper<SystemConfig> systemConfigLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
        systemConfigLambdaUpdateWrapper.set(SystemConfig::getDelFlag, FlowConstant.DEL_FLAG_0)
                .in(SystemConfig::getId, ids);
        this.update(systemConfigLambdaUpdateWrapper);
        return returnVo;
    }
}
