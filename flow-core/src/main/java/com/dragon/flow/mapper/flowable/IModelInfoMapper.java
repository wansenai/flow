package com.dragon.flow.mapper.flowable;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.dragon.flow.model.flowable.ModelInfo;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-20
 */
@Repository
public interface IModelInfoMapper extends BaseMapper<ModelInfo> {

    /**
     * 分页查询模型列表
     * @param page 分页
     * @param modelInfo 参数
     * @return
     */
    IPage<ModelInfo> getPagerModel(IPage<ModelInfo> page, @Param("modelInfo") ModelInfo modelInfo);
}
