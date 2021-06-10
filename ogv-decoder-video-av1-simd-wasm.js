
var OGVDecoderVideoAV1SIMDW = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(OGVDecoderVideoAV1SIMDW) {
  OGVDecoderVideoAV1SIMDW = OGVDecoderVideoAV1SIMDW || {};


var a;a||(a=typeof OGVDecoderVideoAV1SIMDW !== 'undefined' ? OGVDecoderVideoAV1SIMDW : {});var aa,ba;a.ready=new Promise(function(b,c){aa=b;ba=c});var ca=a,q={},w;for(w in a)a.hasOwnProperty(w)&&(q[w]=a[w]);var y=!1,D=!1,da=!1,ea=!1;y="object"===typeof window;D="function"===typeof importScripts;da="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;ea=!y&&!da&&!D;var E="",F,fa,J,ha,ia;
if(da)E=D?require("path").dirname(E)+"/":__dirname+"/",F=function(b,c){ha||(ha=require("fs"));ia||(ia=require("path"));b=ia.normalize(b);return ha.readFileSync(b,c?null:"utf8")},J=function(b){b=F(b,!0);b.buffer||(b=new Uint8Array(b));b.buffer||K("Assertion failed: undefined");return b},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("unhandledRejection",K),a.inspect=function(){return"[Emscripten Module object]"};else if(ea)"undefined"!=typeof read&&(F=function(b){return read(b)}),
J=function(b){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(b));b=read(b,"binary");"object"===typeof b||K("Assertion failed: undefined");return b},"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(y||D)D?E=self.location.href:"undefined"!==typeof document&&document.currentScript&&(E=document.currentScript.src),_scriptDir&&(E=_scriptDir),0!==E.indexOf("blob:")?
E=E.substr(0,E.lastIndexOf("/")+1):E="",F=function(b){var c=new XMLHttpRequest;c.open("GET",b,!1);c.send(null);return c.responseText},D&&(J=function(b){var c=new XMLHttpRequest;c.open("GET",b,!1);c.responseType="arraybuffer";c.send(null);return new Uint8Array(c.response)}),fa=function(b,c,e){var d=new XMLHttpRequest;d.open("GET",b,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?c(d.response):e()};d.onerror=e;d.send(null)};
var ka=a.print||console.log.bind(console),L=a.printErr||console.warn.bind(console);for(w in q)q.hasOwnProperty(w)&&(a[w]=q[w]);q=null;var M;a.wasmBinary&&(M=a.wasmBinary);var noExitRuntime;a.noExitRuntime&&(noExitRuntime=a.noExitRuntime);"object"!==typeof WebAssembly&&K("no native wasm support detected");var N,la=!1,ma="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0,na,O,R;
function oa(){var b=N.buffer;na=b;a.HEAP8=new Int8Array(b);a.HEAP16=new Int16Array(b);a.HEAP32=R=new Int32Array(b);a.HEAPU8=O=new Uint8Array(b);a.HEAPU16=new Uint16Array(b);a.HEAPU32=new Uint32Array(b);a.HEAPF32=new Float32Array(b);a.HEAPF64=new Float64Array(b)}var pa,qa=[],ra=[],sa=[],ta=[];ra.push({C:function(){ua()}});function va(){var b=a.preRun.shift();qa.unshift(b)}var S=0,wa=null,T=null;a.preloadedImages={};a.preloadedAudios={};
function K(b){if(a.onAbort)a.onAbort(b);L(b);la=!0;b=new WebAssembly.RuntimeError("abort("+b+"). Build with -s ASSERTIONS=1 for more info.");ba(b);throw b;}function xa(b){var c=U;return String.prototype.startsWith?c.startsWith(b):0===c.indexOf(b)}function ya(){return xa("data:application/octet-stream;base64,")}var U="ogv-decoder-video-av1-simd-wasm.wasm";if(!ya()){var za=U;U=a.locateFile?a.locateFile(za,E):E+za}
function Aa(){var b=U;try{if(b==U&&M)return new Uint8Array(M);if(J)return J(b);throw"both async and sync fetching of the wasm failed";}catch(c){K(c)}}
function La(){if(!M&&(y||D)){if("function"===typeof fetch&&!xa("file://"))return fetch(U,{credentials:"same-origin"}).then(function(b){if(!b.ok)throw"failed to load wasm binary file at '"+U+"'";return b.arrayBuffer()}).catch(function(){return Aa()});if(fa)return new Promise(function(b,c){fa(U,function(e){b(new Uint8Array(e))},c)})}return Promise.resolve().then(function(){return Aa()})}
function V(b){for(;0<b.length;){var c=b.shift();if("function"==typeof c)c(a);else{var e=c.C;"number"===typeof e?void 0===c.A?pa.get(e)():pa.get(e)(c.A):e(void 0===c.A?null:c.A)}}}
var Ma=[null,[],[]],Oa={d:function(){K()},f:function(b,c,e){O.copyWithin(b,c,c+e)},g:function(b){b>>>=0;var c=O.length;if(2147483648<b)return!1;for(var e=1;4>=e;e*=2){var d=c*(1+.2/e);d=Math.min(d,b+100663296);d=Math.max(16777216,b,d);0<d%65536&&(d+=65536-d%65536);a:{try{N.grow(Math.min(2147483648,d)-na.byteLength+65535>>>16);oa();var f=1;break a}catch(g){}f=void 0}if(f)return!0}return!1},h:function(){return 0},e:function(){},a:function(b,c,e,d){for(var f=0,g=0;g<e;g++){for(var z=R[c+8*g>>2],t=R[c+
(8*g+4)>>2],A=0;A<t;A++){var n=O[z+A],x=Ma[b];if(0===n||10===n){n=1===b?ka:L;var l=x;for(var p=0,r=p+NaN,v=p;l[v]&&!(v>=r);)++v;if(16<v-p&&l.subarray&&ma)l=ma.decode(l.subarray(p,v));else{for(r="";p<v;){var h=l[p++];if(h&128){var G=l[p++]&63;if(192==(h&224))r+=String.fromCharCode((h&31)<<6|G);else{var P=l[p++]&63;h=224==(h&240)?(h&15)<<12|G<<6|P:(h&7)<<18|G<<12|P<<6|l[p++]&63;65536>h?r+=String.fromCharCode(h):(h-=65536,r+=String.fromCharCode(55296|h>>10,56320|h&1023))}}else r+=String.fromCharCode(h)}l=
r}n(l);x.length=0}else x.push(n)}f+=t}R[d>>2]=f;return 0},i:function(b,c,e,d,f,g,z,t,A,n,x,l,p,r,v,h){function G(H,u,B,ja,Ba,Ca,Qa,Ra,X){if(Na){var k=new Float64Array(H.buffer);u=new Float64Array(P,u,B*ja>>3);k.set(u)}else H.set(new Uint8Array(P,u,B*ja));var C;for(u=C=0;u<Ca;u++,C+=B)for(k=0;k<B;k++)H[C+k]=X;for(;u<Ca+Ra;u++,C+=B){for(k=0;k<Ba;k++)H[C+k]=X;for(k=Ba+Qa;k<B;k++)H[C+k]=X}for(;u<ja;u++,C+=B)for(k=0;k<B;k++)H[C+k]=X;return H}var P=N.buffer,m=a.videoFormat,Da=(p&-2)*A/z,Ea=(r&-2)*n/t,Fa=
x*A/z,Ga=l*n/t;x===m.cropWidth&&l===m.cropHeight&&(v=m.displayWidth,h=m.displayHeight);for(var Ha=a.recycledFrames,I,Ia=t*c,Ja=n*d,Ka=n*g;0<Ha.length;){var Q=Ha.shift();m=Q.format;if(m.width===z&&m.height===t&&m.chromaWidth===A&&m.chromaHeight===n&&m.cropLeft===p&&m.cropTop===r&&m.cropWidth===x&&m.cropHeight===l&&m.displayWidth===v&&m.displayHeight===h&&Q.y.bytes.length===Ia&&Q.u.bytes.length===Ja&&Q.v.bytes.length===Ka){I=Q;break}}I||(I={format:{width:z,height:t,chromaWidth:A,chromaHeight:n,cropLeft:p,
cropTop:r,cropWidth:x,cropHeight:l,displayWidth:v,displayHeight:h},y:{bytes:new Uint8Array(Ia),stride:c},u:{bytes:new Uint8Array(Ja),stride:d},v:{bytes:new Uint8Array(Ka),stride:g}});G(I.y.bytes,b,c,t,p,r,x,l,0);G(I.u.bytes,e,d,n,Da,Ea,Fa,Ga,128);G(I.v.bytes,f,g,n,Da,Ea,Fa,Ga,128);a.frameBuffer=I},c:function(){return 6},b:function(){return 28}};
(function(){function b(f){a.asm=f.exports;N=a.asm.j;oa();pa=a.asm.r;S--;a.monitorRunDependencies&&a.monitorRunDependencies(S);0==S&&(null!==wa&&(clearInterval(wa),wa=null),T&&(f=T,T=null,f()))}function c(f){b(f.instance)}function e(f){return La().then(function(g){return WebAssembly.instantiate(g,d)}).then(f,function(g){L("failed to asynchronously prepare wasm: "+g);K(g)})}var d={a:Oa};S++;a.monitorRunDependencies&&a.monitorRunDependencies(S);if(a.instantiateWasm)try{return a.instantiateWasm(d,b)}catch(f){return L("Module.instantiateWasm callback failed with error: "+
f),!1}(function(){return M||"function"!==typeof WebAssembly.instantiateStreaming||ya()||xa("file://")||"function"!==typeof fetch?e(c):fetch(U,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(c,function(g){L("wasm streaming compile failed: "+g);L("falling back to ArrayBuffer instantiation");return e(c)})})})().catch(ba);return{}})();var ua=a.___wasm_call_ctors=function(){return(ua=a.___wasm_call_ctors=a.asm.k).apply(null,arguments)};
a._ogv_video_decoder_init=function(){return(a._ogv_video_decoder_init=a.asm.l).apply(null,arguments)};a._ogv_video_decoder_async=function(){return(a._ogv_video_decoder_async=a.asm.m).apply(null,arguments)};a._ogv_video_decoder_destroy=function(){return(a._ogv_video_decoder_destroy=a.asm.n).apply(null,arguments)};a._ogv_video_decoder_process_header=function(){return(a._ogv_video_decoder_process_header=a.asm.o).apply(null,arguments)};
a._ogv_video_decoder_process_frame=function(){return(a._ogv_video_decoder_process_frame=a.asm.p).apply(null,arguments)};a._free=function(){return(a._free=a.asm.q).apply(null,arguments)};a._malloc=function(){return(a._malloc=a.asm.s).apply(null,arguments)};var W;T=function Pa(){W||Sa();W||(T=Pa)};
function Sa(){function b(){if(!W&&(W=!0,a.calledRun=!0,!la)){V(ra);V(sa);aa(a);if(a.onRuntimeInitialized)a.onRuntimeInitialized();if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;){var c=a.postRun.shift();ta.unshift(c)}V(ta)}}if(!(0<S)){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)va();V(qa);0<S||(a.setStatus?(a.setStatus("Running..."),setTimeout(function(){setTimeout(function(){a.setStatus("")},1);b()},1)):b())}}
a.run=Sa;if(a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);0<a.preInit.length;)a.preInit.pop()();noExitRuntime=!0;Sa();var Y,Ta,Ua;Ua="undefined"===typeof performance||"undefined"===typeof performance.now?Date.now:performance.now.bind(performance);function Z(b){var c=Ua();b=b();a.cpuTime+=Ua()-c;return b}a.loadedMetadata=!!ca.videoFormat;a.videoFormat=ca.videoFormat||null;a.frameBuffer=null;a.cpuTime=0;Object.defineProperty(a,"processing",{get:function(){return!1}});
a.init=function(b){Z(function(){a._ogv_video_decoder_init()});b()};a.processHeader=function(b,c){var e=Z(function(){var d=b.byteLength;Y&&Ta>=d||(Y&&a._free(Y),Ta=d,Y=a._malloc(Ta));var f=Y;(new Uint8Array(N.buffer,f,d)).set(new Uint8Array(b));return a._ogv_video_decoder_process_header(f,d)});c(e)};a.B=[];
a.processFrame=function(b,c){function e(t){a._free(g);c(t)}var d=a._ogv_video_decoder_async(),f=b.byteLength,g=a._malloc(f);d&&a.B.push(e);var z=Z(function(){(new Uint8Array(N.buffer,g,f)).set(new Uint8Array(b));return a._ogv_video_decoder_process_frame(g,f)});d||e(z)};a.close=function(){};a.sync=function(){a._ogv_video_decoder_async()&&(a.B.push(function(){}),Z(function(){a._ogv_video_decoder_process_frame(0,0)}))};a.recycledFrames=[];
a.recycleFrame=function(b){var c=a.recycledFrames;c.push(b);16<c.length&&c.shift()};var Na="object"===typeof navigator&&navigator.userAgent.match(/Trident/);


  return OGVDecoderVideoAV1SIMDW.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = OGVDecoderVideoAV1SIMDW;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return OGVDecoderVideoAV1SIMDW; });
else if (typeof exports === 'object')
  exports["OGVDecoderVideoAV1SIMDW"] = OGVDecoderVideoAV1SIMDW;
