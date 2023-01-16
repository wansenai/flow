package com.dragon.flow.web.resource.base;

import com.dragon.flow.model.base.Category;
import com.dragon.flow.service.base.ICategoryService;
import com.dragon.flow.vo.CheckExistVo;
import com.dragon.flow.web.resource.BaseResource;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.vo.ReturnVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @program: flow
 * @description: 分类rest接口
 * @author: Bruce.Liu
 * @create: 2021-03-27 09:21
 **/
@RestController
@RequestMapping("/flow/base/category")
public class CategoryResource extends BaseResource<Category> {
    private static final String MODULE_SN = "Category:";
    @Autowired
    private ICategoryService categoryService;
    /**
     * 判断字段是否存在
     *
     * @param checkExistVo 参数
     * @return
     */
    @PostMapping(value = "/checkEntityExist", produces = "application/json")
    protected ReturnVo<Boolean> checkEntityExist(@RequestBody CheckExistVo checkExistVo) {
        return this.checkExist(categoryService, checkExistVo);
    }
    /**
     * 获取分类全部数据
     *
     * @param category 参数
     * @return
     */
    @PostMapping(value = "/getCategories", produces = "application/json")
    public ReturnVo<List> getCategories(@RequestBody Category category) {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        List<Category> categories = categoryService.getCategories(category);
        returnVo.setData(categories);
        return returnVo;
    }

    /**
     * 添加或者修改
     *
     * @param category 参数
     * @return
     */
    @PostMapping(value = "/saveOrUpdate", produces = "application/json")
    public ReturnVo<String> saveOrUpdate(@RequestBody Category category) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        categoryService.saveOrUpdate(category, this.getLoginUser());
        return returnVo;
    }

    /**
     * 删除应用
     *
     * @param ids
     * @return
     */
    @PostMapping(value = "/delete", produces = "application/json")
    public ReturnVo<String> delete(@RequestBody List<String> ids) {
        ReturnVo<String> returnVo = categoryService.deleteByIds(ids);
        return returnVo;
    }

    /**
     * 查询应用
     *
     * @param id
     * @return
     */
    @GetMapping(value = "/get", produces = "application/json")
    public ReturnVo<Category> get(@RequestBody String id) {
        ReturnVo<Category> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        Category flowCategory = categoryService.getById(id);
        returnVo.setData(flowCategory);
        return returnVo;
    }
}
