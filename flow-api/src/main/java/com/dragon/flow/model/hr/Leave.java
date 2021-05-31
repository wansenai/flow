package com.dragon.flow.model.hr;

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
    private LocalDateTime startTime;
    //结束时间
    private LocalDateTime endTime;
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
