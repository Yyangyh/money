(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/indexpage/news"],{"61ac":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(e("dc48"));function o(t){return t&&t.__esModule?t:{default:t}}function r(t){return c(t)||u(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function c(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}var f=function(){return e.e("components/uni-load-more/uni-load-more").then(e.bind(null,"acb3"))},d={components:{uniLoadMore:f},data:function(){return{show:"",data:"",page:1,maxPage:!0,load:"上拉加载更多"}},methods:{listData:function(n){a.default.entire(this,"get",a.default.api_root.info.msg,{page:n,token:t.getStorageSync("token")},function(t,n){if(t.page>1){var e=t.data;e.push.apply(e,r(n.data)),n.data.length<20&&(t.maxPage=!1,t.load="没有更多数据了")}else n.data.length<20&&(t.maxPage=!1,t.load="没有更多数据了"),t.data=n.data})}},onReachBottom:function(){if(0!=this.maxPage){var t=this.page+1;this.page=t,this.listData(t)}},onShow:function(){this.listData(this.page)}};n.default=d}).call(this,e("6e42")["default"])},8911:function(t,n,e){"use strict";e.r(n);var a=e("d2f9"),o=e("b599");for(var r in o)"default"!==r&&function(t){e.d(n,t,function(){return o[t]})}(r);e("dd66");var i=e("2877"),u=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,"3e4b958b",null);n["default"]=u.exports},b599:function(t,n,e){"use strict";e.r(n);var a=e("61ac"),o=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);n["default"]=o.a},c033:function(t,n,e){},d2f9:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c;t._isMounted||(t.e0=function(n){t.show=t.index})},o=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return o})},dd66:function(t,n,e){"use strict";var a=e("c033"),o=e.n(a);o.a}},[["5321","common/runtime","common/vendor"]]]);