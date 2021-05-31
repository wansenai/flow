package org.flowable.editor.language.json.converter;

import com.dragon.flow.util.ExtansionPropertiesUtil;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.apache.commons.lang3.StringUtils;
import org.flowable.bpmn.model.*;

import java.util.Map;

/**
 * @Description: 扩展任务节点属性解析器
 * @Author: Bruce.liu
 * @Since:10:11 2021/05/08
 */
public class BruceUserTaskJsonConverter extends UserTaskJsonConverter {
    private static final String ASSIGNEE_TYPE = "assigneeType";
    private static final String IDM_ASSIGNEE = "idmAssignee";
    private static final String IDM_CANDIDATE_GROUPS = "idmCandidateGroups";
    private static final String IDM_CANDIDATE_USERS = "idmCandidateUsers";
    private static final String IS_EDITDATA = "isEditdata";
    private static final String NODE_TYPE = "nodeType";


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
        if (baseElement instanceof UserTask){
            final String[] text = new String[6];
            baseElement.getExtensionElements().forEach((s, elements) -> elements.forEach(extensionElement -> {
                if (ASSIGNEE_TYPE.equals(extensionElement.getName())){
                    text[0] = extensionElement.getElementText();
                }
                if (IDM_ASSIGNEE.equals(extensionElement.getName())){
                    text[1] = extensionElement.getElementText();
                }
                if (IDM_CANDIDATE_GROUPS.equals(extensionElement.getName())){
                    text[2] = extensionElement.getElementText();
                }
                if (IDM_CANDIDATE_USERS.equals(extensionElement.getName())){
                    text[3] = extensionElement.getElementText();
                }
                if (IS_EDITDATA.equals(extensionElement.getName())){
                    text[4] = extensionElement.getElementText();
                }
                if (NODE_TYPE.equals(extensionElement.getName())){
                    text[5] = extensionElement.getElementText();
                }
            }));
            if (StringUtils.isNotBlank(text[0])){
                propertiesNode.put(ASSIGNEE_TYPE, text[0]);
            }
            if (StringUtils.isNotBlank(text[1])){
                propertiesNode.put(IDM_ASSIGNEE, text[1]);
            }
            if (StringUtils.isNotBlank(text[2])){
                propertiesNode.put(IDM_CANDIDATE_GROUPS, text[2]);
            }
            if (StringUtils.isNotBlank(text[3])){
                propertiesNode.put(IDM_CANDIDATE_USERS, text[3]);
            }
            if (StringUtils.isNotBlank(text[4])){
                propertiesNode.put(IS_EDITDATA, text[4]);
            }
            if (StringUtils.isNotBlank(text[5])){
                propertiesNode.put(NODE_TYPE, text[5]);
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
        if (flowElement instanceof UserTask){
            UserTask userTask = (UserTask) flowElement;
            ExtansionPropertiesUtil.addExtansionPropertiesElement(elementNode, userTask, ASSIGNEE_TYPE);
            ExtansionPropertiesUtil.addExtansionPropertiesElement(elementNode, userTask, IDM_ASSIGNEE);
            ExtansionPropertiesUtil.addExtansionPropertiesElement(elementNode, userTask, IDM_CANDIDATE_GROUPS);
            ExtansionPropertiesUtil.addExtansionPropertiesElement(elementNode, userTask, IDM_CANDIDATE_USERS);
            ExtansionPropertiesUtil.addExtansionPropertiesElement(elementNode, userTask, IS_EDITDATA);
            ExtansionPropertiesUtil.addExtansionPropertiesElement(elementNode, userTask, NODE_TYPE);
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
