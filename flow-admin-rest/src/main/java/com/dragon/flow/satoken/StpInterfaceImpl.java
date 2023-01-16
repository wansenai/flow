package com.dragon.flow.satoken;

import cn.dev33.satoken.session.SaSession;
import cn.dev33.satoken.stp.StpInterface;
import cn.dev33.satoken.stp.StpUtil;
import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.model.org.Role;
import com.dragon.flow.model.privilege.ACL;
import com.dragon.flow.model.privilege.AppPrivilegeValue;
import com.dragon.flow.service.privilege.IAppPrivilegeValueService;
import org.apache.commons.collections.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

public class StpInterfaceImpl implements StpInterface {

    @Autowired
    private IAppPrivilegeValueService appPrivilegeValueService;

    @Override
    public List<String> getPermissionList(Object loginId, String loginType) {
        List<String> list = new ArrayList<>();
        if (StpUtil.isLogin()) {
            SaSession session = StpUtil.getSessionByLoginId(loginId);
            Object aclObj = session.get(FlowConstant.LOGIN_USER_ACLS);
            if (aclObj != null) {
                List<ACL> acls = (ArrayList) aclObj;
                List<AppPrivilegeValue> privilegeValues = appPrivilegeValueService.list();
                if (CollectionUtils.isNotEmpty(acls)) {
                    acls.forEach(acl -> {
                        privilegeValues.forEach(appPrivilegeValue -> {
                            int permission = acl.getPermission(appPrivilegeValue.getPosition());
                            if (permission > 0) {
                                String permissionExist = acl.getModuleSn() + "-" + appPrivilegeValue.getPosition();
                                list.add(permissionExist);
                            }
                        });
                    });
                }
            }
        }
        return list;
    }

    @Override
    public List<String> getRoleList(Object loginId, String loginType) {
        List<String> list = new ArrayList<>();
        if (StpUtil.isLogin()) {
            SaSession session = StpUtil.getSessionByLoginId(loginId);
            Object roleObj = session.get(FlowConstant.LOGIN_ROLES);
            if (roleObj != null) {
                List<Role> roles = (List<Role>) roleObj;
                if (CollectionUtils.isNotEmpty(roles)) {
                    roles.forEach(role -> list.add(role.getSn()));
                }
            }
        }
        return list;
    }
}
