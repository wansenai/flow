package com.dragon.flow.service.form;

import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.form.FormInfo;
import com.dragon.flow.model.privilege.User;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;

/**
 * @program: flow
 * @description: 自定义表单信息Service
 * @author: min.wang
 * @create: 2023-02-19 12:03
 **/
public interface IFormInfoService extends IService<FormInfo> {

    /**
     * 通过条件分页获取自定义表单配置
     * @param formInfo 自定义表单
     * @param query 查询参数
     * @return
     */
    PagerModel<FormInfo> getPagerModelByWrapper(FormInfo formInfo, Query query);

    /**
     * 添加或修改
     * @param formInfo 实体
     * @param loginUser 登录账号
     */
    void saveOrUpdate(FormInfo formInfo, User loginUser) ;

    /**
     * 通过表单标识获取数据
     * @param code  表单标识，modelKey
     */
    FormInfo getModelInfoByCode(String code) ;


}
