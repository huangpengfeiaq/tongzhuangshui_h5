(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/edit"],{"2d1e":function(e,t,a){"use strict";var i=a("b88c"),n=a.n(i);n.a},"459e":function(e,t,a){"use strict";a("4436");var i=s(a("b0ce")),n=s(a("8fd6"));function s(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(n.default))},6878:function(e,t,a){"use strict";a.r(t);var i=a("acaf"),n=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,function(){return i[e]})}(s);t["default"]=n.a},"8fd6":function(e,t,a){"use strict";a.r(t);var i=a("97c0"),n=a("6878");for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);a("2d1e");var o=a("2877"),c=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,null,null);t["default"]=c.exports},"97c0":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",[a("view",{staticClass:"content"},[a("view",{staticClass:"row"},[a("view",{staticClass:"nominal"},[e._v("收件人")]),a("view",{staticClass:"input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{placeholder:"请输入收件人姓名",type:"text",eventid:"d8a346d6-0"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),a("view",{staticClass:"row"},[a("view",{staticClass:"nominal"},[e._v("电话号码")]),a("view",{staticClass:"input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.tel,expression:"tel"}],attrs:{placeholder:"请输入收件人电话号码",type:"text",eventid:"d8a346d6-1"},domProps:{value:e.tel},on:{input:function(t){t.target.composing||(e.tel=t.target.value)}}})])]),a("view",{staticClass:"row"},[a("view",{staticClass:"nominal"},[e._v("所在地区")]),a("view",{staticClass:"input",attrs:{eventid:"d8a346d6-2"},on:{tap:e.chooseCity}},[e._v(e._s(e.region.address))])]),a("view",{staticClass:"row"},[a("view",{staticClass:"nominal"},[e._v("详细地址")]),a("view",{staticClass:"input"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.region.name,expression:"region.name"}],attrs:{"auto-height":"true",placeholder:"输入详细地址",eventid:"d8a346d6-3"},domProps:{value:e.region.name},on:{input:function(t){t.target.composing||(e.region.name=t.target.value)}}})])]),a("view",{staticClass:"row"},[a("view",{staticClass:"nominal"},[e._v("标签")]),a("view",{staticClass:"input"},[a("radio-group",{attrs:{eventid:"d8a346d6-4",mpcomid:"d8a346d6-0"},on:{change:e.radioChange}},[a("label",{staticClass:"radio"},[a("radio",{attrs:{value:"0",checked:"0"===e.label,color:"#f06c7a"}}),e._v("家")],1),a("label",{staticClass:"radio"},[a("radio",{attrs:{value:"1",checked:"1"===e.label,color:"#f06c7a"}}),e._v("公司")],1),a("label",{staticClass:"radio"},[a("radio",{attrs:{value:"2",checked:"2"===e.label,color:"#f06c7a"}}),e._v("学校")],1)],1)],1)]),a("view",{staticClass:"row"},[a("view",{staticClass:"nominal"},[e._v("设置默认地址")]),a("view",{staticClass:"input switch"},[a("switch",{attrs:{color:"#f06c7a",checked:e.isDefault,eventid:"d8a346d6-5"},on:{change:e.isDefaultChange}})])]),"edit"==e.editType?a("view",{staticClass:"row",attrs:{eventid:"d8a346d6-6"},on:{tap:e.del}},[a("view",{staticClass:"del"},[e._v("删除收货地址")])]):e._e()]),a("view",{staticClass:"save",attrs:{eventid:"d8a346d6-7"},on:{tap:e.save}},[a("view",{staticClass:"btn"},[e._v("保存地址")])])])},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})},acaf:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{editType:"edit",id:"",name:"",tel:"",isDefault:!0,region:{address:"请点击选择地址"},label:null}},methods:{radioChange:function(e){this.label=e.detail.value},chooseCity:function(){var t=this;e.chooseLocation({success:function(e){t.region=e}})},isDefaultChange:function(e){this.isDefault=e.detail.value},del:function(){var t=this;e.showModal({title:"提示",content:"确认删除此地址？",success:function(a){a.confirm?e.request({url:t.$tempUrl+"userAddress/delete",method:"DELETE",data:{id:t.id,openId:e.getStorageSync("openId")},success:function(a){0===a.data.code&&e.getStorage({key:"confirmAddr",success:function(a){a.data.id==t.id?e.removeStorage({key:"confirmAddr",success:function(){e.navigateBack({delta:1})}}):e.navigateBack({delta:1})}})}}):a.cancel&&console.log("用户点击取消")}})},save:function(){var t={userWechatOpenid:e.getStorageSync("openId"),contactName:this.name,contactPhone:this.tel,areaName:this.region.address,address:this.region.name,latitude:this.region.latitude,longitude:this.region.longitude,label:this.label};"edit"==this.editType&&(t.id=this.id),t.contactName?t.contactPhone?"请点击选择地址"!=!t.areaName?t.address?"edit"==this.editType?e.request({url:this.$tempUrl+"userAddress/updateForLatitudeAndLongitude",method:"PUT",data:t,success:function(a){0===a.data.code?e.setStorage({key:"confirmAddr",data:t,success:function(){e.showToast({title:"编辑地址成功",icon:"none"}),setTimeout(function(){e.navigateBack({delta:2})},200)}}):e.showToast({title:"失败",icon:"none"})}}):e.request({url:this.$tempUrl+"userAddress/insertForLatitudeAndLongitude",method:"POST",data:t,success:function(a){0===a.data.code?e.setStorage({key:"confirmAddr",data:t,success:function(){e.showToast({title:"新建地址成功",icon:"none"}),setTimeout(function(){e.navigateBack({delta:2})},200)}}):e.showToast({title:"失败",icon:"none"})}}):e.showToast({title:"请输入收件人详细地址",icon:"none"}):e.showToast({title:"请选择收件地址",icon:"none"}):e.showToast({title:"请输入收件人电话号码",icon:"none"}):e.showToast({title:"请输入收件人姓名",icon:"none"})}},onLoad:function(t){this.editType=t.type,"edit"==t.type&&(e.setNavigationBarTitle({title:"编辑收货地址"}),this.id=t.id,this.name=t.contactName,this.tel=t.contactPhone,this.region.address=t.areaName,this.region.name=t.address,this.region.latitude=t.latitude,this.region.longitude=t.longitude,console.log(t.label),this.label=t.label)}};t.default=a}).call(this,a("543d")["default"])},b88c:function(e,t,a){}},[["459e","common/runtime","common/vendor"]]]);