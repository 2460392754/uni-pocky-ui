(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["preview-modal"],{"0188":function(t,e,n){"use strict";n.r(e);var a=n("cf79"),l=n("0e81");for(var o in l)"default"!==o&&function(t){n.d(e,t,function(){return l[t]})}(o);var c=n("f0c5"),i=Object(c["a"])(l["default"],a["a"],a["b"],!1,null,"0e4a88dc",null);e["default"]=i.exports},"0e81":function(t,e,n){"use strict";n.r(e);var a=n("5c86"),l=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=l.a},"5c86":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{value1:!1,value2:!1}}};e.default=a},cf79:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page modal-page"},[n("p-nav",{attrs:{"bg-color":"p-bg-green","is-back":!0}},[n("template",{attrs:{slot:"back"},slot:"back"},[t._v("返回")]),n("template",{attrs:{slot:"content"},slot:"content"},[t._v("modal")])],2),n("v-uni-view",{staticClass:"page-container"},[n("v-uni-text",{staticClass:"title"},[t._v("基础用法")]),n("v-uni-view",{staticClass:"container-1"},[n("p-modal",{attrs:{title:"is title",content:"is content",ok:"ok",cancel:"cancel"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),n("p-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.value1=!0}}},[t._v("弹出modal")])],1),n("v-uni-text",{staticClass:"title"},[t._v("自定义插槽")]),n("v-uni-view",{staticClass:"container-1"},[n("p-modal",{model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}},[n("template",{attrs:{slot:"header"},slot:"header"},[t._v("is title")]),n("template",{attrs:{slot:"content"},slot:"content"},[t._v("is content")]),n("template",{attrs:{slot:"footer"},slot:"footer"},[n("p-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.value2=!1}}},[t._v("ok")]),n("p-button",{attrs:{type:"p-bg-red"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.value2=!1}}},[t._v("cancel")])],1)],2),n("p-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.value2=!0}}},[t._v("弹出modal")])],1)],1)],1)},l=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return l})}}]);