package com.dragon.flow.vo.flowable.processinstance;

import com.dragon.flow.enm.flowable.runtime.ProcessStatusEnum;
import com.dragon.flow.vo.flowable.task.ApproverVo;
import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.annotations.ApiModel;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * 流程实例的VO
 *
 * @author liuwenjun1
 */
@Data
@ApiModel(value = "ProcessInstanceVo", description = "查询流程实例返回对象")
public class ProcessInstanceVo implements Serializable {
    private static final long serialVersionUID = -5038515846218363889L;
    public ProcessInstanceVo(){}
    public ProcessInstanceVo( String processInstanceId ,String businessKey, String formName, String startedUserId) {
        this.processInstanceId = processInstanceId;
        this.businessKey = businessKey;
        this.formName = formName;
        this.startedUserId = startedUserId;
    }
    /**
     * 流程实例id
     */
    private String processInstanceId;
    /**
     * 流程定义id
     */
    private String processDefinitionId;
    /**
     * 流程定义的名称
     */
    private String processDefinitionName;
    /**
     * 流程定义的key
     */
    private String processDefinitionKey;
    /**
     * 流程定义类型
     */
    private Integer processDefinitionType;
    /**
     * 表单类型
     */
    private Integer formType;
    /**
     * 流程定义的版本号
     */
    private Integer processDefinitionVersion;
    /**
     * 分类编号
     */
    private String categoryCode;
    /**
     * 部署id
     */
    private String deploymentId;
    /**
     * 业务表单的id
     */
    private String businessKey;
    /**
     * 办理人
     */
    private String assignees;
    /**
     * 应用id
     */
    private String appId;
    /**
     * 应用标识
     */
    private String appSn;
    /**
     * 创建时间
     */
    @JsonFormat(timezone = "GMT+8",pattern="yyyy-MM-dd HH:mm:ss")
    private Date createTime;
    /**
     * 挂起状态   1激活 2挂起   @see ProcessInstanceStatusEnum
     */
    private Boolean pState;
    /**
     * 删除标记
     */
    private String reason;
    /**
     * 创建人的id
     */
    private String startedUserId;
    /**
     * 创建人的名称
     */
    private String startedUserName;
    /**
     * 创建人ids
     */
    private List<String> startedUserIds;
    /**
     * 创建人部门
     */
    private String startedUserDept;
    /**
     * 创建人部门名称
     */
    private String startedUserDeptName;
    /**
     * 创建人单位
     */
    private String startedUserCom;
    /**
     * 创建人单位名称
     */
    private String startedUserComName;
    /**
     * 默认所有的
     */
    private Boolean finishFlag = false;
    /**
     *
     * 流程实例状态 @see {@link ProcessStatusEnum}
     */
    private String processStatus;
    /**
     * 翻译后的流程实例状态名称
     */
    private String processStatusName;
    /**
     * 表单的名称
     */
    private String formName;
    /**
     * 流程创建人姓名
     */
    private String startPersonName;
    /**
     * 流程的创建时间
     */
    @JsonFormat(timezone = "GMT+8",pattern="yyyy-MM-dd HH:mm:ss")
    private Date startTime;
    /**
     * 结束时间
     */
    @JsonFormat(timezone = "GMT+8",pattern="yyyy-MM-dd HH:mm:ss")
    private Date endTime;
    private String startTimeStr;
    private String endTimeStr;
    /**
     * 系统名称
     */
    private String appName;
    /**
     * 业务系统的url
     */
    private String businessUrl;
    /**
     * 总耗时
     */
    private String totalTime;
    /**
     * 当前办理人
     */
    private List<ApproverVo> currentAssignees;
    /**
     * 查询类型 1单位2部门3人员  复用： 1已发2已办3待办
     */
    private Integer queryType;
    private String newVersion;
    private List<String> proInstanceIdList;
    private String tableName;
}
