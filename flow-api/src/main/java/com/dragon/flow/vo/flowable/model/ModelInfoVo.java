package com.dragon.flow.vo.flowable.model;

import io.swagger.annotations.ApiModel;
import lombok.Data;

import java.io.InputStream;
import java.io.Serializable;

/**
 * @program: flow
 * @description: 模型的VO
 * @author: Bruce.Liu
 * @create: 2021-04-20 21:25
 **/
@Data
@ApiModel(value = "ModelInfoVo", description = "查询模型对象返回对象")
public class ModelInfoVo implements Serializable {
    private static final long serialVersionUID = -2434943659168309903L;
    private String id;
    private String modelId;
    private String modelKey;
    private String modelName;
    private String fileName;
    private String modelXml;
    private String appSn;
    private String categoryCode;
}
