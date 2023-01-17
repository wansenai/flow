package com.dragon.flow.web.resource.privilege;

import com.dragon.flow.model.log.SysOperRecord;
import com.dragon.flow.service.ISysOperRecordService;
import com.dragon.flow.vo.pager.ParamVo;
import com.dragon.flow.web.resource.BaseResource;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.vo.ReturnVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @program: flow
 * @description: 系统操作日志接口
 * @author: Bruce.Liu
 * @create: 2023-01-18 21:41
 **/
@RestController
@RequestMapping("/flow/log/sysOperRecord")
public class SysOperRecordResource extends BaseResource<SysOperRecord> {
    @Autowired
    private ISysOperRecordService sysOperRecordService;

    /**
     * 分页获取列表
     *
     * @param params 查询参数
     * @return
     */
    @PostMapping(value = "/getPagerModel", produces = "application/json")
    public ReturnVo<PagerModel> getPagerModel(@RequestBody ParamVo<SysOperRecord> params) {
        ReturnVo<PagerModel> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        PagerModel<SysOperRecord> pm = sysOperRecordService.getPagerModelByWrapper(params.getEntity(), params.getQuery());
        returnVo.setData(pm);
        return returnVo;
    }

    /**
     * 删除
     *
     * @param ids
     * @return
     */
    @PostMapping(value = "/delete", produces = "application/json")
    public ReturnVo<String> delete(@RequestBody List<String> ids) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        sysOperRecordService.removeByIds(ids);
        return returnVo;
    }
}
