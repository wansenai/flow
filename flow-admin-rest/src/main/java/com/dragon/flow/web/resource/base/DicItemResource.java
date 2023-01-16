package com.dragon.flow.web.resource.base;


import com.dragon.flow.model.base.DicItem;
import com.dragon.flow.service.base.IDicItemService;
import com.dragon.flow.vo.CheckExistVo;
import com.dragon.flow.vo.pager.ParamVo;
import com.dragon.flow.web.resource.BaseResource;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.vo.ReturnVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author bruce.liu
 * @since 2021-03-29
 */
@RestController
@RequestMapping("/flow/base/dicItem")
public class DicItemResource extends BaseResource<DicItem> {
    private static final String MODULE_SN = "Dictionary:";
    @Autowired
    private IDicItemService dicItemService;
    /**
     * 判断字段是否存在
     *
     * @param checkExistVo 参数
     * @return
     */
    @PostMapping(value = "/checkEntityExist", produces = "application/json")
    protected ReturnVo<Boolean> checkEntityExist(@RequestBody CheckExistVo checkExistVo) {
        return this.checkExist(dicItemService, checkExistVo);
    }
    /**
     * 分页获取列表
     *
     * @param params 查询参数 、 分页参数
     * @return
     */
    @PostMapping(value = "/getPagerModel", produces = "application/json")
    public ReturnVo<PagerModel> getPagerModel(@RequestBody ParamVo<DicItem> params) {
        ReturnVo<PagerModel> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        PagerModel<DicItem> pm = dicItemService.getPagerModelByWrapper(params.getEntity(), params.getQuery());
        returnVo.setData(pm);
        return returnVo;
    }

    /**
     * 获取全部数据
     *
     * @param dicItem 参数
     * @return
     */
    @PostMapping(value = "/getDicItems", produces = "application/json")
    public ReturnVo<List> getDicItems(@RequestBody DicItem dicItem) {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        List<DicItem> dicItems = dicItemService.getDicItemsByMainId(dicItem.getMainId());
        returnVo.setData(dicItems);
        return returnVo;
    }

    /**
     * 添加或者修改
     *
     * @param dicItem 参数
     * @return
     */
    @PostMapping(value = "/saveOrUpdate", produces = "application/json")
    public ReturnVo<String> saveOrUpdate(@RequestBody DicItem dicItem) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        dicItemService.saveOrUpdate(dicItem, this.getLoginUser());
        return returnVo;
    }

    /**
     * 删除
     *
     * @param id
     * @return
     */
    @PostMapping(value = "/delete/{id}", produces = "application/json")
    public ReturnVo<String> delete(@PathVariable String id) {
        ReturnVo<String> returnVo = dicItemService.deleteByIds(id);
        return returnVo;
    }

    /**
     * 查询
     *
     * @param id
     * @return
     */
    @GetMapping(value = "/get", produces = "application/json")
    public ReturnVo<DicItem> get(@RequestBody String id) {
        ReturnVo<DicItem> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        DicItem dicItem = dicItemService.getById(id);
        returnVo.setData(dicItem);
        return returnVo;
    }
}

