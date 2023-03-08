package com.dragon.flow.service.org;

import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.org.Personal;
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
 * @since 2021-04-12
 */
public interface IPersonalService extends IService<Personal> {

    /**
     * 导入人员信息
     * @param personals 人员信息列表
     * @param loginUser 登录用户
     * @return
     */
    ReturnVo<Personal> importPersonals(List<Personal> personals, User loginUser);

    /**
     * 分页查询人员信息
     *
     * @param personal 人员参数
     * @param query    分页参数
     * @return
     */
    PagerModel<Personal> getPagerModelByWrapper(Personal personal, Query query);

    /**
     * 查询分页的人员信息
     *
     * @param personal  人员参数
     * @param query     分页参数
     * @param showRoles false不查询角色列表  true查询
     * @return
     */
    PagerModel<Personal> getPagerModelByWrapper(Personal personal, Query query, boolean showRoles);

    /**
     * 通过工号获取人员数据
     *
     * @param codes 工号列表
     * @return
     */
    List<Personal> getPersonalsByCodes(List<String> codes);

    /**
     * 角色id列表
     *
     * @param roleIds
     * @return
     */
    List<Personal> getPersonalsByRoleIds(List<String> roleIds);
    /**
     * 角色Sn列表
     *
     * @param roleSns
     * @return
     */
    List<Personal> getPersonalsByRoleSns(List<String> roleSns);
    /**
     * 通过工号获取人员数据
     *
     * @param code 工号
     * @return
     */
    Personal getPersonalByCode(String code);

    /**
     * 删除人员
     *
     * @param ids 人员id
     */
    void deleteByIds(List<String> ids);

    /**
     * 添加或者修改人员信息
     *
     * @param personal  人员
     * @param loginUser 登录用户
     */
    void saveOrUpdate(Personal personal, User loginUser);

    /**
     * 通过通过第三方用户ID获取用户对象
     * @param thirdUserId thirdUserId
     * @return
     */
    Personal getPersonalByThirdUserId(String thirdUserId);
}
