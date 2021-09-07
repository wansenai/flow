package com.dragon.flow.privilege;

import com.dragon.flow.main.FlowAdminApplication;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.service.privilege.IUserService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-03-25 09:17
 **/
@SpringBootTest(classes = FlowAdminApplication.class)
public class TestUser {
    protected final Log logger = LogFactory.getLog(getClass());
//    protected Logger logger = LoggeFactory.getLogger(this.getClass());

    @Autowired
    private IUserService  userService;

    @Test
    public void test(){
        logger.error("sfdsfsfsf");
    }

    @Test
    public void testFindUser() {
        userService.login("test","rewrwe");
        logger.info("test------------");
    }
    @Test
    public void testAddUserPassword() {
        User user = new User();
        user.setId("1");
        user.setPassword("888888");
        userService.setPassword(user);
    }
}
