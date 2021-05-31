package com.dragon.flow.vo.flowable.comment;

import com.dragon.flow.enm.flowable.runtime.CommentTypeEnum;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

/**
 * @Description:
 * @Author: Bruce.liu
 * @Since:19:24 2021/04/20
 */
@Data
public class FlowCommentVo implements Serializable {
    /**
     * 任务id
     */
    @ApiModelProperty(value = "任务id")
    protected String taskId;
    /**
     * 添加人
     */
    @ApiModelProperty(value = "添加人")
    protected String personalCode;
    /**
     * 用户的名称
     */
    @ApiModelProperty(value = "用户的名称")
    protected String userName;
    /**
     * 用户的头像链接
     */
    @ApiModelProperty(value = "用户的头像链接")
    protected String userUrl;
    /**
     * 流程实例id
     */
    @ApiModelProperty(value = "流程实例id")
    protected String processInstanceId;
    /**
     * 意见信息
     */
    @ApiModelProperty(value = "意见信息")
    protected String message;
    /**
     * 时间
     */
    @ApiModelProperty(value = "时间")
    protected Date time;
    /**
     *  @see  CommentTypeEnum
      */
    @ApiModelProperty(value = "类型CODE")
    private String type;
    /**
     * 类型名称
     */
    @ApiModelProperty(value = "类型名称")
    private String typeName;
    /**
     * 任务名称
     */
    @ApiModelProperty(value = "任务名称")
    private String taskName;
    /**
     * 评论全信息
     */
    @ApiModelProperty(value = "评论信息")
    private String fullMsg;
    public FlowCommentVo(){}
    public FlowCommentVo(String personalCode, String processInstanceId, String message, String type) {
        this.personalCode = personalCode;
        this.processInstanceId = processInstanceId;
        this.message = message;
        this.type = type;
    }
    public FlowCommentVo(String taskId, String personalCode, String processInstanceId, String message, String type) {
        this.taskId = taskId;
        this.personalCode = personalCode;
        this.processInstanceId = processInstanceId;
        this.message = message;
        this.type = type;
    }
}
