webpackJsonp([50],{"K+pg":function(t,s,i){s=t.exports=i("I71c")(!1),s.push([t.i,".ik-box[data-v-5a5b9d7c]{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.box-sizing[data-v-5a5b9d7c]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.text-overflow[data-v-5a5b9d7c]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.shop-wrapper[data-v-5a5b9d7c]{background:#fff;height:100%;width:100%;padding-top:1.48rem}.shop-wrapper .title_div[data-v-5a5b9d7c]{font-size:.6rem;color:#596f82;text-align:center}.shop-wrapper .error_url_image[data-v-5a5b9d7c]{height:3.69333333rem;width:4.1rem;margin:1.2rem auto}",""])},Pm0z:function(t,s,i){"use strict";function r(t){i("XKFi")}Object.defineProperty(s,"__esModule",{value:!0});var e=i("a3Yh"),a=i.n(e),o={data:function(){return{busId:this.$route.params.busId||sessionStorage.getItem("busId"),isError:!1,isSuccess:!1,isGrantError:!1,isLoading:!0}},mounted:function(){this.commonFn.setTitle("提示"),this.$store.commit("show_footer",!1),this.load()},beforeDestroy:function(){this.$store.commit("show_footer",!0)},methods:{load:function(){var t,s=this,i=this.$route.params.busId||s.$store.state.busId||null;null!=i&&""!=i&&s.ajaxRequest((t={status:!1,url:h5App.activeAPI.busGrant_get+i,data:{url:location.href}},a()(t,"status",!1),a()(t,"success",function(t){s.isLoading=!1,1026==t.code?s.isError=!0:0==t.code?s.isSuccess=!0:s.isGrantError=!1}),t))}}},n=function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"shop-wrapper"},[t.isLoading?r("div",{staticClass:"title_div"},[t._v("授权中")]):r("div",[t.isSuccess?r("div",{staticClass:"title_div"},[t._v("授权成功")]):t._e(),t._v(" "),t.isGrantError?r("div",{staticClass:"title_div"}):t._e(),t._v(" "),t.isError?r("div",{staticClass:"title_div"},[t._v("请用微信浏览器扫描二维码")]):t._e()]),t._v(" "),t.isError||t.isGrantError?r("div",{staticClass:"error_url_image"},[r("img",{attrs:{src:i("pgCp")}})]):r("div",{staticClass:"error_url_image"},[r("img",{attrs:{src:i("QfXV")}})])])},d=[],c={render:n,staticRenderFns:d},l=c,u=i("X4nt"),p=r,v=u(o,l,!1,p,"data-v-5a5b9d7c",null);s.default=v.exports},QfXV:function(t,s,i){t.exports=i.p+"static/img/success.34942a9.png"},XKFi:function(t,s,i){var r=i("K+pg");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);i("5ten")("1a92e1ac",r,!0,{})},pgCp:function(t,s,i){t.exports=i.p+"static/img/error_url.aa25868.png"}});