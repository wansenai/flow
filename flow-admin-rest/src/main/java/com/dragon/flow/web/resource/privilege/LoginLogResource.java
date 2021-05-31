package com.dragon.flow.web.resource.privilege;

import com.dragon.flow.model.privilege.LoginLog;
import com.dragon.flow.service.privilege.ILoginLogService;
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
 * @description: 接口
 * @author: Bruce.Liu
 * @create: 2021-03-24 09:24
 **/
@RestController
@RequestMapping("/flow/privilege/loginLog")
public class LoginLogResource extends BaseResource {

    @Autowired
    private ILoginLogService loginLogService;

    /**
     * 分页获取列表
     * @param params 查询参数
     * @return
     */
    @PostMapping(value = "/getPagerModel", produces = "application/json")
    public ReturnVo<PagerModel> getPagerModel(@RequestBody ParamVo<LoginLog> params) {
        ReturnVo<PagerModel> returnVo = new ReturnVo<>(ReturnCode.SUCCESS,"OK");
        PagerModel<LoginLog> pm = loginLogService.getPagerModelByWrapper(params.getEntity(), params.getQuery());
        returnVo.setData(pm);
        return returnVo;
    }

    /**
     * 添加或者修改
     * @param loginLog 参数
     * @return
     */
    @PostMapping(value = "/saveOrUpdate", produces = "application/json")
    public ReturnVo<String> saveOrUpdate(@RequestBody LoginLog loginLog) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS,"OK");
        loginLogService.saveOrUpdate(loginLog);
        return returnVo;
    }

    /**
     * 删除
     * @param ids
     * @return
     */
    @PostMapping(value = "/delete", produces = "application/json")
    public ReturnVo<String> delete(@RequestBody List<String> ids) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS,"OK");
        loginLogService.removeByIds(ids);
        return returnVo;
    }

    /**
     * 查询单个
     * @param id
     * @return
     */
    @GetMapping(value = "/get", produces = "application/json")
    public ReturnVo<LoginLog> get(String id) {
        ReturnVo<LoginLog> returnVo = new ReturnVo<>(ReturnCode.SUCCESS,"OK");
        LoginLog loginLog = loginLogService.getById(id);
        returnVo.setData(loginLog);
        return returnVo;
    }
}
