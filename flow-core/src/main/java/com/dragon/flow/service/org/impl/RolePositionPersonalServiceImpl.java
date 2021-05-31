package com.dragon.flow.service.org.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.dragon.flow.exception.FlowException;
import com.dragon.flow.model.org.Personal;
import com.dragon.flow.model.org.RolePositionPersonal;
import com.dragon.flow.mapper.org.IRolePositionPersonalMapper;
import com.dragon.flow.model.privilege.User;
import com.dragon.flow.service.org.IRolePositionPersonalService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-29
 */
@Service
public class RolePositionPersonalServiceImpl extends ServiceImpl<IRolePositionPersonalMapper, RolePositionPersonal> implements IRolePositionPersonalService {
    @Autowired
    private IRolePositionPersonalMapper rolePositionPersonalMapper;

    @Override
    public void saveOrUpdateBatch(List<RolePositionPersonal> rolePositionPersonalList, User user) {
        if (CollectionUtils.isNotEmpty(rolePositionPersonalList)){
            Date date = new Date();
            rolePositionPersonalList.forEach(rolePositionPersonal -> {
                if (StringUtils.isNotBlank(rolePositionPersonal.getId())){
                    rolePositionPersonal.setUpdateTime(date);
                    rolePositionPersonal.setUpdator(user.getUserNo());
                } else {
                    rolePositionPersonal.setCreateTime(date);
                    rolePositionPersonal.setCreator(user.getUserNo());
                }
            });
            this.saveOrUpdateBatch(rolePositionPersonalList);
        }
    }

    @Override
    public List<Personal> getPersonalByRoleIdAndPositionCode(String roleId, String positionCode) {
        if (StringUtils.isBlank(roleId)){
            throw new FlowException("请输入角色id");
        }
        List<Personal> list = rolePositionPersonalMapper.getPersonalByRoleIdAndPositionId(roleId, positionCode);
        return list;
    }
}
