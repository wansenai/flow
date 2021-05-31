package com.dragon.flow.enm.form;


import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.vo.ReturnVo;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * 流程表单状态
 *
 * @author bruce.liu
 * @date 2017/8/28
 */
public enum ModelFormStatusEnum {

    /**
     * 流程表单状态
     */
    CG(1, "草稿"), DFB(2, "待发布"), YFB(3, "已发布"), TY(4, "停用");

    private Integer status;
    private String msg;

    ModelFormStatusEnum(Integer status, String msg) {
        this.status = status;
        this.msg = msg;
    }

    /**
     * 根据status查询msg
     *
     * @param status
     * @return
     */
    public static String getName(Integer status) {
        if (null == status){
            return null;
        }
        for (ModelFormStatusEnum item : ModelFormStatusEnum.values()) {
            if (status == item.getStatus().intValue()){
                return item.getMsg();
            }
        }
        return null;
    }

    /**
     * 根据status 查询 枚举
     *
     * @param status
     * @return
     */
    public static ModelFormStatusEnum getEnum(Integer status) {
        if (null == status){
            return null;
        }
        for (ModelFormStatusEnum item : ModelFormStatusEnum.values()) {
            if (status == item.getStatus().intValue()){
                return item;
            }
        }
        return null;
    }

    /**
     * 检查是否符合激活状态
     *
     * @param formStatus   自定义表单状态
     * @param modelStatus  流程状态
     * @param extendStatus 流程拓展信息状态
     * @return
     */
    public static ReturnVo<String> checkActive(Integer formStatus, Integer modelStatus, Integer extendStatus) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        if (null == formStatus || null == modelStatus || null == extendStatus){
            returnVo = new ReturnVo<>(ReturnCode.FAIL, "表单状态异常");
        }
        if (!formStatus.equals(DFB.status) && !formStatus.equals(YFB.status)){
            returnVo = new ReturnVo<>(ReturnCode.FAIL, "未定义或发布表单");
        }
        return getStringReturnVo(modelStatus, extendStatus, returnVo);
    }

    private static ReturnVo<String> getStringReturnVo(Integer modelStatus, Integer extendStatus, ReturnVo<String> returnVo) {
        if (!modelStatus.equals(DFB.status) && !modelStatus.equals(YFB.status)){
            returnVo = new ReturnVo<>(ReturnCode.FAIL, "未定义或发布流程模型信息");
        }
        if (!extendStatus.equals(DFB.status) && !extendStatus.equals(YFB.status)){
            returnVo = new ReturnVo<>(ReturnCode.FAIL, "未定义或发布流程配置信息");
        }
        return returnVo;
    }

    public static ReturnVo<String> checkActive(Integer modelStatus, Integer extendStatus) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        if (null == modelStatus || null == extendStatus){
            returnVo = new ReturnVo<>(ReturnCode.FAIL, "流程模型状态异常");
        }
        return getStringReturnVo(modelStatus, extendStatus, returnVo);
    }

    public static ModelFormStatusEnum getMinStatus(Integer formStatus, Integer modelStatus, Integer extendStatus) {
        List<Integer> statuses = new ArrayList<>();
        statuses.add(formStatus == null ? 1 : formStatus);
        statuses.add(modelStatus == null ? 1 : modelStatus);
        statuses.add(extendStatus == null ? 1 : extendStatus);
        Collections.sort(statuses);
        return ModelFormStatusEnum.getEnum(statuses.get(0));

    }

    public static ModelFormStatusEnum getMinStatus(Integer modelStatus, Integer extendStatus){
        ArrayList<Integer> statuses = new ArrayList<>();
        statuses.add(modelStatus == null ? 1 : modelStatus);
        statuses.add(extendStatus == null ? 1 : extendStatus);
        Collections.sort(statuses);
        return ModelFormStatusEnum.getEnum(statuses.get(0));
    }


    public Integer getStatus() {
        return status;
    }

    public String getMsg() {
        return msg;
    }
}
