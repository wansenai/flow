package com.dragon.flow.web.resource.privilege;

import com.dragon.flow.model.privilege.Group;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.service.privilege.IUserGroupService;
import com.dragon.flow.service.privilege.IUserService;
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
 * @description: 接口
 * @author: Bruce.Liu
 * @create: 2021-03-24 09:24
 **/
@RestController
@RequestMapping("/flow/privilege/user")
public class UserResource extends BaseResource<User> {
    private static final String MODULE_SN = "Account:";
    @Autowired
    private IUserService userService;
    @Autowired
    private IUserGroupService userGroupService;

    /**
     * 判断字段是否存在
     *
     * @param checkExistVo 参数
     * @return
     */
    @PostMapping(value = "/checkEntityExist", produces = "application/json")
    protected ReturnVo<Boolean> checkEntityExist(@RequestBody CheckExistVo checkExistVo) {
        return this.checkExist(userService, checkExistVo);
    }

    /**
     * 用户分配角色
     *
     * @param groups 用户角色
     * @param userId 用户id
     * @return
     */
    @PostMapping(value = "/allocationRoles/{userId}", produces = "application/json")
    public ReturnVo<String> allocationRoles(@PathVariable String userId, @RequestBody List<Group> groups) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        userGroupService.addUserGroupsByUser(userId, groups, this.getLoginUser());
        return returnVo;
    }

    /**
     * 设置密码
     *
     * @param user 参数
     * @return
     */
    @PostMapping(value = "/setPassword", produces = "application/json")
    public ReturnVo<String> setPassword(@RequestBody User user) {
        userService.setPassword(user);
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        return returnVo;
    }

    /**
     * 分页获取列表
     *
     * @param params 查询参数 、 分页参数
     * @return
     */
    @PostMapping(value = "/getPagerModel", produces = "application/json")
    public ReturnVo<PagerModel> getPagerModel(@RequestBody ParamVo<User> params) {
        ReturnVo<PagerModel> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        PagerModel<User> pm = userService.getPagerModelByWrapper(params.getEntity(), params.getQuery());
        returnVo.setData(pm);
        return returnVo;
    }

    /**
     * 获取所有用户
     * * @return
     */
    @PostMapping(value = "/getAll", produces = "application/json")
    public ReturnVo<List<User>> getAll(@RequestBody User user) {
        ReturnVo<List<User>> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        List<User> pm = userService.getAll(user);
        returnVo.setData(pm);
        return returnVo;
    }

    /**
     * 添加或者修改
     *
     * @param user 参数
     * @return
     */
    @PostMapping(value = "/saveOrUpdate", produces = "application/json")
    public ReturnVo<String> saveOrUpdate(@RequestBody User user) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        userService.saveOrUpdate(user);
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
        userService.deleteByIds(ids);
        return returnVo;
    }

    /**
     * 查询单个
     *
     * @param id
     * @return
     */
    @GetMapping(value = "/get", produces = "application/json")
    public ReturnVo<User> get(String id) {
        ReturnVo<User> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        User user = userService.getById(id);
        returnVo.setData(user);
        return returnVo;
    }
}
