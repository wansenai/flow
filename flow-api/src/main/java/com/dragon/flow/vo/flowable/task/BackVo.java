package com.dragon.flow.vo.flowable.task;

import com.dragon.flow.vo.flowable.BaseProcessVo;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;

/**
 * @Description: 驳回的实体VO
 * @Author: Bruce.liu
 * @Since:9:19 2021/05/06
 */
@Data
@EqualsAndHashCode(callSuper = true)
@ApiModel(value = "BackVo", description = "驳回参数")
public class BackVo extends BaseProcessVo implements Serializable {

    private static final long serialVersionUID = -7106355442809450042L;
    /**
     * 需要驳回的节点id 必填
     */
    @ApiModelProperty(value = "需要驳回的节点id", required = true)
    private String distFlowElementId;

}
