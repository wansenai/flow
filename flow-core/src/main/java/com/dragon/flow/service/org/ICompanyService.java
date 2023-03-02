package com.dragon.flow.service.org;

import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.org.Company;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.vo.org.OrgTreeVo;
import com.dragon.tools.vo.ReturnVo;

import java.util.List;

/**
 * @program: flow
 * @description: 公司service
 * @author: Bruce.Liu
 * @create: 2021-03-23 22:38
 **/
public interface ICompanyService extends IService<Company> {
    /**
     * 导入公司
     * @param companies 公司列表
     * @return
     */
    ReturnVo<String> importCompany(List<Company> companies, User loginUser);
    /**
     * 递归得到所有的子公司ids
     *
     * @param id  id
     * @param ids ids
     * @return
     */
    void getAllCompanyIds(String id, List<String> ids);

    /**
     * 添加或者保存公司
     *
     * @param company   公司
     * @param loginUser 登录账号
     */
    void saveOrUpdate(Company company, User loginUser);

    /**
     * 分页查询列表
     *
     * @param company 条件
     * @return
     */
    List<Company> getCompanies(Company company);

    /**
     * 获取公司树
     *
     * @return
     */
    List<OrgTreeVo> getCompanyTree(String keyword);

    /**
     * 删除公司
     *
     * @param ids 公司ids
     * @return
     */
    ReturnVo<String> deleteByIds(List<String> ids);

    /**
     * 通过编码获取公司
     * @param code 编码
     * @return
     */
    Company getCompanyByCode(String code) ;
}
