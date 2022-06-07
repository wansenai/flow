//package com.dragon.flow.shiro;
//
//import com.baomidou.mybatisplus.core.toolkit.IdWorker;
//import org.apache.shiro.session.Session;
//import org.apache.shiro.session.mgt.eis.SessionIdGenerator;
//
//import java.io.Serializable;
//
///**
// * @ClassName JavaUuidSessionIdGenerator
// * @Description sessionId生成策略
// * @Author bruce.liu
// * @Date 2021/05/4 22:13
// * @Version 1.0
// **/
//public class JavaUuidSessionIdGenerator implements SessionIdGenerator {
//    @Override
//    public Serializable generateId(Session session) {
//        return IdWorker.get32UUID();
//    }
//}
