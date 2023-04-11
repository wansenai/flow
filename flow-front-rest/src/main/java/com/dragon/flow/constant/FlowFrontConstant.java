package com.dragon.flow.constant;

import org.springframework.context.annotation.Configuration;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-11 22:33
 **/
@Configuration
public class FlowFrontConstant {

    public static final String GET_GET_ONE_ACTIVITYVO_BYPROCESSINSTANCEIDANDACTIVITYID_URL = "/api/flow/getOneActivityVoByProcessInstanceIdAndActivityId";
    public static final String GET_GETMODELINFOVOBYPAGERMODEL_URL = "/api/flow/getModelInfoVoByPagerModel";
    public static final String FIND_MY_PROCESSINSTANCESPAGERMODEL_URL = "/api/flow/findMyProcessinstancesPagerModel";
    public static final String GET_APPING_TASKSPAGERMODEL_URL = "/api/flow/getAppingTasksPagerModel";
    public static final String GET_APPING_TASKCONT_URL = "/api/flow/getAppingTaskCont";
    public static final String GET_APPLYED_TASKSPAGERMODEL_URL = "/api/flow/getApplyedTasksPagerModel";
    public static final String GET_COMMENTINFOS_BYPROCESSINSTANCEID_URL = "/api/flow/getCommentInfosByProcessInstanceId";
    public static final String COMPLETE_URL = "/api/flow/complete";
    public static final String STOPPROCESS_URL = "/api/flow/stopProcess";
    public static final String GET_HIGHLIGHTEDNODEVO_BYPROCESSINSTANCEID_URL = "/api/flow/getHighLightedNodeVoByProcessInstanceId";
    public static final String GET_LOAD_BPMNXML_BYMODELKEY_URL = "/api/flow/loadBpmnXmlByModelKey";
    public static final String GET_GETMODELINFOBYMODELKEY_URL = "/api/flow/getModelInfoByModelKey";
    public static final String GET_FORMINFO_BYMODELKEY_URL = "/api/flow/getFormInfoByModelKey";
    public static final String GET_GETFORMDATAINFOBYPROCESSINSTANCEID_URL = "/api/flow/getFormDataInfoByProcessInstanceId";
    public static final String GET_GETSTARTORBASEINFOVOBYPROCESSINSTANCEID_URL = "/api/flow/getStartorBaseInfoVoByProcessInstanceId";
    public static final String STARTFORMFLOW_URL = "/api/flow/startFormFlow";
    public static final String GET_APPS_URL = "/api/flow/getApps";
    public static final String GET_CATEGORIES_URL = "/api/flow/getCategories";
    public static final String START_PROCESSINSTANCEBYKEY_URL = "/api/flow/startProcessInstanceByKey";
    public static final String GET_JWT_TOKEN_URL = "/api/flow/getJwtToken";


    public static final String LOGIN_ACCOUNT = "account";
    public static final String REST_API_TOKEN = "rest-api-token";

}
