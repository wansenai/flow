package com.dragon.flow.model.hr;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.dragon.tools.common.BaseModel;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDateTime;
import java.util.Date;

/**
 * <p>
 * 
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-28
 */
@Data
@EqualsAndHashCode(callSuper = true)
@TableName("tbl_hr_leave")
public class Leave extends BaseModel {
    private static final long serialVersionUID = 1L;
    @TableId(value = "id", type = IdType.ASSIGN_UUID)
    private String id;
    //流程实例id
    private String processInstanceId;
    //申请人
    private String applyerCode;
    //标题
    private String title;
    //类型
    private String type;
    //请教天数
    private Float days;
    //开始时间
    @JsonFormat(timezone = "GMT+8",pattern="yyyy-MM-dd HH:mm")
    private Date startTime;
    //结束时间
    @JsonFormat(timezone = "GMT+8",pattern="yyyy-MM-dd HH:mm")
    private Date endTime;
    //公司id
    private String companyId;
    //公司名称
    private String companyName;
    //部门id
    private String deptId;
    //部门名称
    private String deptName;
    //说明
    private String note;


}
