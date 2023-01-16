package com.dragon.flow.web.resource.org;


import com.dragon.flow.model.org.PositionInfo;
import com.dragon.flow.service.org.IPositionInfoService;
import com.dragon.flow.vo.CheckExistVo;
import com.dragon.flow.vo.org.BatchPositionInfoVo;
import com.dragon.flow.vo.org.OrgTreeVo;
import com.dragon.flow.vo.pager.ParamVo;
import com.dragon.flow.web.resource.BaseResource;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.vo.ReturnVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-27
 */
@RestController
@RequestMapping("/flow/org/positionInfo")
public class PositionInfoResource extends BaseResource<PositionInfo> {
    private static final String MODULE_SN = "PositionInfo:";
    @Autowired
    private IPositionInfoService positionInfoService;

    /**
     * 判断字段是否存在
     *
     * @param checkExistVo 参数
     * @return
     */
    @PostMapping(value = "/checkEntityExist", produces = "application/json")
    protected ReturnVo<Boolean> checkEntityExist(@RequestBody CheckExistVo checkExistVo) {
        return this.checkExist(positionInfoService, checkExistVo);
    }
    /**
     * @return 获取岗位树
     */
    @PostMapping("/getPositionInfoTree")
    public ReturnVo<List> getPositionInfoTree() {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        List<OrgTreeVo> positionTree = positionInfoService.getPositionTree();
        returnVo.setData(positionTree);
        return returnVo;
    }
    /**
     * 分页获取列表
     *
     * @param params 查询参数 、 分页参数
     * @return
     */
    @PostMapping(value = "/getPagerModel", produces = "application/json")
    public ReturnVo<PagerModel> getPagerModel(@RequestBody ParamVo<PositionInfo> params) {
        ReturnVo<PagerModel> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        PagerModel<PositionInfo> pm = positionInfoService.getPagerModelByWrapper(params.getEntity(), params.getQuery());
        returnVo.setData(pm);
        return returnVo;
    }

    /**
     * 添加或者修改
     *
     * @param positionInfo 参数
     * @return
     */
    @PostMapping(value = "/saveOrUpdate", produces = "application/json")
    public ReturnVo<String> saveOrUpdate(@RequestBody PositionInfo positionInfo) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        positionInfoService.saveOrUpdate(positionInfo, this.getLoginUser());
        return returnVo;
    }

    /**
     * 批量添加或者修改
     *
     * @param batchPositionInfoVo 参数
     * @return
     */
    @PostMapping(value = "/batchSaveOrUpdatePositionSeqAndPosition", produces = "application/json")
    public ReturnVo<String> batchSaveOrUpdatePositionSeqAndPosition(@RequestBody BatchPositionInfoVo batchPositionInfoVo) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        positionInfoService.batchSaveOrUpdatePositionSeqAndPosition(batchPositionInfoVo.getPositionSeq(),
                batchPositionInfoVo.getPositionInfos(), this.getLoginUser());
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
        for(String id : ids){
            positionInfoService.deleteById(id);
        }
        return returnVo;
    }

    /**
     * 查询单个
     *
     * @param id
     * @return
     */
    @GetMapping(value = "/get", produces = "application/json")
    public ReturnVo<PositionInfo> get(String id) {
        ReturnVo<PositionInfo> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        PositionInfo positionInfo = positionInfoService.getById(id);
        returnVo.setData(positionInfo);
        return returnVo;
    }
}

