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
 * 字段项管理类
 *
 * @author bruce.liu
 * @date 2021-10-24 12:02:34
 */
@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@TableName(value = "tbl_base_dic_item")
public class DicItem extends BaseModel implements Serializable{
    private static final long serialVersionUID = 1431113910319112679L;
    /**
     * 主键
     */
    @TableId(type = IdType.ASSIGN_UUID)
    private String id;
    /**
     * 编码
     */
    private String code;
    /**
     * 中文
     */
    private String cname;
    /**
     * 英文
     */
    private String ename;
    /**
     * 主表id
     */
    private String mainId;
    /**
     * 排序号
     */
    private Integer orderNo;
}
