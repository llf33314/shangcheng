webpackJsonp([48],{"8VVC":function(e,t,a){"use strict";function r(e){a("w7CS")}Object.defineProperty(t,"__esModule",{value:!0});var s={data:function(){return{type:this.$route.params.type,busId:this.$route.params.busId||sessionStorage.getItem("busId"),saleMemberId:this.$route.params.saleMemberId,qrCodePath:null,imgUrl:null,shareObj:null}},components:{defaultImg:defaultImg},mounted:function(){this.commonFn.setTitle("我的二维码"),this.$store.commit("show_footer",!1),this.loadDatas(),this.qrCodePath=h5App.activeAPI.generate_qr_code_get+"?url=/seller/mallindex/"+this.busId+"/"+this.saleMemberId},beforeDestroy:function(){this.$store.commit("show_footer",!0)},methods:{loadDatas:function(e){var t=this,a={busId:t.busId,url:location.href,browerType:t.$store.state.browerType};t.ajaxRequest({url:h5App.activeAPI.seller_two_code_post,data:a,success:function(e){var a=e.data;t.imgUrl=e.imgUrl,t.getWxShare(a)}})},getWxShare:function(e){},back:function(){window.history.go(-1)}}},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"shop-wrapper sale-wrapper"},[a("div",{staticClass:"seller-top"},[a("div",{staticClass:"seller-nav"},[a("i",{staticClass:"iconfont icon-jiantou-copy1",on:{click:e.back}}),e._v("我的二维码\n      ")])]),e._v(" "),a("div",{staticClass:"index-nav clearfix"},[a("div",{staticClass:"index-title"},[e._v("我的二维码")]),e._v(" "),a("div",{staticClass:"image-div"},[a("img",{attrs:{src:e.qrCodePath}})]),e._v(" "),a("div",{staticClass:"index-msg"},[e._v("将此链接或二维码图片发送给您的好友，并且好友\n完成下单购买，您就可以获得商家设置的丰厚佣金哦")])])])},o=[],n={render:i,staticRenderFns:o},l=n,d=a("X4nt"),p=r,c=d(s,l,!1,p,"data-v-7700a293",null);t.default=c.exports},vukO:function(e,t,a){t=e.exports=a("I71c")(!1),t.push([e.i,".sale-wrapper[data-v-7700a293]{width:100%;position:relative}.sale-wrapper .seller-top[data-v-7700a293]{position:fixed;top:0;z-index:2;width:100%}.sale-wrapper .seller-top .seller-nav[data-v-7700a293]{height:.79333333rem;line-height:.79333333rem;padding-left:.33333333rem;background:#f0f2f5;font-size:.3rem}.sale-wrapper .seller-top .seller-nav i[data-v-7700a293]{color:#b2b2b2;margin-right:.16666667rem}.sale-wrapper .seller-top[data-v-7700a293]{height:4vh}.sale-wrapper .index-nav[data-v-7700a293]{margin-top:6vh;background:#fff;height:94vh}.sale-wrapper .index-nav .index-title[data-v-7700a293]{font-size:.33333333rem;text-align:center;padding-top:.73333333rem}.sale-wrapper .index-nav .image-div[data-v-7700a293]{width:4rem;height:4rem;margin:.8rem auto}.sale-wrapper .index-nav .index-msg[data-v-7700a293]{font-size:.24rem;color:#666;width:74vw;margin:0 auto}",""])},w7CS:function(e,t,a){var r=a("vukO");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("5ten")("45b0446d",r,!0,{})}});