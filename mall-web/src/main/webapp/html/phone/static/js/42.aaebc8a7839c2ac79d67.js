webpackJsonp([42],{"9Hqv":function(t,e,s){e=t.exports=s("I71c")(!1),e.push([t.i,".shop-wrapper[data-v-6986b2dc]{height:100%;width:100%;padding-top:1.66666667rem}.shop-wrapper .error_image[data-v-6986b2dc]{margin:0 auto;height:3.36rem;width:5rem}.shop-wrapper .title_div[data-v-6986b2dc]{width:5rem;margin:0 auto;margin-top:1rem;font-size:.6rem;text-align:left;color:#999}.shop-wrapper .title_div ul[data-v-6986b2dc]{margin-left:.8rem}.shop-wrapper .title_div ul li[data-v-6986b2dc]{list-style:disc}.shop-wrapper .button-div[data-v-6986b2dc]{border:1px solid #da3931;color:#e4393c;width:2.4rem;height:.66666667rem;line-height:.66666667rem;text-align:center;margin:0 auto;margin-top:1.04rem;border-radius:5px}.shop-wrapper .shop-footer-fixed[data-v-6986b2dc]{width:100%}",""])},"WmB/":function(t,e,s){"use strict";function i(t){s("cuos")}Object.defineProperty(e,"__esModule",{value:!0});var r={data:function(){return{busId:this.$route.params.busId||sessionStorage.getItem("busId")}},mounted:function(){this.commonFn.setTitle("提示"),this.$store.commit("show_footer",!1)},beforeDestroy:function(){this.$store.commit("show_footer",!0)},methods:{toHome:function(){this.$parent.getPageId(this.busId,0,!0)}}},a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop-wrapper"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"button-div fs46",on:{click:t.toHome}},[t._v("返回店铺首页")]),t._v(" "),s("div",{staticClass:"shop-footer-fixed"},[1==t.$store.state.isAdvert?s("technical-support"):t._e()],1)])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"error_image"},[i("img",{attrs:{src:s("ph3P")}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title_div"},[s("p",{staticClass:"fs50"},[t._v("有可能的原因：")]),t._v(" "),s("ul",[s("li",{staticClass:"fs50"},[t._v("商家可能已过期")]),t._v(" "),s("li",{staticClass:"fs50"},[t._v("商品可能已失效")]),t._v(" "),s("li",{staticClass:"fs50"},[t._v("链接已过期")]),t._v(" "),s("li",{staticClass:"fs50"},[t._v("服务器开小差了")])])])}],n={render:a,staticRenderFns:o},c=n,d=s("X4nt"),l=i,p=d(r,c,!1,l,"data-v-6986b2dc",null);e.default=p.exports},cuos:function(t,e,s){var i=s("9Hqv");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("5ten")("e5dfcb62",i,!0,{})},ph3P:function(t,e,s){t.exports=s.p+"static/img/404.13e82c1.png"}});