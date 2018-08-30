webpackJsonp([0],[,,,function(e,t,n){/**
 * vue-connect-search v0.2.0
 * (c) 2018 FlynnLee
 * @license MIT
 */
!function(t,n){e.exports=n()}(0,function(){"use strict";var e=function(e,t){for(var n in e)t(e[n],n)},t=function(e){return void 0!==e},n=function(e,t){var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;var o=!0;for(var i in e)t[i]!==e[i]&&(o=!1);return o},r=function(n,r,o){var i=Object.assign({},r.query);return e(n,function(e,n){var r=i[n];if(r)switch(e.type){case String:i[n]=r+"";break;case Number:i[n]=+r}!t(r)&&t(e.default)&&(i[n]=e.default)}),i},o={name:"vue-connect-search"};return o.install=function(e){e.mixin({beforeCreate:function(){if(this.$options.connectSearch){var t=this.$options.connectSearch.schema;e.util.defineReactive(this,"$search",r(t,this.$route))}},watch:{$route:function(e,t){if(this.$options.connectSearch){var o=this.$options.connectSearch,i=o.onParamsChange,a=o.onQueryChange,s=o.schema,u=e.params,c=t.params;this.$search=r(s,e),n(u,c)?a&&a.call(this):i&&i.call(this)}}}})},"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),o})},function(e,t,n){"use strict";var r=n(1),o=n(17),i=n(14),a=n.n(i);r.a.use(o.a);var s=[{path:"/info",component:a.a}],u=new o.a({mode:"history",routes:s});t.a=u},function(e,t,n){function r(e){n(10)}var o=n(2)(n(7),n(16),r,null,null);e.exports=o.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(5),i=n.n(o),a=n(4),s=n(3);r.a.config.productionTip=!1,r.a.use(s),new r.a({el:"#app",router:a.a,template:"<App/>",components:{App:i.a}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={connectSearch:{schema:{version:{type:Number,defualt:1},name:{type:String,default:"FlynnLee"},status:{type:Number,default:0},unknown:{type:Number}},onQueryChange:function(){console.log("query change",JSON.parse(JSON.stringify(this.$search)))}},methods:{goto:function(e){this.$router.push(e)}}}},function(e,t){},function(e,t){},,,,function(e,t,n){function r(e){n(9)}var o=n(2)(n(8),n(15),r,null,null);e.exports=o.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h4",[e._v("\n        Info Page (Open Console See Detail)\n    ")]),e._v(" "),n("ul",{staticClass:"aside"},[n("li",[n("router-link",{attrs:{to:{query:{}}}},[e._v("should use default")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:{query:{name:"angelina"}}}},[e._v("should merge name")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:{query:{status:""}}}},[e._v(" should keep ''")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:{query:{extra:"hello"}}}},[e._v(" should append")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:{query:{version:"6"}}}},[e._v("should version to Number")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:{query:{version:"0"}}}},[e._v("should version '0' correct")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:{query:{unknown:"8"}}}},[e._v("should no default correct")])],1),e._v(" "),e._m(0),e._v(" "),n("li",[n("button",{on:{click:function(t){e.goto("/info?a=1&name=test")}}},[e._v("manual go to")])])]),e._v(" "),n("div",{staticClass:"content"},[n("p",[e._v("\n            $search is\n        ")]),e._v(" "),n("p",[e._v("\n            "+e._s(e.$search)+"\n        ")])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("a",{attrs:{href:"/info?name=angel&version=3&extra=6"}},[e._v("should a link ok")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("vue-connect-search")]),e._v(" "),n("router-link",{attrs:{to:"/info"}},[e._v("\n    /info\n  ")]),e._v(" "),n("router-view",{staticStyle:{"margin-top":"20px"}})],1)},staticRenderFns:[]}}],[6]);
//# sourceMappingURL=app.180cc656fd5b9bd1fdbe.js.map