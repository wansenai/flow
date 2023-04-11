package com.dragon.flow.service.flowable;

import com.dragon.flow.model.org.Personal;
import com.dragon.flow.vo.flowable.processinstance.InstanceQueryParamsVo;
import com.dragon.flow.vo.flowable.processinstance.ProcessInstanceVo;
import com.dragon.flow.vo.flowable.processinstance.StartorBaseInfoVo;
import com.dragon.flow.vo.flowable.runtime.StartProcessInstanceVo;
import com.dragon.flow.vo.flowable.processinstance.EndVo;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import com.dragon.tools.vo.ReturnVo;
import org.flowable.engine.runtime.ProcessInstance;

import java.util.Map;

/**
 * @program: flow
 * @description: 流程实例service
 * @author: Bruce.Liu
 * @create: 2021-04-20 14:20
 **/
public interface IFlowableProcessInstanceService {
    /**
     * 启动流程
     *
     * @param params 启动参数
     * @return 流程实例
     */
    ReturnVo<ProcessInstance> startProcessInstanceByKey(StartProcessInstanceVo params);

    /**
     * @param params   启动参数
     * @param personal 发起人
     * @return
     */
    Map<String, Object> getStartVariables(StartProcessInstanceVo params, Personal personal);

    StartorBaseInfoVo getStartorBaseInfoVoByProcessInstanceId(String processInstanceId);

    /**
     * 查询我的流程列表
     *
     * @param paramsVo 查询参数
     * @return
     * @throws Exception
     */
    PagerModel<ProcessInstanceVo> findMyProcessinstancesPagerModel(InstanceQueryParamsVo paramsVo, Query query);

    /**
     * 终止流程
     *
     * @param endVo 基本参数
     * @return
     */
    ReturnVo<String> stopProcess(EndVo endVo);
}
