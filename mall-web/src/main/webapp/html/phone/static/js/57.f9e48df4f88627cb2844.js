webpackJsonp([57],{FNBn:function(t,o,n){var e=n("Q+ww");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n("8bSs")("3dc04f8c",e,!0)},"Q+ww":function(t,o,n){o=t.exports=n("BkJT")(!1),o.push([t.i,'.comment-main{width:100%;position:relative}.comment-main .comment-nav{height:.77333333rem;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-pack:justify;-o-box-pack:justify;box-pack:justify;-webkit-box-align:center;-o-box-align:center;box-align:center;padding:0 .29333333rem}.comment-main .comment-no{width:100%;text-align:center;padding-top:.72666667rem;padding-bottom:.30666667rem}.comment-main .comment-content{width:100%;background:#fff}.comment-main .comment-content .comment-item{width:100%;padding:.26666667rem .18rem}.comment-main .comment-content .comment-user-img{width:.85333333rem;height:.85333333rem;background-size:cover;background-position:50%;float:left;border-radius:100%;overflow:hidden}.comment-main .comment-content .comment-user-fr{width:85%;float:right;padding:.1rem 0}.comment-main .comment-content .comment-user-name{width:100%}.comment-main .comment-content .comment-txt{width:100%;padding:.13333333rem 0}.comment-main .comment-content .comment-photo{max-width:200%;overflow-x:auto;-webkit-overflow-scrolling:touch;font-size:0;padding-bottom:.13333333rem;height:2.2rem;display:-webkit-box;display:-moz-box;display:-o-box;display:box;position:relative}.comment-main .comment-content .comment-photo .comment-img{width:2rem;height:2rem;border-radius:8px;background-size:cover;background-position:50%;margin-right:.2rem;border:1px solid #eee}.comment-main .comment-content .comment-choice{width:100%;font-size:0}.comment-main .comment-content .comment-choice span{margin-right:.38666667rem}.comment-main .comment-content .comment-reply{width:100%;margin-top:.32rem;background:#f2f2f2;padding:.2rem;text-align:justify;border-radius:2px;position:relative}.comment-main .comment-content .comment-reply:after{content:" ";position:absolute;top:-.13333333rem;left:.18666667rem;width:0;height:0;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:10px solid #f2f2f2}.comment-main .comment-content .comment-reply img{width:.28rem;height:.28rem}::-webkit-scrollbar{width:0;height:0;opacity:0}.scrollbar{scrollbar-face-color:#fff;scrollbar-arrow-color:#fff;scrollbar-highlight-color:#fff;scrollbar-3dlight-color:#fff;scrollbar-shadow-color:#fff;scrollbar-darkshadow-color:#fff;scrollbar-track-color:#fff;scrollbar-base-color:#fff}',""])},"W+QN":function(t,o,n){"use strict";function e(t){n("FNBn")}Object.defineProperty(o,"__esModule",{value:!0});var a=n("kOKw"),i=n("haLd"),c=n("0HdQ"),m=e,s=c(a.a,i.a,!1,m,null,null);o.default=s.exports},haLd:function(t,o,n){"use strict";var e=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"comment-main"},[1==t.isShow?n("div",{staticClass:"comment-nav border"},[n("div",{staticClass:"em-nav fs36",on:{click:function(o){t.commentAjax("","评论",t.countMap.all)}}},[t._v("全部("+t._s(t.countMap.all)+")")]),t._v(" "),n("div",{staticClass:"em-nav fs36",on:{click:function(o){t.commentAjax(1,"好评",t.countMap.hao)}}},[t._v("好评("+t._s(t.countMap.hao)+")")]),t._v(" "),n("div",{staticClass:"em-nav fs36",on:{click:function(o){t.commentAjax(0,"中评",t.countMap.zhong)}}},[t._v("中评("+t._s(t.countMap.zhong)+")")]),t._v(" "),n("div",{staticClass:"em-nav fs36",on:{click:function(o){t.commentAjax(-1,"差评",t.countMap.cha)}}},[t._v("差评("+t._s(t.countMap.cha)+")")])]):t._e(),t._v(" "),0==t.isShow?n("div",{staticClass:"comment-no"},[n("p",{staticClass:"fs40 shopGray"},[t._v("暂无"+t._s(t.textNo))])]):t._e(),t._v(" "),1==t.isShow?n("div",{staticClass:"comment-content"},t._l(t.commentList,function(o){return n("div",{staticClass:"comment-item border"},[n("div",{staticClass:"comment-user clearfix"},[n("div",{staticClass:"comment-user-img"},[n("default-img",{attrs:{background:o.headimgurl,isHeadPortrait:1,size:"0.6rem"}})],1),t._v(" "),n("div",{staticClass:"comment-user-fr"},[n("p",{staticClass:"comment-user-name fs40"},[t._v(t._s(o.nickname))]),t._v(" "),n("p",{staticClass:"comment-user-time fs32 shopGray"},[t._v(t._s(o.createTime))])])]),t._v(" "),n("div",{staticClass:"comment-txt fs40"},[t._v("\n                "+t._s(o.content)+"\n            ")]),t._v(" "),1==o.is_upload_image?n("div",{staticClass:"comment-photo scrollbar clearfix"},t._l(o.imageList,function(o){return n("div",{staticClass:"comment-img"},[n("default-img",{attrs:{background:t.imgUrl+o.imageUrl,isHeadPortrait:0}})],1)})):t._e(),t._v(" "),o.product_specificas?n("div",{staticClass:"comment-choice"},t._l(o.specList,function(o){return n("span",{staticClass:"fs36 shopGray"},[t._v("\n                    "+t._s(o.name)+": "+t._s(o.value)+" \n                  ")])})):t._e(),t._v(" "),1==o.is_rep?n("div",{staticClass:"comment-reply fs32",domProps:{innerHTML:t._s("[商家回复]:"+o.replyContent)}}):t._e()])})):t._e()])},a=[],i={render:e,staticRenderFns:a};o.a=i},kOKw:function(t,o,n){"use strict";o.a={components:{},data:function(){return{countMap:{hao:0,zhong:0,cha:0},commentList:"",isShow:-1,textNo:"",imgUrl:"",path:""}},methods:{commentAjax:function(t,o,n){var e=this;e.textNo=o||"评论",0!==n&&e.ajaxRequest({url:h5App.activeAPI.phoneProduct_getProductComment_post,data:{busId:e.$route.params.busId,productId:e.$route.params.goodsId,feel:t||""},success:function(t){if(!t.data.commentList)return void(e.isShow=0);if(e.isShow=1,e.imgUrl=t.imgUrl,e.path=t.path,t.data.commentList.forEach(function(o,n){o.replyContent&&(t.data.commentList[n].replyContent=e.commonFn.emoji(o.replyContent,e.path))}),o)return void(e.commentList=t.data.commentList);e.commentList=t.data.commentList;var n=t.data.countMap;e.countMap={hao:n.hao||0,zhong:n.zhong||0,cha:n.cha||0},e.countMap.all=e.countMap.hao+e.countMap.zhong+e.countMap.cha||0,console.log(e.countMap,"2countMap")}})}},mounted:function(){this.commentAjax()}}}});