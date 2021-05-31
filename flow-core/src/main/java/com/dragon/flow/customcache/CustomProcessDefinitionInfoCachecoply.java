package com.dragon.flow.customcache;//package com.dragon.flow.customcache;
//
//import org.apache.commons.collections.MapUtils;
//import org.flowable.common.engine.impl.persistence.deploy.DeploymentCache;
//import org.flowable.engine.impl.persistence.deploy.ProcessDefinitionInfoCacheObject;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.cache.Cache;
//import org.springframework.cache.CacheManager;
//import org.springframework.cache.ehcache.EhCacheCache;
//import org.springframework.stereotype.Component;
//
//import java.lang.reflect.Field;
//import java.util.ArrayList;
//import java.util.Collection;
//import java.util.HashMap;
//import java.util.Map;
//
///**
// * @author : bruce.liu
// * @title: : CustomProcessDefinitionInfoCache
// * @projectName : flow
// * @description: 自定义流程定义缓存
// * @date : 2019/12/209:28
// */
//@Component
//public class CustomProcessDefinitionInfoCachecoply implements DeploymentCache<ProcessDefinitionInfoCacheObject> {
//    private static final Logger logger = LoggerFactory.getLogger(CustomProcessDefinitionInfoCachecoply.class);
//    private static final String CACHE_NAME = "cache-process-definition";
//    @Autowired
//    private CacheManager cacheManager;
//
//    @Override
//    public ProcessDefinitionInfoCacheObject get(String id) {
//        Cache cache = cacheManager.getCache(CACHE_NAME);
//        ProcessDefinitionInfoCacheObject processDefinitionInfoCacheObject = cache.get(id, ProcessDefinitionInfoCacheObject.class);
//        return processDefinitionInfoCacheObject;
//    }
//
//    @Override
//    public boolean contains(String id) {
//        EhCacheCache ehcache = (EhCacheCache) cacheManager.getCache(CACHE_NAME);
//        boolean flag = false;
//        if (ehcache.getNativeCache().isKeyInCache(id)) {
//            flag = true;
//        }
//        return flag;
//    }
//
//    @Override
//    public void add(String id, ProcessDefinitionInfoCacheObject object) {
//        if (object != null) {
//            Cache cache = cacheManager.getCache(CACHE_NAME);
//            cache.put(id, object);
//        }
//    }
//
//    @Override
//    public void remove(String id) {
//        Cache cache = cacheManager.getCache(CACHE_NAME);
//        cache.evict(id);
//    }
//
//    @Override
//    public void clear() {
//        Cache cache = cacheManager.getCache(CACHE_NAME);
//        cache.clear();
//    }
//
//    @Override
//    public Collection<ProcessDefinitionInfoCacheObject> getAll() {
//        Cache cache = cacheManager.getCache(CACHE_NAME);
//        Object o = cache.getNativeCache();
//        Collection<ProcessDefinitionInfoCacheObject> list = new ArrayList<>();
//        try {
//            Map<String, Object> datas = (Map<String, Object>) this.ObjToMap(o).get("localCache");
//            if (MapUtils.isNotEmpty(datas)) {
//                datas.forEach((k, v) -> list.add((ProcessDefinitionInfoCacheObject) v));
//            }
//            return list;
//        } catch (Exception e) {
//            logger.error("获取所有的报错",e);
//        }
//        return null;
//    }
//
//    public Map<String, Object> ObjToMap(Object obj) throws Exception {
//        Map<String, Object> map = new HashMap<>();
//        Field[] fields = obj.getClass().getDeclaredFields();
//        for (Field field : fields) {
//            field.setAccessible(true);
//            map.put(field.getName(), field.get(obj));
//        }
//        return map;
//    }
//
//    @Override
//    public int size() {
//        Cache cache = cacheManager.getCache(CACHE_NAME);
//        int size = 0;
//        try {
//            Object o = cache.getNativeCache();
//            Map<String, Object> datas = (Map<String, Object>) this.ObjToMap(o).get("localCache");
//            if (MapUtils.isNotEmpty(datas)) {
//                size = datas.size();
//            }
//        } catch (Exception e) {
//            logger.error("获取缓存条数失败",e);
//        }
//        return size;
//    }
//}
