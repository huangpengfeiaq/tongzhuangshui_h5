(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/apply/shopApply2"],{"06d4":function(e,t,a){"use strict";a("4436");var o=r(a("b0ce")),n=r(a("4c85"));function r(e){return e&&e.__esModule?e:{default:e}}Page((0,o.default)(n.default))},2633:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("ff23"));function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var i={data:function(){return{validApply:!0,openId:"",inputDebounceSet:{openInputDebounce:!0,delay:500},titleSet:{size:14},contentSet:{size:14},buttonStyle:{activeButton:"background-color: #009688;border-radius: 30px;box-shadow: 2px 2px 1px 1px #009688;height:60upx;font-size:28upx;",changeButton:"background-color: #009688;border-radius: 30px;box-shadow: 2px 2px 1px 1px #009688;",selectButton:"background-color: #009688;border-radius: 30px;box-shadow: 2px 2px 1px 1px #009688;",confirmButton:"background-color: #009688;border-radius: 30px;box-shadow: 2px 2px 1px 1px #009688;",getcodeButton:"background-color: #009688;border-radius: 30px;box-shadow: 2px 2px 1px 1px #009688;"},inputsArray:[{segmentationTitle:"商户入驻",border_top:"1px solid #f2f2f2",title:"店铺名",iconColor:"#009688",variableName:"shopName"},{type:"picker-provincialStreet",title:"所在地区",chooseName:"选择地区",onceShowDefaultValue:!1,variableName:"shopArea"},{title:"详细地址",tapClear:!0,iconColor:"#f06c7a",variableName:"shopAddress"},r({type:"pics",title:"营业执照",itemArray:[{title:"营业执照"}],variableName:"pic",clearColor:"#c0ebd7"},"variableName","picture"),{title:"经营人",variableName:"sellerName"},{title:"联系方式",verifyFc:function(e){return!!/^[1][3,4,5,7,8][0-9]{9}$/.test(e)},verifyErr:"请输入正确的手机号码",variableName:"sellerPhone"}],onLoadData:"data_"}},onLoad:function(){var t=this;e.request({url:this.$tempUrl+"wechat/getOpenId",data:{code:window.location.search.substr(6,32)},method:"GET",success:function(a){t.openId=a.data,e.request({url:t.$tempUrl+"seller/check",data:{openId:t.openId},method:"GET",success:function(e){0!==e.data.code&&(t.validApply=!1)}})}})},methods:{activeFc:function(t){var a=this,o=t;e.request({url:this.$tempUrl+"common/geocoderByAddress",method:"GET",data:{address:o.shopArea.label+o.shopAddress},success:function(t){0===t.data.status?e.request({url:a.$tempUrl+"shop/seller/insert",method:"POST",data:{address:o.shopAddress,areaCode:o.shopArea.cityCode,areaName:o.shopArea.label,contact:o.sellerPhone,latitude:t.data.result.location.lat,longitude:t.data.result.location.lng,name:o.shopName,businessLicenseImg:o.picture},success:function(t){0===t.data.code?e.request({url:a.$tempUrl+"seller/insert",method:"POST",data:{shopId:t.data.data.id,name:o.sellerName,phone:o.sellerPhone,type:2,wechatOpenid:a.openId},success:function(t){0===t.data.code?e.showModal({title:"申请成功",content:"请耐心等待，我们将在1-2个工作日内给您答复！",showCancel:!1,success:function(e){e.confirm&&(console.log("用户点击确定"),a.validApply=!1)}}):e.showModal({title:"申请失败",content:"请勿重复申请！",showCancel:!1})}}):e.showToast({title:"店铺申请失败",icon:"none"})}}):e.showToast({title:t.data.message})}})}},components:{inputs:o.default}};t.default=i}).call(this,a("543d")["default"])},"391c":function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",[a("view",{directives:[{name:"show",rawName:"v-show",value:e.validApply,expression:"validApply"}]},[a("inputs",{attrs:{inputsArray:e.inputsArray,activeName:"提交",onLoadData:e.onLoadData,animationType:"rotate3d-fade",animationDuration:.1,submitReSet:"",titleSet:e.titleSet,contentSet:e.contentSet,buttonStyle:e.buttonStyle,inputDebounceSet:e.inputDebounceSet,eventid:"9ec150aa-0",mpcomid:"9ec150aa-0"},on:{chaildOpenEvent:e.openWin,activeFc:e.activeFc}})],1),a("view",{directives:[{name:"show",rawName:"v-show",value:!1===e.validApply,expression:"validApply === false"}],staticStyle:{"text-align":"center","padding-top":"20%"}},[a("image",{attrs:{src:"../../static/img/logo.jpg",mode:"aspectFit"}}),a("br"),a("br"),e._v("永远相信美好的事情即将发生")],1)])},n=[];a.d(t,"a",function(){return o}),a.d(t,"b",function(){return n})},"4c85":function(e,t,a){"use strict";a.r(t);var o=a("391c"),n=a("cba0");for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);var i=a("2877"),s=Object(i["a"])(n["default"],o["a"],o["b"],!1,null,null,null);t["default"]=s.exports},cba0:function(e,t,a){"use strict";a.r(t);var o=a("2633"),n=a.n(o);for(var r in o)"default"!==r&&function(e){a.d(t,e,function(){return o[e]})}(r);t["default"]=n.a}},[["06d4","common/runtime","common/vendor"]]]);