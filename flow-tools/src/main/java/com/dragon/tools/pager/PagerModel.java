package com.dragon.tools.pager;

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
public class PagerModel<T> implements Serializable {
    private static final long serialVersionUID = 4804053559968742915L;
    private long total;
    private List<T> data = new ArrayList();

    public PagerModel() {
    }

    public PagerModel(long total, List<T> data) {
        this.total = total;
        this.data = data;
    }

}
