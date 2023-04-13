package com.dragon.flow.service.flowable.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.enm.flowable.runtime.CommentTypeEnum;
import com.dragon.flow.mapper.flowable.ICommentInfoMapper;
import com.dragon.flow.model.flowable.CommentInfo;
import com.dragon.flow.model.org.Personal;
import com.dragon.flow.service.flowable.ICommentInfoService;
import com.dragon.flow.service.org.IPersonalService;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

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
    @Autowired
    private IPersonalService personalService;

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
            // 渲染数据时把头像赋值后返回
            List<String> personalCodes = commentInfos.stream().map(CommentInfo::getPersonalCode).distinct().collect(Collectors.toList());
            List<Personal> personals = personalService.getPersonalsByCodes(personalCodes);
            Map<String, Personal> personalMap = personals.stream().collect(Collectors.toMap(Personal::getCode, Function.identity()));

            for (CommentInfo commentInfo : commentInfos) {
                commentInfo.setTypeName(CommentTypeEnum.getEnumMsgByType(commentInfo.getType()));
                if(personalMap.containsKey(commentInfo.getPersonalCode())){
                    Personal personal = personalMap.get(commentInfo.getPersonalCode());
                    commentInfo.setPersonalHeadImg(personal.getHeadImg());
                    if(StringUtils.isBlank(commentInfo.getPersonalName())){
                        commentInfo.setPersonalName(personal.getName());
                    }
                }

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
