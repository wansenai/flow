//package com.dragon.flow.shiro;
//
//import org.apache.shiro.session.Session;
//import org.apache.shiro.session.SessionListener;
//import org.springframework.stereotype.Component;
//
///**
// * @ClassName MySessionListener
// * @Description session监听
// * @Author bruce.liu
// * @Date 2021/05/4 23:24
// * @Version 1.0
// **/
//@Component
//public class MySessionListener implements SessionListener {
//
//    @Override
//    public void onStart(Session session) {//会话创建时触发
//        System.out.println("createSession：" + session.getId());
//    }
//    @Override
//    public void onExpiration(Session session) {//会话过期时触发
//        System.out.println("dropSession：" + session.getId());
//    }
//    @Override
//    public void onStop(Session session) {//退出/会话过期时触发
//        System.out.println("stopSession：" + session.getId());
//    }
//}
