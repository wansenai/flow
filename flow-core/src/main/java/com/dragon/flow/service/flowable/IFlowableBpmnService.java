package com.dragon.flow.service.flowable;

import com.dragon.flow.model.flowable.ModelInfo;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.vo.flowable.model.ModelInfoVo;
import com.dragon.tools.vo.ReturnVo;
import org.flowable.engine.repository.Deployment;
import org.flowable.ui.modeler.domain.Model;
import org.flowable.ui.modeler.model.ModelRepresentation;

import java.io.InputStream;

/**
 * @program: flow
 * @description: 流程引擎服务接口
 * @author: Bruce.Liu
 * @create: 2021-04-22 14:51
 **/
public interface IFlowableBpmnService {
    /**
     * 验证流程图
     *
     * @param modelId     模型ID
     * @param fileName    文件名称
     * @param modelStream 模型文件流
     * @return
     */
    ReturnVo<String> validateBpmnModel(String modelId, String fileName, InputStream modelStream);

    /**
     * 导入bpmn模型
     *
     * @param modelId     模型ID
     * @param fileName    文件名称
     * @param modelStream 模型文件流
     * @param user        登录用户
     * @return
     */
    ReturnVo<String> importBpmnModel(String modelId, String fileName, InputStream modelStream, User user);

    /**
     * 发布流程
     *
     * @param modelId 模型id
     * @return
     */
    ReturnVo<String> publishBpmn(String modelId);

    /**
     * 部署流程
     *
     * @param modelInfo 模型的扩展信息
     * @return
     */
    ReturnVo<Deployment> deployBpmn(ModelInfo modelInfo);

    /**
     * 创建初始化BPMN模型
     *
     * @param modelInfo 参数
     * @return
     */
    ReturnVo<Model> createInitBpmn(ModelInfo modelInfo, User user);

    /**
     * 加载bpmn的xml文件
     *
     * @param modelId 流程模型id
     * @return
     */
    ModelInfoVo loadBpmnXmlByModelId(String modelId);

    ModelInfoVo loadBpmnXmlByModelKey(String modelKey);

    /**
     * 停用
     *
     * @param modelId 流程模型id
     * @return
     */
    ReturnVo<String> stopBpmn(String modelId);
}
