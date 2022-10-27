package com.dragon.flow.juel;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.collections.SetUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.*;

/**
 * @Description: 个性化处理表达式
 * @Author: Bruce.liu
 * @Since:16:54 2021/03/24
 */
@Component(value = "fuel")
public class FlowJuel implements Serializable {

    private static final long serialVersionUID = 1653010136813862205L;

    /**
     * 通过传入的参数获取其中的一个人
     *
     * @param applyers 审批人
     * @return
     */
    public String one(String applyers) {
        String applyer = "";
        if (StringUtils.isNotBlank(applyers)) {
            Set<String> userSet = new HashSet<>();
            String[] userCodes = StringUtils.split(applyers, ",");
            for (String userCode : userCodes) {
                if (StringUtils.isNotBlank(userCode)) {
                    userSet.add(userCode);
                }
            }
            if (CollectionUtils.isNotEmpty(userSet)) {
                applyer = userSet.iterator().next();
            }
        }
        return applyer;
    }

    /**
     * 通过传入的数据解析有多少个人员
     * 使用方式${fuel.multi(form.startName,form.mgegr,form.test)}
     *
     * @param applyers 传入的数据
     * @return
     */
    public List<String> multi(String... applyers) {
        Set<String> applyerList = new HashSet<>();
        if (applyers != null && applyers.length > 0) {
            for (String applyer : applyers) {
                if (StringUtils.isNotBlank(applyer)) {
                    this.getApplerCodes(applyerList, applyer);
                }
            }
        }
        return new ArrayList<>(applyerList);
    }

    private void getApplerCodes(Set<String> applyerList, String applyers) {
        Set<String> codes = new HashSet<>();
        if (StringUtils.isNotBlank(applyers)) {
            String[] userCodes = StringUtils.split(applyers, ",");
            for (String userCode : userCodes) {
                if (StringUtils.isNotBlank(userCode)) {
                    codes.add(userCode);
                }
            }
        }
        if (CollectionUtils.isNotEmpty(codes)) {
            applyerList.addAll(codes);
        }
    }

    /**
     * 判断searchStr是否在str中
     *
     * @param str       整体的字符串
     * @param searchStr 要检索的字符串
     * @return true存在  false不存在
     * ${fuel.exist(form.xxx,'123')}
     */
    public boolean exist(String str, String searchStr) {
        boolean flag = false;
        if (StringUtils.isNotBlank(str) && StringUtils.isNotBlank(searchStr)) {
            flag = StringUtils.contains(str, searchStr);
        }
        return flag;
    }

}
