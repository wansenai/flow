package com.dragon.flow.service.org;

import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.org.Personal;
import com.dragon.flow.model.org.PersonalRole;
import com.dragon.flow.model.org.Role;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.vo.org.RolePersonalVo;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-12
 */
public interface IPersonalRoleService extends IService<PersonalRole> {

    /**
     * 给人员分配角色
     * @param personalId 人员id
     * @param roles 角色列表
     * @param loginUser 登录账号
     */
    void addPersonalRolesByPersonal(String personalId, List<Role> roles, User loginUser);

    /**
     * 分角色分配用户
     * @param roleId 角色id
     * @param personals 人员列表
     * @param loginUser 登录账号
     */
    void addPersonalRolesByRole(String roleId, List<Personal> personals, User loginUser);

    /**
     * 分页查询groupUserVo
     * @param personalRole
     * @return
     * @throws Exception
     * @Description:
     */
    List<RolePersonalVo> getRolePersonals(PersonalRole personalRole);
}
