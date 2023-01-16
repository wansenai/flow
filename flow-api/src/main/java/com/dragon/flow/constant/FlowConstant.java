package com.dragon.flow.constant;

/**
 * @program: flow
 * @description: 流程常量
 * @author: Bruce.Liu
 * @create: 2021-03-23 21:24
 **/
public class FlowConstant {
    public static final String APP_SN = "flow";
    public static final int DEL_FLAG_0 = 0;
    public static final int DEL_FLAG_1 = 1;

    /**
     * 自定义属性名
     */
    public static final String IS_EDITDATA = "iseditdata";
    public static final String NODE_TYPE = "nodetype";
    public static final String ASSIGNEE_TYPE = "assigneeType";

    /**
     * 提交人节点名称
     */
    public static final String FLOW_SUBMITTER = "提交人";
    /**
     * 提交人的变量名称
     */
    public static final String FLOW_SUBMITTER_VAR = "initiator";
    /**
     * juel表达式解析类
     */
    public static final String FLOW_JUEL = "fuel";
    /**
     * 自动跳过节点设置属性
     */
    public static final String FLOWABLE_SKIP_EXPRESSION_ENABLED = "_FLOWABLE_SKIP_EXPRESSION_ENABLED";
    /**
     * mybatis的扫描mapper包路径
     */
    public static final String MAPPER_SCAN_MYBATIS_PLUS = "com.dragon.*.mapper.*";
    //MD5加盐
    public static final String MD5_PREFIX = "dragon-flow-lwj-xie-2021";
    //sessionid的名称
    public static final String DRAGON_SESSION_ID = "DRAGON_SESSION_ID";
    //标记流程请求是后台
    public static final String FLOW_ADMIN = "flow_admin";
    //标记流程请求是前台
    public static final String FLOW_FRONT = "flow_front";

    //设置到header中标记是前台还是后台
    public static final String FRONT_OR_BACK = "front_or_back";


    //登录用户的session中的key值
    public static final String LOGIN_USER = "login_user";
    public static final String LOGIN_ROLES = "login_roles";
    //登录用户的acl列表
    public static final String LOGIN_USER_ACLS = "login_user_acls";
    //登录用户的模块列表
    public static final String LOGIN_MODULES = "login_modules";


    //缓存模块名称
    public static final String CACHE_PROCESS_ACTIVITYS = "cache-process-activitys";
    public static final String CACHE_PROCESS_HIGHLIGHTEDNODES = "cache-process-highlightednodes";
    public static final String CACHE_PROCESS_INSTANCE = "cache-process-instance";
    public static final String CACHE_PROCESS_DEFINITION = "cache-process-definition";
    public static final String CACHE_COMMON_DICTIONARY = "cache-common-dictionary";
    public static final String CACHE_START_PROCESSINSTANCE = "cache-start-processinstance";
    public static final String CACHE_ACL_PERMISSIONVALS = "cache-acl-permissionvals";
    public static final String CACHE_PROCESS_STATUS = "cache-process-status";


}
