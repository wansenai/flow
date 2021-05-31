package com.dragon.flow.mapper.privilege;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.dragon.flow.model.privilege.Module;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @program: flow
 * @description: 模型mapper
 * @author: Bruce.Liu
 * @create: 2021-03-23 23:07
 **/
@Repository
public interface IModuleMapper extends BaseMapper<Module> {
    /**
     * 通过模型id列表得到模型列表
     * @param moduleIds 模型id列表
     * @return
     */
    List<Module> getModulesByIds(List<String> moduleIds);

}
