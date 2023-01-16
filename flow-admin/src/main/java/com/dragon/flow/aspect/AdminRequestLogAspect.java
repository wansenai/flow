package com.dragon.flow.aspect;

import cn.dev33.satoken.session.SaSession;
import cn.dev33.satoken.stp.StpUtil;
import com.dragon.flow.enm.SourceEnum;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.vo.log.LogVo;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;

import static com.dragon.flow.constant.FlowConstant.LOGIN_USER;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-13 16:50
 **/
@Aspect
@Component
public class AdminRequestLogAspect extends RequestLogAspect {
    @Override
    LogVo getSubject(HttpServletRequest request) {
        LogVo logVo = null;
        if (StpUtil.isLogin()){
            Object loginId = StpUtil.getLoginId();
            SaSession session = StpUtil.getSessionByLoginId(loginId);
            if (session != null){
                logVo = new LogVo();
                User user = (User) session.get(LOGIN_USER);
                logVo.setCode(user.getUserNo());
                logVo.setName(user.getRealName());
                logVo.setSourceEnum(SourceEnum.ADMIN);
            }
        }
        return logVo;
    }
}
