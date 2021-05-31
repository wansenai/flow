package com.dragon.flow.service.privilege;

import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.privilege.LoginLog;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;

/**
 * @program: flow
 * @description: 登录日志
 * @author: Bruce.Liu
 * @create: 2021-03-23 23:02
 **/
public interface ILoginLogService extends IService<LoginLog> {
    /**
     * 分页查询列表
     *
     * @param loginLog 条件
     * @param query    分页参数
     * @return
     */
    PagerModel<LoginLog> getPagerModelByWrapper(LoginLog loginLog, Query query);
}