webpackJsonp([48],{"8VVC":function(a,t,o){"use strict";function e(a){o("VHXP")}Object.defineProperty(t,"__esModule",{value:!0});var i=o("GuNr"),r=o("mXoM"),d=o("0HdQ"),n=e,s=d(i.a,r.a,!1,n,"data-v-3659c0a8",null);t.default=s.exports},GuNr:function(a,t,o){"use strict";var e=o("kr9m");t.a={data:function(){return{type:this.$route.params.type,busId:this.$route.params.busId||sessionStorage.getItem("busId"),saleMemberId:this.$route.params.saleMemberId,qrCodePath:null,imgUrl:null,shareObj:null}},components:{defaultImg:e.a},mounted:function(){this.commonFn.setTitle("我的二维码"),this.$store.commit("show_footer",!1),this.loadDatas(),this.qrCodePath=h5App.activeAPI.generate_qr_code_get+"?url=/seller/mallindex/"+this.busId+"/"+this.saleMemberId},beforeDestroy:function(){this.$store.commit("show_footer",!0)},methods:{loadDatas:function(a){var t=this,o={busId:t.busId,url:location.href,browerType:t.$store.state.browerType};t.ajaxRequest({url:h5App.activeAPI.seller_two_code_post,data:o,success:function(a){var o=a.data;t.imgUrl=a.imgUrl,t.getWxShare(o)}})},getWxShare:function(a){},back:function(){window.history.go(-1)}}}},MlwP:function(a,t,o){t=a.exports=o("BkJT")(!1),t.push([a.i,".ik-box[data-v-3659c0a8]{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.box-sizing[data-v-3659c0a8]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}body[data-v-3659c0a8]{background:#f0f2f5;color:#333}.shop-wrapper[data-v-3659c0a8]{width:100%;position:relative;max-width:1242px;margin:0 auto}.shop-main[data-v-3659c0a8]{width:100%}.shop-main .shop-list[data-v-3659c0a8]{padding:.26666667rem 0}.shop-main .shop-add-itme[data-v-3659c0a8]{width:100%;background:#fff;padding-top:.33333333rem;padding-left:.46666667rem;height:2.46666667rem}.shop-main .shop-add-itme .shop-add-txt[data-v-3659c0a8]{padding-bottom:.13333333rem}.shop-main .shop-add-itme .add-left[data-v-3659c0a8]{float:left;width:93%}.shop-main .shop-add-itme .add-left p[data-v-3659c0a8]{margin-bottom:.06666667rem}.shop-main .shop-add-itme .add-left p span[data-v-3659c0a8]{margin-left:.26666667rem}.shop-main .shop-add-itme .add-right[data-v-3659c0a8]{float:left;width:7%;color:#d1d2d4;height:100%;position:relative}.shop-main .shop-add-itme .add-right i[data-v-3659c0a8]{font-size:.32rem;position:absolute;top:.33333333rem}.shop-main .shop-add-itme .shop-add-footer[data-v-3659c0a8]{width:96%;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-align:center;-o-box-align:center;box-align:center;-webkit-box-pack:justify;-o-box-pack:justify;box-pack:justify}.shop-main .shop-add-itme .shop-add-footer .shop-add-button1[data-v-3659c0a8]{padding:.18666667rem 0}.shop-main .shop-add-itme .shop-add-footer .shop-add-button1 i[data-v-3659c0a8]{width:.35333333rem;height:.35333333rem;background:#d1d2d4;color:#fff;vertical-align:0}.shop-main .shop-add-itme .shop-add-footer .shop-add-button2 span[data-v-3659c0a8]{display:inline-block;padding:.18666667rem 0}.shop-main .shop-add-itme .shop-add-footer .shop-add-button2 i[data-v-3659c0a8]{margin-right:.06666667rem;font-size:.32rem;color:#d1d2d4}.em-tag[data-v-3659c0a8]{background:#e4393c;margin-right:.06666667rem}.em-flag[data-v-3659c0a8],.em-tag[data-v-3659c0a8]{color:#fff;padding:3px 5px 2px;line-height:1;display:inline-block;border-radius:2px;font-size:.18666667rem}.em-flag[data-v-3659c0a8]{background:-moz-linear-gradient(right,#f85e65,#e7242c)}.em-choice[data-v-3659c0a8],.em-input[data-v-3659c0a8],.em-search[data-v-3659c0a8]{color:#333;padding:.17333333rem .25333333rem;line-height:1;margin-right:.24rem;display:inline-block;border-radius:2px;font-size:.18666667rem;background:#f3f2f8;border-radius:3px}.em-input[data-v-3659c0a8]{width:.8rem;vertical-align:bottom;height:.6rem;border:0;margin-right:3px;padding:2px;text-align:center}.em-search[data-v-3659c0a8]{margin-bottom:.18666667rem;background:#d7d9dc}.em-nav[data-v-3659c0a8]{background:#fbd3d3;padding:.13333333rem .2rem;border-radius:3px}.shop-max-button[data-v-3659c0a8]{width:100%;height:100%;border-radius:5px;color:hsla(0,0%,100%,.3);display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-align:center;-o-box-align:center;box-align:center;-webkit-box-pack:center;-o-box-pack:center;box-pack:center}.shop-footer-ab[data-v-3659c0a8]{position:absolute}.shop-footer-ab[data-v-3659c0a8],.shop-footer[data-v-3659c0a8]{width:100%;bottom:0}.shop-footer-ab .shop-logo[data-v-3659c0a8],.shop-footer .shop-logo[data-v-3659c0a8]{margin:0 auto;width:3rem;height:.46666667rem;background:url("+o("DDBx")+');background-size:100%;margin-bottom:.24rem}.shop-footer-fixed[data-v-3659c0a8]{position:fixed;bottom:0;left:0}.shop-footer-fixed .footer-nav[data-v-3659c0a8]{border-top:1px solid #e2e2e2;height:1.05333333rem}.shop-footer-fixed .footer-nav i[data-v-3659c0a8]{font-size:.4rem;margin-bottom:.06666667rem}.shop-header[data-v-3659c0a8]{top:0;background:#fff;z-index:2}.shop-header .header-nav[data-v-3659c0a8]{height:.98666667rem}.shop-header .header-nav em[data-v-3659c0a8]{height:.04rem;width:100%;position:absolute;bottom:0;display:none}.shop-fl[data-v-3659c0a8]{float:left}.shop-fr[data-v-3659c0a8]{float:right}.shop-hide[data-v-3659c0a8]{display:none}.shop-show[data-v-3659c0a8]{display:block}.shop-box[data-v-3659c0a8]{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.shop-inblock[data-v-3659c0a8]{display:inline-block}.shop-box-center[data-v-3659c0a8],.shop-box-justify[data-v-3659c0a8]{display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-pack:justify;-o-box-pack:justify;box-pack:justify}.shop-box-center[data-v-3659c0a8]{-webkit-box-align:center;-o-box-align:center;box-align:center}.clearfix[data-v-3659c0a8]{zoom:1;_zoom:1;clear:both}.clearfix[data-v-3659c0a8]:after{clear:both;content:"";display:block;width:0;height:0;visibility:hidden}.overflow-x[data-v-3659c0a8]{overflow:hidden;overflow-x:hidden}.shop-textl[data-v-3659c0a8]{text-align:left}.shop-textr[data-v-3659c0a8]{text-align:right}.shop-textc[data-v-3659c0a8]{text-align:center}.text-overflow[data-v-3659c0a8]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.text-force-wrap[data-v-3659c0a8]{word-break:break-all;white-space:pre-wrap}.text-not-wrap[data-v-3659c0a8]{white-space:nowrap}.text-more-overflow[data-v-3659c0a8]{overflow:hidden;position:relative;text-align:justify}.text-more-overflow[data-v-3659c0a8]:after{content:" ... ";position:absolute;bottom:1px;right:0;padding:0 1px 1px 2px;background:#fff}.border-radius[data-v-3659c0a8],.border[data-v-3659c0a8]{position:relative;border-bottom:1px solid #e0e0e0}@media (-webkit-min-device-pixel-ratio:2){.border[data-v-3659c0a8]{border:none;background-image:-webkit-gradient(linear,left top,left bottom,from(0),color-stop(#fff),color-stop(50%,#d9d9d9),color-stop(50%,transparent));background-image:linear-gradient(0,#fff,#d9d9d9 50%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}.fs0[data-v-3659c0a8]{font-size:0}.fs26[data-v-3659c0a8]{font-size:.17333333rem}.fs28[data-v-3659c0a8]{font-size:.18666667rem!important}.fs30[data-v-3659c0a8]{font-size:.2rem!important}.fs32[data-v-3659c0a8]{font-size:.21333333rem!important}.fs34[data-v-3659c0a8]{font-size:.22666667rem!important}.fs36[data-v-3659c0a8],.fs38[data-v-3659c0a8]{font-size:.24rem}.fs40[data-v-3659c0a8]{font-size:.26666667rem}.fs42[data-v-3659c0a8],.fs43[data-v-3659c0a8]{font-size:.28rem}.fs44[data-v-3659c0a8]{font-size:.29333333rem}.fs45[data-v-3659c0a8]{font-size:.3rem}.fs46[data-v-3659c0a8]{font-size:.30666667rem}.fs48[data-v-3659c0a8]{font-size:.32rem!important}.fs50[data-v-3659c0a8]{font-size:.33333333rem}.fs52[data-v-3659c0a8]{font-size:.34666667rem}.fs54[data-v-3659c0a8]{font-size:.36rem}.fs56[data-v-3659c0a8]{font-size:.37333333rem}.fs60[data-v-3659c0a8]{font-size:.4rem}.fs64[data-v-3659c0a8]{font-size:.42666667rem}.fs66[data-v-3659c0a8]{font-size:.44rem}.fs76[data-v-3659c0a8]{font-size:.50666667rem}.fs70[data-v-3659c0a8]{font-size:.46666667rem}.fs100[data-v-3659c0a8]{font-size:.66666667rem}.shop-bg[data-v-3659c0a8]{background:#e4393c;color:#fff}.shop-gray-bg[data-v-3659c0a8]{background:#afadad;color:#fff}.shop-font[data-v-3659c0a8]{color:#e4393c}.shop-font em[data-v-3659c0a8]{display:block!important}.shopRgba[data-v-3659c0a8]{color:hsla(0,0%,100%,.5)!important}.shopGreen[data-v-3659c0a8]{color:#25ae5f}.shopFont[data-v-3659c0a8]{color:#e4393c}.shopBlue[data-v-3659c0a8]{color:#378ae8}.shopBlue-bg[data-v-3659c0a8]{background:#378ae8}.shopGray[data-v-3659c0a8]{color:#87858f}.shopRose-bg[data-v-3659c0a8]{background:#f63854}.shopFff[data-v-3659c0a8]{color:hsla(0,0%,100%,.4)!important}.shop-yellow[data-v-3659c0a8]{background:#ffb12e}.shopborder[data-v-3659c0a8]{color:#e4393c;border:1px solid #e4393c}.shop-border[data-v-3659c0a8]{color:#000;border:1px solid #87858f}.shop-switch[data-v-3659c0a8]:checked{border-color:#e4393c!important;background-color:#e4393c!important}.icon-fenglei[data-v-3659c0a8]{display:block;margin:0 auto;width:.32rem;height:.32rem;background:url('+o("EDvs")+") 0 0 no-repeat;background-size:100% 100%}.icon-fenglei2[data-v-3659c0a8]{display:block;margin:0 auto;width:.32rem;height:.32rem;background:url("+o("5sCz")+') 0 0 no-repeat;background-size:100% 100%}.el-checkbox__inner input[data-v-3659c0a8]{display:none}.el-checkbox__inner input:checked+span[data-v-3659c0a8]:after{-webkit-box-sizing:content-box;box-sizing:content-box;content:"";border:2px solid #e4393c;border-left:0;border-top:0;height:8px;left:5px;position:absolute;top:2px;-webkit-transform:rotate(45deg) scaleY(1);transform:rotate(45deg) scaleY(1);width:4px;-webkit-transition:-webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;transition:-webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;transition:transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;transition:transform .15s cubic-bezier(.71,-.46,.88,.6) .05s,-webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;-webkit-transform-origin:center;transform-origin:center}.el-checkbox__inner span[data-v-3659c0a8]{display:inline-block;position:relative;border:1px solid #bfcbd9;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;width:18px;height:18px;background-color:#fff;z-index:1;-webkit-transition:border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);transition:border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);vertical-align:middle}@keyframes dialogShow-data-v-3659c0a8{0%{bottom:-100%}to{bottom:0}}@-webkit-keyframes dialogShow-data-v-3659c0a8{0%{bottom:-100%}to{bottom:0}}.switch[data-v-3659c0a8]{display:inline-block;text-align:start;text-indent:0;text-transform:none;text-shadow:none;word-spacing:normal;letter-spacing:normal;cursor:pointer;-webkit-tap-highlight-color:transparent;-webkit-rtl-ordering:logical;-webkit-user-select:text;text-rendering:auto;-webkit-writing-mode:horizontal-tb;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;outline:0;border:1px solid #d2d2d2;background-color:#d2d2d2;-webkit-appearance:none;-moz-appearance:none;appearance:none;vertical-align:middle}.small-switch[data-v-3659c0a8]{width:45px;height:24px;border-radius:14px}.switch[data-v-3659c0a8]:before{position:absolute;top:0;left:0;background-color:#d2d2d2;text-align:right;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.small-switch[data-v-3659c0a8]:before{width:21px;height:21px;border-radius:15px;line-height:27px;padding-right:10px}.switch[data-v-3659c0a8]:after{position:absolute;top:0;left:0;background-color:#fff;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.4);box-shadow:0 1px 3px rgba(0,0,0,.4);content:"";-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.small-switch[data-v-3659c0a8]:after{width:21px;height:21px;border-radius:15px;line-height:22px;padding-right:10px}.small-switch[data-v-3659c0a8]:checked:after{width:21px;height:21px;border-radius:20px;-webkit-transform:translateX(21px);transform:translateX(21px)}.style-main-bg[data-v-3659c0a8]{background:#e4393c;color:#fff}.style-main-font[data-v-3659c0a8]{color:#e4393c}.style-main-border[data-v-3659c0a8]{color:#e4393c;border:1px solid #e4393c}.style-witch[data-v-3659c0a8]:checked{border-color:#e4393c;background-color:#e4393c}.style-middle-bg[data-v-3659c0a8]{background:#ffb12e;color:#fff}.style-middle-font[data-v-3659c0a8]{color:#ffb12e}.style-right-bg[data-v-3659c0a8]{background:#fff;color:#000}.style-right-font[data-v-3659c0a8]{color:#fff}.dialog-input-main .dialog-input-box[data-v-3659c0a8]{width:100%;font-size:0;padding:0 .53333333rem}.dialog-input-main .dialog-input-box .dialog-input[data-v-3659c0a8]{width:100%;padding:.16666667rem;margin-bottom:.13333333rem;border:1px solid #e1e1e3;border-radius:3px}.dialog-input-main .dialog-input-box .dialog-input input[data-v-3659c0a8]{width:100%;height:100%;border:0}.dialog-input-main .dialog-input-box .dialog-code input[data-v-3659c0a8]{width:68%}.dialog-input-main .dialog-input-box .dialog-code span[data-v-3659c0a8]{padding:.16666667rem 0}.dialog-input-main .dialog-bottom[data-v-3659c0a8]{width:100%;font-size:0;display:-webkit-box}.dialog-input-main .dialog-bottom .dialog-button1[data-v-3659c0a8]{text-align:center;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-webkit-box-pack:center;-o-box-pack:center;box-pack:center;color:#25ae5f;padding:.3rem 0}.dialog-input-main .dialog-bottom .dialog-button2[data-v-3659c0a8]{margin:8% auto;text-align:center;display:block;width:70%;background:#e4393c;color:#fff;padding:.2rem 0;border-radius:5px}.sale-wrapper[data-v-3659c0a8]{width:100%;position:relative}.sale-wrapper .seller-top[data-v-3659c0a8]{position:fixed;top:0;z-index:2;width:100%}.sale-wrapper .seller-top .seller-nav[data-v-3659c0a8]{height:.79333333rem;line-height:.79333333rem;padding-left:.33333333rem;background:#f0f2f5;font-size:.3rem}.sale-wrapper .seller-top .seller-nav i[data-v-3659c0a8]{color:#b2b2b2;margin-right:.16666667rem}.sale-wrapper .seller-top[data-v-3659c0a8]{height:4vh}.sale-wrapper .index-nav[data-v-3659c0a8]{margin-top:6vh;background:#fff;height:94vh}.sale-wrapper .index-nav .index-title[data-v-3659c0a8]{font-size:.33333333rem;text-align:center;padding-top:.73333333rem}.sale-wrapper .index-nav .image-div[data-v-3659c0a8]{width:4rem;height:4rem;margin:.8rem auto}.sale-wrapper .index-nav .index-msg[data-v-3659c0a8]{font-size:.24rem;color:#666;width:74vw;margin:0 auto}',""])},VHXP:function(a,t,o){var e=o("MlwP");"string"==typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);o("8bSs")("2ec1c240",e,!0)},YGSI:function(a,t,o){var e=o("bGLP");"string"==typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);o("8bSs")("638df2b8",e,!0)},bGLP:function(a,t,o){t=a.exports=o("BkJT")(!1),t.push([a.i,".ik-box[data-v-4e83c8fe]{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.box-sizing[data-v-4e83c8fe]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.text-overflow[data-v-4e83c8fe]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.imgbox[data-v-4e83c8fe],.user-head-portrait[data-v-4e83c8fe]{width:100%;height:100%;position:relative}.user-head-portrait[data-v-4e83c8fe]{background-size:100%;background-repeat:no-repeat;background-position:50%;z-index:1}.default-img[data-v-4e83c8fe]{width:100%;height:100%;position:absolute;top:0;left:0;z-index:0;line-height:1;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-pack:center;-o-box-pack:center;box-pack:center;-webkit-box-align:center;-o-box-align:center;box-align:center}.default-img .iconfont[data-v-4e83c8fe]{font-size:1.33333333rem;color:#fff}",""])},irQJ:function(a,t,o){"use strict";var e=function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("div",{staticClass:"imgbox"},[o("div",{staticClass:"user-head-portrait",style:{backgroundImage:"url("+a.background+")"}}),a._v(" "),0==a.isHeadPortrait&&void 0==a.background?o("div",{staticClass:"default-img"},[o("i",{staticClass:"iconfont icon-tupianjiazaizhong-",staticStyle:{color:"#d6d6d6"}})]):a._e(),a._v(" "),1==a.isHeadPortrait&&void 0==a.background?o("div",{staticClass:"default-img"},[o("i",{staticClass:"iconfont icon-ren1"})]):a._e()])},i=[],r={render:e,staticRenderFns:i};t.a=r},kr9m:function(a,t,o){"use strict";function e(a){o("YGSI")}var i=o("lGvr"),r=o("irQJ"),d=o("0HdQ"),n=e,s=d(i.a,r.a,!1,n,"data-v-4e83c8fe",null);t.a=s.exports},lGvr:function(a,t,o){"use strict";t.a={props:["background","isHeadPortrait"],data:function(){return{}},mounted:function(){}}},mXoM:function(a,t,o){"use strict";var e=function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("div",{staticClass:"shop-wrapper sale-wrapper"},[o("div",{staticClass:"seller-top"},[o("div",{staticClass:"seller-nav"},[o("i",{staticClass:"iconfont icon-jiantou-copy1",on:{click:a.back}}),a._v("我的二维码\n      ")])]),a._v(" "),o("div",{staticClass:"index-nav clearfix"},[o("div",{staticClass:"index-title"},[a._v("我的二维码")]),a._v(" "),o("div",{staticClass:"image-div"},[o("img",{attrs:{src:a.qrCodePath}})]),a._v(" "),o("div",{staticClass:"index-msg"},[a._v("将此链接或二维码图片发送给您的好友，并且好友\n完成下单购买，您就可以获得商家设置的丰厚佣金哦")])])])},i=[],r={render:e,staticRenderFns:i};t.a=r}});