package com.dragon.flow.privilege;

import com.dragon.flow.main.FlowAdminApplication;
import com.dragon.flow.model.flowable.ModelInfo;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.service.flowable.IFlowableBpmnService;
import com.dragon.flow.service.flowable.IFlowableModelService;
import com.dragon.flow.service.flowable.IModelInfoService;
import com.dragon.flow.vo.flowable.model.ModelInfoVo;
import org.flowable.bpmn.converter.BpmnXMLConverter;
import org.flowable.bpmn.model.BpmnModel;
import org.flowable.bpmn.model.UserTask;
import org.flowable.engine.RepositoryService;
import org.flowable.engine.RuntimeService;
import org.flowable.engine.TaskService;
import org.flowable.engine.repository.ProcessDefinition;
import org.flowable.engine.runtime.Execution;
import org.flowable.ui.common.util.XmlUtil;
import org.flowable.ui.modeler.serviceapi.ModelService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamReader;
import java.io.FileInputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-03-26 17:16
 **/

@SpringBootTest(classes = FlowAdminApplication.class)
public class TestModel {

    @Autowired
    private ModelService modelService;
    @Autowired
    private IFlowableModelService flowableModelService;
    @Autowired
    private RepositoryService repositoryService;
    @Autowired
    private RuntimeService runtimeService;
    @Autowired
    private TaskService taskService;
    @Autowired
    private BpmnXMLConverter bpmnXMLConverter;
    @Autowired
    private IFlowableBpmnService flowableBpmnService;
    @Autowired
    private IModelInfoService modelInfoService;

    @Test
    public void testModel002() {
        ModelInfo modelInfo = modelInfoService.getById("1384892429286211585");
        ModelInfoVo modelInfoVo = new ModelInfoVo();
        modelInfoVo.setModelId(modelInfo.getModelId());
        modelInfoVo.setFileName(modelInfo.getModelKey() + ".bpmn");

        modelInfoVo.setModelXml("");
//        modelInfoResource.saveBpmnModel()
    }

    @Test
    public void testModel001() throws Exception {

        //在画bpmn的时候定义空间命名一定要有xmlns:flowable="http://flowable.org/bpmn"
        //然而设置属性一定要加上flowable:
        /**
         *    <userTask id="Activity_0hdbueo" name="刘文军" flowable:assignee="000002">
         *       <incoming>Flow_0v4lvm2</incoming>
         *       <outgoing>Flow_1996n4q</outgoing>
         *     </userTask>
         */

        InputStream inputStream = new FileInputStream("D://test002.bpmn");
        XMLInputFactory xif = XmlUtil.createSafeXmlInputFactory();
        InputStreamReader xmlIn = new InputStreamReader(inputStream, StandardCharsets.UTF_8);
        XMLStreamReader xtr = xif.createXMLStreamReader(xmlIn);
        BpmnModel bpmnModel = bpmnXMLConverter.convertToBpmnModel(xtr);
        List<UserTask> flowElementsOfType = bpmnModel.getMainProcess().findFlowElementsOfType(UserTask.class);
        System.out.println(flowElementsOfType);

    }

    @Test
    public void testCreateModel() throws Exception {

//        ModelRepresentation modelRepresentation = new ModelRepresentation();
//        modelRepresentation.setName("camunda_test001");
//        modelRepresentation.setKey("camunda_test001");
//        modelRepresentation.setTenantId("flow");
//        modelRepresentation.setModelType(Model.MODEL_TYPE_BPMN);
//        modelRepresentation.setKey(modelRepresentation.getKey().replaceAll(" ", ""));
//        ModelKeyRepresentation modelKeyInfo = modelService.validateModelKey(null, modelRepresentation.getModelType(), modelRepresentation.getKey());
//        if (modelKeyInfo.isKeyAlreadyExists()) {
//
//        }
//        String json = modelService.createModelJson(modelRepresentation);
//        Model newModel = modelService.createModel(modelRepresentation, json, "lwj");


        //注意  保证bpmn中的process_id必须和key一致  isexecutable":"true" 必须为true
        InputStream inputStream = new FileInputStream("D://diagram-0001.BPMN");
        User user = new User();
        user.setUserNo("0000001");
//        flowableBpmnService.importBpmnModel("e9fd0747a83c11eb84fe185e0f154c43", "camunda_test001.bpmn", inputStream, user);
    }

    @Test
    public void testDeployModel() throws Exception {
        String modelId = "1deefc118fa111eb94fb185e0f154c43";
        ModelInfo extendModel = new ModelInfo();
        extendModel.setModelId(modelId);
        extendModel.setCategoryCode("0001");
        flowableBpmnService.deployBpmn(extendModel);
    }

    @Test
    public void testFindProcessDefinition() {
        ProcessDefinition test = repositoryService.createProcessDefinitionQuery().processDefinitionKey("test").latestVersion().singleResult();
        System.out.println(test.getName());
    }

    @Test
    public void testRun() {
        runtimeService.createProcessInstanceBuilder().processDefinitionKey("test002")
                .tenantId("flow").start();
    }

    @Test
    public void testTask() {
        taskService.complete("ba1e742f8e3911ebbdf2185e0f154c43");
    }

    @Test
    public void testChangeTask() {
        List<Execution> executions = runtimeService.createExecutionQuery().parentId("31a5c6bb8e3911eba2da185e0f154c43").list();
        List<String> exIds = new ArrayList<>();
        executions.forEach(execution -> exIds.add(execution.getId()));
        runtimeService.createChangeActivityStateBuilder()
                .moveExecutionsToSingleActivityId(exIds, "Activity_0hdbueo")
                .changeState();
    }
}
