package com.dragon.flow.mapper.privilege;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.dragon.flow.model.privilege.AppPrivilegeValue;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @program: flow
 * @description: 应用权限值
 * @author: Bruce.Liu
 * @create: 2021-03-24 09:58
 **/
@Repository
public interface IAppPrivilegeValueMapper extends BaseMapper<AppPrivilegeValue> {


}
