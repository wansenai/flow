package com.dragon.flow.web.resource.base;


import com.dragon.flow.model.base.DicType;
import com.dragon.flow.service.base.IDicTypeService;
import com.dragon.flow.vo.CheckExistVo;
import com.dragon.flow.web.resource.BaseResource;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.vo.ReturnVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author bruce.liu
 * @since 2021-03-29
 */
@RestController
@RequestMapping("/flow/base/dicType")
public class DicTypeResource extends BaseResource<DicType> {
    private static final String MODULE_SN = "DicType:";
    @Autowired
    private IDicTypeService dicTypeService;
    /**
     * 判断字段是否存在
     *
     * @param checkExistVo 参数
     * @return
     */
    @PostMapping(value = "/checkEntityExist", produces = "application/json")
    protected ReturnVo<Boolean> checkEntityExist(@RequestBody CheckExistVo checkExistVo) {
        return this.checkExist(dicTypeService, checkExistVo);
    }
    /**
     * 获取字典类型全部数据
     *
     * @param dicType 参数
     * @return
     */
    @PostMapping(value = "/getDicTypes", produces = "application/json")
    public ReturnVo<List> getDicTypes(@RequestBody DicType dicType) {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        List<DicType> dicTypes = dicTypeService.getDicTypes(dicType);
        returnVo.setData(dicTypes);
        return returnVo;
    }

    /**
     * 添加或者修改
     *
     * @param dicType 参数
     * @return
     */
    @PostMapping(value = "/saveOrUpdate", produces = "application/json")
    public ReturnVo<String> saveOrUpdate(@RequestBody DicType dicType) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        dicTypeService.saveOrUpdate(dicType, this.getLoginUser());
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
        ReturnVo<String> returnVo = dicTypeService.deleteByIds(ids);
        return returnVo;
    }

    /**
     * 查询应用
     *
     * @param id
     * @return
     */
    @GetMapping(value = "/get", produces = "application/json")
    public ReturnVo<DicType> get(@RequestBody String id) {
        ReturnVo<DicType> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        DicType dicType = dicTypeService.getById(id);
        returnVo.setData(dicType);
        return returnVo;
    }
}

