package com.dragon.flow.service.form;

import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.form.FormDataInfo;
import com.dragon.flow.model.privilege.User;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;

/**
 * @program: flow
 * @description: 自定义表单数据信息Service
 * @author: min.wang
 * @create: 2023-02-19 16:03
 **/
public interface IFormDataInfoService extends IService<FormDataInfo> {

    /**
     * 通过条件分页获取自定义表单配置
     * @param formDataInfo 自定义表单
     * @param query 查询参数
     * @return
     */
    PagerModel<FormDataInfo> getPagerModelByWrapper(FormDataInfo formDataInfo, Query query);

    /**
     * 添加或修改
     * @param formDataInfo 实体
     * @param loginUser 登录账号
     */
    void saveOrUpdate(FormDataInfo formDataInfo, User loginUser) ;

    FormDataInfo getFormDataInfoByModelKeyAndBusinessKey(String modelKey, String businessKey) ;
    FormDataInfo getFormDataInfoByProcessInstanceId(String processInstanceId) ;
}
