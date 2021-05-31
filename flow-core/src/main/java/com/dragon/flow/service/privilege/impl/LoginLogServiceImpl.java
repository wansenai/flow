package com.dragon.flow.service.privilege.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.mapper.privilege.ILoginLogMapper;
import com.dragon.flow.model.privilege.LoginLog;
import com.dragon.flow.service.privilege.ILoginLogService;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;

/**
 * @program: flow
 * @description: 登录日志service实现类
 * @author: Bruce.Liu
 * @create: 2021-03-23 23:03
 **/
@Service
public class LoginLogServiceImpl extends ServiceImpl<ILoginLogMapper, LoginLog> implements ILoginLogService {

    @Override
    public PagerModel<LoginLog> getPagerModelByWrapper(LoginLog loginLog, Query query) {
        LambdaQueryWrapper<LoginLog> loginLogLambdaQueryWrapper = new LambdaQueryWrapper<>();
        if (StringUtils.isNotBlank(loginLog.getStartTimeStr()) && StringUtils.isBlank(loginLog.getEndTimeStr())){
            loginLogLambdaQueryWrapper.gt(LoginLog::getOperationTime, loginLog.getStartTimeStr());
        }
        if (StringUtils.isBlank(loginLog.getStartTimeStr()) && StringUtils.isNotBlank(loginLog.getEndTimeStr())){
            loginLogLambdaQueryWrapper.le(LoginLog::getOperationTime, loginLog.getEndTimeStr());
        }
        if (StringUtils.isNotBlank(loginLog.getStartTimeStr()) && StringUtils.isNotBlank(loginLog.getEndTimeStr())){
            loginLogLambdaQueryWrapper.gt(LoginLog::getOperationTime, loginLog.getStartTimeStr())
                    .le(LoginLog::getOperationTime, loginLog.getEndTimeStr());
        }
        if (StringUtils.isNotBlank(loginLog.getKeyword())){
            loginLogLambdaQueryWrapper.like(LoginLog::getOperationPerson, loginLog.getKeyword())
                    .or().like(LoginLog::getOperationUsername, loginLog.getKeyword());
        }
        loginLogLambdaQueryWrapper.orderByDesc(LoginLog::getOperationTime);
        IPage<LoginLog> queryPage = new Page<>(query.getPageNum(), query.getPageSize());
        IPage<LoginLog> page = this.page(queryPage, loginLogLambdaQueryWrapper);
        return new PagerModel<>(page.getTotal(), page.getRecords());
    }
}