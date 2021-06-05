package com.dragon.tools.utils;

import java.util.Base64;

/**
 * 字符串与流的转化
 * @Author:bruce.liu
 * @Since:2021年04月23日 下午5:46:41
 */
public class ImageUtils {
    /**
     * 字符串转图片
     *
     * @param imgStr --->图片字符串
     * @return
     */
    public static byte[] generateImage(String imgStr) {
        byte[] data = null;
        if (imgStr == null) {
            return data;
        }
        // 解密
        data = Base64.getDecoder().decode(imgStr);
        // 处理数据
        for (int i = 0; i < data.length; ++i) {
            if (data[i] < 0) {
                data[i] += 256;
            }
        }
        return data;
    }

    /**
     * 图片转字符串
     *
     * @param data --->图片字节
     * @return
     */
    public static String getImageStr(byte[] data) {
        // 加密
        return Base64.getEncoder().encodeToString(data);
    }
}
