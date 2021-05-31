package com.dragon.flow.aspect;

import com.dragon.flow.enm.SourceEnum;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.vo.log.LogVo;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
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
        Subject subject = SecurityUtils.getSubject();
        if (subject != null){
            Object userObj = subject.getPrincipal();
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
