package com.gt.mall.controller.api;

import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.gt.mall.dao.product.MallProductDAO;
import com.gt.mall.dto.ServerResponse;
import com.gt.mall.entity.basic.MallImageAssociative;
import com.gt.mall.entity.product.MallProductDetail;
import com.gt.mall.entity.product.MallProductInventory;
import com.gt.mall.entity.product.MallProductSpecifica;
import com.gt.mall.enums.ResponseEnums;
import com.gt.mall.service.web.basic.MallImageAssociativeService;
import com.gt.mall.service.web.product.MallProductDetailService;
import com.gt.mall.service.web.product.MallProductInventoryService;
import com.gt.mall.service.web.product.MallProductService;
import com.gt.mall.service.web.product.MallProductSpecificaService;
import com.gt.mall.utils.CommonUtil;
import com.gt.mall.utils.PageUtil;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 商品相关接口
 * User : yangqian
 * Date : 2017/9/21 0021
 * Time : 15:30
 */
@Controller
@RequestMapping( "/mallProduct/mallAPI" )
public class MallProductApiController {

    private static Logger logger = LoggerFactory.getLogger( MallProductApiController.class );

    @Autowired
    private MallProductService          mallProductService;
    @Autowired
    private MallProductDetailService    mallProductDetailService;
    @Autowired
    private MallProductSpecificaService productSpecificaService;
    @Autowired
    private MallProductInventoryService mallProductInventoryService;
    @Autowired
    private MallImageAssociativeService mallImageAssociativeService;//图片业务处理类
    @Autowired
    private MallProductDAO              mallProductDAO;

    @ApiOperation( value = "商品列表的接口", notes = "获取所有商家所有商品列表" )
    //    @ApiImplicitParams( { @ApiImplicitParam( name = "curPage", value = "页数", paramType = "query", required = false, dataType = "int" ),
    //		    @ApiImplicitParam( name = "pageSize", value = "显示数量 默认15条", paramType = "query", required = false, dataType = "int" ),
    //		    @ApiImplicitParam( name = "userIds", value = "商城用户Id集合", paramType = "query", required = false, dataType = "String" ) } )
    @ResponseBody
    @RequestMapping( value = "/list", method = RequestMethod.POST )
    public ServerResponse list( HttpServletRequest request, HttpServletResponse response, @RequestBody String param ) {
	Map< String,Object > result = new HashMap<>();
	try {
	    //	    Map< String,Object > params = new HashMap<>();
	    //	    params.put( "curPage", curPage );
	    //	    params.put( "pageSize", pageSize );
	    //	    if ( CommonUtil.isNotEmpty( userIds ) ) {
	    //		params.put( "userIds", userIds );
	    //	    }
	    logger.info( "接收到的参数：" + param );
	    Map< String,Object > params = JSONObject.parseObject( param );
	    PageUtil page = mallProductService.selectWaitCheckList( params );
	    result.put( "page", page );
	} catch ( Exception e ) {
	    logger.error( "获取待审核商品的异常：" + e.getMessage() );
	    e.printStackTrace();
	    return ServerResponse.createByErrorCodeMessage( ResponseEnums.ERROR.getCode(), "获取待审核商品的异常" );
	}
	return ServerResponse.createBySuccessCodeData( ResponseEnums.SUCCESS.getCode(), result, false );
    }

    @ApiOperation( value = "查看商品明细", notes = "查看商品明细" )
    @ResponseBody
    @RequestMapping( value = "/productDeatil", method = RequestMethod.POST )
    public ServerResponse productDeatil( HttpServletRequest request, HttpServletResponse response, @RequestBody String param ) {
	//	@ApiParam( name = "id", value = "商品Id", required = true ) @RequestParam Integer id )
	Map< String,Object > result = new HashMap<>();
	try {
	    logger.info( "接收到的参数：" + param );
	    Map< String,Object > params = JSONObject.parseObject( param );
	    // 查询商品图片
	    Map< String,Object > imageParam = new HashMap<>();

	    imageParam.put( "assId", params.get( "id" ) );
	    imageParam.put( "assType", 1 );
	    List< MallImageAssociative > imageList = mallImageAssociativeService.getParamByProductId( imageParam );

	    MallProductDetail productDetail = mallProductDetailService.selectByProductId( CommonUtil.toInteger( params.get( "id" ) ) );
	    result.put( "imageList", imageList );
	    result.put( "productDetail", productDetail );

	} catch ( Exception e ) {
	    logger.error( "查看商品明细异常：" + e.getMessage() );
	    e.printStackTrace();
	    return ServerResponse.createByErrorCodeMessage( ResponseEnums.ERROR.getCode(), "查看商品明细异常" );
	}
	return ServerResponse.createBySuccessCodeData( ResponseEnums.SUCCESS.getCode(), result );
    }

    @ApiOperation( value = "商品审核", notes = "商品审核" )
    //    @ApiImplicitParams( { @ApiImplicitParam( name = "id", value = "商品ID,多个用逗号隔开 必传", paramType = "query", required = true, dataType = "String" ),
    //		    @ApiImplicitParam( name = "status", value = "审核状态 -1审核失败 1审核成功", paramType = "query", required = true, dataType = "int" ),
    //		    @ApiImplicitParam( name = "checkReason", value = "审核不通过的原因", paramType = "query", required = false, dataType = "String" ) } )
    @ResponseBody
    @RequestMapping( value = "/productCheck", method = RequestMethod.POST )
    public ServerResponse productCheck( HttpServletRequest request, HttpServletResponse response, @RequestBody String param ) {
	try {
	    logger.info( "接收到的参数：" + param );
	    Map< String,Object > params = JSONObject.parseObject( param );

	    params.put( "checkStatus", params.get( "status" ) );
	    params.put( "isPlatformCheck", "1" );
	    if ( CommonUtil.isNotEmpty( params.get( "status" ) ) && params.get( "status" ).toString().equals( "-1" ) ) {
		params.put( "isPublish", "-1" );
	    }
	    //	    if ( status != 1 ) {
	    //		params.put( "checkReason", checkReason );
	    //	    }
	    if ( CommonUtil.isNotEmpty( params.get( "id" ) ) ) {
		String[] ids = params.get( "id" ).toString().split( "," );
		boolean flag = mallProductService.batchUpdateProduct( params, ids );
		if ( !flag ) {
		    return ServerResponse.createByErrorCodeMessage( ResponseEnums.ERROR.getCode(), "商品审核失败" );
		}
	    } else {
		return ServerResponse.createByErrorCodeMessage( ResponseEnums.ERROR.getCode(), "商品审核失败" );
	    }

	} catch ( Exception e ) {
	    logger.error( "商品审核异常：" + e.getMessage() );
	    e.printStackTrace();
	    return ServerResponse.createByErrorCodeMessage( ResponseEnums.ERROR.getCode(), "商品审核异常" );
	}
	return ServerResponse.createBySuccessCode();
    }

    @ApiOperation( value = "修改商品库存(秒杀订单)", notes = "MQ调用-修改商品库存(秒杀订单)" )
    @ResponseBody
    @RequestMapping( value = "/upProInvNumBySeckill", method = RequestMethod.POST )
    public ServerResponse upProInvNumBySeckill( HttpServletRequest request, HttpServletResponse response, @RequestBody Map< String,Object > params ) {
	//params  四个参数 (db 数据源, productId , productNum, proSpecificas)
	try {
	    logger.error( "异常：" + params );
	    String proSpecificas = "";
	    String proId = params.get( "productId" ).toString();
	    Integer productNum = 0;
	    if ( params.get( "productNum" ) != null ) {
		productNum = Integer.valueOf( params.get( "productNum" ).toString() );
	    }
	    if ( params.get( "proSpecificas" ) != null ) {
		proSpecificas = params.get( "proSpecificas" ).toString();
	    }
	    //获取商品的库存和销售量
	   /* String proSql = "select pro_stock_total,pro_sale_total,is_specifica from t_mall_product where id=" + proId;*/
	    Wrapper groupWrapper = new EntityWrapper();
	    groupWrapper.setSqlSelect( "pro_stock_total,pro_sale_total,is_specifica" );
	    groupWrapper.where( "id = {0}", proId );
	    Map< String,Object > proMap = mallProductService.selectMap( groupWrapper );

	    if ( proMap != null ) {
		int isSpec = 0;//是否有规格
		if ( CommonUtil.isNotEmpty( proMap.get( "is_specifica" ) ) ) {
		    isSpec = Integer.parseInt( proMap.get( "is_specifica" ).toString() );
		}
		Map< String,Object > productParams = new HashMap<>();
		productParams.put( "type", 2 );
		productParams.put( "product_id", proId );
		productParams.put( "pro_num", productNum );
		mallProductDAO.updateProductStock( productParams );
		if ( isSpec == 1 ) {//该商品存在规格
		    String specIds = "";
		    //获取规格的库存和销售额
		    for ( String str : proSpecificas.split( "," ) ) {
			if ( str != null && !str.equals( "" ) ) {
			    Wrapper< MallProductSpecifica > wrapper = new EntityWrapper<>();
			    wrapper.setSqlSelect( "id" );
			    wrapper.where( "product_id={0} and is_delete = 0 and specifica_value_id= {1}", proId, str );
			    List< Map< String,Object > > specList = productSpecificaService.selectMaps( wrapper );
			    if ( specList != null && specList.size() > 0 ) {
				for ( Map< String,Object > map : specList ) {
				    if ( !specIds.equals( "" ) ) {
					specIds += ",";
				    }
				    specIds += map.get( "id" ).toString();
				}
			    }
			}
		    }
		    proMap.put( "proId", proId );
		    proMap.put( "specificaIds", specIds );
		    MallProductInventory proInv = mallProductInventoryService.selectInvNumByProId( proMap );//根据商品规格id查询商品库存
		    mallProductInventoryService.updateProductInventory( proInv, productNum, 2 );//修改规格的库存
		}
	    }
	} catch ( Exception e ) {
	    logger.error( "修改商品库存(秒杀订单)异常：" + e.getMessage() );
	    e.printStackTrace();
	    return ServerResponse.createByErrorCodeMessage( ResponseEnums.ERROR.getCode(), "修改商品库存(秒杀订单)异常" );
	}
	return ServerResponse.createBySuccessCode();
    }
}
