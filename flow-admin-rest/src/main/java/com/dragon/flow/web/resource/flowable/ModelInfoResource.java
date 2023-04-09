package com.dragon.flow.web.resource.flowable;


import com.dragon.flow.enm.form.ModelFormStatusEnum;
import com.dragon.flow.model.flowable.ModelInfo;
import com.dragon.flow.service.flowable.IModelInfoService;
import com.dragon.flow.vo.CheckExistVo;
import com.dragon.flow.vo.pager.ParamVo;
import com.dragon.flow.web.resource.BaseResource;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.vo.ReturnVo;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-20
 */
@RestController
@RequestMapping("/flow/flowable/modelInfo")
public class ModelInfoResource extends BaseResource<ModelInfo> {

    @Autowired
    private IModelInfoService modelInfoService;
    /**
     * 判断字段是否存在
     *
     * @param checkExistVo 参数
     * @return
     */
    @PostMapping(value = "/checkEntityExist", produces = "application/json")
    protected ReturnVo<Boolean> checkEntityExist(@RequestBody CheckExistVo checkExistVo) {
        return this.checkExist(modelInfoService, checkExistVo);
    }

    /**
     * 分页获取列表
     *
     * @param params 查询参数 、 分页参数
     * @return
     */
    @PostMapping(value = "/getPagerModel", produces = "application/json")
    public ReturnVo<PagerModel> getPagerModel(@RequestBody ParamVo<ModelInfo> params) {
        ReturnVo<PagerModel> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        PagerModel<ModelInfo> pm = modelInfoService.getPagerModel(params.getEntity(), params.getQuery());
        returnVo.setData(pm);
        return returnVo;
    }

    /**
     * 保存模型
     *
     * @param modelInfo 参数
     * @return
     */
    @PostMapping(value = "/saveOrUpdateModelInfo", produces = "application/json")
    public ReturnVo<ModelInfo> saveOrUpdateModelInfo(@RequestBody ModelInfo modelInfo) {
        ReturnVo<ModelInfo> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "保存成功！");
        if (StringUtils.isBlank(modelInfo.getId())) {
            ModelInfo mi = modelInfoService.getModelInfoByModelKey(modelInfo.getModelKey());
            if (mi != null) {
                returnVo = new ReturnVo<>(ReturnCode.FAIL, "model key 不能重复！");
                return returnVo;
            }
        }
        modelInfo = modelInfoService.saveOrUpdateModelInfo(modelInfo, this.getLoginUser(), true);
        returnVo.setData(modelInfo);
        return returnVo;
    }

    /**
     * 删除模型
     *
     * @param ids ids
     * @return
     */
    @PostMapping(value = "/deleteByIds", produces = "application/json")
    public ReturnVo<String> deleteById(@RequestBody List<String> ids) {
        ReturnVo<String> returnVo = modelInfoService.deleteById(ids);
        return returnVo;
    }


    /**
     * 查询单个
     *
     * @param id
     * @return
     */
    @GetMapping(value = "/get/{id}", produces = "application/json")
    public ReturnVo<ModelInfo> get(@PathVariable String id) {
        ReturnVo<ModelInfo> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        ModelInfo modelInfo = modelInfoService.getById(id);
        returnVo.setData(modelInfo);
        return returnVo;
    }

    /**
     * 查询单个 - 通过modelId
     *
     * @param modelId
     * @return
     */
    @GetMapping(value = "/getByModelId/{modelId}", produces = "application/json")
    public ReturnVo<ModelInfo> getByModelId(@PathVariable String modelId) {
        ReturnVo<ModelInfo> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        ModelInfo modelInfo = modelInfoService.getByModelId(modelId);
        ModelFormStatusEnum minStatus = ModelFormStatusEnum.getMinStatus(modelInfo.getStatus(), modelInfo.getExtendStatus());
        if (minStatus != null) {
            modelInfo.setStatusName(minStatus.getMsg());
            modelInfo.setStatus(minStatus.getStatus());
        }
        returnVo.setData(modelInfo);
        return returnVo;
    }

}

