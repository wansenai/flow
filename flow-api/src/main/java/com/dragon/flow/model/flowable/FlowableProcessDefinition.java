package com.dragon.flow.model.flowable;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * @program: flow
 * @description: flowable的流程定义持久化层
 * @author: Bruce.Liu
 * @create: 2021-03-27 00:55
 **/
@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName(value = "act_re_procdef")
public class FlowableProcessDefinition implements Serializable {
    private static final long serialVersionUID = 5506904133002719780L;
    @TableId(value = "id_")
    protected String id;
    @TableField(value = "name_")
    protected String name;
    @TableField(value = "category_")
    protected String category;
    @TableField(value = "deployment_id_")
    protected String deploymentId;
    @TableField(value = "key_")
    protected String key;
}
