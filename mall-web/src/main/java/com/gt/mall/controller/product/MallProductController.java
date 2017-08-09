package com.gt.mall.controller.product;

import com.gt.mall.annotation.SysLogAnnotation;
import com.gt.mall.base.BaseController;
import com.gt.mall.bean.BusUser;
import com.gt.mall.entity.product.MallGroup;
import com.gt.mall.util.*;
import com.gt.mall.web.service.product.MallGroupService;
import com.gt.mall.web.service.product.MallProductService;
import com.gt.mall.web.service.product.MallProductSpecificaService;
import com.gt.mall.web.service.store.MallStoreService;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.SortedMap;

/**
 * <p>
 * 商品表 前端控制器
 * </p>
 *
 * @author yangqian
 * @since 2017-07-20
 */
@Controller
@RequestMapping( "/mPro" )
public class MallProductController extends BaseController {

    @Autowired
    private MallProductService          mallProductService;
    @Autowired
    private MallGroupService            mallGroupService;
    @Autowired
    private MallStoreService            mallStoreService;
    @Autowired
    private MallProductSpecificaService mallProductSpecificaService;

    /**
     * 进入商品管理列表页面
     */
    @RequestMapping( "/index" )
    public String productIndex( HttpServletRequest request, HttpServletResponse response, @RequestParam Map< String,Object > params ) {
	BusUser user = SessionUtils.getLoginUser( request );
	try {
	    if ( user != null ) {
		Integer proType = 0;
		if ( !CommonUtil.isEmpty( params.get( "proType" ) ) ) {
		    proType = CommonUtil.toInteger( params.get( "proType" ) );
		}
		boolean isAdminFlag = true;//是管理员
		if ( CommonUtil.isNotEmpty( user.getPid() ) && user.getPid() > 0 ) {
		    isAdminFlag = mallStoreService.isAdminUser( user.getId() );//查询子账户是否是管理员
		    if ( !isAdminFlag ) {
			request.setAttribute( "isNoAdminFlag", 1 );
		    }
		}
		if ( isAdminFlag ) {
		    //todo 调用陈丹接口  dictService.pidUserId
		    int userPId = 0;//dictService.pidUserId( user.getId() );//通过用户名查询主账号id
		    List< Map< String,Object > > shoplist = mallStoreService
				    .findAllStoByUser( user );// 查询登陆人拥有的店铺
		    if ( shoplist != null && shoplist.size() > 0 ) {
			//todo 调用陈丹接口   erpLoginOrMenusService.isjxcCount
			long isJxc = 0;//erpLoginOrMenusService.isjxcCount( "8", userPId );//判断商家是否有进销存 0没有 1有
			params.put( "isJxc", isJxc );
			params.put( "shoplist", shoplist );
			PageUtil page = mallProductService.selectByUserId( params );
			request.setAttribute( "page", page );
		    }
		    int uId = user.getId();
		    int level = user.getLevel();
		    //登陆人是子账户，要根据pId获取主账户的id和等级，如果是主账户则取自己的id和等级
		    if ( CommonUtil.isNotEmpty( user.getPid() ) ) {
			if ( user.getPid() > 0 ) {
			    BusUser xuser = null;//userService.QuerySelect( userPId );//登陆人是子账户，要根据pId获取主账户的id和等级
			    uId = xuser.getId();
			    level = xuser.getLevel();
			}
		    }
		    //todo  调用陈丹接口  dictService.dictBusUserNum
		    //request.setAttribute( "proMaxNum", dictService.dictBusUserNum( uId, level, 5, "1094" ) );
		    request.setAttribute( "proType", proType );
		    request.setAttribute( "proName", params.get( "proName" ) );
		    request.setAttribute( "imgUrl", PropertiesUtil.getResourceUrl() );
		    request.setAttribute( "path", PropertiesUtil.getHomeUrl() );

		    mallProductService.syncErpPro( user.getId() );//把未同步的商品进行同步

		}
	    }
	    //todo 调用陈丹接口   course.urlquery
	    //	    request.setAttribute( "videourl", course.urlquery( "77" ) );
	} catch ( Exception e ) {
	    logger.error( "进入商品列表异常" + e.getMessage() );
	    e.printStackTrace();
	}
	return "mall/product/product_index";
    }

    /**
     * 批量处理商品(删除，发布，提审)
     */
    @SysLogAnnotation( description = "商品管理-商品列表：批量处理商品", op_function = "3" )
    @RequestMapping( "batchProduct" )
    public void batchProduct( HttpServletRequest request, HttpServletResponse response, @RequestParam( "ids" ) String ids, @RequestParam Map< String,Object > params )
		    throws IOException {

	logger.info( "进入批量处理controller" );
	response.setCharacterEncoding( "utf-8" );
	int code = 1;// 编辑成功
	try {
	    String[] id = (String[]) JSONArray.toArray(
			    JSONArray.fromObject( ids ), String.class );
	    boolean flag = mallProductService.batchUpdateProduct( params, id );
	    if ( !flag ) {
		code = -1;// 编辑失败
	    }
	} catch ( Exception e ) {
	    code = -1;
	    logger.debug( "批量处理商品信息：" + e.getMessage() );
	    e.printStackTrace();
	} finally {
	    JSONObject obj = new JSONObject();
	    obj.put( "code", code );
	    CommonUtil.write( response, obj );
	}

    }

    /**
     * 进入修改商品页面
     */
    @RequestMapping( "to_edit" )
    public String toEditProduct( HttpServletRequest request, HttpServletResponse response, @RequestParam Map< String,Object > params ) {
	try {
	    BusUser user = SessionUtils.getLoginUser( request );
	    List< Map< String,Object > > shoplist = mallStoreService.findAllStoByUser( user );// 查询登陆人拥有的店铺

	    params.put( "userId", user.getId() );
	    params.put( "type", 1 );
	    // 查询自定义规格名称
	    SortedMap< String,Object > specDictMap = mallProductSpecificaService.getSpecificaByUser( params );
	    if ( specDictMap != null && specDictMap.size() > 0 ) {
		request.setAttribute( "specDictMap", specDictMap );
	    }
	    //todo 调用陈丹接口 根据商家id查询主账号id  dictService.pidUserId
	    int userPId = 0;//dictService.pidUserId( user.getId() );//通过用户名查询主账号id
	    //todo 调用陈丹接口 判断商家是否有进销存    erpLoginOrMenusService.isjxcCount
	    long isJxc = 0;//erpLoginOrMenusService.isjxcCount( "8", userPId );//判断商家是否有进销存 0没有 1有
	    if ( isJxc == 1 ) {
		request.setAttribute( "noShowSt", 1 );//不显示实体物品
		request.setAttribute( "noUpSpec", 1 );//不修改规格 1 修改 0 不修改
	    }
	    request.setAttribute( "isJxc", isJxc );
	    // 查询商品信息
	    if ( !CommonUtil.isEmpty( params.get( "id" ) ) ) {
		int id = CommonUtil.toInteger( params.get( "id" ) );
		Map< String,Object > map = mallProductService.selectProductById( id, user, isJxc );
		if ( map != null && map.size() > 0 ) {
		    for ( String str : map.keySet() ) {
			request.setAttribute( str, map.get( str ) );
		    }
		}
		request.setAttribute( "map", map );
	    }

	    //查询卡券包
	    //todo 调用彭江丽接口  查询卡券包 duofenCardService.findReceiveByBusUserId
	    /*List< Map< String,Object > > cardReceiveList = duofenCardService.findReceiveByBusUserId( user );
	    if ( cardReceiveList != null && cardReceiveList.size() > 0 ) {
		for ( Map< String,Object > map2 : cardReceiveList ) {

		    if ( CommonUtil.isNotEmpty( map2.get( "cardMessage" ) ) ) {
			List< Map< String,Object > > messageList = (List< Map< String,Object > >) JSONArray.fromObject( map2.get( "cardMessage" ) );
			map2.put( "messageList", messageList );
		    }
		}
		request.setAttribute( "cardReceiveList", cardReceiveList );
	    }*/

	    // 查询会员下面的所有分组
	    if ( shoplist != null && shoplist.size() > 0 ) {
		request.setAttribute( "shoplist", shoplist );
		Integer shopId = CommonUtil.toInteger( shoplist.get( 0 ).get( "id" ) );
		if ( CommonUtil.isEmpty( request.getAttribute( "groupList" ) ) ) {
		    //todo 跟以前的不一样
		    List< MallGroup > groupList = mallGroupService.selectGroupByShopId( shopId, -1 );
		    request.setAttribute( "groupList", groupList );
		}
	    }
	    //查询商家流量
	    //todo 流量相关接口  busFlowService.getBusFlowsByUserId
	  /*  List< BusFlow > flowList = busFlowService.getBusFlowsByUserId( user.getId() );
	    List< BusFlow > newFlowList = new ArrayList< BusFlow >();
	    if ( flowList != null && flowList.size() > 0 ) {
		if ( flowList != null && flowList.size() > 0 ) {
		    for ( BusFlow busFlow : flowList ) {
			int count = mallProductService.selectCountByFlowIds( busFlow.getId() );
			if ( count <= 0 ) {
			    newFlowList.add( busFlow );
			}
		    }
		}
		request.setAttribute( "newFlowList", newFlowList );
	    }*/

	    //查询会员卡
	    List< Map< String,Object > > cardList = mallProductService.selectMemberType( user.getId() );
	    request.setAttribute( "cardList", cardList );
	    request.setAttribute( "imgUrl", PropertiesUtil.getResourceUrl() );
	    request.setAttribute( "urls", request.getHeader( "Referer" ) );
	} catch ( Exception e ) {
	    logger.error( e.getMessage() );
	    e.printStackTrace();
	}

	return "mall/product/product_edit";
    }

    /**
     * 添加商品
     */
    @SysLogAnnotation( description = "商品管理-添加商品", op_function = "2" )
    @RequestMapping( "add_pro" )
    public void addProduct( HttpServletRequest request, HttpServletResponse response, @RequestParam Map< String,Object > params ) throws Exception {
	logger.info( "进入添加商品的controller" );
	int code = 1;
	Integer id = 0;
	String msg = "";
	try {
	    BusUser user = SessionUtils.getLoginUser( request );
	    if ( user != null ) {
		Map< String,Object > resultMap = mallProductService.addProduct( params, user );
		if ( CommonUtil.isNotEmpty( resultMap.get( "code" ) ) ) {
		    code = CommonUtil.toInteger( resultMap.get( "code" ) );
		}
		if ( CommonUtil.isNotEmpty( resultMap.get( "msg" ) ) ) {
		    msg = CommonUtil.toString( resultMap.get( "msg" ) );
		}
		if ( CommonUtil.isNotEmpty( resultMap.get( "id" ) ) ) {
		    id = CommonUtil.toInteger( resultMap.get( "id" ) );
		}
	    } else {
		code = -2;
	    }
	} catch ( Exception e ) {
	    code = -1;
	    logger.debug( "添加商品：" + e.getMessage() );
	    e.printStackTrace();
	}
	JSONObject obj = new JSONObject();
	obj.put( "id", id );
	obj.put( "code", code );
	obj.put( "msg", msg );
	CommonUtil.write( response, obj );

    }

    /**
     * 修改商品
     */
    @SysLogAnnotation( description = "商品管理-修改商品", op_function = "3" )
    @RequestMapping( "upd_pro" )
    public void updProduct( HttpServletRequest request,
		    HttpServletResponse response,
		    @RequestParam Map< String,Object > params ) throws Exception {
	logger.info( "进入修改商品的controller" );
	int code = 1;
	PrintWriter p = null;
	Integer id = 0;
	String msg = "";
	try {
	    p = response.getWriter();
	    BusUser user = SessionUtils.getLoginUser( request );
	    if ( user != null ) {
		Map< String,Object > resultMap = mallProductService.updateProduct( params, user );
		if ( CommonUtil.isNotEmpty( resultMap.get( "code" ) ) ) {
		    code = CommonUtil.toInteger( resultMap.get( "code" ) );
		}
		if ( CommonUtil.isNotEmpty( resultMap.get( "msg" ) ) ) {
		    msg = CommonUtil.toString( resultMap.get( "msg" ) );
		}
		if ( CommonUtil.isNotEmpty( resultMap.get( "id" ) ) ) {
		    id = CommonUtil.toInteger( resultMap.get( "id" ) );
		}
	    } else {
		code = -2;
	    }
	} catch ( Exception e ) {
	    code = -1;
	    logger.debug( "修改商品：" + e.getMessage() );
	    e.printStackTrace();
	}

	JSONObject obj = new JSONObject();
	obj.put( "code", code );
	obj.put( "id", id );
	obj.put( "msg", msg );
	CommonUtil.write( response, obj );
    }

    /**
     * 同步商品
     */
    @SysLogAnnotation( description = "商品管理-同步商品", op_function = "2" )
    @Transactional( rollbackFor = Exception.class )
    @RequestMapping( "copy_pro" )
    public void copyProduct( HttpServletRequest request, HttpServletResponse response, @RequestParam Map< String,Object > params ) throws Exception {
	logger.info( "进入同步商品的controller" );
	Map< String,Object > map = new HashMap< String,Object >();
	try {
	    BusUser user = SessionUtils.getLoginUser( request );
	    if ( user != null ) {
		if ( CommonUtil.isNotEmpty( params.get( "id" ) ) ) {
		    map = mallProductService.copyProduct( params, user );
		} else if ( ( CommonUtil.isNotEmpty( params.get( "shopId" ) ) && CommonUtil.isNotEmpty( params.get( "toShopId" ) ) ) ) {
		    map = mallProductService.copyProductByShopId( params, user );
		}
	    } else {
		map.put( "code", -2 );
	    }
	} catch ( Exception e ) {
	    map.put( "msg", "同步商品信息失败，请稍后重试" );
	    map.put( "code", -1 );
	    logger.debug( "同步商品：" + e.getMessage() );
	    e.printStackTrace();
	}
	if ( CommonUtil.isEmpty( map.get( "code" ) ) ) {
	    map.put( "msg", "同步商品信息失败，请稍后重试" );
	    map.put( "code", -1 );
	}
	CommonUtil.write( response,map );

    }

    /**
     * 获取二维码的图片
     *
     */
    @RequestMapping( value = "/79B4DE7C/getTwoCode" )
    public void getTwoCode( @RequestParam Map< String,Object > params, HttpServletRequest request, HttpServletResponse response ) {
	try {
	    String id = params.get( "id" ).toString();
	    String shopId = params.get( "shopId" ).toString();
	    BusUser user = SessionUtils.getLoginUser( request );
	    String content = PropertiesUtil.getHomeUrl() + "/mallPage/" + id + "/" + shopId + "/79B4DE7C/phoneProduct.do?uId=" + user.getId() + "&toshop=1";
	    QRcodeKit.buildQRcode( content, 200, 200, response );
	} catch ( Exception e ) {
	    logger.error( "获取到店支付二维码的图片失败：" + e.getMessage() );
	    e.printStackTrace();
	}
    }

    /**
     * 获取二维码的图片
     *
     */
    @RequestMapping( value = "/79B4DE7C/codeIframs" )
    public String codeIframs( @RequestParam Map< String,Object > params, HttpServletRequest request, HttpServletResponse response ) {
	try {
	    String id = params.get( "id" ).toString();
	    String shopId = params.get( "shopId" ).toString();
	    BusUser user = SessionUtils.getLoginUser( request );
	    String html = PropertiesUtil.getHomeUrl() + "/mallPage/" + id + "/" + shopId + "/79B4DE7C/phoneProduct.do?uId=" + user.getId() + "&toshop=1";
	    request.setAttribute( "html", html );
	    request.setAttribute( "id", id );
	    request.setAttribute( "shopId", shopId );
	} catch ( Exception e ) {
	    logger.error( "获取拍卖二维码图片失败：" + e.getMessage() );
	    e.printStackTrace();
	}
	return "mall/product/iframe/product_shop_buy";
    }

    /**
     * 添加商品
     */
    @SuppressWarnings( "unchecked" )
    @SysLogAnnotation( description = "添加或修改商品", op_function = "2" )
    @RequestMapping( "/79B4DE7C/addOrUpdate" )
    public void addOrUpdate( HttpServletRequest request, HttpServletResponse response, @RequestBody String json ) throws Exception {
	logger.info( "进入添加或修改商品的controller" );
	int code = 1;
	String msg = "";
	JSONObject obj = new JSONObject();
	try {
	    System.out.println( json );
	    if ( CommonUtil.isEmpty( json ) ) {
		code = -1;
		msg = "没有传参数";
	    }
	    Map< String,Object > params = (Map< String,Object >) JSONObject.fromObject( json );

	    if ( CommonUtil.isEmpty( params.get( "token" ) ) ) {
		code = -2;
		msg = "没有传token参数";
	    }
	    if ( CommonUtil.isEmpty( params.get( "product" ) ) ) {
		code = -2;
		msg = "没有传商品参数";
	    }
	    if ( code == 1 ) {
	        //todo 调用彭江丽 token验证   TokenUitl.checkTokenToLocal
		/*boolean bool = TokenUitl.checkTokenToLocal( params.get( "token" ).toString() );
		if ( !bool ) {
		    code = -2;
		    msg = "token验证失败";
		}*/
	    }
	    if ( code == 1 ) {
		Map< String,Object > resultMap = mallProductService.saveOrUpdateProductByErp( params );
		if ( CommonUtil.isNotEmpty( resultMap.get( "code" ) ) ) {
		    code = CommonUtil.toInteger( resultMap.get( "code" ) );
		}
		if ( CommonUtil.isNotEmpty( resultMap.get( "errorMsg" ) ) ) {
		    msg = CommonUtil.toString( resultMap.get( "errorMsg" ) );
		}
	    }
	} catch ( Exception e ) {
	    code = -1;
	    msg = "添加或修改商品失败";
	    logger.debug( "添加或修改商品异常：" + e.getMessage() );
	    e.printStackTrace();
	} finally {
	    obj.put( "errorMsg", msg );
	    obj.put( "code", code );
	    CommonUtil.write( response, obj );
	}
    }

    /**
     * 添加商品
     *
     */
    @SuppressWarnings( "unchecked" )
    @SysLogAnnotation( description = "修改库存", op_function = "3" )
    @RequestMapping( "/79B4DE7C/syncErpProductByWxShop" )
    public void syncErpProductByWxShop( HttpServletRequest request, HttpServletResponse response, @RequestBody String json ) throws Exception {
	logger.info( "进入添加或修改商品的controller" );
	int code = 1;
	String msg = "";
	JSONObject obj = new JSONObject();
	try {
	    if ( CommonUtil.isEmpty( json ) ) {
		code = -1;
		msg = "没有传参数";
	    }
	    Map< String,Object > params = (Map< String,Object >) JSONObject.fromObject( json );

	    if ( CommonUtil.isEmpty( params.get( "token" ) ) ) {
		code = -2;
		msg = "没有传token参数";
	    }
	    if ( code == 1 ) {
		//todo 调用彭江丽 token验证   TokenUitl.checkTokenToLocal
		/*boolean bool = TokenUitl.checkTokenToLocal( params.get( "token" ).toString() );
		if ( !bool ) {
		    code = -2;
		    msg = "token验证失败";
		}*/
	    }
	    if ( code == 1 ) {

		Map< String,Object > resultMap = mallProductService.syncErpProductByWxShop( params );
		if ( CommonUtil.isNotEmpty( resultMap.get( "code" ) ) ) {
		    code = CommonUtil.toInteger( resultMap.get( "code" ) );
		}
		if ( CommonUtil.isNotEmpty( resultMap.get( "errorMsg" ) ) ) {
		    msg = CommonUtil.toString( resultMap.get( "errorMsg" ) );
		}
	    }

	} catch ( Exception e ) {
	    code = -1;
	    msg = "添加或修改商品失败";
	    logger.debug( "添加或修改商品异常：" + e.getMessage() );
	    e.printStackTrace();
	} finally {
	    obj.put( "errorMsg", msg );
	    obj.put( "code", code );
	    CommonUtil.write( response, obj );
	}
    }
}
