webpackJsonp([50],{"/CAm":function(t,s,e){"use strict";function a(t){e("wjlB")}Object.defineProperty(s,"__esModule",{value:!0});var c={components:{},data:function(){return{isShow:-1,specData:""}},methods:{specAjax:function(){var t=this;t.textNo=name,t.ajaxRequest({status:!1,url:h5App.activeAPI.phoneProduct_getProductParams_post,data:{productId:t.$route.params.goodsId},success:function(s){if(1==s.code||!s.data.length>0)return void(t.isShow=0);t.isShow=1,t.specData=s.data}})}},mounted:function(){this.specAjax()}},p=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"spec-wrapper"},[0==t.isShow?e("div",{staticClass:"spec-no "},[e("p",{staticClass:"fs40 shopGray"},[t._v("暂无规格")])]):t._e(),t._v(" "),1==t.isShow?e("div",{staticClass:"spec-content"},t._l(t.specData,function(s){return e("div",{staticClass:"spec-box"},[e("p",{staticClass:"spec-list boder"},[e("span",{staticClass:"fs40"},[t._v(t._s(s.paramsName))]),t._v(" "),e("span",{staticClass:"fs40"},[t._v(t._s(s.paramsValue))])])])})):t._e()])},d=[],n={render:p,staticRenderFns:d},o=n,r=e("X4nt"),i=a,l=r(c,o,!1,i,"data-v-63dbc067",null);s.default=l.exports},OLeP:function(t,s,e){s=t.exports=e("I71c")(!1),s.push([t.i,".spec-wrapper .spec-no[data-v-63dbc067]{width:100%;text-align:center;padding-top:.72666667rem;padding-bottom:.30666667rem}.spec-wrapper .spec-content[data-v-63dbc067]{background:#fff;padding:.2rem}.spec-wrapper .spec-content .spec-box[data-v-63dbc067]{width:100%;border:1px solid #ddd;border-bottom:0}.spec-wrapper .spec-content .spec-box[data-v-63dbc067]:last-child{border-bottom:1px solid #ddd}.spec-wrapper .spec-content .spec-list[data-v-63dbc067]{width:100%}.spec-wrapper .spec-content .spec-list span[data-v-63dbc067]{display:inline-block;padding:.2rem}.spec-wrapper .spec-content .spec-list span[data-v-63dbc067]:first-of-type{width:25%;border-right:1px solid #ddd}.spec-wrapper .spec-content .spec-list span[data-v-63dbc067]:last-of-type{width:75%}",""])},wjlB:function(t,s,e){var a=e("OLeP");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("5ten")("278590c4",a,!0,{})}});