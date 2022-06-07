package com.dragon.flow.web.resource.privilege;

import cn.dev33.satoken.session.SaSession;
import cn.dev33.satoken.stp.StpUtil;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.service.privilege.IUserService;
import com.dragon.flow.web.resource.BaseResource;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.vo.ReturnVo;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @program: flow
 * @description: 登录
 * @author: Bruce.Liu
 * @create: 2021-03-25 11:37
 **/
@RestController
@RequestMapping("/")
@CrossOrigin
public class LoginResource extends BaseResource {

    @Autowired
    private IUserService userService;

    /**
     * 用户登出
     *
     * @return
     */
    @PostMapping(value = "/logout", produces = "application/json")
    public ReturnVo logout() {
        ReturnVo vo = new ReturnVo(ReturnCode.SUCCESS, "退出成功！");
        //获取当前会话的Session,若无则返空
        SaSession saSession = StpUtil.getSession(false);
        //若当前session不为空,则从持久库中删除
        if (saSession != null) {
            saSession.logout();
        }
        StpUtil.logout();
        return vo;
    }

    /**
     * 用户登录
     *
     * @param loginUser - username 用户名
     * @param loginUser - password 密码
     * @return
     */
    @PostMapping(value = "/login", produces = "application/json")
    public ReturnVo<String> login(HttpServletResponse response, HttpServletRequest request, @RequestBody User loginUser) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "登录成功");
        if (StringUtils.isNotBlank(loginUser.getUsername()) && StringUtils.isNotBlank(loginUser.getPassword())) {
            ReturnVo<User> loginRetuenVo = userService.login(loginUser.getUsername(), loginUser.getPassword());
            if (loginRetuenVo.isSuccess()) {
                User user = loginRetuenVo.getData();
                StpUtil.login(user.getId());
                SaSession session = StpUtil.getSessionByLoginId(user.getId());
                session.set("loginUser", user);
            } else {
                returnVo = new ReturnVo<>(ReturnCode.FAIL, loginRetuenVo.getMsg());
            }
        }
        return returnVo;
    }

}
