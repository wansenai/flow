//package com.dragon.flow.shiro;
//
//import com.dragon.flow.model.privilege.ShiroSession;
//import com.dragon.flow.service.privilege.IShiroSessionService;
//import org.apache.commons.collections.CollectionUtils;
//import org.apache.shiro.session.Session;
//import org.apache.shiro.session.mgt.SimpleSession;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.scheduling.annotation.EnableScheduling;
//import org.springframework.scheduling.annotation.Scheduled;
//
//import java.util.Date;
//import java.util.List;
//
///**
// * @program: flow
// * @description: Session定时任务
// * @author: Bruce.Liu
// * @create: 2021-04-12 21:22
// **/
//@Configuration
//@EnableScheduling
//public class SessionScheduleTask {
//
//    @Autowired
//    private MySessionDao mySessionDao;
//    @Autowired
//    private IShiroSessionService shiroSessionService;
//
//    @Scheduled(fixedRate = 1000 * 60 * 60)
//    private void configureTasks() {
//        List<ShiroSession> list = shiroSessionService.list();
//        if (CollectionUtils.isNotEmpty(list)){
//            list.forEach(shiroSession -> {
//                Session session = SerializableUtils.deserialize(shiroSession.getSession());
//                SimpleSession simpleSession = (SimpleSession) session;
//                if (simpleSession.getStopTimestamp() != null){
//                    mySessionDao.doDelete(simpleSession);
//                }
//                long time = new Date().getTime() - simpleSession.getLastAccessTime().getTime();
//                if (time > simpleSession.getTimeout()) {
//                    mySessionDao.doDelete(simpleSession);
//                }
//            });
//        }
//    }
//}
