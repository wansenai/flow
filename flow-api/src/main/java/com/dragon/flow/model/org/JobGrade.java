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
 * @description: 职级信息
 * @author: Bruce.Liu
 * @create: 2021-04-27 14:02
 **/
@Data
@EqualsAndHashCode(callSuper = true)
@TableName(value = "tbl_org_job_grade")
public class JobGrade extends BaseModel implements Serializable {
    private static final long serialVersionUID = -5184327416952063691L;
    @TableId(type = IdType.ASSIGN_UUID)
    private String id;
    //序列
    private String code;
    //分类code
    private String typeId;
    private String typeCode;
    //名称
    private String name;
    //排序号
    private int orderNo;
}
