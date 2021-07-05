package com.dragon.flow.service.base.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.mapper.base.IDicItemMapper;
import com.dragon.flow.model.base.DicItem;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.service.base.IDicItemService;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import com.dragon.tools.vo.ReturnVo;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * <p>yarn
 * 服务实现类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-03-29
 */
@Service
public class DicItemServiceImpl extends ServiceImpl<IDicItemMapper, DicItem> implements IDicItemService {
    @Override
    public List<DicItem> getDicItemsByMainId(String mainId) {
        LambdaQueryWrapper<DicItem> dicItemLambdaQueryWrapper = new LambdaQueryWrapper<>();
        dicItemLambdaQueryWrapper.eq(DicItem::getMainId, mainId)
                .orderByAsc(DicItem::getOrderNo);
        return this.list(dicItemLambdaQueryWrapper);
    }

    @Override
    public PagerModel<DicItem> getPagerModelByWrapper(DicItem dicItem, Query query) {
        //参数一是当前页，参数二是每页个数
        QueryWrapper<DicItem> params = new QueryWrapper<>(dicItem);
        params.eq(true, "main_id", dicItem.getMainId());
        if(StringUtils.isNotBlank(dicItem.getKeyword())){
            params.like("code", dicItem.getKeyword()).or().like("cname", dicItem.getKeyword()).or().like("ename", dicItem.getKeyword());
        }
        params.orderByAsc("order_no");
        IPage<DicItem> queryPage = new Page<>(query.getPageNum(), query.getPageSize());
        IPage<DicItem> page = this.page(queryPage, params);
        return new PagerModel<>(page.getTotal(), page.getRecords());
    }

    @Override
    public void saveOrUpdate(DicItem dicItem, User loginUser) {
        Date date = new Date();
        if (StringUtils.isNotBlank(dicItem.getId())){
            dicItem.setUpdateTime(date);
            dicItem.setUpdator(loginUser.getUserNo());
        } else {
            dicItem.setCreateTime(date);
            dicItem.setCreator(loginUser.getUserNo());
        }
        this.saveOrUpdate(dicItem);
    }

    @Override
    public ReturnVo<String> deleteByIds(String... ids) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        LambdaUpdateWrapper<DicItem> dicItemLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
        dicItemLambdaUpdateWrapper.set(DicItem::getDelFlag, FlowConstant.DEL_FLAG_0)
                .in(DicItem::getId, ids);
        this.update(dicItemLambdaUpdateWrapper);
        return returnVo;
    }
}
