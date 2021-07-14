package com.dragon.flow.vo.bpmndisgner.variable;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

/**
 * @author bruce.liu
 * @description 角色变量返回Vo对象
 * @date 2021/7/14 10:27
 */
@Data
public class RolelevelVariableVo implements Serializable {
    private String code;
    private String name;
    private List<VariableVo> variableVos;
}
