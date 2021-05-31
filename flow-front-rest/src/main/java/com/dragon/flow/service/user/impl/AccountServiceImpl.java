package com.dragon.flow.service.user.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.mapper.user.IAccountMapper;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.model.user.Account;
import com.dragon.flow.service.user.IAccountService;
import com.dragon.tools.common.MD5Util;
import org.apache.commons.collections.CollectionUtils;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-05-12
 */
@Service
public class AccountServiceImpl extends ServiceImpl<IAccountMapper, Account> implements IAccountService {
    @Override
    public Account login(String username, String pwd) {
        String md5Pwd = MD5Util.getMD5String(pwd);
        LambdaQueryWrapper<Account> accountLambdaQueryWrapper = new LambdaQueryWrapper<>();
        accountLambdaQueryWrapper.eq(Account::getPwd, md5Pwd)
                .and(obj -> obj.eq(Account::getCode, username.trim()).or()
                        .eq(Account::getTel, username.trim()).or()
                        .eq(Account::getUsername, username.trim()));
        List<Account> accounts = this.list(accountLambdaQueryWrapper);
        if (CollectionUtils.isNotEmpty(accounts)){
            return accounts.get(0);
        }
        return null;
    }

    public static void main(String[] args) {
        System.out.println(MD5Util.getMD5String("888888"));
    }
}
