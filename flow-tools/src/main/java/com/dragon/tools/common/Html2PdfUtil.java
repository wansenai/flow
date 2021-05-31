package com.dragon.tools.common;

import com.itextpdf.text.Document;
import com.itextpdf.text.PageSize;
import com.itextpdf.text.pdf.PdfWriter;
import com.itextpdf.tool.xml.XMLWorkerFontProvider;
import com.itextpdf.tool.xml.XMLWorkerHelper;
import org.springframework.core.io.ClassPathResource;

import java.io.*;
import java.nio.charset.Charset;

/**
 * HTML转PDF
 */
public class Html2PdfUtil {

    public static final String TEMPLATE_PATH = "/";


    public static void main(String[] args) throws Exception {
        String html = "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">  ";
        html+="<html><head></head><body>this is test page<img src='https://files.dahangroup.com/p/2021/01/13/4028848d76b130f70176fa82f0f9014a.png' /></body></html>";

        html = "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"\n" +
                "\"http://www.w3.org/TR/html4/loose.dtd\">\n" +
                "<html>\n" +
                "    <head>\n" +
                "        <meta name=\"generator\"\n" +
                "        content=\"HTML Tidy for HTML5 (experimental) for Windows https://github.com/w3c/tidy-html5/tree/c63cc39\" />\n" +
                "        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n" +
                "        <title>New Document</title>\n" +
                "        <style>\n" +
                "\t\t\t*{font-family:SimHei!important;}\n" +
                "                        #app{\n" +
                "                                        width: 400px;\n" +
                "                                        height: 600px;\n" +
                "                                        margin: auto;\n" +
                "\n" +
                "                        }\n" +
                "                        .detailTitle{\n" +
                "                                        height: 56px;\n" +
                "                                        font-size: 20px;\n" +
                "                                        font-weight: bold;\n" +
                "                                        color: #23242A;\n" +
                "                                        line-height: 28px;\n" +
                "                                        \n" +
                "                                        overflow: hidden;\n" +
                "                                        padding: 13px 16px;\n" +
                "                        }\n" +
                "                        .back-color-white {\n" +
                "                                        background-color: #FFFFFF;\n" +
                "                        }\n" +
                "                        .detailTitle .lendDesc{\n" +
                "                                        height: 20px;\n" +
                "                                        font-size: 14px;\n" +
                "                                        color: #7A8188;\n" +
                "                                        line-height: 20px;\n" +
                "                                        margin-top: 2px;\n" +
                "                                        margin-bottom: 9px;\n" +
                "                        }\n" +
                "                        \n" +
                "                        .detailTent {\n" +
                "                                        margin: 10px 16px;\n" +
                "                                        padding: 17px 16px;\n" +
                "                        }\n" +
                "                        \n" +
                "                        .company{\n" +
                "                                        font-size: small;\n" +
                "                                        color: #7A8188;\n" +
                "                        }\n" +
                "                        .row{\n" +
                "                                        margin-bottom: 18px;\n" +
                "                                        position: relative;\n" +
                "                                        line-height: 22px;\n" +
                "                                        height: 22px;\n" +
                "                        }\n" +
                "                        .leave-num {\n" +
                "                                margin: 10px 16px;\n" +
                "                                padding: 17px 16px;\n" +
                "                                font-size: 16px;\n" +
                "                                color: #23242A;\n" +
                "                                line-height: 22px;\n" +
                "                        }\n" +
                ".leave-process {\n" +
                "\tmargin: 10px 16px;\n" +
                "\tpadding: 17px 16px;\n" +
                "}\n" +
                ".leave-process .processTitle {\n" +
                "height: 22px;\n" +
                "font-size: 16px;\n" +
                "font-weight: bold;\n" +
                "color: #23242A;\n" +
                "line-height: 22px;\n" +
                "margin-bottom: 20px;\n" +
                "}\n" +
                ".van-col {\n" +
                "    \n" +
                "    box-sizing: border-box;\n" +
                "    min-height: 1px;\n" +
                "}\n" +
                ".leave-process .processRow[data-v-07ea5d04]:last-child {\n" +
                "    padding-bottom: 0;\n" +
                "}\n" +
                ".leave-process .processRow[data-v-07ea5d04] {\n" +
                "    padding-bottom: 20px;\n" +
                "    height: 100%;\n" +
                "    position: relative;\n" +
                "    overflow: hidden;\n" +
                "}\n" +
                "*, *:before, *:after {\n" +
                "    -webkit-box-sizing: inherit;\n" +
                "    box-sizing: inherit;\n" +
                "}\n" +
                ".van-col--24 {\n" +
                "    width: 100%;\n" +
                "}\n" +
                ".van-col--4 {\n" +
                "    width: 16.66666667%;\n" +
                "}\n" +
                ".van-col--20 {\n" +
                "    width: 83.33333333%;\n" +
                "}\n" +
                ".avater[data-v-07ea5d04] {\n" +
                "    position: relative;\n" +
                "}\n" +
                ".avaterImg-42 {\n" +
                "    background-color: #118CEE;\n" +
                "    width: 42px;\n" +
                "    height: 42px;\n" +
                "    border-radius: 50%;\n" +
                "}\n" +
                ".avater .userName[data-v-07ea5d04] {\n" +
                "    position: absolute;\n" +
                "    width: 42px;\n" +
                "    top: 14px;\n" +
                "    font-size: 16px;\n" +
                "    font-weight: bold;\n" +
                "    color: #FFFFFF;\n" +
                "    line-height: 16px;\n" +
                "\ttext-align: center;\n" +
                "}\n" +
                ".van-col--15 {\n" +
                "    width: 62.5%;\n" +
                "}\n" +
                "\n" +
                ".van-col--offset-1 {\n" +
                "    margin-left: 4.16666667%;\n" +
                "}\n" +
                ".leave-process .processRow .todoTitle[data-v-07ea5d04] {\n" +
                "    height: 24px;\n" +
                "    font-size: 17px;\n" +
                "    line-height: 24px;\n" +
                "    margin-top: 10px;\n" +
                "}\n" +
                ".align-left {\n" +
                "    text-align: left;\n" +
                "}\n" +
                ".leave-process .processRow .todoDesc[data-v-07ea5d04] {\n" +
                "    height: 18px;\n" +
                "    font-size: 13px;\n" +
                "    line-height: 18px;\n" +
                "    margin-top: 4px;\n" +
                "}\n" +
                ".leave-process .processRow .todoTime[data-v-07ea5d04] {\n" +
                "    height: 24px;\n" +
                "    font-size: 13px;\n" +
                "    color: #ABB4C2;\n" +
                "    line-height: 24px;\n" +
                "    margin-top: 10px;\n" +
                "}\n" +
                ".van-col--8 {\n" +
                "    width: 33.33333333%;\n" +
                "}\n" +
                "\n" +
                "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite,\n" +
                "code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li,\n" +
                "fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure,\n" +
                "figcaption, footer, header, menu, nav, output, ruby, section, summary, time, mark, audio, video, input {\n" +
                "    margin: 0;\n" +
                "    padding: 0;\n" +
                "    border: 0;\n" +
                "    font-size: 100%;\n" +
                "    font-weight: normal;\n" +
                "    vertical-align: baseline;\n" +
                "}\n" +
                ".leave-process .processRow .proMessage[data-v-07ea5d04] {\n" +
                "    position: relative;\n" +
                "    background-color: #F5F6F6;\n" +
                "    border-radius: 5px;\n" +
                "    padding: 16px 16px 13px 16px;\n" +
                "    font-size: 15px;\n" +
                "    color: #7A8188;\n" +
                "    line-height: 21px;\n" +
                "    margin-top: 2px;\n" +
                "\tmargin-left: 55px;\n" +
                "}\n" +
                "table td{border:1px solid #333;}table{border: 1px solid #333;}</style>\n" +
                "    </head>\n" +
                "    <body style=\"margin: 0;background: #F5F6F6;\">\n" +
                "        <div id=\"app\">\n" +
                "            <div class=\"detailTitle back-color-white\">\n" +
                "                <div>梁涛发起的【吴旭】的转正申请</div>\n" +
                "                <div class=\"lendDesc\">湖南悦云数字科技有限公司</div>\n" +
                "            </div>\n" +
                "            <div class=\"detailTent back-color-white\">\n" +
                "\t\t\t\t<table border='1' style=\"width: 100%;\" cellspacing=\"0\" cellpadding=\"0\">\n" +
                "\t\t\t\t<tr>\n" +
                "\t\t\t\t\t<td style=\"width: 50%\">实际申请人</td>\n" +
                "\t\t\t\t\t<td style=\"width: 50%\">吴旭</td>\n" +
                "\t\t\t\t</tr>\n" +
                "\t\t\t\t\n" +
                "\t\t\t\t<tr>\n" +
                "\t\t\t\t\t<td style=\"width: 50%\">学历</td>\n" +
                "\t\t\t\t\t<td style=\"width: 50%\">博士研究生</td>\n" +
                "\t\t\t\t</tr>\n" +
                "\t\t\t\t</table>\n" +

                "    </div>\n" +
                "    </div>\n" +
                "    </body>\n" +
                "</html>\n";
        byte[] bs = createPdfByContent("Test", html);
        OutputStream out = new FileOutputStream("E:/test1.pdf");
        InputStream is = new ByteArrayInputStream(bs);
        byte[] buff = new byte[1024];
        int len = 0;
        while((len=is.read(buff))!=-1){
            out.write(buff, 0, len);
        }
        is.close();
        out.close();
    }

    public static byte[] createPdfByContent(String title, String content) throws Exception{
        ByteArrayOutputStream out = new ByteArrayOutputStream();

        Document document = new Document(PageSize.A4,20,20,20,20);
        PdfWriter writer = PdfWriter.getInstance(document, out);
        document.open();

        // 配置字体
        XMLWorkerFontProvider fontProvider = new XMLWorkerFontProvider(XMLWorkerFontProvider.DONTLOOKFORFONTS);
        // 宋体
        final String fzxbsPath = new ClassPathResource(TEMPLATE_PATH + "fonts/fzxbs.ttf").getPath();
        fontProvider.register(fzxbsPath, "fzxbs");
        final String fsPath = new ClassPathResource(TEMPLATE_PATH + "fonts/fs.ttf").getPath();
        fontProvider.register(fsPath, "fs");
        final String simsunPath = new ClassPathResource(TEMPLATE_PATH + "fonts/simsun.ttc").getPath();
        fontProvider.register(simsunPath, "simsun");
        final String simHeiPath = new ClassPathResource(TEMPLATE_PATH + "fonts/SimHei.ttf").getPath();
        fontProvider.register(simHeiPath, "SimHei");
        fontProvider.addFontSubstitute(fzxbsPath, "fzxbs");
        fontProvider.addFontSubstitute(fsPath, "fs");
        fontProvider.addFontSubstitute(simsunPath, "simsun");
        fontProvider.addFontSubstitute(simHeiPath, "SimHei");

        XMLWorkerHelper.getInstance().parseXHtml(
                writer,
                document,
                new ByteArrayInputStream(content.getBytes(Charset.defaultCharset())),
                Charset.forName("UTF-8"), fontProvider);
        document.addTitle(title);

        document.close();

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        byte[] buffer = new byte[16384];

        InputStream inputStream = new ByteArrayInputStream(out.toByteArray());
        try {
            for(int bytesRead = inputStream.read(buffer); bytesRead != -1; bytesRead = inputStream.read(buffer)) {
                outputStream.write(buffer, 0, bytesRead);
            }
        } catch (Exception var5) {
            throw new Exception("couldn't read input stream " + inputStream, var5);
        }

        return outputStream.toByteArray();
    }
}
