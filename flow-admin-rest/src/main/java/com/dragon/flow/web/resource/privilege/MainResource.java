package com.dragon.flow.web.resource.privilege;

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
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

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
    public ReturnVo<User> getLoginInfoVo() {
        ReturnVo<User> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        Subject subject = SecurityUtils.getSubject();
        if (subject != null){
            Object userObj = subject.getPrincipal();
            if (userObj != null){
                returnVo.setData((User) userObj);
            } else {
                returnVo = new ReturnVo<>(ReturnCode.FAIL, "登录账号过期!");
            }
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
        Subject subject = SecurityUtils.getSubject();
        if (subject != null){
            Session session = subject.getSession();
            if (session != null){
                Object moduleObjs = session.getAttribute(FlowConstant.LOGIN_MODULES);
                if (moduleObjs == null){
                    User loginUser = this.getLoginUser();
                    List<Module> modules = null;
                    if ("admin".equals(loginUser.getUsername())){
                        LambdaQueryWrapper<Module> moduleLambdaQueryWrapper = new LambdaQueryWrapper<>();
                        moduleLambdaQueryWrapper.eq(Module::getStatus, 1).eq(Module::getDelFlag, 1)
                                .orderByAsc(Module::getOrderNo);
                        modules = moduleService.list(moduleLambdaQueryWrapper);
                    } else {
                        Set<ACL> acls = (Set<ACL>) session.getAttribute(FlowConstant.LOGIN_USER_ACLS);
                        if (CollectionUtils.isNotEmpty(acls)){
                            modules = this.getModulesByAcls(acls);
                        }
                    }
                    session.setAttribute(FlowConstant.LOGIN_MODULES, modules);
                    returnVo.setData(modules);
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
