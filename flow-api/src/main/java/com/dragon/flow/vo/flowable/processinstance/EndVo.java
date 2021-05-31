package com.dragon.flow.vo.flowable.processinstance;

import com.dragon.flow.vo.flowable.BaseProcessVo;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * @Description: 终止VO
 * @Author: Bruce.liu
 * @Since:11:14 2021/05/11
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class EndVo extends BaseProcessVo {
    /**
     * 流程实例id
     */
    private String processInstanceId;
}
