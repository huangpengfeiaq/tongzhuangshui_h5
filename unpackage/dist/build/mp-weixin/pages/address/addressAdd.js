(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/addressAdd"],{"6ae1":function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",[a("inputs",{attrs:{inputsArray:e.inputsArray,activeName:"保存并使用",onLoadData:e.onLoadData,animationType:"slide-fade-right",animationDuration:.1,submitReSet:"",titleSet:e.titleSet,contentSet:e.contentSet,buttonStyle:e.buttonStyle,inputDebounceSet:e.inputDebounceSet,eventid:"ddf5eb50-0",mpcomid:"ddf5eb50-0"},on:{chaildOpenEvent:e.openWin,activeFc:e.activeFc}})],1)},n=[];a.d(t,"a",function(){return o}),a.d(t,"b",function(){return n})},7645:function(e,t,a){"use strict";a("4436");var o=r(a("b0ce")),n=r(a("a6ba"));function r(e){return e&&e.__esModule?e:{default:e}}Page((0,o.default)(n.default))},"7d63":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("ff23"));function n(e){return e&&e.__esModule?e:{default:e}}var r={data:function(){return{inputDebounceSet:{openInputDebounce:!0,delay:500},titleSet:{size:14},contentSet:{size:14},buttonStyle:{activeButton:"background-color: #f06c7a;border-radius: 30px;box-shadow: 2px 2px 1px 1px #f06c7a;height:60upx;font-size:28upx;",changeButton:"background-color: #f06c7a;border-radius: 30px;box-shadow: 2px 2px 1px 1px #f06c7a;",selectButton:"background-color: #f06c7a;border-radius: 30px;box-shadow: 2px 2px 1px 1px #f06c7a;",confirmButton:"background-color: #f06c7a;border-radius: 30px;box-shadow: 2px 2px 1px 1px #f06c7a;",getcodeButton:"background-color: #f06c7a;border-radius: 30px;box-shadow: 2px 2px 1px 1px #f06c7a;"},inputsArray:[{segmentationTitle:"新增收获地址",border_top:"1px solid #f2f2f2",title:"收货人",iconColor:"#f06c7a",variableName:"contactName"},{title:"手机号码",verifyFc:function(e){return!!/^[1][3,4,5,7,8][0-9]{9}$/.test(e)},verifyErr:"手机号校验错误",variableName:"contactPhone"},{type:"picker-provincialStreet",title:"所在地区",chooseName:"选择地区",onceShowDefaultValue:!1,variableName:"area"},{title:"详细地址",tapClear:!0,iconColor:"#f06c7a",variableName:"address"},{title:"标签",type:"radio",ignore:!0,itemArray:[{name:"家",value:"0"},{name:"公司",value:"1"},{name:"学校",value:"2"}],color:"#f06c7a",scale:".8",variableName:"label"},{type:"switch",title:"设置默认地址",color:"#f06c7a",ignore:!0,defaultValue:!0,scale:".8",variableName:"isSure"}],onLoadData:"data_"}},methods:{activeFc:function(t){var a=t;e.showToast({title:"获取输入成功"}),console.log(a),e.request({url:this.$tempUrl+"userAddress/insert",method:"POST",data:{userWechatOpenid:e.getStorageSync("openId"),contactName:a.contactName,contactPhone:a.contactPhone,areaCode:a.area.cityCode,areaName:a.area.label,areaArray:a.area.value+"",address:a.address,label:a.label},success:function(t){0===t.data.code&&e.setStorage({key:"confirmAddr",data:a,success:function(){e.navigateBack({delta:2})}})}})}},components:{inputs:o.default}};t.default=r}).call(this,a("543d")["default"])},"9cb3":function(e,t,a){"use strict";a.r(t);var o=a("7d63"),n=a.n(o);for(var r in o)"default"!==r&&function(e){a.d(t,e,function(){return o[e]})}(r);t["default"]=n.a},a6ba:function(e,t,a){"use strict";a.r(t);var o=a("6ae1"),n=a("9cb3");for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);var c=a("2877"),i=Object(c["a"])(n["default"],o["a"],o["b"],!1,null,null,null);t["default"]=i.exports}},[["7645","common/runtime","common/vendor"]]]);