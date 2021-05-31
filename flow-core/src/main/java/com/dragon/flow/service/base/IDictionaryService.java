package com.dragon.flow.service.base;

import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.base.Dictionary;
import com.dragon.flow.model.privilege.User;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import com.dragon.tools.vo.ReturnVo;

/**
 * <p>
 * 服务类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-03-29
 */
public interface IDictionaryService extends IService<Dictionary> {
    /**
     * 分页查询列表
     *
     * @param dictionary 条件
     * @param query      分页参数
     * @return
     */
    PagerModel<Dictionary> getPagerModelByWrapper(Dictionary dictionary, Query query);

    /**
     * 添加或修改
     * @param dictionary 实体
     * @param loginUser 登录账号
     */
    void saveOrUpdate(Dictionary dictionary, User loginUser) ;

    /**
     * 删除实体
     *
     * @param ids 实体ids
     * @return
     */
    ReturnVo<String> deleteByIds(String... ids);
}
