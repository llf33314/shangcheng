package com.gt.mall.controller.api.basic;

import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.gt.mall.base.BaseController;
import com.gt.mall.bean.BusUser;
import com.gt.mall.dto.ServerResponse;
import com.gt.mall.entity.basic.MallPaySet;
import com.gt.mall.entity.basic.MallSecuritytradeQuit;
import com.gt.mall.enums.ResponseEnums;
import com.gt.mall.exception.BusinessException;
import com.gt.mall.service.inter.user.DictService;
import com.gt.mall.service.web.basic.MallPaySetService;
import com.gt.mall.service.web.basic.MallSecuritytradeQuitService;
import com.gt.mall.utils.CommonUtil;
import com.gt.mall.utils.SessionUtils;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * <p>
 * 担保交易 前端控制器
 * </p>
 *
 * @author yangqian
 * @since 2017-10-10
 */
@Api( value = "mallSecuritytrade", description = "担保交易", produces = MediaType.APPLICATION_JSON_VALUE )
@Controller
@RequestMapping( "/mallSecuritytrade" )
public class MallSecuritytradeController extends BaseController {

    @Autowired
    private MallPaySetService            mallPaySetService;
    @Autowired
    private MallSecuritytradeQuitService mallSecuritytradeQuitService;
    @Autowired
    private DictService                  dictService;

    /**
     * 是否加入担保交易
     */
    @ApiOperation( value = "是否加入担保交易", notes = "是否加入担保交易" )
    @ResponseBody
    @RequestMapping( value = "/isSecuritytrade", method = RequestMethod.POST )
    public ServerResponse isSecuritytrade( HttpServletRequest request, HttpServletResponse response ) {
	Map< String,Object > result = new HashMap<>();
	try {
	    BusUser user = SessionUtils.getLoginUser( request );
	    boolean isSecuritytrade = false;
	    MallPaySet set = new MallPaySet();
	    set.setUserId( user.getId() );
	    set = mallPaySetService.selectByUserId( set );
	    if ( CommonUtil.isNotEmpty( set ) ) {
		if ( CommonUtil.isNotEmpty( set.getIsSecuritytrade() ) ) {
		    if ( set.getIsSecuritytrade() == 1 ) {
			isSecuritytrade = true;

			//申请中的退出担保交易信息
			Wrapper< MallSecuritytradeQuit > quitWrapper = new EntityWrapper<>();
			quitWrapper.where( "check_status =0" );
			quitWrapper.and( "user_id= {0}", user.getId() );
			MallSecuritytradeQuit securitytradeQuit = mallSecuritytradeQuitService.selectOne( quitWrapper );
			result.put( "securitytradeQuit", securitytradeQuit );
		    }
		}
	    }
	    result.put( "isSecuritytrade", isSecuritytrade );

	} catch ( Exception e ) {
	    logger.error( "是否加入担保交易异常：" + e.getMessage() );
	    e.printStackTrace();
	    return ServerResponse.createByErrorCodeMessage( ResponseEnums.ERROR.getCode(), "是否加入担保交易异常" );
	}
	return ServerResponse.createBySuccessCodeData( ResponseEnums.SUCCESS.getCode(), result );
    }

    /**
     * 获取退出理由列表
     */
    @ApiOperation( value = "获取退出理由列表", notes = "获取退出理由列表" )
    @ResponseBody
    @RequestMapping( value = "/quitReasonMap", method = RequestMethod.POST )
    public ServerResponse quitReasonMap( HttpServletRequest request, HttpServletResponse response ) {
	List< Map > typeMap = null;
	try {
	    //获取页面类型
	    typeMap = dictService.getDict( "1073" );
	} catch ( Exception e ) {
	    logger.error( "获取退出理由列表异常：" + e.getMessage() );
	    e.printStackTrace();
	    return ServerResponse.createByErrorCodeMessage( ResponseEnums.ERROR.getCode(), "获取退出理由列表异常" );
	}
	return ServerResponse.createBySuccessCodeData( ResponseEnums.SUCCESS.getCode(), typeMap );
    }

    /**
     * 保存退出担保交易信息
     */
    @ApiOperation( value = "保存退出担保交易信息", notes = "保存退出担保交易信息" )
    @ResponseBody
    @RequestMapping( value = "/save", method = RequestMethod.POST )
    public ServerResponse saveOrUpdate( HttpServletRequest request, HttpServletResponse response,
		    @ApiParam( name = "quitReasonId", value = "退出理由ID", required = true ) @RequestParam Integer quitReasonId,
		    @ApiParam( name = "remark", value = "补充意见", required = false ) @RequestParam String remark ) {
	try {
	    MallSecuritytradeQuit quit = new MallSecuritytradeQuit();
	    quit.setQuitReasonId( quitReasonId );
	    quit.setRemark( remark );
	    quit.setUserId( SessionUtils.getLoginUser( request ).getId() );
	    quit.setCreateTime( new Date() );
	    mallSecuritytradeQuitService.insert( quit );
	} catch ( Exception e ) {
	    logger.error( "保存退出担保交易信息异常：" + e.getMessage() );
	    e.printStackTrace();
	    return ServerResponse.createByErrorCodeMessage( ResponseEnums.ERROR.getCode(), ResponseEnums.ERROR.getDesc() );
	}
	return ServerResponse.createBySuccessCodeMessage( ResponseEnums.SUCCESS.getCode(), ResponseEnums.SUCCESS.getDesc() );
    }

    /**
     * 修改审核状态
     */
    @ApiOperation( value = "修改审核状态", notes = "修改审核状态" )
    @ResponseBody
    @RequestMapping( value = "/updateStatus", method = RequestMethod.POST )
    public ServerResponse updateStatus( HttpServletRequest request, HttpServletResponse response,
		    @ApiParam( name = "id", value = "退出申请ID", required = true ) @RequestParam Integer id,
		    @ApiParam( name = "status", value = "类型 1通过 -1不通过", required = true ) @RequestParam Integer status,
		    @ApiParam( name = "reason", value = "不通过理由", required = false ) @RequestParam String reason ) {
	try {
	    BusUser user = SessionUtils.getLoginUser( request );
	    MallSecuritytradeQuit quit = mallSecuritytradeQuitService.selectById( id );
	    quit.setCheckStatus( status );
	    if ( status == 1 ) {
		quit.setEffectTime( new Date() );
	    } else {
		quit.setRefuseReason( reason );
	    }
	    boolean flag = mallSecuritytradeQuitService.updateById( quit );
	    if ( status == 1 ) {
		MallPaySet set = new MallPaySet();
		set.setUserId( user.getId() );
		set = mallPaySetService.selectByUserId( set );
		set.setIsSecuritytrade( 0 );
		mallPaySetService.updateById( set );
	    }
	    if ( !flag ) {
		return ServerResponse.createByErrorCodeMessage( ResponseEnums.ERROR.getCode(), "修改审核状态异常" );
	    }
	} catch ( BusinessException e ) {
	    logger.error( "修改审核状态异常：" + e.getMessage() );
	    e.printStackTrace();
	    return ServerResponse.createByErrorCodeMessage( e.getCode(), e.getMessage() );
	} catch ( Exception e ) {
	    logger.error( "修改审核状态异常：" + e.getMessage() );
	    e.printStackTrace();
	    return ServerResponse.createByErrorCodeMessage( ResponseEnums.ERROR.getCode(), "修改审核状态异常" );
	}
	return ServerResponse.createBySuccessCodeMessage( ResponseEnums.SUCCESS.getCode(), ResponseEnums.SUCCESS.getDesc() );
    }

}