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
import com.fasterxml.jackson.databind.node.ObjectNode;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang.StringUtils;
import org.flowable.bpmn.converter.BpmnXMLConverter;
import org.flowable.bpmn.model.BpmnModel;
import org.flowable.editor.language.json.converter.BaseBpmnJsonConverter;
import org.flowable.editor.language.json.converter.util.CollectionUtils;
import org.flowable.engine.RepositoryService;
import org.flowable.engine.repository.Deployment;
import org.flowable.validation.ProcessValidator;
import org.flowable.validation.ProcessValidatorFactory;
import org.flowable.validation.ValidationError;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.XMLStreamReader;
import java.io.ByteArrayInputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.List;

/**
 * @program: flow
 * @description: 流程引擎服务实现
 * @author: Bruce.Liu
 * @create: 2021-04-22 14:52
 **/
@Slf4j
@Service
public class FlowableBpmnServiceImpl implements IFlowableBpmnService {

    private static final String BPMN_EXTENSION = ".bpmn";
    private static final String BPMN20_XML_EXTENSION = ".bpmn20.xml";

    @Autowired
    private IModelInfoService modelInfoService;
    @Resource
    private RepositoryService repositoryService;
    @Autowired
    private IFlowableProcessDefinitionMapper flowableProcessDefinitionMapper;
    @Autowired
    private IFlowableModelService flowableModelService;
    @Autowired
    protected BpmnXMLConverter bpmnXMLConverter;
    @Autowired
    protected DragonFlowProperties dragonFlowProperties;
    @Autowired
    private ProcessValidatorFactory processValidatorFactory;

    @Override
    public ReturnVo<String> validateBpmnModel(String id, String fileName, String modelXml) {
        ReturnVo<String> returnVo = new ReturnVo(ReturnCode.SUCCESS, "OK");
        ModelInfo processModel = modelInfoService.getById(id);
        if (StringUtils.isBlank(fileName)) {
            fileName = processModel.getModelKey() + BPMN_EXTENSION;
        }
        BpmnModel bpmnModel = modelInfoService.getBpmnModelByXml(modelXml);
        bpmnModel.getMainProcess().setId(processModel.getModelKey());
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
    public ReturnVo<String> importBpmnModel(String modelId, String fileName, String modelXml, User user) {
        ReturnVo<String> returnVo = new ReturnVo(ReturnCode.SUCCESS, "OK");
        LambdaQueryWrapper<ModelInfo> modelInfoLambdaQueryWrapper = new LambdaQueryWrapper<>();
        modelInfoLambdaQueryWrapper.eq(ModelInfo::getModelId, modelId);
        ModelInfo modelInfo = modelInfoService.getOne(modelInfoLambdaQueryWrapper);
        if (StringUtils.isBlank(fileName)) {
            fileName = modelInfo.getModelKey() + BPMN_EXTENSION;
        }
        if (fileName != null && (fileName.endsWith(BPMN_EXTENSION) || fileName.endsWith(BPMN20_XML_EXTENSION))) {
            try {
                BpmnModel bpmnModel = modelInfoService.getBpmnModelByXml(modelXml);
                bpmnModel.getMainProcess().setId(modelInfo.getModelKey());
                bpmnModel.setTargetNamespace(BaseBpmnJsonConverter.NAMESPACE);
                if (CollectionUtils.isEmpty(bpmnModel.getProcesses())) {
                    returnVo = new ReturnVo(ReturnCode.FAIL, "No process found in definition " + fileName);
                    return returnVo;
                }
                if (bpmnModel.getLocationMap().size() == 0) {
                    returnVo = new ReturnVo(ReturnCode.FAIL, "No required BPMN DI information found in definition " + fileName);
                    return returnVo;
                }
                modelInfo.setModelXml(modelXml);
                modelInfo.setStatus(ModelFormStatusEnum.DFB.getStatus());
                modelInfo.setExtendStatus(ModelFormStatusEnum.DFB.getStatus());
                modelInfoService.saveOrUpdate(modelInfo);
                returnVo.setData(modelInfo.getId());
                return returnVo;
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
        try {
            LambdaQueryWrapper<ModelInfo> modelInfoLambdaQueryWrapper = new LambdaQueryWrapper<>();
            modelInfoLambdaQueryWrapper.eq(ModelInfo::getModelId, modelId);
            ModelInfo modelInfo = modelInfoService.getOne(modelInfoLambdaQueryWrapper);
            XMLInputFactory xif = XMLInputFactory.newInstance();
            InputStreamReader xmlIn = new InputStreamReader(new ByteArrayInputStream(modelInfo.getModelXml().getBytes(StandardCharsets.UTF_8)), StandardCharsets.UTF_8);
            XMLStreamReader xtr = xif.createXMLStreamReader(xmlIn);
            BpmnModel bpmnModel = bpmnXMLConverter.convertToBpmnModel(xtr);
            ReturnVo<String> validReturnVo = this.validationErrors(bpmnModel);
            if (!validReturnVo.isSuccess()) {
                returnVo.setMsg(validReturnVo.getMsg());
                return returnVo;
            }

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
        } catch (XMLStreamException e) {
            log.error("转化xml失败", e);
            returnVo.setMsg("没有找到对应的模型，请确认!");
        }
        return returnVo;
    }

    @Override
    public ReturnVo<ModelInfo> createInitBpmn(ModelInfo modelInfo, User user) {
        modelInfo.setModelType(ModelInfo.MODEL_TYPE_BPMN);
        ReturnVo<ModelInfo> returnVo = flowableModelService.createModel(modelInfo, user);
        return returnVo;
    }

    @Override
    public ReturnVo<Deployment> deployBpmn(ModelInfo modelInfo) {
        ReturnVo<Deployment> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        ModelInfo model = modelInfoService.getById(modelInfo.getId());
        BpmnModel bpmnModel = modelInfoService.getBpmnModelByXml(model.getModelXml());
        Deployment deploy = repositoryService.createDeployment()
                .name(model.getName())
                .key(model.getModelKey())
                .category(modelInfo.getCategoryCode())
                .tenantId(model.getAppSn())
                .addBpmnModel(model.getModelKey() + BPMN_EXTENSION, bpmnModel)
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
    public ModelInfoVo loadBpmnXmlById(String id) {
        ModelInfo model = modelInfoService.getById(id);
        ModelInfoVo modelInfoVo = new ModelInfoVo();
        modelInfoVo.setModelName(model.getName());
        modelInfoVo.setModelKey(model.getModelKey());
        modelInfoVo.setFileName(model.getName());
        modelInfoVo.setModelXml(model.getModelXml());
        return modelInfoVo;
    }

    @Override
    public ModelInfoVo loadBpmnXmlByModelKey(String modelKey) {
        if (StringUtils.isNotBlank(modelKey)) {
            ModelInfo info = modelInfoService.getModelInfoByModelKey(modelKey);
            if (info != null) {
                return this.loadBpmnXmlById(info.getId());
            }
        }
        return null;
    }
}
