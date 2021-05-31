package com.dragon.flow.mapper.org;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.dragon.flow.model.org.Personal;
import com.dragon.flow.model.org.PositionInfo;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-27
 */
@Repository
public interface IPositionInfoMapper extends BaseMapper<PositionInfo> {

    IPage<PositionInfo> getPagerModel(IPage<PositionInfo> page, @Param("positionInfo") PositionInfo positionInfo);
}
