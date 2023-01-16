package com.dragon.flow.web.resource.base;

import com.dragon.flow.constant.PermissionConatant;
import com.dragon.flow.model.base.App;
import com.dragon.flow.service.base.IAppService;
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
 * @description: APP接口
 * @author: Bruce.Liu
 * @create: 2021-03-23 21:41
 **/
@RestController
@RequestMapping("/flow/base/app")
public class AppResource extends BaseResource<App> {
    private static final String MODULE_SN = "App:";
    @Autowired
    private IAppService appService;
    /**
     * 判断字段是否存在
     *
     * @param checkExistVo 参数
     * @return
     */
    @PostMapping(value = "/checkEntityExist", produces = "application/json")
    protected ReturnVo<Boolean> checkEntityExist(@RequestBody CheckExistVo checkExistVo) {
        return this.checkExist(appService, checkExistVo);
    }
    /**
     * @return 系统列表json数组字符串
     * @Description: 获取所有系统列表树
     */
    @PostMapping("/getApps")
    public ReturnVo<List> getApps(@RequestBody App app) {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        List<App> list = this.appService.getAll(app);
        returnVo.setData(list);
        return returnVo;
    }

    /**
     * 分页获取应用列表
     *
     * @param params 查询参数
     * @return
     */
    @PostMapping(value = "/getPagerModel", produces = "application/json")
    public ReturnVo<PagerModel> getPagerModel(@RequestBody ParamVo<App> params) {
        ReturnVo<PagerModel> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        PagerModel<App> pm = appService.getPagerModelByWrapper(params.getEntity(), params.getQuery());
        returnVo.setData(pm);
        return returnVo;
    }

    /**
     * 添加或者修改
     *
     * @param app 参数
     * @return
     */
    @PostMapping(value = "/saveOrUpdate", produces = "application/json")
    public ReturnVo<String> saveOrUpdate(@RequestBody App app) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.FAIL, "保存失败！");
        appService.saveOrUpdate(app);
        returnVo.setCode(ReturnCode.SUCCESS);
        returnVo.setMsg("保存成功");
        return returnVo;
    }

    /**
     * 删除应用
     *
     * @param appIds
     * @return
     */
    @PostMapping(value = "/delete", produces = "application/json")
    public ReturnVo<String> delete(@RequestBody List<String> appIds) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        appService.removeByIds(appIds);
        return returnVo;
    }

    /**
     * 查询应用
     *
     * @param id
     * @return
     */
    @PostMapping(value = "/get", produces = "application/json")
    public ReturnVo<App> get(@RequestBody String id) {
        ReturnVo<App> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        App app = appService.getById(id);
        returnVo.setData(app);
        return returnVo;
    }

    /**
     * 刷新应用SecretKey
     *
     * @param id 应用id
     * @return
     */
    @PostMapping(value = "/refreshSecretKey/{id}", produces = "application/json")
    public ReturnVo<String> refreshSecretKey(@PathVariable String id) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        String secretKey = appService.updateSecretKey(id);
        returnVo.setData(secretKey);
        return returnVo;
    }


}
