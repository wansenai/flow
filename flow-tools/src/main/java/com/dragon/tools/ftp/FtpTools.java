package com.dragon.tools.ftp;

import org.apache.commons.net.ftp.FTP;
import org.apache.commons.net.ftp.FTPClient;
import org.apache.commons.net.ftp.FTPReply;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.SocketException;
import java.util.StringTokenizer;

/**
 * ftp工具类
 * @Title:
 * @Description:
 * @Author:bruce.liu
 * @Since:2021年04月23日 下午5:46:41
 */
public class FtpTools {
	protected Logger logger = LoggerFactory.getLogger(this.getClass());
	private FTPClient ftpClient = null;
	private String ip;
	private String username;
	private String password;
	private int port;

	public FtpTools() {
	}

	public FtpTools(String ip, String username, String password, int port) {
		this.ip = ip;
		this.username = username;
		this.password = password;
		this.port = port;
	}

	public boolean loginFtp() {
		boolean flag = true;
		if (ftpClient == null) {
			ftpClient = new FTPClient();
			ftpClient.setControlEncoding("UTF-8");
		}
		try {
			ftpClient.connect(ip, port);
			ftpClient.login(username, password);
			if(!FTPReply.isPositiveCompletion(ftpClient.getReplyCode())) {
				flag = false;
				logger.debug("未连接到FTP，用户名或密码错误!!!");
				System.err.println("未连接到FTP，用户名或密码错误!!!");
            } else {
            	logger.debug("FTP连接成功!");
            	System.err.println("FTP连接成功!");
            }
			ftpClient.setDataTimeout(120000);
		} catch (SocketException e) {
			flag = false;
			e.printStackTrace();
			System.err.println("登录ftp服务器失败,连接超时！");
			logger.debug("登录ftp服务器失败");
		} catch (IOException e) {
			flag = false;
			e.printStackTrace();
			System.err.println("登录ftp服务器失败，FTP服务器无法打开！");
			logger.debug("登录ftp服务器失败");
		}
		return flag;

	}

	// 退出
	public boolean logoutFtp() throws IOException {
		try {
			if (ftpClient != null) {
				ftpClient.logout();
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (ftpClient != null && ftpClient.isConnected()) {
				ftpClient.disconnect();
			}
		}
		return true;
	}

	/**
	 * 上传文件
	 * 
	 * @param inStream
	 *            文件输入流
	 * @param fileName
	 *            文件名
	 * @param path
	 *            文件需要存放的路径
	 * @throws Exception
	 */
	public boolean uploadFile(InputStream inStream, String fileName, String path)
			throws Exception {
		boolean flag = false;
		// 登录ftp
		try {
			loginFtp();
			ftpClient.setFileType(FTP.BINARY_FILE_TYPE);
			ftpClient.enterLocalPassiveMode();
			ftpClient.setFileTransferMode(FTP.STREAM_TRANSFER_MODE);
			path = path.replace('\\', '/');
			// 创建文件夹
			createDir(path);
			// 切换文件夹
			this.changerToPath(path);
			flag = ftpClient.storeFile(fileName, inStream);
			logger.debug("文件:" + fileName + "上传" + (flag == true ? "成功" : "失败"));
			ftpClient.changeWorkingDirectory("~");
			inStream.close();
			// 退出ftp
			ftpClient.logout();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (ftpClient.isConnected()) {
				ftpClient.disconnect();
			}
		}
		return flag;
	}

	/**
	 * 上传文件
	 * 
	 * @param file
	 * @param path
	 * @throws Exception
	 */
	public boolean uploadFile(File file, String path) throws Exception {
		boolean flag = true;
		// 登录ftp
		try {
			loginFtp();
			if (file.exists()) {
				ftpClient.setFileType(FTP.BINARY_FILE_TYPE);
				ftpClient.enterLocalPassiveMode();
				ftpClient.setFileTransferMode(FTP.STREAM_TRANSFER_MODE);
				FileInputStream bis = new FileInputStream(file);
				path = path.replace('\\', '/');
				// 创建文件夹
				createDir(path);
				// 切换文件夹
				this.changerToPath(path);
				flag = ftpClient.storeFile(file.getName(), bis);
				ftpClient.changeWorkingDirectory("~");
				logger.debug("文件:" + file.getName() + "上传"
						+ (flag == true ? "成功" : "失败"));
				bis.close();
			}
			ftpClient.logout();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (ftpClient.isConnected()) {
				ftpClient.disconnect();
			}
		}
		// // 退出ftp
		// logoutFtp();
		return flag;
	}

	/**
	 * 获取当前的FTP路径
	 * 
	 * @param path
	 * @return
	 */
	private boolean changerToPath(String path) {
		boolean isOK = false;
		path = path.replace('\\', '/');
		StringTokenizer s = new StringTokenizer(path, "/");
		s.countTokens();
		String pathName = "";
		while (s.hasMoreElements()) {
			pathName = (String) s.nextElement();
			try {
				isOK = ftpClient.changeWorkingDirectory(pathName);
			} catch (Exception e) {
				e = null;
				isOK = false;
			}
		}
		return isOK;
	}

	/**
	 * @param args
	 * @throws Exception
	 */
	public static void main(String[] args) throws Exception {
//		 FtpTools packer = new FtpTools("125.200.222.164", 21, "itvFtp",
//		 "itv");
//		 packer.localFileFullName =
//		 "E:\\biyatech\\washu\\SMSP\\itv\\src\\com\\wasu";
//		 packer.upload("E:\\biyatech\\washu\\SMSP\\itv\\src\\com\\wasu");
//		 packer.logoutFtp();
		FtpTools packer = new FtpTools("10.10.20.204", "wen", "wen1", 21);

		File file = new File("E:/test.txt");
		InputStream in = new FileInputStream(file);
		packer.uploadFile(in,"test1.xml.bak", "/img/");

		/*File file2 = new File("D:/oschina-settings.xml");
		InputStream in2 = new FileInputStream(file2);
		packer.uploadFile(in2, "oschina-settings.xml", "/test/test/");

		File file3 = new File("d:/report.log");
		InputStream in3 = new FileInputStream(file3);
		packer.uploadFile(in3,"report.log", "/test/test/");*/
	}

	/**
	 * 创建文件夹
	 * 
	 * @param dir
	 * @throws Exception
	 */
	private void createDir(String dir) throws Exception {
		dir = dir.replace('\\', '/');
		StringTokenizer s = new StringTokenizer(dir, "/");
		s.countTokens();
		String pathName = "";
		while (s.hasMoreElements()) {
			pathName = (String) s.nextElement();
			try {
				ftpClient.makeDirectory(pathName);
				ftpClient.changeWorkingDirectory(pathName);
			} catch (Exception e) {
				e = null;
			}
		}
		ftpClient.changeWorkingDirectory("~");
	}

	/**
	 * 检查文件夹是否存在
	 * 
	 * @param dir
	 * @return
	 */
	private boolean isDirExist(String dir) {
		boolean isDirExist = false;
		try {
			isDirExist = ftpClient.changeWorkingDirectory(dir);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return isDirExist;
	}

	public void setIp(String ip) {
		this.ip = ip;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setPort(int port) {
		this.port = port;
	}

}
