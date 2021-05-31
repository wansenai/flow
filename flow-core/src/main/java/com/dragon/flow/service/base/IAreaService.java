package com.dragon.flow.service.base;

import com.dragon.flow.model.base.Area;
import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.privilege.User;
import com.dragon.tools.vo.ReturnVo;

import java.util.List;

/**
 * <p>
 * 区域信息 服务类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-14
 */
public interface IAreaService extends IService<Area> {

    /**
     * 获取所有的区域
     * @param area 参数
     * @return
     */
    List<Area> getAllArea(Area area);

    /**
     * 通过父Code获取区域列表
     * @param pcode 父Code
     * @return
     */
    List<Area> getAreasByPcode(String pcode) ;

    /**
     * 添加或者修改
     * @param area 实体
     * @param loginUser 登录用户
     */
    void saveOrUpdate(Area area, User loginUser);

    /**
     * 删除区域
     * @param codes 编码
     * @return
     */
    ReturnVo<String> deleteByCodes(String... codes);
}
