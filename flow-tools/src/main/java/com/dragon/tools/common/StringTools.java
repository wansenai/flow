package com.dragon.tools.common;

import org.apache.commons.lang.StringUtils;

public class StringTools {

    /**
     * 字符串工具，将 aaa,bbb,ccc 转换成 'aaa','bbb','ccc'
     * @param strs
     * @return
     */
    public static String converString(String strs) {
        if (StringUtils.isNotBlank(strs)) {
            String[] idStrs = strs.trim().split(",");
            if (null != idStrs && idStrs.length > 0) {
                StringBuilder sbf = new StringBuilder("");
                for (String str : idStrs) {
                    if (StringUtils.isNotBlank(str)) {
                        sbf.append("'").append(str.trim()).append("'").append(",");
                    }
                }
                if (sbf.length() > 0) {
                    sbf = sbf.deleteCharAt(sbf.length() - 1);
                    return sbf.toString();
                }
            }
        }
        return "";
    }
}
