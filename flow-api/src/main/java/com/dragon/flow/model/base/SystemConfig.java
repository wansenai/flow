package com.dragon.flow.model.base;


import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.dragon.tools.common.BaseModel;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;

/**
 * @author bruce.liu
 * @Comment:系统配置表
 * @Create Date 2021年3月26日
 */
@Data
@EqualsAndHashCode(callSuper = true)
@TableName(value = "tbl_base_system_config")
public class SystemConfig extends BaseModel implements Serializable{
    private static final long serialVersionUID = -5265923376381163806L;
    // id
    @TableId(type = IdType.ASSIGN_UUID)
    private String id;
    // 配置名称
    private String configName;
    // 配置SN
    private String configSn;
    // 配置key
    private String configKey;
    // 配置key的value值
    private String configValue;
    //排序
    private int configOrder;
    // 备注
    private String remark;
    //图片
    private byte[] image;
}
