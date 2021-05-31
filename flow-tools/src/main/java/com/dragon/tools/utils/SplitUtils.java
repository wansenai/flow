package com.dragon.tools.utils;

import org.apache.commons.lang.StringUtils;

/**
 * @author : bruce.liu
 * @title: : SplitUtils
 * @projectName : tools
 * @description: 分割字符串
 * @date : 2019/11/710:53
 */
public class SplitUtils {

    public static String[] splitByStr(String str, String regex) {
        String[] datas = null;
        if (StringUtils.isNotBlank(str) && StringUtils.isNotBlank(regex)) {
            datas = str.split(regex);
        }
        return datas;
    }

    public static String[] splitBySpace(String str) {
        return SplitUtils.splitByStr(str, "\\s+");
    }
}
