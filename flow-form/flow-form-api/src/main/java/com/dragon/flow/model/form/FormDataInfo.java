package com.dragon.flow.model.form;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.dragon.tools.common.BaseModel;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;

/**
 *   @author bruce.liu
 *  @Comment:系统信息
 *  @Create  Date 2023年02月19日
 *
 */
@Data
@EqualsAndHashCode(callSuper = true)
@TableName(value = "tbl_form_datainfo")
public class FormDataInfo extends BaseModel implements Serializable {
    @TableId(type = IdType.ASSIGN_UUID)
    private String id;
    /**
     * 流程定义key
     */
    private String modelKey;
    /**
     * 业务单据id
     */
    private String businessKey;
    /**
     * 状态 草稿 已提交 已完成 撤回
     */
    private String status;
    /**
     * 流程实例id
     */
    private String processInstanceId;
    /**
     * 表单数据
     */
    private String formData;
}
