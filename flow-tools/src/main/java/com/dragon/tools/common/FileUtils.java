package com.dragon.tools.common;

import java.io.*;
import java.util.Calendar;

/**
 * FileUtils
 *
 * @author bruce.liu
 * @date 2017/4/13 11:22
 * @Copyright:Copyright (c) 杭州蘑菇加电子商务有限公司 2016 ~ 2020 版权所有
 */
public class FileUtils {
    /**
     * byte to file
     *
     * @param buf
     * @param filePath
     * @param fileName
     */
    public static void byte2File(byte[] buf, String filePath, String fileName) {
        BufferedOutputStream bos = null;
        FileOutputStream fos = null;
        File file = null;
        try {
            File dir = new File(filePath);
            if (!dir.exists() && dir.isDirectory()) {
                dir.mkdirs();
            }
            file = new File(filePath + File.separator + fileName);
            fos = new FileOutputStream(file);
            bos = new BufferedOutputStream(fos);
            bos.write(buf);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (bos != null) {
                try {
                    bos.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            if (fos != null) {
                try {
                    fos.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    /**
     * byte 转化为 InputStream
     *
     * @param buf
     * @return
     */
    public static final InputStream byte2Input(byte[] buf) {
        return new ByteArrayInputStream(buf);
    }

    public static final String InputStream2String(InputStream inputStream) throws IOException {
        byte[] bytes = FileUtils.input2byte(inputStream);
        return new String(bytes);
    }
    /**
     * InputStream  转化为 byte
     *
     * @param inStream
     * @return
     * @throws IOException
     */
    public static final byte[] input2byte(InputStream inStream)
            throws IOException {
        ByteArrayOutputStream swapStream = new ByteArrayOutputStream();
        byte[] buff = new byte[100];
        int rc = 0;
        while ((rc = inStream.read(buff, 0, 100)) > 0) {
            swapStream.write(buff, 0, rc);
        }
        byte[] in2b = swapStream.toByteArray();
        return in2b;
    }

    /**
     * 获取年月日 FTP 地址
     *
     * @return
     */
    public static String getDateFmtFilePath() {
        String filePath = "";
        Calendar cal = Calendar.getInstance();
        int monthTemp = cal.get(Calendar.MONTH) + 1;
        String year = String.valueOf(cal.get(Calendar.YEAR));//获取年份
        String month = String.valueOf(monthTemp > 9 ? monthTemp : ("0" + monthTemp));//获取月份
        String day = String.valueOf(cal.get(Calendar.DATE) > 9 ? cal.get(Calendar.DATE) : ("0" + cal.get(Calendar.DATE)));//获取日
        filePath = "/" + year + "/" + month + "/" + day;

        return filePath;
    }


    /**
     * @param filename
     * @return
     * @Description: get file extension
     */
    public static String getExtension(String filename) {
        return getExtension(filename, "");
    }

    /**
     * @param filename
     * @param defExt
     * @return
     * @Description: get file extension
     */
    public static String getExtension(String filename, String defExt) {
        if ((filename != null) && (filename.length() > 0)) {
            int i = filename.lastIndexOf('.');
            if ((i >-1) && (i < (filename.length() - 1))) {
                return filename.substring(i + 1);
            }
        }
        return defExt;
    }

    /**
     * @param filename
     * @return
     * @Description: get file extension
     */
    public static String getBaseName(String filename) {
        if ((filename != null) && (filename.length() > 0)) {
            int i = filename.lastIndexOf('.');
            if ((i >-1) && (i < (filename.length() - 1))) {
                return filename.substring(0, i);
            }
        }
        return "";
    }
}
