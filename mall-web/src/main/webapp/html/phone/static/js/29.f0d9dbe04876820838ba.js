webpackJsonp([29],{"23Jn":function(t,e,a){"use strict";function o(t){a("wrLE")}var n={props:["statu","errorMsg"],data:function(){return{msg:"您还没有相关的订单"}},mounted:function(){null!=this.errorMsg&&(this.msg=this.errorMsg)},methods:{lockMall:function(){var t=this.$route.params.busId;this.$parent.getMemberCenter(t,1)}}},s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shop-main-no"},[a("div",{staticClass:"shop-no-content"},[1==t.statu?a("div",{staticClass:"no-order"},[t._m(0),t._v(" "),a("p",{staticClass:"fs52"},[t._v(t._s(t.msg))]),t._v(" "),a("a",{staticClass:"fs36",on:{click:t.lockMall}},[t._v(" 可以去逛逛哦~")])]):t._e(),t._v(" "),2==t.statu?a("div",{staticClass:"no-news"},[t._m(1),t._v(" "),a("a",{staticClass:"fs36"},[t._v(" 暂无相关信息")])]):t._e(),t._v(" "),3==t.statu?a("div",{staticClass:"no-shopcart"},[t._m(2),t._v(" "),a("p",{staticClass:"fs36 shopGray shop-textc"},[t._v("您的购物车还没有任何商品")]),t._v(" "),a("span",{staticClass:"no-button shopborder fs36",on:{click:t.lockMall}},[t._v("去逛逛")])]):t._e(),t._v(" "),4==t.statu?a("div",{staticClass:"no-shopcart"},[t._m(3),t._v(" "),a("a",{staticClass:"fs42",staticStyle:{color:"#333"}},[t._v(" "+t._s(t.errorMsg||"暂无相关信息"))])]):t._e()])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shop-no-icon"},[a("i",{staticClass:"iconfont icon-order"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shop-no-icon"},[a("i",[t._v("!")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shop-no-icon"},[a("i",[t._v("!")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shop-no-icon2"},[a("i",{staticClass:"icon-zanwudizhi iconfont"})])}],r={render:s,staticRenderFns:i},c=r,d=a("X4nt"),l=o,p=d(n,c,!1,l,"data-v-940b8da6",null);e.a=p.exports},B5GA:function(t,e,a){"use strict";function o(t){a("IHsI")}Object.defineProperty(e,"__esModule",{value:!0});var n=a("fOec"),s=a("23Jn"),i=(a("b7Ca"),{name:"agreement",data:function(){return{homeNav:[{id:1,name:"抢拍记录"},{id:2,name:"卖家承诺"},{id:3,name:"保证金须知"}],busId:this.$route.params.busId||sessionStorage.getItem("busId"),aucId:this.$route.params.aucId,type:this.$route.params.type,bidArr:null,statu:2,isShowNo:!1}},components:{headerNav:n.a,contentNo:s.a},mounted:function(){this.$store.commit("show_footer",!1),this.load()},beforeDestroy:function(){this.$store.commit("show_footer",!0)},watch:{$route:function(){this.load()}},methods:{load:function(){var t=this.$route.params.type;this.type=t,1==t&&this.loadBind(),this.commonFn.setTitle(this.homeNav[this.type-1].name)},handleChange:function(t){var e=this.busId,a=this.aucId;this.type=t,this.$router.push("/auction/notice/"+e+"/"+a+"/"+t)},loadBind:function(){var t=this,e={busId:t.busId,url:location.href,browerType:t.$store.state.browerType,auctionId:this.aucId,ucLogin:1};t.ajaxRequest({url:h5App.activeAPI.get_bid_post,data:e,success:function(e){var a=e.data;return null==a?void(t.isShowNo=!0):null==a.offerList||0==a.offerList.length?void(t.isShowNo=!0):void(t.bidArr=a.offerList)}})}}}),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shop-wrapper  auction-wrapper"},[a("div",{staticClass:"agreement-main"},[a("section",{staticClass:"agreement-content"},[a("header-nav",{staticStyle:{"z-index":"3"},attrs:{headers:t.homeNav},on:{change:t.handleChange}}),t._v(" "),1==t.type&&null!=t.bidArr?a("div",{staticClass:"agreement-top2"},[t._m(0),t._v(" "),t._l(t.bidArr,function(e,o){return a("div",{key:o,staticClass:"bid-div border  shop-box-center bg-white"},[a("p",{staticClass:"fs40 p-20 text-overflow"},[t._v(t._s(e.id))]),t._v(" "),a("p",{staticClass:"fs40 p-20 text-overflow"},[t._v("￥"+t._s(e.offerMoney))]),t._v(" "),a("p",{staticClass:"fs40 p-20 text-overflow"},[t._v(t._s(e.nickname))]),t._v(" "),a("p",{staticClass:"fs40 p-40 text-overflow"},[t._v(t._s(t._f("formatNotM")(e.createTime)))])])})],2):t._e(),t._v(" "),2==t.type?a("div",{staticClass:"agreement-top"},[a("p",{staticClass:"agreement-h1 fs40 "},[t._v("卖家承诺：")]),t._v(" "),a("div",{staticClass:"agreement-txt fs40"},[t._v("\r\n                一、服务承诺\r\n                ")]),t._v(" "),a("div",{staticClass:"agreement-txt fs40"},[t._v("\r\n                A.商家承诺\r\n                ")]),t._v(" "),a("p",{staticClass:"agreement-txt fs40"},[t._v("\r\n                1.卖家承诺所发拍品均为真品。\r\n                ")]),t._v(" "),a("div",{staticClass:"agreement-txt fs40"},[t._v("\r\n               2.卖家成交不卖，卖家应将保证金退一赔一给竞买成功人\r\n                ")]),t._v(" "),a("div",{staticClass:"agreement-txt fs40"},[t._v("\r\n                二、竞拍活动基础服务\r\n                ")]),t._v(" "),a("div",{staticClass:"agreement-txt fs40"},[t._v("\r\n                1.保证金保障，卖家入驻竞拍平台需缴纳较高的经营保证金，\r\n买家维权有保障\r\n                ")]),t._v(" "),a("p",{staticClass:"agreement-txt fs40"},[t._v("\r\n                三、拍卖特色服务\r\n                ")]),t._v(" "),a("div",{staticClass:"agreement-txt fs40"},[t._v("\r\n               A、支持线下预览\r\n                ")]),t._v(" "),a("div",{staticClass:"agreement-txt fs40"},[t._v("\r\n               支持线下预览是指卖家已选定场地预展拍品。竞买人可在竞\r\n拍结束前，亲自或委托他人查看竞拍品实物\r\n                ")])]):t._e(),t._v(" "),3==t.type?a("div",{staticClass:"agreement-top"},[a("p",{staticClass:"agreement-h1 fs40 "},[t._v("保证金须知：")]),t._v(" "),a("div",{staticClass:"agreement-txt fs40"},[t._v("\r\n                一、凡是2015年1月1日后进入交易中心进行招投标活动的 项目，投标保证金的缴纳、退还全部实行网上提交。\r\n                ")]),t._v(" "),a("div",{staticClass:"agreement-txt fs40"},[t._v("\r\n                    二、招标代理机构及招标人在编制公告时必须将《保证金管 理系统使用指南》作为公告内容之一，并提示投标人通过保 证金管理系统进行网\r\n                ")]),t._v(" "),a("p",{staticClass:"agreement-txt fs40"},[t._v("\r\n                三、投标人应认真阅读《保证金管理系统使用指南》，熟悉 系统操作流程，以免因错误操作造成投标无效，《保证金管 理系统使用指南》详\r\n\r\n                ")]),t._v(" "),a("div",{staticClass:"agreement-txt fs40"},[t._v("\r\n                四、为提高保证金管理系统的保密性、安全性与公正性，系 统登陆与使用采用数字证书CA认证方式。因此，各投标人 在使用系统前应先行\r\n保证金须知：\r\n                ")])]):t._e(),t._v(" "),t.isShowNo?a("content-no",{attrs:{statu:t.statu}}):t._e()],1),t._v(" "),a("section",{staticClass:"shop-footer  shop-footer-fixed"},[1==t.$store.state.isAdvert?a("technical-support"):t._e()],1)])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bid-div border  shop-box-center"},[a("p",{staticClass:"fs40 p-20"},[t._v("状态")]),t._v(" "),a("p",{staticClass:"fs40 p-20"},[t._v("价格")]),t._v(" "),a("p",{staticClass:"fs40 p-20"},[t._v("竞拍人")]),t._v(" "),a("p",{staticClass:"fs40 p-40"},[t._v("时间")])])}],d={render:r,staticRenderFns:c},l=d,p=a("X4nt"),v=o,h=p(i,l,!1,v,"data-v-fdc6b334",null);e.default=h.exports},CFWE:function(t,e,a){var o=a("T1s/");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("5ten")("2604cc15",o,!0,{})},GfGH:function(t,e,a){e=t.exports=a("I71c")(!1),e.push([t.i,".ik-box[data-v-940b8da6]{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.box-sizing[data-v-940b8da6]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.text-overflow[data-v-940b8da6]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.shop-main-no[data-v-940b8da6]{padding:2.65333333rem 0 1.66666667rem}.shop-main-no .shop-no-content[data-v-940b8da6]{width:100%;text-align:center;line-height:1;font-size:0}.shop-main-no .shop-no-content .shop-no-icon[data-v-940b8da6]{width:1.43333333rem;height:1.43333333rem;border-radius:100%;background:#d1d2d4;margin:0 auto;margin-bottom:.66666667rem;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-align:center;-o-box-align:center;box-align:center;-webkit-box-pack:center;-o-box-pack:center;box-pack:center}.shop-main-no .shop-no-content .shop-no-icon i[data-v-940b8da6]{color:#fff;font-size:1rem}.shop-main-no .shop-no-content .shop-no-icon2[data-v-940b8da6]{width:1.43333333rem;height:1.43333333rem;margin:0 auto;margin-bottom:.66666667rem;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-align:center;-o-box-align:center;box-align:center;-webkit-box-pack:center;-o-box-pack:center;box-pack:center}.shop-main-no .shop-no-content .shop-no-icon2 i[data-v-940b8da6]{color:#d1d2d4!important;font-size:1.18666667rem}.shop-main-no .shop-no-content p[data-v-940b8da6]{margin-bottom:.33333333rem}.shop-main-no .shop-no-content a[data-v-940b8da6]{color:#999}.shop-main-no .shop-no-content .no-button[data-v-940b8da6]{display:inline-block;padding:.13333333rem .2rem;border-radius:6px}.shop-main-no .shop-no-content .no-shopcart[data-v-940b8da6]{width:100%}.shop-main-no .shop-no-content .no-shopcart .shop-no-icon[data-v-940b8da6]{background:0;border:1px solid #7a7e83}.shop-main-no .shop-no-content .no-shopcart i[data-v-940b8da6]{color:#7a7e83;font-weight:100}",""])},IHsI:function(t,e,a){var o=a("MgA7");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("5ten")("7f54d699",o,!0,{})},MgA7:function(t,e,a){e=t.exports=a("I71c")(!1),e.push([t.i,".ik-box[data-v-fdc6b334]{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.box-sizing[data-v-fdc6b334]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.text-overflow[data-v-fdc6b334]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.auction-wrapper[data-v-fdc6b334]{width:100%;position:relative}.agreement-main[data-v-fdc6b334]{width:100%;position:relative;padding-bottom:1.06666667rem}.agreement-main .agreement-content[data-v-fdc6b334]{width:100%;height:85vh;background-color:#fff}.agreement-main .agreement-content .agreement-h1[data-v-fdc6b334]{width:100%;margin:.33333333rem 0}.agreement-main .agreement-content .agreement-top[data-v-fdc6b334]{padding:.98666667rem .2rem}.agreement-main .agreement-content .agreement-top .agreement-txt[data-v-fdc6b334]{text-align:justify;margin-bottom:.33333333rem}.agreement-main .agreement-top2[data-v-fdc6b334]{width:100%;padding-top:.98666667rem}.agreement-main .agreement-top2 .bid-div[data-v-fdc6b334]{width:100%;background-color:#ccc;line-height:1;padding:.2rem}.agreement-main .agreement-top2 .bid-div .p-20[data-v-fdc6b334]{width:20%}.agreement-main .agreement-top2 .bid-div .p-40[data-v-fdc6b334]{width:38%}.agreement-main .agreement-top2 .bg-white[data-v-fdc6b334]{background-color:#fff!important}.agreement-main .shop-footer[data-v-fdc6b334]{width:100%}",""])},"T1s/":function(t,e,a){e=t.exports=a("I71c")(!1),e.push([t.i,".ik-box[data-v-91ea153c]{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.box-sizing[data-v-91ea153c]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.text-overflow[data-v-91ea153c]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.shop-header[data-v-91ea153c]{top:0}.shop-header .header-nav[data-v-91ea153c]{height:.98666667rem}.shop-header .header-nav em[data-v-91ea153c]{height:.04rem;width:100%;position:absolute;bottom:0;display:none}.shop-header[data-v-91ea153c]{position:fixed;width:100%;background:#fff}.shop-header .header-nav .header-itme[data-v-91ea153c],.shop-header .header-nav[data-v-91ea153c]{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.shop-header .header-nav .header-itme[data-v-91ea153c]{position:relative;-webkit-box-align:center;-o-box-align:center;box-align:center;-webkit-box-pack:center;-o-box-pack:center;box-pack:center;-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-webkit-box-orient:vertical;-o-box-orient:vertical;box-orient:vertical}.shop-header .header-nav a[data-v-91ea153c]{display:block;text-align:center}.style-main-font em[data-v-91ea153c]{display:block!important}",""])},b7Ca:function(t,e,a){"use strict";var o=a("VCXJ");o.default.filter("currency",function(t){var e=parseFloat(t);if(isNaN(t))return!1;e=Math.round(100*t)/100;var a=e.toString(),o=a.indexOf(".");for(a=parseFloat(a).toLocaleString(),o<0&&(o=a.length,a+=".");a.length<=o+2;)a+="0";return a}),o.default.filter("format",function(t){var e=function(t){return t<10?"0"+t:t},a=new Date(t),o=a.getFullYear(),n=a.getMonth()+1,s=a.getDate(),i=a.getHours(),r=a.getMinutes(),c=a.getSeconds();return o+"-"+e(n)+"-"+e(s)+" "+e(i)+":"+e(r)+":"+e(c)}),o.default.filter("formatNot",function(t){var e=function(t){return t<10?"0"+t:t},a=new Date(t),o=a.getFullYear(),n=a.getMonth()+1,s=a.getDate();return o+"-"+e(n)+"-"+e(s)}),o.default.filter("formatNotM",function(t){var e=function(t){return t<10?"0"+t:t},a=new Date(t),o=a.getFullYear(),n=a.getMonth()+1,s=a.getDate(),i=a.getHours(),r=a.getMinutes();return o+"-"+e(n)+"-"+e(s)+" "+e(i)+":"+e(r)}),o.default.filter("moneySplit1",function(t){var e=[],a=t+"";return e=-1==a.indexOf(".")?[t,"00"]:a.split("."),e[0]=parseFloat(e[0]).toLocaleString(),e[0]}),o.default.filter("moneySplit2",function(t){var e=[],a=t+"";return e=-1==a.indexOf(".")?[t,"00"]:a.split("."),e[0]=parseFloat(e[0]).toLocaleString(),e[1]}),o.default.filter("toString",function(t){return void 0===t||"undefined"==t?"":t}),o.default.filter("toInteger",function(t){return void 0===t||"undefined"==t||null==t||""==t?0:1*t})},fOec:function(t,e,a){"use strict";function o(t){a("CFWE")}var n={props:["headers","status","selectColor","selectbg"],data:function(){return{selectNav:"",selectFontColor:"shop-font"}},mounted:function(){this.selectNav=this.$route.params.type||0,this.selectFontColor=this.selectColor||"shop-font"},watch:{$route:function(){this.selectNav=this.$route.params.type||0}},methods:{selects:function(t){if(-1!=t){this.selectNav=t;var e=this.$route.params.busId,a=this.$route.params.shopId;return"order"===this.status?void this.$router.push("/order/list/"+e+"/"+t):"cart"===this.status?void this.$router.push("/cart/"+a+"/"+e+"/"+t):void this.onValue(t)}},onValue:function(t){this.$emit("change",t)}}},s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shop-header"},[a("div",{staticClass:"header-nav fs42"},t._l(t.headers,function(e){return a("div",{key:e.id,staticClass:"header-itme",class:[e.id==t.selectNav?t.selectFontColor:""],on:{click:function(a){t.selects(e.id)}}},[a("p",{domProps:{textContent:t._s(e.name)}}),t._v(" "),a("em",{class:[t.selectbg?t.selectbg:"shop-bg"]})])}))])},i=[],r={render:s,staticRenderFns:i},c=r,d=a("X4nt"),l=o,p=d(n,c,!1,l,"data-v-91ea153c",null);e.a=p.exports},wrLE:function(t,e,a){var o=a("GfGH");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("5ten")("272d308f",o,!0,{})}});