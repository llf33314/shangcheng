webpackJsonp([40],{HhnV:function(t,i,e){t.exports=e.p+"static/img/myHbg.1912273.png"},LTmU:function(t,i,e){var n=e("cI96");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("5ten")("7c9e3656",n,!0,{})},YdGV:function(t,i,e){var n=e("ef4Z");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("5ten")("7d7b52d3",n,!0,{})},YiE7:function(t,i,e){"use strict";function n(t){e("YdGV")}Object.defineProperty(i,"__esModule",{value:!0});var o=e("Z/74"),a=e("kr9m"),s={name:"my",data:function(){return{busId:this.$route.params.busId||sessionStorage.getItem("busId"),isNavshow:"my",myData:null,memberName:Language.unknown_user_msg,isOpenPf:!1,isOpenSeller:!1,background:null,isLogin:0}},components:{footerNav:o.a,defaultImg:a.a},mounted:function(){this.commonFn.setTitle(Language.title_my_msg),this.loads()},methods:{toLogin:function(){0==this.isLogin&&this.$parent.isLogin(this.busId)},loads:function(){var t=this;t.$store.state.busId=t.busId;var i={busId:t.busId,url:location.href,browerType:t.$store.state.browerType,ucLogin:1};t.ajaxRequest({url:h5App.activeAPI.my_center_post,data:i,success:function(i){var e=i.data;t.myData=e,null!=e.memberName&&(t.memberName=e.memberName),null!=e.memberImageUrl&&(t.background=e.memberImageUrl),1==e.isOpenPf&&(t.isOpenPf=!0),1==e.isOpenSeller&&(t.isOpenSeller=!0),t.isLogin=e.isLogin}})},sellerShow:function(){var t=this,i=t.myData,e=i.sellerStatus,n=!1,o={dialogTitle:Language.seller_tishi_msg,dialogMsg:i.sellerErrorMsg},a="-2"==e||"-4"==e||"-1"==e,s=i.minCosumeMoney>0&&i.consumeMoney>0&&i.minCosumeMoney>i.consumeMoney;a?s?(o.btnNum=1,n=!0):"-1"==e?(o.btnNum=1,n=!0):t.returnApplySeller():"0"==e||"-3"==e?(o.btnNum=1,n=!0):"1"==e&&t.returnSellerIndex(),n&&t.$parent.$refs.dialog.showDialog(o)},pifaShow:function(){var t=this,i=t.myData,e=i.pfStatus,n=!1,o={dialogTitle:Language.pifa_tishi_msg,dialogMsg:i.pfErrorMsg};"-2"==e?t.returnApplyPifa():"0"==e?(o.btnNum=1,n=!0):"1"==e?t.returnPifaAll():-1==e&&(o.btnNum=2,o.callback={btnOne:t.returnPifaAll},n=!0),n&&t.$parent.$refs.dialog.showDialog(o)},returnApplySeller:function(){this.$router.push("/seller/apply/"+this.busId)},returnSellerIndex:function(){this.$router.push("/seller/index/"+this.busId)},returnApplyPifa:function(){this.$router.push("/wholesale/apply/"+this.busId)},returnPifaAll:function(){var t=sessionStorage.getItem("shopId"),i=this.busId;if(null==t||""==t)return void getShopId();this.$router.push("/classify/"+t+"/"+i+"/7/k=k")},returnMyOrder:function(t){this.$router.push("/order/list/"+this.busId+"/"+t)},returnRefundOrder:function(){this.$router.push("/return/list/"+this.busId)},toReturnMyComment:function(){this.$router.push("/my/comment/"+this.busId)},toAuction:function(){var t=this.busId;this.$router.push("/auction/myBidding/"+t+"/1")},toDeposit:function(){var t=this.busId;this.$router.push("/presale/myDeposit/"+t+"/1")},toCollect:function(){var t=this.busId;this.$router.push("/my/collect/"+t)},getShopId:function(t){var i=this;i.ajaxRequest({url:h5App.activeAPI.get_shop_id_post,data:{busId:t},success:function(t){var e=t.data;return null!=e&&""!=e&&void 0!==e&&(sessionStorage.setItem("shopId",e),i.$store.commit("mutationData",{shopId:e}),i.returnPifaAll()),e}})},memberCenter:function(t){var i=this.busId;this.$parent.getMemberCenter(i,t)}}},r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"shop-wrapper "},[e("section",{staticClass:"shop-main fs40 my-index",class:{"margin-bottom-clear":!t.$store.state.isShowFooter}},[e("div",{staticClass:"my-header shop-bg",on:{click:t.toLogin}},[e("div",{staticClass:"my-indexUser"},[e("default-img",{attrs:{background:t.background,isHeadPortrait:1}})],1),t._v(" "),e("p",{staticClass:"fs46"},[t._v(t._s(t.memberName))])]),t._v(" "),e("div",{staticClass:"my-content fs46"},[e("div",{staticClass:"my-order"},[e("div",{staticClass:"my-list border",on:{click:function(i){t.returnMyOrder(0)}}},[t._m(0),t._v(" "),t._m(1)]),t._v(" "),e("ul",{staticClass:"my-nav fs36"},[e("li",{on:{click:function(i){t.returnMyOrder(1)}}},[e("i",{staticClass:"iconfont icon-zhifu"}),t._v(" "),e("p",[t._v("待支付")])]),t._v(" "),e("li",{on:{click:function(i){t.returnMyOrder(2)}}},[e("i",{staticClass:"iconfont icon-daifahuo"}),t._v(" "),e("p",[t._v("待发货")])]),t._v(" "),e("li",{on:{click:function(i){t.returnMyOrder(3)}}},[e("i",{staticClass:"iconfont icon-daishouhuo"}),t._v(" "),e("p",[t._v("待收货")])]),t._v(" "),e("li",{on:{click:function(i){t.returnMyOrder(5)}}},[e("i",{staticClass:"iconfont icon-daipingjia"}),t._v(" "),e("p",[t._v("待评价")])]),t._v(" "),e("li",{on:{click:function(i){t.returnRefundOrder()}}},[e("i",{staticClass:"iconfont icon-tuikuan"}),t._v(" "),e("p",[t._v("退款/售后")])])])]),t._v(" "),e("div",{staticClass:"my-path"},[e("div",{staticClass:"my-list border",on:{click:function(i){t.memberCenter(1)}}},[t._m(2),t._v(" "),t._m(3)]),t._v(" "),e("div",{staticClass:"my-list border",on:{click:function(i){t.memberCenter(2)}}},[t._m(4),t._v(" "),t._m(5)]),t._v(" "),e("div",{staticClass:"my-list border",on:{click:t.toReturnMyComment}},[t._m(6),t._v(" "),t._m(7)]),t._v(" "),e("div",{staticClass:"my-list border",on:{click:t.toCollect}},[t._m(8),t._v(" "),t._m(9)])]),t._v(" "),e("div",{staticClass:"my-path"},[e("div",{staticClass:"my-list border",on:{click:t.toAuction}},[t._m(10),t._v(" "),t._m(11)]),t._v(" "),e("div",{staticClass:"my-list border",on:{click:function(i){t.returnMyOrder(8)}}},[t._m(12),t._v(" "),t._m(13)]),t._v(" "),t.isOpenPf?e("div",{staticClass:"my-list border",on:{click:function(i){t.pifaShow()}}},[t._m(14),t._v(" "),t._m(15)]):t._e(),t._v(" "),e("div",{staticClass:"my-list border",on:{click:function(i){t.returnMyOrder(7)}}},[t._m(16),t._v(" "),t._m(17)]),t._v(" "),e("div",{staticClass:"my-list border",on:{click:t.toDeposit}},[t._m(18),t._v(" "),t._m(19)]),t._v(" "),t.isOpenSeller?e("div",{staticClass:"my-list border",on:{click:function(i){t.sellerShow()}}},[t._m(20),t._v(" "),t._m(21)]):t._e()])]),t._v(" "),1==t.$store.state.isAdvert?e("technical-support"):t._e()],1)])},c=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("i",{staticClass:"iconfont icon-order"}),t._v("\n                      我的订单\n                  ")])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"my-right fs32"},[t._v("\n                      查看全部订单\n                      "),e("i",{staticClass:"iconfont icon-jiantou-copy"})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("i",{staticClass:"iconfont icon-8"}),t._v("\n                      我的会员\n                  ")])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"my-right fs32"},[e("i",{staticClass:"iconfont icon-jiantou-copy"})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("i",{staticClass:"iconfont icon-youhuiquan"}),t._v("\n                      我的优惠券\n                  ")])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"my-right fs32"},[e("i",{staticClass:"iconfont icon-jiantou-copy"})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("i",{staticClass:"iconfont icon-daipingjia"}),t._v("\n                      我的评价\n                  ")])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"my-right fs32"},[e("i",{staticClass:"iconfont icon-jiantou-copy"})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("i",{staticClass:"iconfont icon-fav"}),t._v("\n                      我的收藏\n                  ")])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"my-right fs32"},[e("i",{staticClass:"iconfont icon-jiantou-copy"})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("i",{staticClass:"iconfont icon-jingpai"}),t._v("\n                      我的竞拍\n                  ")])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"my-right fs32"},[e("i",{staticClass:"iconfont icon-jiantou-copy"})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("i",{staticClass:"iconfont icon-miaoshaweixuanzhong"}),t._v("\n                      我的秒杀\n                  ")])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"my-right fs32"},[e("i",{staticClass:"iconfont icon-jiantou-copy"})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("i",{staticClass:"iconfont icon-pifaguize"}),t._v("\n                      我的批发\n                  ")])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"my-right fs32"},[e("i",{staticClass:"iconfont icon-jiantou-copy"})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("i",{staticClass:"iconfont icon-tuangou"}),t._v("\n                      我的团购\n                  ")])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"my-right fs32"},[e("i",{staticClass:"iconfont icon-jiantou-copy"})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("i",{staticClass:"iconfont icon-daishouchanpin"}),t._v("\n                      我的预售\n                  ")])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"my-right fs32"},[e("i",{staticClass:"iconfont icon-jiantou-copy"})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("i",{staticClass:"iconfont icon-jingjiren"}),t._v("\n                      超级销售员\n                  ")])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"my-right fs32"},[e("i",{staticClass:"iconfont icon-jiantou-copy"})])}],l={render:r,staticRenderFns:c},d=l,u=e("X4nt"),m=n,f=u(s,d,!1,m,"data-v-7efb7997",null);i.default=f.exports},cI96:function(t,i,e){i=t.exports=e("I71c")(!1),i.push([t.i,".ik-box[data-v-717623a4]{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.box-sizing[data-v-717623a4]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.text-overflow[data-v-717623a4]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.imgbox[data-v-717623a4],.user-head-portrait[data-v-717623a4]{width:100%;height:100%;position:relative}.user-head-portrait[data-v-717623a4]{background-size:100%;background-repeat:no-repeat;background-position:50%;z-index:1}.default-img1[data-v-717623a4],.default-img2[data-v-717623a4]{width:100%;height:100%;position:absolute;top:0;left:0;z-index:0;line-height:1;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-pack:center;-o-box-pack:center;box-pack:center;-webkit-box-align:center;-o-box-align:center;box-align:center}.default-img1 .iconfont[data-v-717623a4],.default-img2 .iconfont[data-v-717623a4]{font-size:1.33333333rem;color:#d6d6d6}.default-img2[data-v-717623a4]{background:#eee}.default-img2 .iconfont[data-v-717623a4]{font-size:1rem;color:#cecece}",""])},ef4Z:function(t,i,e){var n=e("gbsh");i=t.exports=e("I71c")(!1),i.push([t.i,".ik-box[data-v-7efb7997]{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.box-sizing[data-v-7efb7997]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.text-overflow[data-v-7efb7997]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.my-index[data-v-7efb7997]{width:100%;color:#666;padding-bottom:.98666667rem}.my-index .my-header[data-v-7efb7997]{width:100%;height:3.46666667rem;background-image:url("+n(e("HhnV"))+");background-size:cover;background-repeat:no-repeat;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-align:center;-o-box-align:center;box-align:center;-webkit-box-pack:center;-o-box-pack:center;box-pack:center;-webkit-box-orient:vertical;-o-box-orient:vertical;box-orient:vertical;color:#fff}.my-index .my-header .my-indexUser[data-v-7efb7997]{font-size:0;width:1.4rem;height:1.4rem;border-radius:100%;border:.04rem solid #fff;overflow:hidden;color:transparent;margin-bottom:.16666667rem}.my-index .my-order[data-v-7efb7997]{background:#fff;margin-bottom:.2rem}.my-index .my-order .my-list[data-v-7efb7997]{line-height:1;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-align:center;-o-box-align:center;box-align:center;-webkit-box-pack:justify;-o-box-pack:justify;box-pack:justify;height:.9rem;padding:0 .37333333rem}.my-index .my-order .my-list i[data-v-7efb7997]{font-size:.45333333rem}.my-index .my-order .my-list .my-right[data-v-7efb7997]{color:#9e9e9e}.my-index .my-order .my-list .my-right i[data-v-7efb7997]{font-size:.24rem;color:#d7d7db}.my-index .my-order .my-nav[data-v-7efb7997]{display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-pack:justify;-o-box-pack:justify;box-pack:justify;padding:0 .23333333rem;color:#666}.my-index .my-order .my-nav li[data-v-7efb7997]{text-align:center;width:20%;padding:.36666667rem 0}.my-index .my-order .my-nav li i[data-v-7efb7997]{font-size:.45333333rem}.my-index .my-path[data-v-7efb7997]{width:100%;background:#fff;margin-bottom:.13333333rem}.my-index .my-path .my-list[data-v-7efb7997]{display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-align:center;-o-box-align:center;box-align:center;-webkit-box-pack:justify;-o-box-pack:justify;box-pack:justify;height:.9rem;padding:0 .37333333rem}.my-index .my-path .my-list i[data-v-7efb7997]{font-size:.45333333rem;vertical-align:-.05rem}.my-index .my-path .my-list .my-right[data-v-7efb7997]{font-size:.3rem;color:#d7d7db}.margin-bottom-clear[data-v-7efb7997]{margin-bottom:0!important}",""])},kr9m:function(t,i,e){"use strict";function n(t){e("LTmU")}var o={props:["background","isHeadPortrait","size"],data:function(){return{}},mounted:function(){}},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"imgbox"},[e("div",{staticClass:"user-head-portrait",style:{backgroundImage:"url("+t.background+")"}}),t._v(" "),0==t.isHeadPortrait?e("div",{staticClass:"default-img1"},[e("i",{staticClass:"iconfont icon-tupianjiazaizhong-",style:{"font-size":t.size}})]):t._e(),t._v(" "),1==t.isHeadPortrait?e("div",{staticClass:"default-img2"},[e("i",{staticClass:"iconfont icon-ren1",style:{"font-size":t.size}})]):t._e()])},s=[],r={render:a,staticRenderFns:s},c=r,l=e("X4nt"),d=n,u=l(o,c,!1,d,"data-v-717623a4",null);i.a=u.exports}});