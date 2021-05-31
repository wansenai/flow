package com.dragon.flow.service.flowable.impl;

import com.dragon.flow.mapper.flowable.IFlowableActHiActinstMapper;
import com.dragon.flow.mapper.flowable.IFlowableActRuActinstMapper;
import com.dragon.flow.service.flowable.IFlowableActinstService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-06 14:14
 **/
@Service
public class FlowableActinstServiceImpl implements IFlowableActinstService {

    @Autowired
    private IFlowableActRuActinstMapper flowableActRuActinstMapper;
    @Autowired
    private IFlowableActHiActinstMapper flowableActHiActinstMapper;

    @Override
    public void deleteActinstByIds(List<String> actIds) {
        flowableActRuActinstMapper.deleteBatchIds(actIds);
        flowableActHiActinstMapper.deleteBatchIds(actIds);
    }
}
