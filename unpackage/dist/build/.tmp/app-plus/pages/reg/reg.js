(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/reg/reg"],{"262d":function(e,t,o){"use strict";var n=o("9f59"),i=o.n(n);i.a},"618b":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(o("dc48"));function i(e){return e&&e.__esModule?e:{default:e}}var a={data:function(){return{verification:"获取验证码",disabled:!1,account:"",username:"",password:"",repassword:"",icode:"",verifycode:"",dis_icode:!1}},methods:{obtain:function(){var t=this;e.request({url:n.default.api_root.reg.verifycode,method:"get",data:{account:t.account,temp:"sms_reg"},success:function(o){e.showToast({icon:"none",title:o.data.msg}),200==o.data.code&&(t.verification="60s",t.disabled=!0,t.timer=setInterval(function(){var e=t.verification.split("s")[0];e--,t.verification=e+"s"},1e3))}})},register:function(){var t=this;if(t.username.length<1)e.showToast({icon:"none",title:"昵称不能为空"});else if(t.password==t.repassword)if(t.password.length<6)e.showToast({icon:"none",title:"密码最少需要六位"});else if(t.verifycode.length<6)e.showToast({icon:"none",title:"验证码最少需要六位"});else{var o={account:t.account,username:t.username,password:t.password,repassword:t.repassword,icode:t.icode,verifycode:t.verifycode};e.showLoading({title:"提交中",mask:!0});var i=setTimeout(function(){e.hideLoading(),e.showToast({icon:"none",title:"网络请求错误，请稍后再试"})},1e4);e.request({url:n.default.api_root.reg.reg,method:"post",data:o,success:function(t){e.hideLoading(),clearTimeout(i),e.showToast({icon:"none",title:t.data.msg}),200==t.data.code&&setTimeout(function(t,o){e.redirectTo({url:"../login/login"})},1500)}})}else e.showToast({icon:"none",title:"密码不一致"})}},watch:{verification:function(e,t){"-1s"==e&&(clearInterval(this.timer),this.verification="重新获取",this.disabled=!1)}},onLoad:function(e){e.code&&(this.icode=e.code,this.dis_icode=!0)}};t.default=a}).call(this,o("6e42")["default"])},"9f59":function(e,t,o){},af0e:function(e,t,o){"use strict";o.r(t);var n=o("618b"),i=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,function(){return n[e]})}(a);t["default"]=i.a},b277:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},i=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return i})},c983:function(e,t,o){"use strict";o.r(t);var n=o("b277"),i=o("af0e");for(var a in i)"default"!==a&&function(e){o.d(t,e,function(){return i[e]})}(a);o("262d");var s=o("2877"),r=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"013cd1fb",null);t["default"]=r.exports}},[["318c","common/runtime","common/vendor"]]]);