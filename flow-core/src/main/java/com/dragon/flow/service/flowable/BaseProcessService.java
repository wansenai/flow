package com.dragon.flow.service.flowable;

import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.enm.flowable.runtime.CommentTypeEnum;
import com.dragon.flow.enm.flowable.runtime.ProcessStatusEnum;
import com.dragon.flow.exception.FlowException;
import com.dragon.flow.model.flowable.CommentInfo;
import com.dragon.flow.model.flowable.ExtendHisprocinst;
import com.dragon.flow.vo.flowable.BaseProcessVo;
import com.dragon.flow.vo.flowable.task.CompleteTaskVo;
import org.apache.commons.lang3.StringUtils;
import org.flowable.task.api.Task;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;

import java.util.Date;

/**
 * @program: flow
 * @description: 抽象的流程服务
 * @author: Bruce.Liu
 * @create: 2021-04-20 14:48
 **/
public abstract class BaseProcessService {
    @Autowired
    protected ICommentInfoService commentInfoService;
    @Autowired
    protected IExtendHisprocinstService extendHisprocinstService;
    @Autowired
    protected CacheManager cacheManager;

    protected void addFlowCommentInfo(CommentInfo commentInfo) {
        commentInfoService.saveComment(commentInfo);
    }

    /**
     * 添加审批意见
     *
     * @param baseProcessVo 参数
     */
    protected void addFlowCommentInfoAndProcessStatus(BaseProcessVo baseProcessVo) {
        ProcessStatusEnum processStatusEnum = baseProcessVo.getProcessStatusEnum();
        if (processStatusEnum != null) {
            Cache cache = cacheManager.getCache(FlowConstant.CACHE_PROCESS_STATUS);
            if (cache != null) {
                cache.put(baseProcessVo.getProcessInstanceId(), processStatusEnum.toString());
            }
        }
        CommentInfo commentInfo = new CommentInfo(baseProcessVo.getCommentTypeEnum().name(), baseProcessVo.getUserCode(), baseProcessVo.getProcessInstanceId(), baseProcessVo.getMessage());
        commentInfo.setTaskId(baseProcessVo.getTaskId());
        commentInfo.setActivityId(baseProcessVo.getActivityId());
        commentInfo.setActivityName(baseProcessVo.getActivityName());
        commentInfo.setCreator(baseProcessVo.getUserCode());
        commentInfo.setUpdator(baseProcessVo.getUserCode());
        commentInfo.setCreateTime(new Date());
        commentInfo.setUpdateTime(new Date());
        commentInfoService.saveComment(commentInfo);
        //2.修改流程实例的状态,
        if (baseProcessVo.getCommentTypeEnum() != null && !baseProcessVo.getCommentTypeEnum().equals(CommentTypeEnum.YY)) {
            if (StringUtils.isBlank(baseProcessVo.getProcessInstanceId())) {
                throw new FlowException("请传入流程实例id");
            }
            ExtendHisprocinst extendHisprocinst = new ExtendHisprocinst(baseProcessVo.getProcessInstanceId(), baseProcessVo.getProcessStatusEnum().toString());
            extendHisprocinstService.updateAllStatusByProcessInstanceId(extendHisprocinst);
        }
    }

    protected void evictHighLightedNodeCache(String processInstanceId) {
        Cache cache = cacheManager.getCache(FlowConstant.CACHE_PROCESS_HIGHLIGHTEDNODES);
        cache.evict(processInstanceId);
    }

    protected void evictOneActivityVoCache(String processInstanceId, String activityId) {
        Cache cache = cacheManager.getCache(FlowConstant.CACHE_PROCESS_ACTIVITYS);
        String key = processInstanceId + "-" + activityId;
        cache.evict(key);
    }

}
