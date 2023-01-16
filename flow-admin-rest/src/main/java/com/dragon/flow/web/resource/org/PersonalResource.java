package com.dragon.flow.web.resource.org;


import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.dragon.flow.model.org.Personal;
import com.dragon.flow.service.org.IPersonalService;
import com.dragon.flow.vo.CheckExistVo;
import com.dragon.flow.vo.pager.ParamVo;
import com.dragon.flow.web.resource.BaseResource;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.vo.ReturnVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-12
 */
@RestController
@RequestMapping("/flow/org/personal")
public class PersonalResource extends BaseResource<Personal> {
    private static final String MODULE_SN = "Personal:";
    @Autowired
    private IPersonalService personalService;

    /**
     * 判断字段是否存在
     *
     * @param checkExistVo 参数
     * @return
     */
    @PostMapping(value = "/checkEntityExist", produces = "application/json")
    protected ReturnVo<Boolean> checkEntityExist(@RequestBody CheckExistVo checkExistVo) {
        return this.checkExist(personalService, checkExistVo);
    }

    /**
     * 分页获取列表
     *
     * @param params 查询参数 、 分页参数
     * @return
     */
    @PostMapping(value = "/getPagerModel", produces = "application/json")
    public ReturnVo<PagerModel> getPagerModel(@RequestBody ParamVo<Personal> params) {
        ReturnVo<PagerModel> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        PagerModel<Personal> pm = personalService.getPagerModelByWrapper(params.getEntity(), params.getQuery());
        returnVo.setData(pm);
        return returnVo;
    }

    /**
     * 分页获取列表
     *
     * @param params 查询参数 、 分页参数
     * @return
     */
    @PostMapping(value = "/getPagerModelShowRoles", produces = "application/json")
    public ReturnVo<PagerModel> getPagerModel(@RequestParam boolean showRoles, @RequestBody ParamVo<Personal> params) {
        ReturnVo<PagerModel> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        PagerModel<Personal> pm = personalService.getPagerModelByWrapper(params.getEntity(), params.getQuery(), showRoles);
        returnVo.setData(pm);
        return returnVo;
    }

    /**
     * 添加或者修改
     *
     * @param personal 参数
     * @return
     */
    @PostMapping(value = "/saveOrUpdate", produces = "application/json")
    public ReturnVo<String> saveOrUpdate(@RequestBody Personal personal) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        personalService.saveOrUpdate(personal, this.getLoginUser());
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
        personalService.deleteByIds(ids);
        return returnVo;
    }

    /**
     * 查询单个
     *
     * @param id
     * @return
     */
    @GetMapping(value = "/get", produces = "application/json")
    public ReturnVo<Personal> get(String id) {
        ReturnVo<Personal> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        Personal personal = personalService.getById(id);
        returnVo.setData(personal);
        return returnVo;
    }

    /**
     * 通过工号查询-多个
     *
     * @param codes
     * @return
     */
    @PostMapping(value = "/getByCodes", produces = "application/json")
    public ReturnVo<List<Personal>> getByCodes(@RequestBody List<String> codes) {
        ReturnVo<List<Personal>> returnVo = new ReturnVo<>(ReturnCode.FAIL, "查询异常！");
        List<Personal> personals = new ArrayList<>();
        try {
            personals = personalService.getPersonalsByCodes(codes);
            returnVo.setCode(ReturnCode.SUCCESS);
            returnVo.setMsg("查询数据成功！");
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("通过工号查询数据异常！" + e);
        }
        returnVo.setData(personals);
        return returnVo;
    }

    /**
     * 设置领导
     *
     * @param leaderCode 直属领导code
     * @param id         id
     * @return
     */
    @PostMapping(value = "/setLeaderCode/{leaderCode}/{id}", produces = "application/json")
    public ReturnVo<String> setLeaderCode(@PathVariable String leaderCode, @PathVariable String id) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        LambdaUpdateWrapper<Personal> personalLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
        personalLambdaUpdateWrapper.set(Personal::getLeaderCode, leaderCode).eq(Personal::getId, id);
        personalService.update(personalLambdaUpdateWrapper);
        return returnVo;
    }
}

