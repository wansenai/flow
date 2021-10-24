package com.dragon.flow.service.flowable;

import com.dragon.flow.model.privilege.User;
import com.dragon.tools.vo.ReturnVo;
import org.flowable.ui.modeler.domain.Model;
import org.flowable.ui.modeler.model.ModelRepresentation;
import org.springframework.web.multipart.MultipartFile;

/**
 * @program: flow
 * @description: 模型创建
 * @author: Bruce.Liu
 * @create: 2021-03-26 19:37
 **/
public interface IFlowableModelService {

    /**
     * 创建模型初始化
     *
     * @param modelRepresentation 参数
     * @param user                创建人
     * @return
     */
    ReturnVo<Model> createModel(ModelRepresentation modelRepresentation, User user);

    /**
     * 导入cmmn模型
     *
     * @param modelId modelId
     * @param file    file
     * @param user    user
     * @return
     */
//    ModelRepresentation importCaseModel(String modelId, MultipartFile file, User user);

    /**
     * 导入dmn
     *
     * @param modelId modelId
     * @param file    file
     * @param user    user
     * @return
     */
    ModelRepresentation importDecisionServiceModel(String modelId, MultipartFile file, User user);

    /**
     * 拷贝流程
     *
     * @param modelId             模型id
     * @param modelRepresentation 参数
     * @return
     */
    ModelRepresentation duplicateModel(String modelId, ModelRepresentation modelRepresentation, User user);
}
