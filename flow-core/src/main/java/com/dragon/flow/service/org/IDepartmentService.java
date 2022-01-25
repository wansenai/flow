package com.dragon.flow.service.org;

import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.org.Department;
import com.dragon.flow.model.privilege.User;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import com.dragon.flow.vo.org.OrgTreeVo;
import com.dragon.tools.vo.ReturnVo;

import java.util.List;

/**
 * @program: flow
 * @description: 部门service实现
 * @author: Bruce.Liu
 * @create: 2021-03-23 22:43
 **/
public interface IDepartmentService extends IService<Department> {
    /**
     * 导入部门
     * @param departments 部门列表
     */
    ReturnVo<List> importDepartment(List<Department> departments, User loginUser);
    /**
     * 获取所有的子部门的id列表
     * @param id id
     * @param ids ids
     */
    void getAllDepartmentIds(String id, List<String> ids);
    /**
     * 添加或者修改
     * @param department department
     * @param loginUser loginUser
     */
    void saveOrUpdate(Department department, User loginUser) ;
    /**
     * 通过ids删除部门
     * @param ids ids
     * @return
     */
    ReturnVo<String> deleteByIds(List<String> ids) ;
    /**
     * 分页查询列表
     *
     * @param department 条件
     * @param query   分页参数
     * @return
     */
    PagerModel<Department> getPagerModelByWrapper(Department department, Query query);

    /**
     * 分页查询列表
     *
     * @param department 条件
     * @return
     */
    List<Department> getAll(Department department);

    /**
     * 获取组织树
     * @return
     */
    List<OrgTreeVo> getOrgTree() ;

    /**
     * 获取部门树
     * @param companyId 公司id
     * @param deptName 部门名称
     * @return
     */
    List<OrgTreeVo> getDepartmentTree(String companyId,String deptName) ;
}
