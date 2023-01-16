package com.dragon.flow.web.resource.privilege;

import com.dragon.flow.model.privilege.Group;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.service.privilege.IGroupService;
import com.dragon.flow.service.privilege.IUserGroupService;
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
@RequestMapping("/flow/privilege/group")
public class GroupResource extends BaseResource<Group> {
    private static final String MODULE_SN = "Group:";
    @Autowired
    private IGroupService groupService;
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
        return this.checkExist(groupService, checkExistVo);
    }
    /**
     * 添加用户组
     *
     * @param groupId 组Id
     * @param users  用户列表
     * @return
     */
    @PostMapping(value = "/addUserGroups/{groupId}", produces = "application/json")
    public ReturnVo<String> addUserGroups(@PathVariable String groupId, @RequestBody List<User> users) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        userGroupService.addUserGroupsByGroup(groupId, users, this.getLoginUser());
        return returnVo;
    }

    /**
     * 分页获取列表
     *
     * @param params  查询参数
     * @return
     */
    @PostMapping(value = "/getPagerModel", produces = "application/json")
    public ReturnVo<PagerModel> getPagerModel(@RequestBody ParamVo<Group> params) {
        ReturnVo<PagerModel> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        PagerModel<Group> pm = groupService.getPagerModelByWrapper(params.getEntity(), params.getQuery());
        returnVo.setData(pm);
        return returnVo;
    }

    /**
     * 分页获取列表
     * @return
     */
    @PostMapping(value = "/getAll", produces = "application/json")
    public ReturnVo<List<Group>> getAll(@RequestBody Group group) {
        ReturnVo<List<Group>> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        List<Group> list = groupService.getAll(group);
        returnVo.setData(list);
        return returnVo;
    }

    /**
     * 添加或者修改
     *
     * @param group 参数
     * @return
     */
    @PostMapping(value = "/saveOrUpdate", produces = "application/json")
    public ReturnVo<String> saveOrUpdate(@RequestBody Group group) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        groupService.saveOrUpdate(group);
        return returnVo;
    }

    /**
     * 删除
     *
     * @param groupIds
     * @return
     */
    @PostMapping(value = "/delete", produces = "application/json")
    public ReturnVo<String> delete(@RequestBody List<String> groupIds) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        groupService.deleteByIds(groupIds);
        return returnVo;
    }

    /**
     * 查询单个
     *
     * @param id
     * @return
     */
    @GetMapping(value = "/get", produces = "application/json")
    public ReturnVo<Group> get(String id) {
        ReturnVo<Group> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        Group role = groupService.getById(id);
        returnVo.setData(role);
        return returnVo;
    }
}
