(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address-addressUpd"],{3227:function(e,t,a){"use strict";a.r(t);var n=a("94da"),o=a("8e82");for(var i in o)"default"!==i&&function(e){a.d(t,e,function(){return o[e]})}(i);var r=a("2877"),u=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,"57cbcf7e",null);t["default"]=u.exports},"8e82":function(e,t,a){"use strict";a.r(t);var n=a("bc94"),o=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);t["default"]=o.a},"94da":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-button",{staticStyle:{position:"fixed","z-index":"999",top:"40upx",right:"40upx"},attrs:{size:"mini",type:"warn",plain:"true"},on:{click:function(t){t=e.$handleEvent(t),e.delButton()}}},[e._v("删除")]),a("inputs",{attrs:{inputsArray:e.inputsArray,activeName:"保存并使用",onLoadData:e.onLoadData,animationType:"slide-fade-right",animationDuration:.1,submitReSet:"",titleSet:e.titleSet,contentSet:e.contentSet,buttonStyle:e.buttonStyle,inputDebounceSet:e.inputDebounceSet},on:{chaildOpenEvent:function(t){t=e.$handleEvent(t),e.openWin(t)},activeFc:function(t){t=e.$handleEvent(t),e.activeFc(t)}}})],1)},o=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o})},bc94:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a("ff23"));function o(e){return e&&e.__esModule?e:{default:e}}var i={data:function(){return{id:0,inputDebounceSet:{openInputDebounce:!0,delay:500},titleSet:{size:14},contentSet:{size:14},buttonStyle:{activeButton:"background-color: #f06c7a;border-radius: 30px;box-shadow: 2px 2px 1px 1px #f06c7a;height:60upx;font-size:28upx;",changeButton:"background-color: #f06c7a;border-radius: 30px;box-shadow: 2px 2px 1px 1px #f06c7a;",selectButton:"background-color: #f06c7a;border-radius: 30px;box-shadow: 2px 2px 1px 1px #f06c7a;",confirmButton:"background-color: #f06c7a;border-radius: 30px;box-shadow: 2px 2px 1px 1px #f06c7a;",getcodeButton:"background-color: #f06c7a;border-radius: 30px;box-shadow: 2px 2px 1px 1px #f06c7a;"},inputsArray:[{segmentationTitle:"编辑收获地址",border_top:"1px solid #f2f2f2",title:"收货人",iconColor:"#f06c7a",variableName:"contactName",defaultValue:""},{title:"手机号码",verifyFc:function(e){return!!/^[1][3,4,5,7,8][0-9]{9}$/.test(e)},verifyErr:"手机号校验错误",variableName:"contactPhone",defaultValue:""},{type:"picker-provincialStreet",title:"所在地区",chooseName:"选择地区",onceShowDefaultValue:!0,variableName:"area",defaultValue:[0,0,0,0]},{title:"详细地址",tapClear:!0,iconColor:"#f06c7a",variableName:"address",defaultValue:""},{title:"标签",type:"radio",ignore:!0,itemArray:[{name:"家",value:"0"},{name:"公司",value:"1"},{name:"学校",value:"2"}],color:"#f06c7a",scale:".8",variableName:"label"},{type:"switch",title:"设置默认地址",color:"#f06c7a",ignore:!0,scale:".8",variableName:"isSure",defaultValue:!0}],onLoadData:"data_"}},onLoad:function(e){console.log(e),this.id=e.id,this.inputsArray[0].defaultValue=e.contactName,this.inputsArray[1].defaultValue=e.contactPhone,this.inputsArray[2].defaultValue=e.areaArray.split(","),this.inputsArray[3].defaultValue=e.address,"null"!=e.label&&""!=e.label&&(this.inputsArray[4].itemArray[e.label].defaultValue=!0)},methods:{delButton:function(){var e=this;uni.showModal({title:"提示",content:"确认删除此地址？",success:function(t){t.confirm?uni.request({url:e.$tempUrl+"userAddress/delete",method:"DELETE",data:{id:e.id,openId:uni.getStorageSync("openId")},success:function(t){0===t.data.code&&uni.getStorage({key:"confirmAddr",success:function(t){t.data.id==e.id?uni.removeStorage({key:"confirmAddr",success:function(){uni.navigateBack({delta:1})}}):uni.navigateBack({delta:1})}})}}):t.cancel&&console.log("用户点击取消")}})},activeFc:function(e){var t=e;uni.showToast({title:"获取输入成功"}),console.log(t),uni.request({url:this.$tempUrl+"userAddress/update",method:"PUT",data:{id:this.id,userWechatOpenid:uni.getStorageSync("openId"),contactName:t.contactName,contactPhone:t.contactPhone,areaCode:t.area.cityCode,areaName:t.area.label,areaArray:t.area.value+"",address:t.address,label:t.label},success:function(e){0===e.data.code&&uni.setStorage({key:"confirmAddr",data:t,success:function(){uni.navigateBack({delta:2})}})}})}},components:{inputs:n.default}};t.default=i}}]);