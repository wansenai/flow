package com.dragon.tools.common;

import org.springframework.beans.factory.config.PropertyPlaceholderConfigurer;
import org.springframework.core.io.Resource;
import org.springframework.util.DefaultPropertiesPersister;
import org.springframework.util.PropertiesPersister;

import java.io.*;
import java.util.Properties;

/**
 * @Comment:加载资源文件
 * @author bruce.liu
 * @Create Date 2014年3月24日
 */
public class DecryptPropertyPlaceholderConfigurer extends
		PropertyPlaceholderConfigurer {

	private Resource[] locations;
	private String fileEncoding;
	/* Linux的路径 */
	private String linuxSystePath;
	/* windows的路径 */
	private String windowsSystemPath;
	
	private Properties props;

	public void setFileEncoding(String fileEncoding) {
		this.fileEncoding = fileEncoding;
	}

	public void setLocations(Resource[] locations) {
		this.locations = locations;
	}

	public void setLinuxSystePath(String linuxSystePath) {
		this.linuxSystePath = linuxSystePath;
	}

	public void setWindowsSystemPath(String windowsSystemPath) {
		this.windowsSystemPath = windowsSystemPath;
	}

	public void loadProperties(Properties props) throws IOException {
		if (this.locations != null) {
			PropertiesPersister propertiesPersister = new DefaultPropertiesPersister();
			for (int i = 0; i < this.locations.length; i++) {
				InputStream is = null;
				Resource location = this.locations[i];
				File configDir = new File(linuxSystePath);
				if (!configDir.exists()) {
					is = this.getClass().getResourceAsStream(
							windowsSystemPath + "/"
									+ location.getFilename());
				} else {
					String filePath = linuxSystePath + File.separator
							+ location.getFilename();
					is = new FileInputStream(filePath);
				}
				try {
					if (fileEncoding != null) {
						propertiesPersister.load(props, new InputStreamReader(
								is, fileEncoding));
					} else {
						propertiesPersister.load(props, is);
					}
					this.props = props;
				} finally {
					if (is != null)
						is.close();
				}
			}
		}
	}
	
	public String getValue(String key) {
		return props.getProperty(key);
	}
}
