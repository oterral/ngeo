(function(){'use strict';var aa=this;function l(a,b){a=a.split(".");var c=aa;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]?c=c[d]:c=c[d]={}:c[d]=b};function m(a,b){a.prototype=Object.create(b.prototype);a.prototype.constructor=a}function p(){}var ba=0;function ca(a){this.message="Assertion failed. See /doc/errors/#"+a+" for details.";this.code=a;this.name="AssertionError"}m(ca,Error);var q="function"===typeof Object.assign?Object.assign:function(a,b){if(!a||!a)throw new TypeError("Cannot convert undefined or null to object");for(var c=Object(a),d=1,e=arguments.length;d<e;++d){var f=arguments[d];if(void 0!==f&&null!==f)for(var g in f)f.hasOwnProperty(g)&&(c[g]=f[g])}return c};function da(a){for(var b in a)delete a[b]};function ea(a){function b(b){var d=a.listener,e=a.I||a.target;a.K&&fa(a);return d.call(e,b)}return a.J=b}function ga(a,b,c,d){for(var e,f=0,g=a.length;f<g;++f)if(e=a[f],e.listener===b&&e.I===c)return d&&(e.deleteIndex=f),e}function ha(a,b){return(a=a.B)?a[b]:void 0}function t(a,b,c,d){var e,f=a.B;f||(f=a.B={});e=f;(f=e[b])||(f=e[b]=[]);(e=ga(f,c,d,!1))?e.K=!1:(e={I:d,K:!1,listener:c,target:a,type:b},a.addEventListener(b,ea(e)),f.push(e));return e}
function ia(a,b,c,d){(a=ha(a,b))&&(c=ga(a,c,d,!0))&&fa(c)}function fa(a){if(a&&a.target){a.target.removeEventListener(a.type,a.J);var b=ha(a.target,a.type);if(b){var c="deleteIndex"in a?a.deleteIndex:b.indexOf(a);-1!==c&&b.splice(c,1);if(0===b.length){var b=a.target,c=a.type,d=ha(b,c);if(d){for(var e=0,f=d.length;e<f;++e)b.removeEventListener(c,d[e].J),da(d[e]);d.length=0;if(d=b.B)delete d[c],0===Object.keys(d).length&&delete b.B}}}da(a)}};function ja(){};function u(a){this.type=a;this.target=null}u.prototype.preventDefault=u.prototype.stopPropagation=function(){this.R=!0};function v(){this.w={};this.h={};this.u={}}m(v,ja);v.prototype.addEventListener=function(a,b){var c=this.u[a];c||(c=this.u[a]=[]);-1===c.indexOf(b)&&c.push(b)};function ka(a,b){var c="string"===typeof b?new u(b):b;b=c.type;c.target=a;var d=a.u[b];if(d){b in a.h||(a.h[b]=0,a.w[b]=0);++a.h[b];for(var e=0,f=d.length;e<f&&!1!==d[e].call(a,c)&&!c.R;++e);--a.h[b];if(0===a.h[b]){c=a.w[b];for(delete a.w[b];c--;)a.removeEventListener(b,p);delete a.h[b]}}}
v.prototype.removeEventListener=function(a,b){var c=this.u[a];c&&(b=c.indexOf(b),a in this.w?(c[b]=p,++this.w[a]):(c.splice(b,1),0===c.length&&delete this.u[a]))};function w(){v.call(this);this.D=0}m(w,v);w.prototype.b=function(){++this.D;ka(this,"change")};w.prototype.on=function(a,b,c){if(Array.isArray(a)){for(var d=a.length,e=Array(d),f=0;f<d;++f)e[f]=t(this,a[f],b,c);return e}return t(this,a,b,c)};function la(a,b,c){u.call(this,a);this.key=b;this.oldValue=c}m(la,u);function x(a){w.call(this);this.v||(this.v=++ba);this.j={};void 0!==a&&ma(this,a)}m(x,w);var na={};function y(a){return na.hasOwnProperty(a)?na[a]:na[a]="change:"+a}x.prototype.get=function(a){var b;this.j.hasOwnProperty(a)&&(b=this.j[a]);return b};x.prototype.notify=function(a,b){var c;c=y(a);ka(this,new la(c,a,b));ka(this,new la("propertychange",a,b))};
x.prototype.set=function(a,b,c){c?this.j[a]=b:(c=this.j[a],this.j[a]=b,c!==b&&this.notify(a,c))};function ma(a,b){for(var c in b)a.set(c,b[c],void 0)};function z(a,b,c,d,e){return e?(e[0]=a,e[1]=b,e[2]=c,e[3]=d,e):[a,b,c,d]}function oa(a){return[(a[0]+a[2])/2,(a[1]+a[3])/2]};var pa=function(){var a;"cosh"in Math?a=Math.cosh:a=function(a){a=Math.exp(a);return(a+1/a)/2};return a}();/*

 Latitude/longitude spherical geodesy formulae taken from
 http://www.movable-type.co.uk/scripts/latlong.html
 Licensed under CC-BY-3.0.
*/
function qa(a){this.radius=a}function ra(a,b){var c=a[1]*Math.PI/180,d=b[1]*Math.PI/180,e=(d-c)/2;a=(b[0]-a[0])*Math.PI/180/2;c=Math.sin(e)*Math.sin(e)+Math.sin(a)*Math.sin(a)*Math.cos(c)*Math.cos(d);return 2*sa.radius*Math.atan2(Math.sqrt(c),Math.sqrt(1-c))}
qa.prototype.offset=function(a,b,c){var d=a[1]*Math.PI/180;b/=this.radius;var e=Math.asin(Math.sin(d)*Math.cos(b)+Math.cos(d)*Math.sin(b)*Math.cos(c));return[180*(a[0]*Math.PI/180+Math.atan2(Math.sin(c)*Math.sin(b)*Math.cos(d),Math.cos(b)-Math.sin(d)*Math.sin(e)))/Math.PI,180*e/Math.PI]};var sa=new qa(6370997);var A={};A.degrees=2*Math.PI*sa.radius/360;A.ft=.3048;A.m=1;A["us-ft"]=1200/3937;
function B(a){this.a=a.code;this.b=a.units;this.f=void 0!==a.extent?a.extent:null;this.g=void 0!==a.A?a.A:this.h;this.c=a.L;var b=ta,c=a.code,d=ua||window.proj4;if("function"==typeof d&&void 0===b[c]){var e=d.defs(c);if(void 0!==e){void 0===a.L&&(this.c=e.to_meter);void 0===a.units&&(this.b=e.units);var f,g;for(f in b)if(a=d.defs(f),void 0!==a)if(b=C(f),a===e)va([b,this]);else{g=d(f,c);a=g.forward;g=g.inverse;var b=C(b),h=C(this);D(b,h,wa(a));D(h,b,wa(g))}}}}B.prototype.l=function(){return this.f};
B.prototype.h=function(a,b){if("degrees"==this.b)return a;var c=xa(this,C("EPSG:4326"));a=[b[0]-a/2,b[1],b[0]+a/2,b[1],b[0],b[1]-a/2,b[0],b[1]+a/2];a=c(a,a,2);c=(ra(a.slice(0,2),a.slice(2,4))+ra(a.slice(4,6),a.slice(6,8)))/2;a=this.c||A[this.b];void 0!==a&&(c/=a);return c};B.prototype.A=function(a,b){return this.g(a,b)};var ta={},E={},ua=null;function va(a){ya(a);a.forEach(function(b){a.forEach(function(a){b!==a&&D(b,a,za)})})}function Aa(a){ta[a.a]=a;D(a,a,za)}
function ya(a){var b=[];a.forEach(function(a){b.push(Aa(a))})}function D(a,b,c){a=a.a;b=b.a;a in E||(E[a]={});E[a][b]=c}function wa(a){return function(b,c,d){var e=b.length;d=void 0!==d?d:2;c=void 0!==c?c:Array(e);var f,g;for(g=0;g<e;g+=d)for(f=a([b[g],b[g+1]]),c[g]=f[0],c[g+1]=f[1],f=d-1;2<=f;--f)c[g+f]=b[g+f];return c}}
function C(a){var b;if(a instanceof B)b=a;else if("string"===typeof a){b=ta[a];var c=ua||window.proj4;void 0===b&&"function"==typeof c&&void 0!==c.defs(a)&&(b=new B({code:a}),Aa(b))}return b||null}function Ba(a,b){a=C(a);b=C(b);return xa(a,b)}function xa(a,b){a=a.a;b=b.a;var c;a in E&&b in E[a]&&(c=E[a][b]);void 0===c&&(c=Ca);return c}function Ca(a,b){if(void 0!==b&&a!==b){for(var c=0,d=a.length;c<d;++c)b[c]=a[c];a=b}return a}
function za(a,b){if(void 0!==b){for(var c=0,d=a.length;c<d;++c)b[c]=a[c];a=b}else a=a.slice();return a};function G(){x.call(this);this.C=[Infinity,Infinity,-Infinity,-Infinity];this.H=-1}m(G,x);G.prototype.l=function(a){this.H!=this.D&&(this.C=this.G(this.C),this.H=this.D);var b=this.C;a?(a[0]=b[0],a[1]=b[1],a[2]=b[2],a[3]=b[3]):a=b;return a};G.prototype.transform=function(a,b){this.F(Ba(a,b));return this};(function(){if(!("HTMLCanvasElement"in window))return!1;try{return document.createElement("CANVAS").getContext("2d")?!0:!1}catch(a){return!1}})();function H(a){x.call(this);this.a="geometry";this.c=this.f=null;t(this,y(this.a),this.g,this);void 0!==a&&(a instanceof G||!a?this.set(this.a,a):ma(this,a))}m(H,x);H.prototype.clone=function(){var a=new H(q({},this.j));Da(a,this.a);var b=this.get(this.a);b&&(b=b.clone(),a.set(a.a,b));(b=this.f)&&a.setStyle(b);return a};H.prototype.l=function(){this.b()};H.prototype.g=function(){this.c&&(fa(this.c),this.c=null);var a=this.get(this.a);a&&(this.c=t(a,"change",this.l,this));this.b()};
H.prototype.setStyle=function(a){if((this.f=a)&&"function"!==typeof a&&!Array.isArray(a))throw new ca(41);this.b()};function Da(a,b){ia(a,y(a.a),a.g,a);a.a=b;t(a,y(a.a),a.g,a);a.g()};function Ea(){this.a=this.s=null};function I(){G.call(this);this.layout="XY";this.c=2;this.a=null}m(I,G);function Fa(a){var b;"XY"==a?b=2:"XYZ"==a||"XYM"==a?b=3:"XYZM"==a&&(b=4);return b}I.prototype.G=function(a){var b=this.a,c=this.a.length,d=this.c;a=z(Infinity,Infinity,-Infinity,-Infinity,a);for(var e=0;e<c;e+=d){var f=a,g=b[e],h=b[e+1];f[0]=Math.min(f[0],g);f[1]=Math.min(f[1],h);f[2]=Math.max(f[2],g);f[3]=Math.max(f[3],h)}return a};function J(a,b,c){a.c=Fa(b);a.layout=b;a.a=c}
function K(a,b,c,d){if(b)c=Fa(b);else{for(b=0;b<d;++b){if(0===c.length){a.layout="XY";a.c=2;return}c=c[0]}c=c.length;var e;2==c?e="XY":3==c?e="XYZ":4==c&&(e="XYZM");b=e}a.layout=b;a.c=c}I.prototype.F=function(a){this.a&&(a(this.a,this.a,this.c),this.b())};
I.prototype.rotate=function(a,b){var c=this.a;if(c){var d=c.length,e=this.c,f=c?c:[],g=Math.cos(a);a=Math.sin(a);var h=b[0];b=b[1];for(var n=0,r=0;r<d;r+=e){var k=c[r]-h,F=c[r+1]-b;f[n++]=h+k*g-F*a;f[n++]=b+k*a+F*g;for(k=r+2;k<r+e;++k)f[n++]=c[k]}c&&f.length!=n&&(f.length=n);this.b()}};
I.prototype.scale=function(a,b,c){var d=b;void 0===d&&(d=a);var e=c;e||(e=oa(this.l()));if(c=this.a){b=c.length;for(var f=this.c,g=c?c:[],h=e[0],e=e[1],n=0,r=0;r<b;r+=f){var k=c[r]-h,F=c[r+1]-e;g[n++]=h+a*k;g[n++]=e+d*F;for(k=r+2;k<r+f;++k)g[n++]=c[k]}c&&g.length!=n&&(g.length=n);this.b()}};I.prototype.translate=function(a,b){var c=this.a;if(c){var d=c.length,e=this.c,f=c?c:[],g=0,h,n;for(h=0;h<d;h+=e)for(f[g++]=c[h]+a,f[g++]=c[h+1]+b,n=h+2;n<h+e;++n)f[g++]=c[n];c&&f.length!=g&&(f.length=g);this.b()}};function Ga(a,b,c,d){var e,f;e=0;for(f=c.length;e<f;++e){var g=c[e],h;for(h=0;h<d;++h)a[b++]=g[h]}return b}function Ha(a,b,c,d,e){e=e?e:[];var f=0,g,h;g=0;for(h=c.length;g<h;++g)b=Ga(a,b,c[g],d),e[f++]=b;e.length=f;return e};function L(a,b){I.call(this);this.g(a,b)}m(L,I);L.prototype.clone=function(){var a=new L(null);J(a,this.layout,this.a.slice());a.b();return a};L.prototype.g=function(a,b){a?(K(this,b,a,1),this.a||(this.a=[]),this.a.length=Ga(this.a,0,a,this.c)):J(this,"XY",null);this.b()};navigator.userAgent.match("CriOS");try{new MouseEvent("click",{buttons:1})}catch(a){};function M(a,b){I.call(this);this.g(a,b)}m(M,I);M.prototype.clone=function(){var a=new M(null);J(a,this.layout,this.a.slice());a.b();return a};M.prototype.G=function(a){var b=this.a,c=b[0],b=b[1];return z(c,b,c,b,a)};M.prototype.g=function(a,b){if(a){K(this,b,a,0);this.a||(this.a=[]);var c=b=this.a,d=0,e,f;e=0;for(f=a.length;e<f;++e)c[d++]=a[e];b.length=d}else J(this,"XY",null);this.b()};function N(a,b){I.call(this);this.f=[];this.g(a,b)}m(N,I);N.prototype.clone=function(){var a=new N(null),b=this.f.slice();J(a,this.layout,this.a.slice());a.f=b;a.b();return a};N.prototype.g=function(a,b){a?(K(this,b,a,2),this.a||(this.a=[]),a=Ha(this.a,0,a,this.c,this.f),this.a.length=0===a.length?0:a[a.length-1]):(a=this.f,J(this,"XY",null),this.f=a);this.b()};function Ia(a){B.call(this,{code:a,units:"m",extent:Ja,global:!0,S:Ka})}m(Ia,B);Ia.prototype.A=function(a,b){return a/pa(b[1]/6378137)};var O=6378137*Math.PI,Ja=[-O,-O,O,O],Ka=[-180,-85,180,85],La="EPSG:3857 EPSG:102100 EPSG:102113 EPSG:900913 urn:ogc:def:crs:EPSG:6.18:3:3857 urn:ogc:def:crs:EPSG::3857 http://www.opengis.net/gml/srs/epsg.xml#3857".split(" ").map(function(a){return new Ia(a)});
function Ma(a,b,c){var d=a.length;c=1<c?c:2;void 0===b&&(2<c?b=a.slice():b=Array(d));for(var e=0;e<d;e+=c){b[e]=O*a[e]/180;var f=6378137*Math.log(Math.tan(Math.PI*(a[e+1]+90)/360));f>O?f=O:f<-O&&(f=-O);b[e+1]=f}return b}function Na(a,b,c){var d=a.length;c=1<c?c:2;void 0===b&&(2<c?b=a.slice():b=Array(d));for(var e=0;e<d;e+=c)b[e]=180*a[e]/O,b[e+1]=360*Math.atan(Math.exp(a[e+1]/6378137))/Math.PI-90;return b};var Oa=new qa(6378137);function P(a,b){B.call(this,{code:a,units:"degrees",extent:Pa,T:b,global:!0,L:Qa,S:Pa})}m(P,B);P.prototype.A=function(a){return a};var Pa=[-180,-90,180,90],Qa=Math.PI*Oa.radius/180,Ra=[new P("CRS:84"),new P("EPSG:4326","neu"),new P("urn:ogc:def:crs:EPSG::4326","neu"),new P("urn:ogc:def:crs:EPSG:6.6:4326","neu"),new P("urn:ogc:def:crs:OGC:1.3:CRS84"),new P("urn:ogc:def:crs:OGC:2:84"),new P("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new P("urn:x-ogc:def:crs:EPSG:4326","neu")];va(La);va(Ra);Ra.forEach(function(a){La.forEach(function(b){D(a,b,Ma);D(b,a,Na)})});function Q(){return{restrict:"A",link:function(a,b,c){var d=a.$eval(c.ngeoSearch),e=a.$eval(c.ngeoSearchDatasets).slice();e.unshift(d);b.typeahead.apply(b,e);c=a.$eval(c.ngeoSearchListeners);var f=Q.a(c);b.on("typeahead:open",function(){a.$apply(function(){f.open()})});b.on("typeahead:close",function(){a.$apply(function(){f.close()})});b.on("typeahead:cursorchange",function(b,c,d){a.$apply(function(){f.cursorchange(b,c,d)})});b.on("typeahead:select",function(b,c,d){a.$apply(function(){f.select(b,
c,d)})});b.on("typeahead:autocomplete",function(b,c,d){a.$apply(function(){f.autocomplete(b,c,d)})})}}}Q.a=function(a){var b;a?b={open:void 0!==a.open?a.open:p,close:void 0!==a.close?a.close:p,cursorchange:void 0!==a.cursorchange?a.cursorchange:p,select:void 0!==a.select?a.select:p,autocomplete:void 0!==a.autocomplete?a.autocomplete:p}:b={open:p,close:p,cursorchange:p,select:p,autocomplete:p};return b};Q.module=angular.module("ngeoSearchDirective",[]);Q.module.directive("ngeoSearch",Q);function Sa(){Ea.call(this)}m(Sa,Ea);function Ta(a){return"string"===typeof a?(a=JSON.parse(a))?a:null:null!==a?a:null};function R(a){G.call(this);this.a=a?a:null;Ua(this)}m(R,G);function Ua(a){var b,c;if(a.a)for(b=0,c=a.a.length;b<c;++b)t(a.a[b],"change",a.b,a)}R.prototype.clone=function(){var a=new R(null),b=this.a,c=[],d,e;d=0;for(e=b.length;d<e;++d)c.push(b[d].clone());if(a.a)for(b=0,d=a.a.length;b<d;++b)ia(a.a[b],"change",a.b,a);a.a=c;Ua(a);a.b();return a};
R.prototype.G=function(a){z(Infinity,Infinity,-Infinity,-Infinity,a);for(var b=this.a,c=0,d=b.length;c<d;++c){var e=a,f=b[c].l();f[0]<e[0]&&(e[0]=f[0]);f[2]>e[2]&&(e[2]=f[2]);f[1]<e[1]&&(e[1]=f[1]);f[3]>e[3]&&(e[3]=f[3])}return a};R.prototype.rotate=function(a,b){for(var c=this.a,d=0,e=c.length;d<e;++d)c[d].rotate(a,b);this.b()};R.prototype.scale=function(a,b,c){c||(c=oa(this.l()));for(var d=this.a,e=0,f=d.length;e<f;++e)d[e].scale(a,b,c);this.b()};
R.prototype.F=function(a){var b=this.a,c,d;c=0;for(d=b.length;c<d;++c)b[c].F(a);this.b()};R.prototype.translate=function(a,b){var c=this.a,d,e;d=0;for(e=c.length;d<e;++d)c[d].translate(a,b);this.b()};function S(a,b){I.call(this);this.f=[];this.g(a,b)}m(S,I);S.prototype.clone=function(){var a=new S(null),b=this.f.slice();J(a,this.layout,this.a.slice());a.f=b;a.b();return a};S.prototype.g=function(a,b){a?(K(this,b,a,2),this.a||(this.a=[]),a=Ha(this.a,0,a,this.c,this.f),this.a.length=0===a.length?0:a[a.length-1]):(a=this.f,J(this,"XY",null),this.f=a);this.b()};function T(a,b){I.call(this);this.g(a,b)}m(T,I);T.prototype.clone=function(){var a=new T(null);J(a,this.layout,this.a.slice());a.b();return a};T.prototype.g=function(a,b){a?(K(this,b,a,1),this.a||(this.a=[]),this.a.length=Ga(this.a,0,a,this.c)):J(this,"XY",null);this.b()};function U(a,b){I.call(this);this.f=[];this.g(a,b)}m(U,I);U.prototype.clone=function(){for(var a=new U(null),b=this.f.length,c=Array(b),d=0;d<b;++d)c[d]=this.f[d].slice();J(a,this.layout,this.a.slice());a.f=c;a.b();return a};
U.prototype.g=function(a,b){if(a){K(this,b,a,3);this.a||(this.a=[]);b=this.a;var c=this.c,d=this.f,e=0,d=d?d:[],f=0,g,h;g=0;for(h=a.length;g<h;++g)e=Ha(b,e,a[g],c,d[f]),d[f++]=e,e=e[e.length-1];d.length=f;0===d.length?this.a.length=0:(a=d[d.length-1],this.a.length=0===a.length?0:a[a.length-1])}else a=this.f,J(this,"XY",null),this.f=a;this.b()};function Va(a){a=a?a:{};Ea.call(this);this.s=C(a.s?a.s:"EPSG:4326");a.i&&(this.a=C(a.i));this.b=a.geometryName}m(Va,Sa);
function Wa(a,b){if(a){a=(0,Xa[a.type])(a);var c=b?C(b.i):null;b=b?C(b.o):null;var d;if(d=c&&b)c===b?d=!0:(d=c.b===b.b,d=c.a===b.a?d:xa(c,b)===za&&d),d=!d;d&&(a instanceof G?a=a.transform(b,c):(c=Ba(b,c),a=[a[0],a[1],a[0],a[3],a[2],a[1],a[2],a[3]],c(a,a,2),b=[a[0],a[2],a[4],a[6]],d=[a[1],a[3],a[5],a[7]],a=Math.min.apply(null,b),c=Math.min.apply(null,d),b=Math.max.apply(null,b),d=Math.max.apply(null,d),a=z(a,c,b,d,void 0)))}else a=null;return a}
var Xa={Point:function(a){return new M(a.coordinates)},LineString:function(a){return new L(a.coordinates)},Polygon:function(a){return new N(a.coordinates)},MultiPoint:function(a){return new T(a.coordinates)},MultiLineString:function(a){return new S(a.coordinates)},MultiPolygon:function(a){return new U(a.coordinates)},GeometryCollection:function(a,b){a=a.geometries.map(function(a){return Wa(a,b)});return new R(a)}};
function Ya(a,b,c){b="Feature"===b.type?b:{type:"Feature",geometry:b};c=Wa(b.geometry,c);var d=new H;a.b&&Da(d,a.b);d.set(d.a,c);void 0!==b.id&&d.b();b.properties&&ma(d,b.properties);return d};function V(a,b,c,d,e,f){var g=new Va;a={remote:{url:a,prepare:function(a,b){b.url=b.url.replace("%QUERY",a);return b},transform:function(a){void 0!==b&&(a={type:"FeatureCollection",features:a.features.filter(b)});var e=a,f={i:c,o:d};a=Ta(e);var k;if(f){if(f.o)k=f.o;else if(k=Ta(e).crs)if("name"==k.type)k=C(k.properties.name);else if("EPSG"==k.type)k=C("EPSG:"+k.properties.code);else throw new ca(36);else k=g.s;k={o:k,i:f.i}}f=q({o:g.s,i:g.a},k);if("FeatureCollection"===a.type){k=[];a=a.features;var F,
e=0;for(F=a.length;e<F;++e)k.push(Ya(g,a[e],f))}else k=[Ya(g,a,f)];return k}},datumTokenizer:p,queryTokenizer:Bloodhound.tokenizers.whitespace};e=q({},e||{});f=q({},f||{});e.remote&&(q(f,e.remote),delete e.remote);q(a,e);q(a.remote,f);return new Bloodhound(a)}V.module=angular.module("ngeoSearchCreategeojsonbloodhound",[]);V.module.value("ngeoSearchCreateGeoJSONBloodhound",V);var Za=angular.module("ngeoSearchModule",[Q.module.name,V.module.name]);var $a=angular.module("ngeo",[Za.name,"gettext","ui.date","floatThead"]);l("ngeo.FeatureProperties",{ANGLE:"a",COLOR:"c",IS_CIRCLE:"l",IS_RECTANGLE:"r",IS_TEXT:"t",NAME:"n",OPACITY:"o",AZIMUT:"z",SHOW_MEASURE:"m",SIZE:"s",STROKE:"k"});l("ngeo.GeometryType",{CIRCLE:"Circle",LINE_STRING:"LineString",MULTI_LINE_STRING:"MultiLineString",MULTI_POINT:"MultiPoint",MULTI_POLYGON:"MultiPolygon",POINT:"Point",POLYGON:"Polygon",RECTANGLE:"Rectangle",TEXT:"Text"});l("ngeo.MessageType",{ERROR:"error",INFORMATION:"information",SUCCESS:"success",WARNING:"warning"});function W(){}W.prototype.show=function(a){X(this,a).forEach(this.g,this)};W.prototype.show=W.prototype.show;W.prototype.error=function(a){this.show(X(this,a,"error"))};W.prototype.error=W.prototype.error;W.prototype.info=function(a){this.show(X(this,a,"information"))};W.prototype.info=W.prototype.info;W.prototype.success=function(a){this.show(X(this,a,"success"))};W.prototype.success=W.prototype.success;
W.prototype.warn=function(a){this.show(X(this,a,"warning"))};W.prototype.warn=W.prototype.warn;function X(a,b,c){var d=[],e=null;"string"===typeof b?d.push({msg:b,type:void 0!==c?c:"information"}):Array.isArray(b)?b.forEach(function(a){"string"===typeof b?e={msg:a,type:void 0!==c?c:"information"}:(e=a,void 0!==c&&(e.type=c));d.push(e)},a):(e=b,void 0!==c&&(e.type=c),void 0===e.type&&(e.type="information"),d.push(e));return d};function Y(a){this.b=a;a=angular.element('<div class="ngeo-notification"></div>');angular.element(document.body).append(a);this.c=a;this.a={}}m(Y,W);Y.$inject=["$timeout"];Y.prototype.notify=function(a){this.show(a)};Y.prototype.notify=Y.prototype.notify;Y.prototype.clear=function(){for(var a in this.a){var b=this.a[parseInt(a,10)],c=b.M,b=b.promise,d=c.v||(c.v=++ba);c.alert("close");this.b.cancel(b);delete this.a[d]}};Y.prototype.clear=Y.prototype.clear;
Y.prototype.g=function(a){var b=["alert","fade"];switch(a.type){case "error":b.push("alert-danger");break;case "information":b.push("alert-info");break;case "success":b.push("alert-success");break;case "warning":b.push("alert-warning")}var c=angular.element('<div class="'+b.join(" ")+'"></div>'),d;a.target?d=angular.element(a.target):d=this.c;d.append(c);c.html(a.msg).addClass("in");a=void 0!==a.delay?a.delay:7E3;var b={M:c},e=c.v||(c.v=++ba);b.promise=this.b(function(){c.alert("close");delete this.a[e]}.bind(this),
a);this.a[e]=b};$a.service("ngeoNotification",Y);var ab=angular.module("app",["ngeo"]);function Z(a){this.notification=a;this.a=1;$('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})}Z.$inject=["ngeoNotification"];Z.prototype.N=function(){this.notification.notify([{msg:["Error #",this.a++].join(""),type:"error"},{msg:["Warning #",this.a++].join(""),type:"warning"},{msg:["Information #",this.a++].join(""),type:"information"},{msg:["Success #",this.a++].join(""),type:"success"}])};Z.prototype.notifyMulti=Z.prototype.N;
Z.prototype.P=function(){this.notification.notify({msg:"Error in an other target",target:angular.element("#my-messages"),type:"error"})};Z.prototype.notifyTarget=Z.prototype.P;Z.prototype.O=function(){this.notification.notify({delay:1E3,msg:"Lasts one second",type:"success"})};Z.prototype.notifyQuick=Z.prototype.O;ab.controller("MainController",Z);(function(){function a(a){a.put("ngeo/attributes.html",'<fieldset ng-disabled=attrCtrl.disabled> <div class=form-group ng-repeat="attribute in ::attrCtrl.attributes"> <div ng-if="attribute.type !== \'geometry\'"> <label class=control-label>{{ ::attribute.name | translate }} <span class=text-muted>{{::attribute.required ? "*" : ""}}</span></label> <div ng-switch=attribute.type> <select name={{::attribute.name}} ng-required=attribute.required ng-switch-when=select ng-model=attrCtrl.properties[attribute.name] ng-change=attrCtrl.handleInputChange(attribute.name); class=form-control type=text> <option ng-repeat="attribute in ::attribute.choices" value="{{ ::attribute }}"> {{ ::attribute }} </option> </select> <input name={{::attribute.name}} ng-required=attribute.required ng-switch-when=date ui-date=attrCtrl.dateOptions ng-model=attrCtrl.properties[attribute.name] ng-change=attrCtrl.handleInputChange(attribute.name); class=form-control type=text> <input name={{::attribute.name}} ng-required=attribute.required ng-switch-when=datetime ui-date=attrCtrl.dateOptions ng-model=attrCtrl.properties[attribute.name] ng-change=attrCtrl.handleInputChange(attribute.name); class=form-control type=text> <input name={{::attribute.name}} ng-required=attribute.required ng-switch-default ng-model=attrCtrl.properties[attribute.name] ng-change=attrCtrl.handleInputChange(attribute.name); class=form-control type=text> <div ng-show="form.$submitted || form[attribute.name].$touched"> <p class=text-danger ng-show=form[attribute.name].$error.required> {{\'This field is required\' | translate}} </p> </div> </div> </div> </div> </fieldset> ');
a.put("ngeo/popup.html",'<h4 class="popover-title ngeo-popup-title"> <span ng-bind-html=title></span> <button type=button class=close ng-click="open = false"> &times;</button> </h4> <div class=popover-content ng-bind-html=content></div> ');a.put("ngeo/grid.html",'<div class=ngeo-grid-table-container> <table float-thead=ctrl.floatTheadConfig ng-model=ctrl.configuration.data class="table table-bordered table-striped table-hover"> <thead class=table-header> <tr> <th ng-repeat="columnDefs in ctrl.configuration.columnDefs" ng-click=ctrl.sort(columnDefs.name)>{{columnDefs.name | translate}} <i ng-show="ctrl.sortedBy !== columnDefs.name" class="fa fa-fw"></i> <i ng-show="ctrl.sortedBy === columnDefs.name && ctrl.sortAscending === true" class="fa fa-caret-up"></i> <i ng-show="ctrl.sortedBy === columnDefs.name && ctrl.sortAscending === false" class="fa fa-caret-down"></i> </th> </tr> </thead> <tbody> <tr ng-repeat="attributes in ctrl.configuration.data" ng-class="[\'row-\' + ctrl.configuration.getRowUid(attributes), ctrl.configuration.isRowSelected(attributes) ? \'ngeo-grid-active\': \'\']" ng-click="ctrl.clickRow(attributes, $event)" ng-mousedown=ctrl.preventTextSelection($event)> <td ng-repeat="columnDefs in ctrl.configuration.columnDefs" ng-bind-html="attributes[columnDefs.name] | ngeoTrustHtml"></td> </tr> </tbody> </table> </div> ');
a.put("ngeo/scaleselector.html",'<div class="btn-group btn-block" ng-class="::{\'dropup\': scaleselectorCtrl.options.dropup}"> <button type=button class="btn btn-default dropdown-toggle" data-toggle=dropdown aria-expanded=false> <span ng-bind-html=scaleselectorCtrl.currentScale|ngeoScalify></span>&nbsp;<i class=caret></i> </button> <ul class="dropdown-menu btn-block" role=menu> <li ng-repeat="zoomLevel in ::scaleselectorCtrl.zoomLevels"> <a href ng-click=scaleselectorCtrl.changeZoom(zoomLevel) ng-bind-html=::scaleselectorCtrl.getScale(zoomLevel)|ngeoScalify> </a> </li> </ul> </div> ');
a.put("ngeo/datepicker.html","<div class=ngeo-datepicker> <form name=dateForm class=ngeo-datepicker-form novalidate> <div ng-if=\"::datepickerCtrl.time.widget === 'datepicker'\"> <div class=ngeo-datepicker-start-date> <span ng-if=\"::datepickerCtrl.time.mode === 'range'\" translate>From:</span> <span ng-if=\"::datepickerCtrl.time.mode !== 'range'\" translate>Date:</span> <input name=sdate ui-date=datepickerCtrl.sdateOptions ng-model=datepickerCtrl.sdate required> </div> <div class=ngeo-datepicker-end-date ng-if=\"::datepickerCtrl.time.mode === 'range'\"> <span translate>To:</span> <input name=edate ui-date=datepickerCtrl.edateOptions ng-model=datepickerCtrl.edate required> </div> </div> </form> </div> ");
a.put("ngeo/layertree.html",'<span ng-if=::!layertreeCtrl.isRoot>{{::layertreeCtrl.node.name}}</span> <input type=checkbox ng-if="::layertreeCtrl.node && !layertreeCtrl.node.children" ng-model=layertreeCtrl.getSetActive ng-model-options="{getterSetter: true}"> <ul ng-if=::layertreeCtrl.node.children> <li ng-repeat="node in ::layertreeCtrl.node.children" ngeo-layertree=::node ngeo-layertree-notroot ngeo-layertree-map=layertreeCtrl.map ngeo-layertree-nodelayerexpr=layertreeCtrl.nodelayerExpr ngeo-layertree-listenersexpr=layertreeCtrl.listenersExpr> </li> </ul> ');
a.put("ngeo/colorpicker.html",'<table class=ngeo-colorpicker-palette> <tr ng-repeat="colors in ::ctrl.colors"> <td ng-repeat="color in ::colors" ng-click=ctrl.setColor(color) ng-class="{\'ngeo-colorpicker-selected\': color == ctrl.color}"> <div ng-style="::{\'background-color\': color}"></div> </td> </tr> </table> ')}a.$inject=["$templateCache"];$a.run(a)})();}).call(window);
//# sourceMappingURL=notification.js.map