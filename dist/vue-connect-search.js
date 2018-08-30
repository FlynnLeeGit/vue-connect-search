/**
 * vue-connect-search v0.2.0
 * (c) 2018 FlynnLee
 * @license MIT
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.vueConnectSearch=n()}(this,function(){"use strict";var e=function(e,n){for(var t in e)n(e[t],t)},n=function(e){return void 0!==e},t=function(e,n){var t=Object.keys(e),i=Object.keys(n);if(t.length!==i.length)return!1;var o=!0;for(var c in e)n[c]!==e[c]&&(o=!1);return o},i=function(t,i,o){var c=Object.assign({},i.query);return e(t,function(e,t){var i=c[t];if(i)switch(e.type){case String:c[t]=i+"";break;case Number:c[t]=+i}!n(i)&&n(e.default)&&(c[t]=e.default)}),c},o={name:"vue-connect-search"};return o.install=function(e){e.mixin({beforeCreate:function(){if(this.$options.connectSearch){var n=this.$options.connectSearch.schema;e.util.defineReactive(this,"$search",i(n,this.$route))}},watch:{$route:function(e,n){if(this.$options.connectSearch){var o=this.$options.connectSearch,c=o.onParamsChange,r=o.onQueryChange,a=o.schema,s=e.params,u=n.params;this.$search=i(a,e),t(s,u)?r&&r.call(this):c&&c.call(this)}}}})},"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),o});
