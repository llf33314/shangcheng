webpackJsonp([50],{"84mD":function(t,s,r){s=t.exports=r("BkJT")(!1),s.push([t.i,".ik-box[data-v-1690b4f7]{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.box-sizing[data-v-1690b4f7]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.text-overflow[data-v-1690b4f7]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.shop-wrapper[data-v-1690b4f7]{background:#fff;height:100%;width:100%;padding-top:1.48rem}.shop-wrapper .title_div[data-v-1690b4f7]{font-size:.6rem;color:#596f82;text-align:center}.shop-wrapper .error_url_image[data-v-1690b4f7]{height:3.69333333rem;width:4.1rem;margin:1.2rem auto}",""])},Pm0z:function(t,s,r){"use strict";function i(t){r("zslL")}Object.defineProperty(s,"__esModule",{value:!0});var e=r("r074"),o=r("ZLiC"),a=r("0HdQ"),n=i,c=a(e.a,o.a,!1,n,"data-v-1690b4f7",null);s.default=c.exports},QfXV:function(t,s,r){t.exports=r.p+"static/img/success.34942a9.png"},ZLiC:function(t,s,r){"use strict";var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"shop-wrapper"},[t.isLoading?i("div",{staticClass:"title_div"},[t._v("授权中")]):i("div",[t.isSuccess?i("div",{staticClass:"title_div"},[t._v("授权成功")]):t._e(),t._v(" "),t.isGrantError?i("div",{staticClass:"title_div"}):t._e(),t._v(" "),t.isError?i("div",{staticClass:"title_div"},[t._v("请用微信浏览器扫描二维码")]):t._e()]),t._v(" "),t.isError||t.isGrantError?i("div",{staticClass:"error_url_image"},[i("img",{attrs:{src:r("pgCp")}})]):i("div",{staticClass:"error_url_image"},[i("img",{attrs:{src:r("QfXV")}})])])},e=[],o={render:i,staticRenderFns:e};s.a=o},pgCp:function(t,s,r){t.exports=r.p+"static/img/error_url.aa25868.png"},r074:function(t,s,r){"use strict";var i=r("a3Yh"),e=r.n(i);s.a={data:function(){return{busId:this.$route.params.busId||sessionStorage.getItem("busId"),isError:!1,isSuccess:!1,isGrantError:!1,isLoading:!0}},mounted:function(){this.commonFn.setTitle("提示"),this.$store.commit("show_footer",!1),this.load()},beforeDestroy:function(){this.$store.commit("show_footer",!0)},methods:{load:function(){var t,s=this,r=this.$route.params.busId||s.$store.state.busId||null;null!=r&&""!=r&&s.ajaxRequest((t={status:!1,url:h5App.activeAPI.busGrant_get+r,data:{url:location.href}},e()(t,"status",!1),e()(t,"success",function(t){s.isLoading=!1,1026==t.code?s.isError=!0:0==t.code?s.isSuccess=!0:s.isGrantError=!1}),t))}}}},zslL:function(t,s,r){var i=r("84mD");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);r("8bSs")("29e7c68c",i,!0)}});