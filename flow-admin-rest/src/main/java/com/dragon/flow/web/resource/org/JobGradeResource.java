package com.dragon.flow.web.resource.org;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.model.org.JobGrade;
import com.dragon.flow.service.org.IJobGradeService;
import com.dragon.flow.vo.CheckExistVo;
import com.dragon.flow.vo.org.BatchJobGradeVo;
import com.dragon.flow.vo.org.OrgTreeVo;
import com.dragon.flow.web.resource.BaseResource;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.vo.ReturnVo;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-27
 */
@RestController
@RequestMapping("/flow/org/jobGrade")
public class JobGradeResource extends BaseResource<JobGrade> {
    private static final String MODULE_SN = "JobGrade:";
    @Autowired
    private IJobGradeService jobGradeService;

    /**
     * 判断字段是否存在
     *
     * @param checkExistVo 参数
     * @return
     */
    @PostMapping(value = "/checkEntityExist", produces = "application/json")
    public ReturnVo<Boolean> checkEntityExist(@RequestBody CheckExistVo checkExistVo) {
        return this.checkExist(jobGradeService, checkExistVo);
    }

    /**
     * @return 获取职级树
     */
    @PostMapping("/getJobGradeTree")
    public ReturnVo<List> getJobGradeTree() {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        List<OrgTreeVo> jobGradeTree = jobGradeService.getJobGradeTree();
        returnVo.setData(jobGradeTree);
        return returnVo;
    }

    /**
     * @return 职级列表json数组字符串
     * @Description: 获取所有职级
     */
    @PostMapping("/getJobGrades")
    public ReturnVo<List> getJobGrades(@RequestBody JobGrade jobGrade) {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        LambdaQueryWrapper<JobGrade> jobGradeLambdaQueryWrapper = new LambdaQueryWrapper<>();
        if (StringUtils.isNotBlank(jobGrade.getKeyword())){
            jobGradeLambdaQueryWrapper.like(JobGrade::getCode, jobGrade.getKeyword()).or()
                    .like(JobGrade::getName, jobGrade.getKeyword());
        }
        if (StringUtils.isNotBlank(jobGrade.getTypeId())){
            jobGradeLambdaQueryWrapper.eq(JobGrade::getTypeId, jobGrade.getTypeId());
        }
        if (StringUtils.isNotBlank(jobGrade.getTypeCode())){
            jobGradeLambdaQueryWrapper.eq(JobGrade::getTypeCode, jobGrade.getTypeCode());
        }
        jobGradeLambdaQueryWrapper.eq(JobGrade::getDelFlag, FlowConstant.DEL_FLAG_1).orderByAsc(JobGrade::getOrderNo);
        List<JobGrade> list = jobGradeService.list(jobGradeLambdaQueryWrapper);
        returnVo.setData(list);
        return returnVo;
    }


    /**
     * 添加或者修改
     *
     * @param jobGrade 参数
     * @return
     */
    @PostMapping(value = "/saveOrUpdate", produces = "application/json")
    public ReturnVo<String> saveOrUpdate(@RequestBody JobGrade jobGrade) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.FAIL, "保存失败！");
        jobGradeService.saveOrUpdate(jobGrade);
        returnVo.setCode(ReturnCode.SUCCESS);
        returnVo.setMsg("保存成功");
        return returnVo;
    }

    /**
     * 批量添加或者修改
     *
     * @param batchJobGradeVo 参数
     * @return
     */
    @PostMapping(value = "/batchSaveJobGradeTypeAndJobGrade", produces = "application/json")
    public ReturnVo<String> batchSaveJobGradeTypeAndJobGrade(@RequestBody BatchJobGradeVo batchJobGradeVo) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.FAIL, "保存失败！");
        jobGradeService.batchSaveOrUpdateJobGradeTypeAndJobGrade(batchJobGradeVo.getJobGradeType(), batchJobGradeVo.getJobGrades(), this.getLoginUser());
        returnVo.setCode(ReturnCode.SUCCESS);
        returnVo.setMsg("保存成功");
        return returnVo;
    }

    /**
     * 删除
     *
     * @param ids
     * @return
     */
    @PostMapping(value = "/delete", produces = "application/json")
    public ReturnVo<String> delete(@RequestBody List<String> ids) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        for(String id : ids) {
            return jobGradeService.deleteById(id);
        }
        return returnVo;
    }

    /**
     * 查询
     *
     * @param id id
     * @return
     */
    @PostMapping(value = "/get", produces = "application/json")
    public ReturnVo<JobGrade> get(@RequestBody String id) {
        ReturnVo<JobGrade> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        JobGrade jobGrade = jobGradeService.getById(id);
        returnVo.setData(jobGrade);
        return returnVo;
    }

}

