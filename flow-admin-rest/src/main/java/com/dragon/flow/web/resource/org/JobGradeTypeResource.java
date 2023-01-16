package com.dragon.flow.web.resource.org;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.model.org.JobGradeType;
import com.dragon.flow.service.org.IJobGradeTypeService;
import com.dragon.flow.vo.CheckExistVo;
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
 * 职级分类 前端控制器
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-27
 */
@RestController
@RequestMapping("/flow/org/jobGradeType")
public class JobGradeTypeResource extends BaseResource<JobGradeType> {
    private static final String MODULE_SN = "JobGradeType:";
    @Autowired
    private IJobGradeTypeService jobGradeTypeService;

    /**
     * 判断字段是否存在
     *
     * @param checkExistVo 参数
     * @return
     */
    @PostMapping(value = "/checkEntityExist", produces = "application/json")
    protected ReturnVo<Boolean> checkEntityExist(@RequestBody CheckExistVo checkExistVo) {
        return this.checkExist(jobGradeTypeService, checkExistVo);
    }

    /**
     * @return 职级分类列表json数组字符串
     * @Description: 获取所有职级分类
     */
    @PostMapping("/getJobGradeTypes")
    public ReturnVo<List> getJobGradeTypes(@RequestBody JobGradeType jobGradeType) {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        LambdaQueryWrapper<JobGradeType> jobGradeTypeLambdaQueryWrapper = new LambdaQueryWrapper<>();
        if (StringUtils.isNotBlank(jobGradeType.getKeyword())){
            jobGradeTypeLambdaQueryWrapper.like(JobGradeType::getCode, jobGradeType.getKeyword()).or()
                    .like(JobGradeType::getName, jobGradeType.getKeyword());
        }
        if (StringUtils.isNotBlank(jobGradeType.getCompanyId())){
            jobGradeTypeLambdaQueryWrapper.eq(JobGradeType::getCompanyId, jobGradeType.getCompanyId());
        }
        jobGradeTypeLambdaQueryWrapper.eq(JobGradeType::getDelFlag,FlowConstant.DEL_FLAG_1).orderByAsc(JobGradeType::getOrderNo);
        List<JobGradeType> list = jobGradeTypeService.list(jobGradeTypeLambdaQueryWrapper);
        returnVo.setData(list);
        return returnVo;
    }


    /**
     * 添加或者修改
     *
     * @param jobGradeType 参数
     * @return
     */
    @PostMapping(value = "/saveOrUpdate", produces = "application/json")
    public ReturnVo<String> saveOrUpdate(@RequestBody JobGradeType jobGradeType) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.FAIL, "保存失败！");
        jobGradeTypeService.saveOrUpdate(jobGradeType);
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
            jobGradeTypeService.deleteById(id);
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
    public ReturnVo<JobGradeType> get(@RequestBody String id) {
        ReturnVo<JobGradeType> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        JobGradeType jobGradeType = jobGradeTypeService.getById(id);
        returnVo.setData(jobGradeType);
        return returnVo;
    }

}

