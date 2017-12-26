package com.gt.mall.service.inter.core;

/**
 * 增值服务接口调用
 * User : yangqian
 * Date : 2017/12/23 0023
 * Time : 16:51
 */
public interface CoreService {

    /**
     * 增值服务的是否过期
     *
     * @param busId      商家id
     * @param modelStyle 模块属性
     *
     * @return true 没过期  过期会抛异常
     */
    Boolean payModel( int busId, String modelStyle );
}
