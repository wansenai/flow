package com.dragon.flow.model.flowable;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.dragon.flow.enm.flowable.runtime.CommentTypeEnum;
import com.dragon.tools.common.BaseModel;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;

/**
 * @program: flow
 * @description: 审批意见信息
 * @author: Bruce.Liu
 * @create: 2021-04-20 16:15
 **/
@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName("tbl_flow_comment_info")
public class CommentInfo extends BaseModel {

    @TableId(type = IdType.ASSIGN_UUID)
    protected String id;
    /**
     * 类型
     *
     * @see CommentTypeEnum
     */
    protected String type;
    @TableField(exist = false)
    protected String typeName;
    //人员的工号
    protected String personalCode;
    @TableField(exist = false)
    protected String personalName;
    @TableField(exist = false)
    protected String personalHeadImg;
    //审批时间
    @JsonFormat(timezone = "GMT+8",pattern="yyyy-MM-dd HH:mm:ss")
    protected Date time;
    //任务id
    protected String taskId;
    //节点id
    protected String activityId;
    //节点名称
    protected String activityName;
    //流程实例id
    protected String processInstanceId;
    //动作
    protected String action;
    //审批意见
    protected String message;

    public CommentInfo(String type, String personalCode, String processInstanceId, String message) {
        this.type = type;
        this.personalCode = personalCode;
        this.processInstanceId = processInstanceId;
        this.message = message;
    }

    public CommentInfo(String type, String personalCode, String taskId, String processInstanceId, String message) {
        this.type = type;
        this.personalCode = personalCode;
        this.taskId = taskId;
        this.processInstanceId = processInstanceId;
        this.message = message;
    }
}
