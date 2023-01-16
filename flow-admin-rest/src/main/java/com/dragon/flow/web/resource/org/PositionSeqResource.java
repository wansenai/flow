package com.dragon.flow.web.resource.org;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.model.org.PositionSeq;
import com.dragon.flow.service.org.IPositionSeqService;
import com.dragon.flow.vo.CheckExistVo;
import com.dragon.flow.web.resource.BaseResource;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.vo.ReturnVo;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
@RequestMapping("/flow/org/positionSeq")
public class PositionSeqResource extends BaseResource<PositionSeq> {
    private static final String MODULE_SN = "PositionSeq:";
    @Autowired
    private IPositionSeqService positionSeqService;

    /**
     * 判断字段是否存在
     *
     * @param checkExistVo 参数
     * @return
     */
    @PostMapping(value = "/checkEntityExist", produces = "application/json")
    protected ReturnVo<Boolean> checkEntityExist(@RequestBody CheckExistVo checkExistVo) {
        return this.checkExist(positionSeqService, checkExistVo);
    }

    /**
     * @return 列表json数组字符串
     * @Description: 获取所有
     */
    @PostMapping("/getPositionSeqs")
    public ReturnVo<List> getPositionSeqs(@RequestBody PositionSeq positionSeq) {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        LambdaQueryWrapper<PositionSeq> positionSeqLambdaQueryWrapper = new LambdaQueryWrapper<>();
        if (StringUtils.isNotBlank(positionSeq.getKeyword())){
            positionSeqLambdaQueryWrapper.like(PositionSeq::getCode, positionSeq.getKeyword()).or()
                    .like(PositionSeq::getName, positionSeq.getKeyword());
        }
        positionSeqLambdaQueryWrapper.eq(PositionSeq::getDelFlag, FlowConstant.DEL_FLAG_1).orderByAsc(PositionSeq::getOrderNo);
        List<PositionSeq> list = positionSeqService.list(positionSeqLambdaQueryWrapper);
        returnVo.setData(list);
        return returnVo;
    }


    /**
     * 添加或者修改
     *
     * @param positionSeq 参数
     * @return
     */
    @PostMapping(value = "/saveOrUpdate", produces = "application/json")
    public ReturnVo<String> saveOrUpdate(@RequestBody PositionSeq positionSeq) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.FAIL, "保存失败！");
        positionSeqService.saveOrUpdate(positionSeq, this.getLoginUser());
        returnVo.setCode(ReturnCode.SUCCESS);
        returnVo.setMsg("保存成功");
        return returnVo;
    }

    /**
     * 删除
     *
     * @param ids
     * @return
     */
    @PostMapping(value = "/deleteById", produces = "application/json")
    public ReturnVo<String> deleteById(@RequestBody List<String> ids) {
        ReturnVo<String> returnVo = null;
        for(String id : ids) {
            returnVo = this.positionSeqService.deleteById(id);
        }
        return returnVo;
    }

    /**
     * 查询
     *
     * @param id id
     * @return
     */
    @PostMapping(value = "/get", produces = "application/json")
    public ReturnVo<PositionSeq> get(@RequestBody String id) {
        ReturnVo<PositionSeq> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        PositionSeq positionSeq = positionSeqService.getById(id);
        returnVo.setData(positionSeq);
        return returnVo;
    }
}

