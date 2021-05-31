package com.dragon.flow.mapper.org;

import com.dragon.flow.model.org.Personal;
import com.dragon.flow.model.org.RolePositionPersonal;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * <p>
 * Mapper 接口
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-29
 */
@Repository
public interface IRolePositionPersonalMapper extends BaseMapper<RolePositionPersonal> {

    List<Personal> getPersonalByRoleIdAndPositionId(@Param("roleId") String roleId,@Param("positionCode") String positionCode);
}
