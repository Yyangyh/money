(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-indexpage-getArticle"],{"3bc2":function(e,t,i){"use strict";var a=i("d4c0"),n=i.n(a);n.a},"5ccc":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[0==e.show?i("v-uni-view",{}):i("v-uni-view",{},[i("v-uni-view",{staticClass:"title"},[e._v(e._s(e.data.title))]),i("v-uni-image",{attrs:{src:e.data.image_input,mode:"widthFix"}}),i("v-uni-rich-text",{staticClass:"test",attrs:{nodes:e.richtext}})],1)],1)},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})},"688a":function(e,t,i){"use strict";i.r(t);var a=i("5ccc"),n=i("a920");for(var r in n)"default"!==r&&function(e){i.d(t,e,function(){return n[e]})}(r);i("3bc2");var o=i("2877"),u=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"81e63bfa",null);t["default"]=u.exports},a920:function(e,t,i){"use strict";i.r(t);var a=i("aaa7"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,function(){return a[e]})}(r);t["default"]=n.a},aaa7:function(e,t,i){"use strict";var a=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("a481"),i("3b2b");var n=a(i("dc48")),r={data:function(){return{data:"",show:0,richtext:""}},onLoad:function(e){n.default.entire(this,"get",n.default.api_root.index.getArticle,{token:uni.getStorageSync("token"),id:e.id},function(e,t){e.data=t.data,e.show=1;var i=t.data.content,a=new RegExp("<img","gi"),n=new RegExp("<p","gi"),r=new RegExp("<span","gi");i=i.replace(a,'<img style="max-width: 100%;"'),i=i.replace(n,'<p style="word-wrap:break-word;word-break:normal;"'),i=i.replace(r,'<span style="word-wrap:break-word;word-break:normal;white-space: pre-wrap;"'),e.richtext=i})}};t.default=r},c505:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".content[data-v-81e63bfa]{text-align:center;color:#b8c6e0}.title[data-v-81e63bfa]{margin:%?20?% 0;font-size:%?36?%}uni-image[data-v-81e63bfa]{width:90%}.test[data-v-81e63bfa]{text-align:left;font-size:%?28?%;margin:0 %?15?%}.test[data-v-81e63bfa] img{width:100%}.test[data-v-81e63bfa] p{word-wrap:break-word!important;word-break:normal!important}.test[data-v-81e63bfa] span{word-wrap:break-word!important;word-break:normal!important;white-space:pre-wrap!important}",""])},d4c0:function(e,t,i){var a=i("c505");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("14e8db48",a,!0,{sourceMap:!1,shadowMode:!1})},dc48:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="http://ck15.8396048.com",n={info:{msg:a+"/routine/debt/msg"},login:{login:a+"/routine/login/login",logo:a+"/routine/login/get_enter_logo"},reg:{reg:a+"/routine/login/register",verifycode:a+"/routine/login/verifycode",forget:a+"/routine/login/forget"},index:{info:a+"/routine/home/info",notice:a+"/routine/login/getHomePop",get_list:a+"/routine/user/get_check_level_list",up_list:a+"/routine/user/up_check_level_list",examine:a+"/routine/debt/examine",crowdfunding:a+"/routine/debt/crowdfunding",visit:a+"/routine/auth_api/visit",nearRepayment:a+"/routine/debt/nearRepayment",lists:a+"/routine/article/lists",getArticle:a+"/routine/article/getArticle"},user:{realname:a+"/routine/user/realname",updateIdImage:a+"/routine/user/updateIdImage",upIdentityCard:a+"/routine/user/upIdentityCard",addressList:a+"/routine/user/addressList",saveAddress:a+"/routine/user/saveAddress",saveReceivables:a+"/routine/debt/saveReceivables",getReceivables:a+"/routine/debt/getReceivables",mygroup:a+"/routine/user/mygroup",qrcode:a+"/routine/user/qrcode",detail:a+"/routine/complaint/detail",revoke:a+"/routine/complaint/revoke",getOwnList:a+"/routine/complaint/getOwnList",getList:a+"/routine/complaint/getList",myteams:a+"/routine/user/myteams",message:a+"/routine/home/message"},planpage:{addDebt:a+"/routine/debt/addDebt",get_check_up:a+"/routine/user/get_check_up_list",update_voucher:a+"/routine/user/update_voucher",history:a+"/routine/user/get_check_level_list",adjustment:a+"/routine/user/adjustment",ask:a+"/routine/complaint/ask"}},r=function(e,t,i,a,n){uni.request({url:i,data:a,method:t,success:function(t){var i=t.data;401==i.code?(uni.removeStorageSync("token"),uni.reLaunch({url:"/pages/login/login"})):n(e,i)}})},o=function(e,t,i,a,n){uni.showLoading({title:"加载中",mask:!0});var r=setTimeout(function(){uni.hideLoading(),uni.showToast({icon:"none",title:"网络请求错误，请稍后再试"})},1e4);uni.request({url:i,data:a,method:t,success:function(t){uni.hideLoading(),clearTimeout(r);var i=t.data;401==i.code?(uni.removeStorageSync("token"),uni.reLaunch({url:"/pages/login/login"})):n(e,i)}})},u={api:a,api_root:n,entire:r,load_entire:o};t.default=u}}]);