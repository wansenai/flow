package com.dragon.flow.vo.bpmndisgner.variable;

import lombok.Builder;
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
    //表达式前缀
    private String prefix;
    //表达式函数
    private String function;
    //备注
    private String remark;

    public VariableVo() {
    }

    public VariableVo(String prefix, String name, String code) {
        this.prefix = prefix;
        this.name = name;
        this.code = code;
    }

    public VariableVo(String prefix, String name, String code, String remark) {
        this.prefix = prefix;
        this.name = name;
        this.code = code;
        this.remark = remark;
    }
}
