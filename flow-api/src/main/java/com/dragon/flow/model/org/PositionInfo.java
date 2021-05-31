package com.dragon.flow.model.org;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.dragon.tools.common.BaseModel;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @program: flow
 * @description: 岗位信息
 * @author: Bruce.Liu
 * @create: 2021-04-27 14:05
 **/
@Data
@EqualsAndHashCode(callSuper = true)
@TableName(value = "tbl_org_position_info")
public class PositionInfo extends BaseModel implements Serializable {
    @TableId(type = IdType.ASSIGN_UUID)
    private String id;
    //编码
    private String code;
    //岗位Id
    private String positionSeqId;
    //岗位code
    private String positionSeqCode;
    //名称
    private String name;
    //排序号
    private int orderNo;
    //状态 1启用  0未启用
    private int status;
    //直接上级编码
    private String superiorCode;
    //启动时间
    @JsonFormat(timezone = "GMT+8",pattern="yyyy-MM-dd")
    private Date startDate;
    @TableField(exist = false)
    private String superiorName;
    @TableField(exist = false)
    private String positionSeqName;
    @TableField(exist = false)
    private String companyName;
    @TableField(exist = false)
    private String deptName;


    /*public void setStartDate(String startDate) {
        // 这里根据你的时间格式选择
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        try {
            this.startDate = dateFormat.parse(startDate);
        } catch (ParseException e) {
            this.startDate = null;
        }
    }
    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }*/
}
