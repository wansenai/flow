package com.dragon.flow.aspect;

import com.dragon.flow.constant.FlowFrontConstant;
import com.dragon.flow.enm.SourceEnum;
import com.dragon.flow.model.user.Account;
import com.dragon.flow.vo.log.LogVo;
import com.dragon.tools.vo.ReturnVo;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-13 16:54
 **/
@Slf4j
@Aspect
@Component
public class FrontRequestLogAspect extends RequestLogAspect {
    @Override
    LogVo getSubject(HttpServletRequest request) {
        LogVo logVo = new LogVo();
        logVo.setSourceEnum(SourceEnum.FRONT);
        HttpSession session = request.getSession();
        if (session != null){
            Object obj = session.getAttribute(FlowFrontConstant.LOGIN_ACCOUNT);
            if (obj != null){
                try {
                    ReturnVo<Account> returnVo = (ReturnVo) obj;
                    if (returnVo != null){
                        Account account = returnVo.getData();
                        if (account != null){
                            logVo.setName(account.getName());
                            logVo.setCode(account.getCode());
                        }
                    }
                } catch (Exception e) {
                    log.error("获取登录账号信息失败", e);
                }
            }
        }
        return logVo;
    }
}
