package com.dragon.flow.model.log;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;

/**
 * @program: prodflow
 * @description: 系统操作日志
 * @author: Bruce.Liu
 * @create: 2021-04-30 09:36
 **/
@Data
@Builder
@TableName("tbl_sys_oper_record")
@NoArgsConstructor
@AllArgsConstructor
public class SysOperRecord implements Serializable {
    @TableId(type = IdType.ASSIGN_UUID)
    private String id;
    private String userCode;
    private String userName;
    private String operContent;
    private String operType;
    /**
     * @see com.dragon.flow.enm.SourceEnum
     */
    private String source;
    @JsonFormat(timezone = "GMT+8",pattern="yyyy-MM-dd HH:mm:ss")
    private Date dateTime;
    private String ip;
    private String date;
    private Integer year;
    private Integer month;
    private Integer day;

    @JsonFormat(timezone = "GMT+8",pattern="yyyy-MM-dd HH:mm:ss")
    @TableField(exist = false)
    private Date startTime;

    @JsonFormat(timezone = "GMT+8",pattern="yyyy-MM-dd HH:mm:ss")
    @TableField(exist = false)
    private Date endTime;
}
