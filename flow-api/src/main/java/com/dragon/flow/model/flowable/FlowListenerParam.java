package com.dragon.flow.model.flowable;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * @author bruce.liu
 * @description 监听器的值
 * @date 2021/6/18 23:00
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName(value = "tbl_flow_listener_param")
public class FlowListenerParam implements Serializable {
    public static final String TYPE_CLASS = "string";
    public static final String TYPE_EXPRESSION = "expression";

    private String id;
    private String listenerId;
    private String name;
    private String type;
    private String value;

}
