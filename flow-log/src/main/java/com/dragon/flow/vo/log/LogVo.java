package com.dragon.flow.vo.log;

import com.dragon.flow.enm.SourceEnum;
import lombok.Data;

import java.io.Serializable;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-13 16:41
 **/
@Data
public class LogVo implements Serializable {
    private static final long serialVersionUID = -1308182223370019328L;
    private String code;
    private String name;
    private SourceEnum sourceEnum;
}
