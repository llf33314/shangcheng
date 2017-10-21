package com.gt.mall.service.web.product.impl;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.gt.mall.base.BaseServiceImpl;
import com.gt.mall.bean.Member;
import com.gt.mall.dao.order.MallOrderDAO;
import com.gt.mall.dao.product.MallProductDAO;
import com.gt.mall.entity.auction.MallAuction;
import com.gt.mall.entity.basic.MallImageAssociative;
import com.gt.mall.entity.basic.MallPaySet;
import com.gt.mall.entity.groupbuy.MallGroupBuyPrice;
import com.gt.mall.entity.pifa.MallPifaPrice;
import com.gt.mall.entity.presale.MallPresaleTime;
import com.gt.mall.entity.product.MallProduct;
import com.gt.mall.entity.product.MallProductDetail;
import com.gt.mall.entity.product.MallProductInventory;
import com.gt.mall.entity.product.MallProductSpecifica;
import com.gt.mall.entity.seckill.MallSeckillPrice;
import com.gt.mall.entity.store.MallStore;
import com.gt.mall.enums.ResponseEnums;
import com.gt.mall.exception.BusinessException;
import com.gt.mall.param.phone.PhoneProductDetailDTO;
import com.gt.mall.param.phone.PhoneSpecificaDTO;
import com.gt.mall.result.phone.product.PhoneProductDetailResult;
import com.gt.mall.service.inter.user.BusUserService;
import com.gt.mall.service.web.auction.MallAuctionService;
import com.gt.mall.service.web.basic.MallCollectService;
import com.gt.mall.service.web.basic.MallImageAssociativeService;
import com.gt.mall.service.web.basic.MallPaySetService;
import com.gt.mall.service.web.freight.MallFreightService;
import com.gt.mall.service.web.groupbuy.MallGroupBuyPriceService;
import com.gt.mall.service.web.groupbuy.MallGroupBuyService;
import com.gt.mall.service.web.pifa.MallPifaPriceService;
import com.gt.mall.service.web.pifa.MallPifaService;
import com.gt.mall.service.web.presale.MallPresaleService;
import com.gt.mall.service.web.presale.MallPresaleTimeService;
import com.gt.mall.service.web.product.*;
import com.gt.mall.service.web.seckill.MallSeckillPriceService;
import com.gt.mall.service.web.seckill.MallSeckillService;
import com.gt.mall.service.web.seller.MallSellerMallsetService;
import com.gt.mall.service.web.seller.MallSellerService;
import com.gt.mall.service.web.store.MallStoreService;
import com.gt.mall.utils.CommonUtil;
import com.gt.mall.utils.MallJxcHttpClientUtil;
import com.gt.mall.utils.ProductUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * <p>
 * 新商品 服务实现类
 * </p>
 *
 * @author yangqian
 * @since 2017-07-20
 */
@Service
public class MallProductNewServiceImpl extends BaseServiceImpl< MallProductDAO,MallProduct > implements MallProductNewService {

    private static Logger logger = LoggerFactory.getLogger( MallProductNewServiceImpl.class );

    @Autowired
    private MallProductDAO              mallProductDAO;//商品dao
    @Autowired
    private MallProductInventoryService mallProductInventoryService;//商品库存业务处理类
    @Autowired
    private MallProductSpecificaService mallProductSpecificaService;//商品规格业务处理类
    @Autowired
    private MallProductDetailService    mallProductDetailService;//商品详情业务处理
    @Autowired
    private MallImageAssociativeService mallImageAssociativeService;//图片业务处理类
    @Autowired
    private MallStoreService            mallStoreService;//店铺业务处理类
    @Autowired
    private MallCollectService          mallCollectService;//收藏业务处理类
    @Autowired
    private MallProductService          mallProductService;//商品业务处理类
    @Autowired
    private MallFreightService          mallFreightService;//运费业务处理类
    @Autowired
    private MallGroupBuyService         mallGroupBuyService;//团购业务处理类
    @Autowired
    private MallSeckillService          mallSeckillService;//秒杀业务处理类
    @Autowired
    private MallPresaleService          mallPresaleService;//预售业务处理类
    @Autowired
    private MallPifaService             mallPifaService;//批发业务处理类
    @Autowired
    private MallAuctionService          mallAuctionService;//拍卖业务处理类
    @Autowired
    private MallGroupBuyPriceService    mallGroupBuyPriceService;//团购价业务处理类
    @Autowired
    private MallSeckillPriceService     mallSeckillPriceService;//秒杀价业务处理类
    @Autowired
    private MallPresaleTimeService      mallPresaleTimeService;//预售价业务处理类
    @Autowired
    private MallPifaPriceService        mallPifaPriceService;//批发价业务处理类
    @Autowired
    private MallSellerService           mallSellerService;//销售员业务处理类
    @Autowired
    private MallSellerMallsetService    mallSellerMallsetService;//销售员设置处理类
    @Autowired
    private BusUserService              busUserService;//商家业务处理类
    @Autowired
    private MallOrderDAO                mallOrderDAO;//订单DAO
    @Autowired
    private MallPaySetService           mallPaySetService;//商城设置业务处类类

    @Override
    public PhoneProductDetailResult selectProductDetail( PhoneProductDetailDTO params, Member member, MallPaySet mallPaySet ) {
	PhoneProductDetailResult result = new PhoneProductDetailResult();
	DecimalFormat df = new DecimalFormat( "0.00" );

	//查询商品信息
	MallProduct product = mallProductDAO.selectById( params.getProductId() );
	if ( CommonUtil.isEmpty( product ) ) {
	    throw new BusinessException( ResponseEnums.NULL_ERROR.getCode(), "该商品不存在" );
	}
	if ( product.getIsDelete() != 0 ) {

	}
	//查询商品详情
	MallProductDetail detail = mallProductDetailService.selectByProductId( params.getProductId() );
	Map< String,Object > imageParams = new HashMap<>();
	imageParams.put( "assId", params.getProductId() );
	imageParams.put( "assType", 1 );
	//查询商品图片
	List< MallImageAssociative > imageList = mallImageAssociativeService.selectByAssId( imageParams );

	//查询店铺信息
	Map< String,Object > storeMap = mallStoreService.findShopByStoreId( product.getShopId() );

	//查询商品是否已收藏
	boolean isCollect = mallCollectService.getProductCollect( params.getProductId(), member.getId() );

	//获取粉丝的折扣
	double discount = mallProductService.getMemberDiscount( product.getIsMemberDiscount().toString(), member );

	double productPrice = CommonUtil.toDouble( product.getProPrice() );//商品价格
	double productCostPrice = CommonUtil.toDouble( product.getProCostPrice() );//商品原价

	if ( product.getIsSpecifica().toString().equals( "1" ) ) {//商品有规格
	    //查询规格价
	    MallProductInventory inven = mallProductInventoryService.selectByIsDefault( params.getProductId() );
	    if ( inven != null ) {
		result.setInvId( inven.getId() );
		productPrice = CommonUtil.toDouble( inven.getInvPrice() );
	    } else {
		product.setIsSpecifica( 0 );
	    }
	}
	double activityPrice = 0;//活动价 避免会员价用活动价来算
	int isShowAddShop = 1;//是否显示“加入购物车按钮” 1显示
	if ( params.getType() == 1 ) {//查询团购商品
	    result = mallGroupBuyService.getGroupProductDetail( product.getId(), product.getShopId(), params.getActivityId(), result, member );
	} else if ( params.getType() == 3 ) {//查询秒杀商品
	    isShowAddShop = 0;
	    result = mallSeckillService.getSeckillProductDetail( product.getId(), product.getShopId(), params.getActivityId(), result );
	} else if ( params.getType() == 4 ) {//查询拍卖商品
	    isShowAddShop = 0;
	    result = mallAuctionService.getAuctionProductDetail( product.getId(), product.getShopId(), params.getActivityId(), result, member, mallPaySet );
	} else if ( params.getType() == 5 ) {//查询粉币商品
	    if ( product.getIsFenbiChangePro().toString().equals( "1" ) ) {
		activityPrice = CommonUtil.toDouble( product.getChangeFenbi() );
		isShowAddShop = 0;
		result.setUnit( "粉币" );
	    }
	} else if ( params.getType() == 6 ) {//查询预售商品
	    isShowAddShop = 0;
	    result.setProductPrice( activityPrice );
	    result = mallPresaleService.getPresaleProductDetail( product.getId(), product.getShopId(), params.getActivityId(), result, member, mallPaySet );
	} else if ( params.getType() == 7 ) {//查询批发商品
	    result = mallPifaService.getPifaProductDetail( product.getId(), product.getShopId(), params.getActivityId(), result, member, mallPaySet );
	}
	if ( params.getType() > 0 && params.getType() != 5 && result.getActivityId() == 0 ) {
	    result.setType( 0 );
	}
	if ( result.getInvId() > 0 && params.getType() > 0 ) {//商品有规格
	    //查询规格价
	    MallProductInventory inven = mallProductInventoryService.selectDefaultInvenNotNullStock( product.getId(), result.getInvId(), result );
	    if ( inven != null ) {
		result.setInvId( inven.getId() );
		activityPrice = CommonUtil.toDouble( inven.getInvPrice() );
	    } else {
		product.setIsSpecifica( 0 );
	    }
	}

	if ( discount > 0 && discount < 1 && ( CommonUtil.isEmpty( params.getType() ) || params.getType() == 0 ) ) {//用商品价算会员价
	    double hyPrice = CommonUtil.toDouble( df.format( productPrice * discount ) );
	    result.setHyPrice( hyPrice );//会员价
	}
	if ( activityPrice > 0 ) {
	    productPrice = activityPrice;
	}
	result.setProductName( product.getProName() );//商品名称
	result.setProductLabel( product.getProLabel() );//商品标签
	if ( params.getType() == 0 ) {
	    result.setProductPrice( productPrice );//商品价格
	    if ( productPrice < productCostPrice && productCostPrice > 0 ) {
		result.setProductCostPrice( productCostPrice );//商品原价
	    }
	} else {
	    result.setProductCostPrice( productPrice );//商品原价
	}
	//获取销售员信息和销售商品的佣金
	if ( params.getBusId() > 0 ) {
	    result = mallSellerService.getSeller( result, params.getSaleMemberId(), params.getBusId(), params.getProductId(), params.getView(), member );
	}

	if ( params.getType() != 3 ) {
	    result.setProductStockTotal( product.getProStockTotal() );//商品库存
	}
	result.setProductSaleTotal( product.getProSaleTotal() );//商品销量
	result.setIsSpecifica( product.getIsSpecifica() );//是否有规格  1 有规格 0 无规格
	if ( CommonUtil.isNotEmpty( product.getProRestrictionNum() ) && product.getProRestrictionNum() > 0 && result.getMaxBuyNum() == 0 ) {
	    result.setMaxBuyNum( product.getProRestrictionNum() );//限购
	}

	if ( CommonUtil.isNotEmpty( detail ) ) {
	    result.setProductDetail( detail.getProductDetail() );//商品详情
	    result.setProductMessage( detail.getProductMessage() );//商品商品信息栏
	}

	result.setImageList( imageList );//商品图片集合

	String provinces = "";//省份id
	double longitude = params.getLongitude();
	double langitude = params.getLatitude();
	if ( CommonUtil.isNotEmpty( storeMap ) ) {
	    result.setShopName( storeMap.get( "stoName" ).toString() );//店铺名称
	    result.setShopImageUrl( storeMap.get( "stoPicture" ).toString() );//店铺图片
	    result.setShopAddress( storeMap.get( "adder" ).toString() );//店铺地址
	    longitude = CommonUtil.toDouble( storeMap.get( "stoLongitude" ) );
	    langitude = CommonUtil.toDouble( storeMap.get( "stoLatitude" ) );
	    if ( CommonUtil.isNotEmpty( storeMap.get( "memProvince" ) ) ) {
		provinces = storeMap.get( "memProvince" ).toString();
	    }
	}
	if ( isCollect ) {
	    result.setIsCollect( 1 );//是否已收藏
	}
	double raill = 0;
	if ( langitude > 0 && longitude > 0 && params.getLatitude() > 0 && params.getLongitude() > 0 ) {
	    raill = CommonUtil.getDistance( params.getLongitude(), params.getLatitude(), longitude, langitude );
	    raill = raill / 1000;
	}

	//计算运费
	JSONArray productArr = new JSONArray();
	JSONObject obj = new JSONObject();
	obj.put( "shop_id", product.getShopId() );
	obj.put( "price_total", productPrice );
	obj.put( "proNum", 1 );
	productArr.add( obj );
	Map< String,Object > freightMap = mallFreightService.getFreightByParams( params.getIp(), provinces, params.getToShop(), productArr, raill );
	if ( CommonUtil.isNotEmpty( freightMap ) ) {
	    if ( CommonUtil.isNotEmpty( freightMap.get( product.getShopId().toString() ) ) ) {
		result.setFreightMoney( CommonUtil.toDouble( freightMap.get( product.getShopId().toString() ) ) );
	    }
	}
	result.setIsShowAddShopButton( isShowAddShop );//是否显示加入购物车的按钮 1显示
	return result;
    }

    @Override
    public List< Map< String,Object > > getProductSpecificaPrice( PhoneSpecificaDTO params, Member member ) {
	MallProduct product = mallProductDAO.selectById( params.getProductId() );//查询商品信息
	List< Map< String,Object > > guigePrice = mallProductInventoryService.guigePrice( params.getProductId() );//查询商品规格价
	List< MallGroupBuyPrice > groupBuyPricesList = null;//团购价
	List< MallSeckillPrice > priceList = null;//秒杀价
	List< MallPresaleTime > timeList = null;//预售价
	List< MallPifaPrice > pifaPriceList = null;//批发价
	MallAuction auction = null;
	if ( params.getActivityId() > 0 ) {
	    if ( params.getType() == 1 ) {//获取团购价
		groupBuyPricesList = mallGroupBuyPriceService.selectPriceByGroupId( params.getActivityId() );
	    } else if ( params.getType() == 3 ) {//秒杀价
		priceList = mallSeckillPriceService.selectPriceByGroupId( params.getActivityId() );
	    } else if ( params.getType() == 4 ) {//拍卖价
		auction = mallAuctionService.getAuctionByProId( params.getProductId(), product.getShopId(), params.getActivityId() );
	    } else if ( params.getType() == 6 ) {//预售价格
		timeList = mallPresaleTimeService.getPresaleTimeByPreId( params.getActivityId() );
	    } else if ( params.getType() == 7 ) {//批发价
		pifaPriceList = mallPifaPriceService.selectPriceByGroupId( params.getActivityId() );
	    }
	}

	DecimalFormat df = new DecimalFormat( "0.00" );
	if ( guigePrice != null && guigePrice.size() > 0 && ( params.getType() > 0 || ( CommonUtil.isNotEmpty( params.getIsShowCommission() )
			&& params.getIsShowCommission() == 1 ) ) ) {
	    for ( Map< String,Object > priceMap : guigePrice ) {
		double invPrice = CommonUtil.toDouble( priceMap.get( "inv_price" ) );
		double oldPrice = CommonUtil.toDouble( product.getProPrice() );
		int isJoin = 0;
		double hyPrice = 0;
		if ( params.getType() != 5 && params.getType() != 6 ) {
		    double discount = mallProductService.getMemberDiscount( product.getIsMemberDiscount().toString(), member );
		    if ( discount > 0 && discount < 1 ) {
			hyPrice = invPrice * discount;
		    }
		}
		if ( params.getType() > 0 ) {
		    if ( params.getType() == 1 && groupBuyPricesList != null && groupBuyPricesList.size() > 0 ) {//团购
			for ( MallGroupBuyPrice buyPrice : groupBuyPricesList ) {
			    if ( buyPrice.getInvenId().toString().equals( priceMap.get( "id" ).toString() ) ) {
				oldPrice = invPrice;
				invPrice = CommonUtil.toDouble( buyPrice.getGroupPrice() );
				groupBuyPricesList.remove( buyPrice );
				isJoin = buyPrice.getIsJoinGroup();
				break;
			    }
			}
		    } else if ( params.getType() == 3 && priceList != null && priceList.size() > 0 ) {//秒杀
			for ( MallSeckillPrice seckillPrice : priceList ) {
			    if ( seckillPrice.getInvenId().toString().equals( priceMap.get( "id" ).toString() ) ) {
				oldPrice = invPrice;
				invPrice = CommonUtil.toDouble( seckillPrice.getSeckillPrice() );
				priceList.remove( seckillPrice );
				isJoin = seckillPrice.getIsJoinGroup();
				break;
			    }
			}
		    } else if ( params.getType() == 4 && CommonUtil.isNotEmpty( auction ) ) {//拍卖
			oldPrice = invPrice;
			invPrice = auction.getNowPrice();
		    } else if ( params.getType() == 5 ) {//粉币
			if ( product.getIsFenbiChangePro().toString().equals( "1" ) ) {
			    invPrice = CommonUtil.toDouble( product.getChangeFenbi() );
			}
		    } else if ( params.getType() == 6 && timeList != null && timeList.size() > 0 ) {//预售
			oldPrice = invPrice;
			invPrice = mallPresaleService.getPresalePrice( invPrice, timeList );
		    } else if ( params.getType() == 7 && pifaPriceList != null && pifaPriceList.size() > 0 ) {//批发
			for ( MallPifaPrice pifaPrice : pifaPriceList ) {
			    if ( pifaPrice.getInvenId().toString().equals( priceMap.get( "id" ).toString() ) ) {
				oldPrice = invPrice;
				invPrice = CommonUtil.toDouble( pifaPrice.getSeckillPrice() );
				pifaPriceList.remove( pifaPrice );
				isJoin = pifaPrice.getIsJoinGroup();
				break;
			    }
			}
		    }
		    if ( params.getType() == 1 || params.getType() == 3 || params.getType() == 7 ) {
			priceMap.put( "isJoin", isJoin );
		    }
		}
		priceMap.put( "inv_price", df.format( invPrice ) );
		if ( hyPrice > 0 && ( CommonUtil.isEmpty( params.getType() ) || params.getType() == 0 ) ) {
		    priceMap.put( "hyPrice", df.format( hyPrice ) );
		}
		if ( oldPrice > 0 ) {
		    priceMap.put( "oldPrice", oldPrice );
		}
		if ( CommonUtil.isNotEmpty( params.getIsShowCommission() ) && params.getIsShowCommission() == 1 ) {
		    double commissionMoney = mallSellerMallsetService.getCommissionMoney( params.getProductId(), invPrice );
		    if ( commissionMoney > 0 ) {
			priceMap.put( "commissionMoney", df.format( commissionMoney ) );
		    }
		}

	    }
	}
	return guigePrice;
    }

    @Override
    public Map< String,Object > calculateInventory( int proId, Object proSpecificas, int proNum, int activityType, int activityId, int memberId ) {
	Map< String,Object > result = new HashMap<>();
	MallProduct pro = mallProductDAO.selectById( proId );
	//判断商品是否被删除或未上架、未审核
	String errorMsg = ProductUtil.isProductError( pro );
	if ( CommonUtil.isNotEmpty( errorMsg ) ) {
	    throw new BusinessException( ResponseEnums.PRODUCT_NULL_ERROR.getCode(), errorMsg );
	}
	Integer isSpe = pro.getIsSpecifica();
	int userPId = busUserService.getMainBusId( pro.getUserId() );//通过用户名查询主账号id
	long isJxc = busUserService.getIsErpCount( 8, userPId );//判断商家是否有进销存 0没有 1有

	boolean flag = true;
	int erpInvId = 0;
	int invId = 0;
	StringBuilder specificaValue = new StringBuilder();
	if ( isSpe == 1 ) {//是否有规格（0没有 1有）
	    Map< String,Object > invParams = new HashMap<>();
	    invParams.put( "proId", proId );
	    String[] specifica = ( proSpecificas.toString() ).split( "," );
	    StringBuilder ids = new StringBuilder( "0" );
	    for ( String valueIds : specifica ) {
		if ( CommonUtil.isNotEmpty( valueIds ) ) {
		    invParams.put( "specificaValueId", valueIds );
		    //		    int specIds = mOrderMapper.selectSpeBySpeValueId(invParams);
		    Map< String,Object > specificaParams = new HashMap<>();
		    specificaParams.put( "valueId", valueIds );
		    specificaParams.put( "proId", proId );
		    MallProductSpecifica productSpecifica = mallProductSpecificaService.selectByNameValueId( specificaParams );
		    if ( CommonUtil.isNotEmpty( productSpecifica ) && CommonUtil.isNotEmpty( productSpecifica.getId() ) ) {
			ids.append( "," ).append( productSpecifica.getId() );
			specificaValue.append( productSpecifica.getSpecificaValue() ).append( "," );
		    }
		}
	    }
	    if ( CommonUtil.isNotEmpty( ids.toString() ) ) {
		if ( !ids.toString().equals( "0" ) ) {
		    invParams.put( "specificaIds", ids.substring( 2, ids.length() ) );
		    MallProductInventory proInv = mallProductInventoryService.selectInvNumByProId( invParams );
		    if ( null != proInv && CommonUtil.isNotEmpty( proInv ) ) {
			invId = proInv.getId();
			//判断商家是否有进销存
			if ( isJxc == 0 || !pro.getProTypeId().toString().equals( "0" ) ) {//没有进销存才能判断商城的库存
			    if ( proInv.getInvNum() < proNum ) {
				throw new BusinessException( ResponseEnums.STOCK_NULL_ERROR.getCode(), ResponseEnums.STOCK_NULL_ERROR.getDesc() );
			    }
			} else {
			    erpInvId = proInv.getErpInvId();
			}
		    } else {
			throw new BusinessException( ResponseEnums.STOCK_NULL_ERROR.getCode(), ResponseEnums.STOCK_NULL_ERROR.getDesc() );
		    }
		} else {
		    isSpe = 0;
		}
	    } else {
		isSpe = 0;
	    }
	} else {
	    List< MallProductInventory > inventoryList = mallProductInventoryService.selectInvenByProductId( proId );
	    if ( inventoryList != null && inventoryList.size() > 0 ) {
		throw new BusinessException( ResponseEnums.INV_NULL_ERROR.getCode(), ResponseEnums.INV_NULL_ERROR.getDesc() );
	    }
	}
	if ( null == isSpe || CommonUtil.toString( isSpe ).equals( "" ) || isSpe == 0 ) {
	    if ( erpInvId == 0 && isJxc == 1 && pro.getProTypeId().toString().equals( "0" ) ) {
		erpInvId = pro.getErpInvId();
	    }
	    if ( pro.getProStockTotal() < proNum ) {
		throw new BusinessException( ResponseEnums.STOCK_NULL_ERROR.getCode(), ResponseEnums.STOCK_NULL_ERROR.getDesc() );
	    }
	}
	//商家开通了进销存，判断进销存的库存
	if ( isJxc == 1 && erpInvId > 0 && flag ) {
	    Map< String,Object > erpMap = new HashMap<>();
	    MallStore store = mallStoreService.selectById( pro.getShopId() );
	    erpMap.put( "shopId", store.getWxShopId() );
	    erpMap.put( "attrsId", erpInvId );
	    Object erpInv = MallJxcHttpClientUtil.getInvNumByInvenId( erpMap, true );
	    if ( CommonUtil.isNotEmpty( erpInv ) ) {
		double proStock = CommonUtil.toDouble( erpInv );
		if ( proStock < proNum ) {
		    throw new BusinessException( ResponseEnums.STOCK_NULL_ERROR.getCode(), ResponseEnums.STOCK_NULL_ERROR.getDesc() );
		}
	    }
	}
	int buyNums = -1;
	//判断商品限购
	if ( CommonUtil.isNotEmpty( pro.getProRestrictionNum() ) && flag && memberId > 0 ) {
	    if ( pro.getProRestrictionNum() > 0 ) {
		Map< String,Object > params = new HashMap<>();
		params.put( "productId", pro.getId() );
		params.put( "shopId", pro.getShopId() );
		params.put( "buyerUserId", memberId );
		//查询商品已买数量
		buyNums = mallOrderDAO.selectMemberBuyProNum( params );
		if ( buyNums + proNum > pro.getProRestrictionNum() ) {
		    throw new BusinessException( ResponseEnums.MAX_BUY_ERROR.getCode(), "每人限购" + pro.getProRestrictionNum() + "件" + ResponseEnums.MAX_BUY_ERROR.getDesc() );
		}
	    }
	}
	//判断活动
	if ( activityType > 0 ) {
	    MallPaySet mallPaySet = mallPaySetService.selectByUserId( pro.getUserId() );
	    if ( activityType == 1 && activityId > 0 ) {//团购
		mallGroupBuyService.groupProductCanBuy( activityId, invId, proNum, memberId, buyNums );
	    } else if ( activityType == 3 && activityId > 0 ) {//秒杀
		mallSeckillService.seckillProductCanBuy( activityId, invId, proNum, memberId, buyNums );
	    } else if ( activityType == 4 && activityId > 0 ) {//拍卖
		mallAuctionService.auctionProductCanBuy( activityId, invId, proNum, memberId, buyNums );
	    } else if ( activityType == 6 && activityId > 0 ) {//预售
		mallPresaleService.presaleProductCanBuy( activityId, invId, proNum, memberId, buyNums );
	    } else if ( activityType == 7 && activityId > 0 ) {//批发
		mallPifaService.pifaProductCanBuy( activityId, invId, proNum, memberId, buyNums, mallPaySet );
	    }
	}
	if ( CommonUtil.isNotEmpty( specificaValue ) && specificaValue.length() > 0 ) {
	    result.put( "specificaValue", specificaValue.toString().substring( 0, specificaValue.length() - 1 ) );
	}
	result.put( "result", flag );
	return result;
    }

}