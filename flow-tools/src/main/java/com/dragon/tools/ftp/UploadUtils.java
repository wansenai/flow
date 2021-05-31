package com.dragon.tools.ftp;

import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang.RandomStringUtils;
import org.apache.commons.lang.StringUtils;

import java.io.File;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.regex.Pattern;

/**
 * @Title:
 * @Description: 上传文件工具类
 * @Author:bruce.liu
 * @Since:2021年04月23日 下午5:46:41
 */
public class UploadUtils {
    /**
     * 日期格式化对象
     */
    public static final DateFormat MONTH_FORMAT = new SimpleDateFormat(
            "/yyyyMM/ddHHmmss");

    public static final DateFormat YEAR_MONTH_FORMAT = new SimpleDateFormat("yyyyMM");
    public static final DateFormat YEAR_MONTH_DAY_FORMAT = new SimpleDateFormat("yy/MM/dd");

    public static final DateFormat SHORT_FORMAT = new SimpleDateFormat("ddHHmmss");
    protected static final Pattern ILLEGAL_CURRENT_FOLDER_PATTERN = Pattern
            .compile("^[^/]|[^/]$|/\\.{1,2}|\\\\|\\||:|\\?|\\*|\"|<|>|\\p{Cntrl}");

    public static String generateMonthname() {
        return YEAR_MONTH_FORMAT.format(new Date());
    }

    public static String generateFilename(String path, String ext) {
        return path + MONTH_FORMAT.format(new Date())
                + RandomStringUtils.random(4, Num62.N36_CHARS) + "." + ext;
    }

    public static String generateInvoiceFileName(String path, String fileName, String ext) {
        return path + YEAR_MONTH_DAY_FORMAT.format(new Date()) + "/" + fileName + "." + ext;
    }

    public static String generateByFilename(String path, String fileName, String ext) {
        return path + fileName + "." + ext;
    }

    public static String sanitizeFileName(final String filename) {

        if (StringUtils.isBlank(filename))
            return filename;

        String name = forceSingleExtension(filename);

        // Remove \ / | : ? * " < > 'Control Chars' with _
        return name.replaceAll("\\\\|/|\\||:|\\?|\\*|\"|<|>|\\p{Cntrl}", "_");
    }

    public static String sanitizeFolderName(final String folderName) {

        if (StringUtils.isBlank(folderName))
            return folderName;

        // Remove . \ / | : ? * " < > 'Control Chars' with _
        return folderName.replaceAll(
                "\\.|\\\\|/|\\||:|\\?|\\*|\"|<|>|\\p{Cntrl}", "_");
    }

    public static boolean isValidPath(final String path) {
        if (StringUtils.isBlank(path))
            return false;

        if (ILLEGAL_CURRENT_FOLDER_PATTERN.matcher(path).find())
            return false;

        return true;
    }

    public static String forceSingleExtension(final String filename) {
        return filename.replaceAll("\\.(?![^.]+$)", "_");
    }

    public static boolean isSingleExtension(final String filename) {
        return filename.matches("[^\\.]+\\.[^\\.]+");
    }

    public static void checkDirAndCreate(File dir) {
        if (!dir.exists())
            dir.mkdirs();
    }

    public static File getUniqueFile(final File file) {
        if (!file.exists())
            return file;

        File tmpFile = new File(file.getAbsolutePath());
        File parentDir = tmpFile.getParentFile();
        int count = 1;
        String extension = FilenameUtils.getExtension(tmpFile.getName());
        String baseName = FilenameUtils.getBaseName(tmpFile.getName());
        do {
            tmpFile = new File(parentDir, baseName + "(" + count++ + ")."
                    + extension);
        } while (tmpFile.exists());
        return tmpFile;
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
            if ((i > -1) && (i < (filename.length() - 1))) {
                return filename.substring(i + 1);
            }
        }
        return defExt;
    }

    /**
     * Test
     *
     * @param args
     * @Description:
     */
    public static void main(String[] args) {
        System.out.println(generateFilename("/base", "gif"));
    }

}
