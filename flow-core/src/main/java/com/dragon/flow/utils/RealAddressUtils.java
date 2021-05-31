package com.dragon.flow.utils;

import com.alibaba.fastjson.JSONObject;
import com.dragon.flow.vo.ip.IpVo;
import com.maxmind.geoip2.DatabaseReader;
import com.maxmind.geoip2.model.CityResponse;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.client.RestTemplate;

import java.net.InetAddress;
import java.util.Map;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-23 13:04
 **/
public class RealAddressUtils {

    /**
     * description 地址库查询
     *
     * @param ip 地址
     * @return java.lang.String
     * @version 1.0
     */
    public static IpVo getRealAddress(String ip) {
        IpVo result = null;
        try {
            // 加载地址库
            ClassPathResource resource = new ClassPathResource("geolite2/GeoLite2-City.mmdb");
            DatabaseReader reader = new DatabaseReader.Builder(resource.getInputStream()).build();
            InetAddress inetAddress = InetAddress.getByName(ip);
            CityResponse response = reader.city(inetAddress);
            // 获取所在国家
            String country = response.getCountry().getNames().get("ja");
            // 库内获取不到的IP，访问ali的地域查询
            if (response.getSubdivisions().size() > 0){
                // 获取所在省份
                String province = response.getSubdivisions().get(0).getNames().get("zh-CN");
                // 获取所在城市
                String city = response.getCity().getNames().get("zh-CN");
                city = city == null ? "" : city;
                result = new IpVo(country, province, city);
            } else {
                result = getAlibaba(ip);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    /**
     * description ali地域查询
     *
     * @param ip ip地址
     * @return java.lang.String
     * @version 1.0
     */
    public static IpVo getAlibaba(String ip) {
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject("http://ip.aliyun.com/outGetIpInfo?accessKey=alibaba-inc&ip=" + ip, String.class);
        Map valueMap = JSONObject.parseObject(result, Map.class);
        // 请求成功，解析响应数据
        if ("query success".equals(valueMap.get("msg"))){
            Map<String, String> dataMap = (Map<String, String>) valueMap.get("data");
            String country = dataMap.get("country");
            String region = dataMap.get("region");
            String city = dataMap.get("city");
            return new IpVo(country, region, city);
        }
        return null;
    }

    public static void main(String[] args) {
        IpVo alibaba = RealAddressUtils.getAlibaba("60.214.111.6");
        System.out.println(alibaba.toString());
        IpVo ipVo = RealAddressUtils.getRealAddress("60.214.111.6");
        System.out.println(ipVo.toString());
    }


}
