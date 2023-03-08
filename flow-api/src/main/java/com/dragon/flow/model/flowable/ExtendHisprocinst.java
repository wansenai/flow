package com.dragon.flow.model.flowable;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.dragon.tools.common.BaseModel;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <p>
 * 
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-21
 */
@Data
@EqualsAndHashCode(callSuper = true)
@TableName("tbl_flow_extend_hisprocinst")
public class ExtendHisprocinst extends BaseModel {

    private static final long serialVersionUID = 1L;

    /**
     * 主键
     */
    @TableId(type = IdType.ASSIGN_UUID)
    private String id;

    /**
     * 流程实例id
     */
    private String processInstanceId;
    private String processDefinitionId;//流程定义id
    /**
     *  模型key
     */
    private String modelKey;
    /**
     * 业务单据id
     */
    private String businessKey;

    /**
     * 流程状态
     */
    private String processStatus;

    /**
     * 流程表单名称
     */
    private String processName;

    /**
     * 流程发起人
     */
    private String currentUserCode;

    /**
     * 租户id(系统标识)
     */
    private String tenantId;
    /**
     * 用户信息
     */
    private String userInfo;
    /**
     * 表单数据
     */
    private String formData;
    public ExtendHisprocinst(){}
    public ExtendHisprocinst(String processInstanceId, String processStatus) {
        this.processInstanceId = processInstanceId;
        this.processStatus = processStatus;
    }
}
