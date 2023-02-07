package com.dragon.flow.model.flowable;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import com.dragon.tools.common.BaseModel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

/**
 * @author bruce.liu
 * @description 流程监听器
 * @date 2021/6/18 22:47
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName(value = "tbl_flow_listener")
public class FlowListener extends BaseModel implements Serializable {
    public static final String TYPE_CLASS = "class";
    public static final String TYPE_EXPRESSION = "expression";
    public static final String TYPE_DELEGATEEXPRESSION = "delegateExpression";
    public static final String LISTENER_TYPE_TASK = "taskListener";
    public static final String LISTENER_TYPE_EXECUTION = "executionListener";

    //主键
    private String id;
    //类型 java 表达式  代理表达式
    private String type;
    //名称
    private String name;
    //监听器类型  任务监听还是执行监听
    private String listenerType;
    //值
    private String value;
    //备注
    private String remark;
    // 排序号
    private Integer orderNo;
    @TableField(exist = false)
    private List<FlowListenerParam> flowListenerParamList;
}
