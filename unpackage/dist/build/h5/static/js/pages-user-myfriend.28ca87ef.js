(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-myfriend"],{"0293":function(t,e,n){var i=n("241e"),o=n("53e2");n("ce7e")("getPrototypeOf",function(){return function(t){return o(i(t))}})},"061b":function(t,e,n){t.exports=n("fa99")},"1df8":function(t,e,n){var i=n("63b6");i(i.S,"Object",{setPrototypeOf:n("ead6").set})},"25b0":function(t,e,n){n("1df8"),t.exports=n("584a").Object.setPrototypeOf},"4d16":function(t,e,n){t.exports=n("25b0")},7585:function(t,e,n){"use strict";var i=n("bf9c"),o=n.n(i);o.a},7685:function(t,e,n){"use strict";n.r(e);var i=n("875c"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=o.a},"875c":function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a481"),n("28a5");var o=i(n("dc48")),r=(i(n("de36")),{data:function(){return{data:"",show:0}},onNavigationBarButtonTap:function(t){uni.navigateTo({url:"/pages/user/friendlist"})},methods:{copy:function(t){uni.setClipboardData({data:t,success:function(t){uni.showToast({icon:"none",title:"复制成功"})}})},preservation:function(t){var e=new Blob([""],{type:"application/octet-stream"}),n=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=t.replace(/(.*\/)*([^.]+.*)/gi,"$2").split("?")[0];var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),i.dispatchEvent(o),URL.revokeObjectURL(n);for(var r,a=document.getElementsByTagName("img"),u=0;r=a[u];u++)r.addEventListener(triggerEvent,function(){var t=this.getAttribute("src");saveAs(t)},!1)},preview:function(t){var e=[t];uni.previewImage({urls:e,longPressActions:{itemList:["保存图片"],success:function(t){uni.showToast({icon:"none",title:"此功能仅能在APP中使用"})},fail:function(t){console.log(t.errMsg)}}})}},onShow:function(){o.default.entire(this,"get",o.default.api_root.user.qrcode+"?token="+uni.getStorageSync("token"),{},function(t,e){t.data=e.data,t.show=5})}});e.default=r},"90d1":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".content[data-v-5dee3450]{color:#b8c6e0;font-size:%?32?%;overflow:hidden}.code_box[data-v-5dee3450]{width:94%;margin:%?30?% 3%;background:#3d4375;text-align:center;overflow:hidden;\n\t/* height: 600rpx; */padding:%?40?% 0}.code[data-v-5dee3450]{\n\t/* margin-top: 100rpx; */}.code uni-image[data-v-5dee3450]{width:65%;max-width:%?640?%}.invitation[data-v-5dee3450]{margin:%?40?% 0;font-size:%?24?%}.invitation uni-text[data-v-5dee3450]{font-size:%?32?%;color:#55dbfe}.code_text uni-text[data-v-5dee3450]{display:inline-block;width:40%;margin:0 5%;height:%?60?%;line-height:%?60?%;color:#fff;border-radius:%?20?%}.copy[data-v-5dee3450]{background:#45cffd}.preservation[data-v-5dee3450]{background:#7989ab}.test[data-v-5dee3450]{font-size:%?26?%;color:#7489ac;margin-left:3%;margin-bottom:%?5?%}",""])},"9d27":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[0==t.show?n("v-uni-view",{}):n("v-uni-view",{},[n("v-uni-view",{staticClass:"code_box"},[n("v-uni-view",{staticClass:"code"},[n("v-uni-image",{attrs:{src:t.data.url_code,mode:"widthFix"},on:{click:function(e){e=t.$handleEvent(e),t.preview(t.data.url_code)}}})],1),n("v-uni-view",{staticClass:"invitation"},[t._v("邀请码："),n("v-uni-text",[t._v(t._s(t.data.icode))])],1),n("v-uni-view",{staticClass:"code_text"},[n("v-uni-text",{staticClass:"copy",on:{click:function(e){e=t.$handleEvent(e),t.copy(t.data.url)}}},[t._v("复制邀请链接")]),n("v-uni-text",{staticClass:"copy",on:{click:function(e){e=t.$handleEvent(e),t.preservation(t.data.url_code)}}},[t._v("保存图片")])],1)],1)],1)],1)},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},bb60:function(t,e,n){"use strict";n.r(e);var i=n("9d27"),o=n("7685");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("7585");var a=n("2877"),u=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,"5dee3450",null);e["default"]=u.exports},bf9c:function(t,e,n){var i=n("90d1");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("b17be1fa",i,!0,{sourceMap:!1,shadowMode:!1})},dc48:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i="http://ck15.8396048.com",o={info:{msg:i+"/routine/debt/msg"},login:{login:i+"/routine/login/login",logo:i+"/routine/login/get_enter_logo"},reg:{reg:i+"/routine/login/register",verifycode:i+"/routine/login/verifycode",forget:i+"/routine/login/forget"},index:{info:i+"/routine/home/info",notice:i+"/routine/login/getHomePop",get_list:i+"/routine/user/get_check_level_list",up_list:i+"/routine/user/up_check_level_list",examine:i+"/routine/debt/examine",crowdfunding:i+"/routine/debt/crowdfunding",visit:i+"/routine/auth_api/visit",nearRepayment:i+"/routine/debt/nearRepayment",lists:i+"/routine/article/lists",getArticle:i+"/routine/article/getArticle"},user:{realname:i+"/routine/user/realname",updateIdImage:i+"/routine/user/updateIdImage",upIdentityCard:i+"/routine/user/upIdentityCard",addressList:i+"/routine/user/addressList",saveAddress:i+"/routine/user/saveAddress",saveReceivables:i+"/routine/debt/saveReceivables",getReceivables:i+"/routine/debt/getReceivables",mygroup:i+"/routine/user/mygroup",qrcode:i+"/routine/user/qrcode",detail:i+"/routine/complaint/detail",revoke:i+"/routine/complaint/revoke",getOwnList:i+"/routine/complaint/getOwnList",getList:i+"/routine/complaint/getList",myteams:i+"/routine/user/myteams",message:i+"/routine/home/message"},planpage:{addDebt:i+"/routine/debt/addDebt",get_check_up:i+"/routine/user/get_check_up_list",update_voucher:i+"/routine/user/update_voucher",history:i+"/routine/user/get_check_level_list",adjustment:i+"/routine/user/adjustment",ask:i+"/routine/complaint/ask"}},r=function(t,e,n,i,o){uni.request({url:n,data:i,method:e,success:function(e){var n=e.data;401==n.code?(uni.removeStorageSync("token"),uni.reLaunch({url:"/pages/login/login"})):o(t,n)}})},a=function(t,e,n,i,o){uni.showLoading({title:"加载中",mask:!0});var r=setTimeout(function(){uni.hideLoading(),uni.showToast({icon:"none",title:"网络请求错误，请稍后再试"})},1e4);uni.request({url:n,data:i,method:e,success:function(e){uni.hideLoading(),clearTimeout(r);var n=e.data;401==n.code?(uni.removeStorageSync("token"),uni.reLaunch({url:"/pages/login/login"})):o(t,n)}})},u={api:i,api_root:o,entire:r,load_entire:a};e.default=u},de36:function(t,e,n){"use strict";var i=n("288e");n("28a5"),n("7f7f");var o=i(n("5176"));n("6b54"),n("87b3"),n("ac6a");var r=i(n("4d16")),a=i(n("061b")),u=i(n("5d58")),c=i(n("4aa6")),s=i(n("d5ca")),l=i(n("67bb")),f=i(n("85f2"));!function(e,n){try{window.ClipboardJS=n()}catch(n){}t.exports=n()}(0,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||(0,f.default)(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof l.default&&s.default&&(0,f.default)(t,s.default,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=(0,c.default)(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){var i="function"==typeof l.default&&"symbol"==typeof u.default?function(t){return typeof t}:function(t){return t&&"function"==typeof l.default&&t.constructor===l.default&&t!==l.default.prototype?"symbol":typeof t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,f.default)(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=v(n(1)),d=v(n(3)),p=v(n(4));function v(t){return t&&t.__esModule?t:{default:t}}var h=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||(0,a.default)(e)).call(this));return i.resolveOptions(n),i.listenClick(t),i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=(0,c.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(r.default?(0,r.default)(t,e):t.__proto__=e)}(e,d.default),o(e,[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===i(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,p.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return g("action",t)||"copy"}},{key:"defaultTarget",value:function(t){var e=g("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return g("text",t)||this.text}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}();function g(t,e){var n="data-clipboard-"+t,i=e&&"function"===typeof e.hasAttribute;if(i&&e.hasAttribute(n))return e.getAttribute(n)}t.exports=h},function(t,e,n){var i,o="function"==typeof l.default&&"symbol"==typeof u.default?function(t){return typeof t}:function(t){return t&&"function"==typeof l.default&&t.constructor===l.default&&t!==l.default.prototype?"symbol":typeof t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,f.default)(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n(2),c=(i=a)&&i.__esModule?i:{default:i},s=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return r(e,[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,c.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,c.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":o(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),e}();t.exports=s},function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var i=window.getSelection(),o=document.createRange();o.selectNodeContents(t),i.removeAllRanges(),i.addRange(o),e=i.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var i=this.e||(this.e={});return(i[t]||(i[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var i=this;function o(){i.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),i=0,o=n.length;i<o;i++)n[i].fn.apply(n[i].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),i=n[t],o=[];if(i&&e)for(var r=0,a=i.length;r<a;r++)i[r].fn!==e&&i[r].fn._!==e&&o.push(i[r]);return o.length?n[t]=o:delete n[t],this}},t.exports=n},function(t,e,n){var i=n(5),o=n(6);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!i.string(e))throw new TypeError("Second argument must be a String");if(!i.fn(n))throw new TypeError("Third argument must be a Function");if(i.node(t))return d=e,p=n,(f=t).addEventListener(d,p),{destroy:function(){f.removeEventListener(d,p)}};if(i.nodeList(t))return c=t,s=e,l=n,Array.prototype.forEach.call(c,function(t){t.addEventListener(s,l)}),{destroy:function(){Array.prototype.forEach.call(c,function(t){t.removeEventListener(s,l)})}};if(i.string(t))return r=t,a=e,u=n,o(document.body,r,a,u);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var r,a,u,c,s,l,f,d,p}},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var i=n(7);function o(t,e,n,o,r){var a=function(t,e,n,o){return function(n){n.delegateTarget=i(n.target,e),n.delegateTarget&&o.call(t,n)}}.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}t.exports=function(t,e,n,i,r){return"function"==typeof t.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return o(t,e,n,i,r)}))}},function(t,e){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}}])});var d={isFunction:function(t){var e=Object.prototype.toString.call(t);return"[object Function]"==e},isObject:function(t){var e=Object.prototype.toString.call(t);return"[object Object]"==e},isString:function(t){var e=Object.prototype.toString.call(t);return"[object String]"==e}};function p(t){var e=document.createElement("a");e.setAttribute("href",t.blob),e.setAttribute("downLoad",t.name),e.click()}uni.setClipboardData=function(t){var e=function(){},n={data:null,event:null,success:e,fail:e,complete:e};t&&d.isObject(t)&&(n=(0,o.default)({},n,t)),t&&d.isString(t)&&(n=(0,o.default)({},n,{data:t}));var i=n.data,r=n.success||e,a=n.fail||e,u=n.complete||e,c=n.event||window.event||{},s=new ClipboardJS(".null",{text:function(){return i}});s.on("success",function(t){window.__clipboard__=i,r&&d.isFunction(r)&&r({data:t.text}),u&&d.isFunction(u)&&u(),s.off("error"),s.off("success"),s.destroy()}),s.on("error",function(t){a&&d.isFunction(a)&&a(t),u&&d.isFunction(u)&&u(),s.off("error"),s.off("success"),s.destroy()}),s.onClick(c)},uni.getClipboardData=function(t){var e=function(){},n={data:null,event:null,success:e,fail:e,complete:e};t&&d.isObject(t)&&(n=(0,o.default)({},n,t));var i=n.success||e,r=n.fail||e,a=n.complete||e;void 0!==window.__clipboard__?i&&d.isFunction(i)&&i({data:window.__clipboard__}):r&&d.isFunction(r)&&r({data:null}),a&&d.isFunction(a)&&a()},uni.saveImageToPhotosAlbum=uni.saveVideoToPhotosAlbum=function(t){var e=function(){},n={filePath:null,success:e,fail:e,complete:e};t&&d.isObject(t)&&(n=(0,o.default)({},n,t)),t&&d.isString(t)&&(n=(0,o.default)({},n,{filePath:t}));var i=n.filePath,r=n.success||e,a=n.fail||e,u=n.complete||e;if(!i)return a&&d.isFunction(a)&&a({msg:"no File"}),void(u&&d.isFunction(u)&&u());var c=i.split("/"),s=c[c.length-1];uni.downloadFile({url:i,success:function(t){var e=t.tempFilePath;p({name:s,blob:e}),r&&d.isFunction(r)&&r({filePath:i})},fail:function(t){a&&d.isFunction(a)&&a({msg:t})},complete:function(){u&&d.isFunction(u)&&u()}})}},ead6:function(t,e,n){var i=n("f772"),o=n("e4ae"),r=function(t,e){if(o(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=n("d864")(Function.call,n("bf0b").f(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,n){return r(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:r}},fa99:function(t,e,n){n("0293"),t.exports=n("584a").Object.getPrototypeOf}}]);