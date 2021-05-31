package com.dragon.flow.model.base;


import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.dragon.tools.common.BaseModel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * 字段类别管理类
 *
 * @author bruce.liu
 * @date 2021-10-24 12:02:34
 */

@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@TableName(value = "tbl_base_dic_type")
public class DicType extends BaseModel implements Serializable {
    private static final long serialVersionUID = 7293925416536491964L;
    /**
     *
     */
    @TableId(type = IdType.ASSIGN_UUID)
    private String id;
    /**
     * 名称
     */
    private String name;
    /**
     * 父节点id
     */
    private String pid;
    /**
     * 简称 code
     */
    private String code;
    /**
     * 排序
     */
    private Integer orderNo;
}
