package com.dragon.flow.web.resource.privilege;

import com.dragon.flow.model.privilege.AppPrivilegeValue;
import com.dragon.flow.model.privilege.Module;
import com.dragon.flow.service.privilege.IModuleService;
import com.dragon.flow.vo.CheckExistVo;
import com.dragon.flow.web.resource.BaseResource;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.vo.ReturnVo;
import org.apache.commons.collections.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * @program: flow
 * @description: 接口
 * @author: Bruce.Liu
 * @create: 2021-03-24 09:24
 **/
@RestController
@RequestMapping("/flow/privilege/module")
public class ModuleResource extends BaseResource<Module> {
    private static final String MODULE_SN = "Module:";
    @Autowired
    private IModuleService moduleService;
    /**
     * 判断字段是否存在
     *
     * @param checkExistVo 参数
     * @return
     */
    @PostMapping(value = "/checkEntityExist", produces = "application/json")
    protected ReturnVo<Boolean> checkEntityExist(@RequestBody CheckExistVo checkExistVo) {
        return this.checkExist(moduleService, checkExistVo);
    }
    /**
     * 分页获取列表
     *
     * @param module 查询参数
     * @return
     */
    @PostMapping(value = "/getModules", produces = "application/json")
    public ReturnVo<List> getModules(@RequestBody Module module) {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        List<Module> modules = moduleService.getModules(module);
        returnVo.setData(modules);
        return returnVo;
    }

    /**
     * 添加或者修改
     *
     * @param module 参数
     * @return
     */
    @PostMapping(value = "/saveOrUpdate", produces = "application/json")
    public ReturnVo<String> saveOrUpdate(@RequestBody Module module) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        moduleService.saveOrUpdateModule(module);
        return returnVo;
    }

    /**
     * 删除
     *
     * @param ids
     * @return
     */
    @PostMapping(value = "/delete", produces = "application/json")
    public ReturnVo<String> delete(@RequestBody List<String> ids) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        moduleService.removeByIds(ids);
        return returnVo;
    }

    /**
     * 设置权限值
     * @param module 模块
     * @return
     */
    @PostMapping(value = "/addPriVal", produces = "application/json")
    public ReturnVo<String> addPriVal(@RequestBody Module module) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        String moduleId = module.getId();
        List<AppPrivilegeValue> pvs = module.getPvs();
        List<Integer> positions = new ArrayList<>();
        if (CollectionUtils.isNotEmpty(pvs)){
            pvs.forEach(apv -> positions.add(apv.getPosition()));
        }
        moduleService.addPriVal(positions, moduleId);
        return returnVo;
    }

    /**
     * 查询单个
     *
     * @param id
     * @return
     */
    @GetMapping(value = "/get", produces = "application/json")
    public ReturnVo<Module> get(String id) {
        ReturnVo<Module> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        Module module = moduleService.getById(id);
        returnVo.setData(module);
        return returnVo;
    }
}
