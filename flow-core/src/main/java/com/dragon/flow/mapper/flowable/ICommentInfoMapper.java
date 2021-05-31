package com.dragon.flow.mapper.flowable;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.dragon.flow.model.flowable.CommentInfo;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-20
 */
@Repository
public interface ICommentInfoMapper extends BaseMapper<CommentInfo> {

    /**
     * 通过流程实例id获取审批意见列表
     * @param processInstanceId 流程实例id
     * @return
     */
    List<CommentInfo> getCommentInfosByProcessInstanceId(String processInstanceId) ;
}
