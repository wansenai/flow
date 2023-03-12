package com.dragon.flow.service.flowable.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.enm.form.ModelFormStatusEnum;
import com.dragon.flow.mapper.flowable.IModelInfoMapper;
import com.dragon.flow.model.base.Category;
import com.dragon.flow.model.flowable.ModelInfo;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.service.base.ICategoryService;
import com.dragon.flow.service.flowable.IFlowableBpmnService;
import com.dragon.flow.service.flowable.IModelInfoService;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.pager.Query;
import com.dragon.tools.vo.ReturnVo;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.flowable.bpmn.converter.BpmnXMLConverter;
import org.flowable.bpmn.model.BpmnModel;
import org.flowable.bpmn.model.Process;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.XMLStreamReader;
import java.io.ByteArrayInputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-20
 */
@Service
public class ModelInfoServiceImpl extends ServiceImpl<IModelInfoMapper, ModelInfo> implements IModelInfoService {

    @Autowired
    private IModelInfoMapper modelInfoMapper;
    @Lazy
    @Autowired
    private IFlowableBpmnService flowableBpmnService;
    @Autowired
    private ICategoryService categoryService;
    @Autowired
    private BpmnXMLConverter bpmnXMLConverter;

    @Override
    public byte[] getBpmnXML(BpmnModel bpmnModel) {
        for (Process process : bpmnModel.getProcesses()) {
            if (StringUtils.isNotEmpty(process.getId())) {
                char firstCharacter = process.getId().charAt(0);
                // no digit is allowed as first character
                if (Character.isDigit(firstCharacter)) {
                    process.setId("a" + process.getId());
                }
            }
        }
        byte[] xmlBytes = bpmnXMLConverter.convertToXML(bpmnModel);
        return xmlBytes;
    }

    @Override
    public BpmnModel getBpmnModelByXml(String modelXml) {
        BpmnModel bpmnModel = null;
        try {
            XMLInputFactory xif = XMLInputFactory.newInstance();
            InputStreamReader xmlIn = new InputStreamReader(new ByteArrayInputStream(modelXml.getBytes(StandardCharsets.UTF_8)), StandardCharsets.UTF_8);
            XMLStreamReader xtr = xif.createXMLStreamReader(xmlIn);
            bpmnModel = bpmnXMLConverter.convertToBpmnModel(xtr);
        }catch (XMLStreamException e){
            log.error("转化xml失败", e);
        }
        return bpmnModel;
    }

    @Override
    public BpmnModel getBpmnModelById(String id) {
        ModelInfo modelInfo = this.getById(id);
        BpmnModel bpmnModel = getBpmnModelByXml(modelInfo.getModelXml());
        return bpmnModel;
    }

    @Override
    public Boolean isKeyAlreadyExists(String modelKey) {
        LambdaQueryWrapper<ModelInfo> modelInfoLambdaQueryWrapper = new LambdaQueryWrapper<>();
        modelInfoLambdaQueryWrapper.eq(ModelInfo::getModelKey, modelKey);
        long count = this.count(modelInfoLambdaQueryWrapper);
        return count > 0;
    }

    @Override
    public ReturnVo<String> deleteById(List<String> ids) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        if (CollectionUtils.isNotEmpty(ids)) {
            String id = ids.get(0);
            ModelInfo modelInfo = this.getById(id);
            if (modelInfo.getStatus().equals(ModelFormStatusEnum.CG.getStatus())
                    && modelInfo.getExtendStatus().equals(ModelFormStatusEnum.CG.getStatus())) {
                this.removeById(id);
            } else {
                returnVo = new ReturnVo<>(ReturnCode.FAIL, "模型不是草稿状态，请勿删除！");
            }
        }
        return returnVo;
    }


    @Override
    public PagerModel<ModelInfo> getPagerModel(ModelInfo modelInfo, Query query) {
        IPage<ModelInfo> queryPage = new Page<>(query.getPageNum(), query.getPageSize());
        if (StringUtils.isNotBlank(modelInfo.getCategoryCode())) {
            String categoryCode = modelInfo.getCategoryCode();
            LambdaQueryWrapper<Category> categoryLambdaQueryWrapper = new LambdaQueryWrapper<>();
            categoryLambdaQueryWrapper.eq(Category::getCode, categoryCode);
            Category category = categoryService.getOne(categoryLambdaQueryWrapper);
            String categoryId = category.getId();
            List<String> categoryIds = new ArrayList<>();
            categoryService.getAllCategoryIds(categoryId, categoryIds);

            LambdaQueryWrapper<Category> allCategoryLambdaQueryWrapper = new LambdaQueryWrapper<>();
            allCategoryLambdaQueryWrapper.in(Category::getId, categoryIds).eq(Category::getDelFlag, FlowConstant.DEL_FLAG_1);
            List<Category> categoryList = categoryService.list(allCategoryLambdaQueryWrapper);
            List<String> categoryCodes = new ArrayList<>();
            if (CollectionUtils.isNotEmpty(categoryList)) {
                categoryList.forEach(c -> categoryCodes.add(c.getCode()));
            }
            if (CollectionUtils.isNotEmpty(categoryCodes)) {
                modelInfo.setCategoryCodes(categoryCodes);
            }
        }

        IPage<ModelInfo> page = modelInfoMapper.getPagerModel(queryPage, modelInfo);
        List<ModelInfo> records = page.getRecords();
        if (CollectionUtils.isNotEmpty(records)) {
            records.forEach(mi -> {
                ModelFormStatusEnum minStatus = ModelFormStatusEnum.getMinStatus(mi.getStatus(), mi.getExtendStatus());
                if (minStatus != null) {
                    mi.setStatusName(minStatus.getMsg());
                    mi.setStatus(minStatus.getStatus());
                }
            });
        }
        return new PagerModel<>(page.getTotal(), page.getRecords());
    }

    @Override
    public ModelInfo getModelInfoByModelKey(String modelKey) {
        if (StringUtils.isNotBlank(modelKey)) {
            LambdaQueryWrapper<ModelInfo> modelInfoLambdaQueryWrapper = new LambdaQueryWrapper<>();
            modelInfoLambdaQueryWrapper.eq(ModelInfo::getModelKey, modelKey);
            return this.getOne(modelInfoLambdaQueryWrapper);
        }
        return null;
    }

    @Override
    public ModelInfo saveOrUpdateModelInfo(ModelInfo modelInfo, User user, boolean flag) {
        if (StringUtils.isBlank(modelInfo.getId())) {
            if (flag) {
                flowableBpmnService.createInitBpmn(modelInfo, user);
            }
            Date date = new Date();
            modelInfo.setCreateTime(date);
            modelInfo.setCreator(user.getUserNo());
            modelInfo.setUpdateTime(date);
            modelInfo.setStatus(ModelFormStatusEnum.CG.getStatus());
            modelInfo.setExtendStatus(ModelFormStatusEnum.CG.getStatus());
        } else {
            ModelInfo mi = this.getById(modelInfo.getId());
            Date date = new Date();
            modelInfo.setUpdateTime(date);
            modelInfo.setUpdator(user.getUserNo());
            modelInfo.setModelId(mi.getModelId());
            modelInfo.setExtendStatus(ModelFormStatusEnum.DFB.getStatus());
        }
        this.saveOrUpdate(modelInfo);
        return modelInfo;
    }

    @Override
    public ModelInfo saveOrUpdateModelInfo(ModelInfo modelInfo, User user) {
        return this.saveOrUpdateModelInfo(modelInfo, user, false);
    }
}
