package com.dragon.flow.service.base;

import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.base.DicType;
import com.dragon.flow.model.base.Dictionary;
import com.dragon.flow.model.base.SystemConfig;
import com.dragon.flow.model.privilege.User;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import com.dragon.tools.vo.ReturnVo;

import java.util.List;

/**
 * @program: flow
 * @description: 系统配置Service
 * @author: Bruce.Liu
 * @create: 2021-03-29 10:03
 **/
public interface ISystemConfigService extends IService<SystemConfig> {
    /**
     * 通过条件分页获取系统配置
     * @param systemConfig 系统配置
     * @param query 查询参数
     * @return
     */
    PagerModel<SystemConfig> getPagerModelByWrapper(SystemConfig systemConfig, Query query);

    /**
     * 通过条件获取
     * @param configSns
     * @return
     */
    List<SystemConfig> getConfigBySns(List<String> configSns);

    /**
     * 添加或修改
     * @param systemConfig 实体
     * @param loginUser 登录账号
     */
    void saveOrUpdate(SystemConfig systemConfig, User loginUser) ;

    /**
     * 删除实体
     *
     * @param ids 实体ids
     * @return
     */
    ReturnVo<String> deleteByIds(String... ids);
}
