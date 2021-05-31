package com.dragon.flow.model.org;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.dragon.tools.common.BaseModel;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;

/**
 * @program: flow
 * @description: 岗位序列
 * @author: Bruce.Liu
 * @create: 2021-04-27 13:38
 **/
@Data
@EqualsAndHashCode(callSuper = true)
@TableName(value = "tbl_org_position_seq")
public class PositionSeq extends BaseModel implements Serializable {
    @TableId(type = IdType.ASSIGN_UUID)
    private String id;
    //编码
    private String code;
    //名称
    private String name;
    //父编码
    private String pid;
    //状态 1启用 0未启用
    private Integer status;
    //排序
    private Integer orderNo;
    //备注
    private String note;

}
