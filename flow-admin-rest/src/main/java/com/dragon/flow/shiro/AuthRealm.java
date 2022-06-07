//package com.dragon.flow.shiro;
//
//import com.dragon.flow.model.privilege.Group;
//import com.dragon.flow.model.privilege.User;
//import com.dragon.flow.service.privilege.IAclService;
//import com.dragon.flow.service.privilege.IGroupService;
//import com.dragon.flow.service.privilege.IUserService;
//import com.dragon.flow.vo.privilege.ModulePermission;
//import org.apache.commons.collections.CollectionUtils;
//import org.apache.shiro.authc.*;
//import org.apache.shiro.authz.AuthorizationInfo;
//import org.apache.shiro.authz.SimpleAuthorizationInfo;
//import org.apache.shiro.realm.AuthorizingRealm;
//import org.apache.shiro.subject.PrincipalCollection;
//import org.springframework.beans.factory.annotation.Autowired;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Set;
//
///**
// * @Description: 自定义
// * @Author: Bruce.liu
// * @Since:11:40 2021/05/3
// */
//public class AuthRealm extends AuthorizingRealm {
//    @Autowired
//    private IUserService userService;
//    @Autowired
//    private IAclService aclService;
//    @Autowired
//    private IGroupService groupService;
//
//    /**
//     * 认证.登录
//     *
//     * @param token
//     * @return
//     * @throws AuthenticationException
//     */
//    @Override
//    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
//        /**
//         * 获取用户输入的token
//         */
//        UsernamePasswordToken utoken = (UsernamePasswordToken) token;
//        String username = utoken.getUsername();
//        User user = userService.getUserByUsername(username);
//        if (user == null){
//            throw new UnknownAccountException();
//        }
//        return new SimpleAuthenticationInfo(user, user.getPassword(), getName());
//    }
//
//    /**
//     * 判断授权
//     */
//    @Override
//    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
//        User user = (User) principals.fromRealm(getName()).iterator().next();
//        SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
//        List<String> permissions = new ArrayList<>();
//        Set<ModulePermission> modulePermissions = null;
//        if ("admin".equals(user.getUsername())){
//            modulePermissions = aclService.getModulePermissionsByAdminId(user.getId());
//        }else {
//            modulePermissions = aclService.getModulePermissionsByUserId(user.getId());
//        }
//        modulePermissions.forEach(mp -> {
//            StringBuffer p = new StringBuffer();
//            p.append(mp.getModuleSn()).append(":").append(mp.getPermissionValue());
//            permissions.add(p.toString());
//        });
//        info.addStringPermissions(permissions);
//        List<String> groups = new ArrayList<>();
//        List<Group> groupList = groupService.getGroupsByUserId(user.getId());
//        if(CollectionUtils.isNotEmpty(groupList)) {
//            groupList.forEach(group -> groups.add(group.getSn()));
//        }
//        info.addRoles(groups);
//        return info;
//    }
//
//    /**
//     * 重写授权的key获取方法  避免Object不一致现象
//     *
//     * @param principals
//     * @return
//     */
//    @Override
//    protected Object getAuthorizationCacheKey(PrincipalCollection principals) {
//        User user = (User) principals.fromRealm(getName()).iterator().next();
//        String key = "authorizationCacheKey-" + user.getId();
//        return key;
//    }
//
//    /**
//     * 重写认证的key获取方法  避免Object不一致现象
//     *
//     * @param token
//     * @return
//     */
//    @Override
//    protected Object getAuthenticationCacheKey(AuthenticationToken token) {
//        return token != null ? token.getPrincipal().toString() : null;
//    }
//}
