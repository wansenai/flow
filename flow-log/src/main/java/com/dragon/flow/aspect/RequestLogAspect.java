package com.dragon.flow.aspect;

import cn.dev33.satoken.annotation.SaCheckPermission;
import com.dragon.flow.model.log.SysOperRecord;
import com.dragon.flow.schedule.LogQueue;
import com.dragon.flow.vo.log.LogVo;
import com.dragon.tools.common.DateUtil;
import com.dragon.tools.common.IpUtils;
import com.dragon.tools.utils.FastJsonUtils;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang.StringUtils;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * @program: prodflow
 * @description: 操作日志
 * @author: Bruce.Liu
 * @create: 2021-04-30 09:35
 **/
@Slf4j
public abstract class RequestLogAspect {

    public static final String[] PERMISSION_VALUES = new String[]{"0", "2", "3", "6", "7", "8"};
    @Autowired
    private LogQueue logQueue;

    @Pointcut(" execution(* com.dragon.flow.web.resource..*.*(..)) ")
    public void requestServer() {
    }

    @Around("requestServer()")
    public Object doAround(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpServletRequest request = attributes.getRequest();
        Map<String, Object> operContentMap = new HashMap<>();
        MethodSignature methodSignature = (MethodSignature) proceedingJoinPoint.getSignature();
        String declaringTypeName = methodSignature.getDeclaringTypeName();
        String methodName = methodSignature.getMethod().getName();
        operContentMap.put("className", declaringTypeName);
        operContentMap.put("methodName", methodName);
        Map<String, Object> paramMap = this.getRequestParams(proceedingJoinPoint);
        operContentMap.putAll(paramMap);
        ApiOperation annotation = methodSignature.getMethod().getAnnotation(ApiOperation.class);
        SaCheckPermission permission = methodSignature.getMethod().getAnnotation(SaCheckPermission.class);
        if (checkAddLog(permission)) {
            String value = annotation == null ? "" : annotation.value();
            if (StringUtils.isNotBlank(value)) {
                operContentMap.put("ApiOperationValue", value);
            }
            LogVo logVo = this.getSubject(request);
            if (logVo != null) {
                String content = FastJsonUtils.objectToJson(operContentMap);
                Date date = new Date();

                SysOperRecord sysOperRecord = SysOperRecord.builder()
                        .ip(IpUtils.getRemoteIP(request))
                        .userCode(logVo.getCode())
                        .userName(logVo.getName())
                        .source(logVo.getSourceEnum().getSn())
                        .operContent(content)
                        .operType(request.getMethod())
                        .dateTime(date)
                        .date(DateUtil.format(date, "yyyy-MM-dd"))
                        .year(Calendar.getInstance().get(Calendar.YEAR))
                        .month(Calendar.getInstance().get(Calendar.MONTH) + 1)
                        .day(Calendar.getInstance().get(Calendar.DAY_OF_MONTH))
                        .build();
                logQueue.put(FastJsonUtils.objectToJson(sysOperRecord));
            }
        }
        return proceedingJoinPoint.proceed();
    }

    private boolean checkAddLog(SaCheckPermission permission) {
        if (permission != null) {
            String[] permissionValues = permission.value();
            if (permissionValues != null && permissionValues.length > 0) {
                for (String v : permissionValues) {
                    if (v != null) {
                        String[] split = v.split("-");
                        if (split.length == 2) {
                            String pv = split[1];
                            if (StringUtils.startsWithAny(pv, PERMISSION_VALUES)) {
                                return true;
                            }
                        }
                    }
                }
            }
        }
        return false;
    }

    abstract LogVo getSubject(HttpServletRequest request);

    /**
     * 获取入参
     *
     * @param proceedingJoinPoint
     * @return
     */
    private Map<String, Object> getRequestParams(ProceedingJoinPoint proceedingJoinPoint) {
        Map<String, Object> requestParams = new HashMap<>();
        //参数名
        String[] paramNames = ((MethodSignature) proceedingJoinPoint.getSignature()).getParameterNames();
        //参数值
        Object[] paramValues = proceedingJoinPoint.getArgs();
        for (int i = 0; i < paramNames.length; i++) {
            Object value = paramValues[i];
            //如果是文件对象
            if (value instanceof MultipartFile) {
                MultipartFile file = (MultipartFile) value;
                value = file.getOriginalFilename();  //获取文件名
                requestParams.put(paramNames[i], value);
            } else if (value instanceof HttpServletRequest || value instanceof HttpServletResponse) {
                continue;
            } else {
                requestParams.put(paramNames[i], value);
            }
        }
        return requestParams;
    }
}

