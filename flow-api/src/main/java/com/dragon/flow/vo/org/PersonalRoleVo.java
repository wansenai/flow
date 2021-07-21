package com.dragon.flow.vo.org;

import lombok.Data;

import java.io.Serializable;

/**
 * @author bruce.liu
 * @description 人员角色VO
 * @date 2021/7/21 15:05
 */
@Data
public class PersonalRoleVo implements Serializable {
    private String roleId;
    private String companyId;
    private String keyword;
}
