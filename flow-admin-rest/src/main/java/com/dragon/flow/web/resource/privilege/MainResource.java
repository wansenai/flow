package com.dragon.flow.web.resource.privilege;

import cn.dev33.satoken.session.SaSession;
import cn.dev33.satoken.stp.StpUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.model.privilege.ACL;
import com.dragon.flow.model.privilege.Module;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.service.privilege.IAclService;
import com.dragon.flow.service.privilege.IModuleService;
import com.dragon.flow.web.resource.BaseResource;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.vo.ReturnVo;
import org.apache.commons.collections.CollectionUtils;
import org.apache.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * @program: flow
 * @description: 登录主界面
 * @author: Bruce.Liu
 * @create: 2021-03-25 11:37
 **/
@CrossOrigin
@RestController
@RequestMapping("/flow/main")
public class MainResource extends BaseResource {

    @Autowired
    private IModuleService moduleService;
    @Autowired
    private IAclService aclService;

    /**
     * 获取登录用户
     *
     * @return
     */
    @GetMapping(value = "/getLoginUser", produces = "application/json")
    public ReturnVo<User> getLoginInfoVo(HttpServletResponse response) {
        ReturnVo<User> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        if (StpUtil.isLogin()) {
            returnVo.setData(this.getLoginUser());
        } else {
            returnVo = new ReturnVo<>(ReturnCode.FAIL, "登录账号过期!");
            response.setStatus(HttpStatus.SC_UNAUTHORIZED);
        }
        return returnVo;
    }

    /**
     * 获取登录的用户控制的模块列表
     *
     * @return
     */
    @GetMapping(value = "/getLoginModules", produces = "application/json")
    public ReturnVo<List<Module>> getLoginModules() {
        ReturnVo<List<Module>> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        Object loginId = StpUtil.getLoginId();
        if (loginId != null) {
            SaSession session = StpUtil.getSessionByLoginId(loginId);
            if (session != null) {
                Object moduleObjs = session.get(FlowConstant.LOGIN_MODULES);
                if (moduleObjs == null) {
                    User loginUser = this.getLoginUser();
                    List<Module> modules = null;
                    if ("admin".equals(loginUser.getUsername())) {
                        LambdaQueryWrapper<Module> moduleLambdaQueryWrapper = new LambdaQueryWrapper<>();
                        moduleLambdaQueryWrapper.eq(Module::getStatus, 1).eq(Module::getDelFlag, 1)
                                .orderByAsc(Module::getOrderNo);
                        modules = moduleService.list(moduleLambdaQueryWrapper);
                    } else {
                        Set<ACL> acls = (Set<ACL>) session.get(FlowConstant.LOGIN_USER_ACLS);
                        if (CollectionUtils.isNotEmpty(acls)) {
                            modules = this.getModulesByAcls(acls);
                        }
                    }
                    if (CollectionUtils.isNotEmpty(modules)) {
                        session.set(FlowConstant.LOGIN_MODULES, modules);
                        returnVo.setData(modules);
                    }
                } else {
                    returnVo.setData((List) moduleObjs);
                }
            }
        }
        return returnVo;
    }

    /**
     * 获取登录的用户控制的模块列表
     *
     * @return
     */
    @GetMapping(value = "/getPermissions", produces = "application/json")
    public ReturnVo<Map> getPermissions() {
        ReturnVo<Map> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        User user = this.getLoginUser();
        Map<String, List<Integer>> map = aclService.getAllPermissions(user.getUsername(), user.getId());
        returnVo.setData(map);
        return returnVo;
    }

}
