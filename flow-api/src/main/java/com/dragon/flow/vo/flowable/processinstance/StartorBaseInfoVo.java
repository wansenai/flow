package com.dragon.flow.vo.flowable.processinstance;

import com.alibaba.fastjson.JSONObject;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

/**
 * @title: 返回启动流程信息vo
 * @author: bruce.liu
 * @since: 2023/2/23 17:33
 */
@Data
public class StartorBaseInfoVo implements Serializable {
    //流程实例id
    private String processInstanceId;
    //流程模板ModelKey
    private String modelKey;
    //流程模板名称
    private String modelName;
    //流程业务表单businessKey
    private String businessKey;
    //流程名称
    private String formName;
    //发起人信息
    private JSONObject starterInfo;
    //发起时间
    @JsonFormat(
            timezone = "GMT+8",
            pattern = "yyyy-MM-dd HH:mm:ss"
    )
    private Date createTime;
}
