package com.dragon.flow.vo.flowable.task;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

/**
 * @ClassName FlowNodeVo
 * @Description 流程节点信息
 * @Author bruce.liu
 * @Date 2021/05/06 18:15
 **/
@Data
public class FlowNodeVo implements Serializable {

    /**
     * 节点id
     */
    @ApiModelProperty(value = "节点id")
    private String nodeId;
    /**
     * 节点名称
     */
    @ApiModelProperty(value = "节点名称")
    private String nodeName;
    /**
     * 执行人的code
     */
    @ApiModelProperty(value = "执行人的工号")
    private String userCode;
    /**
     * 执行人姓名
     */
    @ApiModelProperty(value = "执行人姓名")
    private String userName;

    /**
     * 任务节点结束时间
     */
    @ApiModelProperty(value = "任务节点结束时间")
    private Date endTime;
    public FlowNodeVo(){}
    public FlowNodeVo(String nodeId, String nodeName, String userCode, Date endTime) {
        this.nodeId = nodeId;
        this.nodeName = nodeName;
        this.userCode = userCode;
        this.endTime = endTime;
    }
}
