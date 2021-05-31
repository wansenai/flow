package com.dragon.flow.web.resource.org;


import com.dragon.flow.model.org.Personal;
import com.dragon.flow.model.org.PositionSeq;
import com.dragon.flow.model.org.RolePositionPersonal;
import com.dragon.flow.service.org.IRolePositionPersonalService;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.vo.ReturnVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.dragon.flow.web.resource.BaseResource;

import java.util.List;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-29
 */
@RestController
@RequestMapping("/flow/org/rolePositionPersonal")
public class RolePositionPersonalResource extends BaseResource<RolePositionPersonal> {

    @Autowired
    private IRolePositionPersonalService rolePositionPersonalService;

    /**
     * 批量添加或者修改
     *
     * @param rolePositionPersonals 参数
     * @return
     */
    @PostMapping(value = "/saveOrUpdate", produces = "application/json")
    public ReturnVo<String> saveOrUpdate(@RequestBody List<RolePositionPersonal> rolePositionPersonals) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.FAIL, "保存失败！");
        rolePositionPersonalService.saveOrUpdateBatch(rolePositionPersonals, this.getLoginUser());
        returnVo.setCode(ReturnCode.SUCCESS);
        returnVo.setMsg("保存成功");
        return returnVo;
    }

    /**
     * 获取角色拥有的用户信息列表
     *
     * @param roleId           角色id
     * @param positionInfoCode 参数
     * @return
     */
    @PostMapping(value = "/getPersonalByRoleIdAndPositionId/{roleId}", produces = "application/json")
    public ReturnVo<List> getRolePositionPersonalByRoleIdAndPositionId(@PathVariable String roleId, @RequestBody String positionInfoCode) {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        List<Personal> list = rolePositionPersonalService.getPersonalByRoleIdAndPositionCode(roleId, positionInfoCode);
        returnVo.setData(list);
        return returnVo;
    }
}

