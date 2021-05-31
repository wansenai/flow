package com.dragon.flow.service.org.impl;

import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.IdWorker;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.mapper.org.IPositionSeqMapper;
import com.dragon.flow.model.org.PositionSeq;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.service.org.IPositionSeqService;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import com.dragon.tools.vo.ReturnVo;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;

import java.util.Date;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-27
 */
@Service
public class PositionSeqServiceImpl extends ServiceImpl<IPositionSeqMapper, PositionSeq> implements IPositionSeqService {

    @Override
    public PagerModel<PositionSeq> getPagerModel(PositionSeq positionSeq, Query query) {

        return null;
    }

    @Override
    public void saveOrUpdate(PositionSeq positionSeq, User loginUser) {
        Date date = new Date();
        if (StringUtils.isNotBlank(positionSeq.getId())){
            positionSeq.setUpdateTime(date);
            positionSeq.setUpdator(loginUser.getUserNo());
        } else {
            positionSeq.setId(IdWorker.get32UUID());
            positionSeq.setCreateTime(date);
            positionSeq.setCreator(loginUser.getUserNo());
        }
        this.saveOrUpdate(positionSeq);
    }

    @Override
    public ReturnVo<String> deleteById(String id) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        LambdaUpdateWrapper<PositionSeq> positionSeqLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
        positionSeqLambdaUpdateWrapper.set(PositionSeq::getDelFlag, FlowConstant.DEL_FLAG_0)
                .eq(PositionSeq::getId, id);
        this.update(positionSeqLambdaUpdateWrapper);
        return returnVo;
    }
}
