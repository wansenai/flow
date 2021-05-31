package com.dragon.flow.service.flowable;

import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.flowable.CommentInfo;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-20
 */
public interface ICommentInfoService extends IService<CommentInfo> {

    /**
     * 审批意见
     * @param commentInfo 实体
     */
    void saveComment(CommentInfo commentInfo) ;

    /**
     * 通过流程实例id获取审批意见列表
     * @param processInstanceId 流程实例id
     * @return
     */
    List<CommentInfo> getCommentInfosByProcessInstanceId(String processInstanceId) ;

}
