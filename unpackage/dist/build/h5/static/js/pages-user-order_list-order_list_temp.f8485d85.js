(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-order_list-order_list_temp"],{"129e":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{headerPosition:"fixed",headerTop:"0px",typeText:{unpaid:"等待付款",back:"等待商家发货",unreceived:"商家正在配送",completed:"交易已完成",refunds:"订单已取消"},orderType:["全部","待付款","待发货","待收货","已完成","已取消"],orderList:[[],[],[],[],[],[]],list:[],tabbarIndex:0}},onLoad:function(e){var t=this;console.log("option: "+JSON.stringify(e));var i=parseInt(e.tbIndex)+1;this.tabbarIndex=i,console.log(i),this.showType(i);var n=setInterval(function(){var e=document.getElementsByTagName("uni-page-head");e.length>0&&(t.headerTop=e[0].offsetHeight+"px",clearInterval(n))},1)},onPageScroll:function(e){},methods:{refreshList:function(e){var t=this;uni.request({url:this.$tempUrl+"buyer/order/listByStatus",method:"GET",data:{openId:uni.getStorageSync("openId"),status:e-1},success:function(i){t.orderList[e]=i.data.data,t.list=t.orderList[e]}})},refreshListOther:function(e){var t=this;uni.request({url:this.$tempUrl+"buyer/order/listByStatus",method:"GET",data:{openId:uni.getStorageSync("openId"),status:e-1},success:function(i){t.orderList[e]=i.data.data}})},showType:function(e){var t=this;this.tabbarIndex=e,0===this.orderList[e].length?uni.request({url:this.$tempUrl+"buyer/order/listByStatus",method:"GET",data:{openId:uni.getStorageSync("openId"),status:e-1},success:function(i){t.orderList[e]=i.data.data,t.list=t.orderList[e]}}):this.list=this.orderList[e]},changeType:function(e,t){var i=this;console.log(e),"unpaid"===t?uni.showModal({title:"提示",content:"取消此订单？",success:function(t){t.confirm?(console.log("用户点击确定"),uni.request({url:i.$tempUrl+"buyer/order/cancel",method:"POST",data:{openId:uni.getStorageSync("openId"),orderId:e},success:function(e){0===e.data.code?(uni.showToast({title:"订单已取消",icon:"success"}),i.refreshList(1),i.refreshListOther(5),i.refreshListOther(0)):(uni.showModal({title:"提示",content:"订单取消失败",showCancel:!1}),i.refreshList(1),i.refreshListOther(0))}})):t.cancel&&console.log("用户点击取消")}}):"back"===t?uni.showModal({title:"提示",content:"取消此订单？",success:function(t){t.confirm?(console.log("用户点击确定"),uni.request({url:i.$tempUrl+"buyer/order/cancel",method:"POST",data:{openId:uni.getStorageSync("openId"),orderId:e},success:function(e){0===e.data.code?(uni.showToast({title:"订单已取消",icon:"success"}),i.refreshList(2),i.refreshListOther(5),i.refreshListOther(0)):(uni.showModal({title:"提示",content:"商家已接单，订单取消失败",showCancel:!1}),i.refreshList(2),i.refreshListOther(3),i.refreshListOther(0))}})):t.cancel&&console.log("用户点击取消")}}):"unreceived"===t&&uni.showModal({title:"提示",content:"完结此订单？",success:function(t){t.confirm?(console.log("用户点击确定"),uni.request({url:i.$tempUrl+"buyer/order/finish",method:"POST",data:{openId:uni.getStorageSync("openId"),orderId:e},success:function(e){0===e.data.code?(uni.showToast({title:"订单已完结",icon:"success"}),i.refreshList(3),i.refreshListOther(4),i.refreshListOther(0)):(uni.showModal({title:"提示",content:"订单完结失败",showCancel:!1}),i.refreshList(3),i.refreshListOther(0))}})):t.cancel&&console.log("用户点击取消")}})},toConfirmation:function(e){uni.setStorageSync("shopId",e.shopId),uni.setStorage({key:"buylist",data:e.orderDetailModels,success:function(){uni.navigateTo({url:"../../order/confirmation"})}})},toCall:function(e){uni.makePhoneCall({phoneNumber:e})},payment:function(e){var t=this;uni.showModal({title:"支付",content:"确认支付￥"+e.payableAmount,success:function(i){i.confirm?uni.request({url:t.$tempUrl+"buyer/order/paid",method:"POST",data:{openId:uni.getStorageSync("openId"),orderId:e.id},success:function(e){0===e.data.code?(uni.showToast({title:"支付成功",icon:"success"}),t.refreshList(1),t.refreshListOther(2),t.refreshListOther(0)):(uni.showModal({title:"提示",content:"订单异常，支付失败",showCancel:!1}),t.refreshList(1),t.refreshListOther(0))}}):i.cancel&&uni.showToast({title:"支付已取消，请尽快完成付款",icon:"none"})}})}}};t.default=n},6025:function(e,t,i){"use strict";i.r(t);var n=i("129e"),s=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,function(){return n[e]})}(r);t["default"]=s.a},7525:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-369bb601]{background-color:#f3f3f3}.topTabBar[data-v-369bb601]{width:100%;position:fixed;top:0;z-index:10;background-color:#f8f8f8;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.topTabBar .grid[data-v-369bb601]{width:20%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#444;font-size:%?28?%}.topTabBar .grid .text[data-v-369bb601]{height:%?76?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.topTabBar .grid .text.on[data-v-369bb601]{color:#f06c7a;border-bottom:solid %?4?% #f06c7a}.order-list[data-v-369bb601]{margin-top:%?80?%;padding-top:%?20?%;width:100%}.order-list .list[data-v-369bb601]{width:94%;margin:0 auto}.order-list .list .onorder[data-v-369bb601]{width:100%;height:50vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.order-list .list .onorder uni-image[data-v-369bb601]{width:20vw;height:20vw;-webkit-border-radius:100%;border-radius:100%}.order-list .list .onorder .text[data-v-369bb601]{width:100%;height:%?60?%;font-size:%?28?%;color:#444;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.order-list .list .row[data-v-369bb601]{width:-webkit-calc(100% - %?40?%);width:calc(100% - %?40?%);padding:%?10?% %?20?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;background-color:#fff;margin-bottom:%?20?%}.order-list .list .row .type[data-v-369bb601]{font-size:%?26?%;color:#ec652f;height:%?50?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative}.order-list .list .row .type .left[data-v-369bb601]{color:#979797;font-size:%?22?%}.order-list .list .row .type .right[data-v-369bb601]{position:absolute;right:0}.order-list .list .row .order-info[data-v-369bb601]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.order-list .list .row .order-info .left[data-v-369bb601]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:20vw;height:20vw;text-align:center;padding-top:3vw}.order-list .list .row .order-info .left uni-image[data-v-369bb601]{width:14vw;height:14vw;-webkit-border-radius:%?10?%;border-radius:%?10?%}.order-list .list .row .order-info .right[data-v-369bb601]{width:100%;margin-left:%?10?%;position:relative;padding-top:3vw}.order-list .list .row .order-info .right .name[data-v-369bb601]{width:100%;font-size:%?28?%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.order-list .list .row .order-info .right .spec[data-v-369bb601]{color:#a7a7a7;font-size:%?22?%}.order-list .list .row .order-info .right .price-number[data-v-369bb601]{position:absolute;bottom:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;font-size:%?22?%;color:#333;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}.order-list .list .row .order-info .right .price-number .price[data-v-369bb601]{font-size:%?24?%;margin-right:%?5?%}.order-list .list .row .detail[data-v-369bb601]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;height:%?60?%;font-size:%?26?%}.order-list .list .row .detail .sum[data-v-369bb601]{padding:0 %?8?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}.order-list .list .row .detail .sum .price[data-v-369bb601]{font-size:%?30?%}.order-list .list .row .btns[data-v-369bb601]{height:%?80?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.order-list .list .row .btns uni-view[data-v-369bb601]{min-width:%?120?%;height:%?50?%;padding:0 %?20?%;-webkit-border-radius:%?50?%;border-radius:%?50?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?28?%;margin-left:%?20?%}.order-list .list .row .btns .default[data-v-369bb601]{border:solid %?1?% #ccc;color:#666}.order-list .list .row .btns .pay[data-v-369bb601]{border:solid %?1?% #ec652f;color:#ec652f}body.?%PAGE?%[data-v-369bb601]{background-color:#f3f3f3}',""])},a65f:function(e,t,i){"use strict";i.r(t);var n=i("bc76"),s=i("6025");for(var r in s)"default"!==r&&function(e){i.d(t,e,function(){return s[e]})}(r);i("f1e9");var a=i("2877"),o=Object(a["a"])(s["default"],n["a"],n["b"],!1,null,"369bb601",null);t["default"]=o.exports},bc76:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"topTabBar",style:{position:e.headerPosition,top:e.headerTop}},e._l(e.orderType,function(t,n){return i("v-uni-view",{key:n,staticClass:"grid",on:{click:function(t){t=e.$handleEvent(t),e.showType(n)}}},[i("v-uni-view",{staticClass:"text",class:[n==e.tabbarIndex?"on":""]},[e._v(e._s(t))])],1)}),1),i("v-uni-view",{staticClass:"order-list"},[i("v-uni-view",{staticClass:"list"},[0==e.list.length?i("v-uni-view",{staticClass:"onorder"},[i("v-uni-image",{attrs:{src:"../../../static/img/noorder.png"}}),i("v-uni-view",{staticClass:"text"},[e._v("没有相关订单")])],1):e._e(),e._l(e.list,function(t,n){return i("v-uni-view",{key:n,staticClass:"row"},[i("v-uni-view",{staticClass:"type"},[i("v-uni-view",{staticClass:"left"},[e._v(e._s(t.createDate))]),i("v-uni-view",{staticClass:"right"},[e._v(e._s(e.typeText[t.type]))])],1),e._l(t.orderDetailModels,function(t,n){return i("v-uni-view",{key:n,staticClass:"order-info"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-image",{attrs:{src:t.cover}})],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-view",{staticClass:"name"},[e._v(e._s(t.productName))]),i("v-uni-view",{staticClass:"spec"},[e._v(e._s(t.introduction))]),i("v-uni-view",{staticClass:"price-number"},[e._v("￥"),i("v-uni-view",{staticClass:"price"},[e._v(e._s(t.price))]),e._v("x"),i("v-uni-view",{staticClass:"number"},[e._v(e._s(t.quantity))])],1)],1)],1)}),i("v-uni-view",{staticClass:"detail"},[t.orderDetailModels?i("v-uni-view",{staticClass:"number"},[e._v("共"+e._s(t.orderDetailModels.length)+"类商品")]):e._e(),i("v-uni-view",{staticClass:"sum"},[e._v("合计￥"),i("v-uni-view",{staticClass:"price"},[e._v(e._s(t.payableAmount))])],1)],1),i("v-uni-view",{staticClass:"btns"},["unpaid"==t.type?[i("v-uni-view",{staticClass:"default",on:{click:function(i){i=e.$handleEvent(i),e.changeType(t.id,"unpaid")}}},[e._v("取消订单")]),i("v-uni-view",{staticClass:"pay",on:{click:function(i){i=e.$handleEvent(i),e.payment(t)}}},[e._v("付款")])]:e._e(),"back"==t.type?[i("v-uni-view",{staticClass:"default",on:{click:function(i){i=e.$handleEvent(i),e.changeType(t.id,"back")}}},[e._v("取消订单")])]:e._e(),"unreceived"==t.type?[i("v-uni-view",{staticClass:"default",on:{click:function(i){i=e.$handleEvent(i),e.toCall(t.shopContact)}}},[e._v("联系商家")]),i("v-uni-view",{staticClass:"pay",on:{click:function(i){i=e.$handleEvent(i),e.changeType(t.id,"unreceived")}}},[e._v("确认收货")])]:e._e(),"completed"==t.type?[i("v-uni-view",{staticClass:"default",on:{click:function(i){i=e.$handleEvent(i),e.toConfirmation(t)}}},[e._v("再次购买")])]:e._e(),"refunds"==t.type?[i("v-uni-view",{staticClass:"default",on:{click:function(i){i=e.$handleEvent(i),e.toConfirmation(t)}}},[e._v("重新下单")])]:e._e()],2)],2)})],2)],1)],1)},s=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return s})},cd4e:function(e,t,i){var n=i("7525");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=i("4f06").default;s("d4c12bde",n,!0,{sourceMap:!1,shadowMode:!1})},f1e9:function(e,t,i){"use strict";var n=i("cd4e"),s=i.n(n);s.a}}]);