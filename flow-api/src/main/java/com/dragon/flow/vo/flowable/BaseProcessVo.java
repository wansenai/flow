package com.dragon.flow.vo.flowable;

import com.dragon.flow.enm.flowable.runtime.CommentTypeEnum;
import com.dragon.flow.enm.flowable.runtime.ProcessStatusEnum;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;

/**
 * @Description: 流程执行过程中的基本参数VO
 * @Author: Bruce.liu
 * @Since:10:16 2021/05/06
 */
@Data
public abstract class BaseProcessVo implements Serializable {
    /**********************任务相关的参数**********************/
    /**
     * 任务id 必填
     */
    @ApiModelProperty(value = "任务id", required = true)
    private String taskId;
    /**
     * 节点id
     */
    @ApiModelProperty(value = "节点id")
    private String activityId;
    @ApiModelProperty(value = "节点名称")
    private String activityName;
    /**
     * 流程实例状态 必填
     */
    @ApiModelProperty(value = "流程实例状态", required = true)
    private ProcessStatusEnum processStatusEnum;
    /**********************审批意见的参数**********************/
    /**
     * 操作人code 必填
     */
    @ApiModelProperty(value = "操作人code", required = true)
    private String userCode;
    /**
     * 审批意见 必填
     */
    @ApiModelProperty(value = "审批意见", required = true)
    private String message;
    /**
     * 审批意见类型 必填
     */
    @ApiModelProperty(value = "审批意见类型", required = true)
    private CommentTypeEnum commentTypeEnum;

    /**
     * 流程实例的id
     */
    @ApiModelProperty(value = "流程实例的id", required = true)
    private String processInstanceId;
}
