package com.dragon.flow.web.resource.org;


import com.dragon.flow.model.org.PersonalRole;
import com.dragon.flow.model.org.Role;
import com.dragon.flow.service.org.IPersonalRoleService;
import com.dragon.flow.service.org.IRoleService;
import com.dragon.flow.vo.CheckExistVo;
import com.dragon.flow.vo.org.RolePersonalVo;
import com.dragon.flow.vo.pager.ParamVo;
import com.dragon.flow.web.resource.BaseResource;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.vo.ReturnVo;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-12
 */
@RestController
@RequestMapping("/flow/org/role")
public class RoleResource extends BaseResource<Role> {
    private static final String MODULE_SN = "Role:";
    @Autowired
    private IRoleService roleService;
    @Autowired
    private IPersonalRoleService personalRoleService;

    /**
     * 判断字段是否存在
     *
     * @param checkExistVo 参数
     * @return
     */
    @PostMapping(value = "/checkEntityExist", produces = "application/json")
    protected ReturnVo<Boolean> checkEntityExist(@RequestBody CheckExistVo checkExistVo) {
        return this.checkExist(roleService, checkExistVo);
    }



    /**
     * 获取角色的人员列表
     *
     * @param roleId       角色Id
     * @param personalRole 人员
     * @return
     */
    @PostMapping(value = "/getPersonalsByRole/{roleId}", produces = "application/json")
    public ReturnVo<List<RolePersonalVo>> getPersonalsByRole(@PathVariable String roleId, @RequestBody PersonalRole personalRole) {
        ReturnVo<List<RolePersonalVo>> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        personalRole.setRoleId(roleId);
        List<RolePersonalVo> rolePersonalVos = new ArrayList<>();
        if (StringUtils.isNotEmpty(roleId)){
            rolePersonalVos = this.personalRoleService.getRolePersonals(personalRole);
        }
        returnVo.setData(rolePersonalVos);
        return returnVo;
    }

    /**
     * 分页获取列表
     *
     * @param params 查询参数 、 分页参数
     * @return
     */
    @PostMapping(value = "/getPagerModel", produces = "application/json")
    public ReturnVo<PagerModel> getPagerModel(@RequestBody ParamVo<Role> params) {
        ReturnVo<PagerModel> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        PagerModel<Role> pm = roleService.getPagerModelByWrapper(params.getEntity(), null, params.getQuery());
        returnVo.setData(pm);
        return returnVo;
    }

    /**
     * 分页获取列表
     *
     * @param params 查询参数 、 分页参数
     * @return
     */
    @PostMapping(value = "/getPagerModelByPersonalId", produces = "application/json")
    public ReturnVo<PagerModel> getPagerModel(@RequestParam String personalId, @RequestBody ParamVo<Role> params) {
        ReturnVo<PagerModel> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        PagerModel<Role> pm = roleService.getPagerModelByWrapper(params.getEntity(), personalId, params.getQuery());
        returnVo.setData(pm);
        return returnVo;
    }

    /**
     * 添加或者修改
     *
     * @param role 参数
     * @return
     */
    @PostMapping(value = "/saveOrUpdate", produces = "application/json")
    public ReturnVo<String> saveOrUpdate(@RequestBody Role role) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        roleService.saveOrUpdate(role, this.getLoginUser());
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
        roleService.deleteByIds(ids);
        return returnVo;
    }

    /**
     * 查询单个
     *
     * @param id
     * @return
     */
    @GetMapping(value = "/get", produces = "application/json")
    public ReturnVo<Role> get(String id) {
        ReturnVo<Role> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        Role role = roleService.getById(id);
        returnVo.setData(role);
        return returnVo;
    }
}

