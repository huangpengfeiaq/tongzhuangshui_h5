(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-apply-shopApply"],{"1bc8":function(e,t,a){"use strict";a.r(t);var o=a("8681"),n=a("b3ce");for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);var r=a("2877"),s=Object(r["a"])(n["default"],o["a"],o["b"],!1,null,"5ab0f33e",null);t["default"]=s.exports},8681:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.validApply,expression:"validApply"}]},[a("inputs",{attrs:{inputsArray:e.inputsArray,activeName:"提交",onLoadData:e.onLoadData,animationType:"rotate3d-fade",animationDuration:.1,submitReSet:"",titleSet:e.titleSet,contentSet:e.contentSet,buttonStyle:e.buttonStyle,inputDebounceSet:e.inputDebounceSet},on:{chaildOpenEvent:function(t){t=e.$handleEvent(t),e.openWin(t)},activeFc:function(t){t=e.$handleEvent(t),e.activeFc(t)}}})],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!1===e.validApply,expression:"validApply === false"}],staticStyle:{"text-align":"center","padding-top":"20%"}},[a("v-uni-image",{attrs:{src:"../../static/img/logo.jpg",mode:"aspectFit"}}),a("br"),a("br"),e._v("永远相信美好的事情即将发生")],1)],1)},n=[];a.d(t,"a",function(){return o}),a.d(t,"b",function(){return n})},a942:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("ff23"));function n(e){return e&&e.__esModule?e:{default:e}}var i={data:function(){return{validApply:!0,openId:"",inputDebounceSet:{openInputDebounce:!0,delay:500},titleSet:{size:14},contentSet:{size:14},buttonStyle:{activeButton:"background-color: #009688;border-radius: 30px;box-shadow: 2px 2px 1px 1px #009688;height:60upx;font-size:28upx;",changeButton:"background-color: #009688;border-radius: 30px;box-shadow: 2px 2px 1px 1px #009688;",selectButton:"background-color: #009688;border-radius: 30px;box-shadow: 2px 2px 1px 1px #009688;",confirmButton:"background-color: #009688;border-radius: 30px;box-shadow: 2px 2px 1px 1px #009688;",getcodeButton:"background-color: #009688;border-radius: 30px;box-shadow: 2px 2px 1px 1px #009688;"},inputsArray:[{segmentationTitle:"商户入驻",border_top:"1px solid #f2f2f2",title:"店铺名",iconColor:"#009688",variableName:"shopName"},{type:"picker-provincialStreet",title:"所在地区",chooseName:"选择地区",onceShowDefaultValue:!1,variableName:"shopArea"},{title:"详细地址",tapClear:!0,iconColor:"#f06c7a",variableName:"shopAddress"},{title:"经营人",variableName:"sellerName"},{title:"联系方式",verifyFc:function(e){return!!/^[1][3,4,5,7,8][0-9]{9}$/.test(e)},verifyErr:"请输入正确的手机号码",variableName:"sellerPhone"}],onLoadData:"data_"}},onLoad:function(){var e=this;uni.request({url:this.$tempUrl+"wechat/getOpenId",data:{code:window.location.search.substr(6,32)},method:"GET",success:function(t){e.openId=t.data,uni.request({url:e.$tempUrl+"seller/check",data:{openId:e.openId},method:"GET",success:function(t){0!==t.data.code&&(e.validApply=!1)}})}})},methods:{activeFc:function(e){var t=this,a=e;console.log(a),uni.request({url:this.$tempUrl+"common/geocoderByAddress",method:"GET",data:{address:a.shopArea.label+a.shopAddress},success:function(e){0===e.data.status?uni.request({url:t.$tempUrl+"shop/seller/insert",method:"POST",data:{address:a.shopAddress,areaCode:a.shopArea.cityCode,areaName:a.shopArea.label,contact:a.sellerPhone,latitude:e.data.result.location.lat,longitude:e.data.result.location.lng,name:a.shopName},success:function(e){0===e.data.code?uni.request({url:t.$tempUrl+"seller/insert",method:"POST",data:{shopId:e.data.data.id,name:a.sellerName,phone:a.sellerPhone,type:2,wechatOpenid:t.openId},success:function(e){0===e.data.code?uni.showModal({title:"申请成功",content:"请耐心等待，我们将在1-2个工作日内给您答复！",showCancel:!1,success:function(e){e.confirm&&(console.log("用户点击确定"),t.validApply=!1)}}):uni.showModal({title:"申请失败",content:"请勿重复申请！",showCancel:!1})}}):uni.showToast({title:"店铺申请失败",icon:"none"})}}):uni.showToast({title:e.data.message})}})}},components:{inputs:o.default}};t.default=i},b3ce:function(e,t,a){"use strict";a.r(t);var o=a("a942"),n=a.n(o);for(var i in o)"default"!==i&&function(e){a.d(t,e,function(){return o[e]})}(i);t["default"]=n.a}}]);