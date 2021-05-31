package org.flowable.editor.language.json.converter;

import com.fasterxml.jackson.databind.JsonNode;
import org.flowable.bpmn.model.*;

import java.util.Map;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-16 14:19
 **/
public class BruceSubProcessJsonConverter extends SubProcessJsonConverter {

    public static void customFillTypes(Map<String, Class<? extends BaseBpmnJsonConverter>> convertersToBpmnMap,
                                       Map<Class<? extends BaseElement>, Class<? extends BaseBpmnJsonConverter>> convertersToJsonMap) {

        fillJsonTypes(convertersToBpmnMap);
        fillBpmnTypes(convertersToJsonMap);
    }

    public static void fillJsonTypes(Map<String, Class<? extends BaseBpmnJsonConverter>> convertersToBpmnMap) {
        convertersToBpmnMap.put(STENCIL_SUB_PROCESS, BruceSubProcessJsonConverter.class);
        convertersToBpmnMap.put(STENCIL_COLLAPSED_SUB_PROCESS, BruceSubProcessJsonConverter.class);
    }

    public static void fillBpmnTypes(Map<Class<? extends BaseElement>, Class<? extends BaseBpmnJsonConverter>> convertersToJsonMap) {
        convertersToJsonMap.put(SubProcess.class, BruceSubProcessJsonConverter.class);
        convertersToJsonMap.put(Transaction.class, BruceSubProcessJsonConverter.class);
    }

    @Override
    protected FlowElement convertJsonToElement(JsonNode elementNode, JsonNode modelNode, Map<String, JsonNode> shapeMap,
                                               BpmnJsonConverterContext converterContext) {
        FlowElement flowElement = super.convertJsonToElement(elementNode, modelNode, shapeMap, converterContext);
        GraphicInfo graphicInfo = model.getGraphicInfo(BpmnJsonConverterUtil.getElementId(elementNode));
        if (STENCIL_COLLAPSED_SUB_PROCESS.equals(BpmnJsonConverterUtil.getStencilId(elementNode))){
            graphicInfo.setExpanded(false); //default is null!
        } else {
            graphicInfo.setExpanded(true);
        }
        return flowElement;
    }

}
