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
 * 字典管理类
 *
 * @author bruce.liu
 * @date 2021-10-24 12:02:34
 */
@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@TableName(value = "tbl_base_dictionary")
public class Dictionary extends BaseModel implements Serializable{
    private static final long serialVersionUID = -2253698071485691448L;
    /**
     * 主键
     */
    @TableId(type = IdType.ASSIGN_UUID)
    private String id;
    /**
     * 数据字典id
     */
    private String dicTypeId;
    /**
     * 编码
     */
    private String code;
    /**
     * 英文名称
     */
    private String ename;
    /**
     * 中文名称
     */
    private String cname;
    /**
     * 备注
     */
    private String remark;
}
