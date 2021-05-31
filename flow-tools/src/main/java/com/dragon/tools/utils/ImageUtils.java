package com.dragon.tools.utils;

import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;

import java.io.IOException;

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
        BASE64Decoder decoder = new BASE64Decoder();
        try {
            // 解密
            data = decoder.decodeBuffer(imgStr);
            // 处理数据
            for (int i = 0; i < data.length; ++i) {
                if (data[i] < 0) {
                    data[i] += 256;
                }
            }
            return data;
        } catch (IOException e) {
            e.printStackTrace();
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
        BASE64Encoder encoder = new BASE64Encoder();
        return encoder.encode(data);
    }
}
