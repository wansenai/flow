package com.dragon.flow.service.org;

import com.dragon.flow.model.org.Personal;
import com.dragon.flow.model.org.RolePositionPersonal;
import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.privilege.User;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-29
 */
public interface IRolePositionPersonalService extends IService<RolePositionPersonal> {
    void saveOrUpdateBatch(List<RolePositionPersonal> rolePositionPersonalList, User user) ;

    List<Personal> getPersonalByRoleIdAndPositionCode(String roleId, String positionCode) ;
}
