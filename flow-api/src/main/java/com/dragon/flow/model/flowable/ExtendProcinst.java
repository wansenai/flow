package com.dragon.flow.model.flowable;

import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.IdType;
import java.time.LocalDateTime;
import com.baomidou.mybatisplus.annotation.TableId;
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
@TableName("tbl_flow_extend_procinst")
public class ExtendProcinst extends BaseModel {

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
     * 业务单据id
     */
    private String businessKey;
    /**
     *  模型key
     */
    private String modelKey;

    /**
     * 流程表单名称
     */
    private String processName;
    /**
     * 流程状态
     */
    private String processStatus;

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
}
