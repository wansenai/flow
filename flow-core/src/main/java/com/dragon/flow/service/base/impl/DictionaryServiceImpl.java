package com.dragon.flow.service.base.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.mapper.base.IDictionaryMapper;
import com.dragon.flow.model.base.DicItem;
import com.dragon.flow.model.base.Dictionary;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.service.base.IDicItemService;
import com.dragon.flow.service.base.IDictionaryService;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import com.dragon.tools.vo.ReturnVo;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-03-29
 */
@Service
public class DictionaryServiceImpl extends ServiceImpl<IDictionaryMapper, Dictionary> implements IDictionaryService {
    @Autowired
    private IDicItemService dicItemService;

    @Override
    public PagerModel<Dictionary> getPagerModelByWrapper(Dictionary dictionary, Query query) {
        //参数一是当前页，参数二是每页个数
        LambdaQueryWrapper<Dictionary> dictionaryLambdaQueryWrapper = new LambdaQueryWrapper<>();
        if (StringUtils.isNotBlank(dictionary.getKeyword())){
            dictionaryLambdaQueryWrapper.like(Dictionary::getCode, dictionary.getKeyword()).or()
                    .like(Dictionary::getCname, dictionary.getKeyword());
        }
        dictionaryLambdaQueryWrapper.eq(Dictionary::getDicTypeId, dictionary.getDicTypeId());
        dictionaryLambdaQueryWrapper.eq(Dictionary::getDelFlag, FlowConstant.DEL_FLAG_1);
        IPage<Dictionary> queryPage = new Page<>(query.getPageNum(), query.getPageSize());
        IPage<Dictionary> page = this.page(queryPage, dictionaryLambdaQueryWrapper);
        return new PagerModel<>(page.getTotal(), page.getRecords());
    }

    @Override
    public void saveOrUpdate(Dictionary dictionary, User loginUser) {
        Date date = new Date();
        if (StringUtils.isNotBlank(dictionary.getId())){
            dictionary.setUpdateTime(date);
            dictionary.setUpdator(loginUser.getUserNo());
        } else {
            dictionary.setCreateTime(date);
            dictionary.setCreator(loginUser.getUserNo());
        }
        this.saveOrUpdate(dictionary);
    }

    @Override
    public ReturnVo<String> deleteByIds(String... ids) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        LambdaQueryWrapper<DicItem> dicItemLambdaQueryWrapper = new LambdaQueryWrapper<>();
        dicItemLambdaQueryWrapper.eq(DicItem::getDelFlag, FlowConstant.DEL_FLAG_1)
                .in(DicItem::getMainId, ids);
        long count = dicItemService.count(dicItemLambdaQueryWrapper);
        if (count > 0){
            returnVo = new ReturnVo<>(ReturnCode.FAIL, "存在字典项数据，请确认");
        }
        LambdaUpdateWrapper<Dictionary> dictionaryLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
        dictionaryLambdaUpdateWrapper.set(Dictionary::getDelFlag, FlowConstant.DEL_FLAG_0)
                .in(Dictionary::getId, ids);
        this.update(dictionaryLambdaUpdateWrapper);
        return returnVo;
    }
}
