webpackJsonp([12],{"+aB4":function(a,t,i){"use strict";var e=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"shop-wrapper payMoney-wapper",attrs:{id:"app"}},[null!=a.auctionObj?i("section",{staticClass:"payMoney-main"},[i("div",{},[null!=a.productObj?i("div",{staticClass:"payMoney-item border"},[i("div",{staticClass:"payMoney-title fs40"},[a._v("\n                     拍品名称\n                 ")]),a._v(" "),i("div",{staticClass:"payMoney-txt fs40"},[a._v("\n                     "+a._s(a.productObj.proName)+"\n                 ")])]):a._e(),a._v(" "),null!=a.selectPayWay?i("div",{staticClass:"payMoney-item border",on:{click:a.showDialog}},[i("div",{staticClass:"payMoney-title fs40"},[a._v("\n                     支付方式\n                 ")]),a._v(" "),i("div",{staticClass:"payMoney-txt fs40"},[a._v("\n                     "+a._s(a.selectPayWay.wayName)+"\n                 ")])]):a._e(),a._v(" "),i("div",{staticClass:"payMoney-item border"},[i("div",{staticClass:"payMoney-title fs40"},[a._v("\n                     应付金额\n                 ")]),a._v(" "),i("div",{staticClass:"payMoney-txt fs40"},[a._v("\n                     ￥"+a._s(a.auctionObj.aucMargin)+"\n                 ")])])]),a._v(" "),i("div",{staticClass:"payMoney-item fs40 "},[i("label",{staticClass:"el-checkbox__inner"},[i("input",{directives:[{name:"model",rawName:"v-model",value:a.isAgree,expression:"isAgree"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(a.isAgree)?a._i(a.isAgree,null)>-1:a.isAgree},on:{change:function(t){var i=a.isAgree,e=t.target,o=!!e.checked;if(Array.isArray(i)){var s=a._i(i,null);e.checked?s<0&&(a.isAgree=i.concat([null])):s>-1&&(a.isAgree=i.slice(0,s).concat(i.slice(s+1)))}else a.isAgree=o}}}),a._v(" "),i("span"),a._v(" 已阅读\n             ")]),a._v(" "),i("a",{staticClass:"shopBlue",on:{click:a.xieyi}},[a._v("《用户竞拍服务协议》")])]),a._v(" "),i("div",{staticClass:"payMoney-buttom fs52"},[i("div",{staticClass:"shop-max-button shop-bg",staticStyle:{color:"#fff"},on:{click:a.submitData}},[a._v("\n                 交保证金\n             ")])])]):a._e(),a._v(" "),i("section",{staticClass:"shop-footer-ab shop-footer"},[1==a.$store.state.isAdvert?i("technical-support"):a._e()],1),a._v(" "),a.isShowPayWay?i("section",{staticClass:"shop-main-no fs40 my-bond"},[i("pay-way-dialog",{attrs:{name:a.title,dialogList:a.payWayList,closeDialog:a.isShowPayWay},on:{"update:closeDialog":function(t){a.isShowPayWay=t},selectDialog:a.selectDialogChange}})],1):a._e()])},o=[],s={render:e,staticRenderFns:o};t.a=s},"0HO4":function(a,t,i){t=a.exports=i("BkJT")(!1),t.push([a.i,".payMoney-wapper[data-v-86a8d2fa]{background:#fff;width:100%;height:100%}.payMoney-wapper .payMoney-main[data-v-86a8d2fa]{width:100%;padding:.2rem}.payMoney-wapper .payMoney-main .payMoney-item[data-v-86a8d2fa]{width:100%;height:.82666667rem;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-align:center;-o-box-align:center;box-align:center;-webkit-box-pack:justify;-o-box-pack:justify;box-pack:justify;line-height:1}.payMoney-wapper .payMoney-main .payMoney-buttom[data-v-86a8d2fa]{margin:.13333333rem auto 0;width:90%;height:1.05333333rem}.el-checkbox__inner input[data-v-86a8d2fa]{display:block;opacity:0;width:.4rem;height:.33333333rem;position:absolute;z-index:2}",""])},"1gek":function(a,t,i){var e=i("JhJl");"string"==typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);i("8bSs")("6dce6007",e,!0)},"6Rze":function(a,t,i){var e=i("8NOo");"string"==typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);i("8bSs")("11e764aa",e,!0)},"8NOo":function(a,t,i){t=a.exports=i("BkJT")(!1),t.push([a.i,".sp-dialog[data-v-521f91ba]{width:100%;height:100%;background:rgba(0,0,0,.5);position:fixed;z-index:99;top:0;left:0}.sp-dialog .sp-dialog-main[data-v-521f91ba]{width:100%;position:absolute;background:#fff;bottom:0;animation:dialogShow-data-v-521f91ba .2s;-moz-animation:dialogShow-data-v-521f91ba .2s;-webkit-animation:dialogShow-data-v-521f91ba .2s}.sp-dialog .sp-dialog-title[data-v-521f91ba]{font-size:0;width:100%;padding-left:.2rem;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-pack:justify;-o-box-pack:justify;box-pack:justify;-webkit-box-align:center;-o-box-align:center;box-align:center}.sp-dialog .sp-dialog-title div[data-v-521f91ba]{padding:.2rem 0;width:85%}.sp-dialog .sp-dialog-title>i[data-v-521f91ba]{padding:.2rem;display:block}.sp-dialog .sp-dialog-title-center[data-v-521f91ba]{font-size:0;width:100%;position:relative;padding:.2rem}.sp-dialog .sp-dialog-title-center div[data-v-521f91ba]{margin:0 auto;width:85%;text-align:center}.sp-dialog .sp-dialog-title-center>i[data-v-521f91ba]{position:absolute;display:block;right:0;top:0;padding:.2rem}@keyframes dialogShow-data-v-521f91ba{0%{bottom:-100%}to{bottom:0}}@-webkit-keyframes dialogShow-data-v-521f91ba{0%{bottom:-100%}to{bottom:0}}",""])},Dxkk:function(a,t,i){"use strict";function e(a){i("f8Hb")}Object.defineProperty(t,"__esModule",{value:!0});var o=i("ynaC"),s=i("+aB4"),n=i("0HdQ"),l=e,c=n(o.a,s.a,!1,l,"data-v-86a8d2fa",null);t.default=c.exports},F9F1:function(a,t,i){"use strict";var e=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("sp-dialog",{attrs:{title:a.name,visible:a.isShow,center:"center"},on:{"update:visible":function(t){a.isShow=t}}},[null!=a.dialogList&&a.dialogList.length>0?i("div",{staticClass:"payment-dialog-main"},a._l(a.dialogList,function(t){return i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isHide,expression:"!obj.isHide"}],staticClass:"payment-dialog-list shop-box-center border",on:{click:function(i){a.selectDialog(t)}}},[i("div",{staticClass:"payment-dialog-title shop-box-center"},[i("i",{staticClass:"iconfont ",class:"icon-"+t.claName}),a._v(" "),i("span",{staticClass:"fs42"},[a._v(a._s(t.wayName))])]),a._v(" "),i("i",{staticClass:"iconfont icon-jiantou-copy fs40"})])})):a._e()])},o=[],s={render:e,staticRenderFns:o};t.a=s},JhJl:function(a,t,i){t=a.exports=i("BkJT")(!1),t.push([a.i,".payment-dialog-main[data-v-353abc43]{width:100%}.payment-dialog-main .payment-dialog-list[data-v-353abc43]{width:100%;padding:.2rem;font-size:0}.payment-dialog-main .payment-dialog-list i.icon-jiantou-copy[data-v-353abc43]{color:#c7c7cc}.payment-dialog-main .payment-dialog-list .payment-dialog-title i[data-v-353abc43]{display:block;font-size:.63333333rem}.payment-dialog-main .payment-dialog-list .payment-dialog-title span[data-v-353abc43]{display:block;margin-left:.2rem}.payment-dialog-main .payment-dialog-list .icon-alipay[data-v-353abc43]{color:#08aaeb}.payment-dialog-main .payment-dialog-list .icon-daodianzhifu[data-v-353abc43],.payment-dialog-main .payment-dialog-list .icon-miankuaidi[data-v-353abc43],.payment-dialog-main .payment-dialog-list .icon-weixinzhifu[data-v-353abc43]{color:#00c901}.payment-dialog-main .payment-dialog-list .icon-chuzhika[data-v-353abc43],.payment-dialog-main .payment-dialog-list .icon-daifukuan[data-v-353abc43],.payment-dialog-main .payment-dialog-list .icon-daodianziti[data-v-353abc43],.payment-dialog-main .payment-dialog-list .icon-duofenlogoyuanwenjian-[data-v-353abc43],.payment-dialog-main .payment-dialog-list .icon-fenbizhifu[data-v-353abc43],.payment-dialog-main .payment-dialog-list .icon-huodaofukuan[data-v-353abc43]{color:#f7ba2a}",""])},aEIe:function(a,t,i){"use strict";var e=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:a.visible,expression:"visible"}],staticClass:"sp-dialog",on:{click:function(t){if(t.target!==t.currentTarget)return null;a.handleClose(t)}}},[i("div",{staticClass:"sp-dialog-main"},["center"==a.center?i("div",{staticClass:"sp-dialog-title-center border"},[i("div",{staticClass:"text-overflow fs46"},[a._v(a._s(a.title))]),a._v(" "),i("i",{staticClass:"iconfont icon-guanbi fs40",on:{click:a.handleClose}})]):i("div",{staticClass:"sp-dialog-title border"},[i("div",{staticClass:"text-overflow fs40",style:"text-align:"+a.center},[a._v(a._s(a.title))]),a._v(" "),i("i",{staticClass:"iconfont icon-guanbi fs40",on:{click:a.handleClose}})]),a._v(" "),i("div",{staticClass:"sp-dialog-body"},[a._t("default")],2)])])},o=[],s={render:e,staticRenderFns:o};t.a=s},ego2:function(a,t,i){"use strict";var e=i("mADR");t.a={name:"payWayDialog",props:["name","dialogList","type","busId"],data:function(){return{list:[],isShowDialog:!1,data:{},isShow:!0}},components:{spDialog:e.a},watch:{isShow:function(){this.$emit("update:closeDialog",this.isShow),this.$emit("closeDialog-change",this.isShow)}},methods:{selectDialog:function(a){this.$emit("selectDialog",[this.type,a,this.busId]),this.isShow=!1}},mounted:function(){this.isShow=!0}}},f8Hb:function(a,t,i){var e=i("0HO4");"string"==typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);i("8bSs")("d2ce66ea",e,!0)},mADR:function(a,t,i){"use strict";function e(a){i("6Rze")}var o=i("se72"),s=i("aEIe"),n=i("0HdQ"),l=e,c=n(o.a,s.a,!1,l,"data-v-521f91ba",null);t.a=c.exports},se72:function(a,t,i){"use strict";t.a={name:"splDialog",props:{center:{type:String,default:"left"},title:{type:String,default:!0},visible:{type:Boolean,default:!0}},watch:{visible:function(a){a?this.commonFn.disableScroll():this.commonFn.allowScroll()}},computed:{},methods:{handleClose:function(){this.$emit("update:visible",!1),this.$emit("visible-change",!1)}},mounted:function(){}}},td3i:function(a,t,i){"use strict";function e(a){i("1gek")}var o=i("ego2"),s=i("F9F1"),n=i("0HdQ"),l=e,c=n(o.a,s.a,!1,l,"data-v-353abc43",null);t.a=c.exports},ynaC:function(a,t,i){"use strict";var e=i("td3i");t.a={name:"myAddress",data:function(){return{isShow:!1,busId:this.$route.params.busId||sessionStorage.getItem("busId"),proId:this.$route.params.proId,aucId:this.$route.params.aucId,invId:this.$route.params.invId,agree:this.$route.params.agree,isAgree:!1,auctionObj:null,productObj:null,selectPayWay:null,payWayList:null,isShowPayWay:!1,title:"选择支付方式"}},components:{payWayDialog:e.a},mounted:function(){1==this.agree&&(this.isAgree=!0),this.commonFn.setTitle("交保证金报名"),this.$store.commit("show_footer",!1),this.loadData()},beforeDestroy:function(){this.$store.commit("show_footer",!0)},methods:{loadData:function(){var a=this,t={busId:a.busId,url:location.href,browerType:a.$store.state.browerType,invId:this.invId,proId:this.proId,auctionId:this.aucId};a.ajaxRequest({url:h5App.activeAPI.get_margin_post,data:t,success:function(t){var i=t.data;a.imgUrl=t.imgUrl,console.log(i,"myData"),a.auctionObj=i,a.productObj=i.product,a.payWayList=i.payWayList,null==a.selectPayWay&&(a.selectPayWay=a.payWayList[0])}})},submitData:function(){var a=this,t=this.auctionObj,i=this.productObj,e=this.selectPayWay,o=this.commonFn;if(!this.isAgree)return void a.$store.commit("error_msg","请阅读用户竞拍协议");var s={busId:a.busId,url:location.href,browerType:a.$store.state.browerType,proId:i.id,aucId:this.aucId,marginMoney:t.aucMargin,proName:i.proName,proImgUrl:t.imageObj.imageUrl,proSpecificaIds:t.proSpecificaIds,payWay:e.id};console.log(s,"---"),a.ajaxRequest({url:h5App.activeAPI.add_margin_post,data:s,loading:!0,success:function(t){var i=t.data,e=i.payUrl;if(o.isNotNull(e))return void(location.href=e);if(2==i.payWay){e="/auction/success/"+a.busId,a.$router.push(e)}a.$store.commit("is_show_loading",!1)}})},xieyi:function(){var a=this.busId,t=this.aucId,i=this.proId,e=this.invId||0;this.$router.push("/auction/agreement/"+a+"/"+i+"/"+t+"/"+e)},showDialog:function(){this.isShowPayWay=!0},selectDialogChange:function(a){this.selectPayWay=a[1]}}}}});