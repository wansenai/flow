package com.dragon.flow.web.resource.privilege;

import com.dragon.flow.model.privilege.ACL;
import com.dragon.flow.model.privilege.Module;
import com.dragon.flow.service.privilege.IAclService;
import com.dragon.flow.web.resource.BaseResource;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.vo.ReturnVo;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * @program: flow
 * @description: 接口
 * @author: Bruce.Liu
 * @create: 2021-03-24 09:24
 **/
@RestController
@RequestMapping("/flow/privilege/acl")
public class AclResource extends BaseResource {
    private static final String MODULE_SN = "Group:";
    @Autowired
    private IAclService aclService;

    /**
     * 通过组获取组所拥有的权限值
     * 获得所有模块，已设置选中状态
     *
     * @param groupId
     * @return
     * @throws Exception
     */
    @GetMapping("/getModuleAclsByGroupId/{groupId}")
    public ReturnVo getModuleAclsByGroupId(@PathVariable String groupId)  {
        ReturnVo returnVo = new ReturnVo(ReturnCode.SUCCESS, "成功");
        List<Module> datas = null;
        if (StringUtils.isNotBlank(groupId)){
            List<String> groupIds = new ArrayList<>();
            groupIds.add(groupId);
            datas = aclService.getModuleAclsByGroupIds(groupIds);
            returnVo.setData(datas);
        }
        return returnVo;
    }

    /**
     * 批量设置单个模块的ACL的值
     *
     * @param moduleId  模块Id
     * @param positions 多少位
     * @param groupId   组id
     */
    @PostMapping("/setAclModuleList/{moduleId}/{groupId}")
    public ReturnVo setAclModuleList(@RequestBody List<Integer> positions, @PathVariable String moduleId, @PathVariable String groupId) {
        ReturnVo vo = new ReturnVo(ReturnCode.SUCCESS, "成功");
        try {
            this.aclService.setAclModuleList(positions, moduleId, groupId);
        } catch (Exception e) {
            e.printStackTrace();
            logger.debug("AclResource-setAclModuleList:" + e.getMessage());
            vo = new ReturnVo(ReturnCode.FAIL, "失败");
        }
        return vo;
    }

    /**
     * 设置ACL的值
     *
     * @param params   acl
     * @param position 多少位
     * @param checked  是否选中 1选中，其他不选中
     * @throws Exception
     */
    @PostMapping("/setAcl/{position}/{checked}")
    public ReturnVo setAcl(@RequestBody ACL params, @PathVariable Integer position, @PathVariable int checked) {
        ReturnVo vo = new ReturnVo(ReturnCode.SUCCESS, "成功");
        try {
            if (position != null){
                this.aclService.createAcl(params, position, ACL.ACL_YES == checked);
            }
        } catch (Exception e) {
            e.printStackTrace();
            logger.debug("AclResource-setAcl:" + e.getMessage());
            vo = new ReturnVo(ReturnCode.FAIL, "失败");
        }
        return vo;
    }

    /**
     * 批量设置ACL的值
     *
     * @param params  acl
     * @param checked 全选或取消
     * @throws Exception
     */
    @PostMapping("/setAllAcl/{checked}")
    public ReturnVo setAllAcl(@RequestBody ACL params, @PathVariable int checked) {
        ReturnVo vo = new ReturnVo(ReturnCode.SUCCESS, "成功");
        try {
            this.aclService.createAllAcl(params, ACL.ACL_YES == checked);
        } catch (Exception e) {
            e.printStackTrace();
            logger.debug("AclResource-setAllAcl:" + e.getMessage());
            vo = new ReturnVo(ReturnCode.FAIL, "失败");
        }
        return vo;
    }

    /**
     * 批量设置ACL的值
     *
     * @param params  acl
     * @param checked 全选或取消
     * @throws Exception
     */
    @PostMapping("/setAclByModule/{checked}")
    public ReturnVo setAclByModule(@RequestBody ACL params, @PathVariable int checked) {
        ReturnVo vo = new ReturnVo(ReturnCode.SUCCESS, "成功");
        try {
            this.aclService.createAclByModule(params, ACL.ACL_YES == checked);
        } catch (Exception e) {
            e.printStackTrace();
            logger.debug("AclResource-setAclByModule:" + e.getMessage());
            vo = new ReturnVo(ReturnCode.FAIL, "失败");
        }
        return vo;
    }

}
