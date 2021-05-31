package com.dragon.flow.service.org;

import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.org.Personal;
import com.dragon.flow.model.org.PositionInfo;
import com.dragon.flow.model.org.PositionSeq;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.vo.org.OrgTreeVo;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import com.dragon.tools.vo.ReturnVo;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-27
 */
public interface IPositionInfoService extends IService<PositionInfo> {
    /**
     * 得到岗位树
     * @return
     */
    List<OrgTreeVo> getPositionTree() ;
    /**
     * 添加或者修改
     * @param positionInfo positionInfo
     * @param loginUser loginUser
     */
    void saveOrUpdate(PositionInfo positionInfo, User loginUser) ;

    /**
     * 通过id删除
     * @param id id
     * @return
     */
    ReturnVo<String> deleteById(String id) ;

    PagerModel<PositionInfo> getPagerModelByWrapper(PositionInfo positionInfo, Query query);

    /**
     * 批量保存岗位序列和岗位
     * @param positionSeq 岗位序列
     * @param positionInfos 岗位信息
     * @param loginUser 登录用户
     */
    void batchSaveOrUpdatePositionSeqAndPosition(PositionSeq positionSeq, List<PositionInfo> positionInfos, User loginUser) ;
}
