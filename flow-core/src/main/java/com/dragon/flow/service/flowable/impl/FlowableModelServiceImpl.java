package com.dragon.flow.service.flowable.impl;

import com.dragon.flow.model.flowable.ModelInfo;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.service.flowable.IFlowableModelService;
import com.dragon.flow.service.flowable.IModelInfoService;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.vo.ReturnVo;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.flowable.common.engine.api.FlowableException;
import org.flowable.dmn.editor.converter.DmnJsonConverter;
import org.flowable.dmn.xml.converter.DmnXMLConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @program: flow
 * @description: model实现类
 * @author: Bruce.Liu
 * @create: 2021-03-26 19:54
 **/
@Slf4j
@Service
public class FlowableModelServiceImpl implements IFlowableModelService {
    @Autowired
    private ObjectMapper objectMapper;
    @Autowired
    protected DmnXMLConverter dmnXMLConverter;
    @Autowired
    protected DmnJsonConverter dmnJsonConverter;
    @Autowired
    protected IModelInfoService modelInfoService;

    @Override
    public ReturnVo<ModelInfo> createModel(ModelInfo modelInfo, User user) {
        ReturnVo<ModelInfo> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        modelInfo.setModelKey(modelInfo.getModelKey().replaceAll(" ", ""));
        if (modelInfoService.isKeyAlreadyExists(modelInfo.getModelKey())) {
            returnVo = new ReturnVo<>(ReturnCode.FAIL, "KEY 不能重复");
            return returnVo;
        }
        //TODO 读取初始化的xml文件 插入到modelXml字段中
        returnVo.setData(modelInfo);
        return returnVo;
    }

//    @Override
//    public ModelRepresentation importDecisionServiceModel(String modelId, MultipartFile file, User user) {
//        String fileName = file.getOriginalFilename();
//        if (fileName != null && (fileName.endsWith(".dmn") || fileName.endsWith(".dmn.xml"))){
//            try {
//                XMLInputFactory xif = XMLInputFactory.newInstance();
//                InputStreamReader xmlIn = new InputStreamReader(file.getInputStream(), StandardCharsets.UTF_8);
//                XMLStreamReader xtr = xif.createXMLStreamReader(xmlIn);
//                DmnDefinition dmnDefinition = dmnXMLConverter.convertToDmnModel(xtr);
//                if (CollectionUtils.isEmpty(dmnDefinition.getDecisionServices())){
//                    throw new FlowableException("No decision services found in definition " + fileName);
//                }
//
//                if (dmnDefinition.getLocationMap().size() == 0){
//                    throw new FlowableException("No DMN DI found in definition " + fileName);
//                }
//
//                ConverterContext converterContext = new ConverterContext(modelService, objectMapper);
//                parseDecisionTables(dmnDefinition, converterContext);
//                importDecisionTables(converterContext);
//
//                ObjectNode modelNode = dmnJsonConverter.convertToJson(dmnDefinition, converterContext);
//
//                DecisionService firstDecisionService = dmnDefinition.getDecisionServices().iterator().next();
//                String name = firstDecisionService.getId();
//                if (org.apache.commons.lang3.StringUtils.isNotEmpty(firstDecisionService.getName())){
//                    name = firstDecisionService.getName();
//                }
//
//                ModelRepresentation model = new ModelRepresentation();
//                model.setName(name);
//                model.setDescription(name);
//                model.setKey(firstDecisionService.getId());
//                model.setModelType(AbstractModel.MODEL_TYPE_DECISION_SERVICE);
//                if (StringUtils.isNotBlank(modelId)){
//                    model.setId(modelId);
//                }
//                Model newModel = modelService.createModel(model, modelNode.toString(), user.getUserNo());
//                return new ModelRepresentation(newModel);
//
//            } catch (BadRequestException e) {
//                throw e;
//
//            } catch (Exception e) {
//                log.error("Import failed for {}", fileName, e);
//                throw new BadRequestException("Import failed for " + fileName + ", error message " + e.getMessage());
//            }
//        } else {
//            throw new BadRequestException("Invalid file name, only .dmn and .dmn.xml files are supported not " + fileName);
//        }
//    }

//    protected void importDecisionTables(ConverterContext converterContext) {
//        Map<String, String> decisionTableMap = converterContext.getDecisionTableKeyToJsonStringMap();
//        String currentUserId = SecurityUtils.getCurrentUserId();
//
//        for (String decisionTableKey : decisionTableMap.keySet()) {
//            String decisionTableJson = decisionTableMap.get(decisionTableKey);
//
//            JsonNode decisionTableNode;
//            try {
//                decisionTableNode = objectMapper.readTree(decisionTableJson);
//            } catch (Exception e) {
//                log.error("Error reading decision model json", e);
//                throw new InternalServerErrorException("Error reading decision model json");
//            }
//            Model decisionTableModel = new Model();
//            decisionTableModel.setName(decisionTableNode.get("name").asText());
//            decisionTableModel.setKey(decisionTableNode.get("key").asText());
//
//            String oldDecisionTableId = decisionTableNode.get("id").asText();
//
//            JsonNode descriptionNode = decisionTableNode.get("description");
//            if (descriptionNode != null && !descriptionNode.isNull()){
//                decisionTableModel.setDescription(descriptionNode.asText());
//            }
//
//            decisionTableModel.setModelEditorJson(decisionTableNode.toString());
//            decisionTableModel.setModelType(AbstractModel.MODEL_TYPE_DECISION_TABLE);
//
//            // migrate to new version
//            DecisionTableModelConversionUtil.convertModelToV3(decisionTableModel);
//
//            // persist
//            Model updatedDecisionTableModel = modelService.createModel(decisionTableModel, currentUserId);
//
//            converterContext.addDecisionTableModel(updatedDecisionTableModel, oldDecisionTableId);
//        }
//    }

//    protected void parseDecisionTables(DmnDefinition dmnDefinition, ConverterContext converterContext) {
//        dmnDefinition.getDecisions().forEach(
//                decision -> {
//                    String decisionNode = dmnJsonConverter.convertDecisionDecisionTableToJson(decision, "definition_" + decision.getId(),
//                            decision.getName(), null).toString();
//                    converterContext.getDecisionTableKeyToJsonStringMap().put(decision.getId(), decisionNode);
//                }
//        );
//    }

//    @Override
//    public ModelRepresentation importCaseModel(String modelId, MultipartFile file, User user) {
//        String fileName = file.getOriginalFilename();
//        if (fileName != null && (fileName.endsWith(".cmmn") || fileName.endsWith(".cmmn.xml"))){
//            try {
//                XMLInputFactory xif = XmlUtil.createSafeXmlInputFactory();
//                InputStreamReader xmlIn = new InputStreamReader(file.getInputStream(), StandardCharsets.UTF_8);
//                XMLStreamReader xtr = xif.createXMLStreamReader(xmlIn);
//                CmmnModel cmmnModel = cmmnXmlConverter.convertToCmmnModel(xtr);
//                if (CollectionUtils.isEmpty(cmmnModel.getCases())){
//                    throw new BadRequestException("No cases found in definition " + fileName);
//                }
//
//                if (cmmnModel.getLocationMap().size() == 0){
//                    throw new BadRequestException("No CMMN DI found in definition " + fileName);
//                }
//
//                ObjectNode modelNode = cmmnJsonConverter.convertToJson(cmmnModel);
//
//                Case caseModel = cmmnModel.getPrimaryCase();
//                String name = caseModel.getId();
//                if (org.apache.commons.lang3.StringUtils.isNotEmpty(caseModel.getName())){
//                    name = caseModel.getName();
//                }
//                String description = caseModel.getDocumentation();
//                ModelRepresentation model = new ModelRepresentation();
//                model.setKey(caseModel.getId());
//                model.setName(name);
//                model.setDescription(description);
//                model.setModelType(AbstractModel.MODEL_TYPE_CMMN);
//                if (StringUtils.isNotBlank(modelId)){
//                    model.setId(modelId);
//                }
//                Model newModel = modelService.createModel(model, modelNode.toString(), user.getUserNo());
//                return new ModelRepresentation(newModel);
//
//            } catch (BadRequestException e) {
//                throw e;
//            } catch (Exception e) {
//                log.error("Import failed for {}", fileName, e);
//                throw new BadRequestException("Import failed for " + fileName + ", error message " + e.getMessage());
//            }
//        } else {
//            throw new BadRequestException("Invalid file name, only .cmmn and .cmmn.xml files are supported not " + fileName);
//        }
//    }

    @Override
    public ModelInfo duplicateModel(String id, ModelInfo param, User user) {
        ModelInfo model = modelInfoService.getById(id);
        if (model == null) {
            throw new FlowableException("Error duplicating model : Unknown original model");
        }
        boolean flag = modelInfoService.isKeyAlreadyExists(param.getModelKey());
        if (flag) {
            throw new FlowableException("key已经存在，请确认！");
        }
        if (param.getModelType() == null || param.getModelType().equals(ModelInfo.MODEL_TYPE_BPMN)) {
            // TODO 利用XML解析
            // BPMN model
//            ObjectNode editorNode = null;
//            try {
//                editorNode = (ObjectNode) objectMapper.readTree(json);
//                ObjectNode propertiesNode = (ObjectNode) editorNode.get("properties");
//                String processId = modelRepresentation.getKey().replaceAll(" ", "");
//                propertiesNode.put("process_id", processId);
//                propertiesNode.put("name", modelRepresentation.getName());
//                if (StringUtils.isNotEmpty(modelRepresentation.getDescription())) {
//                    propertiesNode.put("documentation", modelRepresentation.getDescription());
//                }
//                editorNode.set("properties", propertiesNode);
//            } catch (IOException e) {
//                e.printStackTrace();
//            }
//            if (editorNode != null) {
//                json = editorNode.toString();
//            }
        }
        ModelInfo newModel = new ModelInfo();
//        Model newModel = modelService.createModel(modelRepresentation, json, user.getUserNo());
//        byte[] imageBytes = model.getThumbnail();
//        newModel = modelService.saveModel(newModel, newModel.getModelEditorJson(), imageBytes, false, newModel.getComment(), SecurityUtils.getCurrentUserId());
        return newModel;
    }

}
