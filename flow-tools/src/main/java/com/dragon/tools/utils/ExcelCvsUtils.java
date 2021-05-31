package com.dragon.tools.utils;

import com.dragon.tools.vo.excel.ExportExcelVo;
import com.github.liaochong.myexcel.core.Csv;
import com.github.liaochong.myexcel.core.CsvBuilder;
import com.github.liaochong.myexcel.core.DefaultExcelBuilder;
import com.github.liaochong.myexcel.core.DefaultExcelReader;
import com.github.liaochong.myexcel.utils.AttachmentExportUtil;
import com.github.liaochong.myexcel.utils.FileExportUtil;
import org.apache.catalina.User;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.lang.NonNull;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

/**
 * @author : bruce.liu
 * @title: : ExcelCvsUtils
 * @projectName : dragon
 * @description: excelCvs 工具类
 * @date : 2019/8/3114:35
 */
public class ExcelCvsUtils<T> {
    private Class<T> dataType;

    public ExcelCvsUtils(Class<T> dataType) {
        this.dataType = dataType;
    }

    public static <T> ExcelCvsUtils<T> of(@NonNull Class<T> clazz) {
        if (clazz == null) {
            throw new NullPointerException("clazz is marked non-null but is null");
        } else {
            return new ExcelCvsUtils(clazz);
        }
    }

    /**
     * 导入数据
     *
     * @param fileInputStream 导入参数
     * @returnt
     * @throws Exception
     */
    public List<T> importExcel(InputStream fileInputStream) throws Exception {
        List<T> result = DefaultExcelReader.of(this.dataType)
                .rowFilter(row -> row.getRowNum() > 0)
                .read(fileInputStream);
        return result;
    }

    /**
     * 导出Cvs数据到文件中
     *
     * @param exportExcelVo 参数
     * @throws IOException
     */
    public static void exportCvsToFile(ExportExcelVo exportExcelVo) throws IOException {
        Csv csv = CsvBuilder.of(exportExcelVo.getClazz()).build(exportExcelVo.getDatas());
        FileUtils.copyFile(csv.getFilePath().toFile(), exportExcelVo.getFile());
    }

    /**
     * 导出cvs下载
     *
     * @param exportExcelVo 参数
     */
    public static void exportCvsToResponse(ExportExcelVo exportExcelVo) {
        Csv csv = CsvBuilder.of(exportExcelVo.getClazz()).build(exportExcelVo.getDatas());
        AttachmentExportUtil.export(csv.getFilePath(), exportExcelVo.getFileName(), exportExcelVo.getResponse());
    }

    /**
     * 导出excel到文件
     *
     * @param exportExcelVo 参数
     * @throws Exception
     */
    public static void exportExcelToFile(ExportExcelVo exportExcelVo) throws Exception {
        Workbook workbook = DefaultExcelBuilder.of(exportExcelVo.getClazz()).build(exportExcelVo.getDatas());
        if (exportExcelVo.getFile() != null) {
            if (StringUtils.isNotBlank(exportExcelVo.getPassword())) {
                File dir = exportExcelVo.getFile().getParentFile();
                if (!dir.exists()) {
                    dir.mkdirs();
                }
                FileExportUtil.encryptExport(workbook, exportExcelVo.getFile(), exportExcelVo.getPassword());
            } else {
                FileExportUtil.export(workbook, exportExcelVo.getFile());
            }
        }
    }

    /**
     * 导出excl下载
     *
     * @param exportExcelVo 参数
     */
    public static void exportExcelToResponse(ExportExcelVo exportExcelVo) {
        Workbook workbook = DefaultExcelBuilder.of(exportExcelVo.getClazz()).build(exportExcelVo.getDatas());
        if (exportExcelVo.getResponse() != null) {
            String filename = exportExcelVo.getFileName() == null ? System.currentTimeMillis() + "" : exportExcelVo.getFileName();
            if (StringUtils.isNotBlank(exportExcelVo.getPassword())) {
                AttachmentExportUtil.encryptExport(workbook, filename, exportExcelVo.getResponse(), exportExcelVo.getPassword());
            } else {
                AttachmentExportUtil.export(workbook, filename, exportExcelVo.getResponse());
            }
        }
    }

    public static void main(String[] args) throws Exception {
        ExcelCvsUtils.of(User.class).importExcel(new FileInputStream(new File("")));
    }


}
