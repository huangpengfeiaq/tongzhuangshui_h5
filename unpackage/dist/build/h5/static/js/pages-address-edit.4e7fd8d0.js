(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address-edit"],{"0d7f":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"row"},[n("v-uni-view",{staticClass:"nominal"},[e._v("收件人")]),n("v-uni-view",{staticClass:"input"},[n("v-uni-input",{attrs:{placeholder:"请输入收件人姓名",type:"text"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1)],1),n("v-uni-view",{staticClass:"row"},[n("v-uni-view",{staticClass:"nominal"},[e._v("电话号码")]),n("v-uni-view",{staticClass:"input"},[n("v-uni-input",{attrs:{placeholder:"请输入收件人电话号码",type:"text"},model:{value:e.tel,callback:function(t){e.tel=t},expression:"tel"}})],1)],1),n("v-uni-view",{staticClass:"row"},[n("v-uni-view",{staticClass:"nominal"},[e._v("所在地区")]),n("v-uni-view",{staticClass:"input",on:{click:function(t){t=e.$handleEvent(t),e.chooseCity(t)}}},[e._v(e._s(e.region.address))])],1),n("v-uni-view",{staticClass:"row"},[n("v-uni-view",{staticClass:"nominal"},[e._v("详细地址")]),n("v-uni-view",{staticClass:"input"},[n("v-uni-textarea",{attrs:{"auto-height":"true",placeholder:"输入详细地址"},model:{value:e.region.name,callback:function(t){e.$set(e.region,"name",t)},expression:"region.name"}})],1)],1),n("v-uni-view",{staticClass:"row"},[n("v-uni-view",{staticClass:"nominal"},[e._v("标签")]),n("v-uni-view",{staticClass:"input"},[n("v-uni-radio-group",{on:{change:function(t){t=e.$handleEvent(t),e.radioChange(t)}}},[n("v-uni-label",{staticClass:"radio"},[n("v-uni-radio",{attrs:{value:"0",checked:"0"===e.label,color:"#f06c7a"}}),e._v("家")],1),n("v-uni-label",{staticClass:"radio"},[n("v-uni-radio",{attrs:{value:"1",checked:"1"===e.label,color:"#f06c7a"}}),e._v("公司")],1),n("v-uni-label",{staticClass:"radio"},[n("v-uni-radio",{attrs:{value:"2",checked:"2"===e.label,color:"#f06c7a"}}),e._v("学校")],1)],1)],1)],1),n("v-uni-view",{staticClass:"row"},[n("v-uni-view",{staticClass:"nominal"},[e._v("设置默认地址")]),n("v-uni-view",{staticClass:"input switch"},[n("v-uni-switch",{attrs:{color:"#f06c7a",checked:e.isDefault},on:{change:function(t){t=e.$handleEvent(t),e.isDefaultChange(t)}}})],1)],1),"edit"==e.editType?n("v-uni-view",{staticClass:"row",on:{click:function(t){t=e.$handleEvent(t),e.del(t)}}},[n("v-uni-view",{staticClass:"del"},[e._v("删除收货地址")])],1):e._e()],1),n("v-uni-view",{staticClass:"save",on:{click:function(t){t=e.$handleEvent(t),e.save(t)}}},[n("v-uni-view",{staticClass:"btn"},[e._v("保存地址")])],1)],1)},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},1323:function(e,t,n){var i=n("2116");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("438368e7",i,!0,{sourceMap:!1,shadowMode:!1})},2116:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.save[data-v-06fcbcb0]{position:fixed;bottom:0;width:100%;height:%?120?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.save uni-view[data-v-06fcbcb0]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.save .btn[data-v-06fcbcb0]{-webkit-box-shadow:%?0?% %?5?% %?10?% rgba(0,0,0,.4);box-shadow:%?0?% %?5?% %?10?% rgba(0,0,0,.4);width:70%;height:%?80?%;-webkit-border-radius:%?80?%;border-radius:%?80?%;background-color:#f06c7a;color:#fff;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?30?%}.save .btn .icon[data-v-06fcbcb0]{height:%?80?%;color:#fff;font-size:%?30?%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.content[data-v-06fcbcb0]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.content uni-view[data-v-06fcbcb0]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.content .row[data-v-06fcbcb0]{width:94%;margin:0 3%;border-top:solid %?1?% #eee}.content .row .nominal[data-v-06fcbcb0]{width:30%;height:%?120?%;font-weight:200;font-size:%?30?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.content .row .input[data-v-06fcbcb0]{width:70%;padding:%?20?% 0;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?30?%}.content .row .input.switch[data-v-06fcbcb0]{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.content .row .input .textarea[data-v-06fcbcb0]{margin:%?20?% 0;min-height:%?120?%}.content .row .input .radio[data-v-06fcbcb0]{margin-right:%?20?%}.content .row .del[data-v-06fcbcb0]{width:100%;height:%?100?%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?36?%;color:#f06c7a;background-color:rgba(255,0,0,.05);border-bottom:solid %?1?% #eee}',""])},"4bb7":function(e,t,n){"use strict";var i=n("1323"),a=n.n(i);a.a},6878:function(e,t,n){"use strict";n.r(t);var i=n("6aa4"),a=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);t["default"]=a.a},"6aa4":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{editType:"edit",id:"",name:"",tel:"",isDefault:!0,region:{address:"请点击选择地址"},label:null}},methods:{radioChange:function(e){this.label=e.detail.value},chooseCity:function(){var e=this;uni.chooseLocation({success:function(t){e.region=t}})},isDefaultChange:function(e){this.isDefault=e.detail.value},del:function(){var e=this;uni.showModal({title:"提示",content:"确认删除此地址？",success:function(t){t.confirm?uni.request({url:e.$tempUrl+"userAddress/delete",method:"DELETE",data:{id:e.id,openId:uni.getStorageSync("openId")},success:function(t){0===t.data.code&&uni.getStorage({key:"confirmAddr",success:function(t){t.data.id==e.id?uni.removeStorage({key:"confirmAddr",success:function(){uni.navigateBack({delta:1})}}):uni.navigateBack({delta:1})}})}}):t.cancel&&console.log("用户点击取消")}})},save:function(){var e={userWechatOpenid:uni.getStorageSync("openId"),contactName:this.name,contactPhone:this.tel,areaName:this.region.address,address:this.region.name,latitude:this.region.latitude,longitude:this.region.longitude,label:this.label};"edit"==this.editType&&(e.id=this.id),e.contactName?e.contactPhone?"请点击选择地址"!=!e.areaName?e.address?"edit"==this.editType?uni.request({url:this.$tempUrl+"userAddress/updateForLatitudeAndLongitude",method:"PUT",data:e,success:function(t){0===t.data.code?uni.setStorage({key:"confirmAddr",data:e,success:function(){uni.showToast({title:"编辑地址成功",icon:"none"}),setTimeout(function(){uni.navigateBack({delta:2})},200)}}):uni.showToast({title:"失败",icon:"none"})}}):uni.request({url:this.$tempUrl+"userAddress/insertForLatitudeAndLongitude",method:"POST",data:e,success:function(t){0===t.data.code?uni.setStorage({key:"confirmAddr",data:e,success:function(){uni.showToast({title:"新建地址成功",icon:"none"}),setTimeout(function(){uni.navigateBack({delta:2})},200)}}):uni.showToast({title:"失败",icon:"none"})}}):uni.showToast({title:"请输入收件人详细地址",icon:"none"}):uni.showToast({title:"请选择收件地址",icon:"none"}):uni.showToast({title:"请输入收件人电话号码",icon:"none"}):uni.showToast({title:"请输入收件人姓名",icon:"none"})}},onLoad:function(e){this.editType=e.type,"edit"==e.type&&(uni.setNavigationBarTitle({title:"编辑收货地址"}),this.id=e.id,this.name=e.contactName,this.tel=e.contactPhone,this.region.address=e.areaName,this.region.name=e.address,this.region.latitude=e.latitude,this.region.longitude=e.longitude,console.log(e.label),this.label=e.label)}};t.default=i},"8fd6":function(e,t,n){"use strict";n.r(t);var i=n("0d7f"),a=n("6878");for(var s in a)"default"!==s&&function(e){n.d(t,e,function(){return a[e]})}(s);n("4bb7");var o=n("2877"),c=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"06fcbcb0",null);t["default"]=c.exports}}]);