package com.dragon.flow.service.base.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.mapper.base.ICategoryMapper;
import com.dragon.flow.model.base.Category;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.service.base.ICategoryService;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import com.dragon.tools.vo.ReturnVo;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * @program: flow
 * @description: 分类实现类
 * @author: Bruce.Liu
 * @create: 2021-03-27 09:18
 **/
@Service
public class CategoryServiceImpl extends ServiceImpl<ICategoryMapper, Category> implements ICategoryService {

    @Override
    public void getAllCategoryIds(String id, List<String> ids) {
        if (ids == null){
            ids = new ArrayList<>();
        }
        ids.add(id);
        LambdaQueryWrapper<Category> categoryLambdaQueryWrapper = new LambdaQueryWrapper<>();
        categoryLambdaQueryWrapper.eq(Category::getPid, id).eq(Category::getDelFlag, FlowConstant.DEL_FLAG_1);
        long count = this.count(categoryLambdaQueryWrapper);
        if (count > 0){
            List<Category> companyList = this.list(categoryLambdaQueryWrapper);
            List<String> finalIds = ids;
            companyList.forEach(category -> this.getAllCategoryIds(category.getId(), finalIds));
        } else {
            return;
        }
    }

    @Override
    public List<Category> getCategories(Category category) {
        LambdaQueryWrapper<Category> categoryLambdaQueryWrapper = new LambdaQueryWrapper<>();
        if (StringUtils.isNotBlank(category.getKeyword())){
            categoryLambdaQueryWrapper.like(Category::getName, category.getKeyword()).or().like(Category::getCode, category.getKeyword());
        }
        // 流程分类增加是否显示的条件。
        if (category.getFrontShow() != null){
            categoryLambdaQueryWrapper.eq(Category::getFrontShow, category.getFrontShow());
        }
        categoryLambdaQueryWrapper.eq(Category::getDelFlag, FlowConstant.DEL_FLAG_1).orderByDesc(Category::getOrderNo);
        return this.list(categoryLambdaQueryWrapper);
    }

    @Override
    public PagerModel<Category> getPagerModelByWrapper(Category category, Query query) {
        LambdaQueryWrapper<Category> categoryLambdaQueryWrapper = new LambdaQueryWrapper<>();
        if (StringUtils.isNotBlank(category.getKeyword())){
            categoryLambdaQueryWrapper.like(Category::getCode, category.getKeyword()).or()
                    .like(Category::getName, category.getKeyword());
        }
        categoryLambdaQueryWrapper.eq(Category::getDelFlag, FlowConstant.DEL_FLAG_1)
                .orderByAsc(Category::getOrderNo);
        IPage<Category> queryPage = new Page<>(query.getPageNum(), query.getPageSize());
        IPage<Category> page = this.page(queryPage, categoryLambdaQueryWrapper);
        return new PagerModel<>(page.getTotal(), page.getRecords());
    }

    @Override
    public void saveOrUpdate(Category category, User loginUser) {
        Date date = new Date();
        if (StringUtils.isNotBlank(category.getId())){
            category.setUpdateTime(date);
            category.setUpdator(loginUser.getUserNo());
        } else {
            category.setCreateTime(date);
            category.setCreator(loginUser.getUserNo());
        }
        this.saveOrUpdate(category);
    }

    @Override
    public ReturnVo<String> deleteByIds(List<String> ids) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        LambdaQueryWrapper<Category> categoryLambdaQueryWrapper = new LambdaQueryWrapper<>();
        categoryLambdaQueryWrapper.eq(Category::getDelFlag, FlowConstant.DEL_FLAG_1)
                .in(Category::getPid, ids);
        long count = this.count(categoryLambdaQueryWrapper);
        if (count > 0){
            returnVo = new ReturnVo<>(ReturnCode.FAIL, "该分类还存在子分类，请确认！");
        } else {
            LambdaUpdateWrapper<Category> categoryLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
            categoryLambdaUpdateWrapper.set(Category::getDelFlag, FlowConstant.DEL_FLAG_0)
                    .in(Category::getId, ids);
            this.update(categoryLambdaUpdateWrapper);
        }
        return returnVo;
    }
}
