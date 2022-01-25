package com.dragon.tools.pager;

import lombok.Builder;
import lombok.Data;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * @Description 分页
 * @Author:bruce.liu
 * @Since:2021年04月23日 下午5:46:41
 * @Param
 * @return
 **/
@Data
@Builder(toBuilder = true)
public class PagerModel<T> implements Serializable {
    private static final long serialVersionUID = 4804053559968742915L;
    /**
     * 总记录数
     */
    private long total;
    /**
     * 每页的查询结果集
     */
    private List<T> rows = new ArrayList();

    public PagerModel() {
    }

    public PagerModel(long total, List<T> rows) {
        this.total = total;
        this.rows = rows;
    }

}
