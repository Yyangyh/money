(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/receivables"],{"21e0":function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},n=[];a.d(t,"a",function(){return o}),a.d(t,"b",function(){return n})},5450:function(e,t,a){"use strict";a.r(t);var o=a("7c49"),n=a.n(o);for(var i in o)"default"!==i&&function(e){a.d(t,e,function(){return o[e]})}(i);t["default"]=n.a},"7c49":function(e,t,a){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("dc48"));function i(e){return e&&e.__esModule?e:{default:e}}var u={data:function(){return{imgSrc:"",photo:!0,array:["支付宝","微信"],index:0,token:e.getStorageSync("token"),account:"",type:1,show:0}},onReady:function(){n.default.entire(this,"get",n.default.api_root.user.getReceivables,{token:this.token},function(e,t){""!=t.data&&(e.account=t.data.account_pay,e.imgSrc=n.default.api+t.data.code_img,e.photo=!1,e.type=t.data.type,console.log(o(t.data.type," at pages\\user\\receivables.vue:65")),e.index=Number(t.data.type)-1),e.show=1})},methods:{bindPickerChange:function(e){this.index=e.target.value,this.type=Number(e.target.value)+1},upload:function(){var t=this;e.chooseImage({count:1,sourceType:["album"],success:function(a){e.showLoading({title:"上传中",mask:!0});var o=setTimeout(function(){e.hideLoading(),e.showToast({icon:"none",title:"网络请求错误，请稍后再试"})},1e4);e.uploadFile({url:n.default.api_root.user.updateIdImage+"?token="+e.getStorageSync("token"),filePath:a.tempFilePaths[0],name:"idimg",formData:{filename:"idimg"},success:function(a){e.hideLoading(),clearTimeout(o);var i=JSON.parse(a.data);e.showToast({icon:"none",title:i.msg}),200==i.code&&(t.photo=!1,t.imgSrc=n.default.api+i.data.path)}})}})},btn:function(){var t=this;if(!t.account||t.account.length<1)e.showToast({icon:"none",title:"用户名不能为空"});else if(t.imgSrc){e.showLoading({title:"提交中",mask:!0});var a=setTimeout(function(){e.hideLoading(),e.showToast({icon:"none",title:"网络请求错误，请稍后再试"})},1e4);console.log(o(t.imgSrc.split(n.default.api)[1]," at pages\\user\\receivables.vue:150")),console.log(o(t.account," at pages\\user\\receivables.vue:151")),console.log(o(t.type," at pages\\user\\receivables.vue:152")),n.default.entire(this,"post",n.default.api_root.user.saveReceivables+"?token="+t.token,{account_pay:t.account,type:t.type,code_img:t.imgSrc.split(n.default.api)[1]},function(t,o){e.hideLoading(),clearTimeout(a),e.showToast({icon:"none",title:o.msg}),200==o.code&&setTimeout(function(){e.switchTab({url:"../index/my"})},1500)})}else e.showToast({icon:"none",title:"请上传收款二维码"})}}};t.default=u}).call(this,a("6e42")["default"],a("0de9")["default"])},"97af":function(e,t,a){"use strict";a.r(t);var o=a("21e0"),n=a("5450");for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);a("a32b");var u=a("2877"),c=Object(u["a"])(n["default"],o["a"],o["b"],!1,null,"2b395de2",null);t["default"]=c.exports},a181:function(e,t,a){},a32b:function(e,t,a){"use strict";var o=a("a181"),n=a.n(o);n.a}},[["8d31","common/runtime","common/vendor"]]]);