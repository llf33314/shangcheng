webpackJsonp([1],{"0RUY":function(s,t,i){"use strict";t.a={props:{times:{type:Number,default:0,required:!0}},data:function(){return{time:{},isShow:!1}},watch:{times:function(s,t){this.time="",console.log(s,t),this.time=s,this.setTiming()}},mounted:function(){this.setTiming(this.times)},methods:{setTiming:function(s){var t=this,i=this,o=i.times,e=setInterval(function(){0===o?(clearInterval(e),i.time=i.timer(0)):(o--,i.time=i.timer(o),t.isShow=!0)},1e3)},timer:function(s){var t=0,i=0,o=0,e=0;s>0&&(t=Math.floor(s/86400),i=Math.floor(s/3600)-24*t,o=Math.floor(s/60)-24*t*60-60*i,e=Math.floor(s)-24*t*60*60-60*i*60-60*o),i<=9&&(i="0"+i),o<=9&&(o="0"+o),e<=9&&(e="0"+e);var a={};return a.DD=t,a.HH=i,a.mm=o,a.ss=e,a}}}},"1J7v":function(s,t,i){t=s.exports=i("BkJT")(!1),t.push([s.i,'.ik-box[data-v-4d15d989]{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.box-sizing[data-v-4d15d989]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.text-overflow[data-v-4d15d989]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.sidebar-goods[data-v-4d15d989]{right:0;height:100%;width:76.24799%;float:right;padding:.2rem .21333333rem 0;position:relative;overflow:hidden;background:#f0f2f5}.sidebar-goods .Slide[data-v-4d15d989]{width:100%;height:97%;overflow-y:auto;overflow-x:hidden;margin-bottom:1.2rem;-webkit-overflow-scrolling:touch}.sidebar-goods .classify-title[data-v-4d15d989]{width:100%;font-size:.28rem;font-weight:700;padding:.16666667rem 0}.sidebar-goods .classify-goods[data-v-4d15d989],.sidebar-goods .whole-goods[data-v-4d15d989]{width:93%;background:#fff;padding:.16666667rem;position:relative}.sidebar-goods .classify-goods[data-v-4d15d989]:before,.sidebar-goods .whole-goods[data-v-4d15d989]:before{content:"";display:block;width:100%;position:absolute;bottom:.16666667rem;left:0;height:3px;background:#fff}.sidebar-goods .classify-goods .goods-item[data-v-4d15d989],.sidebar-goods .classify-goods .whole-item[data-v-4d15d989],.sidebar-goods .whole-goods .goods-item[data-v-4d15d989],.sidebar-goods .whole-goods .whole-item[data-v-4d15d989]{font-size:0;float:left;width:33.333%;padding:.13333333rem;border-bottom:1px solid #f3f5f7;border-right:1px solid #f3f5f7}.sidebar-goods .classify-goods .goods-item p[data-v-4d15d989],.sidebar-goods .classify-goods .whole-item p[data-v-4d15d989],.sidebar-goods .whole-goods .goods-item p[data-v-4d15d989],.sidebar-goods .whole-goods .whole-item p[data-v-4d15d989]{text-align:center;padding:.06666667rem 0}.sidebar-goods .classify-goods .goods-img[data-v-4d15d989],.sidebar-goods .classify-goods .whole-img[data-v-4d15d989],.sidebar-goods .whole-goods .goods-img[data-v-4d15d989],.sidebar-goods .whole-goods .whole-img[data-v-4d15d989]{margin:0 auto;height:1.4rem;display:block;background-size:cover;background-position:50%;margin-bottom:.06666667rem}.sidebar-goods .classify-goods>div[data-v-4d15d989]:nth-child(3n){border-right:0}.sidebar-goods .whole-goods .whole-item[data-v-4d15d989]{width:50%}.sidebar-goods .whole-goods .whole-item p[data-v-4d15d989]{text-align:left}.sidebar-goods .whole-goods .whole-img[data-v-4d15d989]{width:2.2rem;height:2.2rem;overflow:hidden}.sidebar-goods .whole-goods>div[data-v-4d15d989]:nth-child(2n){border-right:0}.sidebar-enter-active[data-v-4d15d989]{-webkit-transition:all .3s ease;transition:all .3s ease}.sidebar-leave-active[data-v-4d15d989]{-webkit-transition:all .8s cubic-bezier(1,.5,.8,1);transition:all .8s cubic-bezier(1,.5,.8,1)}.sidebar-enter[data-v-4d15d989],.sidebar-leave-to[data-v-4d15d989]{-webkit-transform:translateX(10px);transform:translateX(10px);opacity:0}',""])},"80/d":function(s,t,i){"use strict";function o(s){i("Ydfi")}Object.defineProperty(t,"__esModule",{value:!0});var e=i("zKs6"),a=i("Y8aR"),r=i("46Yf"),n=o,d=r(e.a,a.a,!1,n,null,null);t.default=d.exports},"8Hv/":function(s,t,i){"use strict";function o(s){i("JM57")}var e=i("f64m"),a=i("Jbwv"),r=i("46Yf"),n=o,d=r(e.a,a.a,!1,n,"data-v-4d15d989",null);t.a=d.exports},"8eqz":function(s,t,i){"use strict";function o(s){i("NKeS")}var e=i("0RUY"),a=i("Ihi2"),r=i("46Yf"),n=o,d=r(e.a,a.a,!1,n,"data-v-7cd4b43e",null);t.a=d.exports},D8cz:function(s,t,i){"use strict";var o=function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("section",{staticClass:"more-main"},[i("p",{directives:[{name:"show",rawName:"v-show",value:2==s.isMore,expression:"isMore == 2"}]},[s._v("加载中，请稍等……")]),s._v(" "),i("p",{directives:[{name:"show",rawName:"v-show",value:3==s.isMore,expression:"isMore == 3"}]},[s._v("抱歉,没有更多商品了")])])},e=[],a={render:o,staticRenderFns:e};t.a=a},GC3C:function(s,t,i){"use strict";t.a={props:["background","isHeadPortrait"],data:function(){return{}},mounted:function(){}}},HICE:function(s,t){s.exports={props:["isMore"],data:function(){return{}}}},Ihi2:function(s,t,i){"use strict";var o=function(){var s=this,t=s.$createElement,i=s._self._c||t;return s.isShow?i("div",{staticClass:"fs36 classify-time shopGray"},[s._v("\n        距结束"),i("span",[s._v(s._s(s.time.DD)+"天")]),s._v(" "),i("em",{domProps:{textContent:s._s(s.time.HH)}}),s._v(" :\n        "),i("em",{domProps:{textContent:s._s(s.time.mm)}}),s._v(" :\n        "),i("em",{domProps:{textContent:s._s(s.time.ss)}})]):s._e()},e=[],a={render:o,staticRenderFns:e};t.a=a},JM57:function(s,t,i){var o=i("1J7v");"string"==typeof o&&(o=[[s.i,o,""]]),o.locals&&(s.exports=o.locals);i("8bSs")("1268bcea",o,!0)},Jbwv:function(s,t,i){"use strict";var o=function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("transition",{attrs:{name:"sidebar"}},[i("div",{staticClass:"sidebar-goods"},[i("div",{staticClass:"Slide"},[i("div",{staticClass:"classify-title "},[s._v("\n                "+s._s(s.name)+"分类\n            ")]),s._v(" "),i("div",{staticClass:"classify-goods clearfix"},s._l(s.goodsData,function(t){return i("div",{staticClass:"goods-item"},[i("div",{staticClass:"goods-img"},[i("default-img",{attrs:{background:s.imgurl+t.image_url,isHeadPortrait:0}})],1),s._v(" "),i("p",{staticClass:"fs36",domProps:{textContent:s._s(t.group_name)}})])}))]),s._v(" "),i("more",{attrs:{"is-more":s.isMore}})],1)])},e=[],a={render:o,staticRenderFns:e};t.a=a},Lg5A:function(s,t){s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAIAAAC2BqGFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5RDU5RkNFODZCNjYxMUU3OEFDNkZFRjc4RDI0NDJGNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5RDU5RkNFOTZCNjYxMUU3OEFDNkZFRjc4RDI0NDJGNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlENTlGQ0U2NkI2NjExRTc4QUM2RkVGNzhEMjQ0MkY3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjlENTlGQ0U3NkI2NjExRTc4QUM2RkVGNzhEMjQ0MkY3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9wpSMQAAExdJREFUeNrsnQuYTdUe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"},"M+O/":function(s,t,i){"use strict";var o=function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},e=[function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("section",{staticClass:"goods-no"},[i("i",{staticClass:"iconfont icon-zanwushuju"}),s._v(" "),i("p",[s._v("没有找到相关的商品")])])}],a={render:o,staticRenderFns:e};t.a=a},NKeS:function(s,t,i){var o=i("f5Ta");"string"==typeof o&&(o=[[s.i,o,""]]),o.locals&&(s.exports=o.locals);i("8bSs")("42499c86",o,!0)},OyEF:function(s,t,i){t=s.exports=i("BkJT")(!1),t.push([s.i,".more-main{width:100%;font-size:.3rem;color:#737373;text-align:center;padding:.25rem 0;margin-bottom:60px}.more-main p{margin-bottom:.05rem}",""])},R9Bh:function(s,t,i){"use strict";t.a={props:["statu"],data:function(){return{}},mounted:function(){}}},UWwV:function(s,t,i){var o=i("OyEF");"string"==typeof o&&(o=[[s.i,o,""]]),o.locals&&(s.exports=o.locals);i("8bSs")("358ca291",o,!0)},XXyG:function(s,t,i){t=s.exports=i("BkJT")(!1),t.push([s.i,".ik-box[data-v-39e6a611]{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.box-sizing[data-v-39e6a611]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.text-overflow[data-v-39e6a611]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.imgbox[data-v-39e6a611]{width:101%;height:101%;position:relative}.user-head-portrait[data-v-39e6a611]{width:100%;height:100%;background-size:100%;background-repeat:no-repeat;background-position:50%;position:relative;z-index:1}.default-img[data-v-39e6a611]{width:100%;height:100%;position:absolute;top:0;left:0;z-index:0}",""])},Y8aR:function(s,t,i){"use strict";var o=function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"classify-main"},[i("header",{staticClass:"classify-header"},[i("div",{staticClass:"header-search",on:{click:s.search}},[i("input",{directives:[{name:"model",rawName:"v-model",value:s.keyWord,expression:"keyWord"}],staticClass:"fs40",attrs:{placeholder:"搜索商品"},domProps:{value:s.keyWord},on:{input:function(t){t.target.composing||(s.keyWord=t.target.value)}}}),s._v(" "),i("i",{staticClass:"iconfont icon-sousuo shop"})]),s._v(" "),i("div",{staticClass:"header-nav fs40"},[i("div",{on:{click:function(t){s.showNav()}}},[s._v("\r\n                分类\r\n                ")]),s._v(" "),i("div",{class:["new"==s.sort?"shop-font":""],on:{click:function(t){s.switchProduc("new")}}},[s._v("\r\n                最新\r\n            ")]),s._v(" "),i("div",{class:["sale"==s.sort?"shop-font":""],on:{click:function(t){s.switchProduc("sale")}}},[s._v(" \r\n                销量\r\n            ")]),s._v(" "),i("div",{staticClass:"price",class:["price"==s.sort?"shop-font":""],on:{click:function(t){s.switchProduc("price")}}},[s._v("\r\n                价格\r\n                ")]),s._v(" "),i("div",[s.isList?i("i",{staticClass:"icon-fenglei",on:{click:s.listToggle}}):i("i",{staticClass:"icon-fenglei2",on:{click:function(t){s.listToggle("isList")}}})])])]),s._v(" "),s.isNav?i("section",{staticClass:"classify-content-nav"},[i("ul",{staticClass:"classify-nav",class:{navshow:s.isNav}},s._l(s.classNav,function(t,o){return i("li",{staticClass:"fs42 ",class:[s.selectedClass==o?"selected":""],domProps:{textContent:s._s(t.group_name)},on:{click:function(i){s.selected(o,t.group_id,t.is_child,t.group_name)}}})})),s._v(" "),s.isGoods?i("sidebar-b",{attrs:{imgurl:s.imgUrl,goodsData:s.classGoods,name:s.group_name}}):s._e()],1):s._e(),s._v(" "),""!==s.subList?i("section",{staticClass:"clearfix",class:[s.isList?"classify-content1":"classify-content2"]},s._l(s.subList,function(t){return i("div",{staticClass:"classify-item",on:{click:function(i){s.goods_jump(t.id,t.activityId)}}},[i("div",{staticClass:"classify-img"},[i("default-img",{attrs:{background:t.image_url,isHeadPortrait:0}})],1),s._v(" "),i("div",{staticClass:"classify-txt"},[i("p",{staticClass:"fs42 ",class:[s.isList?"text-overflow":"",t.pro_name.length>30?"text-more-overflow":""]},[t.pro_label?i("em",{staticClass:"em-tag"},[s._v(s._s(t.pro_label))]):s._e(),s._v("\r\n                    "+s._s(t.pro_name)+"\r\n                ")]),s._v(" "),i("div",{staticClass:"classify-money"},[i("p",{staticClass:"fs32 shop-font"},[1==s.type?i("span",[s._v("团购:￥")]):4==s.type?i("span",[s._v("当前价:￥")]):6==s.type?i("span",[s._v("预售:￥")]):7==s.type?i("span",[s._v("批发:￥")]):i("span",[s._v("￥")]),s._v(" "),i("span",{staticClass:"fs42"},[s._v(s._s(t.price[0]))]),s._v("."+s._s(t.price[1])+"\r\n                        "),5==s.type?i("span",[s._v("积分")]):s._e()]),s._v(" "),i("p",{staticClass:"fs32 shopGray"},[s._v("销量 :"+s._s(t.sale_total))])]),s._v(" "),i("count-down",{attrs:{times:t.times}})],1)])})):s._e(),s._v(" "),""==s.subList?i("goods-no"):s._e(),s._v(" "),i("more",{attrs:{"is-more":s.isMore}})],1)},e=[],a={render:o,staticRenderFns:e};t.a=a},Ydfi:function(s,t,i){var o=i("uDzq");"string"==typeof o&&(o=[[s.i,o,""]]),o.locals&&(s.exports=o.locals);i("8bSs")("209d2fdc",o,!0)},dp0q:function(s,t,i){"use strict";function o(s){i("el1F")}var e=i("R9Bh"),a=i("M+O/"),r=i("46Yf"),n=o,d=r(e.a,a.a,!1,n,"data-v-52483110",null);t.a=d.exports},el1F:function(s,t,i){var o=i("toem");"string"==typeof o&&(o=[[s.i,o,""]]),o.locals&&(s.exports=o.locals);i("8bSs")("68a1068e",o,!0)},el1f:function(s,t,i){var o=i("XXyG");"string"==typeof o&&(o=[[s.i,o,""]]),o.locals&&(s.exports=o.locals);i("8bSs")("a4e18ee0",o,!0)},f5Ta:function(s,t,i){t=s.exports=i("BkJT")(!1),t.push([s.i,".ik-box[data-v-7cd4b43e]{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.box-sizing[data-v-7cd4b43e]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.text-overflow[data-v-7cd4b43e]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.classify-time[data-v-7cd4b43e]{margin-top:.06666667rem}.classify-time span[data-v-7cd4b43e]{color:#333;margin:3px}.classify-time em[data-v-7cd4b43e]{font-size:.21333333rem;display:inline-block;background:#fc0;color:#333;padding:1px 2px;border-radius:3px}",""])},f64m:function(s,t,i){"use strict";var o=i("uotU"),e=i("kr9m");t.a={components:{more:o.a,defaultImg:e.a},props:["imgurl","goodsData","name"],data:function(){return{path:"",imgUrl:"",webPath:"",isMore:1,background:""}},mounted:function(){console.log(this.imgurl,this.goodsData,"sidebar")},methods:{}}},kr9m:function(s,t,i){"use strict";function o(s){i("el1f")}var e=i("GC3C"),a=i("qlFi"),r=i("46Yf"),n=o,d=r(e.a,a.a,!1,n,"data-v-39e6a611",null);t.a=d.exports},qlFi:function(s,t,i){"use strict";var o=function(){var s=this,t=s.$createElement,o=s._self._c||t;return o("div",{staticClass:"imgbox"},[o("div",{staticClass:"user-head-portrait",style:{backgroundImage:"url("+s.background+")"}}),s._v(" "),1==s.isHeadPortrait&&void 0==s.background?o("img",{staticClass:"default-img",attrs:{src:i("Lg5A")}}):s._e(),s._v(" "),0==s.isHeadPortrait&&void 0==s.background?o("img",{staticClass:"default-img",attrs:{src:i("vl5z")}}):s._e()])},e=[],a={render:o,staticRenderFns:e};t.a=a},toem:function(s,t,i){t=s.exports=i("BkJT")(!1),t.push([s.i,".ik-box[data-v-52483110]{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.box-sizing[data-v-52483110]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.text-overflow[data-v-52483110]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.goods-no[data-v-52483110]{width:100%;color:#ccc;text-align:center;margin-top:.78666667rem}.goods-no i[data-v-52483110]{font-size:2.4rem;margin-left:.36666667rem}.goods-no p[data-v-52483110]{font-size:.28rem}",""])},uDzq:function(s,t,i){t=s.exports=i("BkJT")(!1),t.push([s.i,".ik-box{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.box-sizing{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.text-overflow{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.classify-main{width:100%}.classify-main .classify-header{width:100%;font-size:0;background:#fff;position:absolute;z-index:3}.classify-main .classify-header .price{position:relative}.classify-main .classify-header .price i{right:.43333333rem;position:absolute;width:0;height:0}.classify-main .classify-header .price-up{top:.18666667rem;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #ccc}.classify-main .classify-header .price-down{bottom:.18666667rem;border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid #ccc}.classify-main .classify-header .upborder{border-bottom:6px solid #e4393c}.classify-main .classify-header .downborder{border-top:6px solid #e4393c}.classify-main .header-search{width:100%;padding:.16666667rem;position:relative}.classify-main .header-search i{position:absolute;top:38%;left:.37777778rem;color:#87858f}.classify-main .header-search input{width:100%;border:0;background:#f1f1f4;padding:.13333333rem .63333333rem;padding-right:0;border-radius:10px}.classify-main .header-nav{width:100%;display:-webkit-box;display:-moz-box;display:-o-box;display:box;line-height:1}.classify-main .header-nav>div{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;padding:.16666667rem 0;text-align:center}.classify-main .header-nav>div:last-child{padding:.16666667rem 0}.classify-main .header-nav>div:last-child i{background-position:50%}.classify-main .classify-content1{width:100%;position:relative;background:#fff;padding-top:1.53333333rem}.classify-main .classify-content1 .classify-item{width:50%;float:left;padding:.13333333rem}.classify-main .classify-content1 .classify-item .classify-img{width:3.46666667rem;height:3.46666667rem;background-size:cover;background-position:50%;margin-bottom:.13333333rem}.classify-main .classify-content1 .classify-item .classify-txt{width:100%}.classify-main .classify-content1 .classify-item .classify-txt>p{min-height:1.5em}.classify-main .classify-content1 .classify-item .classify-txt .classify-money{margin-top:.13333333rem;width:100%;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-align:center;-o-box-align:center;box-align:center;-webkit-box-pack:justify;-o-box-pack:justify;box-pack:justify;font-size:0}.classify-main .classify-content1 .classify-item .classify-txt .classify-money p{vertical-align:bottom}.classify-main .classify-content2{width:100%;position:relative;background:#fff;padding-top:1.53333333rem}.classify-main .classify-content2 .classify-item{width:100%;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-align:center;-o-box-align:center;box-align:center;-webkit-box-pack:justify;-o-box-pack:justify;box-pack:justify;padding:.06666667rem .2rem}.classify-main .classify-content2 .classify-item .classify-img{width:2.2rem;height:2.2rem;background-size:cover;background-position:50%}.classify-main .classify-content2 .classify-item .classify-txt{width:66%}.classify-main .classify-content2 .classify-item .classify-txt>p{min-height:1em;max-height:.76666667rem;margin-bottom:.06666667rem}.classify-main .classify-content2 .classify-item .classify-txt .classify-money{margin-bottom:.16666667rem}.classify-main .classify-content2 .classify-item .classify-time{margin-top:.06666667rem;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-pack:justify;-o-box-pack:justify;box-pack:justify}.classify-main .classify-content2 .classify-item .classify-time span{color:#333;margin:3px}.classify-main .classify-content2 .classify-item .classify-time em{font-size:.21333333rem;display:inline-block;background:#fc0;color:#333;padding:1px 2px;border-radius:3px}.classify-main .classify-content-nav{width:100%;height:100%;background:rgba(0,0,0,.5);position:absolute;padding-top:1.53333333rem;z-index:2;padding-bottom:1rem}.classify-main .classify-content-nav .classify-nav{height:100%;width:23.75201%;float:left;overflow-y:auto;overflow-x:hidden;position:relative;left:0;background:#fff;-webkit-overflow-scrolling:touch}.classify-main .classify-content-nav .classify-nav li{width:100%;height:1rem;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-align:center;-o-box-align:center;box-align:center;-webkit-box-pack:center;-o-box-pack:center;box-pack:center;border-bottom:1px solid #e5e5e5;background:#fff}.classify-main .classify-content-nav .classify-nav .selected{background:#f0f2f5;border-right:0;color:#e73622;position:relative}.navshow{-webkit-animation:.5s ease wrap_kf forwards}@-webkit-keyframes wrap_kf{0%{height:0}to{height:100%}}",""])},uotU:function(s,t,i){"use strict";function o(s){i("UWwV")}var e=i("HICE"),a=i.n(e),r=i("D8cz"),n=i("46Yf"),d=o,c=n(a.a,r.a,!1,d,null,null);t.a=c.exports},vl5z:function(s,t,i){s.exports=i.p+"static/img/kuaidiyuan.21c5411.png"},zKs6:function(s,t,i){"use strict";var o=i("hRKE"),e=i.n(o),a=i("kr9m"),r=i("uotU"),n=i("dp0q"),d=i("8Hv/"),c=i("8eqz");t.a={components:{defaultImg:a.a,more:r.a,goodsNo:n.a,sidebarB:d.a,countDown:c.a},data:function(){return{productList:{},path:"",webPath:"",imgUrl:"",subList:[],type:0,isList:!0,sort:"new",desc_num:-1,isMore:1,curPage:1,keyWord:"",classNav:{},isNav:!1,selectedClass:-1,classGoods:{},footershow:"classify",isGoods:!1}},watch:{$route:"setTitle"},methods:{loadMore:function(){console.log("加载更多"),this.curPage++;var s=this.productList.pageCount;if(this.curPage>s)return void(this.isMore=3);this.isMore=2,this.productAjax({sort:this.sort,curPage:this.curPage,type:this.$route.params.type})},listToggle:function(s){if("isList"===s)return this.isList=!0;this.isList=!1},search:function(){var s=this.$route.params.type;console.log(s,"typetype");var t=(this.$route.params.shopId||this.$store.state.shopId,this.$route.params.busId||this.$store.state.shopId,this.keyWord||this.$store.state.keywords||this.$route.params.keywords);this.$router.push("/search/"+s+"/"+t)},showNav:function(){if(!this.isNav)return this.isNav=!0,void $(".wrapper").css({overflow:"hidden"});this.isNav=!1,$(".wrapper").removeAttr("style")},productAjax:function(s){var t=this,i={url:t.$store.state.loginDTO_URL,browerType:t.$store.state.browerType,shopId:t.$store.state.shopId,busId:t.$store.state.busId,groupId:s.groupId||"",sort:s.sort||"new",isDesc:s.isDesc||"",searchContent:s.searchContent||"",type:s.type||0,curPage:s.curPage||""};console.log(e()(i.loginDTO)),this.commonFn.ajax({url:h5App.activeAPI.phoneProduct_productAll_post,data:i,success:function(s){if(console.log(s),"-1"==s.code)return void(t.subList=[]);t.isMore=1,t.productList=s.data.productList;var i=s.data.productList.subList;i.forEach(function(s,i){s.price=t.commonFn.moneySplit(s.price)}),1===t.curPage?t.subList=i:t.subList=t.subList.concat(i)||[],t.path=s.path,t.imgUrl=s.imgUrl,t.webPath=s.webPath}})},switchProduc:function(s){var t=this;t.isNav=!1,"price"===s?(this.desc_num,this.desc_num>0?this.desc_num=0:this.desc_num=1):this.desc_num=-1,this.sort=s,this.productAjax({sort:s,isDesc:t.desc_num,curPage:1,type:this.$route.params.type}),this.curPage=1},setTitle:function(){var s=this,t={1:"团购",3:"秒杀",4:"拍卖",5:"粉币",6:"预售",7:"批发"};s.commonFn.setTitle(t[this.type]||"分类详情"),this.productAjax({sort:"new",curPage:1,type:s.$route.params.type,searchContent:encodeURI(s.keyWord)})},classAllAjax:function(s){var t=this;this.commonFn.ajax({url:h5App.activeAPI.phoneProduct_classAll_post,data:{shopId:t.$store.state.shopId,busId:t.$store.state.busId,groupId:s||""},success:function(i){if(t.isMore=1,s)t.classGoods=i.data;else{t.classNav=i.data;var o={group_id:"",group_name:"全部",is_child:0,shop_id:""};t.classNav.unshift(o)}t.path=i.path,t.imgUrl=i.imgUrl,t.webPath=i.webPath}})},selected:function(s,t,i,o){var e=this;e.selectedClass=s,e.isGoods=!1,e.group_name=o,i?(e.isGoods=!0,e.classAllAjax(t)):(e.classGoods="",e.isNav=!1,$(".wrapper").removeAttr("style"),e.productAjax({groupId:t}))},goods_jump:function(s,t){var i=this.$store.state.shopId||this.$route.params.shopId,o=this.$store.state.busId||this.$route.params.busId,e=this.$store.state.type||this.$route.params.type;this.$store.commit("mutationData",{shopId:i,busId:o,type:e}),this.$router.push("/goods/details/"+i+"/"+o+"/"+e+"/"+s+"/"+t)}},mounted:function(){var s=this;s.type=s.$route.params.type,s.$store.commit("mutationData",{type:s.type});var t=this.$store.state.keywords||this.$route.params.keywords;s.keyWord="k=k"===t?"":t||"",s.setTitle(),s.classAllAjax(),$(window).bind("scroll",function(){$(window).scrollTop()>0&&$(window).scrollTop()>=$(document).height()-$(window).height()-1e3&&s.loadMore()})}}}});