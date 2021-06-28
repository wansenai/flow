package com.dragon.flow.web.resource.flowable;


import com.dragon.flow.model.flowable.FlowListener;
import com.dragon.flow.model.flowable.ModelInfo;
import com.dragon.flow.service.flowable.IFlowListenerService;
import com.dragon.flow.vo.CheckExistVo;
import com.dragon.flow.web.resource.BaseResource;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.vo.ReturnVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author bruce.liu
 * @since 2021-06-28
 */
@RestController
@RequestMapping("/flow/flowable/flowListener")
public class FlowListenerResource extends BaseResource {

    @Autowired
    private IFlowListenerService flowListenerService;

    /**
     * 判断字段是否存在
     *
     * @param checkExistVo 参数
     * @return
     */
    @PostMapping(value = "/checkEntityExist", produces = "application/json")
    protected ReturnVo<Boolean> checkEntityExist(@RequestBody CheckExistVo checkExistVo) {
        return this.checkExist(flowListenerService, checkExistVo);
    }

    /**
     * 获取列表
     *
     * @return
     */
    @PostMapping(value = "/getList", produces = "application/json")
    public ReturnVo<List> getList(@RequestBody FlowListener param) {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        List<FlowListener> pm = flowListenerService.getList(param);
        returnVo.setData(pm);
        return returnVo;
    }

    /**
     * 保存监听
     *
     * @param flowListener 参数
     * @return
     */
    @PostMapping(value = "/saveOrUpdate", produces = "application/json")
    public ReturnVo<String> saveOrUpdate(@RequestBody FlowListener flowListener) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        flowListenerService.saveOrUpdate(flowListener);
        return returnVo;
    }

    /**
     * 删除
     *
     * @param id 参数
     * @return
     */
    @PostMapping(value = "/deleteById/{id}", produces = "application/json")
    public ReturnVo<ModelInfo> deleteById(@PathVariable String id) {
        ReturnVo<ModelInfo> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        flowListenerService.deleteById(id);
        return returnVo;
    }

}

