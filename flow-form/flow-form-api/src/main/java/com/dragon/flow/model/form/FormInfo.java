package com.dragon.flow.model.form;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.dragon.tools.common.BaseModel;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;

/**
 * @author admin
 */
@Data
@EqualsAndHashCode(callSuper = true)
@TableName(value = "tbl_form_form_info")
public class FormInfo extends BaseModel implements Serializable {
    /**
     * 主键
     */
    @TableId(type = IdType.ASSIGN_UUID)
    private String id;
    /**
     * 分类编码
     */
    private String categoryCode;

    /**
     * 表单标题
     */
    private String title;
    /**
     * 编码
     */
    private String code;
    /**
     * 名称
     */
    private String name;
    /**
     * html内容
     */
    private String content;
    /**
     * 发布状态（1：草稿；2：待发布；3：已发布；4：停用）
     *
     * @see com.dragon.flow.enm.form.ModelFormStatusEnum
     */
    private Integer formStatus;
    /**
     * 版本号
     */
    private String version;
    /**
     * form的配置json信息 数据库存放json字段
     */
    private String formJson;
}
