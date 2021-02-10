/*! For license information please see WaveSurferSumToMonoPlugin.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.WaveSurferSumToMonoPlugin=t():e.WaveSurferSumToMonoPlugin=t()}(self,(function(){return(()=>{var e={996:(e,t,n)=>{"use strict";const r=n(383),a=n(680),l=n(310);function o(e,t,n){if(!r(e))throw Error("Pass AudioBuffer as the first param");let s=e.numberOfChannels;if(t===s)return e;n?"string"==typeof n&&(n={interpretation:n}):n={};let i,f=n.interpretation||"speaker";if("number"==typeof t)if("discrete"==f)i=o.discreteMap.slice(0,t);else{let e=o.speakerMap[s];e&&(i=e[t]),i||(i=o.discreteMap.slice(0,t))}else if(l(t)){let e=[];for(let n in t)e[n]=t[n];i=e,t=i.length}else{if(!Array.isArray(t))throw Error("Target number of channels should be a number or map");i=t,t=t.length}return e.map?e.map(u):u(e);function u(e){let r=new a(t,e.length,{context:n.context});for(let n=0;n<t;n++){let t=r.getChannelData(n),a=i[n];if(null!=a)if("number"==typeof a){if(a>=e.numberOfChannels)continue;let n=e.getChannelData(a);t.set(n)}else"function"==typeof a&&a(t,e)}return r}}e.exports=o,o.speakerMap={1:{2:[0,0],4:[0,0,null,null],6:[null,null,0,null,null]},2:{1:[(e,t)=>{let n=t.getChannelData(0),r=t.getChannelData(1);for(let t=0,a=e.length;t<a;t++)e[t]=.5*(n[t]+r[t])}],4:[0,1,null,null],6:[0,1,null,null,null,null]},4:{1:[(e,t)=>{let n=t.getChannelData(0),r=t.getChannelData(1),a=t.getChannelData(2),l=t.getChannelData(3);for(let t=0,o=e.length;t<o;t++)e[t]=.25*(n[t]+r[t]+a[t]+l[t])}],2:[(e,t)=>{let n=t.getChannelData(0),r=t.getChannelData(2);for(let t=0,a=e.length;t<a;t++)e[t]=.5*(n[t]+r[t])},(e,t)=>{let n=t.getChannelData(1),r=t.getChannelData(3);for(let t=0,a=e.length;t<a;t++)e[t]=.5*(n[t]+r[t])}],6:[0,1,null,null,2,3]},6:{1:[(e,t)=>{let n=t.getChannelData(0),r=t.getChannelData(1),a=t.getChannelData(2),l=t.getChannelData(4),o=t.getChannelData(5);for(let t=0,s=e.length;t<s;t++)e[t]=.7071*(n[t]+r[t])+a[t]+.5*(l[t]+o[t])}],2:[(e,t)=>{let n=t.getChannelData(0),r=t.getChannelData(2),a=t.getChannelData(4);for(let t=0,l=e.length;t<l;t++)e[t]=n[t]+.7071*(r[t]+a[t])},(e,t)=>{let n=t.getChannelData(1),r=t.getChannelData(2),a=t.getChannelData(5);for(let t=0,l=e.length;t<l;t++)e[t]=n[t]+.7071*(r[t]+a[t])}],4:[(e,t)=>{let n=t.getChannelData(0),r=t.getChannelData(2);for(let t=0,a=e.length;t<a;t++)e[t]=n[t]+.7071*r[t]},(e,t)=>{let n=t.getChannelData(1),r=t.getChannelData(2);for(let t=0,a=e.length;t<a;t++)e[t]=n[t]+.7071*r[t]},4,5]}},o.discreteMap=Array(32).fill(0).map(((e,t)=>t))},680:(e,t,n)=>{"use strict";var r=n(738),a=n(744),l=n(33),o=n(383),s=n(545),i=n(310);function f(e,t,n,u){if(!(this instanceof f))return new f(e,t,n,u);for(var h=arguments.length;!arguments[h]&&h;)h--;var c,g,p,b=arguments[h],m=!1;if(b&&"number"!=typeof b?(c=b.context||s&&s(),g=null!=b.isWAA?b.isWAA:!(!l||!c.createBuffer),p=b.floatArray||Float32Array,b.floatArray&&(m=!0)):(g=!!(c=s&&s()),p=Float32Array),null==t||i(t)?(t=e||1,e=null):("number"==typeof n?this.sampleRate=n:l&&(this.sampleRate=c.sampleRate),null!=e&&(this.numberOfChannels=e)),"number"==typeof t)for(this.length=t,this.data=[],h=0;h<this.numberOfChannels;h++)this.data[h]=new p(t);else if(o(t)){this.length=t.length,null==e&&(this.numberOfChannels=t.numberOfChannels),null==n&&(this.sampleRate=t.sampleRate),this.data=[],h=0;for(var d=this.numberOfChannels;h<d;h++)this.data[h]=t.getChannelData(h).slice()}else if(ArrayBuffer.isView(t)||t instanceof ArrayBuffer||r(t))for(r(t)&&(t=a(t)),t instanceof Float32Array||t instanceof Float64Array||(t=new p(t.buffer||t)),this.length=Math.floor(t.length/this.numberOfChannels),this.data=[],h=0;h<this.numberOfChannels;h++)this.data[h]=t.subarray(h*this.length,(h+1)*this.length);else{if(!Array.isArray(t)){if(t&&(t.data||t.buffer))return new f(this.numberOfChannels,t.data||t.buffer,this.sampleRate);throw Error("Failed to create buffer: check provided arguments")}if(t[0]instanceof Object)for(null==e&&(this.numberOfChannels=t.length),this.length=t[0].length,this.data=[],h=0;h<this.numberOfChannels;h++)this.data[h]=!m&&(t[h]instanceof Float32Array||t[h]instanceof Float64Array)?t[h]:new p(t[h]);else for(this.length=Math.floor(t.length/this.numberOfChannels),this.data=[],h=0;h<this.numberOfChannels;h++)this.data[h]=new p(t.slice(h*this.length,(h+1)*this.length))}if(g){var y=c.createBuffer(this.numberOfChannels,this.length,this.sampleRate);for(h=0;h<this.numberOfChannels;h++)y.getChannelData(h).set(this.getChannelData(h));return y}this.duration=this.length/this.sampleRate}e.exports=f,f.prototype.numberOfChannels=2,f.prototype.sampleRate=s.sampleRate||44100,f.prototype.getChannelData=function(e){if(e>=this.numberOfChannels||e<0||null==e)throw Error("Cannot getChannelData: channel number ("+e+") exceeds number of channels ("+this.numberOfChannels+")");return this.data[e]},f.prototype.copyFromChannel=function(e,t,n){null==n&&(n=0);for(var r=this.data[t],a=n,l=0;a<this.length&&l<e.length;a++,l++)e[l]=r[a]},f.prototype.copyToChannel=function(e,t,n){var r=this.data[t];n||(n=0);for(var a=n,l=0;a<this.length&&l<e.length;a++,l++)r[a]=e[l]}},545:e=>{"use strict";var t={};e.exports=function(e){if("undefined"==typeof window)return null;var n=window.OfflineAudioContext||window.webkitOfflineAudioContext,r=window.AudioContext||window.webkitAudioContext;if(!r)return null;"number"==typeof e&&(e={sampleRate:e});var a=e&&e.sampleRate;if(e&&e.offline)return n?new n(e.channels||2,e.length,a||44100):null;var l=t[a];if(l)return l;try{l=new r(e)}catch(e){l=new r}return t[l.sampleRate]=t[a]=l,l}},744:function(e,t){var n;n=new Buffer(0).buffer instanceof ArrayBuffer?function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)}:function(e){for(var t=new ArrayBuffer(e.length),n=new Uint8Array(t),r=0;r<e.length;++r)n[r]=e[r];return t},e.exports&&(t=e.exports=n),t.bufferToArrayBuffer=n},383:e=>{"use strict";e.exports=function(e){return null!=e&&"number"==typeof e.length&&"number"==typeof e.sampleRate&&"function"==typeof e.getChannelData&&"number"==typeof e.duration}},33:e=>{e.exports=!0},738:e=>{function t(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(t(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&t(e.slice(0,0))}(e)||!!e._isBuffer)}},310:e=>{"use strict";var t=Object.prototype.toString;e.exports=function(e){var n;return"[object Object]"===t.call(e)&&(null===(n=Object.getPrototypeOf(e))||n===Object.getPrototypeOf({}))}},238:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const r=n(996);class a{static create(e){return{name:"sumToMonoPlugin",deferInit:!(!e||!e.deferInit)&&e.deferInit,params:e,staticProps:{sumToMono(){this.sumToMonoPlugin.sumToMono()},revertMonoToOriginal(){this.sumToMonoPlugin.revertMonoToOriginal()},isMono(){return this.sumToMonoPlugin.isMono}},instance:a}}constructor(e,t){this.params=e,this.wavesurfer=t,this.util=t.util,this.isMono=!1}sumToMono(){this.wavesurfer.backend.originalBuffer||(this.wavesurfer.backend.originalBuffer=this.wavesurfer.backend.buffer);const e=r(this.wavesurfer.backend.buffer,1);this.wavesurfer.backend.buffer=e,this.wavesurfer.drawer.fireEvent("redraw"),this._setIsMono(!0)}_setIsMono(e){this.isMono=e,this.wavesurfer.fireEvent("toggle-mono",e)}revertMonoToOriginal(){this.wavesurfer.backend.originalBuffer&&(this.wavesurfer.backend.buffer=this.wavesurfer.backend.originalBuffer,this.wavesurfer.backend.originalBuffer=null,this.wavesurfer.drawer.fireEvent("redraw")),this._setIsMono(!1)}init(){}destroy(){}}}},t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(238)})()}));