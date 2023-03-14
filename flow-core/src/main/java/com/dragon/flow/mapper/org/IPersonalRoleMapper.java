package com.dragon.flow.mapper.org;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.dragon.flow.model.org.PersonalRole;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-12
 */
@Repository
public interface IPersonalRoleMapper extends BaseMapper<PersonalRole> {

    List<PersonalRole> getAllByQuery(PersonalRole personalRole) ;

}
