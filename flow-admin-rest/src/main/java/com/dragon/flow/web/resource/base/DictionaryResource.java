package com.dragon.flow.web.resource.base;


import com.dragon.flow.model.base.Dictionary;
import com.dragon.flow.service.base.IDictionaryService;
import com.dragon.flow.vo.CheckExistVo;
import com.dragon.flow.vo.pager.ParamVo;
import com.dragon.flow.web.resource.BaseResource;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.vo.ReturnVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author bruce.liu
 * @since 2021-03-29
 */
@RestController
@RequestMapping("/flow/base/dictionary")
public class DictionaryResource extends BaseResource<Dictionary> {
    private static final String MODULE_SN = "Dictionary:";
    @Autowired
    private IDictionaryService dictionaryService;
    /**
     * 判断字段是否存在
     *
     * @param checkExistVo 参数
     * @return
     */
    @PostMapping(value = "/checkEntityExist", produces = "application/json")
    protected ReturnVo<Boolean> checkEntityExist(@RequestBody CheckExistVo checkExistVo) {
        return this.checkExist(dictionaryService, checkExistVo);
    }
    /**
     * 分页获取列表
     *
     * @param params 查询参数 、 分页参数
     * @return
     */
    @PostMapping(value = "/getPagerModel", produces = "application/json")
    public ReturnVo<PagerModel> getPagerModel(@RequestBody ParamVo<Dictionary> params) {
        ReturnVo<PagerModel> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        PagerModel<Dictionary> pm = dictionaryService.getPagerModelByWrapper(params.getEntity(), params.getQuery());
        returnVo.setData(pm);
        return returnVo;
    }

    /**
     * 添加或者修改
     *
     * @param dictionary 参数
     * @return
     */
    @PostMapping(value = "/saveOrUpdate", produces = "application/json")
    public ReturnVo<String> saveOrUpdate(@RequestBody Dictionary dictionary) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.FAIL, "保存失败");
        try {
            dictionaryService.saveOrUpdate(dictionary, this.getLoginUser());
            returnVo.setMsg("保存成功！");
            returnVo.setCode(ReturnCode.SUCCESS);
        } catch (Exception e) {
            e.printStackTrace();
            returnVo.setMsg(e.getMessage());
        }
        return returnVo;
    }

    /**
     * 删除
     *
     * @param id
     * @return
     */
    @PostMapping(value = "/delete/{id}", produces = "application/json")
    public ReturnVo<String> delete(@PathVariable String id) {
        ReturnVo<String> returnVo = dictionaryService.deleteByIds(id);
        return returnVo;
    }

    /**
     * 查询
     *
     * @param id
     * @return
     */
    @GetMapping(value = "/get", produces = "application/json")
    public ReturnVo<Dictionary> get(@RequestBody String id) {
        ReturnVo<Dictionary> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        Dictionary dictionary = dictionaryService.getById(id);
        returnVo.setData(dictionary);
        return returnVo;
    }
}

