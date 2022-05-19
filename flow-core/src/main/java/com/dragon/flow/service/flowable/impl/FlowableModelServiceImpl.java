package com.dragon.flow.service.flowable.impl;

import com.dragon.flow.model.privilege.User;
import com.dragon.flow.service.flowable.IFlowableModelService;
import com.dragon.flow.service.flowable.IModelInfoService;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.utils.FastJsonUtils;
import com.dragon.tools.vo.ReturnVo;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang.StringUtils;
import org.flowable.cmmn.converter.CmmnXmlConverter;
import org.flowable.cmmn.editor.json.converter.CmmnJsonConverter;
import org.flowable.cmmn.model.Case;
import org.flowable.cmmn.model.CmmnModel;
import org.flowable.dmn.editor.converter.DmnJsonConverter;
import org.flowable.dmn.model.DecisionService;
import org.flowable.dmn.model.DmnDefinition;
import org.flowable.dmn.xml.converter.DmnXMLConverter;
import org.flowable.editor.language.json.converter.util.CollectionUtils;
import org.flowable.ui.common.security.SecurityUtils;
import org.flowable.ui.common.service.exception.BadRequestException;
import org.flowable.ui.common.service.exception.ConflictingRequestException;
import org.flowable.ui.common.service.exception.InternalServerErrorException;
import org.flowable.ui.common.util.XmlUtil;
import org.flowable.ui.modeler.domain.AbstractModel;
import org.flowable.ui.modeler.domain.Model;
import org.flowable.ui.modeler.model.ModelKeyRepresentation;
import org.flowable.ui.modeler.model.ModelRepresentation;
import org.flowable.ui.modeler.service.ConverterContext;
import org.flowable.ui.modeler.service.DecisionTableModelConversionUtil;
import org.flowable.ui.modeler.serviceapi.ModelService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.Map;

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
    private ModelService modelService;
    @Autowired
    private ObjectMapper objectMapper;
//
//    @Autowired
//    protected CmmnXmlConverter cmmnXmlConverter;
//    @Autowired
//    protected CmmnJsonConverter cmmnJsonConverter;
    @Autowired
    protected DmnXMLConverter dmnXMLConverter;
    @Autowired
    protected DmnJsonConverter dmnJsonConverter;
    @Autowired
    protected IModelInfoService modelInfoService;

    @Override
    public ReturnVo<Model> createModel(ModelRepresentation modelRepresentation, User user) {
        ReturnVo<Model> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        modelRepresentation.setKey(modelRepresentation.getKey().replaceAll(" ", ""));
        ModelKeyRepresentation modelKeyInfo = modelService.validateModelKey(null, modelRepresentation.getModelType(), modelRepresentation.getKey());
        if (modelKeyInfo.isKeyAlreadyExists()){
            returnVo = new ReturnVo<>(ReturnCode.FAIL, "KEY 不能重复");
            return returnVo;
        }
        String json = modelService.createModelJson(modelRepresentation);
        Model newModel = modelService.createModel(modelRepresentation, json, user.getUserNo());
        returnVo.setData(newModel);
        return returnVo;
    }

    @Override
    public ModelRepresentation importDecisionServiceModel(String modelId, MultipartFile file, User user) {
        String fileName = file.getOriginalFilename();
        if (fileName != null && (fileName.endsWith(".dmn") || fileName.endsWith(".dmn.xml"))){
            try {
                XMLInputFactory xif = XmlUtil.createSafeXmlInputFactory();
                InputStreamReader xmlIn = new InputStreamReader(file.getInputStream(), StandardCharsets.UTF_8);
                XMLStreamReader xtr = xif.createXMLStreamReader(xmlIn);
                DmnDefinition dmnDefinition = dmnXMLConverter.convertToDmnModel(xtr);
                if (CollectionUtils.isEmpty(dmnDefinition.getDecisionServices())){
                    throw new BadRequestException("No decision services found in definition " + fileName);
                }

                if (dmnDefinition.getLocationMap().size() == 0){
                    throw new BadRequestException("No DMN DI found in definition " + fileName);
                }

                ConverterContext converterContext = new ConverterContext(modelService, objectMapper);
                parseDecisionTables(dmnDefinition, converterContext);
                importDecisionTables(converterContext);

                ObjectNode modelNode = dmnJsonConverter.convertToJson(dmnDefinition, converterContext);

                DecisionService firstDecisionService = dmnDefinition.getDecisionServices().iterator().next();
                String name = firstDecisionService.getId();
                if (org.apache.commons.lang3.StringUtils.isNotEmpty(firstDecisionService.getName())){
                    name = firstDecisionService.getName();
                }

                ModelRepresentation model = new ModelRepresentation();
                model.setName(name);
                model.setDescription(name);
                model.setKey(firstDecisionService.getId());
                model.setModelType(AbstractModel.MODEL_TYPE_DECISION_SERVICE);
                if (StringUtils.isNotBlank(modelId)){
                    model.setId(modelId);
                }
                Model newModel = modelService.createModel(model, modelNode.toString(), user.getUserNo());
                return new ModelRepresentation(newModel);

            } catch (BadRequestException e) {
                throw e;

            } catch (Exception e) {
                log.error("Import failed for {}", fileName, e);
                throw new BadRequestException("Import failed for " + fileName + ", error message " + e.getMessage());
            }
        } else {
            throw new BadRequestException("Invalid file name, only .dmn and .dmn.xml files are supported not " + fileName);
        }
    }

    protected void importDecisionTables(ConverterContext converterContext) {
        Map<String, String> decisionTableMap = converterContext.getDecisionTableKeyToJsonStringMap();
        String currentUserId = SecurityUtils.getCurrentUserId();

        for (String decisionTableKey : decisionTableMap.keySet()) {
            String decisionTableJson = decisionTableMap.get(decisionTableKey);

            JsonNode decisionTableNode;
            try {
                decisionTableNode = objectMapper.readTree(decisionTableJson);
            } catch (Exception e) {
                log.error("Error reading decision model json", e);
                throw new InternalServerErrorException("Error reading decision model json");
            }
            Model decisionTableModel = new Model();
            decisionTableModel.setName(decisionTableNode.get("name").asText());
            decisionTableModel.setKey(decisionTableNode.get("key").asText());

            String oldDecisionTableId = decisionTableNode.get("id").asText();

            JsonNode descriptionNode = decisionTableNode.get("description");
            if (descriptionNode != null && !descriptionNode.isNull()){
                decisionTableModel.setDescription(descriptionNode.asText());
            }

            decisionTableModel.setModelEditorJson(decisionTableNode.toString());
            decisionTableModel.setModelType(AbstractModel.MODEL_TYPE_DECISION_TABLE);

            // migrate to new version
            DecisionTableModelConversionUtil.convertModelToV3(decisionTableModel);

            // persist
            Model updatedDecisionTableModel = modelService.createModel(decisionTableModel, currentUserId);

            converterContext.addDecisionTableModel(updatedDecisionTableModel, oldDecisionTableId);
        }
    }

    protected void parseDecisionTables(DmnDefinition dmnDefinition, ConverterContext converterContext) {
        dmnDefinition.getDecisions().forEach(
                decision -> {
                    String decisionNode = dmnJsonConverter.convertDecisionDecisionTableToJson(decision, "definition_" + decision.getId(),
                            decision.getName(), null).toString();
                    converterContext.getDecisionTableKeyToJsonStringMap().put(decision.getId(), decisionNode);
                }
        );
    }

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
    public ModelRepresentation duplicateModel(String modelId, ModelRepresentation modelRepresentation, User user) {
        String json = null;
        Model model = null;
        if (modelId != null){
            model = modelService.getModel(modelId);
            json = model.getModelEditorJson();
        }
        if (model == null){
            throw new InternalServerErrorException("Error duplicating model : Unknown original model");
        }
        modelRepresentation.setKey(modelRepresentation.getKey().replaceAll(" ", ""));
        checkForDuplicateKey(modelRepresentation);
        if (modelRepresentation.getModelType() == null || modelRepresentation.getModelType().equals(AbstractModel.MODEL_TYPE_BPMN)){
            // BPMN model
            ObjectNode editorNode = null;
            try {
                editorNode = (ObjectNode) objectMapper.readTree(json);
                ObjectNode propertiesNode = (ObjectNode) editorNode.get("properties");
                String processId = modelRepresentation.getKey().replaceAll(" ", "");
                propertiesNode.put("process_id", processId);
                propertiesNode.put("name", modelRepresentation.getName());
                if (StringUtils.isNotEmpty(modelRepresentation.getDescription())){
                    propertiesNode.put("documentation", modelRepresentation.getDescription());
                }
                editorNode.set("properties", propertiesNode);
            } catch (IOException e) {
                e.printStackTrace();
            }
            if (editorNode != null){
                json = editorNode.toString();
            }
        }
        Model newModel = modelService.createModel(modelRepresentation, json, user.getUserNo());
        byte[] imageBytes = model.getThumbnail();
        newModel = modelService.saveModel(newModel, newModel.getModelEditorJson(), imageBytes, false, newModel.getComment(), SecurityUtils.getCurrentUserId());
        return new ModelRepresentation(newModel);
    }

    protected void checkForDuplicateKey(ModelRepresentation modelRepresentation) {
        ModelKeyRepresentation modelKeyInfo = modelService.validateModelKey(null, modelRepresentation.getModelType(), modelRepresentation.getKey());
        if (modelKeyInfo.isKeyAlreadyExists()){
            throw new ConflictingRequestException("Provided model key already exists: " + modelRepresentation.getKey());
        }
    }
}
