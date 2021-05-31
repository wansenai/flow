package com.dragon.tools.vo.excel;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.Serializable;
import java.util.List;

/**
 * @author : bruce.liu
 * @title: : ExportExcelVo
 * @projectName : dragon
 * @description: 导出数据参数
 * @date : 2019/8/3016:26
 */
public class ExportExcelVo<T> implements Serializable {

    public ExportExcelVo(){}
    public ExportExcelVo(File file, Class clazz, List<T> datas, String password) {
        this.file = file;
        this.clazz = clazz;
        this.datas = datas;
        this.password = password;
    }

    public ExportExcelVo(File file, Class clazz, List<T> datas) {
        this.file = file;
        this.clazz = clazz;
        this.datas = datas;
    }

    public ExportExcelVo(HttpServletResponse response, String fileName, Class clazz, List<T> datas, String password) {
        this.response = response;
        this.fileName = fileName;
        this.clazz = clazz;
        this.datas = datas;
        this.password = password;
    }

    public ExportExcelVo(HttpServletResponse response, String fileName, Class clazz, List<T> datas) {
        this.response = response;
        this.fileName = fileName;
        this.clazz = clazz;
        this.datas = datas;
    }

    /**
     * 输出流 可选
     */
    private HttpServletResponse response;
    /**
     * 导出文件的名称  可选
     */
    private String fileName;
    /**
     * 导出文件 可选
     */
    private File file;
    /**
     * 类的class 必填
     */
    private Class clazz;
    /**
     * 数据 必填
     */
    private List<T> datas;
    /**
     * 密码 可选
     */
    private String password;

    public HttpServletResponse getResponse() {
        return response;
    }

    public void setResponse(HttpServletResponse response) {
        this.response = response;
    }

    public File getFile() {
        return file;
    }

    public void setFile(File file) {
        this.file = file;
    }

    public Class getClazz() {
        return clazz;
    }

    public void setClazz(Class clazz) {
        this.clazz = clazz;
    }

    public List<T> getDatas() {
        return datas;
    }

    public void setDatas(List<T> datas) {
        this.datas = datas;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }
}
