package com.dragon.flow.service.form.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.mapper.form.IFormInfoMapper;
import com.dragon.flow.model.form.FormInfo;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.service.form.IFormInfoService;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;

import java.util.Date;

/**
 * @author admin
 */
@Service
public class FormInfoServiceImpl extends ServiceImpl<IFormInfoMapper, FormInfo> implements IFormInfoService {

    /**
     * 通过条件分页获取自定义表单配置
     * @param formInfo 自定义表单
     * @param query 查询参数
     * @return
     */
    @Override
    public PagerModel<FormInfo> getPagerModelByWrapper(FormInfo formInfo, Query query){
        LambdaQueryWrapper<FormInfo> formInfoLambdaQueryWrapper = new LambdaQueryWrapper<>();
        if (StringUtils.isNotBlank(formInfo.getKeyword())){
            formInfoLambdaQueryWrapper.like(FormInfo::getCode, formInfo.getKeyword()).or()
                    .like(FormInfo::getName, formInfo.getKeyword());
        }
        formInfoLambdaQueryWrapper.eq(FormInfo::getDelFlag, FlowConstant.DEL_FLAG_1);
        IPage<FormInfo> queryPage = new Page<>(query.getPageNum(), query.getPageSize());
        IPage<FormInfo> page = this.page(queryPage, formInfoLambdaQueryWrapper);
        return new PagerModel<>(page.getTotal(), page.getRecords());
    }

    /**
     * 添加或修改
     * @param formInfo 实体
     * @param loginUser 登录账号
     */
    @Override
    public void saveOrUpdate(FormInfo formInfo, User loginUser) {
        Date date = new Date();
        if (StringUtils.isNotBlank(formInfo.getId())){
            formInfo.setUpdateTime(date);
            formInfo.setUpdator(loginUser.getUserNo());
        } else {
            formInfo.setCreateTime(date);
            formInfo.setCreator(loginUser.getUserNo());
        }
        this.saveOrUpdate(formInfo);
    }

    @Override
    public FormInfo getModelInfoByCode(String code) {
        LambdaQueryWrapper<FormInfo> formInfoLambdaQueryWrapper = new LambdaQueryWrapper<>();
        formInfoLambdaQueryWrapper.eq(FormInfo::getCode, code);
        return this.getOne(formInfoLambdaQueryWrapper);
    }

}
