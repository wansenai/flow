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
 * @description: 组织同步映射关系
 * @author: Bruce.Liu
 * @create: 2021-04-16 00:25
 **/
@Data
@EqualsAndHashCode(callSuper = true)
@TableName(value = "tbl_org_data_sync_map")
public class DataSyncMap extends BaseModel implements Serializable {
    private static final long serialVersionUID = 8644146565488597996L;
    @TableId(type = IdType.ASSIGN_UUID)
    private String id;
    //同步对象的名称  如：公司 部门 人员  角色
    private String name;
    //同步的接口的url  rest接口
    private String url;
    //字段对应关系
    private String jsonMap;
}
