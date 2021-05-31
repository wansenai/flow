package org.flowable.editor.language.json.converter;

/**
 * @program: prodflow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-08 08:52
 **/
public class CustomBpmnJsonConverter extends BpmnJsonConverter {
    static {
        BruceUserTaskJsonConverter.customFillTypes(convertersToBpmnMap, convertersToJsonMap);
        BruceCallActivityJsonConverter.customFillTypes(convertersToBpmnMap, convertersToJsonMap);
        BruceSubProcessJsonConverter.customFillTypes(convertersToBpmnMap, convertersToJsonMap);
    }
}
