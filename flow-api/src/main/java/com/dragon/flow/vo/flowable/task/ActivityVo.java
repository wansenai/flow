package com.dragon.flow.vo.flowable.task;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

/**
 * ActivityVo
 *
 * @author bruce.liu
 * @date 2021/05/10 14:12
 */
@Data
public class ActivityVo implements Serializable {

    private String id;//taskId
    private double x;//x坐标
    private double y;//y坐标
    private double width;//宽度
    private double height;//高度
    private String documentation;//说明
    private String description;//描述
    private String name;//名称
    private String approver;//审批人
    private String type;//类型
    private String nodeType;//节点类型
    private String status;//节点状态
    @JsonFormat(timezone = "GMT+8",pattern="yyyy-MM-dd HH:mm:ss")
    private Date startDate;//开始时间
    @JsonFormat(timezone = "GMT+8",pattern="yyyy-MM-dd HH:mm:ss")
    private Date endDate;//结束时间
    private String duration;//耗时
    private String approverNo;//审批人工号
    private String proceInsId;//流程实例id
    private String proceDefId;//定义id
    private String taskDefKey;//节点id
}
