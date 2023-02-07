package com.dragon.flow.vo.org;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * @program: flow
 * @description: 组织树VO
 * @author: Bruce.Liu
 * @create: 2021-04-13 14:29
 **/
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrgTreeVo implements Serializable {

    public static  final  String COMPANY_TYPE = "1";
    public static  final  String DEPT_TYPE = "2";

    private String id;
    private String pid;
    private String code;
    private String name;
    private String shortName;
    private String companyId;
    private String companyName;
    //1 公司 2 部门 看类上面的变量
    private String sourceType;
    private String leaderCode;
    private String leaderName;

    public OrgTreeVo(String id, String pid, String name, String shortName, String sourceType) {
        this.id = id;
        this.pid = pid;
        this.name = name;
        this.shortName = shortName;
        this.sourceType = sourceType;
    }
}
