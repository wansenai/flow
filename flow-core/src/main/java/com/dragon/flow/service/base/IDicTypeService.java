package com.dragon.flow.service.base;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.base.Category;
import com.dragon.flow.model.base.DicType;
import com.dragon.flow.model.base.Dictionary;
import com.dragon.flow.model.privilege.User;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import com.dragon.tools.vo.ReturnVo;
import org.apache.commons.lang.StringUtils;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-03-29
 */
public interface IDicTypeService extends IService<DicType> {
    /**
     * 获取字典类型列表
     * @param dicType 参数
     * @return
     */
    List<DicType> getDicTypes(DicType dicType);
    /**
     * 分页查询列表
     * @param dicType 条件
     * @param query 分页参数
     * @return
     */
    PagerModel<DicType> getPagerModelByWrapper(DicType dicType, Query query);

    /**
     * 添加或修改
     * @param dicType 实体
     * @param loginUser 登录账号
     */
    void saveOrUpdate(DicType dicType, User loginUser) ;

    /**
     * 删除实体
     *
     * @param ids 实体ids
     * @return
     */
    ReturnVo<String> deleteByIds(List<String> ids);
}
