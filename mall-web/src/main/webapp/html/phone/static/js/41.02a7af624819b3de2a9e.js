webpackJsonp([41],{"+xge":function(e,a,t){var r=t("s+P6");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t("5ten")("00f2acd7",r,!0,{})},lqXV:function(e,a,t){"use strict";function r(e){t("+xge")}Object.defineProperty(a,"__esModule",{value:!0});var s={data:function(){return{type:this.$route.params.type,busId:this.$route.params.busId||sessionStorage.getItem("busId"),qrCodePath:null,imageUrl:null,headImageUrl:null,imgUrl:null,shareObj:null}},components:{defaultImg:defaultImg},mounted:function(){this.commonFn.setTitle("推广海报"),this.$store.commit("show_footer",!1),this.loadDatas()},beforeDestroy:function(){this.$store.commit("show_footer",!0)},methods:{loadDatas:function(e){var a=this,t={busId:a.busId,url:location.href,browerType:a.$store.state.browerType};a.ajaxRequest({url:h5App.activeAPI.seller_promotion_post,data:t,success:function(e){var t=e.data;a.imgUrl=e.imgUrl,a.imageUrl=t.imageUrl,a.qrCodePath=t.qrCodePath,a.headImageUrl=t.headImagePath,a.getWxShare(t)}})},getWxShare:function(e){},back:function(){window.history.go(-1)}}},o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"shop-wrapper sale-wrapper"},[null!=e.imageUrl?t("div",{staticClass:"index-nav clearfix"},[t("img",{staticClass:"p-code",attrs:{src:e.imageUrl}}),e._v(" "),t("div",{staticClass:"p-footer"},[e._v("\n          好友通过扫描海报购买商品，您将获得佣金\n      ")])]):t("div",{staticClass:"index-nav clearfix"},[t("div",{staticClass:"p-scan"},[null!=e.qrCodePath?t("img",{staticClass:"p-code",attrs:{src:e.qrCodePath}}):e._e(),null!=e.headImageUrl?t("img",{staticClass:"p-headicon",attrs:{src:e.headImageUrl}}):e._e()]),e._v(" "),t("div",{staticClass:"p-footer"},[e._v("\n          好友通过扫描海报购买商品，您将获得佣金\n      ")])])])},i=[],n={render:o,staticRenderFns:i},l=n,d=t("X4nt"),c=r,p=d(s,l,!1,c,"data-v-90358a32",null);a.default=p.exports},pToG:function(e,a,t){e.exports=t.p+"static/img/tg-code.0557b9d.jpg"},"s+P6":function(e,a,t){var r=t("gbsh");a=e.exports=t("I71c")(!1),a.push([e.i,".sale-wrapper[data-v-90358a32]{background:#fdecd2}.sale-wrapper .index-nav[data-v-90358a32]{position:relative;width:100%;background:url("+r(t("pToG"))+");background-size:100%;background-repeat:no-repeat;background-position:top;background-color:#fdecd2}.sale-wrapper .p-scan[data-v-90358a32]{height:12.41333333rem;padding:6.6rem 2.33333333rem 0 1.12rem}.sale-wrapper .p-scan img[data-v-90358a32]{width:2.35333333rem;height:2.35333333rem}.sale-wrapper .p-scan .p-headicon[data-v-90358a32]{width:.96666667rem;height:.96666667rem;vertical-align:top;margin-left:.28666667rem}.sale-wrapper .p-footer[data-v-90358a32]{color:#333;background:#fff;height:1.03333333rem;line-height:1.03333333rem;width:100%;position:fixed;bottom:0;text-align:center;font-size:.26666667rem}",""])}});