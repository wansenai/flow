package com.dragon.flow.vo.org;

import com.dragon.flow.model.org.PositionInfo;
import com.dragon.flow.model.org.PositionSeq;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

/**
 * @program: flow
 * @description: 批量保存岗位
 * @author: Bruce.Liu
 * @create: 2021-04-29 09:06
 **/
@Data
public class BatchPositionInfoVo implements Serializable {

    private PositionSeq positionSeq;
    private List<PositionInfo> positionInfos;
}
