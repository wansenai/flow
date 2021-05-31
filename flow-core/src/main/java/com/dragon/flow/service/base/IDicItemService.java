package com.dragon.flow.service.base;

import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.base.Category;
import com.dragon.flow.model.base.DicItem;
import com.dragon.flow.model.base.Dictionary;
import com.dragon.flow.model.privilege.User;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import com.dragon.tools.vo.ReturnVo;

import java.util.List;

/**
 * <p>
 * 服务类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-03-29
 */
public interface IDicItemService extends IService<DicItem> {

    /**
     * 查询字典项通过主表id
     * @param mainId 主表id
     * @return
     */
    List<DicItem> getDicItemsByMainId(String mainId) ;
    /**
     * 分页查询列表
     *
     * @param dicItem 条件
     * @param query   分页参数
     * @return
     */
    PagerModel<DicItem> getPagerModelByWrapper(DicItem dicItem, Query query);

    /**
     * 添加或修改
     * @param dicItem 实体
     * @param loginUser 登录账号
     */
    void saveOrUpdate(DicItem dicItem, User loginUser) ;

    /**
     * 删除实体
     *
     * @param ids 实体ids
     * @return
     */
    ReturnVo<String> deleteByIds(String... ids);
}
