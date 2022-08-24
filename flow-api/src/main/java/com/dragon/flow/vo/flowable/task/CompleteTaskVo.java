package com.dragon.flow.vo.flowable.task;

import com.dragon.flow.vo.extension.usertask.NextSequenceUserVo;
import com.dragon.flow.vo.flowable.BaseProcessVo;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

/**
 * @ClassName CompleteTaskVo
 * @Description 执行任务VO
 * @Author bruce.liu
 * @Date 2021/05/6/006 22:16
 * @Version 1.0
 **/
@Data
@EqualsAndHashCode(callSuper = true)
@ApiModel(value = "CompleteTaskVo", description = "审批参数")
public class CompleteTaskVo extends BaseProcessVo implements Serializable {

    private static final long serialVersionUID = -5583096980348786337L;
    /**
     * 流程标题 选填   只有在重新发起的时候才会修改表单标题
     */
    @ApiModelProperty(value = "流程标题")
    private String formTitle;
    /**
     * 任务参数 选填
     */
    @ApiModelProperty(value = "任务参数")
    private Map<String, Object> variables;
    /**
     * 下一条线
     */
    private NextSequenceUserVo nextSequenceFlow;
    /**
     * 下一个或多个审批人
     */
    private List<NextSequenceUserVo> nextUsers;
}
