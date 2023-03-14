package com.dragon.flow.mapper.org;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.dragon.flow.model.org.Role;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-12
 */
public interface IRoleMapper extends BaseMapper<Role> {
    /**
     * 分页查询
     * @param page 分页对象
     * @param role 参数
     * @return
     */
    IPage<Role> getPagerModel(IPage<Role> page, @Param("role") Role role);

    /**
     * 通过人员id获取人员的角色列表
     * @param personalId 人员id
     * @return
     */
    List<Role> getRolesByPersonalId(@Param("personalId") String personalId);

    /**
     * 通过人员id获取人员的角色列表
     * @param personalIdList 人员id
     * @return
     */
    List<Role> getRolesByPersonalIdList(@Param("personalIdList") List<String> personalIdList);
}
