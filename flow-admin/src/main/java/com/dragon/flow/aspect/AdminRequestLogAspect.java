package com.dragon.flow.aspect;

import cn.dev33.satoken.stp.StpUtil;
import com.dragon.flow.enm.SourceEnum;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.vo.log.LogVo;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;

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
        Object loginId = StpUtil.getLoginId();
        if (loginId != null){
            Object userObj = StpUtil.getSessionByLoginId(loginId);
            if (userObj != null){
                logVo = new LogVo();
                User user = (User) userObj;
                logVo.setCode(user.getUserNo());
                logVo.setName(user.getRealName());
                logVo.setSourceEnum(SourceEnum.ADMIN);
            }
        }
        return logVo;
    }
}
