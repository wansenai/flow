package com.dragon.flow.mapper.org;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.dragon.flow.model.org.Personal;
import com.dragon.flow.model.org.Role;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-12
 */
@Repository
public interface IPersonalMapper extends BaseMapper<Personal> {
    List<Personal> getPersonalsByRoleSns(@Param("roleSns") List<String> roleSns) ;
    List<Personal> getPersonalsByRoleId(@Param("roleId") String roleId) ;

    List<Personal> getPersonalsByRoleIds(@Param("roleIds") List<String> roleIds) ;

    IPage<Personal> getPagerModel(IPage<Personal> page, @Param("personal") Personal personal);


}
