package org.flowable.editor.language.json.converter;

import com.dragon.flow.util.ExtansionPropertiesUtil;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.apache.commons.lang3.StringUtils;
import org.flowable.bpmn.model.*;
import org.springframework.util.CollectionUtils;

import java.util.List;
import java.util.Map;

/**
 * @Description: 扩展任务节点属性解析器
 * @Author: Bruce.liu
 * @Since:10:11 2021/05/08
 */
public class BruceUserTaskJsonConverter extends UserTaskJsonConverter {
    public static final String ASSIGNEE_TYPE = "assigneeType";
    public static final String IDM_ASSIGNEE = "idmAssignee";
    public static final String IDM_CANDIDATE_GROUPS = "idmCandidateGroups";
    public static final String IDM_CANDIDATE_USERS = "idmCandidateUsers";
    public static final String IS_EDITDATA = "isEditdata";
    public static final String NODE_TYPE = "nodeType";
    public static final String NEXT_SEQUENCE_FLOW_LABEL = "nextSequenceFlow";
    public static final String NEXT_USER_LABEL = "nextUser";
    public static final String FORM_DATA_LABEL = "formData";


    static void customFillTypes(Map<String, Class<? extends BaseBpmnJsonConverter>> convertersToBpmnMap, Map<Class<? extends BaseElement>, Class<? extends BaseBpmnJsonConverter>> convertersToJsonMap) {
        fillJsonTypes(convertersToBpmnMap);
        fillBpmnTypes(convertersToJsonMap);
    }

    public static void fillJsonTypes(Map<String, Class<? extends BaseBpmnJsonConverter>> convertersToBpmnMap) {
        convertersToBpmnMap.put(STENCIL_TASK_USER, BruceUserTaskJsonConverter.class);
    }

    public static void fillBpmnTypes(Map<Class<? extends BaseElement>, Class<? extends BaseBpmnJsonConverter>> convertersToJsonMap) {
        convertersToJsonMap.put(UserTask.class, BruceUserTaskJsonConverter.class);
    }

    @Override
    protected void convertElementToJson(ObjectNode propertiesNode, BaseElement baseElement, BpmnJsonConverterContext converterContext) {
        super.convertElementToJson(propertiesNode, baseElement, converterContext);
        if (baseElement instanceof UserTask) {
            if (!CollectionUtils.isEmpty(baseElement.getExtensionElements())) {
                baseElement.getExtensionElements().forEach((s, elements) -> elements.forEach(extensionElement -> {
                    if (ASSIGNEE_TYPE.equals(extensionElement.getName())) {
                        this.setPropertyValue(extensionElement.getName(), extensionElement.getElementText(), propertiesNode);
                    }
                    if (IDM_ASSIGNEE.equals(extensionElement.getName())) {
                        this.setPropertyValue(extensionElement.getName(), extensionElement.getElementText(), propertiesNode);
                    }
                    if (IDM_CANDIDATE_GROUPS.equals(extensionElement.getName())) {
                        this.setPropertyValue(extensionElement.getName(), extensionElement.getElementText(), propertiesNode);
                    }
                    if (IDM_CANDIDATE_USERS.equals(extensionElement.getName())) {
                        this.setPropertyValue(extensionElement.getName(), extensionElement.getElementText(), propertiesNode);
                    }
                    if (IS_EDITDATA.equals(extensionElement.getName())) {
                        this.setPropertyValue(extensionElement.getName(), extensionElement.getElementText(), propertiesNode);
                    }
                    if (NODE_TYPE.equals(extensionElement.getName())) {
                        this.setPropertyValue(extensionElement.getName(), extensionElement.getElementText(), propertiesNode);
                    }
                    if (NEXT_SEQUENCE_FLOW_LABEL.equals(extensionElement.getName())) {
                        this.setPropertyValue(extensionElement.getName(), extensionElement.getElementText(), propertiesNode);
                    }
                    if (NEXT_USER_LABEL.equals(extensionElement.getName())) {
                        this.setPropertyValue(extensionElement.getName(), extensionElement.getElementText(), propertiesNode);
                    }
                    if (FORM_DATA_LABEL.equals(extensionElement.getName())) {
                        this.setPropertyValue(extensionElement.getName(), extensionElement.getElementText(), propertiesNode);
                    }
                }));
            }
        }
    }

    @Override
    protected FlowElement convertJsonToElement(JsonNode elementNode, JsonNode modelNode, Map<String, JsonNode> shapeMap, BpmnJsonConverterContext converterContex) {
        FlowElement flowElement = super.convertJsonToElement(elementNode, modelNode, shapeMap, converterContex);
        this.addExtansionPropertiesElement(flowElement, elementNode);
        return flowElement;
    }

    private void addExtansionPropertiesElement(FlowElement flowElement, JsonNode elementNode) {
        if (flowElement instanceof UserTask) {
            UserTask userTask = (UserTask) flowElement;
            ExtansionPropertiesUtil.addExtansionPropertiesElement(elementNode, userTask, ASSIGNEE_TYPE);
            ExtansionPropertiesUtil.addExtansionPropertiesElement(elementNode, userTask, IDM_ASSIGNEE);
            ExtansionPropertiesUtil.addExtansionPropertiesElement(elementNode, userTask, IDM_CANDIDATE_GROUPS);
            ExtansionPropertiesUtil.addExtansionPropertiesElement(elementNode, userTask, IDM_CANDIDATE_USERS);
            ExtansionPropertiesUtil.addExtansionPropertiesElement(elementNode, userTask, IS_EDITDATA);
            ExtansionPropertiesUtil.addExtansionPropertiesElement(elementNode, userTask, NODE_TYPE);
            ExtansionPropertiesUtil.addExtansionPropertiesElement(elementNode, userTask, NEXT_SEQUENCE_FLOW_LABEL);
            ExtansionPropertiesUtil.addExtansionPropertiesElement(elementNode, userTask, NEXT_USER_LABEL);
            ExtansionPropertiesUtil.addExtansionPropertiesElement(elementNode, userTask, FORM_DATA_LABEL);
        }
    }

//
//    private void addExtansionPropertiesElement(JsonNode objectNode, UserTask userTask, String name) {
//        JsonNode expansionNode = this.getProperty(name, objectNode);
//        if (expansionNode instanceof TextNode){
//            if (expansionNode != null && StringUtils.isNotBlank(expansionNode.asText())){
//                ExtensionElement extensionElement = new ExtensionElement();
//                extensionElement.setName(name);
//                extensionElement.setNamespacePrefix(BpmnXMLConstants.FLOWABLE_EXTENSIONS_PREFIX);
//                extensionElement.setNamespace(BpmnXMLConstants.FLOWABLE_EXTENSIONS_NAMESPACE);
//                extensionElement.setElementText(expansionNode.asText());
//                userTask.addExtensionElement(extensionElement);
//            }
//        }
//    }

//    @Override
//    protected void addExtensionElement(String name, String elementText, UserTask task) {
//        ExtensionElement extensionElement = new ExtensionElement();
//        extensionElement.setNamespace(NAMESPACE);
//        extensionElement.setNamespacePrefix("flowable");
//        extensionElement.setName(name);
//        extensionElement.setElementText(elementText);
//        task.addExtensionElement(extensionElement);
//    }

}
