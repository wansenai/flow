package com.dragon.flow.mapper.privilege;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.dragon.flow.model.privilege.ACL;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @program: flow
 * @description: acl mapper
 * @author: Bruce.Liu
 * @create: 2021-03-23 23:27
 **/
@Repository
public interface IAclMapper extends BaseMapper<ACL> {
    /**
     * 通过角色列表获取ACL列表
     * @param groupIds 组列表 '12','23'
     * @return
     */
    List<ACL> getAclsByGroupIds(@Param("groupIds") List<String> groupIds) ;
}
