package com.dragon.flow.service.form.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.model.form.FormDataInfo;
import com.dragon.flow.mapper.form.IFormDataInfoMapper;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.service.form.IFormDataInfoService;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;

import java.util.Date;
@Service
public class FormDataInfoServiceImpl extends ServiceImpl<IFormDataInfoMapper, FormDataInfo> implements IFormDataInfoService {

    @Override
    public FormDataInfo getFormDataInfoByModelKeyAndBusinessKey(String modelKey, String businessKey) {
        LambdaQueryWrapper<FormDataInfo> formDataInfoLambdaQueryWrapper = new LambdaQueryWrapper<>();
        formDataInfoLambdaQueryWrapper.eq(FormDataInfo::getModelKey, modelKey).eq(FormDataInfo::getBusinessKey, businessKey);
        return this.getOne(formDataInfoLambdaQueryWrapper);
    }

    @Override
    public FormDataInfo getFormDataInfoByProcessInstanceId(String processInstanceId) {
        LambdaQueryWrapper<FormDataInfo> formDataInfoLambdaQueryWrapper = new LambdaQueryWrapper<>();
        formDataInfoLambdaQueryWrapper.eq(FormDataInfo::getProcessInstanceId, processInstanceId);
        return this.getOne(formDataInfoLambdaQueryWrapper);
    }

    /**
     * 通过条件分页获取自定义表单数据配置
     * @param formDataInfo 自定义数据表单
     * @param query 查询参数
     * @return
     */
    @Override
    public PagerModel<FormDataInfo> getPagerModelByWrapper(FormDataInfo formDataInfo, Query query){
        LambdaQueryWrapper<FormDataInfo> formDataInfoLambdaQueryWrapper = new LambdaQueryWrapper<>();
        if (StringUtils.isNotBlank(formDataInfo.getKeyword())){
            formDataInfoLambdaQueryWrapper.like(FormDataInfo::getModelKey, formDataInfo.getKeyword()).or()
                    .like(FormDataInfo::getBusinessKey, formDataInfo.getKeyword());
        }
        formDataInfoLambdaQueryWrapper.eq(FormDataInfo::getDelFlag, FlowConstant.DEL_FLAG_1);
        IPage<FormDataInfo> queryPage = new Page<>(query.getPageNum(), query.getPageSize());
        IPage<FormDataInfo> page = this.page(queryPage, formDataInfoLambdaQueryWrapper);
        return new PagerModel<>(page.getTotal(), page.getRecords());
    }

    /**
     * 添加或修改
     * @param formDataInfo 实体
     * @param loginUser 登录账号
     */
    @Override
    public void saveOrUpdate(FormDataInfo formDataInfo, User loginUser) {
        Date date = new Date();
        if (StringUtils.isNotBlank(formDataInfo.getId())){
            formDataInfo.setUpdateTime(date);
            formDataInfo.setUpdator(loginUser.getUserNo());
        } else {
            formDataInfo.setCreateTime(date);
            formDataInfo.setCreator(loginUser.getUserNo());
        }
        this.saveOrUpdate(formDataInfo);
    }

}
