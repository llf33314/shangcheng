package com.gt.mall.controller.api.basic;

import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.gt.mall.base.BaseController;
import com.gt.api.bean.session.BusUser;
import com.gt.mall.dto.ServerResponse;
import com.gt.mall.entity.basic.MallCountIncome;
import com.gt.mall.enums.ResponseEnums;
import com.gt.mall.service.web.basic.MallCountIncomeService;
import com.gt.mall.service.web.order.MallOrderService;
import com.gt.mall.service.web.product.MallProductService;
import com.gt.mall.service.web.store.MallStoreService;
import com.gt.mall.utils.CommonUtil;
import com.gt.mall.utils.DateTimeKit;
import com.gt.mall.utils.MallSessionUtils;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * <p>
 * 每日收入统计表 前端控制器
 * </p>
 *
 * @author yangqian
 * @since 2017-10-16
 */
@Api( value = "mallCountIncome", description = "收入统计" )
@Controller
@RequestMapping( "/mallCountIncome/E9lM9uM4ct" )
public class MallCountIncomeController extends BaseController {

    @Autowired
    private MallCountIncomeService mallCountIncomeService;
    @Autowired
    private MallStoreService       mallStoreService;
    @Autowired
    private MallProductService     mallProductService;
    @Autowired
    private MallOrderService       mallOrderService;

    @ApiOperation( value = "生成交易记录数据", notes = "生成交易记录数据")
    @ResponseBody
    @RequestMapping( value = "/test", method = RequestMethod.POST )
    public ServerResponse test( HttpServletRequest request, HttpServletResponse response ) {
	Map< String,Object > result = new HashMap<>();
	try {
	    BusUser user = MallSessionUtils.getLoginUser( request );
	    List< Map< String,Object > > shoplist = mallStoreService.findAllStoByUser( user, request );// 查询登陆人拥有的店铺
	    Calendar end = Calendar.getInstance();//定义日期实例
	    Calendar start = Calendar.getInstance();//定义日期实例
	    Date d1 = new SimpleDateFormat( "yyyy-MM-dd" ).parse( "2017-12-22" );//定义起始日期
	    Date d2 = new SimpleDateFormat( "yyyy-MM-dd" ).parse( "2017-12-21" );//定义起始日期
	    end.setTime( d1 );
	    start.setTime( d2 );

	    while ( start.before( end ) ) {
		SimpleDateFormat sdf = new SimpleDateFormat( "yyyy-MM-dd" );
		String str = sdf.format( start.getTime() );
		System.out.println( str );//输出日期结果
		for ( Map< String,Object > map : shoplist ) {
		    MallCountIncome countIncome = new MallCountIncome();
		    countIncome.setBusId( user.getId() );
		    countIncome.setCountDate( DateTimeKit.parseDate( str ) );
		    countIncome.setIncomePrice( new BigDecimal( ( Math.random() * 1000 ) ) );
		    countIncome.setTradePrice( new BigDecimal( ( Math.random() * 1000 ) ) );
		    countIncome.setShopId( CommonUtil.toInteger( map.get( "id" ) ) );
		    countIncome.setTurnover( new BigDecimal( ( Math.random() * 1000 ) ) );
		    countIncome.setRefundPrice( new BigDecimal( ( Math.random() * countIncome.getTradePrice().doubleValue() ) ) );

		    mallCountIncomeService.insert( countIncome );
		}
		start.add( Calendar.DATE, 1 );//进行当前日期加1
	    }
	} catch ( Exception e ) {
	    logger.error( "生成交易记录数据异常：" + e.getMessage() );
	    e.printStackTrace();
	    return ServerResponse.createByErrorCodeMessage( ResponseEnums.ERROR.getCode(), "生成交易记录数据异常" );
	}
	return ServerResponse.createBySuccessCodeData( ResponseEnums.SUCCESS.getCode(), result, false );
    }

    /**
     * 获取交易记录的营业额统计
     */
    @ApiOperation( value = "获取交易记录的营业额统计", notes = "获取交易记录的营业额统计" )
    @ResponseBody
    @RequestMapping( value = "/getTurnoverCount", method = RequestMethod.POST )
    public ServerResponse getTurnoverCount( HttpServletRequest request, HttpServletResponse response ) {
	Map< String,Object > result = new HashMap<>();
	try {
	    BusUser user = MallSessionUtils.getLoginUser( request );
	    List< Map< String,Object > > shoplist = mallStoreService.findAllStoByUser( user, request );// 查询登陆人拥有的店铺

	    Calendar cal = Calendar.getInstance();
	    cal.add( Calendar.DATE, -1 );
	    String yesterday = new SimpleDateFormat( "yyyy-MM-dd " ).format( cal.getTime() );
	    cal.add( Calendar.DATE, -6 );
	    String sevenday = new SimpleDateFormat( "yyyy-MM-dd " ).format( cal.getTime() );
	    //昨天营业额
	    Map< String,Object > countParams = new HashMap<>();
	    countParams.put( "date", yesterday );
	    countParams.put( "type", 2 );
	    countParams.put( "shoplist", shoplist );
	    String yesterCount = mallCountIncomeService.getCountByTimes( countParams );
	    result.put( "yesterCount", yesterCount );//昨天营业额
	    //7日营业额（前7天-昨天）
	    countParams.remove( "date" );
	    countParams.put( "startDate", sevenday );
	    countParams.put( "endDate", yesterday );
	    String sevenCount = mallCountIncomeService.getCountByTimes( countParams );
	    result.put( "sevenCount", sevenCount );//7天营业额
	    //TODO 待结算金额  可用金额
	    result.put( "settlementCount", 0 );//待结算金额
	    result.put( "usableBalance", 0 );//可用余额
	} catch ( Exception e ) {
	    logger.error( "获取交易记录的营业额统计异常：" + e.getMessage() );
	    e.printStackTrace();
	    return ServerResponse.createByErrorCodeMessage( ResponseEnums.ERROR.getCode(), "获取交易记录的营业额统计异常" );
	}
	return ServerResponse.createBySuccessCodeData( ResponseEnums.SUCCESS.getCode(), result, false );
    }

    /**
     * 获取收入金额列表
     */
    @ApiOperation( value = "获取收入金额列表", notes = "获取收入金额列表" )
    @ResponseBody
    @ApiImplicitParams( { @ApiImplicitParam( name = "startDate", value = "开始时间", paramType = "query", required = false, dataType = "String" ),
		    @ApiImplicitParam( name = "endDate", value = "结束时间", paramType = "query", required = false, dataType = "String" ),
		    @ApiImplicitParam( name = "shopId", value = "店铺ID", paramType = "query", required = false, dataType = "int" ) } )
    @RequestMapping( value = "/getCountListByDate", method = RequestMethod.POST )
    public ServerResponse getCountListByDate( HttpServletRequest request, HttpServletResponse response, String startDate, String endDate, Integer shopId ) {
	Map< String,Object > result = new HashMap<>();
	try {
	    BusUser user = MallSessionUtils.getLoginUser( request );
	    List< Map< String,Object > > shoplist = mallStoreService.findAllStoByUser( user, request );// 查询登陆人拥有的店铺
	    List< Integer > shopIds = new ArrayList<>();
	    for ( Map map : shoplist ) {
		shopIds.add( CommonUtil.toInteger( map.get( "id" ) ) );
	    }
	    Map< String,Object > params = new HashMap<>();

	    params.put( "shopId", shopId );
	    if ( CommonUtil.isEmpty( shopId ) ) {
		params.put( "shoplist", shoplist );
	    }
	    if ( CommonUtil.isEmpty( startDate ) ) {
		startDate = DateTimeKit.format( DateTimeKit.addMonths( -1 ) );
		endDate = DateTimeKit.getDate();
	    }

	    params.put( "startDate", DateTimeKit.format(DateTimeKit.parse(startDate,"" )));
	    params.put( "endDate", DateTimeKit.format(DateTimeKit.parse(endDate ,"")));
	    List< Map< String,Object > > countList = mallCountIncomeService.getCountListByTimes( params );
	    //	    String[] date = new String[countList.size()];
	    String[] data = new String[countList.size()];
	    int i = 0;
	    for ( Map map : countList ) {
		int day = DateTimeKit.getDay( DateTimeKit.parseDate( map.get( "countDate" ).toString() ) );//日份
		//		date[i] = day + "";
		data[i] = map.get( "incomeCount" ).toString();
		i++;
	    }
	    //	    result.put( "date", date );//日份列表
	    result.put( "data", data );//数据列表

	    Calendar cal = Calendar.getInstance();
	    String day = new SimpleDateFormat( "yyyy-MM-dd " ).format( cal.getTime() );
	    cal.add( Calendar.DATE, -1 );
	    String yesterday = new SimpleDateFormat( "yyyy-MM-dd " ).format( cal.getTime() );
	    cal.add( Calendar.DATE, -6 );
	    String sevenday = new SimpleDateFormat( "yyyy-MM-dd " ).format( cal.getTime() );

	    Wrapper groupWrapper = new EntityWrapper();
	    groupWrapper.where( "TO_DAYS(create_time) = TO_DAYS({0}) and order_status>1 and order_status!=5", day );
	    if ( CommonUtil.isEmpty( shopId ) ) {
		groupWrapper.in( "shop_id", shopIds );
	    } else {
		groupWrapper.and( "shop_id ={0}", shopId );
	    }
	    Integer todayPayOrderNum = mallOrderService.selectCount( groupWrapper );
	    groupWrapper = new EntityWrapper();
	    groupWrapper.where( " order_status = 1" );
	    if ( CommonUtil.isEmpty( shopId ) ) {
		groupWrapper.in( "shop_id", shopIds );
	    } else {
		groupWrapper.and( "shop_id ={0}", shopId );
	    }
	    Integer waitPayOrderNum = mallOrderService.selectCount( groupWrapper );
	    groupWrapper = new EntityWrapper();
	    groupWrapper.where( " order_status = 2 " );
	    if ( CommonUtil.isEmpty( shopId ) ) {
		groupWrapper.in( "shop_id", shopIds );
	    } else {
		groupWrapper.and( "shop_id ={0}", shopId );
	    }
	    Integer waitDeliveryOrderNum = mallOrderService.selectCount( groupWrapper );

	    result.put( "todayPayOrderNum", todayPayOrderNum );//今日付款订单数
	    result.put( "waitPayOrderNum", waitPayOrderNum );//待付款订单数
	    result.put( "waitDeliveryOrderNum", waitDeliveryOrderNum );//待发货订单数

	    Map< String,Object > countParams = new HashMap<>();
	    countParams.put( "type", 1 );
	    if ( CommonUtil.isEmpty( shopId ) ) {
		countParams.put( "shoplist", shoplist );
	    } else {
		countParams.put( "shopId", shopId );
	    }
	    countParams.put( "date", yesterday );
	    String yesterPrice = mallCountIncomeService.getCountByTimes( countParams );

	    countParams.remove( "date" );
	    countParams.put( "startDate", sevenday );
	    countParams.put( "endDate", yesterday );
	    String sevenCount = mallCountIncomeService.getCountByTimes( countParams );
	    result.put( "yesterIncomeCount", yesterPrice );//昨天总收入
	    result.put( "sevenIncomeCount", sevenCount );//7天总收入

	} catch ( Exception e ) {
	    logger.error( "获取收入金额列表异常：" + e.getMessage() );
	    e.printStackTrace();
	    return ServerResponse.createByErrorCodeMessage( ResponseEnums.ERROR.getCode(), "获取收入金额列表异常" );
	}
	return ServerResponse.createBySuccessCodeData( ResponseEnums.SUCCESS.getCode(), result, false );
    }
}
