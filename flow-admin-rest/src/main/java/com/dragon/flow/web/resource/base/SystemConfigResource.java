package com.dragon.flow.web.resource.base;

import com.dragon.flow.model.base.SystemConfig;
import com.dragon.flow.service.base.ISystemConfigService;
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
 * @program: flow
 * @description: 分类rest接口
 * @author: Bruce.Liu
 * @create: 2021-03-27 09:21
 **/
@RestController
@RequestMapping("/flow/base/systemConfig")
public class SystemConfigResource extends BaseResource<SystemConfig> {
    private static final String MODULE_SN = "SystemConfig:";
    @Autowired
    private ISystemConfigService systemConfigService;
    /**
     * 判断字段是否存在
     *
     * @param checkExistVo 参数
     * @return
     */
    @PostMapping(value = "/checkEntityExist", produces = "application/json")
    protected ReturnVo<Boolean> checkEntityExist(@RequestBody CheckExistVo checkExistVo) {
        return this.checkExist(systemConfigService, checkExistVo);
    }
    /**
     * 获取所有的系统配置信息
     * @return
     */
    @GetMapping(value = "/getAll", produces = "application/json")
    public ReturnVo<List> getAll() {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.SUCCESS,"OK");
        List<SystemConfig> list = systemConfigService.list();
        returnVo.setData(list);
        return returnVo;
    }
    /**
     * 分页获取列表
     *
     * @param params 查询参数 、 分页参数
     * @return
     */
    @PostMapping(value = "/getPagerModel", produces = "application/json")
    public ReturnVo<PagerModel> getPagerModel(@RequestBody ParamVo<SystemConfig> params) {
        ReturnVo<PagerModel> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        PagerModel<SystemConfig> pm = systemConfigService.getPagerModelByWrapper(params.getEntity(), params.getQuery());
        returnVo.setData(pm);
        return returnVo;
    }
    /**
     * 添加或者修改
     * @param systemConfig 参数
     * @return
     */
    @PostMapping(value = "/saveOrUpdate", produces = "application/json")
    public ReturnVo<String> saveOrUpdate(@RequestBody SystemConfig systemConfig) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS,"OK");
        systemConfigService.saveOrUpdate(systemConfig);
        return returnVo;
    }

    /**
     * 删除应用
     * @param ids
     * @return
     */
    @PostMapping(value = "/delete", produces = "application/json")
    public ReturnVo<String> delete(@RequestBody List<String> ids) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS,"OK");
        systemConfigService.removeByIds(ids);
        return returnVo;
    }

    /**
     * 查询应用
     * @param id
     * @return
     */
    @GetMapping(value = "/get", produces = "application/json")
    public ReturnVo<SystemConfig> get(String id) {
        ReturnVo<SystemConfig> returnVo = new ReturnVo<>(ReturnCode.SUCCESS,"OK");
        SystemConfig systemConfig = systemConfigService.getById(id);
        returnVo.setData(systemConfig);
        return returnVo;
    }
}
