webpackJsonp([16],{"8eqz":function(t,o,r){"use strict";function e(t){r("QeMu")}var i={props:{times:{type:Number,default:0,required:!0},type:{type:Number,default:1,required:!1},countBg:{type:String,default:""}},data:function(){return{time:{},isShow:!1,Interval:"",isShowHtml:!0}},watch:{times:function(t,o){var r=this;r.time="",r.time=t,r.Interval&&clearInterval(r.Interval),0===t&&(this.isShow=!1),r.setTiming(t)}},mounted:function(){void 0!==this.show&&(this.isShowHtml=this.show),this.setTiming(this.times)},methods:{setTiming:function(t){var o=this,r=this,e=r.times;r.time="",this.Interval=setInterval(function(){0===e?(clearInterval(r.Interval),r.time=r.timer(0)):(e--,r.time=r.timer(e),o.isShow=!0)},1e3)},timer:function(t){var o=0,r=0,e=0,i=0;t>0&&(o=Math.floor(t/86400),r=Math.floor(t/3600)-24*o,e=Math.floor(t/60)-24*o*60-60*r,i=Math.floor(t)-24*o*60*60-60*r*60-60*e),r<=9&&(r="0"+r),e<=9&&(e="0"+e),i<=9&&(i="0"+i);var s={};return s.DD=o,s.HH=r,s.mm=e,s.ss=i,s}}},s=function(){var t=this,o=t.$createElement,r=t._self._c||o;return t.isShow?r("div",[1==t.type?r("div",{staticClass:"fs36 classify-time shopGray"},[t._v("\n          距结束"),r("span",[t._v(t._s(t.time.DD)+"天")]),t._v(" "),r("em",{class:[""!=t.countBg?t.countBg:""],domProps:{textContent:t._s(t.time.HH)}}),t._v(" :\n          "),r("em",{class:[""!=t.countBg?t.countBg:""],domProps:{textContent:t._s(t.time.mm)}}),t._v(" :\n          "),r("em",{class:[""!=t.countBg?t.countBg:""],domProps:{textContent:t._s(t.time.ss)}})]):t._e(),t._v(" "),2==t.type?r("div",{staticClass:"group-goods-time"},[r("span",{staticClass:"fs36"},[t._v("距离结束")]),t._v(" "),r("span",{staticClass:"fs36"},[r("em",{class:[""!=t.countBg?t.countBg:""],domProps:{textContent:t._s(t.time.DD)}}),t._v(" 天\n      "),r("em",{class:[""!=t.countBg?t.countBg:""],domProps:{textContent:t._s(t.time.HH)}}),t._v("时\n      "),r("em",{class:[""!=t.countBg?t.countBg:""],domProps:{textContent:t._s(t.time.mm)}}),t._v("分\n      "),r("em",{class:[""!=t.countBg?t.countBg:""],domProps:{textContent:t._s(t.time.ss)}}),t._v("秒\n      ")])]):t._e(),t._v(" "),3==t.type?r("div",{staticClass:"group-time fs40 border"},[t._v("\n    剩余  "),r("em",{domProps:{textContent:t._s(t.time.DD)}}),t._v(" 天\n      "),r("em",{domProps:{textContent:t._s(t.time.HH)}}),t._v("时\n      "),r("em",{domProps:{textContent:t._s(t.time.mm)}}),t._v("分\n      "),r("em",{domProps:{textContent:t._s(t.time.ss)}}),t._v("秒\n  ")]):t._e(),t._v(" "),4==t.type?r("p",{staticClass:"fs42"},[t._v("\n    剩余"+t._s(t.time.DD)+"天 "+t._s(t.time.HH)+"时 "+t._s(t.time.mm)+"分 "+t._s(t.time.ss)+"秒 结束\n  ")]):t._e()]):t._e()},a=[],n={render:s,staticRenderFns:a},p=n,u=r("X4nt"),d=e,g=u(i,p,!1,d,"data-v-75a1e68c",null);o.a=g.exports},"E/6a":function(t,o,r){var e=r("gbsh");o=t.exports=r("I71c")(!1),o.push([t.i,".classify-time[data-v-75a1e68c]{margin-top:.06666667rem}.classify-time span[data-v-75a1e68c]{color:#333;margin:3px}.classify-time em[data-v-75a1e68c]{font-size:.21333333rem;display:inline-block;background:#fc0;color:#333;padding:1px 2px;border-radius:3px}.group-goods-time[data-v-75a1e68c]{font-size:0;border:1px solid #e4393c;height:.46666667rem;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-pack:justify;-o-box-pack:justify;box-pack:justify;overflow:hidden;margin-top:.1rem;border-radius:3px}.group-goods-time span[data-v-75a1e68c]{display:block;line-height:.46666667rem;height:.46666667rem;text-align:center}.group-goods-time>span[data-v-75a1e68c]:first-child{width:32%;height:.46666667rem;color:#fff;background:#e4393c;text-align:center}.group-goods-time>span[data-v-75a1e68c]:last-child{width:68%;color:#e4393c}.group-time[data-v-75a1e68c]{text-align:center;height:1.33333333rem;padding:.41333333rem 0;color:#fff;background:url("+e(r("v4VG"))+") no-repeat;background-size:100% 100%}.group-time em[data-v-75a1e68c]{background:#cb080b;display:inline-block;width:.41333333rem;height:.41333333rem;text-align:center;line-height:.44rem;border-radius:5px}",""])},FsJ4:function(t,o,r){t.exports=r.p+"static/img/grounpShare.4f98b04.png"},QeMu:function(t,o,r){var e=r("E/6a");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);r("5ten")("39d9fd23",e,!0,{})},f1rx:function(t,o,r){"use strict";function e(t){r("mxDM")}Object.defineProperty(o,"__esModule",{value:!0});var i=r("gEl0"),s=r.n(i),a=r("FsJ4"),n=r.n(a),p=r("8eqz"),u={data:function(){return{tuangoubg:s.a,grounpShare:n.a,isShowShare:!1,busId:this.$route.params.busId||sessionStorage.getItem("busId"),id:this.$route.params.id,joinId:this.$route.params.joinId,memberId:this.$route.params.memberId,groupObj:null,groupProduct:null,productArr:null,joinList:null,imgUrl:null,Interval:"",times:1,curPage:1,pageCount:1,shopId:0,isMore:2,shareObj:null}},components:{defaultImg:defaultImg,countDown:p.a},watch:{isShowShare:function(t){t?this.commonFn.disableScroll():this.commonFn.allowScroll()}},mounted:function(){this.loadDatas(),this.commonFn.setTitle("团购详情"),this.$store.commit("show_footer",!1);var t=this;$(window).bind("scroll",function(){$(window).scrollTop()>0&&$(window).scrollTop()>=$(document).height()-$(window).height()-1e3&&t.loadMore()})},beforeDestroy:function(){this.$store.commit("show_footer",!0)},methods:{loadDatas:function(){var t=this,o={busId:t.busId,url:location.href,browerType:t.$store.state.browerType,ucLogin:1,id:this.id,joinId:this.joinId,buyerUserId:this.memberId};this.ajaxRequest({url:h5App.activeAPI.goupbuy_detail_post,data:o,success:function(o){var r=o.data;t.groupObj=r,t.groupProduct=r.productMap,t.times=t.groupProduct.times,t.imgUrl=o.imgUrl,t.joinList=r.joinList,t.shopId=t.groupProduct.shopId,t.getWxShare(r),t.productAjax()}})},getWxShare:function(t){var o={title:t.title,desc:t.describe,url:location.href,imgUrl:this.imgUrl+t.productMap.imageUrl,isOpenAllMenu:!0,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage"]};this.shareObj=o},loadMore:function(){var t=this.pageCount;if(this.curPage>=t)return void(this.isMore=3);2!=this.isMore&&(this.curPage++,this.isMore=2,this.productAjax(this.curPage))},productAjax:function(t){var o=this;if(0!=o.shopId){var r={url:o.$store.state.loginDTO_URL,browerType:o.$store.state.browerType,ucLogin:1,shopId:o.shopId,busId:o.busId,type:1,curPage:t||1};this.ajaxRequest({status:!1,url:h5App.activeAPI.phoneProduct_productAll_post,data:r,success:function(t){if(1==t.code)return o.subList=[],void $(window).unbind("scroll");o.curPage=t.data.productList.curPage,o.pageCount=t.data.productList.pageCount;var r=t.data.productList.subList;1===o.curPage?o.productArr=r:o.productArr=o.productArr.concat(r)||[],o.isMore=1,o.curPage>=o.pageCount&&($(window).unbind("scroll"),o.isMore=3)}})}},toSubmitOrder:function(){var t=this.groupProduct,o=(t.shopId,this),r=(this.goodsData,{productId:t.id,busId:this.busId,productNum:1,price:t.price,type:1,activityId:this.id,joinActivityId:this.joinId});null!=t.specificaIds&&(r.productSpecificas=t.specificaIds),null!=t.invId&&(r.invId=t.id),o.ajaxRequest({url:h5App.activeAPI.liji_buy_post,data:r,success:function(t){sessionStorage.setItem("payUrl",location.href),o.$router.push("/order/settlement/"+o.busId+"/2")}})},moreGroupbuy:function(){var t=this.groupProduct.shopId,o=this.busId;this.$router.push("/classify/"+t+"/"+o+"/1/k=k")},toOrderDetail:function(){var t=this.busId,o=this.groupObj.orderId;this.$router.push("/order/detail/"+t+"/"+o)},toProductDetail:function(t,o,r,e){this.$router.push("/goods/details/"+o+"/"+r+"/1/"+t+"/"+e)}}},d=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"shop-wrapper group-wapper"},[null!=t.groupProduct?r("section",{staticClass:"group-main"},[r("div",{staticClass:"group-top ",style:{backgroundImage:"url("+t.tuangoubg+")"}},[r("div",{staticClass:"group-img",on:{click:function(o){t.toProductDetail(t.groupProduct.id,t.groupProduct.shopId,t.groupProduct.busId,t.groupObj.groupId)}}},[r("default-img",{attrs:{background:t.imgUrl+t.groupProduct.imageUrl,isHeadPortrait:0}})],1),t._v(" "),r("div",{staticClass:"group-title fs40"},[r("p",{on:{click:function(o){t.toProductDetail(t.groupProduct.id,t.groupProduct.shopId,t.groupProduct.busId,t.groupObj.groupId)}}},[t._v(t._s(t.groupProduct.proName))]),t._v(" "),r("div",{staticClass:"group-price fs36 shop-font"},[t._v("团购价："),r("span",{staticClass:"fs40"},[t._v("￥"+t._s(t._f("moneySplit1")(t.groupProduct.price)))]),t._v("."+t._s(t._f("moneySplit2")(t.groupProduct.price)))])])]),t._v(" "),null!=t.times&&t.times>0?r("count-down",{attrs:{times:t.times,type:3}}):t._e(),t._v(" "),r("div",{staticClass:"group-middle"},[t.groupObj.chaPeopleNum>0&&1==t.groupObj.status?r("div",{staticClass:"group-kaituan border shop-textc fs44 font-weight"},[t._v("\r\n          还差"),r("em",{staticClass:"shop-font"},[t._v(t._s(t.groupObj.chaPeopleNum))]),t._v("人就要开团啦\r\n        ")]):t._e(),t._v(" "),t._l(t.joinList,function(o,e){return null!=t.joinList&&t.joinList.length>0?r("div",{key:e,staticClass:"group-items border shop-box-center"},[r("div",{staticClass:"left "},[r("span",{staticClass:"img"},[r("default-img",{attrs:{background:o.headimgurl,isHeadPortrait:0}})],1),t._v(" "),r("span",{staticClass:"fs40"},[t._v(t._s(o.nickname))]),t._v(" "),1==o.joinType?r("span",{staticClass:"fs40 shop-bg group-bgs"},[t._v("团长")]):t._e()]),t._v(" "),r("div",{staticClass:"right"},[r("span",{staticClass:"fs36"},[t._v(t._s(t._f("format")(o.joinTime))+" 开团")])])]):t._e()}),t._v(" "),t.groupObj.chaPeopleNum>0&&1==t.groupObj.isMember?r("div",{staticClass:"group-join-div"},[r("div",{staticClass:"group-button-yellow fs50",on:{click:function(o){t.isShowShare=!0}}},[t._v("呼唤朋友来参团")])]):t._e()],2)],1):t._e(),t._v(" "),null!=t.productArr?r("section",{staticClass:"group-section"},[r("div",{staticClass:"title-div fs40 font-weight"},[t._v("其他团购")]),t._v(" "),r("div",{staticClass:"group-goods-box clearfix"},t._l(t.productArr,function(o,e){return r("div",{key:e,staticClass:"group-goods",on:{click:function(r){t.toProductDetail(o.id,o.shop_id,t.busId,o.activityId)}}},[r("div",{staticClass:"group-goods-img"},[r("default-img",{attrs:{background:o.image_url,isHeadPortrait:0}})],1),t._v(" "),r("div",{staticClass:"group-goods-text"},[r("p",{staticClass:"fs42 group-names"},[t._v(t._s(o.pro_name))]),t._v(" "),r("p",{staticClass:"shop-font fs32"},[t._v(t._s(o.peopleNum)+"人团：￥"),r("span",{staticClass:"fs40"},[t._v(t._s(t._f("moneySplit1")(o.price)))]),t._v("."+t._s(t._f("moneySplit2")(o.price)))]),t._v(" "),r("count-down",{attrs:{times:o.times,type:2}})],1)])}))]):t._e(),t._v(" "),null!=t.groupObj&&0==t.groupObj.isMember&&1==t.groupObj.status?r("section",{staticClass:"shop-footer-fixed"},[r("div",{staticClass:"goods-footer-botton ui-col-2 fs50 shop-yellow",staticStyle:{color:"#fff"},on:{click:t.moreGroupbuy}},[t._v("\r\n          更多拼团\r\n      ")]),t._v(" "),r("div",{staticClass:"goods-footer-botton ui-col-2 fs50 shop-bg",staticStyle:{color:"#fff"},on:{click:t.toSubmitOrder}},[t._v("\r\n          我也要参团\r\n      ")])]):t._e(),t._v(" "),null!=t.groupObj&&1==t.groupObj.isMember?r("section",{staticClass:"shop-footer-fixed"},[r("div",{staticClass:"goods-footer-botton2 ui-col-2 fs50 shop-yellow",staticStyle:{color:"#fff"},on:{click:t.toOrderDetail}},[t._v("\r\n          查看订单详情\r\n      ")])]):null==t.groupObj||-1!=t.groupObj.status&&-2!=t.groupObj.status?t._e():r("section",{staticClass:"shop-footer-fixed"},[r("div",{staticClass:"goods-footer-botton2 ui-col-2 fs50 shop-yellow",staticStyle:{color:"#fff"}},[t._v("\r\n          "+t._s(t.groupObj.statusMsg)+"\r\n      ")])]),t._v(" "),r("section",{directives:[{name:"show",rawName:"v-show",value:t.isShowShare,expression:"isShowShare"}],staticClass:"grounpShare-main"},[r("div",{staticClass:"grounpShare-bg",style:{backgroundImage:"url("+t.grounpShare+")"}},[r("img",{attrs:{src:t.grounpShare}})]),t._v(" "),r("div",{staticClass:"grounpShare-botton-box"},[r("div",{staticClass:"grounpShare-botton shop-font",on:{click:function(o){t.isShowShare=!1}}},[t._v("\r\n          我知道了\r\n      ")])])]),t._v(" "),r("wx-share",{attrs:{shareData:t.shareObj}})],1)},g=[],c={render:d,staticRenderFns:g},l=c,m=r("X4nt"),h=e,f=m(u,l,!1,h,"data-v-54954400",null);o.default=f.exports},gEl0:function(t,o,r){t.exports=r.p+"static/img/tungoubg.4f70fc1.jpg"},mxDM:function(t,o,r){var e=r("p13n");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);r("5ten")("12d345fd",e,!0,{})},p13n:function(t,o,r){o=t.exports=r("I71c")(!1),o.push([t.i,".group-wapper[data-v-54954400]{width:100%;position:relative;padding-bottom:1rem}.group-wapper .group-main[data-v-54954400]{background:#fff}.group-wapper .group-main .group-top[data-v-54954400]{width:100%;background-size:100% 100%;padding-top:.37333333rem}.group-wapper .group-main .group-top .group-img[data-v-54954400]{width:70vw;height:70vw;margin:0 auto;overflow:hidden}.group-wapper .group-main .group-top .group-title[data-v-54954400]{margin:0 auto;padding:.24rem 0 .4rem;width:70vw;background:#fff;text-align:center;color:#242424;line-height:1}.group-wapper .group-main .group-top .group-price[data-v-54954400]{margin-top:.25333333rem}.group-wapper .group-main .group-middle[data-v-54954400]{width:100%}.group-wapper .group-main .group-middle .group-kaituan[data-v-54954400]{padding:.26666667rem 0}.group-wapper .group-main .group-middle .group-items[data-v-54954400]{height:1.03333333rem;line-height:1}.group-wapper .group-main .group-middle .group-items .left[data-v-54954400],.group-wapper .group-main .group-middle .group-items .right[data-v-54954400]{font-size:0}.group-wapper .group-main .group-middle .group-items .left span[data-v-54954400],.group-wapper .group-main .group-middle .group-items .right span[data-v-54954400]{display:inline-block;vertical-align:middle;margin:0 .06666667rem}.group-wapper .group-main .group-middle .group-items .left .img[data-v-54954400],.group-wapper .group-main .group-middle .group-items .right .img[data-v-54954400]{width:.72rem;height:.72rem;border-radius:100%;overflow:hidden}.group-wapper .group-main .group-middle .group-items .left .group-bgs[data-v-54954400],.group-wapper .group-main .group-middle .group-items .right .group-bgs[data-v-54954400]{border-radius:50px;padding:.1rem .16666667rem}.group-wapper .group-main .group-middle .group-items .left[data-v-54954400]{padding-left:.2rem}.group-wapper .group-main .group-middle .group-items .right[data-v-54954400]{padding-right:.2rem}.group-wapper .group-main .group-middle .group-join-div[data-v-54954400]{width:100%;padding:.2rem 0}.group-wapper .group-main .group-middle .group-join-div .group-button-yellow[data-v-54954400]{width:55%;border-radius:50px;background-color:#ff8522;text-align:center;color:#fff;height:1rem;line-height:1rem;margin:0 auto}.group-wapper .group-section .title-div[data-v-54954400]{text-align:center;padding:.48rem 0 .44rem}.group-wapper .group-section .group-goods-box[data-v-54954400]{width:100%;padding:0 .04666667rem}.group-wapper .group-section .group-goods-box>div[data-v-54954400]:nth-of-type(2n){margin-right:0}.group-wapper .group-section .group-goods[data-v-54954400]{float:left;width:49.5%;margin-right:.06666667rem;margin-bottom:.1rem;background:#fff}.group-wapper .group-section .group-goods .group-goods-img[data-v-54954400]{margin:2px auto 0;width:3.6rem;height:3.6rem;overflow:hidden}.group-wapper .group-section .group-goods .group-goods-text[data-v-54954400]{width:100%;padding:.13333333rem;padding-bottom:.1rem;line-height:1}.group-wapper .group-section .group-goods .group-goods-text p[data-v-54954400]:first-child{margin-bottom:.4rem;height:.66666667rem}.font-weight[data-v-54954400]{font-weight:bolder}.shop-footer-fixed[data-v-54954400]{width:100%;z-index:2;max-width:8.28rem;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-pack:justify;-o-box-pack:justify;box-pack:justify}.shop-footer-fixed .goods-footer-botton2[data-v-54954400],.shop-footer-fixed .goods-footer-botton[data-v-54954400]{width:50%;height:.9rem;text-align:center;line-height:.9rem}.shop-footer-fixed .goods-footer-botton2[data-v-54954400]{width:100%!important}.grounpShare-main[data-v-54954400]{position:fixed;width:100%;height:100%;background:rgba(0,0,0,.5);top:0;left:0;z-index:11}.grounpShare-main .grounpShare-bg[data-v-54954400]{background-size:100% 100%}.grounpShare-main .grounpShare-bg img[data-v-54954400]{width:100%;height:auto;opacity:0}.grounpShare-main .grounpShare-botton-box[data-v-54954400]{width:100%;position:absolute;bottom:1.95333333rem}.grounpShare-main .grounpShare-botton[data-v-54954400]{margin:0 auto;width:2.76666667rem;border:.06666667rem solid #f9ddab;padding:.33333333rem;line-height:1;border-radius:50px;background:#fff7e9;font-size:.45333333rem}",""])},v4VG:function(t,o,r){t.exports=r.p+"static/img/tuangou_bg2.dcba580.jpg"}});