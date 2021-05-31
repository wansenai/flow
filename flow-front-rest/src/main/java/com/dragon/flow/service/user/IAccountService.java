package com.dragon.flow.service.user;

import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.user.Account;

/**
 * <p>
 * 服务类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-05-12
 */
public interface IAccountService extends IService<Account> {
    /**
     * 通过条件获取账户
     *
     * @param username
     * @param pwd
     * @return
     */
    Account login(String username, String pwd);
}
