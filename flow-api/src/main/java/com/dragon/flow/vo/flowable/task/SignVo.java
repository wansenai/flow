package com.dragon.flow.vo.flowable.task;

import com.dragon.flow.vo.flowable.BaseProcessVo;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;
import java.util.List;

/**
 * @Description: 加签参数
 * @Author: Bruce.liu
 * @Since:10:40 2021/05/06
 */
@Data
@EqualsAndHashCode(callSuper = true)
@ApiModel(value = "SignVo", description = "加签参数")
public class SignVo extends BaseProcessVo implements Serializable {
    private static final long serialVersionUID = 59705773943602254L;
    /**
     * 加签人
     */
    @ApiModelProperty(value = "加签人")
    private String signPerson;

    /**
     * 被加签人
     */
    /**
     * 加签人
     */
    @ApiModelProperty(value = "被加签人")
    private List<String> signPersoneds;
}
