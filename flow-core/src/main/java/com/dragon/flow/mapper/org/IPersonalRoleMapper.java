package com.dragon.flow.mapper.org;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.dragon.flow.model.org.Personal;
import com.dragon.flow.model.org.PersonalRole;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-12
 */
public interface IPersonalRoleMapper extends BaseMapper<PersonalRole> {

    List<PersonalRole> getAllByQuery(PersonalRole personalRole) ;

}
