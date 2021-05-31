package com.dragon.flow.mapper.org;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.dragon.flow.model.org.Department;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @program: flow
 * @description: 部门持久化层
 * @author: Bruce.Liu
 * @create: 2021-03-23 22:42
 **/
@Repository
public interface IDepartmentMapper extends BaseMapper<Department> {
    List<Department> getDepartments(@Param("depart") Department department);

    IPage<Department> getPagerModel(IPage<Department> page, @Param("depart") Department department);
}
