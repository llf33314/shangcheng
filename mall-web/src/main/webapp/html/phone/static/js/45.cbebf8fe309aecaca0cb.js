webpackJsonp([45],{"8VVC":function(t,a,o){"use strict";function e(t){o("BoqC")}Object.defineProperty(a,"__esModule",{value:!0});var c=o("GuNr"),i=o("RkFf"),f=o("0HdQ"),r=e,d=f(c.a,i.a,!1,r,"data-v-5f3ffccc",null);a.default=d.exports},BoqC:function(t,a,o){var e=o("ienZ");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);o("8bSs")("295e5a4a",e,!0)},GuNr:function(t,a,o){"use strict";var e=o("kr9m");a.a={data:function(){return{type:this.$route.params.type,busId:this.$route.params.busId||sessionStorage.getItem("busId"),qrCodePath:null}},components:{defaultImg:e.a},mounted:function(){this.commonFn.setTitle("我的二维码"),this.$store.commit("show_footer",!1),this.loadDatas()},beforeDestroy:function(){this.$store.commit("show_footer",!0)},methods:{loadDatas:function(t){var a=this,o={busId:a.busId,url:location.href,browerType:a.$store.state.browerType};a.ajaxRequest({url:h5App.activeAPI.seller_two_code_post,data:o,success:function(t){var o=t.data;a.qrCodePath=o.qrCodePath}})},back:function(){window.history.go(-1)}}}},Huuc:function(t,a,o){"use strict";var e=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"imgbox"},[o("div",{staticClass:"user-head-portrait",style:{backgroundImage:"url("+t.background+")"}}),t._v(" "),0==t.isHeadPortrait&&void 0==t.background?o("div",{staticClass:"default-img"},[o("i",{staticClass:"iconfont icon-tupianjiazaizhong-",staticStyle:{color:"#d6d6d6"}})]):t._e(),t._v(" "),1==t.isHeadPortrait&&void 0==t.background?o("div",{staticClass:"default-img"},[o("i",{staticClass:"iconfont icon-ren1"})]):t._e()])},c=[],i={render:e,staticRenderFns:c};a.a=i},RkFf:function(t,a,o){"use strict";var e=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"shop-wrapper sale-wrapper"},[o("div",{staticClass:"seller-top"},[o("div",{staticClass:"seller-nav"},[o("i",{staticClass:"iconfont icon-jiantou-copy1",on:{click:t.back}}),t._v("我的二维码\n      ")])]),t._v(" "),o("div",{staticClass:"index-nav clearfix"},[o("div",{staticClass:"index-title"},[t._v("我的二维码")]),t._v(" "),null!=t.qrCodePath?o("div",{staticClass:"image-div"},[o("default-img",{attrs:{background:t.qrCodePath,isHeadPortrait:1}})],1):t._e(),t._v(" "),o("div",{staticClass:"index-msg"},[t._v("将此链接或二维码图片发送给您的好友，并且好友\n完成下单购买，您就可以获得商家设置的丰厚佣金哦")])])])},c=[],i={render:e,staticRenderFns:c};a.a=i},ienZ:function(t,a,o){a=t.exports=o("BkJT")(!1),a.push([t.i,".ik-box[data-v-5f3ffccc]{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.box-sizing[data-v-5f3ffccc]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}body[data-v-5f3ffccc]{background:#f0f2f5;color:#333}.shop-wrapper[data-v-5f3ffccc]{width:100%;position:relative;max-width:1242px;margin:0 auto}.shop-main[data-v-5f3ffccc]{width:100%}.shop-main .shop-list[data-v-5f3ffccc]{padding:.26666667rem 0}.shop-main .shop-add-itme[data-v-5f3ffccc]{width:100%;background:#fff;padding-top:.33333333rem;padding-left:.46666667rem;height:2.46666667rem}.shop-main .shop-add-itme .shop-add-txt[data-v-5f3ffccc]{padding-bottom:.13333333rem}.shop-main .shop-add-itme .add-left[data-v-5f3ffccc]{float:left;width:93%}.shop-main .shop-add-itme .add-left p[data-v-5f3ffccc]{margin-bottom:.06666667rem}.shop-main .shop-add-itme .add-left p span[data-v-5f3ffccc]{margin-left:.26666667rem}.shop-main .shop-add-itme .add-right[data-v-5f3ffccc]{float:left;width:7%;color:#d1d2d4;height:100%;position:relative}.shop-main .shop-add-itme .add-right i[data-v-5f3ffccc]{font-size:.32rem;position:absolute;top:.33333333rem}.shop-main .shop-add-itme .shop-add-footer[data-v-5f3ffccc]{width:96%;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-align:center;-o-box-align:center;box-align:center;-webkit-box-pack:justify;-o-box-pack:justify;box-pack:justify}.shop-main .shop-add-itme .shop-add-footer .shop-add-button1[data-v-5f3ffccc]{padding:.18666667rem 0}.shop-main .shop-add-itme .shop-add-footer .shop-add-button1 i[data-v-5f3ffccc]{width:.35333333rem;height:.35333333rem;background:#d1d2d4;color:#fff;vertical-align:0}.shop-main .shop-add-itme .shop-add-footer .shop-add-button2 span[data-v-5f3ffccc]{display:inline-block;padding:.18666667rem 0}.shop-main .shop-add-itme .shop-add-footer .shop-add-button2 i[data-v-5f3ffccc]{margin-right:.06666667rem;font-size:.32rem;color:#d1d2d4}.em-tag[data-v-5f3ffccc]{background:#e4393c;margin-right:.06666667rem}.em-flag[data-v-5f3ffccc],.em-tag[data-v-5f3ffccc]{color:#fff;padding:3px 5px 2px;line-height:1;display:inline-block;border-radius:2px;font-size:.18666667rem}.em-flag[data-v-5f3ffccc]{background:-moz-linear-gradient(right,#f85e65,#e7242c)}.em-choice[data-v-5f3ffccc],.em-input[data-v-5f3ffccc],.em-search[data-v-5f3ffccc]{color:#333;padding:.17333333rem .25333333rem;line-height:1;margin-right:.24rem;display:inline-block;border-radius:2px;font-size:.18666667rem;background:#f3f2f8;border-radius:3px}.em-input[data-v-5f3ffccc]{width:.8rem;vertical-align:bottom;height:.6rem;border:0;margin-right:3px;padding:2px;text-align:center}.em-search[data-v-5f3ffccc]{margin-bottom:.18666667rem;background:#d7d9dc}.em-nav[data-v-5f3ffccc]{background:#fbd3d3;padding:.13333333rem .2rem;border-radius:3px}.shop-max-button[data-v-5f3ffccc]{width:100%;height:100%;border-radius:5px;color:hsla(0,0%,100%,.3);display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-align:center;-o-box-align:center;box-align:center;-webkit-box-pack:center;-o-box-pack:center;box-pack:center}.shop-footer-ab[data-v-5f3ffccc]{position:absolute}.shop-footer-ab[data-v-5f3ffccc],.shop-footer[data-v-5f3ffccc]{width:100%;bottom:0}.shop-footer-ab .shop-logo[data-v-5f3ffccc],.shop-footer .shop-logo[data-v-5f3ffccc]{margin:0 auto;width:3rem;height:.46666667rem;background:url("+o("DDBx")+');background-size:100%;margin-bottom:.24rem}.shop-footer-fixed[data-v-5f3ffccc]{position:fixed;bottom:0;left:0}.shop-footer-fixed .footer-nav[data-v-5f3ffccc]{border-top:1px solid #e2e2e2;height:1.05333333rem}.shop-footer-fixed .footer-nav i[data-v-5f3ffccc]{font-size:.4rem;margin-bottom:.06666667rem}.shop-header[data-v-5f3ffccc]{top:0;background:#fff;z-index:2}.shop-header .header-nav[data-v-5f3ffccc]{height:.98666667rem}.shop-header .header-nav em[data-v-5f3ffccc]{height:.04rem;width:100%;position:absolute;bottom:0;display:none}.shop-fl[data-v-5f3ffccc]{float:left}.shop-fr[data-v-5f3ffccc]{float:right}.shop-hide[data-v-5f3ffccc]{display:none}.shop-show[data-v-5f3ffccc]{display:block}.shop-box[data-v-5f3ffccc]{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.shop-inblock[data-v-5f3ffccc]{display:inline-block}.shop-box-center[data-v-5f3ffccc],.shop-box-justify[data-v-5f3ffccc]{display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-pack:justify;-o-box-pack:justify;box-pack:justify}.shop-box-center[data-v-5f3ffccc]{-webkit-box-align:center;-o-box-align:center;box-align:center}.clearfix[data-v-5f3ffccc]{zoom:1;_zoom:1;clear:both}.clearfix[data-v-5f3ffccc]:after{clear:both;content:"";display:block;width:0;height:0;visibility:hidden}.overflow-x[data-v-5f3ffccc]{overflow:hidden;overflow-x:hidden}.shop-textl[data-v-5f3ffccc]{text-align:left}.shop-textr[data-v-5f3ffccc]{text-align:right}.shop-textc[data-v-5f3ffccc]{text-align:center}.text-overflow[data-v-5f3ffccc]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.text-force-wrap[data-v-5f3ffccc]{word-break:break-all;white-space:pre-wrap}.text-not-wrap[data-v-5f3ffccc]{white-space:nowrap}.text-more-overflow[data-v-5f3ffccc]{overflow:hidden;position:relative;text-align:justify}.text-more-overflow[data-v-5f3ffccc]:after{content:" ... ";position:absolute;bottom:1px;right:0;padding:0 1px 1px 2px;background:#fff}.border-radius[data-v-5f3ffccc],.border[data-v-5f3ffccc]{position:relative;border-bottom:1px solid #e0e0e0}@media (-webkit-min-device-pixel-ratio:2){.border[data-v-5f3ffccc]{border:none;background-image:-webkit-gradient(linear,left top,left bottom,from(0),color-stop(#fff),color-stop(50%,#d9d9d9),color-stop(50%,transparent));background-image:linear-gradient(0,#fff,#d9d9d9 50%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}.fs0[data-v-5f3ffccc]{font-size:0}.fs26[data-v-5f3ffccc]{font-size:.17333333rem}.fs28[data-v-5f3ffccc]{font-size:.18666667rem!important}.fs30[data-v-5f3ffccc]{font-size:.2rem!important}.fs32[data-v-5f3ffccc]{font-size:.21333333rem!important}.fs34[data-v-5f3ffccc]{font-size:.22666667rem!important}.fs36[data-v-5f3ffccc]{font-size:.24rem}.fs40[data-v-5f3ffccc]{font-size:.26666667rem}.fs42[data-v-5f3ffccc]{font-size:.28rem}.fs44[data-v-5f3ffccc]{font-size:.29333333rem}.fs45[data-v-5f3ffccc]{font-size:.3rem}.fs46[data-v-5f3ffccc]{font-size:.30666667rem}.fs48[data-v-5f3ffccc]{font-size:.32rem!important}.fs50[data-v-5f3ffccc]{font-size:.33333333rem}.fs52[data-v-5f3ffccc]{font-size:.34666667rem}.fs54[data-v-5f3ffccc]{font-size:.36rem}.fs56[data-v-5f3ffccc]{font-size:.37333333rem}.fs60[data-v-5f3ffccc]{font-size:.4rem}.fs64[data-v-5f3ffccc]{font-size:.42666667rem}.fs66[data-v-5f3ffccc]{font-size:.44rem}.fs76[data-v-5f3ffccc]{font-size:.50666667rem}.fs70[data-v-5f3ffccc]{font-size:.46666667rem}.fs100[data-v-5f3ffccc]{font-size:.66666667rem}.shop-bg[data-v-5f3ffccc]{background:#e4393c;color:#fff}.shop-font[data-v-5f3ffccc]{color:#e4393c}.shop-font em[data-v-5f3ffccc]{display:block!important}.shopRgba[data-v-5f3ffccc]{color:hsla(0,0%,100%,.5)!important}.shopGreen[data-v-5f3ffccc]{color:#25ae5f}.shopFont[data-v-5f3ffccc]{color:#e4393c}.shopBlue[data-v-5f3ffccc]{color:#378ae8}.shopBlue-bg[data-v-5f3ffccc]{background:#378ae8}.shopGray[data-v-5f3ffccc]{color:#87858f}.shopRose-bg[data-v-5f3ffccc]{background:#f63854}.shopFff[data-v-5f3ffccc]{color:hsla(0,0%,100%,.4)!important}.shop-yellow[data-v-5f3ffccc]{background:#ffb12e}.shopborder[data-v-5f3ffccc]{color:#e4393c;border:1px solid #e4393c}.shop-border[data-v-5f3ffccc]{color:#000;border:1px solid #87858f}.shop-switch[data-v-5f3ffccc]:checked{border-color:#e4393c!important;background-color:#e4393c!important}.icon-fenglei[data-v-5f3ffccc]{display:block;margin:0 auto;width:.32rem;height:.32rem;background:url('+o("EDvs")+") 0 0 no-repeat;background-size:100% 100%}.icon-fenglei2[data-v-5f3ffccc]{display:block;margin:0 auto;width:.32rem;height:.32rem;background:url("+o("5sCz")+') 0 0 no-repeat;background-size:100% 100%}.el-checkbox__inner input[data-v-5f3ffccc]{display:none}.el-checkbox__inner input:checked+span[data-v-5f3ffccc]:after{-webkit-box-sizing:content-box;box-sizing:content-box;content:"";border:2px solid #e4393c;border-left:0;border-top:0;height:8px;left:5px;position:absolute;top:2px;-webkit-transform:rotate(45deg) scaleY(1);transform:rotate(45deg) scaleY(1);width:4px;-webkit-transition:-webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;transition:-webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;transition:transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;transition:transform .15s cubic-bezier(.71,-.46,.88,.6) .05s,-webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;-webkit-transform-origin:center;transform-origin:center}.el-checkbox__inner span[data-v-5f3ffccc]{display:inline-block;position:relative;border:1px solid #bfcbd9;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;width:18px;height:18px;background-color:#fff;z-index:1;-webkit-transition:border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);transition:border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);vertical-align:middle}@keyframes dialogShow-data-v-5f3ffccc{0%{bottom:-100%}to{bottom:0}}@-webkit-keyframes dialogShow-data-v-5f3ffccc{0%{bottom:-100%}to{bottom:0}}.switch[data-v-5f3ffccc]{display:inline-block;text-align:start;text-indent:0;text-transform:none;text-shadow:none;word-spacing:normal;letter-spacing:normal;cursor:pointer;-webkit-tap-highlight-color:transparent;-webkit-rtl-ordering:logical;-webkit-user-select:text;text-rendering:auto;-webkit-writing-mode:horizontal-tb;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;outline:0;border:1px solid #d2d2d2;background-color:#d2d2d2;-webkit-appearance:none;-moz-appearance:none;appearance:none;vertical-align:middle}.small-switch[data-v-5f3ffccc]{width:45px;height:24px;border-radius:14px}.switch[data-v-5f3ffccc]:before{position:absolute;top:0;left:0;background-color:#d2d2d2;text-align:right;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.small-switch[data-v-5f3ffccc]:before{width:21px;height:21px;border-radius:15px;line-height:27px;padding-right:10px}.switch[data-v-5f3ffccc]:after{position:absolute;top:0;left:0;background-color:#fff;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.4);box-shadow:0 1px 3px rgba(0,0,0,.4);content:"";-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.small-switch[data-v-5f3ffccc]:after{width:21px;height:21px;border-radius:15px;line-height:22px;padding-right:10px}.small-switch[data-v-5f3ffccc]:checked:after{width:21px;height:21px;border-radius:20px;-webkit-transform:translateX(21px);transform:translateX(21px)}.style-main-bg[data-v-5f3ffccc]{background:#e4393c;color:#fff}.style-main-font[data-v-5f3ffccc]{color:#e4393c}.style-main-border[data-v-5f3ffccc]{color:#e4393c;border:1px solid #e4393c}.style-witch[data-v-5f3ffccc]:checked{border-color:#e4393c;background-color:#e4393c}.style-middle-bg[data-v-5f3ffccc]{background:#ffb12e;color:#fff}.style-middle-font[data-v-5f3ffccc]{color:#ffb12e}.style-right-bg[data-v-5f3ffccc]{background:#fff;color:#000}.style-right-font[data-v-5f3ffccc]{color:#fff}.sale-wrapper[data-v-5f3ffccc]{width:100%;position:relative}.sale-wrapper .seller-top[data-v-5f3ffccc]{position:fixed;top:0;z-index:2;width:100%}.sale-wrapper .seller-top .seller-nav[data-v-5f3ffccc]{height:.79333333rem;line-height:.79333333rem;padding-left:.33333333rem;background:#f0f2f5;font-size:.3rem}.sale-wrapper .seller-top .seller-nav i[data-v-5f3ffccc]{color:#b2b2b2;margin-right:.16666667rem}.sale-wrapper .seller-top[data-v-5f3ffccc]{height:4vh}.sale-wrapper .index-nav[data-v-5f3ffccc]{margin-top:6vh;background:#fff;height:94vh}.sale-wrapper .index-nav .index-title[data-v-5f3ffccc]{font-size:.33333333rem;text-align:center;padding-top:.73333333rem}.sale-wrapper .index-nav .image-div[data-v-5f3ffccc]{width:2.93333333rem;height:2.93333333rem;margin:.8rem auto}.sale-wrapper .index-nav .index-msg[data-v-5f3ffccc]{font-size:.24rem;color:#666;width:74vw;margin:0 auto}',""])},kr9m:function(t,a,o){"use strict";function e(t){o("ydrn")}var c=o("lGvr"),i=o("Huuc"),f=o("0HdQ"),r=e,d=f(c.a,i.a,!1,r,"data-v-6bd4cf5e",null);a.a=d.exports},lGvr:function(t,a,o){"use strict";a.a={props:["background","isHeadPortrait"],data:function(){return{}},mounted:function(){}}},pbdT:function(t,a,o){a=t.exports=o("BkJT")(!1),a.push([t.i,".ik-box[data-v-6bd4cf5e]{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.box-sizing[data-v-6bd4cf5e]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.text-overflow[data-v-6bd4cf5e]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.imgbox[data-v-6bd4cf5e]{width:101%;height:101%;position:relative}.user-head-portrait[data-v-6bd4cf5e]{width:100%;height:100%;background-size:100%;background-repeat:no-repeat;background-position:50%;position:relative;z-index:1}.default-img[data-v-6bd4cf5e]{width:100%;height:100%;position:absolute;top:0;left:0;z-index:0;line-height:1;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-pack:center;-o-box-pack:center;box-pack:center;-webkit-box-align:center;-o-box-align:center;box-align:center}.default-img .iconfont[data-v-6bd4cf5e]{font-size:1.33333333rem;color:#fff}",""])},ydrn:function(t,a,o){var e=o("pbdT");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);o("8bSs")("c8df441a",e,!0)}});