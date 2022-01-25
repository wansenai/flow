package com.dragon.flow.service.base.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.mapper.base.IDicTypeMapper;
import com.dragon.flow.model.base.Category;
import com.dragon.flow.model.base.DicType;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.service.base.IDicTypeService;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import com.dragon.tools.vo.ReturnVo;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-03-29
 */
@Service
public class DicTypeServiceImpl extends ServiceImpl<IDicTypeMapper, DicType> implements IDicTypeService {
    @Override
    public List<DicType> getDicTypes(DicType dicType) {
        LambdaQueryWrapper<DicType> dicTypeLambdaQueryWrapper = new LambdaQueryWrapper<>();
        if (StringUtils.isNotBlank(dicType.getKeyword())){
            dicTypeLambdaQueryWrapper.like(DicType::getName, dicType.getKeyword()).or().like(DicType::getCode, dicType.getCode());
        }
        dicTypeLambdaQueryWrapper.eq(DicType::getDelFlag, 1).orderByDesc(DicType::getOrderNo);
        return this.list(dicTypeLambdaQueryWrapper);
    }

    @Override
    public PagerModel<DicType> getPagerModelByWrapper(DicType dicType, Query query) {
        //参数一是当前页，参数二是每页个数
        LambdaQueryWrapper<DicType> dicTypeLambdaQueryWrapper = new LambdaQueryWrapper<>();
        if (StringUtils.isNotBlank(dicType.getKeyword())){
            dicTypeLambdaQueryWrapper.like(DicType::getCode, dicType.getKeyword()).or()
                    .like(DicType::getName, dicType.getKeyword());
        }
        dicTypeLambdaQueryWrapper.eq(DicType::getDelFlag, FlowConstant.DEL_FLAG_1)
                .orderByAsc(DicType::getOrderNo);
        IPage<DicType> queryPage = new Page<>(query.getPageNum(), query.getPageSize());
        IPage<DicType> page = this.page(queryPage, dicTypeLambdaQueryWrapper);
        return new PagerModel<>(page.getTotal(), page.getRecords());
    }

    @Override
    public void saveOrUpdate(DicType dicType, User loginUser) {
        Date date = new Date();
        if (StringUtils.isNotBlank(dicType.getId())){
            dicType.setUpdateTime(date);
            dicType.setUpdator(loginUser.getUserNo());
        } else {
            dicType.setCreateTime(date);
            dicType.setCreator(loginUser.getUserNo());
        }
        this.saveOrUpdate(dicType);
    }

    @Override
    public ReturnVo<String> deleteByIds(List<String> ids) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        LambdaQueryWrapper<DicType> dicTypeLambdaQueryWrapper = new LambdaQueryWrapper<>();
        dicTypeLambdaQueryWrapper.in(DicType::getPid, ids)
                .eq(DicType::getDelFlag, FlowConstant.DEL_FLAG_1);
        long count = this.count(dicTypeLambdaQueryWrapper);
        if (count > 0){
            returnVo = new ReturnVo<>(ReturnCode.FAIL, "该分类还存在子分类，请确认！");
        } else {
            LambdaUpdateWrapper<DicType> dicTypeLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
            dicTypeLambdaUpdateWrapper.set(DicType::getDelFlag, FlowConstant.DEL_FLAG_0)
                    .in(DicType::getId, ids);
            this.update(dicTypeLambdaUpdateWrapper);
        }
        return returnVo;
    }
}
