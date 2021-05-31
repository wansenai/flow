package com.dragon.flow.vo.org;

import com.dragon.flow.model.org.JobGrade;
import com.dragon.flow.model.org.JobGradeType;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

/**
 * @program: flow
 * @description: 批量保存职级
 * @author: Bruce.Liu
 * @create: 2021-04-28 23:22
 **/
@Data
public class BatchJobGradeVo implements Serializable {

    private JobGradeType jobGradeType;
    private List<JobGrade> jobGrades;
}
