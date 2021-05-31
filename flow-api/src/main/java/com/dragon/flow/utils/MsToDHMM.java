package com.dragon.flow.utils;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-04-07 13:58
 **/
public class MsToDHMM {

    private static final int SECOND = 1000;
    private static final int MINUTE = 60 * SECOND;
    private static final int HOUR = 60 * MINUTE;
    private static final int DAY = 24 * HOUR;
    public static void main(String[] args) {
        long ms = 4004543l;
        System.out.println(MsToDHMM.getDhmm(ms));
    }

    //    long ms = 10304004543l;
    public static String getDhmm(long ms) {
        StringBuffer text = new StringBuffer("");
        if (ms > DAY){
            text.append(ms / DAY).append("天 ");
            ms %= DAY;
        }
        if (ms > HOUR){
            text.append(ms / HOUR).append("时 ");
            ms %= HOUR;
        }
        if (ms > MINUTE){
            text.append(ms / MINUTE).append("分 ");
            ms %= MINUTE;
        }
        if (ms > SECOND){
            text.append(ms / SECOND).append("秒");
//            ms %= SECOND;
        }
//        text.append(ms + " ms");
        return text.toString();
    }
}
