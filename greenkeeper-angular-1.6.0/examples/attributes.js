(function(){'use strict';var aa=this;function ba(a,b){a=a.split(".");var c=aa;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]?c=c[d]:c=c[d]={}:c[d]=b};var ca=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function da(a,b){return a<b?-1:a>b?1:0};function l(a,b){a.prototype=Object.create(b.prototype);a.prototype.constructor=a}function n(){}var ea=0;function fa(a){this.message="Assertion failed. See /doc/errors/#"+a+" for details.";this.code=a;this.name="AssertionError"}l(fa,Error);var q="function"===typeof Object.assign?Object.assign:function(a,b){if(!a||!a)throw new TypeError("Cannot convert undefined or null to object");for(var c=Object(a),d=1,e=arguments.length;d<e;++d){var f=arguments[d];if(void 0!==f&&null!==f)for(var g in f)f.hasOwnProperty(g)&&(c[g]=f[g])}return c};function ga(a){for(var b in a)delete a[b]};function ha(a){function b(b){var d=a.listener,e=a.L||a.target;a.N&&ia(a);return d.call(e,b)}return a.M=b}function ja(a,b,c,d){for(var e,f=0,g=a.length;f<g;++f)if(e=a[f],e.listener===b&&e.L===c)return d&&(e.deleteIndex=f),e}function ka(a,b){return(a=a.D)?a[b]:void 0}function r(a,b,c,d){var e,f=a.D;f||(f=a.D={});e=f;(f=e[b])||(f=e[b]=[]);(e=ja(f,c,d,!1))?e.N=!1:(e={L:d,N:!1,listener:c,target:a,type:b},a.addEventListener(b,ha(e)),f.push(e));return e}
function la(a,b,c,d){(a=ka(a,b))&&(c=ja(a,c,d,!0))&&ia(c)}function ia(a){if(a&&a.target){a.target.removeEventListener(a.type,a.M);var b=ka(a.target,a.type);if(b){var c="deleteIndex"in a?a.deleteIndex:b.indexOf(a);-1!==c&&b.splice(c,1);if(0===b.length){var b=a.target,c=a.type,d=ka(b,c);if(d){for(var e=0,f=d.length;e<f;++e)b.removeEventListener(c,d[e].M),ga(d[e]);d.length=0;if(d=b.D)delete d[c],0===Object.keys(d).length&&delete b.D}}}ga(a)}};function ma(){};function u(a){this.type=a;this.target=null}u.prototype.preventDefault=u.prototype.stopPropagation=function(){this.S=!0};function v(){this.w={};this.l={};this.h={}}l(v,ma);v.prototype.addEventListener=function(a,b){var c=this.h[a];c||(c=this.h[a]=[]);-1===c.indexOf(b)&&c.push(b)};
v.prototype.dispatchEvent=function(a){var b="string"===typeof a?new u(a):a;a=b.type;b.target=this;var c=this.h[a],d;if(c){a in this.l||(this.l[a]=0,this.w[a]=0);++this.l[a];for(var e=0,f=c.length;e<f;++e)if(!1===c[e].call(this,b)||b.S){d=!1;break}--this.l[a];if(0===this.l[a]){b=this.w[a];for(delete this.w[a];b--;)this.removeEventListener(a,n);delete this.l[a]}return d}};v.prototype.hasListener=function(a){return a?a in this.h:0<Object.keys(this.h).length};
v.prototype.removeEventListener=function(a,b){var c=this.h[a];c&&(b=c.indexOf(b),a in this.w?(c[b]=n,++this.w[a]):(c.splice(b,1),0===c.length&&delete this.h[a]))};function w(){v.call(this);this.G=0}l(w,v);w.prototype.b=function(){++this.G;this.dispatchEvent("change")};w.prototype.on=function(a,b,c){if(Array.isArray(a)){for(var d=a.length,e=Array(d),f=0;f<d;++f)e[f]=r(this,a[f],b,c);return e}return r(this,a,b,c)};function na(a,b,c){u.call(this,a);this.key=b;this.oldValue=c}l(na,u);function x(a){w.call(this);this.v||(this.v=++ea);this.i={};void 0!==a&&oa(this,a)}l(x,w);var pa={};function qa(a){return pa.hasOwnProperty(a)?pa[a]:pa[a]="change:"+a}x.prototype.get=function(a){var b;this.i.hasOwnProperty(a)&&(b=this.i[a]);return b};x.prototype.set=function(a,b,c){c?this.i[a]=b:(c=this.i[a],this.i[a]=b,c!==b&&(b=qa(a),this.dispatchEvent(new na(b,a,c)),this.dispatchEvent(new na("propertychange",a,c))))};
function oa(a,b){for(var c in b)a.set(c,b[c],void 0)};function ra(a,b,c,d,e){return e?(e[0]=a,e[1]=b,e[2]=c,e[3]=d,e):[a,b,c,d]}function sa(a){return[(a[0]+a[2])/2,(a[1]+a[3])/2]};var ta=function(){var a;"cosh"in Math?a=Math.cosh:a=function(a){a=Math.exp(a);return(a+1/a)/2};return a}();/*

 Latitude/longitude spherical geodesy formulae taken from
 http://www.movable-type.co.uk/scripts/latlong.html
 Licensed under CC-BY-3.0.
*/
function ua(a){this.radius=a}function va(a,b){var c=a[1]*Math.PI/180,d=b[1]*Math.PI/180,e=(d-c)/2;a=(b[0]-a[0])*Math.PI/180/2;c=Math.sin(e)*Math.sin(e)+Math.sin(a)*Math.sin(a)*Math.cos(c)*Math.cos(d);return 2*wa.radius*Math.atan2(Math.sqrt(c),Math.sqrt(1-c))}
ua.prototype.offset=function(a,b,c){var d=a[1]*Math.PI/180;b/=this.radius;var e=Math.asin(Math.sin(d)*Math.cos(b)+Math.cos(d)*Math.sin(b)*Math.cos(c));return[180*(a[0]*Math.PI/180+Math.atan2(Math.sin(c)*Math.sin(b)*Math.cos(d),Math.cos(b)-Math.sin(d)*Math.sin(e)))/Math.PI,180*e/Math.PI]};var wa=new ua(6370997);var y={};y.degrees=2*Math.PI*wa.radius/360;y.ft=.3048;y.m=1;y["us-ft"]=1200/3937;
function z(a){this.a=a.code;this.b=a.units;this.i=void 0!==a.extent?a.extent:null;this.g=void 0!==a.A?a.A:this.h;this.c=a.P;var b=xa,c=a.code,d=ya||window.proj4;if("function"==typeof d&&void 0===b[c]){var e=d.defs(c);if(void 0!==e){void 0===a.P&&(this.c=e.to_meter);void 0===a.units&&(this.b=e.units);var f,g;for(f in b)if(a=d.defs(f),void 0!==a)if(b=A(f),a===e)za([b,this]);else{g=d(f,c);a=g.forward;g=g.inverse;var b=A(b),h=A(this);B(b,h,Aa(a));B(h,b,Aa(g))}}}}z.prototype.o=function(){return this.i};
z.prototype.h=function(a,b){if("degrees"==this.b)return a;var c=Ba(this,A("EPSG:4326"));a=[b[0]-a/2,b[1],b[0]+a/2,b[1],b[0],b[1]-a/2,b[0],b[1]+a/2];a=c(a,a,2);c=(va(a.slice(0,2),a.slice(2,4))+va(a.slice(4,6),a.slice(6,8)))/2;a=this.c||y[this.b];void 0!==a&&(c/=a);return c};z.prototype.A=function(a,b){return this.g(a,b)};var xa={},C={},ya=null;function za(a){Ca(a);a.forEach(function(b){a.forEach(function(a){b!==a&&B(b,a,Da)})})}function Ea(a){xa[a.a]=a;B(a,a,Da)}
function Ca(a){var b=[];a.forEach(function(a){b.push(Ea(a))})}function B(a,b,c){a=a.a;b=b.a;a in C||(C[a]={});C[a][b]=c}function Aa(a){return function(b,c,d){var e=b.length;d=void 0!==d?d:2;c=void 0!==c?c:Array(e);var f,g;for(g=0;g<e;g+=d)for(f=a([b[g],b[g+1]]),c[g]=f[0],c[g+1]=f[1],f=d-1;2<=f;--f)c[g+f]=b[g+f];return c}}
function A(a){var b;if(a instanceof z)b=a;else if("string"===typeof a){b=xa[a];var c=ya||window.proj4;void 0===b&&"function"==typeof c&&void 0!==c.defs(a)&&(b=new z({code:a}),Ea(b))}return b||null}function Fa(a,b){a=A(a);b=A(b);return Ba(a,b)}function Ba(a,b){a=a.a;b=b.a;var c;a in C&&b in C[a]&&(c=C[a][b]);void 0===c&&(c=Ga);return c}function Ga(a,b){if(void 0!==b&&a!==b){for(var c=0,d=a.length;c<d;++c)b[c]=a[c];a=b}return a}
function Da(a,b){if(void 0!==b){for(var c=0,d=a.length;c<d;++c)b[c]=a[c];a=b}else a=a.slice();return a};function D(){x.call(this);this.F=[Infinity,Infinity,-Infinity,-Infinity];this.J=-1}l(D,x);D.prototype.o=function(a){this.J!=this.G&&(this.F=this.I(this.F),this.J=this.G);var b=this.F;a?(a[0]=b[0],a[1]=b[1],a[2]=b[2],a[3]=b[3]):a=b;return a};D.prototype.transform=function(a,b){this.H(Fa(a,b));return this};(function(){if(!("HTMLCanvasElement"in window))return!1;try{return document.createElement("CANVAS").getContext("2d")?!0:!1}catch(a){return!1}})();function E(a){x.call(this);this.a="geometry";this.c=this.f=null;r(this,qa(this.a),this.g,this);void 0!==a&&(a instanceof D||!a?this.set(this.a,a):oa(this,a))}l(E,x);E.prototype.clone=function(){var a=new E(q({},this.i));Ha(a,this.a);var b=this.get(this.a);b&&(b=b.clone(),a.set(a.a,b));(b=this.f)&&a.setStyle(b);return a};E.prototype.o=function(){this.b()};E.prototype.g=function(){this.c&&(ia(this.c),this.c=null);var a=this.get(this.a);a&&(this.c=r(a,"change",this.o,this));this.b()};
E.prototype.setStyle=function(a){if((this.f=a)&&"function"!==typeof a&&!Array.isArray(a))throw new fa(41);this.b()};function Ha(a,b){la(a,qa(a.a),a.g,a);a.a=b;r(a,qa(a.a),a.g,a);a.g()};function Ia(){this.a=this.u=null};function F(){D.call(this);this.layout="XY";this.c=2;this.a=null}l(F,D);function Ja(a){var b;"XY"==a?b=2:"XYZ"==a||"XYM"==a?b=3:"XYZM"==a&&(b=4);return b}F.prototype.I=function(a){var b=this.a,c=this.a.length,d=this.c;a=ra(Infinity,Infinity,-Infinity,-Infinity,a);for(var e=0;e<c;e+=d){var f=a,g=b[e],h=b[e+1];f[0]=Math.min(f[0],g);f[1]=Math.min(f[1],h);f[2]=Math.max(f[2],g);f[3]=Math.max(f[3],h)}return a};function G(a,b,c){a.c=Ja(b);a.layout=b;a.a=c}
function H(a,b,c,d){if(b)c=Ja(b);else{for(b=0;b<d;++b){if(0===c.length){a.layout="XY";a.c=2;return}c=c[0]}c=c.length;var e;2==c?e="XY":3==c?e="XYZ":4==c&&(e="XYZM");b=e}a.layout=b;a.c=c}F.prototype.H=function(a){this.a&&(a(this.a,this.a,this.c),this.b())};
F.prototype.rotate=function(a,b){var c=this.a;if(c){var d=c.length,e=this.c,f=c?c:[],g=Math.cos(a);a=Math.sin(a);var h=b[0];b=b[1];for(var m=0,p=0;p<d;p+=e){var k=c[p]-h,t=c[p+1]-b;f[m++]=h+k*g-t*a;f[m++]=b+k*a+t*g;for(k=p+2;k<p+e;++k)f[m++]=c[k]}c&&f.length!=m&&(f.length=m);this.b()}};
F.prototype.scale=function(a,b,c){var d=b;void 0===d&&(d=a);var e=c;e||(e=sa(this.o()));if(c=this.a){b=c.length;for(var f=this.c,g=c?c:[],h=e[0],e=e[1],m=0,p=0;p<b;p+=f){var k=c[p]-h,t=c[p+1]-e;g[m++]=h+a*k;g[m++]=e+d*t;for(k=p+2;k<p+f;++k)g[m++]=c[k]}c&&g.length!=m&&(g.length=m);this.b()}};F.prototype.translate=function(a,b){var c=this.a;if(c){var d=c.length,e=this.c,f=c?c:[],g=0,h,m;for(h=0;h<d;h+=e)for(f[g++]=c[h]+a,f[g++]=c[h+1]+b,m=h+2;m<h+e;++m)f[g++]=c[m];c&&f.length!=g&&(f.length=g);this.b()}};function Ka(a,b,c,d){var e,f;e=0;for(f=c.length;e<f;++e){var g=c[e],h;for(h=0;h<d;++h)a[b++]=g[h]}return b}function La(a,b,c,d,e){e=e?e:[];var f=0,g,h;g=0;for(h=c.length;g<h;++g)b=Ka(a,b,c[g],d),e[f++]=b;e.length=f;return e};function I(a,b){F.call(this);this.g(a,b)}l(I,F);I.prototype.clone=function(){var a=new I(null);G(a,this.layout,this.a.slice());a.b();return a};I.prototype.g=function(a,b){a?(H(this,b,a,1),this.a||(this.a=[]),this.a.length=Ka(this.a,0,a,this.c)):G(this,"XY",null);this.b()};navigator.userAgent.match("CriOS");try{new MouseEvent("click",{buttons:1})}catch(a){};function J(a,b){F.call(this);this.g(a,b)}l(J,F);J.prototype.clone=function(){var a=new J(null);G(a,this.layout,this.a.slice());a.b();return a};J.prototype.I=function(a){var b=this.a,c=b[0],b=b[1];return ra(c,b,c,b,a)};J.prototype.g=function(a,b){if(a){H(this,b,a,0);this.a||(this.a=[]);var c=b=this.a,d=0,e,f;e=0;for(f=a.length;e<f;++e)c[d++]=a[e];b.length=d}else G(this,"XY",null);this.b()};function K(a,b){F.call(this);this.f=[];this.g(a,b)}l(K,F);K.prototype.clone=function(){var a=new K(null),b=this.f.slice();G(a,this.layout,this.a.slice());a.f=b;a.b();return a};K.prototype.g=function(a,b){a?(H(this,b,a,2),this.a||(this.a=[]),a=La(this.a,0,a,this.c,this.f),this.a.length=0===a.length?0:a[a.length-1]):(a=this.f,G(this,"XY",null),this.f=a);this.b()};function Ma(a){z.call(this,{code:a,units:"m",extent:Na,global:!0,U:Oa})}l(Ma,z);Ma.prototype.A=function(a,b){return a/ta(b[1]/6378137)};var L=6378137*Math.PI,Na=[-L,-L,L,L],Oa=[-180,-85,180,85],Pa="EPSG:3857 EPSG:102100 EPSG:102113 EPSG:900913 urn:ogc:def:crs:EPSG:6.18:3:3857 urn:ogc:def:crs:EPSG::3857 http://www.opengis.net/gml/srs/epsg.xml#3857".split(" ").map(function(a){return new Ma(a)});
function Qa(a,b,c){var d=a.length;c=1<c?c:2;void 0===b&&(2<c?b=a.slice():b=Array(d));for(var e=0;e<d;e+=c){b[e]=L*a[e]/180;var f=6378137*Math.log(Math.tan(Math.PI*(a[e+1]+90)/360));f>L?f=L:f<-L&&(f=-L);b[e+1]=f}return b}function Ra(a,b,c){var d=a.length;c=1<c?c:2;void 0===b&&(2<c?b=a.slice():b=Array(d));for(var e=0;e<d;e+=c)b[e]=180*a[e]/L,b[e+1]=360*Math.atan(Math.exp(a[e+1]/6378137))/Math.PI-90;return b};var Sa=new ua(6378137);function M(a,b){z.call(this,{code:a,units:"degrees",extent:Ta,V:b,global:!0,P:Ua,U:Ta})}l(M,z);M.prototype.A=function(a){return a};var Ta=[-180,-90,180,90],Ua=Math.PI*Sa.radius/180,Va=[new M("CRS:84"),new M("EPSG:4326","neu"),new M("urn:ogc:def:crs:EPSG::4326","neu"),new M("urn:ogc:def:crs:EPSG:6.6:4326","neu"),new M("urn:ogc:def:crs:OGC:1.3:CRS84"),new M("urn:ogc:def:crs:OGC:2:84"),new M("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new M("urn:x-ogc:def:crs:EPSG:4326","neu")];za(Pa);za(Va);Va.forEach(function(a){Pa.forEach(function(b){B(a,b,Qa);B(b,a,Ra)})});function N(){return{restrict:"A",link:function(a,b,c){var d=a.$eval(c.ngeoSearch),e=a.$eval(c.ngeoSearchDatasets).slice();e.unshift(d);b.typeahead.apply(b,e);c=a.$eval(c.ngeoSearchListeners);var f=N.a(c);b.on("typeahead:open",function(){a.$apply(function(){f.open()})});b.on("typeahead:close",function(){a.$apply(function(){f.close()})});b.on("typeahead:cursorchange",function(b,c,d){a.$apply(function(){f.cursorchange(b,c,d)})});b.on("typeahead:select",function(b,c,d){a.$apply(function(){f.select(b,
c,d)})});b.on("typeahead:autocomplete",function(b,c,d){a.$apply(function(){f.autocomplete(b,c,d)})})}}}N.a=function(a){var b;a?b={open:void 0!==a.open?a.open:n,close:void 0!==a.close?a.close:n,cursorchange:void 0!==a.cursorchange?a.cursorchange:n,select:void 0!==a.select?a.select:n,autocomplete:void 0!==a.autocomplete?a.autocomplete:n}:b={open:n,close:n,cursorchange:n,select:n,autocomplete:n};return b};N.module=angular.module("ngeoSearchDirective",[]);N.module.directive("ngeoSearch",N);function Wa(){Ia.call(this)}l(Wa,Ia);function Xa(a){return"string"===typeof a?(a=JSON.parse(a))?a:null:null!==a?a:null};function O(a){D.call(this);this.a=a?a:null;Ya(this)}l(O,D);function Ya(a){var b,c;if(a.a)for(b=0,c=a.a.length;b<c;++b)r(a.a[b],"change",a.b,a)}O.prototype.clone=function(){var a=new O(null),b=this.a,c=[],d,e;d=0;for(e=b.length;d<e;++d)c.push(b[d].clone());if(a.a)for(b=0,d=a.a.length;b<d;++b)la(a.a[b],"change",a.b,a);a.a=c;Ya(a);a.b();return a};
O.prototype.I=function(a){ra(Infinity,Infinity,-Infinity,-Infinity,a);for(var b=this.a,c=0,d=b.length;c<d;++c){var e=a,f=b[c].o();f[0]<e[0]&&(e[0]=f[0]);f[2]>e[2]&&(e[2]=f[2]);f[1]<e[1]&&(e[1]=f[1]);f[3]>e[3]&&(e[3]=f[3])}return a};O.prototype.rotate=function(a,b){for(var c=this.a,d=0,e=c.length;d<e;++d)c[d].rotate(a,b);this.b()};O.prototype.scale=function(a,b,c){c||(c=sa(this.o()));for(var d=this.a,e=0,f=d.length;e<f;++e)d[e].scale(a,b,c);this.b()};
O.prototype.H=function(a){var b=this.a,c,d;c=0;for(d=b.length;c<d;++c)b[c].H(a);this.b()};O.prototype.translate=function(a,b){var c=this.a,d,e;d=0;for(e=c.length;d<e;++d)c[d].translate(a,b);this.b()};function P(a,b){F.call(this);this.f=[];this.g(a,b)}l(P,F);P.prototype.clone=function(){var a=new P(null),b=this.f.slice();G(a,this.layout,this.a.slice());a.f=b;a.b();return a};P.prototype.g=function(a,b){a?(H(this,b,a,2),this.a||(this.a=[]),a=La(this.a,0,a,this.c,this.f),this.a.length=0===a.length?0:a[a.length-1]):(a=this.f,G(this,"XY",null),this.f=a);this.b()};function Q(a,b){F.call(this);this.g(a,b)}l(Q,F);Q.prototype.clone=function(){var a=new Q(null);G(a,this.layout,this.a.slice());a.b();return a};Q.prototype.g=function(a,b){a?(H(this,b,a,1),this.a||(this.a=[]),this.a.length=Ka(this.a,0,a,this.c)):G(this,"XY",null);this.b()};function R(a,b){F.call(this);this.f=[];this.g(a,b)}l(R,F);R.prototype.clone=function(){for(var a=new R(null),b=this.f.length,c=Array(b),d=0;d<b;++d)c[d]=this.f[d].slice();G(a,this.layout,this.a.slice());a.f=c;a.b();return a};
R.prototype.g=function(a,b){if(a){H(this,b,a,3);this.a||(this.a=[]);b=this.a;var c=this.c,d=this.f,e=0,d=d?d:[],f=0,g,h;g=0;for(h=a.length;g<h;++g)e=La(b,e,a[g],c,d[f]),d[f++]=e,e=e[e.length-1];d.length=f;0===d.length?this.a.length=0:(a=d[d.length-1],this.a.length=0===a.length?0:a[a.length-1])}else a=this.f,G(this,"XY",null),this.f=a;this.b()};function Za(a){a=a?a:{};Ia.call(this);this.u=A(a.u?a.u:"EPSG:4326");a.j&&(this.a=A(a.j));this.b=a.geometryName}l(Za,Wa);
function $a(a,b){if(a){a=(0,ab[a.type])(a);var c=b?A(b.j):null;b=b?A(b.s):null;var d;if(d=c&&b)c===b?d=!0:(d=c.b===b.b,d=c.a===b.a?d:Ba(c,b)===Da&&d),d=!d;d&&(a instanceof D?a=a.transform(b,c):(c=Fa(b,c),a=[a[0],a[1],a[0],a[3],a[2],a[1],a[2],a[3]],c(a,a,2),b=[a[0],a[2],a[4],a[6]],d=[a[1],a[3],a[5],a[7]],a=Math.min.apply(null,b),c=Math.min.apply(null,d),b=Math.max.apply(null,b),d=Math.max.apply(null,d),a=ra(a,c,b,d,void 0)))}else a=null;return a}
var ab={Point:function(a){return new J(a.coordinates)},LineString:function(a){return new I(a.coordinates)},Polygon:function(a){return new K(a.coordinates)},MultiPoint:function(a){return new Q(a.coordinates)},MultiLineString:function(a){return new P(a.coordinates)},MultiPolygon:function(a){return new R(a.coordinates)},GeometryCollection:function(a,b){a=a.geometries.map(function(a){return $a(a,b)});return new O(a)}};
function bb(a,b,c){b="Feature"===b.type?b:{type:"Feature",geometry:b};c=$a(b.geometry,c);var d=new E;a.b&&Ha(d,a.b);d.set(d.a,c);void 0!==b.id&&d.b();b.properties&&oa(d,b.properties);return d};function cb(a,b,c,d,e,f){var g=new Za;a={remote:{url:a,prepare:function(a,b){b.url=b.url.replace("%QUERY",a);return b},transform:function(a){void 0!==b&&(a={type:"FeatureCollection",features:a.features.filter(b)});var e=a,f={j:c,s:d};a=Xa(e);var k;if(f){if(f.s)k=f.s;else if(k=Xa(e).crs)if("name"==k.type)k=A(k.properties.name);else if("EPSG"==k.type)k=A("EPSG:"+k.properties.code);else throw new fa(36);else k=g.u;k={s:k,j:f.j}}f=q({s:g.u,j:g.a},k);if("FeatureCollection"===a.type){k=[];a=a.features;
var t,e=0;for(t=a.length;e<t;++e)k.push(bb(g,a[e],f))}else k=[bb(g,a,f)];return k}},datumTokenizer:n,queryTokenizer:Bloodhound.tokenizers.whitespace};e=q({},e||{});f=q({},f||{});e.remote&&(q(f,e.remote),delete e.remote);q(a,e);q(a.remote,f);return new Bloodhound(a)}cb.module=angular.module("ngeoSearchCreategeojsonbloodhound",[]);cb.module.value("ngeoSearchCreateGeoJSONBloodhound",cb);var db=angular.module("ngeoSearchModule",[N.module.name,cb.module.name]);var S=angular.module("ngeo",[db.name,"gettext","ui.date","floatThead"]);S.config(["$compileProvider",function(a){a.preAssignBindingsEnabled(!0)}]);ba("ngeo.FeatureProperties",{ANGLE:"a",COLOR:"c",IS_CIRCLE:"l",IS_RECTANGLE:"r",IS_TEXT:"t",NAME:"n",OPACITY:"o",AZIMUT:"z",SHOW_MEASURE:"m",SIZE:"s",STROKE:"k"});
ba("ngeo.GeometryType",{CIRCLE:"Circle",LINE_STRING:"LineString",MULTI_LINE_STRING:"MultiLineString",MULTI_POINT:"MultiPoint",MULTI_POLYGON:"MultiPolygon",POINT:"Point",POLYGON:"Polygon",RECTANGLE:"Rectangle",TEXT:"Text"});S.directive("ngeoMap",function(){return{restrict:"A",link:function(a,b,c){a.$eval(c.ngeoMap).a(b[0])}}});function eb(){}eb.prototype.a=function(a){return a instanceof Document?fb(a):a instanceof Node?gb(a):"string"===typeof a?(a=(new DOMParser).parseFromString(a,"application/xml"),fb(a)):null};function T(){}l(T,eb);ba("ngeo.format.XSDAttribute",T);T.prototype.a=function(a){return eb.prototype.a.call(this,a)};function fb(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType==Node.ELEMENT_NODE)return gb(a);return null}
function gb(a){var b=a.getElementsByTagName("element");b.length||(b=a.getElementsByTagName("xsd:element"));a=[];for(var c,d=0,e=b.length;d<e;d++){a:{var f=b[d];c=f.getAttribute("name");var g=f.getAttribute("nillable");c={name:c,required:!(!0===g||"true"===g)};if(g=f.getAttribute("type"))if(/gml:((Multi)?(Point|Line|Polygon|Curve|Surface|Geometry)).*/.exec(g))c.type=hb,/^gml:Point/.exec(g)?c.geomType="Point":/^gml:LineString/.exec(g)?c.geomType="LineString":/^gml:Polygon/.exec(g)?c.geomType="Polygon":
/^gml:MultiPoint/.exec(g)?c.geomType="MultiPoint":/^gml:MultiLineString/.exec(g)?c.geomType="MultiLineString":/^gml:MultiPolygon/.exec(g)&&(c.geomType="MultiPolygon");else if("xsd:string"===g)c.type=ib;else if("xsd:date"===g)c.type=jb;else if("xsd:dateTime"===g)c.type=kb;else{c=null;break a}else if(g=f.getElementsByTagName("enumeration"),g.length||(g=f.getElementsByTagName("xsd:enumeration")),g.length){c.type=lb;for(var f=[],h=0,m=g.length;h<m;h++)f.push(g[h].getAttribute("value"));c.choices=f}else{c=
null;break a}}c&&a.push(c)}return a}T.getGeometryAttribute=function(a){for(var b=null,c=0,d=a.length;c<d;c++)if(a[c].type===hb){b=a[c];break}return b};var jb="date",kb="datetime",hb="geometry",lb="select",ib="text";var U;a:{var mb=aa.navigator;if(mb){var nb=mb.userAgent;if(nb){U=nb;break a}}U=""};var ob=-1!=U.indexOf("Opera"),V=-1!=U.indexOf("Trident")||-1!=U.indexOf("MSIE"),pb=-1!=U.indexOf("Edge"),qb=-1!=U.indexOf("Gecko")&&!(-1!=U.toLowerCase().indexOf("webkit")&&-1==U.indexOf("Edge"))&&!(-1!=U.indexOf("Trident")||-1!=U.indexOf("MSIE"))&&-1==U.indexOf("Edge"),rb=-1!=U.toLowerCase().indexOf("webkit")&&-1==U.indexOf("Edge"),sb;
a:{var tb="",ub=function(){var a=U;if(qb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(pb)return/Edge\/([\d\.]+)/.exec(a);if(V)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(rb)return/WebKit\/(\S+)/.exec(a);if(ob)return/(?:Version)[ \/]?(\S+)/.exec(a)}();ub&&(tb=ub?ub[1]:"");if(V){var vb,wb=aa.document;vb=wb?wb.documentMode:void 0;if(null!=vb&&vb>parseFloat(tb)){sb=String(vb);break a}}sb=tb}var xb={};
function W(a){var b;if(!(b=xb[a])){b=0;for(var c=ca(String(sb)).split("."),d=ca(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",m=/(\d*)(\D*)/g,p=/(\d*)(\D*)/g;do{var k=m.exec(g)||["","",""],t=p.exec(h)||["","",""];if(0==k[0].length&&0==t[0].length)break;b=da(0==k[1].length?0:parseInt(k[1],10),0==t[1].length?0:parseInt(t[1],10))||da(0==k[2].length,0==t[2].length)||da(k[2],t[2])}while(0==b)}b=xb[a]=0<=b}return b};V&&W("9");!rb||W("528");qb&&W("1.9b")||V&&W("8")||ob&&W("9.5")||rb&&W("528");qb&&!W("8")||V&&W("9");var yb="closure_listenable_"+(1E6*Math.random()|0);var zb={},Ab=0;function X(){this.a={}}X.prototype.K=function(a,b,c){this.a[a]||Bb(this,a);(void 0!==c?c:1)?this.a[a].C.push(b):this.a[a].B.push(b)};X.prototype.addListenerKey=X.prototype.K;X.prototype.O=function(a){Bb(this,a)};X.prototype.clearListenerKey=X.prototype.O;
function Bb(a,b){a.a[b]?(a.a[b].B.length&&(a.a[b].B.forEach(function(a){if("number"!=typeof a&&a&&!a.Z){var b=a.src;if(b&&b[yb])b.a(a);else{var e=a.type,f=a.X;b.removeEventListener?b.removeEventListener(e,f,a.W):b.detachEvent&&b.detachEvent(e in zb?zb[e]:zb[e]="on"+e,f);Ab--;a.Y()}}},a),a.a[b].B.length=0),a.a[b].C.length&&(a.a[b].C.forEach(function(a){ia(a)},a),a.a[b].C.length=0)):a.a[b]={B:[],C:[]}}S.service("ngeoEventHelper",X);S.directive("ngeoAttributes",function(){return{controller:"ngeoAttributesController as attrCtrl",scope:!0,bindToController:{attributes:"=ngeoAttributesAttributes",disabled:"<ngeoAttributesDisabled",feature:"=ngeoAttributesFeature"},templateUrl:"ngeo/attributes.html"}});
function Y(a,b){this.disabled=!0===this.disabled;this.properties=q({},this.feature.i);this.h=a;this.b=b;this.dateOptions={changeMonth:!0,changeYear:!0};b=this.v||(this.v=++ea);this.b.K(b,r(this.feature,"propertychange",this.g,this),!0);this.a=!1;a.$on("$destroy",this.c.bind(this))}Y.$inject=["$scope","ngeoEventHelper"];Y.prototype.R=function(a){this.a=!0;this.feature.set(a,this.properties[a]);this.a=!1};Y.prototype.handleInputChange=Y.prototype.R;
Y.prototype.c=function(){var a=this.v||(this.v=++ea);this.b.O(a)};Y.prototype.g=function(a){this.a||(this.properties[a.key]=a.target.get(a.key),this.h.$apply())};S.controller("ngeoAttributesController",Y);var Cb=angular.module("app",["ngeo"]);function Z(a,b){this.a=b;this.attributes=null;this.disabled=!1;this.feature=new E({name:"A feature",kind:"house"});a.get("data/xsdattributes.xml").then(this.b.bind(this))}Z.$inject=["$http","$timeout"];Z.prototype.b=function(a){return this.attributes=a=(new T).a(a.data)};Z.prototype.T=function(){this.a(function(){this.feature.set("name","An alternate name")}.bind(this),0)};Z.prototype.updateName=Z.prototype.T;Cb.controller("MainController",Z);(function(){function a(a){a.put("ngeo/attributes.html",'<fieldset ng-disabled=attrCtrl.disabled> <div class=form-group ng-repeat="attribute in ::attrCtrl.attributes"> <div ng-if="attribute.type !== \'geometry\'"> <label class=control-label>{{ ::attribute.name | translate }} <span class=text-muted>{{::attribute.required ? "*" : ""}}</span></label> <div ng-switch=attribute.type> <select name={{::attribute.name}} ng-required=attribute.required ng-switch-when=select ng-model=attrCtrl.properties[attribute.name] ng-change=attrCtrl.handleInputChange(attribute.name); class=form-control type=text> <option ng-repeat="attribute in ::attribute.choices" value="{{ ::attribute }}"> {{ ::attribute }} </option> </select> <input name={{::attribute.name}} ng-required=attribute.required ng-switch-when=date ui-date=attrCtrl.dateOptions ng-model=attrCtrl.properties[attribute.name] ng-change=attrCtrl.handleInputChange(attribute.name); class=form-control type=text> <input name={{::attribute.name}} ng-required=attribute.required ng-switch-when=datetime ui-date=attrCtrl.dateOptions ng-model=attrCtrl.properties[attribute.name] ng-change=attrCtrl.handleInputChange(attribute.name); class=form-control type=text> <input name={{::attribute.name}} ng-required=attribute.required ng-switch-default ng-model=attrCtrl.properties[attribute.name] ng-change=attrCtrl.handleInputChange(attribute.name); class=form-control type=text> <div ng-show="form.$submitted || form[attribute.name].$touched"> <p class=text-danger ng-show=form[attribute.name].$error.required> {{\'This field is required\' | translate}} </p> </div> </div> </div> </div> </fieldset> ');
a.put("ngeo/popup.html",'<h4 class="popover-title ngeo-popup-title"> <span ng-bind-html=title></span> <button type=button class=close ng-click="open = false"> &times;</button> </h4> <div class=popover-content ng-bind-html=content></div> ');a.put("ngeo/grid.html",'<div class=ngeo-grid-table-container> <table float-thead=ctrl.floatTheadConfig ng-model=ctrl.configuration.data class="table table-bordered table-striped table-hover"> <thead class=table-header> <tr> <th ng-repeat="columnDefs in ctrl.configuration.columnDefs" ng-click=ctrl.sort(columnDefs.name)>{{columnDefs.name | translate}} <i ng-show="ctrl.sortedBy !== columnDefs.name" class="fa fa-fw"></i> <i ng-show="ctrl.sortedBy === columnDefs.name && ctrl.sortAscending === true" class="fa fa-caret-up"></i> <i ng-show="ctrl.sortedBy === columnDefs.name && ctrl.sortAscending === false" class="fa fa-caret-down"></i> </th> </tr> </thead> <tbody> <tr ng-repeat="attributes in ctrl.configuration.data" ng-class="[\'row-\' + ctrl.configuration.getRowUid(attributes), ctrl.configuration.isRowSelected(attributes) ? \'ngeo-grid-active\': \'\']" ng-click="ctrl.clickRow(attributes, $event)" ng-mousedown=ctrl.preventTextSelection($event)> <td ng-repeat="columnDefs in ctrl.configuration.columnDefs" ng-bind-html="attributes[columnDefs.name] | ngeoTrustHtml"></td> </tr> </tbody> </table> </div> ');
a.put("ngeo/scaleselector.html",'<div class="btn-group btn-block" ng-class="::{\'dropup\': scaleselectorCtrl.options.dropup}"> <button type=button class="btn btn-default dropdown-toggle" data-toggle=dropdown aria-expanded=false> <span ng-bind-html=scaleselectorCtrl.currentScale|ngeoScalify></span>&nbsp;<i class=caret></i> </button> <ul class="dropdown-menu btn-block" role=menu> <li ng-repeat="zoomLevel in ::scaleselectorCtrl.zoomLevels"> <a href ng-click=scaleselectorCtrl.changeZoom(zoomLevel) ng-bind-html=::scaleselectorCtrl.getScale(zoomLevel)|ngeoScalify> </a> </li> </ul> </div> ');
a.put("ngeo/datepicker.html","<div class=ngeo-datepicker> <form name=dateForm class=ngeo-datepicker-form novalidate> <div ng-if=\"::datepickerCtrl.time.widget === 'datepicker'\"> <div class=ngeo-datepicker-start-date> <span ng-if=\"::datepickerCtrl.time.mode === 'range'\" translate>From:</span> <span ng-if=\"::datepickerCtrl.time.mode !== 'range'\" translate>Date:</span> <input name=sdate ui-date=datepickerCtrl.sdateOptions ng-model=datepickerCtrl.sdate required> </div> <div class=ngeo-datepicker-end-date ng-if=\"::datepickerCtrl.time.mode === 'range'\"> <span translate>To:</span> <input name=edate ui-date=datepickerCtrl.edateOptions ng-model=datepickerCtrl.edate required> </div> </div> </form> </div> ");
a.put("ngeo/layertree.html",'<span ng-if=::!layertreeCtrl.isRoot>{{::layertreeCtrl.node.name}}</span> <input type=checkbox ng-if="::layertreeCtrl.node && !layertreeCtrl.node.children" ng-model=layertreeCtrl.getSetActive ng-model-options="{getterSetter: true}"> <ul ng-if=::layertreeCtrl.node.children> <li ng-repeat="node in ::layertreeCtrl.node.children" ngeo-layertree=::node ngeo-layertree-notroot ngeo-layertree-map=layertreeCtrl.map ngeo-layertree-nodelayerexpr=layertreeCtrl.nodelayerExpr ngeo-layertree-listenersexpr=layertreeCtrl.listenersExpr> </li> </ul> ');
a.put("ngeo/colorpicker.html",'<table class=ngeo-colorpicker-palette> <tr ng-repeat="colors in ::ctrl.colors"> <td ng-repeat="color in ::colors" ng-click=ctrl.setColor(color) ng-class="{\'ngeo-colorpicker-selected\': color == ctrl.color}"> <div ng-style="::{\'background-color\': color}"></div> </td> </tr> </table> ')}a.$inject=["$templateCache"];S.run(a)})();}).call(window);
//# sourceMappingURL=attributes.js.map