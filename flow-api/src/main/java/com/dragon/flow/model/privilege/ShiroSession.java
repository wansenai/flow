package com.dragon.flow.model.privilege;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * @program: flow
 * @description: shrio的session
 * @author: Bruce.Liu
 * @create:  Date 2021年04月20日
 **/
@Data
@TableName(value = "tbl_shiro_session")
@AllArgsConstructor
@NoArgsConstructor
public class ShiroSession implements Serializable {
    private static final long serialVersionUID = -9121138793555005755L;
    //sessionId
    @TableId(type = IdType.INPUT)
    private String id;
    private String session;
}
