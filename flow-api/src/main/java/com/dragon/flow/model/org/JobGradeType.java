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
 * @description: 职级分类
 * @author: Bruce.Liu
 * @create: 2021-04-27 13:57
 **/
@Data
@EqualsAndHashCode(callSuper = true)
@TableName(value = "tbl_org_job_grade_type")
public class JobGradeType extends BaseModel implements Serializable {
    private static final long serialVersionUID = -413180133121139683L;
    @TableId(type = IdType.ASSIGN_UUID)
    private String id;
    //编码
    private String code;
    // 名称
    private String name;
    //所属组织  如果为空是全局使用
    private String companyId;
    //状态 1是启用  0是未启用
    private Integer status;
    //排序
    private Integer orderNo;
    //备注
    private String note;
}
