package com.dragon.flow.model.base;

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
 * 区域信息类
 * @author admin
 * @date 2018-11-22 16:34:25
 */
@Data
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
@TableName(value = "tbl_base_area")
public class Area extends BaseModel implements Serializable {
    private static final long serialVersionUID = -6156873987978733973L;
    /**
     * 编码
     */
    @TableId
    private String code;
    /**
     * 父编码
     */
    private String pcode;
    /**
     * 名称
     */
    private String name;

    @TableField(exist = false)
    protected String keyword;
}
