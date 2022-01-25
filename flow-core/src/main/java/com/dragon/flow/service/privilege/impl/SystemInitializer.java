package com.dragon.flow.service.privilege.impl;

import com.dragon.flow.model.privilege.AppPrivilegeValue;
import com.dragon.flow.service.privilege.IAppPrivilegeValueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

/**
 * @program: flow
 * @description: 系统初始化
 * @author: Bruce.Liu
 * @create: 2021-04-10 10:03
 **/
@Component
public class SystemInitializer {

    @Autowired
    private IAppPrivilegeValueService appPrivilegeValueService;

    @PostConstruct
    public void initialize() {
        long count = appPrivilegeValueService.count();
        if (count == 0){
            List<AppPrivilegeValue> list = new ArrayList<>();
            AppPrivilegeValue add = new AppPrivilegeValue(0, "添加", 1);
            AppPrivilegeValue query = new AppPrivilegeValue(1, "查询", 2);
            AppPrivilegeValue update = new AppPrivilegeValue(2, "修改", 3);
            AppPrivilegeValue delete = new AppPrivilegeValue(3, "删除", 4);
            AppPrivilegeValue print = new AppPrivilegeValue(4, "打印", 5);
            AppPrivilegeValue export = new AppPrivilegeValue(5, "导出", 6);
            AppPrivilegeValue authorization = new AppPrivilegeValue(6, "授权", 7);
            AppPrivilegeValue publish = new AppPrivilegeValue(7, "发布", 8);
            list.add(add);
            list.add(query);
            list.add(update);
            list.add(delete);
            list.add(print);
            list.add(export);
            list.add(authorization);
            list.add(publish);
            appPrivilegeValueService.saveBatch(list);
        }
    }
}
