package com.dragon.flow.service.org;

import com.dragon.flow.model.org.JobGrade;
import com.dragon.flow.model.org.JobGradeType;
import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.privilege.User;
import com.dragon.tools.vo.ReturnVo;

/**
 * <p>
 * 职级分类 服务类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-27
 */
public interface IJobGradeTypeService extends IService<JobGradeType> {
    /**
     * 添加或者修改
     * @param jobGradeType jobGradeType
     * @param loginUser loginUser
     */
    void saveOrUpdate(JobGradeType jobGradeType, User loginUser) ;

    /**
     * 通过id删除
     * @param id id
     * @return
     */
    ReturnVo<String> deleteById(String id) ;
}
