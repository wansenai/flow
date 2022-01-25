package com.dragon.tools.utils;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-20 09:45
 **/
public class DurationUtils {
    public static String getDuration(Long duration) {
        if (duration != null){
            long nd = 1000 * 24 * 60 * 60;//一天的毫秒数
            long nh = 1000 * 60 * 60;//一小时的毫秒数
            long hm = 1000 * 60;//一分钟的毫秒数
            long sm = 1000;
            //获得两个时间的毫秒时间差异
            long day = duration / nd;//计算差多少天
            long hour = duration % nd / nh;//计算差多少小时
            long minute = duration % nh / hm;
            long second = duration % hm / sm;
            StringBuffer durationStr = new StringBuffer("");
            if (day > 0){
                durationStr.append(day).append("天 ");
            }
            if (hour > 0){
                durationStr.append(hour).append("时 ");
            }
            if (minute > 0){
                durationStr.append(minute).append("分 ");
            }
            if (second > 0){
                durationStr.append(second).append("秒");
            }
            return durationStr.toString();
        } else {
            return "";
        }
    }
}
