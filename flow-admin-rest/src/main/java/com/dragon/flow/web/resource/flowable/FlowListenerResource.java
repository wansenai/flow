package com.dragon.flow.web.resource.flowable;


import com.dragon.flow.model.flowable.FlowListener;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.service.flowable.IFlowListenerService;
import com.dragon.flow.vo.CheckExistVo;
import com.dragon.flow.vo.pager.ParamVo;
import com.dragon.flow.web.resource.BaseResource;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.vo.ReturnVo;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
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
     * 分页获取列表
     *
     * @param params 查询参数
     * @return
     */
    @PostMapping(value = "/getPagerModel", produces = "application/json")
    public ReturnVo<PagerModel> getPagerModel(@RequestBody ParamVo<FlowListener> params) {
        ReturnVo<PagerModel> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        PagerModel<FlowListener> pm = flowListenerService.getPagerModel(params.getEntity(), params.getQuery());
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
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.FAIL, "保存失败");
        User loginUser = this.getLoginUser();
        if(loginUser != null){
            String userNo = loginUser.getUserNo();
            if(StringUtils.isBlank(flowListener.getId())){
                flowListener.setCreator(userNo);
                flowListener.setCreateTime(new Date());
            }
            flowListener.setUpdateTime(new Date());
            flowListener.setUpdator(userNo);
            flowListenerService.saveOrUpdate(flowListener);
            returnVo.setMsg("保存成功！");
            returnVo.setCode(ReturnCode.SUCCESS);
        }else{
            returnVo.setMsg("用户未登录！");
        }
        return returnVo;
    }

    /**
     * 删除
     *
     * @param id 参数
     * @return
     */
    @PostMapping(value = "/deleteById/{id}", produces = "application/json")
    public ReturnVo<FlowListener> deleteById(@PathVariable String id) {
        ReturnVo<FlowListener> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        flowListenerService.deleteById(id);
        return returnVo;
    }

    /**
     * 通过id获取监听器 包含参数
     *
     * @param id 参数
     * @return
     */
    @GetMapping(value = "/getById/{id}", produces = "application/json")
    public ReturnVo<FlowListener> getById(@PathVariable String id) {
        ReturnVo<FlowListener> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        FlowListener listener = flowListenerService.getFlowListenerById(id);
        returnVo.setData(listener);
        return returnVo;
    }

}

