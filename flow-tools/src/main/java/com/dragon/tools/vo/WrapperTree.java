package com.dragon.tools.vo;

/**
 * @Author:bruce.liu
 * @Since:2021年04月23日 下午5:46:41
 */
public class WrapperTree {
    //id
    private String key;
    //pid
    private String parentKey;
    //children
    private String childrenKey;

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getParentKey() {
        return parentKey;
    }

    public void setParentKey(String parentKey) {
        this.parentKey = parentKey;
    }

    public String getChildrenKey() {
        return childrenKey;
    }

    public void setChildrenKey(String childrenKey) {
        this.childrenKey = childrenKey;
    }

}
