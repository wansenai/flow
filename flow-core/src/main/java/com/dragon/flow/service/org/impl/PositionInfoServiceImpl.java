package com.dragon.flow.service.org.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.core.toolkit.IdWorker;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.mapper.org.IPositionInfoMapper;
import com.dragon.flow.model.org.PositionInfo;
import com.dragon.flow.model.org.PositionSeq;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.service.org.IPositionInfoService;
import com.dragon.flow.service.org.IPositionSeqService;
import com.dragon.flow.vo.org.OrgTreeVo;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import com.dragon.tools.vo.ReturnVo;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-27
 */
@Service
public class PositionInfoServiceImpl extends ServiceImpl<IPositionInfoMapper, PositionInfo> implements IPositionInfoService {

    @Autowired
    private IPositionInfoMapper positionInfoMapper;
    @Autowired
    private IPositionSeqService positionSeqService;

    @Override
    public List<OrgTreeVo> getPositionTree() {
        List<OrgTreeVo> orgTreeVos = new ArrayList<>();
        LambdaQueryWrapper<PositionSeq> positionSeqLambdaQueryWrapper = new LambdaQueryWrapper<>();
        positionSeqLambdaQueryWrapper.eq(PositionSeq::getDelFlag, FlowConstant.DEL_FLAG_1).orderByAsc(PositionSeq::getOrderNo);
        List<PositionSeq> positionSeqs = positionSeqService.list(positionSeqLambdaQueryWrapper);
        if (CollectionUtils.isNotEmpty(positionSeqs)){
            positionSeqs.forEach(positionSeq -> {
                OrgTreeVo orgTreeVo = new OrgTreeVo();
                orgTreeVo.setId(positionSeq.getId());
                orgTreeVo.setPid(positionSeq.getPid());
                orgTreeVo.setCode(positionSeq.getCode());
                orgTreeVo.setName(positionSeq.getName());
                orgTreeVo.setSourceType("1");
                orgTreeVos.add(orgTreeVo);
            });
        }
        Map<String, PositionSeq> stringPositionSeqMap = positionSeqs.stream().collect(Collectors.toMap(PositionSeq::getId, positionSeq -> positionSeq));
        LambdaQueryWrapper<PositionInfo> positionInfoLambdaQueryWrapper = new LambdaQueryWrapper<>();
        positionInfoLambdaQueryWrapper.eq(PositionInfo::getDelFlag, FlowConstant.DEL_FLAG_1).orderByAsc(PositionInfo::getOrderNo);
        List<PositionInfo> positionInfos = this.list(positionInfoLambdaQueryWrapper);
        if (CollectionUtils.isNotEmpty(positionSeqs)){
            positionInfos.forEach(positionInfo -> {
                OrgTreeVo orgTreeVo = new OrgTreeVo();
                orgTreeVo.setId(positionInfo.getId());
                if (StringUtils.isNotBlank(positionInfo.getPositionSeqId())){
                    PositionSeq positionSeq = stringPositionSeqMap.get(positionInfo.getPositionSeqId());
                    orgTreeVo.setPid(positionSeq.getId());
                }
                orgTreeVo.setCode(positionInfo.getCode());
                orgTreeVo.setName(positionInfo.getName());
                orgTreeVo.setSourceType("2");
                orgTreeVos.add(orgTreeVo);
            });
        }
        return orgTreeVos;
    }

    @Override
    public void batchSaveOrUpdatePositionSeqAndPosition(PositionSeq positionSeq, List<PositionInfo> positionInfos, User loginUser) {
        String userNo = loginUser.getUserNo();
        Date date = new Date();
        positionSeq.setCreateTime(date);
        positionSeq.setCreator(userNo);
        positionSeqService.saveOrUpdate(positionSeq);
        if (CollectionUtils.isNotEmpty(positionInfos)){
            positionInfos.forEach(positionInfo -> {
                positionInfo.setId(IdWorker.get32UUID());
                positionInfo.setCreateTime(date);
                positionInfo.setCreator(userNo);
                positionInfo.setPositionSeqCode(positionSeq.getCode());
                positionInfo.setPositionSeqId(positionSeq.getId());
            });
            this.saveOrUpdateBatch(positionInfos);
        }
    }

    @Override
    public PagerModel<PositionInfo> getPagerModelByWrapper(PositionInfo positionInfo, Query query) {
        IPage<PositionInfo> queryPage = new Page<>(query.getPageNum(), query.getPageSize());
        IPage<PositionInfo> page = this.positionInfoMapper.getPagerModel(queryPage, positionInfo);
        return new PagerModel<>(page.getTotal(), page.getRecords());
    }

    @Override
    public void saveOrUpdate(PositionInfo positionInfo, User loginUser) {
        Date date = new Date();
        if (StringUtils.isNotBlank(positionInfo.getId())){
            positionInfo.setUpdateTime(date);
            positionInfo.setUpdator(loginUser.getUserNo());
        } else {
            positionInfo.setId(IdWorker.get32UUID());
            positionInfo.setCreateTime(date);
            positionInfo.setCreator(loginUser.getUserNo());
        }
        this.saveOrUpdate(positionInfo);
    }

    @Override
    public ReturnVo<String> deleteById(String id) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        LambdaUpdateWrapper<PositionInfo> positionInfoLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
        positionInfoLambdaUpdateWrapper.set(PositionInfo::getDelFlag, FlowConstant.DEL_FLAG_0)
                .eq(PositionInfo::getId, id);
        this.update(positionInfoLambdaUpdateWrapper);
        return returnVo;
    }
}
