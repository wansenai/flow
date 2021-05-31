package com.dragon.tools.vo;

import java.util.List;

/**
 * @Author:bruce.liu
 * @Since:2021年04月23日 下午5:46:41
 */
public class ComTree {
    private String id;
    private String name;
    private String pid;
    private List<ComTree> children;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPid() {
        return pid;
    }

    public void setPid(String pid) {
        this.pid = pid;
    }

    public List<ComTree> getChildren() {
        return children;
    }

    public void setChildren(List<ComTree> children) {
        this.children = children;
    }

    @Override
    public String toString() {
        return "ComTree [id=" + id + ", name=" + name + ", pid=" + pid + ", children=" + children + "]";
    }
}