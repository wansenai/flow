package com.dragon.flow.api.rest;

import com.baomidou.kisso.SSOConfig;
import com.baomidou.kisso.SSOHelper;
import com.baomidou.kisso.annotation.Action;
import com.baomidou.kisso.annotation.Login;
import com.baomidou.kisso.common.RsaKeyHelper;
import com.baomidou.kisso.enums.TokenOrigin;
import com.baomidou.kisso.security.token.SSOToken;
import com.dragon.flow.api.impl.AbstractFlowApiImpl;
import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.exception.FlowException;
import com.dragon.flow.model.base.App;
import com.dragon.flow.model.flowable.ModelInfo;
import com.dragon.flow.service.base.IAppService;
import com.dragon.flow.vo.flowable.model.HighLightedNodeVo;
import com.dragon.flow.vo.flowable.model.ModelInfoVo;
import com.dragon.flow.vo.flowable.processinstance.EndVo;
import com.dragon.flow.vo.flowable.processinstance.InstanceQueryParamsVo;
import com.dragon.flow.vo.flowable.processinstance.StartorBaseInfoVo;
import com.dragon.flow.vo.flowable.runtime.StartProcessInstanceVo;
import com.dragon.flow.vo.flowable.task.ActivityVo;
import com.dragon.flow.vo.flowable.task.CompleteTaskVo;
import com.dragon.flow.vo.flowable.task.TaskQueryParamsVo;
import com.dragon.flow.vo.pager.ParamVo;
import com.dragon.flow.vo.token.AuthTokenVo;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.vo.ReturnVo;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.security.Key;
import java.util.*;

/**
 * @program: flow
 * @description: 接口实现
 * @author: Bruce.Liu
 * @create: 2021-05-08 14:36
 **/
@Api(tags = "流程中心相关接口")
@RestController
@RequestMapping("/api/flow")
public class FlowApiRest extends AbstractFlowApiImpl {
    protected Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private IAppService appService;

    @Override
    @ApiOperation(value = "根据条件分页获取流程模板", notes = "根据条件分页获取流程模板")
    @ApiImplicitParam(name = "params", value = "分页查询参数", required = true, dataType = "ParamVo")
    @PostMapping(value = "/getModelInfoVoByPagerModel", produces = "application/json")
    public ReturnVo<PagerModel> getModelInfoVoByPagerModel(@RequestBody ParamVo<ModelInfo> params) {
        return super.getModelInfoVoByPagerModel(params);
    }

    /**
     * 通过对接的应用的标识和秘钥获取token
     *
     * @param params 对接的应用的标识和秘钥
     * @return
     */
    @Login(action = Action.Skip)
    @ApiOperation(value = "通过用户名密码获取token", notes = "通过用户名密码获取token")
    @ApiImplicitParam(name = "AuthTokenVo", dataType = "String", required = true, value = "对接的应用的认证信息", defaultValue = "params")
    @PostMapping("/getJwtToken")
    public ReturnVo<String> getJwtToken(HttpServletRequest request, HttpServletResponse response, @RequestBody AuthTokenVo params) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        String jwtToken = null;
        App app = appService.getAppBySecretKeyAndSn(params.getAppSn(), params.getAppSecretKey());
        if (app != null){
            JwtBuilder jwtBuilder = this.createJwtBuilder(app);
            SSOToken ssoToken = SSOToken.create().setId(app.getId()).setIssuer(app.getName())
                    .setOrigin(TokenOrigin.HTML5).setJwtBuilder(jwtBuilder);
            jwtToken = ssoToken.getToken();
            // Cookie 模式设置
            SSOHelper.setCookie(request, response, ssoToken);
            response.setHeader("accessToken", jwtToken);
            response.setHeader(FlowConstant.FRONT_OR_BACK, FlowConstant.FLOW_FRONT);
        } else {
            returnVo = new ReturnVo<>(ReturnCode.FAIL, "错误的认证信息");
        }
        returnVo.setData(jwtToken);
        return returnVo;
    }

    private JwtBuilder createJwtBuilder(App app) {
        JwtBuilder jwtBuilder = null;
        try {
            SSOConfig ssoConfig = SSOConfig.getInstance();
            Key key = RsaKeyHelper.getRsaKey(new ClassPathResource(ssoConfig.getRsaJksStore()).getInputStream(),
                    ssoConfig.getRsaAlias(), ssoConfig.getRsaKeypass(), ssoConfig.getRsaStorepass());
            Map<String, Object> claims = new HashMap<>();
            claims.put("id", app.getId());
            claims.put("name", app.getName());
            Calendar expires = Calendar.getInstance();
            expires.add(Calendar.HOUR, 2);
            // 加密
            jwtBuilder = Jwts.builder()
                    .setClaims(claims)
                    .setSubject("flow rsa jwt")
                    .setIssuedAt(new Date())
                    .setExpiration(expires.getTime())
                    .signWith(key, SignatureAlgorithm.RS512);
        } catch (Exception e) {
            logger.error("加密失败", e);
        }
        return jwtBuilder;
    }

    @Override
    @ApiOperation(value = "通过modelKey获取模型对象", notes = "通过modelKey获取模型对象")
    @ApiImplicitParam(name = "modelKey", dataType = "String", required = true, value = "模型Key", defaultValue = "test_leave")
    @PostMapping(value = "/loadBpmnXmlByModelKey", produces = "application/json")
    public ReturnVo<ModelInfoVo> loadBpmnXmlByModelKey(String modelKey) {
        return super.loadBpmnXmlByModelKey(modelKey);
    }

    @Override
    @ApiOperation(value = "通过modelKey获取模型对象", notes = "通过modelKey获取模型对象")
    @ApiImplicitParam(name = "modelKey", dataType = "String", required = true, value = "模型Key", defaultValue = "test_leave")
    @PostMapping(value = "/getModelInfoByModelKey", produces = "application/json")
    public ReturnVo<ModelInfo> getModelInfoByModelKey(String modelKey) {
        return super.getModelInfoByModelKey(modelKey);
    }

    @Override
    @ApiOperation(value = "通过流程实例ID获取流程发起者的基本信息", notes = "通过流程实例ID获取流程发起者的基本信息")
    @ApiImplicitParam(name = "processInstanceId", dataType = "String", required = true, value = "流程实例ID", defaultValue = "xxx")
    @PostMapping(value = "/getStartorBaseInfoVoByProcessInstanceId", produces = "application/json")
    public ReturnVo<StartorBaseInfoVo> getStartorBaseInfoVoByProcessInstanceId(String processInstanceId){
        return super.getStartorBaseInfoVoByProcessInstanceId(processInstanceId);
    }

    @Override
    @ApiOperation(value = "查询节点信息", notes = "查询节点信息")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "processInstanceId", dataType = "String", required = true, value = "流程实例id", defaultValue = "018273249827498324"),
            @ApiImplicitParam(name = "activityId", dataType = "String", required = true, value = "节点id", defaultValue = "12143334")
    })
    @PostMapping(value = "/getOneActivityVoByProcessInstanceIdAndActivityId", produces = "application/json")
    public ReturnVo<ActivityVo> getOneActivityVoByProcessInstanceIdAndActivityId(String processInstanceId, String activityId) {
        return super.getOneActivityVoByProcessInstanceIdAndActivityId(processInstanceId,activityId);
    }

    @Override
    @ApiOperation(value = "查询我发起的流程", notes = "查询我发起的流程列表")
    @ApiImplicitParam(name = "processInstanceVoParamVo", value = "分页查询参数", required = true, dataType = "ParamVo")
    @PostMapping(value = "/findMyProcessinstancesPagerModel", produces = "application/json")
    public ReturnVo<PagerModel> findMyProcessinstancesPagerModel(@RequestBody ParamVo<InstanceQueryParamsVo> processInstanceVoParamVo) {
        return super.findMyProcessinstancesPagerModel(processInstanceVoParamVo);
    }

    @Override
    @ApiOperation(value = "查询我的待办任务总数", notes = "查询我的待办任务总数")
    @ApiImplicitParam(name = "getAppingTaskCont", value = "查询参数", required = true, dataType = "params")
    @PostMapping(value = "/getAppingTaskCont", produces = "application/json")
    public ReturnVo<Long> getAppingTaskCont(@RequestBody TaskQueryParamsVo params) {
        return super.getAppingTaskCont(params);
    }

    @Override
    @ApiOperation(value = "查询我的待办任务", notes = "查询我的待办任务列表")
    @ApiImplicitParam(name = "getAppingTasksPagerModel", value = "分页查询参数", required = true, dataType = "ParamVo")
    @PostMapping(value = "/getAppingTasksPagerModel", produces = "application/json")
    public ReturnVo<PagerModel> getAppingTasksPagerModel(@RequestBody ParamVo<TaskQueryParamsVo> taskQueryParamsVoParamVo) {
        return super.getAppingTasksPagerModel(taskQueryParamsVoParamVo);
    }

    @Override
    @ApiOperation(value = "查询我的已办任务", notes = "查询我的已办任务列表")
    @ApiImplicitParam(name = "getApplyedTasksPagerModel", value = "分页查询参数", required = true, dataType = "ParamVo")
    @PostMapping(value = "/getApplyedTasksPagerModel", produces = "application/json")
    public ReturnVo<PagerModel> getApplyedTasksPagerModel(@RequestBody ParamVo<TaskQueryParamsVo> taskQueryParamsVoParamVo) {
        return super.getApplyedTasksPagerModel(taskQueryParamsVoParamVo);
    }

    @Override
    @ApiOperation(value = "查询当前流程的审批记录", notes = "查询当前流程的审批记录列表")
    @ApiImplicitParam(name = "getCommentInfosByProcessInstanceId", value = "流程实例id", required = true, dataType = "String")
    @PostMapping(value = "/getCommentInfosByProcessInstanceId", produces = "application/json")
    public ReturnVo<List> getCommentInfosByProcessInstanceId(String processInstanceId) {
        return super.getCommentInfosByProcessInstanceId(processInstanceId);
    }

    @Override
    @ApiOperation(value = "启动流程", notes = "启动流程")
    @ApiImplicitParam(name = "startProcessInstanceByKey", value = "启动流程", required = true, dataType = "StartProcessInstanceVo")
    @PostMapping(value = "/startProcessInstanceByKey", produces = "application/json")
    public ReturnVo<String> startProcessInstanceByKey(@RequestBody StartProcessInstanceVo params) {
        return super.startProcessInstanceByKey(params);
    }

    @Override
    @ApiOperation(value = "审批", notes = "审批")
    @ApiImplicitParam(name = "complete", value = "审批", required = true, dataType = "completeTaskVo")
    @PostMapping(value = "/complete", produces = "application/json")
    public ReturnVo<String> complete(@RequestBody CompleteTaskVo completeTaskVo) throws FlowException {
        return super.complete(completeTaskVo);
    }

    @Override
    @ApiOperation(value = "拒绝", notes = "拒绝")
    @ApiImplicitParam(name = "stopProcess", value = "拒绝", required = true, dataType = "endVo")
    @PostMapping(value = "/stopProcess", produces = "application/json")
    public ReturnVo<String> stopProcess(@RequestBody EndVo endVo) {
        return super.stopProcess(endVo);
    }

    @Override
    @ApiOperation(value = "获取高亮线和节点", notes = "获取高亮线和节点")
    @ApiImplicitParam(name = "getHighLightedNodeVoByProcessInstanceId", value = "getHighLightedNodeVoByProcessInstanceId", required = true, dataType = "String")
    @PostMapping(value = "/getHighLightedNodeVoByProcessInstanceId", produces = "application/json")
    public ReturnVo<HighLightedNodeVo> getHighLightedNodeVoByProcessInstanceId(String processInstanceId) {
        return super.getHighLightedNodeVoByProcessInstanceId(processInstanceId);
    }

    @Override
    @ApiOperation(value = "获取所有系统", notes = "获取所有系统")
    @ApiImplicitParam(name = "getApps", value = "getApps")
    @PostMapping(value = "/getApps", produces = "application/json")
    public ReturnVo<List> getApps() {
        return super.getApps();
    }

    @Override
    @ApiOperation(value = "获取所有流程分类", notes = "获取所有流程分类")
    @ApiImplicitParam(name = "getCategories", value = "getCategories")
    @PostMapping(value = "/getCategories", produces = "application/json")
    public ReturnVo<List> getCategories() {
        return super.getCategories();
    }
}
