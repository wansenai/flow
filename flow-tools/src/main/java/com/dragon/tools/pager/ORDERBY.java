package com.dragon.tools.pager;

/**
 * @author bruce.liu
 * @Description 排序的enum
 * @time 2021年4月16日
 */
public enum ORDERBY {
    DESC, ASC;

    public ORDERBY reverse() {
        return (this == ASC) ? DESC : ASC;
    }
}
