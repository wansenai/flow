package com.dragon.flow.web.resource.user;

import com.dragon.flow.constant.FlowFrontConstant;
import com.dragon.flow.model.user.Account;
import com.dragon.flow.service.user.IAccountService;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.vo.ReturnVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-12 22:23
 **/
@RestController
@RequestMapping("/")
public class LoginResource {

    @Autowired
    private IAccountService accountService;

    @PostMapping(value = "/login", produces = "application/json")
    public ReturnVo<Account> login(@RequestBody Account account, HttpServletRequest request) {
        ReturnVo<Account> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        Account a = accountService.login(account.getUsername(), account.getPwd());
        if (a != null){
            HttpSession session = request.getSession();
            a.setSessionId(session.getId());
            a.setPwd(null);
            returnVo.setData(a);
            session.setAttribute(FlowFrontConstant.LOGIN_ACCOUNT, returnVo);
        } else {
            returnVo = new ReturnVo<>(ReturnCode.FAIL, "登录失败");
        }
        return returnVo;
    }

    @GetMapping(value = "/front/user/getLoginUser", produces = "application/json")
    public ReturnVo<Account> getLoginUser(HttpServletRequest request) {
        ReturnVo<Account> returnVo = null;
        HttpSession session = request.getSession();
        try {
            returnVo = (ReturnVo) session.getAttribute(FlowFrontConstant.LOGIN_ACCOUNT);
        } catch (Exception e) {
            returnVo = new ReturnVo<>(ReturnCode.FAIL, "获取用户信息失败!");
        }
        return returnVo;
    }


}
