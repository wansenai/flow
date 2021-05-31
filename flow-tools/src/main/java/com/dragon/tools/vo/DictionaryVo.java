package com.dragon.tools.vo;

import java.io.Serializable;

/**
 * 数据字典vo
 *
 * @Title:
 * @Description:
 * @Author:bruce.liu
 * @Since:2021年04月23日 下午5:46:41
 * @Version:1.1.0
 */
public class DictionaryVo implements Serializable {

    /**
     *
     */
    private static final long serialVersionUID = -5530995491150505068L;

    /**
     * 名称
     */
    private String name;

    /**
     * 编码
     */
    private String code;

    /**
     * 标识
     */
    private String sn;

    /**
     * 备注
     */
    private String remark;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public String getSn() {
        return sn;
    }

    public void setSn(String sn) {
        this.sn = sn;
    }

    @Override
    public String toString() {
        return "DictionaryVo [name=" + name + ", com.dragon.agile=" + code + ", sn=" + sn + ", remark=" + remark + "]";
    }

}
