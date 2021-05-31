package com.dragon.flow.vo.flowable.processinstance;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;

/**
 * QueryParamsVo
 *
 * @author bruce.liu
 * @date 2017/4/11 15:03
 * @Copyright:Copyright (c) 杭州蘑菇加电子商务有限公司 2016 ~ 2020 版权所有
 */
@Data
@ApiModel(value = "InstanceQueryParamsVo", description = "查询流程实例的参数")
public class InstanceQueryParamsVo implements Serializable {
    /**
     * 用户的工号
     */
    @ApiModelProperty(value = "用户的工号")
    private String userCode;
    /**
     * 应用标识
     */
    @ApiModelProperty(value = "应用标识")
    private String appSn;
    /**
     * 开始时间
     */
    @ApiModelProperty(value = "开始时间")
    private String startTime;
    /**
     * 结束时间
     */
    @ApiModelProperty(value = "结束时间")
    private String endTime;
    /**
     * 业务系统的id
     */
    @ApiModelProperty(value = "业务系统的id")
    private String businessKey;
    /**
     * 排序字段 1 升序  0 降序
     */
    @ApiModelProperty(value = "排序字段 1 升序  0 降序")
    private Integer orderFlag = 0;
    /**
     * 流程实例ID
     */
    @ApiModelProperty(value = "流程实例ID")
    private String processInstanceId;

    /**
     * 发起人工号集合
     */
    @ApiModelProperty(value = "发起人工号集合")
    private String startedUserIds;
    /**
     * 流程定义KEY
     */
    @ApiModelProperty(value = "流程定义KEY")
    private String processDefinitionKey;
    /**
     * 流程状态
     */
    @ApiModelProperty(value = "流程状态")
    private String processType;

    /**
     * 发起人所在部门ID
     * @return
     */
    @ApiModelProperty(value = "发起人所在部门ID")
    private String deptId;
    /**
     * 发起人所在公司ID
     * @return
     */
    @ApiModelProperty(value = "发起人所在公司ID")
    private String companyId;
    @ApiModelProperty(value = "查询关键字")
    private String keyword;
}
