webpackJsonp([39],{"0chq":function(t,e,i){"use strict";function o(t){i("DS5i")}Object.defineProperty(e,"__esModule",{value:!0});var s={components:{defaultImg:defaultImg},data:function(){return{shopData:""}},beforeCreate:function(){},mounted:function(){this.commonFn.setTitle("粉币商城"),this.shopListAjax(),this.$store.commit("show_footer",!1)},methods:{shopListAjax:function(){var t=this;t.ajaxRequest({url:h5App.activeAPI.queryFenbiShopByBusId_post,data:{busId:t.$store.state.busId},success:function(e){t.shopData=e.data}})},back:function(){window.history.go(-1)},toPage:function(t){var e=t.id,i=this.$route.params.busId;this.$parent.getPageId(i,e,!0)}},beforeDestroy:function(){this.$store.commit("show_footer",!0)}},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"stores-wrapper"},[i("div",{staticClass:"head-div"},[i("i",{staticClass:"iconfont icon-jiantou-copy1",on:{click:t.back}}),t._v(" "),t._m(0)]),t._v(" "),i("div",{staticClass:"store-div"},t._l(t.shopData,function(e,o){return i("div",{key:o,staticClass:"stores-item",on:{click:function(i){t.toPage(e)}}},[i("div",{staticClass:"item-center"},[i("div",{staticClass:"fs50 first-div"},[t._v(t._s(e.shopName))]),t._v(" "),i("p",{staticClass:"fs44 add_p"},[t._v(t._s(e.address))]),t._v(" "),i("em",{staticClass:"border"})]),t._v(" "),t._m(1,!0)])})),t._v(" "),i("div",{staticClass:"shop-footer-fixed"},[1==t.$store.state.isAdvert?i("technical-support"):t._e()],1)])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("p",{staticClass:"title_p"},[t._v("粉币商城")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item-right"},[i("i",{staticClass:"icon-jiantou-copy iconfont"})])}],d={render:a,staticRenderFns:r},n=d,p=i("X4nt"),c=o,l=p(s,n,!1,c,"data-v-9e621760",null);e.default=l.exports},"3YBy":function(t,e,i){t.exports=i.p+"static/img/fenbi_store_bg.08081da.jpg"},DS5i:function(t,e,i){var o=i("erlO");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i("5ten")("09059012",o,!0,{})},erlO:function(t,e,i){var o=i("gbsh");e=t.exports=i("I71c")(!1),e.push([t.i,".stores-wrapper[data-v-9e621760]{height:100%;background:url("+o(i("3YBy"))+') no-repeat;background-size:cover}.stores-wrapper .head-div[data-v-9e621760]{height:.93333333rem;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-pack:center;-o-box-pack:center;box-pack:center;-webkit-box-align:center;-o-box-align:center;box-align:center;color:#fff}.stores-wrapper .head-div div[data-v-9e621760]{font-size:.33333333rem;width:18%;text-align:right;width:60%;padding-right:.22666667rem;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-pack:justify;-o-box-pack:justify;box-pack:justify;-webkit-box-align:center;-o-box-align:center;box-align:center}.stores-wrapper .head-div div p.title_p[data-v-9e621760]{width:40%;text-align:left}.stores-wrapper .head-div div p.title_index[data-v-9e621760]{width:20%;text-align:right}.stores-wrapper .head-div i[data-v-9e621760]{display:block;width:40%;padding-left:.38666667rem}.stores-wrapper .store-div[data-v-9e621760]{margin:.43333333rem .18666667rem .26666667rem .17333333rem}.stores-wrapper .stores-item[data-v-9e621760]{width:100%;margin-bottom:.26666667rem;background:#fff;overflow:hidden;border:1px solid #888171;border-radius:5px;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-pack:justify;-o-box-pack:justify;box-pack:justify;padding:.42666667rem .32666667rem .44rem .33333333rem}.stores-wrapper .stores-item .item-center[data-v-9e621760]{width:83%;position:relative}.stores-wrapper .stores-item .item-center .first-div[data-v-9e621760]{margin-bottom:.38666667rem}.stores-wrapper .stores-item .item-center p[data-v-9e621760]{width:90%;height:.26666667p;display:-webkit-box;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden;position:relative;text-align:justify}.stores-wrapper .stores-item .item-center p[data-v-9e621760]:after{content:" ... ";position:absolute;bottom:1px;right:0;padding:0 1px 1px 2px;background:#fff}.stores-wrapper .stores-item .item-center .add_p[data-v-9e621760]{color:#888}.stores-wrapper .stores-item .item-center .border[data-v-9e621760]{position:absolute;right:-5px;width:1px;height:100%;top:0;background:#dfdfdd}.stores-wrapper .stores-item .item-right[data-v-9e621760]{width:12%;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-pack:center;-o-box-pack:center;box-pack:center;-webkit-box-align:center;-o-box-align:center;box-align:center;font-size:0}.stores-wrapper .stores-item .item-right i[data-v-9e621760]{width:.22666667rem;width:.43333333rem;color:#999}.stores-wrapper .shop-footer-fixed[data-v-9e621760]{width:100%}',""])}});