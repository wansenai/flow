package com.dragon.flow.service.flowable.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.dragon.flow.enm.form.ModelFormStatusEnum;
import com.dragon.flow.mapper.flowable.IFlowableProcessDefinitionMapper;
import com.dragon.flow.model.flowable.FlowableProcessDefinition;
import com.dragon.flow.model.flowable.ModelInfo;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.properties.DragonFlowProperties;
import com.dragon.flow.service.flowable.IFlowableBpmnService;
import com.dragon.flow.service.flowable.IFlowableModelService;
import com.dragon.flow.service.flowable.IModelInfoService;
import com.dragon.flow.vo.flowable.model.ModelInfoVo;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.vo.ReturnVo;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.apache.commons.lang.StringUtils;
import org.flowable.bpmn.converter.BpmnXMLConverter;
import org.flowable.bpmn.model.BpmnModel;
import org.flowable.editor.language.json.converter.BaseBpmnJsonConverter;
import org.flowable.editor.language.json.converter.CustomBpmnJsonConverter;
import org.flowable.editor.language.json.converter.util.CollectionUtils;
import org.flowable.engine.RepositoryService;
import org.flowable.engine.repository.Deployment;
import org.flowable.ui.common.service.exception.BadRequestException;
import org.flowable.ui.common.util.XmlUtil;
import org.flowable.ui.modeler.domain.AbstractModel;
import org.flowable.ui.modeler.domain.Model;
import org.flowable.ui.modeler.model.ModelRepresentation;
import org.flowable.ui.modeler.service.AppDefinitionImportService;
import org.flowable.ui.modeler.service.ConverterContext;
import org.flowable.ui.modeler.serviceapi.ModelService;
import org.flowable.validation.ProcessValidator;
import org.flowable.validation.ProcessValidatorFactory;
import org.flowable.validation.ValidationError;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.XMLStreamReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.List;

/**
 * @program: flow
 * @description: 流程引擎服务实现
 * @author: Bruce.Liu
 * @create: 2021-04-22 14:52
 **/
@Service
public class FlowableBpmnServiceImpl implements IFlowableBpmnService {

    private static final String BPMN_EXTENSION = ".bpmn";
    private static final String BPMN20_XML_EXTENSION = ".bpmn20.xml";

    @Autowired
    private IModelInfoService modelInfoService;
    @Autowired
    private ModelService modelService;
    @Autowired
    private RepositoryService repositoryService;
    @Autowired
    private IFlowableProcessDefinitionMapper flowableProcessDefinitionMapper;
    @Autowired
    private IFlowableModelService flowableModelService;
    @Autowired
    protected CustomBpmnJsonConverter bpmnJsonConverter;
    @Autowired
    protected BpmnXMLConverter bpmnXMLConverter;
    @Autowired
    protected DragonFlowProperties dragonFlowProperties;
    @Autowired
    private ProcessValidatorFactory processValidatorFactory;
    @Autowired
    private ObjectMapper objectMapper;

    @Override
    public ReturnVo<String> validateBpmnModel(String modelId, String fileName, InputStream modelStream) {
        ReturnVo<String> returnVo = new ReturnVo(ReturnCode.SUCCESS, "OK");
        Model processModel = modelService.getModel(modelId);
        if (StringUtils.isBlank(fileName)) {
            fileName = processModel.getKey() + BPMN_EXTENSION;
        }
        try {
            XMLInputFactory xif = XmlUtil.createSafeXmlInputFactory();
            InputStreamReader xmlIn = new InputStreamReader(modelStream, StandardCharsets.UTF_8);
            XMLStreamReader xtr = xif.createXMLStreamReader(xmlIn);
            BpmnModel bpmnModel = bpmnXMLConverter.convertToBpmnModel(xtr);
            bpmnModel.getMainProcess().setId(processModel.getKey());
            bpmnModel.setTargetNamespace(BaseBpmnJsonConverter.NAMESPACE);
            if (CollectionUtils.isEmpty(bpmnModel.getProcesses())) {
                returnVo = new ReturnVo(ReturnCode.FAIL, "No process found in definition " + fileName);
                return returnVo;
            }
            if (bpmnModel.getLocationMap().size() == 0) {
                returnVo = new ReturnVo(ReturnCode.FAIL, "No required BPMN DI information found in definition " + fileName);
                return returnVo;
            }
            returnVo = this.validationErrors(bpmnModel);
        } catch (XMLStreamException e) {
            returnVo = new ReturnVo(ReturnCode.FAIL, "bpmn.js failed for " + fileName + ", error message " + e.getMessage());
            return returnVo;
        }
        return returnVo;
    }

    private ReturnVo<String> validationErrors(BpmnModel bpmnModel) {
        ReturnVo<String> returnVo = new ReturnVo(ReturnCode.SUCCESS, "OK");
        ProcessValidator processValidator = processValidatorFactory.createDefaultProcessValidator();
        List<ValidationError> validationErrors = processValidator.validate(bpmnModel);
        if (CollectionUtils.isNotEmpty(validationErrors)) {
            StringBuffer message = new StringBuffer();
            validationErrors.forEach(validationError -> message.append(validationError.toString() + "\n"));
            returnVo = new ReturnVo(ReturnCode.FAIL, message.toString());
            return returnVo;
        }
        return returnVo;
    }

    @Override
    public ReturnVo<String> importBpmnModel(String modelId, String fileName, InputStream modelStream, User user) {
        ReturnVo<String> returnVo = new ReturnVo(ReturnCode.SUCCESS, "OK");
        Model processModel = modelService.getModel(modelId);
        if (StringUtils.isBlank(fileName)) {
            fileName = processModel.getKey() + BPMN_EXTENSION;
        }
        if (fileName != null && (fileName.endsWith(BPMN_EXTENSION) || fileName.endsWith(BPMN20_XML_EXTENSION))) {
            try {
                XMLInputFactory xif = XmlUtil.createSafeXmlInputFactory();
                InputStreamReader xmlIn = new InputStreamReader(modelStream, StandardCharsets.UTF_8);
                XMLStreamReader xtr = xif.createXMLStreamReader(xmlIn);
                BpmnModel bpmnModel = bpmnXMLConverter.convertToBpmnModel(xtr);
                bpmnModel.getMainProcess().setId(processModel.getKey());
                bpmnModel.setTargetNamespace(BaseBpmnJsonConverter.NAMESPACE);
                if (CollectionUtils.isEmpty(bpmnModel.getProcesses())) {
                    returnVo = new ReturnVo(ReturnCode.FAIL, "No process found in definition " + fileName);
                    return returnVo;
                }
                if (bpmnModel.getLocationMap().size() == 0) {
                    returnVo = new ReturnVo(ReturnCode.FAIL, "No required BPMN DI information found in definition " + fileName);
                    return returnVo;
                }
                ConverterContext converterContext = new ConverterContext(modelService, objectMapper);
                List<AbstractModel> decisionTables = modelService.getModelsByModelType(AbstractModel.MODEL_TYPE_DECISION_TABLE);
                decisionTables.forEach(abstractModel -> {
                    Model model = (Model) abstractModel;
                    converterContext.addDecisionTableModel(model);
                });
                ObjectNode modelNode = bpmnJsonConverter.convertToJson(bpmnModel, converterContext);
                this.setProcessPropertiesToKey(modelNode, processModel.getKey());
                AbstractModel savedModel = modelService.saveModel(modelId, processModel.getName(), processModel.getKey(),
                        processModel.getDescription(), modelNode.toString(), false,
                        null, user.getUserNo());
                LambdaQueryWrapper<ModelInfo> modelInfoLambdaQueryWrapper = new LambdaQueryWrapper<>();
                modelInfoLambdaQueryWrapper.eq(ModelInfo::getModelId, savedModel.getId());
                ModelInfo modelInfo = modelInfoService.getOne(modelInfoLambdaQueryWrapper);
                modelInfo.setStatus(ModelFormStatusEnum.DFB.getStatus());
                modelInfo.setExtendStatus(ModelFormStatusEnum.DFB.getStatus());
                modelInfoService.saveOrUpdate(modelInfo);
                returnVo.setData(savedModel.getId());
                return returnVo;
            } catch (BadRequestException e) {
                throw e;
            } catch (Exception e) {
                returnVo = new ReturnVo(ReturnCode.FAIL, "bpmn.js failed for " + fileName + ", error message " + e.getMessage());
                return returnVo;
            }
        } else {
            returnVo = new ReturnVo(ReturnCode.FAIL, "Invalid file name, only .bpmn and .bpmn20.xml files are supported not " + fileName);
            return returnVo;
        }
    }

    private void setProcessPropertiesToKey(ObjectNode modelNode, String key) {
        ObjectNode objectNode = (ObjectNode) modelNode.get("properties");
        objectNode.put("process_id", key);
        objectNode.put("processid", key);
    }

    @Override
    public ReturnVo<String> stopBpmn(String modelId) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        LambdaUpdateWrapper<ModelInfo> modelInfoLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
        modelInfoLambdaUpdateWrapper.eq(ModelInfo::getModelId, modelId).set(ModelInfo::getStatus, ModelFormStatusEnum.TY.getStatus())
                .set(ModelInfo::getExtendStatus, ModelFormStatusEnum.TY.getStatus());
        modelInfoService.update(modelInfoLambdaUpdateWrapper);
        return returnVo;
    }

    @Override
    public ReturnVo<String> publishBpmn(String modelId) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.FAIL, "发布失败！");
        Model model = modelService.getModel(modelId);
        BpmnModel bpmnModel = modelService.getBpmnModel(model);
        if(StringUtils.isBlank(model.getTenantId())){
            returnVo.setMsg("发布失败，请设置流程所属系统！");
            return returnVo;
        }
        ReturnVo<String> validReturnVo = this.validationErrors(bpmnModel);
        if (!validReturnVo.isSuccess()) {
            returnVo.setMsg(validReturnVo.getMsg());
            return returnVo;
        }
        LambdaQueryWrapper<ModelInfo> modelInfoLambdaQueryWrapper = new LambdaQueryWrapper<>();
        modelInfoLambdaQueryWrapper.eq(ModelInfo::getModelId, modelId);
        ModelInfo modelInfo = modelInfoService.getOne(modelInfoLambdaQueryWrapper);
        if (modelInfo != null) {
            ReturnVo<String> statusReturnVo = ModelFormStatusEnum.checkActive(modelInfo.getStatus(), modelInfo.getExtendStatus());
            if (statusReturnVo.isSuccess()) {
                this.deployBpmn(modelInfo);
                LambdaUpdateWrapper<ModelInfo> modelInfoLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
                modelInfoLambdaUpdateWrapper.set(ModelInfo::getStatus, ModelFormStatusEnum.YFB.getStatus())
                        .set(ModelInfo::getExtendStatus, ModelFormStatusEnum.YFB.getStatus())
                        .eq(ModelInfo::getModelId, modelId);
                modelInfoService.update(modelInfoLambdaUpdateWrapper);
                returnVo.setCode(ReturnCode.SUCCESS);
                returnVo.setMsg("发布成功！");
            } else {
                returnVo.setMsg(statusReturnVo.getMsg());
            }
        } else {
            returnVo.setMsg("没有找到对应的模型，请确认!");
        }
        return returnVo;
    }

    @Override
    public ReturnVo<Model> createInitBpmn(ModelInfo modelInfo, User user) {
        ModelRepresentation modelRepresentation = new ModelRepresentation();
        modelRepresentation.setModelType(AbstractModel.MODEL_TYPE_BPMN);
        modelRepresentation.setKey(modelInfo.getModelKey());
        modelRepresentation.setName(modelInfo.getName());
        modelRepresentation.setTenantId(modelInfo.getAppSn());
        modelRepresentation.setLastUpdated(new Date());
        ReturnVo<Model> returnVo = flowableModelService.createModel(modelRepresentation, user);
        return returnVo;
    }

    @Override
    public ReturnVo<Deployment> deployBpmn(ModelInfo modelInfo) {
        ReturnVo<Deployment> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        Model model = modelService.getModel(modelInfo.getModelId());
        BpmnModel bpmnModel = modelService.getBpmnModel(model);
        Deployment deploy = repositoryService.createDeployment()
                .name(model.getName())
                .key(model.getKey())
                .category(modelInfo.getCategoryCode())
                .tenantId(model.getTenantId())
                .addBpmnModel(model.getKey() + BPMN_EXTENSION, bpmnModel)
                .deploy();
        FlowableProcessDefinition flowableProcessDefinition = new FlowableProcessDefinition();
        flowableProcessDefinition.setCategory(modelInfo.getCategoryCode());
        LambdaQueryWrapper<FlowableProcessDefinition> flowableProcessDefinitionLambdaQueryWrapper = new LambdaQueryWrapper<>();
        flowableProcessDefinitionLambdaQueryWrapper.eq(FlowableProcessDefinition::getDeploymentId, deploy.getId());
        flowableProcessDefinitionMapper.update(flowableProcessDefinition, flowableProcessDefinitionLambdaQueryWrapper);
        returnVo.setData(deploy);
        return returnVo;
    }

    @Override
    public ModelInfoVo loadBpmnXmlByModelId(String modelId) {
        Model model = modelService.getModel(modelId);
        byte[] bpmnXML = modelService.getBpmnXML(model);
        String streamStr = new String(bpmnXML);
        ModelInfoVo modelInfoVo = new ModelInfoVo();
        modelInfoVo.setModelId(modelId);
        modelInfoVo.setModelName(model.getName());
        modelInfoVo.setModelKey(model.getKey());
        modelInfoVo.setFileName(model.getName());
        modelInfoVo.setModelXml(streamStr);
        modelInfoVo.setAppSn(model.getTenantId());
        return modelInfoVo;
    }

    @Override
    public ModelInfoVo loadBpmnXmlByModelKey(String modelKey) {
        if (StringUtils.isNotBlank(modelKey)) {
            ModelInfo info = modelInfoService.getModelInfoByModelKey(modelKey);
            if (info != null) {
                return this.loadBpmnXmlByModelId(info.getModelId());
            }
        }
        return null;
    }
}
