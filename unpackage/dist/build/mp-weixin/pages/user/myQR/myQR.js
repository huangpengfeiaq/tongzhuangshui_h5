(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/myQR/myQR"],{"01a0":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{tis:"保存到相册",showBtn:!1}},onLoad:function(){},methods:{printscreen:function(){this.tis="正在保存";var n=this.$mp.page.$getAppWebview(),e=new plus.nativeObj.Bitmap;this.showBtn=!1,this.$nextTick(function(){var i=this;setTimeout(function(){n.draw(e,function(n){i.showBtn=!0,console.log("bitmap绘制图片成功"),console.log("e: "+JSON.stringify(n)),e.save("_doc/Qr.jpg",{overwrite:!0,quality:100},function(n){plus.gallery.save(n.target,function(n){t.showToast({title:"保存成功"}),i.tis="保存到相册",e.clear()},function(t){e.clear()})},function(t){console.log("保存图片失败："+JSON.stringify(t))})},function(t){console.log("bitmap绘制图片失败："+JSON.stringify(t))})},200)})}}};n.default=e}).call(this,e("543d")["default"])},6952:function(t,n,e){"use strict";e("4436");var i=s(e("b0ce")),a=s(e("7f13"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},"77f0":function(t,n,e){},"7f13":function(t,n,e){"use strict";e.r(n);var i=e("828b"),a=e("b4a2");for(var s in a)"default"!==s&&function(t){e.d(n,t,function(){return a[t]})}(s);e("af4d");var o=e("2877"),r=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,null,null);n["default"]=r.exports},"828b":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",[e("view",{staticClass:"block"}),t._m(0),e("view",{staticClass:"title"},[t._v("扫描二维码，加我好友")]),e("view",{directives:[{name:"show",rawName:"v-show",value:t.showBtn,expression:"showBtn"}],staticClass:"btn",attrs:{eventid:"59a9c4db-0"},on:{tap:t.printscreen}},[t._v(t._s(t.tis))]),t._m(1)])},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",{staticClass:"QR"},[e("image",{attrs:{src:"../../../static/img/qr.png"}})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",{staticClass:"logo"},[e("image",{attrs:{mode:"widthFix",src:"../../../static/img/qrlogo.png"}})])}];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},af4d:function(t,n,e){"use strict";var i=e("77f0"),a=e.n(i);a.a},b4a2:function(t,n,e){"use strict";e.r(n);var i=e("01a0"),a=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);n["default"]=a.a}},[["6952","common/runtime","common/vendor"]]]);