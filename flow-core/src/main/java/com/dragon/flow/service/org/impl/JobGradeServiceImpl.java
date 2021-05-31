package com.dragon.flow.service.org.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.IdWorker;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.mapper.org.IJobGradeMapper;
import com.dragon.flow.model.org.JobGrade;
import com.dragon.flow.model.org.JobGradeType;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.service.org.IJobGradeService;
import com.dragon.flow.service.org.IJobGradeTypeService;
import com.dragon.flow.vo.org.OrgTreeVo;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.vo.ReturnVo;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-27
 */
@Service
public class JobGradeServiceImpl extends ServiceImpl<IJobGradeMapper, JobGrade> implements IJobGradeService {
    @Autowired
    private IJobGradeTypeService jobGradeTypeService;

    @Override
    public List<OrgTreeVo> getJobGradeTree() {
        List<OrgTreeVo> orgTreeVos = new ArrayList<>();
        LambdaQueryWrapper<JobGradeType> jobGradeTypeLambdaQueryWrapper = new LambdaQueryWrapper<>();
        jobGradeTypeLambdaQueryWrapper.eq(JobGradeType::getDelFlag, FlowConstant.DEL_FLAG_1).orderByAsc(JobGradeType::getOrderNo);
        List<JobGradeType> jobGradeTypes = jobGradeTypeService.list(jobGradeTypeLambdaQueryWrapper);
        if (CollectionUtils.isNotEmpty(jobGradeTypes)){
            jobGradeTypes.forEach(jobGradeType -> {
                OrgTreeVo orgTreeVo = new OrgTreeVo();
                orgTreeVo.setId(jobGradeType.getId());
                orgTreeVo.setCode(jobGradeType.getCode());
                orgTreeVo.setName(jobGradeType.getName());
                orgTreeVo.setSourceType("1");
                orgTreeVos.add(orgTreeVo);
            });
        }
        Map<String, JobGradeType> jobGradeTypeMap = jobGradeTypes.stream().collect(Collectors.toMap(JobGradeType::getId, jobGradeType -> jobGradeType));
        LambdaQueryWrapper<JobGrade> jobGradeLambdaQueryWrapper = new LambdaQueryWrapper<>();
        jobGradeLambdaQueryWrapper.eq(JobGrade::getDelFlag, FlowConstant.DEL_FLAG_1).orderByAsc(JobGrade::getOrderNo);
        List<JobGrade> jobGrades = this.list(jobGradeLambdaQueryWrapper);
        if (CollectionUtils.isNotEmpty(jobGrades)){
            jobGrades.forEach(jobGrade -> {
                OrgTreeVo orgTreeVo = new OrgTreeVo();
                orgTreeVo.setId(jobGrade.getId());
                JobGradeType jobGradeType = jobGradeTypeMap.get(jobGrade.getTypeId());
                if (jobGradeType != null) {
                    orgTreeVo.setPid(jobGradeType.getId());
                }
                orgTreeVo.setCode(jobGrade.getCode());
                orgTreeVo.setName(jobGrade.getName());
                orgTreeVo.setSourceType("2");
                orgTreeVos.add(orgTreeVo);
            });
        }
        return orgTreeVos;
    }

    @Override
    public ReturnVo<String> deleteById(String id) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        LambdaUpdateWrapper<JobGrade> jobGradeLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
        jobGradeLambdaUpdateWrapper.set(JobGrade::getDelFlag, FlowConstant.DEL_FLAG_0)
                .eq(JobGrade::getId, id);
        this.update(jobGradeLambdaUpdateWrapper);
        return returnVo;
    }

    @Override
    public void saveOrUpdate(JobGrade jobGrade, User loginUser) {
        Date date = new Date();
        if (StringUtils.isNotBlank(jobGrade.getId())){
            jobGrade.setUpdateTime(date);
            jobGrade.setUpdator(loginUser.getUserNo());
        } else {
            jobGrade.setId(IdWorker.get32UUID());
            jobGrade.setCreateTime(date);
            jobGrade.setCreator(loginUser.getUserNo());
        }
        this.saveOrUpdate(jobGrade);
    }

    @Override
    public void batchSaveOrUpdateJobGradeTypeAndJobGrade(JobGradeType jobGradeType, List<JobGrade> jobGrades, User loginUser) {
        String userNo = loginUser.getUserNo();
        Date date = new Date();
        jobGradeType.setCreateTime(date);
        jobGradeType.setCreator(userNo);
        jobGradeTypeService.saveOrUpdate(jobGradeType);
        if (CollectionUtils.isNotEmpty(jobGrades)){
            jobGrades.forEach(jobGrade -> {
                jobGrade.setId(IdWorker.get32UUID());
                jobGrade.setTypeCode(jobGradeType.getCode());
                jobGrade.setTypeId(jobGradeType.getId());
                jobGrade.setCreateTime(date);
                jobGrade.setCreator(userNo);
            });
            this.saveOrUpdateBatch(jobGrades);
        }
    }
}
