(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/indexpage/getArticle"],{"688a":function(e,t,n){"use strict";n.r(t);var a=n("a100"),r=n("a920");for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);n("e774");var i=n("2877"),u=Object(i["a"])(r["default"],a["a"],a["b"],!1,null,"0ef0e28a",null);t["default"]=u.exports},"7e9b":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("dc48"));function r(e){return e&&e.__esModule?e:{default:e}}var o={data:function(){return{data:"",show:0,richtext:""}},onLoad:function(t){a.default.entire(this,"get",a.default.api_root.index.getArticle,{token:e.getStorageSync("token"),id:t.id},function(e,t){e.data=t.data,e.show=1;var n=t.data.content,a=new RegExp("<img","gi"),r=new RegExp("<p","gi"),o=new RegExp("<span","gi");n=n.replace(a,'<img style="max-width: 100%;"'),n=n.replace(r,'<p style="word-wrap:break-word;word-break:normal;"'),n=n.replace(o,'<span style="word-wrap:break-word;word-break:normal;white-space: pre-wrap;"'),e.richtext=n})}};t.default=o}).call(this,n("6e42")["default"])},a100:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r})},a920:function(e,t,n){"use strict";n.r(t);var a=n("7e9b"),r=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=r.a},e404:function(e,t,n){},e774:function(e,t,n){"use strict";var a=n("e404"),r=n.n(a);r.a}},[["677e","common/runtime","common/vendor"]]]);