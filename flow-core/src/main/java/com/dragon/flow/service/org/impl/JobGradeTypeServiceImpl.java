package com.dragon.flow.service.org.impl;

import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.IdWorker;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.mapper.org.IJobGradeTypeMapper;
import com.dragon.flow.model.org.JobGradeType;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.service.org.IJobGradeTypeService;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.vo.ReturnVo;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;

import java.util.Date;

/**
 * <p>
 * 职级分类 服务实现类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-27
 */
@Service
public class JobGradeTypeServiceImpl extends ServiceImpl<IJobGradeTypeMapper, JobGradeType> implements IJobGradeTypeService {

    @Override
    public void saveOrUpdate(JobGradeType jobGradeType, User loginUser) {
        Date date = new Date();
        if (StringUtils.isNotBlank(jobGradeType.getId())){
            jobGradeType.setUpdateTime(date);
            jobGradeType.setUpdator(loginUser.getUserNo());
        } else {
            jobGradeType.setId(IdWorker.get32UUID());
            jobGradeType.setCreateTime(date);
            jobGradeType.setCreator(loginUser.getUserNo());
        }
        this.saveOrUpdate(jobGradeType);
    }

    @Override
    public ReturnVo<String> deleteById(String id) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        LambdaUpdateWrapper<JobGradeType> jobGradeTypeLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
        jobGradeTypeLambdaUpdateWrapper.set(JobGradeType::getDelFlag, FlowConstant.DEL_FLAG_0)
                .eq(JobGradeType::getId, id);
        this.update(jobGradeTypeLambdaUpdateWrapper);
        return returnVo;
    }
}
