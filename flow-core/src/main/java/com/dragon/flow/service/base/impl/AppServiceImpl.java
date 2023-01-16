package com.dragon.flow.service.base.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.mapper.base.IAppMapper;
import com.dragon.flow.model.base.App;
import com.dragon.flow.service.base.IAppService;
import com.dragon.tools.common.MD5Util;
import com.dragon.tools.common.UUIDGenerator;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import org.apache.commons.lang.RandomStringUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @program: flow
 * @description: 应用service实现类
 * @author: Bruce.Liu
 * @create: 2021-03-23 21:01
 **/
@Service
public class AppServiceImpl extends ServiceImpl<IAppMapper, App> implements IAppService {
    @Override
    public App getAppBySn(String sn) {
        LambdaQueryWrapper<App> appLambdaQueryWrapper = new LambdaQueryWrapper<>();
        appLambdaQueryWrapper.eq(App::getSn, sn.trim());
        return this.getOne(appLambdaQueryWrapper);
    }

    @Override
    public List<App> getAll(App app) {
        //参数一是当前页，参数二是每页个数
        LambdaQueryWrapper<App> appLambdaQueryWrapper = new LambdaQueryWrapper<>();
        if (StringUtils.isNotBlank(app.getKeyword())){
            appLambdaQueryWrapper.like(App::getName, app.getKeyword()).or().like(App::getSn, app.getKeyword());
        }
        appLambdaQueryWrapper.eq(App::getStatus, 1).eq(App::getDelFlag, FlowConstant.DEL_FLAG_1).orderByAsc(App::getOrderNo);
        return this.list(appLambdaQueryWrapper);
    }

    @Override
    public PagerModel<App> getPagerModelByWrapper(App app, Query query) {
        if (query == null) query = new Query();
        //参数一是当前页，参数二是每页个数
        LambdaQueryWrapper<App> appLambdaQueryWrapper = new LambdaQueryWrapper<>();
        if (StringUtils.isNotBlank(app.getKeyword())){
            appLambdaQueryWrapper.like(App::getName, app.getKeyword()).or().like(App::getSn, app.getKeyword());
        }

        if(app.getStatus() != null){
            appLambdaQueryWrapper.eq(App::getStatus, app.getStatus());
        }

        appLambdaQueryWrapper.eq(App::getDelFlag, FlowConstant.DEL_FLAG_1).orderByAsc(App::getOrderNo);
        IPage<App> queryPage = new Page<>(query.getPageNum(), query.getPageSize());
        IPage<App> page = this.page(queryPage, appLambdaQueryWrapper);
        return new PagerModel<>(page.getTotal(), page.getRecords());
    }

    @Override
    public void saveOrUpdateApp(App app) {
        if (StringUtils.isNotBlank(app.getId())){
            app.setSecretKey(this.createSecretKey());
        }
        this.saveOrUpdate(app);
    }

    @Override
    public String updateSecretKey(String appId) {
        String secretKey = this.createSecretKey();
        LambdaUpdateWrapper<App> appLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
        appLambdaUpdateWrapper.set(App::getSecretKey, secretKey).eq(App::getId, appId);
        this.update(appLambdaUpdateWrapper);
        return secretKey;
    }

    @Override
    public App getAppBySecretKeyAndSn(String sn, String secretKey) {
        App app = null;
        LambdaQueryWrapper<App> appLambdaQueryWrapper = new LambdaQueryWrapper<>();
        if (StringUtils.isNotBlank(sn) && StringUtils.isNotBlank(secretKey)){
            appLambdaQueryWrapper.eq(App::getSn, sn.trim()).eq(App::getSecretKey, secretKey.trim());
            app = this.getOne(appLambdaQueryWrapper);
        }
        return app;
    }


    /**
     * 创建app的时候自动创建一个SecretKey
     *
     * @return
     */
    private String createSecretKey() {
        String uuid = UUIDGenerator.generate();
        String random = RandomStringUtils.random(64, "abcdefghjklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*" + uuid);
        return random;
    }
}
