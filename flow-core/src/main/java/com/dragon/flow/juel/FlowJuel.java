package com.dragon.flow.juel;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
     * @param applyers 审批人
     * @return
     */
    public String one(String applyers) {
        String applyer = "";
        if (StringUtils.isNotBlank(applyers)){
            String[] userCodes = applyers.split(",");
            applyer = userCodes[0];
        }
        return applyer;
    }
    /**
     * 通过传入的数据解析有多少个人员
     * 使用方式${flowJuel.multi(form.startName,form.mgegr,form.test)}
     *
     * @param applyer1 传入的数据
     * @return
     */
    public List<String> multi(String applyer1, String applyer2, String applyer3, String applyer4, String applyer5) {
        Set<String> applyerList = new HashSet<>();
        if (StringUtils.isNotBlank(applyer1)){
            this.getApplerCodes(applyerList, applyer1);
        }
        if (StringUtils.isNotBlank(applyer2)){
            this.getApplerCodes(applyerList, applyer2);
        }
        if (StringUtils.isNotBlank(applyer3)){
            this.getApplerCodes(applyerList, applyer3);
        }
        if (StringUtils.isNotBlank(applyer4)){
            this.getApplerCodes(applyerList, applyer4);
        }
        if (StringUtils.isNotBlank(applyer5)){
            this.getApplerCodes(applyerList, applyer5);
        }
        return new ArrayList<>(applyerList);
    }

    private void getApplerCodes(Set<String> applyerList, String applyers) {
        Set<String> codes = new HashSet<>();
        if (StringUtils.isNotBlank(applyers)){
            String[] userCodes = applyers.split(",");
            for(String userCode : userCodes){
                codes.add(userCode);
            }
        }
        if (CollectionUtils.isNotEmpty(codes)){
            applyerList.addAll(codes);
        }
    }

    public List<String> multi(String applyer1, String applyer2, String applyer3, String applyer4) {
        return this.multi(applyer1, applyer2, applyer3, applyer4, null);
    }

    public List<String> multi(String applyer1, String applyer2, String applyer3) {
        return this.multi(applyer1, applyer2, applyer3, null, null);
    }

    public List<String> multi(String applyer1, String applyer2) {
        return this.multi(applyer1, applyer2, null, null, null);
    }

    public List<String> multi(String applyer1) {
        return this.multi(applyer1, null, null, null, null);
    }

    /**
     * 判断searchStr是否在str中
     *
     * @param str       整体的字符串
     * @param searchStr 要检索的字符串
     * @return true存在  false不存在
     */
    public boolean exist(String str, String searchStr) {
        boolean flag = false;
        if (StringUtils.isNotBlank(str) && StringUtils.isNotBlank(searchStr)){
            flag = StringUtils.contains(str, searchStr);
        }
        return flag;
    }

}
