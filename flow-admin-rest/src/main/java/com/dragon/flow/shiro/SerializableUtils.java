//package com.dragon.flow.shiro;
//
//import org.apache.shiro.codec.Base64;
//import org.apache.shiro.session.Session;
//
//import java.io.ByteArrayInputStream;
//import java.io.ByteArrayOutputStream;
//import java.io.ObjectInputStream;
//import java.io.ObjectOutputStream;
//
///**
// * @ClassName SerializableUtils
// * @Description session序列化工具类
// * @Author bruce.liu
// * @Date 2021/05/4 22:17
// * @Version 1.0
// **/
//public class SerializableUtils {
//
//    /**
//     * 编码
//     * @param session
//     * @return
//     */
//    public static String serialize(Session session) {
//        try {
//            ByteArrayOutputStream bos = new ByteArrayOutputStream();
//            ObjectOutputStream oos = new ObjectOutputStream(bos);
//            oos.writeObject(session);
//            return Base64.encodeToString(bos.toByteArray());
//        } catch (Exception e) {
//            throw new RuntimeException("serialize session error", e);
//        }
//    }
//
//    /**
//     * 解码
//     * @param sessionStr
//     * @return
//     */
//    public static Session deserialize(String sessionStr) {
//        try {
//            ByteArrayInputStream bis = new ByteArrayInputStream(Base64.decode(sessionStr));
//            ObjectInputStream ois = new ObjectInputStream(bis);
//            return (Session) ois.readObject();
//        } catch (Exception e) {
//            throw new RuntimeException("deserialize session error", e);
//        }
//    }
//}
