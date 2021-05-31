package com.dragon.flow.service.base;

import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.base.Category;
import com.dragon.flow.model.privilege.User;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import com.dragon.tools.vo.ReturnVo;

import java.util.List;

/**
 * @program: flow
 * @description: 流程分类service
 * @author: Bruce.Liu
 * @create: 2021-03-27 09:17
 **/
public interface ICategoryService extends IService<Category> {
    /**
     * 递归得到所有的子分类ids
     *
     * @param id  id
     * @param ids ids
     * @return
     */
    void getAllCategoryIds(String id, List<String> ids);
    /**
     * 获取分类列表
     * @param category 参数
     * @return
     */
    List<Category> getCategories(Category category);
    /**
     * 分页查询列表
     * @param category 条件
     * @param query 分页参数
     * @return
     */
    PagerModel<Category> getPagerModelByWrapper(Category category, Query query);

    /**
     * 添加或修改
     * @param category 实体
     * @param loginUser 登录账号
     */
    void saveOrUpdate(Category category, User loginUser) ;

    /**
     * 删除实体
     *
     * @param ids 实体ids
     * @return
     */
    ReturnVo<String> deleteByIds(List<String> ids);
}
