(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-order_list-order_list"],{"089b":function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s={data:function(){return{headerPosition:"fixed",headerTop:"0px",typeText:{unpaid:"等待付款",back:"等待商家发货",unreceived:"商家已发货",received:"等待用户评价",completed:"交易已完成",refunds:"商品退货处理中"},orderType:["全部","待付款","待发货","待收货","待评价","退换货"],orderList:[[{type:"unpaid",ordersn:0,goods_id:0,img:"/static/img/goods/p1.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"168.00",payment:168,freight:12,spec:"规格:S码",numner:1},{type:"unpaid",ordersn:1,goods_id:1,img:"/static/img/goods/p2.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"168.00",payment:168,freight:12,spec:"规格:S码",numner:1},{type:"back",ordersn:1,goods_id:1,img:"/static/img/goods/p3.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"168.00",payment:168,freight:12,spec:"规格:S码",numner:1},{type:"unreceived",ordersn:1,goods_id:1,img:"/static/img/goods/p4.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"168.00",payment:168,freight:12,spec:"规格:S码",numner:1},{type:"received",ordersn:1,goods_id:1,img:"/static/img/goods/p5.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"168.00",payment:168,freight:12,spec:"规格:S码",numner:1},{type:"completed",ordersn:1,goods_id:1,img:"/static/img/goods/p6.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"168.00",payment:168,freight:12,spec:"规格:S码",numner:1},{type:"refunds",ordersn:1,goods_id:1,img:"/static/img/goods/p5.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",payment:168,freight:12,spec:"规格:S码",numner:1}],[{type:"unpaid",ordersn:0,goods_id:0,img:"/static/img/goods/p1.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",payment:168,freight:12,spec:"规格:S码",numner:1},{type:"unpaid",ordersn:1,goods_id:1,img:"/static/img/goods/p2.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",payment:168,freight:12,spec:"规格:S码",numner:1}],[],[{type:"unreceived",ordersn:1,goods_id:1,img:"/static/img/goods/p4.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",payment:168,freight:12,spec:"规格:S码",numner:1}],[{type:"received",ordersn:1,goods_id:1,img:"/static/img/goods/p5.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",payment:168,freight:12,spec:"规格:S码",numner:1}],[{type:"refunds",ordersn:1,goods_id:1,img:"/static/img/goods/p5.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",payment:168,freight:12,spec:"规格:S码",numner:1}]],list:[],tabbarIndex:0}},onLoad:function(e){var i=this;console.log("option: "+JSON.stringify(e));var t=parseInt(e.tbIndex)+1;this.list=this.orderList[t],this.tabbarIndex=t;var s=setInterval(function(){var e=document.getElementsByTagName("uni-page-head");e.length>0&&(i.headerTop=e[0].offsetHeight+"px",clearInterval(s))},1)},onPageScroll:function(e){},methods:{showType:function(e){this.tabbarIndex=e,this.list=this.orderList[e]}}};i.default=s},"72b9":function(e,i,t){"use strict";t.r(i);var s=t("089b"),n=t.n(s);for(var a in s)"default"!==a&&function(e){t.d(i,e,function(){return s[e]})}(a);i["default"]=n.a},bf22:function(e,i,t){"use strict";var s=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",[t("v-uni-view",{staticClass:"topTabBar",style:{position:e.headerPosition,top:e.headerTop}},e._l(e.orderType,function(i,s){return t("v-uni-view",{key:s,staticClass:"grid",on:{click:function(i){i=e.$handleEvent(i),e.showType(s)}}},[t("v-uni-view",{staticClass:"text",class:[s==e.tabbarIndex?"on":""]},[e._v(e._s(i))])],1)}),1),t("v-uni-view",{staticClass:"order-list"},[t("v-uni-view",{staticClass:"list"},[0==e.list.length?t("v-uni-view",{staticClass:"onorder"},[t("v-uni-image",{attrs:{src:"../../../static/img/noorder.png"}}),t("v-uni-view",{staticClass:"text"},[e._v("没有相关订单")])],1):e._e(),e._l(e.list,function(i,s){return t("v-uni-view",{key:s,staticClass:"row"},[t("v-uni-view",{staticClass:"type"},[e._v(e._s(e.typeText[i.type]))]),t("v-uni-view",{staticClass:"order-info"},[t("v-uni-view",{staticClass:"left"},[t("v-uni-image",{attrs:{src:i.img}})],1),t("v-uni-view",{staticClass:"right"},[t("v-uni-view",{staticClass:"name"},[e._v(e._s(i.name))]),t("v-uni-view",{staticClass:"spec"},[e._v(e._s(i.spec))]),t("v-uni-view",{staticClass:"price-number"},[e._v("￥"),t("v-uni-view",{staticClass:"price"},[e._v(e._s(i.price))]),e._v("x"),t("v-uni-view",{staticClass:"number"},[e._v(e._s(i.numner))])],1)],1)],1),t("v-uni-view",{staticClass:"detail"},[t("v-uni-view",{staticClass:"number"},[e._v("共"+e._s(i.numner)+"件商品")]),t("v-uni-view",{staticClass:"sum"},[e._v("合计￥"),t("v-uni-view",{staticClass:"price"},[e._v(e._s(i.payment))])],1),t("v-uni-view",{staticClass:"nominal"},[e._v("(含运费 ￥"+e._s(i.freight)+")")])],1),t("v-uni-view",{staticClass:"btns"},["unpaid"==i.type?[t("v-uni-view",{staticClass:"default"},[e._v("取消订单")]),t("v-uni-view",{staticClass:"pay"},[e._v("付款")])]:e._e(),"back"==i.type?[t("v-uni-view",{staticClass:"default"},[e._v("提醒发货")])]:e._e(),"unreceived"==i.type?[t("v-uni-view",{staticClass:"default"},[e._v("查看物流")]),t("v-uni-view",{staticClass:"pay"},[e._v("确认收货")]),t("v-uni-view",{staticClass:"pay"},[e._v("我要退货")])]:e._e(),"received"==i.type?[t("v-uni-view",{staticClass:"default"},[e._v("评价")]),t("v-uni-view",{staticClass:"default"},[e._v("再次购买")])]:e._e(),"completed"==i.type?[t("v-uni-view",{staticClass:"default"},[e._v("再次购买")])]:e._e(),"refunds"==i.type?[t("v-uni-view",{staticClass:"default"},[e._v("查看进度")])]:e._e()],2)],1)})],2)],1)],1)},n=[];t.d(i,"a",function(){return s}),t.d(i,"b",function(){return n})},e47e:function(e,i,t){var s=t("e984");"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var n=t("4f06").default;n("153f3447",s,!0,{sourceMap:!1,shadowMode:!1})},e4e9:function(e,i,t){"use strict";t.r(i);var s=t("bf22"),n=t("72b9");for(var a in n)"default"!==a&&function(e){t.d(i,e,function(){return n[e]})}(a);t("edb5");var r=t("2877"),o=Object(r["a"])(n["default"],s["a"],s["b"],!1,null,"41e585fc",null);i["default"]=o.exports},e984:function(e,i,t){i=e.exports=t("2350")(!1),i.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-41e585fc]{background-color:#f3f3f3}.topTabBar[data-v-41e585fc]{width:100%;position:fixed;top:0;z-index:10;background-color:#f8f8f8;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.topTabBar .grid[data-v-41e585fc]{width:20%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#444;font-size:%?28?%}.topTabBar .grid .text[data-v-41e585fc]{height:%?76?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.topTabBar .grid .text.on[data-v-41e585fc]{color:#f06c7a;border-bottom:solid %?4?% #f06c7a}.order-list[data-v-41e585fc]{margin-top:%?80?%;padding-top:%?20?%;width:100%}.order-list .list[data-v-41e585fc]{width:94%;margin:0 auto}.order-list .list .onorder[data-v-41e585fc]{width:100%;height:50vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.order-list .list .onorder uni-image[data-v-41e585fc]{width:20vw;height:20vw;-webkit-border-radius:100%;border-radius:100%}.order-list .list .onorder .text[data-v-41e585fc]{width:100%;height:%?60?%;font-size:%?28?%;color:#444;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.order-list .list .row[data-v-41e585fc]{width:-webkit-calc(100% - %?40?%);width:calc(100% - %?40?%);padding:%?10?% %?20?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;background-color:#fff;margin-bottom:%?20?%}.order-list .list .row .type[data-v-41e585fc]{font-size:%?26?%;color:#ec652f;height:%?50?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.order-list .list .row .order-info[data-v-41e585fc]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.order-list .list .row .order-info .left[data-v-41e585fc]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:25vw;height:25vw}.order-list .list .row .order-info .left uni-image[data-v-41e585fc]{width:25vw;height:25vw;-webkit-border-radius:%?10?%;border-radius:%?10?%}.order-list .list .row .order-info .right[data-v-41e585fc]{width:100%;margin-left:%?10?%;position:relative}.order-list .list .row .order-info .right .name[data-v-41e585fc]{width:100%;font-size:%?28?%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.order-list .list .row .order-info .right .spec[data-v-41e585fc]{color:#a7a7a7;font-size:%?22?%}.order-list .list .row .order-info .right .price-number[data-v-41e585fc]{position:absolute;bottom:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;font-size:%?22?%;color:#333;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}.order-list .list .row .order-info .right .price-number .price[data-v-41e585fc]{font-size:%?24?%;margin-right:%?5?%}.order-list .list .row .detail[data-v-41e585fc]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;height:%?60?%;font-size:%?26?%}.order-list .list .row .detail .sum[data-v-41e585fc]{padding:0 %?8?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}.order-list .list .row .detail .sum .price[data-v-41e585fc]{font-size:%?30?%}.order-list .list .row .btns[data-v-41e585fc]{height:%?80?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.order-list .list .row .btns uni-view[data-v-41e585fc]{min-width:%?120?%;height:%?50?%;padding:0 %?20?%;-webkit-border-radius:%?50?%;border-radius:%?50?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?28?%;margin-left:%?20?%}.order-list .list .row .btns .default[data-v-41e585fc]{border:solid %?1?% #ccc;color:#666}.order-list .list .row .btns .pay[data-v-41e585fc]{border:solid %?1?% #ec652f;color:#ec652f}body.?%PAGE?%[data-v-41e585fc]{background-color:#f3f3f3}',""])},edb5:function(e,i,t){"use strict";var s=t("e47e"),n=t.n(s);n.a}}]);