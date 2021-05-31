package com.dragon.tools.vo.excel;

import java.io.InputStream;

/**
 * @author : bruce.liu
 * @title: : ImportExcelVo
 * @projectName : dragon
 * @description: 导入参数
 * @date : 2019/8/3017:24
 */
public class ImportExcelVo<T> {
    public ImportExcelVo(){}
    public ImportExcelVo(InputStream fileInputStream) {
        this.fileInputStream = fileInputStream;
    }

    /**
     * 编码方式
     */
    private String charset = "UTF-8";
    /**
     * 文件流
     */
    private InputStream fileInputStream;

    public String getCharset() {
        return charset;
    }

    public void setCharset(String charset) {
        this.charset = charset;
    }

    public InputStream getFileInputStream() {
        return fileInputStream;
    }

    public void setFileInputStream(InputStream fileInputStream) {
        this.fileInputStream = fileInputStream;
    }
}
