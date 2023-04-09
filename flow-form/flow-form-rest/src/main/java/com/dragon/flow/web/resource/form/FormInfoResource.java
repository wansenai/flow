package com.dragon.flow.web.resource.form;

import com.dragon.flow.model.form.FormInfo;
import com.dragon.flow.service.form.IFormInfoService;
import com.dragon.flow.vo.CheckExistVo;
import com.dragon.flow.web.resource.BaseResource;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.vo.ReturnVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @program: flow
 * @description: APP接口
 * @author: Bruce.Liu
 * @create: 2021-03-23 21:41
 **/
@RestController
@RequestMapping("/flow/form/formInfo")
public class FormInfoResource extends BaseResource<FormInfo> {
    @Autowired
    private IFormInfoService formInfoService;
    /**
     * 判断字段是否存在
     *
     * @param checkExistVo 参数
     * @return
     */
    @PostMapping(value = "/checkEntityExist", produces = "application/json")
    protected ReturnVo<Boolean> checkEntityExist(@RequestBody CheckExistVo checkExistVo) {
        return this.checkExist(formInfoService, checkExistVo);
    }

    /**
     * 添加或者修改
     *
     * @param formInfo 参数
     * @return
     */
    @PostMapping(value = "/saveOrUpdate", produces = "application/json")
    public ReturnVo<FormInfo> saveOrUpdate(@RequestBody FormInfo formInfo) {
        ReturnVo<FormInfo> returnVo = new ReturnVo<>(ReturnCode.FAIL, "保存失败！");
        formInfoService.saveOrUpdate(formInfo);
        returnVo.setCode(ReturnCode.SUCCESS);
        returnVo.setMsg("保存成功");
        returnVo.setData(formInfo);
        return returnVo;
    }

    /**
     * 通过表单标识获取 表单结构信息
     * @param modelKey 表单标识，modelKey
     * @return FormInfo
     */
    @GetMapping(value = "/getFormInfoByModelKey", produces = "application/json")
    public ReturnVo<FormInfo> getFormInfoByModelKey(@RequestParam String modelKey) {
        ReturnVo<FormInfo> returnVo = new ReturnVo<>(ReturnCode.FAIL, "查询数据失败！");
        FormInfo modelInfo = formInfoService.getModelInfoByCode(modelKey);
        returnVo.setCode(ReturnCode.SUCCESS);
        returnVo.setMsg("查询成功");
        returnVo.setData(modelInfo);
        return returnVo;
    }

    /**
     * 通过表单标识获取 表单结构信息
     * @param id 表单Id
     * @return FormInfo
     */
    @GetMapping(value = "/getFormInfoById", produces = "application/json")
    public ReturnVo<FormInfo> getFormInfoById(@RequestParam String id) {
        ReturnVo<FormInfo> returnVo = new ReturnVo<>(ReturnCode.FAIL, "查询数据失败！");
        FormInfo modelInfo = formInfoService.getById(id);
        returnVo.setCode(ReturnCode.SUCCESS);
        returnVo.setMsg("查询成功");
        returnVo.setData(modelInfo);
        return returnVo;
    }
}
