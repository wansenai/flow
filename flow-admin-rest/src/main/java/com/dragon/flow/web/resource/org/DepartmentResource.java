package com.dragon.flow.web.resource.org;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.dragon.flow.model.org.Department;
import com.dragon.flow.service.org.IDepartmentService;
import com.dragon.flow.vo.CheckExistVo;
import com.dragon.flow.vo.org.OrgTreeVo;
import com.dragon.flow.web.resource.BaseResource;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import com.dragon.tools.vo.ReturnVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @program: flow
 * @description: rest接口
 * @author: Bruce.Liu
 * @create: 2021-03-24 09:24
 **/
@RestController
@RequestMapping("/flow/org/department")
public class DepartmentResource extends BaseResource<Department> {
    private static final String MODULE_SN = "Department:";
    @Autowired
    private IDepartmentService departmentService;
    /**
     * 判断字段是否存在
     *
     * @param checkExistVo 参数
     * @return
     */
    @PostMapping(value = "/checkEntityExist", produces = "application/json")
    protected ReturnVo<Boolean> checkEntityExist(@RequestBody CheckExistVo checkExistVo) {
        return this.checkExist(departmentService, checkExistVo);
    }
    /**
     * 获取组织树
     *
     * @return
     */
    @GetMapping(value = "/getOrgTree", produces = "application/json")
    public ReturnVo<List> getOrgTree() {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        List<OrgTreeVo> orgTreeVos = departmentService.getOrgTree();
        returnVo.setData(orgTreeVos);
        return returnVo;
    }

    /**
     * 通过公司id获取部门列表
     *
     * @return
     */
    @GetMapping(value = "/getDepartmentByCompanyId/{companyId}", produces = "application/json")
    public ReturnVo<List> getDepartmentByCompanyId(@PathVariable String companyId) {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        LambdaQueryWrapper<Department> departmentLambdaQueryWrapper = new LambdaQueryWrapper<>();
        departmentLambdaQueryWrapper.eq(Department::getCompanyId, companyId)
                .eq(Department::getDelFlag, 1);
        List<Department> departments = departmentService.list(departmentLambdaQueryWrapper);
        returnVo.setData(departments);
        return returnVo;
    }

    /**
     * 分页获取部门列表
     *
     * @param department 查询参数
     * @param query      分页参数
     * @return
     */
    @PostMapping(value = "/getPagerModel", produces = "application/json")
    public ReturnVo<PagerModel> getPagerModel(Department department, Query query) {
        ReturnVo<PagerModel> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        PagerModel<Department> pm = departmentService.getPagerModelByWrapper(department, query);
        returnVo.setData(pm);
        return returnVo;
    }

    /**
     * 根据条件获取 - 不分页
     *
     * @param department 查询参数
     * @return
     */
    @PostMapping(value = "/getAll", produces = "application/json")
    public ReturnVo<List<Department>> getAll(@RequestBody Department department) {
        ReturnVo<List<Department>> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        List<Department> list = departmentService.getAll(department);
        returnVo.setData(list);
        return returnVo;
    }

    /**
     * 添加或者修改
     *
     * @param department 参数
     * @return
     */
    @PostMapping(value = "/saveOrUpdate", produces = "application/json")
    public ReturnVo<String> saveOrUpdate(@RequestBody Department department) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        departmentService.saveOrUpdate(department, this.getLoginUser());
        return returnVo;
    }

    /**
     * 删除
     *
     * @param ids
     * @return
     */
    @PostMapping(value = "/delete", produces = "application/json")
    public ReturnVo<String> delete(@RequestBody List<String> ids) {
        ReturnVo<String> returnVo = departmentService.deleteByIds(ids);
        return returnVo;
    }

    /**
     * 查询单个
     *
     * @param id
     * @return
     */
    @GetMapping(value = "/get", produces = "application/json")
    public ReturnVo<Department> get(String id) {
        ReturnVo<Department> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        Department department = departmentService.getById(id);
        returnVo.setData(department);
        return returnVo;
    }
}
