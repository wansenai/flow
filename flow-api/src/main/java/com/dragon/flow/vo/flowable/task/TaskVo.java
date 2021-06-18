package com.dragon.flow.vo.flowable.task;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * @program: flow
 * @description: 任务VO
 * @author: Bruce.Liu
 * @create: 2021-04-22 22:57
 **/
@Data
public class TaskVo implements Serializable {
    /**
     * 业务表单的id
     */
    private String businessKey;
    /**
     * 任务名称
     */
    private String name;
    /**
     * 任务id
     */
    private String taskId;
    /**
     * 任务定义key
     */
    private String taskDefKey;
    /**
     * 审批人 工号
     */
    private String assignee;
    /**
     * 审批人 姓名
     */
    private String assigneeName;
    /**
     * 任务创建时间
     */
    @JsonFormat(timezone = "GMT+8",pattern="yyyy-MM-dd HH:mm:ss")
    private Date createTime;
    /**
     * 停留小时
     */
    private String stayHour;
    /**
     * 流程实例的id
     */
    private String processInstanceId;
    /**
     * 流程实例的pid
     */
    private String parentId;
    /**
     * 流程定义的id
     */
    private String processDefinitionId;
    /**
     * 流程定义key
     */
    private String processDefinitionKey;
    /**
     * 流程定义类型
     */
    private Integer processDefinitionType;
    private Integer formType;
    /**
     *
     * 流程实例状态 @see {@link com.dragon.flow.enm.flowable.runtime.ProcessStatusEnum}
     */
    private String processStatus;
    /**
     * 翻译后的流程实例状态名称
     */
    private String processStatusName;
    /**
     * 任务类型 @see TaskCategoryEnum
     */
    private String taskType;
    /**
     * 0:待签收/1:已签收
     */
    private int status = 0;
    /**
     * 用户id
     */
    private String userId;
    /**
     * 用户姓名
     */
    private String userName;
    /**
     * 组id列表
     */
    private List<String> groupIds;
    /**
     * 是否结束
     */
    private Boolean finished = false;
    /**
     * 流程结束时间
     */
    @JsonFormat(timezone = "GMT+8",pattern="yyyy-MM-dd HH:mm:ss")
    private Date finishedTime;
    /**
     * 表单的名称
     */
    private String formName;
    /**
     * 流程创建人工号
     */
    private String startPersonCode;
    /**
     * 流程创建人姓名
     */
    private String startPersonName;
    /**
     * 流程的创建时间
     */
    @JsonFormat(timezone = "GMT+8",pattern="yyyy-MM-dd HH:mm:ss")
    private Date startTime;
    @JsonFormat(timezone = "GMT+8",pattern="yyyy-MM-dd HH:mm:ss")
    private Date endTime;
    /**
     * 系统名称
     */
    private String appName;
    /**
     * 流程总耗时
     */
    private String totalTime;
    /**
     * 业务系统的url
     */
    private String businessUrl;
    /**
     * 是否是检阅
     */
    private Boolean candidateFlag = false;
    /**
     * 消息类型0是待审批，1是待知会 参考TaskTypeEnum
     */
    private Integer type = 0;

    //当前办理人
    private String currentAssignees;

    //当前办理人工号
    private String currentAssigneeNos;
}
