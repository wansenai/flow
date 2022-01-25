package com.dragon.flow.privilege;

import com.dragon.flow.main.FlowAdminApplication;
import com.dragon.flow.model.org.Department;
import com.dragon.flow.service.org.ICompanyService;
import com.dragon.flow.service.org.IDepartmentService;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-04-13 23:00
 **/
@SpringBootTest(classes = FlowAdminApplication.class)
public class TestCompany {

    @Autowired
    private ICompanyService companyService;
    @Autowired
    private IDepartmentService departmentService;

    @Test
    public void testGetDepartments(){
        Department department = new Department();
        department.setName("财务");
        Query query =  new Query();
        PagerModel<Department> pm = departmentService.getPagerModelByWrapper(department, query);
        System.out.println(pm);
    }

    @Test
    public void testGetAllCompany() {
        List<String> ids = new ArrayList<>();
        companyService.getAllCompanyIds("1", ids);
        System.out.println(ids);
    }
}
