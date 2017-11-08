package com.gt.mall.utils;

import com.gt.mall.constant.Constants;
import com.gt.mall.entity.basic.MallPaySet;
import com.gt.mall.entity.order.MallOrder;
import com.gt.mall.entity.order.MallOrderDetail;
import com.gt.mall.entity.order.MallOrderReturn;
import com.gt.mall.param.phone.order.PhoneOrderListDTO;

import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * 订单
 *
 * @author yang
 */
public class OrderUtil {

    /**
     * 重组查询订单列表的参数
     */
    public static Map< String,Object > getOrderListParams( Map< String,Object > paramsMap, PhoneOrderListDTO params ) {
	if ( CommonUtil.isNotEmpty( params.getType() ) && params.getType() > 0 ) {
	    int type = params.getType();
	    if ( type > 0 && type <= 4 ) {
		//根据订单状态查询订单的
		paramsMap.put( "type", type );
	    } else if ( type == 5 ) {
		//待评价
		paramsMap.put( "appraiseStatus", 0 );
	    } else if ( type == 6 ) {
		//退款
		paramsMap.put( "isReturn", 1 );
	    } else if ( type == 7 ) {
		//团购
		paramsMap.put( "orderType", 1 );
	    } else if ( type == 8 ) {
		//秒杀
		paramsMap.put( "orderType", 3 );
	    }
	}
	return paramsMap;
    }

    /**
     * 判断商家是否已经开通了订单评价
     *
     * @param mallPaySetList 商城设置集合
     * @param busId          商家id
     *
     * @return 订单评价
     */
    public static boolean getIsOpenComment( List< MallPaySet > mallPaySetList, Integer busId ) {
	boolean isOpenComment = false;
	if ( mallPaySetList != null && mallPaySetList.size() > 0 && CommonUtil.isNotEmpty( busId ) ) {
	    for ( MallPaySet mallPaySet : mallPaySetList ) {
		if ( mallPaySet.getUserId().toString().equals( busId.toString() ) ) {
		    if ( "1".equals( mallPaySet.getIsComment().toString() ) ) {
			isOpenComment = true;
			break;
		    }
		}
	    }
	}
	return isOpenComment;
    }

    /**
     * 根据订单状态和 配送方式 获取 状态名称
     *
     * @param orderStatus    订单状态
     * @param deliveryMethod 配送方式
     *
     * @return 状态名称 （在订单列表展示）
     */
    public static String getOrderStatusMsgByOrder( String orderStatus, String deliveryMethod ) {
	String statusName = "";
	if ( "1".equals( orderStatus ) ) {
	    statusName = "待支付";
	} else if ( "2".equals( orderStatus ) && "1".equals( deliveryMethod ) ) {
	    statusName = "待发货";
	} else if ( "2".equals( orderStatus ) && "2".equals( deliveryMethod ) ) {
	    statusName = "待提货";
	} else if ( "3".equals( orderStatus ) ) {
	    statusName = "待收货";
	} else if ( "4".equals( orderStatus ) ) {
	    statusName = "订单已完成";
	} else if ( "5".equals( orderStatus ) ) {
	    statusName = "订单已关闭";
	}
	return statusName;
    }

    /**
     * 判断订单详情是否正在退款
     *
     * @param status 订单详情状态
     *
     * @return 0 没退款
     */
    public static boolean getOrderIsNowReturn( String status ) {
	return "0".equals( status ) || "2".equals( status ) || "3".equals( status ) || "4".equals( status ) || "-1".equals( status );
    }

    /**
     * 判断是否显示申请退款的按钮
     *
     * @param order     订单对象
     * @param detail    订单详情对象
     * @param updateDay 修改订单的天使
     *
     * @return 1 显示
     */
    public static int getOrderIsShowReturnButton( MallOrder order, MallOrderDetail detail, long updateDay ) {
	String orderStatus = order.getOrderStatus().toString();
	String orderPayWay = order.getOrderPayWay().toString();
	String proTypeId = detail.getProTypeId().toString();
	String detailStatus = detail.getStatus().toString();
	//扫码支付、积分支付、粉币支付  不可以退款
	if ( "5".equals( orderStatus ) || "5".equals( orderPayWay ) || "4".equals( orderPayWay )
			|| "8".equals( orderPayWay ) ) {
	    return 0;
	}
	//卡券购买,会员卡支付 ,流量 不可以退款
	if ( "3".equals( proTypeId ) || "2".equals( proTypeId ) || "4".equals( proTypeId ) ) {
	    return 0;
	}
	//还未退款
	boolean noReturn = ( "2".equals( orderStatus ) || "3".equals( orderStatus ) ) && "-3".equals( detailStatus );
	//是否能修改退款
	boolean isUpReturn = updateDay > 0 && updateDay < Constants.ORDER_FINISH_RETURN_DAY && "4".equals( detailStatus ) && "-3".equals( detailStatus );
	if ( noReturn || isUpReturn ) {
	    return 1;
	}
	return 0;
    }

    /**
     * 判断订单详情是否能够显示评价按钮
     *
     * @param orderStatus   订单状态
     * @param isReturn      是否在退款 false 没退
     * @param isOpenComment 是否已经开通了评价
     *
     * @return 0 不能评价
     */
    public static int getOrderIsShowCommentButton( String orderStatus, boolean isReturn, boolean isOpenComment ) {
	if ( "4".equals( orderStatus ) && isOpenComment && !isReturn ) {
	    return 1;
	}
	return 0;
    }

    /**
     * 判断是否显示确认收货按钮 (订单状态为已发货、不能是积分支付和粉币支付  以及 未退款的订单或退款成功的订单   才能显示确认收货的按钮)
     *
     * @param order       订单
     * @param isNowReturn 是否正在退货
     *
     * @return 1 显示 0 不显示
     */
    public static int getOrderIsShowShouHuoButton( MallOrder order, boolean isNowReturn ) {
	if ( "3".equals( order.getOrderStatus().toString() ) && !"4".equals( order.getOrderPayWay().toString() ) && !"8".equals( order.getOrderPayWay().toString() )
			&& !isNowReturn ) {
	    return 1;
	}
	return 0;
    }

    /**
     * 是否展示填写物流信息
     *
     * @param isNowReturn     是否能退款
     * @param detailStatus    订单详情状态
     * @param mallOrderReturn 退款对象
     *
     * @return 1 显示
     */
    public static int getOrderIsShowReturnWuliuButton( boolean isNowReturn, String detailStatus, MallOrderReturn mallOrderReturn ) {
	if ( isNowReturn ) {
	    if ( "2".equals( detailStatus ) || "4".equals( detailStatus ) && CommonUtil.isNotEmpty( mallOrderReturn ) ) {
		return 1;
	    }
	}
	return 0;
    }

    /**
     * 是否显示修改物流的按钮
     *
     * @param isNowReturn  是否能退款
     * @param detailStatus 订单详情状态
     *
     * @return 1 显示
     */
    public static int getOrderIsShowUpdateReturnButton( boolean isNowReturn, String detailStatus ) {
	if ( isNowReturn && "-1".equals( detailStatus ) ) {
	    return 1;
	}
	return 0;
    }

    /**
     * 是否显示关闭退款的按钮
     *
     * @param isNowReturn     是否能退款
     * @param detailStatus    订单详情状态
     * @param mallOrderReturn 退款对象
     *
     * @return 1 显示
     */
    public static int getOrderIsShowCloseReturnButton( boolean isNowReturn, String detailStatus, MallOrderReturn mallOrderReturn ) {
	if ( isNowReturn ) {
	    if ( ( "0".equals( detailStatus ) || "2".equals( detailStatus ) || "3".equals( detailStatus ) || "4".equals( detailStatus ) || "-1".equals( detailStatus ) )
			    && CommonUtil
			    .isNotEmpty( mallOrderReturn ) ) {
		return 1;
	    }
	}
	return 0;
    }

    /**
     * 是否显示去支付按钮
     *
     * @param order 订单
     *
     * @return 1显示
     */
    public static int getOrderIsShowGoPayButton( MallOrder order ) {
	if ( "1".equals( order.getOrderStatus().toString() ) && !"7".equals( order.getOrderPayWay().toString() ) ) {
	    return 1;
	}
	return 0;
    }

    /**
     * 是否显示会员删除订单的按钮
     *
     * @param order 订单
     *
     * @return 1 显示
     */
    public static int getOrderIsShowMemberDeleteButton( MallOrder order ) {
	//订单关闭可以 删除按钮
	if ( "5".equals( order.getOrderStatus().toString() ) ) {
	    return 1;
	} else if ( "4".equals( order.getOrderStatus().toString() ) ) {
	    long[] times = getTimes( order.getUpdateTime(), 0 );
	    if ( null != times && times.length > 0 ) {
		if ( times[0] > Constants.ORDER_FINISH_RETURN_DAY ) {
		    //订单完成且不可退款才能 显示删除按钮
		    return 1;
		}
	    }
	}
	return 0;
    }

    /**
     * 是否显示代付详情
     *
     * @param order 订单
     *
     * @return 1显示
     */
    public static int getOrderIsShowDaifuButton( MallOrder order ) {
	if ( order.getOrderPayWay() == 7 ) {
	    return 1;
	}
	return 0;
    }

    /**
     * 是否显示查看物流的按钮
     *
     * @param order 订单
     *
     * @return 1 显示
     */
    public static int getOrderIsShowKanWuliuButton( MallOrder order ) {
	if ( "3".equals( order.getOrderStatus().toString() ) ) {
	    return 1;
	}
	return 0;
    }

    /**
     * 根据订单状态和 配送方式 获取 状态名称
     *
     * @param orderStatus    订单状态
     * @param deliveryMethod 配送方式
     *
     * @return 状态名称（在订单详情页面展示）
     */
    public static String getOrderStatusMsgBydetail( String orderStatus, String detailStatus, String deliveryMethod, MallOrderReturn mallOrderReturn ) {
	String statusName = "";
	if ( "1".equals( orderStatus ) ) {
	    statusName = "等待买家付款";
	} else if ( "2".equals( orderStatus ) && "1".equals( deliveryMethod ) ) {
	    statusName = "等待卖家发货";
	} else if ( "2".equals( orderStatus ) && "2".equals( deliveryMethod ) ) {
	    statusName = "等待买家提货";
	} else if ( "3".equals( orderStatus ) ) {
	    statusName = "卖家已发货";
	} else if ( "4".equals( orderStatus ) ) {
	    statusName = "交易成功";
	} else if ( "5".equals( orderStatus ) ) {
	    statusName = "订单已关闭";
	}
	if ( !"-3".equals( detailStatus ) && !"1".equals( detailStatus ) && !"5".equals( detailStatus ) && !"-2".equals( detailStatus ) ) {
	    statusName = "申请退款中";
	}
	if ( "0".equals( detailStatus ) ) {
	    statusName = "申请退款中";
	} else if ( "2".equals( detailStatus ) ) {
	    statusName = "等待买家退货给商家，请填写退货物流";
	} else if ( "3".equals( detailStatus ) ) {
	    statusName = "等待商家确认收货";
	} else if ( "4".equals( detailStatus ) ) {
	    statusName = "商家未收到货，不同意退款退货申请";
	} else if ( "-1".equals( detailStatus ) ) {
	    statusName = "商家不同意退款";
	    if ( CommonUtil.isNotEmpty( mallOrderReturn.getNoReturnReason() ) ) {
		statusName += "，理由：" + mallOrderReturn.getNoReturnReason();
	    }
	}
	return statusName;
    }

    public static String getOrderStatusCountdownMsg( MallOrder order ) {
	String countdown = "";
	if ( "1".equals( order.getOrderStatus().toString() ) ) {//未付款
	    long[] times = getTimes( order.getCreateTime(), 3 );
	    if ( times[0] > 0 || times[1] > 0 ) {
		countdown = "还剩 ";
		if ( times[0] > 0 ) {
		    countdown += times[0] + " 天 ";
		}
		if ( times[1] > 0 ) {
		    countdown += times[1] + " 时 ";
		}
		countdown += "自动关闭";
	    }
	} else if ( "3".equals( order.getOrderStatus().toString() ) ) {//已发货
	    long[] times = getTimes( order.getCreateTime(), 7 );
	    if ( times[0] > 0 || times[1] > 0 ) {
		countdown = "还剩 ";
		if ( times[0] > 0 ) {
		    countdown += times[0] + " 天 ";
		}
		if ( times[1] > 0 ) {
		    countdown += times[1] + " 时 ";
		}
		countdown += "自动确认";
	    }
	}
	return countdown;
    }

    private static long[] getTimes( Date upDate, int addDate ) {
	Date date = DateTimeKit.addDate( new Date(), addDate );
	String startData = DateTimeKit.format( date, DateTimeKit.DEFAULT_DATETIME_FORMAT );
	String endData = DateTimeKit.format( upDate, DateTimeKit.DEFAULT_DATETIME_FORMAT );
	return DateTimeKit.getDistanceTimes( startData, endData );
    }

    public static void main( String[] args ) {
	Date upDate = DateTimeKit.parse( "2017-10-26 11:00:10", DateTimeKit.DEFAULT_DATETIME_FORMAT );
	long[] times = getTimes( upDate, 0 );
	System.out.println( "day = " + times[0] );
    }

}
