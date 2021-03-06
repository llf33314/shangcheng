package com.gt.mall.dao.basic;

import com.baomidou.mybatisplus.mapper.BaseMapper;
import com.gt.mall.entity.basic.MallTakeTheirTime;

import java.util.List;

/**
 * <p>
 * 自提点接待时间表 Mapper 接口
 * </p>
 *
 * @author yangqian
 * @since 2017-07-20
 */
public interface MallTakeTheirTimeDAO extends BaseMapper<MallTakeTheirTime> {

    /**
     * 通过自提点id
     *
     * @param takeId：自提id
     * @return 自提点时间列表
     */
    List<MallTakeTheirTime> selectByTakeId(Integer takeId);

}