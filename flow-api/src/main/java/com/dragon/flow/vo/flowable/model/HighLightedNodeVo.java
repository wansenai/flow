package com.dragon.flow.vo.flowable.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

/**
 * @program: flow
 * @description: 高亮信息
 * @author: Bruce.Liu
 * @create: 2021-05-11 20:06
 **/
@Data
@AllArgsConstructor
public class HighLightedNodeVo implements Serializable {
    public HighLightedNodeVo() {
    }

    public HighLightedNodeVo(List<String> highLightedFlows, List<String> activeActivityIds) {
        this.highLightedFlows = highLightedFlows;
        this.activeActivityIds = activeActivityIds;
    }

    public HighLightedNodeVo(List<String> highLightedFlows, List<String> activeActivityIds, String modelXml, String modelName) {
        this.highLightedFlows = highLightedFlows;
        this.activeActivityIds = activeActivityIds;
        this.modelXml = modelXml;
        this.modelName = modelName;
    }

    //高亮线id集合
    private List<String> highLightedFlows;
    //当前节点高亮节点id集合
    private List<String> activeActivityIds;
    /**
     * 已经完成的历史节点集合
     */
    private List<String> hisActiveActivityIds;
    /**
     * 未执行的节点id列表
     */
    private List<String> nullActiveActivityIds;
    //model的xml文件
    private String modelXml;
    //model的名称
    private String modelName;
}
