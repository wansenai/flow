package com.dragon.flow.model.base;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.dragon.tools.common.BaseModel;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;

/**
 * @author bruce.liu
 * @Comment:系统信息
 * @Create  Date 2021年04月20日
 */
@Data
@EqualsAndHashCode(callSuper = true)
@TableName(value = "tbl_base_app")
public class App extends BaseModel implements Serializable {
    private static final long serialVersionUID = 1764369323000451544L;
    // id 32
    @TableId(type = IdType.ASSIGN_UUID)
    private String id;
    // 名称 20
    private String name;
    // 系统标示
    private String sn;
    //秘钥
    private String secretKey;
    //状态
    private Integer status;
    // 系统url前缀 30
    private String url;
    // 系统首页URL
    private String indexUrl;
    // 系统的图标 40
    private String image;
    // 系统备注 80
    private String note;
    // 排序号
    private Integer orderNo;
    //是否推送第三方平台 0 不推送  1  推送
    private Integer platformEnabled = 0;
}
