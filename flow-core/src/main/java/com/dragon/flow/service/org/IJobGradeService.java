package com.dragon.flow.service.org;

import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.org.JobGrade;
import com.dragon.flow.model.org.JobGradeType;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.vo.org.OrgTreeVo;
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
public interface IJobGradeService extends IService<JobGrade> {
    /**
     * 得到职级和职级分类组装的树
     * @return
     */
    List<OrgTreeVo> getJobGradeTree() ;

    /**
     * 通过id删除
     * @param id id
     * @return
     */
    ReturnVo<String> deleteById(String id) ;

    /**
     * 添加或者修改
     * @param jobGrade jobGrade
     * @param loginUser loginUser
     */
    void saveOrUpdate(JobGrade jobGrade, User loginUser) ;

    /**
     * 批量保存职级分类和职级信息
     * @param jobGradeType 职级分类
     * @param jobGrades 职级
     */
    void batchSaveOrUpdateJobGradeTypeAndJobGrade(JobGradeType jobGradeType, List<JobGrade> jobGrades, User loginUser) ;
}
