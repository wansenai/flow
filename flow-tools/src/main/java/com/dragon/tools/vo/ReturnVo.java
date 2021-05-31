package com.dragon.tools.vo;

import com.dragon.tools.common.ReturnCode;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Data;
import org.apache.commons.lang.StringUtils;

import java.io.Serializable;
import java.util.List;

/**
 * 返回vo
 *
 * @Title:
 * @Description:
 * @Author:bruce.liu
 * @Since:2021年04月23日 下午5:46:41
 * @Version:1.1.0
 */
@Data
@Builder
public class ReturnVo<T> implements Serializable {
    private static final long serialVersionUID = -5580228202640516960L;
    // 响应编码
    @ApiModelProperty(value = "响应编码 100成功 101失败", example = "100")
    private String code;
    // 响应消息
    @ApiModelProperty(value = "响应消息", example = "操作成功")
    private String msg;
    // 返回的vo
    @ApiModelProperty(value = "返回数据对象")
    private T data;

    public boolean isSuccess() {
        if (StringUtils.isNotBlank(code)
                && ReturnCode.SUCCESS.equals(code)){
            return true;
        }
        return false;
    }

    public ReturnVo() {
        super();
    }

    public ReturnVo(String code, String msg) {
        super();
        this.code = code;
        this.msg = msg;
    }

    public ReturnVo(String code, String msg, T data) {
        super();
        this.code = code;
        this.msg = msg;
        this.data = data;
    }
}