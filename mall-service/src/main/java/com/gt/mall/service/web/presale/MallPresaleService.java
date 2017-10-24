package com.gt.mall.service.web.presale;

import com.gt.mall.base.BaseService;
import com.gt.mall.bean.BusUser;
import com.gt.mall.bean.Member;
import com.gt.mall.entity.basic.MallPaySet;
import com.gt.mall.entity.order.MallOrder;
import com.gt.mall.entity.order.MallOrderDetail;
import com.gt.mall.entity.presale.MallPresale;
import com.gt.mall.entity.presale.MallPresaleGive;
import com.gt.mall.entity.presale.MallPresaleTime;
import com.gt.mall.param.phone.PhoneSearchProductDTO;
import com.gt.mall.result.phone.product.PhoneProductDetailResult;
import com.gt.mall.utils.PageUtil;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 商品预售表 服务类
 * </p>
 *
 * @author yangqian
 * @since 2017-07-20
 */
public interface MallPresaleService extends BaseService< MallPresale > {

    /**
     * 通过店铺id来查询预售
     */
    PageUtil selectPresaleByShopId( Map< String,Object > param, int userId, List< Map< String,Object > > shoplist );

    /**
     * 通过预售id查询预售信息
     */
    Map< String,Object > selectPresaleById( Integer id );

    /**
     * 编辑预售
     */
    int editPresale( Map< String,Object > params, int userId );

    /**
     * 编辑预售
     */
    int newEditPresale( Map< String,Object > params, int userId );

    /**
     * 删除预售
     */
    boolean deletePresale( MallPresale presale );

    /**
     * 查询所有的预售
     */
    List< Map< String,Object > > getPresaleAll( Member member, Map< String,Object > maps );

    /**
     * 根据商品id查询预售信息和预售价格
     */
    MallPresale getPresaleByProId( Integer proId, Integer shopId, Integer presaleId );

    /**
     * 获取商品的预售信息
     *
     * @param proId  商品id
     * @param shopId 店铺id
     * @param result 返回商品详细页面的结果
     * @param member 会员
     *
     * @return 预售信息
     */
    PhoneProductDetailResult getPresaleProductDetail( int proId, int shopId, int activityId, PhoneProductDetailResult result, Member member, MallPaySet mallPaySet );

    /**
     * 获取预售价格
     *
     * @param proPrice 当前商品价格
     *
     * @return 预售价格
     */
    double getPresalePrice( double proPrice, List< MallPresaleTime > timeList );

    /**
     * 查询用户参加预售的数量
     */
    int selectCountByBuyId( Map< String,Object > params );

    /**
     * 根据店铺id查询预售信息
     */
    List< Map< String,Object > > selectgbPresaleByShopId( Map< String,Object > maps );

    /**
     * 判断是否超过了限购
     */
    Map< String,Object > isMaxNum( Map< String,Object > map, String memberId, MallOrderDetail mallOrderDetail );

    /**
     * 获取送礼设置的信息
     */
    List< MallPresaleGive > selectGiveByUserId( BusUser user );

    /**
     * 获取送礼设置列表
     */
    PageUtil selectPageGiveByUserId( Map< String,Object > params);

    /**
     * 编辑预售设置
     */
    int editPresaleSet( Map< String,Object > params, int userId );

    /**
     * 编辑预售设置(全部)
     */
    int newEditPresaleSet( Map< String,Object > params, int userId );
    /**
     * 编辑预售设置(单个)
     */
    int newEditOnePresaleSet( Map< String,Object > params, int userId );

    /**
     * 发货实体物品
     */
    void deliveryRank( MallOrder order );

    /**
     * 初始化redis
     */
    void loadPresaleByJedis( MallPresale pre );

    /**
     * 预售商品开售提醒
     */
    void presaleStartRemain();

    /**
     * 扫描已经结束的预售
     */
    void presaleProEnd();

    /**
     * 扣库存
     */
    void diffInvNum( MallOrder order );

    /**
     * 预售支付成功后的回调
     */
    void paySucessPresale( MallOrder order );

    /**
     * 搜索预售商品信息
     */
    PageUtil searchPresaleAll( PhoneSearchProductDTO searchProductDTO, Member member );

    /**
     * 判断预售商品是否能购买
     * 1 判断预售商品是否正在进行
     * 2 判断购买的规格是否允许参团
     * 3 判断限购
     *
     * @param presaleId    预售id
     * @param invId        库存id
     * @param productNum   商品数量
     * @param memberId     粉丝id
     * @param memberBuyNum 粉丝已购买商品数量
     */
    boolean presaleProductCanBuy( int presaleId, int invId, int productNum, int memberId, int memberBuyNum );
}
