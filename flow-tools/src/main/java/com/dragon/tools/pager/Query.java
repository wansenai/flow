package com.dragon.tools.pager;

import lombok.Data;

import java.io.Serializable;
import java.util.Map;

/**
 * 功能描述：查询参数封装
 *
 * @author 刘文军(bruce.liu)
 * <p>
 * @Author:bruce.liu
 * @Since:2021年04月23日 下午5:46:41
 * 修改历史：(修改人，修改时间，修改原因/内容)
 * </p>
 */
@Data
public class Query implements Serializable {

    /**
     * serialVersionUID
     */
    private static final long serialVersionUID = 817880730448759944L;
    /**
     * 每页显示多少条
     */
    private int pageSize = 20;
    /**
     * 页码，从1开始
     */
    private int pageNum;
    /**
     * 排序 key是返回值的属性名 value是desc或者asc
     * 我们添加数据的时候最好用linkMap
     */
    private Map<String, ORDERBY> sqlOrderBy;

    /**
     * 排序的字段
     */
    private String sortField;
    /**
     * 正反排序 asc desc
     */
    private String sortOrder;

    public int getPageNum() {
        if (pageNum <= 0){
            pageNum = 1;
        }
        return pageNum;
    }

}
