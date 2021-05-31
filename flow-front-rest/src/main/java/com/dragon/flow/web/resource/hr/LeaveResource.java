package com.dragon.flow.web.resource.hr;

import com.baomidou.mybatisplus.core.toolkit.IdWorker;
import com.dragon.flow.constant.FlowFrontConstant;
import com.dragon.flow.enm.LeaveTypeEnum;
import com.dragon.flow.main.FlowFrontApplication;
import com.dragon.flow.model.hr.Leave;
import com.dragon.flow.model.user.Account;
import com.dragon.flow.service.hr.ILeaveService;
import com.dragon.flow.vo.flowable.runtime.StartProcessInstanceVo;
import com.dragon.flow.web.resource.BaseResource;
import com.dragon.tools.common.DateUtil;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.vo.ReturnVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import java.util.*;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-21 23:34
 **/
@RestController
@RequestMapping("/front/hr/attendance")
public class LeaveResource extends BaseResource {

    @Autowired
    private ILeaveService leaveService;
    @Autowired
    private RestTemplate restTemplate;

    @GetMapping(value = "/getLeaveById/{id}", produces = "application/json")
    public ReturnVo getLeaveById(@PathVariable String id){
        ReturnVo returnVo = new ReturnVo(ReturnCode.SUCCESS, "OK");
        Leave leave = leaveService.getLeaveById(id);
        returnVo.setData(leave);
        return returnVo;
    }

    @PostMapping(value = "/addLeave", produces = "application/json")
    public ReturnVo addLeave(HttpServletRequest request,@RequestBody Leave leave) {
        String businessKey = IdWorker.get32UUID();
        //启动流程
        StartProcessInstanceVo startProcessInstanceVo = new StartProcessInstanceVo();
        startProcessInstanceVo.setBusinessKey(businessKey);
        ReturnVo sessionReturnVo = (ReturnVo)request.getSession().getAttribute(FlowFrontConstant.LOGIN_ACCOUNT);
        Account account = (Account) sessionReturnVo.getData();
        startProcessInstanceVo.setCurrentUserCode(account.getCode());
        startProcessInstanceVo.setCreator(account.getCode());
        startProcessInstanceVo.setFlowLevelFlag(true);
        startProcessInstanceVo.setAppSn("flow");
        String enumMsgByType = LeaveTypeEnum.getEnumMsgByType(Integer.valueOf(leave.getType()));
        String time = DateUtil.format(new Date(),"yyyy-MM-dd HH:mm:ss");
        StringBuffer formName = new StringBuffer();
        formName.append("请假流程").append("-").append(enumMsgByType).append(" ").append(time);
        startProcessInstanceVo.setFormName(formName.toString());
        startProcessInstanceVo.setProcessDefinitionKey("leave");
        Map<String, Object> variables = new HashMap<>();
        variables.put("days", leave.getDays());
        List<String> userList = new ArrayList<>();
        userList.add("10003");
        userList.add("10004");
        variables.put("userList",userList);
        startProcessInstanceVo.setVariables(variables);
        String url = this.getApiUrl(FlowFrontConstant.START_PROCESSINSTANCEBYKEY_URL);
        HttpHeaders headers = this.createHttpHeaders(request);
        HttpEntity<StartProcessInstanceVo> httpEntity = new HttpEntity<>(startProcessInstanceVo, headers);
        ReturnVo returnVo = restTemplate.postForObject(url, httpEntity, ReturnVo.class);
        if (returnVo != null){
            String data = (String) returnVo.getData();
            if (data != null){
                leave.setId(businessKey);
                leave.setProcessInstanceId(data);
                leave.setCreateTime(new Date());
                this.leaveService.saveLeave(leave);
            }
        }
        return returnVo;
    }
}
