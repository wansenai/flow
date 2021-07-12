package com.dragon.flow.vo.bpmndisgner.variable;

import lombok.Data;

import java.io.Serializable;

/**
 * @author bruce.liu
 * @description 变量Vo
 * @date 2021/7/12 9:39
 */
@Data
public class VariableVo implements Serializable {
    //名称
    private String name;
    //变量编码
    private String code;
    //备注
    private String remark;
}
