package com.gt.mall.service.inter.member.impl;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.gt.mall.enums.ResponseEnums;
import com.gt.mall.exception.BusinessException;
import com.gt.mall.service.inter.member.CardService;
import com.gt.mall.util.CommonUtil;
import com.gt.mall.util.HttpSignUtil;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 优惠券、会员卡相关操作
 * User : yangqian
 * Date : 2017/8/14 0014
 * Time : 10:39
 */
@Service
public class CardServiceImpl implements CardService {

    /**
     * 根据卡包id查询卡券信息 map中key guoqi=1标示该包或该券过期
     *
     * @param receiveId 卡券包id
     *
     * @return 卡券信息
     */
    public Map< String,Object > findDuofenCardByReceiveId( int receiveId ) {
	Map< String,Object > params = new HashMap<>();
	params.put( "receiveId", receiveId );
	String data = HttpSignUtil.SignHttpSelect( params, "/memberAPI/cardCouponseApi/findDuofenCardByReceiveId" );
	if ( CommonUtil.isNotEmpty( data ) ) {
	    return JSONObject.toJavaObject( JSONObject.parseObject( data ), Map.class );
	}
	return null;
    }

    /**
     * 根据商家 查询商家拥有的卡包信息
     *
     * @param busUserId 商家id
     *
     * @return 卡包信息
     */
    public List< Map > findReceiveByBusUserId( int busUserId ) {
	Map< String,Object > params = new HashMap<>();
	params.put( "busId", busUserId );
	String data = HttpSignUtil.SignHttpSelect( params, "/memberAPI/cardCouponseApi/findReceiveByBusUserId" );
	if ( CommonUtil.isNotEmpty( data ) ) {
	    return JSONArray.parseArray( data, Map.class );
	}
	return null;
    }

    @Override
    public boolean successPayBack( Map< String,Object > params ) {
	Map< String,Object > resultMap = HttpSignUtil.SignHttpInsertOrUpdate( params, "/memberAPI/cardCouponseApi/successPayBack" );
	if ( CommonUtil.isNotEmpty( resultMap ) ) {
	    int code = CommonUtil.toInteger( resultMap.get( "code" ) );
	    if(code == 1){
	       return true;
	    }else{
		throw new BusinessException( ResponseEnums.INTER_ERROR.getCode(),ResponseEnums.INTER_ERROR.getDesc() );
	    }
	}
	throw new BusinessException( ResponseEnums.ERROR.getCode(),ResponseEnums.ERROR.getDesc() );
    }
}


