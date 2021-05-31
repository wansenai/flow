package com.dragon.flow.web.resource.flowable;


import com.dragon.flow.model.flowable.CommentInfo;
import com.dragon.flow.service.flowable.ICommentInfoService;
import com.dragon.flow.web.resource.BaseResource;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.vo.ReturnVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-20
 */
@RestController
@RequestMapping("/flow/flowable/commentInfo")
public class CommentInfoResource extends BaseResource {

    @Autowired
    private ICommentInfoService commentInfoService;

    /**
     * 获取列表
     *
     * @param processInstanceId 查询参数
     * @return
     */
    @GetMapping(value = "/getCommentInfosByProcessInstanceId/{processInstanceId}", produces = "application/json")
    public ReturnVo<List> getPagerModel(@PathVariable String processInstanceId) {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        List<CommentInfo> commentInfos = commentInfoService.getCommentInfosByProcessInstanceId(processInstanceId);
        returnVo.setData(commentInfos);
        return returnVo;
    }

}

