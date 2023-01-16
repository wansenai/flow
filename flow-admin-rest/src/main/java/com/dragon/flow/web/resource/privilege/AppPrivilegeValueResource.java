package com.dragon.flow.web.resource.privilege;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.dragon.flow.model.privilege.AppPrivilegeValue;
import com.dragon.flow.service.privilege.IAppPrivilegeValueService;
import com.dragon.flow.vo.CheckExistVo;
import com.dragon.flow.web.resource.BaseResource;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.vo.ReturnVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @program: flow
 * @description: 接口
 * @author: Bruce.Liu
 * @create: 2021-03-24 09:24
 **/
@RestController
@RequestMapping("/flow/privilege/pvalue")
public class AppPrivilegeValueResource extends BaseResource {
    private static final String MODULE_SN = "AppPrivilegeValue:";
    @Autowired
    private IAppPrivilegeValueService appPrivilegeValueService;

    /**
     * 判断字段是否存在
     *
     * @param checkExistVo 参数
     * @return
     */
    @PostMapping(value = "/checkEntityExist", produces = "application/json")
    protected ReturnVo<Boolean> checkEntityExist(@RequestBody CheckExistVo checkExistVo) {
        return this.checkExist(appPrivilegeValueService, checkExistVo);
    }

    /**
     * 分页获取列表
     *
     * @return
     */
    @PostMapping(value = "/getAppPrivilegeValues", produces = "application/json")
    public ReturnVo<List> getAppPrivilegeValues() {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        LambdaQueryWrapper<AppPrivilegeValue> appPrivilegeValueLambdaQueryWrapper = new LambdaQueryWrapper<>();
        appPrivilegeValueLambdaQueryWrapper.orderByAsc(AppPrivilegeValue::getOrderNo);
        List<AppPrivilegeValue> datas = appPrivilegeValueService.list(appPrivilegeValueLambdaQueryWrapper);
        returnVo.setData(datas);
        return returnVo;
    }

    /**
     * 添加或者修改
     *
     * @param appPrivilegeValue 参数
     * @return
     */
    @PostMapping(value = "/saveOrUpdate", produces = "application/json")
    public ReturnVo<String> saveOrUpdate(@RequestBody AppPrivilegeValue appPrivilegeValue) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        appPrivilegeValueService.saveOrUpdate(appPrivilegeValue);
        return returnVo;
    }

    /**
     * 删除
     *
     * @param appIds
     * @return
     */
    @PostMapping(value = "/delete", produces = "application/json")
    public ReturnVo<String> delete(@RequestBody List<String> appIds) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        appPrivilegeValueService.removeByIds(appIds);
        return returnVo;
    }

    /**
     * 查询单个
     *
     * @param id
     * @return
     */
    @GetMapping(value = "/get", produces = "application/json")
    public ReturnVo<AppPrivilegeValue> get(String id) {
        ReturnVo<AppPrivilegeValue> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        AppPrivilegeValue appPrivilegeValue = appPrivilegeValueService.getById(id);
        returnVo.setData(appPrivilegeValue);
        return returnVo;
    }
}
