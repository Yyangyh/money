(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/planpage/debt"],{"06ed":function(t,e,n){"use strict";n.r(e);var o=n("f00b"),i=n("70ab");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("5c26");var u=n("2877"),s=Object(u["a"])(i["default"],o["a"],o["b"],!1,null,"09202990",null);e["default"]=s.exports},"24d9":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("dc48"));function i(t){return t&&t.__esModule?t:{default:t}}var a={data:function(){return{imgSrc:"",photo:!0,money:"",token:t.getStorageSync("token"),type:"",text:""}},methods:{upload:function(){var e=this;t.chooseImage({count:1,sourceType:["album"],success:function(n){t.showLoading({title:"上传中",mask:!0});var i=setTimeout(function(){t.hideLoading(),t.showToast({icon:"none",title:"网络请求错误，请稍后再试"})},1e4);t.uploadFile({url:o.default.api_root.user.updateIdImage+"?token="+t.getStorageSync("token"),filePath:n.tempFilePaths[0],name:"idimg",formData:{filename:"idimg"},success:function(n){t.hideLoading(),clearTimeout(i);var a=JSON.parse(n.data);t.showToast({icon:"none",title:a.msg}),200==a.code&&(e.imgSrc=o.default.api+a.data.path,e.photo=!1)}})}})},btn:function(){var e=this;if(e.money<600)t.showToast({icon:"none",title:"输入金额需大于600"});else if(e.money>5e6)t.showToast({icon:"none",title:"输入金额不能大于5000000"});else if(e.imgSrc){t.showLoading({title:"提交中",mask:!0});var n=setTimeout(function(){t.hideLoading(),t.showToast({icon:"none",title:"网络请求错误，请稍后再试"})},1e4);o.default.entire(this,"post",o.default.api_root.planpage.addDebt+"?token="+e.token,{type:e.type,money:e.money,voucher_img:e.imgSrc.split(o.default.api)[1]},function(e,o){t.hideLoading(),clearTimeout(n),t.showToast({icon:"none",title:o.msg}),200==o.code&&setTimeout(function(){t.switchTab({url:"../index/plan"})},1500)})}else t.showToast({icon:"none",title:"请上传债务凭证"})}},onLoad:function(t){this.type=t.type,0==t.type&&(this.text="其他"),1==t.type&&(this.text="信用卡"),2==t.type&&(this.text="房贷"),3==t.type&&(this.text="车贷")}};e.default=a}).call(this,n("6e42")["default"])},5442:function(t,e,n){},"5c26":function(t,e,n){"use strict";var o=n("5442"),i=n.n(o);i.a},"70ab":function(t,e,n){"use strict";n.r(e);var o=n("24d9"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},f00b:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})}},[["b499","common/runtime","common/vendor"]]]);