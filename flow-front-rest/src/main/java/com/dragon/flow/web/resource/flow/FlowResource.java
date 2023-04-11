package com.dragon.flow.web.resource.flow;

import com.dragon.flow.constant.FlowFrontConstant;
import com.dragon.flow.enm.flowable.runtime.CommentTypeEnum;
import com.dragon.flow.enm.flowable.runtime.ProcessStatusEnum;
import com.dragon.flow.enm.form.ModelFormStatusEnum;
import com.dragon.flow.exception.FlowException;
import com.dragon.flow.model.flowable.ModelInfo;
import com.dragon.flow.model.user.Account;
import com.dragon.flow.vo.flowable.processinstance.InstanceQueryParamsVo;
import com.dragon.flow.vo.flowable.task.CompleteTaskVo;
import com.dragon.flow.vo.flowable.processinstance.EndVo;
import com.dragon.flow.vo.flowable.task.TaskQueryParamsVo;
import com.dragon.flow.vo.pager.ParamVo;
import com.dragon.flow.web.resource.BaseResource;
import com.dragon.tools.pager.Query;
import com.dragon.tools.utils.FastJsonUtils;
import com.dragon.tools.vo.ReturnVo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-12 23:00
 **/
@Slf4j
@RestController
@RequestMapping("/front/flow")
public class FlowResource extends BaseResource {

    @Autowired
    private RestTemplate restTemplate;

    @GetMapping(value = "/getOneActivityVoByProcessInstanceIdAndActivityId/{processInstanceId}/{activityId}", produces = "application/json")
    public ReturnVo getOneActivityVoByProcessInstanceIdAndActivityId(HttpServletRequest request, @PathVariable String processInstanceId, @PathVariable String activityId) {
        HttpHeaders headers = this.createHttpHeaders(request);
        HttpEntity httpEntity = new HttpEntity<>(headers);
        String url = this.getApiUrl(FlowFrontConstant.GET_GET_ONE_ACTIVITYVO_BYPROCESSINSTANCEIDANDACTIVITYID_URL)
                + "?processInstanceId=" + processInstanceId + "&activityId=" + activityId;
        ReturnVo returnVo = restTemplate.postForObject(url, httpEntity, ReturnVo.class);
        return returnVo;
    }

    public static void main(String[] args) {
        ParamVo<TaskQueryParamsVo> taskQueryParamsVoParamVo = new ParamVo<>();
        TaskQueryParamsVo data = new TaskQueryParamsVo();
        data.setUserCode("00008888");
        Query query = new Query();
        taskQueryParamsVoParamVo.setEntity(data);
        taskQueryParamsVoParamVo.setQuery(query);
        CompleteTaskVo completeTaskVo = new CompleteTaskVo();
        completeTaskVo.setUserCode("000000999");
        completeTaskVo.setTaskId("e07106f6b90911ebbd41185e0f154c43");
        completeTaskVo.setProcessInstanceId("c5d6fd03b90811ebbffa185e0f154c43");
        completeTaskVo.setMessage("审批通过");
        completeTaskVo.setCommentTypeEnum(CommentTypeEnum.SP);
        completeTaskVo.setProcessStatusEnum(ProcessStatusEnum.SPZ);

        EndVo endVo = new EndVo();
        endVo.setUserCode("0000001");
        endVo.setTaskId("e06fa761b90911ebbd41185e0f154c43");
        endVo.setProcessInstanceId("c5d6fd03b90811ebbffa185e0f154c43");
        endVo.setMessage("取消流程");
        endVo.setCommentTypeEnum(CommentTypeEnum.LCZZ);
        endVo.setProcessStatusEnum(ProcessStatusEnum.ZZ);
        System.out.println(FastJsonUtils.objectToJson(endVo));
    }

    @PostMapping(value = "/getModelInfoVoByPagerModel", produces = "application/json")
    public ReturnVo getModelInfoVoByPagerModel(HttpServletRequest request, @RequestBody ParamVo<ModelInfo> paramVo) {
        paramVo.getEntity().setStatus(ModelFormStatusEnum.YFB.getStatus());
        return this.applyPost(request, paramVo, FlowFrontConstant.GET_GETMODELINFOVOBYPAGERMODEL_URL);
    }

    @PostMapping(value = "/findMyProcessinstancesPagerModel", produces = "application/json")
    public ReturnVo findMyProcessinstancesPagerModel(HttpServletRequest request, @RequestBody ParamVo<InstanceQueryParamsVo> processInstanceVoParamVo) {
        Account loginAccount = this.getLoginAccount(request);
        processInstanceVoParamVo.getEntity().setUserCode(loginAccount.getCode());
        return this.applyPost(request, processInstanceVoParamVo, FlowFrontConstant.FIND_MY_PROCESSINSTANCESPAGERMODEL_URL);
    }

    @PostMapping(value = "/getAppingTasksPagerModel", produces = "application/json")
    public ReturnVo getAppingTasksPagerModel(HttpServletRequest request, @RequestBody ParamVo<TaskQueryParamsVo> taskQueryParamsVo) {
        Account loginAccount = this.getLoginAccount(request);
        taskQueryParamsVo.getEntity().setUserCode(loginAccount.getCode());
        return this.applyPost(request, taskQueryParamsVo, FlowFrontConstant.GET_APPING_TASKSPAGERMODEL_URL);
    }

    @PostMapping(value = "/getAppingTaskCont", produces = "application/json")
    public ReturnVo getAppingTaskCont(HttpServletRequest request, @RequestBody TaskQueryParamsVo taskQueryParamsVo) {
        Account loginAccount = getLoginAccount(request);
        taskQueryParamsVo.setUserCode(loginAccount.getCode());
        HttpHeaders headers = this.createHttpHeaders(request);
        HttpEntity<TaskQueryParamsVo> httpEntity = new HttpEntity<>(taskQueryParamsVo, headers);
        String posturl = this.getApiUrl(FlowFrontConstant.GET_APPING_TASKCONT_URL);
        String json = restTemplate.postForObject(posturl, httpEntity, String.class);
        ReturnVo returnVo = this.conversion(json);
        return returnVo;
    }

    @PostMapping(value = "/getApplyedTasksPagerModel", produces = "application/json")
    public ReturnVo getApplyedTasksPagerModel(HttpServletRequest request, @RequestBody ParamVo<TaskQueryParamsVo> taskQueryParamsVo) {
        Account loginAccount = this.getLoginAccount(request);
        taskQueryParamsVo.getEntity().setUserCode(loginAccount.getCode());
        return this.applyPost(request, taskQueryParamsVo, FlowFrontConstant.GET_APPLYED_TASKSPAGERMODEL_URL);
    }

    private <T> ReturnVo applyPost(HttpServletRequest request, ParamVo<T> paramVo, String url) {
        HttpHeaders headers = this.createHttpHeaders(request);
        HttpEntity<ParamVo> httpEntity = new HttpEntity<>(paramVo, headers);
        String posturl = this.getApiUrl(url);
        ReturnVo returnVo = restTemplate.postForObject(posturl, httpEntity, ReturnVo.class);
        return returnVo;
    }

    @GetMapping(value = "/getCommentInfosByProcessInstanceId/{processInstanceId}", produces = "application/json")
    public ReturnVo getCommentInfosByProcessInstanceId(HttpServletRequest request, @PathVariable String processInstanceId) {
        HttpHeaders headers = this.createHttpHeaders(request);
        HttpEntity httpEntity = new HttpEntity<>(headers);
        String url = this.getApiUrl(FlowFrontConstant.GET_COMMENTINFOS_BYPROCESSINSTANCEID_URL)
                + "?processInstanceId=" + processInstanceId;
        ReturnVo returnVo = restTemplate.postForObject(url, httpEntity, ReturnVo.class, processInstanceId);
        return returnVo;
    }

    @GetMapping(value = "/getStartorBaseInfoVoByProcessInstanceId/{processInstanceId}", produces = "application/json")
    public ReturnVo getStartorBaseInfoVoByProcessInstanceId(HttpServletRequest request, @PathVariable String processInstanceId) {
        HttpHeaders headers = this.createHttpHeaders(request);
        HttpEntity httpEntity = new HttpEntity<>(headers);
        String url = this.getApiUrl(FlowFrontConstant.GET_GETSTARTORBASEINFOVOBYPROCESSINSTANCEID_URL)
                + "?processInstanceId=" + processInstanceId;
        ReturnVo returnVo = restTemplate.postForObject(url, httpEntity, ReturnVo.class, processInstanceId);
        return returnVo;
    }

    @PostMapping(value = "/complete", produces = "application/json")
    public ReturnVo complete(HttpServletRequest request, @RequestBody CompleteTaskVo completeTaskVo) throws FlowException {
        HttpHeaders headers = this.createHttpHeaders(request);
        completeTaskVo.setProcessStatusEnum(ProcessStatusEnum.SPZ);
        completeTaskVo.setCommentTypeEnum(CommentTypeEnum.SP);
        Account loginAccount = getLoginAccount(request);
        completeTaskVo.setUserCode(loginAccount.getCode());
        HttpEntity<CompleteTaskVo> httpEntity = new HttpEntity<>(completeTaskVo, headers);
        String url = this.getApiUrl(FlowFrontConstant.COMPLETE_URL);
        ReturnVo returnVo = restTemplate.postForObject(url, httpEntity, ReturnVo.class);
        return returnVo;
    }

    @PostMapping(value = "/stopProcess", produces = "application/json")
    public ReturnVo stopProcess(HttpServletRequest request, @RequestBody EndVo endVo) {
        HttpHeaders headers = this.createHttpHeaders(request);
        Account loginAccount = getLoginAccount(request);
        endVo.setUserCode(loginAccount.getCode());
        endVo.setProcessStatusEnum(ProcessStatusEnum.ZZ);
        endVo.setCommentTypeEnum(CommentTypeEnum.LCZZ);
        HttpEntity<EndVo> httpEntity = new HttpEntity<>(endVo, headers);
        String url = this.getApiUrl(FlowFrontConstant.STOPPROCESS_URL);
        ReturnVo returnVo = restTemplate.postForObject(url, httpEntity, ReturnVo.class);
        return returnVo;
    }

    @GetMapping(value = "/getHighLightedNodeVoByProcessInstanceId/{processInstanceId}", produces = "application/json")
    public ReturnVo getHighLightedNodeVoByProcessInstanceId(HttpServletRequest request, @PathVariable String processInstanceId) {
        HttpHeaders headers = this.createHttpHeaders(request);
        HttpEntity httpEntity = new HttpEntity<>(headers);
        String url = this.getApiUrl(FlowFrontConstant.GET_HIGHLIGHTEDNODEVO_BYPROCESSINSTANCEID_URL)
                + "?processInstanceId=" + processInstanceId;
        ReturnVo returnVo = restTemplate.postForObject(url, httpEntity, ReturnVo.class, processInstanceId);
        return returnVo;
    }

    @GetMapping(value = "/loadBpmnXmlByModelKey/{modelKey}", produces = "application/json")
    public ReturnVo loadBpmnXmlByModelKey(HttpServletRequest request, @PathVariable String modelKey) {
        HttpHeaders headers = this.createHttpHeaders(request);
        HttpEntity httpEntity = new HttpEntity<>(headers);
        String url = this.getApiUrl(FlowFrontConstant.GET_LOAD_BPMNXML_BYMODELKEY_URL) + "?modelKey=" + modelKey;
        ReturnVo returnVo = restTemplate.postForObject(url, httpEntity, ReturnVo.class, modelKey);
        return returnVo;
    }

    @GetMapping(value = "/getModelInfoByModelKey/{modelKey}", produces = "application/json")
    public ReturnVo getModelInfoByModelKey(HttpServletRequest request, @PathVariable String modelKey) {
        HttpHeaders headers = this.createHttpHeaders(request);
        HttpEntity httpEntity = new HttpEntity<>(headers);
        String url = this.getApiUrl(FlowFrontConstant.GET_GETMODELINFOBYMODELKEY_URL) + "?modelKey=" + modelKey;
        ReturnVo returnVo = restTemplate.postForObject(url, httpEntity, ReturnVo.class, modelKey);
        return returnVo;
    }

    @GetMapping(value = "/getApps", produces = "application/json")
    public ReturnVo getApps(HttpServletRequest request) {
        HttpHeaders headers = this.createHttpHeaders(request);
        HttpEntity httpEntity = new HttpEntity<>(headers);
        String url = this.getApiUrl(FlowFrontConstant.GET_APPS_URL);
        ReturnVo returnVo = restTemplate.postForObject(url, httpEntity, ReturnVo.class);
        return returnVo;
    }

    @GetMapping(value = "/getCategories", produces = "application/json")
    public ReturnVo getCategories(HttpServletRequest request) {
        HttpHeaders headers = this.createHttpHeaders(request);
        HttpEntity httpEntity = new HttpEntity<>(headers);
        String url = this.getApiUrl(FlowFrontConstant.GET_CATEGORIES_URL);
        ReturnVo returnVo = restTemplate.postForObject(url, httpEntity, ReturnVo.class);
        return returnVo;
    }

    private ReturnVo conversion(String json){
        ReturnVo returnVo = null;
        try {
            returnVo = FastJsonUtils.jsonToObject(json, ReturnVo.class);
        }catch (Exception e){
            log.error("转化失败");
        }
        return returnVo;
    }

}
