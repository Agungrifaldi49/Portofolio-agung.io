function Ad(t,a){return function(){return t.apply(a,arguments)}}const{toString:vc}=Object.prototype,{getPrototypeOf:l1}=Object,{iterator:V2,toStringTag:wd}=Symbol,M1=(({hasOwnProperty:t})=>(a,e)=>t.call(a,e))(Object.prototype),Hd=t=>typeof t=="string"&&(t==="__proto__"||t==="constructor"||t==="prototype"),d0=(t,a,e)=>t===Object.prototype||!e&&a===null,mc=t=>{if(!Object.isExtensible(t))return!1;const a=Object.getOwnPropertyNames(t);return Object.getOwnPropertySymbols&&a.push(...Object.getOwnPropertySymbols(t)),a.every(e=>{if(Hd(e))return!1;const h=Object.getOwnPropertyDescriptor(t,e);return!!h&&h.configurable&&h.writable===!0})},Ht=(t,a)=>{let e=t;const h=[];for(;e!=null;){if(h.indexOf(e)!==-1)return!1;h.push(e);const d=l1(e);if(d0(e,d,e===t))return!1;if(M1(e,a))return!0;e=d}return!1},xc=(t,a)=>t!=null&&Ht(t,a)?t[a]:void 0,yc=t=>{if(t==null||typeof t!="object"&&typeof t!="function")return t;const a=l1(t);if(a===null&&mc(t))return t;const e=Object.create(null),h=Object.create(null),d=[];let r=t;for(;r!=null&&d.indexOf(r)===-1;){d.push(r);const c=r===t?a:l1(r);if(d0(r,c,r===t))break;const n=Object.getOwnPropertyNames(r);Object.getOwnPropertySymbols&&n.push(...Object.getOwnPropertySymbols(r));for(const p of n)Hd(p)||M1(h,p)||(e[p]=t[p],h[p]=!0);r=c}return e},Ct=(t=>a=>{const e=vc.call(a);return t[e]||(t[e]=e.slice(8,-1).toLowerCase())})(Object.create(null)),Q=t=>(t=t.toLowerCase(),a=>Ct(a)===t),r0=t=>a=>typeof a===t,{isArray:P1}=Array,O1=r0("undefined");function X1(t){return t!==null&&!O1(t)&&t.constructor!==null&&!O1(t.constructor)&&$(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Cd=Q("ArrayBuffer");function gc(t){let a;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?a=ArrayBuffer.isView(t):a=t&&t.buffer&&Cd(t.buffer),a}const Ac=r0("string"),$=r0("function"),wc=r0("number"),J1=t=>t!==null&&typeof t=="object",Hc=t=>t===!0||t===!1,N2=t=>{if(!J1(t))return!1;const a=l1(t);return(a===null||a===Object.prototype||l1(a)===null)&&(d0(t,a,!0)||!M1(t,wd)&&!M1(t,V2))},Cc=t=>{if(!J1(t)||X1(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},Vc=Q("Date"),Sc=Q("File"),Lc=t=>!!(t&&typeof t.uri<"u"),bc=t=>t&&typeof t.getParts<"u",_c=Q("Blob"),Pc=Q("FileList"),Oc=Q("Set"),Rc=t=>J1(t)&&$(t.pipe);function Ec(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const pa=Ec(),oa=typeof pa.FormData<"u"?pa.FormData:void 0,zc=t=>{if(!t)return!1;if(oa&&t instanceof oa)return!0;const a=l1(t);if(!a||a===Object.prototype||!$(t.append))return!1;const e=Ct(t);return e==="formdata"||e==="object"&&$(t.toString)&&t.toString()==="[object FormData]"},Tc=Q("URLSearchParams"),[Dc,kc,Bc,Fc]=["ReadableStream","Request","Response","Headers"].map(Q),qc=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function S2(t,a,{allOwnKeys:e=!1}={}){if(t===null||typeof t>"u")return;let h,d;if(typeof t!="object"&&(t=[t]),P1(t))for(h=0,d=t.length;h<d;h++)a.call(null,t[h],h,t);else{if(X1(t))return;const r=e?Object.getOwnPropertyNames(t):Object.keys(t),c=r.length;let n;for(h=0;h<c;h++)n=r[h],a.call(null,t[n],n,t)}}function Uc(t,a){if(X1(t))return null;a=a.toLowerCase();const e=Object.keys(t);let h=e.length,d;for(;h-- >0;)if(d=e[h],a===d.toLowerCase())return d;return null}const S1=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Vd=t=>!O1(t)&&t!==S1;function Q0(...t){const{caseless:a,skipUndefined:e}=Vd(this)&&this||{},h={},d=a?Object.create(null):null,r=(c,n)=>{if(n==="__proto__"||n==="constructor"||n==="prototype")return;let p=n;if(d&&typeof n=="string"){const s=n.toLowerCase(),l=d[s];l!==void 0&&M1(h,l)?p=l:d[s]=n}const i=M1(h,p)?h[p]:void 0;N2(i)&&N2(c)?h[p]=Q0(i,c):N2(c)?h[p]=Q0({},c):P1(c)?h[p]=c.slice():(!e||!O1(c))&&(h[p]=c)};for(let c=0,n=t.length;c<n;c++){const p=t[c];if(!p||X1(p)||(S2(p,r),typeof p!="object"||P1(p)||!Object.getOwnPropertySymbols))continue;const i=Object.getOwnPropertySymbols(p);for(let s=0;s<i.length;s++){const l=i[s];Yc.call(p,l)&&r(p[l],l)}}return h}const Nc=(t,a,e,{allOwnKeys:h}={})=>(S2(a,(d,r)=>{e&&$(d)?Object.defineProperty(t,r,{__proto__:null,value:Ad(d,e),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,r,{__proto__:null,value:d,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:h}),t),Ic=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),jc=(t,a,e,h)=>{t.prototype=Object.create(a.prototype,h),Object.defineProperty(t.prototype,"constructor",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{__proto__:null,value:a.prototype}),e&&Object.assign(t.prototype,e)},Zc=(t,a,e,h)=>{let d,r,c;const n={};if(a=a||{},t==null)return a;do{for(d=Object.getOwnPropertyNames(t),r=d.length;r-- >0;)c=d[r],(!h||h(c,t,a))&&!n[c]&&(a[c]=t[c],n[c]=!0);t=e!==!1&&l1(t)}while(t&&(!e||e(t,a))&&t!==Object.prototype);return a},$c=(t,a,e)=>{t=String(t),(e===void 0||e>t.length)&&(e=t.length),e-=a.length;const h=t.indexOf(a,e);return h!==-1&&h===e},Wc=t=>{if(!t)return null;if(P1(t))return t;let a=t.length;if(!Number.isSafeInteger(a)||a<0||a>4294967295)return null;const e=new Set,h=new Set;let d=t;for(;d!=null&&e.size<a;){if(h.has(d))return null;h.add(d);const c=l1(d);if(d0(d,c,d===t))break;Object.getOwnPropertyNames(d).forEach(n=>{const p=+n;Number.isInteger(p)&&p>=0&&p<a&&String(p)===n&&M1(d,n)&&e.add(p)}),d=c}if(e.size!==a)return null;const r=new Array(a);for(;a-- >0;)r[a]=t[a];return r},Gc=(t=>a=>t&&a instanceof t)(typeof Uint8Array<"u"&&l1(Uint8Array)),Kc=(t,a)=>{const h=(t&&t[V2]).call(t);let d;for(;(d=h.next())&&!d.done;){const r=d.value;a.call(t,r[0],r[1])}},Xc=(t,a)=>{let e;const h=[];for(;(e=t.exec(a))!==null;)h.push(e);return h},Jc=Q("HTMLFormElement"),Qc=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,h,d){return h.toUpperCase()+d}),{propertyIsEnumerable:Yc}=Object.prototype,tn=Q("RegExp"),Sd=(t,a)=>{const e=Object.getOwnPropertyDescriptors(t),h={};S2(e,(d,r)=>{let c;(c=a(d,r,t))!==!1&&(h[r]=c||d)}),Object.defineProperties(t,h)},an=t=>{Sd(t,(a,e)=>{if($(t)&&["arguments","caller","callee"].includes(e))return!1;const h=t[e];if($(h)){if(a.enumerable=!1,"writable"in a){a.writable=!1;return}a.set||(a.set=()=>{throw Error("Can not rewrite read-only method '"+e+"'")})}})},en=(t,a)=>{const e={},h=d=>{d.forEach(r=>{e[r]=!0})};return P1(t)?h(t):h(String(t).split(a)),e},hn=()=>{},dn=(t,a)=>t!=null&&Number.isFinite(t=+t)?t:a;function rn(t){return!!(t&&$(t.append)&&t[wd]==="FormData"&&t[V2])}const cn=t=>{const a=new WeakSet,e=h=>{if(J1(h)){if(a.has(h))return;if(X1(h))return h;if(!("toJSON"in h)){a.add(h);let d;if(Oc(h)){d=[];for(const r of h){const c=e(r);!O1(c)&&d.push(c)}}else d=P1(h)?[]:{},S2(h,(r,c)=>{const n=e(r);!O1(n)&&(d[c]=n)});return a.delete(h),d}}return h};return e(t)},nn=Q("AsyncFunction"),pn=t=>t&&(J1(t)||$(t))&&$(t.then)&&$(t.catch),Ld=((t,a)=>t?setImmediate:a?((e,h)=>(S1.addEventListener("message",({source:d,data:r})=>{d===S1&&r===e&&h.length&&h.shift()()},!1),d=>{h.push(d),S1.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate=="function",$(S1.postMessage)),on=typeof queueMicrotask<"u"?queueMicrotask.bind(S1):typeof process<"u"&&process.nextTick||Ld,bd=t=>t!=null&&$(t[V2]),sn=t=>t!=null&&Ht(t,V2)&&bd(t),o={isArray:P1,isArrayBuffer:Cd,isBuffer:X1,isFormData:zc,isArrayBufferView:gc,isString:Ac,isNumber:wc,isBoolean:Hc,isObject:J1,isPlainObject:N2,isEmptyObject:Cc,isReadableStream:Dc,isRequest:kc,isResponse:Bc,isHeaders:Fc,isUndefined:O1,isDate:Vc,isFile:Sc,isReactNativeBlob:Lc,isReactNative:bc,isBlob:_c,isRegExp:tn,isFunction:$,isStream:Rc,isURLSearchParams:Tc,isTypedArray:Gc,isFileList:Pc,forEach:S2,merge:Q0,extend:Nc,trim:qc,stripBOM:Ic,inherits:jc,toFlatObject:Zc,kindOf:Ct,kindOfTest:Q,endsWith:$c,toArray:Wc,forEachEntry:Kc,matchAll:Xc,isHTMLForm:Jc,hasOwnProperty:M1,hasOwnProp:M1,hasOwnInPrototypeChain:Ht,getSafeProp:xc,toSafeFlatObject:yc,reduceDescriptors:Sd,freezeMethods:an,toObjectSet:en,toCamelCase:Qc,noop:hn,toFiniteNumber:dn,findKey:Uc,global:S1,isContextDefined:Vd,isSpecCompliantForm:rn,toJSONObject:cn,isAsyncFn:nn,isThenable:pn,setImmediate:Ld,asap:on,isIterable:bd,isSafeIterable:sn},ln=o.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Mn=t=>{const a=Object.create(null);let e,h,d;return t&&t.split(`
`).forEach(function(c){d=c.indexOf(":"),e=c.substring(0,d).trim().toLowerCase(),h=c.substring(d+1).trim();const n=o.hasOwnProp(a,e);!e||n&&o.hasOwnProp(ln,e)||(e==="set-cookie"?n?a[e].push(h):a[e]=[h]:a[e]=n?a[e]+", "+h:h)}),a};function un(t){let a=0,e=t.length;for(;a<e;){const h=t.charCodeAt(a);if(h!==9&&h!==32)break;a+=1}for(;e>a;){const h=t.charCodeAt(e-1);if(h!==9&&h!==32)break;e-=1}return a===0&&e===t.length?t:t.slice(a,e)}const fn=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),vn=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Vt(t,a){return o.isArray(t)?t.map(e=>Vt(e,a)):un(String(t).replace(a,""))}const mn=t=>Vt(t,fn),xn=t=>Vt(t,vn);function _d(t){const a=Object.create(null);return o.forEach(t.toJSON(),(e,h)=>{a[h]=xn(e)}),a}const ia=Symbol("internals");function c2(t){return t&&String(t).trim().toLowerCase()}function I2(t){return t===!1||t==null?t:o.isArray(t)?t.map(I2):mn(String(t))}function yn(t){const a=Object.create(null),e=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let h;for(;h=e.exec(t);)a[h[1]]=h[2];return a}const gn=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function A0(t){let a=0,e=t.length;for(;a<e;){const h=t.charCodeAt(a);if(h!==9&&h!==32)break;a+=1}for(;e>a;){const h=t.charCodeAt(e-1);if(h!==9&&h!==32)break;e-=1}return a===0&&e===t.length?t:t.slice(a,e)}function An(t){const a=t.length-1;if(a<1||t.charCodeAt(0)!==34||t.charCodeAt(a)!==34)return t;let e="";for(let h=1;h<a;h++){const d=t.charCodeAt(h);if(d===34||d===92&&(h+=1,h>=a))return t;e+=t[h]}return e}function wn(t){const a=Object.create(null),e=String(t);let h=0,d=!1,r=!1;function c(n){const p=A0(e.slice(h,n)),i=p.indexOf("=");if(i<1)return;const s=A0(p.slice(0,i));if(!gn.test(s))return;const l=s.toLowerCase();if(l==="__proto__"||l==="constructor"||l==="prototype")return;const u=A0(p.slice(i+1));a[l]=An(u)}for(let n=0;n<e.length;n++){const p=e.charCodeAt(n);d?r?r=!1:p===92?r=!0:p===34&&(d=!1):p===34?d=!0:(p===44||p===59)&&(c(n),h=n+1)}return c(e.length),a}const Hn=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim()),Cn="__Proto__",sa=t=>t==="__proto__"?Cn:t;function w0(t,a,e,h,d){if(o.isFunction(h))return h.call(t,a,e);if(d&&(a=e),!!o.isString(a)){if(o.isString(h))return a.indexOf(h)!==-1;if(o.isRegExp(h))return h.test(a)}}function Vn(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(a,e,h)=>e.toUpperCase()+h)}function Sn(t,a){const e=o.toCamelCase(" "+a);["get","set","has"].forEach(h=>{Object.defineProperty(t,h+e,{__proto__:null,value:function(d,r,c){return this[h].call(this,a,d,r,c)},configurable:!0})})}class c0{constructor(a){a&&this.set(a)}set(a,e,h){const d=this;function r(n,p,i){const s=c2(p);if(!s)return;const l=o.findKey(d,s);(!l||d[l]===void 0||i===!0||i===void 0&&d[l]!==!1)&&(d[sa(l||p)]=I2(n))}const c=(n,p)=>o.forEach(n,(i,s)=>r(i,s,p));if(o.isPlainObject(a)||a instanceof this.constructor)c(a,e);else if(o.isString(a)&&(a=a.trim())&&!Hn(a))c(Mn(a),e);else if(o.isObject(a)&&o.isSafeIterable(a)){let n=Object.create(null),p,i;for(const s of a){if(!o.isArray(s))throw new TypeError("Object iterator must return a key-value pair");i=s[0],o.hasOwnProp(n,i)?(p=n[i],n[i]=o.isArray(p)?[...p,s[1]]:[p,s[1]]):n[i]=s[1]}c(n,e)}else a!=null&&r(e,a,h);return this}get(a,e){if(a=c2(a),a){const h=o.findKey(this,a);if(h){const d=this[h];if(!e)return d;if(e===!0)return yn(d);if(o.isFunction(e))return e.call(this,d,h);if(o.isRegExp(e))return e.exec(d);throw new TypeError("parser must be boolean|regexp|function")}}}has(a,e){if(a=c2(a),a){const h=o.findKey(this,a);return!!(h&&this[h]!==void 0&&(!e||w0(this,this[h],h,e)))}return!1}delete(a,e){const h=this;let d=!1;function r(c){if(c=c2(c),c){const n=o.findKey(h,c);n&&(!e||w0(h,h[n],n,e))&&(delete h[n],d=!0)}}return o.isArray(a)?a.forEach(r):r(a),d}clear(a){const e=Object.keys(this);let h=e.length,d=!1;for(;h--;){const r=e[h];(!a||w0(this,this[r],r,a,!0))&&(delete this[r],d=!0)}return d}normalize(a){const e=this,h=Object.create(null);return o.forEach(this,(d,r)=>{const c=o.findKey(h,r);if(c){e[c]=I2(d),delete e[r];return}const n=sa(a?Vn(r):String(r).trim());n!==r&&delete e[r],e[n]=I2(d),h[n]=!0}),this}concat(...a){return this.constructor.concat(this,...a)}toJSON(a){const e=Object.create(null);return o.forEach(this,(h,d)=>{h!=null&&h!==!1&&(e[d]=a&&o.isArray(h)?h.join(", "):h)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([a,e])=>a+": "+e).join(`
`)}getSetCookie(){const a=this.get("set-cookie");return o.isArray(a)?a:a==null||a===!1?[]:[a]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(a){return a instanceof this?a:new this(a)}static parseParameters(a){return wn(a)}static concat(a,...e){const h=new this(a);return e.forEach(d=>h.set(d)),h}static accessor(a){const h=(this[ia]=this[ia]={accessors:{}}).accessors,d=this.prototype;function r(c){const n=c2(c);h[n]||(Sn(d,c),h[n]=!0)}return o.isArray(a)?a.forEach(r):r(a),this}}c0.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);o.reduceDescriptors(c0.prototype,({value:t},a)=>{let e=a[0].toUpperCase()+a.slice(1);return{get:()=>t,set(h){this[e]=h}}});o.freezeMethods(c0);const I=c0,K2="[REDACTED ****]";function Ln(t){if(o.hasOwnProp(t,"toJSON"))return!0;let a=Object.getPrototypeOf(t);for(;a&&a!==Object.prototype;){if(o.hasOwnProp(a,"toJSON"))return!0;a=Object.getPrototypeOf(a)}return!1}function bn(t,a){const e=new Set(a.map(r=>String(r).toLowerCase())),h=[],d=r=>{if(r===null||typeof r!="object"||o.isBuffer(r))return r;if(h.indexOf(r)!==-1)return;r instanceof I&&(r=r.toJSON()),h.push(r);let c;if(o.isArray(r))c=[],r.forEach((n,p)=>{const i=d(n);o.isUndefined(i)||(c[p]=i)});else{if(!o.isPlainObject(r)&&Ln(r))return h.pop(),r;c=Object.create(null);for(const[n,p]of Object.entries(r)){const i=e.has(n.toLowerCase())?K2:d(p);o.isUndefined(i)||(c[n]=i)}}return h.pop(),c};return d(t)}function la(t){try{return String(t)}catch{return""}}function _n(t){return t.errors.map(e=>{try{return e&&e.message?la(e.message):la(e)}catch{return""}}).filter(Boolean).join("; ")||t.name||"AggregateError"}const Pn=`
Caused by: `,Y0=Symbol("causeStack");function On(t,a){const e=o.hasOwnProp(t,Y0)&&t[Y0];return e&&a.endsWith(e)?a.length-e.length:-1}function Rn(t,a){try{const e=a&&a.stack;if(typeof e!="string"||!e)return;const h=t.stack;if(typeof h!="string"||!h)return;const d=Pn+e;t.stack=h+d,Object.defineProperty(t,Y0,{__proto__:null,value:d})}catch{}}class U extends Error{static from(a,e,h,d,r,c){let n=a.message;!n&&o.isArray(a.errors)&&a.errors.length&&(n=_n(a));const p=new U(n,e||a.code,h,d,r);return Object.defineProperty(p,"cause",{__proto__:null,value:a,writable:!0,enumerable:!1,configurable:!0}),p.name=a.name,Rn(p,a),a.status!=null&&p.status==null&&(p.status=a.status),c&&Object.assign(p,c),p}constructor(a,e,h,d,r){super(a),Object.defineProperty(this,"message",{__proto__:null,value:a,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,e&&(this.code=e),h&&(this.config=h),d&&(this.request=d),r&&(this.response=r,this.status=r.status)}toJSON(){const a=this.config,e=a&&o.hasOwnProp(a,"redact")?a.redact:void 0,h=o.isArray(e)&&e.length>0?bn(a,e):o.toJSONObject(a);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:h,code:this.code,status:this.status}}}U.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";U.ERR_BAD_OPTION="ERR_BAD_OPTION";U.ECONNABORTED="ECONNABORTED";U.ETIMEDOUT="ETIMEDOUT";U.ECONNREFUSED="ECONNREFUSED";U.ERR_NETWORK="ERR_NETWORK";U.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";U.ERR_DEPRECATED="ERR_DEPRECATED";U.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";U.ERR_BAD_REQUEST="ERR_BAD_REQUEST";U.ERR_CANCELED="ERR_CANCELED";U.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";U.ERR_INVALID_URL="ERR_INVALID_URL";U.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const x=U,En=null,Pd=100;function tt(t){return o.isPlainObject(t)||o.isArray(t)}function Od(t){return o.endsWith(t,"[]")?t.slice(0,-2):t}function H0(t,a,e){return t?t.concat(a).map(function(d,r){return d=Od(d),!e&&r?"["+d+"]":d}).join(e?".":""):a}function zn(t){return o.isArray(t)&&!t.some(tt)}const Tn=o.toFlatObject(o,{},null,function(a){return/^is[A-Z]/.test(a)});function n0(t,a,e){if(!o.isObject(t))throw new TypeError("target must be an object");a=a||new FormData;const h=(y,f)=>{const M=o.getSafeProp(e,y);return o.isUndefined(M)?f:M},d=h("metaTokens",!0),r=h("visitor")||m,c=h("dots",!1),n=h("indexes",!1),p=h("Blob")||typeof Blob<"u"&&Blob,i=h("maxDepth",Pd),s=p&&o.isSpecCompliantForm(a),l=[];if(!o.isFunction(r))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if(o.isDate(y))return y.toISOString();if(o.isBoolean(y))return y.toString();if(!s&&o.isBlob(y))throw new x("Blob is not supported. Use a Buffer instead.");if(o.isArrayBuffer(y)||o.isTypedArray(y)){if(s&&typeof p=="function")return new p([y]);throw new x("Blob is not supported. Use a Buffer instead.",x.ERR_NOT_SUPPORT)}return y}function v(y){if(y>i)throw new x("Object is too deeply nested ("+y+" levels). Max depth: "+i,x.ERR_FORM_DATA_DEPTH_EXCEEDED)}function A(y,f){if(i===1/0)return JSON.stringify(y);const M=[];return JSON.stringify(y,function(C,k){if(!o.isObject(k))return k;for(;M.length&&M[M.length-1]!==this;)M.pop();return M.push(k),v(f+M.length-1),k})}function m(y,f,M){let _=y;if(o.isReactNative(a)&&o.isReactNativeBlob(y))return a.append(H0(M,f,c),u(y)),!1;if(y&&!M&&typeof y=="object"){if(o.endsWith(f,"{}"))f=d?f:f.slice(0,-2),y=A(y,1);else if(o.isArray(y)&&zn(y)||(o.isFileList(y)||o.endsWith(f,"[]"))&&(_=o.toArray(y)))return f=Od(f),_.forEach(function(k,V){!(o.isUndefined(k)||k===null)&&a.append(n===!0?H0([f],V,c):n===null?f:f+"[]",u(k))}),!1}return tt(y)?!0:(a.append(H0(M,f,c),u(y)),!1)}const g=Object.assign(Tn,{defaultVisitor:m,convertValue:u,isVisitable:tt});function w(y,f,M=0){if(!o.isUndefined(y)){if(v(M),l.indexOf(y)!==-1)throw new Error("Circular reference detected in "+f.join("."));l.push(y),o.forEach(y,function(C,k){(!(o.isUndefined(C)||C===null)&&r.call(a,C,o.isString(k)?k.trim():k,f,g))===!0&&w(C,f?f.concat(k):[k],M+1)}),l.pop()}}if(!o.isObject(t))throw new TypeError("data must be an object");return w(t),a}function Ma(t){const a={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(h){return a[h]})}function St(t,a){this._pairs=[],t&&n0(t,this,a)}const Rd=St.prototype;Rd.append=function(a,e){this._pairs.push([a,e])};Rd.toString=function(a){const e=a?h=>a.call(this,h,Ma):Ma;return this._pairs.map(function(d){return e(d[0])+"="+e(d[1])},"").join("&")};function Dn(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Ed(t,a,e){if(!a)return t;t=t||"";const h=o.isFunction(e)?{serialize:e}:e,d=o.getSafeProp(h,"encode")||Dn,r=o.getSafeProp(h,"serialize");let c;if(r?c=r(a,h):c=o.isURLSearchParams(a)?a.toString():new St(a,h).toString(d),c){const n=t.indexOf("#");n!==-1&&(t=t.slice(0,n)),t+=(t.indexOf("?")===-1?"?":"&")+c}return t}const n2=Symbol("internals");function zd(t){return t?t.length:0}function ua(t){if(t)for(;t.length&&t[t.length-1]===null;)t.pop()}function kn(t){return typeof t=="string"&&t!==""&&String(Number(t))===t?Number(t):t}function p2(t,a){const e=t.handlers,h=zd(e);e!==a.handlersRef?(a.handlersRef=e,a.handlerEntries.clear()):h!==a.handlersLength&&(h?a.handlerEntries.forEach(function(r,c){e[r.index]!==r.handler&&a.handlerEntries.delete(c)}):a.handlerEntries.clear()),a.handlersLength=h}class Bn{constructor(){this.handlers=[],this[n2]={handlersRef:this.handlers,handlersLength:this.handlers.length,handlerEntries:new Map,iterationDepth:0,nextId:0}}use(a,e,h){const d={fulfilled:a,rejected:e,synchronous:h?h.synchronous:!1,runWhen:h?h.runWhen:null},r=this[n2];this.handlers==null&&(this.handlers=[]),p2(this,r);const c=r.nextId++;return this.handlers.push(d),r.handlerEntries.set(c,{handler:d,index:this.handlers.length-1}),r.handlersLength=this.handlers.length,c}eject(a){const e=this[n2];p2(this,e);const h=kn(a),d=e.handlerEntries.get(h);if(d){if(e.handlerEntries.delete(h),this.handlers[d.index]!==d.handler)return;this.handlers[d.index]=null,e.iterationDepth||(ua(this.handlers),e.handlersLength=this.handlers.length)}}clear(){this.handlers&&(this.handlers=[],p2(this,this[n2]))}forEach(a){const e=this[n2];p2(this,e),e.iterationDepth++;try{o.forEach(this.handlers,function(d){d!==null&&a(d)})}finally{--e.iterationDepth||(p2(this,e),ua(this.handlers),e.handlersLength=zd(this.handlers))}}}const fa=Bn,Lt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0,encodeBasicAuthUsername:!1},Fn=typeof URLSearchParams<"u"?URLSearchParams:St,qn=typeof FormData<"u"?FormData:null,Un=typeof Blob<"u"?Blob:null,Nn={isBrowser:!0,classes:{URLSearchParams:Fn,FormData:qn,Blob:Un},protocols:["http","https","file","blob","url","data"]},bt=typeof window<"u"&&typeof document<"u",at=typeof navigator=="object"&&navigator||void 0,In=bt&&(!at||["ReactNative","NativeScript","NS"].indexOf(at.product)<0),jn=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Zn=bt&&window.location.href||"http://localhost",$n=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:bt,hasStandardBrowserEnv:In,hasStandardBrowserWebWorkerEnv:jn,navigator:at,origin:Zn},Symbol.toStringTag,{value:"Module"})),z={...$n,...Nn};function Wn(t,a){return n0(t,new z.classes.URLSearchParams,{visitor:function(e,h,d,r){return z.isNode&&o.isBuffer(e)?(this.append(h,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...a})}const va=Pd;function Td(t){if(t>va)throw new x("FormData field is too deeply nested ("+t+" levels). Max depth: "+va,x.ERR_FORM_DATA_DEPTH_EXCEEDED)}function Gn(t){const a=[],e=/[^.[\]]+|\[([^.[\]]*)]/g;let h;for(;(h=e.exec(t))!==null;)Td(a.length),a.push(h[0]==="[]"?"":h[1]||h[0]);return a}function Dd(t){const a={},e=Object.keys(t);let h;const d=e.length;let r;for(h=0;h<d;h++)r=e[h],a[r]=t[r];return a}function kd(t){if(!o.isArray(t))return t;const a=Object.keys(t);return a.length!==t.length||a.some((e,h)=>e!==String(h))?Dd(t):t}function Kn(t){const a=[t];for(;a.length;){const e=a.pop();Object.keys(e).forEach(h=>{const d=e[h]=kd(e[h]);(o.isArray(d)||o.isPlainObject(d))&&a.push(d)})}return t}function Bd(t){function a(e,h,d,r){Td(r);let c=e[r++];if(c==="__proto__")return!0;const n=Number.isFinite(+c),p=r>=e.length;return c=!c&&o.isArray(d)?d.length:c,p?(o.hasOwnProp(d,c)?(d[c]=kd(d[c]),d[c]=o.isArray(d[c])?d[c].concat(h):[d[c],h]):d[c]=h,!n):((!o.hasOwnProp(d,c)||!o.isObject(d[c]))&&(d[c]=[]),a(e,h,d[c],r)&&o.isArray(d[c])&&(d[c]=Dd(d[c])),!n)}if(o.isFormData(t)&&o.isFunction(t.entries)){const e={};return o.forEachEntry(t,(h,d)=>{a(Gn(h),d,e,0)}),Kn(e)}return null}const Xn=Object.freeze(["get","delete","head","options","post","put","patch","purge","link","unlink","query"]),Fd=Xn,Z1=(t,a)=>t!=null&&o.hasOwnProp(t,a)?t[a]:void 0;function Jn(t,a,e){if(o.isString(t))try{return(a||JSON.parse)(t),o.trim(t)}catch(h){if(h.name!=="SyntaxError")throw h}return(e||JSON.stringify)(t)}const _t={transitional:Lt,adapter:["xhr","http","fetch"],transformRequest:[function(a,e){const h=e.getContentType()||"",d=h.indexOf("application/json")>-1,r=o.isObject(a);if(r&&o.isHTMLForm(a)&&(a=new FormData(a)),o.isFormData(a))return d?JSON.stringify(Bd(a)):a;if(o.isArrayBuffer(a)||o.isBuffer(a)||o.isStream(a)||o.isFile(a)||o.isBlob(a)||o.isReadableStream(a))return a;if(o.isArrayBufferView(a))return a.buffer;if(o.isURLSearchParams(a))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),a.toString();let n;if(r){const p=Z1(this,"formSerializer");if(h.indexOf("application/x-www-form-urlencoded")>-1)return Wn(a,p).toString();if((n=o.isFileList(a))||h.indexOf("multipart/form-data")>-1){const i=Z1(this,"env"),s=i&&i.FormData;return n0(n?{"files[]":a}:a,s&&new s,p)}}return r||d?(e.setContentType("application/json",!1),Jn(a)):a}],transformResponse:[function(a){const e=Z1(this,"transitional")||_t.transitional,h=e&&e.forcedJSONParsing,d=Z1(this,"responseType"),r=d==="json";if(o.isResponse(a)||o.isReadableStream(a))return a;if(a&&o.isString(a)&&(h&&!d||r)){const n=!(e&&e.silentJSONParsing)&&r;try{return JSON.parse(a,Z1(this,"parseReviver"))}catch(p){if(n)throw p.name==="SyntaxError"?x.from(p,x.ERR_BAD_RESPONSE,this,null,Z1(this,"response")):p}}return a}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:z.classes.FormData,Blob:z.classes.Blob},validateStatus:function(a){return a>=200&&a<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};o.forEach(Fd,t=>{_t.headers[t]={}});const Pt=_t;function C0(t,a){const e=this||Pt,h=a||e,d=I.from(h.headers);let r=h.data;return o.forEach(t,function(n){r=n.call(e,r,d.normalize(),a?a.status:void 0)}),d.normalize(),r}function qd(t){return!!(t&&t.__CANCEL__)}class Qn extends x{constructor(a,e,h){super(a??"canceled",x.ERR_CANCELED,e,h),this.name="CanceledError",this.__CANCEL__=!0}}const L2=Qn;function Ud(t,a,e){const h=e.config.validateStatus;!e.status||!h||h(e.status)?t(e):a(new x("Request failed with status code "+e.status,e.status>=400&&e.status<500?x.ERR_BAD_REQUEST:x.ERR_BAD_RESPONSE,e.config,e.request,e))}const Yn=/[\t\n\r]/g;function Nd(t){if(typeof t!="string")return t;let a=0;for(;a<t.length&&t.charCodeAt(a)<=32;)a++;return t.slice(a).replace(Yn,"")}function V0(t){const a=/^([-+\w]{1,25}):(?:\/\/)?/.exec(t);return a&&a[1].toLowerCase()||""}const ma=t=>{try{return decodeURIComponent(t)}catch{return t}},Id=z.hasStandardBrowserEnv?{write(t,a,e,h,d,r,c){if(typeof document>"u")return;const n=[`${t}=${encodeURIComponent(a)}`];o.isNumber(e)&&n.push(`expires=${new Date(e).toUTCString()}`),o.isString(h)&&n.push(`path=${h}`),o.isString(d)&&n.push(`domain=${d}`),r===!0&&n.push("secure"),o.isString(c)&&n.push(`SameSite=${c}`),document.cookie=n.join("; ")},read(t){if(typeof document>"u")return null;const a=document.cookie;if(!a)return null;const e=a.split(";");for(let h=0;h<e.length;h++){const d=e[h].replace(/^\s+/,""),r=d.indexOf("=");if(r!==-1&&d.slice(0,r)===t)return ma(d.slice(r+1))}return null},async readAsync(t){try{const a=typeof window<"u"&&window.cookieStore;if(a&&o.isFunction(a.get)){const e=await a.get(t);return e?ma(e.value):null}}catch{}return this.read(t)},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},async readAsync(){return null},remove(){}};function t3(t,a){t=t||10;const e=new Array(t),h=new Array(t);let d=0,r=0,c;return a=a!==void 0?a:1e3,function(p){const i=Date.now(),s=h[r];c||(c=i),e[d]=p,h[d]=i;let l=r,u=0;for(;l!==d;)u+=e[l++],l=l%t;if(d=(d+1)%t,d===r&&(r=(r+1)%t),i-c<a)return;const v=s&&i-s;return v?Math.round(u*1e3/v):void 0}}function a3(t,a){let e=0,h=1e3/a,d,r;const c=(s,l=Date.now())=>{e=l,d=null,r&&(clearTimeout(r),r=null),t(...s)};return[(...s)=>{const l=Date.now(),u=l-e;u>=h?c(s,l):(d=s,r||(r=setTimeout(()=>{r=null,c(d)},h-u)))},()=>d&&c(d),(...s)=>c(s)]}const X2=(t,a,e=3)=>{let h=0;const d=t3(50,250);return a3(r=>{if(!r||!o.isNumber(r.loaded))return;const c=r.loaded,n=r.lengthComputable?r.total:void 0,p=Math.max(0,n!=null?Math.min(c,n):c),i=Math.max(0,p-h),s=d(i);h=Math.max(h,p);const l={loaded:p,total:n,progress:n?p/n:void 0,bytes:i,rate:s||void 0,estimated:s&&n?(n-p)/s:void 0,event:r,lengthComputable:n!=null,[a?"download":"upload"]:!0};t(l)},e)},xa=(t,a)=>{const e=t!=null;return[h=>a[0]({lengthComputable:e,total:t,loaded:h}),a[1]]},ya=(t,a=o.asap)=>(...e)=>a(()=>t(...e)),e3=z.hasStandardBrowserEnv?(t=>a=>(a=new URL(a,document.baseURI||z.origin),t.protocol===a.protocol&&t.host===a.host&&t.port===a.port))(new URL(z.origin)):()=>!0;function h3(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function d3(t,a){if(!a)return t;let e=t.length;for(;e>0&&t.charCodeAt(e-1)===47;)e--;return t.slice(0,e)+"/"+a.replace(/^\/+/,"")}const r3=/^https?:(?!\/\/)/i;function c3(t){return t&&t.replace(/(^|&)([^=&]*=)?[^&]+/g,(a,e,h="")=>`${e}${h}${K2}`)}function n3(t){const a=t.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${K2}@`),e=a.indexOf("#"),d=(e===-1?a:a.slice(0,e)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${K2}`);return e===-1?d:`${d}#${c3(a.slice(e+1))}`}function ga(t,a){if(typeof t=="string"){const e=Nd(t);if(r3.test(e))throw new x(`Invalid URL ${JSON.stringify(n3(e))}: missing "//" after protocol`,x.ERR_INVALID_URL,a)}}function jd(t,a,e,h){ga(a,h);let d=!h3(a);return t&&(d||e===!1)?(ga(t,h),d3(t,a)):a}function p3(t){const a=[{value:t}],e=new WeakSet,h=new WeakSet;for(;a.length;){const{value:d,done:r}=a.pop();if(!o.isPlainObject(d)&&!o.isArray(d))continue;if(r){e.delete(d);continue}if(e.has(d))throw new x("Circular reference detected in params",x.ERR_BAD_OPTION_VALUE);if(h.has(d))continue;h.add(d),e.add(d),a.push({value:d,done:!0});const c=Object.keys(d);Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor&&Object.getOwnPropertySymbols(d).forEach(n=>{const p=Object.getOwnPropertyDescriptor(d,n);p&&p.enumerable&&c.push(n)}),c.forEach(n=>{if(n==="__proto__"||n==="constructor"||n==="prototype"){const p=Object.getOwnPropertyDescriptor(d,n);p&&o.hasOwnProp(p,"value")&&a.push({value:p.value})}else a.push({value:d[n]})})}}const Aa=t=>t instanceof I?{...t}:t,et=t=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(t).concat(Object.getOwnPropertySymbols(t).filter(a=>{const e=Object.getOwnPropertyDescriptor(t,a);return e&&e.enumerable})):Object.keys(t);function o3(t,a){const e=[],h=new WeakMap,d={};function r(n,p){if(!o.isPlainObject(p))return o.isArray(p)?p.slice():p;const i=o.isPlainObject(n)?n:d;let s=h.get(p);if(s||(s=new WeakMap,h.set(p,s)),s.has(i))return s.get(i);const l={};return s.set(i,l),e.push({base:i,source:p,result:l}),l}const c=o.isUndefined(a)?r(void 0,t):r(t,a);for(;e.length;){const{base:n,source:p,result:i}=e.pop(),s=new Set(et(n)),l=new Set(et(p));new Set([...s,...l]).forEach(v=>{if(v==="__proto__"||v==="constructor"||v==="prototype")return;const A=l.has(v),m=A?p[v]:void 0,g=(!A||o.isPlainObject(m))&&s.has(v)?n[v]:void 0;i[v]=A?r(g,m):r(void 0,g)})}return p3(c),c}function y1(t,a,e,h){return o.isPlainObject(t)&&o.isPlainObject(a)?o.merge.call({caseless:h},t,a):o.isPlainObject(a)?o.merge({},a):o.isArray(a)?a.slice():a}function Zd(t,a,e,h){if(o.isUndefined(a)){if(!o.isUndefined(t))return y1(void 0,t,e,h)}else return y1(t,a,e,h)}function S0(t,a){if(!o.isUndefined(a))return y1(void 0,a)}function P(t,a){if(o.isUndefined(a)){if(!o.isUndefined(t))return y1(void 0,t)}else return y1(void 0,a)}function i3(t,a,e){const h=o.hasOwnProp(a,"transitional")?a.transitional:void 0;if(!o.isUndefined(h))if(o.isPlainObject(h)){if(o.hasOwnProp(h,e))return h[e]}else return;const d=o.hasOwnProp(t,"transitional")?t.transitional:void 0;if(o.isPlainObject(d)&&o.hasOwnProp(d,e))return d[e]}function ht(t,a,e,h,d){if(o.hasOwnProp(d,e))return y1(t,a);if(o.hasOwnProp(h,e))return y1(void 0,t)}function s3(t,a,e){return Zd(Aa(t),Aa(a),e,!0)}const l3=Object.freeze({__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0}),wa={url:S0,method:S0,data:S0,baseURL:P,transformRequest:P,transformResponse:P,params:o3,paramsSerializer:P,timeout:P,timeoutErrorMessage:P,withCredentials:P,withXSRFToken:P,adapter:P,responseType:P,xsrfCookieName:P,xsrfHeaderName:P,onUploadProgress:P,onDownloadProgress:P,decompress:P,maxContentLength:P,maxBodyLength:P,beforeRedirect:P,transport:P,httpAgent:P,httpsAgent:P,cancelToken:P,socketPath:P,allowedSocketPaths:P,responseEncoding:P,validateStatus:ht,headers:s3};function R1(t,a){t=t||{},a=a||{};const e=Object.create(null);Object.defineProperty(e,"hasOwnProperty",l3);const h=et({...t,...a});for(let d=0,r=h.length;d<r;d++){const c=h[d];if(c==="__proto__"||c==="constructor"||c==="prototype")continue;const n=o.hasOwnProp(wa,c)?wa[c]:Zd,p=o.hasOwnProp(t,c)?t[c]:void 0,i=o.hasOwnProp(a,c)?a[c]:void 0,s=n===ht?n(p,i,c,t,a):n(p,i,c);o.isUndefined(s)&&n!==ht||(e[c]=s)}return o.hasOwnProp(a,"validateStatus")&&o.isUndefined(a.validateStatus)&&i3(t,a,"validateStatusUndefinedResolves")===!1&&(o.hasOwnProp(t,"validateStatus")?e.validateStatus=y1(void 0,t.validateStatus):delete e.validateStatus),e}const M3=["content-type","content-length"];function u3(t,a,e){if(e!=="content-only"){t.set(a);return}Object.entries(a||{}).forEach(([h,d])=>{M3.includes(h.toLowerCase())&&t.set(h,d)})}const Ha=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(a,e)=>String.fromCharCode(parseInt(e,16))),f3=t=>Id.read(t);function $d(t,a=f3){const e=R1({},t),h=v=>o.hasOwnProp(e,v)?e[v]:void 0,d=h("data");let r=h("withXSRFToken");const c=h("xsrfHeaderName"),n=h("xsrfCookieName");let p=h("headers");const i=h("auth"),s=h("baseURL"),l=h("allowAbsoluteUrls"),u=h("url");if(e.headers=p=I.from(p),e.url=Ed(jd(s,u,l,e),h("params"),h("paramsSerializer")),i){const v=o.getSafeProp(i,"username")||"",A=o.getSafeProp(i,"password")||"",m=h("transitional"),g=m&&o.hasOwnProp(m,"encodeBasicAuthUsername")&&m.encodeBasicAuthUsername===!0;try{p.set("Authorization","Basic "+btoa((g?Ha(v):v)+":"+(A?Ha(A):"")))}catch(w){throw x.from(w,x.ERR_BAD_OPTION_VALUE,t)}}if(o.isFormData(d)){const v=o.getSafeProp(d,"getHeaders");z.hasStandardBrowserEnv||z.hasStandardBrowserWebWorkerEnv||o.isReactNative(d)?p.setContentType(void 0):o.isFunction(v)&&u3(p,v.call(d),h("formDataHeaderPolicy"))}if(z.hasStandardBrowserEnv&&(o.isFunction(r)&&(r=r(e)),r===!0||r==null&&e3(e.url))){const A=c&&n&&a(n);A&&p.set(c,A)}return e}const v3=typeof XMLHttpRequest<"u",m3=v3&&function(t){return new Promise(function(e,h){let d;try{const V=z.hasStandardBrowserEnv&&typeof window<"u"&&window.cookieStore;d=V&&o.isFunction(V.get)}catch{}let r;const c=$d(t,d?V=>(r=V,null):void 0);let n=c.data;const p=I.from(c.headers).normalize();let{responseType:i,onUploadProgress:s,onDownloadProgress:l}=c,u,v,A,m,g,w,y;function f(){clearTimeout(v);try{g&&g()}catch(V){setTimeout(()=>{throw V})}try{w&&w()}catch(V){setTimeout(()=>{throw V})}M&&(m&&M.removeEventListener("progress",m),M.upload&&(A&&M.upload.removeEventListener("progress",A),g&&M.upload.removeEventListener("loadend",g))),c.cancelToken&&c.cancelToken.unsubscribe(u),c.signal&&c.signal.removeEventListener("abort",u)}let M=new XMLHttpRequest;M.open(c.method.toUpperCase(),c.url,!0),M.timeout=c.timeout;function _(V){if(!M)return;if(M.status===0&&(V0(Nd(c.url))||V0(z.origin))!=="file"&&!(M.responseURL&&M.responseURL.startsWith("file:"))){h(new x("Request aborted",x.ECONNABORTED,t,M)),f(),M=null;return}try{V?y&&y(V):w&&w()}catch(F){setTimeout(()=>{throw F})}if(!M)return;const R=I.from("getAllResponseHeaders"in M&&M.getAllResponseHeaders()),E={data:!i||i==="text"||i==="json"?M.responseText:M.response,status:M.status,statusText:M.statusText,headers:R,config:t,request:M};Ud(function(G){e(G),f()},function(G){h(G),f()},E),M=null}if("onloadend"in M?M.onloadend=_:M.onreadystatechange=function(){!M||M.readyState!==4||M.status===0&&!(M.responseURL&&M.responseURL.startsWith("file:"))||setTimeout(_)},M.onabort=function(){M&&(h(new x("Request aborted",x.ECONNABORTED,t,M)),f(),M=null)},M.onerror=function(R){const W=R&&R.message?R.message:"Network Error",E=new x(W,x.ERR_NETWORK,t,M);E.event=R||null,h(E),f(),M=null},M.ontimeout=function(){if(!M)return;let R=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded";const W=c.transitional||Lt;c.timeoutErrorMessage&&(R=c.timeoutErrorMessage),h(new x(R,W.clarifyTimeoutError?x.ETIMEDOUT:x.ECONNABORTED,t,M)),f(),M=null},n===void 0&&p.setContentType(null),o.isUndefined(c.withCredentials)||(M.withCredentials=!!c.withCredentials),i&&i!=="json"&&(M.responseType=c.responseType),l&&([m,w,y]=X2(l,!0),M.addEventListener("progress",m)),s&&M.upload&&([A,g]=X2(s),M.upload.addEventListener("progress",A),M.upload.addEventListener("loadend",g)),c.cancelToken||c.signal){if(u=V=>{if(!M)return;h(!V||V.type?new L2(null,t,M):V);const R=M;f(),M=null,R.abort()},c.cancelToken&&c.cancelToken.subscribe(u),!M)return;c.signal&&(c.signal.aborted?u():c.signal.addEventListener("abort",u))}if(!M)return;const C=V0(c.url);if(C&&!z.protocols.includes(C)){h(new x("Unsupported protocol "+C+":",x.ERR_BAD_REQUEST,t)),f();return}const k=()=>{M&&("setRequestHeader"in M&&o.forEach(_d(p),function(R,W){M.setRequestHeader(W,R)}),M.send(n||null))};if(r){const V=typeof performance<"u"&&o.isFunction(performance.now)?()=>performance.now():Date.now,R=M.timeout>0?V()+Number(M.timeout):void 0,W=()=>{if(!M)return;const E=M;E.ontimeout(),E.abort()};if(R!==void 0){const E=()=>{const F=R-V();F>0?v=setTimeout(E,Math.min(F,2147483647)):W()};E()}Id.readAsync(r).then(E=>{if(M){if(R!==void 0&&V()>=R){W();return}if(E){const F=o.hasOwnProp(c,"xsrfHeaderName")&&c.xsrfHeaderName;p.set(F,E)}k()}}).catch(E=>{M&&(h(x.from(E,null,t,M)),f(),M=null)})}else k()})},x3=(t,a)=>{if(t=t?t.filter(Boolean):[],!a&&!t.length)return;const e=new AbortController;let h=!1;const d=function(p){if(!h){h=!0,c();const i=p instanceof Error?p:this.reason;e.abort(i instanceof x?i:new L2(i instanceof Error?i.message:i))}};let r=a&&setTimeout(()=>{r=null,d(new x(`timeout of ${a}ms exceeded`,x.ETIMEDOUT))},a);const c=()=>{t&&(r&&clearTimeout(r),r=null,t.forEach(p=>{const i=o.getSafeProp(p,"unsubscribe");o.isFunction(i)?i.call(p,d):p.removeEventListener("abort",d)}),t=null)};t.forEach(p=>{if(!h){if(p.aborted){d.call(p);return}p.addEventListener("abort",d,{once:!0})}});const{signal:n}=e;return n.unsubscribe=()=>o.asap(c),n},y3=x3,g3=function*(t,a){let e=t.byteLength;if(!a||e<a){yield t;return}let h=0,d;for(;h<e;)d=h+a,yield t.slice(h,d),h=d},A3=async function*(t,a){for await(const e of w3(t))yield*g3(e,a)},w3=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const a=t.getReader();try{for(;;){const{done:e,value:h}=await a.read();if(e)break;yield h}}finally{await a.cancel()}},Ca=(t,a,e,h)=>{const d=A3(t,a);let r=0,c,n=p=>{c||(c=!0,h&&h(p))};return new ReadableStream({async pull(p){try{const{done:i,value:s}=await d.next();if(i){n(),p.close();return}let l=s.byteLength;if(e){let u=r+=l;e(u)}p.enqueue(new Uint8Array(s))}catch(i){throw n(i),i}},cancel(p){return n(p),d.return()}},{highWaterMark:2})},m1=`\r
`,Va=t=>String(t).replace(/\r\n|\r|\n/g,m1),Sa=t=>String(t).replace(/[\r\n"]/g,a=>a==="\r"?"%0D":a===`
`?"%0A":"%22"),o2=(t,a)=>{let e=0;for(let h=0;h<t.length;h++){const d=t.charCodeAt(h);a&&(d===13||d===10)?(d===13&&t.charCodeAt(h+1)===10&&h++,e+=2):d<128?e++:d<2048?e+=2:d>=55296&&d<=56319&&t.charCodeAt(h+1)>=56320&&t.charCodeAt(h+1)<=57343?(e+=4,h++):e+=3}return e};class j2 extends TypeError{constructor(a,e){super(a),this.name="FormDataError",this.reason=e}}function H3(t,a,e,h,d){if(!o.isFunction(a))throw new j2("Blob is not supported","blob");if(!o.isString(d)||!/^[A-Za-z0-9'()+_,./:=? -]{1,70}$/.test(d)||/ $/.test(d))throw new j2("Invalid multipart boundary","boundary");const r="--"+d+"--"+m1;let c=r.length;const n=[],p=s=>{if(c+s>e)throw h()};p(0);for(const[s,l]of t){const u=o.isString(l),v=u?o2(l,!0):l.size;if(!Number.isFinite(v)||v<0)throw new j2("Unsupported FormData part size","part");p(v+o2(s,!0)+(!u&&l.name?o2(l.name,!1):0)+(!u&&l.type?o2(l.type,!1):0));let A="--"+d+m1+'Content-Disposition: form-data; name="'+Sa(Va(s))+'"';u||(A+='; filename="'+Sa(o.isString(l.name)?l.name:"blob")+'"'+m1+"Content-Type: "+String(l.type||"application/octet-stream").replace(/[\r\n]/g,"")),A+=m1+m1;const m=o2(A,!1)+v+m1.length;p(m),c+=m,n.push({header:A,value:l,isString:u})}const i=[];for(const s of n)i.push(s.header,s.isString?Va(s.value):s.value,m1);return i.push(r),new a(i,{type:"multipart/form-data; boundary="+d})}function C3(t,a,e,h,d){if(!o.isFunction(a))throw new x("Blob is not supported",x.ERR_NOT_SUPPORT);if(d===void 0)if(o.isFunction(z.generateString))d="axios-"+z.generateString(36,"0123456789abcdef");else{const r=o.global.crypto;if(!r||!o.isFunction(r.getRandomValues))throw new x("Random byte generation is not supported",x.ERR_NOT_SUPPORT);const c=new Uint8Array(18);r.getRandomValues(c),d="axios-"+Array.from(c,n=>("0"+n.toString(16)).slice(-2)).join("")}try{return H3(t,a,e,h,d)}catch(r){if(r instanceof j2){const c=r.reason==="boundary"?x.ERR_BAD_OPTION_VALUE:x.ERR_BAD_REQUEST;throw new x(r.message,c)}throw r}}const La=t=>t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102,Wd=(t,a,e)=>a+2<e&&La(t.charCodeAt(a+1))&&La(t.charCodeAt(a+2)),ba=t=>t<=57?t-48:(t&223)-55,V3=t=>t>=65&&t<=90||t>=97&&t<=122||t>=48&&t<=57||t===43||t===47||t===45||t===95,S3=t=>t===9||t===10||t===12||t===13||t===32,L3=t=>{const a=Math.floor(t/4),e=t%4;return a*3+(e===2?1:e===3?2:0)},b3=t=>{const a=t.length;let e=0;return a>0&&t.charCodeAt(a-1)===61&&(e++,a>1&&t.charCodeAt(a-2)===61&&e++),Math.floor((a-e)*3/4)},_3=t=>{const a=t.length;let e=0,h=0,d=!1;for(let r=0;r<a;r++){let c=t.charCodeAt(r);if(c===37&&Wd(t,r,a)&&(c=ba(t.charCodeAt(r+1))*16+ba(t.charCodeAt(r+2)),r+=2),!S3(c)){if(c===61){h++;continue}if(!V3(c)||h>0){d=!0;continue}e++}}return d||h>2||h>0&&(e+h)%4!==0||e%4===1?b3(t):L3(e)},P3=(t,a,e)=>{if(!t||typeof t!="string"||!/^data:/i.test(t))return 0;const h=t.indexOf(",");if(h<0)return 0;const d=t.slice(5,h),r=t.slice(h+1);if(e.test(d))return a(r);let n=0;for(let p=0,i=r.length;p<i;p++){const s=r.charCodeAt(p);if(s===37&&Wd(r,p,i))n+=1,p+=2;else if(s<128)n+=1;else if(s<2048)n+=2;else if(s>=55296&&s<=56319&&p+1<i){const l=r.charCodeAt(p+1);l>=56320&&l<=57343?(n+=4,p++):n+=3}else n+=3}return n};function O3(t){const a=typeof t=="string"?t.indexOf("#"):-1;return P3(a===-1?t:t.slice(0,a),_3,/; *base64[\t\n\f\r ]*$/i)}const Ot="1.21.0",_a=64*1024,Pa={cache:"default",redirect:"follow",referrer:"about:client",referrerPolicy:"",mode:"cors",integrity:"",keepalive:!1,priority:"auto",window:null},{isFunction:D2}=o,R3=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(a,e)=>String.fromCharCode(parseInt(e,16))),Oa=t=>{if(!o.isString(t))return t;try{return decodeURIComponent(t)}catch{return t}},k2=(t,...a)=>{try{return!!t(...a)}catch{return!1}},E3=t=>{const a=t.indexOf("://");let e=t;return a!==-1&&(e=e.slice(a+3)),e.includes("@")||e.includes(":")},z3=t=>{const a=o.global!==void 0&&o.global!==null?o.global:globalThis,{ReadableStream:e,TextEncoder:h}=a;t=o.merge.call({skipUndefined:!0},{Request:a.Request,Response:a.Response,Blob:a.Blob},t);const d=o.hasOwnProp(t,"fetch")?t.fetch:void 0,{Request:r,Response:c,Blob:n}=t,p=d?D2(d):typeof fetch=="function",i=D2(r),s=D2(c);if(!p)return!1;const l=p&&D2(e),u=p&&(typeof h=="function"?(f=>M=>f.encode(M))(new h):async f=>new Uint8Array(await new r(f).arrayBuffer())),v=i&&l&&k2(()=>{let f=!1;const M=new r(z.origin,{body:new e,method:"POST",get duplex(){return f=!0,"half"}}),_=M.headers.has("Content-Type");return M.body!=null&&M.body.cancel(),f&&!_}),A=s&&l&&k2(()=>o.isReadableStream(new c("").body)),m=Object.assign(Object.create(null),Pa);i&&!k2(()=>new r(z.origin,m))&&(delete m.cache,k2(()=>new r(z.origin,m))||(m.cache=Pa.cache));const g={stream:A&&(f=>f.body)};p&&["text","arrayBuffer","blob","formData","stream"].forEach(f=>{!g[f]&&(g[f]=(M,_)=>{let C=M&&M[f];if(C)return C.call(M);throw new x(`Response type '${f}' is not supported`,x.ERR_NOT_SUPPORT,_)})});const w=async f=>{if(f==null)return 0;if(o.isBlob(f))return f.size;if(o.isArrayBufferView(f)||o.isArrayBuffer(f))return f.byteLength;if(o.isURLSearchParams(f)&&(f=f+""),o.isString(f))return(await u(f)).byteLength},y=async(f,M)=>{const _=o.toFiniteNumber(f.getContentLength());return _??w(M)};return async f=>{let{url:M,method:_,data:C,signal:k,cancelToken:V,timeout:R,onDownloadProgress:W,onUploadProgress:E,responseType:F,headers:G,withCredentials:R2="same-origin",fetchOptions:m0,maxContentLength:e1,maxBodyLength:a2,maxRedirects:Mc}=$d(f);const e2=o.isNumber(e1)&&e1>-1,h2=o.isNumber(a2)&&a2>-1,ha=L=>o.hasOwnProp(f,L)?f[L]:void 0;let da=d||fetch;F=F?(F+"").toLowerCase():"text";let v1=y3([k,V&&V.toAbortSignal()],R),q=null;const g1=v1&&v1.unsubscribe&&(()=>{v1.unsubscribe()});let A1,d2=null,x0=null;const y0=()=>new x("Request body larger than maxBodyLength limit",x.ERR_BAD_REQUEST,f,q);try{let L;const X=ha("auth");if(X){const H=o.getSafeProp(X,"username")||"",N=o.getSafeProp(X,"password")||"";L={username:H,password:N}}let K;if(E3(M)){if(K=new URL(M,z.origin),!L&&(K.username||K.password)){const H=Oa(K.username),N=Oa(K.password);L={username:H,password:N}}(K.username||K.password)&&(K.username="",K.password="",M=K.href)}if(L&&(G.delete("authorization"),G.set("Authorization","Basic "+btoa(R3((L.username||"")+":"+(L.password||""))))),e2&&K&&K.protocol==="data:"&&O3(K.href)>e1)throw new x("maxContentLength size of "+e1+" exceeded",x.ERR_BAD_RESPONSE,f,q);const E2=o.isSpecCompliantForm(C)&&I.from(ha("headers")).getContentType();let z2;if(o.isString(E2)&&/^multipart\/form-data(?:\s*;|$)/i.test(E2.trim())){const H=I.parseParameters(E2);o.hasOwnProp(H,"boundary")&&(z2=H.boundary)}if(o.isSpecCompliantForm(C)&&_!=="get"&&_!=="head"&&(h2||E&&v||z2!==void 0)&&(C=C3(C,n,h2?a2:1/0,y0,z2),G.setContentType(z2===void 0?C.type:E2),A1=C.size),h2&&_!=="get"&&_!=="head"){const H=await w(C);if(typeof H=="number"&&isFinite(H)&&(A1=H,H>a2))throw y0()}const T2=h2&&(o.isReadableStream(C)||o.isStream(C)),ra=(H,N,j1)=>Ca(H,_a,w1=>{if(h2&&w1>a2)throw d2=y0();N&&N(w1)},j1);if(v&&_!=="get"&&_!=="head"&&(E||T2)){if(A1=A1??await y(G,C),A1!==0||T2){let H=new r(M,{method:"POST",body:C,duplex:"half"}),N;if(o.isFormData(C)&&(N=H.headers.get("content-type"))&&G.setContentType(N),H.body){const[j1,w1]=E&&xa(A1,X2(ya(E)))||[];C=ra(H.body,j1,w1)}}}else if(T2&&!i&&l&&_!=="get"&&_!=="head")C=ra(C);else if(T2&&i&&!v&&_!=="get"&&_!=="head")throw new x("Stream request bodies are not supported by the current fetch implementation",x.ERR_NOT_SUPPORT,f,q);o.isString(R2)||(R2=R2?"include":"omit");const uc=i&&"credentials"in r.prototype;if(o.isFormData(C)){const H=G.getContentType();H&&/^multipart\/form-data/i.test(H)&&!/boundary=/i.test(H)&&G.delete("content-type")}G.set("User-Agent","axios/"+Ot,!1);const Y=m0==null?m0:Object.assign(Object.create(null),m0);Y&&(delete Y.body,delete Y.headers,delete Y.method,delete Y.signal,delete Y.duplex,delete Y.credentials);const c1=Object.assign(Object.create(null),Y,{signal:v1,method:_.toUpperCase(),headers:_d(G.normalize()),body:C,duplex:"half",credentials:uc?R2:void 0});i&&(o.forEach(m,(H,N)=>{c1[N]===void 0&&(c1[N]=H)}),c1.signal===void 0&&(c1.signal=null),c1.body===void 0&&(c1.body=null)),Mc===0&&(c1.redirect="manual",Y&&(Y.redirect="manual")),q=i&&new r(M,c1);let n1=await(i?da(q,Y):da(M,c1));const ca=I.from(n1.headers);if(e2){const H=o.toFiniteNumber(ca.getContentLength());if(H!=null&&H>e1)throw new x("maxContentLength size of "+e1+" exceeded",x.ERR_BAD_RESPONSE,f,q)}const g0=A&&(F==="stream"||F==="response");if(A&&n1.body&&(W||e2||g0&&g1)){const H={};["status","statusText","headers"].forEach(r2=>{H[r2]=n1[r2]});const N=o.toFiniteNumber(ca.getContentLength()),[j1,w1]=W&&xa(N,X2(ya(W),!0))||[];let na=0;const fc=r2=>{if(e2&&(na=r2,na>e1))throw x0=new x("maxContentLength size of "+e1+" exceeded",x.ERR_BAD_RESPONSE,f,q);j1&&j1(r2)};n1=new c(Ca(n1.body,_a,fc,()=>{w1&&w1(),g1&&g1()}),H)}F=F||"text";let p1=await g[o.findKey(g,F)||"text"](n1,f);if(e2&&!A&&!g0){let H;if(p1!=null&&(typeof p1.byteLength=="number"?H=p1.byteLength:typeof p1.size=="number"?H=p1.size:typeof p1=="string"&&(H=typeof h=="function"?new h().encode(p1).byteLength:p1.length)),typeof H=="number"&&H>e1)throw new x("maxContentLength size of "+e1+" exceeded",x.ERR_BAD_RESPONSE,f,q)}return!g0&&g1&&g1(),await new Promise((H,N)=>{Ud(H,N,{data:p1,headers:I.from(n1.headers),status:n1.status,statusText:n1.statusText,config:f,request:q})})}catch(L){if(g1&&g1(),v1&&v1.aborted&&v1.reason instanceof x){const X=v1.reason;throw X.config=f,q&&(X.request=q),L!==X&&Object.defineProperty(X,"cause",{__proto__:null,value:L,writable:!0,enumerable:!1,configurable:!0}),X}if(d2)throw q&&!d2.request&&(d2.request=q),d2;if(x0)throw x0;if(L instanceof x)throw q&&!L.request&&(L.request=q),L;if(L&&L.name==="TypeError"&&/Load failed|fetch/i.test(L.message)){const X=new x("Network Error",x.ERR_NETWORK,f,q,L&&L.response);throw Object.defineProperty(X,"cause",{__proto__:null,value:L.cause||L,writable:!0,enumerable:!1,configurable:!0}),X}throw x.from(L,L&&L.code,f,q,L&&L.response)}}},T3=new Map,Gd=t=>{const a=Object.create(null),e=t&&o.hasOwnProp(t,"env")&&t.env;["fetch","Request","Response","Blob"].forEach(v=>{e&&o.hasOwnProp(e,v)&&(a[v]=e[v])});const{fetch:h,Request:d,Response:r,Blob:c}=a,n=[d,r,h,c];let p=n.length,i=p,s,l,u=T3;for(;i--;)s=n[i],l=u.get(s),l===void 0&&u.set(s,l=i?new Map:z3(a)),u=l;return l};Gd();const Rt={http:En,xhr:m3,fetch:{get:Gd}};o.forEach(Rt,(t,a)=>{if(t){try{Object.defineProperty(t,"name",{__proto__:null,value:a})}catch{}Object.defineProperty(t,"adapterName",{__proto__:null,value:a})}});const Ra=t=>`- ${t}`,D3=t=>o.isFunction(t)||t===null||t===!1;function k3(t,a){t=o.isArray(t)?t:[t];const{length:e}=t;let h,d;const r={};for(let c=0;c<e;c++){h=t[c];let n;if(d=h,!D3(h)&&(d=Rt[(n=String(h)).toLowerCase()],d===void 0))throw new x(`Unknown adapter '${n}'`);if(d&&(o.isFunction(d)||(d=d.get(a))))break;r[n||"#"+c]=d}if(!d){const c=Object.entries(r).map(([p,i])=>`adapter ${p} `+(i===!1?"is not supported by the environment":"is not available in the build"));let n=e?c.length>1?`since :
`+c.map(Ra).join(`
`):" "+Ra(c[0]):"as no adapter specified";throw new x("There is no suitable adapter to dispatch the request "+n,x.ERR_NOT_SUPPORT)}return d}const Kd={getAdapter:k3,adapters:Rt};function L0(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new L2(null,t)}function Ea(t){return Math.max(0,Date.now()-t)}function b0(t){const a=o.toSafeFlatObject(t);L0(a),a.headers=I.from(o.getSafeProp(a,"headers")),a.data=C0.call(a,a.transformRequest),["post","put","patch"].indexOf(a.method)!==-1&&a.headers.setContentType("application/x-www-form-urlencoded",!1);const e=Kd.getAdapter(a.adapter||Pt.adapter,a),h=Date.now();return e(a).then(function(r){L0(a),r.duration=Ea(h),a.response=r;try{r.data=C0.call(a,a.transformResponse,r)}finally{delete a.response}return r.headers=I.from(r.headers),r},function(r){if(!qd(r)&&(L0(a),r&&r.response)){r.response.duration=Ea(h),a.response=r.response;try{r.response.data=C0.call(a,a.transformResponse,r.response)}finally{delete a.response}r.response.headers=I.from(r.response.headers)}return Promise.reject(r)})}const p0={};["object","boolean","number","function","string","symbol"].forEach((t,a)=>{p0[t]=function(h){return typeof h===t||"a"+(a<1?"n ":" ")+t}});const za={};p0.transitional=function(a,e,h){function d(r,c){return"[Axios v"+Ot+"] Transitional option '"+r+"'"+c+(h?". "+h:"")}return(r,c,n)=>{if(a===!1)throw new x(d(c," has been removed"+(e?" in "+e:"")),x.ERR_DEPRECATED);return e&&!za[c]&&(za[c]=!0,console.warn(d(c," has been deprecated since v"+e+" and will be removed in the near future"))),a?a(r,c,n):!0}};p0.spelling=function(a){return(e,h)=>(console.warn(`${h} is likely a misspelling of ${a}`),!0)};function B3(t,a,e){if(typeof t!="object"||t===null)throw new x("options must be an object",x.ERR_BAD_OPTION_VALUE);const h=Object.keys(t);let d=h.length;for(;d-- >0;){const r=h[d],c=Object.prototype.hasOwnProperty.call(a,r)?a[r]:void 0;if(c){const n=t[r],p=n===void 0||c(n,r,t);if(p!==!0)throw new x("option "+r+" must be "+p,x.ERR_BAD_OPTION_VALUE);continue}if(e!==!0)throw new x("Unknown option "+r,x.ERR_BAD_OPTION)}}const Z2={assertOptions:B3,validators:p0},B=Z2.validators,_0=t=>{if(t==null||o.isPlainObject(t)||t instanceof I)return!0;try{return o.isObject(t)&&o.getSafeProp(t,Symbol.toStringTag)==="AxiosHeaders"&&["toJSON","set","get","has","delete","clear","normalize","concat","toString",Symbol.iterator].every(a=>o.isFunction(o.getSafeProp(t,a)))}catch{return!1}};class J2{constructor(a){this.defaults=a||{},this.interceptors={request:new fa,response:new fa}}async request(a,e){try{return await this._request(a,e)}catch(h){if(h instanceof Error)try{let d={};Error.captureStackTrace?Error.captureStackTrace(d):d=new Error;const r=d.stack;let c="";if(typeof r=="string"){const n=r.indexOf(`
`);c=n===-1?"":r.slice(n+1)}if(!h.stack)h.stack=c;else if(c){const n=c.indexOf(`
`),p=n===-1?-1:c.indexOf(`
`,n+1),i=p===-1?c:c.slice(p+1),s=String(h.stack),l=On(h,s),u=l===-1?s:s.slice(0,l),v=l===-1?"":s.slice(l);u.endsWith(i)||(h.stack=u+`
`+c+v)}}catch{}throw h}}_request(a,e){typeof a=="string"?(e=e||{},e.url=a):e=a||{},e=R1(this.defaults,e);const{transitional:h,paramsSerializer:d,headers:r}=e;h!==void 0&&Z2.assertOptions(h,{silentJSONParsing:B.transitional(B.boolean),forcedJSONParsing:B.transitional(B.boolean),clarifyTimeoutError:B.transitional(B.boolean),legacyInterceptorReqResOrdering:B.transitional(B.boolean),advertiseZstdAcceptEncoding:B.transitional(B.boolean),validateStatusUndefinedResolves:B.transitional(B.boolean),encodeBasicAuthUsername:B.transitional(B.boolean)},!1),d!=null&&(o.isFunction(d)?e.paramsSerializer={serialize:d}:Z2.assertOptions(d,{encode:B.function,serialize:B.function},!0)),e.allowAbsoluteUrls!==void 0||(o.hasOwnProp(this.defaults,"allowAbsoluteUrls")&&this.defaults.allowAbsoluteUrls!==void 0?e.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:e.allowAbsoluteUrls=!0),Z2.assertOptions(e,{baseUrl:B.spelling("baseURL"),withXsrfToken:B.spelling("withXSRFToken")},!0),e.method=(o.getSafeProp(e,"method")||o.getSafeProp(this.defaults,"method")||"get").toLowerCase();const c=o.getSafeProp(r,"common"),n=o.getSafeProp(r,e.method),p=r&&o.merge(_0(c)?c:void 0,_0(n)?n:void 0);r&&o.forEach(Fd.concat("common"),g=>{_0(o.getSafeProp(r,g))&&delete r[g]}),e.headers=I.concat(p,r);const i=[];let s=!0;this.interceptors.request.forEach(function(w){if(typeof w.runWhen=="function"&&w.runWhen(e)===!1)return;s=s&&w.synchronous;const y=e.transitional||Lt;y&&y.legacyInterceptorReqResOrdering?i.unshift(w.fulfilled,w.rejected):i.push(w.fulfilled,w.rejected)});const l=[];this.interceptors.response.forEach(function(w){l.push(w.fulfilled,w.rejected)});let u,v=0,A;if(!s){const g=[b0.bind(this),void 0];for(g.unshift(...i),g.push(...l),A=g.length,u=Promise.resolve(e);v<A;)u=u.then(g[v++],g[v++]);return u}A=i.length;let m=e;for(;v<A;){const g=i[v++],w=i[v++];try{m=g?g(m):m}catch(y){if(!w){u=Promise.reject(y);break}try{const f=w.call(this,y);o.isThenable(f)&&(u=Promise.resolve(f).then(()=>b0.call(this,m)))}catch(f){u=Promise.reject(f)}break}}if(!u)try{u=b0.call(this,m)}catch(g){u=Promise.reject(g)}for(v=0,A=l.length;v<A;)u=u.then(l[v++],l[v++]);return u}getUri(a){a=R1(this.defaults,a);const e=jd(a.baseURL,a.url,a.allowAbsoluteUrls,a);return Ed(e,a.params,a.paramsSerializer)}}o.forEach(["delete","get","head","options"],function(a){J2.prototype[a]=async function(e,h){return this.request(R1(h||{},{method:a,url:e,data:h&&o.hasOwnProp(h,"data")?h.data:void 0}))}});o.forEach(["post","put","patch","query"],function(a){function e(h){return async function(r,c,n){return this.request(R1(n||{},{method:a,headers:h?{"Content-Type":"multipart/form-data"}:{},url:r,data:c}))}}J2.prototype[a]=e(),a!=="query"&&(J2.prototype[a+"Form"]=e(!0))});const $2=J2;class Et{constructor(a){if(typeof a!="function")throw new TypeError("executor must be a function.");let e;this.promise=new Promise(function(r){e=r});const h=this;this.promise.then(d=>{if(!h._listeners)return;let r=h._listeners.length;for(;r-- >0;)h._listeners[r](d);h._listeners=null}),this.promise.then=d=>{let r;const c=new Promise(n=>{h.subscribe(n),r=n}).then(d);return c.cancel=function(){h.unsubscribe(r)},c},a(function(r,c,n){h.reason||(h.reason=new L2(r,c,n),e(h.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(a){if(this.reason){a(this.reason);return}this._listeners?this._listeners.push(a):this._listeners=[a]}unsubscribe(a){if(!this._listeners)return;const e=this._listeners.indexOf(a);e!==-1&&this._listeners.splice(e,1)}toAbortSignal(){const a=new AbortController,e=h=>{a.abort(h)};return this.subscribe(e),a.signal.unsubscribe=()=>this.unsubscribe(e),a.signal}static source(){let a;return{token:new Et(function(d){a=d}),cancel:a}}}const F3=Et;function q3(t){return function(e){return t.apply(null,e)}}function U3(t){return o.isObject(t)&&t.isAxiosError===!0}const W2={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,ContentTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(W2).forEach(([t,a])=>{W2[a]===void 0&&(W2[a]=t)});const N3=W2;function Xd(t){const a=new $2(t),e=Ad($2.prototype.request,a);return o.extend(e,$2.prototype,a,{allOwnKeys:!0}),o.extend(e,a,null,{allOwnKeys:!0}),e.create=function(d){return Xd(R1(t,d))},e}const T=Xd(Pt);T.Axios=$2;T.CanceledError=L2;T.CancelToken=F3;T.isCancel=qd;T.VERSION=Ot;T.toFormData=n0;T.AxiosError=x;T.Cancel=T.CanceledError;T.all=function(a){return Promise.all(a)};T.spread=q3;T.isAxiosError=U3;T.mergeConfig=R1;T.AxiosHeaders=I;T.formToJSON=t=>Bd(o.isHTMLForm(t)?new FormData(t):t);T.getAdapter=Kd.getAdapter;T.HttpStatusCode=N3;T.default=T;const I3=T;window.axios=I3;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var dt=!1,rt=!1,s1=[],ct=-1,Q2=!1,zt=!1;function j3(t){W3(t)}function Z3(){zt=!0}function $3(){zt=!1,Jd()}function W3(t){s1.includes(t)||(s1.push(t),t._x_schedulerPriority!==void 0&&(Q2=!0)),Jd()}function Tt(t){let a=s1.indexOf(t);a!==-1&&a>ct&&s1.splice(a,1)}function Jd(){if(!rt&&!dt){if(zt)return;dt=!0,queueMicrotask(G3)}}function G3(){dt=!1,rt=!0;for(let t=0;t<s1.length;t++)Q2&&K3(t),s1[t](),ct=t;s1.length=0,ct=-1,Q2=!1,rt=!1}function K3(t){let a=new Map,e=s1.slice(t).sort((h,d)=>X3(h,d,a));for(let h=0;h<e.length;h++)s1[t+h]=e[h];Q2=!1}function X3(t,a,e){return P0(t)?P0(a)?Ta(t._x_schedulerPriority.el,e)-Ta(a._x_schedulerPriority.el,e)||t._x_schedulerPriority.order-a._x_schedulerPriority.order:-1:P0(a)?1:0}function P0(t){return t._x_schedulerPriority!==void 0}function Ta(t,a){if(a.has(t))return a.get(t);let e=0,h=t;for(;t;)e++,t._x_teleportBack?t=t._x_teleportBack:typeof ShadowRoot=="function"&&t.parentNode instanceof ShadowRoot?t=t.parentNode.host:t=t.parentElement;return a.set(h,e),e}var Q1,U1,Y1,Qd,J3=0,nt=!0;function Q3(t){nt=!1,t(),nt=!0}function Y3(t){Q1=t.reactive,Y1=t.release,U1=a=>t.effect(a,{scheduler:e=>{nt?j3(e):e()}}),Qd=t.raw}function Da(t){U1=t}function tp(t){let a=()=>{};return[(h,d)=>{let r=(d==null?void 0:d.priority)==="structural"?J3++:void 0,c=U1(h);return r!==void 0&&c!==void 0&&(c._x_schedulerPriority={el:t,order:r}),t._x_effects||(t._x_effects=new Set,t._x_runEffects=()=>{t._x_effects.forEach(n=>n())}),t._x_effects.add(c),a=()=>{c!==void 0&&(t._x_effects.delete(c),Y1(c))},c},()=>{a()}]}function Yd(t,a){let e=!0,h,d,r=U1(()=>{let c=t(),n=JSON.stringify(c);if(!e&&(typeof c=="object"||c!==h)){let p=typeof h=="object"?JSON.parse(d):h;queueMicrotask(()=>{a(c,p)})}h=c,d=n,e=!1});return()=>{Tt(r),Y1(r)}}async function ap(t){Z3();try{await t(),await Promise.resolve()}finally{$3()}}var tr=[],ar=[],er=[];function ep(t){er.push(t)}function Dt(t,a){typeof a=="function"?(t._x_cleanups||(t._x_cleanups=[]),t._x_cleanups.push(a)):(a=t,ar.push(a))}function hr(t){tr.push(t)}function dr(t,a,e){t._x_attributeCleanups||(t._x_attributeCleanups={}),t._x_attributeCleanups[a]||(t._x_attributeCleanups[a]=[]),t._x_attributeCleanups[a].push(e)}function rr(t,a){t._x_attributeCleanups&&Object.entries(t._x_attributeCleanups).forEach(([e,h])=>{(a===void 0||a.includes(e))&&(h.forEach(d=>d()),delete t._x_attributeCleanups[e])})}function hp(t){var a,e;for((a=t._x_effects)==null||a.forEach(Tt);(e=t._x_cleanups)!=null&&e.length;)t._x_cleanups.pop()()}var o0=new MutationObserver(i0),kt=!1;function Bt(){o0.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),kt=!0}function cr(){dp(),o0.disconnect(),kt=!1}var C1=[];function dp(){let t=o0.takeRecords();C1.push(()=>t.length>0&&i0(t));let a=C1.length;queueMicrotask(()=>{if(C1.length===a)for(;C1.length>0;)C1.shift()()})}function rp(){for(;C1.length>0;)C1.shift()();let t=o0.takeRecords();t.length>0&&i0(t)}function O(t){if(!kt)return t();cr();try{return t()}finally{Bt()}}var Ft=!1,Y2=[];function cp(){Ft=!0}function np(){Ft=!1,i0(Y2),Y2=[]}function i0(t){if(Ft){Y2=Y2.concat(t);return}let a=[],e=new Set,h=new Map,d=new Map;for(let r=0;r<t.length;r++)if(!t[r].target._x_ignoreMutationObserver&&(t[r].type==="childList"&&(t[r].removedNodes.forEach(c=>{c.nodeType===1&&c._x_marker&&e.add(c)}),t[r].addedNodes.forEach(c=>{if(c.nodeType===1){if(e.has(c)){e.delete(c);return}c._x_marker||a.push(c)}})),t[r].type==="attributes")){let c=t[r].target,n=t[r].attributeName,p=t[r].oldValue,i=()=>{h.has(c)||h.set(c,[]),h.get(c).push({name:n,value:c.getAttribute(n)})},s=()=>{d.has(c)||d.set(c,[]),d.get(c).push(n)};c.hasAttribute(n)&&p===null?i():c.hasAttribute(n)?(s(),i()):s()}d.forEach((r,c)=>{rr(c,r)}),h.forEach((r,c)=>{tr.forEach(n=>n(c,r))});for(let r of e)a.some(c=>c.contains(r))||ar.forEach(c=>c(r));for(let r of a)r.isConnected&&er.forEach(c=>c(r));a=null,e=null,h=null,d=null}function nr(t){return z1(E1(t))}function b2(t,a,e){return t._x_dataStack=[a,...E1(e||t)],()=>{t._x_dataStack=t._x_dataStack.filter(h=>h!==a)}}function E1(t){return t._x_dataStack?t._x_dataStack:typeof ShadowRoot=="function"&&t instanceof ShadowRoot?E1(t.host):t.parentNode?E1(t.parentNode):[]}function z1(t){return new Proxy({objects:t},pp)}function pr(t,a){return t===null||t===Object.prototype?null:Object.prototype.hasOwnProperty.call(t,a)?t:pr(Object.getPrototypeOf(t),a)}var pp={ownKeys({objects:t}){return Array.from(new Set(t.flatMap(a=>Object.keys(a))))},has({objects:t},a){return a==Symbol.unscopables?!1:t.some(e=>Object.prototype.hasOwnProperty.call(e,a)||Reflect.has(e,a))},get({objects:t},a,e){return a=="toJSON"?op:Reflect.get(t.find(h=>Reflect.has(h,a))||{},a,e)},set({objects:t},a,e,h){let d;for(const c of t)if(d=pr(c,a),d)break;d||(d=t[t.length-1]);const r=Object.getOwnPropertyDescriptor(d,a);return r!=null&&r.set&&(r!=null&&r.get)?r.set.call(h,e)||!0:Reflect.set(d,a,e)}};function op(){return Reflect.ownKeys(this).reduce((a,e)=>(a[e]=Reflect.get(this,e),a),{})}function qt(t,a=()=>{}){let e=d=>typeof d=="object"&&!Array.isArray(d)&&d!==null,h=(d,r="")=>{Object.entries(Object.getOwnPropertyDescriptors(d)).forEach(([c,{value:n,enumerable:p}])=>{if(p===!1||n===void 0||typeof n=="object"&&n!==null&&n.__v_skip)return;let i=r===""?c:`${r}.${c}`;typeof n=="object"&&n!==null&&n._x_interceptor?d[c]=n.initialize(t,i,c,a):e(n)&&n!==d&&!(n instanceof Element)&&h(n,i)})};return h(t)}function or(t,a=()=>{}){let e={initialValue:void 0,_x_interceptor:!0,initialize(h,d,r,c){return t(this.initialValue,()=>ip(h,d),n=>pt(h,d,n),d,r,c)}};return a(e),h=>{if(typeof h=="object"&&h!==null&&h._x_interceptor){let d=e.initialize.bind(e);e.initialize=(r,c,n,p)=>{let i=h.initialize(r,c,n,p);return e.initialValue=i,d(r,c,n,p)}}else e.initialValue=h;return e}}function ip(t,a){return a.split(".").reduce((e,h)=>e[h],t)}function pt(t,a,e){if(typeof a=="string"&&(a=a.split(".")),a.length===1)t[a[0]]=e;else{if(a.length===0)throw error;return t[a[0]]||(t[a[0]]={}),pt(t[a[0]],a.slice(1),e)}}var ir={};function a1(t,a){ir[t]=a}function x2(t,a){let e=sp(a);return Object.entries(ir).forEach(([h,d])=>{Object.defineProperty(t,`$${h}`,{get(){return d(a,e)},enumerable:!1})}),t}function sp(t){let[a,e]=mr(t),h={interceptor:or,...a};return Dt(t,e),h}function lp(t,a,e,...h){try{return e(...h)}catch(d){K1(d,t,a)}}function K1(...t){return sr(...t)}var sr=up;function Mp(t){sr=t}function up(t,a,e=void 0){t=Object.assign(t??{message:"No error message given."},{el:a,expression:e}),console.warn(`Alpine Expression Error: ${t.message}

${e?'Expression: "'+e+`"

`:""}`,a),setTimeout(()=>{throw t},0)}var G1=!0;function lr(t){let a=G1;G1=!1;let e=t();return G1=a,e}function b1(t,a,e={}){let h;return j(t,a)(d=>h=d,e),h}function j(...t){return Mr(...t)}var Mr=()=>{};function fp(t){Mr=t}var ur;function vp(t){ur=t}function mp(t,a){let e={};x2(e,t);let h=[e,...E1(t)],d=typeof a=="function"?xp(h,a):gp(h,a,t);return lp.bind(null,t,a,d)}function xp(t,a){return(e=()=>{},{scope:h={},params:d=[],context:r}={})=>{if(!G1){y2(e,a,z1([h,...t]),d);return}let c=a.apply(z1([h,...t]),d);y2(e,c)}}var O0={};function yp(t,a){if(O0[t])return O0[t];let e=Object.getPrototypeOf(async function(){}).constructor,h=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(async()=>{ ${t} })()`:t,r=(()=>{try{let c=new e(["__self","scope"],`with (scope) { __self.result = ${h} }; __self.finished = true; return __self.result;`);return Object.defineProperty(c,"name",{value:`[Alpine] ${t}`}),c}catch(c){return K1(c,a,t),Promise.resolve()}})();return O0[t]=r,r}function gp(t,a,e){let h=yp(a,e);return(d=()=>{},{scope:r={},params:c=[],context:n}={})=>{h.result=void 0,h.finished=!1;let p=z1([r,...t]);if(typeof h=="function"){let i=h.call(n,h,p).catch(s=>K1(s,e,a));h.finished?(y2(d,h.result,p,c,e),h.result=void 0):i.then(s=>{y2(d,s,p,c,e)}).catch(s=>K1(s,e,a)).finally(()=>h.result=void 0)}}}function y2(t,a,e,h,d){if(G1&&typeof a=="function"){let r=a.apply(e,h);r instanceof Promise?r.then(c=>y2(t,c,e,h)).catch(c=>K1(c,d,a)):t(r)}else typeof a=="object"&&a instanceof Promise?a.then(r=>t(r)):t(a)}function Ap(...t){return ur(...t)}function wp(t,a,e={}){let h={};x2(h,t);let d=[h,...E1(t)],r=z1([e.scope??{},...d]),c=e.params??[];if(a.includes("await")){let n=Object.getPrototypeOf(async function(){}).constructor,p=/^[\n\s]*if.*\(.*\)/.test(a.trim())||/^(let|const)\s/.test(a.trim())?`(async()=>{ ${a} })()`:a;return new n(["scope"],`with (scope) { let __result = ${p}; return __result }`).call(e.context,r)}else{let n=/^[\n\s]*if.*\(.*\)/.test(a.trim())||/^(let|const)\s/.test(a.trim())?`(()=>{ ${a} })()`:a,i=new Function(["scope"],`with (scope) { let __result = ${n}; return __result }`).call(e.context,r);return typeof i=="function"&&G1?i.apply(r,c):i}}var Ut="x-";function T1(t=""){return Ut+t}function Hp(t){Ut=t}var t0={};function D(t,a){return t0[t]=a,{before(e){if(!t0[e]){console.warn(String.raw`Cannot find directive \`${e}\`. \`${t}\` will use the default order of execution`);return}const h=L1.indexOf(e);L1.splice(h>=0?h:L1.indexOf("DEFAULT"),0,t)}}}function Cp(t){return Object.keys(t0).includes(t)}function s0(t,a,e){if(a=Array.from(a),t._x_virtualDirectives){let r=Object.entries(t._x_virtualDirectives).map(([n,p])=>({name:n,value:p})),c=fr(r);r=r.map(n=>c.find(p=>p.name===n.name)?{name:`x-bind:${n.name}`,value:`"${n.value}"`}:n),a=a.concat(r)}let h={};return a.map(gr((r,c)=>h[r]=c)).filter(wr).map(Lp(h,e)).sort(bp).map(r=>Sp(t,r))}function fr(t){return Array.from(t).map(gr()).filter(a=>!wr(a))}var ot=!1,l2=new Map,vr=Symbol();function Vp(t){ot=!0;let a=Symbol();vr=a,l2.set(a,[]);let e=()=>{for(;l2.get(a).length;)l2.get(a).shift()();l2.delete(a)},h=()=>{ot=!1,e()};t(e),h()}function mr(t){let a=[],e=n=>a.push(n),[h,d]=tp(t);return a.push(d),[{Alpine:t2,effect:h,cleanup:e,evaluateLater:j.bind(j,t),evaluate:b1.bind(b1,t)},()=>a.forEach(n=>n())]}function Sp(t,a){let e=()=>{},h=t0[a.type]||e,[d,r]=mr(t);dr(t,a.original,r);let c=()=>{t._x_ignore||t._x_ignoreSelf||(h.inline&&h.inline(t,a,d),h=h.bind(h,t,a,d),ot?l2.get(vr).push(h):h())};return c.runCleanups=r,c}var xr=(t,a)=>({name:e,value:h})=>(e.startsWith(t)&&(e=e.replace(t,a)),{name:e,value:h}),yr=t=>t;function gr(t=()=>{}){return({name:a,value:e})=>{let{name:h,value:d}=Ar.reduce((r,c)=>c(r),{name:a,value:e});return h!==a&&t(h,a),{name:h,value:d}}}var Ar=[];function Nt(t){Ar.push(t)}function wr({name:t}){return Hr().test(t)}var Hr=()=>new RegExp(`^${Ut}([^:^.]+)\\b`);function Lp(t,a){return({name:e,value:h})=>{e===h&&(h="");let d=e.match(Hr()),r=e.match(/:([a-zA-Z0-9\-_:]+)/),c=e.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],n=a||t[e]||e;return{type:d?d[1]:null,value:r?r[1]:null,modifiers:c.map(p=>p.replace(".","")),expression:h,original:n}}}var it="DEFAULT",L1=["ignore","ref","id","data","anchor","bind","init","for","model","modelable","transition","show","if",it,"teleport"];function bp(t,a){let e=L1.indexOf(t.type)===-1?it:t.type,h=L1.indexOf(a.type)===-1?it:a.type;return L1.indexOf(e)-L1.indexOf(h)}function D1(t,a){if(typeof ShadowRoot=="function"&&t instanceof ShadowRoot){Array.from(t.children).forEach(d=>D1(d,a));return}let e=!1;if(a(t,()=>e=!0),e)return;let h=t.firstElementChild;for(;h;)D1(h,a),h=h.nextElementSibling}var u1=!1;function f1(t,a=()=>{}){return(...e)=>u1?a(...e):t(...e)}function _p(t){return(...a)=>u1&&t(...a)}var Cr=[];function _2(t){Cr.push(t)}function Pp(t,a){Cr.forEach(e=>e(t,a)),u1=!0,Vr(()=>{r1(a,(e,h)=>{h(e,()=>{})})}),u1=!1}var st=!1;function Op(t,a){a._x_dataStack||(a._x_dataStack=t._x_dataStack),u1=!0,st=!0,Vr(()=>{Rp(a)}),u1=!1,st=!1}function Rp(t){let a=!1;r1(t,(h,d)=>{D1(h,(r,c)=>{if(a&&Bp(r))return c();a=!0,d(r,c)})})}function Vr(t){let a=U1;Da((e,h)=>{let d=a(e);return Y1(d),()=>{}}),t(),Da(a)}var l0=0;function Ep(t,a){let e=t._x_deferInit;e||(e=t._x_deferInit={pending:0,ownsIgnore:!t._x_ignore,queuedAttributes:new Map},e.ownsIgnore&&(t._x_ignore=!0),l0++),e.pending++,Promise.resolve(a).catch(h=>{try{K1(h,t)}catch(d){setTimeout(()=>{throw d},0)}}).then(()=>zp(t,e))}function zp(t,a){a.pending--,!(a.pending>0)&&(rp(),!(a.pending>0)&&t._x_deferInit===a&&(delete t._x_deferInit,a.ownsIgnore&&delete t._x_ignore,l0--,t.isConnected&&(Dp(a),r1(t))))}function Tp(t,a){if(l0===0)return!1;let e=J(t,h=>h._x_deferInit);return e?(Sr(e._x_deferInit,t,a.map(({name:h})=>h)),!0):!1}function Sr(t,a,e){let h=t.queuedAttributes.get(a);(!h||h.marker!==a._x_marker)&&(h={marker:a._x_marker,names:new Set},t.queuedAttributes.set(a,h)),e.forEach(d=>h.names.add(d))}function Dp(t){t.queuedAttributes.forEach((a,e)=>{if(!e.isConnected||!e._x_marker||e._x_marker!==a.marker)return;let h=J(e,r=>r._x_deferInit);if(h){Sr(h._x_deferInit,e,Array.from(a.names));return}let d=Array.from(a.names).filter(r=>e.hasAttribute(r)).map(r=>({name:r,value:e.getAttribute(r)}));d.length!==0&&s0(e,d).forEach(r=>r())})}_2((t,a)=>{l0!==0&&(!t||t.nodeType!==1||!a||a.nodeType!==1||J(t,e=>e._x_deferInit)&&(a._x_ignore=!0))});function M2(t,a,e={},h={}){return t.dispatchEvent(new CustomEvent(a,{detail:e,bubbles:!0,composed:!0,cancelable:!0,...h}))}function d1(t,...a){console.warn(`Alpine Warning: ${t}`,...a)}var ka=!1;function kp(){ka&&d1("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),ka=!0,document.body||d1("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),M2(document,"alpine:init"),M2(document,"alpine:initializing"),Bt(),ep(a=>r1(a,D1)),Dt(a=>N1(a)),hr((a,e)=>{Tp(a,e)||s0(a,e).forEach(h=>h())});let t=a=>!M0(a.parentElement,!0);Array.from(document.querySelectorAll(_r().join(","))).filter(t).forEach(a=>{r1(a)}),M2(document,"alpine:initialized"),setTimeout(()=>{Up()})}var It=[],Lr=[];function br(){return It.map(t=>t())}function _r(){return It.concat(Lr).map(t=>t())}function Pr(t){It.push(t)}function Or(t){Lr.push(t)}function M0(t,a=!1){return J(t,e=>{if((a?_r():br()).some(d=>e.matches(d)))return!0})}function J(t,a){if(t){if(a(t))return t;if(t._x_teleportBack)return J(t._x_teleportBack,a);if(t.parentNode instanceof ShadowRoot)return J(t.parentNode.host,a);if(t.parentElement)return J(t.parentElement,a)}}function Bp(t){return br().some(a=>t.matches(a))}var Rr=[];function Fp(t){Rr.push(t)}var qp=1;function r1(t,a=D1,e=()=>{}){J(t,h=>h._x_ignore)||Vp(()=>{a(t,(h,d)=>{h._x_marker||(e(h,d),Rr.forEach(r=>r(h,d)),s0(h,h.attributes).forEach(r=>r()),h._x_ignore||(h._x_marker=qp++),h._x_ignore&&d())})})}function N1(t,a=D1){a(t,e=>{hp(e),rr(e),delete e._x_marker})}function Up(){[["ui","dialog",["[x-dialog], [x-popover]"]],["anchor","anchor",["[x-anchor]"]],["sort","sort",["[x-sort]"]]].forEach(([a,e,h])=>{Cp(e)||h.some(d=>{if(document.querySelector(d))return d1(`found "${d}", but missing ${a} plugin`),!0})})}var lt=[],jt=!1;function Zt(t=()=>{}){return queueMicrotask(()=>{jt||setTimeout(()=>{Mt()})}),new Promise(a=>{lt.push(()=>{t(),a()})})}function Mt(){for(jt=!1;lt.length;)lt.shift()()}function Np(){jt=!0}function $t(t,a){return Array.isArray(a)?Ba(t,a.join(" ")):typeof a=="object"&&a!==null?Ip(t,a):typeof a=="function"?$t(t,a()):Ba(t,a)}function ut(t){return t.split(/\s/).filter(Boolean)}function Ba(t,a){let e=d=>ut(d).filter(r=>!t.classList.contains(r)).filter(Boolean),h=d=>(t.classList.add(...d),()=>{t.classList.remove(...d)});return a=a===!0?a="":a||"",h(e(a))}function Ip(t,a){let e=Object.entries(a).flatMap(([c,n])=>n?ut(c):!1).filter(Boolean),h=Object.entries(a).flatMap(([c,n])=>n?!1:ut(c)).filter(Boolean),d=[],r=[];return h.forEach(c=>{t.classList.contains(c)&&(t.classList.remove(c),r.push(c))}),e.forEach(c=>{t.classList.contains(c)||(t.classList.add(c),d.push(c))}),()=>{r.forEach(c=>t.classList.add(c)),d.forEach(c=>t.classList.remove(c))}}function u0(t,a){return typeof a=="object"&&a!==null?jp(t,a):Zp(t,a)}function jp(t,a){let e={};return Object.entries(a).forEach(([h,d])=>{e[h]=t.style[h],h.startsWith("--")||(h=$p(h)),t.style.setProperty(h,d)}),setTimeout(()=>{t.style.length===0&&t.removeAttribute("style")}),()=>{u0(t,e)}}function Zp(t,a){let e=t.getAttribute("style",a);return t.setAttribute("style",a),()=>{t.setAttribute("style",e||"")}}function $p(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function ft(t,a=()=>{}){let e=!1;return function(){e?a.apply(this,arguments):(e=!0,t.apply(this,arguments))}}D("transition",(t,{value:a,modifiers:e,expression:h},{evaluate:d})=>{typeof h=="function"&&(h=d(h)),h!==!1&&(!h||typeof h=="boolean"?Gp(t,e,a):Wp(t,h,a))});function Wp(t,a,e){Er(t,$t,""),{enter:d=>{t._x_transition.enter.during=d},"enter-start":d=>{t._x_transition.enter.start=d},"enter-end":d=>{t._x_transition.enter.end=d},leave:d=>{t._x_transition.leave.during=d},"leave-start":d=>{t._x_transition.leave.start=d},"leave-end":d=>{t._x_transition.leave.end=d}}[e](a)}function Gp(t,a,e){Er(t,u0);let h=!a.includes("in")&&!a.includes("out")&&!e,d=h||a.includes("in")||["enter"].includes(e),r=h||a.includes("out")||["leave"].includes(e);a.includes("in")&&!h&&(a=a.filter((w,y)=>y<a.indexOf("out"))),a.includes("out")&&!h&&(a=a.filter((w,y)=>y>a.indexOf("out")));let c=!a.includes("opacity")&&!a.includes("scale"),n=c||a.includes("opacity"),p=c||a.includes("scale"),i=n?0:1,s=p?i2(a,"scale",95)/100:1,l=i2(a,"delay",0)/1e3,u=i2(a,"origin","center"),v="opacity, transform",A=i2(a,"duration",150)/1e3,m=i2(a,"duration",75)/1e3,g="cubic-bezier(0.4, 0.0, 0.2, 1)";d&&(t._x_transition.enter.during={transformOrigin:u,transitionDelay:`${l}s`,transitionProperty:v,transitionDuration:`${A}s`,transitionTimingFunction:g},t._x_transition.enter.start={opacity:i,transform:`scale(${s})`},t._x_transition.enter.end={opacity:1,transform:"scale(1)"}),r&&(t._x_transition.leave.during={transformOrigin:u,transitionDelay:`${l}s`,transitionProperty:v,transitionDuration:`${m}s`,transitionTimingFunction:g},t._x_transition.leave.start={opacity:1,transform:"scale(1)"},t._x_transition.leave.end={opacity:i,transform:`scale(${s})`})}function Er(t,a,e={}){t._x_transition||(t._x_transition={enter:{during:e,start:e,end:e},leave:{during:e,start:e,end:e},in(h=()=>{},d=()=>{}){vt(t,a,{during:this.enter.during,start:this.enter.start,end:this.enter.end},h,d)},out(h=()=>{},d=()=>{}){vt(t,a,{during:this.leave.during,start:this.leave.start,end:this.leave.end},h,d)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(t,a,e,h){const d=document.visibilityState==="visible"?requestAnimationFrame:setTimeout;let r=()=>d(e);if(a){t._x_transition&&(t._x_transition.enter||t._x_transition.leave)?t._x_transition.enter&&(Object.entries(t._x_transition.enter.during).length||Object.entries(t._x_transition.enter.start).length||Object.entries(t._x_transition.enter.end).length)?t._x_transition.in(e):r():t._x_transition?t._x_transition.in(e):r();return}t._x_hidePromise=t._x_transition?new Promise((c,n)=>{t._x_transition.out(()=>{},()=>c(h)),t._x_transitioning&&t._x_transitioning.beforeCancel(()=>n({isFromCancelledTransition:!0}))}):Promise.resolve(h),queueMicrotask(()=>{let c=zr(t);c?(c._x_hideChildren||(c._x_hideChildren=[]),c._x_hideChildren.push(t)):d(()=>{let n=p=>{let i=Promise.all([p._x_hidePromise,...(p._x_hideChildren||[]).map(n)]).then(([s])=>s==null?void 0:s());return delete p._x_hidePromise,delete p._x_hideChildren,i};n(t).catch(p=>{if(!p.isFromCancelledTransition)throw p})})})};function zr(t){let a=t.parentNode;if(a)return a._x_hidePromise?a:zr(a)}function vt(t,a,{during:e,start:h,end:d}={},r=()=>{},c=()=>{}){if(t._x_transitioning&&t._x_transitioning.cancel(),Object.keys(e).length===0&&Object.keys(h).length===0&&Object.keys(d).length===0){r(),c();return}let n,p,i;Kp(t,{start(){n=a(t,h)},during(){p=a(t,e)},before:r,end(){n(),i=a(t,d)},after:c,cleanup(){p(),i()}})}function Kp(t,a){let e,h,d,r=ft(()=>{O(()=>{e=!0,h||a.before(),d||(a.end(),Mt()),a.after(),t.isConnected&&a.cleanup(),delete t._x_transitioning})});t._x_transitioning={beforeCancels:[],beforeCancel(c){this.beforeCancels.push(c)},cancel:ft(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();r()}),finish:r},O(()=>{a.start(),a.during()}),Np(),requestAnimationFrame(()=>{if(e)return;let c=Number(getComputedStyle(t).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,n=Number(getComputedStyle(t).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;c===0&&(c=Number(getComputedStyle(t).animationDuration.replace("s",""))*1e3),O(()=>{a.before()}),h=!0,requestAnimationFrame(()=>{e||(O(()=>{a.end()}),Mt(),setTimeout(t._x_transitioning.finish,c+n),d=!0)})})}function i2(t,a,e){if(t.indexOf(a)===-1)return e;const h=t[t.indexOf(a)+1];if(!h||a==="scale"&&isNaN(h))return e;if(a==="duration"||a==="delay"){let d=h.match(/([0-9]+)ms/);if(d)return d[1]}return a==="origin"&&["top","right","left","center","bottom"].includes(t[t.indexOf(a)+2])?[h,t[t.indexOf(a)+2]].join(" "):h}function Tr(t,a,e,h=[]){switch(t._x_bindings||(t._x_bindings=Q1({})),t._x_bindings[a]=e,a=h.includes("camel")?h6(a):a,a){case"value":Xp(t,e);break;case"style":Qp(t,e);break;case"class":Jp(t,e);break;case"selected":case"checked":Yp(t,a,e);break;default:Wt(t,a,e);break}}function Xp(t,a){if(Gt(t))t.attributes.value===void 0&&(t.value=a);else if(a0(t))Number.isInteger(a)?t.value=a:!Array.isArray(a)&&typeof a!="boolean"&&![null,void 0].includes(a)?t.value=String(a):Array.isArray(a)?t.checked=a.some(e=>d6(e,t.value)):t.checked=!!a;else if(t.tagName==="SELECT")e6(t,a);else if(t.tagName==="OPTION")Wt(t,"value",a);else{if(t.value===a&&(typeof a!="object"||a===null))return;t.value=a===void 0?"":a}}function Jp(t,a){t._x_undoAddedClasses&&t._x_undoAddedClasses(),t._x_undoAddedClasses=$t(t,a)}function Qp(t,a){t._x_undoAddedStyles&&t._x_undoAddedStyles(),t._x_undoAddedStyles=u0(t,a)}function Yp(t,a,e){Wt(t,a,e),a6(t,a,e)}function Wt(t,a,e){[null,void 0,!1].includes(e)&&c6(a)?t.removeAttribute(a):(Dr(a)&&(e=a),n6(e)&&(e=JSON.stringify(e)),t6(t,a,e))}function t6(t,a,e){t.getAttribute(a)!=e&&t.setAttribute(a,e)}function a6(t,a,e){t[a]!==e&&(t[a]=e)}function e6(t,a){const e=[].concat(a).map(h=>h+"");Array.from(t.options).forEach(h=>{h.selected=e.includes(h.value)})}function h6(t){return t.toLowerCase().replace(/-(\w)/g,(a,e)=>e.toUpperCase())}function d6(t,a){return t==a}function G2(t){return[1,"1","true","on","yes",!0].includes(t)?!0:[0,"0","false","off","no",!1].includes(t)?!1:t?!!t:null}var r6=new Set(["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","shadowrootclonable","shadowrootdelegatesfocus","shadowrootserializable"]);function Dr(t){return r6.has(t)}function c6(t){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(t)}function n6(t){return typeof t=="object"&&t!==null}function p6(t,a,e){return t._x_bindings&&t._x_bindings[a]!==void 0?t._x_bindings[a]:kr(t,a,e)}function o6(t,a,e,h=!0){if(t._x_bindings&&t._x_bindings[a]!==void 0)return t._x_bindings[a];if(t._x_inlineBindings&&t._x_inlineBindings[a]!==void 0){let d=t._x_inlineBindings[a];return d.extract=h,lr(()=>b1(t,d.expression))}return kr(t,a,e)}function kr(t,a,e){let h=t.getAttribute(a);return h===null?typeof e=="function"?e():e:h===""?!0:Dr(a)?!![a,"true"].includes(h):h}function a0(t){return t.type==="checkbox"||t.localName==="ui-checkbox"||t.localName==="ui-switch"}function Gt(t){return t.type==="radio"||t.localName==="ui-radio"}function Br(t,a){let e;return function(){const h=this,d=arguments,r=function(){e=null,t.apply(h,d)};clearTimeout(e),e=setTimeout(r,a)}}function Fr(t,a){let e;return function(){let h=this,d=arguments;e||(t.apply(h,d),e=!0,setTimeout(()=>e=!1,a))}}function qr({get:t,set:a},{get:e,set:h}){let d=!0,r,c=U1(()=>{let n=t(),p=e();if(d)h(R0(n)),d=!1;else{let i=JSON.stringify(n),s=JSON.stringify(p);i!==r?h(R0(n)):i!==s&&a(R0(p))}r=JSON.stringify(t()),JSON.stringify(e())});return()=>{Tt(c),Y1(c)}}function R0(t){return typeof t=="object"?JSON.parse(JSON.stringify(t)):t}function i6(t){(Array.isArray(t)?t:[t]).forEach(e=>e(t2))}var i1={},Fa=!1;function s6(t,a){if(Fa||(i1=Q1(i1),Fa=!0),a===void 0)return i1[t];i1[t]=a,typeof a=="object"&&a!==null&&a._x_interceptor?i1[t]=a.initialize(i1,t,t,()=>{}):qt(i1[t]),typeof a=="object"&&a!==null&&a.hasOwnProperty("init")&&typeof a.init=="function"&&i1[t].init()}function l6(){return i1}var Ur={};function M6(t,a){let e=typeof a!="function"?()=>a:a;return t instanceof Element?Nr(t,e()):(Ur[t]=e,()=>{})}function u6(t){return Object.entries(Ur).forEach(([a,e])=>{Object.defineProperty(t,a,{get(){return(...h)=>e(...h)}})}),t}function Nr(t,a,e){let h=[];for(;h.length;)h.pop()();let d=Object.entries(a).map(([c,n])=>({name:c,value:n})),r=fr(d);return d=d.map(c=>r.find(n=>n.name===c.name)?{name:`x-bind:${c.name}`,value:`"${c.value}"`}:c),s0(t,d,e).map(c=>{h.push(c.runCleanups),c()}),()=>{for(;h.length;)h.pop()()}}var Ir={};function f6(t,a){Ir[t]=a}function v6(t,a){return Object.entries(Ir).forEach(([e,h])=>{Object.defineProperty(t,e,{get(){return(...d)=>h.bind(a)(...d)},enumerable:!1})}),t}var m6={get reactive(){return Q1},get release(){return Y1},get effect(){return U1},get raw(){return Qd},get transaction(){return ap},version:"3.17.5",flushAndStopDeferringMutations:np,dontAutoEvaluateFunctions:lr,disableEffectScheduling:Q3,startObservingMutations:Bt,stopObservingMutations:cr,setReactivityEngine:Y3,onAttributeRemoved:dr,onAttributesAdded:hr,closestDataStack:E1,skipDuringClone:f1,onlyDuringClone:_p,addRootSelector:Pr,addInitSelector:Or,setErrorHandler:Mp,interceptClone:_2,addScopeToNode:b2,deferMutations:cp,mapAttributes:Nt,evaluateLater:j,interceptInit:Fp,initInterceptors:qt,injectMagics:x2,setEvaluator:fp,setRawEvaluator:vp,mergeProxies:z1,extractProp:o6,findClosest:J,onElRemoved:Dt,closestRoot:M0,destroyTree:N1,interceptor:or,transition:vt,setStyles:u0,mutateDom:O,deferInit:Ep,directive:D,entangle:qr,throttle:Fr,debounce:Br,evaluate:b1,evaluateRaw:Ap,initTree:r1,nextTick:Zt,prefixed:T1,prefix:Hp,plugin:i6,magic:a1,store:s6,start:kp,clone:Op,cloneNode:Pp,bound:p6,$data:nr,watch:Yd,walk:D1,data:f6,bind:M6},t2=m6;function x6(t){const a=Object.create(null);for(const e of t.split(","))a[e]=1;return e=>e in a}var g2=Object.assign,y6=Object.prototype.hasOwnProperty,mt=(t,a)=>y6.call(t,a),A2=Array.isArray,u2=t=>jr(t)==="[object Map]",g6=t=>typeof t=="string",P2=t=>typeof t=="symbol",w2=t=>t!==null&&typeof t=="object",A6=Object.prototype.toString,jr=t=>A6.call(t),Zr=t=>jr(t).slice(8,-1),Kt=t=>g6(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,w6=t=>{const a=Object.create(null);return e=>a[e]||(a[e]=t(e))},H6=w6(t=>t.charAt(0).toUpperCase()+t.slice(1)),V1=(t,a)=>!Object.is(t,a);function k1(t,...a){console.warn(`[Vue warn] ${t}`,...a)}var S,E0=new WeakSet,qa=class{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,E0.has(this)&&(E0.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||C6(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ua(this),Wr(this);const t=S,a=t1;S=this,t1=!0;try{return this.fn()}finally{S!==this&&k1("Active effect was not restored correctly - this is likely a Vue internal bug."),Gr(this),S=t,t1=a,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Qt(t);this.deps=this.depsTail=void 0,Ua(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?E0.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){xt(this)&&this.run()}get dirty(){return xt(this)}},$r=0,f2,v2;function C6(t,a=!1){if(t.flags|=8,a){t.next=v2,v2=t;return}t.next=f2,f2=t}function Xt(){$r++}function Jt(){if(--$r>0)return;if(v2){let a=v2;for(v2=void 0;a;){const e=a.next;a.next=void 0,a.flags&=-9,a=e}}let t;for(;f2;){let a=f2;for(f2=void 0;a;){const e=a.next;if(a.next=void 0,a.flags&=-9,a.flags&1)try{a.trigger()}catch(h){t||(t=h)}a=e}}if(t)throw t}function Wr(t){for(let a=t.deps;a;a=a.nextDep)a.version=-1,a.prevActiveLink=a.dep.activeLink,a.dep.activeLink=a}function Gr(t){let a,e=t.depsTail,h=e;for(;h;){const d=h.prevDep;h.version===-1?(h===e&&(e=d),Qt(h),S6(h)):a=h,h.dep.activeLink=h.prevActiveLink,h.prevActiveLink=void 0,h=d}t.deps=a,t.depsTail=e}function xt(t){for(let a=t.deps;a;a=a.nextDep)if(a.dep.version!==a.version||a.dep.computed&&(V6(a.dep.computed)||a.dep.version!==a.version))return!0;return!!t._dirty}function V6(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===e0)||(t.globalVersion=e0,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!xt(t))))return;t.flags|=2;const a=t.dep,e=S,h=t1;S=t,t1=!0;try{Wr(t);const d=t.fn(t._value);(a.version===0||V1(d,t._value))&&(t.flags|=128,t._value=d,a.version++)}catch(d){throw a.version++,d}finally{S=e,t1=h,Gr(t),t.flags&=-3}}function Qt(t,a=!1){const{dep:e,prevSub:h,nextSub:d}=t;if(h&&(h.nextSub=d,t.prevSub=void 0),d&&(d.prevSub=h,t.nextSub=void 0),e.subsHead===t&&(e.subsHead=d),e.subs===t&&(e.subs=h,!h&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Qt(r,!0)}!a&&!--e.sc&&e.map&&e.map.delete(e.key)}function S6(t){const{prevDep:a,nextDep:e}=t;a&&(a.nextDep=e,t.prevDep=void 0),e&&(e.prevDep=a,t.nextDep=void 0)}function L6(t,a){t.effect instanceof qa&&(t=t.effect.fn);const e=new qa(t);a&&g2(e,a);try{e.run()}catch(d){throw e.stop(),d}const h=e.run.bind(e);return h.effect=e,h}function b6(t){t.effect.stop()}var t1=!0,Kr=[];function _6(){Kr.push(t1),t1=!1}function P6(){const t=Kr.pop();t1=t===void 0?!0:t}function Ua(t){const{cleanup:a}=t;if(t.cleanup=void 0,a){const e=S;S=void 0;try{a()}finally{S=e}}}var e0=0,O6=class{constructor(a,e){this.sub=a,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},R6=class{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0,this.subsHead=void 0}track(t){if(!S||!t1||S===this.computed)return;let a=this.activeLink;if(a===void 0||a.sub!==S)a=this.activeLink=new O6(S,this),S.deps?(a.prevDep=S.depsTail,S.depsTail.nextDep=a,S.depsTail=a):S.deps=S.depsTail=a,Xr(a);else if(a.version===-1&&(a.version=this.version,a.nextDep)){const e=a.nextDep;e.prevDep=a.prevDep,a.prevDep&&(a.prevDep.nextDep=e),a.prevDep=S.depsTail,a.nextDep=void 0,S.depsTail.nextDep=a,S.depsTail=a,S.deps===a&&(S.deps=e)}return S.onTrack&&S.onTrack(g2({effect:S},t)),a}trigger(t){this.version++,e0++,this.notify(t)}notify(t){Xt();try{for(let a=this.subsHead;a;a=a.nextSub)a.sub.onTrigger&&!(a.sub.flags&8)&&a.sub.onTrigger(g2({effect:a.sub},t));for(let a=this.subs;a;a=a.prevSub)a.sub.notify()&&a.sub.dep.notify()}finally{Jt()}}};function Xr(t){if(t.dep.sc++,t.sub.flags&4){const a=t.dep.computed;if(a&&!t.dep.subs){a.flags|=20;for(let h=a.deps;h;h=h.nextDep)Xr(h)}const e=t.dep.subs;e!==t&&(t.prevSub=e,e&&(e.nextSub=t)),t.dep.subsHead===void 0&&(t.dep.subsHead=t),t.dep.subs=t}}var yt=new WeakMap,_1=Symbol("Object iterate"),gt=Symbol("Map keys iterate"),H2=Symbol("Array iterate");function Z(t,a,e){if(t1&&S){let h=yt.get(t);h||yt.set(t,h=new Map);let d=h.get(e);d||(h.set(e,d=new R6),d.map=h,d.key=e),d.track({target:t,type:a,key:e})}}function x1(t,a,e,h,d,r){const c=yt.get(t);if(!c){e0++;return}const n=p=>{p&&p.trigger({target:t,type:a,key:e,newValue:h,oldValue:d,oldTarget:r})};if(Xt(),a==="clear")c.forEach(n);else{const p=A2(t),i=p&&Kt(e);if(p&&e==="length"){const s=Number(h);c.forEach((l,u)=>{(u==="length"||u===H2||!P2(u)&&u>=s)&&n(l)})}else switch((e!==void 0||c.has(void 0))&&n(c.get(e)),i&&n(c.get(H2)),a){case"add":p?i&&n(c.get("length")):(n(c.get(_1)),u2(t)&&n(c.get(gt)));break;case"delete":p||(n(c.get(_1)),u2(t)&&n(c.get(gt)));break;case"set":u2(t)&&n(c.get(_1));break}}Jt()}function $1(t){const a=b(t);return a===t?a:(Z(a,"iterate",H2),F1(t)?a:a.map(q1))}function Yt(t){return Z(t=b(t),"iterate",H2),t}function h1(t,a){return B1(t)?hc(t)?C2(q1(a)):C2(a):q1(a)}var E6={__proto__:null,[Symbol.iterator](){return z0(this,Symbol.iterator,t=>h1(this,t))},concat(...t){return $1(this).concat(...t.map(a=>A2(a)?$1(a):a))},entries(){return z0(this,"entries",t=>(t[1]=h1(this,t[1]),t))},every(t,a){return o1(this,"every",t,a,void 0,arguments)},filter(t,a){return o1(this,"filter",t,a,e=>e.map(h=>h1(this,h)),arguments)},find(t,a){return o1(this,"find",t,a,e=>h1(this,e),arguments)},findIndex(t,a){return o1(this,"findIndex",t,a,void 0,arguments)},findLast(t,a){return o1(this,"findLast",t,a,e=>h1(this,e),arguments)},findLastIndex(t,a){return o1(this,"findLastIndex",t,a,void 0,arguments)},forEach(t,a){return o1(this,"forEach",t,a,void 0,arguments)},includes(...t){return T0(this,"includes",t)},indexOf(...t){return T0(this,"indexOf",t)},join(t){return $1(this).join(t)},lastIndexOf(...t){return T0(this,"lastIndexOf",t)},map(t,a){return o1(this,"map",t,a,void 0,arguments)},pop(){return s2(this,"pop")},push(...t){return s2(this,"push",t)},reduce(t,...a){return Na(this,"reduce",t,a)},reduceRight(t,...a){return Na(this,"reduceRight",t,a)},shift(){return s2(this,"shift")},some(t,a){return o1(this,"some",t,a,void 0,arguments)},splice(...t){return s2(this,"splice",t)},toReversed(){return $1(this).toReversed()},toSorted(t){return $1(this).toSorted(t)},toSpliced(...t){return $1(this).toSpliced(...t)},unshift(...t){return s2(this,"unshift",t)},values(){return z0(this,"values",t=>h1(this,t))}};function z0(t,a,e){const h=Yt(t),d=h[a]();return h!==t&&!F1(t)&&(d._next=d.next,d.next=()=>{const r=d._next();return r.done||(r.value=e(r.value)),r}),d}var z6=Array.prototype;function o1(t,a,e,h,d,r){const c=Yt(t),n=c!==t&&!F1(t),p=c[a];if(p!==z6[a]){const l=p.apply(t,r);return n?q1(l):l}let i=e;c!==t&&(n?i=function(l,u){return e.call(this,h1(t,l),u,t)}:e.length>2&&(i=function(l,u){return e.call(this,l,u,t)}));const s=p.call(c,i,h);return n&&d?d(s):s}function Na(t,a,e,h){const d=Yt(t),r=d!==t&&!F1(t);let c=e,n=!1;d!==t&&(r?(n=h.length===0,c=function(i,s,l){return n&&(n=!1,i=h1(t,i)),e.call(this,i,h1(t,s),l,t)}):e.length>3&&(c=function(i,s,l){return e.call(this,i,s,l,t)}));const p=d[a](c,...h);return n?h1(t,p):p}function T0(t,a,e){const h=b(t);Z(h,"iterate",H2);const d=h[a](...e);return(d===-1||d===!1)&&G6(e[0])?(e[0]=b(e[0]),h[a](...e)):d}function s2(t,a,e=[]){_6(),Xt();const h=b(t)[a].apply(t,e);return Jt(),P6(),h}var T6=x6("__proto__,__v_isRef,__isVue"),Jr=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(P2));function D6(t){P2(t)||(t=String(t));const a=b(this);return Z(a,"has",t),a.hasOwnProperty(t)}var Qr=class{constructor(t=!1,a=!1){this._isReadonly=t,this._isShallow=a}get(t,a,e){if(a==="__v_skip")return t.__v_skip;const h=this._isReadonly,d=this._isShallow;if(a==="__v_isReactive")return!h;if(a==="__v_isReadonly")return h;if(a==="__v_isShallow")return d;if(a==="__v_raw")return e===(h?d?$6:ac:d?Z6:tc).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(e)?t:void 0;const r=A2(t);if(!h){let n;if(r&&(n=E6[a]))return n;if(a==="hasOwnProperty")return D6}const c=Reflect.get(t,a,m2(t)?t:e);if((P2(a)?Jr.has(a):T6(a))||(h||Z(t,"get",a),d))return c;if(m2(c)){const n=r&&Kt(a)?c:c.value;return h&&w2(n)?wt(n):n}return w2(c)?h?wt(c):ta(c):c}},k6=class extends Qr{constructor(t=!1){super(!1,t)}set(t,a,e,h){let d=t[a];const r=A2(t)&&Kt(a);if(!this._isShallow){const p=B1(d);if(!F1(e)&&!B1(e)&&(d=b(d),e=b(e)),!r&&m2(d)&&!m2(e))return p?(k1(`Set operation on key "${String(a)}" failed: target is readonly.`,t[a]),!0):(d.value=e,!0)}const c=r?Number(a)<t.length:mt(t,a),n=Reflect.set(t,a,e,m2(t)?t:h);return t===b(h)&&n&&(c?V1(e,d)&&x1(t,"set",a,e,d):x1(t,"add",a,e)),n}deleteProperty(t,a){const e=mt(t,a),h=t[a],d=Reflect.deleteProperty(t,a);return d&&e&&x1(t,"delete",a,void 0,h),d}has(t,a){const e=Reflect.has(t,a);return(!P2(a)||!Jr.has(a))&&Z(t,"has",a),e}ownKeys(t){return Z(t,"iterate",A2(t)?"length":_1),Reflect.ownKeys(t)}},B6=class extends Qr{constructor(t=!1){super(!0,t)}set(t,a){return k1(`Set operation on key "${String(a)}" failed: target is readonly.`,t),!0}deleteProperty(t,a){return k1(`Delete operation on key "${String(a)}" failed: target is readonly.`,t),!0}},F6=new k6,q6=new B6,At=t=>t,B2=t=>Reflect.getPrototypeOf(t);function U6(t,a,e){return function(...h){const d=this.__v_raw,r=b(d),c=u2(r),n=t==="entries"||t===Symbol.iterator&&c,p=t==="keys"&&c,i=d[t](...h),s=e?At:a?C2:q1;return!a&&Z(r,"iterate",p?gt:_1),g2(Object.create(i),{next(){const{value:l,done:u}=i.next();return u?{value:l,done:u}:{value:n?[s(l[0]),s(l[1])]:s(l),done:u}}})}}function F2(t){return function(...a){{const e=a[0]?`on key "${a[0]}" `:"";k1(`${H6(t)} operation ${e}failed: target is readonly.`,b(this))}return t==="delete"?!1:t==="clear"?void 0:this}}function N6(t,a){const e={get(d){const r=this.__v_raw,c=b(r),n=b(d);t||(V1(d,n)&&Z(c,"get",d),Z(c,"get",n));const{has:p}=B2(c),i=a?At:t?C2:q1;if(p.call(c,d))return i(r.get(d));if(p.call(c,n))return i(r.get(n));r!==c&&r.get(d)},get size(){const d=this.__v_raw;return!t&&Z(b(d),"iterate",_1),d.size},has(d){const r=this.__v_raw,c=b(r),n=b(d);return t||(V1(d,n)&&Z(c,"has",d),Z(c,"has",n)),d===n?r.has(d):r.has(d)||r.has(n)},forEach(d,r){const c=this,n=c.__v_raw,p=b(n),i=a?At:t?C2:q1;return!t&&Z(p,"iterate",_1),n.forEach((s,l)=>d.call(r,i(s),i(l),c))}};return g2(e,t?{add:F2("add"),set:F2("set"),delete:F2("delete"),clear:F2("clear")}:{add(d){const r=b(this),c=B2(r),n=b(d),p=!a&&!F1(d)&&!B1(d)?n:d;return c.has.call(r,p)||V1(d,p)&&c.has.call(r,d)||V1(n,p)&&c.has.call(r,n)||(r.add(p),x1(r,"add",p,p)),this},set(d,r){!a&&!F1(r)&&!B1(r)&&(r=b(r));const c=b(this),{has:n,get:p}=B2(c);let i=n.call(c,d);i?Ia(c,n,d):(d=b(d),i=n.call(c,d));const s=p.call(c,d);return c.set(d,r),i?V1(r,s)&&x1(c,"set",d,r,s):x1(c,"add",d,r),this},delete(d){const r=b(this),{has:c,get:n}=B2(r);let p=c.call(r,d);p?Ia(r,c,d):(d=b(d),p=c.call(r,d));const i=n?n.call(r,d):void 0,s=r.delete(d);return p&&x1(r,"delete",d,void 0,i),s},clear(){const d=b(this),r=d.size!==0,c=u2(d)?new Map(d):new Set(d),n=d.clear();return r&&x1(d,"clear",void 0,void 0,c),n}}),["keys","values","entries",Symbol.iterator].forEach(d=>{e[d]=U6(d,t,a)}),e}function Yr(t,a){const e=N6(t,a);return(h,d,r)=>d==="__v_isReactive"?!t:d==="__v_isReadonly"?t:d==="__v_raw"?h:Reflect.get(mt(e,d)&&d in h?e:h,d,r)}var I6={get:Yr(!1,!1)},j6={get:Yr(!0,!1)};function Ia(t,a,e){const h=b(e);if(h!==e&&a.call(t,h)){const d=Zr(t);k1(`Reactive ${d} contains both the raw and reactive versions of the same object${d==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var tc=new WeakMap,Z6=new WeakMap,ac=new WeakMap,$6=new WeakMap;function W6(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ta(t){return B1(t)?t:ec(t,!1,F6,I6,tc)}function wt(t){return ec(t,!0,q6,j6,ac)}function ec(t,a,e,h,d){if(!w2(t))return k1(`value cannot be made ${a?"readonly":"reactive"}: ${String(t)}`),t;if(t.__v_raw&&!(a&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const r=d.get(t);if(r)return r;const c=W6(Zr(t));if(c===0)return t;const n=new Proxy(t,c===2?h:e);return d.set(t,n),n}function hc(t){return B1(t)?hc(t.__v_raw):!!(t&&t.__v_isReactive)}function B1(t){return!!(t&&t.__v_isReadonly)}function F1(t){return!!(t&&t.__v_isShallow)}function G6(t){return t?!!t.__v_raw:!1}function b(t){const a=t&&t.__v_raw;return a?b(a):t}var q1=t=>w2(t)?ta(t):t,C2=t=>w2(t)?wt(t):t;function m2(t){return t?t.__v_isRef===!0:!1}a1("nextTick",()=>Zt);a1("dispatch",t=>M2.bind(M2,t));a1("watch",(t,{evaluateLater:a,cleanup:e})=>(h,d)=>{let r=a(h),n=Yd(()=>{let p;return r(i=>p=i),p},d);e(n)});a1("store",l6);a1("data",t=>nr(t));a1("root",t=>M0(t));a1("refs",t=>(t._x_refs_proxy||(t._x_refs_proxy=z1(K6(t))),t._x_refs_proxy));function K6(t){let a=[];return J(t,e=>{e._x_refs&&a.push(e._x_refs)}),a}var D0={};function dc(t){return D0[t]||(D0[t]=0),++D0[t]}function X6(t,a){return J(t,e=>{if(e._x_ids&&e._x_ids[a])return!0})}function J6(t,a){t._x_ids||(t._x_ids={}),t._x_ids[a]||(t._x_ids[a]=dc(a))}a1("id",(t,{cleanup:a})=>(e,h=null)=>{let d=`${e}${h?`-${h}`:""}`;return Q6(t,d,a,()=>{let r=X6(t,e),c=r?r._x_ids[e]:dc(e);return h?`${e}-${c}-${h}`:`${e}-${c}`})});_2((t,a)=>{t._x_id&&(a._x_id=t._x_id)});function Q6(t,a,e,h){if(t._x_id||(t._x_id={}),t._x_id[a])return t._x_id[a];let d=h();return t._x_id[a]=d,e(()=>{delete t._x_id[a]}),d}a1("el",t=>t);rc("Focus","focus","focus");rc("Persist","persist","persist");function rc(t,a,e){a1(a,h=>d1(`You can't use [$${a}] without first installing the "${t}" plugin here: https://alpinejs.dev/plugins/${e}`,h))}D("modelable",(t,{expression:a},{effect:e,evaluateLater:h,cleanup:d})=>{let r=h(a),c=()=>{let s;return r(l=>s=l),s},n=h(`${a} = __placeholder`),p=s=>n(()=>{},{scope:{__placeholder:s}}),i=c();p(i),queueMicrotask(()=>{if(!t._x_model)return;t._x_removeModelListeners.default();let s=t._x_model.get,l=t._x_model.setWithModifiers,u=qr({get(){return s()},set(v){l(v)}},{get(){return c()},set(v){p(v)}});d(u)})});D("teleport",(t,{modifiers:a,expression:e},{cleanup:h})=>{t.tagName.toLowerCase()!=="template"&&d1("x-teleport can only be used on a <template> tag",t);let d=ja(e),r=t.content.cloneNode(!0).firstElementChild;t._x_teleport=r,r._x_teleportBack=t,t.setAttribute("data-teleport-template",!0),r.setAttribute("data-teleport-target",!0),t._x_forwardEvents&&t._x_forwardEvents.forEach(n=>{r.addEventListener(n,p=>{p.stopPropagation(),t.dispatchEvent(new p.constructor(p.type,p))})}),b2(r,{},t);let c=(n,p,i)=>{i.includes("prepend")?p.parentNode.insertBefore(n,p):i.includes("append")?p.parentNode.insertBefore(n,p.nextSibling):p.appendChild(n)};O(()=>{f1(()=>{c(r,d,a),r1(r)})()}),t._x_teleportPutBack=()=>{let n=ja(e);O(()=>{c(t._x_teleport,n,a)})},h(()=>O(()=>{r.remove(),N1(r)}))});var Y6=document.createElement("div");function ja(t){let a=f1(()=>document.querySelector(t),()=>Y6)();return a||d1(`Cannot find x-teleport element for selector: "${t}"`),a}var cc=()=>{};cc.inline=(t,{modifiers:a},{cleanup:e})=>{a.includes("self")?t._x_ignoreSelf=!0:t._x_ignore=!0,e(()=>{a.includes("self")?delete t._x_ignoreSelf:delete t._x_ignore})};D("ignore",cc);D("effect",f1((t,{expression:a},{effect:e})=>{e(j(t,a))}));function W1(t,a,e,h){let d=t,r=p=>h(p),c={},n=(p,i)=>s=>i(p,s);return e.includes("dot")&&(a=t8(a)),e.includes("camel")&&(a=a8(a)),e.includes("capture")&&(c.capture=!0),e.includes("window")&&(d=window),e.includes("document")&&(d=document),e.includes("passive")&&(c.passive=e[e.indexOf("passive")+1]!=="false"),r=nc(e,r),e.includes("prevent")&&(r=n(r,(p,i)=>{i.preventDefault(),p(i)})),e.includes("stop")&&(r=n(r,(p,i)=>{i.stopPropagation(),p(i)})),e.includes("once")&&(r=n(r,(p,i)=>{p(i),d.removeEventListener(a,r,c)})),(e.includes("away")||e.includes("outside"))&&(d=document,r=n(r,(p,i)=>{t.contains(i.target)||i.target.isConnected!==!1&&(t.offsetWidth<1&&t.offsetHeight<1||t._x_isShown!==!1&&p(i))})),e.includes("self")&&(r=n(r,(p,i)=>{i.target===t&&p(i)})),a==="submit"&&(r=n(r,(p,i)=>{i.target._x_pendingModelUpdates&&i.target._x_pendingModelUpdates.forEach(s=>s()),p(i)})),(h8(a)||pc(a))&&(r=n(r,(p,i)=>{r8(i,e)||p(i)})),d.addEventListener(a,r,c),()=>{d.removeEventListener(a,r,c)}}function nc(t,a){if(t.includes("debounce")){let e=t[t.indexOf("debounce")+1]||"invalid-wait",h=h0(e.split("ms")[0])?Number(e.split("ms")[0]):250;a=Br(a,h)}if(t.includes("throttle")){let e=t[t.indexOf("throttle")+1]||"invalid-wait",h=h0(e.split("ms")[0])?Number(e.split("ms")[0]):250;a=Fr(a,h)}return a}function t8(t){return t.replace(/-/g,".")}function a8(t){return t.toLowerCase().replace(/-(\w)/g,(a,e)=>e.toUpperCase())}function h0(t){return!Array.isArray(t)&&!isNaN(t)}function e8(t){return[" ","_"].includes(t)?t:t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function h8(t){return["keydown","keyup"].includes(t)}function pc(t){return["contextmenu","click","mouse"].some(a=>t.includes(a))}var d8=["window","document","prevent","stop","once","capture","self","away","outside","passive","dot","camel","preserve-scroll","blur","change","lazy","number","boolean","trim","fill","unintrusive","parent"];function r8(t,a){let e=a.filter((r,c)=>r==="false"&&a[c-1]==="passive"?!1:!d8.includes(r));if(e.includes("debounce")){let r=e.indexOf("debounce");e.splice(r,h0((e[r+1]||"invalid-wait").split("ms")[0])?2:1)}if(e.includes("throttle")){let r=e.indexOf("throttle");e.splice(r,h0((e[r+1]||"invalid-wait").split("ms")[0])?2:1)}if(e.length===0||e.length===1&&Za(t.key).includes(e[0]))return!1;const d=["ctrl","shift","alt","meta","cmd","super"].filter(r=>e.includes(r));return e=e.filter(r=>!d.includes(r)),!(d.length>0&&d.filter(c=>((c==="cmd"||c==="super")&&(c="meta"),t[`${c}Key`])).length===d.length&&(pc(t.type)||Za(t.key).includes(e[0])))}function Za(t){if(!t)return[];t=e8(t);let a={ctrl:"control",slash:"/",space:" ",spacebar:" ",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",comma:",",equal:"=",minus:"-",underscore:"_"};return a[t]=t,Object.keys(a).map(e=>{if(a[e]===t)return e}).filter(e=>e)}D("model",(t,{modifiers:a,expression:e},{effect:h,cleanup:d})=>{let r=t;a.includes("parent")&&(r=J(t,m=>m!==t));let c=j(r,e),n;typeof e=="string"?n=j(r,`${e} = __placeholder`):typeof e=="function"&&typeof e()=="string"?n=j(r,`${e()} = __placeholder`):n=()=>{};let p=()=>{let m;return c(g=>m=g),$a(m)?m.get():m},i=m=>{let g;c(w=>g=w),$a(g)?g.set(m):n(()=>{},{scope:{__placeholder:m}})};typeof e=="string"&&t.type==="radio"&&O(()=>{t.hasAttribute("name")||t.setAttribute("name",e)});let s=a.includes("change")||a.includes("lazy"),l=a.includes("blur"),u=a.includes("enter"),v=s||l||u,A;if(u1)A=()=>{};else if(v){let m=[],g=w=>i(q2(t,a,w,p()));if(s&&m.push(W1(t,"change",a,g)),l&&(m.push(W1(t,"blur",a,g)),t.form)){let w=t.form,y=()=>g({target:t});w._x_pendingModelUpdates||(w._x_pendingModelUpdates=[]),w._x_pendingModelUpdates.push(y),d(()=>{w._x_pendingModelUpdates&&w._x_pendingModelUpdates.splice(w._x_pendingModelUpdates.indexOf(y),1)})}u&&m.push(W1(t,"keydown",a,w=>{w.key==="Enter"&&g(w)})),A=()=>m.forEach(w=>w())}else{let m=t.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(t.type)?"change":"input";A=W1(t,m,a,g=>{i(q2(t,a,g,p()))})}if(a.includes("fill")&&([void 0,null,""].includes(p())||a0(t)&&Array.isArray(p())||t.tagName.toLowerCase()==="select"&&t.multiple)&&i(q2(t,a,{target:t},p())),t._x_removeModelListeners||(t._x_removeModelListeners={}),t._x_removeModelListeners.default=A,d(()=>t._x_removeModelListeners.default()),t.form){let m=W1(t.form,"reset",[],g=>{Zt(()=>t._x_model&&t._x_model.set(q2(t,a,{target:t},p())))});d(()=>m())}if(t._x_model={get(){return p()},set(m){i(m)},setWithModifiers:nc(a,i)},t._x_forceModelUpdate=m=>{m===void 0&&typeof e=="string"&&e.match(/\./)&&(m=""),O(()=>{a0(t)?Array.isArray(m)?t.checked=m.some(g=>g==t.value):t.checked=!!m:Gt(t)?typeof m=="boolean"?t.checked=G2(t.value)===m:t.checked=t.value==m:Tr(t,"value",m)})},t.tagName==="SELECT"){let m=new MutationObserver(()=>{t._x_forceModelUpdate(p())});m.observe(t,{childList:!0}),d(()=>m.disconnect())}h(()=>{let m=p();a.includes("unintrusive")&&document.activeElement.isSameNode(t)||t._x_forceModelUpdate(m)})});function q2(t,a,e,h){return O(()=>{if(e instanceof CustomEvent&&e.detail!==void 0)return e.detail!==null&&e.detail!==void 0?e.detail:e.target.value;if(a0(t))if(Array.isArray(h)){let d=null;return a.includes("number")?d=k0(e.target.value):a.includes("boolean")?d=G2(e.target.value):d=e.target.value,e.target.checked?h.includes(d)?h:h.concat([d]):h.filter(r=>!c8(r,d))}else return e.target.checked;else{if(t.tagName.toLowerCase()==="select"&&t.multiple)return a.includes("number")?Array.from(e.target.selectedOptions).map(d=>{let r=d.value||d.text;return k0(r)}):a.includes("boolean")?Array.from(e.target.selectedOptions).map(d=>{let r=d.value||d.text;return G2(r)}):Array.from(e.target.selectedOptions).map(d=>d.value||d.text);{let d;return Gt(t)?e.target.checked?d=e.target.value:d=h:d=e.target.value,a.includes("number")?k0(d):a.includes("boolean")?G2(d):a.includes("trim")?d.trim():d}}})}function k0(t){let a=t?parseFloat(t):null;return n8(a)?a:t}function c8(t,a){return t==a}function n8(t){return!Array.isArray(t)&&!isNaN(t)}function $a(t){return t!==null&&typeof t=="object"&&typeof t.get=="function"&&typeof t.set=="function"}D("cloak",t=>{if(u1)return t.removeAttribute(T1("cloak"));queueMicrotask(()=>O(()=>t.removeAttribute(T1("cloak"))))});Or(()=>`[${T1("init")}]`);D("init",f1((t,{expression:a},{evaluate:e})=>typeof a=="string"?!!a.trim()&&e(a,{},!1):e(a,{},!1)));D("text",(t,{expression:a},{effect:e,evaluateLater:h})=>{let d=h(a);e(()=>{d(r=>{O(()=>{t.textContent=r})})})});D("html",(t,{expression:a},{effect:e,evaluateLater:h})=>{let d=h(a);e(()=>{d(r=>{O(()=>{Array.from(t.children).forEach(c=>N1(c)),t.innerHTML=r??"",t._x_ignoreSelf=!0,r1(t),delete t._x_ignoreSelf})})},{priority:"structural"})});Nt(xr(":",yr(T1("bind:"))));var oc=(t,{value:a,modifiers:e,expression:h,original:d},{effect:r,cleanup:c})=>{if(!a){let p={};u6(p),j(t,h)(s=>{Nr(t,s,d)},{scope:p});return}if(a==="key")return p8(t,h);if(t._x_inlineBindings&&t._x_inlineBindings[a]&&t._x_inlineBindings[a].extract)return;let n=j(t,h);r(()=>n(p=>{p===void 0&&typeof h=="string"&&h.match(/\./)&&(p=""),O(()=>Tr(t,a,p,e))})),c(()=>{t._x_undoAddedClasses&&t._x_undoAddedClasses(),t._x_undoAddedStyles&&t._x_undoAddedStyles()})};oc.inline=(t,{value:a,modifiers:e,expression:h})=>{a&&(t._x_inlineBindings||(t._x_inlineBindings={}),t._x_inlineBindings[a]={expression:h,extract:!1})};D("bind",oc);function p8(t,a){t._x_keyExpression=a}Pr(()=>`[${T1("data")}]`);var H1=Symbol();D("data",(t,{expression:a},{cleanup:e})=>{if(i8(t))return;let h=t[H1];if((h==null?void 0:h.expression)===a)return;a=a===""?"{}":a;let d={};x2(d,t);let r={};v6(r,d);let c=b1(t,a,{scope:r});(c===void 0||c===!0)&&(c={}),x2(c,t);let n;if(h!=null&&h.reactiveData){n=h.reactiveData,o8(n,c);let i={expression:a};t[H1]=i,queueMicrotask(()=>{t[H1]===i&&delete t[H1]})}else n=Q1(c);qt(n,e);let p=b2(t,n);f1(()=>{n.init&&b1(t,n.init)})(),e(()=>{n.destroy&&b1(t,n.destroy),p();let i={reactiveData:n};t[H1]=i,queueMicrotask(()=>{t[H1]===i&&delete t[H1]})})});function o8(t,a){Object.keys(a).forEach(e=>{let h=Object.getOwnPropertyDescriptor(a,e),d=Object.getOwnPropertyDescriptor(t,e);h.get||h.set||d!=null&&d.get||d!=null&&d.set?(d&&delete t[e],d||(t[e]=void 0),h.get||h.set?Object.defineProperty(t,e,h):t[e]=a[e]):t[e]=a[e]}),Object.keys(t).filter(e=>!Object.prototype.hasOwnProperty.call(a,e)).forEach(e=>delete t[e])}_2((t,a)=>{t._x_dataStack&&(a._x_dataStack=t._x_dataStack,a.setAttribute("data-has-alpine-state",!0))});function i8(t){return u1?st?!0:t.hasAttribute("data-has-alpine-state"):!1}D("show",(t,{modifiers:a,expression:e},{effect:h})=>{let d=j(t,e);t._x_doHide||(t._x_doHide=()=>{O(()=>{t.style.setProperty("display","none",a.includes("important")?"important":void 0)})}),t._x_doShow||(t._x_doShow=()=>{O(()=>{t.style.length===1&&t.style.display==="none"?t.removeAttribute("style"):t.style.removeProperty("display")})});let r=()=>{t._x_doHide(),t._x_isShown=!1},c=()=>{t._x_doShow(),t._x_isShown=!0},n=()=>setTimeout(c),p=ft(l=>l?c():r(),l=>{typeof t._x_toggleAndCascadeWithTransitions=="function"?t._x_toggleAndCascadeWithTransitions(t,l,c,r):l?n():r()}),i,s=!0;h(()=>d(l=>{!s&&l===i||(a.includes("immediate")&&(l?n():r()),p(l),i=l,s=!1)}))});D("for",f1((t,{expression:a},{effect:e,cleanup:h})=>{let d=M8(a),r=j(t,d.items),c=j(t,t._x_keyExpression||"index");t._x_lookup=new Map,e(()=>l8(t,d,r,c),{priority:"structural"}),h(()=>{t._x_lookup.forEach(n=>O(()=>{N1(n),n.remove()})),delete t._x_lookup,delete t._x_lastRenderedEl})}));function s8(t){return a=>{Object.entries(a).forEach(([e,h])=>{t[e]=h})}}function l8(t,a,e,h){e(d=>{f8(d)&&(d=Array.from({length:d},(i,s)=>s+1)),d==null&&(d=[]),d instanceof Set&&(d=Array.from(d)),d instanceof Map&&(d=Array.from(d));let r=t._x_lookup,c=new Map;t._x_lookup=c;let n=v8(d),p=Object.entries(d).map(([i,s])=>{n||(i=parseInt(i));let l=u8(a,s,i,d),u;return h(v=>{typeof v=="object"&&d1("x-for key cannot be an object, it must be a string or an integer",t),r.has(v)&&(c.set(v,r.get(v)),r.delete(v)),u=v},{scope:{index:i,...l}}),[u,l]});O(()=>{r.forEach(l=>{N1(l),l.remove()});let i=new Set,s=t;p.forEach(([l,u])=>{if(c.has(l)){let m=c.get(l);m._x_refreshXForScope(u),s.nextElementSibling!==m&&(s.nextElementSibling&&m.replaceWith(s.nextElementSibling),s.after(m)),s=m,m._x_currentIfEl&&(m.nextElementSibling!==m._x_currentIfEl&&s.after(m._x_currentIfEl),s=m._x_currentIfEl);return}t.content.children.length>1&&d1("x-for templates require a single root element, additional elements will be ignored.",t);let v=document.importNode(t.content,!0).firstElementChild,A=Q1(u);b2(v,A,t),v._x_refreshXForScope=s8(A),c.set(l,v),i.add(v),s.after(v),s=v}),i.forEach(l=>r1(l)),s!==t?t._x_lastRenderedEl=s:delete t._x_lastRenderedEl})})}function M8(t){let a=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,e=/^\s*\(|\)\s*$/g,h=/([\s\S]*?)\b(?:in|of)\b([\s\S]*)/,d=t.match(h);if(!d)return;let r={};r.items=d[2].trim();let c=d[1].replace(e,"").trim(),n=c.match(a);return n?(r.item=c.replace(a,"").trim(),r.index=n[1].trim(),n[2]&&(r.collection=n[2].trim())):r.item=c,r}function u8(t,a,e,h){let d={};return/^\[.*\]$/.test(t.item)&&Array.isArray(a)?t.item.replace("[","").replace("]","").split(",").map(c=>c.trim()).forEach((c,n)=>{d[c]=a[n]}):/^\{.*\}$/.test(t.item)&&!Array.isArray(a)&&typeof a=="object"?t.item.replace("{","").replace("}","").split(",").map(c=>c.trim()).forEach(c=>{d[c]=a[c]}):d[t.item]=a,t.index&&(d[t.index]=e),t.collection&&(d[t.collection]=h),d}function f8(t){return typeof t!="object"&&!isNaN(t)}function v8(t){return typeof t=="object"&&!Array.isArray(t)}function ic(){}ic.inline=(t,{expression:a},{cleanup:e})=>{let h=M0(t);h&&(h._x_refs||(h._x_refs={}),h._x_refs[a]=t,e(()=>delete h._x_refs[a]))};D("ref",ic);D("if",f1((t,{expression:a},{effect:e,cleanup:h})=>{t.tagName.toLowerCase()!=="template"&&d1("x-if can only be used on a <template> tag",t);let d=j(t,a),r=()=>{if(t._x_currentIfEl)return t._x_currentIfEl;let n=t.content.cloneNode(!0).firstElementChild;return b2(n,{},t),O(()=>{t.after(n),r1(n)}),t._x_currentIfEl=n,t._x_lastRenderedEl=n,t._x_undoIf=()=>{O(()=>{N1(n),n.remove()}),delete t._x_currentIfEl,delete t._x_lastRenderedEl},n},c=()=>{t._x_undoIf&&(t._x_undoIf(),delete t._x_undoIf)};e(()=>d(n=>{n?r():c()}),{priority:"structural"}),h(()=>t._x_undoIf&&t._x_undoIf())}));D("id",(t,{expression:a},{evaluate:e})=>{e(a).forEach(d=>J6(t,d))});_2((t,a)=>{t._x_ids&&(a._x_ids=t._x_ids)});Nt(xr("@",yr(T1("on:"))));D("on",f1((t,{value:a,modifiers:e,expression:h},{cleanup:d})=>{let r=h?j(t,h):()=>{};t.tagName.toLowerCase()==="template"&&(t._x_forwardEvents||(t._x_forwardEvents=[]),t._x_forwardEvents.includes(a)||t._x_forwardEvents.push(a));let c=W1(t,a,e,n=>{r(()=>{},{scope:{$event:n},params:[n]})});d(()=>c())}));f0("Collapse","collapse","collapse");f0("Intersect","intersect","intersect");f0("Focus","trap","focus");f0("Mask","mask","mask");function f0(t,a,e){D(a,h=>d1(`You can't use [x-${a}] without first installing the "${t}" plugin here: https://alpinejs.dev/plugins/${e}`,h))}t2.setEvaluator(mp);t2.setRawEvaluator(wp);t2.setReactivityEngine({reactive:ta,effect:(t,a={})=>{let e;return e=L6(t,{scheduler:()=>{e&&(a.scheduler?a.scheduler(e):e())}}),e},release:b6,raw:b});var m8=t2,I1=m8;/*! Bundled license information:

@vue/shared/dist/shared.esm-bundler.js:
  (**
  * @vue/shared v3.5.41
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@vue/reactivity/dist/reactivity.esm-bundler.js:
  (**
  * @vue/reactivity v3.5.41
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
*//**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=([t,a,e])=>{const h=document.createElementNS("http://www.w3.org/2000/svg",t);return Object.keys(a).forEach(d=>{h.setAttribute(d,String(a[d]))}),e!=null&&e.length&&e.forEach(d=>{const r=lc(d);h.appendChild(r)}),h},x8=(t,a={})=>{const e="svg",h={...sc,...a};return lc([e,h,t])};/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y8=(...t)=>t.filter((a,e,h)=>!!a&&a.trim()!==""&&h.indexOf(a)===e).join(" ").trim();/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g8=t=>{for(const a in t)if(a.startsWith("aria-")||a==="role"||a==="title")return!0;return!1};/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A8=t=>{let a="",e=!1;for(const h of t){if(h==="-"||h==="_"||h<=" "){e=a.length>0;continue}a.length===0?a+=h.toLowerCase():a+=e?h.toUpperCase():h,e=!1}return a};/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w8=t=>{const a=A8(t);return a.charAt(0).toUpperCase()+a.slice(1)};/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H8=t=>Array.from(t.attributes).reduce((a,e)=>(a[e.name]=e.value,a),{}),Wa=t=>typeof t=="string"?t:!t||!t.class?"":t.class&&typeof t.class=="string"?t.class.split(" "):t.class&&Array.isArray(t.class)?t.class:"",Ga=(t,{nameAttr:a,icons:e,attrs:h})=>{var A;const d=t.getAttribute(a);if(d==null)return;const r=w8(d),c=e[r];if(!c)return console.warn(`${t.outerHTML} icon name was not found in the provided icons object.`);const n=H8(t),p=g8(n)?{}:{"aria-hidden":"true"},i={...sc,"data-lucide":d,...p,...h,...n},s=Wa(n),l=Wa(h),u=y8("lucide",`lucide-${d}`,...s,...l);u&&Object.assign(i,{class:u});const v=x8(c,i);return(A=t.parentNode)==null?void 0:A.replaceChild(v,t)};/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C8=[["path",{d:"m14 12 4 4 4-4"}],["path",{d:"M18 16V7"}],["path",{d:"m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16"}],["path",{d:"M3.304 13h6.392"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V8=[["path",{d:"m14 11 4-4 4 4"}],["path",{d:"M18 16V7"}],["path",{d:"m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16"}],["path",{d:"M3.304 13h6.392"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S8=[["path",{d:"m15 16 2.536-7.328a1.02 1.02 1 0 1 1.928 0L22 16"}],["path",{d:"M15.697 14h5.606"}],["path",{d:"m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16"}],["path",{d:"M3.304 13h6.392"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L8=[["circle",{cx:"16",cy:"4",r:"1"}],["path",{d:"m18 19 1-7-6 1"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b8=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _8=[["path",{d:"M10 13H6"}],["path",{d:"M10 15v-4a2 2 0 0 0-4 0v4"}],["path",{d:"M14 14.5a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 15.5 9h-1a.5.5 0 0 0-.5.5z"}],["rect",{x:"2",y:"5",width:"20",height:"14",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P8=[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"}],["path",{d:"m12 15 5 6H7Z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O8=[["path",{d:"M18 17.5a2.5 2.5 0 1 1-4 2.03V12"}],["path",{d:"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 8h12"}],["path",{d:"M6.6 15.572A2 2 0 1 0 10 17v-5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"m9 13 2 2 4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xa=[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"M9 13h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R8=[["path",{d:"M6.87 6.87a8 8 0 1 0 11.26 11.26"}],["path",{d:"M19.9 14.25a8 8 0 0 0-9.15-9.15"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.26 18.67 4 21"}],["path",{d:"m2 2 20 20"}],["path",{d:"M4 4 2 6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E8=[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M12 9v4l2 2"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z8=[["path",{d:"M11 21c0-2.5 2-2.5 2-5"}],["path",{d:"M16 21c0-2.5 2-2.5 2-5"}],["path",{d:"m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8"}],["path",{d:"M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z"}],["path",{d:"M6 21c0-2.5 2-2.5 2-5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T8=[["path",{d:"M2 12h20"}],["path",{d:"M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"}],["path",{d:"M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"}],["path",{d:"M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1"}],["path",{d:"M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D8=[["path",{d:"M12 2v20"}],["path",{d:"M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4"}],["path",{d:"M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"}],["path",{d:"M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1"}],["path",{d:"M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k8=[["rect",{width:"6",height:"16",x:"4",y:"2",rx:"2"}],["rect",{width:"6",height:"9",x:"14",y:"9",rx:"2"}],["path",{d:"M22 22H2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B8=[["rect",{width:"16",height:"6",x:"2",y:"4",rx:"2"}],["rect",{width:"9",height:"6",x:"9",y:"14",rx:"2"}],["path",{d:"M22 22V2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F8=[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M17 22v-5"}],["path",{d:"M17 7V2"}],["path",{d:"M7 22v-3"}],["path",{d:"M7 5V2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q8=[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M4 2v20"}],["path",{d:"M14 2v20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U8=[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M10 2v20"}],["path",{d:"M20 2v20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N8=[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2"}],["path",{d:"M12 2v20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I8=[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"12",y:"7",rx:"2"}],["path",{d:"M22 2v20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j8=[["rect",{width:"6",height:"14",x:"6",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2"}],["path",{d:"M2 2v20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z8=[["rect",{width:"6",height:"10",x:"9",y:"7",rx:"2"}],["path",{d:"M4 22V2"}],["path",{d:"M20 22V2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $8=[["rect",{width:"6",height:"14",x:"3",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"15",y:"7",rx:"2"}],["path",{d:"M3 2v20"}],["path",{d:"M21 2v20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W8=[["rect",{width:"6",height:"16",x:"4",y:"6",rx:"2"}],["rect",{width:"6",height:"9",x:"14",y:"6",rx:"2"}],["path",{d:"M22 2H2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G8=[["rect",{width:"9",height:"6",x:"6",y:"14",rx:"2"}],["rect",{width:"16",height:"6",x:"6",y:"4",rx:"2"}],["path",{d:"M2 2v20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K8=[["path",{d:"M22 17h-3"}],["path",{d:"M22 7h-5"}],["path",{d:"M5 17H2"}],["path",{d:"M7 7H2"}],["rect",{x:"5",y:"14",width:"14",height:"6",rx:"2"}],["rect",{x:"7",y:"4",width:"10",height:"6",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X8=[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2"}],["path",{d:"M2 20h20"}],["path",{d:"M2 10h20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J8=[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2"}],["path",{d:"M2 14h20"}],["path",{d:"M2 4h20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q8=[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2"}],["path",{d:"M2 12h20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y8=[["rect",{width:"14",height:"6",x:"5",y:"12",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2"}],["path",{d:"M2 22h20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"6",rx:"2"}],["path",{d:"M2 2h20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=[["rect",{width:"10",height:"6",x:"7",y:"9",rx:"2"}],["path",{d:"M22 20H2"}],["path",{d:"M22 4H2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=[["rect",{width:"14",height:"6",x:"5",y:"15",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"3",rx:"2"}],["path",{d:"M2 21h20"}],["path",{d:"M2 3h20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=[["path",{d:"M10 10H6"}],["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"}],["path",{d:"M8 8v4"}],["path",{d:"M9 18h6"}],["circle",{cx:"17",cy:"18",r:"2"}],["circle",{cx:"7",cy:"18",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=[["path",{d:"M16 12h3"}],["path",{d:"M17.5 12a8 8 0 0 1-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=[["path",{d:"M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"}],["path",{d:"M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=[["path",{d:"M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8"}],["path",{d:"M10 5H8a2 2 0 0 0 0 4h.68"}],["path",{d:"M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8"}],["path",{d:"M14 5h2a2 2 0 0 1 0 4h-.68"}],["path",{d:"M18 22H6"}],["path",{d:"M9 2h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=[["path",{d:"M12 6v16"}],["path",{d:"m19 13 2-1a9 9 0 0 1-18 0l2 1"}],["path",{d:"M9 11h6"}],["circle",{cx:"12",cy:"4",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M3 11a10 10 0 0 1 10 10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=[["path",{d:"M2 12 7 2"}],["path",{d:"m7 12 5-10"}],["path",{d:"m12 12 5-10"}],["path",{d:"m17 12 5-10"}],["path",{d:"M4.5 7h15"}],["path",{d:"M12 16v6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=[["path",{d:"M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4"}],["path",{d:"M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z"}],["path",{d:"M9 12v5"}],["path",{d:"M15 12v5"}],["path",{d:"M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m14.31 8 5.74 9.94"}],["path",{d:"M9.69 8h11.48"}],["path",{d:"m7.38 12 5.74-9.94"}],["path",{d:"M9.69 16 3.95 6.06"}],["path",{d:"M14.31 16H2.83"}],["path",{d:"m16.62 12-5.74 9.94"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M6 8h.01"}],["path",{d:"M10 8h.01"}],["path",{d:"M14 8h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}],["path",{d:"M10 4v4"}],["path",{d:"M2 8h20"}],["path",{d:"M6 4v4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=[["path",{d:"M12 6.528V3a1 1 0 0 1 1-1h0"}],["path",{d:"M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h.343"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-.343"}],["path",{d:"m9 18 3 3 3-3"}],["path",{d:"M12 12v9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2"}],["path",{d:"m9 15 3-3 3 3"}],["path",{d:"M12 12v9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"m9.5 17 5-5"}],["path",{d:"m9.5 12 5 5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=[["path",{d:"M11 10h8"}],["path",{d:"M11 14h8"}],["path",{d:"M17 20V10a6 6 0 0 0-12 0"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=[["path",{d:"M14 8a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h3.293a.707.707 0 0 1 .5 1.207l-6.939 6.939a1.207 1.207 0 0 1-1.708 0l-6.94-6.94a.707.707 0 0 1 .5-1.206H8a1 1 0 0 0 1-1V9a1 1 0 0 1 1-1z"}],["path",{d:"M9 4h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=[["path",{d:"M9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 0 1 1h3.293a.707.707 0 0 1 .5 1.207l-7.086 7.086a1 1 0 0 1-1.414 0l-7.086-7.086a.707.707 0 0 1 .5-1.207H8a1 1 0 0 0 1-1z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=[["path",{d:"M13 9a1 1 0 0 1-1-1V4.707a.707.707 0 0 0-1.207-.5l-6.94 6.94a1.207 1.207 0 0 0 0 1.707l6.94 6.94a.707.707 0 0 0 1.207-.5V16a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z"}],["path",{d:"M20 9v6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=[["path",{d:"M10.793 19.793a.707.707 0 0 0 1.207-.5V16a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-6a1 1 0 0 1-1-1V4.707a.707.707 0 0 0-1.207-.5l-6.94 6.94a1.207 1.207 0 0 0 0 1.707z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=[["path",{d:"M13.207 19.793a.707.707 0 0 1-1.207-.5V16a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1V4.707a.707.707 0 0 1 1.207-.5l6.94 6.94a1.207 1.207 0 0 1 0 1.707z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=[["path",{d:"M11 9a1 1 0 0 0 1-1V4.707a.707.707 0 0 1 1.207-.5l6.94 6.94a1.207 1.207 0 0 1 0 1.707l-6.94 6.94a.707.707 0 0 1-1.207-.5V16a1 1 0 0 0-1-1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"}],["path",{d:"M4 9v6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=[["path",{d:"M14 16a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1h3.293a.707.707 0 0 0 .5-1.207l-6.939-6.939a1.207 1.207 0 0 0-1.708 0l-6.94 6.94a.707.707 0 0 0 .5 1.206H8a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1z"}],["path",{d:"M9 20h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=[["path",{d:"M9 19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6a1 1 0 0 1 1-1h3.293a.707.707 0 0 0 .5-1.207l-7.086-7.086a1 1 0 0 0-1.414 0l-7.086 7.086a.707.707 0 0 0 .5 1.207H8a1 1 0 0 1 1 1z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2"}],["path",{d:"M17 20v-6h-2"}],["path",{d:"M15 20h4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M17 10V4h-2"}],["path",{d:"M15 10h4"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M20 8h-5"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10"}],["path",{d:"M15 14h5l-5 6h5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=[["path",{d:"M17 7 7 17"}],["path",{d:"M17 17H7V7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M11 4h4"}],["path",{d:"M11 8h7"}],["path",{d:"M11 12h10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=[["path",{d:"M19 3H5"}],["path",{d:"M12 21V7"}],["path",{d:"m6 15 6 6 6-6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=[["path",{d:"m7 7 10 10"}],["path",{d:"M17 7v10H7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=[["path",{d:"M12 2v14"}],["path",{d:"m19 9-7 7-7-7"}],["circle",{cx:"12",cy:"21",r:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=[["path",{d:"M12 17V3"}],["path",{d:"m6 11 6 6 6-6"}],["path",{d:"M19 21H5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"m21 8-4-4-4 4"}],["path",{d:"M17 4v16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 4v16"}],["path",{d:"M15 4h5l-5 6h5"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"}],["path",{d:"M20 18h-5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M11 4h10"}],["path",{d:"M11 8h7"}],["path",{d:"M11 12h4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=[["path",{d:"m9 6-6 6 6 6"}],["path",{d:"M3 12h14"}],["path",{d:"M21 19V5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=[["path",{d:"M3 19V5"}],["path",{d:"m13 6-6 6 6 6"}],["path",{d:"M7 12h14"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=[["path",{d:"M8 3 4 7l4 4"}],["path",{d:"M4 7h16"}],["path",{d:"m16 21 4-4-4-4"}],["path",{d:"M20 17H4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=[["path",{d:"M3 5v14"}],["path",{d:"M21 12H7"}],["path",{d:"m15 18 6-6-6-6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=[["path",{d:"m16 3 4 4-4 4"}],["path",{d:"M20 7H4"}],["path",{d:"m8 21-4-4 4-4"}],["path",{d:"M4 17h16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=[["path",{d:"M17 12H3"}],["path",{d:"m11 18 6-6-6-6"}],["path",{d:"M21 5v14"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2"}],["path",{d:"M17 20v-6h-2"}],["path",{d:"M15 20h4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M17 10V4h-2"}],["path",{d:"M15 10h4"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M20 8h-5"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10"}],["path",{d:"M15 14h5l-5 6h5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=[["path",{d:"m21 16-4 4-4-4"}],["path",{d:"M17 20V4"}],["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=[["path",{d:"m5 9 7-7 7 7"}],["path",{d:"M12 16V2"}],["circle",{cx:"12",cy:"21",r:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=[["path",{d:"m18 9-6-6-6 6"}],["path",{d:"M12 3v14"}],["path",{d:"M5 21h14"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=[["path",{d:"M7 17V7h10"}],["path",{d:"M17 17 7 7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M11 12h4"}],["path",{d:"M11 16h7"}],["path",{d:"M11 20h10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=[["path",{d:"M5 3h14"}],["path",{d:"m18 13-6-6-6 6"}],["path",{d:"M12 7v14"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M11 12h10"}],["path",{d:"M11 16h7"}],["path",{d:"M11 20h4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M15 4h5l-5 6h5"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"}],["path",{d:"M20 18h-5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ei=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=[["path",{d:"m4 6 3-3 3 3"}],["path",{d:"M7 17V3"}],["path",{d:"m14 6 3-3 3 3"}],["path",{d:"M17 17V3"}],["path",{d:"M4 21h16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=[["path",{d:"M12 5v14"}],["path",{d:"m18.065 8.496-12.125 7"}],["path",{d:"m5.94 8.504 12.125 7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=[["path",{d:"M12.983 21.186a1 1 0 0 1-1.966 0 10 10 0 0 0-8.203-8.203 1 1 0 0 1 0-1.966 10 10 0 0 0 8.203-8.203 1 1 0 0 1 1.966 0 10 10 0 0 0 8.203 8.203 1 1 0 0 1 0 1.966 10 10 0 0 0-8.203 8.203"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=[["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=[["path",{d:"M10 10v11"}],["path",{d:"M10 3v1.35"}],["path",{d:"M14 14v1"}],["path",{d:"M14 8v.35"}],["path",{d:"M18 5v7.35"}],["path",{d:"M2 10v3"}],["path",{d:"m2 2 20 20"}],["path",{d:"M22 10v3"}],["path",{d:"M6 6v11"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oi=[["path",{d:"M10 3v18"}],["path",{d:"M14 8v6.35"}],["path",{d:"m17 17 5 5"}],["path",{d:"M18 5v8.1"}],["path",{d:"M2 10v3"}],["path",{d:"M22 10v3"}],["path",{d:"m22 17-5 5"}],["path",{d:"M6 6v11"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=[["path",{d:"M2 10v3"}],["path",{d:"M6 6v11"}],["path",{d:"M10 3v18"}],["path",{d:"M14 8v7"}],["path",{d:"M18 5v13"}],["path",{d:"M22 10v3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=[["path",{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=[["path",{d:"M13.465 3.464a5 5 0 017.07 0 5 5 0 010 7.072c-1.204 1.203-2.38 2.89-2.614 4.577A8 8 0 118.886 6.08c1.687-.235 3.375-1.41 4.579-2.615"}],["circle",{cx:"10",cy:"14",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"}],["circle",{cx:"12",cy:"8",r:"6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=[["path",{d:"m14 12-8.381 8.38a1 1 0 0 1-3.001-3L11 9"}],["path",{d:"M15 15.5a.5.5 0 0 0 .5.5A6.5 6.5 0 0 0 22 9.5a.5.5 0 0 0-.5-.5h-1.672a2 2 0 0 1-1.414-.586l-5.062-5.062a1.205 1.205 0 0 0-1.704 0L9.352 5.648a1.205 1.205 0 0 0 0 1.704l5.062 5.062A2 2 0 0 1 15 13.828z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=[["path",{d:"M13.5 10.5 15 9"}],["path",{d:"M4 4v15a1 1 0 0 0 1 1h15"}],["path",{d:"M4.293 19.707 6 18"}],["path",{d:"m9 15 1.5-1.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=[["path",{d:"M12 4v16"}],["path",{d:"M18 20v-8a6 6 0 00-12 0v8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=[["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"}],["path",{d:"M15 12h.01"}],["path",{d:"M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"}],["path",{d:"M9 12h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"}],["path",{d:"M8 10h8"}],["path",{d:"M8 18h8"}],["path",{d:"M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=[["path",{d:"M2.795 16.804c-.789-.79-1.09-2.018-.442-2.928 1.933-2.713 4.414-1.05 6.145-5.378 1.868-4.67 4.608-2.366 6.592-6.107.218-.412.78-.53 1.11-.2l5.005 5.005c.789.79 1.09 2.018.442 2.928-1.933 2.713-4.414 1.05-6.145 5.378-1.868 4.67-4.608 2.366-6.591 6.107-.22.412-.78.53-1.11.2z"}],["path",{d:"M4.5 18.5c2-5 5-2 7-7s5-2 7-7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M12 7v10"}],["path",{d:"M15.4 10a4 4 0 1 0 0 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m16 9-5.5 5.5L8 12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 18V6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M7 12h5"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M8 8h8"}],["path",{d:"M8 12h8"}],["path",{d:"m13 17-5-1h1a4 4 0 0 0 0-8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m9 8 3 3v7"}],["path",{d:"m12 11 3-3"}],["path",{d:"M9 12h6"}],["path",{d:"M9 16h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"16",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"8",y2:"8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"8",y2:"16"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M8 12h4"}],["path",{d:"M10 16V9.5a2.5 2.5 0 0 1 5 0"}],["path",{d:"M8 16h7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["line",{x1:"12",x2:"12.01",y1:"17",y2:"17"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M9 16h5"}],["path",{d:"M9 12h5a2 2 0 1 0 0-4h-3v9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M11 17V8h4"}],["path",{d:"M11 12h3"}],["path",{d:"M9 16h4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=[["path",{d:"M11 7v10a5 5 0 0 0 5-5"}],["path",{d:"m15 8-6 3"}],["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=[["path",{d:"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2"}],["path",{d:"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10"}],["rect",{width:"13",height:"8",x:"8",y:"6",rx:"1"}],["circle",{cx:"18",cy:"20",r:"2"}],["circle",{cx:"9",cy:"20",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=[["path",{d:"M2 20c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M7.757 13.243a2 6 45 1 0 8.486-8.486 2 6 45 1 0-8.486 8.486"}],["circle",{cx:"12",cy:"9",r:"6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=[["path",{d:"M12 16v1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1"}],["path",{d:"M12 6a2 2 0 0 1 2 2"}],["path",{d:"M18 8c0 4-3.5 8-6 8s-6-4-6-8a6 6 0 0 1 12 0"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M4.929 4.929 19.07 19.071"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=[["path",{d:"M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5"}],["path",{d:"M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=[["path",{d:"M10 10.01h.01"}],["path",{d:"M10 14.01h.01"}],["path",{d:"M14 10.01h.01"}],["path",{d:"M14 14.01h.01"}],["path",{d:"M18 6v12"}],["path",{d:"M6 6v12"}],["rect",{x:"2",y:"6",width:"20",height:"12",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=[["path",{d:"M6 5a2 2 0 0 1 4 0v12a4 4 0 0 0 8 0 2 2 0 0 0-4 0"}],["path",{d:"M6 9h12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=[["path",{d:"M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"}],["path",{d:"m16 19 3 3 3-3"}],["path",{d:"M18 12h.01"}],["path",{d:"M19 16v6"}],["path",{d:"M6 12h.01"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=[["path",{d:"M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"}],["path",{d:"M18 12h.01"}],["path",{d:"M19 22v-6"}],["path",{d:"m22 19-3-3-3 3"}],["path",{d:"M6 12h.01"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=[["path",{d:"M11.748 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4.875"}],["path",{d:"m16 19 2 2 4-4"}],["path",{d:"M18 12h.01"}],["path",{d:"M6 12h.01"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M6 12h.01M18 12h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=[["path",{d:"M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"}],["path",{d:"m17 17 5 5"}],["path",{d:"M18 12h.01"}],["path",{d:"m22 17-5 5"}],["path",{d:"M6 12h.01"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=[["path",{d:"M3 5v14"}],["path",{d:"M8 5v14"}],["path",{d:"M12 5v14"}],["path",{d:"M17 5v14"}],["path",{d:"M21 5v14"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=[["path",{d:"M10.5 2a34.5 34.5 0 000 20"}],["path",{d:"M13.5 2a34.5 34.5 0 010 20"}],["path",{d:"M4.67 17h14.67"}],["path",{d:"M4.67 7h14.67"}],["path",{d:"M6.23 3.06a19 19 0 000 17.88A2 2 0 008 22h8a2 2 0 001.77-1.06 19 19 0 000-17.88A2 2 0 0016 2H8a2 2 0 00-1.77 1.06"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=[["path",{d:"M4 20h16"}],["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=[["path",{d:"M10 4 8 6"}],["path",{d:"M17 19v2"}],["path",{d:"M2 12h20"}],["path",{d:"M7 19v2"}],["path",{d:"M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=[["path",{d:"m11 7-3 5h4l-3 5"}],["path",{d:"M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"}],["path",{d:"M22 14v-4"}],["path",{d:"M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=[["path",{d:"M10 10v4"}],["path",{d:"M14 10v4"}],["path",{d:"M22 14v-4"}],["path",{d:"M6 10v4"}],["rect",{x:"2",y:"6",width:"16",height:"12",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=[["path",{d:"M22 14v-4"}],["path",{d:"M6 14v-4"}],["rect",{x:"2",y:"6",width:"16",height:"12",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=[["path",{d:"M10 14v-4"}],["path",{d:"M22 14v-4"}],["path",{d:"M6 14v-4"}],["rect",{x:"2",y:"6",width:"16",height:"12",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=[["path",{d:"M10 9v6"}],["path",{d:"M12.543 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.605"}],["path",{d:"M22 14v-4"}],["path",{d:"M7 12h6"}],["path",{d:"M7.606 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.606"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=[["path",{d:"M10 17h.01"}],["path",{d:"M10 7v6"}],["path",{d:"M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2"}],["path",{d:"M22 14v-4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=[["path",{d:"M 22 14 L 22 10"}],["rect",{x:"2",y:"6",width:"16",height:"12",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=[["path",{d:"M4.5 3h15"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"}],["path",{d:"M6 14h12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=[["path",{d:"M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1"}],["path",{d:"M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66"}],["path",{d:"M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"}],["path",{d:"M12 4v6"}],["path",{d:"M2 18h20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=[["path",{d:"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"}],["path",{d:"M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}],["path",{d:"M3 18h18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=[["path",{d:"M2 4v16"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10"}],["path",{d:"M2 17h20"}],["path",{d:"M6 8v9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=[["path",{d:"M11.771 6.109a2.5 2.5 0 0 1 3.12 3.12"}],["path",{d:"M17.852 12.185a6.5 6.5 0 0 0-9.035-9.04"}],["path",{d:"M18.013 18.013C15.029 20.349 10.831 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-.139 4.393"}],["path",{d:"m2 2 20 20"}],["path",{d:"M6.355 6.37a7 7 0 0 0-.075.23c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c3.356 0 6.993-1.267 9.85-3.151"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 1.754 3.5a6.48 6.48 0 0 1-1.854 8.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=[["path",{d:"M13 13v5"}],["path",{d:"M17 11.47V8"}],["path",{d:"M17 11h1a3 3 0 0 1 2.745 4.211"}],["path",{d:"m2 2 20 20"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3"}],["path",{d:"M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268"}],["path",{d:"M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12"}],["path",{d:"M9 14.6V18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=[["path",{d:"M17 11h1a3 3 0 0 1 0 6h-1"}],["path",{d:"M9 12v6"}],["path",{d:"M13 12v6"}],["path",{d:"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=[["path",{d:"M3 16 L13 16"}],["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"m15 8 2 2 4-4"}],["path",{d:"M16.8607 4.4824A6 6 0 0 0 6 8C6 12.499 4.589 13.956 3.262 15.326"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17H20A1 1 0 0 0 20.74 15.327C20.209 14.779 19.665 14.218 19.203 13.454"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=[["path",{d:"M18.518 17.347A7 7 0 0 1 14 19"}],["path",{d:"M18.8 4A11 11 0 0 1 20 9"}],["path",{d:"M9 9h.01"}],["circle",{cx:"20",cy:"16",r:"2"}],["circle",{cx:"9",cy:"9",r:"7"}],["rect",{x:"4",y:"16",width:"10",height:"6",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M11.68 2.009A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673c-.824-.85-1.678-1.731-2.21-3.348"}],["circle",{cx:"18",cy:"5",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M15 8h6"}],["path",{d:"M16.243 3.757A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742"}],["path",{d:"m2 2 20 20"}],["path",{d:"M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M15 8h6"}],["path",{d:"M18 5v6"}],["path",{d:"M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=[["rect",{width:"13",height:"7",x:"3",y:"3",rx:"1"}],["path",{d:"m22 15-3-3 3-3"}],["rect",{width:"13",height:"7",x:"3",y:"14",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=[["rect",{width:"13",height:"7",x:"8",y:"3",rx:"1"}],["path",{d:"m2 9 3 3-3 3"}],["rect",{width:"13",height:"7",x:"8",y:"14",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=[["rect",{width:"7",height:"13",x:"3",y:"3",rx:"1"}],["path",{d:"m9 22 3-3 3 3"}],["rect",{width:"7",height:"13",x:"14",y:"3",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=[["path",{d:"M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"}],["path",{d:"M15 14a5 5 0 0 0-7.584 2"}],["path",{d:"M9.964 6.825C8.019 7.977 9.5 13 8 15"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vs=[["circle",{cx:"18.5",cy:"17.5",r:"3.5"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5"}],["circle",{cx:"15",cy:"5",r:"1"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2"}],["path",{d:"M6 20h4"}],["path",{d:"M14 10h4"}],["path",{d:"M6 14h2v6"}],["path",{d:"M14 4h2v6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=[["path",{d:"M10 10h4"}],["path",{d:"M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"}],["path",{d:"M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z"}],["path",{d:"M 22 16 L 2 16"}],["path",{d:"M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z"}],["path",{d:"M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=[["rect",{width:"7",height:"13",x:"3",y:"8",rx:"1"}],["path",{d:"m15 2-3 3-3-3"}],["rect",{width:"7",height:"13",x:"14",y:"8",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=[["circle",{cx:"12",cy:"11.9",r:"2"}],["path",{d:"M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6"}],["path",{d:"m8.9 10.1 1.4.8"}],["path",{d:"M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5"}],["path",{d:"m15.1 10.1-1.4.8"}],["path",{d:"M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2"}],["path",{d:"M12 13.9v1.6"}],["path",{d:"M13.5 5.4c-1-.2-2-.2-3 0"}],["path",{d:"M17 16.4c.7-.7 1.2-1.6 1.5-2.5"}],["path",{d:"M5.5 13.9c.3.9.8 1.8 1.5 2.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=[["path",{d:"M16 7h.01"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"}],["path",{d:"m20 7 2 .5-2 .5"}],["path",{d:"M10 18v3"}],["path",{d:"M14 17.75V21"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os=[["path",{d:"M12 18v4"}],["path",{d:"m17 18 1.956-11.468"}],["path",{d:"m3 8 7.82-5.615a2 2 0 0 1 2.36 0L21 8"}],["path",{d:"M4 18h16"}],["path",{d:"M7 18 5.044 6.532"}],["circle",{cx:"12",cy:"10",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=[["circle",{cx:"15",cy:"9",r:"7"}],["circle",{cx:"9",cy:"15",r:"7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zs=[["path",{d:"M8 14a2 2 0 0 0-1.963 1.615l-1.018 5.193A1 1 0 0 0 6 22h12a1 1 0 0 0 .981-1.192l-1.018-5.193A2 2 0 0 0 16 14z"}],["path",{d:"m17 2-1 12"}],["path",{d:"M8.006 14 7 2"}],["path",{d:"M7.565 8.787A5 5 0 0 0 12 8a5 5 0 0 1 4.56-.75"}],["path",{d:"M19 2H5a2 2 0 0 0-2 2v5a2 2 0 0 0 .688 1.5"}],["path",{d:"M12 18h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=[["path",{d:"M3 3h18"}],["path",{d:"M20 7H8"}],["path",{d:"M20 11H8"}],["path",{d:"M10 19h10"}],["path",{d:"M8 15h12"}],["path",{d:"M4 3v14"}],["circle",{cx:"4",cy:"19",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=[["path",{d:"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"}],["rect",{x:"14",y:"2",width:"8",height:"8",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}],["line",{x1:"18",x2:"21",y1:"12",y2:"12"}],["line",{x1:"3",x2:"6",y1:"12",y2:"12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=[["path",{d:"m17 17-5 5V12l-5 5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M14.5 9.5 17 7l-5-5v4.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}],["path",{d:"M20.83 14.83a4 4 0 0 0 0-5.66"}],["path",{d:"M18 12h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}],["circle",{cx:"12",cy:"12",r:"4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=[["circle",{cx:"11",cy:"13",r:"9"}],["path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95"}],["path",{d:"m22 2-1.5 1.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=[["path",{d:"M14 4.5a1 1 0 0 1 5 0 .5.5 0 0 0 .5.5 1 1 0 0 1 0 5c-.81 0-1.8-.7-2.5 0l-1.958 1.957a.15.15 0 0 1-.252-.072l-.493-2.07a.15.15 0 0 0-.111-.112l-2.072-.494a.15.15 0 0 1-.072-.252L14 7c.7-.7 0-1.69 0-2.5"}],["path",{d:"m16 20-1-2"}],["path",{d:"m20 16-2-1"}],["path",{d:"m4 8 2 1"}],["path",{d:"m8 4 1 2"}],["path",{d:"M9.698 14.19a.15.15 0 0 0 .112.112l2.074.489a.15.15 0 0 1 .072.252L10 17c-.7.7 0 1.69 0 2.5a1 1 0 0 1-5 0 .495.495 0 0 0-.5-.5 1 1 0 0 1 0-5c.81 0 1.8.7 2.5 0l1.956-1.957a.15.15 0 0 1 .252.072z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=[["path",{d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m8 13 4-7 4 7"}],["path",{d:"M9.1 11h5.7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=[["path",{d:"M12 13h.01"}],["path",{d:"M12 6v3"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=[["path",{d:"M12 6v7"}],["path",{d:"M16 8v3"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M8 8v3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=[["path",{d:"M10 2v7.751a.25.25 0 00.407.195l2.28-1.834a.5.5 0 01.627 0l2.28 1.834A.25.25 0 0016 9.751V2"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 016.5 2H19a1 1 0 011 1v18a1 1 0 01-1 1H6.5a1 1 0 010-5H20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9 9.5 2 2 4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=[["path",{d:"M12 17h1.5"}],["path",{d:"M12 22h1.5"}],["path",{d:"M12 2h1.5"}],["path",{d:"M17.5 22H19a1 1 0 0 0 1-1"}],["path",{d:"M17.5 2H19a1 1 0 0 1 1 1v1.5"}],["path",{d:"M20 14v3h-2.5"}],["path",{d:"M20 8.5V10"}],["path",{d:"M4 10V8.5"}],["path",{d:"M4 19.5V14"}],["path",{d:"M4 4.5A2.5 2.5 0 0 1 6.5 2H8"}],["path",{d:"M8 22H6.5a1 1 0 0 1 0-5H8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ks=[["path",{d:"M5 7a2 2 0 0 0-2 2v11"}],["path",{d:"M5.803 18H5a2 2 0 0 0 0 4h9.5a.5.5 0 0 0 .5-.5V21"}],["path",{d:"M9 15V4a2 2 0 0 1 2-2h9.5a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H11a2 2 0 0 1 0-4h10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=[["path",{d:"M12 13V7"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9 10 3 3 3-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M8 12v-2a4 4 0 0 1 8 0v2"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"9",cy:"12",r:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M8.62 9.8A2.25 2.25 0 1 1 12 6.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ys=[["path",{d:"M13 2H6.5A2.5 2.5 0 0 0 4 4.5v15"}],["path",{d:"M17 2v6"}],["path",{d:"M17 4h2"}],["path",{d:"M20 15.2V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["circle",{cx:"17",cy:"10",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t7=[["path",{d:"m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["circle",{cx:"10",cy:"8",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a7=[["path",{d:"M18 6V4a2 2 0 1 0-4 0v2"}],["path",{d:"M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10"}],["rect",{x:"12",y:"6",width:"8",height:"5",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e7=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M9 10h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h7=[["path",{d:"M12 5v16"}],["path",{d:"m16 12 2 2 4-4"}],["path",{d:"M22 6V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2h4.001A2 2 0 0022 17v-1.344"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d7=[["path",{d:"M12 5v16"}],["path",{d:"M16 13h2"}],["path",{d:"M16 9h2"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"}],["path",{d:"M6 13h2"}],["path",{d:"M6 9h2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r7=[["path",{d:"M12 5v16"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c7=[["path",{d:"M11 22H5.5a1 1 0 0 1 0-5h4.501"}],["path",{d:"m21 22-1.879-1.878"}],["path",{d:"M3 19.5v-15A2.5 2.5 0 0 1 5.5 2H18a1 1 0 0 1 1 1v8"}],["circle",{cx:"17",cy:"18",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n7=[["path",{d:"M12 7v6"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M9 10h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p7=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M8 11h8"}],["path",{d:"M8 7h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o7=[["path",{d:"M12 13V7"}],["path",{d:"M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2"}],["path",{d:"m9 10 3-3 3 3"}],["path",{d:"m9 5 3-3 3 3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i7=[["path",{d:"M10 13h4"}],["path",{d:"M12 6v7"}],["path",{d:"M16 8V6H8v2"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s7=[["path",{d:"M12 13V7"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9 10 3-3 3 3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l7=[["path",{d:"M15 13a3 3 0 1 0-6 0"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["circle",{cx:"12",cy:"8",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M7=[["path",{d:"m14.5 7.5-5 5"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9.5 7.5 5 5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u7=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f7=[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"}],["path",{d:"m9 10 2 2 4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v7=[["path",{d:"M15 10H9"}],["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m7=[["path",{d:"M12 7v6"}],["path",{d:"M15 10H9"}],["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x7=[["path",{d:"M19 19v1a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M8.656 3H17a2 2 0 0 1 2 2v8.344"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y7=[["path",{d:"m14.5 7.5-5 5"}],["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"}],["path",{d:"m9.5 7.5 5 5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g7=[["path",{d:"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"}],["path",{d:"M8 8v1"}],["path",{d:"M12 8v1"}],["path",{d:"M16 8v1"}],["rect",{width:"20",height:"12",x:"2",y:"9",rx:"2"}],["circle",{cx:"8",cy:"15",r:"2"}],["circle",{cx:"16",cy:"15",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A7=[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w7=[["path",{d:"M12 6V2H8"}],["path",{d:"M15 11v2"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"}],["path",{d:"M9 11v2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H7=[["path",{d:"M13.67 8H18a2 2 0 0 1 2 2v4.33"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M22 22 2 2"}],["path",{d:"M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586"}],["path",{d:"M9 13v2"}],["path",{d:"M9.67 4H12v2.33"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C7=[["path",{d:"M10 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a6 6 0 0 0 1.2 3.6l.6.8A6 6 0 0 1 17 13v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-8a6 6 0 0 1 1.2-3.6l.6-.8A6 6 0 0 0 10 5z"}],["path",{d:"M17 13h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V7=[["path",{d:"M12 8V4H8"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M15 13v2"}],["path",{d:"M9 13v2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S7=[["path",{d:"M17 3h4v4"}],["path",{d:"M18.575 11.082a13 13 0 0 1 1.048 9.027 1.17 1.17 0 0 1-1.914.597L14 17"}],["path",{d:"M7 10 3.29 6.29a1.17 1.17 0 0 1 .6-1.91 13 13 0 0 1 9.03 1.05"}],["path",{d:"M7 14a1.7 1.7 0 0 0-1.207.5l-2.646 2.646A.5.5 0 0 0 3.5 18H5a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 .854.354L9.5 18.207A1.7 1.7 0 0 0 10 17v-2a1 1 0 0 0-1-1z"}],["path",{d:"M9.707 14.293 21 3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L7=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{d:"m3.3 7 8.7 5 8.7-5"}],["path",{d:"M12 22V12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b7=[["path",{d:"M14 6h2a2 2 0 0 1 2 2v5"}],["path",{d:"M14.21 15.202 18 17.4V22"}],["path",{d:"M14.796 14.611A1.6 1.6 0 0 0 14 15.995v3.013a1.6 1.6 0 0 0 .797 1.384l2.4 1.392a1.6 1.6 0 0 0 1.606 0l2.4-1.392A1.6 1.6 0 0 0 22 19.008v-3.013a1.6 1.6 0 0 0-.796-1.384l-2.4-1.394a1.6 1.6 0 0 0-1.514-.051z"}],["path",{d:"m18 17.4 3.79-2.198"}],["path",{d:"M2.21 4.202 6 6.4V16a2 2 0 0 0 2 2h2"}],["path",{d:"M2.796 3.611A1.6 1.6 0 0 0 2 4.995v3.013a1.6 1.6 0 0 0 .797 1.384l2.4 1.392a1.6 1.6 0 0 0 1.606 0l2.4-1.392A1.6 1.6 0 0 0 10 8.008V4.995a1.6 1.6 0 0 0-.796-1.384l-2.4-1.394a1.6 1.6 0 0 0-1.514-.052z"}],["path",{d:"m6 6.4 3.79-2.198"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _7=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"}],["path",{d:"m7 16.5-4.74-2.85"}],["path",{d:"m7 16.5 5-3"}],["path",{d:"M7 16.5v5.17"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"}],["path",{d:"m17 16.5-5-3"}],["path",{d:"m17 16.5 4.74-2.85"}],["path",{d:"M17 16.5v5.17"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"}],["path",{d:"M12 8 7.26 5.15"}],["path",{d:"m12 8 4.74-2.85"}],["path",{d:"M12 13.5V8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P7=[["path",{d:"M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3"}],["path",{d:"M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O7=[["path",{d:"M12 13h4"}],["path",{d:"M12 18h6a2 2 0 012 2v1"}],["path",{d:"M12 8h8"}],["path",{d:"M12 9a4.17 4.17 0 01-3 4"}],["path",{d:"M16 8V5a2 2 0 012-2"}],["path",{d:"M6 18a4 4 0 01-2-7.465"}],["path",{d:"M6.004 5.125a4 4 0 00-2.526 5.77"}],["path",{d:"M6.294 6.294A3 3 0 1112 5v13a4 4 0 11-7.967-.518"}],["circle",{cx:"16",cy:"13",r:"0.5",fill:"currentColor"}],["circle",{cx:"18",cy:"3",r:"0.5",fill:"currentColor"}],["circle",{cx:"20",cy:"21",r:"0.5",fill:"currentColor"}],["circle",{cx:"20",cy:"8",r:"0.5",fill:"currentColor"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R7=[["path",{d:"m10.852 14.772-.383.923"}],["path",{d:"m10.852 9.228-.383-.923"}],["path",{d:"m13.148 14.772.382.924"}],["path",{d:"m13.53 8.305-.382.923"}],["path",{d:"m14.772 10.852.923-.383"}],["path",{d:"m14.772 13.148.923.383"}],["path",{d:"M17.997 5.125a4 4 0 012.526 5.77"}],["path",{d:"M18 18a4 4 0 002-7.464"}],["path",{d:"M4.033 17.483A4 4 0 0011.46 20c.184-.31.896-.31 1.076 0a4 4 0 007.43-2.517"}],["path",{d:"M6 18a4 4 0 01-2-7.464"}],["path",{d:"M6.002 5.125a4 4 0 00-2.525 5.77"}],["path",{d:"M6.293 6.294a3 3 0 01-.287-1.098l-.004-.07a3 3 0 015.968-.543c.05.02.057.01.059 0a3 3 0 015.968.542l-.004.071a3 3 0 01-.287 1.098"}],["path",{d:"m9.228 10.852-.923-.383"}],["path",{d:"m9.228 13.148-.923.383"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E7=[["path",{d:"M12 18v-6"}],["path",{d:"M12 5v1.344"}],["path",{d:"M17.707 6.293A3 3 0 1012 5a3 3 0 00-4.124-2.781"}],["path",{d:"M17.997 5.125a4 4 0 012.526 5.77"}],["path",{d:"M19.644 19.644A4 4 0 0112 18a4 4 0 11-7.967-.517"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20 10.536a4 4 0 011.533 5.34"}],["path",{d:"M3.477 10.895a4 4 0 011.876-5.542"}],["path",{d:"M6 18a4 4 0 01-2-7.464"}],["path",{d:"M9 13a4.17 4.17 0 002.166-1.5 4 4 0 00.138-.196"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z7=[["path",{d:"M12 18V5"}],["path",{d:"M15 13a4.17 4.17 0 01-3-4 4.17 4.17 0 01-3 4"}],["path",{d:"M17.707 6.294A3 3 0 1012 5a3 3 0 10-5.707 1.294"}],["path",{d:"M17.996 5.125a4 4 0 012.526 5.77"}],["path",{d:"M18 18a4 4 0 002-7.465"}],["path",{d:"M19.967 17.482a4 4 0 11-7.967.517 4 4 0 11-7.967-.517"}],["path",{d:"M6 18a4 4 0 01-2-7.465"}],["path",{d:"M6.004 5.125a4 4 0 00-2.526 5.77"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T7=[["path",{d:"M16 3v2.107"}],["path",{d:"M17 9c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 22 17a5 5 0 0 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C13 11.5 16 9 17 9"}],["path",{d:"M21 8.274V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.938"}],["path",{d:"M3 15h5.253"}],["path",{d:"M3 9h8.228"}],["path",{d:"M8 15v6"}],["path",{d:"M8 3v6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D7=[["path",{d:"M12 9v1.258"}],["path",{d:"M16 3v5.46"}],["path",{d:"M21 9.118V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5.75"}],["path",{d:"M22 17.5c0 2.499-1.75 3.749-3.83 4.474a.5.5 0 0 1-.335-.005c-2.085-.72-3.835-1.97-3.835-4.47V14a.5.5 0 0 1 .5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 0 1 .76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 0 1 .5.5z"}],["path",{d:"M3 15h7"}],["path",{d:"M3 9h12.142"}],["path",{d:"M8 15v6"}],["path",{d:"M8 3v6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k7=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 9v6"}],["path",{d:"M16 15v6"}],["path",{d:"M16 3v6"}],["path",{d:"M3 15h18"}],["path",{d:"M3 9h18"}],["path",{d:"M8 15v6"}],["path",{d:"M8 3v6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B7=[["path",{d:"M10 9.728V16"}],["path",{d:"M14 9.728V16"}],["path",{d:"M18 20V4"}],["path",{d:"m22 11-4-4A7.5 7.5 0 0 1 6 7l-4 4"}],["path",{d:"M22 16H2"}],["path",{d:"M6 20V4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F7=[["path",{d:"M12 12h.01"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q7=[["path",{d:"M10 20v2"}],["path",{d:"M14 20v2"}],["path",{d:"M18 20v2"}],["path",{d:"M21 20H3"}],["path",{d:"M6 20v2"}],["path",{d:"M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12"}],["rect",{x:"4",y:"6",width:"16",height:"10",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U7=[["path",{d:"M12 11v4"}],["path",{d:"M14 13h-4"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"}],["path",{d:"M18 6v14"}],["path",{d:"M6 6v14"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N7=[["path",{d:"M13.354 20H4a2 2 0 01-2-2V8a2 2 0 012-2h16a2 2 0 012 2v3.354"}],["path",{d:"M16 11.354V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"}],["path",{d:"M16 17h6"}],["path",{d:"M19 14v6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I7=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j7=[["rect",{x:"8",y:"8",width:"8",height:"8",rx:"2"}],["path",{d:"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2"}],["path",{d:"M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z7=[["path",{d:"M10 13a3 3 0 01-2.121-5.121"}],["path",{d:"M15.606 14.204c-3.5 1.5-5.899 4.503-8.899 7.503A1 1 0 016 22c-2 0-4-2-4-4a1 1 0 01.293-.707c1.911-1.911 3.823-3.578 5.347-5.441"}],["path",{d:"M16.573 14.737A4 4 0 0114 11"}],["path",{d:"M7.14 10.907a4 4 0 112.756-7.43A4 4 0 0116.7 4.48a2 2 0 012.82 2.82 4 4 0 011.002 6.805 4 4 0 11-7.51 1.59"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $7=[["path",{d:"M11 2v2"}],["path",{d:"M12 3h-2"}],["path",{d:"M13.5 10.5 22 2"}],["path",{d:"M14.734 13.841a2 2 0 00-.314-2.42L12.58 9.58a2 2 0 00-2.421-.314l-7.657 4.461A1 1 0 002.3 15.3l6.403 6.403a1 1 0 001.571-.204z"}],["path",{d:"M20 15v4"}],["path",{d:"M22 17h-4"}],["path",{d:"M4 4v4"}],["path",{d:"m5 18 2-2"}],["path",{d:"M6 6H2"}],["path",{d:"m7.699 10.7 5.602 5.601"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W7=[["path",{d:"M13.5 10.5 22 2"}],["path",{d:"M14.734 13.841a2 2 0 00-.314-2.42L12.58 9.58a2 2 0 00-2.421-.314l-7.657 4.461A1 1 0 002.3 15.3l6.403 6.403a1 1 0 001.571-.204z"}],["path",{d:"m5 18 2-2"}],["path",{d:"m7.699 10.7 5.602 5.601"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G7=[["path",{d:"m16 22-1-4"}],["path",{d:"M19 14a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1"}],["path",{d:"M19 14H5l-1.973 6.767A1 1 0 0 0 4 22h16a1 1 0 0 0 .973-1.233z"}],["path",{d:"m8 22 1-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K7=[["path",{d:"m11 10 3 3"}],["path",{d:"M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z"}],["path",{d:"M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X7=[["path",{d:"M12 20v-8"}],["path",{d:"M12.656 7H14a4 4 0 0 1 4 4v1.344"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M17.123 17.123A6 6 0 0 1 6 14v-3a4 4 0 0 1 1.72-3.287"}],["path",{d:"m2 2 20 20"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97"}],["path",{d:"M22 13h-3.344"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97"}],["path",{d:"M6 13H2"}],["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M9.712 4.06A3 3 0 0 1 15 6v1.13"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J7=[["path",{d:"M7.001 15.085A1.5 1.5 0 0 1 9 16.5"}],["circle",{cx:"18.5",cy:"8.5",r:"3.5"}],["circle",{cx:"7.5",cy:"16.5",r:"5.5"}],["circle",{cx:"7.5",cy:"4.5",r:"2.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q7=[["path",{d:"M10 19.655A6 6 0 0 1 6 14v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 3.97"}],["path",{d:"M14 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97"}],["path",{d:"M6 13H2"}],["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y7=[["path",{d:"M12 20v-9"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97"}],["path",{d:"M22 13h-4"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97"}],["path",{d:"M6 13H2"}],["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=[["path",{d:"M10 12h4"}],["path",{d:"M10 21v-3a2 2 0 013.05-1.702"}],["path",{d:"M10 8h4"}],["path",{d:"M16 19h6"}],["path",{d:"M18 7h2a2 2 0 012 2v4.355"}],["path",{d:"M19 16v6"}],["path",{d:"M6 10H4a2 2 0 00-2 2v7a2 2 0 002 2h8.535"}],["path",{d:"M6 21V5a2 2 0 012-2h8a2 2 0 012 2v7.126"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=[["path",{d:"M10 12h4"}],["path",{d:"M10 8h4"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=[["path",{d:"M12 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M12 6h.01"}],["path",{d:"M16 10h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M16 6h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M8 14h.01"}],["path",{d:"M8 6h.01"}],["path",{d:"M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=[["path",{d:"M4 6 2 7"}],["path",{d:"M10 6h4"}],["path",{d:"m22 7-2-1"}],["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2"}],["path",{d:"M4 11h16"}],["path",{d:"M8 15h.01"}],["path",{d:"M16 15h.01"}],["path",{d:"M6 19v2"}],["path",{d:"M18 21v-2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=[["path",{d:"M8 6v6"}],["path",{d:"M15 6v6"}],["path",{d:"M2 12h19.6"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"}],["circle",{cx:"7",cy:"18",r:"2"}],["path",{d:"M9 18h5"}],["circle",{cx:"16",cy:"18",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=[["path",{d:"M10 3h.01"}],["path",{d:"M14 2h.01"}],["path",{d:"m2 9 20-5"}],["path",{d:"M12 12V6.5"}],["rect",{width:"16",height:"10",x:"4",y:"12",rx:"3"}],["path",{d:"M9 12v5"}],["path",{d:"M15 12v5"}],["path",{d:"M4 17h16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=[["path",{d:"M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z"}],["path",{d:"M17 21v-2"}],["path",{d:"M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10"}],["path",{d:"M21 21v-2"}],["path",{d:"M3 5V3"}],["path",{d:"M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z"}],["path",{d:"M7 5V3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cl=[["path",{d:"M16 13H3"}],["path",{d:"M16 17H3"}],["path",{d:"m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6"}],["circle",{cx:"9",cy:"7",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"}],["path",{d:"M2 21h20"}],["path",{d:"M7 8v3"}],["path",{d:"M12 8v3"}],["path",{d:"M17 8v3"}],["path",{d:"M7 4h.01"}],["path",{d:"M12 4h.01"}],["path",{d:"M17 4h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18"}],["path",{d:"M16 10h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M8 18h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=[["path",{d:"M11 13h1v4"}],["path",{d:"M16 2v3"}],["path",{d:"M3 9h18"}],["path",{d:"M8 2v3"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=[["path",{d:"m14 17 4 4 4-4"}],["path",{d:"M16 2v3"}],["path",{d:"M18 13v8"}],["path",{d:"M21 10.354V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h7.343"}],["path",{d:"M3 9h18"}],["path",{d:"M8 2v3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=[["path",{d:"M16 2v3"}],["path",{d:"M21 9H3"}],["path",{d:"M3 12.34V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2h-7.35"}],["path",{d:"M3 18h6"}],["path",{d:"m6 21-3-3 3-3"}],["path",{d:"M8 2v3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ll=[["path",{d:"M16 2v3"}],["path",{d:"m18 21 3-3h-6"}],["path",{d:"M21 12.34V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h7.35"}],["path",{d:"m21 18-3-3"}],["path",{d:"M3 9h18"}],["path",{d:"M8 2v3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=[["path",{d:"m14 17 4-4 4 4"}],["path",{d:"M16 2v3"}],["path",{d:"M18 21v-8"}],["path",{d:"M21 10.343V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h9"}],["path",{d:"M3 9h18"}],["path",{d:"M8 2v3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=[["path",{d:"M 19 3 L 5 3"}],["path",{d:"M 21 13 L 21 5"}],["path",{d:"M 21 5 A2 2 0 0 0 19 3"}],["path",{d:"M 3 19 A2 2 0 0 0 5 21"}],["path",{d:"M 3 5 L 3 19"}],["path",{d:"M 5 3 A2 2 0 0 0 3 5"}],["path",{d:"m16 19 2 2 4-4"}],["path",{d:"M16 2v3"}],["path",{d:"M3 9h18"}],["path",{d:"M5 21 L12.5 21"}],["path",{d:"M8 2v3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fl=[["path",{d:"M8 2v3"}],["path",{d:"M16 2v3"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"m9 15 2 2 4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=[["path",{d:"m11 21-3-3 3-3"}],["path",{d:"M16 2v3"}],["path",{d:"M21 9H3"}],["path",{d:"M3 11.5V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2h-4"}],["path",{d:"m5 21-3-3 3-3"}],["path",{d:"M8 2v3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=[["path",{d:"m13 21 3-3-3-3"}],["path",{d:"M16 2v3"}],["path",{d:"m19 21 3-3-3-3"}],["path",{d:"M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h4"}],["path",{d:"M3 9h18"}],["path",{d:"M8 2v3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=[["path",{d:"M16 14v2.2l1.6 1"}],["path",{d:"M16 2v3"}],["path",{d:"M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338"}],["path",{d:"M3 9h5.859"}],["path",{d:"M8 2v3"}],["circle",{cx:"16",cy:"16",r:"6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=[["path",{d:"m15.228 16.852-.923-.383"}],["path",{d:"m15.228 19.148-.923.383"}],["path",{d:"M16 2v3"}],["path",{d:"m16.47 14.305.382.923"}],["path",{d:"m16.852 20.772-.383.924"}],["path",{d:"m19.148 15.228.383-.923"}],["path",{d:"m19.53 21.696-.382-.924"}],["path",{d:"m20.773 16.852.924-.383"}],["path",{d:"m20.773 19.148.924.383"}],["path",{d:"M21 10.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h5.5"}],["path",{d:"M3 9h18"}],["path",{d:"M8 2v3"}],["circle",{cx:"18",cy:"18",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=[["path",{d:"M8 2v3"}],["path",{d:"M16 2v3"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M8 13h.01"}],["path",{d:"M12 13h.01"}],["path",{d:"M16 13h.01"}],["path",{d:"M8 17h.01"}],["path",{d:"M12 17h.01"}],["path",{d:"M16 17h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=[["path",{d:"M16 2v3"}],["path",{d:"M21 15V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h10v-5a1 1 0 011-1za2.4 2.4 0 01-.706 1.706l-3.588 3.588A2.4 2.4 0 0115 21"}],["path",{d:"M3 9h18"}],["path",{d:"M8 2v3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=[["path",{d:"M12.127 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v5.125"}],["path",{d:"M14.62 17.8A2.25 2.25 0 1118 14.836a2.25 2.25 0 113.38 2.966l-2.626 2.856a.998.998 0 01-1.507 0z"}],["path",{d:"M16 2v3"}],["path",{d:"M3 9h18"}],["path",{d:"M8 2v3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=[["path",{d:"M8 2v3"}],["path",{d:"M16 2v3"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M10 15h4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=[["path",{d:"M16 18h6"}],["path",{d:"M16 2v3"}],["path",{d:"M21 14V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3"}],["path",{d:"M3 9h18"}],["path",{d:"M8 2v3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=[["path",{d:"M16 2v3"}],["path",{d:"m2 2 20 20"}],["path",{d:"M21 9h-5.5"}],["path",{d:"M3 9h6"}],["path",{d:"M3.586 3.586A2 2 0 003 5v14a2 2 0 002 2h14a2 2 0 001.414-.586"}],["path",{d:"M8.656 3H19a2 2 0 012 2v10.344"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=[["path",{d:"M8 2v3"}],["path",{d:"M16 2v3"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M10 15h4"}],["path",{d:"M12 13v4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=[["path",{d:"M16 18h6"}],["path",{d:"M16 2v3"}],["path",{d:"M19 15v6"}],["path",{d:"M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3"}],["path",{d:"M3 9h18"}],["path",{d:"M8 2v3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=[["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}],["path",{d:"M16 2v3"}],["path",{d:"M3 9h18"}],["path",{d:"M8 2v3"}],["path",{d:"M17 13h-6"}],["path",{d:"M13 17H7"}],["path",{d:"M7 13h.01"}],["path",{d:"M17 17h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=[["path",{d:"M16 2v3"}],["path",{d:"M21 10.69V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h7.25"}],["path",{d:"m22 21-1.875-1.875"}],["path",{d:"M3 9h18"}],["path",{d:"M8 2v3"}],["circle",{cx:"18",cy:"17",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=[["path",{d:"M11 10v4h4"}],["path",{d:"m11 14 1.535-1.605a5 5 0 018 1.5"}],["path",{d:"M16 2v3"}],["path",{d:"m21 18-1.535 1.605a5 5 0 01-8-1.5"}],["path",{d:"M21 22v-4h-4"}],["path",{d:"M21 8.517V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h3.517"}],["path",{d:"M3 9h4"}],["path",{d:"M8 2v3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=[["path",{d:"M16 2v3"}],["path",{d:"m17 16 5 5"}],["path",{d:"m17 21 5-5"}],["path",{d:"M21 12V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8"}],["path",{d:"M3 9h18"}],["path",{d:"M8 2v3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=[["path",{d:"M8 2v3"}],["path",{d:"M16 2v3"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"m14 13-4 4"}],["path",{d:"m10 13 4 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=[["path",{d:"M8 2v3"}],["path",{d:"M16 2v3"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}],["path",{d:"M3 9h18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=[["path",{d:"M12 2v2"}],["path",{d:"M15.726 21.01A2 2 0 0 1 14 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2"}],["path",{d:"M18 2v2"}],["path",{d:"M2 13h2"}],["path",{d:"M8 8h14"}],["rect",{x:"8",y:"3",width:"14",height:"14",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=[["path",{d:"M14.564 14.558a3 3 0 1 1-4.122-4.121"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20 20H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 .819-.175"}],["path",{d:"M9.695 4.024A2 2 0 0 1 10.004 4h3.993a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v7.344"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=[["path",{d:"m17 22 1.664-2.496a2 2 0 00.336-1.11V5.606a2 2 0 00-.336-1.11L17 2"}],["path",{d:"M18 22H6"}],["path",{d:"M18 2H6"}],["path",{d:"M5 17h14"}],["path",{d:"M5 7h14"}],["path",{d:"m7 22-1.664-2.496A2 2 0 015 18.394V5.606a2 2 0 01.336-1.11L7 2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=[["path",{d:"M21 10.5a9 2.5 0 01-18 0v8a9 2.5 0 0018 0z"}],["path",{d:"M21 10.5A9 2.5 25.32 004.59 3.47 9 2.5 25.32 0021 10.5"}],["path",{d:"M3 10.5a9 2.5 0 016.527-2.405"}],["path",{d:"M9 16.858a31 31 0 006 0"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=[["path",{d:"m10.8 5 2.111 4.223"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"m4.874 14.647 2.12 4.24"}],["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2z"}],["path",{d:"m7.906 9.712 2.005 4.411"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=[["path",{d:"M10 10v7.9"}],["path",{d:"M11.802 6.145a5 5 0 0 1 6.053 6.053"}],["path",{d:"M14 6.1v2.243"}],["path",{d:"m15.5 15.571-.964.964a5 5 0 0 1-7.071 0 5 5 0 0 1 0-7.07l.964-.965"}],["path",{d:"M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4"}],["path",{d:"m2 2 20 20"}],["path",{d:"M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=[["path",{d:"M10 7v10.9"}],["path",{d:"M14 6.1V17"}],["path",{d:"M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4"}],["path",{d:"M16.536 7.465a5 5 0 0 0-7.072 0l-2 2a5 5 0 0 0 0 7.07 5 5 0 0 0 7.072 0l2-2a5 5 0 0 0 0-7.07"}],["path",{d:"M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=[["path",{d:"M12 22v-4c1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5"}],["path",{d:"M13.988 8.327C13.902 6.054 13.365 3.82 12 2a9.3 9.3 0 0 0-1.445 2.9"}],["path",{d:"M17.375 11.725C18.882 10.53 21 7.841 21 6c-2.324 0-5.08 1.296-6.662 2.684"}],["path",{d:"m2 2 20 20"}],["path",{d:"M21.024 15.378A15 15 0 0 0 22 15c-.426-1.279-2.67-2.557-4.25-2.907"}],["path",{d:"M6.995 6.992C5.714 6.4 4.29 6 3 6c0 2 2.5 5 4 6-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=[["path",{d:"M12 22v-4"}],["path",{d:"M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=[["path",{d:"M10.5 5H19a2 2 0 0 1 2 2v8.5"}],["path",{d:"M17 11h-.5"}],["path",{d:"M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2"}],["path",{d:"m2 2 20 20"}],["path",{d:"M7 11h4"}],["path",{d:"M7 15h2.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=[["rect",{width:"18",height:"14",x:"3",y:"5",rx:"2",ry:"2"}],["path",{d:"M7 15h4M15 15h2M7 11h2M13 11h4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=[["path",{d:"M14 13h4"}],["path",{d:"M16 15v-4"}],["path",{d:"M18 5v2"}],["path",{d:"M6 13h4"}],["path",{d:"M6 5v2"}],["rect",{x:"2",y:"7",width:"20",height:"12",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 14h.01"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=[["path",{d:"M10 2h4"}],["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 14h.01"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"}],["circle",{cx:"7",cy:"17",r:"2"}],["path",{d:"M9 17h6"}],["circle",{cx:"17",cy:"17",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=[["path",{d:"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2"}],["path",{d:"M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2"}],["path",{d:"M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9"}],["circle",{cx:"8",cy:"19",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=[["path",{d:"M12 14v4"}],["path",{d:"M14.172 2a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 20 7.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"}],["path",{d:"M8 14h8"}],["rect",{x:"8",y:"10",width:"8",height:"8",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=[["path",{d:"M15 16a1 1 0 0 0-7-7q-4 4-5.987 12.385a.5.5 0 0 0 .602.602Q11 20 15 16l-3-3"}],["path",{d:"M15 9q4 4 7 0-3-4-7 0 4-4 0-7-4 3 0 7"}],["path",{d:"m8 15-2.58-2.58"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=[["path",{d:"M10 10H5v10a2 2 0 002 2h10a2 2 0 002-2v-1"}],["path",{d:"M13 22v-9"}],["path",{d:"M13.902 8.245 16 6h-4.343"}],["path",{d:"M19 13.343V10a2 2 0 00-.539-1.367L16 6V3a1 1 0 00-1-1H9a1 1 0 00-.857.486"}],["path",{d:"m2 2 20 20"}],["path",{d:"M7.034 7.034 5.539 8.633A2 2 0 005 10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=[["path",{d:"M13 22V10a2 2 0 01.539-1.367L16 6H8L5.539 8.633A2 2 0 005 10v10a2 2 0 002 2h10a2 2 0 002-2V10a2 2 0 00-.539-1.367L16 6V3a1 1 0 00-1-1H9a1 1 0 00-1 1v3"}],["path",{d:"M5 10h8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t9=[["path",{d:"M10 9v7"}],["path",{d:"M14 6v10"}],["circle",{cx:"17.5",cy:"12.5",r:"3.5"}],["circle",{cx:"6.5",cy:"12.5",r:"3.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a9=[["path",{d:"m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16"}],["path",{d:"M22 9v7"}],["path",{d:"M3.304 13h6.392"}],["circle",{cx:"18.5",cy:"12.5",r:"3.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e9=[["path",{d:"M15 11h4.5a1 1 0 0 1 0 5h-4a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h3a1 1 0 0 1 0 5"}],["path",{d:"m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16"}],["path",{d:"M3.304 13h6.392"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h9=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["circle",{cx:"8",cy:"10",r:"2"}],["path",{d:"M8 12h8"}],["circle",{cx:"16",cy:"10",r:"2"}],["path",{d:"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d9=[["path",{d:"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"}],["path",{d:"M2 12a9 9 0 0 1 8 8"}],["path",{d:"M2 16a5 5 0 0 1 4 4"}],["line",{x1:"2",x2:"2.01",y1:"20",y2:"20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r9=[["path",{d:"M10 5V3"}],["path",{d:"M14 5V3"}],["path",{d:"M15 21v-3a3 3 0 0 0-6 0v3"}],["path",{d:"M18 3v8"}],["path",{d:"M18 5H6"}],["path",{d:"M22 11H2"}],["path",{d:"M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9"}],["path",{d:"M6 3v8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c9=[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"}],["path",{d:"M8 14v.5"}],["path",{d:"M16 14v.5"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n9=[["path",{d:"m12.309 6.652 4.797 2.401a1 1 0 0 1 .447 1.341l-.501 1.001.605.605h2.725a1 1 0 0 1 .894 1.447l-.724 1.448"}],["path",{d:"m15.166 15.166-.719 1.439a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.9 2.9 0 0 1 .873-1.037"}],["path",{d:"M2 19h3.76a2 2 0 0 0 1.8-1.1l1.441-2.902"}],["path",{d:"m2 2 20 20"}],["path",{d:"M2 21v-4"}],["path",{d:"M7 9h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p9=[["path",{d:"M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97"}],["path",{d:"M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z"}],["path",{d:"M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15"}],["path",{d:"M2 21v-4"}],["path",{d:"M7 9h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o9=[["path",{d:"M12 10H6"}],["path",{d:"m20.69 15.479 1.29 4.88a.5.5 0 01-.698.591l-1.843-.849a1 1 0 00-.879.001l-1.846.85a.5.5 0 01-.692-.593l1.29-4.88"}],["path",{d:"M22 6.675V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2h8"}],["path",{d:"M6 14h4"}],["circle",{cx:"19",cy:"13",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"7",y:"13",width:"9",height:"4",rx:"1"}],["rect",{x:"7",y:"5",width:"12",height:"4",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i9=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 11h8"}],["path",{d:"M7 16h3"}],["path",{d:"M7 6h12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s9=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 11h8"}],["path",{d:"M7 16h12"}],["path",{d:"M7 6h3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l9=[["path",{d:"M11 13v4"}],["path",{d:"M15 5v4"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"7",y:"13",width:"9",height:"4",rx:"1"}],["rect",{x:"7",y:"5",width:"12",height:"4",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 16h8"}],["path",{d:"M7 11h12"}],["path",{d:"M7 6h3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M9=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 16c3.5 0 2.5-10 6-10s2.5 10 6 10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=[["path",{d:"M9 5v4"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1"}],["path",{d:"M9 15v2"}],["path",{d:"M17 3v2"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1"}],["path",{d:"M17 13v3"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"15",y:"5",width:"4",height:"12",rx:"1"}],["rect",{x:"7",y:"8",width:"4",height:"9",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u9=[["path",{d:"M13 17V9"}],["path",{d:"M18 17v-3"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M8 17V5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=[["path",{d:"M13 17V9"}],["path",{d:"M18 17V5"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M8 17v-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f9=[["path",{d:"M11 13H7"}],["path",{d:"M19 9h-4"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"15",y:"5",width:"4",height:"12",rx:"1"}],["rect",{x:"7",y:"8",width:"4",height:"9",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M18 17V9"}],["path",{d:"M13 17V5"}],["path",{d:"M8 17v-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v9=[["path",{d:"M10 6h8"}],["path",{d:"M12 16h6"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M8 11h7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"m19 9-5 5-4-4-3 3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m9=[["path",{d:"m13.11 7.664 1.78 2.672"}],["path",{d:"m14.162 12.788-3.324 1.424"}],["path",{d:"m20 4-6.06 1.515"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["circle",{cx:"12",cy:"6",r:"2"}],["circle",{cx:"16",cy:"12",r:"2"}],["circle",{cx:"9",cy:"15",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x9=[["path",{d:"M5 21V3"}],["path",{d:"M12 21V9"}],["path",{d:"M19 21v-6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=[["path",{d:"M5 21v-6"}],["path",{d:"M12 21V9"}],["path",{d:"M19 21V3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=[["path",{d:"M5 21v-6"}],["path",{d:"M12 21V3"}],["path",{d:"M19 21V9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y9=[["path",{d:"M12 16v5"}],["path",{d:"M16 14.639V21"}],["path",{d:"M20 10.656V21"}],["path",{d:"m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"}],["path",{d:"M4 18.463V21"}],["path",{d:"M8 14.656V21"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=[["path",{d:"M6 5h12"}],["path",{d:"M4 12h10"}],["path",{d:"M12 19h8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g9=[["path",{d:"M13 3v18"}],["path",{d:"M3 12h18"}],["path",{d:"M3 3v16a2 2 0 002 2h16"}],["circle",{cx:"17.5",cy:"5.5",r:"0.5",fill:"currentColor"}],["circle",{cx:"19.5",cy:"16.5",r:"0.5",fill:"currentColor"}],["circle",{cx:"7.5",cy:"16.5",r:"0.5",fill:"currentColor"}],["circle",{cx:"7.5",cy:"7.5",r:"0.5",fill:"currentColor"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A9=[["path",{d:"M12 2v10"}],["path",{d:"m16 18 3.085-8.125L12 4.103 3.473 9.442l3.196 10.554z"}],["path",{d:"m2 9 10 3 6 9"}],["path",{d:"m6 21 6-9 10-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=[["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}],["circle",{cx:"18.5",cy:"5.5",r:".5",fill:"currentColor"}],["circle",{cx:"11.5",cy:"11.5",r:".5",fill:"currentColor"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"14.5",r:".5",fill:"currentColor"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w9=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H9=[["path",{d:"M18 6 7 17l-5-5"}],["path",{d:"m22 10-7.5 7.5L13 16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C9=[["path",{d:"M20 4L9 15"}],["path",{d:"M21 19L3 19"}],["path",{d:"M9 15L4 10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V9=[["path",{d:"M20 6 9 17l-5-5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S9=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L9=[["path",{d:"M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"}],["path",{d:"M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"}],["path",{d:"M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12"}],["path",{d:"M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b9=[["path",{d:"M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"}],["path",{d:"M15 18c1.5-.615 3-2.461 3-4.923C18 8.769 14.5 4.462 12 2 9.5 4.462 6 8.77 6 13.077 6 15.539 7.5 17.385 9 18"}],["path",{d:"m16 7-2.5 2.5"}],["path",{d:"M9 2h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _9=[["path",{d:"M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"}],["path",{d:"m6.7 18-1-1C4.35 15.682 3 14.09 3 12a5 5 0 0 1 4.95-5c1.584 0 2.7.455 4.05 1.818C13.35 7.455 14.466 7 16.05 7A5 5 0 0 1 21 12c0 2.082-1.359 3.673-2.7 5l-1 1"}],["path",{d:"M10 4h4"}],["path",{d:"M12 2v6.818"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P9=[["path",{d:"M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"}],["path",{d:"M16.5 18c1-2 2.5-5 2.5-9a7 7 0 0 0-7-7H6.635a1 1 0 0 0-.768 1.64L7 5l-2.32 5.802a2 2 0 0 0 .95 2.526l2.87 1.456"}],["path",{d:"m15 5 1.425-1.425"}],["path",{d:"m17 8 1.53-1.53"}],["path",{d:"M9.713 12.185 7 18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O9=[["path",{d:"M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"}],["path",{d:"m14.5 10 1.5 8"}],["path",{d:"M7 10h10"}],["path",{d:"m8 18 1.5-8"}],["circle",{cx:"12",cy:"6",r:"4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R9=[["path",{d:"m10.68 5.499-.996 4.982a.65.65 0 01-1.131.295L5.885 7.663"}],["path",{d:"m13.32 5.5.995 4.98a.65.65 0 001.131.296l2.668-3.113"}],["path",{d:"M20.428 8.952 17.5 18"}],["path",{d:"M4 20a2 2 0 012-2h12a2 2 0 012 2v1a1 1 0 01-1 1H5a1 1 0 01-1-1z"}],["path",{d:"M6.5 18 3.571 8.952"}],["circle",{cx:"12",cy:"4",r:"2"}],["circle",{cx:"20",cy:"7",r:"2"}],["circle",{cx:"4",cy:"7",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E9=[["path",{d:"M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"}],["path",{d:"M10 2v2"}],["path",{d:"M14 2v2"}],["path",{d:"m17 18-1-9"}],["path",{d:"M6 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2"}],["path",{d:"M6 4h12"}],["path",{d:"m7 18 1-9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z9=[["path",{d:"m6 9 6 6 6-6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T9=[["path",{d:"m17 18-6-6 6-6"}],["path",{d:"M7 6v12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D9=[["path",{d:"m7 18 6-6-6-6"}],["path",{d:"M17 6v12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k9=[["path",{d:"m15 18-6-6 6-6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B9=[["path",{d:"m9 18 6-6-6-6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F9=[["path",{d:"m18 15-6-6-6 6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q9=[["path",{d:"m7 20 5-5 5 5"}],["path",{d:"m7 4 5 5 5-5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U9=[["path",{d:"m7 6 5 5 5-5"}],["path",{d:"m7 13 5 5 5-5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N9=[["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}],["path",{d:"m17 7 5 5-5 5"}],["path",{d:"m7 7-5 5 5 5"}],["path",{d:"M8 12h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I9=[["path",{d:"m9 7-5 5 5 5"}],["path",{d:"m15 7 5 5-5 5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j9=[["path",{d:"m11 17-5-5 5-5"}],["path",{d:"m18 17-5-5 5-5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z9=[["path",{d:"m20 17-5-5 5-5"}],["path",{d:"m4 17 5-5-5-5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $9=[["path",{d:"m6 17 5-5-5-5"}],["path",{d:"m13 17 5-5-5-5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W9=[["path",{d:"m7 15 5 5 5-5"}],["path",{d:"m7 9 5-5 5 5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G9=[["path",{d:"m17 11-5-5-5 5"}],["path",{d:"m17 18-5-5-5 5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K9=[["path",{d:"M10 9h4"}],["path",{d:"M12 7v5"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3"}],["path",{d:"m18 9 3.52 2.147a1 1 0 0 1 .48.854V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6.999a1 1 0 0 1 .48-.854L6 9"}],["path",{d:"M6 21V7a1 1 0 0 1 .376-.782l5-3.999a1 1 0 0 1 1.249.001l5 4A1 1 0 0 1 18 7v14"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X9=[["path",{d:"M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5"}],["path",{d:"M7 12v4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J9=[["path",{d:"M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5"}],["path",{d:"M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5"}],["path",{d:"M7 12v4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m12 8-4 4 4 4"}],["path",{d:"M16 12H8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=[["path",{d:"M2 12a10 10 0 1 1 10 10"}],["path",{d:"m2 22 10-10"}],["path",{d:"M8 22H2v-6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=[["path",{d:"M12 22a10 10 0 1 1 10-10"}],["path",{d:"M22 22 12 12"}],["path",{d:"M22 16v6h-6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=[["path",{d:"M2 8V2h6"}],["path",{d:"m2 2 10 10"}],["path",{d:"M12 2A10 10 0 1 1 2 12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=[["path",{d:"M22 12A10 10 0 1 1 12 2"}],["path",{d:"M22 2 12 12"}],["path",{d:"M16 2h6v6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m12 16 4-4-4-4"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 9-5.5 5.5L8 12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 10-4 4-4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m14 16-4-4 4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m10 8 4 4-4 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m8 14 4-4 4 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q9=[["path",{d:"M9 14L12 17L15 14"}],["path",{d:"M9 8L12 11L15 8"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y9=[["path",{d:"M10 9L7 12L10 15"}],["path",{d:"M16 9L13 12L16 15"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=[["path",{d:"M14 15L17 12L14 9"}],["path",{d:"M8 15L11 12L8 9"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=[["path",{d:"M15 10L12 7L9 10"}],["path",{d:"M15 16L12 13L9 16"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=[["path",{d:"M10.1 2.182a10 10 0 013.8 0"}],["path",{d:"M13.9 21.818a10 10 0 01-3.8 0"}],["path",{d:"m16 9-5.5 5.5L8 12"}],["path",{d:"M17.609 3.721a10 10 0 012.69 2.7"}],["path",{d:"M2.182 13.9a10 10 0 010-3.8"}],["path",{d:"M20.279 17.609a10 10 0 01-2.7 2.69"}],["path",{d:"M21.818 10.1a10 10 0 010 3.8"}],["path",{d:"M3.721 6.391a10 10 0 012.7-2.69"}],["path",{d:"M6.391 20.279a10 10 0 01-2.69-2.7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 18V6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=[["path",{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0"}],["path",{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"}],["path",{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8"}],["path",{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"}],["path",{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0"}],["path",{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"}],["path",{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8"}],["path",{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"}],["circle",{cx:"12",cy:"12",r:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M17 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M7 12h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M7 10h10"}],["path",{d:"M7 14h10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=[["path",{d:"M15 9.4a4 4 0 1 0 0 5.2"}],["path",{d:"M7 12h5"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75"}],["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75"}],["path",{d:"M12 8v8"}],["path",{d:"M16 12H8"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=[["path",{d:"M15 14H9"}],["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m8 16 3.453-7.648a.6.6 0 0 1 1.094 0L16 16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=[["path",{d:"M15.6 2.7a10 10 0 1 0 5.7 5.7"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M13.4 10.6 19 5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=[["path",{d:"M9 12h4.846a2.24 2.24 0 011.523.586 2 2 0 01.001 2.828 2.24 2.24 0 01-1.524.586H9.5a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5H13a2 2 0 010 4"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=[["path",{d:"M15 9.354a4 4 0 1 0 0 5.292"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=[["path",{d:"M15 8H9.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5H15"}],["path",{d:"M9 12h4"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=[["path",{d:"M12 8a4 4 0 010 8H9.412A.41.41 0 019 15.588V8.412A.41.41 0 019.412 8z"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=[["path",{d:"M9 16V8.5a.5.5 0 0 1 .5-.5H15"}],["path",{d:"M9 12h4"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=[["path",{d:"M12.5 12H15v2.268a.88.88 0 01-.263.65A4 4 0 1112 8h2.5"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=[["path",{d:"M9 16V8"}],["path",{d:"M15 16V8"}],["path",{d:"M9 12h6"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=[["path",{d:"M12 16V8"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=[["path",{d:"M15 8v5a3 3 0 1 1-6 0"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=[["path",{d:"M9 16V8"}],["path",{d:"m11 12 4 4"}],["path",{d:"m15 8-6 6"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=[["path",{d:"M8 16.001v-7.5a.5.5 0 0 1 .9-.3l2.7 3.599a.5.5 0 0 0 .8 0l2.7-3.6a.5.5 0 0 1 .9.3v7.501"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=[["path",{d:"M9 8v7.5a.5.5 0 0 0 .5.5H15"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=[["circle",{cx:"12",cy:"12",r:"4"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=[["path",{d:"M9 16V8.576a.496.496 0 01.937-.243l4.126 7.43A.496.496 0 0015 15.52V8"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=[["path",{d:"M12 12h1a2 2 0 000-4H9.5a.5.5 0 00-.5.5V9"}],["path",{d:"M15.652 21.31A10 10 0 012.691 8.348"}],["path",{d:"M22 22 2 2"}],["path",{d:"M4.929 4.929a10 10 0 0116.729 4.483 10 10 0 01-2.588 9.658"}],["path",{d:"M9 14.657V16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=[["path",{d:"M9 12h4a2 2 0 0 0 0-4H9.5a.5.5 0 0 0-.5.5V16"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"m16 16-2.5-2.5"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=[["path",{d:"m11 12 4 4"}],["path",{d:"M9 12h4a2 2 0 0 0 0-4H9.5a.5.5 0 0 0-.5.5V16"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=[["path",{d:"M12 16V8"}],["path",{d:"M9 8h6"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=[["path",{d:"M14.5 8H11a2 2 0 100 4h2a2 2 0 110 4H9"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=[["path",{d:"M15 8v5a3 3 0 1 1-6 0V8"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=[["path",{d:"m9 8 2.525 7.66a.5.5 0 0 0 .95 0L15 8"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=[["path",{d:"m16 8-1.591 7.598a.497.497 0 01-.97.038l-.96-3.276a.5.5 0 00-.959 0l-.96 3.276a.496.496 0 01-.969-.038L8 8"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=[["path",{d:"m9 16 6-8"}],["path",{d:"m9 8 6 8"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=[["path",{d:"M9 8h5.501a.5.5 0 0 1 .37.836L9.13 15.164A.5.5 0 0 0 9.5 16H15"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=[["path",{d:"m9 8 3 4 3-4"}],["path",{d:"M12 12v4"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=[["path",{d:"m2 2 20 20"}],["path",{d:"M8.35 2.69A10 10 0 0 1 21.3 15.65"}],["path",{d:"M19.08 19.08A10 10 0 1 1 4.92 4.92"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=[["circle",{cx:"12",cy:"19",r:"2"}],["circle",{cx:"12",cy:"5",r:"2"}],["circle",{cx:"16",cy:"12",r:"2"}],["circle",{cx:"20",cy:"19",r:"2"}],["circle",{cx:"4",cy:"19",r:"2"}],["circle",{cx:"8",cy:"12",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M10 16V9.5a1 1 0 0 1 5 0"}],["path",{d:"M8 12h4"}],["path",{d:"M8 16h7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 7v4"}],["path",{d:"M7.998 9.003a5 5 0 1 0 8-.005"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M22 2 2 22"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=[["circle",{cx:"12",cy:"12",r:"6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M11.051 7.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.867l-1.156-1.152a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=[["circle",{cx:"12",cy:"12",r:"10"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=[["path",{d:"M17.925 20.056a6 6 0 0 0-11.851.001"}],["circle",{cx:"12",cy:"11",r:"4"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4"}],["circle",{cx:"15",cy:"15",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=[["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=[["path",{d:"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"}],["path",{d:"M19.65 15.66A8 8 0 0 1 8.35 4.34"}],["path",{d:"m14 10-5.5 5.5"}],["path",{d:"M14 17.85V10H6.15"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M=[["path",{d:"m12.296 3.464 3.02 3.956"}],["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}],["path",{d:"m6.18 5.276 3.1 3.899"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=[["path",{d:"M19 11h.01"}],["path",{d:"M19 6h.01"}],["path",{d:"M5 8c0-4 4-4 4-4 6 0 6 6 6 6 0 7-10 11-10 11"}],["circle",{cx:"7",cy:"8",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=[["path",{d:"M10 4v16"}],["path",{d:"M14 4.764a3 3 0 1 1-.152 4.327A4 4 0 0 1 10 12a4 4 0 0 1 3.848 2.909A3 3 0 1 1 14 19.236"}],["path",{d:"M6 4v16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=[["path",{d:"M10.586 21.414a2 2 0 0 0 3.378-1.791L11.036 4.377a2 2 0 1 1 3.378 1.037C12.414 7.414 7 8 7 13a5 5 0 0 0 5 5 5 4 0 0 0 5-4 3 3 0 0 0-3-3 3 2 0 0 0-3 2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4"}],["path",{d:"M21 14H11"}],["path",{d:"m15 10-4 4 4 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=[["path",{d:"M16 14v2.2l1.6 1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v.832"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"}],["circle",{cx:"16",cy:"16",r:"6"}],["rect",{x:"8",y:"2",width:"8",height:"4",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M12 11h4"}],["path",{d:"M12 16h4"}],["path",{d:"M8 11h.01"}],["path",{d:"M8 16h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 14h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=[["path",{d:"M11 14h10"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v1.344"}],["path",{d:"m17 18 4-4-4-4"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113"}],["rect",{x:"8",y:"2",width:"8",height:"4",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=[["path",{d:"M16 4h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21.34 15.664a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}],["path",{d:"M8 22H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["rect",{x:"8",y:"2",width:"8",height:"4",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1"}],["path",{d:"M8 18h1"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 14h6"}],["path",{d:"M12 17v-6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m14.5 11.5-5 5"}],["path",{d:"m9.5 11.5 5 5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 12v-1h6v1"}],["path",{d:"M11 17h2"}],["path",{d:"M12 11v6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 6v6l2-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 6v6l-4-2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 6v6l-2-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 6v6l4-2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 6v6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 6v6h4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 6v6l4 2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 6v6l2 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 6v10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 6v6l-2 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 6v6l-4 2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 6v6H8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=[["path",{d:"M12 6v6l4 2"}],["path",{d:"M20 12v5"}],["path",{d:"M20 21h.01"}],["path",{d:"M21.25 8.2A10 10 0 1 0 16 21.16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=[["path",{d:"M12 6v6l2 1"}],["path",{d:"M12.337 21.994a10 10 0 1 1 9.588-8.767"}],["path",{d:"m14 18 4 4 4-4"}],["path",{d:"M18 14v8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=[["path",{d:"M12 6v6l1.5.8"}],["path",{d:"M12.338 21.994a10 10 0 1 1 9.587-8.767"}],["path",{d:"M14 18h8"}],["path",{d:"m18 22-4-4 4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=[["path",{d:"M12 6v6l2 1"}],["path",{d:"M13.5 21.885A10 10 0 1 1 22 12"}],["path",{d:"M14 18h8"}],["path",{d:"m18 22 4-4-4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=[["path",{d:"M12 6v6l1.56.78"}],["path",{d:"M13.227 21.925a10 10 0 1 1 8.767-9.588"}],["path",{d:"m14 18 4-4 4 4"}],["path",{d:"M18 22v-8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=[["path",{d:"M21.95 13a10 10 0 1 0-8.685 8.92"}],["path",{d:"M12 6v6l4 2"}],["path",{d:"m16 19 2 2 4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=[["path",{d:"M12 6v6l3.644 1.822"}],["path",{d:"M16 19h6"}],["path",{d:"M19 16v6"}],["path",{d:"M21.92 13.267a10 10 0 1 0-8.653 8.653"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 6v6l4 2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75"}],["path",{d:"M12 6v6l4 2"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=[["path",{d:"M12 12v4"}],["path",{d:"M12 20h.01"}],["path",{d:"M8.128 16.949A7 7 0 1 1 15.71 8h1.79a1 1 0 0 1 0 9h-1.642"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=[["path",{d:"M10 9.17a3 3 0 1 0 0 5.66"}],["path",{d:"M17 9.17a3 3 0 1 0 0 5.66"}],["rect",{x:"2",y:"5",width:"20",height:"14",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=[["path",{d:"m17 15-5.5 5.5L9 18"}],["path",{d:"M5.516 16.07A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 3.501 7.327"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=[["path",{d:"M21 15.251A4.5 4.5 0 0 0 17.5 8h-1.79A7 7 0 1 0 3 13.607"}],["path",{d:"M7 11v4h4"}],["path",{d:"M8 19a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5 4.82 4.82 0 0 0-3.41 1.41L7 15"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=[["path",{d:"m10.852 19.772-.383.924"}],["path",{d:"m13.148 14.228.383-.923"}],["path",{d:"M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923"}],["path",{d:"m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544"}],["path",{d:"m14.772 15.852.923-.383"}],["path",{d:"m14.772 18.148.923.383"}],["path",{d:"M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"}],["path",{d:"m9.228 15.852-.923-.383"}],["path",{d:"m9.228 18.148-.923.383"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=[["path",{d:"M12 13v8l-4-4"}],["path",{d:"m12 21 4-4"}],["path",{d:"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M8 19v1"}],["path",{d:"M8 14v1"}],["path",{d:"M16 19v1"}],["path",{d:"M16 14v1"}],["path",{d:"M12 21v1"}],["path",{d:"M12 16v1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 17H7"}],["path",{d:"M17 21H9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 14v2"}],["path",{d:"M8 14v2"}],["path",{d:"M16 20h.01"}],["path",{d:"M8 20h.01"}],["path",{d:"M12 16v2"}],["path",{d:"M12 22h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"}],["path",{d:"m13 12-3 5h4l-3 5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=[["path",{d:"M11 20v2"}],["path",{d:"M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"}],["path",{d:"M7 19v2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=[["path",{d:"M13 16a3 3 0 0 1 0 6H7a5 5 0 1 1 4.9-6z"}],["path",{d:"M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"m9.2 22 3-7"}],["path",{d:"m9 13-3 7"}],["path",{d:"m17 13-3 7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=[["path",{d:"M10.94 5.274A7 7 0 0 1 15.71 10h1.79a4.5 4.5 0 0 1 4.222 6.057"}],["path",{d:"M18.796 18.81A4.5 4.5 0 0 1 17.5 19H9A7 7 0 0 1 5.79 5.78"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 14v6"}],["path",{d:"M8 14v6"}],["path",{d:"M12 16v6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M8 15h.01"}],["path",{d:"M8 19h.01"}],["path",{d:"M12 17h.01"}],["path",{d:"M12 21h.01"}],["path",{d:"M16 15h.01"}],["path",{d:"M16 19h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=[["path",{d:"M12 2v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"M20 12h2"}],["path",{d:"m19.07 4.93-1.41 1.41"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"}],["path",{d:"M11 20v2"}],["path",{d:"M7 19v2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=[["path",{d:"M12 2v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"M20 12h2"}],["path",{d:"m19.07 4.93-1.41 1.41"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=[["path",{d:"m17 18-1.535 1.605a5 5 0 0 1-8-1.5"}],["path",{d:"M17 22v-4h-4"}],["path",{d:"M20.996 15.251A4.5 4.5 0 0 0 17.495 8h-1.79a7 7 0 1 0-12.709 5.607"}],["path",{d:"M7 10v4h4"}],["path",{d:"m7 14 1.535-1.605a5 5 0 0 1 8 1.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=[["path",{d:"M12 13v8"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"m8 17 4-4 4 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=[["path",{d:"M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z"}],["path",{d:"M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=[["path",{d:"M16.17 7.83 2 22"}],["path",{d:"M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12"}],["path",{d:"m7.83 7.83 8.34 8.34"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=[["path",{d:"M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z"}],["path",{d:"M12 17.66L12 22"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=[["path",{d:"m18 16 4-4-4-4"}],["path",{d:"m6 8-4 4 4 4"}],["path",{d:"m14.5 4-5 16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=[["path",{d:"m16 18 6-6-6-6"}],["path",{d:"m8 6-6 6 6 6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=[["path",{d:"M11 10.27 7 3.34"}],["path",{d:"m11 13.73-4 6.93"}],["path",{d:"M12 22v-2"}],["path",{d:"M12 2v2"}],["path",{d:"M14 12h8"}],["path",{d:"m17 20.66-1-1.73"}],["path",{d:"m17 3.34-1 1.73"}],["path",{d:"M2 12h2"}],["path",{d:"m20.66 17-1.73-1"}],["path",{d:"m20.66 7-1.73 1"}],["path",{d:"m3.34 17 1.73-1"}],["path",{d:"m3.34 7 1.73 1"}],["circle",{cx:"12",cy:"12",r:"2"}],["circle",{cx:"12",cy:"12",r:"8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=[["path",{d:"M10 2v2"}],["path",{d:"M14 2v2"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"}],["path",{d:"M6 2v2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 3v18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=[["path",{d:"M13.744 17.736a6 6 0 1 1-7.48-7.48"}],["path",{d:"M15 6h1v4"}],["path",{d:"m6.134 14.768.866-.5 2 3.464"}],["circle",{cx:"16",cy:"8",r:"6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=[["path",{d:"M10.6 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v5.6"}],["path",{d:"m14.305 19.53.923-.382"}],["path",{d:"M15 3v7.6"}],["path",{d:"m15.229 16.852-.924-.383"}],["path",{d:"m16.852 15.228-.383-.923"}],["path",{d:"m16.852 20.772-.383.924"}],["path",{d:"m19.148 15.228.383-.923"}],["path",{d:"m19.53 21.696-.382-.924"}],["path",{d:"m20.773 16.852.922-.383"}],["path",{d:"m20.773 19.148.922.383"}],["path",{d:"M9 3v18"}],["circle",{cx:"18",cy:"18",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"M15 3v18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7.5 3v18"}],["path",{d:"M12 3v18"}],["path",{d:"M16.5 3v18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=[["path",{d:"M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"m7 15 3 3"}],["path",{d:"m7 21 3-3H5a2 2 0 0 1-2-2v-2"}],["rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"}],["rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=[["path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}],["path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}],["path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}],["path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=[["path",{d:"M12 18h6"}],["path",{d:"M6 18h.01"}],["path",{d:"M8 6h1"}],["rect",{x:"2",y:"14",width:"20",height:"8",rx:"2"}],["rect",{x:"4",y:"2",width:"16",height:"12",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=[["path",{d:"M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z"}],["path",{d:"M20 16a8 8 0 1 0-16 0"}],["path",{d:"M12 4v4"}],["path",{d:"M10 4h4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=[["path",{d:"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98"}],["ellipse",{cx:"12",cy:"19",rx:"9",ry:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1"}],["path",{d:"M17 14v7"}],["path",{d:"M7 14v7"}],["path",{d:"M17 3v3"}],["path",{d:"M7 3v3"}],["path",{d:"M10 14 2.3 6.3"}],["path",{d:"m14 6 7.7 7.7"}],["path",{d:"m8 6 8 8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=[["path",{d:"M16 2v2"}],["path",{d:"M17.915 21a6 6 0 10-12 0"}],["path",{d:"M8 2v2"}],["circle",{cx:"12",cy:"11",r:"4"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=[["path",{d:"M16 2v2"}],["path",{d:"M7 21v-2a2 2 0 012-2h6a2 2 0 012 2v2"}],["path",{d:"M8 2v2"}],["circle",{cx:"12",cy:"10",r:"3"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"}],["path",{d:"M10 21.9V14L2.1 9.1"}],["path",{d:"m10 14 11.9-6.9"}],["path",{d:"M14 19.8v-8.1"}],["path",{d:"M18 17.5V9.4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=[["path",{d:"M11 17h.01"}],["path",{d:"M11.496 2c.324-.016.558.292.529.615a4 4 0 004.235 4.368.713.713 0 01.758.757 4 4 0 004.366 4.237c.323-.03.63.204.614.527a10 10 0 01-2.915 6.566A1 1 0 114.93 4.918 10 10 0 0111.496 2"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"M16 3h.01"}],["path",{d:"M21 4h.01"}],["path",{d:"M21 8h.01"}],["path",{d:"M7 14h.01"}],["path",{d:"M9 8h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=[["path",{d:"m12 15 2 2 4-4"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=[["line",{x1:"12",x2:"18",y1:"15",y2:"15"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=[["line",{x1:"15",x2:"15",y1:"12",y2:"18"}],["line",{x1:"12",x2:"18",y1:"15",y2:"15"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=[["line",{x1:"12",x2:"18",y1:"18",y2:"12"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=[["path",{d:"M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2"}],["rect",{x:"8",y:"8",width:"14",height:"14",rx:"2"}],["path",{d:"m12.5 12.5 5 5"}],["path",{d:"m12.5 17.5 5-5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.17 14.83a4 4 0 1 0 0-5.66"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}],["path",{d:"m9 10-5 5 5 5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=[["path",{d:"m15 10 5 5-5 5"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=[["path",{d:"m14 15-5 5-5-5"}],["path",{d:"M20 4h-7a4 4 0 0 0-4 4v12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=[["path",{d:"M14 9 9 4 4 9"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=[["path",{d:"m10 15 5 5 5-5"}],["path",{d:"M4 4h7a4 4 0 0 1 4 4v12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=[["path",{d:"m10 9 5-5 5 5"}],["path",{d:"M4 20h7a4 4 0 0 0 4-4V4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=[["path",{d:"m15 14 5-5-5-5"}],["path",{d:"M4 20v-7a4 4 0 0 1 4-4h12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=[["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4"}],["path",{d:"M9 14 4 9l5-5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=[["path",{d:"M12 20v2"}],["path",{d:"M12 2v2"}],["path",{d:"M17 20v2"}],["path",{d:"M17 2v2"}],["path",{d:"M2 12h2"}],["path",{d:"M2 17h2"}],["path",{d:"M2 7h2"}],["path",{d:"M20 12h2"}],["path",{d:"M20 17h2"}],["path",{d:"M20 7h2"}],["path",{d:"M7 20v2"}],["path",{d:"M7 2v2"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=[["path",{d:"M12 20v2"}],["path",{d:"M12 2v2"}],["path",{d:"M16 9v6"}],["path",{d:"M17 20v2"}],["path",{d:"M17 2v2"}],["path",{d:"M2 12h2"}],["path",{d:"M2 17h2"}],["path",{d:"M2 7h2"}],["path",{d:"M20 12h2"}],["path",{d:"M20 17h2"}],["path",{d:"M20 7h2"}],["path",{d:"M7 20v2"}],["path",{d:"M7 2v2"}],["path",{d:"M8 13h4"}],["path",{d:"M8 15v-4a2 2 0 014 0v4"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"}],["path",{d:"M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=[["path",{d:"M12.5 19H4a2 2 0 01-2-2V7a2 2 0 012-2h16a2 2 0 012 2v4"}],["path",{d:"M2 10h20"}],["path",{d:"M6 14h2"}],["path",{d:"m16 17 2 2 4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=[["path",{d:"M22 11.354V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2h8.536"}],["path",{d:"M22 10H2"}],["path",{d:"M6 14h2"}],["path",{d:"M16 17h6"}],["path",{d:"M19 14v6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=[["path",{d:"M22 13V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2h8.536"}],["path",{d:"M22 10H2"}],["path",{d:"M6 14h2"}],["path",{d:"M16 17h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=[["path",{d:"M15 16v1"}],["path",{d:"M16.963 7.734A1 1 0 0015.999 7H8.003a1 1 0 00-.964.734L4.073 18.467A2 2 0 006 21h12a2 2 0 001.927-2.532z"}],["path",{d:"M2.678 8.5A2 2 0 012 7V5a2 2 0 012-2h16a2 2 0 012 2v2a2 2 0 01-.676 1.499"}],["path",{d:"m9 21 2-14"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=[["path",{d:"M12.5 19H4a2 2 0 01-2-2V7a2 2 0 012-2h16a2 2 0 012 2v3.5"}],["path",{d:"M2 10h20"}],["path",{d:"M6 14h2"}],["path",{d:"m16.5 14.5 5 5"}],["path",{d:"m21.5 14.5-5 5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10"}],["path",{d:"M6 14h2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=[["path",{d:"M10.2 18H4.774a1.5 1.5 0 0 1-1.352-.97 11 11 0 0 1 .132-6.487"}],["path",{d:"M18 10.2V4.774a1.5 1.5 0 0 0-.97-1.352 11 11 0 0 0-6.486.132"}],["path",{d:"M18 5a4 3 0 0 1 4 3 2 2 0 0 1-2 2 10 10 0 0 0-5.139 1.42"}],["path",{d:"M5 18a3 4 0 0 0 3 4 2 2 0 0 0 2-2 10 10 0 0 1 1.42-5.14"}],["path",{d:"M8.709 2.554a10 10 0 0 0-6.155 6.155 1.5 1.5 0 0 0 .676 1.626l9.807 5.42a2 2 0 0 0 2.718-2.718l-5.42-9.807a1.5 1.5 0 0 0-1.626-.676"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=[["path",{d:"M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"}],["path",{d:"M5 21h14"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8"}],["path",{d:"M5 8h14"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"}],["path",{d:"m12 8 1-6h2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=[["path",{d:"M10 22v-8"}],["path",{d:"M2.336 8.89 10 14l11.715-7.029"}],["path",{d:"M22 14a2 2 0 0 1-.971 1.715l-10 6a2 2 0 0 1-2.138-.05l-6-4A2 2 0 0 1 2 16v-6a2 2 0 0 1 .971-1.715l10-6a2 2 0 0 1 2.138.05l6 4A2 2 0 0 1 22 8z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=[["path",{d:"M12 22v-9"}],["path",{d:"M14 4h1a3 3 0 013 3l-.004.125A4 4 0 0121 11v2"}],["path",{d:"m15.5 22 1.5-9"}],["path",{d:"M21 13a1 1 0 01.919 1.394l-2.74 6.394A2 2 0 0117.34 22H6.659a2 2 0 01-1.838-1.212l-2.74-6.394A1 1 0 013 13z"}],["path",{d:"M3 13v-2a4 4 0 013.003-3.875L6 7a3 3 0 013-3h1"}],["path",{d:"M8.5 22 7 13"}],["circle",{cx:"12",cy:"4",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=[["circle",{cx:"12",cy:"12",r:"8"}],["line",{x1:"3",x2:"6",y1:"3",y2:"6"}],["line",{x1:"21",x2:"18",y1:"3",y2:"6"}],["line",{x1:"3",x2:"6",y1:"21",y2:"18"}],["line",{x1:"21",x2:"18",y1:"21",y2:"18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=[["path",{d:"M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["path",{d:"M2 6h4"}],["path",{d:"M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=[["path",{d:"m16 19 3 3 3-3"}],["path",{d:"M19 16v6"}],["path",{d:"M21 12.536V5"}],["path",{d:"M3 12A9 3 0 0 0 15.182 14.806"}],["path",{d:"M3 5V19A9 3 0 0 0 13.318 21.968"}],["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=[["path",{d:"M19 22v-6"}],["path",{d:"M21 12.536V5"}],["path",{d:"m22 19-3-3-3 3"}],["path",{d:"M3 12A9 3 0 0 0 14.457 14.886"}],["path",{d:"M3 5V19A9 3 0 0 0 13.318 21.968"}],["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 12a9 3 0 0 0 5 2.69"}],["path",{d:"M21 9.3V5"}],["path",{d:"M3 5v14a9 3 0 0 0 6.47 2.88"}],["path",{d:"M12 12v4h4"}],["path",{d:"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=[["path",{d:"m16 19 2 2 4-4"}],["path",{d:"M21 13.127V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}],["path",{d:"M3 5V19A9 3 0 0 0 13.318 21.968"}],["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=[["path",{d:"m14.305 19.53.923-.382"}],["path",{d:"m15.228 16.852-.923-.383"}],["path",{d:"m16.852 15.228-.383-.923"}],["path",{d:"m16.852 20.772-.383.924"}],["path",{d:"m19.148 15.228.383-.923"}],["path",{d:"m19.53 21.696-.382-.924"}],["path",{d:"m20.772 16.852.924-.383"}],["path",{d:"m20.772 19.148.924.383"}],["path",{d:"M21 10.5V5"}],["path",{d:"M3 12a9 3 0 0 0 7.599 2.963"}],["path",{d:"M3 5v14a9 3 0 0 0 8.148 2.987"}],["circle",{cx:"18",cy:"18",r:"3"}],["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=[["path",{d:"M21 15V5"}],["path",{d:"M22 19h-6"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}],["path",{d:"M3 5V19A9 3 0 0 0 13.318 21.968"}],["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=[["path",{d:"M19 16v6"}],["path",{d:"M21 12.536V5"}],["path",{d:"M22 19h-6"}],["path",{d:"M3 12A9 3 0 0 0 15.1824 14.8061"}],["path",{d:"M3 5V19A9 3 0 0 0 13.318 21.968"}],["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=[["path",{d:"M21 11.693V5"}],["path",{d:"m22 22-1.875-1.875"}],["path",{d:"M3 12a9 3 0 0 0 8.697 2.998"}],["path",{d:"M3 5v14a9 3 0 0 0 9.28 2.999"}],["circle",{cx:"18",cy:"18",r:"3"}],["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=[["path",{d:"m17 17 5 5"}],["path",{d:"M19.323 13.744A9 3 0 0 0 21 12"}],["path",{d:"M21 13.127V5"}],["path",{d:"m22 17-5 5"}],["path",{d:"M3 12A9 3 0 0 0 13.563 14.954"}],["path",{d:"M3 5V19A9 3 0 0 0 13 21.981"}],["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 15 21.84"}],["path",{d:"M21 5V8"}],["path",{d:"M21 12L18 17H22L19 22"}],["path",{d:"M3 12A9 3 0 0 0 14.59 14.87"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=[["path",{d:"m13 21-3-3 3-3"}],["path",{d:"M20 18H10"}],["path",{d:"M3 11h.01"}],["rect",{x:"6",y:"3",width:"5",height:"8",rx:"2.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=[["path",{d:"M10 18h10"}],["path",{d:"m17 21 3-3-3-3"}],["path",{d:"M3 11h.01"}],["rect",{x:"15",y:"3",width:"5",height:"8",rx:"2.5"}],["rect",{x:"6",y:"3",width:"5",height:"8",rx:"2.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["path",{d:"M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"}],["path",{d:"m12 9 6 6"}],["path",{d:"m18 9-6 6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=[["path",{d:"M10.162 3.167A10 10 0 0 0 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4-.006 10 10 0 0 0-8.161-9.826"}],["path",{d:"M20.804 14.869a9 9 0 0 1-17.608 0"}],["circle",{cx:"12",cy:"4",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=[["circle",{cx:"19",cy:"19",r:"2"}],["circle",{cx:"5",cy:"5",r:"2"}],["path",{d:"M6.48 3.66a10 10 0 0 1 13.86 13.86"}],["path",{d:"m6.41 6.41 11.18 11.18"}],["path",{d:"M3.66 6.48a10 10 0 0 0 13.86 13.86"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z"}],["path",{d:"M9.2 9.2h.01"}],["path",{d:"m14.5 9.5-5 5"}],["path",{d:"M14.7 14.8h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=[["path",{d:"M12 8v8"}],["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M12 12h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M15 9h.01"}],["path",{d:"M9 15h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M8 16h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 16h.01"}],["path",{d:"M16 16h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 16h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"M12 12h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M16 12h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 12h.01"}],["path",{d:"M8 16h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=[["path",{d:"M12 3v14"}],["path",{d:"M5 10h14"}],["path",{d:"M5 21h14"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 14h.01"}],["path",{d:"M15 6h.01"}],["path",{d:"M18 9h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 12h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"12",r:"5"}],["path",{d:"M12 12h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["circle",{cx:"12",cy:"6",r:"1"}],["line",{x1:"5",x2:"19",y1:"12",y2:"12"}],["circle",{cx:"12",cy:"18",r:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=[["path",{d:"M2 8h20"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M6 16h12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=[["path",{d:"M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8"}],["path",{d:"m17 6-2.891-2.891"}],["path",{d:"M2 15c3.333-3 6.667-3 10-3"}],["path",{d:"m2 2 20 20"}],["path",{d:"m20 9 .891.891"}],["path",{d:"M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1"}],["path",{d:"M3.109 14.109 4 15"}],["path",{d:"m6.5 12.5 1 1"}],["path",{d:"m7 18 2.891 2.891"}],["path",{d:"M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=[["path",{d:"m10 16 1.5 1.5"}],["path",{d:"m14 8-1.5-1.5"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"}],["path",{d:"m16.5 10.5 1 1"}],["path",{d:"m17 6-2.891-2.891"}],["path",{d:"M2 15c6.667-6 13.333 0 20-6"}],["path",{d:"m20 9 .891.891"}],["path",{d:"M3.109 14.109 4 15"}],["path",{d:"m6.5 12.5 1 1"}],["path",{d:"m7 18 2.891 2.891"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"M11.25 16.25h1.5L12 17z"}],["path",{d:"M16 14v.5"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"}],["path",{d:"M8 14v.5"}],["path",{d:"M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=[["path",{d:"M12 3v18"}],["path",{d:"M17 5H9.5a1 1 0 000 7h5a1 1 0 010 7H6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["path",{d:"M10 21v-3a2 2 0 014 0v3"}],["path",{d:"M12 2v2"}],["path",{d:"M18 12v9"}],["path",{d:"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2v-6a1 1 0 011-1h18a1 1 0 011 1z"}],["path",{d:"M4 12a8 8 0 0116 0"}],["path",{d:"M6 12v9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=[["path",{d:"M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=[["path",{d:"m14.305 19.53.923-.382"}],["path",{d:"m15.229 16.852-.924-.383"}],["path",{d:"m16.852 15.228-.383-.923"}],["path",{d:"m16.852 20.773-.383.924"}],["path",{d:"M19 10.35V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16"}],["path",{d:"m19.148 15.228.383-.923"}],["path",{d:"m19.53 21.697-.382-.924"}],["path",{d:"M2 21h8.58"}],["path",{d:"m20.773 16.852.922-.383"}],["path",{d:"m20.773 19.148.922.383"}],["path",{d:"M9 12h.01"}],["circle",{cx:"18",cy:"18",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=[["path",{d:"M19 8V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16"}],["path",{d:"M2 21h8"}],["path",{d:"M20 16v-2a2 2 0 00-4 0v2"}],["path",{d:"M9 12h.01"}],["rect",{x:"14",y:"16",width:"8",height:"5",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=[["path",{d:"M18 13v3"}],["path",{d:"M19 9V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16"}],["path",{d:"M2 21h8"}],["path",{d:"M9 12h.01"}],["rect",{x:"14",y:"13",width:"8",height:"8",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=[["path",{d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16"}],["path",{d:"M2 21h20"}],["path",{d:"M9 12h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=[["path",{d:"M10 21H2"}],["path",{d:"M10 3H7a2 2 0 00-2 2v16"}],["path",{d:"M14 12h.01"}],["path",{d:"M19 21V5a2 2 0 00-1.675-1.974l-6.163-1.013A1 1 0 0010 3v18a1 1 0 001.124.992z"}],["path",{d:"M22 21h-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=[["path",{d:"M12 17v-3a1 1 0 011-1h6"}],["path",{d:"M19 17h-9a1 1 0 00-1 1v3"}],["path",{d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16"}],["path",{d:"M19 9h-3a1 1 0 00-1 1v3"}],["path",{d:"M22 21H2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=[["circle",{cx:"12",cy:"12",r:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=[["path",{d:"m12.99 6.74 1.93 3.44"}],["path",{d:"M19.136 12a10 10 0 0 1-14.271 0"}],["path",{d:"m21 21-2.16-3.84"}],["path",{d:"m3 21 8.02-14.26"}],["circle",{cx:"12",cy:"5",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["path",{d:"M10 11h.01"}],["path",{d:"M14 6h.01"}],["path",{d:"M18 6h.01"}],["path",{d:"M6.5 13.1h.01"}],["path",{d:"M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3"}],["path",{d:"M17.4 9.9c-.8.8-2 .8-2.8 0"}],["path",{d:"M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"}],["path",{d:"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["path",{d:"M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z"}],["path",{d:"M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8"}],["path",{d:"M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3"}],["path",{d:"M18 6h4"}],["path",{d:"m5 10-2 8"}],["path",{d:"m7 18 2-8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=[["path",{d:"M10 10 7 7"}],["path",{d:"m10 14-3 3"}],["path",{d:"m14 10 3-3"}],["path",{d:"m14 14 3 3"}],["path",{d:"M14.205 4.139a4 4 0 1 1 5.439 5.863"}],["path",{d:"M19.637 14a4 4 0 1 1-5.432 5.868"}],["path",{d:"M4.367 10a4 4 0 1 1 5.438-5.862"}],["path",{d:"M9.795 19.862a4 4 0 1 1-5.429-5.873"}],["rect",{x:"10",y:"8",width:"4",height:"8",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=[["path",{d:"M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586"}],["path",{d:"m2 2 20 20"}],["path",{d:"M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=[["path",{d:"m2 2 8 8"}],["path",{d:"m22 2-8 8"}],["ellipse",{cx:"12",cy:"9",rx:"10",ry:"5"}],["path",{d:"M7 13.4v7.9"}],["path",{d:"M12 14v8"}],["path",{d:"M17 13.4v7.9"}],["path",{d:"M2 9v8a10 5 0 0 0 20 0V9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["path",{d:"M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23"}],["path",{d:"m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"}],["path",{d:"m2.5 21.5 1.4-1.4"}],["path",{d:"m20.1 3.9 1.4-1.4"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"}],["path",{d:"m9.6 14.4 4.8-4.8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=[["path",{d:"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46"}],["path",{d:"M6 8.5c0-.75.13-1.47.36-2.14"}],["path",{d:"M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76"}],["path",{d:"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=[["path",{d:"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"}],["path",{d:"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=[["path",{d:"M10 10v9a2 2 0 01-4 0v-8a5 5 0 01-3.75-1.693A1 1 0 012 8.646V5.354a1 1 0 01.25-.661 5 5 0 011.359-1.084"}],["path",{d:"M14 14v5a2 2 90 004 0v-1"}],["path",{d:"M18 12.343V11a5 5 90 003.75-1.693 1 1 90 00.25-.661V5.354a1 1 90 00-.25-.661A5 5 90 0018 3a4 4 90 00-4 4v1.343"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=[["path",{d:"M18 3a4 4 90 00-4 4v12a2 2 90 004 0v-8a5 5 90 003.75-1.693 1 1 90 00.25-.661V5.354a1 1 90 00-.25-.661A5 5 90 0018 3"}],["path",{d:"M6 3a4 4 0 014 4v12a2 2 0 01-4 0v-8a5 5 0 01-3.75-1.693A1 1 0 012 8.646V5.354a1 1 0 01.25-.661A5 5 0 016 3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=[["path",{d:"M7 3.34V5a3 3 0 0 0 3 3"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"}],["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54"}],["path",{d:"M12 2a10 10 0 1 0 9.54 13"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a7 7 0 1 0 10 10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=[["circle",{cx:"11.5",cy:"12.5",r:"3.5"}],["path",{d:"M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=[["path",{d:"m2 2 20 20"}],["path",{d:"M20 14.347V14c0-6-4-12-8-12-1.078 0-2.157.436-3.157 1.19"}],["path",{d:"M6.206 6.21C4.871 8.4 4 11.2 4 14a8 8 0 0 0 14.568 4.568"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=[["path",{d:"m19 6-5.2-3.9a.5.5 0 0 0-.8.4V18"}],["circle",{cx:"9",cy:"18",r:"4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=[["path",{d:"M21 16V3a1 1 0 0 0-1.28-.96l-10 2.917a1 1 0 0 0-.72.96V19"}],["circle",{cx:"18",cy:"16",r:"3"}],["circle",{cx:"6",cy:"19",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=[["path",{d:"M4 13a1 1 0 0 1-.72-1.695l7.257-7.668a2 2 0 0 1 2.926 0l7.256 7.668A1 1 0 0 1 20 13z"}],["rect",{x:"3",y:"17",width:"18",height:"4",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=[["ellipse",{cx:"12",cy:"12",rx:"10",ry:"6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"12",cy:"5",r:"1"}],["circle",{cx:"12",cy:"19",r:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=[["path",{d:"M11 4a8 8 0 0 1 0 16H6.406A.4.4 0 0 1 6 19.594V4.406A.4.4 0 0 1 6.406 4z"}],["path",{d:"M4 10h17"}],["path",{d:"M4 14h17"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=[["path",{d:"M10 3h6"}],["path",{d:"M13 3v4"}],["path",{d:"M2 10v6"}],["path",{d:"M2 13h4"}],["path",{d:"M6 16a2 2 0 002 2h1a2 2 0 011.6.8l.3.4a2 2 0 001.6.8h2.264a2 2 0 001.789-1.106l1.67-3.341a1 1 0 01.895-.553H21a1 1 0 001-1v-4a1 1 0 00-1-1h-3.5a1 1 0 01-.8-.4l-.9-1.2A1 1 0 0015 7h-4a1 1 0 00-.8.4l-.9 1.2a1 1 0 01-.8.4H7a1 1 0 00-1 1z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=[["path",{d:"M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0"}],["path",{d:"M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=[["path",{d:"M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0"}],["path",{d:"M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=[["line",{x1:"5",x2:"19",y1:"9",y2:"9"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=[["line",{x1:"5",x2:"19",y1:"9",y2:"9"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21"}],["path",{d:"m5.082 11.09 8.828 8.828"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=[["path",{d:"M10 8v1"}],["path",{d:"M14 8v1"}],["path",{d:"M18 8v1"}],["path",{d:"M19 17a2 2 0 00-1.765 1.059l-.47.882A2 2 0 0115 20H9a2 2 0 01-1.765-1.059l-.47-.882A2 2 0 005 17H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v9a2 2 0 01-2 2z"}],["path",{d:"M6 8v1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=[["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5"}],["path",{d:"M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16"}],["path",{d:"M2 21h13"}],["path",{d:"M3 7h11"}],["path",{d:"m9 11-2 3h3l-2 3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=[["path",{d:"m15 15 6 6"}],["path",{d:"m15 9 6-6"}],["path",{d:"M21 16v5h-5"}],["path",{d:"M21 8V3h-5"}],["path",{d:"M3 16v5h5"}],["path",{d:"m3 21 6-6"}],["path",{d:"M3 8V3h5"}],["path",{d:"M9 9 3 3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=[["path",{d:"m15 18-.722-3.25"}],["path",{d:"M2 8a10.645 10.645 0 0 0 20 0"}],["path",{d:"m20 15-1.726-2.05"}],["path",{d:"m4 15 1.726-2.05"}],["path",{d:"m9 18 .722-3.25"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=[["path",{d:"M13.054 18.946a11 11 0 0 1-2.11 0"}],["path",{d:"M13.054 5.054a11 11 0 0 0-2.11-.001"}],["path",{d:"M17.072 6.274a11 11 0 0 1 1.753 1.173"}],["path",{d:"M18.825 16.552a11 11 0 0 1-1.753 1.174"}],["path",{d:"M2.514 13.303a11 11 0 0 1-.452-.954 1 1 0 0 1 0-.697 11 11 0 0 1 .45-.955"}],["path",{d:"M21.485 10.697a11 11 0 0 1 .453.955 1 1 0 0 1 0 .697 11 11 0 0 1-.453.954"}],["path",{d:"M5.173 7.448a11 11 0 0 1 1.753-1.174"}],["path",{d:"M6.926 17.726a11 11 0 0 1-1.753-1.174"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=[["path",{d:"M15 12v-1.584"}],["path",{d:"M17 10a5 5 0 00-3 1"}],["path",{d:"M7 10a5 5 0 013 1"}],["path",{d:"M9 12v-1.584"}],["path",{d:"M9 17a5 5 0 016.001 0"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=[["path",{d:"M14 10h2"}],["path",{d:"M8 10h2"}],["path",{d:"M8 16h8"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=[["path",{d:"M15 10V9"}],["path",{d:"M7.084 14.302a5.12 5.12 0 009.833 0 .24.24 0 00-.235-.302H7.32a.24.24 0 00-.235.302"}],["path",{d:"M9 10V9"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=[["path",{d:"M15 10V9"}],["path",{d:"M8 16h8"}],["path",{d:"M9 10V9"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=[["path",{d:"M15 10V9"}],["path",{d:"M9 10V9"}],["path",{d:"M9 16a5 5 0 016 0"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=[["path",{d:"M13.267 2.08a10 10 0 108.653 8.653"}],["path",{d:"M15 10V9"}],["path",{d:"M16 5h6"}],["path",{d:"M16.472 15a6 6 0 01-8.943 0"}],["path",{d:"M19 2v6"}],["path",{d:"M9 10V9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=[["path",{d:"M15 10V9"}],["path",{d:"M16.472 15a6 6 0 01-8.943 0"}],["path",{d:"M9 10V9"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=[["path",{d:"M12 16h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"}],["path",{d:"M8 16h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"}],["path",{d:"M12 12v.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=[["path",{d:"M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z"}],["path",{d:"M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=[["path",{d:"M10.083 5.428 5.57 4.083a2 2 0 10.001 3.834l4.512-1.345"}],["path",{d:"M12 8v3"}],["path",{d:"m13.917 5.428 4.511-1.345a2 2 0 110 3.834l-4.51-1.345"}],["path",{d:"M18 17v-4.006"}],["path",{d:"M22 11v8"}],["path",{d:"M22 12h-3a1 1 0 00-1 .994h-2.539a4 4 0 00-6.915-.012L7 13a5 5 0 00-5 5v1a1 1 0 001 1h2a1 1 0 001-1v-1a1 1 0 01.995-1l1.552.018a4 4 0 006.907 0L18 17a1 1 0 001 1h3"}],["circle",{cx:"12",cy:"6",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=[["path",{d:"M14.086 18.412A2 2 0 0112.67 19H5v-7.672a2 2 0 01.586-1.414L11.75 3.75a6 6 0 118.49 8.49z"}],["path",{d:"M16 8 2 22"}],["path",{d:"M17.488 15H9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=[["path",{d:"M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}],["path",{d:"M6 8h4"}],["path",{d:"M6 18h4"}],["path",{d:"m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}],["path",{d:"M14 8h4"}],["path",{d:"M14 18h4"}],["path",{d:"m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=[["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M12 2v4"}],["path",{d:"m6.8 15-3.5 2"}],["path",{d:"m20.7 7-3.5 2"}],["path",{d:"M6.8 9 3.3 7"}],["path",{d:"m20.7 17-3.5-2"}],["path",{d:"m9 22 3-8 3 8"}],["path",{d:"M8 22h8"}],["path",{d:"M18 18.7a9 9 0 1 0-12 0"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=[["path",{d:"M13.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v11.5"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M8 12v-1"}],["path",{d:"M8 18v-2"}],["path",{d:"M8 7V6"}],["circle",{cx:"8",cy:"20",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=[["path",{d:"M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.3"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m7.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.879.001l-1.846.85a.5.5 0 0 1-.692-.593l1.29-4.88"}],["circle",{cx:"6",cy:"14",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m8 18 4-4"}],["path",{d:"M8 10v8h8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=[["path",{d:"M14 2v5a1 1 0 001 1h5"}],["path",{d:"M14.692 22H18a2 2 0 002-2V8a2.4 2.4 0 00-.706-1.706l-3.588-3.588A2.4 2.4 0 0014 2H6a2 2 0 00-2 2v3.804"}],["path",{d:"M2.264 13.752 7 16.5l4.737-2.748"}],["path",{d:"M2.995 13.014A2 2 0 002 14.744v3.516a2 2 0 00.996 1.73l3 1.74a2 2 0 002.008 0l3-1.74A2 2 0 0012 18.26v-3.517a2 2 0 00-.995-1.73l-3-1.742a2 2 0 00-1.892-.064z"}],["path",{d:"M7 16.5V22"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=[["path",{d:"M14 22h4a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M5 14a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1 1 1 0 0 1 1 1v2a1 1 0 0 0 1 1"}],["path",{d:"M9 22a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M8 18v-2"}],["path",{d:"M12 18v-4"}],["path",{d:"M16 18v-6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M8 18v-1"}],["path",{d:"M12 18v-6"}],["path",{d:"M16 18v-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m16 13-3.5 3.5-2-2L8 17"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=[["path",{d:"M15.941 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.512"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M4.017 11.512a6 6 0 1 0 8.466 8.475"}],["path",{d:"M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=[["path",{d:"M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m14 20 2 2 4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m9 15 2 2 4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=[["path",{d:"M16 22h2a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v2.85"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M8 14v2.2l1.6 1"}],["circle",{cx:"8",cy:"16",r:"6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m5 16-3 3 3 3"}],["path",{d:"m9 22 3-3-3-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 12.5 8 15l2 2.5"}],["path",{d:"m14 12.5 2 2.5-2 2.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=[["path",{d:"M15 8a1 1 0 0 1-1-1V2a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8z"}],["path",{d:"M20 8v12a2 2 0 0 1-2 2h-4.182"}],["path",{d:"m3.305 19.53.923-.382"}],["path",{d:"M4 10.592V4a2 2 0 0 1 2-2h8"}],["path",{d:"m4.228 16.852-.924-.383"}],["path",{d:"m5.852 15.228-.383-.923"}],["path",{d:"m5.852 20.772-.383.924"}],["path",{d:"m8.148 15.228.383-.923"}],["path",{d:"m8.53 21.696-.382-.924"}],["path",{d:"m9.773 16.852.922-.383"}],["path",{d:"m9.773 19.148.922.383"}],["circle",{cx:"7",cy:"18",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=[["path",{d:"M12 12v8a5 2 0 01-10 0v-8"}],["path",{d:"M12 16a5 2 0 01-10 0"}],["path",{d:"M14 2v5a1 1 0 001 1h5"}],["path",{d:"M4 6.3V4a2 2 0 012-2h8a2.4 2.4 0 011.706.706l3.588 3.588A2.4 2.4 0 0120 8v12a2 2 0 01-2 2h-2.43"}],["ellipse",{cx:"7",cy:"12",rx:"5",ry:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M9 10h6"}],["path",{d:"M12 13V7"}],["path",{d:"M9 17h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=[["path",{d:"M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 16h2v6"}],["path",{d:"M10 22h4"}],["rect",{x:"2",y:"16",width:"4",height:"6",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M12 18v-6"}],["path",{d:"m9 15 3 3 3-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=[["path",{d:"M4 6.835V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-.343"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M2 19a2 2 0 0 1 4 0v1a2 2 0 0 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 0 1-4 0v-1a2 2 0 0 1 4 0"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=[["path",{d:"M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v7"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M3.62 18.8A2.25 2.25 0 1 1 7 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a1 1 0 0 1-1.507 0z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["circle",{cx:"10",cy:"12",r:"2"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=[["path",{d:"M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M2 15h10"}],["path",{d:"m9 18 3-3-3-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=[["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M4 12v6"}],["path",{d:"M4 14h2"}],["path",{d:"M9.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v4"}],["circle",{cx:"4",cy:"20",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=[["path",{d:"M4 9.8V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M9 17v-2a2 2 0 0 0-4 0v2"}],["rect",{width:"8",height:"5",x:"3",y:"17",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=[["path",{d:"M20 14V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M14 18h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M9 15h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=[["path",{d:"M11.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v10.35"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M8 20v-7l3 1.474"}],["circle",{cx:"6",cy:"20",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=[["path",{d:"M4.226 20.925A2 2 0 0 0 6 22h12a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.127"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m5 11-3 3"}],["path",{d:"m5 17-3-3h10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=[["path",{d:"M14.364 13.634a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506l4.013-4.009a1 1 0 0 0-3.004-3.004z"}],["path",{d:"M14.487 7.858A1 1 0 0 1 14 7V2"}],["path",{d:"M20 19.645V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l2.516 2.516"}],["path",{d:"M8 18h1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=[["path",{d:"M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M15.033 13.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56v-4.704a.645.645 0 0 1 .967-.56z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=[["path",{d:"M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M14 19h6"}],["path",{d:"M17 16v6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M9 15h6"}],["path",{d:"M12 18v-6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M12 17h.01"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=[["path",{d:"M20 10V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4.35"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M16 14a2 2 0 0 0-2 2"}],["path",{d:"M16 22a2 2 0 0 1-2-2"}],["path",{d:"M20 14a2 2 0 0 1 2 2"}],["path",{d:"M20 22a2 2 0 0 0 2-2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=[["path",{d:"M11.1 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.589 3.588A2.4 2.4 0 0 1 20 8v3.25"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m21 22-2.88-2.88"}],["circle",{cx:"16",cy:"17",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5"}],["path",{d:"M13.3 16.3 15 18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M8 15h.01"}],["path",{d:"M11.5 13.5a2.5 2.5 0 0 1 0 3"}],["path",{d:"M15 12a5 5 0 0 1 0 6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M8 12h8"}],["path",{d:"M10 11v2"}],["path",{d:"M8 17h8"}],["path",{d:"M14 16v2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M8 13h2"}],["path",{d:"M14 13h2"}],["path",{d:"M8 17h2"}],["path",{d:"M14 17h2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=[["path",{d:"M11 21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1"}],["path",{d:"M16 16a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1"}],["path",{d:"M21 6a2 2 0 0 0-.586-1.414l-2-2A2 2 0 0 0 17 2h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=[["path",{d:"M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m10 18 3-3-3-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m8 16 2-2-2-2"}],["path",{d:"M12 18h4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=[["path",{d:"M12 22h6a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M3 16v-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V16"}],["path",{d:"M6 22h2"}],["path",{d:"M7 14v8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M11 18h2"}],["path",{d:"M12 12v6"}],["path",{d:"M9 13v-.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M12 12v6"}],["path",{d:"m15 15-3-3-3 3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M16 22a4 4 0 0 0-8 0"}],["circle",{cx:"12",cy:"15",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=[["path",{d:"M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m10 17.843 3.033-1.755a.64.64 0 0 1 .967.56v4.704a.65.65 0 0 1-.967.56L10 20.157"}],["rect",{width:"7",height:"6",x:"3",y:"16",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=[["path",{d:"M4 11.55V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-1.95"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M12 15a5 5 0 0 1 0 6"}],["path",{d:"M8 14.502a.5.5 0 0 0-.826-.381l-1.893 1.631a1 1 0 0 1-.651.243H3.5a.5.5 0 0 0-.5.501v3.006a.5.5 0 0 0 .5.501h1.129a1 1 0 0 1 .652.243l1.893 1.633a.5.5 0 0 0 .826-.38z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=[["path",{d:"M11 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m15 17 5 5"}],["path",{d:"m20 17-5 5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m14.5 12.5-5 5"}],["path",{d:"m9.5 12.5 5 5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02"}],["path",{d:"M2 12a10 10 0 0 1 18-6"}],["path",{d:"M2 16h.01"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 3v18"}],["path",{d:"M3 7.5h4"}],["path",{d:"M3 12h18"}],["path",{d:"M3 16.5h4"}],["path",{d:"M17 3v18"}],["path",{d:"M17 7.5h4"}],["path",{d:"M17 16.5h4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=[["path",{d:"M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5"}],["path",{d:"M9 18h8"}],["path",{d:"M18 3h-3"}],["path",{d:"M11 3a6 6 0 0 0-6 6v11"}],["path",{d:"M5 13h4"}],["path",{d:"M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=[["path",{d:"M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=[["path",{d:"M2 16s9-15 20-4C11 23 2 8 2 8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"}],["path",{d:"M18 12v.5"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=[["path",{d:"m17.586 11.414-5.93 5.93a1 1 0 0 1-8-8l3.137-3.137a.707.707 0 0 1 1.207.5V10"}],["path",{d:"M20.414 8.586 22 7"}],["circle",{cx:"19",cy:"10",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=[["path",{d:"M4 11h1"}],["path",{d:"M8 15a2 2 0 0 1-4 0V3a1 1 0 0 1 1-1h.5C14 2 20 9 20 18v4"}],["circle",{cx:"18",cy:"18",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=[["path",{d:"M16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"}],["path",{d:"m2 2 20 20"}],["path",{d:"M4 22V4"}],["path",{d:"M7.656 2H8c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10.347"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=[["path",{d:"M18 22V2.8a.8.8 0 0 0-1.17-.71L5.45 7.78a.8.8 0 0 0 0 1.44L18 15.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=[["path",{d:"M6 22V2.8a.8.8 0 0 1 1.17-.71l11.38 5.69a.8.8 0 0 1 0 1.44L6 15.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=[["path",{d:"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=[["path",{d:"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"}],["path",{d:"m5 22 14-4"}],["path",{d:"m5 18 14 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=[["path",{d:"M11.652 6H18"}],["path",{d:"M12 13v1"}],["path",{d:"M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8a4 4 0 0 0-.8-2.4l-.6-.8A3 3 0 0 1 6 7V6"}],["path",{d:"m2 2 20 20"}],["path",{d:"M7.649 2H17a1 1 0 0 1 1 1v4a3 3 0 0 1-.6 1.8l-.6.8a4 4 0 0 0-.55 1.007"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=[["path",{d:"M12 13v1"}],["path",{d:"M17 2a1 1 0 0 1 1 1v4a3 3 0 0 1-.6 1.8l-.6.8A4 4 0 0 0 16 12v8a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-8a4 4 0 0 0-.8-2.4l-.6-.8A3 3 0 0 1 6 7V3a1 1 0 0 1 1-1z"}],["path",{d:"M6 6h12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=[["path",{d:"M10 2v2.343"}],["path",{d:"M14 2v6.343"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563"}],["path",{d:"M6.453 15H15"}],["path",{d:"M8.5 2h7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"}],["path",{d:"M6.453 15h11.094"}],["path",{d:"M8.5 2h7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=[["path",{d:"M10 2v6.292a7 7 0 1 0 4 0V2"}],["path",{d:"M5 15h14"}],["path",{d:"M8.5 2h7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"}],["circle",{cx:"12",cy:"8",r:"2"}],["path",{d:"M12 10v12"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"}],["path",{d:"M12 7.5V9"}],["path",{d:"M7.5 12H9"}],["path",{d:"M16.5 12H15"}],["path",{d:"M12 16.5V15"}],["path",{d:"m8 8 1.88 1.88"}],["path",{d:"M14.12 9.88 16 8"}],["path",{d:"m8 16 1.88-1.88"}],["path",{d:"M14.12 14.12 16 16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=[["path",{d:"M2 12h6"}],["path",{d:"M22 12h-6"}],["path",{d:"M12 2v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 20v2"}],["path",{d:"m19 9-3 3 3 3"}],["path",{d:"m5 15 3-3-3-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=[["path",{d:"M12 22v-6"}],["path",{d:"M12 8V2"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}],["path",{d:"m15 19-3-3-3 3"}],["path",{d:"m15 5-3 3-3-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=[["circle",{cx:"15",cy:"19",r:"2"}],["path",{d:"M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"}],["path",{d:"M15 11v-1"}],["path",{d:"M15 17v-2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=[["path",{d:"M12 6v7.751a.25.25 0 00.407.195l2.28-1.834a.5.5 0 01.627 0l2.28 1.834a.25.25 0 00.406-.195V6"}],["path",{d:"M20 20a2 2 0 002-2V8a2 2 0 00-2-2h-7.9a2 2 0 01-1.69-.9L9.6 3.9A2 2 0 007.93 3H4a2 2 0 00-2 2v13a2 2 0 002 2z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"m9 13 2 2 4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=[["path",{d:"M16 14v2.2l1.6 1"}],["path",{d:"M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2"}],["circle",{cx:"16",cy:"16",r:"6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M2 10h20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=[["path",{d:"M10 10.5 8 13l2 2.5"}],["path",{d:"m14 10.5 2 2.5-2 2.5"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=[["path",{d:"M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.98a2 2 0 0 1 1.69.9l.66 1.2A2 2 0 0 0 12 6h8a2 2 0 0 1 2 2v3.3"}],["path",{d:"m14.305 19.53.923-.382"}],["path",{d:"m15.228 16.852-.923-.383"}],["path",{d:"m16.852 15.228-.383-.923"}],["path",{d:"m16.852 20.772-.383.924"}],["path",{d:"m19.148 15.228.383-.923"}],["path",{d:"m19.53 21.696-.382-.924"}],["path",{d:"m20.772 16.852.924-.383"}],["path",{d:"m20.772 19.148.924.383"}],["circle",{cx:"18",cy:"18",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["circle",{cx:"12",cy:"13",r:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M12 10v6"}],["path",{d:"m15 13-3 3-3-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=[["path",{d:"M18 19a5 5 0 0 1-5-5v8"}],["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"}],["circle",{cx:"13",cy:"12",r:"2"}],["circle",{cx:"20",cy:"19",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=[["circle",{cx:"12",cy:"13",r:"2"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M14 13h3"}],["path",{d:"M7 13h3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=[["path",{d:"M10.638 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.417"}],["path",{d:"M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"}],["path",{d:"M2 13h10"}],["path",{d:"m9 16 3-3-3-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["path",{d:"M8 10v4"}],["path",{d:"M12 10v2"}],["path",{d:"M16 10v6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=[["path",{d:"M13 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.36"}],["path",{d:"M19 12v6"}],["path",{d:"M19 14h2"}],["circle",{cx:"19",cy:"20",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=[["rect",{width:"8",height:"5",x:"14",y:"17",rx:"1"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=[["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=[["path",{d:"m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"}],["circle",{cx:"14",cy:"15",r:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=[["path",{d:"M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5"}],["path",{d:"M2 13h10"}],["path",{d:"m5 10-3 3 3 3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=[["path",{d:"M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5"}],["path",{d:"M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["circle",{cx:"12",cy:"13",r:"2"}],["path",{d:"M12 15v5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=[["circle",{cx:"11.5",cy:"12.5",r:"2.5"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M13.3 14.3 15 16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=[["path",{d:"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"}],["path",{d:"m21 21-1.9-1.9"}],["circle",{cx:"17",cy:"17",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=[["path",{d:"M2 9.35V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"}],["path",{d:"m8 16 3-3-3-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5"}],["path",{d:"M12 10v4h4"}],["path",{d:"m12 14 1.535-1.605a5 5 0 0 1 8 1.5"}],["path",{d:"M22 22v-4h-4"}],["path",{d:"m22 18-1.535 1.605a5 5 0 0 1-8-1.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M12 10v6"}],["path",{d:"m9 13 3-3 3 3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=[["path",{d:"M10.254 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2V9.255"}],["path",{d:"M22 22a4 4 0 0 0-8 0"}],["circle",{cx:"18",cy:"15",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=[["path",{d:"M5.254 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2V9.255"}],["circle",{cx:"13",cy:"15",r:"3"}],["path",{d:"M17 22a4 4 0 0 0-8 0"}],["path",{d:"M22 22A4 4 0 0 0 20.24 18.686 1 1 0 0 1 20.1 17.143 3 3 0 0 0 19.5 12.402"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"m9.5 10.5 5 5"}],["path",{d:"m14.5 10.5-5 5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["path",{d:"M20 5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2.5a1.5 1.5 0 0 1 1.2.6l.6.8a1.5 1.5 0 0 0 1.2.6z"}],["path",{d:"M3 8.268a2 2 0 0 0-1 1.738V19a2 2 0 0 0 2 2h11a2 2 0 0 0 1.732-1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"}],["path",{d:"M16 17h4"}],["path",{d:"M4 13h4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["path",{d:"M12 12H5a2 2 0 0 0-2 2v5"}],["path",{d:"M15 19h7"}],["path",{d:"M16 19V2"}],["path",{d:"M6 12V7a2 2 0 0 1 2-2h2.172a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 16 10.828"}],["path",{d:"M7 19h4"}],["circle",{cx:"13",cy:"19",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=[["path",{d:"M4 14h6"}],["path",{d:"M4 2h10"}],["rect",{x:"4",y:"18",width:"16",height:"4",rx:"1"}],["rect",{x:"4",y:"6",width:"16",height:"4",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=[["path",{d:"m15 17 5-5-5-5"}],["path",{d:"M4 18v-2a4 4 0 0 1 4-4h12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=[["line",{x1:"22",x2:"2",y1:"6",y2:"6"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5"}],["path",{d:"M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16"}],["path",{d:"M2 21h13"}],["path",{d:"M3 9h11"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["rect",{width:"10",height:"8",x:"7",y:"8",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=[["path",{d:"M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"}],["path",{d:"m16.5 3.5 5 5"}],["path",{d:"m21.5 3.5-5 5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=[["path",{d:"M13.354 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l1.218-1.348"}],["path",{d:"M16 6h6"}],["path",{d:"M19 3v6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"M16.005 15.108a5.041 6.52 28.25 00-8.008-6.217 5.041 6.52 28.25 008.008 6.217A11.884 7.288-60.76 014.029 7.001"}],["path",{d:"M17 21h.01"}],["path",{d:"M7 3h.01"}],["path",{d:"M7.997 8.891a11.885 7.288-60.756 0111.977 8.107"}],["circle",{cx:"12",cy:"12",r:"1",fill:"currentColor"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"M2 7v10"}],["path",{d:"M6 5v14"}],["rect",{width:"12",height:"18",x:"10",y:"3",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["path",{d:"M2 3v18"}],["rect",{width:"12",height:"18",x:"6",y:"3",rx:"2"}],["path",{d:"M22 3v18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=[["rect",{width:"18",height:"14",x:"3",y:"3",rx:"2"}],["path",{d:"M4 21h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 21h1"}],["path",{d:"M19 21h1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"M7 2h10"}],["path",{d:"M5 6h14"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["line",{x1:"6",x2:"10",y1:"11",y2:"11"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=[["path",{d:"M3 2h18"}],["rect",{width:"18",height:"12",x:"3",y:"6",rx:"2"}],["path",{d:"M3 22h18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=[["path",{d:"M11.146 15.854a1.207 1.207 0 0 1 1.708 0l1.56 1.56A2 2 0 0 1 15 18.828V21a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2.172a2 2 0 0 1 .586-1.414z"}],["path",{d:"M18.828 15a2 2 0 0 1-1.414-.586l-1.56-1.56a1.207 1.207 0 0 1 0-1.708l1.56-1.56A2 2 0 0 1 18.828 9H21a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z"}],["path",{d:"M6.586 14.414A2 2 0 0 1 5.172 15H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2.172a2 2 0 0 1 1.414.586l1.56 1.56a1.207 1.207 0 0 1 0 1.708z"}],["path",{d:"M9 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2.172a2 2 0 0 1-.586 1.414l-1.56 1.56a1.207 1.207 0 0 1-1.708 0l-1.56-1.56A2 2 0 0 1 9 5.172z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["line",{x1:"6",x2:"10",y1:"12",y2:"12"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["path",{d:"M12 2v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 20v2"}],["path",{d:"M21 3h-3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3"}],["path",{d:"M3 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["path",{d:"M2 12h2"}],["path",{d:"M8 12h2"}],["path",{d:"M14 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"M3 21v-3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3"}],["path",{d:"M3 3v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["path",{d:"m12 14 4-4"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["path",{d:"m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381"}],["path",{d:"m16 16 6-6"}],["path",{d:"m21.5 10.5-8-8"}],["path",{d:"m8 8 6-6"}],["path",{d:"m8.5 7.5 8 8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["path",{d:"M10.5 3 8 9l4 13 4-13-2.5-6"}],["path",{d:"M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"}],["path",{d:"M2 9h20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"M10 10V3"}],["path",{d:"M14 10V3"}],["path",{d:"M19 13a7 7 0 10-7 7"}],["path",{d:"M5 20h14"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["path",{d:"m11 2 .925 1.848"}],["path",{d:"M13 15h.01"}],["path",{d:"M13.424 7.768a2 2 0 112.808 2.808"}],["path",{d:"m16 21-1-2.472"}],["path",{d:"M16.988 16.988A12 12 0 019 20a5 5 0 01-2.759-9.171 8.8 8.8 0 002.307-2.28"}],["path",{d:"m19 2-1 1.804"}],["path",{d:"m2 19 2.746-1.373"}],["path",{d:"m2 2 20 20"}],["path",{d:"m22 16-2.474-2.13a12 12 0 001.376-3.786 6 6 0 00-10.313-5.151"}],["path",{d:"m22 5-1.804 1"}],["path",{d:"m3 10 2 2"}],["path",{d:"M9 16h.01"}],["path",{d:"M9 20v2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["path",{d:"m11 2 .925 1.848"}],["path",{d:"M13 15h.01"}],["path",{d:"m16 21-1-2.472"}],["path",{d:"m19 2-1 1.804"}],["path",{d:"m2 19 2.746-1.373"}],["path",{d:"m22 16-2.474-2.13"}],["path",{d:"m22 5-1.804 1"}],["path",{d:"m3 10 2 2"}],["path",{d:"M9 16h.01"}],["path",{d:"M9 20v2"}],["path",{d:"M9.33 7.035c-.51 1.478-1.786 2.93-3.09 3.794A5 5 0 009 20a12.1 12.1 0 0011.902-9.916A6 6 0 009.33 7.035"}],["circle",{cx:"15",cy:"9",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["path",{d:"M15 10v1"}],["path",{d:"M7.528 20.472a1.6 1.6 0 012.277 0l1.057 1.056a1.6 1.6 0 002.276 0l1.057-1.056a1.6 1.6 0 012.277 0l1.114 1.114a1.4 1.4 0 002.414-1V10a8 8 0 00-16 0v10.586a1.4 1.4 0 002.414 1z"}],["path",{d:"M9 10v1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=[["path",{d:"M12 7v14"}],["path",{d:"M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5"}],["rect",{x:"3",y:"7",width:"18",height:"4",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=[["path",{d:"M15 6a9 9 0 0 0-9 9V3"}],["path",{d:"M21 18h-6"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["path",{d:"M6 3v12"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M15 6a9 9 0 0 0-9 9"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["path",{d:"M15 6a9 9 0 0 0-9 9V3"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t5=[["circle",{cx:"12",cy:"12",r:"3"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=[["path",{d:"M12 3v6"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 15v6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7"}],["path",{d:"m15 9-3-3 3-3"}],["circle",{cx:"19",cy:"18",r:"3"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9"}],["path",{d:"m9 15 3 3-3 3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["circle",{cx:"12",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["circle",{cx:"18",cy:"6",r:"3"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"}],["path",{d:"M12 12v3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v6"}],["circle",{cx:"5",cy:"18",r:"3"}],["path",{d:"M12 3v18"}],["circle",{cx:"19",cy:"6",r:"3"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=[["path",{d:"M12 6h4a2 2 0 0 1 2 2v7"}],["path",{d:"M6 12v9"}],["path",{d:"m8.5 3.5-5 5"}],["path",{d:"m8.5 8.5-5-5"}],["circle",{cx:"18",cy:"18",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v12"}],["circle",{cx:"19",cy:"18",r:"3"}],["path",{d:"m15 9-3-3 3-3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=[["path",{d:"m15.5 3.5 5 5"}],["path",{d:"m15.5 8.5 5-5"}],["path",{d:"M18 11.62V15"}],["path",{d:"M6 9v12"}],["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v12"}],["path",{d:"m15 9-3-3 3-3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v3"}],["path",{d:"M19 15v6"}],["path",{d:"M22 18h-6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 9v12"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v3"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M18 6V5"}],["path",{d:"M18 11v-1"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["path",{d:"M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=[["circle",{cx:"6",cy:"15",r:"4"}],["circle",{cx:"18",cy:"15",r:"4"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=[["path",{d:"M15.5 10 13 7.5 15.5 5"}],["path",{d:"M15.861 14A14.5 14.5 0 0112 22a14.48 14.48 0 010-20 10 10 0 109.888 11.5"}],["path",{d:"M19.5 5 22 7.5 19.5 10"}],["path",{d:"M2 12h8.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=[["path",{d:"m15 6 2 2 4-4"}],["path",{d:"M2 12h20A10 10 0 1 1 12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 4-10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=[["path",{d:"M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13"}],["path",{d:"M2 12h8.5"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=[["path",{d:"M10.114 4.462A14.5 14.5 0 0 1 12 2a10 10 0 0 1 9.313 13.643"}],["path",{d:"M15.557 15.556A14.5 14.5 0 0 1 12 22 10 10 0 0 1 4.929 4.929"}],["path",{d:"M15.892 10.234A14.5 14.5 0 0 0 12 2a10 10 0 0 0-3.643.687"}],["path",{d:"M17.656 12H22"}],["path",{d:"M19.071 19.071A10 10 0 0 1 12 22 14.5 14.5 0 0 1 8.44 8.45"}],["path",{d:"M2 12h10"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=[["path",{d:"m16 3 5 5"}],["path",{d:"M2 12h20A10 10 0 1 1 12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 4-10"}],["path",{d:"m21 3-5 5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=[["path",{d:"M12 13V2l8 4-8 4"}],["path",{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29"}],["path",{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=[["path",{d:"M2 17h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H2"}],["path",{d:"M2 21V3"}],["path",{d:"M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3"}],["circle",{cx:"16",cy:"11",r:"2"}],["circle",{cx:"8",cy:"11",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"}],["path",{d:"M22 10v6"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=[["path",{d:"M22 5V2l-5.89 5.89"}],["circle",{cx:"16.6",cy:"15.89",r:"3"}],["circle",{cx:"8.11",cy:"7.4",r:"3"}],["circle",{cx:"12.35",cy:"11.65",r:"3"}],["circle",{cx:"13.91",cy:"5.85",r:"3"}],["circle",{cx:"18.15",cy:"10.09",r:"3"}],["circle",{cx:"6.56",cy:"13.2",r:"3"}],["circle",{cx:"10.8",cy:"17.44",r:"3"}],["circle",{cx:"5",cy:"19",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=[["circle",{cx:"12",cy:"7",r:"4"}],["circle",{cx:"4",cy:"19",r:"2"}],["circle",{cx:"12",cy:"19",r:"2"}],["circle",{cx:"20",cy:"19",r:"2"}],["path",{d:"M8 7a4 4 0 0 0-4 4v6"}],["path",{d:"M12 11v6"}],["path",{d:"M16 7a4 4 0 0 1 4 4v6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=[["path",{d:"m12.342 9.316 1.764-3.527"}],["path",{d:"m12.59 14.545 2.35 3.759"}],["path",{d:"m13.982 12.332 4.03.447"}],["path",{d:"M5.414 17.586 8.88 14.12"}],["path",{d:"M9.025 9.742 5.317 5.505"}],["circle",{cx:"11",cy:"12",r:"3"}],["circle",{cx:"15",cy:"4",r:"2"}],["circle",{cx:"16",cy:"20",r:"2"}],["circle",{cx:"20",cy:"13",r:"2"}],["circle",{cx:"4",cy:"19",r:"2"}],["circle",{cx:"4",cy:"4",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a5=[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"}],["path",{d:"m16 19 2 2 4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e5=[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"}],["path",{d:"M16 19h6"}],["path",{d:"M19 22v-6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h5=[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"}],["path",{d:"m16.5 16.5 5 5"}],["path",{d:"m16.5 21.5 5-5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d5=[["path",{d:"M12 3v18"}],["path",{d:"M3 12h18"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=[["path",{d:"M15 3v18"}],["path",{d:"M3 12h18"}],["path",{d:"M9 3v18"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}],["path",{d:"M9 3v18"}],["path",{d:"M15 3v18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=[["circle",{cx:"12",cy:"9",r:"1"}],["circle",{cx:"19",cy:"9",r:"1"}],["circle",{cx:"5",cy:"9",r:"1"}],["circle",{cx:"12",cy:"15",r:"1"}],["circle",{cx:"19",cy:"15",r:"1"}],["circle",{cx:"5",cy:"15",r:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=[["circle",{cx:"9",cy:"12",r:"1"}],["circle",{cx:"9",cy:"5",r:"1"}],["circle",{cx:"9",cy:"19",r:"1"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"15",cy:"5",r:"1"}],["circle",{cx:"15",cy:"19",r:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=[["circle",{cx:"12",cy:"5",r:"1"}],["circle",{cx:"19",cy:"5",r:"1"}],["circle",{cx:"5",cy:"5",r:"1"}],["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}],["circle",{cx:"12",cy:"19",r:"1"}],["circle",{cx:"19",cy:"19",r:"1"}],["circle",{cx:"5",cy:"19",r:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=[["path",{d:"M10 15h4"}],["path",{d:"M19.424 11.095a2.5 2.5 0 00.471-2.309 2 2 0 00.424-3.286 2 2 0 00-2.143-3.322 2 2 0 00-.676.502 2 2 0 00-3.287.424 2.5 2.5 0 00-3.189 2.06A3 3 0 0012 11l4-4"}],["path",{d:"M4 12.006A1 1 0 014.994 11H19a1 1 0 011 1v7a2 2 0 01-2 2H6a2 2 0 01-2-2z"}],["path",{d:"M7 11a4 4 0 01-4-4V5a1 1 0 011-1h2a4 4 0 013.584 2.222"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=[["path",{d:"M3 7V5c0-1.1.9-2 2-2h2"}],["path",{d:"M17 3h2c1.1 0 2 .9 2 2v2"}],["path",{d:"M21 17v2c0 1.1-.9 2-2 2h-2"}],["path",{d:"M7 21H5c-1.1 0-2-.9-2-2v-2"}],["rect",{width:"7",height:"5",x:"7",y:"7",rx:"1"}],["rect",{width:"7",height:"5",x:"10",y:"12",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=[["path",{d:"m12.172 11.828 4.242-4.242"}],["path",{d:"M16.414 7.586A2 2 0 0017 6.172V5a2 2 0 011.177-1.823L20.59 2.09a1 1 0 011.32 1.32l-1.088 2.412A2 2 0 0119 7h-1a2 2 0 00-1.586.586"}],["path",{d:"m6 16 2 2"}],["path",{d:"M8.23 9.85a3 3 0 011.28-1.454 1 1 0 011.496.815 4 4 0 003.783 3.783 1 1 0 01.815 1.496 3 3 0 01-1.454 1.28l-.92.38A2 2 0 0012 18a4 4 0 01-4 4 6 6 0 01-6-6 4 4 0 014-4 2 2 0 001.85-1.23z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=[["path",{d:"m11.9 12.1 4.514-4.514"}],["path",{d:"M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z"}],["path",{d:"m6 16 2 2"}],["path",{d:"M8.23 9.85A3 3 0 0 1 11 8a5 5 0 0 1 5 5 3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4 6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 0 1.85-1.23z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r5=[["circle",{cx:"12",cy:"18",r:"4"}],["path",{d:"M16 18V2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=[["path",{d:"M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856"}],["path",{d:"M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288"}],["path",{d:"M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025"}],["path",{d:"m8.5 16.5-1-1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=[["path",{d:"M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25"}],["path",{d:"M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2"}],["path",{d:"M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0"}],["path",{d:"m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=[["path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"}],["path",{d:"m18 15 4-4"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=[["path",{d:"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"}],["path",{d:"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"}],["path",{d:"m2 16 6 6"}],["circle",{cx:"16",cy:"9",r:"2.9"}],["circle",{cx:"6",cy:"5",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=[["path",{d:"M12.035 17.012a3 3 0 0 0-3-3l-.311-.002a.72.72 0 0 1-.505-1.229l1.195-1.195A2 2 0 0 1 10.828 11H12a2 2 0 0 0 0-4H9.243a3 3 0 0 0-2.122.879l-2.707 2.707A4.83 4.83 0 0 0 3 14a8 8 0 0 0 8 8h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0"}],["path",{d:"M13.888 9.662A2 2 0 0 0 17 8V5A2 2 0 1 0 13 5"}],["path",{d:"M9 5A2 2 0 1 0 5 5V10"}],["path",{d:"M9 7V4A2 2 0 1 1 13 4V7.268"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c5=[["path",{d:"M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"}],["path",{d:"M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"}],["path",{d:"M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"}],["path",{d:"M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=[["path",{d:"M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"}],["path",{d:"m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95"}],["path",{d:"m2 15 6 6"}],["path",{d:"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n5=[["path",{d:"M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14"}],["path",{d:"m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"}],["path",{d:"m2 13 6 6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=[["path",{d:"M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"}],["path",{d:"M14 11V9a2 2 0 1 0-4 0v2"}],["path",{d:"M10 10.5V5a2 2 0 1 0-4 0v9"}],["path",{d:"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["path",{d:"M12 3V2"}],["path",{d:"m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5"}],["path",{d:"M2 14h12a2 2 0 0 1 0 4h-2"}],["path",{d:"M4 10h16"}],["path",{d:"M5 10a7 7 0 0 1 14 0"}],["path",{d:"M5 14v6a1 1 0 0 1-1 1H2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=[["path",{d:"M2.048 18.566A2 2 0 0 0 4 21h16a2 2 0 0 0 1.952-2.434l-2-9A2 2 0 0 0 18 8H6a2 2 0 0 0-1.952 1.566z"}],["path",{d:"M8 11V6a4 4 0 0 1 8 0v5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=[["path",{d:"M21 8 8 21"}],["path",{d:"m21 15-6 6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"}],["path",{d:"m21 3 1 11h-2"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"}],["path",{d:"M3 4h8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["path",{d:"M12 2v8"}],["path",{d:"m16 6-4 4-4-4"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 18h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=[["path",{d:"m16 6-4-4-4 4"}],["path",{d:"M12 2v8"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 18h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=[["path",{d:"M10 16h.01"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["path",{d:"M21.946 12.013H2.054"}],["path",{d:"M6 16h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=[["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"}],["path",{d:"M14 6a6 6 0 0 1 6 6v3"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6"}],["rect",{x:"2",y:"15",width:"20",height:"4",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=[["line",{x1:"4",x2:"20",y1:"9",y2:"9"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=[["path",{d:"M14 18a2 2 0 0 0-4 0"}],["path",{d:"m19 11-2.11-6.657a2 2 0 0 0-2.752-1.148l-1.276.61A2 2 0 0 1 12 4H8.5a2 2 0 0 0-1.925 1.456L5 11"}],["path",{d:"M2 11h20"}],["circle",{cx:"17",cy:"18",r:"3"}],["circle",{cx:"7",cy:"18",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=[["path",{d:"m5.2 6.2 1.4 1.4"}],["path",{d:"M2 13h2"}],["path",{d:"M20 13h2"}],["path",{d:"m17.4 7.6 1.4-1.4"}],["path",{d:"M22 17H2"}],["path",{d:"M22 21H2"}],["path",{d:"M16 13a4 4 0 0 0-8 0"}],["path",{d:"M12 5V2.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=[["path",{d:"M10 12H6"}],["path",{d:"M10 15V9"}],["path",{d:"M14 14.5a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 15.5 9h-1a.5.5 0 0 0-.5.5z"}],["path",{d:"M6 15V9"}],["rect",{x:"2",y:"5",width:"20",height:"14",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=[["path",{d:"M22 9a1 1 0 00-1-1H3a1 1 0 00-1 1v4a1 1 0 001 1h.5a2 2 0 011.6.8l.3.4A2 2 0 007 16h10a2 2 0 001.6-.8l.3-.4a2 2 0 011.6-.8h.5a1 1 0 001-1z"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"m17 12 3-2v8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=[["path",{d:"M12 18V6"}],["path",{d:"M17 10v3a1 1 0 0 0 1 1h3"}],["path",{d:"M21 10v8"}],["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2"}],["path",{d:"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M17 13v-3h4"}],["path",{d:"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["circle",{cx:"19",cy:"16",r:"2"}],["path",{d:"M20 10c-2 2-3 3.5-3 6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=[["path",{d:"M21 14h-1.343"}],["path",{d:"M9.128 3.47A9 9 0 0 1 21 12v3.343"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3"}],["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=[["path",{d:"M12.409 5.824c-.702.792-1.15 1.496-1.415 2.166l2.153 2.156a.5.5 0 0 1 0 .707l-2.293 2.293a.5.5 0 0 0 0 .707L12 15"}],["path",{d:"M13.508 20.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.677.6.6 0 0 0 .818.001A5.5 5.5 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=[["path",{d:"M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=[["path",{d:"m14.876 18.99-1.368 1.323a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.244 1.572"}],["path",{d:"M15 15h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tA=[["path",{d:"M10.5 4.893a5.5 5.5 0 0 1 1.091.931.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 1.872-1.002 3.356-2.187 4.655"}],["path",{d:"m16.967 16.967-3.459 3.346a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 2.747-4.761"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=[["path",{d:"m14.479 19.374-.971.939a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.219 1.49"}],["path",{d:"M15 15h6"}],["path",{d:"M18 12v6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"}],["path",{d:"M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=[["path",{d:"m15.5 12.5 5 5"}],["path",{d:"m20.5 12.5-5 5"}],["path",{d:"M21.955 8.774a5.5 5.5 0 0 0-9.546-2.95.6.6 0 0 1-.818 0A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.508 5.332a2 2 0 0 0 2.57.352"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rA=[["path",{d:"M11 17v4"}],["path",{d:"M14 3v8a2 2 0 0 0 2 2h5.865"}],["path",{d:"M17 17v4"}],["path",{d:"M18 17a4 4 0 0 0 4-4 8 6 0 0 0-8-6 6 5 0 0 0-6 5v3a2 2 0 0 0 2 2z"}],["path",{d:"M2 10v5"}],["path",{d:"M6 3h16"}],["path",{d:"M7 21h14"}],["path",{d:"M8 13H2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cA=[["path",{d:"M11 8c2-3-2-3 0-6"}],["path",{d:"M15.5 8c2-3-2-3 0-6"}],["path",{d:"M6 10h.01"}],["path",{d:"M6 14h.01"}],["path",{d:"M10 16v-4"}],["path",{d:"M14 16v-4"}],["path",{d:"M18 16v-4"}],["path",{d:"M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3"}],["path",{d:"M5 20v2"}],["path",{d:"M19 20v2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=[["path",{d:"m9 11-6 6v3h9l3-3"}],["path",{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=[["path",{d:"M11 4v4c0 1.1-2.025 2-4.5 2S2 9.1 2 8V4"}],["path",{d:"M18.21 3.106a2 2 0 013.579 1.789l-6.895 13.789A6 6 0 019.529 22H4.5a1 1 0 010-5h5.528a2 2 0 001.788-1.105z"}],["path",{d:"m18.59 11.295-3.578-1.789"}],["path",{d:"m20.79 6.895-3.578-1.789"}],["path",{d:"M7 17v5"}],["ellipse",{cx:"6.5",cy:"4",rx:"4.5",ry:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iA=[["path",{d:"M13.5 10.5 2 22"}],["path",{d:"M16.352 11.648a1.205 1.205 0 01-1.704 0l-2.296-2.296a1.205 1.205 0 010-1.704l.72-.72a2 2 0 011.022-.546l.599-.12a2 2 0 001.569-1.57l.12-.598a2 2 0 01.546-1.022l.72-.72a1.205 1.205 0 011.704 0l2.296 2.296a1.205 1.205 0 010 1.704l-6.02 6.02a1 1 0 103 3l.201-.201A7.4 7.4 0 0021 9.93V7"}],["path",{d:"m6 21-3-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sA=[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27"}],["path",{d:"M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26"}],["path",{d:"M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25"}],["path",{d:"M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75"}],["path",{d:"M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24"}],["path",{d:"M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28"}],["path",{d:"M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lA=[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18"}],["path",{d:"M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88"}],["path",{d:"M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87"}],["path",{d:"M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08"}],["path",{d:"M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57"}],["path",{d:"M4.93 4.93 3 3a.7.7 0 0 1 0-1"}],["path",{d:"M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=[["path",{d:"M12 7v4"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3"}],["path",{d:"M14 9h-4"}],["path",{d:"M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"}],["path",{d:"M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uA=[["path",{d:"M11.5 18C10 15 9 12 9 9a3 7 0 0 1 6 0c0 3-1 6-2.5 9"}],["path",{d:"M15 18c3-3 5-5 5-9A8 7 0 0 0 4 9c0 4 2 6 5 9"}],["path",{d:"M15 18H9v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=[["path",{d:"M10 22v-6.57"}],["path",{d:"M12 11h.01"}],["path",{d:"M12 7h.01"}],["path",{d:"M14 15.43V22"}],["path",{d:"M15 16a5 5 0 0 0-6 0"}],["path",{d:"M16 11h.01"}],["path",{d:"M16 7h.01"}],["path",{d:"M8 11h.01"}],["path",{d:"M8 7h.01"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=[["path",{d:"m14.305 19.53.923-.382"}],["path",{d:"m15.228 16.852-.923-.383"}],["path",{d:"m16.852 15.228-.383-.923"}],["path",{d:"m16.852 20.772-.383.924"}],["path",{d:"M17 2v4.172a2 2 0 0 1-.586 1.414l-8.828 8.828A2 2 0 0 0 7 17.828V22"}],["path",{d:"m19.148 15.228.383-.923"}],["path",{d:"m19.53 21.696-.382-.924"}],["path",{d:"m20.772 16.852.924-.383"}],["path",{d:"m20.772 19.148.924.383"}],["path",{d:"M5 22h6.159"}],["path",{d:"M5 2h14"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414l5.188 5.188"}],["circle",{cx:"18",cy:"18",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=[["path",{d:"M5 22h14"}],["path",{d:"M5 2h14"}],["path",{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=[["path",{d:"M10.584 21H5a2 2 0 01-2-2v-9a2 2 0 01.709-1.527l7-6a2 2 0 012.582 0l7 6A2 2 0 0121 10.001v.583"}],["path",{d:"M14 12H10a1 1 0 00-1 1v8"}],["path",{d:"m14.305 19.53.923-.382"}],["path",{d:"m15.229 16.852-.924-.383"}],["path",{d:"m16.852 15.228-.383-.923"}],["path",{d:"m16.852 20.773-.383.924"}],["path",{d:"m19.148 15.228.383-.923"}],["path",{d:"m19.53 21.697-.382-.924"}],["path",{d:"m20.773 16.852.922-.383"}],["path",{d:"m20.773 19.148.922.383"}],["circle",{cx:"18",cy:"18",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=[["path",{d:"M8.62 13.8A2.25 2.25 0 1 1 12 10.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=[["path",{d:"M10 12V8.964"}],["path",{d:"M14 12V8.964"}],["path",{d:"M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z"}],["path",{d:"M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=[["path",{d:"M12.35 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .71-1.53l7-6a2 2 0 0 1 2.58 0l7 6A2 2 0 0 1 21 10v2.35"}],["path",{d:"M14.8 12.4A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M15 18h6"}],["path",{d:"M18 15v6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=[["path",{d:"M9.5 13.866a4 4 0 0 1 5 .01"}],["path",{d:"M12 17h.01"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}],["path",{d:"M7 10.754a8 8 0 0 1 10 0"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p5=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=[["path",{d:"m12.681 4.24.834-.715a1.45 1.45 0 011.88 0l5.09 4.364A1.45 1.45 0 0121 9v6.546a1.45 1.45 0 01-1 1.381"}],["path",{d:"M15.485 11.889A1.45 1.45 0 0116 13v6.546A1.454 1.454 0 0114.546 21H4.364a1.454 1.454 0 01-1.454-1.454V13a1.45 1.45 0 01.515-1.111l5.09-4.364a1.45 1.45 0 011.88 0z"}],["path",{d:"M7.41 20.546v-4a1 1 0 011-1h2a1 1 0 011 1v4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o5=[["path",{d:"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"}],["path",{d:"M12.14 11a3.5 3.5 0 1 1 6.71 0"}],["path",{d:"M15.5 6.5a3.5 3.5 0 1 0-7 0"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i5=[["path",{d:"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11"}],["path",{d:"M17 7A5 5 0 0 0 7 7"}],["path",{d:"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=[["path",{d:"M13.5 8h-3"}],["path",{d:"m15 2-1 2h3a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2h3"}],["path",{d:"M16 22a4 4 0 00-8 0"}],["path",{d:"m9 2 3 6"}],["circle",{cx:"12",cy:"15",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VA=[["path",{d:"M13 19a4 4 0 00-8 0"}],["path",{d:"M16 10h2"}],["path",{d:"M16 14h2"}],["circle",{cx:"9",cy:"12",r:"3"}],["rect",{x:"2",y:"5",width:"20",height:"14",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"}],["path",{d:"m14 19 3 3v-5.5"}],["path",{d:"m17 22 3-3"}],["circle",{cx:"9",cy:"9",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=[["path",{d:"M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=[["path",{d:"M15 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z"}],["path",{d:"M21 12.17V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}],["path",{d:"m6 21 5-5"}],["circle",{cx:"9",cy:"9",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=[["path",{d:"M16 5h6"}],["path",{d:"M19 2v6"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}],["circle",{cx:"9",cy:"9",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"}],["path",{d:"m14 19.5 3-3 3 3"}],["path",{d:"M17 22v-5.5"}],["circle",{cx:"9",cy:"9",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=[["path",{d:"M16 3h5v5"}],["path",{d:"M17 21h2a2 2 0 0 0 2-2"}],["path",{d:"M21 12v3"}],["path",{d:"m21 3-5 5"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2"}],["path",{d:"m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19"}],["path",{d:"M9 3h3"}],["rect",{x:"3",y:"11",width:"10",height:"10",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA=[["path",{d:"m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"}],["path",{d:"M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"}],["circle",{cx:"13",cy:"7",r:"1",fill:"currentColor"}],["rect",{x:"8",y:"2",width:"14",height:"14",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=[["path",{d:"M12 3v12"}],["path",{d:"m8 11 4 4 4-4"}],["path",{d:"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=[["path",{d:"m14 20-8-8h4c5.333 0 5.333-8 0-8"}],["path",{d:"M6 4h12"}],["path",{d:"M6 8h12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=[["path",{d:"M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7h.01"}],["path",{d:"M17 7h.01"}],["path",{d:"M7 17h.01"}],["path",{d:"M17 17h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=[["line",{x1:"19",x2:"10",y1:"4",y2:"4"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=[["path",{d:"m16 14 4 4-4 4"}],["path",{d:"M20 10a8 8 0 1 0-8 8h8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=[["path",{d:"M4 10a8 8 0 1 1 8 8H4"}],["path",{d:"m8 22-4-4 4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=[["path",{d:"M12 18v2a2 2 0 002 2h6"}],["path",{d:"M6 11c.72.5 1.44 1 3 1 3 0 3-2 6-2 1.56 0 2.28.5 3 1"}],["path",{d:"M9.293 3c.453 0 .887-.18 1.207-.5s.754-.5 1.207-.5h.586c.453 0 .887.18 1.207.5s.754.5 1.207.5H16a2 2 0 012 2v11a2 2 0 01-2 2H8a2 2 0 01-2-2V5a2 2 0 012-2z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=[["path",{d:"M12 12v8"}],["path",{d:"m6 4 6 8 6-8"}],["path",{d:"M8 13h8"}],["path",{d:"M8 17h8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=[["path",{d:"M5 3v14"}],["path",{d:"M12 3v8"}],["path",{d:"M19 3v18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z"}],["path",{d:"M6 15v-2"}],["path",{d:"M12 15V9"}],["circle",{cx:"12",cy:"6",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GA=[["path",{d:"M18 17a1 1 0 0 0-1 1v1a2 2 0 1 0 2-2z"}],["path",{d:"M20.97 3.61a.45.45 0 0 0-.58-.58C10.2 6.6 6.6 10.2 3.03 20.39a.45.45 0 0 0 .58.58C13.8 17.4 17.4 13.8 20.97 3.61"}],["path",{d:"m6.707 6.707 10.586 10.586"}],["path",{d:"M7 5a2 2 0 1 0-2 2h1a1 1 0 0 0 1-1z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA=[["path",{d:"M12 8v12"}],["path",{d:"M6 4h12"}],["path",{d:"M6 8h12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=[["path",{d:"M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z"}],["path",{d:"m14 7 3 3"}],["path",{d:"m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M6 8h4"}],["path",{d:"M14 8h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"M2 12h20"}],["path",{d:"M6 12v4"}],["path",{d:"M10 12v4"}],["path",{d:"M14 12v4"}],["path",{d:"M18 12v4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=[["path",{d:"m2 21 9.6-9.6"}],["path",{d:"m7.5 15.5 2.3 2.3a1 1 0 0 1 0 1.4l-2.1 2.1a1 1 0 0 1-1.4 0L4 19"}],["circle",{cx:"15.5",cy:"7.5",r:"5.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=[["path",{d:"M 20 4 A2 2 0 0 1 22 6"}],["path",{d:"M 22 6 L 22 16.41"}],["path",{d:"M 7 16 L 16 16"}],["path",{d:"M 9.69 4 L 20 4"}],["path",{d:"M14 8h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"}],["path",{d:"M6 8h.01"}],["path",{d:"M8 12h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=[["path",{d:"M10 8h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M14 8h.01"}],["path",{d:"M16 12h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"M6 8h.01"}],["path",{d:"M7 16h10"}],["path",{d:"M8 12h.01"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=[["path",{d:"M11.38 10 5 20"}],["path",{d:"M19 18a2 2 0 01-2 2c-4.87-.003-5.052-16-10-16a2 2 0 00-2 2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=[["path",{d:"M12 2v5"}],["path",{d:"M14.829 15.998a3 3 0 1 1-5.658 0"}],["path",{d:"M20.92 14.606A1 1 0 0 1 20 16H4a1 1 0 0 1-.92-1.394l3-7A1 1 0 0 1 7 7h10a1 1 0 0 1 .92.606z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=[["path",{d:"M10.293 2.293a1 1 0 0 1 1.414 0l2.5 2.5 5.994 1.227a1 1 0 0 1 .506 1.687l-7 7a1 1 0 0 1-1.687-.506l-1.227-5.994-2.5-2.5a1 1 0 0 1 0-1.414z"}],["path",{d:"m14.207 4.793-3.414 3.414"}],["path",{d:"M3 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"}],["path",{d:"m9.086 6.5-4.793 4.793a1 1 0 0 0-.18 1.17L7 18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=[["path",{d:"M12 10v12"}],["path",{d:"M17.929 7.629A1 1 0 0 1 17 9H7a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 9 2h6a1 1 0 0 1 .928.629z"}],["path",{d:"M9 22h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=[["path",{d:"M19.929 18.629A1 1 0 0 1 19 20H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 13h6a1 1 0 0 1 .928.629z"}],["path",{d:"M6 3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"}],["path",{d:"M8 6h4a2 2 0 0 1 2 2v5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=[["path",{d:"M19.929 9.629A1 1 0 0 1 19 11H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 4h6a1 1 0 0 1 .928.629z"}],["path",{d:"M6 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"}],["path",{d:"M8 18h4a2 2 0 0 0 2-2v-5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["path",{d:"M12 12v6"}],["path",{d:"M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z"}],["path",{d:"M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=[["path",{d:"m12 8 6-3-6-3v10"}],["path",{d:"m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"}],["path",{d:"m6.49 12.85 11.02 6.3"}],["path",{d:"M17.51 12.85 6.5 19.15"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=[["path",{d:"M10 18v-7"}],["path",{d:"M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z"}],["path",{d:"M14 18v-7"}],["path",{d:"M18 18v-7"}],["path",{d:"M3 22h18"}],["path",{d:"M6 18v-7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=[["path",{d:"M2 20h20"}],["path",{d:"m9 10 2 2 4-4"}],["rect",{x:"3",y:"4",width:"18",height:"12",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s5=[["rect",{width:"18",height:"12",x:"3",y:"4",rx:"2",ry:"2"}],["line",{x1:"2",x2:"22",y1:"20",y2:"20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=[["path",{d:"m5 8 6 6"}],["path",{d:"m4 14 6-6 2-3"}],["path",{d:"M2 5h12"}],["path",{d:"M7 2h1"}],["path",{d:"m22 22-5-10-5 10"}],["path",{d:"M14 18h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=[["path",{d:"M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"}],["path",{d:"M20.054 15.987H3.946"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["path",{d:"m13 8 .95-.95"}],["path",{d:"M13.95 16.95 13 16"}],["path",{d:"M22 12h-9"}],["path",{d:"M4 12H2"}],["path",{d:"M4.05 16.95 5 16"}],["path",{d:"m5 8-.95-.95"}],["path",{d:"M9 12h.01"}],["path",{d:"M9 19v-2"}],["path",{d:"M9 7V5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=[["path",{d:"M7 22a5 5 0 0 1-2-4"}],["path",{d:"M7 16.93c.96.43 1.96.74 2.99.91"}],["path",{d:"M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}],["path",{d:"M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=[["path",{d:"M3.704 14.467a10 8 0 1 1 3.115 2.375"}],["path",{d:"M7 22a5 5 0 0 1-2-3.994"}],["circle",{cx:"5",cy:"16",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=[["path",{d:"M12 10v10"}],["path",{d:"M22 10a1 1 0 01-.59.92l-5.077 2.308"}],["path",{d:"M22.017 10.005a1 1 0 00-.597-.916l-8.59-3.91a2 2 0 00-1.66.001L2.6 9.08a1 1 0 00-.02 1.831l5.093 2.316"}],["path",{d:"m9 17 3 3 3-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=[["path",{d:"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74z"}],["path",{d:"m20 14.285 1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=[["path",{d:"M12 14V4"}],["path",{d:"M7.674 10.774 2.58 13.09a1 1 0 000 1.822l8.6 3.91a2 2 0 001.65 0l8.58-3.9a1 1 0 00.59-.92 1 1 0 00-.59-.922l-5.078-2.308"}],["path",{d:"m9 7 3-3 3 3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["path",{d:"M12 7v15"}],["path",{d:"M2 12a1 1 0 00.58.91l5.093 2.316"}],["path",{d:"M22 12a1 1 0 01-.59.92l-5.077 2.308"}],["path",{d:"M8 10.37 2.6 7.91a1 1 0 010-1.831l8.57-3.9a2 2 0 011.66.001l8.59 3.91a1 1 0 010 1.831l-5.392 2.45"}],["path",{d:"m9 19 3 3 3-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=[["path",{d:"M12 12V2"}],["path",{d:"M2 17.002a1 1 0 00.58.91l8.6 3.91a2 2 0 001.65 0l8.58-3.9a1 1 0 00.59-.92"}],["path",{d:"M7.674 8.774 2.58 11.09a1 1 0 000 1.822l8.6 3.91a2 2 0 001.65 0l8.58-3.9a1 1 0 00.59-.92 1 1 0 00-.59-.922l-5.078-2.308"}],["path",{d:"m9 5 3-3 3 3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.832z"}],["path",{d:"M16 17h6"}],["path",{d:"M2.003 11.995a1 1 0 0 0 .597.915l8.58 3.91a2 2 0 0 0 .83.18"}],["path",{d:"M2.003 16.995a1 1 0 0 0 .597.915l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l2.11-.96"}],["path",{d:"M22.018 12.004a1 1 0 0 1-.598.916l-.177.08"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.831z"}],["path",{d:"M16 17h6"}],["path",{d:"M19 14v6"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 .825.178"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l2.116-.962"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l5=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M18 3v18"}],["path",{d:"m21 18-3 3-3-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["path",{d:"M3 18h18"}],["path",{d:"m18 21 3-3-3-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"4",rx:"1"}],["rect",{width:"7",height:"7",x:"4",y:"14",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=[["circle",{cx:"17.5",cy:"17.5",r:"3.5"}],["circle",{cx:"17.5",cy:"6.5",r:"3.5"}],["circle",{cx:"6.5",cy:"17.5",r:"3.5"}],["circle",{cx:"6.5",cy:"6.5",r:"3.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ow=[["rect",{width:"7",height:"18",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=[["path",{d:"M11 20a10 10 0 0010-10 25.9 25.9 0 00-1.04-7.281 1 1 0 00-1.755-.325C15.833 5.5 13 5.5 9.8 6.1A7 7 0 0011 20"}],["path",{d:"M2 21a5 5 0 012.911-4.544C7.613 15.212 8.351 15.24 11 13"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=[["path",{d:"M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22"}],["path",{d:"M2 22 17 7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=[["path",{d:"M15 13h4a2 2 0 001.901-1.38l1.057-4.333A1 1 0 0021 6H3a1 1 0 00-.958 1.287L3.1 11.621A2 2 0 005.001 13h4"}],["path",{d:"M15 22V11a1 1 0 00-1-1h-4a1 1 0 00-1 1v11"}],["path",{d:"M18 22H6"}],["path",{d:"M18 6V3a1 1 0 00-1-1h-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=[["path",{d:"M7 2a1 1 0 0 0-.8 1.6 14 14 0 0 1 0 16.8A1 1 0 0 0 7 22h10a1 1 0 0 0 .8-1.6 14 14 0 0 1 0-16.8A1 1 0 0 0 17 2z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=[["path",{d:"M13.433 2a1 1 0 0 1 .824.448 18 18 0 0 1 0 19.104 1 1 0 0 1-.824.448h-2.866a1 1 0 0 1-.824-.448 18 18 0 0 1 0-19.104A1 1 0 0 1 10.567 2z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=[["path",{d:"M15.725 7.296h.01"}],["path",{d:"M6 12a6 6 0 016-6"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=[["path",{d:"M17.117 14H6.883"}],["path",{d:"m4 20 7.55-15.712a.5.5 0 01.9 0L20 20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M5=[["path",{d:"M6 12h9a4 4 0 010 8H7a1 1 0 01-1-1V5a1 1 0 011-1h7a4 4 0 010 8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uw=[["path",{d:"M19 6.708a8 8 0 100 10.584"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=[["path",{d:"M11 4a8 8 0 010 16H6.406A.406.406 0 016 19.594V4.406A.406.406 0 016.406 4z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=[["path",{d:"M18 4H7a1 1 0 00-1 1v14a1 1 0 001 1h11"}],["path",{d:"M6 12h8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=[["path",{d:"M6 12h8"}],["path",{d:"M6 20V5a1 1 0 011-1h11"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=[["path",{d:"M19 6.708a8 8 0 10-.526 11.126c.355-.333.526-.811.526-1.299V13a1 1 0 00-1-1h-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u5=[["path",{d:"M18 20V4"}],["path",{d:"M6 12H18"}],["path",{d:"M6 20V4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=[["path",{d:"M12 20V4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=[["path",{d:"M17 4v11a5 5 0 01-10 0"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=[["path",{d:"M17 4 6 15"}],["path",{d:"M6 20V4"}],["path",{d:"m9 12 8 8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=[["path",{d:"M6 4v15a1 1 0 001 1h11"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=[["path",{d:"M4 20V4.253a.25.25 0 01.454-.144l6.727 9.467a1 1 0 001.63 0l6.735-9.468a.25.25 0 01.454.145V20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=[["path",{d:"M6 20V4.25a.25.25 0 01.455-.143l11.09 15.786a.25.25 0 00.455-.144V4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=[["circle",{cx:"12",cy:"12",r:"8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=[["path",{d:"M6 12h8a4 4 0 000-8H7a1 1 0 00-1 1v15"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tH=[["circle",{cx:"12",cy:"12",r:"8"}],["path",{d:"M20 20L15 15"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aH=[["path",{d:"m10 12 8 8"}],["path",{d:"M6 12h8a4 4 0 000-8H7a1 1 0 00-1 1v15"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eH=[["path",{d:"M17 4h-7a4 4 0 000 8h4a4 4 0 010 8H6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hH=[["path",{d:"M15 14H9"}],["path",{d:"M21 3v18"}],["path",{d:"M3 3v18"}],["path",{d:"m8 16 3.453-7.648a.6.6 0 011.094.001L16 16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dH=[["path",{d:"M12 20V4"}],["path",{d:"M5 4h14"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rH=[["path",{d:"M6 4v10a6 6 0 0012 0V4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cH=[["path",{d:"m6 4 5.765 15.835a.25.25 0 00.47 0L18 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nH=[["path",{d:"m21 4-4.794 15.821a.25.25 0 01-.471.021l-3.503-8.685a.25.25 0 00-.464 0l-3.503 8.685a.25.25 0 01-.47-.021L3 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pH=[["path",{d:"M18 4 6 20"}],["path",{d:"m6 4 12 16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oH=[["path",{d:"M12 12v8"}],["path",{d:"m6 4 6 8 6-8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iH=[["path",{d:"M6 4h11.5a.5.5 0 01.387.817L6.114 19.183a.5.5 0 00.387.817H18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sH=[["path",{d:"M15 8H9"}],["path",{d:"M21 15.354a4 4 0 100 5.292"}],["path",{d:"M3 18h4a2 2 0 010 4H3.5a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5H6a2 2 0 010 4"}],["path",{d:"m8 10 3.453-7.648a.6.6 0 011.094 0L16 10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lH=[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1"}],["path",{d:"M7 3v18"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MH=[["path",{d:"m16 6 4 14"}],["path",{d:"M12 6v14"}],["path",{d:"M8 8v12"}],["path",{d:"M4 4v16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uH=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m4.93 4.93 4.24 4.24"}],["path",{d:"m14.83 9.17 4.24-4.24"}],["path",{d:"m14.83 14.83 4.24 4.24"}],["path",{d:"m9.17 14.83-4.24 4.24"}],["circle",{cx:"12",cy:"12",r:"4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fH=[["path",{d:"M14 12h2v8"}],["path",{d:"M14 20h4"}],["path",{d:"M6 12h4"}],["path",{d:"M6 20h4"}],["path",{d:"M8 20V8a4 4 0 0 1 7.464-2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vH=[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5"}],["path",{d:"M9 18h6"}],["path",{d:"M10 22h4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mH=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"}],["path",{d:"M9 18h6"}],["path",{d:"M10 22h4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xH=[["path",{d:"M12 3V2"}],["path",{d:"M16.066 16.865 7 22l2-11V6a3 3 0 016 0v5l2 11"}],["path",{d:"m19.792 4.5.866-.5"}],["path",{d:"m19.797 13.5.866.5"}],["path",{d:"M21 9h1"}],["path",{d:"M3 9H2"}],["path",{d:"m4.203 13.5-.866.5"}],["path",{d:"M4.208 4.5 3.342 4"}],["path",{d:"M5.5 22h13"}],["path",{d:"m7.932 16.875 7.377-4.178"}],["path",{d:"M8 11h8"}],["path",{d:"M8 7h8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yH=[["path",{d:"M12 3v12"}],["circle",{cx:"12",cy:"18",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gH=[["path",{d:"M9 12h12"}],["circle",{cx:"6",cy:"12",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AH=[["path",{d:"M 3 12 L 15 12"}],["circle",{cx:"18",cy:"12",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wH=[["path",{d:"M12 9v12"}],["circle",{cx:"12",cy:"6",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HH=[["path",{d:"M15 14H9"}],["path",{d:"M21 21H3"}],["path",{d:"M21 3H3"}],["path",{d:"m8 16 3.453-7.648a.6.6 0 011.094.001L16 16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CH=[["path",{d:"M7 3.5c5-2 7 2.5 3 4C1.5 10 2 15 5 16c5 2 9-10 14-7s.5 13.5-4 12c-5-2.5.5-11 6-2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VH=[["path",{d:"M11 5h2"}],["path",{d:"M15 12h6"}],["path",{d:"M19 5h2"}],["path",{d:"M3 12h6"}],["path",{d:"M3 19h18"}],["path",{d:"M3 5h2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SH=[["path",{d:"M9 17H7A5 5 0 0 1 7 7"}],["path",{d:"M15 7h2a5 5 0 0 1 4 8"}],["line",{x1:"8",x2:"12",y1:"12",y2:"12"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LH=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bH=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _H=[["path",{d:"M16 5H3"}],["path",{d:"M16 12H3"}],["path",{d:"M11 19H3"}],["path",{d:"m15 18 2 2 4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PH=[["path",{d:"M3 5h8"}],["path",{d:"M3 12h8"}],["path",{d:"M3 19h8"}],["path",{d:"m15 5 3 3 3-3"}],["path",{d:"m15 19 3-3 3 3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OH=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["path",{d:"m3 7 2 2 4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RH=[["path",{d:"M3 5h8"}],["path",{d:"M3 12h8"}],["path",{d:"M3 19h8"}],["path",{d:"m15 8 3-3 3 3"}],["path",{d:"m15 16 3 3 3-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EH=[["path",{d:"M16 13v2.2l1.6 1"}],["path",{d:"M3 12h3.458"}],["path",{d:"M3 19h3.832"}],["path",{d:"M3 5h18"}],["circle",{cx:"16",cy:"15",r:"6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zH=[["path",{d:"M10 5h11"}],["path",{d:"M10 12h11"}],["path",{d:"M10 19h11"}],["path",{d:"m3 10 3-3-3-3"}],["path",{d:"m3 20 3-3-3-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TH=[["path",{d:"M16 5H3"}],["path",{d:"M16 12H3"}],["path",{d:"M9 19H3"}],["path",{d:"m16 16-3 3 3 3"}],["path",{d:"M21 5v12a2 2 0 0 1-2 2h-6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DH=[["path",{d:"M12 5H2"}],["path",{d:"M6 12h12"}],["path",{d:"M9 19h6"}],["path",{d:"M16 5h6"}],["path",{d:"M19 8V2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kH=[["path",{d:"M2 5h20"}],["path",{d:"M6 12h12"}],["path",{d:"M9 19h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=[["path",{d:"M21 5H11"}],["path",{d:"M21 12H11"}],["path",{d:"M21 19H11"}],["path",{d:"m7 8-4 4 4 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["path",{d:"M21 5H11"}],["path",{d:"M21 12H11"}],["path",{d:"M21 19H11"}],["path",{d:"m3 8 4 4-4 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BH=[["path",{d:"M16 5H3"}],["path",{d:"M11 12H3"}],["path",{d:"M16 19H3"}],["path",{d:"M21 12h-6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FH=[["path",{d:"M16 5H3"}],["path",{d:"M11 12H3"}],["path",{d:"M11 19H3"}],["path",{d:"M21 16V5"}],["circle",{cx:"18",cy:"16",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qH=[["path",{d:"M11 5h10"}],["path",{d:"M11 12h10"}],["path",{d:"M11 19h10"}],["path",{d:"M4 4h1v5"}],["path",{d:"M4 9h2"}],["path",{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UH=[["path",{d:"M16 5H3"}],["path",{d:"M11 12H3"}],["path",{d:"M16 19H3"}],["path",{d:"M18 9v6"}],["path",{d:"M21 12h-6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NH=[["path",{d:"M21 5H3"}],["path",{d:"M7 12H3"}],["path",{d:"M7 19H3"}],["path",{d:"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"}],["path",{d:"M11 10v4h4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IH=[["path",{d:"M3 19h18"}],["path",{d:"M15 12H3"}],["path",{d:"M9 5H3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jH=[["path",{d:"M15 12H3"}],["path",{d:"M3 5h18"}],["path",{d:"M9 19H3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZH=[["path",{d:"M3 5h6"}],["path",{d:"M3 12h13"}],["path",{d:"M3 19h13"}],["path",{d:"m16 8-3-3 3-3"}],["path",{d:"M21 19V7a2 2 0 0 0-2-2h-6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $H=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WH=[["path",{d:"M8 5h13"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"M3 10a2 2 0 0 0 2 2h3"}],["path",{d:"M3 5v12a2 2 0 0 0 2 2h3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GH=[["path",{d:"M21 5H3"}],["path",{d:"M10 12H3"}],["path",{d:"M10 19H3"}],["path",{d:"M15 12.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KH=[["path",{d:"M16 5H3"}],["path",{d:"M11 12H3"}],["path",{d:"M16 19H3"}],["path",{d:"m15.5 9.5 5 5"}],["path",{d:"m20.5 9.5-5 5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XH=[["path",{d:"M3 5h.01"}],["path",{d:"M3 12h.01"}],["path",{d:"M3 19h.01"}],["path",{d:"M8 5h13"}],["path",{d:"M8 12h13"}],["path",{d:"M8 19h13"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f5=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JH=[["path",{d:"M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0"}],["path",{d:"M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6"}],["path",{d:"M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QH=[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YH=[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["circle",{cx:"12",cy:"12",r:"7"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tC=[["path",{d:"M12 19v3"}],["path",{d:"M12 2v3"}],["path",{d:"M18.89 13.24a7 7 0 0 0-8.13-8.13"}],["path",{d:"M19 12h3"}],["path",{d:"M2 12h3"}],["path",{d:"m2 2 20 20"}],["path",{d:"M7.05 7.05a7 7 0 0 0 9.9 9.9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aC=[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["circle",{cx:"12",cy:"12",r:"7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eC=[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v5=[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 9.33-2.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m5=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hC=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dC=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rC=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cC=[["path",{d:"M3 5h1"}],["path",{d:"M3 12h1"}],["path",{d:"M3 19h1"}],["path",{d:"M8 5h1"}],["path",{d:"M8 12h1"}],["path",{d:"M8 19h1"}],["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nC=[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}],["path",{d:"M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pC=[["path",{d:"M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"}],["path",{d:"M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"}],["path",{d:"M10 20h4"}],["circle",{cx:"16",cy:"20",r:"2"}],["circle",{cx:"8",cy:"20",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oC=[["path",{d:"m12 15 4 4"}],["path",{d:"M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282z"}],["path",{d:"m5 8 4 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iC=[["path",{d:"M22 7.7V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8.25"}],["path",{d:"M12 12.996a1.94 1.94 0 0 1-1.03-.296L2 7"}],["path",{d:"m20.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.879.001l-1.846.85a.5.5 0 0 1-.692-.593l1.29-4.88"}],["circle",{cx:"19",cy:"14",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sC=[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"m16 19 2 2 4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lC=[["path",{d:"M16 14v2.2l1.6 1"}],["path",{d:"m22 7-.759.484"}],["path",{d:"M6.835 20H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v2"}],["path",{d:"M7.605 10.567 2 7"}],["circle",{cx:"16",cy:"16",r:"6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MC=[["path",{d:"M12.674 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4.675"}],["path",{d:"m2 7 9 5.701a2 2 0 0 0 2 0l1.084-.686"}],["circle",{cx:"19",cy:"7",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uC=[["path",{d:"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M16 19h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fC=[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vC=[["path",{d:"M15.363 17.634a2 2 0 00-.506.854l-.837 2.87a.5.5 0 00.62.62l2.87-.837a2 2 0 00.854-.506l3.013-3.009a1 1 0 10-3.004-3.004z"}],["path",{d:"M22 10.38V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2h6.25"}],["path",{d:"m22 7-8.991 5.727a2 2 0 01-2.009 0L2 7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mC=[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M19 16v6"}],["path",{d:"M16 19h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x5=[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"}],["path",{d:"M20 22v.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xC=[["path",{d:"M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m22 22-1.5-1.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yC=[["path",{d:"M22 12.532V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8.792"}],["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["path",{d:"m16.5 16.5 5 5"}],["path",{d:"m21.5 16.5-5 5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gC=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AC=[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M20 14v4"}],["path",{d:"M20 22v.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wC=[["path",{d:"M17 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 1-1.732"}],["path",{d:"m22 5.5-6.419 4.179a2 2 0 0 1-2.162 0L7 5.5"}],["rect",{x:"7",y:"3",width:"15",height:"12",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HC=[["path",{d:"M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"}],["polyline",{points:"15,9 18,9 18,11"}],["path",{d:"M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2"}],["line",{x1:"6",x2:"7",y1:"10",y2:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CC=[["path",{d:"m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V14"}],["path",{d:"M15 5.764V14"}],["path",{d:"M21 18h-6"}],["path",{d:"M9 3.236v15"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VC=[["path",{d:"M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"m16 18 2 2 4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SC=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"m9 10 2 2 4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LC=[["path",{d:"M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z"}],["path",{d:"M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2"}],["path",{d:"M18 22v-3"}],["circle",{cx:"10",cy:"10",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bC=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"M9 10h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _C=[["path",{d:"M12.75 7.09a3 3 0 0 1 2.16 2.16"}],["path",{d:"M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568"}],["path",{d:"m2 2 20 20"}],["path",{d:"M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533"}],["path",{d:"M9.13 9.13a3 3 0 0 0 3.74 3.74"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PC=[["path",{d:"M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M16 18h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y5=[["path",{d:"M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}],["circle",{cx:"10",cy:"10",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OC=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"M12 7v6"}],["path",{d:"M9 10h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RC=[["path",{d:"M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M16 18h6"}],["path",{d:"M19 15v6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EC=[["path",{d:"M 12.248 21.969 a 1 1 0 0 1 -0.849 -0.17 C 9.539 20.193 4 14.993 4 10 a 8 8 0 0 1 16 0 C 20 10.42 19.961 10.841 19.888 11.262"}],["path",{d:"m22 22-1.88-1.88"}],["circle",{cx:"12",cy:"10",r:"3"}],["circle",{cx:"18",cy:"18",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zC=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"m14.5 7.5-5 5"}],["path",{d:"m9.5 7.5 5 5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TC=[["path",{d:"M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"m21.5 15.5-5 5"}],["path",{d:"m21.5 20.5-5-5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DC=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["circle",{cx:"12",cy:"10",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kC=[["path",{d:"M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 01-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0112 0"}],["path",{d:"M4.474 15h-.197a1 1 0 00-.969.753l-1.097 4.35a1.5 1.5 0 001.444 1.898L20.344 22a1.5 1.5 0 001.446-1.897l-1.098-4.35a1 1 0 00-.969-.753h-.197"}],["circle",{cx:"12",cy:"8",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BC=[["path",{d:"m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12"}],["path",{d:"M15 5.764V12"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}],["path",{d:"M9 3.236v15"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FC=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"}],["path",{d:"M15 5.764v15"}],["path",{d:"M9 3.236v15"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qC=[["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"}],["path",{d:"M3 21h18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UC=[["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"}],["path",{d:"M21 3v18"}],["path",{d:"M3 3v18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NC=[["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"}],["path",{d:"M3 3v18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IC=[["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"}],["path",{d:"M21 3v18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jC=[["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"}],["path",{d:"M3 3h18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZC=[["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"}],["path",{d:"M3 21h18"}],["path",{d:"M3 3h18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $C=[["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"}],["path",{d:"M21 6v12"}],["path",{d:"M3 6v12"}],["path",{d:"M6 21h12"}],["path",{d:"M6 3h12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WC=[["path",{d:"m14 6 4 4"}],["path",{d:"M17 3h4v4"}],["path",{d:"m21 3-7.75 7.75"}],["circle",{cx:"9",cy:"15",r:"6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GC=[["path",{d:"M16 3h5v5"}],["path",{d:"m21 3-6.75 6.75"}],["circle",{cx:"10",cy:"14",r:"6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KC=[["path",{d:"M12 12 4.207 4.207A.707.707 0 0 1 4.707 3h14.586a.707.707 0 0 1 .5 1.207z"}],["path",{d:"M12 12v10"}],["path",{d:"M7 22h10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XC=[["path",{d:"M15 3h6v6"}],["path",{d:"m21 3-7 7"}],["path",{d:"m3 21 7-7"}],["path",{d:"M9 21H3v-6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JC=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QC=[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"}],["path",{d:"M11 12 5.12 2.2"}],["path",{d:"m13 12 5.88-9.8"}],["path",{d:"M8 7h8"}],["circle",{cx:"12",cy:"17",r:"5"}],["path",{d:"M12 18v-2h-.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YC=[["path",{d:"M11.636 6A13 13 0 0 0 19.4 3.2 1 1 0 0 1 21 4v11.344"}],["path",{d:"M14.378 14.357A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1"}],["path",{d:"m2 2 20 20"}],["path",{d:"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"}],["path",{d:"M8 8v6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tV=[["path",{d:"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"}],["path",{d:"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"}],["path",{d:"M8 6v8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aV=[["path",{d:"M12 12v-2"}],["path",{d:"M12 18v-2"}],["path",{d:"M16 12v-2"}],["path",{d:"M16 18v-2"}],["path",{d:"M2 11h1.5"}],["path",{d:"M20 18v-2"}],["path",{d:"M20.5 11H22"}],["path",{d:"M4 18v-2"}],["path",{d:"M8 12v-2"}],["path",{d:"M8 18v-2"}],["rect",{x:"2",y:"6",width:"20",height:"10",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eV=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hV=[["path",{d:"m8 6 4-4 4 4"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"}],["path",{d:"m20 22-5-5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dV=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"m16 9-5.5 5.5L8 12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rV=[["path",{d:"m10 9-3 3 3 3"}],["path",{d:"m14 15 3-3-3-3"}],["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cV=[["path",{d:"M10.1 2.182a10 10 0 013.8 0"}],["path",{d:"M13.9 21.818a10 10 0 01-3.8 0"}],["path",{d:"M17.609 3.72a10 10 0 012.69 2.7"}],["path",{d:"M2.182 13.9a10 10 0 010-3.8"}],["path",{d:"M20.28 17.61a10 10 0 01-2.7 2.69"}],["path",{d:"M21.818 10.1a10 10 0 010 3.8"}],["path",{d:"M3.721 6.391a10 10 0 012.7-2.69"}],["path",{d:"m6.163 21.117-2.906.85a1 1 0 01-1.236-1.169l.965-2.98"}],["path",{d:"m16 9-5.5 5.5L8 12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nV=[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0"}],["path",{d:"M17.609 3.72a10 10 0 0 1 2.69 2.7"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8"}],["path",{d:"M20.28 17.61a10 10 0 0 1-2.7 2.69"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69"}],["path",{d:"m6.163 21.117-2.906.85a1 1 0 0 1-1.236-1.169l.965-2.98"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pV=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 5.004 2.224 3 3 0 0 1-.832 2.083l-3.447 3.62a1 1 0 0 1-1.45-.001z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oV=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iV=[["path",{d:"m2 2 20 20"}],["path",{d:"M4.93 4.929a10 10 0 0 0-1.938 11.412 2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 0 0 11.302-1.989"}],["path",{d:"M8.35 2.69A10 10 0 0 1 21.3 15.65"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sV=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g5=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lV=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"m10 15-3-3 3-3"}],["path",{d:"M7 12h8a2 2 0 0 1 2 2v1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MV=[["path",{d:"M3.086 17.509a2 2 0 00-.094-1.167 10 10 0 114.777 4.719 2 2 0 00-1.099-.092l-3.413.998a1 1 0 01-1.236-1.168z"}],["path",{d:"M8 12h9"}],["path",{d:"M8 16h5"}],["path",{d:"M8 8h7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uV=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fV=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vV=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mV=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}],["path",{d:"m9 11 2 2 4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xV=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}],["path",{d:"m10 8-3 3 3 3"}],["path",{d:"m14 14 3-3-3-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yV=[["path",{d:"M14 3h2"}],["path",{d:"M16 19h-2"}],["path",{d:"M2 12v-2"}],["path",{d:"M2 16v5.286a.71.71 0 0 0 1.212.502l1.149-1.149"}],["path",{d:"M20 19a2 2 0 0 0 2-2v-1"}],["path",{d:"M22 10v2"}],["path",{d:"M22 6V5a2 2 0 0 0-2-2"}],["path",{d:"M4 3a2 2 0 0 0-2 2v1"}],["path",{d:"M8 19h2"}],["path",{d:"M8 3h2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gV=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}],["path",{d:"M10 15h4"}],["path",{d:"M10 9h4"}],["path",{d:"M12 7v4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AV=[["path",{d:"M12.7 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4.7"}],["circle",{cx:"19",cy:"6",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wV=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}],["path",{d:"M7.5 9.5c0 .687.265 1.383.697 1.844l3.009 3.264a1.14 1.14 0 0 0 .407.314 1 1 0 0 0 .783-.004 1.14 1.14 0 0 0 .398-.31l3.008-3.264A2.77 2.77 0 0 0 16.5 9.5 2.5 2.5 0 0 0 12 8a2.5 2.5 0 0 0-4.5 1.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HV=[["path",{d:"M22 8.5V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H10"}],["path",{d:"M20 15v-2a2 2 0 0 0-4 0v2"}],["rect",{x:"14",y:"15",width:"8",height:"5",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CV=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}],["path",{d:"M12 11h.01"}],["path",{d:"M16 11h.01"}],["path",{d:"M8 11h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VV=[["path",{d:"M19 19H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 1.184-1.826"}],["path",{d:"m2 2 20 20"}],["path",{d:"M8.656 3H20a2 2 0 0 1 2 2v11.344"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SV=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}],["path",{d:"M12 8v6"}],["path",{d:"M9 11h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LV=[["path",{d:"M14 14a2 2 0 0 0 2-2V8h-2"}],["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}],["path",{d:"M8 14a2 2 0 0 0 2-2V8H8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bV=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}],["path",{d:"m10 8-3 3 3 3"}],["path",{d:"M17 14v-1a2 2 0 0 0-2-2H7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _V=[["path",{d:"M12 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4"}],["path",{d:"M16 3h6v6"}],["path",{d:"m16 9 6-6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PV=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}],["path",{d:"M7 11h10"}],["path",{d:"M7 15h6"}],["path",{d:"M7 7h8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OV=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}],["path",{d:"M12 15h.01"}],["path",{d:"M12 7v4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RV=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}],["path",{d:"m14.5 8.5-5 5"}],["path",{d:"m9.5 8.5 5 5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EV=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zV=[["path",{d:"M19.95 10.05a7 7 0 011.412 7.872 1 1 0 00-.058.787l.675 2.089a1 1 0 01-1.236 1.168l-2.155-.631a1 1 0 00-.745.06 7 7 0 01-7.793-1.445"}],["path",{d:"M2.696 12.708a1 1 0 00-.058-.785 7 7 0 113.518 3.473 1 1 0 00-.744-.061l-2.155.63a1 1 0 01-1.236-1.167z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TV=[["path",{d:"M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"}],["path",{d:"M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DV=[["path",{d:"M12 19v3"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33"}],["path",{d:"M16.95 16.95A7 7 0 0 1 5 12v-2"}],["path",{d:"M18.89 13.23A7 7 0 0 0 19 12v-2"}],["path",{d:"m2 2 20 20"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kV=[["path",{d:"M12 11.4V9.1"}],["path",{d:"m12 17 6.59-6.59"}],["path",{d:"m15.05 5.7-.218-.691a3 3 0 0 0-5.663 0L4.418 19.695A1 1 0 0 0 5.37 21h13.253a1 1 0 0 0 .951-1.31L18.45 16.2"}],["circle",{cx:"20",cy:"9",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BV=[["path",{d:"M10 3v2.341"}],["path",{d:"M12 17v4"}],["path",{d:"M14 5v.341"}],["path",{d:"M18 5v13"}],["path",{d:"M2 10v3"}],["path",{d:"M22 10v3"}],["path",{d:"M6 6v11"}],["path",{d:"M9 21h6"}],["rect",{width:"4",height:"8",x:"10",y:"9",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A5=[["path",{d:"M12 17v4"}],["path",{d:"M18 11a6 6 0 00-3-5.197"}],["path",{d:"M2 11a10 10 0 015-8.662"}],["path",{d:"M22 11a10 10 0 00-5-8.662"}],["path",{d:"M6 11a6 6 0 013-5.197"}],["path",{d:"M9 21h6"}],["rect",{x:"10",y:"9",width:"4",height:"8",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w5=[["path",{d:"m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"}],["path",{d:"M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"}],["circle",{cx:"16",cy:"7",r:"5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FV=[["path",{d:"M12 19v3"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qV=[["path",{d:"M10 12h4"}],["path",{d:"M10 17h4"}],["path",{d:"M10 7h4"}],["path",{d:"M18 12h2"}],["path",{d:"M18 18h2"}],["path",{d:"M18 6h2"}],["path",{d:"M4 12h2"}],["path",{d:"M4 18h2"}],["path",{d:"M4 6h2"}],["rect",{x:"6",y:"2",width:"12",height:"20",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UV=[["path",{d:"M6 18h8"}],["path",{d:"M3 22h18"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1"}],["path",{d:"M9 14h2"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NV=[["rect",{width:"20",height:"15",x:"2",y:"4",rx:"2"}],["rect",{width:"8",height:"7",x:"6",y:"8",rx:"1"}],["path",{d:"M18 8v7"}],["path",{d:"M6 19v2"}],["path",{d:"M18 19v2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IV=[["path",{d:"M12 13v8"}],["path",{d:"M12 3v3"}],["path",{d:"M18.172 6a2 2 0 0 1 1.414.586l2.06 2.06a1.207 1.207 0 0 1 0 1.708l-2.06 2.06a2 2 0 0 1-1.414.586H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jV=[["path",{d:"M12 18h.01"}],["path",{d:"M15 2.458V5a1 1 0 01-1 1h-4a1 1 0 01-1-1V2.458"}],["path",{d:"M16 16h.01"}],["path",{d:"M18 12h.01"}],["path",{d:"M6 12h.01"}],["path",{d:"M8 16h.01"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZV=[["path",{d:"M8 2h8"}],["path",{d:"M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $V=[["path",{d:"M8 2h8"}],["path",{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"}],["path",{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WV=[["path",{d:"m14 10 7-7"}],["path",{d:"M20 10h-6V4"}],["path",{d:"m3 21 7-7"}],["path",{d:"M4 14h6v6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GV=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KV=[["path",{d:"M5 12h14"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XV=[["path",{d:"M11 6 8 9"}],["path",{d:"m16 7-8 8"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JV=[["path",{d:"M10 6.6 8.6 8"}],["path",{d:"M12 18v4"}],["path",{d:"M15 7.5 9.5 13"}],["path",{d:"M7 22h10"}],["circle",{cx:"12",cy:"10",r:"8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QV=[["path",{d:"M12 17v4"}],["path",{d:"M18 10h-2.315a1 1 0 00-.932.64l-.787 2.034a.5.5 0 01-.932 0l-2.068-5.348a.5.5 0 00-.932 0l-.787 2.035a1 1 0 01-.932.639H6"}],["path",{d:"M8 21h8"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YV=[["path",{d:"m9 10 2 2 4-4"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=[["path",{d:"M11 13a3 3 0 1 1 2.83-4H14a2 2 0 0 1 0 4z"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=[["path",{d:"M12 17v4"}],["path",{d:"m14.305 7.53.923-.382"}],["path",{d:"m15.228 4.852-.923-.383"}],["path",{d:"m16.852 3.228-.383-.924"}],["path",{d:"m16.852 8.772-.383.923"}],["path",{d:"m19.148 3.228.383-.924"}],["path",{d:"m19.53 9.696-.382-.924"}],["path",{d:"m20.772 4.852.924-.383"}],["path",{d:"m20.772 7.148.924.383"}],["path",{d:"M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"}],["path",{d:"M8 21h8"}],["circle",{cx:"18",cy:"6",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=[["path",{d:"M12 17v4"}],["path",{d:"M22 12.307V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8.693"}],["path",{d:"M8 21h8"}],["circle",{cx:"19",cy:"6",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=[["path",{d:"M12 13V7"}],["path",{d:"m15 10-3 3-3-3"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["path",{d:"M12 17v4"}],["path",{d:"M17 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 1.184-1.826"}],["path",{d:"m2 2 20 20"}],["path",{d:"M8 21h8"}],["path",{d:"M8.656 3H20a2 2 0 0 1 2 2v10a2 2 0 0 1-.293 1.042"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=[["path",{d:"M10 13V7"}],["path",{d:"M14 13V7"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=[["path",{d:"M10 15H4a2 2 0 01-2-2V7a2 2 0 012-2h6"}],["path",{d:"M10 19H5"}],["path",{d:"M14 11h8"}],["path",{d:"M14 7h8"}],["path",{d:"M18 17h.01"}],["path",{d:"M9 19v-4"}],["rect",{x:"14",y:"3",width:"8",height:"18",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=[["path",{d:"M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["path",{d:"M5.5 20H8"}],["path",{d:"M17 9h.01"}],["rect",{width:"10",height:"16",x:"12",y:"4",rx:"2"}],["path",{d:"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4"}],["circle",{cx:"17",cy:"15",r:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}],["path",{d:"M10 19v-3.96 3.15"}],["path",{d:"M7 19h5"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=[["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}],["rect",{x:"9",y:"7",width:"6",height:"6",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["path",{d:"m9 10 3-3 3 3"}],["path",{d:"M12 13V7"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=[["path",{d:"m14.5 12.5-5-5"}],["path",{d:"m9.5 12.5 5-5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=[["path",{d:"M18 5h4"}],["path",{d:"M20 3v4"}],["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=[["path",{d:"M10 22a3 3 0 01-3-3"}],["path",{d:"M10 22c2.761 0 5-1.79 5-4-4.42 0-4.08-5-8.5-5a4.501 4.501 0 000 9z"}],["path",{d:"M10 3H8"}],["path",{d:"M12.5 11.5 22 2"}],["path",{d:"M20 13v4"}],["path",{d:"M22 15h-4"}],["path",{d:"M4 5v4"}],["path",{d:"M6 7H2"}],["path",{d:"m6.98 13.02 2.665-2.664a1.21 1.21 0 011.71 0l2.29 2.288a1.21 1.21 0 010 1.712l-2.088 2.087"}],["path",{d:"M9 2v2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=[["path",{d:"M10 22c2.761 0 5-1.79 5-4-4.42 0-4.08-5-8.5-5a1 1 0 100 9za3 3 0 01-3-3"}],["path",{d:"M12.5 11.5 22 2"}],["path",{d:"m6.98 13.02 2.665-2.664a1.21 1.21 0 011.71 0l2.29 2.288a1.21 1.21 0 010 1.712l-2.088 2.087"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=[["path",{d:"M12.268 2a2 2 0 003.465 2"}],["path",{d:"M14 5 L14 8"}],["path",{d:"M16 22v-3a2 2 0 00-4 0v3"}],["path",{d:"M21 13c-.662-1.497-1.666-2.753-2.9-3.63C16.825 8.47 15.422 8 14 8s-2.826.47-4.1 1.37C8.668 10.248 7.663 11.504 7 13z"}],["path",{d:"M3 9h4"}],["path",{d:"M7 22V6a5 5 0 00-2-4 5 5 0 00-2 4v14a2 2 0 002 2h14a2 2 0 002-2v-7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=[["path",{d:"m18 14-1-3"}],["path",{d:"m3 9 6 2a2 2 0 0 1 2-2h2a2 2 0 0 1 1.99 1.81"}],["path",{d:"M8 17h3a1 1 0 0 0 1-1 6 6 0 0 1 6-6 1 1 0 0 0 1-1v-.75A5 5 0 0 0 17 5"}],["circle",{cx:"19",cy:"17",r:"3"}],["circle",{cx:"5",cy:"17",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z"}],["path",{d:"M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=[["path",{d:"M12 7.318V10"}],["path",{d:"M5 10v5a7 7 0 0 0 14 0V9c0-3.527-2.608-6.515-6-7"}],["circle",{cx:"7",cy:"4",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=[["path",{d:"M12 6v.343"}],["path",{d:"M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218"}],["path",{d:"M19 13.343V9A7 7 0 0 0 8.56 2.902"}],["path",{d:"M22 22 2 2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=[["path",{d:"m15.55 8.45 5.138 2.087a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063L8.45 15.551"}],["path",{d:"M22 2 2 22"}],["path",{d:"m6.816 11.528-2.779-6.84a.495.495 0 0 1 .651-.651l6.84 2.779"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=[["path",{d:"M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z"}],["circle",{cx:"16",cy:"16",r:"6"}],["path",{d:"m11.8 11.8 8.4 8.4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=[["path",{d:"M14 4.1 12 6"}],["path",{d:"m5.1 8-2.9-.8"}],["path",{d:"m6 12-1.9 2"}],["path",{d:"M7.2 2.2 8 5.1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=[["path",{d:"M12 7.318V10"}],["path",{d:"M19 10v5a7 7 0 0 1-14 0V9c0-3.527 2.608-6.515 6-7"}],["circle",{cx:"17",cy:"4",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["path",{d:"M12.586 12.586 19 19"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7"}],["path",{d:"M12 6v4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=[["path",{d:"M13.074 7.417a2.6 2.6 0 012.989.099c1.829 1.36 3.053 2.076 5.479 3.644a1 1 0 01.308 1.368 11.6 11.6 0 01-1.617 2.05"}],["path",{d:"M2 12a50.5 50.5 0 0010.99.99"}],["path",{d:"m2 2 20 20"}],["path",{d:"M21 11a1 1 0 011 1 51 51 0 01-3.734.61"}],["path",{d:"M7.695 7.695c-1.7 1.247-2.92 1.967-5.238 3.464a1 1 0 00-.307 1.369 11.6 11.6 0 0014.766 4.388"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=[["path",{d:"M2 12a50.5 50.5 0 0020 0 1 1 0 00-1-1"}],["path",{d:"M2.457 11.159a1 1 0 00-.307 1.369 11.59 11.59 0 0019.7 0 1 1 0 00-.308-1.368c-2.426-1.568-3.65-2.284-5.479-3.644a2.6 2.6 0 00-3.373.208 1 1 0 01-1.38 0 2.62 2.62 0 00-3.373-.208c-1.83 1.36-3.053 2.076-5.48 3.643"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H5=[["path",{d:"M5 3v16h16"}],["path",{d:"m5 19 6-6"}],["path",{d:"m2 6 3-3 3 3"}],["path",{d:"m18 16 3 3-3 3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=[["path",{d:"M19 13v6h-6"}],["path",{d:"M5 11V5h6"}],["path",{d:"m5 5 14 14"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=[["path",{d:"M11 19H5v-6"}],["path",{d:"M13 5h6v6"}],["path",{d:"M19 5 5 19"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=[["path",{d:"M11 19H5V13"}],["path",{d:"M19 5L5 19"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=[["path",{d:"M19 13V19H13"}],["path",{d:"M5 5L19 19"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=[["path",{d:"M8 18L12 22L16 18"}],["path",{d:"M12 2V22"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=[["path",{d:"m18 8 4 4-4 4"}],["path",{d:"M2 12h20"}],["path",{d:"m6 8-4 4 4 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=[["path",{d:"M6 8L2 12L6 16"}],["path",{d:"M2 12H22"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=[["path",{d:"M18 8L22 12L18 16"}],["path",{d:"M2 12H22"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=[["path",{d:"M5 11V5H11"}],["path",{d:"M5 5L19 19"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=[["path",{d:"M13 5H19V11"}],["path",{d:"M19 5L5 19"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=[["path",{d:"M8 6L12 2L16 6"}],["path",{d:"M12 2V22"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=[["path",{d:"M12 2v20"}],["path",{d:"m8 18 4 4 4-4"}],["path",{d:"m8 6 4-4 4 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=[["path",{d:"M12 2v20"}],["path",{d:"m15 19-3 3-3-3"}],["path",{d:"m19 9 3 3-3 3"}],["path",{d:"M2 12h20"}],["path",{d:"m5 9-3 3 3 3"}],["path",{d:"m9 5 3-3 3 3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=[["path",{d:"M9.31 9.31 5 21l7-4 7 4-1.17-3.17"}],["path",{d:"M14.53 8.88 12 2l-1.17 3.17"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=[["polygon",{points:"12 2 19 21 12 17 5 21 12 2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=[["path",{d:"M8.43 8.43 3 11l8 2 2 8 2.57-5.43"}],["path",{d:"M17.39 11.73 22 2l-9.73 4.61"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=[["path",{d:"m14 20-8-8h4c5.333 0 5.333-8 0-8"}],["path",{d:"M14 8c4.078 0 5.038 4.678 2.88 6.88"}],["path",{d:"M6 4h12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{d:"M12 12V8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=[["path",{d:"M15 18h-5"}],["path",{d:"M18 14h-8"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=[["path",{d:"M6 8.32a7.43 7.43 0 0 1 0 7.36"}],["path",{d:"M9.46 6.21a11.76 11.76 0 0 1 0 11.58"}],["path",{d:"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8"}],["path",{d:"M16.37 2a20.16 20.16 0 0 1 0 20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tL=[["path",{d:"M12 2v10"}],["path",{d:"m8.5 4 7 4"}],["path",{d:"m8.5 8 7-4"}],["circle",{cx:"12",cy:"17",r:"5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aL=[["path",{d:"M16 11.75V22"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["path",{d:"M2 6h4"}],["path",{d:"M20 11.75V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5.65"}],["circle",{cx:"18",cy:"5",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eL=[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"}],["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["path",{d:"M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hL=[["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M15 2v20"}],["path",{d:"M15 7h5"}],["path",{d:"M15 12h5"}],["path",{d:"M15 17h5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dL=[["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M9.5 8h5"}],["path",{d:"M9.5 12H16"}],["path",{d:"M9.5 16H14"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rL=[["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M16 2v20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cL=[["path",{d:"M8 2v4"}],["path",{d:"M12 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v2"}],["path",{d:"M20 12v2"}],["path",{d:"M20 18v2a2 2 0 0 1-2 2h-1"}],["path",{d:"M13 22h-2"}],["path",{d:"M7 22H6a2 2 0 0 1-2-2v-2"}],["path",{d:"M4 14v-2"}],["path",{d:"M4 8V6a2 2 0 0 1 2-2h2"}],["path",{d:"M8 10h6"}],["path",{d:"M8 14h8"}],["path",{d:"M8 18h5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nL=[["path",{d:"m10 4 2.6-1.95a.25.25 0 01.4.2V10"}],["path",{d:"M16 14.535A4 4 0 0118 14a2 2 0 010 4 2 2 0 010 4 4 4 0 01-2-.535"}],["path",{d:"M8 22H4.5a.5.5 0 01-.5-.5c0-2.68 4-2.932 4-5.5a2 2 0 00-2-2 2.5 2.5 0 00-2 1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pL=[["path",{d:"M8 2v4"}],["path",{d:"M12 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"16",height:"18",x:"4",y:"4",rx:"2"}],["path",{d:"M8 10h6"}],["path",{d:"M8 14h8"}],["path",{d:"M8 18h5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oL=[["path",{d:"M11.868 11.868a.88.88 0 01-.488.252c-1.78.28-3.54-.17-4.88-.62 0 1.272-.229 3.578-.653 5.347a10 10 0 01-.417 1.363c-.21.52-.82.55-1.17.12a10 10 0 01.677-13.393"}],["path",{d:"M12.14 6.485a27.4 27.4 0 004.707-.638L20 9a7.23 7.23 0 011.706 7.05"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20.707 20.707A1 1 0 0120 21h-1c-1.069 0-1.648.242-2.485.552A7.2 7.2 0 019.002 20l-3.155-3.153"}],["path",{d:"M8.356 2.7a10 10 0 019.974 1.56c.43.35.4.97-.12 1.17a10 10 0 01-1.363.417"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iL=[["path",{d:"M16.847 5.847 20 9a7.23 7.23 0 011.551 7.516C21.241 17.352 21 17.932 21 19v1a1 1 0 01-1 1h-1c-1.069 0-1.648.242-2.485.552A7.2 7.2 0 019.002 20l-3.155-3.153"}],["path",{d:"M18.21 5.43c-1.71.69-5.07 1.07-6.71 1.07.46 1.38.91 2.74.61 4.88a.88.88 0 01-.73.74c-1.78.28-3.54-.17-4.88-.62 0 1.64-.38 5-1.07 6.71-.21.52-.82.55-1.17.12A10 10 0 0118.33 4.26c.43.35.4.97-.12 1.17"}],["path",{d:"M4.93 4.93 3 3a.7.7 0 010-1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C5=[["path",{d:"M12 16h.01"}],["path",{d:"M12 8v4"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sL=[["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V5=[["path",{d:"M10 15V9"}],["path",{d:"M14 15V9"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S5=[["path",{d:"m15 9-6 6"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}],["path",{d:"m9 9 6 6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lL=[["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ML=[["path",{d:"M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uL=[["path",{d:"M14 3h7"}],["path",{d:"M3 3h5.28a1 1 0 0 1 .948.684l5.544 16.632a1 1 0 0 0 .949.684H21"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fL=[["path",{d:"M20.341 6.484A10 10 0 0 1 10.266 21.85"}],["path",{d:"M3.659 17.516A10 10 0 0 1 13.74 2.152"}],["circle",{cx:"12",cy:"12",r:"3"}],["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vL=[["path",{d:"M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025"}],["path",{d:"m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009"}],["path",{d:"m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mL=[["path",{d:"M12 3v6"}],["path",{d:"M16.76 3a2 2 0 0 1 1.8 1.1l2.23 4.479a2 2 0 0 1 .21.891V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.472a2 2 0 0 1 .211-.894L5.45 4.1A2 2 0 0 1 7.24 3z"}],["path",{d:"M3.054 9.013h17.893"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xL=[["path",{d:"M12 22V12"}],["path",{d:"m16 17 2 2 4-4"}],["path",{d:"M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753"}],["path",{d:"M3.29 7 12 12l8.71-5"}],["path",{d:"m7.5 4.27 8.997 5.148"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yL=[["path",{d:"M12 22V12"}],["path",{d:"M16 17h6"}],["path",{d:"M21 13V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955"}],["path",{d:"M3.29 7 12 12l8.71-5"}],["path",{d:"m7.5 4.27 8.997 5.148"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gL=[["path",{d:"M12 22v-9"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AL=[["path",{d:"M12 22V12"}],["path",{d:"M16 17h6"}],["path",{d:"M19 14v6"}],["path",{d:"M21 10.535V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955"}],["path",{d:"M3.29 7 12 12l8.71-5"}],["path",{d:"m7.5 4.27 8.997 5.148"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wL=[["path",{d:"M12 22V12"}],["path",{d:"M20.27 18.27 22 20"}],["path",{d:"M21 10.498V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.98-.559"}],["path",{d:"M3.29 7 12 12l8.71-5"}],["path",{d:"m7.5 4.27 8.997 5.148"}],["circle",{cx:"18.5",cy:"16.5",r:"2.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HL=[["path",{d:"M12 22V12"}],["path",{d:"m16.5 14.5 5 5"}],["path",{d:"m16.5 19.5 5-5"}],["path",{d:"M21 10.5V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.13-.074"}],["path",{d:"M3.29 7 12 12l8.71-5"}],["path",{d:"m7.5 4.27 8.997 5.148"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CL=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VL=[["path",{d:"M11 7 6 2"}],["path",{d:"M18.992 12H2.041"}],["path",{d:"M21.145 18.38A3.34 3.34 0 0 1 20 16.5a3.3 3.3 0 0 1-1.145 1.88c-.575.46-.855 1.02-.855 1.595A2 2 0 0 0 20 22a2 2 0 0 0 2-2.025c0-.58-.285-1.13-.855-1.595"}],["path",{d:"m8.5 4.5 2.148-2.148a1.205 1.205 0 0 1 1.704 0l7.296 7.296a1.205 1.205 0 0 1 0 1.704l-7.592 7.592a3.615 3.615 0 0 1-5.112 0l-3.888-3.888a3.615 3.615 0 0 1 0-5.112L5.67 7.33"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SL=[["rect",{width:"16",height:"6",x:"2",y:"2",rx:"2"}],["path",{d:"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"}],["rect",{width:"4",height:"6",x:"8",y:"16",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L5=[["path",{d:"M10 2v2"}],["path",{d:"M14 2v4"}],["path",{d:"M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z"}],["path",{d:"M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LL=[["path",{d:"m14.622 17.897-10.68-2.913"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bL=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _L=[["path",{d:"M11.25 17.25h1.5L12 18z"}],["path",{d:"m15 12 2 2"}],["path",{d:"M17.902 6.599a8 8 0 0 0-.5-.5"}],["path",{d:"M2 14.5C2 19.47 6.48 22 12 22s10-2.53 10-7.5a10 10 0 0 0-1.3-4.83 4.5 4.5 0 1 0-7.05-5.5 8 8 0 0 0-3.3 0 4.5 4.5 0 1 0-7.04 5.5A10 10 0 0 0 2 14.5"}],["path",{d:"M6.099 6.599a8 8 0 0 1 .5-.5"}],["path",{d:"m9 12-2 2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PL=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}],["path",{d:"m15 8-3 3-3-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b5=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M14 15h1"}],["path",{d:"M19 15h2"}],["path",{d:"M3 15h2"}],["path",{d:"M9 15h1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OL=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}],["path",{d:"m9 10 3-3 3 3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RL=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _5=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m16 15-3-3 3-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P5=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 14v1"}],["path",{d:"M9 19v2"}],["path",{d:"M9 3v2"}],["path",{d:"M9 9v1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O5=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m14 9 3 3-3 3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EL=[["path",{d:"M15 10V9"}],["path",{d:"M15 15v-1"}],["path",{d:"M15 21v-2"}],["path",{d:"M15 5V3"}],["path",{d:"M9 10V9"}],["path",{d:"M9 15v-1"}],["path",{d:"M9 21v-2"}],["path",{d:"M9 5V3"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R5=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zL=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}],["path",{d:"m8 9 3 3-3 3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E5=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 14v1"}],["path",{d:"M15 19v2"}],["path",{d:"M15 3v2"}],["path",{d:"M15 9v1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TL=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}],["path",{d:"m10 15-3-3 3-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DL=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kL=[["path",{d:"M14 15h1"}],["path",{d:"M14 9h1"}],["path",{d:"M19 15h2"}],["path",{d:"M19 9h2"}],["path",{d:"M3 15h2"}],["path",{d:"M3 9h2"}],["path",{d:"M9 15h1"}],["path",{d:"M9 9h1"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BL=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"m9 16 3-3 3 3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z5=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M14 9h1"}],["path",{d:"M19 9h2"}],["path",{d:"M3 9h2"}],["path",{d:"M9 9h1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FL=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"m15 14-3 3-3-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qL=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"M9 15h12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UL=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NL=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h12"}],["path",{d:"M15 3v18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T5=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M9 21V9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IL=[["path",{d:"M5.364 3.848C4 6 3 9.652 3 12.652V19a2 2 0 002 2h14a2 2 0 002-2v-5c0-2.334-1.816-4.668-2.622-7.002"}],["path",{d:"M7 3h11.379a2 2 0 011.789 1.106l.723 1.447A1 1 0 0119.997 7h-8.525a2 2 0 01-1.789-1.106L8.79 4.105a2 2 0 10-3.579 1.789l2.261 4.522A5 5 0 018 12.652V21"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jL=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZL=[["path",{d:"M8 21s-4-3-4-9 4-9 4-9"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $L=[["path",{d:"M12.5 11.134 18.196 21"}],["path",{d:"M20.425 5.299a10 10 0 0 0-16.941 9.78c.183.563.843.774 1.355.478L20.16 6.711c.512-.296.66-.973.264-1.413"}],["path",{d:"M21 21H3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WL=[["path",{d:"M12 18h10"}],["path",{d:"M13.248 9.998A4.5 4.5 0 0 0 11.75 8.6V8a1 1 0 0 0-7.5 0 4.9 4.9 0 0 0 2.25 9H8"}],["path",{d:"m15 14-2 6"}],["path",{d:"m19 14 2 6"}],["path",{d:"M21 14h-8"}],["path",{d:"M8 20v-5.922a2 2 0 0 0-.586-1.414L6.5 11.75"}],["path",{d:"M9.205 12.795 8 14"}],["circle",{cx:"19",cy:"6",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GL=[["path",{d:"M11 15h2"}],["path",{d:"M12 12v3"}],["path",{d:"M12 19v3"}],["path",{d:"M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z"}],["path",{d:"M9 9a3 3 0 1 1 6 0"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KL=[["path",{d:"M5.8 11.3 2 22l10.7-3.79"}],["path",{d:"M4 3h.01"}],["path",{d:"M22 8h.01"}],["path",{d:"M15 2h.01"}],["path",{d:"M22 20h.01"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XL=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JL=[["circle",{cx:"11",cy:"4",r:"2"}],["circle",{cx:"18",cy:"8",r:"2"}],["circle",{cx:"20",cy:"16",r:"2"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QL=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2"}],["path",{d:"M15 14h.01"}],["path",{d:"M9 6h6"}],["path",{d:"M9 10h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D5=[["path",{d:"M13 21h8"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YL=[["path",{d:"m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"}],["path",{d:"m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=[["path",{d:"m18 13-.654-4.736a4 4 0 00-2.756-3.266l-9.163-2.9a2 2 0 00-2.017.493l-.82.819a2 2 0 00-.492 2.017l2.9 9.163a4 4 0 003.266 2.756L13 18"}],["path",{d:"M18.648 12.352a1.205 1.205 0 011.704 0l1.296 1.296a1.205 1.205 0 010 1.704l-6.296 6.296a1.205 1.205 0 01-1.704 0l-1.296-1.296a1.205 1.205 0 010-1.704z"}],["path",{d:"m3 3 6.586 6.586"}],["circle",{cx:"11",cy:"11",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k5=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=[["path",{d:"m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"}],["path",{d:"m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353"}],["path",{d:"m15 5 4 4"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=[["path",{d:"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"}],["path",{d:"m8 6 2-2"}],["path",{d:"m18 16 2-2"}],["path",{d:"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=[["path",{d:"M10 3H8"}],["path",{d:"m15.007 5.008 3.987 3.986"}],["path",{d:"M20 15v4"}],["path",{d:"M21.174 6.813a2.82 2.82 0 0 0-3.986-3.987L3.842 16.175a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"M22 17h-4"}],["path",{d:"M4 5v4"}],["path",{d:"M6 7H2"}],["path",{d:"M9 2v2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=[["path",{d:"M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=[["line",{x1:"19",x2:"5",y1:"5",y2:"19"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=[["path",{d:"M 5 22 H 11.072"}],["path",{d:"M15 5 C 23 4 23.328 12.676 20 14.536"}],["path",{d:"M15.802 10.308 C 14.776 9.465 14 8.496 14 7"}],["path",{d:"M2 2h.01"}],["path",{d:"M2 7h.01"}],["path",{d:"M5 4.5h.01"}],["path",{d:"M8.127 22 A 8 8 0 0 1 4 15 3 3 0 0 1 4.879 12.879C 6.879 10.879 10 10 10 7"}],["circle",{cx:"18",cy:"18",r:"4"}],["rect",{x:"9",y:"2",width:"6",height:"5",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=[["circle",{cx:"12",cy:"5",r:"1"}],["path",{d:"m9 20 3-6 3 6"}],["path",{d:"m6 8 6 2 6-2"}],["path",{d:"M12 10v4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=[["path",{d:"M12 2v20"}],["circle",{cx:"12",cy:"12",r:"7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=[["path",{d:"M4 12h16"}],["path",{d:"M4 8h16"}],["path",{d:"M6 20V5a1 1 0 011-1h5a6 6 0 010 12H6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=[["path",{d:"M13 2a9 9 0 0 1 9 9"}],["path",{d:"M13 6a5 5 0 0 1 5 5"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=[["path",{d:"M14 6h8"}],["path",{d:"m18 2 4 4-4 4"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=[["path",{d:"M16 2v6h6"}],["path",{d:"m22 2-6 6"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=[["path",{d:"M13.832 16.568a1 1 0 001.213-.303l.355-.465A2 2 0 0117 15h3a2 2 0 012 2v3a2 2 0 01-2 2A18 18 0 012 4a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-.8 1.6l-.468.351a1 1 0 00-.292 1.233 14 14 0 006.392 6.384"}],["path",{d:"M14.396 4.171h7.171"}],["path",{d:"M17.343 8.17h4.224"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=[["path",{d:"m16 2 6 6"}],["path",{d:"m22 2-6 6"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=[["path",{d:"m16 8 6-6"}],["path",{d:"M22 8V2h-6"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=[["path",{d:"M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272"}],["path",{d:"M22 2 2 22"}],["path",{d:"M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=[["line",{x1:"9",x2:"9",y1:"4",y2:"20"}],["path",{d:"M4 7c0-1.7 1.3-3 3-3h13"}],["path",{d:"M18 20c-1.7 0-3-1.3-3-3V4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["path",{d:"M10 13v4"}],["path",{d:"M14 13v4"}],["path",{d:"M18 13v4"}],["path",{d:"M2 13h20"}],["path",{d:"M22 11.5A3.5 3.5 0 0018.5 8a3.52 3.52 0 01-3.173-2A7 7 0 002 9v10a2 2 0 002 2h16a2 2 0 002-2z"}],["path",{d:"M6 13v4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=[["path",{d:"m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999"}],["path",{d:"M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024"}],["path",{d:"M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069"}],["path",{d:"M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=[["path",{d:"M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"}],["rect",{width:"10",height:"7",x:"12",y:"13",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=[["path",{d:"M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z"}],["path",{d:"M16 10h.01"}],["path",{d:"M2 8v1a2 2 0 0 0 2 2h1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=[["path",{d:"M2 10h6V4"}],["path",{d:"m2 4 6 6"}],["path",{d:"M21 10V7a2 2 0 0 0-2-2h-7"}],["path",{d:"M3 14v2a2 2 0 0 0 2 2h3"}],["rect",{x:"12",y:"14",width:"10",height:"7",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=[["path",{d:"M14 3v11"}],["path",{d:"M14 9h-3a3 3 0 0 1 0-6h9"}],["path",{d:"M18 3v11"}],["path",{d:"M22 18H2l4-4"}],["path",{d:"m6 22-4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=[["path",{d:"M10 3v11"}],["path",{d:"M10 9H7a1 1 0 0 1 0-6h8"}],["path",{d:"M14 3v11"}],["path",{d:"m18 14 4 4H2"}],["path",{d:"m22 18-4 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=[["path",{d:"M13 4v16"}],["path",{d:"M17 4v16"}],["path",{d:"M19 4H9.5a4.5 4.5 0 0 0 0 9H13"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"}],["path",{d:"m8.5 8.5 7 7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=[["path",{d:"M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4"}],["path",{d:"M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7"}],["rect",{width:"16",height:"5",x:"4",y:"2",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=[["path",{d:"M12 17v5"}],["path",{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89"}],["path",{d:"m2 2 20 20"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=[["path",{d:"M12 17v5"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=[["path",{d:"m12 14-1 1"}],["path",{d:"m13.75 18.25-1.25 1.42"}],["path",{d:"M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12"}],["path",{d:"M18.8 9.3a1 1 0 0 0 2.1 7.7"}],["path",{d:"M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=[["path",{d:"m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12"}],["path",{d:"m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z"}],["path",{d:"m2 22 .414-.414"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=[["path",{d:"M2 22h20"}],["path",{d:"M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=[["path",{d:"M2 22h20"}],["path",{d:"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=[["path",{d:"M14 8.536V6a4 4 0 014-4h1.5a.5.5 0 01.5.5V4a4 4 0 01-4 4 4 4 0 00-4 4 5 5 0 01-8-4 5 5 0 018 4c0 2 1 3 1 5"}],["path",{d:"m18 17-1.085 3.58A2 2 0 0115 22H9.002a2 2 0 01-1.913-1.418L6 17"}],["path",{d:"M5 17h14"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=[["path",{d:"m10.215 4.56 9.79 5.71a2 2 0 0 1 .003 3.458l-.393.23"}],["path",{d:"m16.042 16.042-8.034 4.686A2 2 0 0 1 5 19V5"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=[["path",{d:"M12.832 8.445a1 1 0 00-1.589-.098l-2.075 3.098a1 1 0 000 1.11l2 3a1 1 0 001.664 0l2-3a1 1 0 000-1.11z"}],["rect",{x:"5",y:"2",width:"14",height:"20",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=[["path",{d:"M12.65 7.65a2 2 0 012.629-1.046l5.51 2.374a2 2 0 011.046 2.628l-3.957 9.184a2 2 0 01-2.628 1.046l-5.51-2.374a2 2 0 01-1.046-2.628z"}],["path",{d:"M18 7.777V4a2 2 0 00-2-2h-6a2 2 0 00-2 2v10a2 2 0 001.137 1.805"}],["path",{d:"m8 4.389-4.364.809a2 2 0 00-1.602 2.33l1.822 9.833a2 2 0 002.331 1.602l2.542-.47"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=[["path",{d:"M14.832 8.445a1 1 0 00-1.589-.098l-2.075 3.098a1 1 0 000 1.11l2 3a1 1 0 001.664 0l2-3a1 1 0 000-1.11z"}],["path",{d:"m7.18 20.827-5-11a2 2 0 01.993-2.647L7 5.44"}],["rect",{x:"7",y:"2",width:"14",height:"20",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=[["path",{d:"M9 2v6"}],["path",{d:"M15 2v6"}],["path",{d:"M12 17v5"}],["path",{d:"M5 8h14"}],["path",{d:"M6 11V8h12v3a6 6 0 1 1-12 0Z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B5=[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"}],["path",{d:"m2 22 3-3"}],["path",{d:"M7.5 13.5 10 11"}],["path",{d:"M10.5 16.5 13 14"}],["path",{d:"m18 3-4 4h6l-4 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=[["path",{d:"M12 22v-5"}],["path",{d:"M15 8V2"}],["path",{d:"M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z"}],["path",{d:"M9 8V2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=[["path",{d:"M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2"}],["path",{d:"M18 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z"}],["path",{d:"M18 11.66V22a4 4 0 0 0 4-4V6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=[["path",{d:"M12 6V2h-1"}],["path",{d:"M9 15a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1"}],["path",{d:"M9 21V11a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=[["path",{d:"M10 4.5V4a2 2 0 0 0-2.41-1.957"}],["path",{d:"M13.9 8.4a2 2 0 0 0-1.26-1.295"}],["path",{d:"M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158"}],["path",{d:"m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343"}],["path",{d:"M6 6v8"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=[["path",{d:"M22 14a8 8 0 0 1-8 8"}],["path",{d:"M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1"}],["path",{d:"M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=[["path",{d:"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4"}],["path",{d:"M10 22 9 8"}],["path",{d:"m14 22 1-14"}],["path",{d:"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=[["path",{d:"M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z"}],["path",{d:"m22 22-5.5-5.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=[["path",{d:"M17 18a2 2 0 01-2 2H5a3 3 0 003-3V8a4 4 0 018 0"}],["path",{d:"M6 12h7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68"}],["path",{d:"M12 2v4"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=[["path",{d:"M12 2v10"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=[["path",{d:"M10 11v1"}],["path",{d:"M12 8h8"}],["path",{d:"M15 20v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3"}],["path",{d:"M4 20h16"}],["path",{d:"M4 22V4a2 2 0 012-2h12a2 2 0 012 2v18"}],["path",{d:"M4 8h4"}],["path",{d:"M8.635 10.093A2 2 0 018 8.631V7a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-.293.707l-1 1a1 1 0 01-1.414 0z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=[["path",{d:"M2 3h20"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"}],["path",{d:"m7 21 5-5 5 5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=[["path",{d:"M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5"}],["path",{d:"m16 19 2 2 4-4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=[["path",{d:"M12.531 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6.377"}],["path",{d:"m16.5 16.5 5 5"}],["path",{d:"m16.5 21.5 5-5"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.5"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=[["path",{d:"M5 7 3 5"}],["path",{d:"M9 6V3"}],["path",{d:"m13 7 2-2"}],["circle",{cx:"9",cy:"13",r:"3"}],["path",{d:"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"}],["path",{d:"M16 16h2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M12 9v11"}],["path",{d:"M2 9h13a2 2 0 0 1 2 2v9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z"}],["path",{d:"M12 2v20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3"}],["path",{d:"M21 21v.01"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7"}],["path",{d:"M3 12h.01"}],["path",{d:"M12 3h.01"}],["path",{d:"M12 16v.01"}],["path",{d:"M16 12h1"}],["path",{d:"M21 12v.01"}],["path",{d:"M12 21v-1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=[["path",{d:"M13 16a3 3 0 0 1 2.24 5"}],["path",{d:"M18 12h.01"}],["path",{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"}],["path",{d:"M20 8.54V4a2 2 0 1 0-4 0v3"}],["path",{d:"M7.612 12.524a3 3 0 1 0-1.6 4.3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34"}],["path",{d:"M4 6h.01"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67"}],["path",{d:"M12 18h.01"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"m13.41 10.59 5.66-5.66"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=[["path",{d:"M12 12h.01"}],["path",{d:"M14 15.4641a4 4 0 0 1-4 0L7.52786 19.74597 A 1 1 0 0 0 7.99303 21.16211 10 10 0 0 0 16.00697 21.16211 1 1 0 0 0 16.47214 19.74597z"}],["path",{d:"M16 12a4 4 0 0 0-2-3.464l2.472-4.282a1 1 0 0 1 1.46-.305 10 10 0 0 1 4.006 6.94A1 1 0 0 1 21 12z"}],["path",{d:"M8 12a4 4 0 0 1 2-3.464L7.528 4.254a1 1 0 0 0-1.46-.305 10 10 0 0 0-4.006 6.94A1 1 0 0 0 3 12z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=[["path",{d:"M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=[["path",{d:"M13.414 13.414a2 2 0 1 1-2.828-2.828"}],["path",{d:"M16.247 7.761a6 6 0 0 1 1.744 4.572"}],["path",{d:"M19.075 4.933a10 10 0 0 1 2.234 10.72"}],["path",{d:"m2 2 20 20"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=[["path",{d:"M5 16v2"}],["path",{d:"M19 16v2"}],["rect",{width:"20",height:"8",x:"2",y:"8",rx:"2"}],["path",{d:"M18 12h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"}],["circle",{cx:"12",cy:"9",r:"2"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1"}],["path",{d:"M9.5 18h5"}],["path",{d:"m8 22 4-11 4 11"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_=[["path",{d:"M20.34 17.52a10 10 0 1 0-2.82 2.82"}],["circle",{cx:"19",cy:"19",r:"2"}],["path",{d:"m13.41 13.41 4.18 4.18"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=[["path",{d:"M22 17a10 10 0 0 0-20 0"}],["path",{d:"M6 17a6 6 0 0 1 12 0"}],["path",{d:"M10 17a2 2 0 0 1 4 0"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=[["path",{d:"M13 22H4a2 2 0 0 1 0-4h12"}],["path",{d:"M13.236 18a3 3 0 0 0-2.2-5"}],["path",{d:"M16 9h.01"}],["path",{d:"M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3"}],["path",{d:"M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015 4 4 0 0 0 8 18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=[["path",{d:"M12 7v10"}],["path",{d:"M14.828 14.829a4 4 0 0 1-5.656 0 4 4 0 0 1 0-5.657 4 4 0 0 1 5.656 0"}],["path",{d:"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=[["path",{d:"M15.828 14.829a4 4 0 0 1-5.656 0 4 4 0 0 1 0-5.657 4 4 0 0 1 5.656 0"}],["path",{d:"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"}],["path",{d:"M8 12h5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=[["path",{d:"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"}],["path",{d:"M8 11h8"}],["path",{d:"M8 7h8"}],["path",{d:"M9 7a4 4 0 0 1 0 8H8l3 2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=[["path",{d:"m12 10 3-3"}],["path",{d:"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"}],["path",{d:"M9 11h6"}],["path",{d:"M9 15h6"}],["path",{d:"m9 7 3 3v7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=[["path",{d:"M10 17V9.5a1 1 0 0 1 5 0"}],["path",{d:"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"}],["path",{d:"M8 13h5"}],["path",{d:"M8 17h7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_=[["path",{d:"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"}],["path",{d:"M8 11h5a2 2 0 0 0 0-4h-3v10"}],["path",{d:"M8 15h5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=[["path",{d:"M10 11h4"}],["path",{d:"M10 17V7h5"}],["path",{d:"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"}],["path",{d:"M8 15h5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=[["path",{d:"M13 16H8"}],["path",{d:"M14 8H8"}],["path",{d:"M16 12H8"}],["path",{d:"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=[["path",{d:"M10 7v10a5 5 0 0 0 5-5"}],["path",{d:"m14 8-6 3"}],["path",{d:"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=[["path",{d:"M12 17V7"}],["path",{d:"M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"}],["path",{d:"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_=[["path",{d:"M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"}],["circle",{cx:"14",cy:"12",r:"8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F5=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}],["path",{d:"M12 12h.01"}],["path",{d:"M17 12h.01"}],["path",{d:"M7 12h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_=[["path",{d:"M20 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.6-.8l-1.6-2.13a1 1 0 0 0-1.6 0L9.6 17.2A2 2 0 0 1 8 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"}],["path",{d:"m14 16-3 3 3 3"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=[["path",{d:"m15 14 5-5-5-5"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=[["circle",{cx:"12",cy:"17",r:"1"}],["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=[["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"}],["path",{d:"M16 16h5v5"}],["circle",{cx:"12",cy:"12",r:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"}],["path",{d:"M16 16h5v5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=[["path",{d:"M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47"}],["path",{d:"M8 16H3v5"}],["path",{d:"M3 12C3 9.51 4 7.26 5.64 5.64"}],["path",{d:"m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64"}],["path",{d:"M21 12c0 1-.16 1.97-.47 2.87"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M22 22 2 2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=[["path",{d:"M4 7V4h16v3"}],["path",{d:"M5 20h6"}],["path",{d:"M13 4 8 20"}],["path",{d:"m15 15 5 5"}],["path",{d:"m20 15-5 5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=[["path",{d:"M17 3v10"}],["path",{d:"m12.67 5.5 8.66 5"}],["path",{d:"m12.67 10.5 8.66-5"}],["path",{d:"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=[["path",{d:"m17 2 4 4-4 4"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}],["path",{d:"m7 22-4-4 4-4"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3"}],["path",{d:"M11 10h1v4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=[["path",{d:"m2 9 3-3 3 3"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6"}],["path",{d:"m22 15-3 3-3-3"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=[["path",{d:"M11.656 6H21l-4-4"}],["path",{d:"M17.898 17.898A4 4 0 0 1 17 18H3l4-4"}],["path",{d:"m2 2 20 20"}],["path",{d:"M21 13v1a4 4 0 0 1-.171 1.159"}],["path",{d:"m21 6-4 4"}],["path",{d:"M3 11v-1a4 4 0 0 1 3.102-3.898"}],["path",{d:"m7 22-4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=[["path",{d:"m17 2 4 4-4 4"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}],["path",{d:"m7 22-4-4 4-4"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tP=[["path",{d:"M14 4a1 1 0 0 1 1-1"}],["path",{d:"M15 10a1 1 0 0 1-1-1"}],["path",{d:"M21 4a1 1 0 0 0-1-1"}],["path",{d:"M21 9a1 1 0 0 1-1 1"}],["path",{d:"m3 7 3 3 3-3"}],["path",{d:"M6 10V5a2 2 0 0 1 2-2h2"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aP=[["path",{d:"M14 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"M14 4a1 1 0 0 1 1-1"}],["path",{d:"M15 10a1 1 0 0 1-1-1"}],["path",{d:"M19 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"M21 4a1 1 0 0 0-1-1"}],["path",{d:"M21 9a1 1 0 0 1-1 1"}],["path",{d:"m3 7 3 3 3-3"}],["path",{d:"M6 10V5a2 2 0 0 1 2-2h2"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eP=[["path",{d:"m12 17-5-5 5-5"}],["path",{d:"M22 18v-2a4 4 0 0 0-4-4H7"}],["path",{d:"m7 17-5-5 5-5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hP=[["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4"}],["path",{d:"m9 17-5-5 5-5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dP=[["path",{d:"M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z"}],["path",{d:"M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rP=[["path",{d:"M12 17v4"}],["path",{d:"M12 5V3"}],["path",{d:"M12 9v3"}],["path",{d:"M2.077 18.449A2 2 0 0 0 4 21h16a2 2 0 0 0 1.924-2.55l-4-14A2 2 0 0 0 16 3H8a2 2 0 0 0-1.924 1.45z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cP=[["path",{d:"M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22"}],["path",{d:"m12 18 2.57-3.5"}],["path",{d:"M6.243 9.016a7 7 0 0 1 11.507-.009"}],["path",{d:"M9.35 14.53 12 11.22"}],["path",{d:"M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nP=[["path",{d:"M12 21 7.5 8.322"}],["path",{d:"m14 7 1.75-3.767a.5.5 0 0 1 .662-.172L20 5.005"}],["path",{d:"m20 8.998-3.588 1.944a.5.5 0 0 1-.662-.172L14 7H8"}],["path",{d:"M3.486 21h10"}],["path",{d:"M5 21V8.732"}],["circle",{cx:"6",cy:"7",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pP=[["path",{d:"M11 17h2"}],["path",{d:"M12 12h.01"}],["path",{d:"M17 12a5 5 0 00-10 0"}],["path",{d:"M19 2v2.8"}],["path",{d:"M2 5h2.8"}],["path",{d:"M22 5h-2.8"}],["path",{d:"M5 2v2.8"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oP=[["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"}],["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"}],["path",{d:"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iP=[["path",{d:"m15 13 3.708 7.416"}],["path",{d:"M3 19a15 15 0 0 0 18 0"}],["path",{d:"m3 2 3.21 9.633A2 2 0 0 0 8.109 13H18"}],["path",{d:"m9 13-3.708 7.416"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sP=[["path",{d:"M6 19V5"}],["path",{d:"M10 19V6.8"}],["path",{d:"M14 19v-7.8"}],["path",{d:"M18 5v4"}],["path",{d:"M18 19v-6"}],["path",{d:"M22 19V9"}],["path",{d:"M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q5=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lP=[["path",{d:"M17 10h-1a4 4 0 1 1 4-4v.534"}],["path",{d:"M17 6h1a4 4 0 0 1 1.42 7.74l-2.29.87a6 6 0 0 1-5.339-10.68l2.069-1.31"}],["path",{d:"M4.5 17c2.8-.5 4.4 0 5.5.8s1.8 2.2 2.3 3.7c-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2"}],["path",{d:"M9.77 12C4 15 2 22 2 22"}],["circle",{cx:"17",cy:"8",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U5=[["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814"}],["path",{d:"M16.47214 7.52786 A 5 10 0 1 0 13 21.79796"}],["path",{d:"M21.79796 11 A 10 5 0 1 0 19 15.57071"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MP=[["path",{d:"M12 7v6"}],["path",{d:"M12 9h2"}],["path",{d:"M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["circle",{cx:"12",cy:"15",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uP=[["path",{d:"M20 9V7a2 2 0 0 0-2-2h-6"}],["path",{d:"m15 2-3 3 3 3"}],["path",{d:"M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fP=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vP=[["path",{d:"M12 7v5l4 2"}],["path",{d:"M16 8h5V3"}],["path",{d:"m21 8-2.3-2.3A9.7 9.7 0 0012 3a9 9 0 109 9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mP=[["path",{d:"M12 5H6a2 2 0 0 0-2 2v3"}],["path",{d:"m9 8 3-3-3-3"}],["path",{d:"M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xP=[["path",{d:"M12 3a9.75 9.75 0 0 1 6.74 2.74"}],["path",{d:"M18.74 5.74 21 8"}],["path",{d:"M21 8V3"}],["path",{d:"M7.5 19.794c-6-3.464-6-12.124 0-15.588"}],["path",{d:"M7.5 4.206A9 9 0 0 1 12 3"}],["path",{d:"M12 7v5l4 2"}],["path",{d:"M14 20.775A9 9 0 0 1 12 21"}],["path",{d:"M19 17.656a9 9 0 0 1-1.5 1.456"}],["path",{d:"M21 12a9 9 0 0 1-.228 2"}],["path",{d:"M21 8h-5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yP=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gP=[["circle",{cx:"6",cy:"19",r:"3"}],["path",{d:"M9 19h8.5c.4 0 .9-.1 1.3-.2"}],["path",{d:"M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12"}],["path",{d:"m2 2 20 20"}],["path",{d:"M21 15.3a3.5 3.5 0 0 0-3.3-3.3"}],["path",{d:"M15 5h-4.3"}],["circle",{cx:"18",cy:"5",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AP=[["circle",{cx:"6",cy:"19",r:"3"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"}],["circle",{cx:"18",cy:"5",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wP=[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6.01 18H6"}],["path",{d:"M10.01 18H10"}],["path",{d:"M15 10v4"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N5=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 12h18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I5=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 9H3"}],["path",{d:"M21 15H3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HP=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 7.5H3"}],["path",{d:"M21 12H3"}],["path",{d:"M21 16.5H3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CP=[["path",{d:"M4 11a9 9 0 0 1 9 9"}],["path",{d:"M4 4a16 16 0 0 1 16 16"}],["circle",{cx:"5",cy:"19",r:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VP=[["path",{d:"m10 10 4 4"}],["path",{d:"m13 7 4 4"}],["path",{d:"M15.34 2.138A15 15 0 002.138 15.34c-.357 2.94.004 4.919.805 5.717.798.8 2.778 1.162 5.718.805A15 15 0 0021.862 8.661c.357-2.94-.004-4.92-.805-5.718-.798-.8-2.778-1.162-5.717-.805"}],["path",{d:"M17 7 7 17"}],["path",{d:"m7 13 4 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SP=[["path",{d:"M10 15v-3"}],["path",{d:"M14 15v-3"}],["path",{d:"M18 15v-3"}],["path",{d:"M2 8V4"}],["path",{d:"M22 6H2"}],["path",{d:"M22 8V4"}],["path",{d:"M6 15v-3"}],["rect",{x:"2",y:"12",width:"20",height:"8",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LP=[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"}],["path",{d:"m14.5 12.5 2-2"}],["path",{d:"m11.5 9.5 2-2"}],["path",{d:"m8.5 6.5 2-2"}],["path",{d:"m17.5 15.5 2-2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bP=[["path",{d:"M10 2v15"}],["path",{d:"M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z"}],["path",{d:"M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _P=[["path",{d:"M19.496 12a2.5 2.5 0 00.399-2.214A2 2 0 0020.32 6.5 2 2 0 0019 3a2 2 0 00-1.5.68 2 2 0 00-3.287.424 2.5 2.5 0 00-3.189 2.06A3 3 0 0012 12l4-4"}],["path",{d:"M4 12a1 1 0 00-.99 1.133A9 9 0 0012 21a9 9 0 008.99-7.867A1 1 0 0020 12z"}],["path",{d:"M7 21h10"}],["path",{d:"M9.85 6.907A3.5 3.5 0 005.05 12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PP=[["path",{d:"m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777"}],["path",{d:"M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25"}],["path",{d:"M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9"}],["path",{d:"m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2"}],["rect",{width:"20",height:"4",x:"2",y:"11",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OP=[["path",{d:"M4 16h6"}],["path",{d:"M7 20V5a1 1 0 011-1h6a4 4 0 010 8H4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RP=[["path",{d:"M18 12a6 6 0 00-6-6"}],["path",{d:"M2.824 10.459a8 8 0 0010.717 10.717c.558-.276.623-1.012.183-1.452l-9.448-9.448c-.44-.44-1.176-.375-1.452.183"}],["path",{d:"M22 12A10 10 0 0012 2"}],["path",{d:"m9 15 4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EP=[["path",{d:"m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5"}],["path",{d:"M16.5 7.5 19 5"}],["path",{d:"m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5"}],["path",{d:"M9 21a6 6 0 0 0-6-6"}],["path",{d:"M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zP=[["path",{d:"M10 2v3a1 1 0 0 0 1 1h5"}],["path",{d:"M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6"}],["path",{d:"M18 22H4a2 2 0 0 1-2-2V6"}],["path",{d:"M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TP=[["path",{d:"M10 2.977v13.19a2 2 0 01-1.23 1.846L4 19.999"}],["path",{d:"M14 4v9.523a1 1 0 001.371.928L19 13"}],["path",{d:"m19 18-5 2"}],["path",{d:"M19 8 4 14"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DP=[["path",{d:"M12.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4v4.35"}],["path",{d:"m16 19 2 2 4-4"}],["path",{d:"M17 15.13V14a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kP=[["path",{d:"M13.33 13H8a1 1 0 00-1 1v7"}],["path",{d:"M14.363 17.634a2 2 0 00-.506.854l-.837 2.87a.5.5 0 00.62.62l2.87-.837a2 2 0 00.854-.506l4.013-4.009a1 1 0 10-3.004-3.004z"}],["path",{d:"M7 3v4a1 1 0 001 1h7"}],["path",{d:"M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h10.2a2 2 0 011.4.6l3.8 3.8a2 2 0 01.6 1.4v.3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BP=[["path",{d:"M12.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V12"}],["path",{d:"M16 13H8a1 1 0 0 0-1 1v7"}],["path",{d:"M19 22v-6"}],["path",{d:"M22 19h-6"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FP=[["path",{d:"M13 13H8a1 1 0 0 0-1 1v7"}],["path",{d:"M14 8h1"}],["path",{d:"M17 21v-4"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41"}],["path",{d:"M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qP=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UP=[["path",{d:"M12 3v18"}],["path",{d:"m19 8 3 8a5 5 0 0 1-6 0zV7"}],["path",{d:"M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"}],["path",{d:"m5 8 3 8a5 5 0 0 1-6 0zV7"}],["path",{d:"M7 21h10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j5=[["path",{d:"M5 7v11a1 1 0 0 0 1 1h11"}],["path",{d:"M5.293 18.707 11 13"}],["circle",{cx:"19",cy:"19",r:"2"}],["circle",{cx:"5",cy:"5",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NP=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M14 15H9v-5"}],["path",{d:"M16 3h5v5"}],["path",{d:"M21 3 9 15"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IP=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M8 7v10"}],["path",{d:"M12 7v10"}],["path",{d:"M17 7v10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jP=[["path",{d:"M12 12v5.5"}],["path",{d:"M17 3h2a2 2 0 012 2v2"}],["path",{d:"M21 17v2a2 2 0 01-2 2h-2"}],["path",{d:"M3 7V5a2 2 0 012-2h2"}],["path",{d:"M7 21H5a2 2 0 01-2-2v-2"}],["path",{d:"M7.264 9.252 12 12l4.737-2.748"}],["path",{d:"M7.995 8.514A2 2 0 007 10.244v3.516a2 2 0 00.996 1.73l3 1.74a2 2 0 002.008 0l3-1.74A2 2 0 0017 13.76v-3.517a2 2 0 00-.995-1.73l-3-1.742a2 2 0 00-1.892-.064z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZP=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $P=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 9h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WP=[["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 4.172 4.306l-3.447 3.62a1 1 0 0 1-1.449 0z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GP=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M7 12h10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KP=[["path",{d:"M17 12v4a1 1 0 0 1-1 1h-4"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M17 8V7"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M7 17h.01"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["rect",{x:"7",y:"7",width:"5",height:"5",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XP=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m16 16-1.9-1.9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JP=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["rect",{width:"8",height:"8",x:"8",y:"8",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QP=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M7 8h8"}],["path",{d:"M7 12h10"}],["path",{d:"M7 16h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YP=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tO=[["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3"}],["path",{d:"M18 4.933V21"}],["path",{d:"m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6"}],["path",{d:"m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11"}],["path",{d:"M6 4.933V21"}],["circle",{cx:"12",cy:"9",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aO=[["path",{d:"M5.42 9.42 8 12"}],["circle",{cx:"4",cy:"8",r:"2"}],["path",{d:"m14 6-8.58 8.58"}],["circle",{cx:"4",cy:"16",r:"2"}],["path",{d:"M10.8 14.8 14 18"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eO=[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M8.12 8.12 12 12"}],["path",{d:"M20 4 8.12 15.88"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M14.8 14.8 20 20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hO=[["path",{d:"M21 4h-3.5l2 11.05"}],["path",{d:"M6.95 17h5.142c.523 0 .95-.406 1.063-.916a6.5 6.5 0 0 1 5.345-5.009"}],["circle",{cx:"19.5",cy:"17.5",r:"2.5"}],["circle",{cx:"4.5",cy:"17.5",r:"2.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dO=[["path",{d:"M19 5a2 2 0 012 2v11a2 2 0 01-2 2h-5.586a1 1 0 00-.707.293l-1.414 1.414a1 1 0 01-.707.293H8.414a1 1 0 01-.707-.293l-1.414-1.414A1 1 0 005.586 20H5a2 2 0 01-2-2V5.286c0-.394.11-.785.36-1.09a6 6 0 019.168-.133C12.996 4.6 13.637 5 14.35 5z"}],["path",{d:"M21 12h-7.586a1 1 0 00-.707.293l-1.414 1.414a1 1 0 01-.707.293H8.414a1 1 0 01-.707-.293l-1.414-1.414A1 1 0 005.586 12H3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rO=[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m22 3-5 5"}],["path",{d:"m17 3 5 5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cO=[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m17 8 5-5"}],["path",{d:"M17 3h5v5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nO=[["path",{d:"M10 9v10"}],["path",{d:"M14 13v2"}],["path",{d:"M16.5 10.5 5.706 21.294A2.4 2.4 0 014.002 22H2.5a.5.5 0 01-.5-.5v-1.502a2.4 2.4 0 01.706-1.704L13.5 7.5"}],["path",{d:"M20.819 11.575a6 6 0 00.969-5.162.6.6 0 00-.981-.219l-.455.454a1.2 1.2 0 01-1.704 0l-1.296-1.296a1.2 1.2 0 010-1.704l.454-.453a.595.595 0 00-.219-.98 6 6 0 00-5.162.967 2 2 0 00-.222 3.019l5.596 5.597a2 2 0 003.02-.222"}],["path",{d:"M6 13v8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pO=[["path",{d:"M15 12h-5"}],["path",{d:"M15 8h-5"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oO=[["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iO=[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}],["path",{d:"M11 7v4"}],["path",{d:"M11 15h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sO=[["path",{d:"m8 11 2 2 4-4"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lO=[["path",{d:"m13 13.5 2-2.5-2-2.5"}],["path",{d:"m21 21-4.3-4.3"}],["path",{d:"M9 8.5 7 11l2 2.5"}],["circle",{cx:"11",cy:"11",r:"8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MO=[["path",{d:"m13.5 8.5-5 5"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uO=[["path",{d:"m13.5 8.5-5 5"}],["path",{d:"m8.5 8.5 5 5"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fO=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vO=[["path",{d:"M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0"}],["path",{d:"M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z5=[["path",{d:"M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"}],["path",{d:"M6 12h16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mO=[["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2"}],["path",{d:"M7 14v1a2 2 0 0 0 2 2h1"}],["path",{d:"M14 7h1a2 2 0 0 1 2 2v1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xO=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yO=[["path",{d:"m16 16-4 4-4-4"}],["path",{d:"M3 12h18"}],["path",{d:"m8 8 4-4 4 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gO=[["path",{d:"M12 3v18"}],["path",{d:"m16 16 4-4-4-4"}],["path",{d:"m8 8-4 4 4 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AO=[["path",{d:"m10.852 14.772-.383.923"}],["path",{d:"M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923"}],["path",{d:"m13.148 9.228.383-.923"}],["path",{d:"m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544"}],["path",{d:"m14.772 10.852.923-.383"}],["path",{d:"m14.772 13.148.923.383"}],["path",{d:"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"}],["path",{d:"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"}],["path",{d:"M6 18h.01"}],["path",{d:"M6 6h.01"}],["path",{d:"m9.228 10.852-.923-.383"}],["path",{d:"m9.228 13.148-.923.383"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wO=[["path",{d:"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"}],["path",{d:"M6 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"m13 6-4 6h6l-4 6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HO=[["path",{d:"M10 16V8"}],["path",{d:"M14 16V8"}],["path",{d:"M18 16V8"}],["path",{d:"M6 12h.01"}],["path",{d:"M6 16h.01"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CO=[["path",{d:"M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5"}],["path",{d:"M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z"}],["path",{d:"M22 17v-1a2 2 0 0 0-2-2h-1"}],["path",{d:"M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z"}],["path",{d:"M6 18h.01"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VO=[["path",{d:"M12.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2"}],["path",{d:"M16 12h6"}],["path",{d:"M19 9v6"}],["path",{d:"M22 18v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h8.5"}],["path",{d:"M6 18h.01"}],["path",{d:"M6 6h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SO=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LO=[["path",{d:"M14 17H5"}],["path",{d:"M19 7h-9"}],["circle",{cx:"17",cy:"17",r:"3"}],["circle",{cx:"7",cy:"7",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bO=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _O=[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PO=[["circle",{cx:"18",cy:"5",r:"3"}],["circle",{cx:"6",cy:"12",r:"3"}],["circle",{cx:"18",cy:"19",r:"3"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OO=[["path",{d:"M12 2v13"}],["path",{d:"m16 6-4-4-4 4"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RO=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15"}],["line",{x1:"9",x2:"9",y1:"9",y2:"21"}],["line",{x1:"15",x2:"15",y1:"9",y2:"21"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EO=[["path",{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zO=[["path",{d:"M12 12V9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"}],["path",{d:"M16 20v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"}],["path",{d:"M20 22V2"}],["path",{d:"M4 12h16"}],["path",{d:"M4 20h16"}],["path",{d:"M4 2v20"}],["path",{d:"M4 4h16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TO=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DO=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m4.243 5.21 14.39 12.472"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kO=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BO=[["path",{d:"M11 22c-3.806-1.45-7-3.966-7-9V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v4"}],["path",{d:"M14.923 16.547 14 16.164"}],["path",{d:"m14.923 18.843-.923.383"}],["path",{d:"M16.547 14.923 16.164 14"}],["path",{d:"m16.547 20.467-.383.924"}],["path",{d:"m18.843 14.923.383-.923"}],["path",{d:"m19.225 21.391-.382-.924"}],["path",{d:"m20.467 16.547.923-.383"}],["path",{d:"m20.467 18.843.923.383"}],["circle",{cx:"17.695",cy:"17.695",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FO=[["path",{d:"m10.929 14.467-.383.924"}],["path",{d:"M10.929 8.923 10.546 8"}],["path",{d:"M13.225 8.923 13.608 8"}],["path",{d:"m13.607 15.391-.382-.924"}],["path",{d:"m14.849 10.547.923-.383"}],["path",{d:"m14.849 12.843.923.383"}],["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9.305 10.547-.923-.383"}],["path",{d:"m9.305 12.843-.923.383"}],["circle",{cx:"12.077",cy:"11.695",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qO=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UO=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 22V2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NO=[["path",{d:"M15 22a1 1 0 01-1-1v-4a1 1 0 01.445-.832l3-2a1 1 0 011.11 0l3 2A1 1 0 0122 17v4a1 1 0 01-1 1z"}],["path",{d:"M18 22v-3"}],["path",{d:"M20 10.418V6a1 1 0 00-1-1c-2 0-4.49-1.19-6.24-2.72a1.17 1.17 0 00-1.52 0C9.5 3.8 7 5 5 5a1 1 0 00-1 1v7c0 4.602 2.67 7.1 6.037 8.603"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IO=[["path",{d:"M12 13v3"}],["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 01-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 011-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 011.52 0C14.51 3.81 17 5 19 5a1 1 0 011 1z"}],["circle",{cx:"12",cy:"11",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jO=[["path",{d:"M20 9.807V6a1 1 0 00-1-1c-2 0-4.49-1.19-6.24-2.72a1.17 1.17 0 00-1.52 0C9.5 3.8 7 5 5 5a1 1 0 00-1 1v7c0 3.88 2.107 6.254 5 7.796"}],["path",{d:"M19 17v-2a2 2 0 00-4 0v2"}],["rect",{x:"13",y:"17",width:"8",height:"5",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZO=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M9 12h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $O=[["path",{d:"m2 2 20 20"}],["path",{d:"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71"}],["path",{d:"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WO=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M9 12h6"}],["path",{d:"M12 9v6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $5=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GO=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M6.376 18.91a6 6 0 0 1 11.249.003"}],["circle",{cx:"12",cy:"11",r:"4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W5=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m14.5 9.5-5 5"}],["path",{d:"m9.5 9.5 5 5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KO=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XO=[["path",{d:"M12 15v-3"}],["path",{d:"M12 2v2"}],["path",{d:"M16.5 12V9a1 1 0 011-1h1a1 1 0 001-1V5a1 1 0 00-1-1h-13a1 1 0 00-1 1v2a1 1 0 001 1h1a1 1 0 011 1v3"}],["path",{d:"M19.38 19c1.076-1.815 1.636-4.89 1.628-6.008a1 1 0 00-1-.992H3.984a1 1 0 00-1 .984c-.03 1.86.97 5.621 2.826 7.776"}],["path",{d:"M2 20c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JO=[["circle",{cx:"12",cy:"12",r:"8"}],["path",{d:"M12 2v7.5"}],["path",{d:"m19 5-5.23 5.23"}],["path",{d:"M22 12h-7.5"}],["path",{d:"m19 19-5.23-5.23"}],["path",{d:"M12 14.5V22"}],["path",{d:"M10.23 13.77 5 19"}],["path",{d:"M9.5 12H2"}],["path",{d:"M10.23 10.23 5 5"}],["circle",{cx:"12",cy:"12",r:"2.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QO=[["path",{d:"M12 2v2"}],["path",{d:"M12 9.189V13"}],["path",{d:"M19 12V6a2 2 0 00-2-2H7a2 2 0 00-2 2v6"}],["path",{d:"M19.38 19A11.6 11.6 0 0021 13l-8.188-3.639a2 2 0 00-1.624 0L3 13.001a11.6 11.6 0 002.81 7.76"}],["path",{d:"M2 20c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YO=[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tR=[["path",{d:"M16 10a4 4 0 0 1-8 0"}],["path",{d:"M3.103 6.034h17.794"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aR=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eR=[["path",{d:"M16 5h6"}],["path",{d:"m2.05 2.05 1.099-.028a1 1 0 011.008.815l2.69 14.347A1 1 0 007.83 18H18"}],["path",{d:"M4.564 5H12"}],["path",{d:"M6.25 14h12.712a2 2 0 001.991-1.57l.514-3.113"}],["circle",{cx:"18",cy:"20",r:"2"}],["circle",{cx:"8",cy:"20",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hR=[["path",{d:"M16 5h6"}],["path",{d:"M19 2v6"}],["path",{d:"m2.05 2.05 1.099-.028a1 1 0 011.008.815l2.69 14.347A1 1 0 007.83 18H18"}],["path",{d:"M4.564 5H12"}],["path",{d:"M6.25 14h12.712a2 2 0 001.991-1.57l.172-1.041"}],["circle",{cx:"18",cy:"20",r:"2"}],["circle",{cx:"8",cy:"20",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dR=[["path",{d:"m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18"}],["path",{d:"M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25"}],["circle",{cx:"18",cy:"20",r:"2"}],["circle",{cx:"8",cy:"20",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rR=[["path",{d:"M21.56 4.56a1.5 1.5 0 0 1 0 2.122l-.47.47a3 3 0 0 1-4.212-.03 3 3 0 0 1 0-4.243l.44-.44a1.5 1.5 0 0 1 2.121 0z"}],["path",{d:"M3 22a1 1 0 0 1-1-1v-3.586a1 1 0 0 1 .293-.707l3.355-3.355a1.205 1.205 0 0 1 1.704 0l3.296 3.296a1.205 1.205 0 0 1 0 1.704l-3.355 3.355a1 1 0 0 1-.707.293z"}],["path",{d:"m9 15 7.879-7.878"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cR=[["path",{d:"M4 13V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 22v-5"}],["path",{d:"M14 19v-2"}],["path",{d:"M18 20v-3"}],["path",{d:"M2 13h20"}],["path",{d:"M6 20v-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nR=[["path",{d:"m4 4 2.5 2.5"}],["path",{d:"M13.5 6.5a4.95 4.95 0 0 0-7 7"}],["path",{d:"M15 5 5 15"}],["path",{d:"M14 17v.01"}],["path",{d:"M10 16v.01"}],["path",{d:"M13 13v.01"}],["path",{d:"M16 10v.01"}],["path",{d:"M11 20v.01"}],["path",{d:"M17 14v.01"}],["path",{d:"M20 11v.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pR=[["path",{d:"M10 2a3.28 3.28 0 003.227 1.798l6.17-.561A1 1 0 1119.614 8H13.5"}],["path",{d:"M11 20c-.5.5-1.12 1-2.5 1a1 1 0 010-5H12a7 7 0 003.283-.817"}],["path",{d:"M11 22c-.5-.5-1.12-1-2.5-1a6.5 6.5 0 01-5.63-3.25 6.44 6.44 0 015.236-9.744"}],["path",{d:"M18.04 12.54A7 7 0 0019 9V8"}],["path",{d:"m2 2 20 20"}],["path",{d:"M8 16c-2 0-4.5-4-4-6"}],["path",{d:"M9.43 9.33A8.5 8.5 0 0010 16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oR=[["path",{d:"M10 2a3.28 3.28 0 003.227 1.798l6.17-.561A1 1 0 1119.614 8H8.5a6.44 6.44 0 00-5.63 9.75A6.5 6.5 0 008.5 21c1.38 0 2-.5 2.5-1"}],["path",{d:"M10 8a8.5 8.5 0 000 8"}],["path",{d:"M11 22c-.5-.5-1.12-1-2.5-1a1 1 0 010-5H12a7 7 0 007-7V8"}],["path",{d:"M13 12h.01"}],["path",{d:"M8 16c-2 0-4.5-4-4-6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iR=[["path",{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8"}],["path",{d:"M9 19.8V15m0 0H4.2M9 15l-6 6"}],["path",{d:"M15 4.2V9m0 0h4.8M15 9l6-6"}],["path",{d:"M9 4.2V9m0 0H4.2M9 9 3 3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sR=[["path",{d:"M12 22v-5.172a2 2 0 0 0-.586-1.414L9.5 13.5"}],["path",{d:"M14.5 14.5 12 17"}],["path",{d:"M17 8.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lR=[["path",{d:"m18 14 4 4-4 4"}],["path",{d:"m18 2 4 4-4 4"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MR=[["path",{d:"M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uR=[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}],["path",{d:"M17 20V8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fR=[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vR=[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mR=[["path",{d:"M2 20h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xR=[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}],["path",{d:"M17 20V8"}],["path",{d:"M22 4v16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yR=[["path",{d:"m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284"}],["path",{d:"M3 21h18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gR=[["path",{d:"M10 9H4L2 7l2-2h6"}],["path",{d:"M14 5h6l2 2-2 2h-6"}],["path",{d:"M10 22V4a2 2 0 1 1 4 0v18"}],["path",{d:"M8 22h8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AR=[["path",{d:"M12 13v8"}],["path",{d:"M12 3v3"}],["path",{d:"M2.354 10.354a1.207 1.207 0 0 1 0-1.708l2.06-2.06A2 2 0 0 1 5.828 6h12.344a2 2 0 0 1 1.414.586l2.06 2.06a1.207 1.207 0 0 1 0 1.708l-2.06 2.06a2 2 0 0 1-1.414.586H5.828a2 2 0 0 1-1.414-.586z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wR=[["path",{d:"M12 12v6"}],["path",{d:"M12 2v1"}],["path",{d:"M12.707 7.05a5 5 0 0 1 4.243 4.243"}],["path",{d:"M17 17v1H7a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2"}],["path",{d:"M18.5 4.5 18 5"}],["path",{d:"M2 12h1"}],["path",{d:"m2 2 20 20"}],["path",{d:"M21 12h1"}],["path",{d:"M7 18v-6a5 5 0 0 1 1.464-3.536"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HR=[["path",{d:"M7 18v-6a5 5 0 1 1 10 0v6"}],["path",{d:"M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"}],["path",{d:"M21 12h1"}],["path",{d:"M18.5 4.5 18 5"}],["path",{d:"M2 12h1"}],["path",{d:"M12 2v1"}],["path",{d:"m4.929 4.929.707.707"}],["path",{d:"M12 12v6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G5=[["path",{d:"M21 16V3a1 1 0 0 0-1.28-.96l-10 2.917a1 1 0 0 0-.72.96V19"}],["path",{d:"M21 6 9 9.5"}],["circle",{cx:"18",cy:"16",r:"3"}],["circle",{cx:"6",cy:"19",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CR=[["path",{d:"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"}],["path",{d:"M3 20V4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VR=[["path",{d:"M21 4v16"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SR=[["path",{d:"m12.5 17-.5-1-.5 1h1z"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"9",cy:"12",r:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LR=[["path",{d:"M22 2 2 22"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bR=[["path",{d:"M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _R=[["path",{d:"M10 5H3"}],["path",{d:"M12 19H3"}],["path",{d:"M14 3v4"}],["path",{d:"M16 17v4"}],["path",{d:"M21 12h-9"}],["path",{d:"M21 19h-5"}],["path",{d:"M21 5h-7"}],["path",{d:"M8 10v4"}],["path",{d:"M8 12H3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K5=[["path",{d:"M10 8h4"}],["path",{d:"M12 21v-9"}],["path",{d:"M12 8V3"}],["path",{d:"M17 16h4"}],["path",{d:"M19 12V3"}],["path",{d:"M19 21v-5"}],["path",{d:"M3 14h4"}],["path",{d:"M5 10V3"}],["path",{d:"M5 21v-7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PR=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12.667 8 10 12h4l-2.667 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OR=[["rect",{width:"7",height:"12",x:"2",y:"6",rx:"1"}],["path",{d:"M13 8.32a7.43 7.43 0 0 1 0 7.36"}],["path",{d:"M16.46 6.21a11.76 11.76 0 0 1 0 11.58"}],["path",{d:"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RR=[["path",{d:"M10 22H6a2 2 0 01-2-2V4a2 2 0 012-2h10a2 2 0 012 2v4"}],["path",{d:"M11 18h.01"}],["path",{d:"M22 22a4 4 0 00-8 0"}],["circle",{cx:"18",cy:"15",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ER=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12 18h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zR=[["path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}],["circle",{cx:"10",cy:"13",r:"8"}],["path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}],["path",{d:"M18 3 19.1 5.2"}],["path",{d:"M22 3 20.9 5.2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TR=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DR=[["path",{d:"M10.5 2v4"}],["path",{d:"M14 2H7a2 2 0 0 0-2 2"}],["path",{d:"M19.29 14.76A6.67 6.67 0 0 1 17 11a6.6 6.6 0 0 1-2.29 3.76c-1.15.92-1.71 2.04-1.71 3.19 0 2.22 1.8 4.05 4 4.05s4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19"}],["path",{d:"M9.607 21H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h7V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kR=[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"}],["path",{d:"M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"}],["path",{d:"M4 18v2"}],["path",{d:"M20 18v2"}],["path",{d:"M12 4v9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BR=[["path",{d:"M11 2h2"}],["path",{d:"m14.28 14-4.56 8"}],["path",{d:"m21 22-1.558-4H4.558"}],["path",{d:"M3 10v2"}],["path",{d:"M6.245 15.04A2 2 0 0 1 8 14h12a1 1 0 0 1 .864 1.505l-3.11 5.457A2 2 0 0 1 16 22H4a1 1 0 0 1-.863-1.506z"}],["path",{d:"M7 2a4 4 0 0 1-4 4"}],["path",{d:"m8.66 7.66 1.41 1.41"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FR=[["path",{d:"M11.248 3c.273.1.808.53.747 1.36-.05.83-.938 1.2-.989 2.02-.06.78.333 1.24.727 1.62"}],["path",{d:"M16.252 3c.268.1.794.53.745 1.36-.06.83-.923 1.2-.993 2.02-.05.78.338 1.24.725 1.62"}],["path",{d:"M19.5 12 22 6"}],["path",{d:"M4 12a1 1 0 00-.99 1.133A9 9 0 0012 21a9 9 0 008.99-7.867A1 1 0 0020 12z"}],["path",{d:"M6.252 3c.268.1.794.53.745 1.36-.06.83-.923 1.2-.993 2.02-.05.78.338 1.24.735 1.62"}],["path",{d:"M7 21h10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qR=[["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UR=[["path",{d:"M12 18v4"}],["path",{d:"M2 14.499a5.5 5.5 0 0 0 9.591 3.675.6.6 0 0 1 .818.001A5.5 5.5 0 0 0 22 14.5c0-2.29-1.5-4-3-5.5l-5.492-5.312a2 2 0 0 0-3-.02L5 8.999c-1.5 1.5-3 3.2-3 5.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NR=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X5=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IR=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M12 6h.01"}],["circle",{cx:"12",cy:"14",r:"4"}],["path",{d:"M12 14h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jR=[["path",{d:"M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"}],["path",{d:"M19.8 17.8a7.5 7.5 0 0 0 .003-10.603"}],["path",{d:"M17 15a3.5 3.5 0 0 0-.025-4.975"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZR=[["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}],["path",{d:"M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $R=[["path",{d:"m20 15-5.5 5.5L12 18"}],["path",{d:"m4 16 6-12 5.115 10.23"}],["path",{d:"M6 12h8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WR=[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}],["path",{d:"M5 17A12 12 0 0 1 17 5"}],["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GR=[["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M5 17A12 12 0 0 1 17 5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KR=[["path",{d:"M17 13.44 4.442 17.082A2 2 0 0 0 4.982 21H19a2 2 0 0 0 .558-3.921l-1.115-.32A2 2 0 0 1 17 14.837V7.66"}],["path",{d:"m7 10.56 12.558-3.642A2 2 0 0 0 19.018 3H5a2 2 0 0 0-.558 3.921l1.115.32A2 2 0 0 1 7 9.163v7.178"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XR=[["path",{d:"M16 3h5v5"}],["path",{d:"M8 3H3v5"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"}],["path",{d:"m15 9 6-6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JR=[["path",{d:"m15 10.42 4.8-5.07"}],["path",{d:"M19 18h3"}],["path",{d:"M9.5 22 21.414 9.415A2 2 0 0 0 21.2 6.4l-5.61-4.208A1 1 0 0 0 14 3v2a2 2 0 0 1-1.394 1.906L8.677 8.053A1 1 0 0 0 8 9c-.155 6.393-2.082 9-4 9a2 2 0 0 0 0 4h14"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QR=[["path",{d:"M15.295 19.562 16 22"}],["path",{d:"m17 16 3.758 2.098"}],["path",{d:"m19 12.5 3.026-.598"}],["path",{d:"M7.61 6.3a3 3 0 0 0-3.92 1.3l-1.38 2.79a3 3 0 0 0 1.3 3.91l6.89 3.597a1 1 0 0 0 1.342-.447l3.106-6.211a1 1 0 0 0-.447-1.341z"}],["path",{d:"M8 9V2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YR=[["path",{d:"M3 3h.01"}],["path",{d:"M7 5h.01"}],["path",{d:"M11 7h.01"}],["path",{d:"M3 7h.01"}],["path",{d:"M7 9h.01"}],["path",{d:"M3 11h.01"}],["rect",{width:"4",height:"4",x:"15",y:"5"}],["path",{d:"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"}],["path",{d:"m13 14 8-2"}],["path",{d:"m13 19 8-2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=[["path",{d:"M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"}],["path",{d:"M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"}],["path",{d:"M5 21h14"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J5=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M17 12h-2l-2 5-2-10-2 5H7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q5=[["path",{d:"M15 15H9l6-6"}],["path",{d:"M9 15V9"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y5=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m12 8-4 4 4 4"}],["path",{d:"M16 12H8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t4=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a4=[["path",{d:"M15 15 9 9"}],["path",{d:"M9 15h6V9"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e4=[["path",{d:"M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6"}],["path",{d:"m3 21 9-9"}],["path",{d:"M9 21H3v-6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h4=[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}],["path",{d:"m21 21-9-9"}],["path",{d:"M21 15v6h-6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d4=[["path",{d:"M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6"}],["path",{d:"m3 3 9 9"}],["path",{d:"M3 9V3h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r4=[["path",{d:"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"}],["path",{d:"m21 3-9 9"}],["path",{d:"M15 3h6v6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=[["path",{d:"m10 16 4-4-4-4"}],["path",{d:"M3 12h11"}],["path",{d:"M3 8V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=[["path",{d:"M10 12h11"}],["path",{d:"m17 16 4-4-4-4"}],["path",{d:"M21 6.344V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.344"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c4=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}],["path",{d:"m12 16 4-4-4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n4=[["path",{d:"M15 15 9 9"}],["path",{d:"M9 15V9h6"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p4=[["path",{d:"M15 15V9H9"}],["path",{d:"m9 15 6-6"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o4=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i4=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 8v8"}],["path",{d:"m8.5 14 7-4"}],["path",{d:"m8.5 10 7 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s4=[["path",{d:"M11 3v7.751a.25.25 0 00.407.195l2.28-1.834a.5.5 0 01.627 0l2.28 1.834a.25.25 0 00.406-.195V3"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l4=[["path",{d:"M14 21h1"}],["path",{d:"m17 17-2.18-2.18"}],["path",{d:"M5 21a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2"}],["path",{d:"M9 21h1"}],["path",{d:"M9.56 14.44 17 7"}],["path",{d:"M9.56 9.56 12 12"}],["circle",{cx:"8.5",cy:"15.5",r:"1.5"}],["circle",{cx:"8.5",cy:"8.5",r:"1.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M4=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"}],["path",{d:"M12 20v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 2v2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u4=[["path",{d:"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f4=[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"}],["path",{d:"m9 11 3 3L22 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 8h7"}],["path",{d:"M8 12h6"}],["path",{d:"M11 16h5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 9-5.5 5.5L8 12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m4=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 10-4 4-4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x4=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m14 16-4-4 4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y4=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m10 8 4 4-4 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g4=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m8 14 4-4 4 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hE=[["path",{d:"M10 9L7 12L10 15"}],["path",{d:"M16 9L13 12L16 15"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=[["path",{d:"M9 14L12 17L15 14"}],["path",{d:"M9 8L12 11L15 8"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rE=[["path",{d:"M14 15L17 12L14 9"}],["path",{d:"M8 15L11 12L8 9"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=[["path",{d:"M15 10L12 7L9 10"}],["path",{d:"M15 16L12 13L9 16"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A4=[["path",{d:"m10 9-3 3 3 3"}],["path",{d:"m14 15 3-3-3-3"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=[["path",{d:"M10 9.5 8 12l2 2.5"}],["path",{d:"M14 21h1"}],["path",{d:"m14 9.5 2 2.5-2 2.5"}],["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"}],["path",{d:"M9 21h1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=[["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"}],["path",{d:"M9 21h1"}],["path",{d:"M14 21h1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w4=[["path",{d:"M8 7v7"}],["path",{d:"M12 7v4"}],["path",{d:"M16 7v9"}],["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M9 3h1"}],["path",{d:"M14 3h1"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 9v1"}],["path",{d:"M21 14v1"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M14 21h1"}],["path",{d:"M9 21h1"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M3 14v1"}],["path",{d:"M3 9v1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H4=[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}],["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h2"}],["path",{d:"M14 3h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v2"}],["path",{d:"M3 14v1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oE=[["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 3h1"}],["path",{d:"M14 21h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v1"}],["path",{d:"M3 14v1"}],["path",{d:"M21 14v1"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=[["path",{d:"M14 21h1"}],["path",{d:"M14 3h1"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 14v1"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M21 9v1"}],["path",{d:"M3 14v1"}],["path",{d:"M3 9v1"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M7 12h10"}],["path",{d:"M7 16h6"}],["path",{d:"M7 8h8"}],["path",{d:"M9 21h1"}],["path",{d:"M9 3h1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=[["path",{d:"M14 21h1"}],["path",{d:"M21 14v1"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M21 9v1"}],["path",{d:"M3 14v1"}],["path",{d:"M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"}],["path",{d:"M3 9v1"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 21h1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sE=[["path",{d:"M14 3h1"}],["path",{d:"m16 16 5 5"}],["path",{d:"M19 3a2 2 0 012 2"}],["path",{d:"m21 16-5 5"}],["path",{d:"M21 9v1"}],["path",{d:"M3 14v1"}],["path",{d:"M3 9v1"}],["path",{d:"M5 21a2 2 0 01-2-2"}],["path",{d:"M5 3a2 2 0 00-2 2"}],["path",{d:"M9 21h1"}],["path",{d:"M9 3h1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=[["path",{d:"M14 21h1"}],["path",{d:"M14 3h1"}],["path",{d:"M19 3a2 2 0 012 2"}],["path",{d:"M21 14v1"}],["path",{d:"M21 19a2 2 0 01-2 2"}],["path",{d:"M21 9v1"}],["path",{d:"M3 14v1"}],["path",{d:"M3 9v1"}],["path",{d:"M5 21a2 2 0 01-2-2"}],["path",{d:"M5 3a2 2 0 00-2 2"}],["path",{d:"m9 15 6-6"}],["path",{d:"M9 21h1"}],["path",{d:"M9 3h1"}],["path",{d:"m9 9 6 6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C4=[["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 3h1"}],["path",{d:"M14 21h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v1"}],["path",{d:"M3 14v1"}],["path",{d:"M21 14v1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 7H7v5"}],["path",{d:"M12 17h5v-5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V4=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"12",r:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S4=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L4=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 10h10"}],["path",{d:"M7 14h10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=[["path",{d:"M12 7v4"}],["path",{d:"M12.354 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v7.354"}],["path",{d:"M15 18h6"}],["path",{d:"M16 7v4.536"}],["path",{d:"M18 21v-6"}],["path",{d:"M8 7v7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b4=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"}],["path",{d:"M9 11.2h5.7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 7v7"}],["path",{d:"M12 7v4"}],["path",{d:"M16 7v9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=[["path",{d:"m8 16 3.453-7.648a.6.6 0 0 1 1.094 0L16 16"}],["path",{d:"M15 14H9"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=[["path",{d:"M9 12h4.846a2.24 2.24 0 011.523.586 2 2 0 01.001 2.828 2.24 2.24 0 01-1.524.586H9.5a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5H13a2 2 0 010 4"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=[["path",{d:"M15 9.354a4 4 0 1 0 0 5.292"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=[["path",{d:"M15 8H9.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5H15"}],["path",{d:"M9 12h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=[["path",{d:"M12 8a4 4 0 010 8H9.412A.41.41 0 019 15.588V8.412A.41.41 0 019.412 8z"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=[["path",{d:"M9 16V8.5a.5.5 0 0 1 .5-.5H15"}],["path",{d:"M9 12h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE=[["path",{d:"M12.5 12H15v2.268a.88.88 0 01-.263.65A4 4 0 1112 8h2.5"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=[["path",{d:"M12 16V8"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=[["path",{d:"M9 16V8"}],["path",{d:"M15 16V8"}],["path",{d:"M9 12h6"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=[["path",{d:"M15 8v5a3 3 0 1 1-6 0"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=[["path",{d:"M9 16V8"}],["path",{d:"m11 12 4 4"}],["path",{d:"m15 8-6 6"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=[["path",{d:"M8 16.001v-7.5a.5.5 0 0 1 .9-.3l2.7 3.599a.5.5 0 0 0 .8 0l2.7-3.6a.5.5 0 0 1 .9.3v7.501"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=[["path",{d:"M9 8v7.5a.5.5 0 0 0 .5.5H15"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=[["path",{d:"M9 16V8.576a.496.496 0 01.937-.243l4.126 7.43A.496.496 0 0015 15.52V8"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=[["circle",{cx:"12",cy:"12",r:"4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=[["path",{d:"M12 12h1a2 2 0 000-4H9.5a.5.5 0 00-.5.5V9"}],["path",{d:"M15.343 21H5a2 2 0 01-2-2V8.657"}],["path",{d:"M22 22 2 2"}],["path",{d:"M3.586 3.586A2 2 0 015 3h14a2 2 0 012 2v14a2 2 0 01-.586 1.414"}],["path",{d:"M9 14.657V16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=[["path",{d:"M9 12h4a2 2 0 0 0 0-4H9.5a.5.5 0 0 0-.5.5V16"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"m16 16-2.5-2.5"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=[["path",{d:"m11 12 4 4"}],["path",{d:"M9 12h4a2 2 0 0 0 0-4H9.5a.5.5 0 0 0-.5.5V16"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=[["path",{d:"M14.5 8H11a2 2 0 100 4h2a2 2 0 110 4H9"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=[["path",{d:"M12 16V8"}],["path",{d:"M9 8h6"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=[["path",{d:"M15 8v5a3 3 0 1 1-6 0V8"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=[["path",{d:"m9 8 2.525 7.66a.5.5 0 0 0 .95 0L15 8"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=[["path",{d:"m16 8-1.591 7.598a.497.497 0 01-.97.038l-.96-3.276a.5.5 0 00-.959 0l-.96 3.276a.496.496 0 01-.969-.038L8 8"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=[["path",{d:"m9 16 6-8"}],["path",{d:"m9 8 6 8"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=[["path",{d:"m9 8 3 4 3-4"}],["path",{d:"M12 12v4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=[["path",{d:"M9 8h5.501a.5.5 0 0 1 .37.836L9.13 15.164A.5.5 0 0 0 9.5 16H15"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P4=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7v10"}],["path",{d:"M11 7v10"}],["path",{d:"m15 7 2 10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O4=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 8h10"}],["path",{d:"M7 12h10"}],["path",{d:"M7 16h10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E4=[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}],["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=[["path",{d:"M20.4 20.4a2 2 0 01-1.4.6H5a2 2 0 01-2-2V5a2 2 0 01.59-1.41"}],["path",{d:"M21 15.3V5a2 2 0 00-2-2H8.7"}],["path",{d:"M22 22 2 2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=[["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}],["path",{d:"M8 17h8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=[["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}],["path",{d:"M17 16V8"}],["path",{d:"M7 16V8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=[["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}],["path",{d:"M7 16V8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=[["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}],["path",{d:"M17 16V8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=[["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}],["path",{d:"M8 7h8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=[["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}],["path",{d:"M8 17h8"}],["path",{d:"M8 7h8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=[["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}],["path",{d:"M14 17h-4"}],["path",{d:"M14 7h-4"}],["path",{d:"M17 14v-4"}],["path",{d:"M7 14v-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z4=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T4=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7h10"}],["path",{d:"M10 7v10"}],["path",{d:"M16 17a2 2 0 0 1-2-2V7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 12H9.5a2.5 2.5 0 0 1 0-5H17"}],["path",{d:"M12 7v10"}],["path",{d:"M16 7v10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k4=[["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}],["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B4=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F4=[["path",{d:"M12 7v4"}],["path",{d:"M7.998 9.003a5 5 0 1 0 8-.005"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=[["path",{d:"M7 12h2l2 5 2-10h4"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=[["path",{d:"M21 11a8 8 0 0 0-8-8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q4=[["path",{d:"m17 17-2.18-2.18"}],["path",{d:"M9.56 14.44 17 7"}],["path",{d:"M9.56 9.56 12 12"}],["circle",{cx:"8.5",cy:"15.5",r:"1.5"}],["circle",{cx:"8.5",cy:"8.5",r:"1.5"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U4=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M16 8.9V7H8l4 5-4 5h8v-1.9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N4=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=[["path",{d:"M11 15H7"}],["path",{d:"M15.41 2.49a.6.6 0 011.18 0l.63 3.334a1.2 1.2 0 00.956.955l3.334.631a.6.6 0 010 1.18l-3.334.63a1.2 1.2 0 00-.955.956l-.631 3.334a.6.6 0 01-1.18 0l-.63-3.334a1.2 1.2 0 00-.956-.955L10.49 8.59a.6.6 0 010-1.18l3.334-.63a1.2 1.2 0 00.955-.956z"}],["path",{d:"M21 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h6"}],["path",{d:"M9 13v4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=[["path",{d:"M12 2v20"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"}],["path",{d:"M8 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j4=[["path",{d:"M2 12h20"}],["path",{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"}],["path",{d:"M3 8V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=[["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=[["path",{d:"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"}],["path",{d:"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tz=[["path",{d:"M11.035 7.69a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const az=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z4=[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ez=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 8h8"}],["path",{d:"M7 12h10"}],["path",{d:"M7 16h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $4=[["path",{d:"M18 21a6 6 0 0 0-12 0"}],["circle",{cx:"12",cy:"11",r:"4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W4=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G4=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hz=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dz=[["path",{d:"M16 12v2a2 2 0 0 1-2 2H9a1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h0"}],["path",{d:"M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-5a2 2 0 0 0-2 2v2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rz=[["path",{d:"M10 22a2 2 0 0 1-2-2"}],["path",{d:"M14 2a2 2 0 0 1 2 2"}],["path",{d:"M16 22h-2"}],["path",{d:"M2 10V8"}],["path",{d:"M2 4a2 2 0 0 1 2-2"}],["path",{d:"M20 8a2 2 0 0 1 2 2"}],["path",{d:"M22 14v2"}],["path",{d:"M22 20a2 2 0 0 1-2 2"}],["path",{d:"M4 16a2 2 0 0 1-2-2"}],["path",{d:"M8 10a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1z"}],["path",{d:"M8 2h2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cz=[["path",{d:"M10 22a2 2 0 0 1-2-2"}],["path",{d:"M16 22h-2"}],["path",{d:"M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z"}],["path",{d:"M20 8a2 2 0 0 1 2 2"}],["path",{d:"M22 14v2"}],["path",{d:"M22 20a2 2 0 0 1-2 2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nz=[["path",{d:"M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 0 1 1h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-3a1 1 0 0 0-1-1z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pz=[["path",{d:"M13.77 3.043a34 34 0 0 0-3.54 0"}],["path",{d:"M13.771 20.956a33 33 0 0 1-3.541.001"}],["path",{d:"M20.18 17.74c-.51 1.15-1.29 1.93-2.439 2.44"}],["path",{d:"M20.18 6.259c-.51-1.148-1.291-1.929-2.44-2.438"}],["path",{d:"M20.957 10.23a33 33 0 0 1 0 3.54"}],["path",{d:"M3.043 10.23a34 34 0 0 0 .001 3.541"}],["path",{d:"M6.26 20.179c-1.15-.508-1.93-1.29-2.44-2.438"}],["path",{d:"M6.26 3.82c-1.149.51-1.93 1.291-2.44 2.44"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oz=[["path",{d:"M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iz=[["path",{d:"M15.236 22a3 3 0 0 0-2.2-5"}],["path",{d:"M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4"}],["path",{d:"M18 13h.01"}],["path",{d:"M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sz=[["path",{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-6 0c0 2 1 2 1 3.5V13"}],["path",{d:"M20 15.5a2.5 2.5 0 0 0-2.5-2.5h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z"}],["path",{d:"M5 22h14"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lz=[["path",{d:"m19.06 12.501 2.78-2.707a.53.53 0 0 0-.294-.905l-5.166-.755a2.1 2.1 0 0 1-1.595-1.16l-2.31-4.68a.53.53 0 0 0-.95.001L9.216 6.974a2.1 2.1 0 0 1-1.597 1.16l-5.165.755a.53.53 0 0 0-.294.906l3.736 3.637a2.1 2.1 0 0 1 .611 1.879l-.88 5.139a.53.53 0 0 0 .769.56l4.617-2.428.027-.014"}],["path",{d:"m15 18 2 2 4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mz=[["path",{d:"M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uz=[["path",{d:"M15 18h6"}],["path",{d:"M17.688 14a2.1 2.1 0 0 1 .416-.568l3.736-3.638a.53.53 0 0 0-.294-.905l-5.166-.755a2.1 2.1 0 0 1-1.595-1.16l-2.31-4.68a.53.53 0 0 0-.95.001L9.216 6.974a2.1 2.1 0 0 1-1.597 1.16l-5.165.755a.53.53 0 0 0-.294.906l3.736 3.637a2.1 2.1 0 0 1 .611 1.879l-.88 5.139a.53.53 0 0 0 .769.56l4.617-2.428.027-.014"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fz=[["path",{d:"m10.344 4.688 1.181-2.393a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.237 3.152"}],["path",{d:"m17.945 17.945.43 2.505a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a8 8 0 0 0 .4-.099"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vz=[["path",{d:"M11.013 18.582 6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904L20 11.5"}],["path",{d:"M15 18h6"}],["path",{d:"M18 15v6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mz=[["path",{d:"m15.5 15.5 5 5"}],["path",{d:"m20.063 11.525 1.777-1.731a.53.53 0 0 0-.294-.905l-5.166-.755a2.1 2.1 0 0 1-1.595-1.16l-2.31-4.68a.53.53 0 0 0-.95.001L9.216 6.974a2.1 2.1 0 0 1-1.597 1.16l-5.165.755a.53.53 0 0 0-.294.906l3.736 3.637a2.1 2.1 0 0 1 .611 1.879l-.88 5.139a.53.53 0 0 0 .769.56l4.617-2.428a2.1 2.1 0 0 1 .987-.243 2 2 0 0 1 .132.004"}],["path",{d:"m20.5 15.5-5 5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xz=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yz=[["path",{d:"M13.971 4.285A2 2 0 0 1 17 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"}],["path",{d:"M21 20V4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gz=[["path",{d:"M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"}],["path",{d:"M3 4v16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Az=[["path",{d:"M11 2v2"}],["path",{d:"M5 2v2"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3"}],["circle",{cx:"20",cy:"10",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wz=[["path",{d:"M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"}],["path",{d:"M15 3v5a1 1 0 0 0 1 1h5"}],["path",{d:"M8 13h.01"}],["path",{d:"M16 13h.01"}],["path",{d:"M10 16s.8 1 2 1c1.3 0 2-1 2-1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hz=[["path",{d:"m15 19 2 2 4-4"}],["path",{d:"M15 3v5a1 1 0 0 0 1 1h5"}],["path",{d:"M21 13V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cz=[["path",{d:"M15 3v5a1 1 0 0 0 1 1h5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M3.586 3.586A2 2 0 0 0 3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.414-.586"}],["path",{d:"M8.656 3H15a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 21 9v6.344"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vz=[["path",{d:"M15 3v5a1 1 0 0 0 1 1h5"}],["path",{d:"M21 14V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.35"}],["path",{d:"M21 18h-6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sz=[["path",{d:"M15 3v5a1 1 0 0 0 1 1h5"}],["path",{d:"M18 15v6"}],["path",{d:"M21 12.356V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.355"}],["path",{d:"M21 18h-6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lz=[["path",{d:"M15 3v5a1 1 0 0 0 1 1h5"}],["path",{d:"m16 16 5 5"}],["path",{d:"M21 12V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7"}],["path",{d:"m21 16-5 5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bz=[["path",{d:"M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"}],["path",{d:"M15 3v5a1 1 0 0 0 1 1h5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _z=[["path",{d:"M10 8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 16 14v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z"}],["path",{d:"M10 8v5a1 1 0 0 0 1 1h5"}],["path",{d:"M8 4a2 2 0 0 1 2-2h6a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 22 8v6a2 2 0 0 1-2 2"}],["path",{d:"M16 2v5a1 1 0 0 0 1 1h5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pz=[["path",{d:"M11.264 2.205A4 4 0 0 0 6.42 4.211l-4 8a4 4 0 0 0 1.359 5.117l6 4a4 4 0 0 0 4.438 0l6-4a4 4 0 0 0 1.576-4.592l-2-6a4 4 0 0 0-2.53-2.53z"}],["path",{d:"M11.99 22 14 12l7.822 3.184"}],["path",{d:"M14 12 8.47 2.302"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oz=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rz=[["rect",{width:"20",height:"6",x:"2",y:"4",rx:"2"}],["rect",{width:"20",height:"6",x:"2",y:"14",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ez=[["rect",{width:"6",height:"20",x:"4",y:"2",rx:"2"}],["rect",{width:"6",height:"20",x:"14",y:"2",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zz=[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tz=[["path",{d:"m4 5 8 8"}],["path",{d:"m12 5-8 8"}],["path",{d:"M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dz=[["path",{d:"M15 4H7"}],["path",{d:"m18 16 3 3-3 3"}],["path",{d:"M3 4v13a2 2 0 0 0 2 2h16"}],["path",{d:"M7 14h7"}],["path",{d:"M7 9h12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kz=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 4h.01"}],["path",{d:"M20 12h.01"}],["path",{d:"M12 20h.01"}],["path",{d:"M4 12h.01"}],["path",{d:"M17.657 6.343h.01"}],["path",{d:"M17.657 17.657h.01"}],["path",{d:"M6.343 17.657h.01"}],["path",{d:"M6.343 6.343h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bz=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 3v1"}],["path",{d:"M12 20v1"}],["path",{d:"M3 12h1"}],["path",{d:"M20 12h1"}],["path",{d:"m18.364 5.636-.707.707"}],["path",{d:"m6.343 17.657-.707.707"}],["path",{d:"m5.636 5.636.707.707"}],["path",{d:"m17.657 17.657.707.707"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fz=[["path",{d:"M12 2v2"}],["path",{d:"M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715"}],["path",{d:"M16 12a4 4 0 0 0-4-4"}],["path",{d:"m19 5-1.256 1.256"}],["path",{d:"M20 12h2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qz=[["path",{d:"M10 21v-1"}],["path",{d:"M10 4V3"}],["path",{d:"M10 9a3 3 0 0 0 0 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6 1.5-3H22"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h1"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"m3.64 18.36.7-.7"}],["path",{d:"m4.34 6.34-.7-.7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uz=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nz=[["path",{d:"M12 2v8"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m8 6 4-4 4 4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iz=[["path",{d:"M12 10V2"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m16 6-4 4-4-4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jz=[["path",{d:"m4 19 8-8"}],["path",{d:"m12 19-8-8"}],["path",{d:"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zz=[["path",{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"}],["path",{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"}],["path",{d:"M 7 17h.01"}],["path",{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $z=[["path",{d:"M10 10h7"}],["path",{d:"M10 20V5a1 1 0 011-1h7"}],["path",{d:"M6 16h9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wz=[["path",{d:"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"}],["path",{d:"M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m18 22-3-3 3-3"}],["path",{d:"m6 2 3 3-3 3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gz=[["path",{d:"m11 19-6-6"}],["path",{d:"m5 21-2-2"}],["path",{d:"m8 16-4 4"}],["path",{d:"M9.5 17.5 20.414 6.586A2 2 0 0021 5.172V3h-2.172a2 2 0 00-1.414.586L6.5 14.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kz=[["path",{d:"m13 19 6-6"}],["path",{d:"M14.5 17.5 3.586 6.586A2 2 0 013 5.172V3h2.172a2 2 0 011.414.586L17.5 14.5"}],["path",{d:"m14.828 6.172 2.586-2.586A2 2 0 0118.828 3H21v2.172a2 2 0 01-.586 1.414l-2.586 2.586"}],["path",{d:"m16 16 4 4"}],["path",{d:"m19 21 2-2"}],["path",{d:"m5 14 4 4"}],["path",{d:"m5 21-2-2"}],["path",{d:"M7.5 16.5 4 20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xz=[["path",{d:"m18 2 4 4"}],["path",{d:"m17 7 3-3"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"}],["path",{d:"m9 11 4 4"}],["path",{d:"m5 19-3 3"}],["path",{d:"m14 4 6 6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jz=[["path",{d:"M3 9h18"}],["path",{d:"M9 3v18"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qz=[["path",{d:"M12 21v-6"}],["path",{d:"M12 9V3"}],["path",{d:"M3 15h18"}],["path",{d:"M3 9h18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yz=[["path",{d:"M12 15V9"}],["path",{d:"M3 15h18"}],["path",{d:"M3 9h18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tT=[["path",{d:"M14 14v2"}],["path",{d:"M14 20v2"}],["path",{d:"M14 2v2"}],["path",{d:"M14 8v2"}],["path",{d:"M2 15h8"}],["path",{d:"M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2"}],["path",{d:"M2 9h8"}],["path",{d:"M22 15h-4"}],["path",{d:"M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"}],["path",{d:"M22 9h-4"}],["path",{d:"M5 3v18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=[["path",{d:"M16 5H3"}],["path",{d:"M16 12H3"}],["path",{d:"M16 19H3"}],["path",{d:"M21 5h.01"}],["path",{d:"M21 12h.01"}],["path",{d:"M21 19h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=[["path",{d:"M15 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 9H3"}],["path",{d:"M21 15H3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hT=[["path",{d:"M12 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dT=[["path",{d:"M14 10h2"}],["path",{d:"M15 22v-8"}],["path",{d:"M15 2v4"}],["path",{d:"M2 10h2"}],["path",{d:"M20 10h2"}],["path",{d:"M3 19h18"}],["path",{d:"M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6"}],["path",{d:"M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2"}],["path",{d:"M8 10h2"}],["path",{d:"M9 22v-8"}],["path",{d:"M9 2v4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=[["rect",{width:"10",height:"14",x:"3",y:"8",rx:"2"}],["path",{d:"M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"}],["path",{d:"M8 18h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=[["circle",{cx:"7",cy:"7",r:"5"}],["circle",{cx:"17",cy:"17",r:"5"}],["path",{d:"M12 17h10"}],["path",{d:"m3.46 10.54 7.08-7.08"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pT=[["path",{d:"M16 13h6"}],["path",{d:"m16.5 6.5-3.914-3.914A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l1.79-1.79"}],["path",{d:"M19 10v6"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=[["path",{d:"m16.5 6.5-3.914-3.914A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.43 2.43 0 0 0 3.42 0l1.79-1.79"}],["path",{d:"m16.5 10.5 5 5"}],["path",{d:"m21.5 10.5-5 5"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iT=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sT=[["path",{d:"M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z"}],["path",{d:"M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193"}],["circle",{cx:"10.5",cy:"6.5",r:".5",fill:"currentColor"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lT=[["path",{d:"M4 4v16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MT=[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uT=[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fT=[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}],["path",{d:"M19 4v16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vT=[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}],["path",{d:"M19 4v16"}],["path",{d:"M22 6 2 18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mT=[["circle",{cx:"17",cy:"4",r:"2"}],["path",{d:"M15.59 5.41 5.41 15.59"}],["circle",{cx:"4",cy:"17",r:"2"}],["path",{d:"M12 22s-4-9-1.5-11.5S22 12 22 12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xT=[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"}],["path",{d:"m13.56 11.747 4.332-.924"}],["path",{d:"m16 21-3.105-6.21"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"}],["path",{d:"m6.158 8.633 1.114 4.456"}],["path",{d:"m8 21 3.105-6.21"}],["circle",{cx:"12",cy:"13",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yT=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"6"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gT=[["circle",{cx:"4",cy:"4",r:"2"}],["path",{d:"m14 5 3-3 3 3"}],["path",{d:"m14 10 3-3 3 3"}],["path",{d:"M17 14V2"}],["path",{d:"M17 14H7l-5 8h20Z"}],["path",{d:"M8 14v8"}],["path",{d:"m9 14 5 8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AT=[["path",{d:"M3.5 21 14 3"}],["path",{d:"M20.5 21 10 3"}],["path",{d:"M15.5 21 12 15l-3.5 6"}],["path",{d:"M2 21h20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wT=[["path",{d:"M12 19h8"}],["path",{d:"m4 17 6-6-6-6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K4=[["path",{d:"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3"}],["path",{d:"m16 2 6 6"}],["path",{d:"M12 16H4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2"}],["path",{d:"M8.5 2h7"}],["path",{d:"M14.5 16h-5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CT=[["path",{d:"M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2"}],["path",{d:"M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2"}],["path",{d:"M3 2h7"}],["path",{d:"M14 2h7"}],["path",{d:"M9 16H4"}],["path",{d:"M20 16h-5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X4=[["path",{d:"M21 5H3"}],["path",{d:"M17 12H7"}],["path",{d:"M19 19H5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J4=[["path",{d:"M21 5H3"}],["path",{d:"M21 12H9"}],["path",{d:"M21 19H7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VT=[["path",{d:"M3 5h18"}],["path",{d:"M3 12h18"}],["path",{d:"M7 19h10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ST=[["path",{d:"M3 5h18"}],["path",{d:"M3 12h18"}],["path",{d:"M11 19h10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LT=[["path",{d:"M3 5h18"}],["path",{d:"M3 12h18"}],["path",{d:"M3 19h10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=[["path",{d:"M3 5h18"}],["path",{d:"M3 12h18"}],["path",{d:"M3 19h18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=[["path",{d:"M21 5H3"}],["path",{d:"M15 12H3"}],["path",{d:"M17 19H3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bT=[["path",{d:"M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6"}],["path",{d:"M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"}],["path",{d:"M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"}],["path",{d:"M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1"}],["path",{d:"M9 6v12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _T=[["path",{d:"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1"}],["path",{d:"M7 22h1a4 4 0 0 0 4-4"}],["path",{d:"M7 2h1a4 4 0 0 1 4 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y4=[["path",{d:"M15 5h6"}],["path",{d:"M15 12h6"}],["path",{d:"M3 19h18"}],["path",{d:"m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12"}],["path",{d:"M3.92 10h6.16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PT=[["path",{d:"M17 5H3"}],["path",{d:"M21 12H8"}],["path",{d:"M21 19H8"}],["path",{d:"M3 12v7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=[["path",{d:"M21 5H3"}],["path",{d:"M10 12H3"}],["path",{d:"M10 19H3"}],["circle",{cx:"17",cy:"15",r:"3"}],["path",{d:"m21 19-1.9-1.9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RT=[["path",{d:"M2 10s3-3 3-8"}],["path",{d:"M22 10s-3-3-3-8"}],["path",{d:"M10 2c0 4.4-3.6 8-8 8"}],["path",{d:"M14 2c0 4.4 3.6 8 8 8"}],["path",{d:"M2 10s2 2 2 5"}],["path",{d:"M22 10s-2 2-2 5"}],["path",{d:"M8 15h8"}],["path",{d:"M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"}],["path",{d:"M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=[["path",{d:"m16 16-3 3 3 3"}],["path",{d:"M3 12h14.5a1 1 0 0 1 0 7H13"}],["path",{d:"M3 19h6"}],["path",{d:"M3 5h18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ET=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"M10.585 15H10"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=[["path",{d:"M12 2v2"}],["path",{d:"M12 8a4 4 0 0 0-1.645 7.647"}],["path",{d:"M2 12h2"}],["path",{d:"M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m6.34 17.66-1.41 1.41"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TT=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DT=[["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"}],["path",{d:"M17 14V2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kT=[["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"}],["path",{d:"M7 10v12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=[["path",{d:"M12 2v20"}],["path",{d:"m21 16-5 5"}],["path",{d:"m21 21-5-5"}],["path",{d:"M22 12H2"}],["path",{d:"M8 3 3 8"}],["path",{d:"M8 8 3 3"}],["circle",{cx:"18.5",cy:"5.5",r:"2.5"}],["circle",{cx:"5.5",cy:"18.5",r:"2.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M9 12h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"m9 12 2 2 4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UT=[["path",{d:"M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M9 9h.01"}],["path",{d:"m15 9-6 6"}],["path",{d:"M15 15h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NT=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M9 12h6"}],["path",{d:"M12 9v6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IT=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"m9.5 14.5 5-5"}],["path",{d:"m9.5 9.5 5 5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"m9.5 14.5 5-5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M13 5v2"}],["path",{d:"M13 17v2"}],["path",{d:"M13 11v2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=[["path",{d:"M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12"}],["path",{d:"m12 13.5 3.794.506"}],["path",{d:"m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8"}],["path",{d:"M6 10V8"}],["path",{d:"M6 14v1"}],["path",{d:"M6 19v2"}],["rect",{x:"2",y:"8",width:"20",height:"13",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=[["path",{d:"m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8"}],["path",{d:"M6 10V8"}],["path",{d:"M6 14v1"}],["path",{d:"M6 19v2"}],["rect",{x:"2",y:"8",width:"20",height:"13",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=[["path",{d:"M4 12h.01"}],["path",{d:"M4 16h.01"}],["path",{d:"M4 20h.01"}],["path",{d:"M4 4h.01"}],["path",{d:"M4 8h.01"}],["path",{d:"M9.414 13.414a2 2 0 0 0 1.414.586H19a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-8.172a2 2 0 0 0-1.414.586L8 12z"}],["path",{d:"M9.414 21.414a2 2 0 0 0 1.414.586H19a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-8.172a2 2 0 0 0-1.414.586L8 20z"}],["path",{d:"M9.414 5.414A2 2 0 0 0 10.828 6H19a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-8.172a2 2 0 0 0-1.414.586L8 4z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=[["path",{d:"M10 2h4"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2"}],["path",{d:"m2 2 20 20"}],["path",{d:"M12 12v-2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=[["path",{d:"M10 2h4"}],["path",{d:"M12 14v-4"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"}],["path",{d:"M9 17H4v5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=[["line",{x1:"10",x2:"14",y1:"2",y2:"2"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11"}],["circle",{cx:"12",cy:"14",r:"8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=[["circle",{cx:"15",cy:"12",r:"3"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=[["circle",{cx:"9",cy:"12",r:"3"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tD=[["path",{d:"M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18"}],["path",{d:"M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aD=[["path",{d:"M11 10h2"}],["path",{d:"M19 21V10a7 7 0 00-14 0v11"}],["path",{d:"M2 21h20"}],["path",{d:"M9 14h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eD=[["path",{d:"M10 15h4"}],["path",{d:"m14.5 4.058.571-1.429a1 1 0 011.3-.558l5 2a1 1 0 01.549.534.88.88 0 01.01.765l-2.332 5.83"}],["path",{d:"M15.634 11a2 2 0 00-.186-.34l-1.17-1.757 1.31-1.656a2 2 0 00-2.109-3.165l-2.032.57-1.17-1.758a2 2 0 00-3.664 1.028l-.086 2.11-2.032.568a2 2 0 00-.155 3.8l1.617.6"}],["path",{d:"M4 12.006A1 1 0 014.994 11H19a1 1 0 011 1v7a2 2 0 01-2 2H6a2 2 0 01-2-2z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hD=[["path",{d:"M16 12v4"}],["path",{d:"M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"}],["path",{d:"M17 6a2 2 0 011.414.586l3 3A2 2 0 0122 11v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8a2 2 0 01.586-1.414l3-3A2 2 0 017 6z"}],["path",{d:"M2 14h20"}],["path",{d:"M8 12v4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dD=[["path",{d:"M15 11c-2 2-4 2-6 4l-7 7"}],["path",{d:"m22 4-7.414 7.414-2-2A2 2 0 0114 6c0-.512.196-1.024.586-1.414A2 2 0 0116 4a2 2 0 013.262-1.552l2.152 2.138"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rD=[["path",{d:"M10 3H8"}],["path",{d:"M14.586 11.414 22 4"}],["path",{d:"M15 11a8 8 0 01-.429.4"}],["path",{d:"m2 22 7-7c1.857-1.857 3.714-1.99 5.571-3.6l-1.985-1.986A2 2 0 0114 6a2 2 0 012-2 2 2 0 013.262-1.552l2.152 2.138"}],["path",{d:"M20 15v4"}],["path",{d:"M22 17h-4"}],["path",{d:"M4 5v4"}],["path",{d:"M6 7H2"}],["path",{d:"M9 2v2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cD=[["path",{d:"M21 4H3"}],["path",{d:"M18 8H6"}],["path",{d:"M19 12H9"}],["path",{d:"M16 16h-6"}],["path",{d:"M11 20H9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nD=[["ellipse",{cx:"12",cy:"11",rx:"3",ry:"2"}],["ellipse",{cx:"12",cy:"12.5",rx:"10",ry:"8.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pD=[["path",{d:"M12 20v-6"}],["path",{d:"M19.656 14H22"}],["path",{d:"M2 14h12"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"}],["path",{d:"M9.656 4H20a2 2 0 0 1 2 2v10.344"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oD=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M2 14h20"}],["path",{d:"M12 20v-6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iD=[["path",{d:"M22 7h-2"}],["path",{d:"M6.5 3h11A2.5 2.5 0 0 1 20 5.5V20a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V5.5a1 1 0 0 0-5 0V17a1 1 0 0 0 1 1h4"}],["path",{d:"M9 7H2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sD=[["path",{d:"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z"}],["path",{d:"M8 13v9"}],["path",{d:"M16 22v-9"}],["path",{d:"m9 6 1 7"}],["path",{d:"m15 6-1 7"}],["path",{d:"M12 6V2"}],["path",{d:"M13 2h-2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lD=[["rect",{width:"18",height:"12",x:"3",y:"8",rx:"1"}],["path",{d:"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3"}],["path",{d:"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MD=[["path",{d:"m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20"}],["path",{d:"M16 18h-5"}],["path",{d:"M18 5a1 1 0 0 0-1 1v5.573"}],["path",{d:"M3 4h8.129a1 1 0 0 1 .99.863L13 11.246"}],["path",{d:"M4 11V4"}],["path",{d:"M7 15h.01"}],["path",{d:"M8 10.1V4"}],["circle",{cx:"18",cy:"18",r:"2"}],["circle",{cx:"7",cy:"15",r:"5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uD=[["path",{d:"M16.05 10.966a5 2.5 0 0 1-8.1 0"}],["path",{d:"m16.923 14.049 4.48 2.04a1 1 0 0 1 .001 1.831l-8.574 3.9a2 2 0 0 1-1.66 0l-8.574-3.91a1 1 0 0 1 0-1.83l4.484-2.04"}],["path",{d:"M16.949 14.14a5 2.5 0 1 1-9.9 0L10.063 3.5a2 2 0 0 1 3.874 0z"}],["path",{d:"M9.194 6.57a5 2.5 0 0 0 5.61 0"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fD=[["path",{d:"M10 11.341V10"}],["path",{d:"M14 13v-3"}],["path",{d:"M18 17V8a2 2 0 00-2-2H4a2 2 0 00-2 2v7a2 2 0 002 2h2"}],["path",{d:"M22 15v1a1 1 0 01-1 1H10"}],["path",{d:"M6 11.341V10"}],["circle",{cx:"8",cy:"17",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vD=[["path",{d:"M2 22V12a10 10 0 1 1 20 0v10"}],["path",{d:"M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8"}],["path",{d:"M10 15h.01"}],["path",{d:"M14 15h.01"}],["path",{d:"M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z"}],["path",{d:"m9 19-2 3"}],["path",{d:"m15 19 2 3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mD=[["path",{d:"M8 3.1V7a4 4 0 0 0 8 0V3.1"}],["path",{d:"m9 15-1-1"}],["path",{d:"m15 15 1-1"}],["path",{d:"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z"}],["path",{d:"m8 19-2 3"}],["path",{d:"m16 19 2 3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xD=[["path",{d:"M2 17 17 2"}],["path",{d:"m2 14 8 8"}],["path",{d:"m5 11 8 8"}],["path",{d:"m8 8 8 8"}],["path",{d:"m11 5 8 8"}],["path",{d:"m14 2 8 8"}],["path",{d:"M7 22 22 7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2"}],["path",{d:"M4 11h16"}],["path",{d:"M12 3v8"}],["path",{d:"m8 19-2 3"}],["path",{d:"m18 22-2-3"}],["path",{d:"M8 15h.01"}],["path",{d:"M16 15h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yD=[["path",{d:"M12 16v6"}],["path",{d:"M14 20h-4"}],["path",{d:"M18 2h4v4"}],["path",{d:"m2 2 7.17 7.17"}],["path",{d:"M2 5.355V2h3.357"}],["path",{d:"m22 2-7.17 7.17"}],["path",{d:"M8 5 5 8"}],["circle",{cx:"12",cy:"12",r:"4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gD=[["path",{d:"M10 11v6"}],["path",{d:"M14 17v-3"}],["path",{d:"M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-1.576.768"}],["path",{d:"M19 6v7.344"}],["path",{d:"m2 2 20 20"}],["path",{d:"M21 6h-9.344"}],["path",{d:"M3 6h3"}],["path",{d:"M5 6v14a2 2 0 002 2h10a2 2 0 002-2v-1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AD=[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z"}],["path",{d:"M12 19v3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=[["path",{d:"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"}],["path",{d:"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"}],["path",{d:"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"}],["path",{d:"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wD=[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"}],["path",{d:"M12 22v-3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HD=[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"}],["path",{d:"M7 16v6"}],["path",{d:"M13 19v3"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CD=[["path",{d:"M16 17h6v-6"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VD=[["path",{d:"M14.828 14.828 21 21"}],["path",{d:"M21 16v5h-5"}],["path",{d:"m21 3-9 9-4-4-6 6"}],["path",{d:"M21 8V3h-5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SD=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LD=[["path",{d:"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bD=[["path",{d:"M10.17 4.193a2 2 0 0 1 3.666.013"}],["path",{d:"M14 21h2"}],["path",{d:"m15.874 7.743 1 1.732"}],["path",{d:"m18.849 12.952 1 1.732"}],["path",{d:"M21.824 18.18a2 2 0 0 1-1.835 2.824"}],["path",{d:"M4.024 21a2 2 0 0 1-1.839-2.839"}],["path",{d:"m5.136 12.952-1 1.732"}],["path",{d:"M8 21h2"}],["path",{d:"m8.102 7.743-1 1.732"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _D=[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=[["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}],["path",{d:"M4 12H2"}],["path",{d:"M7.298 20.288A1 1 0 008 22h8a1 1 0 00.703-1.712l-3.991-3.99a1 1 0 00-1.424-.001z"}],["path",{d:"M7.298 3.712A1 1 0 018 2h8a1 1 0 01.703 1.712l-3.991 3.99a1 1 0 01-1.424.001z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PD=[["path",{d:"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2"}],["path",{d:"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2"}],["path",{d:"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3"}],["path",{d:"M4 22h16"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"}],["path",{d:"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=[["path",{d:"M12 14v2"}],["path",{d:"M12 20v2"}],["path",{d:"M12 2v2"}],["path",{d:"M12 8v2"}],["path",{d:"M20.288 16.703A1 1 0 0022 16V8a1 1 0 00-1.712-.703l-3.99 3.991a1 1 0 00-.001 1.424z"}],["path",{d:"M3.712 16.703A1 1 0 012 16V8a1 1 0 011.712-.703l3.99 3.991a1 1 0 01.001 1.424z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OD=[["path",{d:"M14 19V7a2 2 0 0 0-2-2H9"}],["path",{d:"M15 19H9"}],["path",{d:"M19 19h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14"}],["path",{d:"M2 13v5a1 1 0 0 0 1 1h2"}],["path",{d:"M4 3 2.15 5.15a.495.495 0 0 0 .35.86h2.15a.47.47 0 0 1 .35.86L3 9.02"}],["circle",{cx:"17",cy:"19",r:"2"}],["circle",{cx:"7",cy:"19",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RD=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"}],["path",{d:"M15 18H9"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"}],["circle",{cx:"17",cy:"18",r:"2"}],["circle",{cx:"7",cy:"18",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ED=[["path",{d:"M15 18v3a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-3"}],["path",{d:"M17 2a2 2 0 0 1 1.6 3.2A8 8 0 0 0 17 10v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6a8 8 0 0 0-1.6-4.8A2 2 0 0 1 7 2z"}],["path",{d:"M7 10a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zD=[["path",{d:"m14 10-8 4"}],["path",{d:"M14 5 6 9"}],["path",{d:"M18 12a8 8 0 01-7.003 7.937c-.547.07-.997-.385-.997-.937V4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TD=[["path",{d:"M10 12.01h.01"}],["path",{d:"M18 8v4a8 8 0 0 1-1.07 4"}],["circle",{cx:"10",cy:"12",r:"4"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DD=[["path",{d:"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"}],["path",{d:"M4.82 7.9 8 10"}],["path",{d:"M15.18 7.9 12 10"}],["path",{d:"M16.93 10H20a2 2 0 0 1 0 4H2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kD=[["path",{d:"M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z"}],["path",{d:"M7 21h10"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=[["path",{d:"M7 21h10"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BD=[["path",{d:"m17 2-5 5-5-5"}],["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FD=[["path",{d:"M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qD=[["path",{d:"M12 4v16"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"}],["path",{d:"M9 20h6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UD=[["path",{d:"M12 13v7a2 2 0 0 0 4 0"}],["path",{d:"M12 2v2"}],["path",{d:"M18.656 13h2.336a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-12.07-7.51"}],["path",{d:"m2 2 20 20"}],["path",{d:"M5.961 5.957a10.28 10.28 0 0 0-3.922 5.769A1 1 0 0 0 3 13h10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ND=[["path",{d:"M12 13v7a2 2 0 0 0 4 0"}],["path",{d:"M12 2v2"}],["path",{d:"M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ID=[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jD=[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZD=[["path",{d:"M21 17a9 9 0 0 0-15-6.7L3 13"}],["path",{d:"M3 7v6h6"}],["circle",{cx:"12",cy:"17",r:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $D=[["path",{d:"M3 7v6h6"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WD=[["path",{d:"M16 12h6"}],["path",{d:"M8 12H2"}],["path",{d:"M12 2v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 20v2"}],["path",{d:"m19 15 3-3-3-3"}],["path",{d:"m5 9-3 3 3 3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GD=[["path",{d:"M12 22v-6"}],["path",{d:"M12 8V2"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}],["path",{d:"m15 19-3 3-3-3"}],["path",{d:"m15 5-3-3-3 3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KD=[["rect",{x:"11",y:"14",width:"10",height:"7",rx:"2"}],["rect",{x:"3",y:"3",width:"10",height:"7",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=[["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3"}],["path",{d:"M18 12h.01"}],["path",{d:"M18 16h.01"}],["path",{d:"M22 7a1 1 0 0 0-1-1h-2a2 2 0 0 1-1.143-.359L13.143 2.36a2 2 0 0 0-2.286-.001L6.143 5.64A2 2 0 0 1 5 6H3a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z"}],["path",{d:"M6 12h.01"}],["path",{d:"M6 16h.01"}],["circle",{cx:"12",cy:"10",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XD=[["path",{d:"M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JD=[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QD=[["path",{d:"m19 5 3-3"}],["path",{d:"m2 22 3-3"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"}],["path",{d:"M7.5 13.5 10 11"}],["path",{d:"M10.5 16.5 13 14"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YD=[["path",{d:"M12 3v12"}],["path",{d:"m17 8-5-5-5 5"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tk=[["path",{d:"M6 12h12"}],["rect",{x:"2",y:"8",width:"20",height:"8",rx:"4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ak=[["circle",{cx:"10",cy:"7",r:"1"}],["circle",{cx:"4",cy:"20",r:"1"}],["path",{d:"M4.7 19.3 19 5"}],["path",{d:"m21 3-3 1 2 2Z"}],["path",{d:"M9.26 7.68 5 12l2 5"}],["path",{d:"m10 14 5 2 3.5-3.5"}],["path",{d:"m18 12 1-1 1 1-1 1Z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ek=[["path",{d:"m16 11 2 2 4-4"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hk=[["path",{d:"M10 15H6a4 4 0 0 0-4 4v2"}],["path",{d:"m14.305 16.53.923-.382"}],["path",{d:"m15.228 13.852-.923-.383"}],["path",{d:"m16.852 12.228-.383-.923"}],["path",{d:"m16.852 17.772-.383.924"}],["path",{d:"m19.148 12.228.383-.923"}],["path",{d:"m19.53 18.696-.382-.924"}],["path",{d:"m20.772 13.852.924-.383"}],["path",{d:"m20.772 16.148.924.383"}],["circle",{cx:"18",cy:"15",r:"3"}],["circle",{cx:"9",cy:"7",r:"4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dk=[["path",{d:"M17 21v-1a2 2 0 00-2-2H9a2 2 0 00-2 2v1"}],["path",{d:"M19 10h1a2 2 0 012 2v1"}],["path",{d:"M5 10H4a2 2 0 00-2 2v1"}],["circle",{cx:"12",cy:"11",r:"3"}],["circle",{cx:"18",cy:"4",r:"2"}],["circle",{cx:"6",cy:"4",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rk=[["path",{d:"M20 11v6"}],["path",{d:"M20 13h2"}],["path",{d:"M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578"}],["circle",{cx:"10",cy:"7",r:"4"}],["circle",{cx:"20",cy:"19",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ck=[["path",{d:"M19 16v-2a2 2 0 0 0-4 0v2"}],["path",{d:"M9.5 15H7a4 4 0 0 0-4 4v2"}],["circle",{cx:"10",cy:"7",r:"4"}],["rect",{x:"13",y:"16",width:"8",height:"5",rx:".899"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nk=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=[["path",{d:"M11.5 15H7a4 4 0 0 0-4 4v2"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}],["circle",{cx:"10",cy:"7",r:"4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ok=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ik=[["path",{d:"m19 16-3 3"}],["path",{d:"M2 21a8 8 0 0 1 12.664-6.5"}],["path",{d:"M22 19h-6l3 3"}],["circle",{cx:"10",cy:"8",r:"5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"m16 19 2 2 4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=[["path",{d:"m14.305 19.53.923-.382"}],["path",{d:"m15.228 16.852-.923-.383"}],["path",{d:"m16.852 15.228-.383-.923"}],["path",{d:"m16.852 20.772-.383.924"}],["path",{d:"m19.148 15.228.383-.923"}],["path",{d:"m19.53 21.696-.382-.924"}],["path",{d:"M2 21a8 8 0 0 1 10.434-7.62"}],["path",{d:"m20.772 16.852.924-.383"}],["path",{d:"m20.772 19.148.924.383"}],["circle",{cx:"10",cy:"8",r:"5"}],["circle",{cx:"18",cy:"18",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sk=[["path",{d:"M17 21a5 5 0 00-10 0"}],["path",{d:"M22 10.5a3.5 3.5 0 00-5.507-2.868"}],["path",{d:"M7.507 7.632A3.5 3.5 0 002 10.5"}],["circle",{cx:"12",cy:"13",r:"3"}],["circle",{cx:"18.5",cy:"4.5",r:"2.5"}],["circle",{cx:"5.5",cy:"4.5",r:"2.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lk=[["path",{d:"M19 11v6"}],["path",{d:"M19 13h2"}],["path",{d:"M2 21a8 8 0 0 1 12.868-6.349"}],["circle",{cx:"10",cy:"8",r:"5"}],["circle",{cx:"19",cy:"19",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M22 19h-6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk=[["path",{d:"M2 21a8 8 0 0 1 10.821-7.487"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}],["circle",{cx:"10",cy:"8",r:"5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M19 16v6"}],["path",{d:"M22 19h-6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=[["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M2 21a8 8 0 0 1 10.434-7.62"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m22 22-1.9-1.9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=[["path",{d:"M2 21a8 8 0 0 1 8-8 5 5 0 1 1 4.845-3.759"}],["path",{d:"M22 17.5c0 2.5-1.75 3.75-3.83 4.474a.5.5 0 0 1-.335-.005C15.75 21.25 14 20 14 17.5V14a.5.5 0 0 1 .5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 0 1 .76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 0 1 .5.5z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=[["path",{d:"M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.867l-1.156-1.152a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"}],["path",{d:"M2 21a8 8 0 0 1 6.778-7.905"}],["path",{d:"M8.927 12.885a5 5 0 1 1 6.061-4.535"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=[["path",{d:"m16.5 16.5 5 5"}],["path",{d:"M2 21a8 8 0 0 1 11.531-7.18"}],["path",{d:"m21.5 16.5-5 5"}],["circle",{cx:"10",cy:"8",r:"5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=[["circle",{cx:"12",cy:"8",r:"5"}],["path",{d:"M20 21a8 8 0 0 0-16 0"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mk=[["circle",{cx:"10",cy:"7",r:"4"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2"}],["circle",{cx:"17",cy:"17",r:"3"}],["path",{d:"m21 21-1.9-1.9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xk=[["path",{d:"M10 15H6a4 4 0 0 0-4 4v2"}],["path",{d:"M22 17.5c0 2.499-1.75 3.749-3.83 4.474a.5.5 0 0 1-.335-.005c-2.085-.72-3.835-1.97-3.835-4.47V14a.5.5 0 0 1 .5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 0 1 .76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 0 1 .5.5z"}],["circle",{cx:"9",cy:"7",r:"4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk=[["path",{d:"M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"}],["path",{d:"M8 15H7a4 4 0 0 0-4 4v2"}],["circle",{cx:"10",cy:"7",r:"4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wk=[["path",{d:"M12.925 3.047a9 9 0 017.616 6.11"}],["path",{d:"M13 22a2 2 0 012-2h4a2 2 0 012 2"}],["path",{d:"M3 12a2 2 0 012-2h4a2 2 0 012 2"}],["path",{d:"M3.889 15.9a9 9 0 005.247 4.632"}],["circle",{cx:"17",cy:"14",r:"2"}],["circle",{cx:"7",cy:"4",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk=[["path",{d:"M20.453 8.911a9 9 0 00-6.696-5.738"}],["path",{d:"M21 22a4 4 0 00-8 0"}],["path",{d:"M3 12a4 4 0 017.963-.543"}],["path",{d:"M3.889 15.9a9 9 0 005.247 4.632"}],["circle",{cx:"17",cy:"15",r:"3"}],["circle",{cx:"7",cy:"5",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=[["path",{d:"M18 21a8 8 0 0 0-16 0"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"}],["path",{d:"m2.1 21.8 6.4-6.3"}],["path",{d:"m19 5-7 7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vk=[["path",{d:"M12 2v20"}],["path",{d:"M2 5h20"}],["path",{d:"M3 3v2"}],["path",{d:"M7 3v2"}],["path",{d:"M17 3v2"}],["path",{d:"M21 3v2"}],["path",{d:"m19 5-7 7-7-7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=[["path",{d:"M13 6v5a1 1 0 0 0 1 1h6.102a1 1 0 0 1 .712.298l.898.91a1 1 0 0 1 .288.702V17a1 1 0 0 1-1 1h-3"}],["path",{d:"M5 18H3a1 1 0 0 1-1-1V8a2 2 0 0 1 2-2h12c1.1 0 2.1.8 2.4 1.8l1.176 4.2"}],["path",{d:"M9 18h5"}],["circle",{cx:"16",cy:"18",r:"2"}],["circle",{cx:"7",cy:"18",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk=[["path",{d:"M8 21s-4-3-4-9 4-9 4-9"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}],["path",{d:"m7.9 7.9 2.7 2.7"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor"}],["path",{d:"m13.4 10.6 2.7-2.7"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor"}],["path",{d:"m7.9 16.1 2.7-2.7"}],["circle",{cx:"16.5",cy:"16.5",r:".5",fill:"currentColor"}],["path",{d:"m13.4 13.4 2.7 2.7"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=[["path",{d:"m12.828 4.813 5.344 2.375"}],["path",{d:"m15.769 18.153 3.461-8.306"}],["path",{d:"m5.687 14.074 7.625 4.852"}],["path",{d:"M9.772 5.579 5.228 11.42"}],["circle",{cx:"11",cy:"4",r:"2"}],["circle",{cx:"15",cy:"20",r:"2"}],["circle",{cx:"20",cy:"8",r:"2"}],["circle",{cx:"4",cy:"13",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk=[["path",{d:"M17.055 4.533a24 24 0 00-10.11 0"}],["path",{d:"M19.467 17.055a24 24 0 000-10.11"}],["path",{d:"M4.533 6.945a24 24 0 000 10.11"}],["path",{d:"M6.945 19.467a24 24 0 0010.11 0"}],["circle",{cx:"19",cy:"19",r:"2"}],["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["circle",{cx:"5",cy:"5",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok=[["path",{d:"M16 8q6 0 6-6-6 0-6 6"}],["path",{d:"M17.41 3.59a10 10 0 1 0 3 3"}],["path",{d:"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=[["path",{d:"M18 11c-1.5 0-2.5.5-3 2"}],["path",{d:"M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z"}],["path",{d:"M6 11c1.5 0 2.5.5 3 2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=[["path",{d:"M10 20h4"}],["path",{d:"M12 16v6"}],["path",{d:"M17 2h4v4"}],["path",{d:"m21 2-5.46 5.46"}],["circle",{cx:"12",cy:"11",r:"5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=[["path",{d:"M12 15v7"}],["path",{d:"M9 19h6"}],["circle",{cx:"12",cy:"9",r:"6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tk=[["path",{d:"m2 8 2 2-2 2 2 2-2 2"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2"}],["path",{d:"M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2"}],["path",{d:"M16 10.34V6c0-.55-.45-1-1-1h-4.34"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=[["path",{d:"m2 8 2 2-2 2 2 2-2 2"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2"}],["rect",{width:"8",height:"14",x:"8",y:"5",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk=[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M2 8h20"}],["circle",{cx:"8",cy:"14",r:"2"}],["path",{d:"M8 12h8"}],["circle",{cx:"16",cy:"14",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk=[["path",{d:"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"}],["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk=[["path",{d:"M10.01 10h.01"}],["path",{d:"M12 14.991h.01"}],["path",{d:"M12 22v-3"}],["path",{d:"M12 2v3"}],["path",{d:"M13 22h-2"}],["path",{d:"M13 2h-2"}],["path",{d:"m16.5 19.794-1-1.733"}],["path",{d:"m16.5 4.205-1 1.732"}],["path",{d:"M18.891 13.235a7 7 0 00-8.126-8.126"}],["path",{d:"m19.794 7.5-1.732 1"}],["path",{d:"M2 12h3"}],["path",{d:"M2 13v-2"}],["path",{d:"m2 2 20 20"}],["path",{d:"M22 12h-3"}],["path",{d:"M22 13v-2"}],["path",{d:"m4.206 16.5 1.732-1"}],["path",{d:"m4.206 7.5 1.732 1"}],["path",{d:"M7.05 7.05a7 7 0 009.9 9.9"}],["path",{d:"m7.5 19.794 1-1.733"}],["path",{d:"M9 12h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk=[["path",{d:"M12 14.991h.01"}],["path",{d:"M12 22v-3"}],["path",{d:"M12 2v3"}],["path",{d:"M13 22h-2"}],["path",{d:"M13 2h-2"}],["path",{d:"M13.99 10H14"}],["path",{d:"m16.5 19.794-1-1.733"}],["path",{d:"m16.5 4.205-1 1.732"}],["path",{d:"m19.794 16.5-1.732-1"}],["path",{d:"m19.794 7.5-1.732 1"}],["path",{d:"M2 12h3"}],["path",{d:"M2 13v-2"}],["path",{d:"M22 12h-3"}],["path",{d:"M22 13v-2"}],["path",{d:"m4.206 16.5 1.732-1"}],["path",{d:"m4.206 7.5 1.732 1"}],["path",{d:"m7.5 19.794 1-1.733"}],["path",{d:"m7.5 4.205 1 1.732"}],["path",{d:"M9 12h.01"}],["circle",{cx:"12",cy:"12",r:"7"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=[["circle",{cx:"6",cy:"12",r:"4"}],["circle",{cx:"18",cy:"12",r:"4"}],["line",{x1:"6",x2:"18",y1:"16",y2:"16"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk=[["path",{d:"M11 7a16 16 20 0 1 10.98 4.362"}],["path",{d:"M12 12a13 13 0 0 1-8.66 5"}],["path",{d:"M16.83 13.634a16 16 0 0 1-9.267 7.328"}],["path",{d:"M20.66 17A13 13 0 0 0 12 12a13 13 0 0 1 0-10"}],["path",{d:"M8.17 15.366a16 16 0 0 1-1.713-11.69"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk=[["path",{d:"M16 9a5 5 0 0 1 .95 2.293"}],["path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96"}],["path",{d:"m2 2 20 20"}],["path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"}],["path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z"}],["path",{d:"m16.5 14.5 5-5"}],["path",{d:"m16.5 9.5 5 5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk=[["path",{d:"m9 12 2 2 4-4"}],["path",{d:"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"}],["path",{d:"M22 19H2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk=[["path",{d:"M3 11h3.75a2 2 0 0 1 1.6.8l.45.6a4 4 0 0 0 6.4 0l.45-.6a2 2 0 0 1 1.6-.8H21"}],["path",{d:"M3 7h18"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=[["path",{d:"M17 14h.01"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk=[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk=[["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}],["path",{d:"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15"}],["circle",{cx:"8",cy:"9",r:"2"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"}],["path",{d:"m14 7 3 3"}],["path",{d:"M5 6v4"}],["path",{d:"M19 14v4"}],["path",{d:"M10 2v2"}],["path",{d:"M7 8H3"}],["path",{d:"M21 16h-4"}],["path",{d:"M11 3H9"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tB=[["path",{d:"M15 4V2"}],["path",{d:"M15 16v-2"}],["path",{d:"M8 9h2"}],["path",{d:"M20 9h2"}],["path",{d:"M17.8 11.8 19 13"}],["path",{d:"M15 9h.01"}],["path",{d:"M17.8 6.2 19 5"}],["path",{d:"m3 21 9-9"}],["path",{d:"M12.2 6.2 11 5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aB=[["path",{d:"M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11"}],["path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z"}],["path",{d:"M6 13h12"}],["path",{d:"M6 17h12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eB=[["path",{d:"M3 6h3"}],["path",{d:"M17 6h.01"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2"}],["circle",{cx:"12",cy:"13",r:"5"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hB=[["path",{d:"M12 10v2.2l1.6 1"}],["path",{d:"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"}],["path",{d:"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"}],["circle",{cx:"12",cy:"12",r:"6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dB=[["path",{d:"M12 10L12 2"}],["path",{d:"M16 6L12 10L8 6"}],["path",{d:"M2 15C2.6 15.5 3.2 16 4.5 16C7 16 7 14 9.5 14C12.1 14 11.9 16 14.5 16C17 16 17 14 19.5 14C20.8 14 21.4 14.5 22 15"}],["path",{d:"M2 21C2.6 21.5 3.2 22 4.5 22C7 22 7 20 9.5 20C12.1 20 11.9 22 14.5 22C17 22 17 20 19.5 20C20.8 20 21.4 20.5 22 21"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rB=[["path",{d:"M12 2v8"}],["path",{d:"M2 15c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"m8 6 4-4 4 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=[["path",{d:"M2 12q2.5 2 5 0t5 0 5 0 5 0"}],["path",{d:"M2 19q2.5 2 5 0t5 0 5 0 5 0"}],["path",{d:"M2 5q2.5 2 5 0t5 0 5 0 5 0"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cB=[["path",{d:"M19 5a2 2 0 0 0-2 2v11"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M7 13h10"}],["path",{d:"M7 9h10"}],["path",{d:"M9 5a2 2 0 0 0-2 2v11"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nB=[["path",{d:"M12 2q2 2.5 0 5t0 5 0 5 0 5"}],["path",{d:"M19 2q2 2.5 0 5t0 5 0 5 0 5"}],["path",{d:"M5 2q2 2.5 0 5t0 5 0 5 0 5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pB=[["path",{d:"m10.586 5.414-5.172 5.172"}],["path",{d:"m18.586 13.414-5.172 5.172"}],["path",{d:"M6 12h12"}],["circle",{cx:"12",cy:"20",r:"2"}],["circle",{cx:"12",cy:"4",r:"2"}],["circle",{cx:"20",cy:"12",r:"2"}],["circle",{cx:"4",cy:"12",r:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oB=[["path",{d:"M12 22v-4"}],["path",{d:"M12.754 7.096a3 3 0 0 1 2.15 2.15"}],["path",{d:"M12.863 12.873a3 3 0 0 1-3.736-3.735"}],["path",{d:"M16.566 16.57A8 8 0 0 1 5.43 5.433"}],["path",{d:"m2 2 20 20"}],["path",{d:"M7 22h10"}],["path",{d:"M8.478 2.817a8 8 0 0 1 10.705 10.705"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iB=[["circle",{cx:"12",cy:"10",r:"8"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 22h10"}],["path",{d:"M12 22v-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sB=[["path",{d:"M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15"}],["path",{d:"M9 3.4a4 4 0 0 1 6.52.66"}],["path",{d:"m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05"}],["path",{d:"M20.3 20.3a4 4 0 0 1-2.3.7"}],["path",{d:"M18.6 13a4 4 0 0 1 3.357 3.414"}],["path",{d:"m12 6 .6 1"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lB=[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MB=[["path",{d:"M6.5 8a2 2 0 0 0-1.906 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8z"}],["path",{d:"M7.999 15a2.5 2.5 0 0 1 4 0 2.5 2.5 0 0 0 4 0"}],["circle",{cx:"12",cy:"5",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uB=[["circle",{cx:"12",cy:"5",r:"3"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fB=[["path",{d:"m2 22 10-10"}],["path",{d:"m16 8-1.17 1.17"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97"}],["path",{d:"M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98"}],["path",{d:"M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vB=[["path",{d:"M2 22 16 8"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mB=[["path",{d:"M10 6v4"}],["path",{d:"M21 6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.675A7 7 0 1 1 9 6z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xB=[["circle",{cx:"7",cy:"12",r:"3"}],["path",{d:"M10 9v6"}],["circle",{cx:"17",cy:"12",r:"3"}],["path",{d:"M14 7v8"}],["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yB=[["path",{d:"m14.305 19.53.923-.382"}],["path",{d:"m15.228 16.852-.923-.383"}],["path",{d:"m16.852 15.228-.383-.923"}],["path",{d:"m16.852 20.772-.383.924"}],["path",{d:"m19.148 15.228.383-.923"}],["path",{d:"m19.53 21.696-.382-.924"}],["path",{d:"M2 8.82a15 15 0 0120 0"}],["path",{d:"m20.772 16.852.924-.383"}],["path",{d:"m20.772 19.148.924.383"}],["path",{d:"M5 12.859a10 10 0 0110.18-2.342"}],["path",{d:"M8.5 16.429a5 5 0 011.998-1.2"}],["circle",{cx:"18",cy:"18",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gB=[["path",{d:"M12 20h.01"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AB=[["path",{d:"M12 20h.01"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wB=[["path",{d:"M2 8.82a15 15 0 0120 0"}],["path",{d:"M20 16v-2a2 2 0 00-4 0v2"}],["path",{d:"M5 12.859a10 10 0 018.436-2.756"}],["path",{d:"M8.5 16.429a5 5 0 011.794-1.13"}],["rect",{x:"14",y:"16",width:"8",height:"5",rx:"1"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HB=[["path",{d:"M12 20h.01"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CB=[["path",{d:"M2 8.82a15 15 0 0 1 20 0"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}],["path",{d:"M5 12.859a10 10 0 0 1 10.5-2.222"}],["path",{d:"M8.5 16.429a5 5 0 0 1 3-1.406"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VB=[["path",{d:"M11.965 10.105v4L13.5 12.5a5 5 0 0 1 8 1.5"}],["path",{d:"M11.965 14.105h4"}],["path",{d:"M17.965 18.105h4L20.43 19.71a5 5 0 0 1-8-1.5"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0"}],["path",{d:"M21.965 22.105v-4"}],["path",{d:"M5 12.86a10 10 0 0 1 3-2.032"}],["path",{d:"M8.5 16.429h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SB=[["path",{d:"M12 20h.01"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LB=[["path",{d:"M12 20h.01"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bB=[["path",{d:"M10 2v8"}],["path",{d:"M12.8 21.6A2 2 0 1 0 14 18H2"}],["path",{d:"M17.5 10a2.5 2.5 0 1 1 2 4H2"}],["path",{d:"m6 6 4 4 4-4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _B=[["path",{d:"M10 2v8"}],["path",{d:"M12.8 21.6A2 2 0 1 0 14 18H2"}],["path",{d:"M17.5 10a2.5 2.5 0 1 1 2 4H2"}],["path",{d:"m6 6 4 -4 4 4"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PB=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OB=[["path",{d:"M8 22h8"}],["path",{d:"M7 10h3m7 0h-1.343"}],["path",{d:"M12 15v7"}],["path",{d:"M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RB=[["path",{d:"M8 22h8"}],["path",{d:"M7 10h10"}],["path",{d:"M12 15v7"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EB=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zB=[["path",{d:"m19 12-1.5 3"}],["path",{d:"M19.63 18.81 22 20"}],["path",{d:"M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TB=[["path",{d:"M10.747 5.093a6 6 0 0 1 6.841-2.882c.438.12.54.662.219.984L14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-2.882 6.842"}],["path",{d:"m13.5 13.5-7.88 7.88a1 1 0 0 1-2.999-3l7.88-7.88"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DB=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kB=[["path",{d:"M18 4H6"}],["path",{d:"M18 8 6 20"}],["path",{d:"m6 8 12 12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BB=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FB=[["path",{d:"M10.768 5.111 13.44 2.44a1.5 1.5 0 012.474 1.561l-1.633 4.625"}],["path",{d:"m18.889 13.232.672-.672A1.5 1.5 0 0018.5 10h-2.844"}],["path",{d:"m2 2 20 20"}],["path",{d:"m7.94 7.94-3.5 3.499A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l5.5-5.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qB=[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UB=[["path",{d:"m2 10 2.456-3.684a.7.7 0 0 1 1.106-.013l2.39 3.413a.7.7 0 0 0 1.096-.001l2.402-3.432a.7.7 0 0 1 1.098 0l2.402 3.432a.7.7 0 0 0 1.098 0l2.389-3.413a.7.7 0 0 1 1.106.013L22 10"}],["path",{d:"m2 18.002 2.456-3.684a.7.7 0 0 1 1.106-.013l2.39 3.413a.7.7 0 0 0 1.097 0l2.402-3.432a.7.7 0 0 1 1.098 0l2.402 3.432a.7.7 0 0 0 1.098 0l2.389-3.413a.7.7 0 0 1 1.106.013L22 18.002"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NB=[["path",{d:"M12 7.5a4.5 4.5 0 1 1 5 4.5"}],["path",{d:"M7 12a4.5 4.5 0 1 1 5-4.5V21"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IB=[["path",{d:"M21 14.5A9 6.5 0 0 1 5.5 19"}],["path",{d:"M3 9.5A9 6.5 0 0 1 18.5 5"}],["circle",{cx:"17.5",cy:"14.5",r:"3.5"}],["circle",{cx:"6.5",cy:"9.5",r:"3.5"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jB=[["path",{d:"M11 21a3 3 0 0 0 3-3V6.5a1 1 0 0 0-7 0"}],["path",{d:"M7 19V6a3 3 0 0 0-3-3h0"}],["circle",{cx:"17",cy:"17",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZB=[["path",{d:"M16 4.525v14.948"}],["path",{d:"M20 3A17 17 0 0 1 4 3"}],["path",{d:"M4 21a17 17 0 0 1 16 0"}],["path",{d:"M8 4.525v14.948"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $B=[["path",{d:"M10 16c0-4-3-4.5-3-8a5 5 0 0 1 10 0c0 3.466-3 6.196-3 10a3 3 0 0 0 6 0"}],["circle",{cx:"7",cy:"16",r:"3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WB=[["path",{d:"M3 16h6.857c.162-.012.19-.323.038-.38a6 6 0 1 1 4.212 0c-.153.057-.125.368.038.38H21"}],["path",{d:"M3 20h18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GB=[["path",{d:"M3 10A6.06 6.06 0 0 1 12 10 A6.06 6.06 0 0 0 21 10"}],["path",{d:"M6 3v12a6 6 0 0 0 12 0V3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KB=[["path",{d:"M19 21a15 15 0 0 1 0-18"}],["path",{d:"M20 12H4"}],["path",{d:"M5 3a15 15 0 0 1 0 18"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XB=[["path",{d:"M15 3h6v6"}],["path",{d:"M21 3 3 21"}],["path",{d:"m9 9 6 6"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JB=[["path",{d:"M10 19V5.5a1 1 0 0 1 5 0V17a2 2 0 0 0 2 2h5l-3-3"}],["path",{d:"m22 19-3 3"}],["path",{d:"M5 19V5.5a1 1 0 0 1 5 0"}],["path",{d:"M5 5.5A2.5 2.5 0 0 0 2.5 3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QB=[["circle",{cx:"12",cy:"15",r:"6"}],["path",{d:"M18 3A6 6 0 0 1 6 3"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YB=[["path",{d:"M11 5.5a1 1 0 0 1 5 0V16a5 5 0 0 0 5 5"}],["path",{d:"M16 11.5a1 1 0 0 1 5 0V16a5 5 0 0 1-5 5"}],["path",{d:"M6 19V6a3 3 0 0 0-3-3h0"}],["path",{d:"M6 5.5a1 1 0 0 1 5 0V19"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tF=[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aF=[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]];/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:C8,AArrowUp:V8,ALargeSmall:S8,Accessibility:L8,Activity:b8,ActivitySquare:J5,Ad:_8,AirVent:O8,Airplay:P8,AlarmCheck:Ka,AlarmClock:E8,AlarmClockCheck:Ka,AlarmClockMinus:Xa,AlarmClockOff:R8,AlarmClockPlus:Ja,AlarmMinus:Xa,AlarmPlus:Ja,AlarmSmoke:z8,Album:s4,AlertCircle:be,AlertOctagon:C5,AlertTriangle:dd,AlignCenter:X4,AlignCenterHorizontal:T8,AlignCenterVertical:D8,AlignEndHorizontal:k8,AlignEndVertical:B8,AlignHorizontalDistributeCenter:F8,AlignHorizontalDistributeEnd:U8,AlignHorizontalDistributeStart:q8,AlignHorizontalJustifyCenter:N8,AlignHorizontalJustifyEnd:I8,AlignHorizontalJustifyStart:j8,AlignHorizontalSpaceAround:Z8,AlignHorizontalSpaceBetween:$8,AlignJustify:Q4,AlignLeft:J0,AlignRight:J4,AlignStartHorizontal:W8,AlignStartVertical:G8,AlignVerticalDistributeCenter:K8,AlignVerticalDistributeEnd:X8,AlignVerticalDistributeStart:J8,AlignVerticalJustifyCenter:Q8,AlignVerticalJustifyEnd:Y8,AlignVerticalJustifyStart:to,AlignVerticalSpaceAround:ao,AlignVerticalSpaceBetween:eo,Ambulance:ho,Ampersand:ro,Ampersands:co,Amphora:no,Anchor:po,Angle:oo,Angry:mh,Annoyed:xh,Antenna:io,Anvil:so,Aperture:lo,AppWindow:uo,AppWindowMac:Mo,Apple:fo,Archive:mo,ArchiveArrowDown:vo,ArchiveArrowUp:Qa,ArchiveRestore:Qa,ArchiveX:xo,AreaChart:fe,Armchair:yo,ArmenianDram:go,ArrowBigDown:wo,ArrowBigDownDash:Ao,ArrowBigLeft:Co,ArrowBigLeftDash:Ho,ArrowBigRight:Vo,ArrowBigRightDash:So,ArrowBigUp:bo,ArrowBigUpDash:Lo,ArrowDown:Bo,ArrowDown01:_o,ArrowDown10:Po,ArrowDownAZ:Ya,ArrowDownAz:Ya,ArrowDownCircle:_e,ArrowDownFromLine:Eo,ArrowDownLeft:Oo,ArrowDownLeftFromCircle:Oe,ArrowDownLeftFromSquare:e4,ArrowDownLeftSquare:Q5,ArrowDownNarrowWide:Ro,ArrowDownRight:zo,ArrowDownRightFromCircle:Re,ArrowDownRightFromSquare:h4,ArrowDownRightSquare:a4,ArrowDownSquare:t4,ArrowDownToDot:To,ArrowDownToLine:Do,ArrowDownUp:ko,ArrowDownWideNarrow:ae,ArrowDownZA:te,ArrowDownZa:te,ArrowLeft:Io,ArrowLeftCircle:Pe,ArrowLeftFromLine:Fo,ArrowLeftRight:Uo,ArrowLeftSquare:Y5,ArrowLeftToLine:qo,ArrowRight:$o,ArrowRightCircle:Te,ArrowRightFromLine:No,ArrowRightLeft:jo,ArrowRightSquare:c4,ArrowRightToLine:Zo,ArrowUp:ei,ArrowUp01:Wo,ArrowUp10:Go,ArrowUpAZ:ee,ArrowUpAz:ee,ArrowUpCircle:De,ArrowUpDown:Ko,ArrowUpFromDot:Xo,ArrowUpFromLine:Jo,ArrowUpLeft:Qo,ArrowUpLeftFromCircle:Ee,ArrowUpLeftFromSquare:d4,ArrowUpLeftSquare:n4,ArrowUpNarrowWide:he,ArrowUpRight:Yo,ArrowUpRightFromCircle:ze,ArrowUpRightFromSquare:r4,ArrowUpRightSquare:p4,ArrowUpSquare:o4,ArrowUpToLine:ti,ArrowUpWideNarrow:ai,ArrowUpZA:de,ArrowUpZa:de,ArrowsUpFromLine:hi,Asterisk:di,AsteriskSquare:i4,Astroid:ri,AtSign:ci,Atom:ni,AudioLines:ii,AudioLinesOff:pi,AudioLinesX:oi,AudioWaveform:si,Avocado:li,Award:Mi,Axe:ui,Axis3D:re,Axis3d:re,AzerbaijaniManat:fi,Baby:vi,Backpack:mi,Bacon:xi,Badge:zi,BadgeAlert:yi,BadgeCent:gi,BadgeCheck:ce,BadgeDollarSign:Ai,BadgeEuro:wi,BadgeHelp:ne,BadgeIndianRupee:Hi,BadgeInfo:Vi,BadgeJapaneseYen:Ci,BadgeMinus:Si,BadgePercent:bi,BadgePlus:Li,BadgePoundSterling:_i,BadgeQuestionMark:ne,BadgeRussianRuble:Pi,BadgeSwissFranc:Oi,BadgeTurkishLira:Ri,BadgeX:Ei,BaggageClaim:Ti,BallWave:Di,Balloon:ki,Ban:Bi,Banana:Fi,Bandage:qi,BangladeshiTaka:Ui,Banknote:Zi,BanknoteArrowDown:Ni,BanknoteArrowUp:Ii,BanknoteCheck:ji,BanknoteX:$i,BarChart:He,BarChart2:Ce,BarChart3:Ae,BarChart4:ge,BarChartBig:ye,BarChartHorizontal:me,BarChartHorizontalBig:ve,Barcode:Wi,Barrel:Gi,Baseline:Ki,Bath:Xi,Battery:hs,BatteryCharging:Ji,BatteryFull:Qi,BatteryLow:Yi,BatteryMedium:ts,BatteryPlus:as,BatteryWarning:es,Beaker:ds,Bean:rs,BeanOff:cs,Bed:os,BedDouble:ns,BedSingle:ps,Beef:ss,BeefOff:is,Beer:Ms,BeerOff:ls,BelarusianRuble:us,Bell:ws,BellCheck:fs,BellDot:ms,BellElectric:vs,BellMinus:xs,BellOff:ys,BellPlus:gs,BellRing:As,BetweenHorizonalEnd:pe,BetweenHorizonalStart:oe,BetweenHorizontalEnd:pe,BetweenHorizontalStart:oe,BetweenVerticalEnd:Hs,BetweenVerticalStart:bs,BicepsFlexed:Cs,Bike:Vs,Binary:Ss,Binoculars:Ls,Biohazard:_s,Bird:Ps,Birdhouse:Os,Bitcoin:Rs,Blend:Es,Blender:zs,Blinds:Ts,Blocks:Ds,Bluetooth:qs,BluetoothConnected:ks,BluetoothOff:Bs,BluetoothSearching:Fs,Bold:M5,Bolt:Us,Bomb:Ns,Bone:js,BoneFracture:Is,Book:u7,BookA:Zs,BookAlert:$s,BookAudio:Ws,BookBookmark:ie,BookCheck:Gs,BookCopy:Ks,BookDashed:se,BookDown:Xs,BookHeadphones:Js,BookHeart:Qs,BookImage:t7,BookKey:Ys,BookLock:a7,BookMarked:ie,BookMinus:e7,BookOpen:r7,BookOpenCheck:h7,BookOpenText:d7,BookPlus:n7,BookSearch:c7,BookTemplate:se,BookText:p7,BookType:i7,BookUp:s7,BookUp2:o7,BookUser:l7,BookX:M7,Bookmark:A7,BookmarkCheck:f7,BookmarkMinus:v7,BookmarkOff:x7,BookmarkPlus:m7,BookmarkX:y7,BoomBox:g7,Bot:V7,BotMessageSquare:w7,BotOff:H7,BottleWine:C7,BowArrow:S7,Box:L7,BoxSelect:C4,Boxes:_7,BoxesLinked:b7,Braces:le,Brackets:P7,Brain:z7,BrainCircuit:O7,BrainCog:R7,BrainOff:E7,BrickWall:k7,BrickWallFire:T7,BrickWallShield:D7,Bridge:B7,Briefcase:I7,BriefcaseBusiness:F7,BriefcaseConveyorBelt:q7,BriefcaseMedical:U7,BriefcasePlus:N7,BringToFront:j7,Broccoli:Z7,Broom:W7,BroomSparkles:$7,Brush:K7,BrushCleaning:G7,Bubbles:J7,Bug:Y7,BugOff:X7,BugPlay:Q7,Building:al,Building2:Me,BuildingComplex:Me,BuildingComplexPlus:tl,Bus:hl,BusFront:el,Cable:rl,CableCar:dl,Cake:nl,CakeSlice:cl,Calculator:pl,Calendar:El,Calendar1:ol,CalendarArrowDown:il,CalendarArrowLeft:sl,CalendarArrowRight:ll,CalendarArrowUp:Ml,CalendarCheck:fl,CalendarCheck2:ul,CalendarChevronsLeft:vl,CalendarChevronsRight:ml,CalendarClock:xl,CalendarCog:yl,CalendarDays:gl,CalendarFold:Al,CalendarHeart:wl,CalendarMinus:Cl,CalendarMinus2:Hl,CalendarOff:Vl,CalendarPlus:Ll,CalendarPlus2:Sl,CalendarRange:bl,CalendarSearch:_l,CalendarSync:Pl,CalendarX:Rl,CalendarX2:Ol,Calendars:zl,Camera:Dl,CameraOff:Tl,Can:Bl,CanSoda:kl,CandlestickChart:xe,Candy:Ul,CandyCane:Fl,CandyOff:ql,Cannabis:Il,CannabisOff:Nl,Captions:ue,CaptionsOff:jl,Car:Gl,CarBattery:Zl,CarFront:$l,CarTaxiFront:Wl,Caravan:Kl,CardSim:Xl,Carrot:Jl,Carton:Yl,CartonOff:Ql,CaseLower:t9,CaseSensitive:a9,CaseUpper:e9,CassetteTape:h9,Cast:d9,Castle:r9,Cat:c9,Cctv:p9,CctvOff:n9,Certificate:o9,ChartArea:fe,ChartBar:me,ChartBarBig:ve,ChartBarDecreasing:i9,ChartBarIncreasing:s9,ChartBarStacked:l9,ChartBellCurve:M9,ChartCandlestick:xe,ChartColumn:Ae,ChartColumnBig:ye,ChartColumnDecreasing:u9,ChartColumnIncreasing:ge,ChartColumnStacked:f9,ChartGantt:v9,ChartLine:we,ChartNetwork:m9,ChartNoAxesColumn:Ce,ChartNoAxesColumnDecreasing:x9,ChartNoAxesColumnIncreasing:He,ChartNoAxesCombined:y9,ChartNoAxesGantt:Ve,ChartPie:Se,ChartQuadrant:g9,ChartRadar:A9,ChartScatter:Le,ChartSpline:w9,Check:V9,CheckCheck:H9,CheckCircle:ke,CheckCircle2:Be,CheckLine:C9,CheckSquare:f4,CheckSquare2:v4,ChefHat:S9,Cherry:L9,ChessBishop:b9,ChessKing:_9,ChessKnight:P9,ChessPawn:O9,ChessQueen:R9,ChessRook:E9,ChevronDown:z9,ChevronDownCircle:Fe,ChevronDownSquare:m4,ChevronFirst:T9,ChevronLast:D9,ChevronLeft:k9,ChevronLeftCircle:qe,ChevronLeftSquare:x4,ChevronRight:B9,ChevronRightCircle:Ue,ChevronRightSquare:y4,ChevronUp:F9,ChevronUpCircle:Ne,ChevronUpSquare:g4,ChevronsDown:U9,ChevronsDownUp:q9,ChevronsLeft:j9,ChevronsLeftRight:I9,ChevronsLeftRightEllipsis:N9,ChevronsRight:$9,ChevronsRightLeft:Z9,ChevronsUp:G9,ChevronsUpDown:W9,Church:K9,Cigarette:J9,CigaretteOff:X9,Circle:jM,CircleAlert:be,CircleArrowDown:_e,CircleArrowLeft:Pe,CircleArrowOutDownLeft:Oe,CircleArrowOutDownRight:Re,CircleArrowOutUpLeft:Ee,CircleArrowOutUpRight:ze,CircleArrowRight:Te,CircleArrowUp:De,CircleCheck:Be,CircleCheckBig:ke,CircleChevronDown:Fe,CircleChevronLeft:qe,CircleChevronRight:Ue,CircleChevronUp:Ne,CircleChevronsDown:Q9,CircleChevronsLeft:Y9,CircleChevronsRight:tM,CircleChevronsUp:aM,CircleDashed:hM,CircleDashedCheck:eM,CircleDivide:Ie,CircleDollarSign:dM,CircleDot:cM,CircleDotDashed:rM,CircleEllipsis:nM,CircleEqual:pM,CircleEuro:oM,CircleFadingArrowUp:iM,CircleFadingPlay:sM,CircleFadingPlus:lM,CircleGauge:je,CircleHelp:q0,CircleLetterA:MM,CircleLetterB:uM,CircleLetterC:Ze,CircleLetterD:vM,CircleLetterE:fM,CircleLetterF:mM,CircleLetterG:xM,CircleLetterH:yM,CircleLetterI:gM,CircleLetterJ:AM,CircleLetterK:wM,CircleLetterL:CM,CircleLetterM:HM,CircleLetterN:SM,CircleLetterO:VM,CircleLetterP:F0,CircleLetterPOff:B0,CircleLetterQ:LM,CircleLetterR:bM,CircleLetterS:PM,CircleLetterT:_M,CircleLetterU:OM,CircleLetterV:RM,CircleLetterW:EM,CircleLetterX:zM,CircleLetterY:DM,CircleLetterZ:TM,CircleMinus:$e,CircleOff:kM,CircleParking:F0,CircleParkingOff:B0,CirclePause:We,CirclePercent:Ge,CirclePile:BM,CirclePlay:Ke,CirclePlus:Xe,CirclePoundSterling:FM,CirclePower:Je,CircleQuestionMark:q0,CircleSlash:qM,CircleSlash2:Qe,CircleSlashed:Qe,CircleSmall:UM,CircleStar:NM,CircleStop:Ye,CircleUser:ah,CircleUserRound:th,CircleX:eh,CircuitBoard:IM,Citrus:ZM,Clapperboard:$M,ClefAlto:GM,ClefBass:WM,ClefTreble:KM,Clipboard:ru,ClipboardCheck:XM,ClipboardClock:QM,ClipboardCopy:JM,ClipboardEdit:hh,ClipboardList:YM,ClipboardMinus:tu,ClipboardPaste:au,ClipboardPen:hh,ClipboardPenLine:dh,ClipboardPlus:eu,ClipboardSignature:dh,ClipboardType:du,ClipboardX:hu,Clock:Vu,Clock1:cu,Clock10:nu,Clock11:pu,Clock12:iu,Clock2:ou,Clock3:su,Clock4:lu,Clock5:Mu,Clock6:uu,Clock7:fu,Clock8:vu,Clock9:mu,ClockAlert:xu,ClockArrowDown:yu,ClockArrowLeft:gu,ClockArrowRight:Au,ClockArrowUp:wu,ClockCheck:Hu,ClockFading:Su,ClockPlus:Cu,ClosedCaption:bu,Cloud:Zu,CloudAlert:Lu,CloudBackup:Pu,CloudCheck:_u,CloudCog:Ou,CloudDownload:rh,CloudDrizzle:Ru,CloudFog:Eu,CloudHail:zu,CloudLightning:Tu,CloudMoon:ku,CloudMoonRain:Du,CloudOff:Fu,CloudRain:qu,CloudRainWind:Bu,CloudSnow:Uu,CloudSun:Iu,CloudSunRain:Nu,CloudSync:ju,CloudUpload:ch,Cloudy:$u,Clover:Wu,Club:Gu,Code:Ku,Code2:nh,CodeSquare:A4,CodeXml:nh,Coffee:Ju,Cog:Xu,Coins:Qu,Columns:ph,Columns2:ph,Columns3:oh,Columns3Cog:U0,Columns4:Yu,ColumnsSettings:U0,Combine:tf,Command:af,Compass:ef,Component:hf,Computer:df,ConciergeBell:rf,Cone:cf,Construction:nf,Contact:pf,Contact2:ih,ContactRound:ih,Container:of,Contrast:lf,Cookie:sf,CookingPot:uf,Copy:yf,CopyCheck:Mf,CopyMinus:ff,CopyPlus:vf,CopySlash:mf,CopyX:xf,Copyleft:gf,Copyright:Ze,CornerDownLeft:Af,CornerDownRight:wf,CornerLeftDown:Hf,CornerLeftUp:Cf,CornerRightDown:Vf,CornerRightUp:Sf,CornerUpLeft:bf,CornerUpRight:Lf,Cpu:_f,CpuAi:Pf,CreativeCommons:Of,CreditCard:kf,CreditCardCheck:Rf,CreditCardMinus:zf,CreditCardPlus:Ef,CreditCardReader:Tf,CreditCardX:Df,Croissant:Bf,Crop:qf,Cross:Ff,Crosshair:Uf,Crown:Nf,Cuboid:jf,CupSoda:If,Cupcake:Zf,CurlyBraces:le,Currency:$f,Cylinder:Wf,Dam:Gf,Database:rv,DatabaseArrowDown:Kf,DatabaseArrowUp:Xf,DatabaseBackup:Jf,DatabaseCheck:Qf,DatabaseCog:Yf,DatabaseMinus:tv,DatabasePlus:av,DatabaseSearch:ev,DatabaseX:hv,DatabaseZap:dv,DecimalsArrowLeft:cv,DecimalsArrowRight:nv,Delete:pv,Dessert:ov,Diameter:iv,Diamond:Mv,DiamondMinus:sv,DiamondPercent:sh,DiamondPlus:lv,Dice1:uv,Dice2:fv,Dice3:vv,Dice4:mv,Dice5:xv,Dice6:yv,Dices:Av,Diff:gv,Disc:Cv,Disc2:wv,Disc3:Hv,DiscAlbum:Vv,Divide:Sv,DivideCircle:Ie,DivideSquare:S4,Dna:_v,DnaOff:bv,Dock:Lv,Dog:Pv,DollarSign:Ov,Dome:Rv,Donut:Ev,DoorClosed:kv,DoorClosedCog:zv,DoorClosedLocked:Tv,DoorClosedPackage:Dv,DoorOpen:Bv,DoorStairwell:Fv,Dot:qv,DotSquare:V4,Download:Uv,DownloadCloud:rh,DraftingCompass:Nv,Drama:Iv,Drill:jv,Drone:Zv,Droplet:Wv,DropletOff:$v,Droplets:Gv,Drum:Kv,Drumstick:Xv,Dumbbell:Jv,Ear:Yv,EarOff:Qv,Earbuds:am,EarbudsOff:tm,Earth:lh,EarthLock:em,Eclipse:hm,Edit:U2,Edit2:k5,Edit3:D5,Egg:cm,EggFried:dm,EggOff:rm,EighthNote:Mh,EighthNotes:uh,Eject:nm,Ellipse:pm,Ellipsis:vh,EllipsisVertical:fh,EmiratiDirham:om,Engine:im,Equal:um,EqualApproximately:lm,EqualApproximatelyNot:sm,EqualNot:Mm,EqualSquare:L4,Eraser:fm,EthernetPort:vm,Euro:mm,EvCharger:xm,Expand:ym,ExternalLink:gm,Eye:Cm,EyeClosed:Am,EyeDashed:wm,EyeOff:Hm,FaceAngry:mh,FaceExpressionless:xh,FaceGrinning:yh,FaceNeutral:gh,FaceSlightlyFrowning:Ah,FaceSlightlySmiling:Hh,FaceSlightlySmilingPlus:wh,Factory:Vm,Fan:Sm,FastForward:Lm,Faucet:bm,Feather:_m,Fence:Pm,FerrisWheel:Om,File:nx,FileArchive:Rm,FileAudio:N0,FileAudio2:N0,FileAxis3D:Vh,FileAxis3d:Vh,FileBadge:Ch,FileBadge2:Ch,FileBarChart:bh,FileBarChart2:_h,FileBox:Em,FileBraces:Lh,FileBracesCorner:Sh,FileChartColumn:_h,FileChartColumnIncreasing:bh,FileChartLine:Ph,FileChartPie:Oh,FileCheck:zm,FileCheck2:Rh,FileCheckCorner:Rh,FileClock:Tm,FileCode:Dm,FileCode2:Eh,FileCodeCorner:Eh,FileCog:zh,FileCog2:zh,FileDatabase:km,FileDiff:Bm,FileDigit:Fm,FileDown:qm,FileEdit:qh,FileExclamationPoint:Th,FileHeadphone:N0,FileHeart:Um,FileImage:Nm,FileInput:Im,FileJson:Lh,FileJson2:Sh,FileKey:Dh,FileKey2:Dh,FileLineChart:Ph,FileLock:kh,FileLock2:kh,FileMinus:jm,FileMinus2:Bh,FileMinusCorner:Bh,FileMusic:Zm,FileOutput:$m,FilePen:qh,FilePenLine:Fh,FilePieChart:Oh,FilePlay:Uh,FilePlus:Wm,FilePlus2:Nh,FilePlusCorner:Nh,FileQuestion:Ih,FileQuestionMark:Ih,FileScan:Gm,FileSearch:Km,FileSearch2:jh,FileSearchCorner:jh,FileSignal:Zh,FileSignature:Fh,FileSliders:Xm,FileSpreadsheet:Jm,FileStack:Qm,FileSymlink:Ym,FileTerminal:tx,FileText:ax,FileType:ex,FileType2:$h,FileTypeCorner:$h,FileUp:hx,FileUser:dx,FileVideo:Uh,FileVideo2:Wh,FileVideoCamera:Wh,FileVolume:rx,FileVolume2:Zh,FileWarning:Th,FileX:cx,FileX2:Gh,FileXCorner:Gh,Files:px,Film:ox,Filter:Yh,FilterX:Qh,Fingerprint:Kh,FingerprintPattern:Kh,FireExtinguisher:ix,Fish:Mx,FishOff:sx,FishSymbol:lx,FishingHook:ux,FishingRod:fx,Flag:yx,FlagOff:vx,FlagTriangleLeft:mx,FlagTriangleRight:xx,Flame:Ax,FlameKindling:gx,Flashlight:Hx,FlashlightOff:wx,FlaskConical:Vx,FlaskConicalOff:Cx,FlaskRound:Sx,FlipHorizontal:M4,FlipHorizontal2:rd,FlipVertical:u4,FlipVertical2:cd,Flower:bx,Flower2:Lx,Focus:_x,FoldHorizontal:Px,FoldVertical:Ox,Folder:py,FolderArchive:Rx,FolderBookmark:Ex,FolderCheck:zx,FolderClock:Tx,FolderClosed:Dx,FolderCode:kx,FolderCog:Xh,FolderCog2:Xh,FolderDot:Bx,FolderDown:Fx,FolderEdit:Jh,FolderGit:Ux,FolderGit2:qx,FolderHeart:Nx,FolderInput:Ix,FolderKanban:jx,FolderKey:Zx,FolderLock:$x,FolderMinus:Wx,FolderOpen:Kx,FolderOpenDot:Gx,FolderOutput:Xx,FolderPen:Jh,FolderPlus:Jx,FolderRoot:Qx,FolderSearch:ty,FolderSearch2:Yx,FolderSymlink:ay,FolderSync:ey,FolderTree:hy,FolderUp:dy,FolderUser:ry,FolderUsers:cy,FolderX:ny,Folders:oy,Footprints:iy,ForkKnife:md,ForkKnifeCrossed:vd,Forklift:sy,Form:ly,FormInput:F5,Forward:My,Frame:uy,Frown:Ah,Fuel:fy,Fullscreen:vy,FunctionSquare:b4,Funnel:Yh,FunnelPlus:my,FunnelX:Qh,Galaxy:xy,GalleryHorizontal:gy,GalleryHorizontalEnd:yy,GalleryThumbnails:Ay,GalleryVertical:Cy,GalleryVerticalEnd:wy,Gamepad:Sy,Gamepad2:Hy,GamepadDirectional:Vy,GanttChart:Ve,GanttChartSquare:$0,GapHorizontal:Ly,GapVertical:by,Gauge:_y,GaugeCircle:je,Gavel:Py,Gem:Oy,GeorgianLari:Ry,Germ:zy,GermOff:Ey,Ghost:Ty,Gift:Dy,GitBranch:Fy,GitBranchMinus:ky,GitBranchPlus:By,GitCommit:t5,GitCommitHorizontal:t5,GitCommitVertical:qy,GitCompare:Ny,GitCompareArrows:Uy,GitFork:Iy,GitGraph:jy,GitMerge:$y,GitMergeConflict:Zy,GitPullRequest:Qy,GitPullRequestArrow:Wy,GitPullRequestClosed:Gy,GitPullRequestCreate:Xy,GitPullRequestCreateArrow:Ky,GitPullRequestDraft:Jy,GlassWater:Yy,Glasses:tg,Globe:cg,Globe2:lh,GlobeCheck:eg,GlobeCode:ag,GlobeLock:hg,GlobeOff:dg,GlobeX:rg,Goal:ng,Gpu:pg,Grab:c5,GraduationCap:og,Grape:ig,GraphHub:sg,GraphStar:lg,Grid:I0,Grid2X2:d5,Grid2X2Check:a5,Grid2X2Plus:e5,Grid2X2X:h5,Grid2x2:d5,Grid2x2Check:a5,Grid2x2Plus:e5,Grid2x2X:h5,Grid3X3:I0,Grid3x2:Mg,Grid3x3:I0,Grip:vg,GripHorizontal:ug,GripVertical:fg,Groceries:mg,Group:xg,Guitar:gg,GuitarElectric:yg,HalfNote:r5,Ham:Ag,Hamburger:wg,Hammer:Hg,Hand:_g,HandCoins:Cg,HandFist:Vg,HandGrab:c5,HandHeart:Sg,HandHelping:n5,HandMetal:Lg,HandPlatter:bg,Handbag:Pg,HandleBottomRight:Og,Handshake:Rg,HardDrive:Tg,HardDriveDownload:Eg,HardDriveUpload:zg,HardHat:Dg,Hash:kg,HatGlasses:Bg,Haze:Fg,Hd:qg,HdmiPort:Ug,Heading:u5,Heading1:Ng,Heading2:Ig,Heading3:Zg,Heading4:jg,Heading5:$g,Heading6:Wg,HeadphoneOff:Gg,Headphones:Kg,Headset:Xg,Heart:dA,HeartCrack:Jg,HeartHandshake:Qg,HeartMinus:Yg,HeartOff:tA,HeartPlus:aA,HeartPulse:eA,HeartX:hA,Heater:cA,Helicopter:rA,HelpCircle:q0,HelpingHand:n5,Hexagon:nA,Highlighter:pA,HikingStick:iA,History:q5,HockeyStick:oA,Home:p5,Hop:lA,HopOff:sA,Hospital:MA,HotAirBalloon:uA,Hotel:fA,Hourglass:mA,HourglassCog:vA,House:p5,HouseCog:xA,HouseHeart:yA,HousePlug:gA,HousePlus:AA,HouseWifi:wA,Houses:HA,IceCream:i5,IceCream2:o5,IceCreamBowl:o5,IceCreamCone:i5,IdCard:VA,IdCardLanyard:CA,Image:EA,ImageDown:SA,ImageMinus:LA,ImageOff:bA,ImagePlay:_A,ImagePlus:PA,ImageUp:OA,ImageUpscale:RA,Images:zA,Import:TA,Inbox:DA,Indent:Z0,IndentDecrease:j0,IndentIncrease:Z0,IndianRupee:kA,Infinity:FA,Info:BA,Inspect:E4,InspectionPanel:qA,Italic:UA,IterationCcw:NA,IterationCw:IA,IvBag:jA,JapaneseYen:ZA,Joystick:WA,Kanban:$A,KanbanSquare:_4,KanbanSquareDashed:w4,Kayak:GA,KazakhTenge:KA,Key:YA,KeyRound:XA,KeySquare:JA,Keyboard:aw,KeyboardMusic:QA,KeyboardOff:tw,Lambda:ew,Lamp:pw,LampCeiling:hw,LampDesk:dw,LampFloor:rw,LampWallDown:cw,LampWallUp:nw,LandPlot:ow,Landmark:iw,Languages:lw,Laptop:Mw,Laptop2:s5,LaptopMinimal:s5,LaptopMinimalCheck:sw,Laser:uw,Lasso:vw,LassoSelect:fw,Laugh:yh,LayerArrowDown:mw,LayerArrowUp:yw,Layers:l5,Layers2:xw,Layers3:l5,LayersArrowDown:gw,LayersArrowUp:Aw,LayersMinus:ww,LayersPlus:Hw,Layout:T5,LayoutArrowDown:Cw,LayoutArrowRight:Vw,LayoutDashboard:Sw,LayoutFreeform:Lw,LayoutGrid:_w,LayoutGridCircles:bw,LayoutList:Pw,LayoutPanelLeft:Ow,LayoutPanelTop:Rw,LayoutTemplate:Ew,Leaf:zw,LeafyGreen:Tw,Lectern:Dw,Lens:Fw,LensConcave:kw,LensConvex:Bw,LetterA:qw,LetterB:M5,LetterC:Uw,LetterD:Nw,LetterE:Iw,LetterF:jw,LetterG:Zw,LetterH:u5,LetterI:$w,LetterJ:Ww,LetterK:Gw,LetterL:Kw,LetterM:Xw,LetterN:Jw,LetterO:Qw,LetterP:Yw,LetterQ:tH,LetterR:aH,LetterS:eH,LetterSpacing:hH,LetterT:dH,LetterText:Y4,LetterU:rH,LetterV:cH,LetterW:nH,LetterX:pH,LetterY:oH,LetterZ:iH,Letters:sH,Library:MH,LibraryBig:lH,LibrarySquare:P4,LifeBuoy:uH,Ligature:fH,Lightbulb:mH,LightbulbOff:vH,Lighthouse:xH,LineChart:we,LineDotBottomVertical:yH,LineDotLeftHorizontal:gH,LineDotRightHorizontal:AH,LineDotTopVertical:wH,LineHeight:HH,LineSquiggle:CH,LineStyle:VH,Link:bH,Link2:LH,Link2Off:SH,List:XH,ListCheck:_H,ListChecks:OH,ListChevronsDownUp:PH,ListChevronsUpDown:RH,ListClock:EH,ListCollapse:zH,ListEnd:TH,ListFilter:kH,ListFilterPlus:DH,ListIndentDecrease:j0,ListIndentIncrease:Z0,ListMinus:BH,ListMusic:FH,ListOrdered:qH,ListPlus:UH,ListRestart:NH,ListSortAscending:IH,ListSortDescending:jH,ListStart:ZH,ListTodo:$H,ListTree:WH,ListVideo:GH,ListX:KH,Loader:QH,Loader2:f5,LoaderCircle:f5,LoaderPinwheel:JH,Locate:aC,LocateFixed:YH,LocateOff:tC,LocationEdit:y5,Lock:hC,LockKeyhole:eC,LockKeyholeOpen:v5,LockOpen:m5,LogIn:dC,LogOut:rC,Logs:cC,Lollipop:nC,Luggage:pC,MSquare:G0,Magnet:oC,Mail:gC,MailBadge:iC,MailCheck:sC,MailClock:lC,MailDot:MC,MailMinus:uC,MailOpen:fC,MailPen:vC,MailPlus:mC,MailQuestion:x5,MailQuestionMark:x5,MailSearch:xC,MailWarning:AC,MailX:yC,Mailbox:HC,Mails:wC,Map:FC,MapMinus:CC,MapPin:DC,MapPinCheck:VC,MapPinCheckInside:SC,MapPinHouse:LC,MapPinMinus:PC,MapPinMinusInside:bC,MapPinOff:_C,MapPinPen:y5,MapPinPlus:RC,MapPinPlusInside:OC,MapPinSearch:EC,MapPinX:TC,MapPinXInside:zC,MapPinned:kC,MapPlus:BC,Margin:$C,MarginBottom:qC,MarginHorizontal:UC,MarginLeft:NC,MarginRight:IC,MarginTop:jC,MarginVertical:ZC,Mars:GC,MarsStroke:WC,Martini:KC,Maximize:JC,Maximize2:XC,Medal:QC,Megaphone:tV,MegaphoneOff:YC,Meh:gh,MemoryStick:aV,Menu:eV,MenuSquare:O4,Merge:hV,MessageCircle:vV,MessageCircleCheck:dV,MessageCircleCode:rV,MessageCircleDashed:nV,MessageCircleDashedCheck:cV,MessageCircleHeart:pV,MessageCircleMore:oV,MessageCircleOff:iV,MessageCirclePlus:sV,MessageCircleQuestion:g5,MessageCircleQuestionMark:g5,MessageCircleReply:lV,MessageCircleText:MV,MessageCircleWarning:uV,MessageCircleX:fV,MessageSquare:EV,MessageSquareCheck:mV,MessageSquareCode:xV,MessageSquareDashed:yV,MessageSquareDiff:gV,MessageSquareDot:AV,MessageSquareHeart:wV,MessageSquareLock:HV,MessageSquareMore:CV,MessageSquareOff:VV,MessageSquarePlus:SV,MessageSquareQuote:LV,MessageSquareReply:bV,MessageSquareShare:_V,MessageSquareText:PV,MessageSquareWarning:OV,MessageSquareX:RV,MessagesCircle:zV,MessagesSquare:TV,Metronome:kV,Mic:FV,Mic2:w5,MicAudioLines:BV,MicOff:DV,MicSignal:A5,MicVocal:w5,Microchip:qV,Microscope:UV,Microwave:NV,MidiPort:jV,Milestone:IV,Milk:$V,MilkOff:ZV,Minimize:GV,Minimize2:WV,Minus:KV,MinusCircle:$e,MinusSquare:R4,MirrorRectangular:XV,MirrorRound:JV,Monitor:MS,MonitorActivity:QV,MonitorCheck:YV,MonitorCloud:tS,MonitorCog:aS,MonitorDot:eS,MonitorDown:hS,MonitorOff:dS,MonitorPause:rS,MonitorPc:cS,MonitorPlay:nS,MonitorSmartphone:oS,MonitorSpeaker:pS,MonitorStop:iS,MonitorUp:sS,MonitorX:lS,Moon:fS,MoonStar:uS,Mop:mS,MopSparkles:vS,MoreHorizontal:vh,MoreVertical:fh,Mosque:xS,Motorbike:yS,Mountain:AS,MountainSnow:gS,Mouse:PS,MouseLeft:wS,MouseOff:HS,MousePointer:_S,MousePointer2:VS,MousePointer2Off:CS,MousePointerBan:SS,MousePointerClick:LS,MousePointerSquareDashed:H4,MouseRight:bS,Mouth:RS,MouthOff:OS,Move:ZS,Move3D:H5,Move3d:H5,MoveDiagonal:zS,MoveDiagonal2:ES,MoveDown:kS,MoveDownLeft:TS,MoveDownRight:DS,MoveHorizontal:BS,MoveLeft:FS,MoveRight:qS,MoveUp:IS,MoveUpLeft:US,MoveUpRight:NS,MoveVertical:jS,Music:uh,Music2:Mh,Music3:r5,Music4:G5,Navigation:KS,Navigation2:WS,Navigation2Off:$S,NavigationOff:GS,NepaliRupee:XS,Network:JS,Newspaper:QS,Nfc:YS,NonBinary:tL,Notebook:rL,NotebookDot:aL,NotebookPen:eL,NotebookTabs:hL,NotebookText:dL,NotepadText:pL,NotepadTextDashed:cL,Numbers:nL,Nut:iL,NutOff:oL,Octagon:lL,OctagonAlert:C5,OctagonMinus:sL,OctagonPause:V5,OctagonX:S5,Omega:ML,Option:uL,Orbit:fL,Origami:vL,Outdent:j0,Package:CL,Package2:mL,PackageCheck:xL,PackageMinus:yL,PackageOpen:gL,PackagePlus:AL,PackageSearch:wL,PackageX:HL,PaintBucket:VL,PaintRoller:SL,Paintbrush:LL,Paintbrush2:L5,PaintbrushVertical:L5,Palette:bL,Palmtree:hd,Panda:_L,PanelBottom:RL,PanelBottomClose:PL,PanelBottomDashed:b5,PanelBottomInactive:b5,PanelBottomOpen:OL,PanelLeft:R5,PanelLeftClose:_5,PanelLeftDashed:P5,PanelLeftInactive:P5,PanelLeftOpen:O5,PanelLeftRightDashed:EL,PanelRight:DL,PanelRightClose:zL,PanelRightDashed:E5,PanelRightInactive:E5,PanelRightOpen:TL,PanelTop:UL,PanelTopBottomDashed:kL,PanelTopClose:BL,PanelTopDashed:z5,PanelTopInactive:z5,PanelTopOpen:FL,PanelsLeftBottom:qL,PanelsLeftRight:oh,PanelsRightBottom:NL,PanelsTopBottom:I5,PanelsTopLeft:T5,PaperBag:IL,Paperclip:jL,Parasol:$L,Parentheses:ZL,Park:WL,ParkingCircle:F0,ParkingCircleOff:B0,ParkingMeter:GL,ParkingSquare:X0,ParkingSquareOff:K0,PartyPopper:KL,Pause:XL,PauseCircle:We,PauseOctagon:V5,PawPrint:JL,PcCase:QL,Pen:k5,PenBox:U2,PenLine:D5,PenOff:YL,PenSquare:U2,PenTool:tb,Pencil:db,PencilLine:ab,PencilOff:eb,PencilRuler:hb,PencilSparkles:rb,Pentagon:cb,Percent:nb,PercentCircle:Ge,PercentDiamond:sh,PercentSquare:z4,PerfumeBottle:pb,PersonStanding:ob,Phi:ib,PhilippinePeso:sb,Phone:yb,PhoneCall:lb,PhoneForwarded:Mb,PhoneIncoming:ub,PhoneLog:fb,PhoneMissed:vb,PhoneOff:xb,PhoneOutgoing:mb,Pi:gb,PiSquare:T4,Piano:Ab,Pickaxe:wb,PictureInPicture:Vb,PictureInPicture2:Hb,PieChart:Se,PiggyBank:Cb,Pilcrow:bb,PilcrowLeft:Sb,PilcrowRight:Lb,PilcrowSquare:D4,Pill:_b,PillBottle:Pb,Pin:Rb,PinOff:Ob,Pipette:zb,Pizza:Eb,Plane:kb,PlaneLanding:Tb,PlaneTakeoff:Db,PlantPot:Bb,Play:Fb,PlayCircle:Ke,PlayOff:qb,PlaySquare:k4,PlayingCard:Ub,PlayingCards:Ib,PlayingCardsFan:Nb,Plug:Zb,Plug2:jb,PlugZap:B5,PlugZap2:B5,Plus:$b,PlusCircle:Xe,PlusSquare:B4,PocketKnife:Wb,Podcast:A5,Podium:Gb,Pointer:Xb,PointerOff:Kb,Popcorn:Jb,Popsicle:Qb,PoundSterling:Yb,Power:a_,PowerCircle:Je,PowerOff:t_,PowerSquare:F4,Presentation:h_,Printer:c_,Printer3d:e_,PrinterCheck:d_,PrinterX:r_,Projector:n_,Proportions:p_,Puzzle:o_,Pyramid:i_,QrCode:s_,Quote:l_,Rabbit:M_,Radar:u_,Radiation:f_,Radical:v_,Radio:g_,RadioOff:m_,RadioReceiver:x_,RadioTower:y_,Radius:A_,Rainbow:w_,Rat:H_,Ratio:C_,Receipt:z_,ReceiptCent:V_,ReceiptEuro:S_,ReceiptIndianRupee:L_,ReceiptJapaneseYen:b_,ReceiptPoundSterling:__,ReceiptRussianRuble:P_,ReceiptSwissFranc:O_,ReceiptText:R_,ReceiptTurkishLira:E_,RectangleCircle:T_,RectangleEllipsis:F5,RectangleGoggles:D_,RectangleHorizontal:k_,RectangleVertical:B_,Recycle:F_,Redo:N_,Redo2:q_,RedoDot:U_,RefreshCcw:j_,RefreshCcwDot:I_,RefreshCw:$_,RefreshCwOff:Z_,Refrigerator:W_,Regex:K_,RemoveFormatting:G_,Repeat:Y_,Repeat1:X_,Repeat2:J_,RepeatOff:Q_,Replace:tP,ReplaceAll:aP,Reply:hP,ReplyAll:eP,Rewind:dP,Ribbon:cP,Road:rP,RobotArm:nP,RobotVacuum:pP,Rocket:oP,RockingChair:iP,RollerCoaster:sP,Rose:lP,Rotate3D:U5,Rotate3d:U5,RotateCcw:fP,RotateCcwClock:q5,RotateCcwKey:MP,RotateCcwSquare:uP,RotateCw:yP,RotateCwClock:vP,RotateCwFadingClock:xP,RotateCwSquare:mP,Route:AP,RouteOff:gP,Router:wP,Rows:N5,Rows2:N5,Rows3:I5,Rows4:HP,Rss:CP,RugbyBall:VP,Ruler:LP,RulerDimensionLine:SP,RussianRuble:OP,Sailboat:bP,Salad:_P,Sandwich:PP,Satellite:EP,SatelliteDish:RP,SaudiRiyal:TP,Save:qP,SaveAll:zP,SaveCheck:DP,SaveOff:FP,SavePen:kP,SavePlus:BP,Scale:UP,Scale3D:j5,Scale3d:j5,Scaling:NP,Scan:YP,ScanBarcode:IP,ScanBox:jP,ScanEye:ZP,ScanFace:$P,ScanHeart:WP,ScanLine:GP,ScanQrCode:KP,ScanSearch:XP,ScanSquare:JP,ScanText:QP,ScatterChart:Le,School:tO,School2:pd,Scissors:eO,ScissorsLineDashed:aO,ScissorsSquare:q4,ScissorsSquareDashedBottom:l4,Scooter:hO,ScratchBlocks:dO,ScreenShare:cO,ScreenShareOff:rO,Screw:nO,Scroll:oO,ScrollText:pO,Search:fO,SearchAlert:iO,SearchCheck:sO,SearchCode:lO,SearchSlash:MO,SearchX:uO,Section:vO,Send:xO,SendHorizonal:Z5,SendHorizontal:Z5,SendToBack:mO,SeparatorHorizontal:yO,SeparatorVertical:gO,Server:SO,ServerCog:AO,ServerCrash:wO,ServerNas:HO,ServerOff:CO,ServerPlus:VO,Settings:bO,Settings2:LO,Shapes:_O,Share:OO,Share2:PO,Sheet:RO,Shell:EO,ShelvingUnit:zO,Shield:KO,ShieldAlert:TO,ShieldBan:DO,ShieldCheck:kO,ShieldClose:W5,ShieldCog:FO,ShieldCogCorner:BO,ShieldEllipsis:qO,ShieldHalf:UO,ShieldHouse:NO,ShieldKeyhole:IO,ShieldLock:jO,ShieldMinus:ZO,ShieldOff:$O,ShieldPlus:WO,ShieldQuestion:$5,ShieldQuestionMark:$5,ShieldUser:GO,ShieldX:W5,Ship:QO,ShipCargo:XO,ShipWheel:JO,Shirt:YO,ShoppingBag:tR,ShoppingBasket:aR,ShoppingCart:dR,ShoppingCartMinus:eR,ShoppingCartPlus:hR,Shovel:rR,ShowerHead:nR,Shredder:cR,Shrimp:oR,ShrimpOff:pR,Shrink:iR,Shrub:sR,Shuffle:lR,Sidebar:R5,SidebarClose:_5,SidebarOpen:O5,Sigma:MR,SigmaSquare:U4,Signal:xR,SignalHigh:uR,SignalLow:fR,SignalMedium:vR,SignalZero:mR,Signature:yR,Signpost:AR,SignpostBig:gR,Siren:HR,SirenOff:wR,SixteenthNotes:G5,SkipBack:CR,SkipForward:VR,Skull:SR,Slash:LR,SlashSquare:N4,Slice:bR,Sliders:K5,SlidersHorizontal:_R,SlidersVertical:K5,Smartphone:ER,SmartphoneCharging:PR,SmartphoneNfc:OR,SmartphoneUserRound:RR,Smile:Hh,SmilePlus:wh,Snail:zR,Snowflake:TR,SoapDispenserDroplet:DR,Sofa:kR,SolarPanel:BR,SortAsc:he,SortDesc:ae,Soup:FR,Space:qR,Spade:UR,Sparkle:NR,Sparkles:X5,Speaker:IR,Speech:jR,SpellCheck:$R,SpellCheck2:ZR,Spline:GR,SplinePointer:WR,Split:XR,SplitSquareHorizontal:I4,SplitSquareVertical:j4,Spool:KR,SportShoe:JR,Spotlight:QR,SprayCan:YR,Sprout:tE,Square:hz,SquareActivity:J5,SquareArrowDown:t4,SquareArrowDownLeft:Q5,SquareArrowDownRight:a4,SquareArrowLeft:Y5,SquareArrowOutDownLeft:e4,SquareArrowOutDownRight:h4,SquareArrowOutUpLeft:d4,SquareArrowOutUpRight:r4,SquareArrowRight:c4,SquareArrowRightEnter:aE,SquareArrowRightExit:eE,SquareArrowUp:o4,SquareArrowUpLeft:n4,SquareArrowUpRight:p4,SquareAsterisk:i4,SquareBookmark:s4,SquareBottomDashedScissors:l4,SquareCenterlineDashedHorizontal:M4,SquareCenterlineDashedVertical:u4,SquareChartGantt:$0,SquareCheck:v4,SquareCheckBig:f4,SquareChevronDown:m4,SquareChevronLeft:x4,SquareChevronRight:y4,SquareChevronUp:g4,SquareChevronsDown:dE,SquareChevronsLeft:hE,SquareChevronsRight:rE,SquareChevronsUp:cE,SquareCode:A4,SquareDashed:C4,SquareDashedBottom:pE,SquareDashedBottomCode:nE,SquareDashedKanban:w4,SquareDashedMousePointer:H4,SquareDashedPlus:oE,SquareDashedText:W0,SquareDashedTopSolid:iE,SquareDashedX:lE,SquareDashedXCorner:sE,SquareDimensions:ME,SquareDivide:S4,SquareDot:V4,SquareEqual:L4,SquareExclamationPoint:uE,SquareFunction:b4,SquareGanttChart:$0,SquareKanban:_4,SquareKanbanPlus:fE,SquareLetterA:vE,SquareLetterB:mE,SquareLetterC:xE,SquareLetterD:gE,SquareLetterE:yE,SquareLetterF:AE,SquareLetterG:wE,SquareLetterH:CE,SquareLetterI:HE,SquareLetterJ:VE,SquareLetterK:SE,SquareLetterL:LE,SquareLetterM:G0,SquareLetterN:bE,SquareLetterO:_E,SquareLetterP:X0,SquareLetterPOff:K0,SquareLetterQ:PE,SquareLetterR:OE,SquareLetterS:RE,SquareLetterT:EE,SquareLetterU:zE,SquareLetterV:TE,SquareLetterW:DE,SquareLetterX:kE,SquareLetterY:BE,SquareLetterZ:FE,SquareLibrary:P4,SquareM:G0,SquareMenu:O4,SquareMinus:R4,SquareMousePointer:E4,SquareOff:qE,SquarePadding:WE,SquarePaddingBottom:UE,SquarePaddingHorizontal:NE,SquarePaddingLeft:IE,SquarePaddingRight:jE,SquarePaddingTop:ZE,SquarePaddingVertical:$E,SquareParking:X0,SquareParkingOff:K0,SquarePause:GE,SquarePen:U2,SquarePercent:z4,SquarePi:T4,SquarePilcrow:D4,SquarePlay:k4,SquarePlus:B4,SquarePower:F4,SquareRadical:KE,SquareRoundCorner:XE,SquareScissors:q4,SquareSigma:U4,SquareSlash:N4,SquareSparkles:JE,SquareSplitHorizontal:I4,SquareSplitVertical:j4,SquareSquare:QE,SquareStack:YE,SquareStar:tz,SquareStop:az,SquareTerminal:Z4,SquareText:ez,SquareUser:W4,SquareUserRound:$4,SquareX:G4,SquaresExclude:dz,SquaresIntersect:rz,SquaresSubtract:cz,SquaresUnite:nz,Squircle:oz,SquircleDashed:pz,Squirrel:iz,Stamp:sz,Star:xz,StarCheck:lz,StarHalf:Mz,StarMinus:uz,StarOff:fz,StarPlus:vz,StarX:mz,Stars:X5,StepBack:yz,StepForward:gz,Stethoscope:Az,Sticker:wz,StickyNote:bz,StickyNoteCheck:Hz,StickyNoteMinus:Vz,StickyNoteOff:Cz,StickyNotePlus:Sz,StickyNoteX:Lz,StickyNotes:_z,Stone:Pz,StopCircle:Ye,Store:Oz,StretchHorizontal:Rz,StretchVertical:Ez,Strikethrough:zz,Subscript:Tz,Subtitles:ue,Summary:Dz,Sun:Uz,SunDim:kz,SunMedium:Bz,SunMoon:Fz,SunSnow:qz,Sunrise:Nz,Sunset:Iz,Superscript:jz,SwatchBook:Zz,SwissFranc:$z,SwitchCamera:Wz,Sword:Gz,Swords:Kz,Syringe:Xz,Table:hT,Table2:Jz,TableCellsMerge:Qz,TableCellsSplit:Yz,TableColumnsSplit:tT,TableConfig:U0,TableOfContents:aT,TableProperties:eT,TableRowsSplit:dT,Tablet:cT,TabletSmartphone:rT,Tablets:nT,Tag:iT,TagPlus:pT,TagX:oT,Tags:sT,Tally1:lT,Tally2:uT,Tally3:MT,Tally4:fT,Tally5:vT,Tangent:mT,Target:yT,Telescope:xT,Tent:AT,TentTree:gT,Terminal:wT,TerminalSquare:Z4,TestTube:HT,TestTube2:K4,TestTubeDiagonal:K4,TestTubes:CT,Text:J0,TextAlignCenter:X4,TextAlignEnd:J4,TextAlignJustify:Q4,TextAlignJustifyCenter:VT,TextAlignJustifyEnd:ST,TextAlignJustifyStart:LT,TextAlignStart:J0,TextCursor:_T,TextCursorInput:bT,TextInitial:Y4,TextQuote:PT,TextSearch:OT,TextSelect:W0,TextSelection:W0,TextWrap:td,Theater:RT,Thermometer:TT,ThermometerSnowflake:ET,ThermometerSun:zT,ThumbsDown:DT,ThumbsUp:kT,TicTacToe:BT,Ticket:ZT,TicketCheck:qT,TicketMinus:FT,TicketPercent:UT,TicketPlus:NT,TicketSlash:jT,TicketX:IT,Tickets:WT,TicketsPlane:$T,Timeline:GT,Timer:JT,TimerOff:KT,TimerReset:XT,ToggleLeft:YT,ToggleRight:QT,Toilet:tD,Tombstone:aD,ToolCase:eD,Toolbox:hD,Toothbrush:dD,ToothbrushSparkles:rD,Tornado:cD,Torus:nD,Touchpad:oD,TouchpadOff:pD,TowelRack:iD,TowerControl:sD,ToyBrick:lD,Tractor:MD,TrafficCone:uD,Trailer:fD,Train:ad,TrainFront:mD,TrainFrontTunnel:vD,TrainTrack:xD,TramFront:ad,Transgender:yD,Trash:ed,Trash2:ed,TrashOff:gD,TreeDeciduous:AD,TreePalm:hd,TreePine:wD,Trees:HD,TrendingDown:CD,TrendingUp:SD,TrendingUpDown:VD,Triangle:_D,TriangleAlert:dd,TriangleDashed:bD,TriangleRight:LD,TrianglesCenterlineDashedHorizontal:rd,TrianglesCenterlineDashedVertical:cd,Trophy:PD,Truck:RD,TruckElectric:OD,TubeLotion:ED,TurkishLira:zD,Turntable:TD,Turtle:DD,Tv:BD,Tv2:nd,TvMinimal:nd,TvMinimalPlay:kD,Type:qD,TypeOutline:FD,Umbrella:ND,UmbrellaOff:UD,Underline:ID,Undo:$D,Undo2:jD,UndoDot:ZD,UnfoldHorizontal:WD,UnfoldVertical:GD,Ungroup:KD,University:pd,Unlink:JD,Unlink2:XD,Unlock:m5,UnlockKeyhole:v5,Unplug:QD,Upload:YD,UploadCloud:ch,Usb:ak,UsbCPort:tk,User:Ak,User2:ud,UserCheck:ek,UserCheck2:od,UserCircle:ah,UserCircle2:th,UserCog:hk,UserCog2:id,UserGroup:dk,UserKey:rk,UserLock:ck,UserMinus:nk,UserMinus2:sd,UserPen:pk,UserPlus:ok,UserPlus2:ld,UserRound:ud,UserRoundArrowLeft:ik,UserRoundCheck:od,UserRoundCog:id,UserRoundGroup:sk,UserRoundKey:lk,UserRoundMinus:sd,UserRoundPen:Mk,UserRoundPlus:ld,UserRoundSearch:uk,UserRoundShield:fk,UserRoundStar:vk,UserRoundX:Md,UserSearch:mk,UserShield:xk,UserSquare:W4,UserSquare2:$4,UserStar:yk,UserX:gk,UserX2:Md,Users:Ck,Users2:fd,UsersCollaboration:wk,UsersRound:fd,UsersRoundCollaboration:Hk,Utensils:md,UtensilsCrossed:vd,UtilityPole:Vk,Van:Sk,Variable:Lk,Vault:bk,VectorPolygon:_k,VectorSquare:Pk,Vegan:Ok,VenetianMask:Rk,Venus:zk,VenusAndMars:Ek,Verified:ce,Vibrate:Dk,VibrateOff:Tk,Video:Bk,VideoOff:kk,Videotape:Fk,View:qk,Virus:Nk,VirusOff:Uk,Voicemail:Ik,Volleyball:jk,Volume:Kk,Volume1:Zk,Volume2:$k,VolumeOff:Wk,VolumeX:Gk,Vote:Xk,Wallet:Qk,Wallet2:xd,WalletCards:Jk,WalletMinimal:xd,Wallpaper:Yk,Wand:tB,Wand2:yd,WandSparkles:yd,Warehouse:aB,WashingMachine:eB,Watch:hB,Waves:gd,WavesArrowDown:dB,WavesArrowUp:rB,WavesHorizontal:gd,WavesLadder:cB,WavesVertical:nB,Waypoints:pB,Webcam:iB,WebcamOff:oB,Webhook:lB,WebhookOff:sB,Weight:uB,WeightTilde:MB,Wheat:vB,WheatOff:fB,Whistle:mB,WholeWord:xB,Wifi:LB,WifiCog:yB,WifiHigh:gB,WifiLock:wB,WifiLow:AB,WifiOff:HB,WifiPen:CB,WifiSync:VB,WifiZero:SB,Wind:PB,WindArrowDown:bB,WindArrowUp:_B,Wine:RB,WineOff:OB,Workflow:EB,Worm:zB,WrapText:td,Wrench:DB,WrenchOff:TB,X:BB,XCircle:eh,XLineTop:kB,XOctagon:S5,XSquare:G4,Zap:qB,ZapOff:FB,ZodiacAquarius:UB,ZodiacAries:NB,ZodiacCancer:IB,ZodiacCapricorn:jB,ZodiacGemini:ZB,ZodiacLeo:$B,ZodiacLibra:WB,ZodiacOphiuchus:GB,ZodiacPisces:KB,ZodiacSagittarius:XB,ZodiacScorpio:JB,ZodiacTaurus:QB,ZodiacVirgo:YB,ZoomIn:tF,ZoomOut:aF},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=({icons:t={},nameAttr:a="data-lucide",attrs:e={},root:h=document,inTemplates:d}={})=>{if(!Object.values(t).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof h>"u")throw new Error("`createIcons()` only works in a browser environment.");if(Array.from(h.querySelectorAll(`[${a}]`)).forEach(c=>Ga(c,{nameAttr:a,icons:t,attrs:e})),d&&Array.from(h.querySelectorAll("template")).forEach(n=>O2({icons:t,nameAttr:a,attrs:e,root:n.content,inTemplates:d})),a==="data-lucide"){const c=h.querySelectorAll("[icon-name]");c.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(c).forEach(n=>Ga(n,{nameAttr:"icon-name",icons:t,attrs:e})))}};window.Alpine=I1;window.createIcons=O2;window.lucideIcons=v0;I1.store("theme",{dark:localStorage.getItem("theme")!=="light",init(){this.dark?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},toggle(){this.dark=!this.dark,this.dark?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))}});I1.data("typewriter",(t=[],a=85,e=45,h=2200)=>({words:Array.isArray(t)&&t.length?t:["Full-Stack Developer","Laravel Architect","Database Engineer"],currentIndex:0,displayText:"",isTyping:!0,init(){this.type()},type(){const d=this.words[this.currentIndex]||"";this.isTyping?this.displayText.length<d.length?(this.displayText=d.slice(0,this.displayText.length+1),setTimeout(()=>this.type(),a)):(this.isTyping=!1,setTimeout(()=>this.type(),h)):this.displayText.length>0?(this.displayText=this.displayText.slice(0,-1),setTimeout(()=>this.type(),e)):(this.isTyping=!0,this.currentIndex=(this.currentIndex+1)%this.words.length,setTimeout(()=>this.type(),350))}}));I1.data("counter",(t=0,a=1400)=>({count:0,target:Number(t)||0,started:!1,init(){if(typeof IntersectionObserver<"u"){const e=new IntersectionObserver(h=>{h[0].isIntersecting&&!this.started&&(this.started=!0,this.startCount(),e.disconnect())},{threshold:.2});e.observe(this.$el)}else this.count=this.target},startCount(){const e=this.target;if(e===0){this.count=0;return}const h=performance.now(),d=r=>{const c=Math.min((r-h)/a,1),n=c===1?1:1-Math.pow(2,-10*c);this.count=Math.floor(n*e),c<1?requestAnimationFrame(d):this.count=e};requestAnimationFrame(d)}}));I1.data("clipboard",()=>({copied:!1,copy(t){navigator.clipboard&&navigator.clipboard.writeText(t).then(()=>{this.copied=!0,setTimeout(()=>this.copied=!1,2500)})}}));I1.store("scrollProgress",{percent:0,visible:!1,init(){window.addEventListener("scroll",()=>{const t=document.documentElement.scrollHeight-window.innerHeight;this.percent=t>0?Math.round(window.scrollY/t*100):0,this.visible=window.scrollY>300},{passive:!0})},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}});I1.start();function aa(){document.querySelectorAll(".spotlight-card, .glass-card").forEach(a=>{a.addEventListener("pointermove",e=>{const h=a.getBoundingClientRect(),d=e.clientX-h.left,r=e.clientY-h.top;a.style.setProperty("--mouse-x",`${d}px`),a.style.setProperty("--mouse-y",`${r}px`)},{passive:!0})})}function ea(){if(typeof IntersectionObserver>"u")return;const t=document.querySelectorAll(".reveal-on-scroll"),a=new IntersectionObserver(e=>{e.forEach(h=>{h.isIntersecting&&(h.target.classList.add("is-revealed"),a.unobserve(h.target))})},{threshold:.1,rootMargin:"0px 0px -40px 0px"});t.forEach(e=>a.observe(e))}document.addEventListener("DOMContentLoaded",()=>{O2({icons:v0}),aa(),ea()});document.addEventListener("alpine:initialized",()=>{O2({icons:v0}),aa(),ea()});window.refreshIcons=()=>{O2({icons:v0}),aa(),ea()};
