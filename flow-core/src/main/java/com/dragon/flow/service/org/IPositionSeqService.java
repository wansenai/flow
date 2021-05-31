package com.dragon.flow.service.org;

import com.dragon.flow.model.org.JobGrade;
import com.dragon.flow.model.org.PositionSeq;
import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.privilege.User;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import com.dragon.tools.vo.ReturnVo;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-27
 */
public interface IPositionSeqService extends IService<PositionSeq> {
    /**
     * 分页获取岗位序列
     * @param positionSeq 参数
     * @param query 分页参数
     * @return
     */
    PagerModel<PositionSeq> getPagerModel(PositionSeq positionSeq, Query query) ;
    /**
     * 添加或者修改
     * @param positionSeq positionSeq
     * @param loginUser loginUser
     */
    void saveOrUpdate(PositionSeq positionSeq, User loginUser) ;

    /**
     * 通过id删除
     * @param id id
     * @return
     */
    ReturnVo<String> deleteById(String id) ;
}
