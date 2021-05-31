package com.dragon.flow.service.org.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.mapper.base.IAreaMapper;
import com.dragon.flow.model.base.Area;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.service.base.IAreaService;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.vo.ReturnVo;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * <p>
 * 区域信息 服务实现类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-14
 */
@Service
public class AreaServiceImpl extends ServiceImpl<IAreaMapper, Area> implements IAreaService {

    @Override
    public List<Area> getAreasByPcode(String pcode) {
        LambdaQueryWrapper<Area> areaLambdaQueryWrapper = new LambdaQueryWrapper<>();
        if (StringUtils.isNotBlank(pcode)){
            areaLambdaQueryWrapper.eq(Area::getPcode, pcode.trim());
        } else {
            areaLambdaQueryWrapper.isNull(Area::getPcode).or().eq(Area::getPcode, "");
        }
        areaLambdaQueryWrapper.eq(Area::getDelFlag, FlowConstant.DEL_FLAG_1).orderByAsc(Area::getCode);
        return this.list(areaLambdaQueryWrapper);
    }

    @Override
    public List<Area> getAllArea(Area area) {
        LambdaQueryWrapper<Area> areaLambdaQueryWrapper = new LambdaQueryWrapper<>();
        if (StringUtils.isNotBlank(area.getName())){
            areaLambdaQueryWrapper.like(Area::getName, area.getName());
        }
        if (StringUtils.isNotBlank(area.getKeyword())){
            areaLambdaQueryWrapper.like(Area::getName, area.getKeyword()).or().like(Area::getCode, area.getKeyword());
        }
        areaLambdaQueryWrapper.eq(Area::getDelFlag, FlowConstant.DEL_FLAG_1).orderByAsc(Area::getCode);
        return this.list(areaLambdaQueryWrapper);
    }

    @Override
    public void saveOrUpdate(Area area, User loginUser) {
        Date date = new Date();
        if (StringUtils.isNotBlank(area.getCode())){
            area.setUpdateTime(date);
            area.setUpdator(loginUser.getUserNo());
        } else {
            area.setCreateTime(date);
            area.setCreator(loginUser.getUserNo());
        }
        this.saveOrUpdate(area);
    }

    @Override
    public ReturnVo<String> deleteByCodes(String... codes) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        LambdaUpdateWrapper<Area> areaLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
        areaLambdaUpdateWrapper.set(Area::getDelFlag, FlowConstant.DEL_FLAG_0)
                .in(Area::getCode, codes);
        this.update(areaLambdaUpdateWrapper);
        return returnVo;
    }
}
