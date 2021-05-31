package com.dragon.flow.model.flowable;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;
import java.util.Date;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-06 13:56
 **/
@Data
@EqualsAndHashCode()
@TableName("act_ru_actinst")
public class FlowableActRuActinst implements Serializable {
    @TableId(value = "ID_")
    private String id;
    @TableField(value = "REV_")
    private Integer rev;
    @TableField(value = "PROC_DEF_ID_")
    private String procDefId;
    @TableField(value = "PROC_INST_ID_")
    private String procInstId;
    @TableField(value = "EXECUTION_ID_")
    private String executionId;
    @TableField(value = "ACT_ID_")
    private String actId;
    @TableField(value = "TASK_ID_")
    private String taskId;
    @TableField(value = "CALL_PROC_INST_ID_")
    private String callProcInstId;
    @TableField(value = "ACT_NAME_")
    private String actName;
    @TableField(value = "ACT_TYPE_")
    private String actType;
    @TableField(value = "ASSIGNEE_")
    private String assignee;
    @TableField(value = "START_TIME_")
    private Date startTime;
    @TableField(value = "END_TIME_")
    private Date endTime;
    @TableField(value = "DURATION_")
    private String duration;
    @TableField(value = "TRANSACTION_ORDER_")
    private Integer transactionOrder;
    @TableField(value = "DELETE_REASON_")
    private String deleteReason;
    @TableField(value = "TENANT_ID_")
    private String tenantId;
}
