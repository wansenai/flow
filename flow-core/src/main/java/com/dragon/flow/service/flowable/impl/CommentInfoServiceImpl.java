package com.dragon.flow.service.flowable.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.enm.flowable.runtime.CommentTypeEnum;
import com.dragon.flow.mapper.flowable.ICommentInfoMapper;
import com.dragon.flow.model.flowable.CommentInfo;
import com.dragon.flow.service.flowable.ICommentInfoService;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-20
 */
@Service
public class CommentInfoServiceImpl extends ServiceImpl<ICommentInfoMapper, CommentInfo> implements ICommentInfoService {

    @Autowired
    private ICommentInfoMapper commentInfoMapper;

    @Override
    public void saveComment(CommentInfo commentInfo) {
        commentInfo.setTime(new Date());
        this.saveOrUpdate(commentInfo);
    }

    @Override
    public List<CommentInfo> getCommentInfosByProcessInstanceId(String processInstanceId) {
        List<CommentInfo> commentInfos = commentInfoMapper.getCommentInfosByProcessInstanceId(processInstanceId);
        List<CommentInfo> commentInfoList = new ArrayList<>();

        if (CollectionUtils.isNotEmpty(commentInfos)) {
            for (CommentInfo commentInfo : commentInfos) {
                commentInfo.setTypeName(CommentTypeEnum.getEnumMsgByType(commentInfo.getType()));
                commentInfoList.add(commentInfo);
                if (CommentTypeEnum.LCZZ.name().equals(commentInfo.getType())
                        || CommentTypeEnum.SPJS.name().equals(commentInfo.getType())) {
                    break;
                }
            }
        }
        return commentInfoList;
    }
}
