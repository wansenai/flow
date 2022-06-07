package com.dragon.flow.web.resource.org;

import com.dragon.flow.model.org.Company;
import com.dragon.flow.service.org.ICompanyService;
import com.dragon.flow.vo.CheckExistVo;
import com.dragon.flow.vo.org.OrgTreeVo;
import com.dragon.flow.web.resource.BaseResource;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.vo.ReturnVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @program: flow
 * @description: 公司接口
 * @author: Bruce.Liu
 * @create: 2021-03-24 09:24
 **/
@RestController
@RequestMapping("/flow/org/company")
public class CompanyResource extends BaseResource<Company> {
    private static final String MODULE_SN = "Company:";
    @Autowired
    private ICompanyService companyService;
    /**
     * 判断字段是否存在
     *
     * @param checkExistVo 参数
     * @return
     */
    @PostMapping(value = "/checkEntityExist", produces = "application/json")
    protected ReturnVo<Boolean> checkEntityExist(@RequestBody CheckExistVo checkExistVo) {
        return this.checkExist(companyService, checkExistVo);
    }
    /**
     * 获取公司树
     *
     * @return
     */
    @GetMapping(value = "/getCompanyTree", produces = "application/json")
    public ReturnVo<List> getCompanyTree() {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        List<OrgTreeVo> datas = companyService.getCompanyTree(null);
        returnVo.setData(datas);
        return returnVo;
    }

    /**
     * 分页获取公司列表
     *
     * @param company 查询参数
     * @return
     */
    @PostMapping(value = "/getCompanies", produces = "application/json")
    public ReturnVo<List> getCompanies(@RequestBody Company company) {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        List<Company> datas = companyService.getCompanies(company);
        returnVo.setData(datas);
        return returnVo;
    }

    /**
     * 添加或者修改
     *
     * @param company 参数
     * @return
     */
    @PostMapping(value = "/saveOrUpdate", produces = "application/json")
    public ReturnVo<String> saveOrUpdate(@RequestBody Company company) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        companyService.saveOrUpdate(company,this.getLoginUser());
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
        ReturnVo<String> returnVo = companyService.deleteByIds(ids);
        return returnVo;
    }

    /**
     * 查询应用
     *
     * @param id
     * @return
     */
    @GetMapping(value = "/get", produces = "application/json")
    public ReturnVo<Company> get(String id) {
        ReturnVo<Company> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        Company company = companyService.getById(id);
        returnVo.setData(company);
        return returnVo;
    }
}
