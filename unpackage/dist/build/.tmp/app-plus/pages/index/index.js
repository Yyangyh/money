(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"10f2":function(t,e,n){"use strict";var o=n("61e4"),i=n.n(o);i.a},"238e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("dc48"));function i(t){return t&&t.__esModule?t:{default:t}}var a=function(){return n.e("pages/common/load").then(n.bind(null,"31ba"))},r={components:{load:a},data:function(){return{img_list:"",indicatorDots:!0,autoplay:!0,interval:3e3,duration:500,circular:!0,Lbtlist:"",api_root:"",notice:"",notice_show:!1,notice_record:!0,article:"",msg:[],lists:"",test:t.getStorageSync("test")}},onLoad:function(){""==t.getStorageSync("token")&&t.reLaunch({url:"/pages/login/login"}),1==this.notice_record&&o.default.entire(this,"get",o.default.api_root.index.notice,{token:t.getStorageSync("token")},function(t,e){""!=e.data&&(t.notice_show=!0,t.notice=e.data[0])}),o.default.entire(this,"get",o.default.api_root.index.info,{token:t.getStorageSync("token")},function(e,n){e.img_list=n.data.banner,e.article=n.data.articlelist,t.setStorageSync("user",n.data.member)}),o.default.entire(this,"get",o.default.api_root.index.nearRepayment,{token:t.getStorageSync("token")},function(t,e){t.msg=e.data}),o.default.entire(this,"get",o.default.api_root.index.lists,{token:t.getStorageSync("token")},function(t,e){t.lists=e.data})},methods:{jump:function(e){t.navigateTo({url:e})},close:function(){this.notice_show=!1,this.notice_record=!1,t.setStorageSync("notice_record",this.notice_record)}}};e.default=r}).call(this,n("6e42")["default"])},"61e4":function(t,e,n){},"8b87":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},b232:function(t,e,n){"use strict";n.r(e);var o=n("8b87"),i=n("de03");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("10f2");var r=n("2877"),c=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,"d96d9c26",null);e["default"]=c.exports},de03:function(t,e,n){"use strict";n.r(e);var o=n("238e"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a}},[["5132","common/runtime","common/vendor"]]]);