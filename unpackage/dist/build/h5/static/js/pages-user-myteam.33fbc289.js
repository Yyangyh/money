(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-myteam"],{"02d2":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"tab_top"},[i("v-uni-text",[e._v("推荐层级")]),i("v-uni-text",[e._v("团队(已激活)")]),i("v-uni-text",[e._v("已收订单")]),i("v-uni-text",[e._v("漏单")])],1),i("v-uni-view",{},e._l(e.data,function(t,n){return i("v-uni-view",{key:n,staticClass:"tab_bottom"},[i("v-uni-text",[e._v("第"+e._s(t.level)+"层")]),i("v-uni-text",[e._v(e._s(t.teams))]),i("v-uni-text",[e._v(e._s(t.orders))]),i("v-uni-text",[e._v(e._s(t.slips))])],1)}),1)],1)},o=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o})},4296:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".content[data-v-1bbc6877]{color:#fff;font-size:%?28?%;overflow:hidden}.tab_top[data-v-1bbc6877]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background:#3a4175;margin-top:%?20?%;height:%?90?%;padding:0 5%;line-height:%?90?%}.tab_top uni-text[data-v-1bbc6877]{\n\t/* width: 25%; */}.tab_bottom[data-v-1bbc6877]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:0 5%;background:#343c6d;height:%?80?%;line-height:%?80?%;margin-top:1px}",""])},"46a4":function(e,t,i){"use strict";i.r(t);var n=i("02d2"),o=i("5231");for(var a in o)"default"!==a&&function(e){i.d(t,e,function(){return o[e]})}(a);i("6cea");var u=i("2877"),r=Object(u["a"])(o["default"],n["a"],n["b"],!1,null,"1bbc6877",null);t["default"]=r.exports},5231:function(e,t,i){"use strict";i.r(t);var n=i("b612"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);t["default"]=o.a},"6cea":function(e,t,i){"use strict";var n=i("b4d7"),o=i.n(n);o.a},b4d7:function(e,t,i){var n=i("4296");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("153a5b58",n,!0,{sourceMap:!1,shadowMode:!1})},b612:function(e,t,i){"use strict";var n=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(i("dc48")),a={data:function(){return{data:""}},onShow:function(){o.default.entire(this,"get",o.default.api_root.user.myteams,{token:uni.getStorageSync("token")},function(e,t){e.data=t.data})}};t.default=a},dc48:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="http://ck15.8396048.com",o={info:{msg:n+"/routine/debt/msg"},login:{login:n+"/routine/login/login",logo:n+"/routine/login/get_enter_logo"},reg:{reg:n+"/routine/login/register",verifycode:n+"/routine/login/verifycode",forget:n+"/routine/login/forget"},index:{info:n+"/routine/home/info",notice:n+"/routine/login/getHomePop",get_list:n+"/routine/user/get_check_level_list",up_list:n+"/routine/user/up_check_level_list",examine:n+"/routine/debt/examine",crowdfunding:n+"/routine/debt/crowdfunding",visit:n+"/routine/auth_api/visit",nearRepayment:n+"/routine/debt/nearRepayment",lists:n+"/routine/article/lists",getArticle:n+"/routine/article/getArticle"},user:{realname:n+"/routine/user/realname",updateIdImage:n+"/routine/user/updateIdImage",upIdentityCard:n+"/routine/user/upIdentityCard",addressList:n+"/routine/user/addressList",saveAddress:n+"/routine/user/saveAddress",saveReceivables:n+"/routine/debt/saveReceivables",getReceivables:n+"/routine/debt/getReceivables",mygroup:n+"/routine/user/mygroup",qrcode:n+"/routine/user/qrcode",detail:n+"/routine/complaint/detail",revoke:n+"/routine/complaint/revoke",getOwnList:n+"/routine/complaint/getOwnList",getList:n+"/routine/complaint/getList",myteams:n+"/routine/user/myteams",message:n+"/routine/home/message"},planpage:{addDebt:n+"/routine/debt/addDebt",get_check_up:n+"/routine/user/get_check_up_list",update_voucher:n+"/routine/user/update_voucher",history:n+"/routine/user/get_check_level_list",adjustment:n+"/routine/user/adjustment",ask:n+"/routine/complaint/ask"}},a=function(e,t,i,n,o){uni.request({url:i,data:n,method:t,success:function(t){var i=t.data;401==i.code?(uni.removeStorageSync("token"),uni.reLaunch({url:"/pages/login/login"})):o(e,i)}})},u=function(e,t,i,n,o){uni.showLoading({title:"加载中",mask:!0});var a=setTimeout(function(){uni.hideLoading(),uni.showToast({icon:"none",title:"网络请求错误，请稍后再试"})},1e4);uni.request({url:i,data:n,method:t,success:function(t){uni.hideLoading(),clearTimeout(a);var i=t.data;401==i.code?(uni.removeStorageSync("token"),uni.reLaunch({url:"/pages/login/login"})):o(e,i)}})},r={api:n,api_root:o,entire:a,load_entire:u};t.default=r}}]);