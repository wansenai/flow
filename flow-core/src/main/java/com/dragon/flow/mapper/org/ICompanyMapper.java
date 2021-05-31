package com.dragon.flow.mapper.org;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.dragon.flow.model.org.Company;
import org.springframework.stereotype.Repository;

/**
 * @program: flow
 * @description: 公司持久化层
 * @author: Bruce.Liu
 * @create: 2021-03-23 22:36
 **/
@Repository
public interface ICompanyMapper extends BaseMapper<Company> {
}
