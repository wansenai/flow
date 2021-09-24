package com.dragon.flow.vo.extension.usertask;

import lombok.Data;

import java.io.Serializable;

/**
 * @author bruce.liu
 * @description 下一个线和用户的Vo
 * @date 2021/9/24 9:55
 * Copyright © 2021~2035
 */
@Data
public class NextSequenceUserVo implements Serializable {
    public static final String SEQUENCE_KEY = "sequence";
    public static final String USER_KEY = "user";
    /**
     * 编码
     */
    private String code;
    /**
     * 名称
     */
    private String name;
    /**
     * 是否单选  true多选  false单选
     */
    private boolean multiple;
    /**
     * 选择的值 多个人的code以逗号分割
     */
    private String values;
}
