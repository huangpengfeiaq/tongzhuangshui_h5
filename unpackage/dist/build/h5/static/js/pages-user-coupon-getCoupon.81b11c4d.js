(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-coupon-getCoupon"],{"03ad":function(e,t,i){var a=i("a4f4");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=i("4f06").default;r("6a9bd4e6",a,!0,{sourceMap:!1,shadowMode:!1})},3706:function(e,t,i){"use strict";i.r(t);var a=i("438f"),r=i("fc10");for(var n in r)"default"!==n&&function(e){i.d(t,e,function(){return r[e]})}(n);i("e261");var o=i("2877"),c=Object(o["a"])(r["default"],a["a"],a["b"],!1,null,"045c034e",null);t["default"]=c.exports},"438f":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",[i("v-uni-image",{staticStyle:{width:"750upx",height:"450upx","background-color":"#f5f5f5"},attrs:{src:"../../../static/img/coupon/top2.gif",mode:"aspectFit"}})],1),e.row.couponsName?i("v-uni-view",{staticClass:"row"},[i("v-uni-view",{staticClass:"carrier"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-view",{staticClass:"title"},[e._v(e._s(e.row.couponsName))]),i("v-uni-view",{staticClass:"term"},[e._v(e._s(e.row.effectiveDate)+" ~ "+e._s(e.row.expiryDate))]),i("v-uni-view",{staticClass:"gap-top"}),i("v-uni-view",{staticClass:"gap-bottom"})],1),i("v-uni-view",{staticClass:"right",class:4===e.row.couponsScope?"":"onlyShop",on:{click:function(t){t=e.$handleEvent(t),e.toCart()}}},[i("v-uni-view",{staticClass:"ticket"},[i("v-uni-view",{staticClass:"num"},[e._v(e._s(e.row.couponsAmount))]),i("v-uni-view",{staticClass:"unit"},[e._v("元")])],1),0!==e.row.minimumAmount?i("v-uni-view",{staticClass:"criteria"},[e._v("满"+e._s(e.row.minimumAmount)+"使用")]):e._e(),0===e.row.minimumAmount?i("v-uni-view",{staticClass:"criteria"},[e._v("无门槛")]):e._e(),i("v-uni-view",{staticClass:"use",class:4===e.row.couponsScope?"":"onlyShop"},[e._v("去使用")])],1)],1)],1):e._e(),i("v-uni-view",{staticClass:"row2"},[i("v-uni-view",[i("v-uni-label",{staticClass:"title"},[e._v("---------------活动规则---------------")]),i("ol",[i("li",[e._v("1. 下单即可享受红包立减优惠；")]),i("li",[e._v("2. 每个分享红包链接仅限10人领取；")]),i("li",[e._v("3. 每人只有1次领取红包机会；")]),i("li",[e._v("4. 红包仅限在线支付使用，且收货人手机号、领取红包时输入的手机号和账号中的手机号需为同一手机号；")]),i("li",[e._v("5. 红包可以与满减、折扣等其他优惠叠加使用，首单红包不可叠加使用；")]),i("li",[e._v("6. 红包可以在来一桶水小程序下单时选择在线支付时使用；")]),i("li",[e._v("7. 其他未尽事宜，请咨询客服85222235")])])],1)],1)],1)},r=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return r})},"5c1b":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{row:{},couponsId:0}},onHide:function(){this.toCart()},onShareAppMessage:function(e){return{title:"【来一桶水】快捷定水专享红包，不仅是快更能省钱!",path:"/pages/user/coupon/getCoupon?couponsId="+this.couponsId,imageUrl:"../../../static/img/coupon/top2.gif"}},onLoad:function(e){this.couponsId=e.couponsId},methods:{toCart:function(){uni.reLaunch({url:"../../tabBar/cart"})},showFail:function(e){uni.showModal({title:"失败",content:e,showCancel:!1,success:function(e){e.confirm&&uni.reLaunch({url:"../../tabBar/user"})}})}}};t.default=a},a4f4:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-045c034e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}uni-page-body[data-v-045c034e]{position:relative;background-color:#f5f5f5}.row[data-v-045c034e]{width:92%;height:24vw;margin:%?20?% auto %?10?% auto;-webkit-border-radius:%?8?%;border-radius:%?8?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;overflow:hidden;z-index:4;border:0}.row .carrier[data-v-045c034e]{background-color:#fff;position:absolute;width:100%;padding:0 0;height:100%;z-index:3;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.row .carrier .left[data-v-045c034e]{width:100%;position:relative}.row .carrier .left .title[data-v-045c034e]{padding-top:3vw;width:90%;margin:0 5%;font-size:%?36?%}.row .carrier .left .term[data-v-045c034e]{width:90%;margin:0 5%;font-size:%?26?%;color:#999}.row .carrier .left .gap-bottom[data-v-045c034e],.row .carrier .left .gap-top[data-v-045c034e]{position:absolute;width:%?20?%;height:%?20?%;right:%?-10?%;-webkit-border-radius:100%;border-radius:100%;background-color:#f5f5f5}.row .carrier .left .gap-top[data-v-045c034e]{top:%?-10?%}.row .carrier .left .gap-bottom[data-v-045c034e]{bottom:%?-10?%}.row .carrier .left .shixiao[data-v-045c034e]{position:absolute;right:%?20?%;font-size:%?150?%;z-index:6;color:hsla(0,0%,60%,.2)}.row .carrier .right[data-v-045c034e]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:28%;color:#fff;background:-webkit-gradient(linear,left top,right top,from(#ec625c),to(#ee827f));background:-webkit-linear-gradient(left,#ec625c,#ee827f);background:-o-linear-gradient(left,#ec625c,#ee827f);background:linear-gradient(90deg,#ec625c,#ee827f);-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.row .carrier .right.onlyShop[data-v-045c034e]{background:-webkit-gradient(linear,left top,right top,from(#01aaed),to(#1e9fff));background:-webkit-linear-gradient(left,#01aaed,#1e9fff);background:-o-linear-gradient(left,#01aaed,#1e9fff);background:linear-gradient(90deg,#01aaed,#1e9fff)}.row .carrier .right.completed[data-v-045c034e]{background:-webkit-gradient(linear,left top,right top,from(#aaa),to(#999));background:-webkit-linear-gradient(left,#aaa,#999);background:-o-linear-gradient(left,#aaa,#999);background:linear-gradient(90deg,#aaa,#999)}.row .carrier .right.completed .use[data-v-045c034e]{color:#aaa}.row .carrier .right.completed .use2[data-v-045c034e]{font-size:%?24?%}.row .carrier .right.invalid[data-v-045c034e]{background:-webkit-gradient(linear,left top,right top,from(#aaa),to(#999));background:-webkit-linear-gradient(left,#aaa,#999);background:-o-linear-gradient(left,#aaa,#999);background:linear-gradient(90deg,#aaa,#999)}.row .carrier .right.invalid .use[data-v-045c034e]{color:#aaa}.row .carrier .right.invalid .use2[data-v-045c034e]{font-size:%?24?%}.row .carrier .right .criteria[data-v-045c034e],.row .carrier .right .ticket[data-v-045c034e]{width:100%}.row .carrier .right .ticket[data-v-045c034e]{padding-top:1vw;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:baseline;-webkit-align-items:baseline;-ms-flex-align:baseline;align-items:baseline;height:6vw}.row .carrier .right .ticket .num[data-v-045c034e]{font-size:%?42?%;font-weight:600}.row .carrier .right .ticket .unit[data-v-045c034e]{font-size:%?24?%}.row .carrier .right .criteria[data-v-045c034e]{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:%?28?%}.row .carrier .right .use[data-v-045c034e]{width:50%;height:%?40?%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?24?%;background-color:#fff;color:#ee827f;-webkit-border-radius:%?40?%;border-radius:%?40?%;padding:0 %?10?%}.row .carrier .right .use.onlyShop[data-v-045c034e]{color:#1e9fff}.row2[data-v-045c034e]{width:100%;height:%?500?%;margin:%?20?% %?30?%;padding:0 %?20?%;-webkit-border-radius:%?8?%;border-radius:%?8?%;background-color:#fff;color:#626262;font-size:%?28?%;padding-bottom:%?20?%}.row2 .title[data-v-045c034e]{width:100%;padding-top:%?20?%;text-align:center;font-size:%?32?%}body.?%PAGE?%[data-v-045c034e]{background-color:#f5f5f5}',""])},e261:function(e,t,i){"use strict";var a=i("03ad"),r=i.n(a);r.a},fc10:function(e,t,i){"use strict";i.r(t);var a=i("5c1b"),r=i.n(a);for(var n in a)"default"!==n&&function(e){i.d(t,e,function(){return a[e]})}(n);t["default"]=r.a}}]);