(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/appealRecord"],{"242e":function(t,a,e){"use strict";e.r(a);var n=e("9788"),i=e("cffc");for(var o in i)"default"!==o&&function(t){e.d(a,t,function(){return i[t]})}(o);e("c4ba");var r=e("2877"),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"1d0c3958",null);a["default"]=s.exports},"8c2d":function(t,a,e){},9788:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c},i=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return i})},ac0f:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("dc48"));function i(t){return t&&t.__esModule?t:{default:t}}function o(t){return c(t)||s(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function c(t){if(Array.isArray(t)){for(var a=0,e=new Array(t.length);a<t.length;a++)e[a]=t[a];return e}}var l={data:function(){return{show:0,appeal:"",cover_appeal:"",page:1,maxPage:!0,load:"上拉加载更多"}},methods:{details:function(a,e){t.navigateTo({url:"./appealDetails?id="+a+"&leave="+e})},listData:function(a){n.default.entire(this,"get",n.default.api_root.user.getOwnList,{page:a,token:t.getStorageSync("token")},function(t,a){if(t.page>1){var e=t.appeal;e.push.apply(e,o(a.data)),a.data.length<20&&(t.maxPage=!1,t.load="没有更多数据了")}else a.data.length<20&&(t.maxPage=!1,t.load="没有更多数据了"),t.appeal=a.data})},iscover_listData:function(a){n.default.entire(this,"get",n.default.api_root.user.getList,{page:a,token:t.getStorageSync("token")},function(t,a){if(t.page>1){var e=t.cover_appeal;e.push.apply(e,o(a.data)),a.data.length<20&&(t.maxPage=!1,t.load="没有更多数据了")}else a.data.length<20&&(t.maxPage=!1,t.load="没有更多数据了"),t.cover_appeal=a.data})},isappeal:function(){this.show=0,this.load="上拉加载更多",this.page=1,this.maxPage=!0,this.listData(this.page)},iscover_appeal:function(){this.show=1,this.load="上拉加载更多",this.page=1,this.maxPage=!0,this.iscover_listData(this.page)}},onReachBottom:function(){if(0!=this.maxPage){var t=this.page+1;this.page=t,0==this.show&&this.listData(t),1==this.show&&this.iscover_listData(t)}},onShow:function(){this.listData(this.page)}};a.default=l}).call(this,e("6e42")["default"])},c4ba:function(t,a,e){"use strict";var n=e("8c2d"),i=e.n(n);i.a},cffc:function(t,a,e){"use strict";e.r(a);var n=e("ac0f"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,function(){return n[t]})}(o);a["default"]=i.a}},[["d549","common/runtime","common/vendor"]]]);