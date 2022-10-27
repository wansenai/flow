package com.dragon.flow.service.base;

import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.base.App;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;

import java.util.List;

/**
 * @program: flow
 * @description: 应用的服务接口
 * @author: Bruce.Liu
 * @create: 2021-03-23 21:00
 **/
public interface IAppService  extends IService<App> {

    /**
     * 查询所有
     * @param app
     * @return
     */
    List<App> getAll(App app);

    /**
     * 分页查询应用列表
     * @param app 条件
     * @param query 分页参数
     * @return
     */
    PagerModel<App> getPagerModelByWrapper(App app, Query query);

    /**
     * 保存或者更新
     * @param app
     */
    void saveOrUpdateApp(App app) ;

    /**
     * 刷新SecretKey
     * @param appId 应用id
     */
    String updateSecretKey(String appId);

    /**
     * 通过sn和secretKey获取app对象
     * @param sn 标识
     * @param secretKey 秘钥
     * @return
     */
    App getAppBySecretKeyAndSn(String sn,String secretKey);

    /**
     * 通过sn获取App
     * @param sn 标识
     * @return
     */
    App getAppBySn(String sn) ;
}
