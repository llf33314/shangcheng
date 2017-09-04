package com.gt.mall.service.web.product;

import com.gt.mall.base.BaseService;
import com.gt.mall.bean.Member;
import com.gt.mall.bean.WxPublicUsers;
import com.gt.mall.entity.product.MallShopCart;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

/**
 * <p>
 * 购物车 服务类
 * </p>
 *
 * @author yangqian
 * @since 2017-07-20
 */
public interface MallShopCartService extends BaseService< MallShopCart > {

    /**
     * 查询购物车的商品信息（立即结算进入提交订单页面所需的）
     */
    List< Map< String,Object > > getProductByShopCart( String shopcards, WxPublicUsers pbUser, Member member, int userId );

    /**
     * 查询商品信息（立即购买进入提交订单页面所需的）
     */
    List< Map< String,Object > > getProductByIds( Map< String,Object > maps, WxPublicUsers pbUser, Member member, int userId ) throws Exception;

    /**
     * 获取进入提交订单的参数
     *
     * @param request       request
     * @param loginCity     所在省份
     * @param userid        商家id
     * @param list          订单信息
     * @param mem_longitude 经度
     * @param mem_latitude  纬度
     */
    void getOrdersParams( HttpServletRequest request, String loginCity, int userid, List< Map< String,Object > > list, double mem_longitude, double mem_latitude ,Member member);
}
