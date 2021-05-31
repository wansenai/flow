package com.dragon.flow.juel;

import java.util.List;
import java.util.Map;

/**
 * @ClassName IExpressionManager
 * @Description 表达式Service
 * @Author bruce.liu
 * @Date 2019/4/25/025 9:43
 * @Version 1.0
 **/
public interface IExpressionService {

    /**
     * 获取流程实例的表达式的字符串值
     *
     * @param processInstanceId 流程实例id
     * @param exp               表达式
     * @return 值
     */
    String getStrValue(String processInstanceId, String exp);
    /**
     * 获取流程实例的表达式的值
     *
     * @param processInstanceId 流程实例id
     * @param exp               表达式
     * @return 值
     */
    Object getValue(String processInstanceId, String exp);

    /**
     * 获取流程实例的表达式的值
     *
     * @param processInstanceId 流程实例id
     * @param exp               表达式
     * @param clazz             类
     * @param <T>               泛型
     * @return
     */
    <T> T getValue(String processInstanceId, String exp, Class<T> clazz);


    /**
     * 批量获取表达式的值
     *
     * @param processInstanceId 流程实例id
     * @param exps              表达式列表
     * @return
     */
    Map<String, String> getStrValues(String processInstanceId, List<String> exps);

    /**
     * 原生的解析表达式 获取Boolean值
     *
     * @param params 变量的值
     * @param exp    表达式
     * @param flag   true 不存在为true false 不存在为false
     * @return
     */
    Boolean getBooleanValue(Map<String, Object> params, String exp, boolean flag);

    /**
     * 原生的解析表达式 获取String值
     *
     * @param params 变量的值
     * @param exp    表达式
     * @return
     */
    String getStrValue(Map<String, Object> params, String exp);

    /**
     * 原生的解析表达式
     *
     * @param params 变量的值
     * @param exp    表达式
     * @param clazz  映射出来的值
     * @return
     */
    <T> T getValue(Map<String, Object> params, String exp, Class<T> clazz);
}
