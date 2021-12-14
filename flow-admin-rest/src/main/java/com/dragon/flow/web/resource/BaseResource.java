package com.dragon.flow.web.resource;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.constant.PermissionConatant;
import com.dragon.flow.enm.SourceEnum;
import com.dragon.flow.model.log.SysOperRecord;
import com.dragon.flow.model.privilege.ACL;
import com.dragon.flow.model.privilege.Module;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.service.ISysOperRecordService;
import com.dragon.flow.service.privilege.IAclService;
import com.dragon.flow.service.privilege.IModuleService;
import com.dragon.flow.vo.CheckExistVo;
import com.dragon.tools.common.IpUtils;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.utils.FastJsonUtils;
import com.dragon.tools.vo.ReturnVo;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.reflect.FieldUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authz.AuthorizationException;
import org.apache.shiro.authz.UnauthorizedException;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

/**
 * @program: flow
 * @description: 基本的资源
 * @author: Bruce.Liu
 * @create: 2021-03-23 21:43
 **/
public abstract class BaseResource<T> {
    protected Logger logger = LoggerFactory.getLogger(this.getClass());
    protected static final String EXIST_MESSAGE = "不能重复！";
    @Autowired
    private IAclService aclService;
    @Autowired
    private ISysOperRecordService sysOperRecordService;
    @Autowired
    private IModuleService moduleService;

    /**
     * 获取登录用户
     *
     * @return
     */
    protected User getLoginUser() {
        Subject subject = SecurityUtils.getSubject();
        Object userObj = subject.getPrincipal();
        if (userObj != null){
            return (User) userObj;
        }
        return null;
    }

    /**
     * 设置公司信息
     *
     * @param user    当前登录用户
     * @param subject 当前登录对象
     * @throws Exception
     */
    public void setSessionInfo(User user, Subject subject, HttpServletRequest request) {
        Session session = subject.getSession();
        if (user != null){
            session.setAttribute(FlowConstant.LOGIN_USER, user);
            Set<ACL> acls = aclService.getAclsByUserId(user.getId());
            // 3：把用户拥有的所有权限ACL列表查询出来放到session中
            session.setAttribute(FlowConstant.LOGIN_USER_ACLS, acls);
            // 插入登录日志
            LocalDateTime localDateTime = LocalDateTime.now();
            Map<String, String> content = new HashMap<>();
            content.put("msg", "登录");
            SysOperRecord sysOperRecord = SysOperRecord.builder()
                    .ip(IpUtils.getRemoteIP(request))
                    .userCode(user.getUserNo())
                    .userName(user.getRealName())
                    .source(SourceEnum.ADMIN.getSn())
                    .operContent(FastJsonUtils.objectToJson(content))
                    .operType(request.getMethod())
                    .dateTime(localDateTime)
                    .date(localDateTime.format(DateTimeFormatter.ofPattern("yyyy-MM-dd")))
                    .year(localDateTime.getYear())
                    .month(localDateTime.getMonthValue())
                    .day(localDateTime.getDayOfMonth())
                    .build();
            sysOperRecordService.saveSysOperRecord(sysOperRecord);
        }
    }

    @ExceptionHandler({UnauthorizedException.class, AuthorizationException.class})
    public void authorizationException(HttpServletResponse response) {
        ReturnVo returnVo = new ReturnVo(ReturnCode.FAIL, "您无此功能权限，请联系超级管理员！");
        writeJson(returnVo, response);
    }

    /**
     * 输出JSON
     */
    private void writeJson(ReturnVo returnVo, HttpServletResponse response) {
        PrintWriter out = null;
        try {
            response.setCharacterEncoding("UTF-8");
            response.setContentType("application/json; charset=utf-8");
            out = response.getWriter();
            out.write(FastJsonUtils.objectToJson(returnVo));
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (out != null){
                out.close();
            }
        }
    }

    /**
     * 通过acl获取左边的菜单
     *
     * @param acls acl列表
     * @return
     */
    protected List<Module> getModulesByAcls(Set<ACL> acls) {
        List<Module> modules = new ArrayList<>();
        if (CollectionUtils.isNotEmpty(acls)){
            List<String> moduleIds = new ArrayList<>();
            acls.forEach(acl -> {
                if (acl.getPermission(PermissionConatant.R) != 0) moduleIds.add(acl.getModuleId());
            });
            modules = moduleService.getModulesByIds(moduleIds);
        }
        return modules;
    }

    /**
     * 判断是否唯一
     *
     * @param checkExistVo 参数
     * @return
     */
    protected ReturnVo<Boolean> checkExist(IService<T> service, CheckExistVo checkExistVo) {
        ReturnVo<Boolean> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK", true);
        QueryWrapper<T> userQueryWrapper = new QueryWrapper<>();
        String camelToUnderline = com.baomidou.mybatisplus.core.toolkit.StringUtils.camelToUnderline(checkExistVo.getField());
        userQueryWrapper.eq(camelToUnderline, checkExistVo.getFieldValue());
        userQueryWrapper.eq("delFlag",FlowConstant.DEL_FLAG_1);
        int count = service.count(userQueryWrapper);
        if (StringUtils.isNotBlank(checkExistVo.getId())){
            T entity = service.getById(checkExistVo.getId());
            try {
                Object fieldValue = FieldUtils.readField(entity, checkExistVo.getField(), true);
                String oldValue = (String) fieldValue;
                if (!oldValue.equals(checkExistVo.getFieldValue()) && count > 0){
                    returnVo = new ReturnVo<>(ReturnCode.SUCCESS, checkExistVo.getFieldName() + EXIST_MESSAGE, false);
                }
            } catch (IllegalAccessException e) {
                logger.error("没有相关的字段！字段为：" + checkExistVo.getField());
            }
        } else {
            if (count > 0){
                returnVo = new ReturnVo<>(ReturnCode.SUCCESS, checkExistVo.getFieldName() + EXIST_MESSAGE, false);
            }
        }
        return returnVo;
    }
}
