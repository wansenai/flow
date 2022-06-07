package com.dragon.flow.web.resource.base;


import com.dragon.flow.model.base.Area;
import com.dragon.flow.service.base.IAreaService;
import com.dragon.flow.vo.CheckExistVo;
import com.dragon.flow.web.resource.BaseResource;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.vo.ReturnVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * <p>
 * 区域信息 前端控制器
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-14
 */
@RestController
@RequestMapping("/flow/base/area")
public class AreaResource extends BaseResource {
    private static final String MODULE_SN = "Area:";
    @Autowired
    private IAreaService areaService;

    /**
     * 判断字段是否存在
     *
     * @param checkExistVo 参数
     * @return
     */
    @PostMapping(value = "/checkEntityExist", produces = "application/json")
    protected ReturnVo<Boolean> checkEntityExist(@RequestBody CheckExistVo checkExistVo) {
        return this.checkExist(areaService, checkExistVo);
    }
    /**
     * 通过父code得到区域列表
     *
     * @param pcode 父亲code
     * @return
     */
    @GetMapping(value = "/getAreasByPcode", produces = "application/json")
    public ReturnVo<List> getAreasByPcode(@RequestParam String pcode) {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        List<Area> areas = areaService.getAreasByPcode(pcode);
        returnVo.setData(areas);
        return returnVo;
    }

    /**
     * 查询所有的区域
     *
     * @param area 参数
     * @return
     */
    @PostMapping(value = "/getAreas", produces = "application/json")
    public ReturnVo<List> getAreas(@RequestBody Area area) {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        List<Area> areas = areaService.getAllArea(area);
        returnVo.setData(areas);
        return returnVo;
    }

    /**
     * 添加或者修改
     *
     * @param area 参数
     * @return
     */
    @PostMapping(value = "/saveOrUpdate", produces = "application/json")
    public ReturnVo<String> saveOrUpdate(@RequestBody Area area) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        areaService.saveOrUpdate(area, this.getLoginUser());
        return returnVo;
    }

    /**
     * 删除
     *
     * @param code
     * @return
     */
    @PostMapping(value = "/delete/{code}", produces = "application/json")
    public ReturnVo<String> delete(@PathVariable String code) {
        ReturnVo<String> returnVo = areaService.deleteByCodes(code);
        return returnVo;
    }

    /**
     * 查询
     *
     * @param id
     * @return
     */
    @GetMapping(value = "/get", produces = "application/json")
    public ReturnVo<Area> get(@RequestBody String id) {
        ReturnVo<Area> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        Area area = areaService.getById(id);
        returnVo.setData(area);
        return returnVo;
    }
}

