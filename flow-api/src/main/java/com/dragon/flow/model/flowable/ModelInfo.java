package com.dragon.flow.model.flowable;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.dragon.tools.common.BaseModel;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;
import java.util.List;

/**
 * 模型扩展信息
 *
 * @author admin
 * @date 2021-03-11 17:06:44
 */
@Data
@EqualsAndHashCode(callSuper = true)
@TableName("tbl_flow_model_info")
public class ModelInfo extends BaseModel implements Serializable {

    private static final long serialVersionUID = -974572277155384236L;
    /**
     * 主键
     */
    @TableId(type = IdType.ASSIGN_UUID)
    private String id;
    /**
     * 模型id
     */
    private String modelId;
    /**
     * 模型名
     */
    private String name;
    /**
     * 模型key
     */
    private String modelKey;
    /**
     * 模型类型: 0 自定义流程 1是业务流程 2是任务流程
     */
    private Integer modelType;

    /**
     * 系统标识
     */
    private String appSn;
    //应用名称
    @TableField(exist = false)
    private String appName;
    /**
     * 分类编码
     */
    private String categoryCode;
    //分类名称
    @TableField(exist = false)
    private String categoryName;
    /**
     * 模型发布状态（1：草稿；2：待发布；3：已发布；4：停用）
     * 流程图Model状态 {@link com.dragon.flow.enm.form.ModelFormStatusEnum}
     */
    private Integer status;
    @TableField(exist = false)
    private String statusName;
    /**
     * 拓展信息 状态
     * {@link com.dragon.flow.enm.form.ModelFormStatusEnum}
     */
    private Integer extendStatus;
    @TableField(exist = false)
    private String extendStatusName;
    /**
     * 所属部们id
     */
    private String ownDeptId;
    /**
     * 所属部门名称
     */
    private String ownDeptName;
    /**
     * 流程拥有者ID
     */
    private String flowOwnerNo;
    /**
     * 流程拥有者名称
     */
    private String flowOwnerName;
    /**
     * 流程对接人工号
     */
    private String processDockingNo;
    /**
     * 流程对接人名称
     */
    private String processDockingName;
    /**
     * 适用公司(多个公司，以逗号隔开)
     */
    private String applyCompanyId;
    /**
     * 流程中心是否显示 1 是 0 否
     */
    private Integer showStatus;
    /**
     * 适用范围 @see ModelAppliedRangeEnum
     */
    private Integer appliedRange;
    /**
     * 业务表单的URL
     */
    private String businessUrl;
    /**
     * 功能范围
     * {@link com.dragon.flow.enm.form.FlowAuthorizeRange}
     */
    private String functionRange;
    /**
     * 排序
     */
    private Integer orderNo;

    /**
     * 授权用户ids
     */
    @TableField(exist = false)
    private String userIds;
    @TableField(exist = false)
    private List<String> categoryCodes;
    /**
     * 授权用户名称
     */
    @TableField(exist = false)
    private String userNames;
    /**
     * 流程定义ID
     */
    @TableField(exist = false)
    private String processDefinitionId;
    /**
     * flowable的model类型
     * MODEL_TYPE_BPMN = 0;
     * MODEL_TYPE_FORM = 2;
     * MODEL_TYPE_APP = 3;
     * MODEL_TYPE_DECISION_TABLE = 4;
     * MODEL_TYPE_CMMN = 5;
     * MODEL_TYPE_DECISION_SERVICE = 6;
     */
    @TableField(exist = false)
    private Integer flowableModelType;
    /**
     * 功能点列表
     */
//    private List<AuthModelpoint> authModelpoints;

}
