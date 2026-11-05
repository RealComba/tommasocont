(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yd(i){const e=Object.create(null);for(const t of i.split(","))e[t]=1;return t=>t in e}const Nt={},Va=[],fr=()=>{},H_=()=>!1,du=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),bd=i=>i.startsWith("onUpdate:"),Kn=Object.assign,Ed=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Jv=Object.prototype.hasOwnProperty,yt=(i,e)=>Jv.call(i,e),et=Array.isArray,Ha=i=>pu(i)==="[object Map]",G_=i=>pu(i)==="[object Set]",st=i=>typeof i=="function",rn=i=>typeof i=="string",Es=i=>typeof i=="symbol",Ht=i=>i!==null&&typeof i=="object",W_=i=>(Ht(i)||st(i))&&st(i.then)&&st(i.catch),X_=Object.prototype.toString,pu=i=>X_.call(i),Qv=i=>pu(i).slice(8,-1),Y_=i=>pu(i)==="[object Object]",Td=i=>rn(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Wo=yd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),mu=i=>{const e=Object.create(null);return(t=>e[t]||(e[t]=i(t)))},ex=/-\w/g,gs=mu(i=>i.replace(ex,e=>e.slice(1).toUpperCase())),tx=/\B([A-Z])/g,Ts=mu(i=>i.replace(tx,"-$1").toLowerCase()),q_=mu(i=>i.charAt(0).toUpperCase()+i.slice(1)),Uu=mu(i=>i?`on${q_(i)}`:""),hs=(i,e)=>!Object.is(i,e),Fu=(i,...e)=>{for(let t=0;t<i.length;t++)i[t](...e)},$_=(i,e,t,n=!1)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,writable:n,value:t})},nx=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Lp;const _u=()=>Lp||(Lp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Al(i){if(et(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=rn(n)?ax(n):Al(n);if(r)for(const s in r)e[s]=r[s]}return e}else if(rn(i)||Ht(i))return i}const ix=/;(?![^(]*\))/g,rx=/:([^]+)/,sx=/\/\*[^]*?\*\//g;function ax(i){const e={};return i.replace(sx,"").split(ix).forEach(t=>{if(t){const n=t.split(rx);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function $s(i){let e="";if(rn(i))e=i;else if(et(i))for(let t=0;t<i.length;t++){const n=$s(i[t]);n&&(e+=n+" ")}else if(Ht(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const ox="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",lx=yd(ox);function j_(i){return!!i||i===""}const K_=i=>!!(i&&i.__v_isRef===!0),Ze=i=>rn(i)?i:i==null?"":et(i)||Ht(i)&&(i.toString===X_||!st(i.toString))?K_(i)?Ze(i.value):JSON.stringify(i,Z_,2):String(i),Z_=(i,e)=>K_(e)?Z_(i,e.value):Ha(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r],s)=>(t[Nu(n,s)+" =>"]=r,t),{})}:G_(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Nu(t))}:Es(e)?Nu(e):Ht(e)&&!et(e)&&!Y_(e)?String(e):e,Nu=(i,e="")=>{var t;return Es(i)?`Symbol(${(t=i.description)!=null?t:e})`:i};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ei;class cx{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ei,!e&&ei&&(this.index=(ei.scopes||(ei.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=ei;try{return ei=this,e()}finally{ei=t}}}on(){++this._on===1&&(this.prevScope=ei,ei=this)}off(){this._on>0&&--this._on===0&&(ei=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ux(){return ei}let Ft;const Ou=new WeakSet;class J_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ei&&ei.active&&ei.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ou.has(this)&&(Ou.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||eg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ip(this),tg(this);const e=Ft,t=Ki;Ft=this,Ki=!0;try{return this.fn()}finally{ng(this),Ft=e,Ki=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Cd(e);this.deps=this.depsTail=void 0,Ip(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ou.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Hf(this)&&this.run()}get dirty(){return Hf(this)}}let Q_=0,Xo,Yo;function eg(i,e=!1){if(i.flags|=8,e){i.next=Yo,Yo=i;return}i.next=Xo,Xo=i}function wd(){Q_++}function Ad(){if(--Q_>0)return;if(Yo){let e=Yo;for(Yo=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let i;for(;Xo;){let e=Xo;for(Xo=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(n){i||(i=n)}e=t}}if(i)throw i}function tg(i){for(let e=i.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ng(i){let e,t=i.depsTail,n=t;for(;n;){const r=n.prevDep;n.version===-1?(n===t&&(t=r),Cd(n),fx(n)):e=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=r}i.deps=e,i.depsTail=t}function Hf(i){for(let e=i.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ig(e.dep.computed)||e.dep.version!==e.version))return!0;return!!i._dirty}function ig(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===cl)||(i.globalVersion=cl,!i.isSSR&&i.flags&128&&(!i.deps&&!i._dirty||!Hf(i))))return;i.flags|=2;const e=i.dep,t=Ft,n=Ki;Ft=i,Ki=!0;try{tg(i);const r=i.fn(i._value);(e.version===0||hs(r,i._value))&&(i.flags|=128,i._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ft=t,Ki=n,ng(i),i.flags&=-3}}function Cd(i,e=!1){const{dep:t,prevSub:n,nextSub:r}=i;if(n&&(n.nextSub=r,i.prevSub=void 0),r&&(r.prevSub=n,i.nextSub=void 0),t.subs===i&&(t.subs=n,!n&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Cd(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function fx(i){const{prevDep:e,nextDep:t}=i;e&&(e.nextDep=t,i.prevDep=void 0),t&&(t.prevDep=e,i.nextDep=void 0)}let Ki=!0;const rg=[];function kr(){rg.push(Ki),Ki=!1}function Vr(){const i=rg.pop();Ki=i===void 0?!0:i}function Ip(i){const{cleanup:e}=i;if(i.cleanup=void 0,e){const t=Ft;Ft=void 0;try{e()}finally{Ft=t}}}let cl=0;class hx{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Rd{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ft||!Ki||Ft===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ft)t=this.activeLink=new hx(Ft,this),Ft.deps?(t.prevDep=Ft.depsTail,Ft.depsTail.nextDep=t,Ft.depsTail=t):Ft.deps=Ft.depsTail=t,sg(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const n=t.nextDep;n.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=n),t.prevDep=Ft.depsTail,t.nextDep=void 0,Ft.depsTail.nextDep=t,Ft.depsTail=t,Ft.deps===t&&(Ft.deps=n)}return t}trigger(e){this.version++,cl++,this.notify(e)}notify(e){wd();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ad()}}}function sg(i){if(i.dep.sc++,i.sub.flags&4){const e=i.dep.computed;if(e&&!i.dep.subs){e.flags|=20;for(let n=e.deps;n;n=n.nextDep)sg(n)}const t=i.dep.subs;t!==i&&(i.prevSub=t,t&&(t.nextSub=i)),i.dep.subs=i}}const Gf=new WeakMap,js=Symbol(""),Wf=Symbol(""),ul=Symbol("");function Cn(i,e,t){if(Ki&&Ft){let n=Gf.get(i);n||Gf.set(i,n=new Map);let r=n.get(t);r||(n.set(t,r=new Rd),r.map=n,r.key=t),r.track()}}function Pr(i,e,t,n,r,s){const a=Gf.get(i);if(!a){cl++;return}const o=l=>{l&&l.trigger()};if(wd(),e==="clear")a.forEach(o);else{const l=et(i),c=l&&Td(t);if(l&&t==="length"){const u=Number(n);a.forEach((f,h)=>{(h==="length"||h===ul||!Es(h)&&h>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(ul)),e){case"add":l?c&&o(a.get("length")):(o(a.get(js)),Ha(i)&&o(a.get(Wf)));break;case"delete":l||(o(a.get(js)),Ha(i)&&o(a.get(Wf)));break;case"set":Ha(i)&&o(a.get(js));break}}Ad()}function ha(i){const e=Mt(i);return e===i?e:(Cn(e,"iterate",ul),Vi(i)?e:e.map(xn))}function gu(i){return Cn(i=Mt(i),"iterate",ul),i}const dx={__proto__:null,[Symbol.iterator](){return Bu(this,Symbol.iterator,xn)},concat(...i){return ha(this).concat(...i.map(e=>et(e)?ha(e):e))},entries(){return Bu(this,"entries",i=>(i[1]=xn(i[1]),i))},every(i,e){return Mr(this,"every",i,e,void 0,arguments)},filter(i,e){return Mr(this,"filter",i,e,t=>t.map(xn),arguments)},find(i,e){return Mr(this,"find",i,e,xn,arguments)},findIndex(i,e){return Mr(this,"findIndex",i,e,void 0,arguments)},findLast(i,e){return Mr(this,"findLast",i,e,xn,arguments)},findLastIndex(i,e){return Mr(this,"findLastIndex",i,e,void 0,arguments)},forEach(i,e){return Mr(this,"forEach",i,e,void 0,arguments)},includes(...i){return zu(this,"includes",i)},indexOf(...i){return zu(this,"indexOf",i)},join(i){return ha(this).join(i)},lastIndexOf(...i){return zu(this,"lastIndexOf",i)},map(i,e){return Mr(this,"map",i,e,void 0,arguments)},pop(){return xo(this,"pop")},push(...i){return xo(this,"push",i)},reduce(i,...e){return Up(this,"reduce",i,e)},reduceRight(i,...e){return Up(this,"reduceRight",i,e)},shift(){return xo(this,"shift")},some(i,e){return Mr(this,"some",i,e,void 0,arguments)},splice(...i){return xo(this,"splice",i)},toReversed(){return ha(this).toReversed()},toSorted(i){return ha(this).toSorted(i)},toSpliced(...i){return ha(this).toSpliced(...i)},unshift(...i){return xo(this,"unshift",i)},values(){return Bu(this,"values",xn)}};function Bu(i,e,t){const n=gu(i),r=n[e]();return n!==i&&!Vi(i)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const px=Array.prototype;function Mr(i,e,t,n,r,s){const a=gu(i),o=a!==i&&!Vi(i),l=a[e];if(l!==px[e]){const f=l.apply(i,s);return o?xn(f):f}let c=t;a!==i&&(o?c=function(f,h){return t.call(this,xn(f),h,i)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,i)}));const u=l.call(a,c,n);return o&&r?r(u):u}function Up(i,e,t,n){const r=gu(i);let s=t;return r!==i&&(Vi(i)?t.length>3&&(s=function(a,o,l){return t.call(this,a,o,l,i)}):s=function(a,o,l){return t.call(this,a,xn(o),l,i)}),r[e](s,...n)}function zu(i,e,t){const n=Mt(i);Cn(n,"iterate",ul);const r=n[e](...t);return(r===-1||r===!1)&&Id(t[0])?(t[0]=Mt(t[0]),n[e](...t)):r}function xo(i,e,t=[]){kr(),wd();const n=Mt(i)[e].apply(i,t);return Ad(),Vr(),n}const mx=yd("__proto__,__v_isRef,__isVue"),ag=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Es));function _x(i){Es(i)||(i=String(i));const e=Mt(this);return Cn(e,"has",i),e.hasOwnProperty(i)}class og{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return n===(r?s?wx:fg:s?ug:cg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const a=et(e);if(!r){let l;if(a&&(l=dx[t]))return l;if(t==="hasOwnProperty")return _x}const o=Reflect.get(e,t,Ln(e)?e:n);if((Es(t)?ag.has(t):mx(t))||(r||Cn(e,"get",t),s))return o;if(Ln(o)){const l=a&&Td(t)?o:o.value;return r&&Ht(l)?Yf(l):l}return Ht(o)?r?Yf(o):Dd(o):o}}class lg extends og{constructor(e=!1){super(!1,e)}set(e,t,n,r){let s=e[t];if(!this._isShallow){const l=vs(s);if(!Vi(n)&&!vs(n)&&(s=Mt(s),n=Mt(n)),!et(e)&&Ln(s)&&!Ln(n))return l||(s.value=n),!0}const a=et(e)&&Td(t)?Number(t)<e.length:yt(e,t),o=Reflect.set(e,t,n,Ln(e)?e:r);return e===Mt(r)&&(a?hs(n,s)&&Pr(e,"set",t,n):Pr(e,"add",t,n)),o}deleteProperty(e,t){const n=yt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Pr(e,"delete",t,void 0),r}has(e,t){const n=Reflect.has(e,t);return(!Es(t)||!ag.has(t))&&Cn(e,"has",t),n}ownKeys(e){return Cn(e,"iterate",et(e)?"length":js),Reflect.ownKeys(e)}}class gx extends og{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const vx=new lg,xx=new gx,Sx=new lg(!0);const Xf=i=>i,Ul=i=>Reflect.getPrototypeOf(i);function Mx(i,e,t){return function(...n){const r=this.__v_raw,s=Mt(r),a=Ha(s),o=i==="entries"||i===Symbol.iterator&&a,l=i==="keys"&&a,c=r[i](...n),u=t?Xf:e?Vc:xn;return!e&&Cn(s,"iterate",l?Wf:js),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Fl(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function yx(i,e){const t={get(r){const s=this.__v_raw,a=Mt(s),o=Mt(r);i||(hs(r,o)&&Cn(a,"get",r),Cn(a,"get",o));const{has:l}=Ul(a),c=e?Xf:i?Vc:xn;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!i&&Cn(Mt(r),"iterate",js),r.size},has(r){const s=this.__v_raw,a=Mt(s),o=Mt(r);return i||(hs(r,o)&&Cn(a,"has",r),Cn(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=Mt(o),c=e?Xf:i?Vc:xn;return!i&&Cn(l,"iterate",js),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return Kn(t,i?{add:Fl("add"),set:Fl("set"),delete:Fl("delete"),clear:Fl("clear")}:{add(r){!e&&!Vi(r)&&!vs(r)&&(r=Mt(r));const s=Mt(this);return Ul(s).has.call(s,r)||(s.add(r),Pr(s,"add",r,r)),this},set(r,s){!e&&!Vi(s)&&!vs(s)&&(s=Mt(s));const a=Mt(this),{has:o,get:l}=Ul(a);let c=o.call(a,r);c||(r=Mt(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?hs(s,u)&&Pr(a,"set",r,s):Pr(a,"add",r,s),this},delete(r){const s=Mt(this),{has:a,get:o}=Ul(s);let l=a.call(s,r);l||(r=Mt(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&Pr(s,"delete",r,void 0),c},clear(){const r=Mt(this),s=r.size!==0,a=r.clear();return s&&Pr(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Mx(r,i,e)}),t}function Pd(i,e){const t=yx(i,e);return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(yt(t,r)&&r in n?t:n,r,s)}const bx={get:Pd(!1,!1)},Ex={get:Pd(!1,!0)},Tx={get:Pd(!0,!1)};const cg=new WeakMap,ug=new WeakMap,fg=new WeakMap,wx=new WeakMap;function Ax(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cx(i){return i.__v_skip||!Object.isExtensible(i)?0:Ax(Qv(i))}function Dd(i){return vs(i)?i:Ld(i,!1,vx,bx,cg)}function Rx(i){return Ld(i,!1,Sx,Ex,ug)}function Yf(i){return Ld(i,!0,xx,Tx,fg)}function Ld(i,e,t,n,r){if(!Ht(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=Cx(i);if(s===0)return i;const a=r.get(i);if(a)return a;const o=new Proxy(i,s===2?n:t);return r.set(i,o),o}function Ga(i){return vs(i)?Ga(i.__v_raw):!!(i&&i.__v_isReactive)}function vs(i){return!!(i&&i.__v_isReadonly)}function Vi(i){return!!(i&&i.__v_isShallow)}function Id(i){return i?!!i.__v_raw:!1}function Mt(i){const e=i&&i.__v_raw;return e?Mt(e):i}function Px(i){return!yt(i,"__v_skip")&&Object.isExtensible(i)&&$_(i,"__v_skip",!0),i}const xn=i=>Ht(i)?Dd(i):i,Vc=i=>Ht(i)?Yf(i):i;function Ln(i){return i?i.__v_isRef===!0:!1}function Ii(i){return Dx(i,!1)}function Dx(i,e){return Ln(i)?i:new Lx(i,e)}class Lx{constructor(e,t){this.dep=new Rd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Mt(e),this._value=t?e:xn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this.__v_isShallow||Vi(e)||vs(e);e=n?e:Mt(e),hs(e,t)&&(this._rawValue=e,this._value=n?e:xn(e),this.dep.trigger())}}function Fr(i){return Ln(i)?i.value:i}const Ix={get:(i,e,t)=>e==="__v_raw"?i:Fr(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return Ln(r)&&!Ln(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function hg(i){return Ga(i)?i:new Proxy(i,Ix)}class Ux{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Rd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=cl-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&Ft!==this)return eg(this,!0),!0}get value(){const e=this.dep.track();return ig(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Fx(i,e,t=!1){let n,r;return st(i)?n=i:(n=i.get,r=i.set),new Ux(n,r,t)}const Nl={},Hc=new WeakMap;let Bs;function Nx(i,e=!1,t=Bs){if(t){let n=Hc.get(t);n||Hc.set(t,n=[]),n.push(i)}}function Ox(i,e,t=Nt){const{immediate:n,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=v=>r?v:Vi(v)||r===!1||r===0?rs(v,1):rs(v);let u,f,h,d,g=!1,_=!1;if(Ln(i)?(f=()=>i.value,g=Vi(i)):Ga(i)?(f=()=>c(i),g=!0):et(i)?(_=!0,g=i.some(v=>Ga(v)||Vi(v)),f=()=>i.map(v=>{if(Ln(v))return v.value;if(Ga(v))return c(v);if(st(v))return l?l(v,2):v()})):st(i)?e?f=l?()=>l(i,2):i:f=()=>{if(h){kr();try{h()}finally{Vr()}}const v=Bs;Bs=u;try{return l?l(i,3,[d]):i(d)}finally{Bs=v}}:f=fr,e&&r){const v=f,b=r===!0?1/0:r;f=()=>rs(v(),b)}const m=ux(),p=()=>{u.stop(),m&&m.active&&Ed(m.effects,u)};if(s&&e){const v=e;e=(...b)=>{v(...b),p()}}let M=_?new Array(i.length).fill(Nl):Nl;const y=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(e){const b=u.run();if(r||g||(_?b.some((w,T)=>hs(w,M[T])):hs(b,M))){h&&h();const w=Bs;Bs=u;try{const T=[b,M===Nl?void 0:_&&M[0]===Nl?[]:M,d];M=b,l?l(e,3,T):e(...T)}finally{Bs=w}}}else u.run()};return o&&o(y),u=new J_(f),u.scheduler=a?()=>a(y,!1):y,d=v=>Nx(v,!1,u),h=u.onStop=()=>{const v=Hc.get(u);if(v){if(l)l(v,4);else for(const b of v)b();Hc.delete(u)}},e?n?y(!0):M=u.run():a?a(y.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function rs(i,e=1/0,t){if(e<=0||!Ht(i)||i.__v_skip||(t=t||new Map,(t.get(i)||0)>=e))return i;if(t.set(i,e),e--,Ln(i))rs(i.value,e,t);else if(et(i))for(let n=0;n<i.length;n++)rs(i[n],e,t);else if(G_(i)||Ha(i))i.forEach(n=>{rs(n,e,t)});else if(Y_(i)){for(const n in i)rs(i[n],e,t);for(const n of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,n)&&rs(i[n],e,t)}return i}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Cl(i,e,t,n){try{return n?i(...n):i()}catch(r){vu(r,e,t)}}function mr(i,e,t,n){if(st(i)){const r=Cl(i,e,t,n);return r&&W_(r)&&r.catch(s=>{vu(s,e,t)}),r}if(et(i)){const r=[];for(let s=0;s<i.length;s++)r.push(mr(i[s],e,t,n));return r}}function vu(i,e,t,n=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Nt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](i,l,c)===!1)return}o=o.parent}if(s){kr(),Cl(s,null,10,[i,l,c]),Vr();return}}Bx(i,t,r,n,a)}function Bx(i,e,t,n=!0,r=!1){if(r)throw i;console.error(i)}const Wn=[];let Qi=-1;const Wa=[];let ts=null,Fa=0;const dg=Promise.resolve();let Gc=null;function Wc(i){const e=Gc||dg;return i?e.then(this?i.bind(this):i):e}function zx(i){let e=Qi+1,t=Wn.length;for(;e<t;){const n=e+t>>>1,r=Wn[n],s=fl(r);s<i||s===i&&r.flags&2?e=n+1:t=n}return e}function Ud(i){if(!(i.flags&1)){const e=fl(i),t=Wn[Wn.length-1];!t||!(i.flags&2)&&e>=fl(t)?Wn.push(i):Wn.splice(zx(e),0,i),i.flags|=1,pg()}}function pg(){Gc||(Gc=dg.then(_g))}function kx(i){et(i)?Wa.push(...i):ts&&i.id===-1?ts.splice(Fa+1,0,i):i.flags&1||(Wa.push(i),i.flags|=1),pg()}function Fp(i,e,t=Qi+1){for(;t<Wn.length;t++){const n=Wn[t];if(n&&n.flags&2){if(i&&n.id!==i.uid)continue;Wn.splice(t,1),t--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function mg(i){if(Wa.length){const e=[...new Set(Wa)].sort((t,n)=>fl(t)-fl(n));if(Wa.length=0,ts){ts.push(...e);return}for(ts=e,Fa=0;Fa<ts.length;Fa++){const t=ts[Fa];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ts=null,Fa=0}}const fl=i=>i.id==null?i.flags&2?-1:1/0:i.id;function _g(i){try{for(Qi=0;Qi<Wn.length;Qi++){const e=Wn[Qi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Cl(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Qi<Wn.length;Qi++){const e=Wn[Qi];e&&(e.flags&=-2)}Qi=-1,Wn.length=0,mg(),Gc=null,(Wn.length||Wa.length)&&_g()}}let ar=null,gg=null;function Xc(i){const e=ar;return ar=i,gg=i&&i.type.__scopeId||null,e}function Vx(i,e=ar,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&Xp(-1);const s=Xc(e);let a;try{a=i(...r)}finally{Xc(s),n._d&&Xp(1)}return a};return n._n=!0,n._c=!0,n._d=!0,n}function Cs(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[n];l&&(kr(),mr(l,t,8,[i.el,o,i,e]),Vr())}}const Hx=Symbol("_vte"),Gx=i=>i.__isTeleport,Wx=Symbol("_leaveCb");function Fd(i,e){i.shapeFlag&6&&i.component?(i.transition=e,Fd(i.component.subTree,e)):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function vg(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}const Yc=new WeakMap;function qo(i,e,t,n,r=!1){if(et(i)){i.forEach((g,_)=>qo(g,e&&(et(e)?e[_]:e),t,n,r));return}if($o(n)&&!r){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&qo(i,e,t,n.component.subTree);return}const s=n.shapeFlag&4?kd(n.component):n.el,a=r?null:s,{i:o,r:l}=i,c=e&&e.r,u=o.refs===Nt?o.refs={}:o.refs,f=o.setupState,h=Mt(f),d=f===Nt?H_:g=>yt(h,g);if(c!=null&&c!==l){if(Np(e),rn(c))u[c]=null,d(c)&&(f[c]=null);else if(Ln(c)){c.value=null;const g=e;g.k&&(u[g.k]=null)}}if(st(l))Cl(l,o,12,[a,u]);else{const g=rn(l),_=Ln(l);if(g||_){const m=()=>{if(i.f){const p=g?d(l)?f[l]:u[l]:l.value;if(r)et(p)&&Ed(p,s);else if(et(p))p.includes(s)||p.push(s);else if(g)u[l]=[s],d(l)&&(f[l]=u[l]);else{const M=[s];l.value=M,i.k&&(u[i.k]=M)}}else g?(u[l]=a,d(l)&&(f[l]=a)):_&&(l.value=a,i.k&&(u[i.k]=a))};if(a){const p=()=>{m(),Yc.delete(i)};p.id=-1,Yc.set(i,p),mi(p,t)}else Np(i),m()}}}function Np(i){const e=Yc.get(i);e&&(e.flags|=8,Yc.delete(i))}_u().requestIdleCallback;_u().cancelIdleCallback;const $o=i=>!!i.type.__asyncLoader,xg=i=>i.type.__isKeepAlive;function Xx(i,e){Sg(i,"a",e)}function Yx(i,e){Sg(i,"da",e)}function Sg(i,e,t=Yn){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(xu(e,n,t),t){let r=t.parent;for(;r&&r.parent;)xg(r.parent.vnode)&&qx(n,e,t,r),r=r.parent}}function qx(i,e,t,n){const r=xu(e,i,n,!0);Mg(()=>{Ed(n[e],r)},t)}function xu(i,e,t=Yn,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...a)=>{kr();const o=Rl(t),l=mr(e,t,i,a);return o(),Vr(),l});return n?r.unshift(s):r.push(s),s}}const qr=i=>(e,t=Yn)=>{(!dl||i==="sp")&&xu(i,(...n)=>e(...n),t)},$x=qr("bm"),Su=qr("m"),jx=qr("bu"),Kx=qr("u"),po=qr("bum"),Mg=qr("um"),Zx=qr("sp"),Jx=qr("rtg"),Qx=qr("rtc");function eS(i,e=Yn){xu("ec",i,e)}const tS=Symbol.for("v-ndc");function Nr(i,e,t,n){let r;const s=t,a=et(i);if(a||rn(i)){const o=a&&Ga(i);let l=!1,c=!1;o&&(l=!Vi(i),c=vs(i),i=gu(i)),r=new Array(i.length);for(let u=0,f=i.length;u<f;u++)r[u]=e(l?c?Vc(xn(i[u])):xn(i[u]):i[u],u,void 0,s)}else if(typeof i=="number"){r=new Array(i);for(let o=0;o<i;o++)r[o]=e(o+1,o,void 0,s)}else if(Ht(i))if(i[Symbol.iterator])r=Array.from(i,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(i);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(i[u],u,l,s)}}else r=[];return r}const qf=i=>i?Hg(i)?kd(i):qf(i.parent):null,jo=Kn(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>qf(i.parent),$root:i=>qf(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>bg(i),$forceUpdate:i=>i.f||(i.f=()=>{Ud(i.update)}),$nextTick:i=>i.n||(i.n=Wc.bind(i.proxy)),$watch:i=>bS.bind(i)}),ku=(i,e)=>i!==Nt&&!i.__isScriptSetup&&yt(i,e),nS={get({_:i},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:n,data:r,props:s,accessCache:a,type:o,appContext:l}=i;let c;if(e[0]!=="$"){const d=a[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(ku(n,e))return a[e]=1,n[e];if(r!==Nt&&yt(r,e))return a[e]=2,r[e];if((c=i.propsOptions[0])&&yt(c,e))return a[e]=3,s[e];if(t!==Nt&&yt(t,e))return a[e]=4,t[e];$f&&(a[e]=0)}}const u=jo[e];let f,h;if(u)return e==="$attrs"&&Cn(i.attrs,"get",""),u(i);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==Nt&&yt(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,yt(h,e))return h[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return ku(r,e)?(r[e]=t,!0):n!==Nt&&yt(n,e)?(n[e]=t,!0):yt(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s,type:a}},o){let l,c;return!!(t[o]||i!==Nt&&o[0]!=="$"&&yt(i,o)||ku(e,o)||(l=s[0])&&yt(l,o)||yt(n,o)||yt(jo,o)||yt(r.config.globalProperties,o)||(c=a.__cssModules)&&c[o])},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:yt(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function Op(i){return et(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let $f=!0;function iS(i){const e=bg(i),t=i.proxy,n=i.ctx;$f=!1,e.beforeCreate&&Bp(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:M,destroyed:y,unmounted:v,render:b,renderTracked:w,renderTriggered:T,errorCaptured:P,serverPrefetch:S,expose:E,inheritAttrs:F,components:z,directives:H,filters:Z}=e;if(c&&rS(c,n,null),a)for(const B in a){const X=a[B];st(X)&&(n[B]=X.bind(t))}if(r){const B=r.call(t,t);Ht(B)&&(i.data=Dd(B))}if($f=!0,s)for(const B in s){const X=s[B],ce=st(X)?X.bind(t,t):st(X.get)?X.get.bind(t,t):fr,U=!st(X)&&st(X.set)?X.set.bind(t):fr,fe=Hr({get:ce,set:U});Object.defineProperty(n,B,{enumerable:!0,configurable:!0,get:()=>fe.value,set:Le=>fe.value=Le})}if(o)for(const B in o)yg(o[B],n,t,B);if(l){const B=st(l)?l.call(t):l;Reflect.ownKeys(B).forEach(X=>{uS(X,B[X])})}u&&Bp(u,i,"c");function k(B,X){et(X)?X.forEach(ce=>B(ce.bind(t))):X&&B(X.bind(t))}if(k($x,f),k(Su,h),k(jx,d),k(Kx,g),k(Xx,_),k(Yx,m),k(eS,P),k(Qx,w),k(Jx,T),k(po,M),k(Mg,v),k(Zx,S),et(E))if(E.length){const B=i.exposed||(i.exposed={});E.forEach(X=>{Object.defineProperty(B,X,{get:()=>t[X],set:ce=>t[X]=ce,enumerable:!0})})}else i.exposed||(i.exposed={});b&&i.render===fr&&(i.render=b),F!=null&&(i.inheritAttrs=F),z&&(i.components=z),H&&(i.directives=H),S&&vg(i)}function rS(i,e,t=fr){et(i)&&(i=jf(i));for(const n in i){const r=i[n];let s;Ht(r)?"default"in r?s=yc(r.from||n,r.default,!0):s=yc(r.from||n):s=yc(r),Ln(s)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[n]=s}}function Bp(i,e,t){mr(et(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function yg(i,e,t,n){let r=n.includes(".")?Ng(t,n):()=>t[n];if(rn(i)){const s=e[i];st(s)&&bc(r,s)}else if(st(i))bc(r,i.bind(t));else if(Ht(i))if(et(i))i.forEach(s=>yg(s,e,t,n));else{const s=st(i.handler)?i.handler.bind(t):e[i.handler];st(s)&&bc(r,s,i)}}function bg(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=i.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>qc(l,c,a,!0)),qc(l,e,a)),Ht(e)&&s.set(e,l),l}function qc(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&qc(i,s,t,!0),r&&r.forEach(a=>qc(i,a,t,!0));for(const a in e)if(!(n&&a==="expose")){const o=sS[a]||t&&t[a];i[a]=o?o(i[a],e[a]):e[a]}return i}const sS={data:zp,props:kp,emits:kp,methods:Io,computed:Io,beforeCreate:Bn,created:Bn,beforeMount:Bn,mounted:Bn,beforeUpdate:Bn,updated:Bn,beforeDestroy:Bn,beforeUnmount:Bn,destroyed:Bn,unmounted:Bn,activated:Bn,deactivated:Bn,errorCaptured:Bn,serverPrefetch:Bn,components:Io,directives:Io,watch:oS,provide:zp,inject:aS};function zp(i,e){return e?i?function(){return Kn(st(i)?i.call(this,this):i,st(e)?e.call(this,this):e)}:e:i}function aS(i,e){return Io(jf(i),jf(e))}function jf(i){if(et(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Bn(i,e){return i?[...new Set([].concat(i,e))]:e}function Io(i,e){return i?Kn(Object.create(null),i,e):e}function kp(i,e){return i?et(i)&&et(e)?[...new Set([...i,...e])]:Kn(Object.create(null),Op(i),Op(e??{})):e}function oS(i,e){if(!i)return e;if(!e)return i;const t=Kn(Object.create(null),i);for(const n in e)t[n]=Bn(i[n],e[n]);return t}function Eg(){return{app:null,config:{isNativeTag:H_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lS=0;function cS(i,e){return function(n,r=null){st(n)||(n=Kn({},n)),r!=null&&!Ht(r)&&(r=null);const s=Eg(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:lS++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:YS,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&st(u.install)?(a.add(u),u.install(c,...f)):st(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Xn(n,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),i(d,u,h),l=!0,c._container=u,u.__vue_app__=c,kd(d.component)}},onUnmount(u){o.push(u)},unmount(){l&&(mr(o,c._instance,16),i(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Xa;Xa=c;try{return u()}finally{Xa=f}}};return c}}let Xa=null;function uS(i,e){if(Yn){let t=Yn.provides;const n=Yn.parent&&Yn.parent.provides;n===t&&(t=Yn.provides=Object.create(n)),t[i]=e}}function yc(i,e,t=!1){const n=kS();if(n||Xa){let r=Xa?Xa._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(r&&i in r)return r[i];if(arguments.length>1)return t&&st(e)?e.call(n&&n.proxy):e}}const Tg={},wg=()=>Object.create(Tg),Ag=i=>Object.getPrototypeOf(i)===Tg;function fS(i,e,t,n=!1){const r={},s=wg();i.propsDefaults=Object.create(null),Cg(i,e,r,s);for(const a in i.propsOptions[0])a in r||(r[a]=void 0);t?i.props=n?r:Rx(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function hS(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:a}}=i,o=Mt(r),[l]=i.propsOptions;let c=!1;if((n||a>0)&&!(a&16)){if(a&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Mu(i.emitsOptions,h))continue;const d=e[h];if(l)if(yt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=gs(h);r[g]=Kf(l,o,g,d,i,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{Cg(i,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!yt(e,f)&&((u=Ts(f))===f||!yt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Kf(l,o,f,void 0,i,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!yt(e,f))&&(delete s[f],c=!0)}c&&Pr(i.attrs,"set","")}function Cg(i,e,t,n){const[r,s]=i.propsOptions;let a=!1,o;if(e)for(let l in e){if(Wo(l))continue;const c=e[l];let u;r&&yt(r,u=gs(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:Mu(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,a=!0)}if(s){const l=Mt(t),c=o||Nt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Kf(r,l,f,c[f],i,!yt(c,f))}}return a}function Kf(i,e,t,n,r,s){const a=i[t];if(a!=null){const o=yt(a,"default");if(o&&n===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&st(l)){const{propsDefaults:c}=r;if(t in c)n=c[t];else{const u=Rl(r);n=c[t]=l.call(null,e),u()}}else n=l;r.ce&&r.ce._setProp(t,n)}a[0]&&(s&&!o?n=!1:a[1]&&(n===""||n===Ts(t))&&(n=!0))}return n}const dS=new WeakMap;function Rg(i,e,t=!1){const n=t?dS:e.propsCache,r=n.get(i);if(r)return r;const s=i.props,a={},o=[];let l=!1;if(!st(i)){const u=f=>{l=!0;const[h,d]=Rg(f,e,!0);Kn(a,h),d&&o.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return Ht(i)&&n.set(i,Va),Va;if(et(s))for(let u=0;u<s.length;u++){const f=gs(s[u]);Vp(f)&&(a[f]=Nt)}else if(s)for(const u in s){const f=gs(u);if(Vp(f)){const h=s[u],d=a[f]=et(h)||st(h)?{type:h}:Kn({},h),g=d.type;let _=!1,m=!0;if(et(g))for(let p=0;p<g.length;++p){const M=g[p],y=st(M)&&M.name;if(y==="Boolean"){_=!0;break}else y==="String"&&(m=!1)}else _=st(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||yt(d,"default"))&&o.push(f)}}const c=[a,o];return Ht(i)&&n.set(i,c),c}function Vp(i){return i[0]!=="$"&&!Wo(i)}const Nd=i=>i==="_"||i==="_ctx"||i==="$stable",Od=i=>et(i)?i.map(nr):[nr(i)],pS=(i,e,t)=>{if(e._n)return e;const n=Vx((...r)=>Od(e(...r)),t);return n._c=!1,n},Pg=(i,e,t)=>{const n=i._ctx;for(const r in i){if(Nd(r))continue;const s=i[r];if(st(s))e[r]=pS(r,s,n);else if(s!=null){const a=Od(s);e[r]=()=>a}}},Dg=(i,e)=>{const t=Od(e);i.slots.default=()=>t},Lg=(i,e,t)=>{for(const n in e)(t||!Nd(n))&&(i[n]=e[n])},mS=(i,e,t)=>{const n=i.slots=wg();if(i.vnode.shapeFlag&32){const r=e._;r?(Lg(n,e,t),t&&$_(n,"_",r,!0)):Pg(e,n)}else e&&Dg(i,e)},_S=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,a=Nt;if(n.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:Lg(r,e,t):(s=!e.$stable,Pg(e,r)),a=e}else e&&(Dg(i,e),a={default:1});if(s)for(const o in r)!Nd(o)&&a[o]==null&&delete r[o]},mi=DS;function gS(i){return vS(i)}function vS(i,e){const t=_u();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=fr,insertStaticContent:g}=i,_=(D,L,G,ie=null,j=null,I=null,R=void 0,ue=null,se=!!L.dynamicChildren)=>{if(D===L)return;D&&!So(D,L)&&(ie=re(D),Le(D,j,I,!0),D=null),L.patchFlag===-2&&(se=!1,L.dynamicChildren=null);const{type:te,ref:ae,shapeFlag:C}=L;switch(te){case yu:m(D,L,G,ie);break;case xs:p(D,L,G,ie);break;case Hu:D==null&&M(L,G,ie,R);break;case _n:z(D,L,G,ie,j,I,R,ue,se);break;default:C&1?b(D,L,G,ie,j,I,R,ue,se):C&6?H(D,L,G,ie,j,I,R,ue,se):(C&64||C&128)&&te.process(D,L,G,ie,j,I,R,ue,se,Ae)}ae!=null&&j?qo(ae,D&&D.ref,I,L||D,!L):ae==null&&D&&D.ref!=null&&qo(D.ref,null,I,D,!0)},m=(D,L,G,ie)=>{if(D==null)n(L.el=o(L.children),G,ie);else{const j=L.el=D.el;L.children!==D.children&&c(j,L.children)}},p=(D,L,G,ie)=>{D==null?n(L.el=l(L.children||""),G,ie):L.el=D.el},M=(D,L,G,ie)=>{[D.el,D.anchor]=g(D.children,L,G,ie,D.el,D.anchor)},y=({el:D,anchor:L},G,ie)=>{let j;for(;D&&D!==L;)j=h(D),n(D,G,ie),D=j;n(L,G,ie)},v=({el:D,anchor:L})=>{let G;for(;D&&D!==L;)G=h(D),r(D),D=G;r(L)},b=(D,L,G,ie,j,I,R,ue,se)=>{L.type==="svg"?R="svg":L.type==="math"&&(R="mathml"),D==null?w(L,G,ie,j,I,R,ue,se):S(D,L,j,I,R,ue,se)},w=(D,L,G,ie,j,I,R,ue)=>{let se,te;const{props:ae,shapeFlag:C,transition:x,dirs:N}=D;if(se=D.el=a(D.type,I,ae&&ae.is,ae),C&8?u(se,D.children):C&16&&P(D.children,se,null,ie,j,Vu(D,I),R,ue),N&&Cs(D,null,ie,"created"),T(se,D,D.scopeId,R,ie),ae){for(const J in ae)J!=="value"&&!Wo(J)&&s(se,J,null,ae[J],I,ie);"value"in ae&&s(se,"value",null,ae.value,I),(te=ae.onVnodeBeforeMount)&&Zi(te,ie,D)}N&&Cs(D,null,ie,"beforeMount");const $=xS(j,x);$&&x.beforeEnter(se),n(se,L,G),((te=ae&&ae.onVnodeMounted)||$||N)&&mi(()=>{te&&Zi(te,ie,D),$&&x.enter(se),N&&Cs(D,null,ie,"mounted")},j)},T=(D,L,G,ie,j)=>{if(G&&d(D,G),ie)for(let I=0;I<ie.length;I++)d(D,ie[I]);if(j){let I=j.subTree;if(L===I||Bg(I.type)&&(I.ssContent===L||I.ssFallback===L)){const R=j.vnode;T(D,R,R.scopeId,R.slotScopeIds,j.parent)}}},P=(D,L,G,ie,j,I,R,ue,se=0)=>{for(let te=se;te<D.length;te++){const ae=D[te]=ue?ns(D[te]):nr(D[te]);_(null,ae,L,G,ie,j,I,R,ue)}},S=(D,L,G,ie,j,I,R)=>{const ue=L.el=D.el;let{patchFlag:se,dynamicChildren:te,dirs:ae}=L;se|=D.patchFlag&16;const C=D.props||Nt,x=L.props||Nt;let N;if(G&&Rs(G,!1),(N=x.onVnodeBeforeUpdate)&&Zi(N,G,L,D),ae&&Cs(L,D,G,"beforeUpdate"),G&&Rs(G,!0),(C.innerHTML&&x.innerHTML==null||C.textContent&&x.textContent==null)&&u(ue,""),te?E(D.dynamicChildren,te,ue,G,ie,Vu(L,j),I):R||X(D,L,ue,null,G,ie,Vu(L,j),I,!1),se>0){if(se&16)F(ue,C,x,G,j);else if(se&2&&C.class!==x.class&&s(ue,"class",null,x.class,j),se&4&&s(ue,"style",C.style,x.style,j),se&8){const $=L.dynamicProps;for(let J=0;J<$.length;J++){const Y=$[J],xe=C[Y],de=x[Y];(de!==xe||Y==="value")&&s(ue,Y,xe,de,j,G)}}se&1&&D.children!==L.children&&u(ue,L.children)}else!R&&te==null&&F(ue,C,x,G,j);((N=x.onVnodeUpdated)||ae)&&mi(()=>{N&&Zi(N,G,L,D),ae&&Cs(L,D,G,"updated")},ie)},E=(D,L,G,ie,j,I,R)=>{for(let ue=0;ue<L.length;ue++){const se=D[ue],te=L[ue],ae=se.el&&(se.type===_n||!So(se,te)||se.shapeFlag&198)?f(se.el):G;_(se,te,ae,null,ie,j,I,R,!0)}},F=(D,L,G,ie,j)=>{if(L!==G){if(L!==Nt)for(const I in L)!Wo(I)&&!(I in G)&&s(D,I,L[I],null,j,ie);for(const I in G){if(Wo(I))continue;const R=G[I],ue=L[I];R!==ue&&I!=="value"&&s(D,I,ue,R,j,ie)}"value"in G&&s(D,"value",L.value,G.value,j)}},z=(D,L,G,ie,j,I,R,ue,se)=>{const te=L.el=D?D.el:o(""),ae=L.anchor=D?D.anchor:o("");let{patchFlag:C,dynamicChildren:x,slotScopeIds:N}=L;N&&(ue=ue?ue.concat(N):N),D==null?(n(te,G,ie),n(ae,G,ie),P(L.children||[],G,ae,j,I,R,ue,se)):C>0&&C&64&&x&&D.dynamicChildren?(E(D.dynamicChildren,x,G,j,I,R,ue),(L.key!=null||j&&L===j.subTree)&&Ig(D,L,!0)):X(D,L,G,ae,j,I,R,ue,se)},H=(D,L,G,ie,j,I,R,ue,se)=>{L.slotScopeIds=ue,D==null?L.shapeFlag&512?j.ctx.activate(L,G,ie,R,se):Z(L,G,ie,j,I,R,se):K(D,L,se)},Z=(D,L,G,ie,j,I,R)=>{const ue=D.component=zS(D,ie,j);if(xg(D)&&(ue.ctx.renderer=Ae),VS(ue,!1,R),ue.asyncDep){if(j&&j.registerDep(ue,k,R),!D.el){const se=ue.subTree=Xn(xs);p(null,se,L,G),D.placeholder=se.el}}else k(ue,D,L,G,j,I,R)},K=(D,L,G)=>{const ie=L.component=D.component;if(RS(D,L,G))if(ie.asyncDep&&!ie.asyncResolved){B(ie,L,G);return}else ie.next=L,ie.update();else L.el=D.el,ie.vnode=L},k=(D,L,G,ie,j,I,R)=>{const ue=()=>{if(D.isMounted){let{next:C,bu:x,u:N,parent:$,vnode:J}=D;{const Te=Ug(D);if(Te){C&&(C.el=J.el,B(D,C,R)),Te.asyncDep.then(()=>{D.isUnmounted||ue()});return}}let Y=C,xe;Rs(D,!1),C?(C.el=J.el,B(D,C,R)):C=J,x&&Fu(x),(xe=C.props&&C.props.onVnodeBeforeUpdate)&&Zi(xe,$,C,J),Rs(D,!0);const de=Gp(D),Ce=D.subTree;D.subTree=de,_(Ce,de,f(Ce.el),re(Ce),D,j,I),C.el=de.el,Y===null&&PS(D,de.el),N&&mi(N,j),(xe=C.props&&C.props.onVnodeUpdated)&&mi(()=>Zi(xe,$,C,J),j)}else{let C;const{el:x,props:N}=L,{bm:$,m:J,parent:Y,root:xe,type:de}=D,Ce=$o(L);Rs(D,!1),$&&Fu($),!Ce&&(C=N&&N.onVnodeBeforeMount)&&Zi(C,Y,L),Rs(D,!0);{xe.ce&&xe.ce._def.shadowRoot!==!1&&xe.ce._injectChildStyle(de);const Te=D.subTree=Gp(D);_(null,Te,G,ie,D,j,I),L.el=Te.el}if(J&&mi(J,j),!Ce&&(C=N&&N.onVnodeMounted)){const Te=L;mi(()=>Zi(C,Y,Te),j)}(L.shapeFlag&256||Y&&$o(Y.vnode)&&Y.vnode.shapeFlag&256)&&D.a&&mi(D.a,j),D.isMounted=!0,L=G=ie=null}};D.scope.on();const se=D.effect=new J_(ue);D.scope.off();const te=D.update=se.run.bind(se),ae=D.job=se.runIfDirty.bind(se);ae.i=D,ae.id=D.uid,se.scheduler=()=>Ud(ae),Rs(D,!0),te()},B=(D,L,G)=>{L.component=D;const ie=D.vnode.props;D.vnode=L,D.next=null,hS(D,L.props,ie,G),_S(D,L.children,G),kr(),Fp(D),Vr()},X=(D,L,G,ie,j,I,R,ue,se=!1)=>{const te=D&&D.children,ae=D?D.shapeFlag:0,C=L.children,{patchFlag:x,shapeFlag:N}=L;if(x>0){if(x&128){U(te,C,G,ie,j,I,R,ue,se);return}else if(x&256){ce(te,C,G,ie,j,I,R,ue,se);return}}N&8?(ae&16&&ne(te,j,I),C!==te&&u(G,C)):ae&16?N&16?U(te,C,G,ie,j,I,R,ue,se):ne(te,j,I,!0):(ae&8&&u(G,""),N&16&&P(C,G,ie,j,I,R,ue,se))},ce=(D,L,G,ie,j,I,R,ue,se)=>{D=D||Va,L=L||Va;const te=D.length,ae=L.length,C=Math.min(te,ae);let x;for(x=0;x<C;x++){const N=L[x]=se?ns(L[x]):nr(L[x]);_(D[x],N,G,null,j,I,R,ue,se)}te>ae?ne(D,j,I,!0,!1,C):P(L,G,ie,j,I,R,ue,se,C)},U=(D,L,G,ie,j,I,R,ue,se)=>{let te=0;const ae=L.length;let C=D.length-1,x=ae-1;for(;te<=C&&te<=x;){const N=D[te],$=L[te]=se?ns(L[te]):nr(L[te]);if(So(N,$))_(N,$,G,null,j,I,R,ue,se);else break;te++}for(;te<=C&&te<=x;){const N=D[C],$=L[x]=se?ns(L[x]):nr(L[x]);if(So(N,$))_(N,$,G,null,j,I,R,ue,se);else break;C--,x--}if(te>C){if(te<=x){const N=x+1,$=N<ae?L[N].el:ie;for(;te<=x;)_(null,L[te]=se?ns(L[te]):nr(L[te]),G,$,j,I,R,ue,se),te++}}else if(te>x)for(;te<=C;)Le(D[te],j,I,!0),te++;else{const N=te,$=te,J=new Map;for(te=$;te<=x;te++){const ye=L[te]=se?ns(L[te]):nr(L[te]);ye.key!=null&&J.set(ye.key,te)}let Y,xe=0;const de=x-$+1;let Ce=!1,Te=0;const pe=new Array(de);for(te=0;te<de;te++)pe[te]=0;for(te=N;te<=C;te++){const ye=D[te];if(xe>=de){Le(ye,j,I,!0);continue}let Re;if(ye.key!=null)Re=J.get(ye.key);else for(Y=$;Y<=x;Y++)if(pe[Y-$]===0&&So(ye,L[Y])){Re=Y;break}Re===void 0?Le(ye,j,I,!0):(pe[Re-$]=te+1,Re>=Te?Te=Re:Ce=!0,_(ye,L[Re],G,null,j,I,R,ue,se),xe++)}const _e=Ce?SS(pe):Va;for(Y=_e.length-1,te=de-1;te>=0;te--){const ye=$+te,Re=L[ye],ge=L[ye+1],qe=ye+1<ae?ge.el||ge.placeholder:ie;pe[te]===0?_(null,Re,G,qe,j,I,R,ue,se):Ce&&(Y<0||te!==_e[Y]?fe(Re,G,qe,2):Y--)}}},fe=(D,L,G,ie,j=null)=>{const{el:I,type:R,transition:ue,children:se,shapeFlag:te}=D;if(te&6){fe(D.component.subTree,L,G,ie);return}if(te&128){D.suspense.move(L,G,ie);return}if(te&64){R.move(D,L,G,Ae);return}if(R===_n){n(I,L,G);for(let C=0;C<se.length;C++)fe(se[C],L,G,ie);n(D.anchor,L,G);return}if(R===Hu){y(D,L,G);return}if(ie!==2&&te&1&&ue)if(ie===0)ue.beforeEnter(I),n(I,L,G),mi(()=>ue.enter(I),j);else{const{leave:C,delayLeave:x,afterLeave:N}=ue,$=()=>{D.ctx.isUnmounted?r(I):n(I,L,G)},J=()=>{I._isLeaving&&I[Wx](!0),C(I,()=>{$(),N&&N()})};x?x(I,$,J):J()}else n(I,L,G)},Le=(D,L,G,ie=!1,j=!1)=>{const{type:I,props:R,ref:ue,children:se,dynamicChildren:te,shapeFlag:ae,patchFlag:C,dirs:x,cacheIndex:N}=D;if(C===-2&&(j=!1),ue!=null&&(kr(),qo(ue,null,G,D,!0),Vr()),N!=null&&(L.renderCache[N]=void 0),ae&256){L.ctx.deactivate(D);return}const $=ae&1&&x,J=!$o(D);let Y;if(J&&(Y=R&&R.onVnodeBeforeUnmount)&&Zi(Y,L,D),ae&6)je(D.component,G,ie);else{if(ae&128){D.suspense.unmount(G,ie);return}$&&Cs(D,null,L,"beforeUnmount"),ae&64?D.type.remove(D,L,G,Ae,ie):te&&!te.hasOnce&&(I!==_n||C>0&&C&64)?ne(te,L,G,!1,!0):(I===_n&&C&384||!j&&ae&16)&&ne(se,L,G),ie&&ze(D)}(J&&(Y=R&&R.onVnodeUnmounted)||$)&&mi(()=>{Y&&Zi(Y,L,D),$&&Cs(D,null,L,"unmounted")},G)},ze=D=>{const{type:L,el:G,anchor:ie,transition:j}=D;if(L===_n){He(G,ie);return}if(L===Hu){v(D);return}const I=()=>{r(G),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(D.shapeFlag&1&&j&&!j.persisted){const{leave:R,delayLeave:ue}=j,se=()=>R(G,I);ue?ue(D.el,I,se):se()}else I()},He=(D,L)=>{let G;for(;D!==L;)G=h(D),r(D),D=G;r(L)},je=(D,L,G)=>{const{bum:ie,scope:j,job:I,subTree:R,um:ue,m:se,a:te}=D;Hp(se),Hp(te),ie&&Fu(ie),j.stop(),I&&(I.flags|=8,Le(R,D,L,G)),ue&&mi(ue,L),mi(()=>{D.isUnmounted=!0},L)},ne=(D,L,G,ie=!1,j=!1,I=0)=>{for(let R=I;R<D.length;R++)Le(D[R],L,G,ie,j)},re=D=>{if(D.shapeFlag&6)return re(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const L=h(D.anchor||D.el),G=L&&L[Hx];return G?h(G):L};let Me=!1;const Oe=(D,L,G)=>{D==null?L._vnode&&Le(L._vnode,null,null,!0):_(L._vnode||null,D,L,null,null,null,G),L._vnode=D,Me||(Me=!0,Fp(),mg(),Me=!1)},Ae={p:_,um:Le,m:fe,r:ze,mt:Z,mc:P,pc:X,pbc:E,n:re,o:i};return{render:Oe,hydrate:void 0,createApp:cS(Oe)}}function Vu({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Rs({effect:i,job:e},t){t?(i.flags|=32,e.flags|=4):(i.flags&=-33,e.flags&=-5)}function xS(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function Ig(i,e,t=!1){const n=i.children,r=e.children;if(et(n)&&et(r))for(let s=0;s<n.length;s++){const a=n[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=ns(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&Ig(a,o)),o.type===yu&&o.patchFlag!==-1&&(o.el=a.el),o.type===xs&&!o.el&&(o.el=a.el)}}function SS(i){const e=i.slice(),t=[0];let n,r,s,a,o;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,i[t[o]]<c?s=o+1:a=o;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function Ug(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ug(e)}function Hp(i){if(i)for(let e=0;e<i.length;e++)i[e].flags|=8}const MS=Symbol.for("v-scx"),yS=()=>yc(MS);function bc(i,e,t){return Fg(i,e,t)}function Fg(i,e,t=Nt){const{immediate:n,deep:r,flush:s,once:a}=t,o=Kn({},t),l=e&&n||!e&&s!=="post";let c;if(dl){if(s==="sync"){const d=yS();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=fr,d.resume=fr,d.pause=fr,d}}const u=Yn;o.call=(d,g,_)=>mr(d,u,g,_);let f=!1;s==="post"?o.scheduler=d=>{mi(d,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(d,g)=>{g?d():Ud(d)}),o.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=Ox(i,e,o);return dl&&(c?c.push(h):l&&h()),h}function bS(i,e,t){const n=this.proxy,r=rn(i)?i.includes(".")?Ng(n,i):()=>n[i]:i.bind(n,n);let s;st(e)?s=e:(s=e.handler,t=e);const a=Rl(this),o=Fg(r,s.bind(n),t);return a(),o}function Ng(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}const ES=(i,e)=>e==="modelValue"||e==="model-value"?i.modelModifiers:i[`${e}Modifiers`]||i[`${gs(e)}Modifiers`]||i[`${Ts(e)}Modifiers`];function TS(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||Nt;let r=t;const s=e.startsWith("update:"),a=s&&ES(n,e.slice(7));a&&(a.trim&&(r=t.map(u=>rn(u)?u.trim():u)),a.number&&(r=t.map(nx)));let o,l=n[o=Uu(e)]||n[o=Uu(gs(e))];!l&&s&&(l=n[o=Uu(Ts(e))]),l&&mr(l,i,6,r);const c=n[o+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[o])return;i.emitted[o]=!0,mr(c,i,6,r)}}const wS=new WeakMap;function Og(i,e,t=!1){const n=t?wS:e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let a={},o=!1;if(!st(i)){const l=c=>{const u=Og(c,e,!0);u&&(o=!0,Kn(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!o?(Ht(i)&&n.set(i,null),null):(et(s)?s.forEach(l=>a[l]=null):Kn(a,s),Ht(i)&&n.set(i,a),a)}function Mu(i,e){return!i||!du(e)?!1:(e=e.slice(2).replace(/Once$/,""),yt(i,e[0].toLowerCase()+e.slice(1))||yt(i,Ts(e))||yt(i,e))}function Gp(i){const{type:e,vnode:t,proxy:n,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=i,m=Xc(i);let p,M;try{if(t.shapeFlag&4){const v=r||n,b=v;p=nr(c.call(b,v,u,f,d,h,g)),M=o}else{const v=e;p=nr(v.length>1?v(f,{attrs:o,slots:a,emit:l}):v(f,null)),M=e.props?o:AS(o)}}catch(v){Ko.length=0,vu(v,i,1),p=Xn(xs)}let y=p;if(M&&_!==!1){const v=Object.keys(M),{shapeFlag:b}=y;v.length&&b&7&&(s&&v.some(bd)&&(M=CS(M,s)),y=eo(y,M,!1,!0))}return t.dirs&&(y=eo(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&Fd(y,t.transition),p=y,Xc(m),p}const AS=i=>{let e;for(const t in i)(t==="class"||t==="style"||du(t))&&((e||(e={}))[t]=i[t]);return e},CS=(i,e)=>{const t={};for(const n in i)(!bd(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function RS(i,e,t){const{props:n,children:r,component:s}=i,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Wp(n,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==n[h]&&!Mu(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:n===a?!1:n?a?Wp(n,a,c):!0:!!a;return!1}function Wp(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!Mu(t,s))return!0}return!1}function PS({vnode:i,parent:e},t){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=e.vnode).el=t,e=e.parent;else break}}const Bg=i=>i.__isSuspense;function DS(i,e){e&&e.pendingBranch?et(i)?e.effects.push(...i):e.effects.push(i):kx(i)}const _n=Symbol.for("v-fgt"),yu=Symbol.for("v-txt"),xs=Symbol.for("v-cmt"),Hu=Symbol.for("v-stc"),Ko=[];let Ei=null;function Ot(i=!1){Ko.push(Ei=i?null:[])}function LS(){Ko.pop(),Ei=Ko[Ko.length-1]||null}let hl=1;function Xp(i,e=!1){hl+=i,i<0&&Ei&&e&&(Ei.hasOnce=!0)}function zg(i){return i.dynamicChildren=hl>0?Ei||Va:null,LS(),hl>0&&Ei&&Ei.push(i),i}function zt(i,e,t,n,r,s){return zg(le(i,e,t,n,r,s,!0))}function IS(i,e,t,n,r){return zg(Xn(i,e,t,n,r,!0))}function kg(i){return i?i.__v_isVNode===!0:!1}function So(i,e){return i.type===e.type&&i.key===e.key}const Vg=({key:i})=>i??null,Ec=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?rn(i)||Ln(i)||st(i)?{i:ar,r:i,k:e,f:!!t}:i:null);function le(i,e=null,t=null,n=0,r=null,s=i===_n?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Vg(e),ref:e&&Ec(e),scopeId:gg,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ar};return o?(zd(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=rn(t)?8:16),hl>0&&!a&&Ei&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ei.push(l),l}const Xn=US;function US(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===tS)&&(i=xs),kg(i)){const o=eo(i,e,!0);return t&&zd(o,t),hl>0&&!s&&Ei&&(o.shapeFlag&6?Ei[Ei.indexOf(i)]=o:Ei.push(o)),o.patchFlag=-2,o}if(XS(i)&&(i=i.__vccOpts),e){e=FS(e);let{class:o,style:l}=e;o&&!rn(o)&&(e.class=$s(o)),Ht(l)&&(Id(l)&&!et(l)&&(l=Kn({},l)),e.style=Al(l))}const a=rn(i)?1:Bg(i)?128:Gx(i)?64:Ht(i)?4:st(i)?2:0;return le(i,e,t,n,r,a,s,!0)}function FS(i){return i?Id(i)||Ag(i)?Kn({},i):i:null}function eo(i,e,t=!1,n=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=i,c=e?NS(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&Vg(c),ref:e&&e.ref?t&&s?et(s)?s.concat(Ec(e)):[s,Ec(e)]:Ec(e):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==_n?a===-1?16:a|16:a,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&eo(i.ssContent),ssFallback:i.ssFallback&&eo(i.ssFallback),placeholder:i.placeholder,el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&n&&Fd(u,l.clone(u)),u}function ni(i=" ",e=0){return Xn(yu,null,i,e)}function Bd(i="",e=!1){return e?(Ot(),IS(xs,null,i)):Xn(xs,null,i)}function nr(i){return i==null||typeof i=="boolean"?Xn(xs):et(i)?Xn(_n,null,i.slice()):kg(i)?ns(i):Xn(yu,null,String(i))}function ns(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:eo(i)}function zd(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(et(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),zd(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Ag(e)?e._ctx=ar:r===3&&ar&&(ar.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else st(e)?(e={default:e,_ctx:ar},t=32):(e=String(e),n&64?(t=16,e=[ni(e)]):t=8);i.children=e,i.shapeFlag|=t}function NS(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=$s([e.class,n.class]));else if(r==="style")e.style=Al([e.style,n.style]);else if(du(r)){const s=e[r],a=n[r];a&&s!==a&&!(et(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=n[r])}return e}function Zi(i,e,t,n=null){mr(i,e,7,[t,n])}const OS=Eg();let BS=0;function zS(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||OS,s={uid:BS++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new cx(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rg(n,r),emitsOptions:Og(n,r),emit:null,emitted:null,propsDefaults:Nt,inheritAttrs:n.inheritAttrs,ctx:Nt,data:Nt,props:Nt,attrs:Nt,slots:Nt,refs:Nt,setupState:Nt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=TS.bind(null,s),i.ce&&i.ce(s),s}let Yn=null;const kS=()=>Yn||ar;let $c,Zf;{const i=_u(),e=(t,n)=>{let r;return(r=i[t])||(r=i[t]=[]),r.push(n),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};$c=e("__VUE_INSTANCE_SETTERS__",t=>Yn=t),Zf=e("__VUE_SSR_SETTERS__",t=>dl=t)}const Rl=i=>{const e=Yn;return $c(i),i.scope.on(),()=>{i.scope.off(),$c(e)}},Yp=()=>{Yn&&Yn.scope.off(),$c(null)};function Hg(i){return i.vnode.shapeFlag&4}let dl=!1;function VS(i,e=!1,t=!1){e&&Zf(e);const{props:n,children:r}=i.vnode,s=Hg(i);fS(i,n,s,e),mS(i,r,t||e);const a=s?HS(i,e):void 0;return e&&Zf(!1),a}function HS(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,nS);const{setup:n}=t;if(n){kr();const r=i.setupContext=n.length>1?WS(i):null,s=Rl(i),a=Cl(n,i,0,[i.props,r]),o=W_(a);if(Vr(),s(),(o||i.sp)&&!$o(i)&&vg(i),o){if(a.then(Yp,Yp),e)return a.then(l=>{qp(i,l)}).catch(l=>{vu(l,i,0)});i.asyncDep=a}else qp(i,a)}else Gg(i)}function qp(i,e,t){st(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:Ht(e)&&(i.setupState=hg(e)),Gg(i)}function Gg(i,e,t){const n=i.type;i.render||(i.render=n.render||fr);{const r=Rl(i);kr();try{iS(i)}finally{Vr(),r()}}}const GS={get(i,e){return Cn(i,"get",""),i[e]}};function WS(i){const e=t=>{i.exposed=t||{}};return{attrs:new Proxy(i.attrs,GS),slots:i.slots,emit:i.emit,expose:e}}function kd(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(hg(Px(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in jo)return jo[t](i)},has(e,t){return t in e||t in jo}})):i.proxy}function XS(i){return st(i)&&"__vccOpts"in i}const Hr=(i,e)=>Fx(i,e,dl),YS="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Jf;const $p=typeof window<"u"&&window.trustedTypes;if($p)try{Jf=$p.createPolicy("vue",{createHTML:i=>i})}catch{}const Wg=Jf?i=>Jf.createHTML(i):i=>i,qS="http://www.w3.org/2000/svg",$S="http://www.w3.org/1998/Math/MathML",Ar=typeof document<"u"?document:null,jp=Ar&&Ar.createElement("template"),jS={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e==="svg"?Ar.createElementNS(qS,i):e==="mathml"?Ar.createElementNS($S,i):t?Ar.createElement(i,{is:t}):Ar.createElement(i);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>Ar.createTextNode(i),createComment:i=>Ar.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Ar.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{jp.innerHTML=Wg(n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i);const o=jp.content;if(n==="svg"||n==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},KS=Symbol("_vtc");function ZS(i,e,t){const n=i[KS];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const Kp=Symbol("_vod"),JS=Symbol("_vsh"),QS=Symbol(""),eM=/(?:^|;)\s*display\s*:/;function tM(i,e,t){const n=i.style,r=rn(t);let s=!1;if(t&&!r){if(e)if(rn(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Tc(n,o,"")}else for(const a in e)t[a]==null&&Tc(n,a,"");for(const a in t)a==="display"&&(s=!0),Tc(n,a,t[a])}else if(r){if(e!==t){const a=n[QS];a&&(t+=";"+a),n.cssText=t,s=eM.test(t)}}else e&&i.removeAttribute("style");Kp in i&&(i[Kp]=s?n.display:"",i[JS]&&(n.display="none"))}const Zp=/\s*!important$/;function Tc(i,e,t){if(et(t))t.forEach(n=>Tc(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=nM(i,e);Zp.test(t)?i.setProperty(Ts(n),t.replace(Zp,""),"important"):i[n]=t}}const Jp=["Webkit","Moz","ms"],Gu={};function nM(i,e){const t=Gu[e];if(t)return t;let n=gs(e);if(n!=="filter"&&n in i)return Gu[e]=n;n=q_(n);for(let r=0;r<Jp.length;r++){const s=Jp[r]+n;if(s in i)return Gu[e]=s}return e}const Qp="http://www.w3.org/1999/xlink";function em(i,e,t,n,r,s=lx(e)){n&&e.startsWith("xlink:")?t==null?i.removeAttributeNS(Qp,e.slice(6,e.length)):i.setAttributeNS(Qp,e,t):t==null||s&&!j_(t)?i.removeAttribute(e):i.setAttribute(e,s?"":Es(t)?String(t):t)}function tm(i,e,t,n,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(i[e]=e==="innerHTML"?Wg(t):t);return}const s=i.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?i.getAttribute("value")||"":i.value,l=t==null?i.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in i))&&(i.value=l),t==null&&i.removeAttribute(e),i._value=t;return}let a=!1;if(t===""||t==null){const o=typeof i[e];o==="boolean"?t=j_(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{i[e]=t}catch{}a&&i.removeAttribute(r||e)}function iM(i,e,t,n){i.addEventListener(e,t,n)}function rM(i,e,t,n){i.removeEventListener(e,t,n)}const nm=Symbol("_vei");function sM(i,e,t,n,r=null){const s=i[nm]||(i[nm]={}),a=s[e];if(n&&a)a.value=n;else{const[o,l]=aM(e);if(n){const c=s[e]=cM(n,r);iM(i,o,c,l)}else a&&(rM(i,o,a,l),s[e]=void 0)}}const im=/(?:Once|Passive|Capture)$/;function aM(i){let e;if(im.test(i)){e={};let n;for(;n=i.match(im);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Ts(i.slice(2)),e]}let Wu=0;const oM=Promise.resolve(),lM=()=>Wu||(oM.then(()=>Wu=0),Wu=Date.now());function cM(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;mr(uM(n,t.value),e,5,[n])};return t.value=i,t.attached=lM(),t}function uM(i,e){if(et(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const rm=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,fM=(i,e,t,n,r,s)=>{const a=r==="svg";e==="class"?ZS(i,n,a):e==="style"?tM(i,t,n):du(e)?bd(e)||sM(i,e,t,n,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):hM(i,e,n,a))?(tm(i,e,n),!i.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&em(i,e,n,a,s,e!=="value")):i._isVueCE&&(/[A-Z]/.test(e)||!rn(n))?tm(i,gs(e),n,s,e):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),em(i,e,n,a))};function hM(i,e,t,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in i&&rm(e)&&st(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=i.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return rm(e)&&rn(t)?!1:e in i}const dM={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},pM=(i,e)=>{const t=i._withKeys||(i._withKeys={}),n=e.join(".");return t[n]||(t[n]=(r=>{if(!("key"in r))return;const s=Ts(r.key);if(e.some(a=>a===s||dM[a]===s))return i(r)}))},mM=Kn({patchProp:fM},jS);let sm;function _M(){return sm||(sm=gS(mM))}const gM=((...i)=>{const e=_M().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=xM(n);if(!r)return;const s=e._component;!st(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,vM(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function vM(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function xM(i){return rn(i)?document.querySelector(i):i}function Cr(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Xg(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var wi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},to={duration:.5,overwrite:!1,delay:0},Vd,yn,Vt,Bi=1e8,Lt=1/Bi,Qf=Math.PI*2,SM=Qf/4,MM=0,Yg=Math.sqrt,yM=Math.cos,bM=Math.sin,vn=function(e){return typeof e=="string"},$t=function(e){return typeof e=="function"},Gr=function(e){return typeof e=="number"},Hd=function(e){return typeof e>"u"},_r=function(e){return typeof e=="object"},ii=function(e){return e!==!1},Gd=function(){return typeof window<"u"},Ol=function(e){return $t(e)||vn(e)},qg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},In=Array.isArray,eh=/(?:-?\.?\d|\.)+/gi,$g=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ba=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Xu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,jg=/[+-]=-?[.\d]+/,Kg=/[^,'"\[\]\s]+/gi,EM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Gt,er,th,Wd,Ai={},jc={},Zg,Jg=function(e){return(jc=no(e,Ai))&&li},Xd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},pl=function(e,t){return!t&&console.warn(e)},Qg=function(e,t){return e&&(Ai[e]=t)&&jc&&(jc[e]=t)||Ai},ml=function(){return 0},TM={suppressEvents:!0,isStart:!0,kill:!1},wc={suppressEvents:!0,kill:!1},wM={suppressEvents:!0},Yd={},ds=[],nh={},e0,vi={},Yu={},am=30,Ac=[],qd="",$d=function(e){var t=e[0],n,r;if(_r(t)||$t(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Ac.length;r--&&!Ac[r].targetTest(t););n=Ac[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new E0(e[r],n)))||e.splice(r,1);return e},Ks=function(e){return e._gsap||$d(zi(e))[0]._gsap},t0=function(e,t,n){return(n=e[t])&&$t(n)?e[t]():Hd(n)&&e.getAttribute&&e.getAttribute(t)||n},ri=function(e,t){return(e=e.split(",")).forEach(t)||e},Kt=function(e){return Math.round(e*1e5)/1e5||0},nn=function(e){return Math.round(e*1e7)/1e7||0},Ya=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},AM=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Kc=function(){var e=ds.length,t=ds.slice(0),n,r;for(nh={},ds.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},jd=function(e){return!!(e._initted||e._startAt||e.add)},n0=function(e,t,n,r){ds.length&&!yn&&Kc(),e.render(t,n,!!(yn&&t<0&&jd(e))),ds.length&&!yn&&Kc()},i0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Kg).length<2?t:vn(e)?e.trim():e},r0=function(e){return e},Ci=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},CM=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},no=function(e,t){for(var n in t)e[n]=t[n];return e},om=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=_r(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Zc=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Zo=function(e){var t=e.parent||Gt,n=e.keyframes?CM(In(e.keyframes)):Ci;if(ii(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},RM=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},s0=function(e,t,n,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},bu=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ss=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Zs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},PM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ih=function(e,t,n,r){return e._startAt&&(yn?e._startAt.revert(wc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},DM=function i(e){return!e||e._ts&&i(e.parent)},lm=function(e){return e._repeat?io(e._tTime,e=e.duration()+e._rDelay)*e:0},io=function(e,t){var n=Math.floor(e=nn(e/t));return e&&n===e?n-1:n},Jc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Eu=function(e){return e._end=nn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Lt)||0))},Tu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=nn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Eu(e),n._dirty||Zs(n,e)),e},a0=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Jc(e.rawTime(),t),(!t._dur||Pl(0,t.totalDuration(),n)-t._tTime>Lt)&&t.render(n,!0)),Zs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Lt}},rr=function(e,t,n,r){return t.parent&&Ss(t),t._start=nn((Gr(n)?n:n||e!==Gt?Di(e,n,t):e._time)+t._delay),t._end=nn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),s0(e,t,"_first","_last",e._sort?"_start":0),rh(t)||(e._recent=t),r||a0(e,t),e._ts<0&&Tu(e,e._tTime),e},o0=function(e,t){return(Ai.ScrollTrigger||Xd("scrollTrigger",t))&&Ai.ScrollTrigger.create(t,e)},l0=function(e,t,n,r,s){if(Zd(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!yn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&e0!==Mi.frame)return ds.push(e),e._lazy=[s,r],1},LM=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},rh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},IM=function(e,t,n,r){var s=e.ratio,a=t<0||!t&&(!e._start&&LM(e)&&!(!e._initted&&rh(e))||(e._ts<0||e._dp._ts<0)&&!rh(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=Pl(0,e._tDur,t),u=io(l,o),e._yoyo&&u&1&&(a=1-a),u!==io(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||yn||r||e._zTime===Lt||!t&&e._zTime){if(!e._initted&&l0(e,t,r,n,l))return;for(f=e._zTime,e._zTime=t||(n?Lt:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&ih(e,t,n,!0),e._onUpdate&&!n&&Ti(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Ti(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Ss(e,1),!n&&!yn&&(Ti(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},UM=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ro=function(e,t,n,r){var s=e._repeat,a=nn(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:nn(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Tu(e,e._tTime=e._tDur*o),e.parent&&Eu(e),n||Zs(e.parent,e),e},cm=function(e){return e instanceof qn?Zs(e):ro(e,e._dur)},FM={_start:0,endTime:ml,totalDuration:ml},Di=function i(e,t,n){var r=e.labels,s=e._recent||FM,a=e.duration()>=Bi?s.endTime(!1):e._dur,o,l,c;return vn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(In(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Jo=function(e,t,n){var r=Gr(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=ii(l.vars.inherit)&&l.parent;a.immediateRender=ii(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new tn(t[0],a,t[s+1])},ws=function(e,t){return e||e===0?t(e):t},Pl=function(e,t,n){return n<e?e:n>t?t:n},Rn=function(e,t){return!vn(e)||!(t=EM.exec(e))?"":t[1]},NM=function(e,t,n){return ws(n,function(r){return Pl(e,t,r)})},sh=[].slice,c0=function(e,t){return e&&_r(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&_r(e[0]))&&!e.nodeType&&e!==er},OM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return vn(r)&&!t||c0(r,1)?(s=n).push.apply(s,zi(r)):n.push(r)})||n},zi=function(e,t,n){return Vt&&!t&&Vt.selector?Vt.selector(e):vn(e)&&!n&&(th||!so())?sh.call((t||Wd).querySelectorAll(e),0):In(e)?OM(e,n):c0(e)?sh.call(e,0):e?[e]:[]},ah=function(e){return e=zi(e)[0]||pl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return zi(t,n.querySelectorAll?n:n===e?pl("Invalid scope")||Wd.createElement("div"):e)}},u0=function(e){return e.sort(function(){return .5-Math.random()})},f0=function(e){if($t(e))return e;var t=_r(e)?e:{each:e},n=Js(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,u=r,f=r;return vn(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],f=r[1]),function(h,d,g){var _=(g||t).length,m=a[_],p,M,y,v,b,w,T,P,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,Bi])[1],!S){for(T=-Bi;T<(T=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(m=a[_]=[],p=l?Math.min(S,_)*u-.5:r%S,M=S===Bi?0:l?_*f/S-.5:r/S|0,T=0,P=Bi,w=0;w<_;w++)y=w%S-p,v=M-(w/S|0),m[w]=b=c?Math.abs(c==="y"?v:y):Yg(y*y+v*v),b>T&&(T=b),b<P&&(P=b);r==="random"&&u0(m),m.max=T-P,m.min=P,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Rn(t.amount||t.each)||0,n=n&&_<0?M0(n):n}return _=(m[h]-m.min)/m.max||0,nn(m.b+(n?n(_):_)*m.v)+m.u}},oh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=nn(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Gr(n)?0:Rn(n))}},h0=function(e,t){var n=In(e),r,s;return!n&&_r(e)&&(r=n=e.radius||Bi,e.values?(e=zi(e.values),(s=!Gr(e[0]))&&(r*=r)):e=oh(e.increment)),ws(t,n?$t(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Bi,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-o,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-o),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:a,s||u===a||Gr(a)?u:u+Rn(a)}:oh(e))},d0=function(e,t,n,r){return ws(In(e)?!t:n===!0?!!(n=0):!r,function(){return In(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},BM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,a){return a(s)},r)}},zM=function(e,t){return function(n){return e(parseFloat(n))+(t||Rn(n))}},kM=function(e,t,n){return m0(e,t,0,1,n)},p0=function(e,t,n){return ws(n,function(r){return e[~~t(r)]})},VM=function i(e,t,n){var r=t-e;return In(e)?p0(e,i(0,e.length),t):ws(n,function(s){return(r+(s-e)%r)%r+e})},HM=function i(e,t,n){var r=t-e,s=r*2;return In(e)?p0(e,i(0,e.length-1),t):ws(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},_l=function(e){for(var t=0,n="",r,s,a,o;~(r=e.indexOf("random(",t));)a=e.indexOf(")",r),o=e.charAt(r+7)==="[",s=e.substr(r+7,a-r-7).match(o?Kg:eh),n+=e.substr(t,r-t)+d0(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},m0=function(e,t,n,r,s){var a=t-e,o=r-n;return ws(s,function(l){return n+((l-e)/a*o||0)})},GM=function i(e,t,n,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=vn(e),o={},l,c,u,f,h;if(n===!0&&(r=1)&&(n=null),a)e={p:e},t={p:t};else if(In(e)&&!In(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(i(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},n=t}else r||(e=no(In(e)?[]:{},e));if(!u){for(l in t)Kd.call(o,e,l,"get",t[l]);s=function(g){return ep(g,o)||(a?e.p:e)}}}return ws(n,s)},um=function(e,t,n){var r=e.labels,s=Bi,a,o,l;for(a in r)o=r[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Ti=function(e,t,n){var r=e.vars,s=r[t],a=Vt,o=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&ds.length&&Kc(),o&&(Vt=o),u=l?s.apply(c,l):s.call(c),Vt=a,u},Uo=function(e){return Ss(e),e.scrollTrigger&&e.scrollTrigger.kill(!!yn),e.progress()<1&&Ti(e,"onInterrupt"),e},za,_0=[],g0=function(e){if(e)if(e=!e.name&&e.default||e,Gd()||e.headless){var t=e.name,n=$t(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ml,render:ep,add:Kd,kill:sy,modifier:ry,rawVars:0},a={targetTest:0,get:0,getSetter:Qd,aliases:{},register:0};if(so(),e!==r){if(vi[t])return;Ci(r,Ci(Zc(e,s),a)),no(r.prototype,no(s,Zc(e,a))),vi[r.prop=t]=r,e.targetTest&&(Ac.push(r),Yd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Qg(t,r),e.register&&e.register(li,r,si)}else _0.push(e)},Dt=255,Fo={aqua:[0,Dt,Dt],lime:[0,Dt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Dt],navy:[0,0,128],white:[Dt,Dt,Dt],olive:[128,128,0],yellow:[Dt,Dt,0],orange:[Dt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Dt,0,0],pink:[Dt,192,203],cyan:[0,Dt,Dt],transparent:[Dt,Dt,Dt,0]},qu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Dt+.5|0},v0=function(e,t,n){var r=e?Gr(e)?[e>>16,e>>8&Dt,e&Dt]:0:Fo.black,s,a,o,l,c,u,f,h,d,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Fo[e])r=Fo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Dt,r&Dt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Dt,e&Dt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(eh),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=qu(l+1/3,s,a),r[1]=qu(l,s,a),r[2]=qu(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match($g),n&&r.length<4&&(r[3]=1),r}else r=e.match(eh)||Fo.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/Dt,a=r[1]/Dt,o=r[2]/Dt,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(a-o)/d+(a<o?6:0):f===a?(o-s)/d+2:(s-a)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},x0=function(e){var t=[],n=[],r=-1;return e.split(ps).forEach(function(s){var a=s.match(Ba)||[];t.push.apply(t,a),n.push(r+=a.length+1)}),t.c=n,t},fm=function(e,t,n){var r="",s=(e+r).match(ps),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=v0(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=x0(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(ps,"1").split(Ba),f=c.length-1;o<f;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(ps),f=c.length-1;o<f;o++)r+=c[o]+s[o];return r+c[f]},ps=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Fo)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),WM=/hsl[a]?\(/,S0=function(e){var t=e.join(" "),n;if(ps.lastIndex=0,ps.test(t))return n=WM.test(t),e[1]=fm(e[1],n),e[0]=fm(e[0],n,x0(e[1])),!0},gl,Mi=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,a=s,o=[],l,c,u,f,h,d,g=function _(m){var p=i()-r,M=m===!0,y,v,b,w;if((p>e||p<0)&&(n+=p-t),r+=p,b=r-n,y=b-a,(y>0||M)&&(w=++f.frame,h=b-f.time*1e3,f.time=b=b/1e3,a+=y+(y>=s?4:s-y),v=1),M||(l=c(_)),v)for(d=0;d<o.length;d++)o[d](b,h,w,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Zg&&(!th&&Gd()&&(er=th=window,Wd=er.document||{},Ai.gsap=li,(er.gsapVersions||(er.gsapVersions=[])).push(li.version),Jg(jc||er.GreenSockGlobals||!er.gsap&&er||{}),_0.forEach(g0)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,a-f.time*1e3+1|0)},gl=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),gl=0,c=ml},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=f.time*1e3+s},add:function(m,p,M){var y=p?function(v,b,w,T){m(v,b,w,T),f.remove(y)}:m;return f.remove(m),o[M?"unshift":"push"](y),so(),y},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},f})(),so=function(){return!gl&&Mi.wake()},dt={},XM=/^[\d.\-M][\d.\-,\s]/,YM=/["']/g,qM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(YM,"").trim():+c,r=l.substr(o+1).trim();return t},$M=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},jM=function(e){var t=(e+"").split("("),n=dt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[qM(t[1])]:$M(e).split(",").map(i0)):dt._CE&&XM.test(e)?dt._CE("",e):n},M0=function(e){return function(t){return 1-e(1-t)}},y0=function i(e,t){for(var n=e._first,r;n;)n instanceof qn?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},Js=function(e,t){return e&&($t(e)?e:dt[e]||jM(e))||t},la=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},a;return ri(e,function(o){dt[o]=Ai[o]=s,dt[a=o.toLowerCase()]=n;for(var l in s)dt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=dt[o+"."+l]=s[l]}),s},b0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},$u=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Qf*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*bM((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:b0(o);return s=Qf/s,l.config=function(c,u){return i(e,c,u)},l},ju=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:b0(n);return r.config=function(s){return i(e,s)},r};ri("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;la(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});dt.Linear.easeNone=dt.none=dt.Linear.easeIn;la("Elastic",$u("in"),$u("out"),$u());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<r?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};la("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);la("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});la("Circ",function(i){return-(Yg(1-i*i)-1)});la("Sine",function(i){return i===1?1:-yM(i*SM)+1});la("Back",ju("in"),ju("out"),ju());dt.SteppedEase=dt.steps=Ai.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,a=1-Lt;return function(o){return((r*Pl(0,a,o)|0)+s)*n}}};to.ease=dt["quad.out"];ri("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return qd+=i+","+i+"Params,"});var E0=function(e,t){this.id=MM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:t0,this.set=t?t.getSetter:Qd},vl=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ro(this,+t.duration,1,1),this.data=t.data,Vt&&(this._ctx=Vt,Vt.data.push(this)),gl||Mi.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ro(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(so(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Tu(this,n),!s._dp||s.parent||a0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&rr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Lt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),n0(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+lm(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+lm(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?io(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-Lt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Jc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Lt?0:this._rts,this.totalTime(Pl(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Eu(this),PM(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(so(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Lt&&(this._tTime-=Lt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&rr(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ii(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Jc(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=wM);var r=yn;return yn=n,jd(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),yn=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,cm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,cm(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Di(this,n),ii(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,ii(r)),this._dur||(this._zTime=-Lt),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Lt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Lt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Lt)},e.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},e.then=function(n){var r=this;return new Promise(function(s){var a=$t(n)?n:r0,o=function(){var c=r.then;r.then=null,$t(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),s(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},e.kill=function(){Uo(this)},i})();Ci(vl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Lt,_prom:0,_ps:!1,_rts:1});var qn=(function(i){Xg(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ii(n.sortChildren),Gt&&rr(n.parent||Gt,Cr(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&o0(Cr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return Jo(0,arguments,this),this},t.from=function(r,s,a){return Jo(1,arguments,this),this},t.fromTo=function(r,s,a,o){return Jo(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,Zo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new tn(r,s,Di(this,a),1),this},t.call=function(r,s,a){return rr(this,tn.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new tn(r,a,Di(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,Zo(a).immediateRender=ii(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},t.staggerFromTo=function(r,s,a,o,l,c,u,f){return o.startAt=a,Zo(o).immediateRender=ii(o.immediateRender),this.staggerTo(r,s,o,l,c,u,f)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:nn(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,g,_,m,p,M,y,v,b,w,T;if(this!==Gt&&u>l&&r>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),h=u,v=this._start,y=this._ts,p=!y,f&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,a);if(h=nn(u%m),u===l?(_=this._repeat,h=c):(b=nn(u/m),_=~~b,_&&_===b&&(h=c,_--),h>c&&(h=c)),b=io(this._tTime,m),!o&&this._tTime&&b!==_&&this._tTime-b*m-this._dur<=0&&(b=_),w&&_&1&&(h=c-h,T=1),_!==b&&!this._lock){var P=w&&b&1,S=P===(w&&_&1);if(_<b&&(P=!P),o=P?0:u%c?c:u,this._lock=1,this.render(o||(T?0:nn(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Ti(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,o=P?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;y0(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=UM(this,nn(o),nn(h)),M&&(u-=h-(h=M._start))),this._tTime=u,this._time=h,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&!s&&!b&&(Ti(this,"onStart"),this._tTime!==u))return this;if(h>=o&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,a),h!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=-Lt);break}}d=g}else{d=this._last;for(var E=r<0?r:h;d;){if(g=d._prev,(d._act||E<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(E-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(E-d._start)*d._ts,s,a||yn&&jd(d)),h!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=E?-Lt:Lt);break}}d=g}}if(M&&!s&&(this.pause(),M.render(h>=o?0:-Lt)._zTime=h>=o?1:-1,this._ts))return this._start=v,Eu(this),this.render(r,s,a);this._onUpdate&&!s&&Ti(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ss(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(Ti(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(Gr(s)||(s=Di(this,s,r)),!(r instanceof vl)){if(In(r))return r.forEach(function(o){return a.add(o,s)}),this;if(vn(r))return this.addLabel(r,s);if($t(r))r=tn.delayedCall(0,r);else return this}return this!==r?rr(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Bi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof tn?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return vn(r)?this.removeLabel(r):$t(r)?this.killTweensOf(r):(r.parent===this&&bu(this,r),r===this._recent&&(this._recent=this._last),Zs(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=nn(Mi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Di(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=tn.delayedCall(0,s||ml,a);return o.data="isPause",this._hasPause=1,rr(this,o,Di(this,r))},t.removePause=function(r){var s=this._first;for(r=Di(this,r);s;)s._start===r&&s.data==="isPause"&&Ss(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)as!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=zi(r),l=this._first,c=Gr(s),u;l;)l instanceof tn?AM(l._targets,o)&&(c?(!as||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=Di(a,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=tn.to(a,Ci({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Lt,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&ro(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,Ci({startAt:{time:Di(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),um(this,Di(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),um(this,Di(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Lt)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return Zs(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Zs(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=Bi,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,rr(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;ro(a,a===Gt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(Gt._ts&&(n0(Gt,Jc(r,Gt)),e0=Mi.frame),Mi.frame>=am){am+=wi.autoSleep||120;var s=Gt._first;if((!s||!s._ts)&&wi.autoSleep&&Mi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Mi.sleep()}}},e})(vl);Ci(qn.prototype,{_lock:0,_hasPause:0,_forcing:0});var KM=function(e,t,n,r,s,a,o){var l=new si(this._pt,e,t,0,1,P0,null,s),c=0,u=0,f,h,d,g,_,m,p,M;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=_l(r)),a&&(M=[n,r],a(M,e,t),n=M[0],r=M[1]),h=n.match(Xu)||[];f=Xu.exec(r);)g=f[0],_=r.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Ya(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Xu.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(jg.test(r)||p)&&(l.e=0),this._pt=l,l},Kd=function(e,t,n,r,s,a,o,l,c,u){$t(r)&&(r=r(s||0,e,a));var f=e[t],h=n!=="get"?n:$t(f)?c?e[t.indexOf("set")||!$t(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=$t(f)?c?ty:C0:Jd,g;if(vn(r)&&(~r.indexOf("random(")&&(r=_l(r)),r.charAt(1)==="="&&(g=Ya(h,r)+(Rn(h)||0),(g||g===0)&&(r=g))),!u||h!==r||lh)return!isNaN(h*r)&&r!==""?(g=new si(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?iy:R0,0,d),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!f&&!(t in e)&&Xd(t,r),KM.call(this,e,t,h,r,d,l||wi.stringFilter,c))},ZM=function(e,t,n,r,s){if($t(e)&&(e=Qo(e,s,t,n,r)),!_r(e)||e.style&&e.nodeType||In(e)||qg(e))return vn(e)?Qo(e,s,t,n,r):e;var a={},o;for(o in e)a[o]=Qo(e[o],s,t,n,r);return a},T0=function(e,t,n,r,s,a){var o,l,c,u;if(vi[e]&&(o=new vi[e]).init(s,o.rawVars?t[e]:ZM(t[e],r,s,a,n),n,r,a)!==!1&&(n._pt=l=new si(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==za))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},as,lh,Zd=function i(e,t,n){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,M=p&&p.data==="nested"?p.vars.targets:m,y=e._overwrite==="auto"&&!Vd,v=e.timeline,b,w,T,P,S,E,F,z,H,Z,K,k,B;if(v&&(!h||!s)&&(s="none"),e._ease=Js(s,to.ease),e._yEase=f?M0(Js(f===!0?s:f,to.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!v&&!!r.runBackwards,!v||h&&!r.stagger){if(z=m[0]?Ks(m[0]).harness:0,k=z&&r[z.prop],b=Zc(r,Yd),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!d?_.render(-1,!0):_.revert(u&&g?wc:TM),_._lazy=0),a){if(Ss(e._startAt=tn.set(m,Ci({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&ii(l),startAt:null,delay:0,onUpdate:c&&function(){return Ti(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn||!o&&!d)&&e._startAt.revert(wc),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),T=Ci({overwrite:!1,data:"isFromStart",lazy:o&&!_&&ii(l),immediateRender:o,stagger:0,parent:p},b),k&&(T[z.prop]=k),Ss(e._startAt=tn.set(m,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn?e._startAt.revert(wc):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,Lt,Lt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&ii(l)||l&&!g,w=0;w<m.length;w++){if(S=m[w],F=S._gsap||$d(m)[w]._gsap,e._ptLookup[w]=Z={},nh[F.id]&&ds.length&&Kc(),K=M===m?w:M.indexOf(S),z&&(H=new z).init(S,k||b,e,K,M)!==!1&&(e._pt=P=new si(e._pt,S,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(X){Z[X]=P}),H.priority&&(E=1)),!z||k)for(T in b)vi[T]&&(H=T0(T,b,e,K,S,M))?H.priority&&(E=1):Z[T]=P=Kd.call(e,S,T,"get",b[T],K,M,0,r.stringFilter);e._op&&e._op[w]&&e.kill(S,e._op[w]),y&&e._pt&&(as=e,Gt.killTweensOf(S,Z,e.globalTime(t)),B=!e.parent,as=0),e._pt&&l&&(nh[F.id]=1)}E&&D0(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!B,h&&t<=0&&v.render(Bi,!0,!0)},JM=function(e,t,n,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return lh=1,e.vars[t]="+=0",Zd(e,o),lh=0,l?pl(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=Kt(n)+Rn(f.e)),f.b&&(f.b=u.s+Rn(f.b))},QM=function(e,t){var n=e[0]?Ks(e[0]).harness:0,r=n&&n.aliases,s,a,o,l;if(!r)return t;s=no({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},ey=function(e,t,n,r){var s=t.ease||r||"power1.inOut",a,o;if(In(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Qo=function(e,t,n,r,s){return $t(e)?e.call(t,n,r,s):vn(e)&&~e.indexOf("random(")?_l(e):e},w0=qd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",A0={};ri(w0+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return A0[i]=1});var tn=(function(i){Xg(e,i);function e(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:Zo(r))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,M=r.parent||Gt,y=(In(n)||qg(n)?Gr(n[0]):"length"in r)?[n]:zi(n),v,b,w,T,P,S,E,F;if(o._targets=y.length?$d(y):pl("GSAP target "+n+" not found. https://gsap.com",!wi.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||h||Ol(c)||Ol(u)){if(r=o.vars,v=o.timeline=new qn({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:y}),v.kill(),v.parent=v._dp=Cr(o),v._start=0,h||Ol(c)||Ol(u)){if(T=y.length,E=h&&f0(h),_r(h))for(P in h)~w0.indexOf(P)&&(F||(F={}),F[P]=h[P]);for(b=0;b<T;b++)w=Zc(r,A0),w.stagger=0,p&&(w.yoyoEase=p),F&&no(w,F),S=y[b],w.duration=+Qo(c,Cr(o),b,S,y),w.delay=(+Qo(u,Cr(o),b,S,y)||0)-o._delay,!h&&T===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),v.to(S,w,E?E(b,S,y):0),v._ease=dt.none;v.duration()?c=u=0:o.timeline=0}else if(g){Zo(Ci(v.vars.defaults,{ease:"none"})),v._ease=Js(g.ease||r.ease||"none");var z=0,H,Z,K;if(In(g))g.forEach(function(k){return v.to(y,k,">")}),v.duration();else{w={};for(P in g)P==="ease"||P==="easeEach"||ey(P,g[P],w,g.easeEach);for(P in w)for(H=w[P].sort(function(k,B){return k.t-B.t}),z=0,b=0;b<H.length;b++)Z=H[b],K={ease:Z.e,duration:(Z.t-(b?H[b-1].t:0))/100*c},K[P]=Z.v,v.to(y,K,z),z+=K.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return d===!0&&!Vd&&(as=Cr(o),Gt.killTweensOf(y),as=0),rr(M,Cr(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(f||!c&&!g&&o._start===nn(M._time)&&ii(f)&&DM(Cr(o))&&M.data!=="nested")&&(o._tTime=-Lt,o.render(Math.max(0,-u)||0)),m&&o0(Cr(o),m),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-Lt&&!u?l:r<Lt?0:r,h,d,g,_,m,p,M,y,v;if(!c)IM(this,r,s,a);else if(f!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,a);if(h=nn(f%_),f===l?(g=this._repeat,h=c):(m=nn(f/_),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),p=this._yoyo&&g&1,p&&(v=this._yEase,h=c-h),m=io(this._tTime,_),h===o&&!a&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(y&&this._yEase&&y0(y,p),this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(nn(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(l0(this,u?r:h,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(v||this._ease)(h/c),this._from&&(this.ratio=M=1-M),!o&&f&&!s&&!m&&(Ti(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;y&&y.render(r<0?r:y._dur*y._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&ih(this,r,s,a),Ti(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Ti(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&ih(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Ss(this,1),!s&&!(u&&!o)&&(f||o||p)&&(Ti(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){gl||Mi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Zd(this,c),u=this._ease(c/this._dur),JM(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(Tu(this,0),this.parent||s0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Uo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!yn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,as&&as.vars.overwrite!==!0)._first||Uo(this),this.parent&&a!==this.timeline.totalDuration()&&ro(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?zi(r):o,c=this._ptLookup,u=this._pt,f,h,d,g,_,m,p;if((!s||s==="all")&&RM(o,l))return s==="all"&&(this._pt=0),Uo(this);for(f=this._op=this._op||[],s!=="all"&&(vn(s)&&(_={},ri(s,function(M){return _[M]=1}),s=_),s=QM(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){h=c[p],s==="all"?(f[p]=s,g=h,d={}):(d=f[p]=f[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&bu(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Uo(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Jo(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return Jo(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return Gt.killTweensOf(r,s,a)},e})(vl);Ci(tn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ri("staggerTo,staggerFrom,staggerFromTo",function(i){tn[i]=function(){var e=new qn,t=sh.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Jd=function(e,t,n){return e[t]=n},C0=function(e,t,n){return e[t](n)},ty=function(e,t,n,r){return e[t](r.fp,n)},ny=function(e,t,n){return e.setAttribute(t,n)},Qd=function(e,t){return $t(e[t])?C0:Hd(e[t])&&e.setAttribute?ny:Jd},R0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},iy=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},P0=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},ep=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},ry=function(e,t,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,n),s=a},sy=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?bu(this,t,"_pt"):t.dep||(n=1),t=r;return!n},ay=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},D0=function(e){for(var t=e._pt,n,r,s,a;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=s},si=(function(){function i(t,n,r,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||R0,this.d=l||this,this.set=c||Jd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=ay,this.m=n,this.mt=s,this.tween=r},i})();ri(qd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Yd[i]=1});Ai.TweenMax=Ai.TweenLite=tn;Ai.TimelineLite=Ai.TimelineMax=qn;Gt=new qn({sortChildren:!1,defaults:to,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});wi.stringFilter=S0;var Qs=[],Cc={},oy=[],hm=0,ly=0,Ku=function(e){return(Cc[e]||oy).map(function(t){return t()})},ch=function(){var e=Date.now(),t=[];e-hm>2&&(Ku("matchMediaInit"),Qs.forEach(function(n){var r=n.queries,s=n.conditions,a,o,l,c;for(o in r)a=er.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Ku("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),hm=e,Ku("matchMedia"))},L0=(function(){function i(t,n){this.selector=n&&ah(n),this.data=[],this._r=[],this.isReverted=!1,this.id=ly++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){$t(n)&&(s=r,r=n,n=$t);var a=this,o=function(){var c=Vt,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=ah(s)),Vt=a,f=r.apply(a,arguments),$t(f)&&a._r.push(f),Vt=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===$t?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var r=Vt;Vt=null,n(this),Vt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof tn&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof qn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof tn)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Qs.length;a--;)Qs[a].id===this.id&&Qs.splice(a,1)},e.revert=function(n){this.kill(n||{})},i})(),cy=(function(){function i(t){this.contexts=[],this.scope=t,Vt&&Vt.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){_r(n)||(n={matches:n});var a=new L0(0,s||this.scope),o=a.conditions={},l,c,u;Vt&&!a.selector&&(a.selector=Vt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(c in n)c==="all"?u=1:(l=er.matchMedia(n[c]),l&&(Qs.indexOf(a)<0&&Qs.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(ch):l.addEventListener("change",ch)));return u&&r(a,function(f){return a.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),Qc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return g0(r)})},timeline:function(e){return new qn(e)},getTweensOf:function(e,t){return Gt.getTweensOf(e,t)},getProperty:function(e,t,n,r){vn(e)&&(e=zi(e)[0]);var s=Ks(e||{}).get,a=n?r0:i0;return n==="native"&&(n=""),e&&(t?a((vi[t]&&vi[t].get||s)(e,t,n,r)):function(o,l,c){return a((vi[o]&&vi[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=zi(e),e.length>1){var r=e.map(function(u){return li.quickSetter(u,t,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var a=vi[t],o=Ks(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;za._pt=0,f.init(e,n?u+n:u,za,0,[e]),f.render(1,f),za._pt&&ep(1,za)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var r,s=li.to(e,Ci((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Gt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Js(e.ease,to.ease)),om(to,e||{})},config:function(e){return om(wi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!vi[o]&&!Ai[o]&&pl(t+" effect requires "+o+" plugin.")}),Yu[t]=function(o,l,c){return n(zi(o),Ci(l||{},s),c)},a&&(qn.prototype[t]=function(o,l,c){return this.add(Yu[t](o,_r(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){dt[e]=Js(t)},parseEase:function(e,t){return arguments.length?Js(e,t):dt},getById:function(e){return Gt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new qn(e),r,s;for(n.smoothChildTiming=ii(e.smoothChildTiming),Gt.remove(n),n._dp=0,n._time=n._tTime=Gt._time,r=Gt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof tn&&r.vars.onComplete===r._targets[0]))&&rr(n,r,r._start-r._delay),r=s;return rr(Gt,n,0),n},context:function(e,t){return e?new L0(e,t):Vt},matchMedia:function(e){return new cy(e)},matchMediaRefresh:function(){return Qs.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||ch()},addEventListener:function(e,t){var n=Cc[e]||(Cc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Cc[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:VM,wrapYoyo:HM,distribute:f0,random:d0,snap:h0,normalize:kM,getUnit:Rn,clamp:NM,splitColor:v0,toArray:zi,selector:ah,mapRange:m0,pipe:BM,unitize:zM,interpolate:GM,shuffle:u0},install:Jg,effects:Yu,ticker:Mi,updateRoot:qn.updateRoot,plugins:vi,globalTimeline:Gt,core:{PropTween:si,globals:Qg,Tween:tn,Timeline:qn,Animation:vl,getCache:Ks,_removeLinkedListItem:bu,reverting:function(){return yn},context:function(e){return e&&Vt&&(Vt.data.push(e),e._ctx=Vt),Vt},suppressOverwrites:function(e){return Vd=e}}};ri("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Qc[i]=tn[i]});Mi.add(qn.updateRoot);za=Qc.to({},{duration:0});var uy=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},fy=function(e,t){var n=e._targets,r,s,a;for(r in t)for(s=n.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=uy(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[s],r))},Zu=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(vn(s)&&(l={},ri(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}fy(o,s)}}}},li=Qc.registerPlugin({name:"attr",init:function(e,t,n,r,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)yn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Zu("roundProps",oh),Zu("modifiers"),Zu("snap",h0))||Qc;tn.version=qn.version=li.version="3.13.0";Zg=1;Gd()&&so();dt.Power0;dt.Power1;dt.Power2;dt.Power3;dt.Power4;dt.Linear;dt.Quad;dt.Cubic;dt.Quart;dt.Quint;dt.Strong;dt.Elastic;dt.Back;dt.SteppedEase;dt.Bounce;dt.Sine;dt.Expo;dt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var dm,os,qa,tp,Ws,pm,np,hy=function(){return typeof window<"u"},Wr={},zs=180/Math.PI,$a=Math.PI/180,da=Math.atan2,mm=1e8,ip=/([A-Z])/g,dy=/(left|right|width|margin|padding|x)/i,py=/[\s,\(]\S/,or={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},uh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},my=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},_y=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},gy=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},I0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},U0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},vy=function(e,t,n){return e.style[t]=n},xy=function(e,t,n){return e.style.setProperty(t,n)},Sy=function(e,t,n){return e._gsap[t]=n},My=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},yy=function(e,t,n,r,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},by=function(e,t,n,r,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Wt="transform",ai=Wt+"Origin",Ey=function i(e,t){var n=this,r=this.target,s=r.style,a=r._gsap;if(e in Wr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=or[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Rr(r,o)}):this.tfm[e]=a.x?a[e]:Rr(r,e),e===ai&&(this.tfm.zOrigin=a.zOrigin);else return or.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(Wt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ai,t,"")),e=Wt}(s||t)&&this.props.push(e,t,s[e])},F0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Ty=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(ip,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=np(),(!s||!s.isStart)&&!n[Wt]&&(F0(n),r.zOrigin&&n[ai]&&(n[ai]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},N0=function(e,t){var n={target:e,props:[],revert:Ty,save:Ey};return e._gsap||li.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},O0,fh=function(e,t){var n=os.createElementNS?os.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):os.createElement(e);return n&&n.style?n:os.createElement(e)},ki=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(ip,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,ao(t)||t,1)||""},_m="O,Moz,ms,Ms,Webkit".split(","),ao=function(e,t,n){var r=t||Ws,s=r.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(_m[a]+e in s););return a<0?null:(a===3?"ms":a>=0?_m[a]:"")+e},hh=function(){hy()&&window.document&&(dm=window,os=dm.document,qa=os.documentElement,Ws=fh("div")||{style:{}},fh("div"),Wt=ao(Wt),ai=Wt+"Origin",Ws.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",O0=!!ao("perspective"),np=li.core.reverting,tp=1)},gm=function(e){var t=e.ownerSVGElement,n=fh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),qa.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),qa.removeChild(n),s},vm=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},B0=function(e){var t,n;try{t=e.getBBox()}catch{t=gm(e),n=1}return t&&(t.width||t.height)||n||(t=gm(e)),t&&!t.width&&!t.x&&!t.y?{x:+vm(e,["x","cx","x1"])||0,y:+vm(e,["y","cy","y1"])||0,width:0,height:0}:t},z0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&B0(e))},ia=function(e,t){if(t){var n=e.style,r;t in Wr&&t!==ai&&(t=Wt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(ip,"-$1").toLowerCase())):n.removeAttribute(t)}},ls=function(e,t,n,r,s,a){var o=new si(e._pt,t,n,0,1,a?U0:I0);return e._pt=o,o.b=r,o.e=s,e._props.push(n),o},xm={deg:1,rad:1,turn:1},wy={grid:1,flex:1},Ms=function i(e,t,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ws.style,l=dy.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",g,_,m,p;if(r===a||!s||xm[r]||xm[a])return s;if(a!=="px"&&!h&&(s=i(e,t,n,"px")),p=e.getCTM&&z0(e),(d||a==="%")&&(Wr[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Kt(d?s/g*f:s/100*g);if(o[l?"width":"height"]=f+(h?a:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===os||!_.appendChild)&&(_=os.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Mi.time&&!m.uncache)return Kt(s/m.width*f);if(d&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=f+r,g=e[u],M?e.style[t]=M:ia(e,t)}else(d||a==="%")&&!wy[ki(_,"display")]&&(o.position=ki(e,"position")),_===e&&(o.position="static"),_.appendChild(Ws),g=Ws[u],_.removeChild(Ws),o.position="absolute";return l&&d&&(m=Ks(_),m.time=Mi.time,m.width=_[u]),Kt(h?g*s/f:g&&s?f/g*s:0)},Rr=function(e,t,n,r){var s;return tp||hh(),t in or&&t!=="transform"&&(t=or[t],~t.indexOf(",")&&(t=t.split(",")[0])),Wr[t]&&t!=="transform"?(s=Sl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:tu(ki(e,ai))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=eu[t]&&eu[t](e,t,n)||ki(e,t)||t0(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ms(e,t,s,n)+n:s},Ay=function(e,t,n,r){if(!n||n==="none"){var s=ao(t,e,1),a=s&&ki(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=ki(e,"borderTopColor"))}var o=new si(this._pt,e.style,t,0,1,P0),l=0,c=0,u,f,h,d,g,_,m,p,M,y,v,b;if(o.b=n,o.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=ki(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=ki(e,t)||r,_?e.style[t]=_:ia(e,t)),u=[n,r],S0(u),n=u[0],r=u[1],h=n.match(Ba)||[],b=r.match(Ba)||[],b.length){for(;f=Ba.exec(r);)m=f[0],M=r.substring(l,f.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=Ya(d,m)+v),p=parseFloat(m),y=m.substr((p+"").length),l=Ba.lastIndex-y.length,y||(y=y||wi.units[t]||v,l===r.length&&(r+=y,o.e+=y)),v!==y&&(d=Ms(e,t,_,y)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?U0:I0;return jg.test(r)&&(o.e=0),this._pt=o,o},Sm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Cy=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Sm[n]||n,t[1]=Sm[r]||r,t.join(" ")},Ry=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Wr[o]&&(l=1,o=o==="transformOrigin"?ai:Wt),ia(n,o);l&&(ia(n,Wt),a&&(a.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Sl(n,1),a.uncache=1,F0(r)))}},eu={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var a=e._pt=new si(e._pt,t,n,0,0,Ry);return a.u=r,a.pr=-10,a.tween=s,e._props.push(n),1}}},xl=[1,0,0,1,0,0],k0={},V0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Mm=function(e){var t=ki(e,Wt);return V0(t)?xl:t.substr(7).match($g).map(Kt)},rp=function(e,t){var n=e._gsap||Ks(e),r=e.style,s=Mm(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?xl:s):(s===xl&&!e.offsetParent&&e!==qa&&!n.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,qa.appendChild(e)),s=Mm(e),l?r.display=l:ia(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):qa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},dh=function(e,t,n,r,s,a){var o=e._gsap,l=s||rp(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],M=l[5],y=t.split(" "),v=parseFloat(y[0])||0,b=parseFloat(y[1])||0,w,T,P,S;n?l!==xl&&(T=d*m-g*_)&&(P=v*(m/T)+b*(-_/T)+(_*M-m*p)/T,S=v*(-g/T)+b*(d/T)-(d*M-g*p)/T,v=P,b=S):(w=B0(e),v=w.x+(~y[0].indexOf("%")?v/100*w.width:v),b=w.y+(~(y[1]||y[0]).indexOf("%")?b/100*w.height:b)),r||r!==!1&&o.smooth?(p=v-c,M=b-u,o.xOffset=f+(p*d+M*_)-p,o.yOffset=h+(p*g+M*m)-M):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[ai]="0px 0px",a&&(ls(a,o,"xOrigin",c,v),ls(a,o,"yOrigin",u,b),ls(a,o,"xOffset",f,o.xOffset),ls(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+b)},Sl=function(e,t){var n=e._gsap||new E0(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=ki(e,ai)||"0",u,f,h,d,g,_,m,p,M,y,v,b,w,T,P,S,E,F,z,H,Z,K,k,B,X,ce,U,fe,Le,ze,He,je;return u=f=h=_=m=p=M=y=v=0,d=g=1,n.svg=!!(e.getCTM&&z0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Wt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Wt]!=="none"?l[Wt]:"")),r.scale=r.rotate=r.translate="none"),T=rp(e,n.svg),n.svg&&(n.uncache?(X=e.getBBox(),c=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",B=""):B=!t&&e.getAttribute("data-svg-origin"),dh(e,B||c,!!B||n.originIsAbsolute,n.smooth!==!1,T)),b=n.xOrigin||0,w=n.yOrigin||0,T!==xl&&(F=T[0],z=T[1],H=T[2],Z=T[3],u=K=T[4],f=k=T[5],T.length===6?(d=Math.sqrt(F*F+z*z),g=Math.sqrt(Z*Z+H*H),_=F||z?da(z,F)*zs:0,M=H||Z?da(H,Z)*zs+_:0,M&&(g*=Math.abs(Math.cos(M*$a))),n.svg&&(u-=b-(b*F+w*H),f-=w-(b*z+w*Z))):(je=T[6],ze=T[7],U=T[8],fe=T[9],Le=T[10],He=T[11],u=T[12],f=T[13],h=T[14],P=da(je,Le),m=P*zs,P&&(S=Math.cos(-P),E=Math.sin(-P),B=K*S+U*E,X=k*S+fe*E,ce=je*S+Le*E,U=K*-E+U*S,fe=k*-E+fe*S,Le=je*-E+Le*S,He=ze*-E+He*S,K=B,k=X,je=ce),P=da(-H,Le),p=P*zs,P&&(S=Math.cos(-P),E=Math.sin(-P),B=F*S-U*E,X=z*S-fe*E,ce=H*S-Le*E,He=Z*E+He*S,F=B,z=X,H=ce),P=da(z,F),_=P*zs,P&&(S=Math.cos(P),E=Math.sin(P),B=F*S+z*E,X=K*S+k*E,z=z*S-F*E,k=k*S-K*E,F=B,K=X),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Kt(Math.sqrt(F*F+z*z+H*H)),g=Kt(Math.sqrt(k*k+je*je)),P=da(K,k),M=Math.abs(P)>2e-4?P*zs:0,v=He?1/(He<0?-He:He):0),n.svg&&(B=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!V0(ki(e,Wt)),B&&e.setAttribute("transform",B))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Kt(d),n.scaleY=Kt(g),n.rotation=Kt(_)+o,n.rotationX=Kt(m)+o,n.rotationY=Kt(p)+o,n.skewX=M+o,n.skewY=y+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[ai]=tu(c)),n.xOffset=n.yOffset=0,n.force3D=wi.force3D,n.renderTransform=n.svg?Dy:O0?H0:Py,n.uncache=0,n},tu=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ju=function(e,t,n){var r=Rn(t);return Kt(parseFloat(t)+parseFloat(Ms(e,"x",n+"px",r)))+r},Py=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,H0(e,t)},Ps="0deg",Mo="0px",Ds=") ",H0=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,y=n.zOrigin,v="",b=p==="auto"&&e&&e!==1||p===!0;if(y&&(f!==Ps||u!==Ps)){var w=parseFloat(u)*$a,T=Math.sin(w),P=Math.cos(w),S;w=parseFloat(f)*$a,S=Math.cos(w),a=Ju(M,a,T*S*-y),o=Ju(M,o,-Math.sin(w)*-y),l=Ju(M,l,P*S*-y+y)}m!==Mo&&(v+="perspective("+m+Ds),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(b||a!==Mo||o!==Mo||l!==Mo)&&(v+=l!==Mo||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ds),c!==Ps&&(v+="rotate("+c+Ds),u!==Ps&&(v+="rotateY("+u+Ds),f!==Ps&&(v+="rotateX("+f+Ds),(h!==Ps||d!==Ps)&&(v+="skew("+h+", "+d+Ds),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Ds),M.style[Wt]=v||"translate(0, 0)"},Dy=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,y=parseFloat(a),v=parseFloat(o),b,w,T,P,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=$a,c*=$a,b=Math.cos(l)*f,w=Math.sin(l)*f,T=Math.sin(l-c)*-h,P=Math.cos(l-c)*h,c&&(u*=$a,S=Math.tan(c-u),S=Math.sqrt(1+S*S),T*=S,P*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),b*=S,w*=S)),b=Kt(b),w=Kt(w),T=Kt(T),P=Kt(P)):(b=f,P=h,w=T=0),(y&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(y=Ms(d,"x",a,"px"),v=Ms(d,"y",o,"px")),(g||_||m||p)&&(y=Kt(y+g-(g*b+_*T)+m),v=Kt(v+_-(g*w+_*P)+p)),(r||s)&&(S=d.getBBox(),y=Kt(y+r/100*S.width),v=Kt(v+s/100*S.height)),S="matrix("+b+","+w+","+T+","+P+","+y+","+v+")",d.setAttribute("transform",S),M&&(d.style[Wt]=S)},Ly=function(e,t,n,r,s){var a=360,o=vn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?zs:1),c=l-r,u=r+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*mm)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*mm)%a-~~(c/a)*a)),e._pt=h=new si(e._pt,t,n,r,c,my),h.e=u,h.u="deg",e._props.push(n),h},ym=function(e,t){for(var n in t)e[n]=t[n];return e},Iy=function(e,t,n){var r=ym({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,h,d,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Wt]=t,o=Sl(n,1),ia(n,Wt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Wt],a[Wt]=t,o=Sl(n,1),a[Wt]=c);for(l in Wr)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=Rn(c),g=Rn(u),f=d!==g?Ms(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new si(e._pt,o,l,f,h-f,uh),e._pt.u=g||0,e._props.push(l));ym(o,r)};ri("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",a=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(o){return e<2?i+o:"border"+o+i});eu[e>1?"border"+i:i]=function(o,l,c,u,f){var h,d;if(arguments.length<4)return h=a.map(function(g){return Rr(o,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},a.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,d,f)}});var G0={name:"css",register:hh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,f,h,d,g,_,m,p,M,y,v,b,w,T,P;tp||hh(),this.styles=this.styles||N0(e),P=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(vi[_]&&T0(_,t,n,r,e,s)))){if(d=typeof u,g=eu[_],d==="function"&&(u=u.call(n,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=_l(u)),g)g(this,e,_,u,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",ps.lastIndex=0,ps.test(c)||(m=Rn(c),p=Rn(u)),p?m!==p&&(c=Ms(e,_,c,p)+p):m&&(u+=m),this.add(o,"setProperty",c,u,r,s,0,0,_),a.push(_),P.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,e,s):l[_],vn(c)&&~c.indexOf("random(")&&(c=_l(c)),Rn(c+"")||c==="auto"||(c+=wi.units[_]||Rn(Rr(e,_))||""),(c+"").charAt(1)==="="&&(c=Rr(e,_))):c=Rr(e,_),h=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),f=parseFloat(u),_ in or&&(_==="autoAlpha"&&(h===1&&Rr(e,"visibility")==="hidden"&&f&&(h=0),P.push("visibility",0,o.visibility),ls(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=or[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in Wr,y){if(this.styles.save(_),d==="string"&&u.substring(0,6)==="var(--"&&(u=ki(e,u.substring(4,u.indexOf(")"))),f=parseFloat(u)),v||(b=e._gsap,b.renderTransform&&!t.parseTransform||Sl(e,t.parseTransform),w=t.smoothOrigin!==!1&&b.smooth,v=this._pt=new si(this._pt,o,Wt,0,1,b.renderTransform,b,0,-1),v.dep=1),_==="scale")this._pt=new si(this._pt,b,"scaleY",b.scaleY,(M?Ya(b.scaleY,M+f):f)-b.scaleY||0,uh),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(ai,0,o[ai]),u=Cy(u),b.svg?dh(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==b.zOrigin&&ls(this,b,"zOrigin",b.zOrigin,p),ls(this,o,_,tu(c),tu(u)));continue}else if(_==="svgOrigin"){dh(e,u,1,w,0,this);continue}else if(_ in k0){Ly(this,b,_,h,M?Ya(h,M+u):u);continue}else if(_==="smoothOrigin"){ls(this,b,"smooth",b.smooth,u);continue}else if(_==="force3D"){b[_]=u;continue}else if(_==="transform"){Iy(this,u,e);continue}}else _ in o||(_=ao(_)||_);if(y||(f||f===0)&&(h||h===0)&&!py.test(u)&&_ in o)m=(c+"").substr((h+"").length),f||(f=0),p=Rn(u)||(_ in wi.units?wi.units[_]:m),m!==p&&(h=Ms(e,_,c,p)),this._pt=new si(this._pt,y?b:o,_,h,(M?Ya(h,M+f):f)-h,!y&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?gy:uh),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=_y);else if(_ in o)Ay.call(this,e,_,c,M?M+u:u);else if(_ in e)this.add(e,_,c||e[_],M?M+u:u,r,s);else if(_!=="parseTransform"){Xd(_,u);continue}y||(_ in o?P.push(_,0,o[_]):typeof e[_]=="function"?P.push(_,2,e[_]()):P.push(_,1,c||e[_])),a.push(_)}}T&&D0(this)},render:function(e,t){if(t.tween._time||!np())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Rr,aliases:or,getSetter:function(e,t,n){var r=or[t];return r&&r.indexOf(",")<0&&(t=r),t in Wr&&t!==ai&&(e._gsap.x||Rr(e,"x"))?n&&pm===n?t==="scale"?My:Sy:(pm=n||{})&&(t==="scale"?yy:by):e.style&&!Hd(e.style[t])?vy:~t.indexOf("-")?xy:Qd(e,t)},core:{_removeProperty:ia,_getMatrix:rp}};li.utils.checkPrefix=ao;li.core.getStyleSaver=N0;(function(i,e,t,n){var r=ri(i+","+e+","+t,function(s){Wr[s]=1});ri(e,function(s){wi.units[s]="deg",k0[s]=1}),or[r[13]]=i+","+e,ri(n,function(s){var a=s.split(":");or[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ri("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){wi.units[i]="px"});li.registerPlugin(G0);var Ui=li.registerPlugin(G0)||li;Ui.core.Tween;function Uy(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function Fy(i,e,t){return e&&Uy(i.prototype,e),i}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Sn,Rc,yi,cs,us,ja,W0,ks,el,X0,Ir,$i,Y0,q0=function(){return Sn||typeof window<"u"&&(Sn=window.gsap)&&Sn.registerPlugin&&Sn},$0=1,ka=[],ft=[],hr=[],tl=Date.now,ph=function(e,t){return t},Ny=function(){var e=el.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,ft),r.push.apply(r,hr),ft=n,hr=r,ph=function(a,o){return t[a](o)}},ms=function(e,t){return~hr.indexOf(e)&&hr[hr.indexOf(e)+1][t]},nl=function(e){return!!~X0.indexOf(e)},zn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:r!==!1,capture:!!s})},Nn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Bl="scrollLeft",zl="scrollTop",mh=function(){return Ir&&Ir.isPressed||ft.cache++},nu=function(e,t){var n=function r(s){if(s||s===0){$0&&(yi.history.scrollRestoration="manual");var a=Ir&&Ir.isPressed;s=r.v=Math.round(s)||(Ir&&Ir.iOS?1:0),e(s),r.cacheID=ft.cache,a&&ph("ss",s)}else(t||ft.cache!==r.cacheID||ph("ref"))&&(r.cacheID=ft.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},$n={s:Bl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:nu(function(i){return arguments.length?yi.scrollTo(i,ln.sc()):yi.pageXOffset||cs[Bl]||us[Bl]||ja[Bl]||0})},ln={s:zl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:$n,sc:nu(function(i){return arguments.length?yi.scrollTo($n.sc(),i):yi.pageYOffset||cs[zl]||us[zl]||ja[zl]||0})},ti=function(e,t){return(t&&t._ctx&&t._ctx.selector||Sn.utils.toArray)(e)[0]||(typeof e=="string"&&Sn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Oy=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},ys=function(e,t){var n=t.s,r=t.sc;nl(e)&&(e=cs.scrollingElement||us);var s=ft.indexOf(e),a=r===ln.sc?1:2;!~s&&(s=ft.push(e)-1),ft[s+a]||zn(e,"scroll",mh);var o=ft[s+a],l=o||(ft[s+a]=nu(ms(e,n),!0)||(nl(e)?r:nu(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=Sn.getProperty(e,"scrollBehavior")==="smooth"),l},_h=function(e,t,n){var r=e,s=e,a=tl(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=tl();_||m-a>l?(s=r,r=g,o=a,a=m):n?r+=g:r=s+(g-s)/(m-o)*(a-o)},f=function(){s=r=n?0:r,o=a=0},h=function(g){var _=o,m=s,p=tl();return(g||g===0)&&g!==r&&u(g),a===o||p-o>c?0:(r+(n?m:-m))/((n?p:a)-_)*1e3};return{update:u,reset:f,getVelocity:h}},yo=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},bm=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},j0=function(){el=Sn.core.globals().ScrollTrigger,el&&el.core&&Ny()},K0=function(e){return Sn=e||q0(),!Rc&&Sn&&typeof document<"u"&&document.body&&(yi=window,cs=document,us=cs.documentElement,ja=cs.body,X0=[yi,cs,us,ja],Sn.utils.clamp,Y0=Sn.core.context||function(){},ks="onpointerenter"in ja?"pointer":"mouse",W0=Zt.isTouch=yi.matchMedia&&yi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in yi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,$i=Zt.eventTypes=("ontouchstart"in us?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in us?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return $0=0},500),j0(),Rc=1),Rc};$n.op=ln;ft.cache=0;var Zt=(function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){Rc||K0(Sn)||console.warn("Please gsap.registerPlugin(Observer)"),el||j0();var r=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,M=n.onDrag,y=n.onPress,v=n.onRelease,b=n.onRight,w=n.onLeft,T=n.onUp,P=n.onDown,S=n.onChangeX,E=n.onChangeY,F=n.onChange,z=n.onToggleX,H=n.onToggleY,Z=n.onHover,K=n.onHoverEnd,k=n.onMove,B=n.ignoreCheck,X=n.isNormalizer,ce=n.onGestureStart,U=n.onGestureEnd,fe=n.onWheel,Le=n.onEnable,ze=n.onDisable,He=n.onClick,je=n.scrollSpeed,ne=n.capture,re=n.allowClicks,Me=n.lockAxis,Oe=n.onLockAxis;this.target=o=ti(o)||us,this.vars=n,d&&(d=Sn.utils.toArray(d)),r=r||1e-9,s=s||0,g=g||1,je=je||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(yi.getComputedStyle(ja).lineHeight)||22);var Ae,We,D,L,G,ie,j,I=this,R=0,ue=0,se=n.passive||!u&&n.passive!==!1,te=ys(o,$n),ae=ys(o,ln),C=te(),x=ae(),N=~a.indexOf("touch")&&!~a.indexOf("pointer")&&$i[0]==="pointerdown",$=nl(o),J=o.ownerDocument||cs,Y=[0,0,0],xe=[0,0,0],de=0,Ce=function(){return de=tl()},Te=function(Be,nt){return(I.event=Be)&&d&&Oy(Be.target,d)||nt&&N&&Be.pointerType!=="touch"||B&&B(Be,nt)},pe=function(){I._vx.reset(),I._vy.reset(),We.pause(),f&&f(I)},_e=function(){var Be=I.deltaX=bm(Y),nt=I.deltaY=bm(xe),Pe=Math.abs(Be)>=r,Ke=Math.abs(nt)>=r;F&&(Pe||Ke)&&F(I,Be,nt,Y,xe),Pe&&(b&&I.deltaX>0&&b(I),w&&I.deltaX<0&&w(I),S&&S(I),z&&I.deltaX<0!=R<0&&z(I),R=I.deltaX,Y[0]=Y[1]=Y[2]=0),Ke&&(P&&I.deltaY>0&&P(I),T&&I.deltaY<0&&T(I),E&&E(I),H&&I.deltaY<0!=ue<0&&H(I),ue=I.deltaY,xe[0]=xe[1]=xe[2]=0),(L||D)&&(k&&k(I),D&&(m&&D===1&&m(I),M&&M(I),D=0),L=!1),ie&&!(ie=!1)&&Oe&&Oe(I),G&&(fe(I),G=!1),Ae=0},ye=function(Be,nt,Pe){Y[Pe]+=Be,xe[Pe]+=nt,I._vx.update(Be),I._vy.update(nt),c?Ae||(Ae=requestAnimationFrame(_e)):_e()},Re=function(Be,nt){Me&&!j&&(I.axis=j=Math.abs(Be)>Math.abs(nt)?"x":"y",ie=!0),j!=="y"&&(Y[2]+=Be,I._vx.update(Be,!0)),j!=="x"&&(xe[2]+=nt,I._vy.update(nt,!0)),c?Ae||(Ae=requestAnimationFrame(_e)):_e()},ge=function(Be){if(!Te(Be,1)){Be=yo(Be,u);var nt=Be.clientX,Pe=Be.clientY,Ke=nt-I.x,Ve=Pe-I.y,Je=I.isDragging;I.x=nt,I.y=Pe,(Je||(Ke||Ve)&&(Math.abs(I.startX-nt)>=s||Math.abs(I.startY-Pe)>=s))&&(D=Je?2:1,Je||(I.isDragging=!0),Re(Ke,Ve))}},qe=I.onPress=function(Ie){Te(Ie,1)||Ie&&Ie.button||(I.axis=j=null,We.pause(),I.isPressed=!0,Ie=yo(Ie),R=ue=0,I.startX=I.x=Ie.clientX,I.startY=I.y=Ie.clientY,I._vx.reset(),I._vy.reset(),zn(X?o:J,$i[1],ge,se,!0),I.deltaX=I.deltaY=0,y&&y(I))},O=I.onRelease=function(Ie){if(!Te(Ie,1)){Nn(X?o:J,$i[1],ge,!0);var Be=!isNaN(I.y-I.startY),nt=I.isDragging,Pe=nt&&(Math.abs(I.x-I.startX)>3||Math.abs(I.y-I.startY)>3),Ke=yo(Ie);!Pe&&Be&&(I._vx.reset(),I._vy.reset(),u&&re&&Sn.delayedCall(.08,function(){if(tl()-de>300&&!Ie.defaultPrevented){if(Ie.target.click)Ie.target.click();else if(J.createEvent){var Ve=J.createEvent("MouseEvents");Ve.initMouseEvent("click",!0,!0,yi,1,Ke.screenX,Ke.screenY,Ke.clientX,Ke.clientY,!1,!1,!1,!1,0,null),Ie.target.dispatchEvent(Ve)}}})),I.isDragging=I.isGesturing=I.isPressed=!1,f&&nt&&!X&&We.restart(!0),D&&_e(),p&&nt&&p(I),v&&v(I,Pe)}},be=function(Be){return Be.touches&&Be.touches.length>1&&(I.isGesturing=!0)&&ce(Be,I.isDragging)},me=function(){return(I.isGesturing=!1)||U(I)},Ee=function(Be){if(!Te(Be)){var nt=te(),Pe=ae();ye((nt-C)*je,(Pe-x)*je,1),C=nt,x=Pe,f&&We.restart(!0)}},he=function(Be){if(!Te(Be)){Be=yo(Be,u),fe&&(G=!0);var nt=(Be.deltaMode===1?l:Be.deltaMode===2?yi.innerHeight:1)*g;ye(Be.deltaX*nt,Be.deltaY*nt,0),f&&!X&&We.restart(!0)}},oe=function(Be){if(!Te(Be)){var nt=Be.clientX,Pe=Be.clientY,Ke=nt-I.x,Ve=Pe-I.y;I.x=nt,I.y=Pe,L=!0,f&&We.restart(!0),(Ke||Ve)&&Re(Ke,Ve)}},Se=function(Be){I.event=Be,Z(I)},Ge=function(Be){I.event=Be,K(I)},gt=function(Be){return Te(Be)||yo(Be,u)&&He(I)};We=I._dc=Sn.delayedCall(h||.25,pe).pause(),I.deltaX=I.deltaY=0,I._vx=_h(0,50,!0),I._vy=_h(0,50,!0),I.scrollX=te,I.scrollY=ae,I.isDragging=I.isGesturing=I.isPressed=!1,Y0(this),I.enable=function(Ie){return I.isEnabled||(zn($?J:o,"scroll",mh),a.indexOf("scroll")>=0&&zn($?J:o,"scroll",Ee,se,ne),a.indexOf("wheel")>=0&&zn(o,"wheel",he,se,ne),(a.indexOf("touch")>=0&&W0||a.indexOf("pointer")>=0)&&(zn(o,$i[0],qe,se,ne),zn(J,$i[2],O),zn(J,$i[3],O),re&&zn(o,"click",Ce,!0,!0),He&&zn(o,"click",gt),ce&&zn(J,"gesturestart",be),U&&zn(J,"gestureend",me),Z&&zn(o,ks+"enter",Se),K&&zn(o,ks+"leave",Ge),k&&zn(o,ks+"move",oe)),I.isEnabled=!0,I.isDragging=I.isGesturing=I.isPressed=L=D=!1,I._vx.reset(),I._vy.reset(),C=te(),x=ae(),Ie&&Ie.type&&qe(Ie),Le&&Le(I)),I},I.disable=function(){I.isEnabled&&(ka.filter(function(Ie){return Ie!==I&&nl(Ie.target)}).length||Nn($?J:o,"scroll",mh),I.isPressed&&(I._vx.reset(),I._vy.reset(),Nn(X?o:J,$i[1],ge,!0)),Nn($?J:o,"scroll",Ee,ne),Nn(o,"wheel",he,ne),Nn(o,$i[0],qe,ne),Nn(J,$i[2],O),Nn(J,$i[3],O),Nn(o,"click",Ce,!0),Nn(o,"click",gt),Nn(J,"gesturestart",be),Nn(J,"gestureend",me),Nn(o,ks+"enter",Se),Nn(o,ks+"leave",Ge),Nn(o,ks+"move",oe),I.isEnabled=I.isPressed=I.isDragging=!1,ze&&ze(I))},I.kill=I.revert=function(){I.disable();var Ie=ka.indexOf(I);Ie>=0&&ka.splice(Ie,1),Ir===I&&(Ir=0)},ka.push(I),X&&nl(o)&&(Ir=I),I.enable(_)},Fy(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i})();Zt.version="3.13.0";Zt.create=function(i){return new Zt(i)};Zt.register=K0;Zt.getAll=function(){return ka.slice()};Zt.getById=function(i){return ka.filter(function(e){return e.vars.id===i})[0]};q0()&&Sn.registerPlugin(Zt);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ne,Na,ut,Ut,xi,St,sp,iu,Ml,il,No,kl,wn,wu,gh,Hn,Em,Tm,Oa,Z0,Qu,J0,Vn,vh,Q0,ev,es,xh,ap,Ka,op,ru,Sh,ef,Vl=1,An=Date.now,tf=An(),Hi=0,Oo=0,wm=function(e,t,n){var r=gi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Am=function(e,t){return t&&(!gi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},By=function i(){return Oo&&requestAnimationFrame(i)},Cm=function(){return wu=1},Rm=function(){return wu=0},tr=function(e){return e},Bo=function(e){return Math.round(e*1e5)/1e5||0},tv=function(){return typeof window<"u"},nv=function(){return Ne||tv()&&(Ne=window.gsap)&&Ne.registerPlugin&&Ne},ra=function(e){return!!~sp.indexOf(e)},iv=function(e){return(e==="Height"?op:ut["inner"+e])||xi["client"+e]||St["client"+e]},rv=function(e){return ms(e,"getBoundingClientRect")||(ra(e)?function(){return Uc.width=ut.innerWidth,Uc.height=op,Uc}:function(){return Dr(e)})},zy=function(e,t,n){var r=n.d,s=n.d2,a=n.a;return(a=ms(e,"getBoundingClientRect"))?function(){return a()[r]}:function(){return(t?iv(s):e["client"+s])||0}},ky=function(e,t){return!t||~hr.indexOf(e)?rv(e):function(){return Uc}},lr=function(e,t){var n=t.s,r=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+r)&&(a=ms(e,n))?a()-rv(e)()[s]:ra(e)?(xi[n]||St[n])-iv(r):e[n]-e["offset"+r])},Hl=function(e,t){for(var n=0;n<Oa.length;n+=3)(!t||~t.indexOf(Oa[n+1]))&&e(Oa[n],Oa[n+1],Oa[n+2])},gi=function(e){return typeof e=="string"},Pn=function(e){return typeof e=="function"},zo=function(e){return typeof e=="number"},Vs=function(e){return typeof e=="object"},bo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},nf=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},pa=Math.abs,sv="left",av="top",lp="right",cp="bottom",ea="width",ta="height",rl="Right",sl="Left",al="Top",ol="Bottom",en="padding",Fi="margin",oo="Width",up="Height",on="px",Ni=function(e){return ut.getComputedStyle(e)},Vy=function(e){var t=Ni(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Pm=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Dr=function(e,t){var n=t&&Ni(e)[gh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ne.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},su=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},ov=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},Hy=function(e){return function(t){return Ne.utils.snap(ov(e),t)}},fp=function(e){var t=Ne.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,a){a===void 0&&(a=.001);var o;if(!s)return t(r);if(s>0){for(r-=a,o=0;o<n.length;o++)if(n[o]>=r)return n[o];return n[o-1]}else for(o=n.length,r+=a;o--;)if(n[o]<=r)return n[o];return n[0]}:function(r,s,a){a===void 0&&(a=.001);var o=t(r);return!s||Math.abs(o-r)<a||o-r<0==s<0?o:t(s<0?r-e:r+e)}},Gy=function(e){return function(t,n){return fp(ov(e))(t,n.direction)}},Gl=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},mn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},pn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Wl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Dm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Xl={toggleActions:"play",anticipatePin:0},au={top:0,left:0,center:.5,bottom:1,right:1},Pc=function(e,t){if(gi(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in au?au[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Yl=function(e,t,n,r,s,a,o,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,g=Ut.createElement("div"),_=ra(n)||ms(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?St:n,M=e.indexOf("start")!==-1,y=M?c:u,v="border-color:"+y+";font-size:"+f+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(r===ln?lp:cp)+":"+(a+parseFloat(h))+"px;"),o&&(v+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=v,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+r.op.d2],Dc(g,0,r,M),g},Dc=function(e,t,n,r){var s={display:"block"},a=n[r?"os2":"p2"],o=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+a+oo]=1,s["border"+o+oo]=0,s[n.p]=t+"px",Ne.set(e,s)},ot=[],Mh={},yl,Lm=function(){return An()-Hi>34&&(yl||(yl=requestAnimationFrame(Or)))},ma=function(){(!Vn||!Vn.isPressed||Vn.startX>St.clientWidth)&&(ft.cache++,Vn?yl||(yl=requestAnimationFrame(Or)):Or(),Hi||aa("scrollStart"),Hi=An())},rf=function(){ev=ut.innerWidth,Q0=ut.innerHeight},ko=function(e){ft.cache++,(e===!0||!wn&&!J0&&!Ut.fullscreenElement&&!Ut.webkitFullscreenElement&&(!vh||ev!==ut.innerWidth||Math.abs(ut.innerHeight-Q0)>ut.innerHeight*.25))&&iu.restart(!0)},sa={},Wy=[],lv=function i(){return pn(at,"scrollEnd",i)||Xs(!0)},aa=function(e){return sa[e]&&sa[e].map(function(t){return t()})||Wy},_i=[],cv=function(e){for(var t=0;t<_i.length;t+=5)(!e||_i[t+4]&&_i[t+4].query===e)&&(_i[t].style.cssText=_i[t+1],_i[t].getBBox&&_i[t].setAttribute("transform",_i[t+2]||""),_i[t+3].uncache=1)},hp=function(e,t){var n;for(Hn=0;Hn<ot.length;Hn++)n=ot[Hn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));ru=!0,t&&cv(t),t||aa("revert")},uv=function(e,t){ft.cache++,(t||!Gn)&&ft.forEach(function(n){return Pn(n)&&n.cacheID++&&(n.rec=0)}),gi(e)&&(ut.history.scrollRestoration=ap=e)},Gn,na=0,Im,Xy=function(){if(Im!==na){var e=Im=na;requestAnimationFrame(function(){return e===na&&Xs(!0)})}},fv=function(){St.appendChild(Ka),op=!Vn&&Ka.offsetHeight||ut.innerHeight,St.removeChild(Ka)},Um=function(e){return Ml(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Xs=function(e,t){if(xi=Ut.documentElement,St=Ut.body,sp=[ut,Ut,xi,St],Hi&&!e&&!ru){mn(at,"scrollEnd",lv);return}fv(),Gn=at.isRefreshing=!0,ft.forEach(function(r){return Pn(r)&&++r.cacheID&&(r.rec=r())});var n=aa("refreshInit");Z0&&at.sort(),t||hp(),ft.forEach(function(r){Pn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),ot.slice(0).forEach(function(r){return r.refresh()}),ru=!1,ot.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-a),r.refresh()}}),Sh=1,Um(!0),ot.forEach(function(r){var s=lr(r.scroller,r._dir),a=r.vars.end==="max"||r._endClamp&&r.end>s,o=r._startClamp&&r.start>=s;(a||o)&&r.setPositions(o?s-1:r.start,a?Math.max(o?s:r.start+1,s):r.end,!0)}),Um(!1),Sh=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),ft.forEach(function(r){Pn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),uv(ap,1),iu.pause(),na++,Gn=2,Or(2),ot.forEach(function(r){return Pn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Gn=at.isRefreshing=!1,aa("refresh")},yh=0,Lc=1,ll,Or=function(e){if(e===2||!Gn&&!ru){at.isUpdating=!0,ll&&ll.update(0);var t=ot.length,n=An(),r=n-tf>=50,s=t&&ot[0].scroll();if(Lc=yh>s?-1:1,Gn||(yh=s),r&&(Hi&&!wu&&n-Hi>200&&(Hi=0,aa("scrollEnd")),No=tf,tf=n),Lc<0){for(Hn=t;Hn-- >0;)ot[Hn]&&ot[Hn].update(0,r);Lc=1}else for(Hn=0;Hn<t;Hn++)ot[Hn]&&ot[Hn].update(0,r);at.isUpdating=!1}yl=0},bh=[sv,av,cp,lp,Fi+ol,Fi+rl,Fi+al,Fi+sl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ic=bh.concat([ea,ta,"boxSizing","max"+oo,"max"+up,"position",Fi,en,en+al,en+rl,en+ol,en+sl]),Yy=function(e,t,n){Za(n);var r=e._gsap;if(r.spacerIsNative)Za(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},sf=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=bh.length,a=t.style,o=e.style,l;s--;)l=bh[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[cp]=o[lp]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[ea]=su(e,$n)+on,a[ta]=su(e,ln)+on,a[en]=o[Fi]=o[av]=o[sv]="0",Za(r),o[ea]=o["max"+oo]=n[ea],o[ta]=o["max"+up]=n[ta],o[en]=n[en],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},qy=/([A-Z])/g,Za=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,a;for((e.t._gsap||Ne.core.getCache(e.t)).uncache=1;r<n;r+=2)a=e[r+1],s=e[r],a?t[s]=a:t[s]&&t.removeProperty(s.replace(qy,"-$1").toLowerCase())}},ql=function(e){for(var t=Ic.length,n=e.style,r=[],s=0;s<t;s++)r.push(Ic[s],n[Ic[s]]);return r.t=e,r},$y=function(e,t,n){for(var r=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],r.push(o,o in t?t[o]:e[a+1]);return r.t=e.t,r},Uc={left:0,top:0},Fm=function(e,t,n,r,s,a,o,l,c,u,f,h,d,g){Pn(e)&&(e=e(l)),gi(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Pc("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,M;if(d&&d.seek(0),isNaN(e)||(e=+e),zo(e))d&&(e=Ne.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),o&&Dc(o,n,r,!0);else{Pn(t)&&(t=t(l));var y=(e||"0").split(" "),v,b,w,T;M=ti(t,l)||St,v=Dr(M)||{},(!v||!v.left&&!v.top)&&Ni(M).display==="none"&&(T=M.style.display,M.style.display="block",v=Dr(M),T?M.style.display=T:M.style.removeProperty("display")),b=Pc(y[0],v[r.d]),w=Pc(y[1]||"0",n),e=v[r.p]-c[r.p]-u+b+s-w,o&&Dc(o,w,r,n-w<20||o._isStart&&w>20),n-=n-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var P=e+n,S=a._isStart;m="scroll"+r.d2,Dc(a,P,r,S&&P>20||!S&&(f?Math.max(St[m],xi[m]):a.parentNode[m])<=P+1),f&&(c=Dr(o),f&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+on))}return d&&M&&(m=Dr(M),d.seek(h),p=Dr(M),d._caScrollDist=m[r.p]-p[r.p],e=e/d._caScrollDist*h),d&&d.seek(_),d?e:Math.round(e)},jy=/(webkit|moz|length|cssText|inset)/i,Nm=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,a,o;if(t===St){e._stOrig=s.cssText,o=Ni(e);for(a in o)!+a&&!jy.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=r}else s.cssText=e._stOrig;Ne.core.getCache(e).uncache=1,t.appendChild(e)}},hv=function(e,t,n){var r=t,s=r;return function(a){var o=Math.round(e());return o!==r&&o!==s&&Math.abs(o-r)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=r,r=Math.round(a),r}},$l=function(e,t,n){var r={};r[t.p]="+="+n,Ne.set(e,r)},Om=function(e,t){var n=ys(e,t),r="_scroll"+t.p2,s=function a(o,l,c,u,f){var h=a.tween,d=l.onComplete,g={};c=c||n();var _=hv(n,c,function(){h.kill(),a.tween=0});return f=u&&f||0,u=u||o-c,h&&h.kill(),l[r]=o,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){ft.cache++,a.tween&&Or()},l.onComplete=function(){a.tween=0,d&&d.call(h)},h=a.tween=Ne.to(e,l),h};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},mn(e,"wheel",n.wheelHandler),at.isTouch&&mn(e,"touchmove",n.wheelHandler),s},at=(function(){function i(t,n){Na||i.register(Ne)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),xh(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Oo){this.update=this.refresh=this.kill=tr;return}n=Pm(gi(n)||zo(n)||n.nodeType?{trigger:n}:n,Xl);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,M=s.onSnapComplete,y=s.once,v=s.snap,b=s.pinReparent,w=s.pinSpacer,T=s.containerAnimation,P=s.fastScrollEnd,S=s.preventOverlaps,E=n.horizontal||n.containerAnimation&&n.horizontal!==!1?$n:ln,F=!f&&f!==0,z=ti(n.scroller||ut),H=Ne.core.getCache(z),Z=ra(z),K=("pinType"in n?n.pinType:ms(z,"pinType")||Z&&"fixed")==="fixed",k=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],B=F&&n.toggleActions.split(" "),X="markers"in n?n.markers:Xl.markers,ce=Z?0:parseFloat(Ni(z)["border"+E.p2+oo])||0,U=this,fe=n.onRefreshInit&&function(){return n.onRefreshInit(U)},Le=zy(z,Z,E),ze=ky(z,Z),He=0,je=0,ne=0,re=ys(z,E),Me,Oe,Ae,We,D,L,G,ie,j,I,R,ue,se,te,ae,C,x,N,$,J,Y,xe,de,Ce,Te,pe,_e,ye,Re,ge,qe,O,be,me,Ee,he,oe,Se,Ge;if(U._startClamp=U._endClamp=!1,U._dir=E,m*=45,U.scroller=z,U.scroll=T?T.time.bind(T):re,We=re(),U.vars=n,r=r||n.animation,"refreshPriority"in n&&(Z0=1,n.refreshPriority===-9999&&(ll=U)),H.tweenScroll=H.tweenScroll||{top:Om(z,ln),left:Om(z,$n)},U.tweenTo=Me=H.tweenScroll[E.p],U.scrubDuration=function(Pe){be=zo(Pe)&&Pe,be?O?O.duration(Pe):O=Ne.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:be,paused:!0,onComplete:function(){return p&&p(U)}}):(O&&O.progress(1).kill(),O=0)},r&&(r.vars.lazy=!1,r._initted&&!U.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),U.animation=r.pause(),r.scrollTrigger=U,U.scrubDuration(f),ge=0,l||(l=r.vars.id)),v&&((!Vs(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in St.style&&Ne.set(Z?[St,xi]:z,{scrollBehavior:"auto"}),ft.forEach(function(Pe){return Pn(Pe)&&Pe.target===(Z?Ut.scrollingElement||xi:z)&&(Pe.smooth=!1)}),Ae=Pn(v.snapTo)?v.snapTo:v.snapTo==="labels"?Hy(r):v.snapTo==="labelsDirectional"?Gy(r):v.directional!==!1?function(Pe,Ke){return fp(v.snapTo)(Pe,An()-je<500?0:Ke.direction)}:Ne.utils.snap(v.snapTo),me=v.duration||{min:.1,max:2},me=Vs(me)?il(me.min,me.max):il(me,me),Ee=Ne.delayedCall(v.delay||be/2||.1,function(){var Pe=re(),Ke=An()-je<500,Ve=Me.tween;if((Ke||Math.abs(U.getVelocity())<10)&&!Ve&&!wu&&He!==Pe){var Je=(Pe-L)/te,jt=r&&!F?r.totalProgress():Je,lt=Ke?0:(jt-qe)/(An()-No)*1e3||0,bt=Ne.utils.clamp(-Je,1-Je,pa(lt/2)*lt/.185),Jt=Je+(v.inertia===!1?0:bt),Bt,Rt,vt=v,Zn=vt.onStart,wt=vt.onInterrupt,bn=vt.onComplete;if(Bt=Ae(Jt,U),zo(Bt)||(Bt=Jt),Rt=Math.max(0,Math.round(L+Bt*te)),Pe<=G&&Pe>=L&&Rt!==Pe){if(Ve&&!Ve._initted&&Ve.data<=pa(Rt-Pe))return;v.inertia===!1&&(bt=Bt-Je),Me(Rt,{duration:me(pa(Math.max(pa(Jt-jt),pa(Bt-jt))*.185/lt/.05||0)),ease:v.ease||"power3",data:pa(Rt-Pe),onInterrupt:function(){return Ee.restart(!0)&&wt&&wt(U)},onComplete:function(){U.update(),He=re(),r&&!F&&(O?O.resetTo("totalProgress",Bt,r._tTime/r._tDur):r.progress(Bt)),ge=qe=r&&!F?r.totalProgress():U.progress,M&&M(U),bn&&bn(U)}},Pe,bt*te,Rt-Pe-bt*te),Zn&&Zn(U,Me.tween)}}else U.isActive&&He!==Pe&&Ee.restart(!0)}).pause()),l&&(Mh[l]=U),h=U.trigger=ti(h||d!==!0&&d),Ge=h&&h._gsap&&h._gsap.stRevert,Ge&&(Ge=Ge(U)),d=d===!0?h:ti(d),gi(o)&&(o={targets:h,className:o}),d&&(g===!1||g===Fi||(g=!g&&d.parentNode&&d.parentNode.style&&Ni(d.parentNode).display==="flex"?!1:en),U.pin=d,Oe=Ne.core.getCache(d),Oe.spacer?ae=Oe.pinState:(w&&(w=ti(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Oe.spacerIsNative=!!w,w&&(Oe.spacerState=ql(w))),Oe.spacer=N=w||Ut.createElement("div"),N.classList.add("pin-spacer"),l&&N.classList.add("pin-spacer-"+l),Oe.pinState=ae=ql(d)),n.force3D!==!1&&Ne.set(d,{force3D:!0}),U.spacer=N=Oe.spacer,Re=Ni(d),Ce=Re[g+E.os2],J=Ne.getProperty(d),Y=Ne.quickSetter(d,E.a,on),sf(d,N,Re),x=ql(d)),X){ue=Vs(X)?Pm(X,Dm):Dm,I=Yl("scroller-start",l,z,E,ue,0),R=Yl("scroller-end",l,z,E,ue,0,I),$=I["offset"+E.op.d2];var gt=ti(ms(z,"content")||z);ie=this.markerStart=Yl("start",l,gt,E,ue,$,0,T),j=this.markerEnd=Yl("end",l,gt,E,ue,$,0,T),T&&(Se=Ne.quickSetter([ie,j],E.a,on)),!K&&!(hr.length&&ms(z,"fixedMarkers")===!0)&&(Vy(Z?St:z),Ne.set([I,R],{force3D:!0}),pe=Ne.quickSetter(I,E.a,on),ye=Ne.quickSetter(R,E.a,on))}if(T){var Ie=T.vars.onUpdate,Be=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){U.update(0,0,1),Ie&&Ie.apply(T,Be||[])})}if(U.previous=function(){return ot[ot.indexOf(U)-1]},U.next=function(){return ot[ot.indexOf(U)+1]},U.revert=function(Pe,Ke){if(!Ke)return U.kill(!0);var Ve=Pe!==!1||!U.enabled,Je=wn;Ve!==U.isReverted&&(Ve&&(he=Math.max(re(),U.scroll.rec||0),ne=U.progress,oe=r&&r.progress()),ie&&[ie,j,I,R].forEach(function(jt){return jt.style.display=Ve?"none":"block"}),Ve&&(wn=U,U.update(Ve)),d&&(!b||!U.isActive)&&(Ve?Yy(d,N,ae):sf(d,N,Ni(d),Te)),Ve||U.update(Ve),wn=Je,U.isReverted=Ve)},U.refresh=function(Pe,Ke,Ve,Je){if(!((wn||!U.enabled)&&!Ke)){if(d&&Pe&&Hi){mn(i,"scrollEnd",lv);return}!Gn&&fe&&fe(U),wn=U,Me.tween&&!Ve&&(Me.tween.kill(),Me.tween=0),O&&O.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren&&r.getChildren(!0,!0,!1).forEach(function(Fe){return Fe.vars.immediateRender&&Fe.render(0,!0,!0)})),U.isReverted||U.revert(!0,!0),U._subPinOffset=!1;var jt=Le(),lt=ze(),bt=T?T.duration():lr(z,E),Jt=te<=.01||!te,Bt=0,Rt=Je||0,vt=Vs(Ve)?Ve.end:n.end,Zn=n.endTrigger||h,wt=Vs(Ve)?Ve.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),bn=U.pinnedContainer=n.pinnedContainer&&ti(n.pinnedContainer,U),ui=h&&Math.max(0,ot.indexOf(U))||0,sn=ui,an,fn,Sr,ua,hn,A,V,ee,Q,q,ve,Ue,we;for(X&&Vs(Ve)&&(Ue=Ne.getProperty(I,E.p),we=Ne.getProperty(R,E.p));sn-- >0;)A=ot[sn],A.end||A.refresh(0,1)||(wn=U),V=A.pin,V&&(V===h||V===d||V===bn)&&!A.isReverted&&(q||(q=[]),q.unshift(A),A.revert(!0,!0)),A!==ot[sn]&&(ui--,sn--);for(Pn(wt)&&(wt=wt(U)),wt=wm(wt,"start",U),L=Fm(wt,h,jt,E,re(),ie,I,U,lt,ce,K,bt,T,U._startClamp&&"_startClamp")||(d?-.001:0),Pn(vt)&&(vt=vt(U)),gi(vt)&&!vt.indexOf("+=")&&(~vt.indexOf(" ")?vt=(gi(wt)?wt.split(" ")[0]:"")+vt:(Bt=Pc(vt.substr(2),jt),vt=gi(wt)?wt:(T?Ne.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,L):L)+Bt,Zn=h)),vt=wm(vt,"end",U),G=Math.max(L,Fm(vt||(Zn?"100% 0":bt),Zn,jt,E,re()+Bt,j,R,U,lt,ce,K,bt,T,U._endClamp&&"_endClamp"))||-.001,Bt=0,sn=ui;sn--;)A=ot[sn],V=A.pin,V&&A.start-A._pinPush<=L&&!T&&A.end>0&&(an=A.end-(U._startClamp?Math.max(0,A.start):A.start),(V===h&&A.start-A._pinPush<L||V===bn)&&isNaN(wt)&&(Bt+=an*(1-A.progress)),V===d&&(Rt+=an));if(L+=Bt,G+=Bt,U._startClamp&&(U._startClamp+=Bt),U._endClamp&&!Gn&&(U._endClamp=G||-.001,G=Math.min(G,lr(z,E))),te=G-L||(L-=.01)&&.001,Jt&&(ne=Ne.utils.clamp(0,1,Ne.utils.normalize(L,G,he))),U._pinPush=Rt,ie&&Bt&&(an={},an[E.a]="+="+Bt,bn&&(an[E.p]="-="+re()),Ne.set([ie,j],an)),d&&!(Sh&&U.end>=lr(z,E)))an=Ni(d),ua=E===ln,Sr=re(),xe=parseFloat(J(E.a))+Rt,!bt&&G>1&&(ve=(Z?Ut.scrollingElement||xi:z).style,ve={style:ve,value:ve["overflow"+E.a.toUpperCase()]},Z&&Ni(St)["overflow"+E.a.toUpperCase()]!=="scroll"&&(ve.style["overflow"+E.a.toUpperCase()]="scroll")),sf(d,N,an),x=ql(d),fn=Dr(d,!0),ee=K&&ys(z,ua?$n:ln)(),g?(Te=[g+E.os2,te+Rt+on],Te.t=N,sn=g===en?su(d,E)+te+Rt:0,sn&&(Te.push(E.d,sn+on),N.style.flexBasis!=="auto"&&(N.style.flexBasis=sn+on)),Za(Te),bn&&ot.forEach(function(Fe){Fe.pin===bn&&Fe.vars.pinSpacing!==!1&&(Fe._subPinOffset=!0)}),K&&re(he)):(sn=su(d,E),sn&&N.style.flexBasis!=="auto"&&(N.style.flexBasis=sn+on)),K&&(hn={top:fn.top+(ua?Sr-L:ee)+on,left:fn.left+(ua?ee:Sr-L)+on,boxSizing:"border-box",position:"fixed"},hn[ea]=hn["max"+oo]=Math.ceil(fn.width)+on,hn[ta]=hn["max"+up]=Math.ceil(fn.height)+on,hn[Fi]=hn[Fi+al]=hn[Fi+rl]=hn[Fi+ol]=hn[Fi+sl]="0",hn[en]=an[en],hn[en+al]=an[en+al],hn[en+rl]=an[en+rl],hn[en+ol]=an[en+ol],hn[en+sl]=an[en+sl],C=$y(ae,hn,b),Gn&&re(0)),r?(Q=r._initted,Qu(1),r.render(r.duration(),!0,!0),de=J(E.a)-xe+te+Rt,_e=Math.abs(te-de)>1,K&&_e&&C.splice(C.length-2,2),r.render(0,!0,!0),Q||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Qu(0)):de=te,ve&&(ve.value?ve.style["overflow"+E.a.toUpperCase()]=ve.value:ve.style.removeProperty("overflow-"+E.a));else if(h&&re()&&!T)for(fn=h.parentNode;fn&&fn!==St;)fn._pinOffset&&(L-=fn._pinOffset,G-=fn._pinOffset),fn=fn.parentNode;q&&q.forEach(function(Fe){return Fe.revert(!1,!0)}),U.start=L,U.end=G,We=D=Gn?he:re(),!T&&!Gn&&(We<he&&re(he),U.scroll.rec=0),U.revert(!1,!0),je=An(),Ee&&(He=-1,Ee.restart(!0)),wn=0,r&&F&&(r._initted||oe)&&r.progress()!==oe&&r.progress(oe||0,!0).render(r.time(),!0,!0),(Jt||ne!==U.progress||T||_||r&&!r._initted)&&(r&&!F&&(r._initted||ne||r.vars.immediateRender!==!1)&&r.totalProgress(T&&L<-.001&&!ne?Ne.utils.normalize(L,G,0):ne,!0),U.progress=Jt||(We-L)/te===ne?0:ne),d&&g&&(N._pinOffset=Math.round(U.progress*de)),O&&O.invalidate(),isNaN(Ue)||(Ue-=Ne.getProperty(I,E.p),we-=Ne.getProperty(R,E.p),$l(I,E,Ue),$l(ie,E,Ue-(Je||0)),$l(R,E,we),$l(j,E,we-(Je||0))),Jt&&!Gn&&U.update(),u&&!Gn&&!se&&(se=!0,u(U),se=!1)}},U.getVelocity=function(){return(re()-D)/(An()-No)*1e3||0},U.endAnimation=function(){bo(U.callbackAnimation),r&&(O?O.progress(1):r.paused()?F||bo(r,U.direction<0,1):bo(r,r.reversed()))},U.labelToScroll=function(Pe){return r&&r.labels&&(L||U.refresh()||L)+r.labels[Pe]/r.duration()*te||0},U.getTrailing=function(Pe){var Ke=ot.indexOf(U),Ve=U.direction>0?ot.slice(0,Ke).reverse():ot.slice(Ke+1);return(gi(Pe)?Ve.filter(function(Je){return Je.vars.preventOverlaps===Pe}):Ve).filter(function(Je){return U.direction>0?Je.end<=L:Je.start>=G})},U.update=function(Pe,Ke,Ve){if(!(T&&!Ve&&!Pe)){var Je=Gn===!0?he:U.scroll(),jt=Pe?0:(Je-L)/te,lt=jt<0?0:jt>1?1:jt||0,bt=U.progress,Jt,Bt,Rt,vt,Zn,wt,bn,ui;if(Ke&&(D=We,We=T?re():Je,v&&(qe=ge,ge=r&&!F?r.totalProgress():lt)),m&&d&&!wn&&!Vl&&Hi&&(!lt&&L<Je+(Je-D)/(An()-No)*m?lt=1e-4:lt===1&&G>Je+(Je-D)/(An()-No)*m&&(lt=.9999)),lt!==bt&&U.enabled){if(Jt=U.isActive=!!lt&&lt<1,Bt=!!bt&&bt<1,wt=Jt!==Bt,Zn=wt||!!lt!=!!bt,U.direction=lt>bt?1:-1,U.progress=lt,Zn&&!wn&&(Rt=lt&&!bt?0:lt===1?1:bt===1?2:3,F&&(vt=!wt&&B[Rt+1]!=="none"&&B[Rt+1]||B[Rt],ui=r&&(vt==="complete"||vt==="reset"||vt in r))),S&&(wt||ui)&&(ui||f||!r)&&(Pn(S)?S(U):U.getTrailing(S).forEach(function(Sr){return Sr.endAnimation()})),F||(O&&!wn&&!Vl?(O._dp._time-O._start!==O._time&&O.render(O._dp._time-O._start),O.resetTo?O.resetTo("totalProgress",lt,r._tTime/r._tDur):(O.vars.totalProgress=lt,O.invalidate().restart())):r&&r.totalProgress(lt,!!(wn&&(je||Pe)))),d){if(Pe&&g&&(N.style[g+E.os2]=Ce),!K)Y(Bo(xe+de*lt));else if(Zn){if(bn=!Pe&&lt>bt&&G+1>Je&&Je+1>=lr(z,E),b)if(!Pe&&(Jt||bn)){var sn=Dr(d,!0),an=Je-L;Nm(d,St,sn.top+(E===ln?an:0)+on,sn.left+(E===ln?0:an)+on)}else Nm(d,N);Za(Jt||bn?C:x),_e&&lt<1&&Jt||Y(xe+(lt===1&&!bn?de:0))}}v&&!Me.tween&&!wn&&!Vl&&Ee.restart(!0),o&&(wt||y&&lt&&(lt<1||!ef))&&Ml(o.targets).forEach(function(Sr){return Sr.classList[Jt||y?"add":"remove"](o.className)}),a&&!F&&!Pe&&a(U),Zn&&!wn?(F&&(ui&&(vt==="complete"?r.pause().totalProgress(1):vt==="reset"?r.restart(!0).pause():vt==="restart"?r.restart(!0):r[vt]()),a&&a(U)),(wt||!ef)&&(c&&wt&&nf(U,c),k[Rt]&&nf(U,k[Rt]),y&&(lt===1?U.kill(!1,1):k[Rt]=0),wt||(Rt=lt===1?1:3,k[Rt]&&nf(U,k[Rt]))),P&&!Jt&&Math.abs(U.getVelocity())>(zo(P)?P:2500)&&(bo(U.callbackAnimation),O?O.progress(1):bo(r,vt==="reverse"?1:!lt,1))):F&&a&&!wn&&a(U)}if(ye){var fn=T?Je/T.duration()*(T._caScrollDist||0):Je;pe(fn+(I._isFlipped?1:0)),ye(fn)}Se&&Se(-Je/T.duration()*(T._caScrollDist||0))}},U.enable=function(Pe,Ke){U.enabled||(U.enabled=!0,mn(z,"resize",ko),Z||mn(z,"scroll",ma),fe&&mn(i,"refreshInit",fe),Pe!==!1&&(U.progress=ne=0,We=D=He=re()),Ke!==!1&&U.refresh())},U.getTween=function(Pe){return Pe&&Me?Me.tween:O},U.setPositions=function(Pe,Ke,Ve,Je){if(T){var jt=T.scrollTrigger,lt=T.duration(),bt=jt.end-jt.start;Pe=jt.start+bt*Pe/lt,Ke=jt.start+bt*Ke/lt}U.refresh(!1,!1,{start:Am(Pe,Ve&&!!U._startClamp),end:Am(Ke,Ve&&!!U._endClamp)},Je),U.update()},U.adjustPinSpacing=function(Pe){if(Te&&Pe){var Ke=Te.indexOf(E.d)+1;Te[Ke]=parseFloat(Te[Ke])+Pe+on,Te[1]=parseFloat(Te[1])+Pe+on,Za(Te)}},U.disable=function(Pe,Ke){if(U.enabled&&(Pe!==!1&&U.revert(!0,!0),U.enabled=U.isActive=!1,Ke||O&&O.pause(),he=0,Oe&&(Oe.uncache=1),fe&&pn(i,"refreshInit",fe),Ee&&(Ee.pause(),Me.tween&&Me.tween.kill()&&(Me.tween=0)),!Z)){for(var Ve=ot.length;Ve--;)if(ot[Ve].scroller===z&&ot[Ve]!==U)return;pn(z,"resize",ko),Z||pn(z,"scroll",ma)}},U.kill=function(Pe,Ke){U.disable(Pe,Ke),O&&!Ke&&O.kill(),l&&delete Mh[l];var Ve=ot.indexOf(U);Ve>=0&&ot.splice(Ve,1),Ve===Hn&&Lc>0&&Hn--,Ve=0,ot.forEach(function(Je){return Je.scroller===U.scroller&&(Ve=1)}),Ve||Gn||(U.scroll.rec=0),r&&(r.scrollTrigger=null,Pe&&r.revert({kill:!1}),Ke||r.kill()),ie&&[ie,j,I,R].forEach(function(Je){return Je.parentNode&&Je.parentNode.removeChild(Je)}),ll===U&&(ll=0),d&&(Oe&&(Oe.uncache=1),Ve=0,ot.forEach(function(Je){return Je.pin===d&&Ve++}),Ve||(Oe.spacer=0)),n.onKill&&n.onKill(U)},ot.push(U),U.enable(!1,!1),Ge&&Ge(U),r&&r.add&&!te){var nt=U.update;U.update=function(){U.update=nt,ft.cache++,L||G||U.refresh()},Ne.delayedCall(.01,U.update),te=.01,L=G=0}else U.refresh();d&&Xy()},i.register=function(n){return Na||(Ne=n||nv(),tv()&&window.document&&i.enable(),Na=Oo),Na},i.defaults=function(n){if(n)for(var r in n)Xl[r]=n[r];return Xl},i.disable=function(n,r){Oo=0,ot.forEach(function(a){return a[r?"kill":"disable"](n)}),pn(ut,"wheel",ma),pn(Ut,"scroll",ma),clearInterval(kl),pn(Ut,"touchcancel",tr),pn(St,"touchstart",tr),Gl(pn,Ut,"pointerdown,touchstart,mousedown",Cm),Gl(pn,Ut,"pointerup,touchend,mouseup",Rm),iu.kill(),Hl(pn);for(var s=0;s<ft.length;s+=3)Wl(pn,ft[s],ft[s+1]),Wl(pn,ft[s],ft[s+2])},i.enable=function(){if(ut=window,Ut=document,xi=Ut.documentElement,St=Ut.body,Ne&&(Ml=Ne.utils.toArray,il=Ne.utils.clamp,xh=Ne.core.context||tr,Qu=Ne.core.suppressOverwrites||tr,ap=ut.history.scrollRestoration||"auto",yh=ut.pageYOffset||0,Ne.core.globals("ScrollTrigger",i),St)){Oo=1,Ka=document.createElement("div"),Ka.style.height="100vh",Ka.style.position="absolute",fv(),By(),Zt.register(Ne),i.isTouch=Zt.isTouch,es=Zt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),vh=Zt.isTouch===1,mn(ut,"wheel",ma),sp=[ut,Ut,xi,St],Ne.matchMedia?(i.matchMedia=function(c){var u=Ne.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},Ne.addEventListener("matchMediaInit",function(){return hp()}),Ne.addEventListener("matchMediaRevert",function(){return cv()}),Ne.addEventListener("matchMedia",function(){Xs(0,1),aa("matchMedia")}),Ne.matchMedia().add("(orientation: portrait)",function(){return rf(),rf})):console.warn("Requires GSAP 3.11.0 or later"),rf(),mn(Ut,"scroll",ma);var n=St.hasAttribute("style"),r=St.style,s=r.borderTopStyle,a=Ne.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",o=Dr(St),ln.m=Math.round(o.top+ln.sc())||0,$n.m=Math.round(o.left+$n.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),n||(St.setAttribute("style",""),St.removeAttribute("style")),kl=setInterval(Lm,250),Ne.delayedCall(.5,function(){return Vl=0}),mn(Ut,"touchcancel",tr),mn(St,"touchstart",tr),Gl(mn,Ut,"pointerdown,touchstart,mousedown",Cm),Gl(mn,Ut,"pointerup,touchend,mouseup",Rm),gh=Ne.utils.checkPrefix("transform"),Ic.push(gh),Na=An(),iu=Ne.delayedCall(.2,Xs).pause(),Oa=[Ut,"visibilitychange",function(){var c=ut.innerWidth,u=ut.innerHeight;Ut.hidden?(Em=c,Tm=u):(Em!==c||Tm!==u)&&ko()},Ut,"DOMContentLoaded",Xs,ut,"load",Xs,ut,"resize",ko],Hl(mn),ot.forEach(function(c){return c.enable(0,1)}),l=0;l<ft.length;l+=3)Wl(pn,ft[l],ft[l+1]),Wl(pn,ft[l],ft[l+2])}},i.config=function(n){"limitCallbacks"in n&&(ef=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(kl)||(kl=r)&&setInterval(Lm,r),"ignoreMobileResize"in n&&(vh=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Hl(pn)||Hl(mn,n.autoRefreshEvents||"none"),J0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=ti(n),a=ft.indexOf(s),o=ra(s);~a&&ft.splice(a,o?6:2),r&&(o?hr.unshift(ut,r,St,r,xi,r):hr.unshift(s,r))},i.clearMatchMedia=function(n){ot.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var a=(gi(n)?ti(n):n).getBoundingClientRect(),o=a[s?ea:ta]*r||0;return s?a.right-o>0&&a.left+o<ut.innerWidth:a.bottom-o>0&&a.top+o<ut.innerHeight},i.positionInViewport=function(n,r,s){gi(n)&&(n=ti(n));var a=n.getBoundingClientRect(),o=a[s?ea:ta],l=r==null?o/2:r in au?au[r]*o:~r.indexOf("%")?parseFloat(r)*o/100:parseFloat(r)||0;return s?(a.left+l)/ut.innerWidth:(a.top+l)/ut.innerHeight},i.killAll=function(n){if(ot.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=sa.killAll||[];sa={},r.forEach(function(s){return s()})}},i})();at.version="3.13.0";at.saveStyles=function(i){return i?Ml(i).forEach(function(e){if(e&&e.style){var t=_i.indexOf(e);t>=0&&_i.splice(t,5),_i.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ne.core.getCache(e),xh())}}):_i};at.revert=function(i,e){return hp(!i,e)};at.create=function(i,e){return new at(i,e)};at.refresh=function(i){return i?ko(!0):(Na||at.register())&&Xs(!0)};at.update=function(i){return++ft.cache&&Or(i===!0?2:0)};at.clearScrollMemory=uv;at.maxScroll=function(i,e){return lr(i,e?$n:ln)};at.getScrollFunc=function(i,e){return ys(ti(i),e?$n:ln)};at.getById=function(i){return Mh[i]};at.getAll=function(){return ot.filter(function(i){return i.vars.id!=="ScrollSmoother"})};at.isScrolling=function(){return!!Hi};at.snapDirectional=fp;at.addEventListener=function(i,e){var t=sa[i]||(sa[i]=[]);~t.indexOf(e)||t.push(e)};at.removeEventListener=function(i,e){var t=sa[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};at.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var f=[],h=[],d=Ne.delayedCall(r,function(){u(f,h),f=[],h=[]}).pause();return function(g){f.length||d.restart(!0),f.push(g.trigger),h.push(g),s<=f.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Pn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Pn(s)&&(s=s(),mn(at,"refresh",function(){return s=e.batchMax()})),Ml(i).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(at.create(c))}),t};var Bm=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},af=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Zt.isTouch?" pinch-zoom":""):"none",e===xi&&i(St,t)},jl={auto:1,scroll:1},Ky=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Ne.core.getCache(s),o=An(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==St&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(jl[(l=Ni(s)).overflowY]||jl[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!ra(s)&&(jl[(l=Ni(s)).overflowY]||jl[l.overflowX]),a._isScrollT=o}(a._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},dv=function(e,t,n,r){return Zt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&Ky,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&mn(Ut,Zt.eventTypes[0],km,!1,!0)},onDisable:function(){return pn(Ut,Zt.eventTypes[0],km,!0)}})},Zy=/(input|label|select|textarea)/i,zm,km=function(e){var t=Zy.test(e.target.tagName);(t||zm)&&(e._gsapAllow=!0,zm=t)},Jy=function(e){Vs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=ti(e.target)||xi,u=Ne.core.globals().ScrollSmoother,f=u&&u.get(),h=es&&(e.content&&ti(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=ys(c,ln),g=ys(c,$n),_=1,m=(Zt.isTouch&&ut.visualViewport?ut.visualViewport.scale*ut.visualViewport.width:ut.outerWidth)/ut.innerWidth,p=0,M=Pn(r)?function(){return r(o)}:function(){return r||2.8},y,v,b=dv(c,e.type,!0,s),w=function(){return v=!1},T=tr,P=tr,S=function(){l=lr(c,ln),P=il(es?1:0,l),n&&(T=il(0,lr(c,$n))),y=na},E=function(){h._gsap.y=Bo(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},F=function(){if(v){requestAnimationFrame(w);var X=Bo(o.deltaY/2),ce=P(d.v-X);if(h&&ce!==d.v+d.offset){d.offset=ce-d.v;var U=Bo((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+U+", 0, 1)",h._gsap.y=U+"px",d.cacheID=ft.cache,Or()}return!0}d.offset&&E(),v=!0},z,H,Z,K,k=function(){S(),z.isActive()&&z.vars.scrollY>l&&(d()>l?z.progress(1)&&d(l):z.resetTo("scrollY",l))};return h&&Ne.set(h,{y:"+=0"}),e.ignoreCheck=function(B){return es&&B.type==="touchmove"&&F()||_>1.05&&B.type!=="touchstart"||o.isGesturing||B.touches&&B.touches.length>1},e.onPress=function(){v=!1;var B=_;_=Bo((ut.visualViewport&&ut.visualViewport.scale||1)/m),z.pause(),B!==_&&af(c,_>1.01?!0:n?!1:"x"),H=g(),Z=d(),S(),y=na},e.onRelease=e.onGestureStart=function(B,X){if(d.offset&&E(),!X)K.restart(!0);else{ft.cache++;var ce=M(),U,fe;n&&(U=g(),fe=U+ce*.05*-B.velocityX/.227,ce*=Bm(g,U,fe,lr(c,$n)),z.vars.scrollX=T(fe)),U=d(),fe=U+ce*.05*-B.velocityY/.227,ce*=Bm(d,U,fe,lr(c,ln)),z.vars.scrollY=P(fe),z.invalidate().duration(ce).play(.01),(es&&z.vars.scrollY>=l||U>=l-1)&&Ne.to({},{onUpdate:k,duration:ce})}a&&a(B)},e.onWheel=function(){z._ts&&z.pause(),An()-p>1e3&&(y=0,p=An())},e.onChange=function(B,X,ce,U,fe){if(na!==y&&S(),X&&n&&g(T(U[2]===X?H+(B.startX-B.x):g()+X-U[1])),ce){d.offset&&E();var Le=fe[2]===ce,ze=Le?Z+B.startY-B.y:d()+ce-fe[1],He=P(ze);Le&&ze!==He&&(Z+=He-ze),d(He)}(ce||X)&&Or()},e.onEnable=function(){af(c,n?!1:"x"),at.addEventListener("refresh",k),mn(ut,"resize",k),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),b.enable()},e.onDisable=function(){af(c,!0),pn(ut,"resize",k),at.removeEventListener("refresh",k),b.kill()},e.lockAxis=e.lockAxis!==!1,o=new Zt(e),o.iOS=es,es&&!d()&&d(1),es&&Ne.ticker.add(tr),K=o._dc,z=Ne.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:hv(d,d(),function(){return z.pause()})},onUpdate:Or,onComplete:K.vars.onComplete}),o};at.sort=function(i){if(Pn(i))return ot.sort(i);var e=ut.pageYOffset||0;return at.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ut.innerHeight}),ot.sort(i||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};at.observe=function(i){return new Zt(i)};at.normalizeScroll=function(i){if(typeof i>"u")return Vn;if(i===!0&&Vn)return Vn.enable();if(i===!1){Vn&&Vn.kill(),Vn=i;return}var e=i instanceof Zt?i:Jy(i);return Vn&&Vn.target===e.target&&Vn.kill(),ra(e.target)&&(Vn=e),e};at.core={_getVelocityProp:_h,_inputObserver:dv,_scrollers:ft,_proxies:hr,bridge:{ss:function(){Hi||aa("scrollStart"),Hi=An()},ref:function(){return wn}}};nv()&&Ne.registerPlugin(at);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dp="182",Qy=0,Vm=1,e1=2,Fc=1,t1=2,Vo=3,bs=0,oi=1,Lr=2,Br=0,Ja=1,ou=2,Hm=3,Gm=4,n1=5,Hs=100,i1=101,r1=102,s1=103,a1=104,o1=200,l1=201,c1=202,u1=203,Eh=204,Th=205,f1=206,h1=207,d1=208,p1=209,m1=210,_1=211,g1=212,v1=213,x1=214,wh=0,Ah=1,Ch=2,lo=3,Rh=4,Ph=5,Dh=6,Lh=7,pv=0,S1=1,M1=2,dr=0,mv=1,_v=2,gv=3,vv=4,xv=5,Sv=6,Mv=7,yv=300,oa=301,co=302,Ih=303,Uh=304,Au=306,Fh=1e3,Ur=1001,Nh=1002,Mn=1003,y1=1004,Kl=1005,Dn=1006,of=1007,Ys=1008,bi=1009,bv=1010,Ev=1011,bl=1012,pp=1013,gr=1014,cr=1015,Xr=1016,mp=1017,_p=1018,El=1020,Tv=35902,wv=35899,Av=1021,Cv=1022,ji=1023,Yr=1026,qs=1027,Rv=1028,gp=1029,uo=1030,vp=1031,xp=1033,Nc=33776,Oc=33777,Bc=33778,zc=33779,Oh=35840,Bh=35841,zh=35842,kh=35843,Vh=36196,Hh=37492,Gh=37496,Wh=37488,Xh=37489,Yh=37490,qh=37491,$h=37808,jh=37809,Kh=37810,Zh=37811,Jh=37812,Qh=37813,ed=37814,td=37815,nd=37816,id=37817,rd=37818,sd=37819,ad=37820,od=37821,ld=36492,cd=36494,ud=36495,fd=36283,hd=36284,dd=36285,pd=36286,b1=3200,Pv=0,E1=1,ss="",Li="srgb",fo="srgb-linear",lu="linear",Tt="srgb",_a=7680,Wm=519,T1=512,w1=513,A1=514,Sp=515,C1=516,R1=517,Mp=518,P1=519,md=35044,Xm="300 es",ur=2e3,cu=2001;function Dv(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function uu(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function D1(){const i=uu("canvas");return i.style.display="block",i}const Ym={};function fu(...i){const e="THREE."+i.shift();console.log(e,...i)}function Qe(...i){const e="THREE."+i.shift();console.warn(e,...i)}function pt(...i){const e="THREE."+i.shift();console.error(e,...i)}function Tl(...i){const e=i.join(" ");e in Ym||(Ym[e]=!0,Qe(...i))}function L1(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class mo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lf=Math.PI/180,_d=180/Math.PI;function _s(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]).toLowerCase()}function ht(i,e,t){return Math.max(e,Math.min(t,i))}function I1(i,e){return(i%e+e)%e}function cf(i,e,t){return(1-t)*i+t*e}function sr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class tt{constructor(e=0,t=0){tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dl{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3],h=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o>=1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=l*h+c*d+u*g+f*_;m<0&&(h=-h,d=-d,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),y=Math.sin(M);p=Math.sin(p*M)/y,o=Math.sin(o*M)/y,l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,f=f*p+_*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,f=f*p+_*o;const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[a],h=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-o*d,e[t+2]=c*g+u*d+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),f=o(s/2),h=l(n/2),d=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return uf.copy(this).projectOnVector(e),this.sub(uf)}reflect(e){return this.sub(uf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uf=new W,qm=new Dl;class it{constructor(e,t,n,r,s,a,o,l,c){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=r[0],m=r[3],p=r[6],M=r[1],y=r[4],v=r[7],b=r[2],w=r[5],T=r[8];return s[0]=a*_+o*M+l*b,s[3]=a*m+o*y+l*w,s[6]=a*p+o*v+l*T,s[1]=c*_+u*M+f*b,s[4]=c*m+u*y+f*w,s[7]=c*p+u*v+f*T,s[2]=h*_+d*M+g*b,s[5]=h*m+d*y+g*w,s[8]=h*p+d*v+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,g=t*f+n*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*n)*_,e[2]=(o*n-r*a)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ff.makeScale(e,t)),this}rotate(e){return this.premultiply(ff.makeRotation(-e)),this}translate(e,t){return this.premultiply(ff.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ff=new it,$m=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jm=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function U1(){const i={enabled:!0,workingColorSpace:fo,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Tt&&(r.r=zr(r.r),r.g=zr(r.g),r.b=zr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Tt&&(r.r=Qa(r.r),r.g=Qa(r.g),r.b=Qa(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ss?lu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Tl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Tl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fo]:{primaries:e,whitePoint:n,transfer:lu,toXYZ:$m,fromXYZ:jm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Li},outputColorSpaceConfig:{drawingBufferColorSpace:Li}},[Li]:{primaries:e,whitePoint:n,transfer:Tt,toXYZ:$m,fromXYZ:jm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Li}}}),i}const _t=U1();function zr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ga;class F1{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ga===void 0&&(ga=uu("canvas")),ga.width=e.width,ga.height=e.height;const r=ga.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ga}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=uu("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=zr(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zr(t[n]/255)*255):t[n]=zr(t[n]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let N1=0;class yp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:N1++}),this.uuid=_s(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(hf(r[a].image)):s.push(hf(r[a]))}else s=hf(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function hf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?F1.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}let O1=0;const df=new W;class Un extends mo{constructor(e=Un.DEFAULT_IMAGE,t=Un.DEFAULT_MAPPING,n=Ur,r=Ur,s=Dn,a=Ys,o=ji,l=bi,c=Un.DEFAULT_ANISOTROPY,u=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:O1++}),this.uuid=_s(),this.name="",this.source=new yp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(df).x}get height(){return this.source.getSize(df).y}get depth(){return this.source.getSize(df).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fh:e.x=e.x-Math.floor(e.x);break;case Ur:e.x=e.x<0?0:1;break;case Nh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fh:e.y=e.y-Math.floor(e.y);break;case Ur:e.y=e.y<0?0:1;break;case Nh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=yv;Un.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,t=0,n=0,r=1){qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(d+1)/2,b=(p+1)/2,w=(u+h)/4,T=(f+_)/4,P=(g+m)/4;return y>v&&y>b?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=w/n,s=T/n):v>b?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=w/r,s=P/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=T/s,r=P/s),this.set(n,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-_)/M,this.z=(h-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class B1 extends mo{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Un(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new yp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pr extends B1{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Lv extends Un{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class z1 extends Un{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ll{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xi):Xi.fromBufferAttribute(s,a),Xi.applyMatrix4(e.matrixWorld),this.expandByPoint(Xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zl.copy(n.boundingBox)),Zl.applyMatrix4(e.matrixWorld),this.union(Zl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xi),Xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Eo),Jl.subVectors(this.max,Eo),va.subVectors(e.a,Eo),xa.subVectors(e.b,Eo),Sa.subVectors(e.c,Eo),$r.subVectors(xa,va),jr.subVectors(Sa,xa),Ls.subVectors(va,Sa);let t=[0,-$r.z,$r.y,0,-jr.z,jr.y,0,-Ls.z,Ls.y,$r.z,0,-$r.x,jr.z,0,-jr.x,Ls.z,0,-Ls.x,-$r.y,$r.x,0,-jr.y,jr.x,0,-Ls.y,Ls.x,0];return!pf(t,va,xa,Sa,Jl)||(t=[1,0,0,0,1,0,0,0,1],!pf(t,va,xa,Sa,Jl))?!1:(Ql.crossVectors($r,jr),t=[Ql.x,Ql.y,Ql.z],pf(t,va,xa,Sa,Jl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yr=[new W,new W,new W,new W,new W,new W,new W,new W],Xi=new W,Zl=new Ll,va=new W,xa=new W,Sa=new W,$r=new W,jr=new W,Ls=new W,Eo=new W,Jl=new W,Ql=new W,Is=new W;function pf(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Is.fromArray(i,s);const o=r.x*Math.abs(Is.x)+r.y*Math.abs(Is.y)+r.z*Math.abs(Is.z),l=e.dot(Is),c=t.dot(Is),u=n.dot(Is);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const k1=new Ll,To=new W,mf=new W;class Cu{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):k1.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;To.subVectors(e,this.center);const t=To.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(To,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(To.copy(e.center).add(mf)),this.expandByPoint(To.copy(e.center).sub(mf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const br=new W,_f=new W,ec=new W,Kr=new W,gf=new W,tc=new W,vf=new W;class bp{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,br)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=br.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(br.copy(this.origin).addScaledVector(this.direction,t),br.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){_f.copy(e).add(t).multiplyScalar(.5),ec.copy(t).sub(e).normalize(),Kr.copy(this.origin).sub(_f);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ec),o=Kr.dot(this.direction),l=-Kr.dot(ec),c=Kr.lengthSq(),u=Math.abs(1-a*a);let f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(_f).addScaledVector(ec,h),d}intersectSphere(e,t){br.subVectors(e.center,this.origin);const n=br.dot(this.direction),r=br.dot(br)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,br)!==null}intersectTriangle(e,t,n,r,s){gf.subVectors(t,e),tc.subVectors(n,e),vf.crossVectors(gf,tc);let a=this.direction.dot(vf),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Kr.subVectors(this.origin,e);const l=o*this.direction.dot(tc.crossVectors(Kr,tc));if(l<0)return null;const c=o*this.direction.dot(gf.cross(Kr));if(c<0||l+c>a)return null;const u=-o*Kr.dot(vf);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(e,t,n,r,s,a,o,l,c,u,f,h,d,g,_,m){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,f,h,d,g,_,m)}set(e,t,n,r,s,a,o,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Ma.setFromMatrixColumn(e,0).length(),s=1/Ma.setFromMatrixColumn(e,1).length(),a=1/Ma.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=a*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(V1,e,H1)}lookAt(e,t,n){const r=this.elements;return di.subVectors(e,t),di.lengthSq()===0&&(di.z=1),di.normalize(),Zr.crossVectors(n,di),Zr.lengthSq()===0&&(Math.abs(n.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),Zr.crossVectors(n,di)),Zr.normalize(),nc.crossVectors(di,Zr),r[0]=Zr.x,r[4]=nc.x,r[8]=di.x,r[1]=Zr.y,r[5]=nc.y,r[9]=di.y,r[2]=Zr.z,r[6]=nc.z,r[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],y=n[7],v=n[11],b=n[15],w=r[0],T=r[4],P=r[8],S=r[12],E=r[1],F=r[5],z=r[9],H=r[13],Z=r[2],K=r[6],k=r[10],B=r[14],X=r[3],ce=r[7],U=r[11],fe=r[15];return s[0]=a*w+o*E+l*Z+c*X,s[4]=a*T+o*F+l*K+c*ce,s[8]=a*P+o*z+l*k+c*U,s[12]=a*S+o*H+l*B+c*fe,s[1]=u*w+f*E+h*Z+d*X,s[5]=u*T+f*F+h*K+d*ce,s[9]=u*P+f*z+h*k+d*U,s[13]=u*S+f*H+h*B+d*fe,s[2]=g*w+_*E+m*Z+p*X,s[6]=g*T+_*F+m*K+p*ce,s[10]=g*P+_*z+m*k+p*U,s[14]=g*S+_*H+m*B+p*fe,s[3]=M*w+y*E+v*Z+b*X,s[7]=M*T+y*F+v*K+b*ce,s[11]=M*P+y*z+v*k+b*U,s[15]=M*S+y*H+v*B+b*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15],M=l*d-c*h,y=o*d-c*f,v=o*h-l*f,b=a*d-c*u,w=a*h-l*u,T=a*f-o*u;return t*(_*M-m*y+p*v)-n*(g*M-m*b+p*w)+r*(g*y-_*b+p*T)-s*(g*v-_*w+m*T)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=f*m*c-_*h*c+_*l*d-o*m*d-f*l*p+o*h*p,y=g*h*c-u*m*c-g*l*d+a*m*d+u*l*p-a*h*p,v=u*_*c-g*f*c+g*o*d-a*_*d-u*o*p+a*f*p,b=g*f*l-u*_*l-g*o*h+a*_*h+u*o*m-a*f*m,w=t*M+n*y+r*v+s*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=M*T,e[1]=(_*h*s-f*m*s-_*r*d+n*m*d+f*r*p-n*h*p)*T,e[2]=(o*m*s-_*l*s+_*r*c-n*m*c-o*r*p+n*l*p)*T,e[3]=(f*l*s-o*h*s-f*r*c+n*h*c+o*r*d-n*l*d)*T,e[4]=y*T,e[5]=(u*m*s-g*h*s+g*r*d-t*m*d-u*r*p+t*h*p)*T,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*p-t*l*p)*T,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*d+t*l*d)*T,e[8]=v*T,e[9]=(g*f*s-u*_*s-g*n*d+t*_*d+u*n*p-t*f*p)*T,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*p+t*o*p)*T,e[11]=(u*o*s-a*f*s-u*n*c+t*f*c+a*n*d-t*o*d)*T,e[12]=b*T,e[13]=(u*_*r-g*f*r+g*n*h-t*_*h-u*n*m+t*f*m)*T,e[14]=(g*o*r-a*_*r-g*n*l+t*_*l+a*n*m-t*o*m)*T,e[15]=(a*f*r-u*o*r+u*n*l-t*f*l-a*n*h+t*o*h)*T,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,g=s*f,_=a*u,m=a*f,p=o*f,M=l*c,y=l*u,v=l*f,b=n.x,w=n.y,T=n.z;return r[0]=(1-(_+p))*b,r[1]=(d+v)*b,r[2]=(g-y)*b,r[3]=0,r[4]=(d-v)*w,r[5]=(1-(h+p))*w,r[6]=(m+M)*w,r[7]=0,r[8]=(g+y)*T,r[9]=(m-M)*T,r[10]=(1-(h+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=Ma.set(r[0],r[1],r[2]).length();const a=Ma.set(r[4],r[5],r[6]).length(),o=Ma.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Yi.copy(this);const c=1/s,u=1/a,f=1/o;return Yi.elements[0]*=c,Yi.elements[1]*=c,Yi.elements[2]*=c,Yi.elements[4]*=u,Yi.elements[5]*=u,Yi.elements[6]*=u,Yi.elements[8]*=f,Yi.elements[9]*=f,Yi.elements[10]*=f,t.setFromRotationMatrix(Yi),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=ur,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===ur)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===cu)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=ur,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-r),h=-(t+e)/(t-e),d=-(n+r)/(n-r);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===ur)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===cu)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ma=new W,Yi=new kt,V1=new W(0,0,0),H1=new W(1,1,1),Zr=new W,nc=new W,di=new W,Km=new kt,Zm=new Dl;class vr{constructor(e=0,t=0,n=0,r=vr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Km.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Km,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zm.setFromEuler(this),this.setFromQuaternion(Zm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vr.DEFAULT_ORDER="XYZ";class Ep{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let G1=0;const Jm=new W,ya=new Dl,Er=new kt,ic=new W,wo=new W,W1=new W,X1=new Dl,Qm=new W(1,0,0),e_=new W(0,1,0),t_=new W(0,0,1),n_={type:"added"},Y1={type:"removed"},ba={type:"childadded",child:null},xf={type:"childremoved",child:null};class gn extends mo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:G1++}),this.uuid=_s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new W,t=new vr,n=new Dl,r=new W(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new kt},normalMatrix:{value:new it}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ep,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ya.setFromAxisAngle(e,t),this.quaternion.multiply(ya),this}rotateOnWorldAxis(e,t){return ya.setFromAxisAngle(e,t),this.quaternion.premultiply(ya),this}rotateX(e){return this.rotateOnAxis(Qm,e)}rotateY(e){return this.rotateOnAxis(e_,e)}rotateZ(e){return this.rotateOnAxis(t_,e)}translateOnAxis(e,t){return Jm.copy(e).applyQuaternion(this.quaternion),this.position.add(Jm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qm,e)}translateY(e){return this.translateOnAxis(e_,e)}translateZ(e){return this.translateOnAxis(t_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Er.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ic.copy(e):ic.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Er.lookAt(wo,ic,this.up):Er.lookAt(ic,wo,this.up),this.quaternion.setFromRotationMatrix(Er),r&&(Er.extractRotation(r.matrixWorld),ya.setFromRotationMatrix(Er),this.quaternion.premultiply(ya.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(n_),ba.child=e,this.dispatchEvent(ba),ba.child=null):pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Y1),xf.child=e,this.dispatchEvent(xf),xf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Er.multiply(e.parent.matrixWorld)),e.applyMatrix4(Er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(n_),ba.child=e,this.dispatchEvent(ba),ba.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,e,W1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,X1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}gn.DEFAULT_UP=new W(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qi=new W,Tr=new W,Sf=new W,wr=new W,Ea=new W,Ta=new W,i_=new W,Mf=new W,yf=new W,bf=new W,Ef=new qt,Tf=new qt,wf=new qt;class Oi{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),qi.subVectors(e,t),r.cross(qi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){qi.subVectors(r,t),Tr.subVectors(n,t),Sf.subVectors(e,t);const a=qi.dot(qi),o=qi.dot(Tr),l=qi.dot(Sf),c=Tr.dot(Tr),u=Tr.dot(Sf),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,wr)===null?!1:wr.x>=0&&wr.y>=0&&wr.x+wr.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,wr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wr.x),l.addScaledVector(a,wr.y),l.addScaledVector(o,wr.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return Ef.setScalar(0),Tf.setScalar(0),wf.setScalar(0),Ef.fromBufferAttribute(e,t),Tf.fromBufferAttribute(e,n),wf.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ef,s.x),a.addScaledVector(Tf,s.y),a.addScaledVector(wf,s.z),a}static isFrontFacing(e,t,n,r){return qi.subVectors(n,t),Tr.subVectors(e,t),qi.cross(Tr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qi.subVectors(this.c,this.b),Tr.subVectors(this.a,this.b),qi.cross(Tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Oi.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Ea.subVectors(r,n),Ta.subVectors(s,n),Mf.subVectors(e,n);const l=Ea.dot(Mf),c=Ta.dot(Mf);if(l<=0&&c<=0)return t.copy(n);yf.subVectors(e,r);const u=Ea.dot(yf),f=Ta.dot(yf);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ea,a);bf.subVectors(e,s);const d=Ea.dot(bf),g=Ta.dot(bf);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ta,o);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return i_.subVectors(s,r),o=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(i_,o);const p=1/(m+_+h);return a=_*p,o=h*p,t.copy(n).addScaledVector(Ea,a).addScaledVector(Ta,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Iv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jr={h:0,s:0,l:0},rc={h:0,s:0,l:0};function Af(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class mt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=_t.workingColorSpace){if(e=I1(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Af(a,s,e+1/3),this.g=Af(a,s,e),this.b=Af(a,s,e-1/3)}return _t.colorSpaceToWorking(this,r),this}setStyle(e,t=Li){function n(s){s!==void 0&&parseFloat(s)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Li){const n=Iv[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}copyLinearToSRGB(e){return this.r=Qa(e.r),this.g=Qa(e.g),this.b=Qa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Li){return _t.workingToColorSpace(Tn.copy(this),e),Math.round(ht(Tn.r*255,0,255))*65536+Math.round(ht(Tn.g*255,0,255))*256+Math.round(ht(Tn.b*255,0,255))}getHexString(e=Li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(Tn.copy(this),t);const n=Tn.r,r=Tn.g,s=Tn.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=Li){_t.workingToColorSpace(Tn.copy(this),e);const t=Tn.r,n=Tn.g,r=Tn.b;return e!==Li?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Jr),this.setHSL(Jr.h+e,Jr.s+t,Jr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jr),e.getHSL(rc);const n=cf(Jr.h,rc.h,t),r=cf(Jr.s,rc.s,t),s=cf(Jr.l,rc.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new mt;mt.NAMES=Iv;let q1=0;class ca extends mo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q1++}),this.uuid=_s(),this.name="",this.type="Material",this.blending=Ja,this.side=bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eh,this.blendDst=Th,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_a,this.stencilZFail=_a,this.stencilZPass=_a,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ja&&(n.blending=this.blending),this.side!==bs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Eh&&(n.blendSrc=this.blendSrc),this.blendDst!==Th&&(n.blendDst=this.blendDst),this.blendEquation!==Hs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==lo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wm&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_a&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_a&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_a&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Uv extends ca{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vr,this.combine=pv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new W,sc=new tt;let $1=0;class Gi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=md,this.updateRanges=[],this.gpuType=cr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)sc.fromBufferAttribute(this,t),sc.applyMatrix3(e),this.setXY(t,sc.x,sc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=sr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=sr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=sr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=sr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=sr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),r=Ct(r,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==md&&(e.usage=this.usage),e}}class Fv extends Gi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Nv extends Gi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class jn extends Gi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let j1=0;const Pi=new kt,Cf=new gn,wa=new W,pi=new Ll,Ao=new Ll,dn=new W;class ci extends mo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:j1++}),this.uuid=_s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dv(e)?Nv:Fv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new it().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pi.makeRotationFromQuaternion(e),this.applyMatrix4(Pi),this}rotateX(e){return Pi.makeRotationX(e),this.applyMatrix4(Pi),this}rotateY(e){return Pi.makeRotationY(e),this.applyMatrix4(Pi),this}rotateZ(e){return Pi.makeRotationZ(e),this.applyMatrix4(Pi),this}translate(e,t,n){return Pi.makeTranslation(e,t,n),this.applyMatrix4(Pi),this}scale(e,t,n){return Pi.makeScale(e,t,n),this.applyMatrix4(Pi),this}lookAt(e){return Cf.lookAt(e),Cf.updateMatrix(),this.applyMatrix4(Cf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wa).negate(),this.translate(wa.x,wa.y,wa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new jn(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ll);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];pi.setFromBufferAttribute(s),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ao.setFromBufferAttribute(o),this.morphTargetsRelative?(dn.addVectors(pi.min,Ao.min),pi.expandByPoint(dn),dn.addVectors(pi.max,Ao.max),pi.expandByPoint(dn)):(pi.expandByPoint(Ao.min),pi.expandByPoint(Ao.max))}pi.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)dn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(dn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)dn.fromBufferAttribute(o,c),l&&(wa.fromBufferAttribute(e,c),dn.add(wa)),r=Math.max(r,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gi(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new W,l[P]=new W;const c=new W,u=new W,f=new W,h=new tt,d=new tt,g=new tt,_=new W,m=new W;function p(P,S,E){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,E),h.fromBufferAttribute(s,P),d.fromBufferAttribute(s,S),g.fromBufferAttribute(s,E),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const F=1/(d.x*g.y-g.x*d.y);isFinite(F)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(F),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(F),o[P].add(_),o[S].add(_),o[E].add(_),l[P].add(m),l[S].add(m),l[E].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let P=0,S=M.length;P<S;++P){const E=M[P],F=E.start,z=E.count;for(let H=F,Z=F+z;H<Z;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const y=new W,v=new W,b=new W,w=new W;function T(P){b.fromBufferAttribute(r,P),w.copy(b);const S=o[P];y.copy(S),y.sub(b.multiplyScalar(b.dot(S))).normalize(),v.crossVectors(w,S);const F=v.dot(l[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,F)}for(let P=0,S=M.length;P<S;++P){const E=M[P],F=E.start,z=E.count;for(let H=F,Z=F+z;H<Z;H+=3)T(e.getX(H+0)),T(e.getX(H+1)),T(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const r=new W,s=new W,a=new W,o=new W,l=new W,c=new W,u=new W,f=new W;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Gi(h,u,f)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ci,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const r_=new kt,Us=new bp,ac=new Cu,s_=new W,oc=new W,lc=new W,cc=new W,Rf=new W,uc=new W,a_=new W,fc=new W;class Wi extends gn{constructor(e=new ci,t=new Uv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){uc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Rf.fromBufferAttribute(f,e),a?uc.addScaledVector(Rf,u):uc.addScaledVector(Rf.sub(t),u))}t.add(uc)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ac.copy(n.boundingSphere),ac.applyMatrix4(s),Us.copy(e.ray).recast(e.near),!(ac.containsPoint(Us.origin)===!1&&(Us.intersectSphere(ac,s_)===null||Us.origin.distanceToSquared(s_)>(e.far-e.near)**2))&&(r_.copy(s).invert(),Us.copy(e.ray).applyMatrix4(r_),!(n.boundingBox!==null&&Us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Us)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,b=y;v<b;v+=3){const w=o.getX(v),T=o.getX(v+1),P=o.getX(v+2);r=hc(this,p,e,n,c,u,f,w,T,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);r=hc(this,a,e,n,c,u,f,M,y,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,b=y;v<b;v+=3){const w=v,T=v+1,P=v+2;r=hc(this,p,e,n,c,u,f,w,T,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=m,y=m+1,v=m+2;r=hc(this,a,e,n,c,u,f,M,y,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function K1(i,e,t,n,r,s,a,o){let l;if(e.side===oi?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===bs,o),l===null)return null;fc.copy(o),fc.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(fc);return c<t.near||c>t.far?null:{distance:c,point:fc.clone(),object:i}}function hc(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,oc),i.getVertexPosition(l,lc),i.getVertexPosition(c,cc);const u=K1(i,e,t,n,oc,lc,cc,a_);if(u){const f=new W;Oi.getBarycoord(a_,oc,lc,cc,f),r&&(u.uv=Oi.getInterpolatedAttribute(r,o,l,c,f,new tt)),s&&(u.uv1=Oi.getInterpolatedAttribute(s,o,l,c,f,new tt)),a&&(u.normal=Oi.getInterpolatedAttribute(a,o,l,c,f,new W),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new W,materialIndex:0};Oi.getNormal(oc,lc,cc,h.normal),u.face=h,u.barycoord=f}return u}class Il extends ci{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new jn(c,3)),this.setAttribute("normal",new jn(u,3)),this.setAttribute("uv",new jn(f,2));function g(_,m,p,M,y,v,b,w,T,P,S){const E=v/T,F=b/P,z=v/2,H=b/2,Z=w/2,K=T+1,k=P+1;let B=0,X=0;const ce=new W;for(let U=0;U<k;U++){const fe=U*F-H;for(let Le=0;Le<K;Le++){const ze=Le*E-z;ce[_]=ze*M,ce[m]=fe*y,ce[p]=Z,c.push(ce.x,ce.y,ce.z),ce[_]=0,ce[m]=0,ce[p]=w>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(Le/T),f.push(1-U/P),B+=1}}for(let U=0;U<P;U++)for(let fe=0;fe<T;fe++){const Le=h+fe+K*U,ze=h+fe+K*(U+1),He=h+(fe+1)+K*(U+1),je=h+(fe+1)+K*U;l.push(Le,ze,je),l.push(ze,He,je),X+=6}o.addGroup(d,X,S),d+=X,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Il(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ho(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function kn(i){const e={};for(let t=0;t<i.length;t++){const n=ho(i[t]);for(const r in n)e[r]=n[r]}return e}function Z1(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ov(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const J1={clone:ho,merge:kn};var Q1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xr extends ca{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Q1,this.fragmentShader=eb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ho(e.uniforms),this.uniformsGroups=Z1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Bv extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=ur,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qr=new W,o_=new tt,l_=new tt;class Si extends Bv{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_d*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _d*2*Math.atan(Math.tan(lf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z),Qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z)}getViewSize(e,t){return this.getViewBounds(e,o_,l_),t.subVectors(l_,o_)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(lf*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Aa=-90,Ca=1;class tb extends gn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Si(Aa,Ca,e,t);r.layers=this.layers,this.add(r);const s=new Si(Aa,Ca,e,t);s.layers=this.layers,this.add(s);const a=new Si(Aa,Ca,e,t);a.layers=this.layers,this.add(a);const o=new Si(Aa,Ca,e,t);o.layers=this.layers,this.add(o);const l=new Si(Aa,Ca,e,t);l.layers=this.layers,this.add(l);const c=new Si(Aa,Ca,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===ur)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cu)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class zv extends Un{constructor(e=[],t=oa,n,r,s,a,o,l,c,u){super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kv extends pr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new zv(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Il(5,5,5),s=new xr({name:"CubemapFromEquirect",uniforms:ho(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:oi,blending:Br});s.uniforms.tEquirect.value=t;const a=new Wi(r,s),o=t.minFilter;return t.minFilter===Ys&&(t.minFilter=Dn),new tb(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class Ho extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nb={type:"move"};class Pf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ho,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ho,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ho,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(nb)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ho;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Tp{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new mt(e),this.density=t}clone(){return new Tp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ib extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vr,this.environmentIntensity=1,this.environmentRotation=new vr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class rb{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=md,this.updateRanges=[],this.version=0,this.uuid=_s()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_s()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_s()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const On=new W;class hu{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyMatrix4(e),this.setXYZ(t,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyNormalMatrix(e),this.setXYZ(t,On.x,On.y,On.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.transformDirection(e),this.setXYZ(t,On.x,On.y,On.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=sr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=sr(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=sr(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=sr(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=sr(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),r=Ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),r=Ct(r,this.array),s=Ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){fu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Gi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new hu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){fu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Vv extends ca{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ra;const Co=new W,Pa=new W,Da=new W,La=new tt,Ro=new tt,Hv=new kt,dc=new W,Po=new W,pc=new W,c_=new tt,Df=new tt,u_=new tt;class sb extends gn{constructor(e=new Vv){if(super(),this.isSprite=!0,this.type="Sprite",Ra===void 0){Ra=new ci;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new rb(t,5);Ra.setIndex([0,1,2,0,2,3]),Ra.setAttribute("position",new hu(n,3,0,!1)),Ra.setAttribute("uv",new hu(n,2,3,!1))}this.geometry=Ra,this.material=e,this.center=new tt(.5,.5),this.count=1}raycast(e,t){e.camera===null&&pt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Pa.setFromMatrixScale(this.matrixWorld),Hv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Da.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pa.multiplyScalar(-Da.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;mc(dc.set(-.5,-.5,0),Da,a,Pa,r,s),mc(Po.set(.5,-.5,0),Da,a,Pa,r,s),mc(pc.set(.5,.5,0),Da,a,Pa,r,s),c_.set(0,0),Df.set(1,0),u_.set(1,1);let o=e.ray.intersectTriangle(dc,Po,pc,!1,Co);if(o===null&&(mc(Po.set(-.5,.5,0),Da,a,Pa,r,s),Df.set(0,1),o=e.ray.intersectTriangle(dc,pc,Po,!1,Co),o===null))return;const l=e.ray.origin.distanceTo(Co);l<e.near||l>e.far||t.push({distance:l,point:Co.clone(),uv:Oi.getInterpolation(Co,dc,Po,pc,c_,Df,u_,new tt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function mc(i,e,t,n,r,s){La.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Ro.x=s*La.x-r*La.y,Ro.y=r*La.x+s*La.y):Ro.copy(La),i.copy(e),i.x+=Ro.x,i.y+=Ro.y,i.applyMatrix4(Hv)}class ab extends Un{constructor(e=null,t=1,n=1,r,s,a,o,l,c=Mn,u=Mn,f,h){super(null,a,o,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Lf=new W,ob=new W,lb=new it;class is{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Lf.subVectors(n,t).cross(ob.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Lf),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lb.getNormalMatrix(e),r=this.coplanarPoint(Lf).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fs=new Cu,cb=new tt(.5,.5),_c=new W;class wp{constructor(e=new is,t=new is,n=new is,r=new is,s=new is,a=new is){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ur,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],g=s[8],_=s[9],m=s[10],p=s[11],M=s[12],y=s[13],v=s[14],b=s[15];if(r[0].setComponents(c-a,d-u,p-g,b-M).normalize(),r[1].setComponents(c+a,d+u,p+g,b+M).normalize(),r[2].setComponents(c+o,d+f,p+_,b+y).normalize(),r[3].setComponents(c-o,d-f,p-_,b-y).normalize(),n)r[4].setComponents(l,h,m,v).normalize(),r[5].setComponents(c-l,d-h,p-m,b-v).normalize();else if(r[4].setComponents(c-l,d-h,p-m,b-v).normalize(),t===ur)r[5].setComponents(c+l,d+h,p+m,b+v).normalize();else if(t===cu)r[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(e){Fs.center.set(0,0,0);const t=cb.distanceTo(e.center);return Fs.radius=.7071067811865476+t,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(_c.x=r.normal.x>0?e.max.x:e.min.x,_c.y=r.normal.y>0?e.max.y:e.min.y,_c.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_c)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gv extends ca{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const f_=new kt,gd=new bp,gc=new Cu,vc=new W;class ub extends gn{constructor(e=new ci,t=new Gv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gc.copy(n.boundingSphere),gc.applyMatrix4(r),gc.radius+=s,e.ray.intersectsSphere(gc)===!1)return;f_.copy(r).invert(),gd.copy(e.ray).applyMatrix4(f_);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=h,_=d;g<_;g++){const m=c.getX(g);vc.fromBufferAttribute(f,m),h_(vc,m,l,r,e,t,this)}}else{const h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let g=h,_=d;g<_;g++)vc.fromBufferAttribute(f,g),h_(vc,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function h_(i,e,t,n,r,s,a){const o=gd.distanceSqToPoint(i);if(o<t){const l=new W;gd.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class fb extends Un{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wl extends Un{constructor(e,t,n=gr,r,s,a,o=Mn,l=Mn,c,u=Yr,f=1){if(u!==Yr&&u!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class hb extends wl{constructor(e,t=gr,n=oa,r,s,a=Mn,o=Mn,l,c=Yr){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Wv extends Un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ru extends ci{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),c(n),u(),this.setAttribute("position",new jn(s,3)),this.setAttribute("normal",new jn(s.slice(),3)),this.setAttribute("uv",new jn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const y=new W,v=new W,b=new W;for(let w=0;w<t.length;w+=3)d(t[w+0],y),d(t[w+1],v),d(t[w+2],b),l(y,v,b,M)}function l(M,y,v,b){const w=b+1,T=[];for(let P=0;P<=w;P++){T[P]=[];const S=M.clone().lerp(v,P/w),E=y.clone().lerp(v,P/w),F=w-P;for(let z=0;z<=F;z++)z===0&&P===w?T[P][z]=S:T[P][z]=S.clone().lerp(E,z/F)}for(let P=0;P<w;P++)for(let S=0;S<2*(w-P)-1;S++){const E=Math.floor(S/2);S%2===0?(h(T[P][E+1]),h(T[P+1][E]),h(T[P][E])):(h(T[P][E+1]),h(T[P+1][E+1]),h(T[P+1][E]))}}function c(M){const y=new W;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(M),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function u(){const M=new W;for(let y=0;y<s.length;y+=3){M.x=s[y+0],M.y=s[y+1],M.z=s[y+2];const v=m(M)/2/Math.PI+.5,b=p(M)/Math.PI+.5;a.push(v,1-b)}g(),f()}function f(){for(let M=0;M<a.length;M+=6){const y=a[M+0],v=a[M+2],b=a[M+4],w=Math.max(y,v,b),T=Math.min(y,v,b);w>.9&&T<.1&&(y<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),b<.2&&(a[M+4]+=1))}}function h(M){s.push(M.x,M.y,M.z)}function d(M,y){const v=M*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function g(){const M=new W,y=new W,v=new W,b=new W,w=new tt,T=new tt,P=new tt;for(let S=0,E=0;S<s.length;S+=9,E+=6){M.set(s[S+0],s[S+1],s[S+2]),y.set(s[S+3],s[S+4],s[S+5]),v.set(s[S+6],s[S+7],s[S+8]),w.set(a[E+0],a[E+1]),T.set(a[E+2],a[E+3]),P.set(a[E+4],a[E+5]),b.copy(M).add(y).add(v).divideScalar(3);const F=m(b);_(w,E+0,M,F),_(T,E+2,y,F),_(P,E+4,v,F)}}function _(M,y,v,b){b<0&&M.x===1&&(a[y]=M.x-1),v.x===0&&v.z===0&&(a[y]=b/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ru(e.vertices,e.indices,e.radius,e.detail)}}class Ap extends Ru{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ap(e.radius,e.detail)}}class Cp extends Ru{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Cp(e.radius,e.detail)}}class Pu extends ci{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*h-a;for(let y=0;y<c;y++){const v=y*f-s;g.push(v,-M,0),_.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const y=M+c*p,v=M+c*(p+1),b=M+1+c*(p+1),w=M+1+c*p;d.push(y,v,w),d.push(v,b,w)}this.setIndex(d),this.setAttribute("position",new jn(g,3)),this.setAttribute("normal",new jn(_,3)),this.setAttribute("uv",new jn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Rp extends ci{constructor(e=1,t=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);const o=[],l=[],c=[],u=[],f=new W,h=new W,d=new W,g=new W,_=new W,m=new W,p=new W;for(let y=0;y<=n;++y){const v=y/n*s*Math.PI*2;M(v,s,a,e,d),M(v+.01,s,a,e,g),m.subVectors(g,d),p.addVectors(g,d),_.crossVectors(m,p),p.crossVectors(_,m),_.normalize(),p.normalize();for(let b=0;b<=r;++b){const w=b/r*Math.PI*2,T=-t*Math.cos(w),P=t*Math.sin(w);f.x=d.x+(T*p.x+P*_.x),f.y=d.y+(T*p.y+P*_.y),f.z=d.z+(T*p.z+P*_.z),l.push(f.x,f.y,f.z),h.subVectors(f,d).normalize(),c.push(h.x,h.y,h.z),u.push(y/n),u.push(b/r)}}for(let y=1;y<=n;y++)for(let v=1;v<=r;v++){const b=(r+1)*(y-1)+(v-1),w=(r+1)*y+(v-1),T=(r+1)*y+v,P=(r+1)*(y-1)+v;o.push(b,w,P),o.push(w,T,P)}this.setIndex(o),this.setAttribute("position",new jn(l,3)),this.setAttribute("normal",new jn(c,3)),this.setAttribute("uv",new jn(u,2));function M(y,v,b,w,T){const P=Math.cos(y),S=Math.sin(y),E=b/v*y,F=Math.cos(E);T.x=w*(2+F)*.5*P,T.y=w*(2+F)*S*.5,T.z=w*Math.sin(E)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rp(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class db extends xr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class If extends ca{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pv,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pb extends ca{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=b1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mb extends ca{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Pp extends gn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Uf=new kt,d_=new W,p_=new W;class Xv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.mapType=bi,this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wp,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;d_.setFromMatrixPosition(e.matrixWorld),t.position.copy(d_),p_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(p_),t.updateMatrixWorld(),Uf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uf,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _b extends Xv{constructor(){super(new Si(90,1,.5,500)),this.isPointLightShadow=!0}}class Ff extends Pp{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new _b}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Dp extends Bv{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class gb extends Xv{constructor(){super(new Dp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vb extends Pp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new gb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class xb extends Pp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Sb extends Si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class m_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const __=new kt;class Mb{constructor(e,t,n=0,r=1/0){this.ray=new bp(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Ep,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):pt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return __.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(__),this}intersectObject(e,t=!0,n=[]){return vd(e,this,n,t),n.sort(g_),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)vd(e[r],this,n,t);return n.sort(g_),n}}function g_(i,e){return i.distance-e.distance}function vd(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)vd(s[a],e,t,!0)}}function v_(i,e,t,n){const r=yb(n);switch(t){case Av:return i*e;case Rv:return i*e/r.components*r.byteLength;case gp:return i*e/r.components*r.byteLength;case uo:return i*e*2/r.components*r.byteLength;case vp:return i*e*2/r.components*r.byteLength;case Cv:return i*e*3/r.components*r.byteLength;case ji:return i*e*4/r.components*r.byteLength;case xp:return i*e*4/r.components*r.byteLength;case Nc:case Oc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Bc:case zc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bh:case kh:return Math.max(i,16)*Math.max(e,8)/4;case Oh:case zh:return Math.max(i,8)*Math.max(e,8)/2;case Vh:case Hh:case Wh:case Xh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Gh:case Yh:case qh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $h:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Kh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Qh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ed:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case td:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case nd:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case id:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case rd:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case sd:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ad:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case od:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ld:case cd:case ud:return Math.ceil(i/4)*Math.ceil(e/4)*16;case fd:case hd:return Math.ceil(i/4)*Math.ceil(e/4)*8;case dd:case pd:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yb(i){switch(i){case bi:case bv:return{byteLength:1,components:1};case bl:case Ev:case Xr:return{byteLength:2,components:1};case mp:case _p:return{byteLength:2,components:4};case gr:case pp:case cr:return{byteLength:4,components:1};case Tv:case wv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dp}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yv(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function bb(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Eb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ab=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Db=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ib=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ub=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ob=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,qb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$b=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eE="gl_FragColor = linearToOutputTexel( gl_FragColor );",tE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,iE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,oE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_E=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ME=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,EE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,TE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,PE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,IE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,HE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,GE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$E=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,QE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,aT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_T=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ST=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,MT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ET=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,PT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,DT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,LT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,IT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,BT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,HT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,WT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,XT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$T=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,JT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ew=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:Eb,alphahash_pars_fragment:Tb,alphamap_fragment:wb,alphamap_pars_fragment:Ab,alphatest_fragment:Cb,alphatest_pars_fragment:Rb,aomap_fragment:Pb,aomap_pars_fragment:Db,batching_pars_vertex:Lb,batching_vertex:Ib,begin_vertex:Ub,beginnormal_vertex:Fb,bsdfs:Nb,iridescence_fragment:Ob,bumpmap_pars_fragment:Bb,clipping_planes_fragment:zb,clipping_planes_pars_fragment:kb,clipping_planes_pars_vertex:Vb,clipping_planes_vertex:Hb,color_fragment:Gb,color_pars_fragment:Wb,color_pars_vertex:Xb,color_vertex:Yb,common:qb,cube_uv_reflection_fragment:$b,defaultnormal_vertex:jb,displacementmap_pars_vertex:Kb,displacementmap_vertex:Zb,emissivemap_fragment:Jb,emissivemap_pars_fragment:Qb,colorspace_fragment:eE,colorspace_pars_fragment:tE,envmap_fragment:nE,envmap_common_pars_fragment:iE,envmap_pars_fragment:rE,envmap_pars_vertex:sE,envmap_physical_pars_fragment:_E,envmap_vertex:aE,fog_vertex:oE,fog_pars_vertex:lE,fog_fragment:cE,fog_pars_fragment:uE,gradientmap_pars_fragment:fE,lightmap_pars_fragment:hE,lights_lambert_fragment:dE,lights_lambert_pars_fragment:pE,lights_pars_begin:mE,lights_toon_fragment:gE,lights_toon_pars_fragment:vE,lights_phong_fragment:xE,lights_phong_pars_fragment:SE,lights_physical_fragment:ME,lights_physical_pars_fragment:yE,lights_fragment_begin:bE,lights_fragment_maps:EE,lights_fragment_end:TE,logdepthbuf_fragment:wE,logdepthbuf_pars_fragment:AE,logdepthbuf_pars_vertex:CE,logdepthbuf_vertex:RE,map_fragment:PE,map_pars_fragment:DE,map_particle_fragment:LE,map_particle_pars_fragment:IE,metalnessmap_fragment:UE,metalnessmap_pars_fragment:FE,morphinstance_vertex:NE,morphcolor_vertex:OE,morphnormal_vertex:BE,morphtarget_pars_vertex:zE,morphtarget_vertex:kE,normal_fragment_begin:VE,normal_fragment_maps:HE,normal_pars_fragment:GE,normal_pars_vertex:WE,normal_vertex:XE,normalmap_pars_fragment:YE,clearcoat_normal_fragment_begin:qE,clearcoat_normal_fragment_maps:$E,clearcoat_pars_fragment:jE,iridescence_pars_fragment:KE,opaque_fragment:ZE,packing:JE,premultiplied_alpha_fragment:QE,project_vertex:eT,dithering_fragment:tT,dithering_pars_fragment:nT,roughnessmap_fragment:iT,roughnessmap_pars_fragment:rT,shadowmap_pars_fragment:sT,shadowmap_pars_vertex:aT,shadowmap_vertex:oT,shadowmask_pars_fragment:lT,skinbase_vertex:cT,skinning_pars_vertex:uT,skinning_vertex:fT,skinnormal_vertex:hT,specularmap_fragment:dT,specularmap_pars_fragment:pT,tonemapping_fragment:mT,tonemapping_pars_fragment:_T,transmission_fragment:gT,transmission_pars_fragment:vT,uv_pars_fragment:xT,uv_pars_vertex:ST,uv_vertex:MT,worldpos_vertex:yT,background_vert:bT,background_frag:ET,backgroundCube_vert:TT,backgroundCube_frag:wT,cube_vert:AT,cube_frag:CT,depth_vert:RT,depth_frag:PT,distance_vert:DT,distance_frag:LT,equirect_vert:IT,equirect_frag:UT,linedashed_vert:FT,linedashed_frag:NT,meshbasic_vert:OT,meshbasic_frag:BT,meshlambert_vert:zT,meshlambert_frag:kT,meshmatcap_vert:VT,meshmatcap_frag:HT,meshnormal_vert:GT,meshnormal_frag:WT,meshphong_vert:XT,meshphong_frag:YT,meshphysical_vert:qT,meshphysical_frag:$T,meshtoon_vert:jT,meshtoon_frag:KT,points_vert:ZT,points_frag:JT,shadow_vert:QT,shadow_frag:ew,sprite_vert:tw,sprite_frag:nw},De={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},ir={basic:{uniforms:kn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:kn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new mt(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:kn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:kn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:kn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new mt(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:kn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:kn([De.points,De.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:kn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:kn([De.common,De.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:kn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:kn([De.sprite,De.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:kn([De.common,De.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:kn([De.lights,De.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};ir.physical={uniforms:kn([ir.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const xc={r:0,b:0,g:0},Ns=new vr,iw=new kt;function rw(i,e,t,n,r,s,a){const o=new mt(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const b=g(y);b===null?p(o,l):b&&b.isColor&&(p(b,1),v=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,v){const b=g(v);b&&(b.isCubeTexture||b.mapping===Au)?(u===void 0&&(u=new Wi(new Il(1,1,1),new xr({name:"BackgroundCubeMaterial",uniforms:ho(ir.backgroundCube.uniforms),vertexShader:ir.backgroundCube.vertexShader,fragmentShader:ir.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ns.copy(v.backgroundRotation),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(iw.makeRotationFromEuler(Ns)),u.material.toneMapped=_t.getTransfer(b.colorSpace)!==Tt,(f!==b||h!==b.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=b,h=b.version,d=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Wi(new Pu(2,2),new xr({name:"BackgroundMaterial",uniforms:ho(ir.background.uniforms),vertexShader:ir.background.vertexShader,fragmentShader:ir.background.fragmentShader,side:bs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=_t.getTransfer(b.colorSpace)!==Tt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||h!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=b,h=b.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,v){y.getRGB(xc,Ov(i)),n.buffers.color.setClear(xc.r,xc.g,xc.b,v,a)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:_,addToRenderList:m,dispose:M}}function sw(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(E,F,z,H,Z){let K=!1;const k=f(H,z,F);s!==k&&(s=k,c(s.object)),K=d(E,H,z,Z),K&&g(E,H,z,Z),Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,v(E,F,z,H),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function u(E){return i.deleteVertexArray(E)}function f(E,F,z){const H=z.wireframe===!0;let Z=n[E.id];Z===void 0&&(Z={},n[E.id]=Z);let K=Z[F.id];K===void 0&&(K={},Z[F.id]=K);let k=K[H];return k===void 0&&(k=h(l()),K[H]=k),k}function h(E){const F=[],z=[],H=[];for(let Z=0;Z<t;Z++)F[Z]=0,z[Z]=0,H[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:H,object:E,attributes:{},index:null}}function d(E,F,z,H){const Z=s.attributes,K=F.attributes;let k=0;const B=z.getAttributes();for(const X in B)if(B[X].location>=0){const U=Z[X];let fe=K[X];if(fe===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(fe=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(fe=E.instanceColor)),U===void 0||U.attribute!==fe||fe&&U.data!==fe.data)return!0;k++}return s.attributesNum!==k||s.index!==H}function g(E,F,z,H){const Z={},K=F.attributes;let k=0;const B=z.getAttributes();for(const X in B)if(B[X].location>=0){let U=K[X];U===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(U=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(U=E.instanceColor));const fe={};fe.attribute=U,U&&U.data&&(fe.data=U.data),Z[X]=fe,k++}s.attributes=Z,s.attributesNum=k,s.index=H}function _(){const E=s.newAttributes;for(let F=0,z=E.length;F<z;F++)E[F]=0}function m(E){p(E,0)}function p(E,F){const z=s.newAttributes,H=s.enabledAttributes,Z=s.attributeDivisors;z[E]=1,H[E]===0&&(i.enableVertexAttribArray(E),H[E]=1),Z[E]!==F&&(i.vertexAttribDivisor(E,F),Z[E]=F)}function M(){const E=s.newAttributes,F=s.enabledAttributes;for(let z=0,H=F.length;z<H;z++)F[z]!==E[z]&&(i.disableVertexAttribArray(z),F[z]=0)}function y(E,F,z,H,Z,K,k){k===!0?i.vertexAttribIPointer(E,F,z,Z,K):i.vertexAttribPointer(E,F,z,H,Z,K)}function v(E,F,z,H){_();const Z=H.attributes,K=z.getAttributes(),k=F.defaultAttributeValues;for(const B in K){const X=K[B];if(X.location>=0){let ce=Z[B];if(ce===void 0&&(B==="instanceMatrix"&&E.instanceMatrix&&(ce=E.instanceMatrix),B==="instanceColor"&&E.instanceColor&&(ce=E.instanceColor)),ce!==void 0){const U=ce.normalized,fe=ce.itemSize,Le=e.get(ce);if(Le===void 0)continue;const ze=Le.buffer,He=Le.type,je=Le.bytesPerElement,ne=He===i.INT||He===i.UNSIGNED_INT||ce.gpuType===pp;if(ce.isInterleavedBufferAttribute){const re=ce.data,Me=re.stride,Oe=ce.offset;if(re.isInstancedInterleavedBuffer){for(let Ae=0;Ae<X.locationSize;Ae++)p(X.location+Ae,re.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ae=0;Ae<X.locationSize;Ae++)m(X.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let Ae=0;Ae<X.locationSize;Ae++)y(X.location+Ae,fe/X.locationSize,He,U,Me*je,(Oe+fe/X.locationSize*Ae)*je,ne)}else{if(ce.isInstancedBufferAttribute){for(let re=0;re<X.locationSize;re++)p(X.location+re,ce.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let re=0;re<X.locationSize;re++)m(X.location+re);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let re=0;re<X.locationSize;re++)y(X.location+re,fe/X.locationSize,He,U,fe*je,fe/X.locationSize*re*je,ne)}}else if(k!==void 0){const U=k[B];if(U!==void 0)switch(U.length){case 2:i.vertexAttrib2fv(X.location,U);break;case 3:i.vertexAttrib3fv(X.location,U);break;case 4:i.vertexAttrib4fv(X.location,U);break;default:i.vertexAttrib1fv(X.location,U)}}}}M()}function b(){P();for(const E in n){const F=n[E];for(const z in F){const H=F[z];for(const Z in H)u(H[Z].object),delete H[Z];delete F[z]}delete n[E]}}function w(E){if(n[E.id]===void 0)return;const F=n[E.id];for(const z in F){const H=F[z];for(const Z in H)u(H[Z].object),delete H[Z];delete F[z]}delete n[E.id]}function T(E){for(const F in n){const z=n[F];if(z[E.id]===void 0)continue;const H=z[E.id];for(const Z in H)u(H[Z].object),delete H[Z];delete z[E.id]}}function P(){S(),a=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function aw(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ow(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==ji&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const P=T===Xr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==bi&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==cr&&!P)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:v,maxSamples:b,samples:w}}function lw(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new is,o=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:n,y=M*4;let v=p.clippingState||null;l.value=v,v=u(g,h,y,d);for(let b=0;b!==y;++b)v[b]=t[b];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=d;y!==_;++y,v+=4)a.copy(f[y]).applyMatrix4(M,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function cw(i){let e=new WeakMap;function t(a,o){return o===Ih?a.mapping=oa:o===Uh&&(a.mapping=co),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ih||o===Uh)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new kv(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const fs=4,x_=[.125,.215,.35,.446,.526,.582],Gs=20,uw=256,Do=new Dp,S_=new mt;let Nf=null,Of=0,Bf=0,zf=!1;const fw=new W;class M_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=fw}=s;Nf=this._renderer.getRenderTarget(),Of=this._renderer.getActiveCubeFace(),Bf=this._renderer.getActiveMipmapLevel(),zf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=E_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=b_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nf,Of,Bf),this._renderer.xr.enabled=zf,e.scissorTest=!1,Ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===oa||e.mapping===co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nf=this._renderer.getRenderTarget(),Of=this._renderer.getActiveCubeFace(),Bf=this._renderer.getActiveMipmapLevel(),zf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Xr,format:ji,colorSpace:fo,depthBuffer:!1},r=y_(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=y_(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=hw(s)),this._blurMaterial=pw(s,e,t),this._ggxMaterial=dw(s,e,t)}return r}_compileMaterial(e){const t=new Wi(new ci,e);this._renderer.compile(t,Do)}_sceneToCubeUV(e,t,n,r,s){const l=new Si(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(S_),f.toneMapping=dr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wi(new Il,new Uv({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(S_),p=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const b=this._cubeSize;Ia(r,v*b,y>2?b:0,b,b),f.setRenderTarget(r),p&&f.render(_,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===oa||e.mapping===co;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=E_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=b_());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ia(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Do)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,d=f*h,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-fs?n-g+fs:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,Ia(s,m,p,3*_,2*_),r.setRenderTarget(s),r.render(o,Do),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Ia(e,m,p,3*_,2*_),r.setRenderTarget(e),r.render(o,Do)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&pt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Gs-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Gs;m>Gs&&Qe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gs}`);const p=[];let M=0;for(let T=0;T<Gs;++T){const P=T/_,S=Math.exp(-P*P/2);p.push(S),T===0?M+=S:T<m&&(M+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/M;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-n;const v=this._sizeLods[r],b=3*v*(r>y-fs?r-y+fs:0),w=4*(this._cubeSize-v);Ia(t,b,w,3*v,2*v),l.setRenderTarget(t),l.render(f,Do)}}function hw(i){const e=[],t=[],n=[];let r=i;const s=i-fs+1+x_.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-fs?l=x_[a-i+fs-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*d),y=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let w=0;w<d;w++){const T=w%3*2/3-1,P=w>2?0:-1,S=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];M.set(S,_*g*w),y.set(h,m*g*w);const E=[w,w,w,w,w,w];v.set(E,p*g*w)}const b=new ci;b.setAttribute("position",new Gi(M,_)),b.setAttribute("uv",new Gi(y,m)),b.setAttribute("faceIndex",new Gi(v,p)),n.push(new Wi(b,null)),r>fs&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function y_(i,e,t){const n=new pr(i,e,t);return n.texture.mapping=Au,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ia(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function dw(i,e,t){return new xr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:uw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Du(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Br,depthTest:!1,depthWrite:!1})}function pw(i,e,t){const n=new Float32Array(Gs),r=new W(0,1,0);return new xr({name:"SphericalGaussianBlur",defines:{n:Gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Br,depthTest:!1,depthWrite:!1})}function b_(){return new xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Br,depthTest:!1,depthWrite:!1})}function E_(){return new xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Br,depthTest:!1,depthWrite:!1})}function Du(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mw(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ih||l===Uh,u=l===oa||l===co;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new M_(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new M_(i)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function _w(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Tl("WebGLRenderer: "+n+" extension not supported."),r}}}function gw(i,e,t,n){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],i.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let y=0,v=M.length;y<v;y+=3){const b=M[y+0],w=M[y+1],T=M[y+2];h.push(b,w,w,T,T,b)}}else if(g!==void 0){const M=g.array;_=g.version;for(let y=0,v=M.length/3-1;y<v;y+=3){const b=y+0,w=y+1,T=y+2;h.push(b,w,w,T,T,b)}}else return;const m=new(Dv(h)?Nv:Fv)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function vw(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){i.drawElements(n,d,s,h*a),t.update(d,n,1)}function c(h,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,h*a,g),t.update(d,n,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function f(h,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M]*_[M];t.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function xw(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:pt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Sw(i,e,t){const n=new WeakMap,r=new qt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let E=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",E)};var d=E;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let b=o.attributes.position.count*v,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const T=new Float32Array(b*w*4*f),P=new Lv(T,b,w,f);P.type=cr,P.needsUpdate=!0;const S=v*4;for(let F=0;F<f;F++){const z=p[F],H=M[F],Z=y[F],K=b*w*4*F;for(let k=0;k<z.count;k++){const B=k*S;g===!0&&(r.fromBufferAttribute(z,k),T[K+B+0]=r.x,T[K+B+1]=r.y,T[K+B+2]=r.z,T[K+B+3]=0),_===!0&&(r.fromBufferAttribute(H,k),T[K+B+4]=r.x,T[K+B+5]=r.y,T[K+B+6]=r.z,T[K+B+7]=0),m===!0&&(r.fromBufferAttribute(Z,k),T[K+B+8]=r.x,T[K+B+9]=r.y,T[K+B+10]=r.z,T[K+B+11]=Z.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new tt(b,w)},n.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function Mw(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const yw={[mv]:"LINEAR_TONE_MAPPING",[_v]:"REINHARD_TONE_MAPPING",[gv]:"CINEON_TONE_MAPPING",[vv]:"ACES_FILMIC_TONE_MAPPING",[Sv]:"AGX_TONE_MAPPING",[Mv]:"NEUTRAL_TONE_MAPPING",[xv]:"CUSTOM_TONE_MAPPING"};function bw(i,e,t,n,r){const s=new pr(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),a=new pr(e,t,{type:Xr,depthBuffer:!1,stencilBuffer:!1}),o=new ci;o.setAttribute("position",new jn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new jn([0,2,0,0,2,0],2));const l=new db({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Wi(o,l),u=new Dp(-1,1,1,-1,0,1);let f=null,h=null,d=!1,g,_=null,m=[],p=!1;this.setSize=function(M,y){s.setSize(M,y),a.setSize(M,y);for(let v=0;v<m.length;v++){const b=m[v];b.setSize&&b.setSize(M,y)}},this.setEffects=function(M){m=M,p=m.length>0&&m[0].isRenderPass===!0;const y=s.width,v=s.height;for(let b=0;b<m.length;b++){const w=m[b];w.setSize&&w.setSize(y,v)}},this.begin=function(M,y){if(d||M.toneMapping===dr&&m.length===0)return!1;if(_=y,y!==null){const v=y.width,b=y.height;(s.width!==v||s.height!==b)&&this.setSize(v,b)}return p===!1&&M.setRenderTarget(s),g=M.toneMapping,M.toneMapping=dr,!0},this.hasRenderPass=function(){return p},this.end=function(M,y){M.toneMapping=g,d=!0;let v=s,b=a;for(let w=0;w<m.length;w++){const T=m[w];if(T.enabled!==!1&&(T.render(M,b,v,y),T.needsSwap!==!1)){const P=v;v=b,b=P}}if(f!==M.outputColorSpace||h!==M.toneMapping){f=M.outputColorSpace,h=M.toneMapping,l.defines={},_t.getTransfer(f)===Tt&&(l.defines.SRGB_TRANSFER="");const w=yw[h];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=v.texture,M.setRenderTarget(_),M.render(c,u),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const qv=new Un,xd=new wl(1,1),$v=new Lv,jv=new z1,Kv=new zv,T_=[],w_=[],A_=new Float32Array(16),C_=new Float32Array(9),R_=new Float32Array(4);function _o(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=T_[r];if(s===void 0&&(s=new Float32Array(r),T_[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function cn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function un(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Lu(i,e){let t=w_[e];t===void 0&&(t=new Int32Array(e),w_[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ew(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Tw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2fv(this.addr,e),un(t,e)}}function ww(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;i.uniform3fv(this.addr,e),un(t,e)}}function Aw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4fv(this.addr,e),un(t,e)}}function Cw(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(cn(t,n))return;R_.set(n),i.uniformMatrix2fv(this.addr,!1,R_),un(t,n)}}function Rw(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(cn(t,n))return;C_.set(n),i.uniformMatrix3fv(this.addr,!1,C_),un(t,n)}}function Pw(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(cn(t,n))return;A_.set(n),i.uniformMatrix4fv(this.addr,!1,A_),un(t,n)}}function Dw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Lw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2iv(this.addr,e),un(t,e)}}function Iw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;i.uniform3iv(this.addr,e),un(t,e)}}function Uw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4iv(this.addr,e),un(t,e)}}function Fw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Nw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2uiv(this.addr,e),un(t,e)}}function Ow(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;i.uniform3uiv(this.addr,e),un(t,e)}}function Bw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4uiv(this.addr,e),un(t,e)}}function zw(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(xd.compareFunction=t.isReversedDepthBuffer()?Mp:Sp,s=xd):s=qv,t.setTexture2D(e||s,r)}function kw(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||jv,r)}function Vw(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Kv,r)}function Hw(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||$v,r)}function Gw(i){switch(i){case 5126:return Ew;case 35664:return Tw;case 35665:return ww;case 35666:return Aw;case 35674:return Cw;case 35675:return Rw;case 35676:return Pw;case 5124:case 35670:return Dw;case 35667:case 35671:return Lw;case 35668:case 35672:return Iw;case 35669:case 35673:return Uw;case 5125:return Fw;case 36294:return Nw;case 36295:return Ow;case 36296:return Bw;case 35678:case 36198:case 36298:case 36306:case 35682:return zw;case 35679:case 36299:case 36307:return kw;case 35680:case 36300:case 36308:case 36293:return Vw;case 36289:case 36303:case 36311:case 36292:return Hw}}function Ww(i,e){i.uniform1fv(this.addr,e)}function Xw(i,e){const t=_o(e,this.size,2);i.uniform2fv(this.addr,t)}function Yw(i,e){const t=_o(e,this.size,3);i.uniform3fv(this.addr,t)}function qw(i,e){const t=_o(e,this.size,4);i.uniform4fv(this.addr,t)}function $w(i,e){const t=_o(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function jw(i,e){const t=_o(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Kw(i,e){const t=_o(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Zw(i,e){i.uniform1iv(this.addr,e)}function Jw(i,e){i.uniform2iv(this.addr,e)}function Qw(i,e){i.uniform3iv(this.addr,e)}function eA(i,e){i.uniform4iv(this.addr,e)}function tA(i,e){i.uniform1uiv(this.addr,e)}function nA(i,e){i.uniform2uiv(this.addr,e)}function iA(i,e){i.uniform3uiv(this.addr,e)}function rA(i,e){i.uniform4uiv(this.addr,e)}function sA(i,e,t){const n=this.cache,r=e.length,s=Lu(t,r);cn(n,s)||(i.uniform1iv(this.addr,s),un(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=xd:a=qv;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function aA(i,e,t){const n=this.cache,r=e.length,s=Lu(t,r);cn(n,s)||(i.uniform1iv(this.addr,s),un(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||jv,s[a])}function oA(i,e,t){const n=this.cache,r=e.length,s=Lu(t,r);cn(n,s)||(i.uniform1iv(this.addr,s),un(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Kv,s[a])}function lA(i,e,t){const n=this.cache,r=e.length,s=Lu(t,r);cn(n,s)||(i.uniform1iv(this.addr,s),un(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||$v,s[a])}function cA(i){switch(i){case 5126:return Ww;case 35664:return Xw;case 35665:return Yw;case 35666:return qw;case 35674:return $w;case 35675:return jw;case 35676:return Kw;case 5124:case 35670:return Zw;case 35667:case 35671:return Jw;case 35668:case 35672:return Qw;case 35669:case 35673:return eA;case 5125:return tA;case 36294:return nA;case 36295:return iA;case 36296:return rA;case 35678:case 36198:case 36298:case 36306:case 35682:return sA;case 35679:case 36299:case 36307:return aA;case 35680:case 36300:case 36308:case 36293:return oA;case 36289:case 36303:case 36311:case 36292:return lA}}class uA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gw(t.type)}}class fA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cA(t.type)}}class hA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const kf=/(\w+)(\])?(\[|\.)?/g;function P_(i,e){i.seq.push(e),i.map[e.id]=e}function dA(i,e,t){const n=i.name,r=n.length;for(kf.lastIndex=0;;){const s=kf.exec(n),a=kf.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){P_(t,c===void 0?new uA(o,i,e):new fA(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new hA(o),P_(t,f)),t=f}}}class kc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);dA(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function D_(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const pA=37297;let mA=0;function _A(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const L_=new it;function gA(i){_t._getMatrix(L_,_t.workingColorSpace,i);const e=`mat3( ${L_.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(i)){case lu:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function I_(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+_A(i.getShaderSource(e),o)}else return s}function vA(i,e){const t=gA(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const xA={[mv]:"Linear",[_v]:"Reinhard",[gv]:"Cineon",[vv]:"ACESFilmic",[Sv]:"AgX",[Mv]:"Neutral",[xv]:"Custom"};function SA(i,e){const t=xA[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sc=new W;function MA(){_t.getLuminanceCoefficients(Sc);const i=Sc.x.toFixed(4),e=Sc.y.toFixed(4),t=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yA(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function bA(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function EA(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Go(i){return i!==""}function U_(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function F_(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sd(i){return i.replace(TA,AA)}const wA=new Map;function AA(i,e){let t=rt[e];if(t===void 0){const n=wA.get(e);if(n!==void 0)t=rt[n],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Sd(t)}const CA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function N_(i){return i.replace(CA,RA)}function RA(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function O_(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const PA={[Fc]:"SHADOWMAP_TYPE_PCF",[Vo]:"SHADOWMAP_TYPE_VSM"};function DA(i){return PA[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const LA={[oa]:"ENVMAP_TYPE_CUBE",[co]:"ENVMAP_TYPE_CUBE",[Au]:"ENVMAP_TYPE_CUBE_UV"};function IA(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":LA[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const UA={[co]:"ENVMAP_MODE_REFRACTION"};function FA(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":UA[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const NA={[pv]:"ENVMAP_BLENDING_MULTIPLY",[S1]:"ENVMAP_BLENDING_MIX",[M1]:"ENVMAP_BLENDING_ADD"};function OA(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":NA[i.combine]||"ENVMAP_BLENDING_NONE"}function BA(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function zA(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=DA(t),c=IA(t),u=FA(t),f=OA(t),h=BA(t),d=yA(t),g=bA(s),_=r.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Go).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Go).join(`
`),p.length>0&&(p+=`
`)):(m=[O_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),p=[O_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==dr?"#define TONE_MAPPING":"",t.toneMapping!==dr?rt.tonemapping_pars_fragment:"",t.toneMapping!==dr?SA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,vA("linearToOutputTexel",t.outputColorSpace),MA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Go).join(`
`)),a=Sd(a),a=U_(a,t),a=F_(a,t),o=Sd(o),o=U_(o,t),o=F_(o,t),a=N_(a),o=N_(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Xm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=M+m+a,v=M+p+o,b=D_(r,r.VERTEX_SHADER,y),w=D_(r,r.FRAGMENT_SHADER,v);r.attachShader(_,b),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(F){if(i.debug.checkShaderErrors){const z=r.getProgramInfoLog(_)||"",H=r.getShaderInfoLog(b)||"",Z=r.getShaderInfoLog(w)||"",K=z.trim(),k=H.trim(),B=Z.trim();let X=!0,ce=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,b,w);else{const U=I_(r,b,"vertex"),fe=I_(r,w,"fragment");pt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+K+`
`+U+`
`+fe)}else K!==""?Qe("WebGLProgram: Program Info Log:",K):(k===""||B==="")&&(ce=!1);ce&&(F.diagnostics={runnable:X,programLog:K,vertexShader:{log:k,prefix:m},fragmentShader:{log:B,prefix:p}})}r.deleteShader(b),r.deleteShader(w),P=new kc(r,_),S=EA(r,_)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(_,pA)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mA++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=w,this}let kA=0;class VA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new HA(e),t.set(e,n)),n}}class HA{constructor(e){this.id=kA++,this.code=e,this.usedTimes=0}}function GA(i,e,t,n,r,s,a){const o=new Ep,l=new VA,c=new Set,u=[],f=new Map,h=r.logarithmicDepthBuffer;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,E,F,z,H){const Z=z.fog,K=H.geometry,k=S.isMeshStandardMaterial?z.environment:null,B=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),X=B&&B.mapping===Au?B.image.height:null,ce=g[S.type];S.precision!==null&&(d=r.getMaxPrecision(S.precision),d!==S.precision&&Qe("WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const U=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,fe=U!==void 0?U.length:0;let Le=0;K.morphAttributes.position!==void 0&&(Le=1),K.morphAttributes.normal!==void 0&&(Le=2),K.morphAttributes.color!==void 0&&(Le=3);let ze,He,je,ne;if(ce){const Ie=ir[ce];ze=Ie.vertexShader,He=Ie.fragmentShader}else ze=S.vertexShader,He=S.fragmentShader,l.update(S),je=l.getVertexShaderID(S),ne=l.getFragmentShaderID(S);const re=i.getRenderTarget(),Me=i.state.buffers.depth.getReversed(),Oe=H.isInstancedMesh===!0,Ae=H.isBatchedMesh===!0,We=!!S.map,D=!!S.matcap,L=!!B,G=!!S.aoMap,ie=!!S.lightMap,j=!!S.bumpMap,I=!!S.normalMap,R=!!S.displacementMap,ue=!!S.emissiveMap,se=!!S.metalnessMap,te=!!S.roughnessMap,ae=S.anisotropy>0,C=S.clearcoat>0,x=S.dispersion>0,N=S.iridescence>0,$=S.sheen>0,J=S.transmission>0,Y=ae&&!!S.anisotropyMap,xe=C&&!!S.clearcoatMap,de=C&&!!S.clearcoatNormalMap,Ce=C&&!!S.clearcoatRoughnessMap,Te=N&&!!S.iridescenceMap,pe=N&&!!S.iridescenceThicknessMap,_e=$&&!!S.sheenColorMap,ye=$&&!!S.sheenRoughnessMap,Re=!!S.specularMap,ge=!!S.specularColorMap,qe=!!S.specularIntensityMap,O=J&&!!S.transmissionMap,be=J&&!!S.thicknessMap,me=!!S.gradientMap,Ee=!!S.alphaMap,he=S.alphaTest>0,oe=!!S.alphaHash,Se=!!S.extensions;let Ge=dr;S.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Ge=i.toneMapping);const gt={shaderID:ce,shaderType:S.type,shaderName:S.name,vertexShader:ze,fragmentShader:He,defines:S.defines,customVertexShaderID:je,customFragmentShaderID:ne,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Ae,batchingColor:Ae&&H._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&H.instanceColor!==null,instancingMorph:Oe&&H.morphTexture!==null,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:fo,alphaToCoverage:!!S.alphaToCoverage,map:We,matcap:D,envMap:L,envMapMode:L&&B.mapping,envMapCubeUVHeight:X,aoMap:G,lightMap:ie,bumpMap:j,normalMap:I,displacementMap:R,emissiveMap:ue,normalMapObjectSpace:I&&S.normalMapType===E1,normalMapTangentSpace:I&&S.normalMapType===Pv,metalnessMap:se,roughnessMap:te,anisotropy:ae,anisotropyMap:Y,clearcoat:C,clearcoatMap:xe,clearcoatNormalMap:de,clearcoatRoughnessMap:Ce,dispersion:x,iridescence:N,iridescenceMap:Te,iridescenceThicknessMap:pe,sheen:$,sheenColorMap:_e,sheenRoughnessMap:ye,specularMap:Re,specularColorMap:ge,specularIntensityMap:qe,transmission:J,transmissionMap:O,thicknessMap:be,gradientMap:me,opaque:S.transparent===!1&&S.blending===Ja&&S.alphaToCoverage===!1,alphaMap:Ee,alphaTest:he,alphaHash:oe,combine:S.combine,mapUv:We&&_(S.map.channel),aoMapUv:G&&_(S.aoMap.channel),lightMapUv:ie&&_(S.lightMap.channel),bumpMapUv:j&&_(S.bumpMap.channel),normalMapUv:I&&_(S.normalMap.channel),displacementMapUv:R&&_(S.displacementMap.channel),emissiveMapUv:ue&&_(S.emissiveMap.channel),metalnessMapUv:se&&_(S.metalnessMap.channel),roughnessMapUv:te&&_(S.roughnessMap.channel),anisotropyMapUv:Y&&_(S.anisotropyMap.channel),clearcoatMapUv:xe&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:de&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:ye&&_(S.sheenRoughnessMap.channel),specularMapUv:Re&&_(S.specularMap.channel),specularColorMapUv:ge&&_(S.specularColorMap.channel),specularIntensityMapUv:qe&&_(S.specularIntensityMap.channel),transmissionMapUv:O&&_(S.transmissionMap.channel),thicknessMapUv:be&&_(S.thicknessMap.channel),alphaMapUv:Ee&&_(S.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(I||ae),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!K.attributes.uv&&(We||Ee),fog:!!Z,useFog:S.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Me,skinning:H.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Le,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ge,decodeVideoTexture:We&&S.map.isVideoTexture===!0&&_t.getTransfer(S.map.colorSpace)===Tt,decodeVideoTextureEmissive:ue&&S.emissiveMap.isVideoTexture===!0&&_t.getTransfer(S.emissiveMap.colorSpace)===Tt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Lr,flipSided:S.side===oi,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Se&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&S.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return gt.vertexUv1s=c.has(1),gt.vertexUv2s=c.has(2),gt.vertexUv3s=c.has(3),c.clear(),gt}function p(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const F in S.defines)E.push(F),E.push(S.defines[F]);return S.isRawShaderMaterial===!1&&(M(E,S),y(E,S),E.push(i.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function M(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function y(S,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),S.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const E=g[S.type];let F;if(E){const z=ir[E];F=J1.clone(z.uniforms)}else F=S.uniforms;return F}function b(S,E){let F=f.get(E);return F!==void 0?++F.usedTimes:(F=new zA(i,E,S,s),u.push(F),f.set(E,F)),F}function w(S){if(--S.usedTimes===0){const E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),f.delete(S.cacheKey),S.destroy()}}function T(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:b,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:P}}function WA(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function XA(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function B_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function z_(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f,h,d,g,_,m){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function o(f,h,d,g,_,m){const p=a(f,h,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=a(f,h,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||XA),n.length>1&&n.sort(h||B_),r.length>1&&r.sort(h||B_)}function u(){for(let f=e,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function YA(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new z_,i.set(n,[a])):r>=s.length?(a=new z_,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function qA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new mt};break;case"SpotLight":t={position:new W,direction:new W,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function $A(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let jA=0;function KA(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ZA(i){const e=new qA,t=$A(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);const r=new W,s=new kt,a=new kt;function o(c){let u=0,f=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,M=0,y=0,v=0,b=0,w=0,T=0;c.sort(KA);for(let S=0,E=c.length;S<E;S++){const F=c[S],z=F.color,H=F.intensity,Z=F.distance;let K=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===uo?K=F.shadow.map.texture:K=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)u+=z.r*H,f+=z.g*H,h+=z.b*H;else if(F.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(F.sh.coefficients[k],H);T++}else if(F.isDirectionalLight){const k=e.get(F);if(k.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const B=F.shadow,X=t.get(F);X.shadowIntensity=B.intensity,X.shadowBias=B.bias,X.shadowNormalBias=B.normalBias,X.shadowRadius=B.radius,X.shadowMapSize=B.mapSize,n.directionalShadow[d]=X,n.directionalShadowMap[d]=K,n.directionalShadowMatrix[d]=F.shadow.matrix,M++}n.directional[d]=k,d++}else if(F.isSpotLight){const k=e.get(F);k.position.setFromMatrixPosition(F.matrixWorld),k.color.copy(z).multiplyScalar(H),k.distance=Z,k.coneCos=Math.cos(F.angle),k.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),k.decay=F.decay,n.spot[_]=k;const B=F.shadow;if(F.map&&(n.spotLightMap[b]=F.map,b++,B.updateMatrices(F),F.castShadow&&w++),n.spotLightMatrix[_]=B.matrix,F.castShadow){const X=t.get(F);X.shadowIntensity=B.intensity,X.shadowBias=B.bias,X.shadowNormalBias=B.normalBias,X.shadowRadius=B.radius,X.shadowMapSize=B.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=K,v++}_++}else if(F.isRectAreaLight){const k=e.get(F);k.color.copy(z).multiplyScalar(H),k.halfWidth.set(F.width*.5,0,0),k.halfHeight.set(0,F.height*.5,0),n.rectArea[m]=k,m++}else if(F.isPointLight){const k=e.get(F);if(k.color.copy(F.color).multiplyScalar(F.intensity),k.distance=F.distance,k.decay=F.decay,F.castShadow){const B=F.shadow,X=t.get(F);X.shadowIntensity=B.intensity,X.shadowBias=B.bias,X.shadowNormalBias=B.normalBias,X.shadowRadius=B.radius,X.shadowMapSize=B.mapSize,X.shadowCameraNear=B.camera.near,X.shadowCameraFar=B.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=F.shadow.matrix,y++}n.point[g]=k,g++}else if(F.isHemisphereLight){const k=e.get(F);k.skyColor.copy(F.color).multiplyScalar(H),k.groundColor.copy(F.groundColor).multiplyScalar(H),n.hemi[p]=k,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const P=n.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==M||P.numPointShadows!==y||P.numSpotShadows!==v||P.numSpotMaps!==b||P.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+b-w,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,P.directionalLength=d,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=M,P.numPointShadows=y,P.numSpotShadows=v,P.numSpotMaps=b,P.numLightProbes=T,n.version=jA++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const y=c[p];if(y.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(y.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const v=n.point[h];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function k_(i){const e=new ZA(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function JA(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new k_(i),e.set(r,[o])):s>=a.length?(o=new k_(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const QA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,tC=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],nC=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],V_=new kt,Lo=new W,Vf=new W;function iC(i,e,t){let n=new wp;const r=new tt,s=new tt,a=new qt,o=new pb,l=new mb,c={},u=t.maxTextureSize,f={[bs]:oi,[oi]:bs,[Lr]:Lr},h=new xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:QA,fragmentShader:eC}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new ci;g.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Wi(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fc;let p=this.type;this.render=function(w,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===t1&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=Fc);const S=i.getRenderTarget(),E=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Br),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const H=p!==this.type;H&&T.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(K=>K.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,K=w.length;Z<K;Z++){const k=w[Z],B=k.shadow;if(B===void 0){Qe("WebGLShadowMap:",k,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const X=B.getFrameExtents();if(r.multiply(X),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/X.x),r.x=s.x*X.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/X.y),r.y=s.y*X.y,B.mapSize.y=s.y)),B.map===null||H===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Vo){if(k.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new pr(r.x,r.y,{format:uo,type:Xr,minFilter:Dn,magFilter:Dn,generateMipmaps:!1}),B.map.texture.name=k.name+".shadowMap",B.map.depthTexture=new wl(r.x,r.y,cr),B.map.depthTexture.name=k.name+".shadowMapDepth",B.map.depthTexture.format=Yr,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Mn,B.map.depthTexture.magFilter=Mn}else{k.isPointLight?(B.map=new kv(r.x),B.map.depthTexture=new hb(r.x,gr)):(B.map=new pr(r.x,r.y),B.map.depthTexture=new wl(r.x,r.y,gr)),B.map.depthTexture.name=k.name+".shadowMap",B.map.depthTexture.format=Yr;const U=i.state.buffers.depth.getReversed();this.type===Fc?(B.map.depthTexture.compareFunction=U?Mp:Sp,B.map.depthTexture.minFilter=Dn,B.map.depthTexture.magFilter=Dn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Mn,B.map.depthTexture.magFilter=Mn)}B.camera.updateProjectionMatrix()}const ce=B.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<ce;U++){if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,U),i.clear();else{U===0&&(i.setRenderTarget(B.map),i.clear());const fe=B.getViewport(U);a.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),z.viewport(a)}if(k.isPointLight){const fe=B.camera,Le=B.matrix,ze=k.distance||fe.far;ze!==fe.far&&(fe.far=ze,fe.updateProjectionMatrix()),Lo.setFromMatrixPosition(k.matrixWorld),fe.position.copy(Lo),Vf.copy(fe.position),Vf.add(tC[U]),fe.up.copy(nC[U]),fe.lookAt(Vf),fe.updateMatrixWorld(),Le.makeTranslation(-Lo.x,-Lo.y,-Lo.z),V_.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),B._frustum.setFromProjectionMatrix(V_,fe.coordinateSystem,fe.reversedDepth)}else B.updateMatrices(k);n=B.getFrustum(),v(T,P,B.camera,k,this.type)}B.isPointLightShadow!==!0&&this.type===Vo&&M(B,P),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,E,F)};function M(w,T){const P=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new pr(r.x,r.y,{format:uo,type:Xr})),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(T,null,P,h,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(T,null,P,d,_,null)}function y(w,T,P,S){let E=null;const F=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)E=F;else if(E=P.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const z=E.uuid,H=T.uuid;let Z=c[z];Z===void 0&&(Z={},c[z]=Z);let K=Z[H];K===void 0&&(K=E.clone(),Z[H]=K,T.addEventListener("dispose",b)),E=K}if(E.visible=T.visible,E.wireframe=T.wireframe,S===Vo?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:f[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const z=i.properties.get(E);z.light=P}return E}function v(w,T,P,S,E){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===Vo)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const H=e.update(w),Z=w.material;if(Array.isArray(Z)){const K=H.groups;for(let k=0,B=K.length;k<B;k++){const X=K[k],ce=Z[X.materialIndex];if(ce&&ce.visible){const U=y(w,ce,S,E);w.onBeforeShadow(i,w,T,P,H,U,X),i.renderBufferDirect(P,null,H,U,w,X),w.onAfterShadow(i,w,T,P,H,U,X)}}}else if(Z.visible){const K=y(w,Z,S,E);w.onBeforeShadow(i,w,T,P,H,K,null),i.renderBufferDirect(P,null,H,K,w,null),w.onAfterShadow(i,w,T,P,H,K,null)}}const z=w.children;for(let H=0,Z=z.length;H<Z;H++)v(z[H],T,P,S,E)}function b(w){w.target.removeEventListener("dispose",b);for(const P in c){const S=c[P],E=w.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}const rC={[wh]:Ah,[Ch]:Dh,[Rh]:Lh,[lo]:Ph,[Ah]:wh,[Dh]:Ch,[Lh]:Rh,[Ph]:lo};function sC(i,e){function t(){let O=!1;const be=new qt;let me=null;const Ee=new qt(0,0,0,0);return{setMask:function(he){me!==he&&!O&&(i.colorMask(he,he,he,he),me=he)},setLocked:function(he){O=he},setClear:function(he,oe,Se,Ge,gt){gt===!0&&(he*=Ge,oe*=Ge,Se*=Ge),be.set(he,oe,Se,Ge),Ee.equals(be)===!1&&(i.clearColor(he,oe,Se,Ge),Ee.copy(be))},reset:function(){O=!1,me=null,Ee.set(-1,0,0,0)}}}function n(){let O=!1,be=!1,me=null,Ee=null,he=null;return{setReversed:function(oe){if(be!==oe){const Se=e.get("EXT_clip_control");oe?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),be=oe;const Ge=he;he=null,this.setClear(Ge)}},getReversed:function(){return be},setTest:function(oe){oe?re(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(oe){me!==oe&&!O&&(i.depthMask(oe),me=oe)},setFunc:function(oe){if(be&&(oe=rC[oe]),Ee!==oe){switch(oe){case wh:i.depthFunc(i.NEVER);break;case Ah:i.depthFunc(i.ALWAYS);break;case Ch:i.depthFunc(i.LESS);break;case lo:i.depthFunc(i.LEQUAL);break;case Rh:i.depthFunc(i.EQUAL);break;case Ph:i.depthFunc(i.GEQUAL);break;case Dh:i.depthFunc(i.GREATER);break;case Lh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=oe}},setLocked:function(oe){O=oe},setClear:function(oe){he!==oe&&(be&&(oe=1-oe),i.clearDepth(oe),he=oe)},reset:function(){O=!1,me=null,Ee=null,he=null,be=!1}}}function r(){let O=!1,be=null,me=null,Ee=null,he=null,oe=null,Se=null,Ge=null,gt=null;return{setTest:function(Ie){O||(Ie?re(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(Ie){be!==Ie&&!O&&(i.stencilMask(Ie),be=Ie)},setFunc:function(Ie,Be,nt){(me!==Ie||Ee!==Be||he!==nt)&&(i.stencilFunc(Ie,Be,nt),me=Ie,Ee=Be,he=nt)},setOp:function(Ie,Be,nt){(oe!==Ie||Se!==Be||Ge!==nt)&&(i.stencilOp(Ie,Be,nt),oe=Ie,Se=Be,Ge=nt)},setLocked:function(Ie){O=Ie},setClear:function(Ie){gt!==Ie&&(i.clearStencil(Ie),gt=Ie)},reset:function(){O=!1,be=null,me=null,Ee=null,he=null,oe=null,Se=null,Ge=null,gt=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,y=null,v=null,b=null,w=null,T=new mt(0,0,0),P=0,S=!1,E=null,F=null,z=null,H=null,Z=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,B=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=B>=1):X.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=B>=2);let ce=null,U={};const fe=i.getParameter(i.SCISSOR_BOX),Le=i.getParameter(i.VIEWPORT),ze=new qt().fromArray(fe),He=new qt().fromArray(Le);function je(O,be,me,Ee){const he=new Uint8Array(4),oe=i.createTexture();i.bindTexture(O,oe),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Se=0;Se<me;Se++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(be,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(be+Se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return oe}const ne={};ne[i.TEXTURE_2D]=je(i.TEXTURE_2D,i.TEXTURE_2D,1),ne[i.TEXTURE_CUBE_MAP]=je(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[i.TEXTURE_2D_ARRAY]=je(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ne[i.TEXTURE_3D]=je(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(i.DEPTH_TEST),a.setFunc(lo),j(!1),I(Vm),re(i.CULL_FACE),G(Br);function re(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function Me(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function Oe(O,be){return f[O]!==be?(i.bindFramebuffer(O,be),f[O]=be,O===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=be),O===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=be),!0):!1}function Ae(O,be){let me=d,Ee=!1;if(O){me=h.get(be),me===void 0&&(me=[],h.set(be,me));const he=O.textures;if(me.length!==he.length||me[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,Se=he.length;oe<Se;oe++)me[oe]=i.COLOR_ATTACHMENT0+oe;me.length=he.length,Ee=!0}}else me[0]!==i.BACK&&(me[0]=i.BACK,Ee=!0);Ee&&i.drawBuffers(me)}function We(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const D={[Hs]:i.FUNC_ADD,[i1]:i.FUNC_SUBTRACT,[r1]:i.FUNC_REVERSE_SUBTRACT};D[s1]=i.MIN,D[a1]=i.MAX;const L={[o1]:i.ZERO,[l1]:i.ONE,[c1]:i.SRC_COLOR,[Eh]:i.SRC_ALPHA,[m1]:i.SRC_ALPHA_SATURATE,[d1]:i.DST_COLOR,[f1]:i.DST_ALPHA,[u1]:i.ONE_MINUS_SRC_COLOR,[Th]:i.ONE_MINUS_SRC_ALPHA,[p1]:i.ONE_MINUS_DST_COLOR,[h1]:i.ONE_MINUS_DST_ALPHA,[_1]:i.CONSTANT_COLOR,[g1]:i.ONE_MINUS_CONSTANT_COLOR,[v1]:i.CONSTANT_ALPHA,[x1]:i.ONE_MINUS_CONSTANT_ALPHA};function G(O,be,me,Ee,he,oe,Se,Ge,gt,Ie){if(O===Br){_===!0&&(Me(i.BLEND),_=!1);return}if(_===!1&&(re(i.BLEND),_=!0),O!==n1){if(O!==m||Ie!==S){if((p!==Hs||v!==Hs)&&(i.blendEquation(i.FUNC_ADD),p=Hs,v=Hs),Ie)switch(O){case Ja:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ou:i.blendFunc(i.ONE,i.ONE);break;case Hm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gm:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:pt("WebGLState: Invalid blending: ",O);break}else switch(O){case Ja:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ou:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Hm:pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gm:pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pt("WebGLState: Invalid blending: ",O);break}M=null,y=null,b=null,w=null,T.set(0,0,0),P=0,m=O,S=Ie}return}he=he||be,oe=oe||me,Se=Se||Ee,(be!==p||he!==v)&&(i.blendEquationSeparate(D[be],D[he]),p=be,v=he),(me!==M||Ee!==y||oe!==b||Se!==w)&&(i.blendFuncSeparate(L[me],L[Ee],L[oe],L[Se]),M=me,y=Ee,b=oe,w=Se),(Ge.equals(T)===!1||gt!==P)&&(i.blendColor(Ge.r,Ge.g,Ge.b,gt),T.copy(Ge),P=gt),m=O,S=!1}function ie(O,be){O.side===Lr?Me(i.CULL_FACE):re(i.CULL_FACE);let me=O.side===oi;be&&(me=!me),j(me),O.blending===Ja&&O.transparent===!1?G(Br):G(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const Ee=O.stencilWrite;o.setTest(Ee),Ee&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ue(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function j(O){E!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),E=O)}function I(O){O!==Qy?(re(i.CULL_FACE),O!==F&&(O===Vm?i.cullFace(i.BACK):O===e1?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),F=O}function R(O){O!==z&&(k&&i.lineWidth(O),z=O)}function ue(O,be,me){O?(re(i.POLYGON_OFFSET_FILL),(H!==be||Z!==me)&&(i.polygonOffset(be,me),H=be,Z=me)):Me(i.POLYGON_OFFSET_FILL)}function se(O){O?re(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function te(O){O===void 0&&(O=i.TEXTURE0+K-1),ce!==O&&(i.activeTexture(O),ce=O)}function ae(O,be,me){me===void 0&&(ce===null?me=i.TEXTURE0+K-1:me=ce);let Ee=U[me];Ee===void 0&&(Ee={type:void 0,texture:void 0},U[me]=Ee),(Ee.type!==O||Ee.texture!==be)&&(ce!==me&&(i.activeTexture(me),ce=me),i.bindTexture(O,be||ne[O]),Ee.type=O,Ee.texture=be)}function C(){const O=U[ce];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(O){pt("WebGLState:",O)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(O){pt("WebGLState:",O)}}function $(){try{i.texSubImage2D(...arguments)}catch(O){pt("WebGLState:",O)}}function J(){try{i.texSubImage3D(...arguments)}catch(O){pt("WebGLState:",O)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(O){pt("WebGLState:",O)}}function xe(){try{i.compressedTexSubImage3D(...arguments)}catch(O){pt("WebGLState:",O)}}function de(){try{i.texStorage2D(...arguments)}catch(O){pt("WebGLState:",O)}}function Ce(){try{i.texStorage3D(...arguments)}catch(O){pt("WebGLState:",O)}}function Te(){try{i.texImage2D(...arguments)}catch(O){pt("WebGLState:",O)}}function pe(){try{i.texImage3D(...arguments)}catch(O){pt("WebGLState:",O)}}function _e(O){ze.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),ze.copy(O))}function ye(O){He.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),He.copy(O))}function Re(O,be){let me=c.get(be);me===void 0&&(me=new WeakMap,c.set(be,me));let Ee=me.get(O);Ee===void 0&&(Ee=i.getUniformBlockIndex(be,O.name),me.set(O,Ee))}function ge(O,be){const Ee=c.get(be).get(O);l.get(be)!==Ee&&(i.uniformBlockBinding(be,Ee,O.__bindingPointIndex),l.set(be,Ee))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ce=null,U={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,y=null,v=null,b=null,w=null,T=new mt(0,0,0),P=0,S=!1,E=null,F=null,z=null,H=null,Z=null,ze.set(0,0,i.canvas.width,i.canvas.height),He.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:Me,bindFramebuffer:Oe,drawBuffers:Ae,useProgram:We,setBlending:G,setMaterial:ie,setFlipSided:j,setCullFace:I,setLineWidth:R,setPolygonOffset:ue,setScissorTest:se,activeTexture:te,bindTexture:ae,unbindTexture:C,compressedTexImage2D:x,compressedTexImage3D:N,texImage2D:Te,texImage3D:pe,updateUBOMapping:Re,uniformBlockBinding:ge,texStorage2D:de,texStorage3D:Ce,texSubImage2D:$,texSubImage3D:J,compressedTexSubImage2D:Y,compressedTexSubImage3D:xe,scissor:_e,viewport:ye,reset:qe}}function aC(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,x){return d?new OffscreenCanvas(C,x):uu("canvas")}function _(C,x,N){let $=1;const J=ae(C);if((J.width>N||J.height>N)&&($=N/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor($*J.width),xe=Math.floor($*J.height);f===void 0&&(f=g(Y,xe));const de=x?g(Y,xe):f;return de.width=Y,de.height=xe,de.getContext("2d").drawImage(C,0,0,Y,xe),Qe("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+xe+")."),de}else return"data"in C&&Qe("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(C,x,N,$,J=!1){if(C!==null){if(i[C]!==void 0)return i[C];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=x;if(x===i.RED&&(N===i.FLOAT&&(Y=i.R32F),N===i.HALF_FLOAT&&(Y=i.R16F),N===i.UNSIGNED_BYTE&&(Y=i.R8)),x===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.R8UI),N===i.UNSIGNED_SHORT&&(Y=i.R16UI),N===i.UNSIGNED_INT&&(Y=i.R32UI),N===i.BYTE&&(Y=i.R8I),N===i.SHORT&&(Y=i.R16I),N===i.INT&&(Y=i.R32I)),x===i.RG&&(N===i.FLOAT&&(Y=i.RG32F),N===i.HALF_FLOAT&&(Y=i.RG16F),N===i.UNSIGNED_BYTE&&(Y=i.RG8)),x===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RG8UI),N===i.UNSIGNED_SHORT&&(Y=i.RG16UI),N===i.UNSIGNED_INT&&(Y=i.RG32UI),N===i.BYTE&&(Y=i.RG8I),N===i.SHORT&&(Y=i.RG16I),N===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),N===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),N===i.UNSIGNED_INT&&(Y=i.RGB32UI),N===i.BYTE&&(Y=i.RGB8I),N===i.SHORT&&(Y=i.RGB16I),N===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),N===i.UNSIGNED_INT&&(Y=i.RGBA32UI),N===i.BYTE&&(Y=i.RGBA8I),N===i.SHORT&&(Y=i.RGBA16I),N===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&(N===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),x===i.RGBA){const xe=J?lu:_t.getTransfer($);N===i.FLOAT&&(Y=i.RGBA32F),N===i.HALF_FLOAT&&(Y=i.RGBA16F),N===i.UNSIGNED_BYTE&&(Y=xe===Tt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(C,x){let N;return C?x===null||x===gr||x===El?N=i.DEPTH24_STENCIL8:x===cr?N=i.DEPTH32F_STENCIL8:x===bl&&(N=i.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===gr||x===El?N=i.DEPTH_COMPONENT24:x===cr?N=i.DEPTH_COMPONENT32F:x===bl&&(N=i.DEPTH_COMPONENT16),N}function b(C,x){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Mn&&C.minFilter!==Dn?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function w(C){const x=C.target;x.removeEventListener("dispose",w),P(x),x.isVideoTexture&&u.delete(x)}function T(C){const x=C.target;x.removeEventListener("dispose",T),E(x)}function P(C){const x=n.get(C);if(x.__webglInit===void 0)return;const N=C.source,$=h.get(N);if($){const J=$[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(C),Object.keys($).length===0&&h.delete(N)}n.remove(C)}function S(C){const x=n.get(C);i.deleteTexture(x.__webglTexture);const N=C.source,$=h.get(N);delete $[x.__cacheKey],a.memory.textures--}function E(C){const x=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let J=0;J<x.__webglFramebuffer[$].length;J++)i.deleteFramebuffer(x.__webglFramebuffer[$][J]);else i.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)i.deleteFramebuffer(x.__webglFramebuffer[$]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=C.textures;for(let $=0,J=N.length;$<J;$++){const Y=n.get(N[$]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(N[$])}n.remove(C)}let F=0;function z(){F=0}function H(){const C=F;return C>=r.maxTextures&&Qe("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),F+=1,C}function Z(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function K(C,x){const N=n.get(C);if(C.isVideoTexture&&se(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&N.__version!==C.version){const $=C.image;if($===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(N,C,x);return}}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+x)}function k(C,x){const N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){ne(N,C,x);return}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+x)}function B(C,x){const N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){ne(N,C,x);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+x)}function X(C,x){const N=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&N.__version!==C.version){re(N,C,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+x)}const ce={[Fh]:i.REPEAT,[Ur]:i.CLAMP_TO_EDGE,[Nh]:i.MIRRORED_REPEAT},U={[Mn]:i.NEAREST,[y1]:i.NEAREST_MIPMAP_NEAREST,[Kl]:i.NEAREST_MIPMAP_LINEAR,[Dn]:i.LINEAR,[of]:i.LINEAR_MIPMAP_NEAREST,[Ys]:i.LINEAR_MIPMAP_LINEAR},fe={[T1]:i.NEVER,[P1]:i.ALWAYS,[w1]:i.LESS,[Sp]:i.LEQUAL,[A1]:i.EQUAL,[Mp]:i.GEQUAL,[C1]:i.GREATER,[R1]:i.NOTEQUAL};function Le(C,x){if(x.type===cr&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Dn||x.magFilter===of||x.magFilter===Kl||x.magFilter===Ys||x.minFilter===Dn||x.minFilter===of||x.minFilter===Kl||x.minFilter===Ys)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ce[x.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ce[x.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ce[x.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,U[x.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,U[x.minFilter]),x.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,fe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Mn||x.minFilter!==Kl&&x.minFilter!==Ys||x.type===cr&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ze(C,x){let N=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",w));const $=x.source;let J=h.get($);J===void 0&&(J={},h.set($,J));const Y=Z(x);if(Y!==C.__cacheKey){J[Y]===void 0&&(J[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),J[Y].usedTimes++;const xe=J[C.__cacheKey];xe!==void 0&&(J[C.__cacheKey].usedTimes--,xe.usedTimes===0&&S(x)),C.__cacheKey=Y,C.__webglTexture=J[Y].texture}return N}function He(C,x,N){return Math.floor(Math.floor(C/N)/x)}function je(C,x,N,$){const Y=C.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,N,$,x.data);else{Y.sort((pe,_e)=>pe.start-_e.start);let xe=0;for(let pe=1;pe<Y.length;pe++){const _e=Y[xe],ye=Y[pe],Re=_e.start+_e.count,ge=He(ye.start,x.width,4),qe=He(_e.start,x.width,4);ye.start<=Re+1&&ge===qe&&He(ye.start+ye.count-1,x.width,4)===ge?_e.count=Math.max(_e.count,ye.start+ye.count-_e.start):(++xe,Y[xe]=ye)}Y.length=xe+1;const de=i.getParameter(i.UNPACK_ROW_LENGTH),Ce=i.getParameter(i.UNPACK_SKIP_PIXELS),Te=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let pe=0,_e=Y.length;pe<_e;pe++){const ye=Y[pe],Re=Math.floor(ye.start/4),ge=Math.ceil(ye.count/4),qe=Re%x.width,O=Math.floor(Re/x.width),be=ge,me=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,qe,O,be,me,N,$,x.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,de),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ce),i.pixelStorei(i.UNPACK_SKIP_ROWS,Te)}}function ne(C,x,N){let $=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=i.TEXTURE_3D);const J=ze(C,x),Y=x.source;t.bindTexture($,C.__webglTexture,i.TEXTURE0+N);const xe=n.get(Y);if(Y.version!==xe.__version||J===!0){t.activeTexture(i.TEXTURE0+N);const de=_t.getPrimaries(_t.workingColorSpace),Ce=x.colorSpace===ss?null:_t.getPrimaries(x.colorSpace),Te=x.colorSpace===ss||de===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let pe=_(x.image,!1,r.maxTextureSize);pe=te(x,pe);const _e=s.convert(x.format,x.colorSpace),ye=s.convert(x.type);let Re=y(x.internalFormat,_e,ye,x.colorSpace,x.isVideoTexture);Le($,x);let ge;const qe=x.mipmaps,O=x.isVideoTexture!==!0,be=xe.__version===void 0||J===!0,me=Y.dataReady,Ee=b(x,pe);if(x.isDepthTexture)Re=v(x.format===qs,x.type),be&&(O?t.texStorage2D(i.TEXTURE_2D,1,Re,pe.width,pe.height):t.texImage2D(i.TEXTURE_2D,0,Re,pe.width,pe.height,0,_e,ye,null));else if(x.isDataTexture)if(qe.length>0){O&&be&&t.texStorage2D(i.TEXTURE_2D,Ee,Re,qe[0].width,qe[0].height);for(let he=0,oe=qe.length;he<oe;he++)ge=qe[he],O?me&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,ge.width,ge.height,_e,ye,ge.data):t.texImage2D(i.TEXTURE_2D,he,Re,ge.width,ge.height,0,_e,ye,ge.data);x.generateMipmaps=!1}else O?(be&&t.texStorage2D(i.TEXTURE_2D,Ee,Re,pe.width,pe.height),me&&je(x,pe,_e,ye)):t.texImage2D(i.TEXTURE_2D,0,Re,pe.width,pe.height,0,_e,ye,pe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){O&&be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Re,qe[0].width,qe[0].height,pe.depth);for(let he=0,oe=qe.length;he<oe;he++)if(ge=qe[he],x.format!==ji)if(_e!==null)if(O){if(me)if(x.layerUpdates.size>0){const Se=v_(ge.width,ge.height,x.format,x.type);for(const Ge of x.layerUpdates){const gt=ge.data.subarray(Ge*Se/ge.data.BYTES_PER_ELEMENT,(Ge+1)*Se/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,Ge,ge.width,ge.height,1,_e,gt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,ge.width,ge.height,pe.depth,_e,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,Re,ge.width,ge.height,pe.depth,0,ge.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?me&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,ge.width,ge.height,pe.depth,_e,ye,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,Re,ge.width,ge.height,pe.depth,0,_e,ye,ge.data)}else{O&&be&&t.texStorage2D(i.TEXTURE_2D,Ee,Re,qe[0].width,qe[0].height);for(let he=0,oe=qe.length;he<oe;he++)ge=qe[he],x.format!==ji?_e!==null?O?me&&t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,ge.width,ge.height,_e,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,he,Re,ge.width,ge.height,0,ge.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?me&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,ge.width,ge.height,_e,ye,ge.data):t.texImage2D(i.TEXTURE_2D,he,Re,ge.width,ge.height,0,_e,ye,ge.data)}else if(x.isDataArrayTexture)if(O){if(be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Re,pe.width,pe.height,pe.depth),me)if(x.layerUpdates.size>0){const he=v_(pe.width,pe.height,x.format,x.type);for(const oe of x.layerUpdates){const Se=pe.data.subarray(oe*he/pe.data.BYTES_PER_ELEMENT,(oe+1)*he/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,pe.width,pe.height,1,_e,ye,Se)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,_e,ye,pe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,pe.width,pe.height,pe.depth,0,_e,ye,pe.data);else if(x.isData3DTexture)O?(be&&t.texStorage3D(i.TEXTURE_3D,Ee,Re,pe.width,pe.height,pe.depth),me&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,_e,ye,pe.data)):t.texImage3D(i.TEXTURE_3D,0,Re,pe.width,pe.height,pe.depth,0,_e,ye,pe.data);else if(x.isFramebufferTexture){if(be)if(O)t.texStorage2D(i.TEXTURE_2D,Ee,Re,pe.width,pe.height);else{let he=pe.width,oe=pe.height;for(let Se=0;Se<Ee;Se++)t.texImage2D(i.TEXTURE_2D,Se,Re,he,oe,0,_e,ye,null),he>>=1,oe>>=1}}else if(qe.length>0){if(O&&be){const he=ae(qe[0]);t.texStorage2D(i.TEXTURE_2D,Ee,Re,he.width,he.height)}for(let he=0,oe=qe.length;he<oe;he++)ge=qe[he],O?me&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,_e,ye,ge):t.texImage2D(i.TEXTURE_2D,he,Re,_e,ye,ge);x.generateMipmaps=!1}else if(O){if(be){const he=ae(pe);t.texStorage2D(i.TEXTURE_2D,Ee,Re,he.width,he.height)}me&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,ye,pe)}else t.texImage2D(i.TEXTURE_2D,0,Re,_e,ye,pe);m(x)&&p($),xe.__version=Y.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function re(C,x,N){if(x.image.length!==6)return;const $=ze(C,x),J=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+N);const Y=n.get(J);if(J.version!==Y.__version||$===!0){t.activeTexture(i.TEXTURE0+N);const xe=_t.getPrimaries(_t.workingColorSpace),de=x.colorSpace===ss?null:_t.getPrimaries(x.colorSpace),Ce=x.colorSpace===ss||xe===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Te=x.isCompressedTexture||x.image[0].isCompressedTexture,pe=x.image[0]&&x.image[0].isDataTexture,_e=[];for(let oe=0;oe<6;oe++)!Te&&!pe?_e[oe]=_(x.image[oe],!0,r.maxCubemapSize):_e[oe]=pe?x.image[oe].image:x.image[oe],_e[oe]=te(x,_e[oe]);const ye=_e[0],Re=s.convert(x.format,x.colorSpace),ge=s.convert(x.type),qe=y(x.internalFormat,Re,ge,x.colorSpace),O=x.isVideoTexture!==!0,be=Y.__version===void 0||$===!0,me=J.dataReady;let Ee=b(x,ye);Le(i.TEXTURE_CUBE_MAP,x);let he;if(Te){O&&be&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,qe,ye.width,ye.height);for(let oe=0;oe<6;oe++){he=_e[oe].mipmaps;for(let Se=0;Se<he.length;Se++){const Ge=he[Se];x.format!==ji?Re!==null?O?me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,0,0,Ge.width,Ge.height,Re,Ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,qe,Ge.width,Ge.height,0,Ge.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,0,0,Ge.width,Ge.height,Re,ge,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,qe,Ge.width,Ge.height,0,Re,ge,Ge.data)}}}else{if(he=x.mipmaps,O&&be){he.length>0&&Ee++;const oe=ae(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,qe,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(pe){O?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,_e[oe].width,_e[oe].height,Re,ge,_e[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,qe,_e[oe].width,_e[oe].height,0,Re,ge,_e[oe].data);for(let Se=0;Se<he.length;Se++){const gt=he[Se].image[oe].image;O?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,0,0,gt.width,gt.height,Re,ge,gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,qe,gt.width,gt.height,0,Re,ge,gt.data)}}else{O?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Re,ge,_e[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,qe,Re,ge,_e[oe]);for(let Se=0;Se<he.length;Se++){const Ge=he[Se];O?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,0,0,Re,ge,Ge.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,qe,Re,ge,Ge.image[oe])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),Y.__version=J.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Me(C,x,N,$,J,Y){const xe=s.convert(N.format,N.colorSpace),de=s.convert(N.type),Ce=y(N.internalFormat,xe,de,N.colorSpace),Te=n.get(x),pe=n.get(N);if(pe.__renderTarget=x,!Te.__hasExternalTextures){const _e=Math.max(1,x.width>>Y),ye=Math.max(1,x.height>>Y);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,Y,Ce,_e,ye,x.depth,0,xe,de,null):t.texImage2D(J,Y,Ce,_e,ye,0,xe,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),ue(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,J,pe.__webglTexture,0,R(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,J,pe.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(C,x,N){if(i.bindRenderbuffer(i.RENDERBUFFER,C),x.depthBuffer){const $=x.depthTexture,J=$&&$.isDepthTexture?$.type:null,Y=v(x.stencilBuffer,J),xe=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ue(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,R(x),Y,x.width,x.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,R(x),Y,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Y,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,C)}else{const $=x.textures;for(let J=0;J<$.length;J++){const Y=$[J],xe=s.convert(Y.format,Y.colorSpace),de=s.convert(Y.type),Ce=y(Y.internalFormat,xe,de,Y.colorSpace);ue(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,R(x),Ce,x.width,x.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,R(x),Ce,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Ce,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(C,x,N){const $=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(x.depthTexture);if(J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$){if(J.__webglInit===void 0&&(J.__webglInit=!0,x.depthTexture.addEventListener("dispose",w)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Le(i.TEXTURE_CUBE_MAP,x.depthTexture);const Te=s.convert(x.depthTexture.format),pe=s.convert(x.depthTexture.type);let _e;x.depthTexture.format===Yr?_e=i.DEPTH_COMPONENT24:x.depthTexture.format===qs&&(_e=i.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,_e,x.width,x.height,0,Te,pe,null)}}else K(x.depthTexture,0);const Y=J.__webglTexture,xe=R(x),de=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,Ce=x.depthTexture.format===qs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Yr)ue(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ce,de,Y,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,Ce,de,Y,0);else if(x.depthTexture.format===qs)ue(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ce,de,Y,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,Ce,de,Y,0);else throw new Error("Unknown depthTexture format")}function We(C){const x=n.get(C),N=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=$}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(N)for(let $=0;$<6;$++)Ae(x.__webglFramebuffer[$],C,$);else{const $=C.texture.mipmaps;$&&$.length>0?Ae(x.__webglFramebuffer[0],C,0):Ae(x.__webglFramebuffer,C,0)}else if(N){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=i.createRenderbuffer(),Oe(x.__webglDepthbuffer[$],C,!1);else{const J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,Y)}}else{const $=C.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Oe(x.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function D(C,x,N){const $=n.get(C);x!==void 0&&Me($.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&We(C)}function L(C){const x=C.texture,N=n.get(C),$=n.get(x);C.addEventListener("dispose",T);const J=C.textures,Y=C.isWebGLCubeRenderTarget===!0,xe=J.length>1;if(xe||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=x.version,a.memory.textures++),Y){N.__webglFramebuffer=[];for(let de=0;de<6;de++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[de]=[];for(let Ce=0;Ce<x.mipmaps.length;Ce++)N.__webglFramebuffer[de][Ce]=i.createFramebuffer()}else N.__webglFramebuffer[de]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let de=0;de<x.mipmaps.length;de++)N.__webglFramebuffer[de]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(xe)for(let de=0,Ce=J.length;de<Ce;de++){const Te=n.get(J[de]);Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&ue(C)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let de=0;de<J.length;de++){const Ce=J[de];N.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[de]);const Te=s.convert(Ce.format,Ce.colorSpace),pe=s.convert(Ce.type),_e=y(Ce.internalFormat,Te,pe,Ce.colorSpace,C.isXRRenderTarget===!0),ye=R(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,_e,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,N.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Oe(N.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Le(i.TEXTURE_CUBE_MAP,x);for(let de=0;de<6;de++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ce=0;Ce<x.mipmaps.length;Ce++)Me(N.__webglFramebuffer[de][Ce],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce);else Me(N.__webglFramebuffer[de],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(x)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let de=0,Ce=J.length;de<Ce;de++){const Te=J[de],pe=n.get(Te);let _e=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(_e=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,pe.__webglTexture),Le(_e,Te),Me(N.__webglFramebuffer,C,Te,i.COLOR_ATTACHMENT0+de,_e,0),m(Te)&&p(_e)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(de=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,$.__webglTexture),Le(de,x),x.mipmaps&&x.mipmaps.length>0)for(let Ce=0;Ce<x.mipmaps.length;Ce++)Me(N.__webglFramebuffer[Ce],C,x,i.COLOR_ATTACHMENT0,de,Ce);else Me(N.__webglFramebuffer,C,x,i.COLOR_ATTACHMENT0,de,0);m(x)&&p(de),t.unbindTexture()}C.depthBuffer&&We(C)}function G(C){const x=C.textures;for(let N=0,$=x.length;N<$;N++){const J=x[N];if(m(J)){const Y=M(C),xe=n.get(J).__webglTexture;t.bindTexture(Y,xe),p(Y),t.unbindTexture()}}}const ie=[],j=[];function I(C){if(C.samples>0){if(ue(C)===!1){const x=C.textures,N=C.width,$=C.height;let J=i.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(C),de=x.length>1;if(de)for(let Te=0;Te<x.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Ce=C.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Te=0;Te<x.length;Te++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Te]);const pe=n.get(x[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pe,0)}i.blitFramebuffer(0,0,N,$,0,0,N,$,J,i.NEAREST),l===!0&&(ie.length=0,j.length=0,ie.push(i.COLOR_ATTACHMENT0+Te),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ie.push(Y),j.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,j)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let Te=0;Te<x.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Te]);const pe=n.get(x[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const x=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function R(C){return Math.min(r.maxSamples,C.samples)}function ue(C){const x=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function se(C){const x=a.render.frame;u.get(C)!==x&&(u.set(C,x),C.update())}function te(C,x){const N=C.colorSpace,$=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||N!==fo&&N!==ss&&(_t.getTransfer(N)===Tt?($!==ji||J!==bi)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pt("WebGLTextures: Unsupported texture color space:",N)),x}function ae(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=K,this.setTexture2DArray=k,this.setTexture3D=B,this.setTextureCube=X,this.rebindTextures=D,this.setupRenderTarget=L,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ue,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function oC(i,e){function t(n,r=ss){let s;const a=_t.getTransfer(r);if(n===bi)return i.UNSIGNED_BYTE;if(n===mp)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_p)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Tv)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wv)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===bv)return i.BYTE;if(n===Ev)return i.SHORT;if(n===bl)return i.UNSIGNED_SHORT;if(n===pp)return i.INT;if(n===gr)return i.UNSIGNED_INT;if(n===cr)return i.FLOAT;if(n===Xr)return i.HALF_FLOAT;if(n===Av)return i.ALPHA;if(n===Cv)return i.RGB;if(n===ji)return i.RGBA;if(n===Yr)return i.DEPTH_COMPONENT;if(n===qs)return i.DEPTH_STENCIL;if(n===Rv)return i.RED;if(n===gp)return i.RED_INTEGER;if(n===uo)return i.RG;if(n===vp)return i.RG_INTEGER;if(n===xp)return i.RGBA_INTEGER;if(n===Nc||n===Oc||n===Bc||n===zc)if(a===Tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Nc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Nc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oh||n===Bh||n===zh||n===kh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Oh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vh||n===Hh||n===Gh||n===Wh||n===Xh||n===Yh||n===qh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Vh||n===Hh)return a===Tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Gh)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wh)return s.COMPRESSED_R11_EAC;if(n===Xh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Yh)return s.COMPRESSED_RG11_EAC;if(n===qh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$h||n===jh||n===Kh||n===Zh||n===Jh||n===Qh||n===ed||n===td||n===nd||n===id||n===rd||n===sd||n===ad||n===od)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===$h)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jh)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kh)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zh)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jh)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qh)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ed)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===td)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nd)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===id)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rd)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sd)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ad)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===od)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ld||n===cd||n===ud)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ld)return a===Tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ud)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fd||n===hd||n===dd||n===pd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===fd)return s.COMPRESSED_RED_RGTC1_EXT;if(n===hd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===El?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const lC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class uC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Wv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new xr({vertexShader:lC,fragmentShader:cC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wi(new Pu(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fC extends mo{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new uC,p={},M=t.getContextAttributes();let y=null,v=null;const b=[],w=[],T=new tt;let P=null;const S=new Si;S.viewport=new qt;const E=new Si;E.viewport=new qt;const F=[S,E],z=new Sb;let H=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let re=b[ne];return re===void 0&&(re=new Pf,b[ne]=re),re.getTargetRaySpace()},this.getControllerGrip=function(ne){let re=b[ne];return re===void 0&&(re=new Pf,b[ne]=re),re.getGripSpace()},this.getHand=function(ne){let re=b[ne];return re===void 0&&(re=new Pf,b[ne]=re),re.getHandSpace()};function K(ne){const re=w.indexOf(ne.inputSource);if(re===-1)return;const Me=b[re];Me!==void 0&&(Me.update(ne.inputSource,ne.frame,c||a),Me.dispatchEvent({type:ne.type,data:ne.inputSource}))}function k(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",B);for(let ne=0;ne<b.length;ne++){const re=w[ne];re!==null&&(w[ne]=null,b[ne].disconnect(re))}H=null,Z=null,m.reset();for(const ne in p)delete p[ne];e.setRenderTarget(y),d=null,h=null,f=null,r=null,v=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,n.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,n.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",k),r.addEventListener("inputsourceschange",B),M.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Oe=null,Ae=null;M.depth&&(Ae=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=M.stencil?qs:Yr,Oe=M.stencil?El:gr);const We={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(We),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new pr(h.textureWidth,h.textureHeight,{format:ji,type:bi,depthTexture:new wl(h.textureWidth,h.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Me={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,Me),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new pr(d.framebufferWidth,d.framebufferHeight,{format:ji,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),je.setContext(r),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(ne){for(let re=0;re<ne.removed.length;re++){const Me=ne.removed[re],Oe=w.indexOf(Me);Oe>=0&&(w[Oe]=null,b[Oe].disconnect(Me))}for(let re=0;re<ne.added.length;re++){const Me=ne.added[re];let Oe=w.indexOf(Me);if(Oe===-1){for(let We=0;We<b.length;We++)if(We>=w.length){w.push(Me),Oe=We;break}else if(w[We]===null){w[We]=Me,Oe=We;break}if(Oe===-1)break}const Ae=b[Oe];Ae&&Ae.connect(Me)}}const X=new W,ce=new W;function U(ne,re,Me){X.setFromMatrixPosition(re.matrixWorld),ce.setFromMatrixPosition(Me.matrixWorld);const Oe=X.distanceTo(ce),Ae=re.projectionMatrix.elements,We=Me.projectionMatrix.elements,D=Ae[14]/(Ae[10]-1),L=Ae[14]/(Ae[10]+1),G=(Ae[9]+1)/Ae[5],ie=(Ae[9]-1)/Ae[5],j=(Ae[8]-1)/Ae[0],I=(We[8]+1)/We[0],R=D*j,ue=D*I,se=Oe/(-j+I),te=se*-j;if(re.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(te),ne.translateZ(se),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ae[10]===-1)ne.projectionMatrix.copy(re.projectionMatrix),ne.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const ae=D+se,C=L+se,x=R-te,N=ue+(Oe-te),$=G*L/C*ae,J=ie*L/C*ae;ne.projectionMatrix.makePerspective(x,N,$,J,ae,C),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function fe(ne,re){re===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(re.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let re=ne.near,Me=ne.far;m.texture!==null&&(m.depthNear>0&&(re=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),z.near=E.near=S.near=re,z.far=E.far=S.far=Me,(H!==z.near||Z!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),H=z.near,Z=z.far),z.layers.mask=ne.layers.mask|6,S.layers.mask=z.layers.mask&3,E.layers.mask=z.layers.mask&5;const Oe=ne.parent,Ae=z.cameras;fe(z,Oe);for(let We=0;We<Ae.length;We++)fe(Ae[We],Oe);Ae.length===2?U(z,S,E):z.projectionMatrix.copy(S.projectionMatrix),Le(ne,z,Oe)};function Le(ne,re,Me){Me===null?ne.matrix.copy(re.matrixWorld):(ne.matrix.copy(Me.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(re.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(re.projectionMatrix),ne.projectionMatrixInverse.copy(re.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=_d*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(ne){l=ne,h!==null&&(h.fixedFoveation=ne),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ne)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(ne){return p[ne]};let ze=null;function He(ne,re){if(u=re.getViewerPose(c||a),g=re,u!==null){const Me=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Oe=!1;Me.length!==z.cameras.length&&(z.cameras.length=0,Oe=!0);for(let L=0;L<Me.length;L++){const G=Me[L];let ie=null;if(d!==null)ie=d.getViewport(G);else{const I=f.getViewSubImage(h,G);ie=I.viewport,L===0&&(e.setRenderTargetTextures(v,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(v))}let j=F[L];j===void 0&&(j=new Si,j.layers.enable(L),j.viewport=new qt,F[L]=j),j.matrix.fromArray(G.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(G.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(ie.x,ie.y,ie.width,ie.height),L===0&&(z.matrix.copy(j.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Oe===!0&&z.cameras.push(j)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const L=f.getDepthInformation(Me[0]);L&&L.isValid&&L.texture&&m.init(L,r.renderState)}if(Ae&&Ae.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let L=0;L<Me.length;L++){const G=Me[L].camera;if(G){let ie=p[G];ie||(ie=new Wv,p[G]=ie);const j=f.getCameraImage(G);ie.sourceTexture=j}}}}for(let Me=0;Me<b.length;Me++){const Oe=w[Me],Ae=b[Me];Oe!==null&&Ae!==void 0&&Ae.update(Oe,re,c||a)}ze&&ze(ne,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),g=null}const je=new Yv;je.setAnimationLoop(He),this.setAnimationLoop=function(ne){ze=ne},this.dispose=function(){}}}const Os=new vr,hC=new kt;function dC(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ov(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===oi&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===oi&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),y=M.envMap,v=M.envMapRotation;y&&(m.envMap.value=y,Os.copy(v),Os.x*=-1,Os.y*=-1,Os.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),m.envMapRotation.value.setFromMatrix4(hC.makeRotationFromEuler(Os)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===oi&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function pC(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const v=y.program;n.uniformBlockBinding(M,v)}function c(M,y){let v=r[M.id];v===void 0&&(g(M),v=u(M),r[M.id]=v,M.addEventListener("dispose",m));const b=y.program;n.updateUBOMapping(M,b);const w=e.render.frame;s[M.id]!==w&&(h(M),s[M.id]=w)}function u(M){const y=f();M.__bindingPointIndex=y;const v=i.createBuffer(),b=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,b,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const y=r[M.id],v=M.uniforms,b=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,T=v.length;w<T;w++){const P=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,E=P.length;S<E;S++){const F=P[S];if(d(F,w,S,b)===!0){const z=F.__offset,H=Array.isArray(F.value)?F.value:[F.value];let Z=0;for(let K=0;K<H.length;K++){const k=H[K],B=_(k);typeof k=="number"||typeof k=="boolean"?(F.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,z+Z,F.__data)):k.isMatrix3?(F.__data[0]=k.elements[0],F.__data[1]=k.elements[1],F.__data[2]=k.elements[2],F.__data[3]=0,F.__data[4]=k.elements[3],F.__data[5]=k.elements[4],F.__data[6]=k.elements[5],F.__data[7]=0,F.__data[8]=k.elements[6],F.__data[9]=k.elements[7],F.__data[10]=k.elements[8],F.__data[11]=0):(k.toArray(F.__data,Z),Z+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,y,v,b){const w=M.value,T=y+"_"+v;if(b[T]===void 0)return typeof w=="number"||typeof w=="boolean"?b[T]=w:b[T]=w.clone(),!0;{const P=b[T];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return b[T]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(M){const y=M.uniforms;let v=0;const b=16;for(let T=0,P=y.length;T<P;T++){const S=Array.isArray(y[T])?y[T]:[y[T]];for(let E=0,F=S.length;E<F;E++){const z=S[E],H=Array.isArray(z.value)?z.value:[z.value];for(let Z=0,K=H.length;Z<K;Z++){const k=H[Z],B=_(k),X=v%b,ce=X%B.boundary,U=X+ce;v+=ce,U!==0&&b-U<B.storage&&(v+=b-U),z.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=B.storage}}}const w=v%b;return w>0&&(v+=b-w),M.__size=v,M.__cache={},this}function _(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Qe("WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const M in r)i.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}const mC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ji=null;function _C(){return Ji===null&&(Ji=new ab(mC,16,16,uo,Xr),Ji.name="DFG_LUT",Ji.minFilter=Dn,Ji.magFilter=Dn,Ji.wrapS=Ur,Ji.wrapT=Ur,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}class gC{constructor(e={}){const{canvas:t=D1(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=bi}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=d,m=new Set([xp,vp,gp]),p=new Set([bi,gr,bl,El,mp,_p]),M=new Uint32Array(4),y=new Int32Array(4);let v=null,b=null;const w=[],T=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=dr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let E=!1;this._outputColorSpace=Li;let F=0,z=0,H=null,Z=-1,K=null;const k=new qt,B=new qt;let X=null;const ce=new mt(0);let U=0,fe=t.width,Le=t.height,ze=1,He=null,je=null;const ne=new qt(0,0,fe,Le),re=new qt(0,0,fe,Le);let Me=!1;const Oe=new wp;let Ae=!1,We=!1;const D=new kt,L=new W,G=new qt,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function I(){return H===null?ze:1}let R=n;function ue(A,V){return t.getContext(A,V)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dp}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",gt,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),R===null){const V="webgl2";if(R=ue(V,A),R===null)throw ue(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw pt("WebGLRenderer: "+A.message),A}let se,te,ae,C,x,N,$,J,Y,xe,de,Ce,Te,pe,_e,ye,Re,ge,qe,O,be,me,Ee,he;function oe(){se=new _w(R),se.init(),me=new oC(R,se),te=new ow(R,se,e,me),ae=new sC(R,se),te.reversedDepthBuffer&&h&&ae.buffers.depth.setReversed(!0),C=new xw(R),x=new WA,N=new aC(R,se,ae,x,te,me,C),$=new cw(S),J=new mw(S),Y=new bb(R),Ee=new sw(R,Y),xe=new gw(R,Y,C,Ee),de=new Mw(R,xe,Y,C),qe=new Sw(R,te,N),ye=new lw(x),Ce=new GA(S,$,J,se,te,Ee,ye),Te=new dC(S,x),pe=new YA,_e=new JA(se),ge=new rw(S,$,J,ae,de,g,l),Re=new iC(S,de,te),he=new pC(R,C,te,ae),O=new aw(R,se,C),be=new vw(R,se,C),C.programs=Ce.programs,S.capabilities=te,S.extensions=se,S.properties=x,S.renderLists=pe,S.shadowMap=Re,S.state=ae,S.info=C}oe(),_!==bi&&(P=new bw(_,t.width,t.height,r,s));const Se=new fC(S,R);this.xr=Se,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const A=se.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=se.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ze},this.setPixelRatio=function(A){A!==void 0&&(ze=A,this.setSize(fe,Le,!1))},this.getSize=function(A){return A.set(fe,Le)},this.setSize=function(A,V,ee=!0){if(Se.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=A,Le=V,t.width=Math.floor(A*ze),t.height=Math.floor(V*ze),ee===!0&&(t.style.width=A+"px",t.style.height=V+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(fe*ze,Le*ze).floor()},this.setDrawingBufferSize=function(A,V,ee){fe=A,Le=V,ze=ee,t.width=Math.floor(A*ee),t.height=Math.floor(V*ee),this.setViewport(0,0,A,V)},this.setEffects=function(A){if(_===bi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let V=0;V<A.length;V++)if(A[V].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(k)},this.getViewport=function(A){return A.copy(ne)},this.setViewport=function(A,V,ee,Q){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,V,ee,Q),ae.viewport(k.copy(ne).multiplyScalar(ze).round())},this.getScissor=function(A){return A.copy(re)},this.setScissor=function(A,V,ee,Q){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,V,ee,Q),ae.scissor(B.copy(re).multiplyScalar(ze).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(A){ae.setScissorTest(Me=A)},this.setOpaqueSort=function(A){He=A},this.setTransparentSort=function(A){je=A},this.getClearColor=function(A){return A.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,ee=!0){let Q=0;if(A){let q=!1;if(H!==null){const ve=H.texture.format;q=m.has(ve)}if(q){const ve=H.texture.type,Ue=p.has(ve),we=ge.getClearColor(),Fe=ge.getClearAlpha(),ke=we.r,$e=we.g,Xe=we.b;Ue?(M[0]=ke,M[1]=$e,M[2]=Xe,M[3]=Fe,R.clearBufferuiv(R.COLOR,0,M)):(y[0]=ke,y[1]=$e,y[2]=Xe,y[3]=Fe,R.clearBufferiv(R.COLOR,0,y))}else Q|=R.COLOR_BUFFER_BIT}V&&(Q|=R.DEPTH_BUFFER_BIT),ee&&(Q|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),ge.dispose(),pe.dispose(),_e.dispose(),x.dispose(),$.dispose(),J.dispose(),de.dispose(),Ee.dispose(),he.dispose(),Ce.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",jt),Se.removeEventListener("sessionend",lt),bt.stop()};function Ge(A){A.preventDefault(),fu("WebGLRenderer: Context Lost."),E=!0}function gt(){fu("WebGLRenderer: Context Restored."),E=!1;const A=C.autoReset,V=Re.enabled,ee=Re.autoUpdate,Q=Re.needsUpdate,q=Re.type;oe(),C.autoReset=A,Re.enabled=V,Re.autoUpdate=ee,Re.needsUpdate=Q,Re.type=q}function Ie(A){pt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Be(A){const V=A.target;V.removeEventListener("dispose",Be),nt(V)}function nt(A){Pe(A),x.remove(A)}function Pe(A){const V=x.get(A).programs;V!==void 0&&(V.forEach(function(ee){Ce.releaseProgram(ee)}),A.isShaderMaterial&&Ce.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,ee,Q,q,ve){V===null&&(V=ie);const Ue=q.isMesh&&q.matrixWorld.determinant()<0,we=sn(A,V,ee,Q,q);ae.setMaterial(Q,Ue);let Fe=ee.index,ke=1;if(Q.wireframe===!0){if(Fe=xe.getWireframeAttribute(ee),Fe===void 0)return;ke=2}const $e=ee.drawRange,Xe=ee.attributes.position;let ct=$e.start*ke,At=($e.start+$e.count)*ke;ve!==null&&(ct=Math.max(ct,ve.start*ke),At=Math.min(At,(ve.start+ve.count)*ke)),Fe!==null?(ct=Math.max(ct,0),At=Math.min(At,Fe.count)):Xe!=null&&(ct=Math.max(ct,0),At=Math.min(At,Xe.count));const Xt=At-ct;if(Xt<0||Xt===1/0)return;Ee.setup(q,Q,we,ee,Fe);let Yt,Pt=O;if(Fe!==null&&(Yt=Y.get(Fe),Pt=be,Pt.setIndex(Yt)),q.isMesh)Q.wireframe===!0?(ae.setLineWidth(Q.wireframeLinewidth*I()),Pt.setMode(R.LINES)):Pt.setMode(R.TRIANGLES);else if(q.isLine){let Ye=Q.linewidth;Ye===void 0&&(Ye=1),ae.setLineWidth(Ye*I()),q.isLineSegments?Pt.setMode(R.LINES):q.isLineLoop?Pt.setMode(R.LINE_LOOP):Pt.setMode(R.LINE_STRIP)}else q.isPoints?Pt.setMode(R.POINTS):q.isSprite&&Pt.setMode(R.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Tl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))Pt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ye=q._multiDrawStarts,Et=q._multiDrawCounts,xt=q._multiDrawCount,fi=Fe?Y.get(Fe).bytesPerElement:1,fa=x.get(Q).currentProgram.getUniforms();for(let hi=0;hi<xt;hi++)fa.setValue(R,"_gl_DrawID",hi),Pt.render(Ye[hi]/fi,Et[hi])}else if(q.isInstancedMesh)Pt.renderInstances(ct,Xt,q.count);else if(ee.isInstancedBufferGeometry){const Ye=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Et=Math.min(ee.instanceCount,Ye);Pt.renderInstances(ct,Xt,Et)}else Pt.render(ct,Xt)};function Ke(A,V,ee){A.transparent===!0&&A.side===Lr&&A.forceSinglePass===!1?(A.side=oi,A.needsUpdate=!0,wt(A,V,ee),A.side=bs,A.needsUpdate=!0,wt(A,V,ee),A.side=Lr):wt(A,V,ee)}this.compile=function(A,V,ee=null){ee===null&&(ee=A),b=_e.get(ee),b.init(V),T.push(b),ee.traverseVisible(function(q){q.isLight&&q.layers.test(V.layers)&&(b.pushLight(q),q.castShadow&&b.pushShadow(q))}),A!==ee&&A.traverseVisible(function(q){q.isLight&&q.layers.test(V.layers)&&(b.pushLight(q),q.castShadow&&b.pushShadow(q))}),b.setupLights();const Q=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const ve=q.material;if(ve)if(Array.isArray(ve))for(let Ue=0;Ue<ve.length;Ue++){const we=ve[Ue];Ke(we,ee,q),Q.add(we)}else Ke(ve,ee,q),Q.add(ve)}),b=T.pop(),Q},this.compileAsync=function(A,V,ee=null){const Q=this.compile(A,V,ee);return new Promise(q=>{function ve(){if(Q.forEach(function(Ue){x.get(Ue).currentProgram.isReady()&&Q.delete(Ue)}),Q.size===0){q(A);return}setTimeout(ve,10)}se.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Ve=null;function Je(A){Ve&&Ve(A)}function jt(){bt.stop()}function lt(){bt.start()}const bt=new Yv;bt.setAnimationLoop(Je),typeof self<"u"&&bt.setContext(self),this.setAnimationLoop=function(A){Ve=A,Se.setAnimationLoop(A),A===null?bt.stop():bt.start()},Se.addEventListener("sessionstart",jt),Se.addEventListener("sessionend",lt),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;const ee=Se.enabled===!0&&Se.isPresenting===!0,Q=P!==null&&(H===null||ee)&&P.begin(S,H);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(V),V=Se.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,V,H),b=_e.get(A,T.length),b.init(V),T.push(b),D.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Oe.setFromProjectionMatrix(D,ur,V.reversedDepth),We=this.localClippingEnabled,Ae=ye.init(this.clippingPlanes,We),v=pe.get(A,w.length),v.init(),w.push(v),Se.enabled===!0&&Se.isPresenting===!0){const Ue=S.xr.getDepthSensingMesh();Ue!==null&&Jt(Ue,V,-1/0,S.sortObjects)}Jt(A,V,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(He,je),j=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,j&&ge.addToRenderList(v,A),this.info.render.frame++,Ae===!0&&ye.beginShadows();const q=b.state.shadowsArray;if(Re.render(q,A,V),Ae===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Q&&P.hasRenderPass())===!1){const Ue=v.opaque,we=v.transmissive;if(b.setupLights(),V.isArrayCamera){const Fe=V.cameras;if(we.length>0)for(let ke=0,$e=Fe.length;ke<$e;ke++){const Xe=Fe[ke];Rt(Ue,we,A,Xe)}j&&ge.render(A);for(let ke=0,$e=Fe.length;ke<$e;ke++){const Xe=Fe[ke];Bt(v,A,Xe,Xe.viewport)}}else we.length>0&&Rt(Ue,we,A,V),j&&ge.render(A),Bt(v,A,V)}H!==null&&z===0&&(N.updateMultisampleRenderTarget(H),N.updateRenderTargetMipmap(H)),Q&&P.end(S),A.isScene===!0&&A.onAfterRender(S,A,V),Ee.resetDefaultState(),Z=-1,K=null,T.pop(),T.length>0?(b=T[T.length-1],Ae===!0&&ye.setGlobalState(S.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?v=w[w.length-1]:v=null};function Jt(A,V,ee,Q){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)ee=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Oe.intersectsSprite(A)){Q&&G.setFromMatrixPosition(A.matrixWorld).applyMatrix4(D);const Ue=de.update(A),we=A.material;we.visible&&v.push(A,Ue,we,ee,G.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Oe.intersectsObject(A))){const Ue=de.update(A),we=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),G.copy(A.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),G.copy(Ue.boundingSphere.center)),G.applyMatrix4(A.matrixWorld).applyMatrix4(D)),Array.isArray(we)){const Fe=Ue.groups;for(let ke=0,$e=Fe.length;ke<$e;ke++){const Xe=Fe[ke],ct=we[Xe.materialIndex];ct&&ct.visible&&v.push(A,Ue,ct,ee,G.z,Xe)}}else we.visible&&v.push(A,Ue,we,ee,G.z,null)}}const ve=A.children;for(let Ue=0,we=ve.length;Ue<we;Ue++)Jt(ve[Ue],V,ee,Q)}function Bt(A,V,ee,Q){const{opaque:q,transmissive:ve,transparent:Ue}=A;b.setupLightsView(ee),Ae===!0&&ye.setGlobalState(S.clippingPlanes,ee),Q&&ae.viewport(k.copy(Q)),q.length>0&&vt(q,V,ee),ve.length>0&&vt(ve,V,ee),Ue.length>0&&vt(Ue,V,ee),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Rt(A,V,ee,Q){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Q.id]===void 0){const ct=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Q.id]=new pr(1,1,{generateMipmaps:!0,type:ct?Xr:bi,minFilter:Ys,samples:te.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace})}const ve=b.state.transmissionRenderTarget[Q.id],Ue=Q.viewport||k;ve.setSize(Ue.z*S.transmissionResolutionScale,Ue.w*S.transmissionResolutionScale);const we=S.getRenderTarget(),Fe=S.getActiveCubeFace(),ke=S.getActiveMipmapLevel();S.setRenderTarget(ve),S.getClearColor(ce),U=S.getClearAlpha(),U<1&&S.setClearColor(16777215,.5),S.clear(),j&&ge.render(ee);const $e=S.toneMapping;S.toneMapping=dr;const Xe=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),b.setupLightsView(Q),Ae===!0&&ye.setGlobalState(S.clippingPlanes,Q),vt(A,ee,Q),N.updateMultisampleRenderTarget(ve),N.updateRenderTargetMipmap(ve),se.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let At=0,Xt=V.length;At<Xt;At++){const Yt=V[At],{object:Pt,geometry:Ye,material:Et,group:xt}=Yt;if(Et.side===Lr&&Pt.layers.test(Q.layers)){const fi=Et.side;Et.side=oi,Et.needsUpdate=!0,Zn(Pt,ee,Q,Ye,Et,xt),Et.side=fi,Et.needsUpdate=!0,ct=!0}}ct===!0&&(N.updateMultisampleRenderTarget(ve),N.updateRenderTargetMipmap(ve))}S.setRenderTarget(we,Fe,ke),S.setClearColor(ce,U),Xe!==void 0&&(Q.viewport=Xe),S.toneMapping=$e}function vt(A,V,ee){const Q=V.isScene===!0?V.overrideMaterial:null;for(let q=0,ve=A.length;q<ve;q++){const Ue=A[q],{object:we,geometry:Fe,group:ke}=Ue;let $e=Ue.material;$e.allowOverride===!0&&Q!==null&&($e=Q),we.layers.test(ee.layers)&&Zn(we,V,ee,Fe,$e,ke)}}function Zn(A,V,ee,Q,q,ve){A.onBeforeRender(S,V,ee,Q,q,ve),A.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(S,V,ee,Q,A,ve),q.transparent===!0&&q.side===Lr&&q.forceSinglePass===!1?(q.side=oi,q.needsUpdate=!0,S.renderBufferDirect(ee,V,Q,q,A,ve),q.side=bs,q.needsUpdate=!0,S.renderBufferDirect(ee,V,Q,q,A,ve),q.side=Lr):S.renderBufferDirect(ee,V,Q,q,A,ve),A.onAfterRender(S,V,ee,Q,q,ve)}function wt(A,V,ee){V.isScene!==!0&&(V=ie);const Q=x.get(A),q=b.state.lights,ve=b.state.shadowsArray,Ue=q.state.version,we=Ce.getParameters(A,q.state,ve,V,ee),Fe=Ce.getProgramCacheKey(we);let ke=Q.programs;Q.environment=A.isMeshStandardMaterial?V.environment:null,Q.fog=V.fog,Q.envMap=(A.isMeshStandardMaterial?J:$).get(A.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",Be),ke=new Map,Q.programs=ke);let $e=ke.get(Fe);if($e!==void 0){if(Q.currentProgram===$e&&Q.lightsStateVersion===Ue)return ui(A,we),$e}else we.uniforms=Ce.getUniforms(A),A.onBeforeCompile(we,S),$e=Ce.acquireProgram(we,Fe),ke.set(Fe,$e),Q.uniforms=we.uniforms;const Xe=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=ye.uniform),ui(A,we),Q.needsLights=fn(A),Q.lightsStateVersion=Ue,Q.needsLights&&(Xe.ambientLightColor.value=q.state.ambient,Xe.lightProbe.value=q.state.probe,Xe.directionalLights.value=q.state.directional,Xe.directionalLightShadows.value=q.state.directionalShadow,Xe.spotLights.value=q.state.spot,Xe.spotLightShadows.value=q.state.spotShadow,Xe.rectAreaLights.value=q.state.rectArea,Xe.ltc_1.value=q.state.rectAreaLTC1,Xe.ltc_2.value=q.state.rectAreaLTC2,Xe.pointLights.value=q.state.point,Xe.pointLightShadows.value=q.state.pointShadow,Xe.hemisphereLights.value=q.state.hemi,Xe.directionalShadowMap.value=q.state.directionalShadowMap,Xe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Xe.spotShadowMap.value=q.state.spotShadowMap,Xe.spotLightMatrix.value=q.state.spotLightMatrix,Xe.spotLightMap.value=q.state.spotLightMap,Xe.pointShadowMap.value=q.state.pointShadowMap,Xe.pointShadowMatrix.value=q.state.pointShadowMatrix),Q.currentProgram=$e,Q.uniformsList=null,$e}function bn(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=kc.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function ui(A,V){const ee=x.get(A);ee.outputColorSpace=V.outputColorSpace,ee.batching=V.batching,ee.batchingColor=V.batchingColor,ee.instancing=V.instancing,ee.instancingColor=V.instancingColor,ee.instancingMorph=V.instancingMorph,ee.skinning=V.skinning,ee.morphTargets=V.morphTargets,ee.morphNormals=V.morphNormals,ee.morphColors=V.morphColors,ee.morphTargetsCount=V.morphTargetsCount,ee.numClippingPlanes=V.numClippingPlanes,ee.numIntersection=V.numClipIntersection,ee.vertexAlphas=V.vertexAlphas,ee.vertexTangents=V.vertexTangents,ee.toneMapping=V.toneMapping}function sn(A,V,ee,Q,q){V.isScene!==!0&&(V=ie),N.resetTextureUnits();const ve=V.fog,Ue=Q.isMeshStandardMaterial?V.environment:null,we=H===null?S.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:fo,Fe=(Q.isMeshStandardMaterial?J:$).get(Q.envMap||Ue),ke=Q.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,$e=!!ee.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Xe=!!ee.morphAttributes.position,ct=!!ee.morphAttributes.normal,At=!!ee.morphAttributes.color;let Xt=dr;Q.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Xt=S.toneMapping);const Yt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Pt=Yt!==void 0?Yt.length:0,Ye=x.get(Q),Et=b.state.lights;if(Ae===!0&&(We===!0||A!==K)){const Fn=A===K&&Q.id===Z;ye.setState(Q,A,Fn)}let xt=!1;Q.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Et.state.version||Ye.outputColorSpace!==we||q.isBatchedMesh&&Ye.batching===!1||!q.isBatchedMesh&&Ye.batching===!0||q.isBatchedMesh&&Ye.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ye.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ye.instancing===!1||!q.isInstancedMesh&&Ye.instancing===!0||q.isSkinnedMesh&&Ye.skinning===!1||!q.isSkinnedMesh&&Ye.skinning===!0||q.isInstancedMesh&&Ye.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ye.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ye.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ye.instancingMorph===!1&&q.morphTexture!==null||Ye.envMap!==Fe||Q.fog===!0&&Ye.fog!==ve||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==ye.numPlanes||Ye.numIntersection!==ye.numIntersection)||Ye.vertexAlphas!==ke||Ye.vertexTangents!==$e||Ye.morphTargets!==Xe||Ye.morphNormals!==ct||Ye.morphColors!==At||Ye.toneMapping!==Xt||Ye.morphTargetsCount!==Pt)&&(xt=!0):(xt=!0,Ye.__version=Q.version);let fi=Ye.currentProgram;xt===!0&&(fi=wt(Q,V,q));let fa=!1,hi=!1,vo=!1;const It=fi.getUniforms(),Jn=Ye.uniforms;if(ae.useProgram(fi.program)&&(fa=!0,hi=!0,vo=!0),Q.id!==Z&&(Z=Q.id,hi=!0),fa||K!==A){ae.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),It.setValue(R,"projectionMatrix",A.projectionMatrix),It.setValue(R,"viewMatrix",A.matrixWorldInverse);const Qn=It.map.cameraPosition;Qn!==void 0&&Qn.setValue(R,L.setFromMatrixPosition(A.matrixWorld)),te.logarithmicDepthBuffer&&It.setValue(R,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&It.setValue(R,"isOrthographic",A.isOrthographicCamera===!0),K!==A&&(K=A,hi=!0,vo=!0)}if(Ye.needsLights&&(Et.state.directionalShadowMap.length>0&&It.setValue(R,"directionalShadowMap",Et.state.directionalShadowMap,N),Et.state.spotShadowMap.length>0&&It.setValue(R,"spotShadowMap",Et.state.spotShadowMap,N),Et.state.pointShadowMap.length>0&&It.setValue(R,"pointShadowMap",Et.state.pointShadowMap,N)),q.isSkinnedMesh){It.setOptional(R,q,"bindMatrix"),It.setOptional(R,q,"bindMatrixInverse");const Fn=q.skeleton;Fn&&(Fn.boneTexture===null&&Fn.computeBoneTexture(),It.setValue(R,"boneTexture",Fn.boneTexture,N))}q.isBatchedMesh&&(It.setOptional(R,q,"batchingTexture"),It.setValue(R,"batchingTexture",q._matricesTexture,N),It.setOptional(R,q,"batchingIdTexture"),It.setValue(R,"batchingIdTexture",q._indirectTexture,N),It.setOptional(R,q,"batchingColorTexture"),q._colorsTexture!==null&&It.setValue(R,"batchingColorTexture",q._colorsTexture,N));const Ri=ee.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&qe.update(q,ee,fi),(hi||Ye.receiveShadow!==q.receiveShadow)&&(Ye.receiveShadow=q.receiveShadow,It.setValue(R,"receiveShadow",q.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Jn.envMap.value=Fe,Jn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&V.environment!==null&&(Jn.envMapIntensity.value=V.environmentIntensity),Jn.dfgLUT!==void 0&&(Jn.dfgLUT.value=_C()),hi&&(It.setValue(R,"toneMappingExposure",S.toneMappingExposure),Ye.needsLights&&an(Jn,vo),ve&&Q.fog===!0&&Te.refreshFogUniforms(Jn,ve),Te.refreshMaterialUniforms(Jn,Q,ze,Le,b.state.transmissionRenderTarget[A.id]),kc.upload(R,bn(Ye),Jn,N)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(kc.upload(R,bn(Ye),Jn,N),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&It.setValue(R,"center",q.center),It.setValue(R,"modelViewMatrix",q.modelViewMatrix),It.setValue(R,"normalMatrix",q.normalMatrix),It.setValue(R,"modelMatrix",q.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Fn=Q.uniformsGroups;for(let Qn=0,Iu=Fn.length;Qn<Iu;Qn++){const As=Fn[Qn];he.update(As,fi),he.bind(As,fi)}}return fi}function an(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function fn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(A,V,ee){const Q=x.get(A);Q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),x.get(A.texture).__webglTexture=V,x.get(A.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:ee,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){const ee=x.get(A);ee.__webglFramebuffer=V,ee.__useDefaultFramebuffer=V===void 0};const Sr=R.createFramebuffer();this.setRenderTarget=function(A,V=0,ee=0){H=A,F=V,z=ee;let Q=null,q=!1,ve=!1;if(A){const we=x.get(A);if(we.__useDefaultFramebuffer!==void 0){ae.bindFramebuffer(R.FRAMEBUFFER,we.__webglFramebuffer),k.copy(A.viewport),B.copy(A.scissor),X=A.scissorTest,ae.viewport(k),ae.scissor(B),ae.setScissorTest(X),Z=-1;return}else if(we.__webglFramebuffer===void 0)N.setupRenderTarget(A);else if(we.__hasExternalTextures)N.rebindTextures(A,x.get(A.texture).__webglTexture,x.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const $e=A.depthTexture;if(we.__boundDepthTexture!==$e){if($e!==null&&x.has($e)&&(A.width!==$e.image.width||A.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(A)}}const Fe=A.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ve=!0);const ke=x.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ke[V])?Q=ke[V][ee]:Q=ke[V],q=!0):A.samples>0&&N.useMultisampledRTT(A)===!1?Q=x.get(A).__webglMultisampledFramebuffer:Array.isArray(ke)?Q=ke[ee]:Q=ke,k.copy(A.viewport),B.copy(A.scissor),X=A.scissorTest}else k.copy(ne).multiplyScalar(ze).floor(),B.copy(re).multiplyScalar(ze).floor(),X=Me;if(ee!==0&&(Q=Sr),ae.bindFramebuffer(R.FRAMEBUFFER,Q)&&ae.drawBuffers(A,Q),ae.viewport(k),ae.scissor(B),ae.setScissorTest(X),q){const we=x.get(A.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+V,we.__webglTexture,ee)}else if(ve){const we=V;for(let Fe=0;Fe<A.textures.length;Fe++){const ke=x.get(A.textures[Fe]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Fe,ke.__webglTexture,ee,we)}}else if(A!==null&&ee!==0){const we=x.get(A.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,we.__webglTexture,ee)}Z=-1},this.readRenderTargetPixels=function(A,V,ee,Q,q,ve,Ue,we=0){if(!(A&&A.isWebGLRenderTarget)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=x.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe){ae.bindFramebuffer(R.FRAMEBUFFER,Fe);try{const ke=A.textures[we],$e=ke.format,Xe=ke.type;if(!te.textureFormatReadable($e)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Xe)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-Q&&ee>=0&&ee<=A.height-q&&(A.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+we),R.readPixels(V,ee,Q,q,me.convert($e),me.convert(Xe),ve))}finally{const ke=H!==null?x.get(H).__webglFramebuffer:null;ae.bindFramebuffer(R.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,V,ee,Q,q,ve,Ue,we=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=x.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe)if(V>=0&&V<=A.width-Q&&ee>=0&&ee<=A.height-q){ae.bindFramebuffer(R.FRAMEBUFFER,Fe);const ke=A.textures[we],$e=ke.format,Xe=ke.type;if(!te.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ct),R.bufferData(R.PIXEL_PACK_BUFFER,ve.byteLength,R.STREAM_READ),A.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+we),R.readPixels(V,ee,Q,q,me.convert($e),me.convert(Xe),0);const At=H!==null?x.get(H).__webglFramebuffer:null;ae.bindFramebuffer(R.FRAMEBUFFER,At);const Xt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await L1(R,Xt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ct),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ve),R.deleteBuffer(ct),R.deleteSync(Xt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,ee=0){const Q=Math.pow(2,-ee),q=Math.floor(A.image.width*Q),ve=Math.floor(A.image.height*Q),Ue=V!==null?V.x:0,we=V!==null?V.y:0;N.setTexture2D(A,0),R.copyTexSubImage2D(R.TEXTURE_2D,ee,0,0,Ue,we,q,ve),ae.unbindTexture()};const ua=R.createFramebuffer(),hn=R.createFramebuffer();this.copyTextureToTexture=function(A,V,ee=null,Q=null,q=0,ve=null){ve===null&&(q!==0?(Tl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ve=q,q=0):ve=0);let Ue,we,Fe,ke,$e,Xe,ct,At,Xt;const Yt=A.isCompressedTexture?A.mipmaps[ve]:A.image;if(ee!==null)Ue=ee.max.x-ee.min.x,we=ee.max.y-ee.min.y,Fe=ee.isBox3?ee.max.z-ee.min.z:1,ke=ee.min.x,$e=ee.min.y,Xe=ee.isBox3?ee.min.z:0;else{const Ri=Math.pow(2,-q);Ue=Math.floor(Yt.width*Ri),we=Math.floor(Yt.height*Ri),A.isDataArrayTexture?Fe=Yt.depth:A.isData3DTexture?Fe=Math.floor(Yt.depth*Ri):Fe=1,ke=0,$e=0,Xe=0}Q!==null?(ct=Q.x,At=Q.y,Xt=Q.z):(ct=0,At=0,Xt=0);const Pt=me.convert(V.format),Ye=me.convert(V.type);let Et;V.isData3DTexture?(N.setTexture3D(V,0),Et=R.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(N.setTexture2DArray(V,0),Et=R.TEXTURE_2D_ARRAY):(N.setTexture2D(V,0),Et=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,V.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,V.unpackAlignment);const xt=R.getParameter(R.UNPACK_ROW_LENGTH),fi=R.getParameter(R.UNPACK_IMAGE_HEIGHT),fa=R.getParameter(R.UNPACK_SKIP_PIXELS),hi=R.getParameter(R.UNPACK_SKIP_ROWS),vo=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Yt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Yt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ke),R.pixelStorei(R.UNPACK_SKIP_ROWS,$e),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Xe);const It=A.isDataArrayTexture||A.isData3DTexture,Jn=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){const Ri=x.get(A),Fn=x.get(V),Qn=x.get(Ri.__renderTarget),Iu=x.get(Fn.__renderTarget);ae.bindFramebuffer(R.READ_FRAMEBUFFER,Qn.__webglFramebuffer),ae.bindFramebuffer(R.DRAW_FRAMEBUFFER,Iu.__webglFramebuffer);for(let As=0;As<Fe;As++)It&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,x.get(A).__webglTexture,q,Xe+As),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,x.get(V).__webglTexture,ve,Xt+As)),R.blitFramebuffer(ke,$e,Ue,we,ct,At,Ue,we,R.DEPTH_BUFFER_BIT,R.NEAREST);ae.bindFramebuffer(R.READ_FRAMEBUFFER,null),ae.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||x.has(A)){const Ri=x.get(A),Fn=x.get(V);ae.bindFramebuffer(R.READ_FRAMEBUFFER,ua),ae.bindFramebuffer(R.DRAW_FRAMEBUFFER,hn);for(let Qn=0;Qn<Fe;Qn++)It?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ri.__webglTexture,q,Xe+Qn):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ri.__webglTexture,q),Jn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Fn.__webglTexture,ve,Xt+Qn):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Fn.__webglTexture,ve),q!==0?R.blitFramebuffer(ke,$e,Ue,we,ct,At,Ue,we,R.COLOR_BUFFER_BIT,R.NEAREST):Jn?R.copyTexSubImage3D(Et,ve,ct,At,Xt+Qn,ke,$e,Ue,we):R.copyTexSubImage2D(Et,ve,ct,At,ke,$e,Ue,we);ae.bindFramebuffer(R.READ_FRAMEBUFFER,null),ae.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Jn?A.isDataTexture||A.isData3DTexture?R.texSubImage3D(Et,ve,ct,At,Xt,Ue,we,Fe,Pt,Ye,Yt.data):V.isCompressedArrayTexture?R.compressedTexSubImage3D(Et,ve,ct,At,Xt,Ue,we,Fe,Pt,Yt.data):R.texSubImage3D(Et,ve,ct,At,Xt,Ue,we,Fe,Pt,Ye,Yt):A.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ve,ct,At,Ue,we,Pt,Ye,Yt.data):A.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ve,ct,At,Yt.width,Yt.height,Pt,Yt.data):R.texSubImage2D(R.TEXTURE_2D,ve,ct,At,Ue,we,Pt,Ye,Yt);R.pixelStorei(R.UNPACK_ROW_LENGTH,xt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,fi),R.pixelStorei(R.UNPACK_SKIP_PIXELS,fa),R.pixelStorei(R.UNPACK_SKIP_ROWS,hi),R.pixelStorei(R.UNPACK_SKIP_IMAGES,vo),ve===0&&V.generateMipmaps&&R.generateMipmap(Et),ae.unbindTexture()},this.initRenderTarget=function(A){x.get(A).__webglFramebuffer===void 0&&N.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?N.setTextureCube(A,0):A.isData3DTexture?N.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?N.setTexture2DArray(A,0):N.setTexture2D(A,0),ae.unbindTexture()},this.resetState=function(){F=0,z=0,H=null,ae.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ur}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}}const vC={class:"fixed inset-0 pointer-events-none z-0 overflow-hidden hidden md:block"},xC={__name:"Background3D",setup(i){const e=Ii(null);let t=null,n=null,r=null,s=null,a,o=0,l=null,c=null,u=null,f=null,h=null,d=null,g=null,_=null,m=0,p=0;const M=new Mb,y=new is(new W(0,0,1),-1.5),v=new tt,b=new W,w=new W,T={targetX:0,targetY:0,x:0,y:0},P=k=>{T.targetX=k.clientX/window.innerWidth*2-1,T.targetY=-(k.clientY/window.innerHeight)*2+1,p=performance.now()},S=()=>{p=0},E=()=>{if(!e.value)return;const k=window.innerWidth,B=window.innerHeight;n=new ib,n.fog=new Tp(198418,.08),r=new Si(50,k/B,.1,100),r.position.z=7,t=new gC({canvas:e.value,alpha:!0,antialias:!0,powerPreference:"high-performance"}),t.setSize(k,B),t.setPixelRatio(Math.min(window.devicePixelRatio,2));const X=new xb(16777215,.7);n.add(X);const ce=new vb(440020,3);ce.position.set(5,5,4),n.add(ce);const U=new Ff(6514417,4,15);U.position.set(-6,-4,2),n.add(U);const fe=new Ff(11032055,3,15);fe.position.set(4,-5,-2),n.add(fe),d=new Ff(9298150,0,8,2),n.add(d);const Le=document.createElement("canvas");Le.width=Le.height=64;const ze=Le.getContext("2d"),He=ze.createRadialGradient(32,32,0,32,32,32);He.addColorStop(0,"rgba(180,245,255,0.8)"),He.addColorStop(.18,"rgba(100,220,245,0.35)"),He.addColorStop(.5,"rgba(65,155,230,0.08)"),He.addColorStop(1,"rgba(65,155,230,0)"),ze.fillStyle=He,ze.fillRect(0,0,64,64),_=new fb(Le),g=new sb(new Vv({map:_,transparent:!0,opacity:0,blending:ou,depthWrite:!1})),g.scale.set(1.6,1.6,1),n.add(g),l=new Ho,n.add(l);const je=new Ap(1.35,1),ne=new If({color:959977,roughness:.15,metalness:.85,wireframe:!1,flatShading:!0});c=new Wi(je,ne),c.position.set(2.8,.4,-.5),l.add(c);const re=new Rp(.85,.22,100,16),Me=new If({color:6514417,roughness:.3,metalness:.9,wireframe:!0});u=new Wi(re,Me),u.position.set(-3.2,1.8,-1.8),l.add(u);const Oe=new Cp(1.1,0),Ae=new If({color:3718648,roughness:.1,metalness:.95});f=new Wi(Oe,Ae),f.position.set(-2.6,-2.1,-.8),l.add(f);for(const j of[c,u,f])j.material.emissiveIntensity=0;const We=220,D=new ci,L=new Float32Array(We*3),G=new Float32Array(We);for(let j=0;j<We*3;j+=3)L[j]=(Math.random()-.5)*20,L[j+1]=(Math.random()-.5)*20,L[j+2]=(Math.random()-.5)*15,G[j/3]=Math.random()*2+.5;D.setAttribute("position",new Gi(L,3));const ie=new Gv({color:3718648,size:.07,transparent:!0,opacity:.65,blending:ou});h=new ub(D,ie),l.add(h),window.addEventListener("mousemove",P,{passive:!0}),document.addEventListener("mouseleave",S),window.addEventListener("blur",S),window.addEventListener("resize",H),z()};let F=new m_;const z=()=>{if(s=requestAnimationFrame(z),document.hidden)return;const k=F.getElapsedTime();if(T.x+=(T.targetX-T.x)*.05,T.y+=(T.targetY-T.y)*.05,l){const B=Math.min(window.scrollY/Math.max(window.innerHeight*2,1),1);o+=(B-o)*.035,l.position.z=-o*2,l.rotation.z=o*.22,l.rotation.y=T.x*.28+o*.6,l.rotation.x=-T.y*.22}if(c&&(c.rotation.x=k*.25,c.rotation.y=k*.35,c.position.y=.4+Math.sin(k*1.4)*.22),u&&(u.rotation.x=-k*.3,u.rotation.y=k*.4,u.position.y=1.8+Math.cos(k*1.1)*.25),f&&(f.rotation.y=k*.35,f.rotation.z=k*.2,f.position.y=-2.1+Math.sin(k*1.6)*.2),h&&(h.rotation.y=k*.02),d&&g&&r){const B=p?Math.max(0,1-(performance.now()-p)/1600):0;m+=(B-m)*.07,v.set(T.x,T.y),M.setFromCamera(v,r),M.ray.intersectPlane(y,b)&&(d.position.copy(b),g.position.copy(b)),d.intensity=m*16,g.material.opacity=m*.55,l.updateMatrixWorld(!0);for(const X of[c,u,f]){X.getWorldPosition(w);const ce=(r.position.z-b.z)/(r.position.z-w.z),U=w.x*ce-b.x,fe=w.y*ce-b.y,Le=Math.max(0,1-Math.hypot(U,fe)/2);X.material.emissive.setHex(X===u?6514417:1226202),X.material.emissiveIntensity+=(Le*m*.8-X.material.emissiveIntensity)*.08}}t&&n&&r&&t.render(n,r)},H=()=>{if(!r||!t)return;const k=window.innerWidth,B=window.innerHeight;r.aspect=k/B,r.updateProjectionMatrix(),t.setSize(k,B),t.setPixelRatio(Math.min(window.devicePixelRatio,2))},Z=()=>{s&&cancelAnimationFrame(s),s=null,window.removeEventListener("mousemove",P),document.removeEventListener("mouseleave",S),window.removeEventListener("blur",S),window.removeEventListener("resize",H),n?.traverse(k=>{k.geometry?.dispose(),(Array.isArray(k.material)?k.material:[k.material]).forEach(X=>X?.dispose())}),_?.dispose(),_=null,d=null,g=null,m=0,p=0,t?.dispose(),t=null,n=null},K=()=>{if(a.matches&&!t)try{F=new m_,E()}catch{Z()}else!a.matches&&t&&Z()};return Su(()=>{a=window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)"),a.addEventListener("change",K),K()}),po(()=>{a?.removeEventListener("change",K),Z()}),(k,B)=>(Ot(),zt("div",vC,[le("canvas",{"aria-hidden":"true",ref_key:"canvasRef",ref:e,class:"w-full h-full block"},null,512)]))}};let Zv;try{Zv=localStorage.getItem("language")}catch{}const Md=Ii(Zv==="en"?"en":"it");document.documentElement.lang=Md.value;const SC={it:{heroTitle:"Tommaso Cont!",heroSubtitle:"Full Stack Developer",aboutMeTitle:"Il mio",aboutMeHighlight:"Percorso",aboutMeDescription:"Mi sono avvicinato allo sviluppo web durante le superiori, imparando a creare le mie prime interfacce. Ho completato la mia formazione come Web Developer all'ITS LAST.",whoAmI:"Chi Sono?",whoAmIDescription:"Ho completato la mia formazione in sviluppo web all'ITS LAST come Full Stack Developer, e ora sono alla ricerca di nuove opportunità lavorative per mettermi alla prova sul campo.",downloadCV:"Scarica il CV",skillsTitle:"Le mie",skillsHighlight:"Competenze",projectsTitle:"I miei",projectsHighlight:"Progetti",seeOnGithub:"Vedi su GitHub",projects:{streaming:{title:"Sito Streaming",description:"Sito personale per vedere trailer di film e serie tv."},budgetManager:{title:"Budget Manager",description:"Webapp per la gestione del budget personale con grafici interattivi."},mapIterative:{title:"Mappa Iterativa",description:"Mappa interattiva che mostra un elenco di servizi in una determinata area geografica."}}},en:{heroTitle:"Tommaso Cont!",heroSubtitle:"Full Stack Developer",aboutMeTitle:"My",aboutMeHighlight:"Journey",aboutMeDescription:"My interest in web development began in high school, where I learned to create my first interfaces. I have completed my training as a Web Developer at ITS LAST.",whoAmI:"Who Am I?",whoAmIDescription:"I completed my training in web development at ITS LAST as a Full Stack Developer, and I am now seeking new career opportunities to apply my skills in the field.",downloadCV:"Download CV",skillsTitle:"My",skillsHighlight:"Skills",projectsTitle:"My",projectsHighlight:"Projects",seeOnGithub:"View on GitHub",projects:{streaming:{title:"Streaming Website",description:"Personal website to watch movies and TV series trailers."},budgetManager:{title:"Budget Manager",description:"Web app for managing personal budget with interactive charts."},mapIterative:{title:"Interactive Map",description:"Interactive map showing a list of services in a specific geographic area."}}}},go=()=>{const i=Md,e=r=>{const s=r.split(".");let a=SC[i.value];for(const o of s)a=a[o];return a||r},t=r=>{if(["it","en"].includes(r)){Md.value=r,document.documentElement.lang=r;try{localStorage.setItem("language",r)}catch{}}};return{language:i,t:e,setLanguage:t,toggleLanguage:()=>{t(i.value==="it"?"en":"it")}}},MC="/assets/Tommaso%20Cont%20CV-C2fJ9scl.pdf",yC="/assets/profile-DoJcIkbn.jpeg",bC={class:"profile-layout"},EC={"data-reveal":""},TC={class:"display-title"},wC={class:"muted"},AC={class:"intro-copy"},CC=["href"],RC={class:"portrait","data-reveal":""},PC=["src"],DC={class:"journey"},LC={class:"journey-intro"},IC={class:"eyebrow"},UC={class:"journey-steps"},FC={class:"step-number"},NC={class:"eyebrow"},OC={key:0,class:"availability"},BC={__name:"AboutMe",setup(i){const{language:e,t}=go(),n=Hr(()=>e.value==="it"),r=Ii(null),s=Hr(()=>[{period:"2018 — 2023",title:"ITCS Lorgna · Pindemonte",copy:n.value?"Sistemi Informativi Aziendali: dalle prime pagine HTML alla logica di programmazione e ai database.":"Business Information Systems: from my first HTML pages to programming logic and databases."},{period:"2024 — 2026",title:"ITS LAST · Web Developer",copy:n.value?"Un percorso full stack completato, tra progetti concreti, lavoro in team e stage aziendali.":"A completed full stack programme through hands-on projects, teamwork and internships."},{period:n.value?"2026 — Oggi":"2026 — Today",title:(n.value,"Junior Full Stack Developer"),copy:n.value?"Cerco un’opportunità come Junior Full Stack Developer. Un team con cui confrontarmi, problemi nuovi da risolvere e spazio per crescere.":"Looking for an opportunity as a Junior Full Stack Developer. A team to learn with, new problems to solve and room to grow."}]);let a;return Su(()=>{a=Ui.matchMedia(),a.add("(prefers-reduced-motion: no-preference)",()=>{const o=Ui.timeline({scrollTrigger:{trigger:".journey",start:"top 65%",end:"bottom 65%",scrub:.7}});o.fromTo(".journey-progress span",{scaleX:0},{scaleX:1,ease:"none",duration:3},0),Ui.utils.toArray(".journey-step",r.value).forEach((l,c)=>{o.fromTo(l,{opacity:.3,x:18},{opacity:1,x:0,duration:.65},c),o.fromTo(l.querySelector(".step-number"),{color:"#718096"},{color:"#8de0e6",duration:.65},c)})},r.value)}),po(()=>a?.revert()),(o,l)=>(Ot(),zt("div",{ref_key:"root",ref:r,class:"section-wrap"},[le("div",bC,[le("div",EC,[le("h2",TC,[ni(Ze(n.value?"Tutto parte":"It starts"),1),l[0]||(l[0]=le("br",null,null,-1)),le("span",wC,Ze(n.value?"dalla curiosità.":"with curiosity."),1)]),le("p",AC,Ze(Fr(t)("aboutMeDescription")),1),le("a",{href:Fr(MC),target:"_blank",rel:"noopener",class:"text-link"},[ni(Ze(n.value?"Leggi il mio CV":"Read my CV")+" ",1),l[1]||(l[1]=le("span",{"aria-hidden":"true"},"↗",-1))],8,CC)]),le("figure",RC,[le("img",{src:Fr(yC),alt:"Tommaso Cont",loading:"lazy",width:"400",height:"500"},null,8,PC),le("figcaption",null,[l[2]||(l[2]=ni("Tommaso Cont ",-1)),le("span",null,Ze(n.value?"Verona, Italia":"Verona, Italy"),1)])])]),le("div",DC,[le("div",LC,[le("p",IC,Ze(n.value?"Formazione":"Education"),1),le("h3",null,Ze(n.value?"Il mio percorso nello sviluppo web.":"My path into web development."),1),l[3]||(l[3]=le("div",{class:"journey-progress","aria-hidden":"true"},[le("span")],-1))]),le("ol",UC,[(Ot(!0),zt(_n,null,Nr(s.value,(c,u)=>(Ot(),zt("li",{key:u,class:"journey-step"},[le("span",FC,"0"+Ze(u+1),1),le("div",null,[le("p",NC,Ze(c.period),1),le("h3",null,Ze(c.title),1),le("p",null,Ze(c.copy),1),u===2?(Ot(),zt("span",OC,Ze(n.value?"Aperto a nuove opportunità":"Open to opportunities"),1)):Bd("",!0)])]))),128))])])],512))}},zC=[{name:"JavaScript",color:"#f7df1e",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0z"/><path fill="#111827" d="M6.3 18.2c.4.7.8 1.2 1.6 1.2.8 0 1.3-.3 1.3-1.5v-8h2.5v8c0 2.5-1.5 3.6-3.7 3.6-2 0-3.2-1-3.8-2.3l2.1-1zm8.7-.2c.6 1 1.3 1.6 2.6 1.6 1.1 0 1.8-.5 1.8-1.3 0-.9-.7-1.2-1.9-1.7l-.7-.3c-1.9-.8-3.2-1.8-3.2-3.8 0-1.9 1.5-3.3 3.8-3.3 1.6 0 2.8.6 3.6 2l-2 1.3c-.4-.8-.9-1.1-1.6-1.1-.8 0-1.3.5-1.3 1.1 0 .8.5 1.1 1.6 1.6l.7.3c2.3 1 3.5 1.9 3.5 4 0 2.3-1.8 3.5-4.3 3.5-2.4 0-3.9-1.1-4.7-2.7L15 18z"/></svg>'},{name:"React",color:"#06b6d4",svg:'<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="2" fill="currentColor"/><ellipse cx="12" cy="12" rx="10" ry="3.8"/><ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(120 12 12)"/></svg>'},{name:"Vue.js",color:"#42b883",svg:'<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M2 4h4l6 10 6-10h4L12 22 2 4zm5 0h4l1 2 1-2h4l-5 8.5L7 4z"/></svg>'},{name:"TypeScript",color:"#3178c6",svg:'<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>'},{name:"Node.js",color:"#22c55e",svg:'<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 1.6c-.3 0-.5.07-.7.2L3 6.5c-.4.25-.7.7-.7 1.2v9c0 .5.3.95.7 1.2l2.1 1.2c1 .5 1.4.5 1.8.5 1.4 0 2.2-.85 2.2-2.3V8.4c0-.1-.1-.2-.2-.2H8c-.1 0-.2.1-.2.2v8.6c0 .65-.7 1.3-1.8.75L3.8 16.6c-.07-.04-.1-.12-.1-.2v-9c0-.08.03-.16.1-.2l8.1-4.65c.06-.04.14-.04.2 0l8.1 4.65c.07.04.1.12.1.2v9c0 .08-.04.16-.1.2L12.1 21.25c-.06.04-.14.04-.2 0L9.84 20c-.06-.04-.14-.04-.2 0-.5.3-.6.36-1.1.5-.1.04-.27.1.05.3l2.7 1.6c.3.16.6.25.9.25.3 0 .6-.09.9-.25l8.1-4.65c.4-.25.7-.7.7-1.2v-9c0-.5-.3-.95-.7-1.2L12.7 1.8c-.2-.13-.4-.2-.7-.2z"/></svg>'},{name:"Tailwind CSS",color:"#38bdf8",svg:'<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9 1 2.1 2.2 4.6 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3-.9-1-2.1-2.2-4.6-2.2zM7 12c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9 1 2.1 2.2 4.6 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3-.9-1-2.1-2.2-4.6-2.2z"/></svg>'}],kC=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},VC=["aria-label"],HC={class:"marquee-track"},GC=["aria-hidden"],WC=["innerHTML"],XC={__name:"Marquee",setup(i){const{language:e}=go();return(t,n)=>(Ot(),zt("div",{class:"marquee-container","aria-label":Fr(e)==="it"?"Linguaggi e tecnologie":"Languages and technologies"},[le("div",HC,[(Ot(),zt(_n,null,Nr(2,r=>le("ul",{key:r,class:"marquee-group","aria-hidden":r===2?!0:void 0},[(Ot(!0),zt(_n,null,Nr(Fr(zC),s=>(Ot(),zt("li",{key:s.name,class:"marquee-item"},[le("span",{class:"marquee-logo",style:Al({color:s.color}),"aria-hidden":"true",innerHTML:s.svg},null,12,WC),le("span",null,Ze(s.name),1)]))),128))],8,GC)),64))])],8,VC))}},YC=kC(XC,[["__scopeId","data-v-cd3b88b6"]]),qC={class:"section-wrap"},$C={class:"skills-intro","data-reveal":""},jC={class:"display-title"},KC={class:"muted"},ZC={class:"skills-marquee","data-reveal":""},JC={class:"fullstack-grid","data-reveal":""},QC=["innerHTML"],eR={class:"skill-tools"},tR={__name:"Skills",setup(i){const{language:e}=go(),t=Hr(()=>e.value==="it"),n=s=>{if(s.pointerType==="touch")return;const a=s.currentTarget,o=a.getBoundingClientRect();a.style.setProperty("--pointer-x",`${s.clientX-o.left}px`),a.style.setProperty("--pointer-y",`${s.clientY-o.top}px`)},r=[{titleIt:"Interfacce web",titleEn:"Web interfaces",tools:"React, Next.js, Vue.js",descIt:"Componenti, navigazione e gestione dello stato per collegare le interfacce ai dati.",descEn:"Components, navigation and state management to connect interfaces to data.",color:"#06b6d4",iconSvg:'<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="2" fill="currentColor"/><ellipse cx="12" cy="12" rx="10" ry="3.8"/><ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(120 12 12)"/></svg>'},{titleIt:"Backend e API",titleEn:"Backend & APIs",tools:"Node.js, Express, REST API",descIt:"Endpoint, autenticazione e logica applicativa: la parte che collega le richieste dell’utente al database.",descEn:"Endpoints, authentication and application logic: connecting user requests to the database.",color:"#22c55e",iconSvg:'<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 1.6c-.3 0-.5.07-.7.2L3 6.5c-.4.25-.7.7-.7 1.2v9c0 .5.3.95.7 1.2l2.1 1.2c1 .5 1.4.5 1.8.5 1.4 0 2.2-.85 2.2-2.3V8.4c0-.1-.1-.2-.2-.2H8c-.1 0-.2.1-.2.2v8.6c0 .65-.7 1.3-1.8.75L3.8 16.6c-.07-.04-.1-.12-.1-.2v-9c0-.08.03-.16.1-.2l8.1-4.65c.06-.04.14-.04.2 0l8.1 4.65c.07.04.1.12.1.2v9c0 .08-.04.16-.1.2L12.1 21.25c-.06.04-.14.04-.2 0L9.84 20c-.06-.04-.14-.04-.2 0-.5.3-.6.36-1.1.5-.1.04-.27.1.05.3l2.7 1.6c.3.16.6.25.9.25.3 0 .6-.09.9-.25l8.1-4.65c.4-.25.7-.7.7-1.2v-9c0-.5-.3-.95-.7-1.2L12.7 1.8c-.2-.13-.4-.2-.7-.2z"/></svg>'},{titleIt:"Gestione dei dati",titleEn:"Data management",tools:"PostgreSQL, MongoDB",descIt:"Modelli di dati, relazioni e query per organizzare le informazioni e renderle disponibili all’applicazione.",descEn:"Data models, relationships and queries to organise information and make it available to the application.",color:"#38bdf8",iconSvg:'<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>'},{titleIt:"Logica e tipi",titleEn:"Logic & types",tools:"JavaScript, TypeScript",descIt:"Funzioni, tipi e strutture condivise per gestire i dati tra frontend e backend.",descEn:"Functions, types and shared structures to handle data across the frontend and backend.",color:"#3178c6",iconSvg:'<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>'},{titleIt:"Layout responsive",titleEn:"Responsive layouts",tools:"HTML, CSS, Tailwind CSS",descIt:"Interfacce che si adattano a schermi diversi, con attenzione a spaziature, leggibilità e interazioni.",descEn:"Interfaces that adapt to different screens, with care for spacing, readability and interactions.",color:"#38bdf8",iconSvg:'<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9 1 2.1 2.2 4.6 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3-.9-1-2.1-2.2-4.6-2.2zM7 12c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9 1 2.1 2.2 4.6 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3-.9-1-2.1-2.2-4.6-2.2z"/></svg>'},{titleIt:"Integrazioni",titleEn:"Integrations",tools:"n8n, API",descIt:"Collegamenti tra servizi e automazione di attività ripetitive attraverso flussi di dati.",descEn:"Connections between services and automation of repetitive tasks through data workflows.",color:"#f97316",iconSvg:'<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>'}];return(s,a)=>(Ot(),zt("div",qC,[le("div",$C,[le("h2",jC,[ni(Ze(t.value?"Dall’interfaccia":"From interface"),1),a[0]||(a[0]=le("br",null,null,-1)),le("span",KC,Ze(t.value?"al database.":"to database."),1)]),le("p",null,Ze(t.value?"Il mio approccio è full stack: capire come interfaccia, logica e dati lavorano insieme per costruire un’applicazione completa.":"My approach is full stack: understanding how interfaces, logic and data work together to build a complete application."),1)]),le("div",ZC,[Xn(YC)]),le("div",JC,[(Ot(),zt(_n,null,Nr(r,o=>le("article",{key:o.titleEn,class:"fullstack-card",onPointermove:n,style:Al({"--skill-color":o.color})},[le("div",{class:"fullstack-icon","aria-hidden":"true",innerHTML:o.iconSvg},null,8,QC),le("h3",null,Ze(t.value?o.titleIt:o.titleEn),1),le("p",eR,Ze(o.tools),1),le("p",null,Ze(t.value?o.descIt:o.descEn),1)],36)),64))])]))}},nR="/assets/image-RJ4ijbcC.png",iR="/assets/Screenshot%202026-01-14%20alle%2014.42.12-D9lPzdpJ.png",rR="/assets/Screenshot%202026-01-14%20alle%2014.56.01-DVHFK8vU.png",sR="/assets/erasmusmeet-BkjHgaZY.png",Ua=[{title:"ErasmusMeet",titleEn:"ErasmusMeet",year:"2026",description:"Social network full stack per studenti Erasmus per connettersi e incontrarsi, con profili, feed e chat.",descriptionEn:"Full stack social network for Erasmus students to connect and meet, with profiles, feed, and chat.",image:sR,technologies:["Vue.js","Express.js","PostgreSQL","REST API"],githubUrl:"https://github.com/RealComba",liveUrl:"https://erasmus-meet.vercel.app/",linkText:"Visita",linkTextEn:"Visit"},{title:"Sito Streaming",titleEn:"Streaming Website",year:"2025",description:"Un catalogo di film e serie TV con trailer e dati forniti da TMDB.",descriptionEn:"A catalogue of movies and TV shows with trailers and data from TMDB.",image:nR,technologies:["React","Tailwind","JavaScript","TMDB API"],githubUrl:"https://github.com/RealComba/react-movie.git"},{title:"Budget Manager",titleEn:"Budget Manager",year:"2025",description:"Un’app per tenere traccia di entrate e spese, organizzarle per categoria e visualizzarle con grafici.",descriptionEn:"An app to track income and expenses, organise them by category and visualise them with charts.",image:iR,technologies:["Vue.js","Tailwind","Chart.js","Local Storage"],githubUrl:"https://github.com/RealComba/vue-budget"},{title:"Mappa Interattiva Europea",titleEn:"Interactive European Map",year:"2026",description:"Una mappa per esplorare servizi e punti di interesse, filtrandoli per area geografica.",descriptionEn:"A map for exploring services and points of interest, filtered by geographic area.",image:rR,technologies:["Vue.js","Tailwind","Leaflet","GeoJSON"],githubUrl:"https://github.com/RealComba/Interactive-Europe-Map"}],aR={class:"section-wrap"},oR={class:"projects-heading","data-reveal":""},lR={class:"display-title"},cR={class:"muted"},uR={class:"project-explorer","data-reveal":""},fR=["aria-label"],hR=["id","aria-selected","tabindex","onClick","onKeydown"],dR=["aria-labelledby"],pR={class:"project-preview"},mR=["src","alt"],_R={class:"project-details"},gR={class:"project-description"},vR={class:"tech-list","aria-label":"Stack"},xR={class:"project-actions"},SR=["href"],MR=["href"],yR={__name:"Project",setup(i){const{language:e}=go(),t=Hr(()=>e.value==="it"),n=Ii(0),r=Ii(null),s=Hr(()=>Ua[n.value]);let a;async function o(c){n.value!==c&&(a?.revert(),n.value=c,await Wc(),window.matchMedia("(prefers-reduced-motion: reduce)").matches||(a=Ui.fromTo(r.value,{opacity:0,y:12},{opacity:1,y:0,duration:.4,clearProps:"all"})))}function l(c,u){const f={ArrowDown:(u+1)%Ua.length,ArrowUp:(u-1+Ua.length)%Ua.length,Home:0,End:Ua.length-1};c.key in f&&(c.preventDefault(),o(f[c.key]),document.getElementById(`project-tab-${f[c.key]}`).focus())}return po(()=>a?.revert()),(c,u)=>(Ot(),zt("div",aR,[le("div",oR,[le("h2",lR,[ni(Ze(t.value?"Idee, messe":"Ideas, brought"),1),u[0]||(u[0]=le("br",null,null,-1)),le("span",cR,Ze(t.value?"in pratica.":"to life."),1)]),le("p",null,Ze(t.value?"Scegli un progetto. Esplora l’interfaccia, scopri lo stack e apri il codice.":"Pick a project. Explore the interface, discover the stack and open the code."),1)]),le("div",uR,[le("div",{class:"project-index",role:"tablist","aria-label":t.value?"Scegli un progetto":"Choose a project","aria-orientation":"vertical"},[(Ot(!0),zt(_n,null,Nr(Fr(Ua),(f,h)=>(Ot(),zt("button",{key:f.title,id:`project-tab-${h}`,role:"tab","aria-selected":n.value===h,"aria-controls":"project-panel",tabindex:n.value===h?0:-1,onClick:d=>o(h),onKeydown:d=>l(d,h),class:$s({selected:n.value===h})},[le("span",null,[ni(Ze(t.value?f.title:f.titleEn),1),le("small",null,Ze(f.year)+" / "+Ze(f.technologies[0]),1)]),u[1]||(u[1]=le("span",{"aria-hidden":"true"},"↗",-1))],42,hR))),128))],8,fR),le("div",{id:"project-panel",role:"tabpanel","aria-labelledby":`project-tab-${n.value}`,tabindex:"0",class:"project-panel"},[le("div",{ref_key:"detail",ref:r},[le("div",pR,[le("img",{src:s.value.image,alt:`${t.value?"Anteprima":"Preview"} — ${t.value?s.value.title:s.value.titleEn}`,width:"1200",height:"750",loading:"lazy"},null,8,mR)]),le("div",_R,[le("p",gR,Ze(t.value?s.value.description:s.value.descriptionEn),1),le("ul",vR,[(Ot(!0),zt(_n,null,Nr(s.value.technologies,f=>(Ot(),zt("li",{key:f},Ze(f),1))),128))]),le("div",xR,[s.value.liveUrl?(Ot(),zt("a",{key:0,href:s.value.liveUrl,target:"_blank",rel:"noopener noreferrer",class:"text-link"},Ze(t.value?"Apri il progetto":"Open project")+" ↗",9,SR)):Bd("",!0),le("a",{href:s.value.githubUrl,target:"_blank",rel:"noopener noreferrer",class:"text-link"},Ze(s.value.githubUrl==="https://github.com/RealComba"?t.value?"Profilo GitHub":"GitHub profile":t.value?"Esplora il codice":"Explore the code")+" ↗",9,MR)])])],512)],8,dR)])]))}},bR={class:"contact-footer"},ER={class:"section-wrap"},TR={class:"contact-layout","data-reveal":""},wR={class:"display-title"},AR={class:"muted"},CR={class:"contact-copy"},RR={class:"contact-details"},PR=["href"],DR={class:"contact-actions"},LR=["href"],IR={class:"copy-feedback",role:"status"},UR={class:"contact-socials"},FR={href:"tel:+393454815672"},NR={class:"footer-bottom"},Mc="tommaso.cont2004@gmail.com",OR={__name:"Contact",setup(i){const{language:e}=go(),t=Hr(()=>e.value==="it"),n=Ii("");let r,s=!1;async function a(){clearTimeout(r);try{await navigator.clipboard.writeText(Mc),s||(n.value="copied")}catch{s||(n.value="error")}s||(r=setTimeout(()=>{n.value=""},5e3))}return po(()=>{s=!0,clearTimeout(r)}),(o,l)=>(Ot(),zt("footer",bR,[le("div",ER,[le("div",TR,[le("div",null,[le("h2",wR,[ni(Ze(t.value?"Hai un progetto":"Have a project"),1),l[0]||(l[0]=le("br",null,null,-1)),le("span",AR,Ze(t.value?"in mente?":"in mind?"),1)]),le("p",CR,Ze(t.value?"Cerco opportunità come Junior Full Stack Developer. Se vuoi parlare di un progetto o conoscere meglio il mio percorso, scrivimi.":"I’m looking for opportunities as a Junior Full Stack Developer. If you’d like to discuss a project or learn more about my background, get in touch."),1)]),le("div",RR,[le("a",{class:"contact-mail",href:`mailto:${Mc}`},[ni(Ze(Mc)+" "),l[1]||(l[1]=le("span",{"aria-hidden":"true"},"↗",-1))],8,PR),le("div",DR,[le("a",{class:"contact-primary",href:`mailto:${Mc}`},[ni(Ze(t.value?"Scrivimi":"Email me")+" ",1),l[2]||(l[2]=le("span",{"aria-hidden":"true"},"↗",-1))],8,LR),le("button",{class:"text-link",onClick:a},Ze(n.value==="copied"?t.value?"Email copiata":"Email copied":t.value?"Copia email":"Copy email"),1)]),le("p",IR,Ze(n.value==="error"?t.value?"Seleziona l’indirizzo qui sopra per copiarlo.":"Select the address above to copy it.":n.value==="copied"?t.value?"Indirizzo copiato negli appunti.":"Address copied to clipboard.":""),1),le("div",UR,[l[3]||(l[3]=le("a",{href:"https://github.com/RealComba",target:"_blank",rel:"noopener noreferrer"},"GitHub ↗",-1)),l[4]||(l[4]=le("a",{href:"https://www.linkedin.com/in/tommaso-cont-5b7488348/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn ↗",-1)),le("a",FR,Ze(t.value?"Telefono":"Phone")+" ↗",1)])])]),le("div",NR,[le("p",null,"© "+Ze(new Date().getFullYear())+" Tommaso Cont",1),le("p",null,"Full Stack Developer · Verona, "+Ze(t.value?"Italia":"Italy"),1)])])]))}},BR={class:"skip-link",href:"#main"},zR={class:"nav-inner"},kR=["aria-label"],VR=["href","aria-current"],HR={class:"nav-actions"},GR=["aria-label"],WR=["aria-pressed","onClick","aria-label"],XR=["aria-expanded","aria-label"],YR=["aria-label"],qR=["href","aria-current","onClick"],$R={id:"main"},jR={id:"home",class:"hero"},KR={class:"hero-content"},ZR={class:"hero-bottom hero-enter"},JR={class:"text-link",href:"#projects"},QR={tabindex:"-1",id:"about",class:"chapter"},e2={tabindex:"-1",id:"skills",class:"chapter skills-section"},t2={tabindex:"-1",id:"projects",class:"chapter"},n2={tabindex:"-1",id:"contact"},i2={__name:"App",setup(i){const{language:e,setLanguage:t}=go(),n=Hr(()=>e.value==="it"),r=Hr(()=>[{id:"about",label:n.value?"Percorso":"About"},{id:"skills",label:n.value?"Competenze":"Skills"},{id:"projects",label:n.value?"Progetti":"Projects"},{id:"contact",label:n.value?"Contatti":"Contact"}]),s=Ii(null),a=Ii(!1),o=Ii(""),l=Ii(!1),c=Ii(null),u=Ii(null);let f,h,d;const g=(v=!1)=>{l.value&&(l.value=!1,v&&u.value?.focus())},_=async v=>{g(),await Wc(),document.getElementById(v)?.focus({preventScroll:!0})},m=v=>{c.value?.contains(v.target)||g()},p=v=>{v.relatedTarget&&!c.value?.contains(v.relatedTarget)&&g()},M=()=>{if(d.matches&&l.value){const v=c.value?.contains(document.activeElement);g(),v&&c.value?.querySelector(".wordmark")?.focus()}},y=()=>{a.value=window.scrollY>60};return bc(e,async()=>{await Wc(),at.refresh()}),Su(()=>{window.addEventListener("scroll",y,{passive:!0}),document.addEventListener("pointerdown",m),d=window.matchMedia("(min-width: 1024px)"),d.addEventListener("change",M),y(),h=Ui.context(()=>{r.value.forEach(({id:v})=>at.create({trigger:`#${v}`,start:"top 45%",end:"bottom 45%",onToggle:b=>{b.isActive?o.value=v:o.value===v&&(o.value="")}})),f=Ui.matchMedia(),f.add("(prefers-reduced-motion: no-preference)",()=>{Ui.from(".hero-enter",{y:50,opacity:0,duration:1.15,stagger:.14,ease:"power3.out",clearProps:"all"}),Ui.to(".hero-content",{y:-65,opacity:.25,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom 15%",scrub:1}}),Ui.utils.toArray("[data-reveal]").forEach(v=>Ui.from(v,{y:28,opacity:0,duration:.8,ease:"power3.out",clearProps:"all",scrollTrigger:{trigger:v,start:"top 93%",once:!0}}))})},s.value),document.fonts.ready.then(()=>{s.value&&at.refresh()})}),po(()=>{window.removeEventListener("scroll",y),document.removeEventListener("pointerdown",m),d?.removeEventListener("change",M),f?.revert(),h?.revert()}),(v,b)=>(Ot(),zt("div",{ref_key:"root",ref:s,class:"portfolio"},[Xn(xC),le("a",BR,Ze(n.value?"Vai al contenuto":"Skip to content"),1),le("header",{ref_key:"header",ref:c,class:$s(["nav-shell",{"is-scrolled":a.value}]),onKeydown:b[1]||(b[1]=pM(w=>g(!0),["esc"])),onFocusout:p},[le("div",zR,[b[4]||(b[4]=le("a",{href:"#home",class:"wordmark","aria-label":"Tommaso Cont — Home"},[ni("tc"),le("span",null," /")],-1)),le("nav",{class:"nav-links desktop-nav","aria-label":n.value?"Navigazione principale":"Main navigation"},[(Ot(!0),zt(_n,null,Nr(r.value,w=>(Ot(),zt("a",{key:w.id,href:`#${w.id}`,class:$s({active:o.value===w.id}),"aria-current":o.value===w.id?"location":void 0},Ze(w.label),11,VR))),128))],8,kR),le("div",HR,[le("div",{class:"language-switch",role:"group","aria-label":n.value?"Lingua":"Language"},[(Ot(),zt(_n,null,Nr(["it","en"],w=>le("button",{key:w,"aria-pressed":Fr(e)===w,onClick:T=>Fr(t)(w),"aria-label":w==="it"?"Italiano":"English"},Ze(w.toUpperCase()),9,WR)),64))],8,GR),le("button",{ref_key:"menuButton",ref:u,class:$s(["menu-toggle",{"is-open":l.value}]),"aria-expanded":l.value,"aria-controls":"mobile-navigation","aria-label":l.value?n.value?"Chiudi menu":"Close menu":n.value?"Apri menu":"Open menu",onClick:b[0]||(b[0]=w=>l.value=!l.value)},[...b[2]||(b[2]=[le("span",{"aria-hidden":"true"},null,-1),le("span",{"aria-hidden":"true"},null,-1)])],10,XR)]),l.value?(Ot(),zt("nav",{key:0,id:"mobile-navigation",class:"mobile-navigation","aria-label":n.value?"Navigazione mobile":"Mobile navigation"},[(Ot(!0),zt(_n,null,Nr(r.value,w=>(Ot(),zt("a",{key:w.id,href:`#${w.id}`,"aria-current":o.value===w.id?"location":void 0,onClick:T=>_(w.id)},[ni(Ze(w.label)+" ",1),b[3]||(b[3]=le("span",{"aria-hidden":"true"},"↗",-1))],8,qR))),128))],8,YR)):Bd("",!0)])],34),le("main",$R,[le("section",jR,[le("div",KR,[b[6]||(b[6]=le("p",{class:"eyebrow hero-enter"},"Full Stack Developer · Verona, IT",-1)),b[7]||(b[7]=le("h1",{class:"hero-name hero-enter"},[ni("Tommaso"),le("br"),le("span",null,"Cont.")],-1)),le("div",ZR,[le("p",null,Ze(n.value?"Sviluppo applicazioni web, dall’interfaccia alle API e ai dati.":"I build web applications, from interfaces to APIs and data."),1),le("a",JR,[ni(Ze(n.value?"Esplora i progetti":"Explore projects")+" ",1),b[5]||(b[5]=le("span",{"aria-hidden":"true"},"↗",-1))])])])]),le("section",QR,[Xn(BC)]),le("section",e2,[Xn(tR)]),le("section",t2,[Xn(yR)]),le("section",n2,[Xn(OR)])])],512))}};Ui.registerPlugin(at);gM(i2).mount("#app");
