//package com.dragon.flow.shiro;
//
//import com.dragon.flow.model.privilege.ShiroSession;
//import com.dragon.flow.service.privilege.IShiroSessionService;
//import org.apache.commons.collections.CollectionUtils;
//import org.apache.commons.lang.StringUtils;
//import org.apache.log4j.Logger;
//import org.apache.shiro.cache.Cache;
//import org.apache.shiro.session.Session;
//import org.apache.shiro.session.mgt.ValidatingSession;
//import org.apache.shiro.session.mgt.eis.CachingSessionDAO;
//import org.springframework.beans.factory.annotation.Autowired;
//
//import java.io.Serializable;
//import java.util.Collection;
//import java.util.Collections;
//import java.util.List;
//
///**
// * @ClassName MySessionDao
// * @Description 自定义sessionDao
// * @Author bruce.liu
// * @Date 2021/05/4 22:18
// * @Version 1.0
// **/
//public class MySessionDao extends CachingSessionDAO {
//
//    private static Logger logger = Logger.getLogger(MySessionDao.class);
//
//    @Autowired
//    private IShiroSessionService shiroSessionService;
//    private Cache<Serializable, Session> activeSessions;
//
//    @Override
//    protected void doUpdate(Session session) {
//        if (session instanceof ValidatingSession
//                && !((ValidatingSession) session).isValid()){
//            return;
//        }
//        ShiroSession shiroSession = new ShiroSession(session.getId().toString(), SerializableUtils.serialize(session));
//        shiroSessionService.updateById(shiroSession);
//        this.cache(session, session.getId());
//    }
//
//    @Override
//    protected void doDelete(Session session) {
//        shiroSessionService.removeById(session.getId());
//        this.uncache(session);
//    }
//
//
//    @Override
//    protected Serializable doCreate(Session session) {
//        Serializable sessionId = generateSessionId(session);
//        assignSessionId(session, sessionId);
//        ShiroSession shiroSession = new ShiroSession(sessionId.toString(), SerializableUtils.serialize(session));
//        shiroSessionService.saveOrUpdate(shiroSession);
//        this.cache(session, session.getId());
//        return session.getId();
//    }
//
//    @Override
//    protected Session doReadSession(Serializable sessionId) {
//        String sessionStr = null;
//        try {
//            ShiroSession shiroSession = shiroSessionService.getById(sessionId);
//            if (shiroSession != null){
//                sessionStr = shiroSession.getSession();
//            }
//        } catch (Exception e) {
//            logger.error("通过sessionId获取session数据为空!");
//        }
//        if (StringUtils.isBlank(sessionStr)){
//            return null;
//        }
//        return SerializableUtils.deserialize(sessionStr);
//    }
//
//    @Override
//    public Collection<Session> getActiveSessions() {
//        Cache<Serializable, Session> cache = getActiveSessionsCacheLazy();
//        if (cache != null){
//            Collection<Session> cacheSessions = cache.values();
//            if (CollectionUtils.isNotEmpty(cacheSessions)){
//                long count = shiroSessionService.count();
//                if (count != cacheSessions.size()){
//                    List<ShiroSession> sessionList = shiroSessionService.list();
//                    sessionList.forEach(shiroSession -> {
//                        Session s = SerializableUtils.deserialize(shiroSession.getSession());
//                        cache(s, shiroSession.getId());
//                    });
//                } else {
//                    return cache.values();
//                }
//            } else {
//                List<ShiroSession> sessionList = shiroSessionService.list();
//                sessionList.forEach(shiroSession -> {
//                    Session s = SerializableUtils.deserialize(shiroSession.getSession());
//                    cache(s, shiroSession.getId());
//                });
//            }
//            cache = getActiveSessionsCacheLazy();
//            return cache.values();
//        } else {
//            return Collections.emptySet();
//        }
//    }
//
//    private Cache<Serializable, Session> getActiveSessionsCacheLazy() {
//        if (this.activeSessions == null){
//            this.activeSessions = createActiveSessionsCache();
//        }
//        return activeSessions;
//    }
//}
