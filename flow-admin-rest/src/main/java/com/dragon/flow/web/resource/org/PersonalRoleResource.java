package com.dragon.flow.web.resource.org;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.dragon.flow.model.org.Personal;
import com.dragon.flow.model.org.PersonalRole;
import com.dragon.flow.model.org.Role;
import com.dragon.flow.service.org.IPersonalRoleService;
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
 * @since 2021-04-12
 */
@RestController
@RequestMapping("/flow/org/personalRole")
public class PersonalRoleResource extends BaseResource<PersonalRole> {
    private static final String MODULE_SN = "Role:";
    @Autowired
    private IPersonalRoleService personalRoleService;

    /**
     * 给用户分配角色
     *
     * @param roles      人员角色
     * @param personalId 人员id
     * @return
     */
    @PostMapping(value = "/allocationRoles/{personalId}", produces = "application/json")
    public ReturnVo<String> allocationRoles(@PathVariable String personalId, @RequestBody List<Role> roles) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        personalRoleService.addPersonalRolesByPersonal(personalId, roles, this.getLoginUser());
        return returnVo;
    }

    /**
     * 给角色分配用户
     *
     * @param roleId    角色Id
     * @param personals 人员列表
     * @return
     */
    @PostMapping(value = "/allocationPersonals/{roleId}", produces = "application/json")
    public ReturnVo<String> allocationPersonals(@PathVariable String roleId, @RequestBody List<Personal> personals) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        personalRoleService.addPersonalRolesByRole(roleId, personals, this.getLoginUser());
        return returnVo;
    }
    /**
     * 删除人员的拥有的角色
     *
     * @param personalRole personalRole
     * @return
     */
    @PostMapping(value = "/deletePersonalRole", produces = "application/json")
    public ReturnVo<String> deletePersonalRole(@RequestBody PersonalRole personalRole) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        LambdaQueryWrapper<PersonalRole> personalRoleLambdaQueryWrapper = new LambdaQueryWrapper<>();
        personalRoleLambdaQueryWrapper.eq(PersonalRole::getPersonalId, personalRole.getPersonalId())
                .eq(PersonalRole::getRoleId, personalRole.getRoleId());
        personalRoleService.remove(personalRoleLambdaQueryWrapper);
        return returnVo;
    }


}

