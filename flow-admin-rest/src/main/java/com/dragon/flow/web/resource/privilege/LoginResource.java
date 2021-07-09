package com.dragon.flow.web.resource.privilege;

import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.exception.FlowException;
import com.dragon.flow.model.org.Personal;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.service.org.IPersonalService;
import com.dragon.flow.web.resource.BaseResource;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.vo.ReturnVo;
import org.apache.commons.lang.StringUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.ExcessiveAttemptsException;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
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
    private IPersonalService personalService;

    /**
     * 用户登出
     *
     * @return
     */
    @PostMapping(value = "/logout", produces = "application/json")
    public ReturnVo logout() {
        ReturnVo vo = new ReturnVo(ReturnCode.FAIL, "退出成功！");
        Subject currentUser = SecurityUtils.getSubject();
        currentUser.logout();
        vo.setCode(ReturnCode.SUCCESS);
        vo.setMsg("退出成功！");
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
        if (StringUtils.isNotBlank(loginUser.getUsername()) && StringUtils.isNotBlank(loginUser.getPassword())){
            UsernamePasswordToken usernamePasswordToken = new UsernamePasswordToken(loginUser.getUsername(), loginUser.getPassword());
            Subject subject = SecurityUtils.getSubject();
            try {
                subject.login(usernamePasswordToken);
            } catch (UnknownAccountException e) {
                returnVo = new ReturnVo<>(ReturnCode.FAIL, "用户名/密码错误");
            } catch (IncorrectCredentialsException e) {
                returnVo = new ReturnVo<>(ReturnCode.FAIL, "用户名/密码错误");
            } catch (ExcessiveAttemptsException e) {
                returnVo = new ReturnVo<>(ReturnCode.FAIL, "登录失败多次，账户锁定10分钟");
            } catch (FlowException e) {
                returnVo = new ReturnVo<>(ReturnCode.FAIL, e.getKey());
            }
            if (returnVo.isSuccess()){
                User user = (User) subject.getPrincipal();
                // 登录成功，设置当前登录人对应的人员数据（所属公司，部门等数据）
                Personal personal = personalService.getPersonalByCode(user.getUserNo());
                if(personal != null){
                    user.setCompanyId(personal.getCompanyId());
                    user.setCompanyName(personal.getCompanyName());
                    user.setDepartmentId(personal.getDeptId());
                    user.setDeptName(personal.getDeptName());
                }

                returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "登录成功");
                String sessionId = (String) subject.getSession().getId();
                response.setHeader(FlowConstant.DRAGON_SESSION_ID, sessionId);
                response.setHeader(FlowConstant.FRONT_OR_BACK, FlowConstant.FLOW_ADMIN);
                returnVo.setData(sessionId);
                //设置session
                this.setSessionInfo(user, subject, request);
            }
        }
        return returnVo;
    }

}
