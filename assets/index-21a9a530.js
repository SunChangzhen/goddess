(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Qc(i,e){const t=Object.create(null),n=i.split(",");for(let r=0;r<n.length;r++)t[n[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const at={},ls=[],kn=()=>{},C_=()=>!1,P_=/^on[^a-z]/,Ga=i=>P_.test(i),eu=i=>i.startsWith("onUpdate:"),Nt=Object.assign,tu=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},L_=Object.prototype.hasOwnProperty,$e=(i,e)=>L_.call(i,e),Be=Array.isArray,no=i=>Va(i)==="[object Map]",D_=i=>Va(i)==="[object Set]",Xe=i=>typeof i=="function",Ot=i=>typeof i=="string",nu=i=>typeof i=="symbol",Mt=i=>i!==null&&typeof i=="object",qd=i=>Mt(i)&&Xe(i.then)&&Xe(i.catch),I_=Object.prototype.toString,Va=i=>I_.call(i),U_=i=>Va(i).slice(8,-1),N_=i=>Va(i)==="[object Object]",iu=i=>Ot(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,_a=Qc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wa=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},O_=/-(\w)/g,gs=Wa(i=>i.replace(O_,(e,t)=>t?t.toUpperCase():"")),F_=/\B([A-Z])/g,Us=Wa(i=>i.replace(F_,"-$1").toLowerCase()),Yd=Wa(i=>i.charAt(0).toUpperCase()+i.slice(1)),fl=Wa(i=>i?`on${Yd(i)}`:""),ba=(i,e)=>!Object.is(i,e),hl=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},Aa=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},B_=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let lf;const hc=()=>lf||(lf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ru(i){if(Be(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=Ot(n)?G_(n):ru(n);if(r)for(const s in r)e[s]=r[s]}return e}else{if(Ot(i))return i;if(Mt(i))return i}}const k_=/;(?![^(]*\))/g,z_=/:([^]+)/,H_=/\/\*[^]*?\*\//g;function G_(i){const e={};return i.replace(H_,"").split(k_).forEach(t=>{if(t){const n=t.split(z_);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function su(i){let e="";if(Ot(i))e=i;else if(Be(i))for(let t=0;t<i.length;t++){const n=su(i[t]);n&&(e+=n+" ")}else if(Mt(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const V_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",W_=Qc(V_);function Kd(i){return!!i||i===""}let Dn;class X_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Dn,!e&&Dn&&(this.index=(Dn.scopes||(Dn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Dn;try{return Dn=this,e()}finally{Dn=t}}}on(){Dn=this}off(){Dn=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function j_(i,e=Dn){e&&e.active&&e.effects.push(i)}function q_(){return Dn}const ou=i=>{const e=new Set(i);return e.w=0,e.n=0,e},$d=i=>(i.w&Ki)>0,Zd=i=>(i.n&Ki)>0,Y_=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=Ki},K_=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const r=e[n];$d(r)&&!Zd(r)?r.delete(i):e[t++]=r,r.w&=~Ki,r.n&=~Ki}e.length=t}},dc=new WeakMap;let Zs=0,Ki=1;const pc=30;let Nn;const yr=Symbol(""),mc=Symbol("");class au{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,j_(this,n)}run(){if(!this.active)return this.fn();let e=Nn,t=Gi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Nn,Nn=this,Gi=!0,Ki=1<<++Zs,Zs<=pc?Y_(this):cf(this),this.fn()}finally{Zs<=pc&&K_(this),Ki=1<<--Zs,Nn=this.parent,Gi=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Nn===this?this.deferStop=!0:this.active&&(cf(this),this.onStop&&this.onStop(),this.active=!1)}}function cf(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let Gi=!0;const Jd=[];function Ns(){Jd.push(Gi),Gi=!1}function Os(){const i=Jd.pop();Gi=i===void 0?!0:i}function sn(i,e,t){if(Gi&&Nn){let n=dc.get(i);n||dc.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=ou()),Qd(r)}}function Qd(i,e){let t=!1;Zs<=pc?Zd(i)||(i.n|=Ki,t=!$d(i)):t=!i.has(Nn),t&&(i.add(Nn),Nn.deps.push(i))}function yi(i,e,t,n,r,s){const o=dc.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Be(i)){const l=Number(n);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Be(i)?iu(t)&&a.push(o.get("length")):(a.push(o.get(yr)),no(i)&&a.push(o.get(mc)));break;case"delete":Be(i)||(a.push(o.get(yr)),no(i)&&a.push(o.get(mc)));break;case"set":no(i)&&a.push(o.get(yr));break}if(a.length===1)a[0]&&_c(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);_c(ou(l))}}function _c(i,e){const t=Be(i)?i:[...i];for(const n of t)n.computed&&uf(n);for(const n of t)n.computed||uf(n)}function uf(i,e){(i!==Nn||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const $_=Qc("__proto__,__v_isRef,__isVue"),ep=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(nu)),Z_=lu(),J_=lu(!1,!0),Q_=lu(!0),ff=eg();function eg(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=tt(this);for(let s=0,o=this.length;s<o;s++)sn(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map(tt)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){Ns();const n=tt(this)[e].apply(this,t);return Os(),n}}),i}function tg(i){const e=tt(this);return sn(e,"has",i),e.hasOwnProperty(i)}function lu(i=!1,e=!1){return function(n,r,s){if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(i?e?gg:sp:e?rp:ip).get(n))return n;const o=Be(n);if(!i){if(o&&$e(ff,r))return Reflect.get(ff,r,s);if(r==="hasOwnProperty")return tg}const a=Reflect.get(n,r,s);return(nu(r)?ep.has(r):$_(r))||(i||sn(n,"get",r),e)?a:$t(a)?o&&iu(r)?a:a.value:Mt(a)?i?op(a):fu(a):a}}const ng=tp(),ig=tp(!0);function tp(i=!1){return function(t,n,r,s){let o=t[n];if(fo(o)&&$t(o)&&!$t(r))return!1;if(!i&&(!gc(r)&&!fo(r)&&(o=tt(o),r=tt(r)),!Be(t)&&$t(o)&&!$t(r)))return o.value=r,!0;const a=Be(t)&&iu(n)?Number(n)<t.length:$e(t,n),l=Reflect.set(t,n,r,s);return t===tt(s)&&(a?ba(r,o)&&yi(t,"set",n,r):yi(t,"add",n,r)),l}}function rg(i,e){const t=$e(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&yi(i,"delete",e,void 0),n}function sg(i,e){const t=Reflect.has(i,e);return(!nu(e)||!ep.has(e))&&sn(i,"has",e),t}function og(i){return sn(i,"iterate",Be(i)?"length":yr),Reflect.ownKeys(i)}const np={get:Z_,set:ng,deleteProperty:rg,has:sg,ownKeys:og},ag={get:Q_,set(i,e){return!0},deleteProperty(i,e){return!0}},lg=Nt({},np,{get:J_,set:ig}),cu=i=>i,Xa=i=>Reflect.getPrototypeOf(i);function Oo(i,e,t=!1,n=!1){i=i.__v_raw;const r=tt(i),s=tt(e);t||(e!==s&&sn(r,"get",e),sn(r,"get",s));const{has:o}=Xa(r),a=n?cu:t?pu:du;if(o.call(r,e))return a(i.get(e));if(o.call(r,s))return a(i.get(s));i!==r&&i.get(e)}function Fo(i,e=!1){const t=this.__v_raw,n=tt(t),r=tt(i);return e||(i!==r&&sn(n,"has",i),sn(n,"has",r)),i===r?t.has(i):t.has(i)||t.has(r)}function Bo(i,e=!1){return i=i.__v_raw,!e&&sn(tt(i),"iterate",yr),Reflect.get(i,"size",i)}function hf(i){i=tt(i);const e=tt(this);return Xa(e).has.call(e,i)||(e.add(i),yi(e,"add",i,i)),this}function df(i,e){e=tt(e);const t=tt(this),{has:n,get:r}=Xa(t);let s=n.call(t,i);s||(i=tt(i),s=n.call(t,i));const o=r.call(t,i);return t.set(i,e),s?ba(e,o)&&yi(t,"set",i,e):yi(t,"add",i,e),this}function pf(i){const e=tt(this),{has:t,get:n}=Xa(e);let r=t.call(e,i);r||(i=tt(i),r=t.call(e,i)),n&&n.call(e,i);const s=e.delete(i);return r&&yi(e,"delete",i,void 0),s}function mf(){const i=tt(this),e=i.size!==0,t=i.clear();return e&&yi(i,"clear",void 0,void 0),t}function ko(i,e){return function(n,r){const s=this,o=s.__v_raw,a=tt(o),l=e?cu:i?pu:du;return!i&&sn(a,"iterate",yr),o.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function zo(i,e,t){return function(...n){const r=this.__v_raw,s=tt(r),o=no(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?cu:e?pu:du;return!e&&sn(s,"iterate",l?mc:yr),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function wi(i){return function(...e){return i==="delete"?!1:this}}function cg(){const i={get(s){return Oo(this,s)},get size(){return Bo(this)},has:Fo,add:hf,set:df,delete:pf,clear:mf,forEach:ko(!1,!1)},e={get(s){return Oo(this,s,!1,!0)},get size(){return Bo(this)},has:Fo,add:hf,set:df,delete:pf,clear:mf,forEach:ko(!1,!0)},t={get(s){return Oo(this,s,!0)},get size(){return Bo(this,!0)},has(s){return Fo.call(this,s,!0)},add:wi("add"),set:wi("set"),delete:wi("delete"),clear:wi("clear"),forEach:ko(!0,!1)},n={get(s){return Oo(this,s,!0,!0)},get size(){return Bo(this,!0)},has(s){return Fo.call(this,s,!0)},add:wi("add"),set:wi("set"),delete:wi("delete"),clear:wi("clear"),forEach:ko(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=zo(s,!1,!1),t[s]=zo(s,!0,!1),e[s]=zo(s,!1,!0),n[s]=zo(s,!0,!0)}),[i,t,e,n]}const[ug,fg,hg,dg]=cg();function uu(i,e){const t=e?i?dg:hg:i?fg:ug;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get($e(t,r)&&r in n?t:n,r,s)}const pg={get:uu(!1,!1)},mg={get:uu(!1,!0)},_g={get:uu(!0,!1)},ip=new WeakMap,rp=new WeakMap,sp=new WeakMap,gg=new WeakMap;function xg(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vg(i){return i.__v_skip||!Object.isExtensible(i)?0:xg(U_(i))}function fu(i){return fo(i)?i:hu(i,!1,np,pg,ip)}function yg(i){return hu(i,!1,lg,mg,rp)}function op(i){return hu(i,!0,ag,_g,sp)}function hu(i,e,t,n,r){if(!Mt(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=vg(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function cs(i){return fo(i)?cs(i.__v_raw):!!(i&&i.__v_isReactive)}function fo(i){return!!(i&&i.__v_isReadonly)}function gc(i){return!!(i&&i.__v_isShallow)}function ap(i){return cs(i)||fo(i)}function tt(i){const e=i&&i.__v_raw;return e?tt(e):i}function lp(i){return Aa(i,"__v_skip",!0),i}const du=i=>Mt(i)?fu(i):i,pu=i=>Mt(i)?op(i):i;function Mg(i){Gi&&Nn&&(i=tt(i),Qd(i.dep||(i.dep=ou())))}function Sg(i,e){i=tt(i);const t=i.dep;t&&_c(t)}function $t(i){return!!(i&&i.__v_isRef===!0)}function Tg(i){return $t(i)?i.value:i}const Eg={get:(i,e,t)=>Tg(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return $t(r)&&!$t(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function cp(i){return cs(i)?i:new Proxy(i,Eg)}class bg{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new au(e,()=>{this._dirty||(this._dirty=!0,Sg(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=tt(this);return Mg(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ag(i,e,t=!1){let n,r;const s=Xe(i);return s?(n=i,r=kn):(n=i.get,r=i.set),new bg(n,r,s||!r,t)}function Vi(i,e,t,n){let r;try{r=n?i(...n):i()}catch(s){ja(s,e,t)}return r}function zn(i,e,t,n){if(Xe(i)){const s=Vi(i,e,t,n);return s&&qd(s)&&s.catch(o=>{ja(o,e,t)}),s}const r=[];for(let s=0;s<i.length;s++)r.push(zn(i[s],e,t,n));return r}function ja(i,e,t,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Vi(l,null,10,[i,o,a]);return}}wg(i,t,r,n)}function wg(i,e,t,n=!0){console.error(i)}let ho=!1,xc=!1;const kt=[];let Yn=0;const us=[];let pi=null,_r=0;const up=Promise.resolve();let mu=null;function Rg(i){const e=mu||up;return i?e.then(this?i.bind(this):i):e}function Cg(i){let e=Yn+1,t=kt.length;for(;e<t;){const n=e+t>>>1;po(kt[n])<i?e=n+1:t=n}return e}function _u(i){(!kt.length||!kt.includes(i,ho&&i.allowRecurse?Yn+1:Yn))&&(i.id==null?kt.push(i):kt.splice(Cg(i.id),0,i),fp())}function fp(){!ho&&!xc&&(xc=!0,mu=up.then(dp))}function Pg(i){const e=kt.indexOf(i);e>Yn&&kt.splice(e,1)}function Lg(i){Be(i)?us.push(...i):(!pi||!pi.includes(i,i.allowRecurse?_r+1:_r))&&us.push(i),fp()}function _f(i,e=ho?Yn+1:0){for(;e<kt.length;e++){const t=kt[e];t&&t.pre&&(kt.splice(e,1),e--,t())}}function hp(i){if(us.length){const e=[...new Set(us)];if(us.length=0,pi){pi.push(...e);return}for(pi=e,pi.sort((t,n)=>po(t)-po(n)),_r=0;_r<pi.length;_r++)pi[_r]();pi=null,_r=0}}const po=i=>i.id==null?1/0:i.id,Dg=(i,e)=>{const t=po(i)-po(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function dp(i){xc=!1,ho=!0,kt.sort(Dg);const e=kn;try{for(Yn=0;Yn<kt.length;Yn++){const t=kt[Yn];t&&t.active!==!1&&Vi(t,null,14)}}finally{Yn=0,kt.length=0,hp(),ho=!1,mu=null,(kt.length||us.length)&&dp()}}function Ig(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||at;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=n[u]||at;h&&(r=t.map(d=>Ot(d)?d.trim():d)),f&&(r=t.map(B_))}let a,l=n[a=fl(e)]||n[a=fl(gs(e))];!l&&s&&(l=n[a=fl(Us(e))]),l&&zn(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,zn(c,i,6,r)}}function pp(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!Xe(i)){const l=c=>{const u=pp(c,e,!0);u&&(a=!0,Nt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(Mt(i)&&n.set(i,null),null):(Be(s)?s.forEach(l=>o[l]=null):Nt(o,s),Mt(i)&&n.set(i,o),o)}function qa(i,e){return!i||!Ga(e)?!1:(e=e.slice(2).replace(/Once$/,""),$e(i,e[0].toLowerCase()+e.slice(1))||$e(i,Us(e))||$e(i,e))}let Zn=null,mp=null;function wa(i){const e=Zn;return Zn=i,mp=i&&i.type.__scopeId||null,e}function Ug(i,e=Zn,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&Af(-1);const s=wa(e);let o;try{o=i(...r)}finally{wa(s),n._d&&Af(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function dl(i){const{type:e,vnode:t,proxy:n,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=i;let m,p;const M=wa(i);try{if(t.shapeFlag&4){const v=r||n;m=jn(u.call(v,v,f,s,d,h,g)),p=l}else{const v=e;m=jn(v.length>1?v(s,{attrs:l,slots:a,emit:c}):v(s,null)),p=e.props?l:Ng(l)}}catch(v){ro.length=0,ja(v,i,1),m=Mr(mo)}let x=m;if(p&&_!==!1){const v=Object.keys(p),{shapeFlag:S}=x;v.length&&S&7&&(o&&v.some(eu)&&(p=Og(p,o)),x=xs(x,p))}return t.dirs&&(x=xs(x),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&(x.transition=t.transition),m=x,wa(M),m}const Ng=i=>{let e;for(const t in i)(t==="class"||t==="style"||Ga(t))&&((e||(e={}))[t]=i[t]);return e},Og=(i,e)=>{const t={};for(const n in i)(!eu(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function Fg(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?gf(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==n[h]&&!qa(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?gf(n,o,c):!0:!!o;return!1}function gf(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!qa(t,s))return!0}return!1}function Bg({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const kg=i=>i.__isSuspense;function zg(i,e){e&&e.pendingBranch?Be(i)?e.effects.push(...i):e.effects.push(i):Lg(i)}const Ho={};function pl(i,e,t){return _p(i,e,t)}function _p(i,e,{immediate:t,deep:n,flush:r,onTrack:s,onTrigger:o}=at){var a;const l=q_()===((a=zt)==null?void 0:a.scope)?zt:null;let c,u=!1,f=!1;if($t(i)?(c=()=>i.value,u=gc(i)):cs(i)?(c=()=>i,n=!0):Be(i)?(f=!0,u=i.some(v=>cs(v)||gc(v)),c=()=>i.map(v=>{if($t(v))return v.value;if(cs(v))return rs(v);if(Xe(v))return Vi(v,l,2)})):Xe(i)?e?c=()=>Vi(i,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),zn(i,l,3,[d])}:c=kn,e&&n){const v=c;c=()=>rs(v())}let h,d=v=>{h=M.onStop=()=>{Vi(v,l,4)}},g;if(go)if(d=kn,e?t&&zn(e,l,3,[c(),f?[]:void 0,d]):c(),r==="sync"){const v=B0();g=v.__watcherHandles||(v.__watcherHandles=[])}else return kn;let _=f?new Array(i.length).fill(Ho):Ho;const m=()=>{if(M.active)if(e){const v=M.run();(n||u||(f?v.some((S,R)=>ba(S,_[R])):ba(v,_)))&&(h&&h(),zn(e,l,3,[v,_===Ho?void 0:f&&_[0]===Ho?[]:_,d]),_=v)}else M.run()};m.allowRecurse=!!e;let p;r==="sync"?p=m:r==="post"?p=()=>Zt(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),p=()=>_u(m));const M=new au(c,p);e?t?m():_=M.run():r==="post"?Zt(M.run.bind(M),l&&l.suspense):M.run();const x=()=>{M.stop(),l&&l.scope&&tu(l.scope.effects,M)};return g&&g.push(x),x}function Hg(i,e,t){const n=this.proxy,r=Ot(i)?i.includes(".")?gp(n,i):()=>n[i]:i.bind(n,n);let s;Xe(e)?s=e:(s=e.handler,t=e);const o=zt;vs(this);const a=_p(r,s.bind(n),t);return o?vs(o):Sr(),a}function gp(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function rs(i,e){if(!Mt(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),$t(i))rs(i.value,e);else if(Be(i))for(let t=0;t<i.length;t++)rs(i[t],e);else if(D_(i)||no(i))i.forEach(t=>{rs(t,e)});else if(N_(i))for(const t in i)rs(i[t],e);return i}function sr(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(Ns(),zn(l,t,8,[i.el,a,i,e]),Os())}}const ga=i=>!!i.type.__asyncLoader,xp=i=>i.type.__isKeepAlive;function Gg(i,e){vp(i,"a",e)}function Vg(i,e){vp(i,"da",e)}function vp(i,e,t=zt){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(Ya(e,n,t),t){let r=t.parent;for(;r&&r.parent;)xp(r.parent.vnode)&&Wg(n,e,t,r),r=r.parent}}function Wg(i,e,t,n){const r=Ya(e,i,n,!0);yp(()=>{tu(n[e],r)},t)}function Ya(i,e,t=zt,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Ns(),vs(t);const a=zn(e,t,i,o);return Sr(),Os(),a});return n?r.unshift(s):r.push(s),s}}const bi=i=>(e,t=zt)=>(!go||i==="sp")&&Ya(i,(...n)=>e(...n),t),Xg=bi("bm"),jg=bi("m"),qg=bi("bu"),Yg=bi("u"),Kg=bi("bum"),yp=bi("um"),$g=bi("sp"),Zg=bi("rtg"),Jg=bi("rtc");function Qg(i,e=zt){Ya("ec",i,e)}const e0=Symbol.for("v-ndc"),vc=i=>i?Lp(i)?Mu(i)||i.proxy:vc(i.parent):null,io=Nt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>vc(i.parent),$root:i=>vc(i.root),$emit:i=>i.emit,$options:i=>gu(i),$forceUpdate:i=>i.f||(i.f=()=>_u(i.update)),$nextTick:i=>i.n||(i.n=Rg.bind(i.proxy)),$watch:i=>Hg.bind(i)}),ml=(i,e)=>i!==at&&!i.__isScriptSetup&&$e(i,e),t0={get({_:i},e){const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(ml(n,e))return o[e]=1,n[e];if(r!==at&&$e(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&$e(c,e))return o[e]=3,s[e];if(t!==at&&$e(t,e))return o[e]=4,t[e];yc&&(o[e]=0)}}const u=io[e];let f,h;if(u)return e==="$attrs"&&sn(i,"get",e),u(i);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==at&&$e(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,$e(h,e))return h[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return ml(r,e)?(r[e]=t,!0):n!==at&&$e(n,e)?(n[e]=t,!0):$e(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==at&&$e(i,o)||ml(e,o)||(a=s[0])&&$e(a,o)||$e(n,o)||$e(io,o)||$e(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:$e(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function xf(i){return Be(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let yc=!0;function n0(i){const e=gu(i),t=i.proxy,n=i.ctx;yc=!1,e.beforeCreate&&vf(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:M,destroyed:x,unmounted:v,render:S,renderTracked:R,renderTriggered:b,errorCaptured:C,serverPrefetch:y,expose:A,inheritAttrs:z,components:Z,directives:O,filters:F}=e;if(c&&i0(c,n,null),o)for(const H in o){const V=o[H];Xe(V)&&(n[H]=V.bind(t))}if(r){const H=r.call(t,t);Mt(H)&&(i.data=fu(H))}if(yc=!0,s)for(const H in s){const V=s[H],le=Xe(V)?V.bind(t,t):Xe(V.get)?V.get.bind(t,t):kn,ee=!Xe(V)&&Xe(V.set)?V.set.bind(t):kn,X=O0({get:le,set:ee});Object.defineProperty(n,H,{enumerable:!0,configurable:!0,get:()=>X.value,set:W=>X.value=W})}if(a)for(const H in a)Mp(a[H],n,t,H);if(l){const H=Xe(l)?l.call(t):l;Reflect.ownKeys(H).forEach(V=>{c0(V,H[V])})}u&&vf(u,i,"c");function G(H,V){Be(V)?V.forEach(le=>H(le.bind(t))):V&&H(V.bind(t))}if(G(Xg,f),G(jg,h),G(qg,d),G(Yg,g),G(Gg,_),G(Vg,m),G(Qg,C),G(Jg,R),G(Zg,b),G(Kg,M),G(yp,v),G($g,y),Be(A))if(A.length){const H=i.exposed||(i.exposed={});A.forEach(V=>{Object.defineProperty(H,V,{get:()=>t[V],set:le=>t[V]=le})})}else i.exposed||(i.exposed={});S&&i.render===kn&&(i.render=S),z!=null&&(i.inheritAttrs=z),Z&&(i.components=Z),O&&(i.directives=O)}function i0(i,e,t=kn){Be(i)&&(i=Mc(i));for(const n in i){const r=i[n];let s;Mt(r)?"default"in r?s=xa(r.from||n,r.default,!0):s=xa(r.from||n):s=xa(r),$t(s)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[n]=s}}function vf(i,e,t){zn(Be(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Mp(i,e,t,n){const r=n.includes(".")?gp(t,n):()=>t[n];if(Ot(i)){const s=e[i];Xe(s)&&pl(r,s)}else if(Xe(i))pl(r,i.bind(t));else if(Mt(i))if(Be(i))i.forEach(s=>Mp(s,e,t,n));else{const s=Xe(i.handler)?i.handler.bind(t):e[i.handler];Xe(s)&&pl(r,s,i)}}function gu(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>Ra(l,c,o,!0)),Ra(l,e,o)),Mt(e)&&s.set(e,l),l}function Ra(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&Ra(i,s,t,!0),r&&r.forEach(o=>Ra(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=r0[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const r0={data:yf,props:Mf,emits:Mf,methods:Js,computed:Js,beforeCreate:Yt,created:Yt,beforeMount:Yt,mounted:Yt,beforeUpdate:Yt,updated:Yt,beforeDestroy:Yt,beforeUnmount:Yt,destroyed:Yt,unmounted:Yt,activated:Yt,deactivated:Yt,errorCaptured:Yt,serverPrefetch:Yt,components:Js,directives:Js,watch:o0,provide:yf,inject:s0};function yf(i,e){return e?i?function(){return Nt(Xe(i)?i.call(this,this):i,Xe(e)?e.call(this,this):e)}:e:i}function s0(i,e){return Js(Mc(i),Mc(e))}function Mc(i){if(Be(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Yt(i,e){return i?[...new Set([].concat(i,e))]:e}function Js(i,e){return i?Nt(Object.create(null),i,e):e}function Mf(i,e){return i?Be(i)&&Be(e)?[...new Set([...i,...e])]:Nt(Object.create(null),xf(i),xf(e??{})):e}function o0(i,e){if(!i)return e;if(!e)return i;const t=Nt(Object.create(null),i);for(const n in e)t[n]=Yt(i[n],e[n]);return t}function Sp(){return{app:null,config:{isNativeTag:C_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let a0=0;function l0(i,e){return function(n,r=null){Xe(n)||(n=Nt({},n)),r!=null&&!Mt(r)&&(r=null);const s=Sp(),o=new Set;let a=!1;const l=s.app={_uid:a0++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:k0,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Xe(c.install)?(o.add(c),c.install(l,...u)):Xe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=Mr(n,r);return h.appContext=s,u&&e?e(h,c):i(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Mu(h.component)||h.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){Ca=l;try{return c()}finally{Ca=null}}};return l}}let Ca=null;function c0(i,e){if(zt){let t=zt.provides;const n=zt.parent&&zt.parent.provides;n===t&&(t=zt.provides=Object.create(n)),t[i]=e}}function xa(i,e,t=!1){const n=zt||Zn;if(n||Ca){const r=n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:Ca._context.provides;if(r&&i in r)return r[i];if(arguments.length>1)return t&&Xe(e)?e.call(n&&n.proxy):e}}function u0(i,e,t,n=!1){const r={},s={};Aa(s,$a,1),i.propsDefaults=Object.create(null),Tp(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:yg(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function f0(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=tt(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(qa(i.emitsOptions,h))continue;const d=e[h];if(l)if($e(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=gs(h);r[g]=Sc(l,a,g,d,i,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{Tp(i,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!$e(e,f)&&((u=Us(f))===f||!$e(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Sc(l,a,f,void 0,i,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!$e(e,f))&&(delete s[f],c=!0)}c&&yi(i,"set","$attrs")}function Tp(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(_a(l))continue;const c=e[l];let u;r&&$e(r,u=gs(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:qa(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=tt(t),c=a||at;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Sc(r,l,f,c[f],i,!$e(c,f))}}return o}function Sc(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=$e(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Xe(l)){const{propsDefaults:c}=r;t in c?n=c[t]:(vs(r),n=c[t]=l.call(null,e),Sr())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===Us(t))&&(n=!0))}return n}function Ep(i,e,t=!1){const n=e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!Xe(i)){const u=f=>{l=!0;const[h,d]=Ep(f,e,!0);Nt(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return Mt(i)&&n.set(i,ls),ls;if(Be(s))for(let u=0;u<s.length;u++){const f=gs(s[u]);Sf(f)&&(o[f]=at)}else if(s)for(const u in s){const f=gs(u);if(Sf(f)){const h=s[u],d=o[f]=Be(h)||Xe(h)?{type:h}:Nt({},h);if(d){const g=bf(Boolean,d.type),_=bf(String,d.type);d[0]=g>-1,d[1]=_<0||g<_,(g>-1||$e(d,"default"))&&a.push(f)}}}const c=[o,a];return Mt(i)&&n.set(i,c),c}function Sf(i){return i[0]!=="$"}function Tf(i){const e=i&&i.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:i===null?"null":""}function Ef(i,e){return Tf(i)===Tf(e)}function bf(i,e){return Be(e)?e.findIndex(t=>Ef(t,i)):Xe(e)&&Ef(e,i)?0:-1}const bp=i=>i[0]==="_"||i==="$stable",xu=i=>Be(i)?i.map(jn):[jn(i)],h0=(i,e,t)=>{if(e._n)return e;const n=Ug((...r)=>xu(e(...r)),t);return n._c=!1,n},Ap=(i,e,t)=>{const n=i._ctx;for(const r in i){if(bp(r))continue;const s=i[r];if(Xe(s))e[r]=h0(r,s,n);else if(s!=null){const o=xu(s);e[r]=()=>o}}},wp=(i,e)=>{const t=xu(e);i.slots.default=()=>t},d0=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=tt(e),Aa(e,"_",t)):Ap(e,i.slots={})}else i.slots={},e&&wp(i,e);Aa(i.slots,$a,1)},p0=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=at;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Nt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,Ap(e,r)),o=e}else e&&(wp(i,e),o={default:1});if(s)for(const a in r)!bp(a)&&!(a in o)&&delete r[a]};function Tc(i,e,t,n,r=!1){if(Be(i)){i.forEach((h,d)=>Tc(h,e&&(Be(e)?e[d]:e),t,n,r));return}if(ga(n)&&!r)return;const s=n.shapeFlag&4?Mu(n.component)||n.component.proxy:n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===at?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Ot(c)?(u[c]=null,$e(f,c)&&(f[c]=null)):$t(c)&&(c.value=null)),Xe(l))Vi(l,a,12,[o,u]);else{const h=Ot(l),d=$t(l);if(h||d){const g=()=>{if(i.f){const _=h?$e(f,l)?f[l]:u[l]:l.value;r?Be(_)&&tu(_,s):Be(_)?_.includes(s)||_.push(s):h?(u[l]=[s],$e(f,l)&&(f[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else h?(u[l]=o,$e(f,l)&&(f[l]=o)):d&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,Zt(g,t)):g()}}}const Zt=zg;function m0(i){return _0(i)}function _0(i,e){const t=hc();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=kn,insertStaticContent:g}=i,_=(E,D,k,K=null,q=null,fe=null,ue=!1,Q=null,ce=!!D.dynamicChildren)=>{if(E===D)return;E&&!Hs(E,D)&&(K=Ce(E),W(E,q,fe,!0),E=null),D.patchFlag===-2&&(ce=!1,D.dynamicChildren=null);const{type:oe,ref:Ee,shapeFlag:w}=D;switch(oe){case Ka:m(E,D,k,K);break;case mo:p(E,D,k,K);break;case _l:E==null&&M(D,k,K,ue);break;case _i:Z(E,D,k,K,q,fe,ue,Q,ce);break;default:w&1?S(E,D,k,K,q,fe,ue,Q,ce):w&6?O(E,D,k,K,q,fe,ue,Q,ce):(w&64||w&128)&&oe.process(E,D,k,K,q,fe,ue,Q,ce,ke)}Ee!=null&&q&&Tc(Ee,E&&E.ref,fe,D||E,!D)},m=(E,D,k,K)=>{if(E==null)n(D.el=a(D.children),k,K);else{const q=D.el=E.el;D.children!==E.children&&c(q,D.children)}},p=(E,D,k,K)=>{E==null?n(D.el=l(D.children||""),k,K):D.el=E.el},M=(E,D,k,K)=>{[E.el,E.anchor]=g(E.children,D,k,K,E.el,E.anchor)},x=({el:E,anchor:D},k,K)=>{let q;for(;E&&E!==D;)q=h(E),n(E,k,K),E=q;n(D,k,K)},v=({el:E,anchor:D})=>{let k;for(;E&&E!==D;)k=h(E),r(E),E=k;r(D)},S=(E,D,k,K,q,fe,ue,Q,ce)=>{ue=ue||D.type==="svg",E==null?R(D,k,K,q,fe,ue,Q,ce):y(E,D,q,fe,ue,Q,ce)},R=(E,D,k,K,q,fe,ue,Q)=>{let ce,oe;const{type:Ee,props:w,shapeFlag:T,transition:N,dirs:ie}=E;if(ce=E.el=o(E.type,fe,w&&w.is,w),T&8?u(ce,E.children):T&16&&C(E.children,ce,null,K,q,fe&&Ee!=="foreignObject",ue,Q),ie&&sr(E,null,K,"created"),b(ce,E,E.scopeId,ue,K),w){for(const se in w)se!=="value"&&!_a(se)&&s(ce,se,null,w[se],fe,E.children,K,q,Ae);"value"in w&&s(ce,"value",null,w.value),(oe=w.onVnodeBeforeMount)&&Xn(oe,K,E)}ie&&sr(E,null,K,"beforeMount");const re=(!q||q&&!q.pendingBranch)&&N&&!N.persisted;re&&N.beforeEnter(ce),n(ce,D,k),((oe=w&&w.onVnodeMounted)||re||ie)&&Zt(()=>{oe&&Xn(oe,K,E),re&&N.enter(ce),ie&&sr(E,null,K,"mounted")},q)},b=(E,D,k,K,q)=>{if(k&&d(E,k),K)for(let fe=0;fe<K.length;fe++)d(E,K[fe]);if(q){let fe=q.subTree;if(D===fe){const ue=q.vnode;b(E,ue,ue.scopeId,ue.slotScopeIds,q.parent)}}},C=(E,D,k,K,q,fe,ue,Q,ce=0)=>{for(let oe=ce;oe<E.length;oe++){const Ee=E[oe]=Q?Ui(E[oe]):jn(E[oe]);_(null,Ee,D,k,K,q,fe,ue,Q)}},y=(E,D,k,K,q,fe,ue)=>{const Q=D.el=E.el;let{patchFlag:ce,dynamicChildren:oe,dirs:Ee}=D;ce|=E.patchFlag&16;const w=E.props||at,T=D.props||at;let N;k&&or(k,!1),(N=T.onVnodeBeforeUpdate)&&Xn(N,k,D,E),Ee&&sr(D,E,k,"beforeUpdate"),k&&or(k,!0);const ie=q&&D.type!=="foreignObject";if(oe?A(E.dynamicChildren,oe,Q,k,K,ie,fe):ue||V(E,D,Q,null,k,K,ie,fe,!1),ce>0){if(ce&16)z(Q,D,w,T,k,K,q);else if(ce&2&&w.class!==T.class&&s(Q,"class",null,T.class,q),ce&4&&s(Q,"style",w.style,T.style,q),ce&8){const re=D.dynamicProps;for(let se=0;se<re.length;se++){const ye=re[se],he=w[ye],$=T[ye];($!==he||ye==="value")&&s(Q,ye,he,$,q,E.children,k,K,Ae)}}ce&1&&E.children!==D.children&&u(Q,D.children)}else!ue&&oe==null&&z(Q,D,w,T,k,K,q);((N=T.onVnodeUpdated)||Ee)&&Zt(()=>{N&&Xn(N,k,D,E),Ee&&sr(D,E,k,"updated")},K)},A=(E,D,k,K,q,fe,ue)=>{for(let Q=0;Q<D.length;Q++){const ce=E[Q],oe=D[Q],Ee=ce.el&&(ce.type===_i||!Hs(ce,oe)||ce.shapeFlag&70)?f(ce.el):k;_(ce,oe,Ee,null,K,q,fe,ue,!0)}},z=(E,D,k,K,q,fe,ue)=>{if(k!==K){if(k!==at)for(const Q in k)!_a(Q)&&!(Q in K)&&s(E,Q,k[Q],null,ue,D.children,q,fe,Ae);for(const Q in K){if(_a(Q))continue;const ce=K[Q],oe=k[Q];ce!==oe&&Q!=="value"&&s(E,Q,oe,ce,ue,D.children,q,fe,Ae)}"value"in K&&s(E,"value",k.value,K.value)}},Z=(E,D,k,K,q,fe,ue,Q,ce)=>{const oe=D.el=E?E.el:a(""),Ee=D.anchor=E?E.anchor:a("");let{patchFlag:w,dynamicChildren:T,slotScopeIds:N}=D;N&&(Q=Q?Q.concat(N):N),E==null?(n(oe,k,K),n(Ee,k,K),C(D.children,k,Ee,q,fe,ue,Q,ce)):w>0&&w&64&&T&&E.dynamicChildren?(A(E.dynamicChildren,T,k,q,fe,ue,Q),(D.key!=null||q&&D===q.subTree)&&Rp(E,D,!0)):V(E,D,k,Ee,q,fe,ue,Q,ce)},O=(E,D,k,K,q,fe,ue,Q,ce)=>{D.slotScopeIds=Q,E==null?D.shapeFlag&512?q.ctx.activate(D,k,K,ue,ce):F(D,k,K,q,fe,ue,ce):B(E,D,ce)},F=(E,D,k,K,q,fe,ue)=>{const Q=E.component=P0(E,K,q);if(xp(E)&&(Q.ctx.renderer=ke),L0(Q),Q.asyncDep){if(q&&q.registerDep(Q,G),!E.el){const ce=Q.subTree=Mr(mo);p(null,ce,D,k)}return}G(Q,E,D,k,q,fe,ue)},B=(E,D,k)=>{const K=D.component=E.component;if(Fg(E,D,k))if(K.asyncDep&&!K.asyncResolved){H(K,D,k);return}else K.next=D,Pg(K.update),K.update();else D.el=E.el,K.vnode=D},G=(E,D,k,K,q,fe,ue)=>{const Q=()=>{if(E.isMounted){let{next:Ee,bu:w,u:T,parent:N,vnode:ie}=E,re=Ee,se;or(E,!1),Ee?(Ee.el=ie.el,H(E,Ee,ue)):Ee=ie,w&&hl(w),(se=Ee.props&&Ee.props.onVnodeBeforeUpdate)&&Xn(se,N,Ee,ie),or(E,!0);const ye=dl(E),he=E.subTree;E.subTree=ye,_(he,ye,f(he.el),Ce(he),E,q,fe),Ee.el=ye.el,re===null&&Bg(E,ye.el),T&&Zt(T,q),(se=Ee.props&&Ee.props.onVnodeUpdated)&&Zt(()=>Xn(se,N,Ee,ie),q)}else{let Ee;const{el:w,props:T}=D,{bm:N,m:ie,parent:re}=E,se=ga(D);if(or(E,!1),N&&hl(N),!se&&(Ee=T&&T.onVnodeBeforeMount)&&Xn(Ee,re,D),or(E,!0),w&&Oe){const ye=()=>{E.subTree=dl(E),Oe(w,E.subTree,E,q,null)};se?D.type.__asyncLoader().then(()=>!E.isUnmounted&&ye()):ye()}else{const ye=E.subTree=dl(E);_(null,ye,k,K,E,q,fe),D.el=ye.el}if(ie&&Zt(ie,q),!se&&(Ee=T&&T.onVnodeMounted)){const ye=D;Zt(()=>Xn(Ee,re,ye),q)}(D.shapeFlag&256||re&&ga(re.vnode)&&re.vnode.shapeFlag&256)&&E.a&&Zt(E.a,q),E.isMounted=!0,D=k=K=null}},ce=E.effect=new au(Q,()=>_u(oe),E.scope),oe=E.update=()=>ce.run();oe.id=E.uid,or(E,!0),oe()},H=(E,D,k)=>{D.component=E;const K=E.vnode.props;E.vnode=D,E.next=null,f0(E,D.props,K,k),p0(E,D.children,k),Ns(),_f(),Os()},V=(E,D,k,K,q,fe,ue,Q,ce=!1)=>{const oe=E&&E.children,Ee=E?E.shapeFlag:0,w=D.children,{patchFlag:T,shapeFlag:N}=D;if(T>0){if(T&128){ee(oe,w,k,K,q,fe,ue,Q,ce);return}else if(T&256){le(oe,w,k,K,q,fe,ue,Q,ce);return}}N&8?(Ee&16&&Ae(oe,q,fe),w!==oe&&u(k,w)):Ee&16?N&16?ee(oe,w,k,K,q,fe,ue,Q,ce):Ae(oe,q,fe,!0):(Ee&8&&u(k,""),N&16&&C(w,k,K,q,fe,ue,Q,ce))},le=(E,D,k,K,q,fe,ue,Q,ce)=>{E=E||ls,D=D||ls;const oe=E.length,Ee=D.length,w=Math.min(oe,Ee);let T;for(T=0;T<w;T++){const N=D[T]=ce?Ui(D[T]):jn(D[T]);_(E[T],N,k,null,q,fe,ue,Q,ce)}oe>Ee?Ae(E,q,fe,!0,!1,w):C(D,k,K,q,fe,ue,Q,ce,w)},ee=(E,D,k,K,q,fe,ue,Q,ce)=>{let oe=0;const Ee=D.length;let w=E.length-1,T=Ee-1;for(;oe<=w&&oe<=T;){const N=E[oe],ie=D[oe]=ce?Ui(D[oe]):jn(D[oe]);if(Hs(N,ie))_(N,ie,k,null,q,fe,ue,Q,ce);else break;oe++}for(;oe<=w&&oe<=T;){const N=E[w],ie=D[T]=ce?Ui(D[T]):jn(D[T]);if(Hs(N,ie))_(N,ie,k,null,q,fe,ue,Q,ce);else break;w--,T--}if(oe>w){if(oe<=T){const N=T+1,ie=N<Ee?D[N].el:K;for(;oe<=T;)_(null,D[oe]=ce?Ui(D[oe]):jn(D[oe]),k,ie,q,fe,ue,Q,ce),oe++}}else if(oe>T)for(;oe<=w;)W(E[oe],q,fe,!0),oe++;else{const N=oe,ie=oe,re=new Map;for(oe=ie;oe<=T;oe++){const de=D[oe]=ce?Ui(D[oe]):jn(D[oe]);de.key!=null&&re.set(de.key,oe)}let se,ye=0;const he=T-ie+1;let $=!1,L=0;const ae=new Array(he);for(oe=0;oe<he;oe++)ae[oe]=0;for(oe=N;oe<=w;oe++){const de=E[oe];if(ye>=he){W(de,q,fe,!0);continue}let _e;if(de.key!=null)_e=re.get(de.key);else for(se=ie;se<=T;se++)if(ae[se-ie]===0&&Hs(de,D[se])){_e=se;break}_e===void 0?W(de,q,fe,!0):(ae[_e-ie]=oe+1,_e>=L?L=_e:$=!0,_(de,D[_e],k,null,q,fe,ue,Q,ce),ye++)}const Me=$?g0(ae):ls;for(se=Me.length-1,oe=he-1;oe>=0;oe--){const de=ie+oe,_e=D[de],Le=de+1<Ee?D[de+1].el:K;ae[oe]===0?_(null,_e,k,Le,q,fe,ue,Q,ce):$&&(se<0||oe!==Me[se]?X(_e,k,Le,2):se--)}}},X=(E,D,k,K,q=null)=>{const{el:fe,type:ue,transition:Q,children:ce,shapeFlag:oe}=E;if(oe&6){X(E.component.subTree,D,k,K);return}if(oe&128){E.suspense.move(D,k,K);return}if(oe&64){ue.move(E,D,k,ke);return}if(ue===_i){n(fe,D,k);for(let w=0;w<ce.length;w++)X(ce[w],D,k,K);n(E.anchor,D,k);return}if(ue===_l){x(E,D,k);return}if(K!==2&&oe&1&&Q)if(K===0)Q.beforeEnter(fe),n(fe,D,k),Zt(()=>Q.enter(fe),q);else{const{leave:w,delayLeave:T,afterLeave:N}=Q,ie=()=>n(fe,D,k),re=()=>{w(fe,()=>{ie(),N&&N()})};T?T(fe,ie,re):re()}else n(fe,D,k)},W=(E,D,k,K=!1,q=!1)=>{const{type:fe,props:ue,ref:Q,children:ce,dynamicChildren:oe,shapeFlag:Ee,patchFlag:w,dirs:T}=E;if(Q!=null&&Tc(Q,null,k,E,!0),Ee&256){D.ctx.deactivate(E);return}const N=Ee&1&&T,ie=!ga(E);let re;if(ie&&(re=ue&&ue.onVnodeBeforeUnmount)&&Xn(re,D,E),Ee&6)Te(E.component,k,K);else{if(Ee&128){E.suspense.unmount(k,K);return}N&&sr(E,null,D,"beforeUnmount"),Ee&64?E.type.remove(E,D,k,q,ke,K):oe&&(fe!==_i||w>0&&w&64)?Ae(oe,D,k,!1,!0):(fe===_i&&w&384||!q&&Ee&16)&&Ae(ce,D,k),K&&me(E)}(ie&&(re=ue&&ue.onVnodeUnmounted)||N)&&Zt(()=>{re&&Xn(re,D,E),N&&sr(E,null,D,"unmounted")},k)},me=E=>{const{type:D,el:k,anchor:K,transition:q}=E;if(D===_i){ge(k,K);return}if(D===_l){v(E);return}const fe=()=>{r(k),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(E.shapeFlag&1&&q&&!q.persisted){const{leave:ue,delayLeave:Q}=q,ce=()=>ue(k,fe);Q?Q(E.el,fe,ce):ce()}else fe()},ge=(E,D)=>{let k;for(;E!==D;)k=h(E),r(E),E=k;r(D)},Te=(E,D,k)=>{const{bum:K,scope:q,update:fe,subTree:ue,um:Q}=E;K&&hl(K),q.stop(),fe&&(fe.active=!1,W(ue,E,D,k)),Q&&Zt(Q,D),Zt(()=>{E.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve())},Ae=(E,D,k,K=!1,q=!1,fe=0)=>{for(let ue=fe;ue<E.length;ue++)W(E[ue],D,k,K,q)},Ce=E=>E.shapeFlag&6?Ce(E.component.subTree):E.shapeFlag&128?E.suspense.next():h(E.anchor||E.el),we=(E,D,k)=>{E==null?D._vnode&&W(D._vnode,null,null,!0):_(D._vnode||null,E,D,null,null,null,k),_f(),hp(),D._vnode=E},ke={p:_,um:W,m:X,r:me,mt:F,mc:C,pc:V,pbc:A,n:Ce,o:i};let pt,Oe;return e&&([pt,Oe]=e(ke)),{render:we,hydrate:pt,createApp:l0(we,pt)}}function or({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function Rp(i,e,t=!1){const n=i.children,r=e.children;if(Be(n)&&Be(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ui(r[s]),a.el=o.el),t||Rp(o,a)),a.type===Ka&&(a.el=o.el)}}function g0(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const x0=i=>i.__isTeleport,_i=Symbol.for("v-fgt"),Ka=Symbol.for("v-txt"),mo=Symbol.for("v-cmt"),_l=Symbol.for("v-stc"),ro=[];let Fn=null;function v0(i=!1){ro.push(Fn=i?null:[])}function y0(){ro.pop(),Fn=ro[ro.length-1]||null}let _o=1;function Af(i){_o+=i}function M0(i){return i.dynamicChildren=_o>0?Fn||ls:null,y0(),_o>0&&Fn&&Fn.push(i),i}function S0(i,e,t,n,r,s){return M0(Pp(i,e,t,n,r,s,!0))}function T0(i){return i?i.__v_isVNode===!0:!1}function Hs(i,e){return i.type===e.type&&i.key===e.key}const $a="__vInternal",Cp=({key:i})=>i??null,va=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?Ot(i)||$t(i)||Xe(i)?{i:Zn,r:i,k:e,f:!!t}:i:null);function Pp(i,e=null,t=null,n=0,r=null,s=i===_i?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Cp(e),ref:e&&va(e),scopeId:mp,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Zn};return a?(vu(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=Ot(t)?8:16),_o>0&&!o&&Fn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Fn.push(l),l}const Mr=E0;function E0(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===e0)&&(i=mo),T0(i)){const a=xs(i,e,!0);return t&&vu(a,t),_o>0&&!s&&Fn&&(a.shapeFlag&6?Fn[Fn.indexOf(i)]=a:Fn.push(a)),a.patchFlag|=-2,a}if(N0(i)&&(i=i.__vccOpts),e){e=b0(e);let{class:a,style:l}=e;a&&!Ot(a)&&(e.class=su(a)),Mt(l)&&(ap(l)&&!Be(l)&&(l=Nt({},l)),e.style=ru(l))}const o=Ot(i)?1:kg(i)?128:x0(i)?64:Mt(i)?4:Xe(i)?2:0;return Pp(i,e,t,n,r,o,s,!0)}function b0(i){return i?ap(i)||$a in i?Nt({},i):i:null}function xs(i,e,t=!1){const{props:n,ref:r,patchFlag:s,children:o}=i,a=e?w0(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&Cp(a),ref:e&&e.ref?t&&r?Be(r)?r.concat(va(e)):[r,va(e)]:va(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==_i?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&xs(i.ssContent),ssFallback:i.ssFallback&&xs(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function A0(i=" ",e=0){return Mr(Ka,null,i,e)}function jn(i){return i==null||typeof i=="boolean"?Mr(mo):Be(i)?Mr(_i,null,i.slice()):typeof i=="object"?Ui(i):Mr(Ka,null,String(i))}function Ui(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:xs(i)}function vu(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Be(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),vu(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!($a in e)?e._ctx=Zn:r===3&&Zn&&(Zn.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Xe(e)?(e={default:e,_ctx:Zn},t=32):(e=String(e),n&64?(t=16,e=[A0(e)]):t=8);i.children=e,i.shapeFlag|=t}function w0(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=su([e.class,n.class]));else if(r==="style")e.style=ru([e.style,n.style]);else if(Ga(r)){const s=e[r],o=n[r];o&&s!==o&&!(Be(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function Xn(i,e,t,n=null){zn(i,e,7,[t,n])}const R0=Sp();let C0=0;function P0(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||R0,s={uid:C0++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new X_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ep(n,r),emitsOptions:pp(n,r),emit:null,emitted:null,propsDefaults:at,inheritAttrs:n.inheritAttrs,ctx:at,data:at,props:at,attrs:at,slots:at,refs:at,setupState:at,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Ig.bind(null,s),i.ce&&i.ce(s),s}let zt=null,yu,Nr,wf="__VUE_INSTANCE_SETTERS__";(Nr=hc()[wf])||(Nr=hc()[wf]=[]),Nr.push(i=>zt=i),yu=i=>{Nr.length>1?Nr.forEach(e=>e(i)):Nr[0](i)};const vs=i=>{yu(i),i.scope.on()},Sr=()=>{zt&&zt.scope.off(),yu(null)};function Lp(i){return i.vnode.shapeFlag&4}let go=!1;function L0(i,e=!1){go=e;const{props:t,children:n}=i.vnode,r=Lp(i);u0(i,t,r,e),d0(i,n);const s=r?D0(i,e):void 0;return go=!1,s}function D0(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=lp(new Proxy(i.ctx,t0));const{setup:n}=t;if(n){const r=i.setupContext=n.length>1?U0(i):null;vs(i),Ns();const s=Vi(n,i,0,[i.props,r]);if(Os(),Sr(),qd(s)){if(s.then(Sr,Sr),e)return s.then(o=>{Rf(i,o,e)}).catch(o=>{ja(o,i,0)});i.asyncDep=s}else Rf(i,s,e)}else Dp(i,e)}function Rf(i,e,t){Xe(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:Mt(e)&&(i.setupState=cp(e)),Dp(i,t)}let Cf;function Dp(i,e,t){const n=i.type;if(!i.render){if(!e&&Cf&&!n.render){const r=n.template||gu(i).template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Nt(Nt({isCustomElement:s,delimiters:a},o),l);n.render=Cf(r,c)}}i.render=n.render||kn}vs(i),Ns(),n0(i),Os(),Sr()}function I0(i){return i.attrsProxy||(i.attrsProxy=new Proxy(i.attrs,{get(e,t){return sn(i,"get","$attrs"),e[t]}}))}function U0(i){const e=t=>{i.exposed=t||{}};return{get attrs(){return I0(i)},slots:i.slots,emit:i.emit,expose:e}}function Mu(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(cp(lp(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in io)return io[t](i)},has(e,t){return t in e||t in io}}))}function N0(i){return Xe(i)&&"__vccOpts"in i}const O0=(i,e)=>Ag(i,e,go),F0=Symbol.for("v-scx"),B0=()=>xa(F0),k0="3.3.4",z0="http://www.w3.org/2000/svg",gr=typeof document<"u"?document:null,Pf=gr&&gr.createElement("template"),H0={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e?gr.createElementNS(z0,i):gr.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>gr.createTextNode(i),createComment:i=>gr.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>gr.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Pf.innerHTML=n?`<svg>${i}</svg>`:i;const a=Pf.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function G0(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function V0(i,e,t){const n=i.style,r=Ot(t);if(t&&!r){if(e&&!Ot(e))for(const s in e)t[s]==null&&Ec(n,s,"");for(const s in t)Ec(n,s,t[s])}else{const s=n.display;r?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=s)}}const Lf=/\s*!important$/;function Ec(i,e,t){if(Be(t))t.forEach(n=>Ec(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=W0(i,e);Lf.test(t)?i.setProperty(Us(n),t.replace(Lf,""),"important"):i[n]=t}}const Df=["Webkit","Moz","ms"],gl={};function W0(i,e){const t=gl[e];if(t)return t;let n=gs(e);if(n!=="filter"&&n in i)return gl[e]=n;n=Yd(n);for(let r=0;r<Df.length;r++){const s=Df[r]+n;if(s in i)return gl[e]=s}return e}const If="http://www.w3.org/1999/xlink";function X0(i,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(If,e.slice(6,e.length)):i.setAttributeNS(If,e,t);else{const s=W_(e);t==null||s&&!Kd(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function j0(i,e,t,n,r,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,r,s),i[e]=t??"";return}const a=i.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){i._value=t;const c=a==="OPTION"?i.getAttribute("value"):i.value,u=t??"";c!==u&&(i.value=u),t==null&&i.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof i[e];c==="boolean"?t=Kd(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{i[e]=t}catch{}l&&i.removeAttribute(e)}function q0(i,e,t,n){i.addEventListener(e,t,n)}function Y0(i,e,t,n){i.removeEventListener(e,t,n)}function K0(i,e,t,n,r=null){const s=i._vei||(i._vei={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=$0(e);if(n){const c=s[e]=Q0(n,r);q0(i,a,c,l)}else o&&(Y0(i,a,o,l),s[e]=void 0)}}const Uf=/(?:Once|Passive|Capture)$/;function $0(i){let e;if(Uf.test(i)){e={};let n;for(;n=i.match(Uf);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Us(i.slice(2)),e]}let xl=0;const Z0=Promise.resolve(),J0=()=>xl||(Z0.then(()=>xl=0),xl=Date.now());function Q0(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;zn(ex(n,t.value),e,5,[n])};return t.value=i,t.attached=J0(),t}function ex(i,e){if(Be(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const Nf=/^on[a-z]/,tx=(i,e,t,n,r=!1,s,o,a,l)=>{e==="class"?G0(i,n,r):e==="style"?V0(i,t,n):Ga(e)?eu(e)||K0(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):nx(i,e,n,r))?j0(i,e,n,s,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),X0(i,e,n,r))};function nx(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&Nf.test(e)&&Xe(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||Nf.test(e)&&Ot(t)?!1:e in i}const ix=Nt({patchProp:tx},H0);let Of;function rx(){return Of||(Of=m0(ix))}const sx=(...i)=>{const e=rx().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=ox(n);if(!r)return;const s=e._component;!Xe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function ox(i){return Ot(i)?document.querySelector(i):i}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Su="156",Or={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Fr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ax=0,Ff=1,lx=2,Ip=1,cx=2,di=3,Mi=0,en=1,On=2,Wi=0,fs=1,Bf=2,kf=3,zf=4,ux=5,is=100,fx=101,hx=102,Hf=103,Gf=104,dx=200,px=201,mx=202,_x=203,Up=204,Np=205,gx=206,xx=207,vx=208,yx=209,Mx=210,Sx=0,Tx=1,Ex=2,bc=3,bx=4,Ax=5,wx=6,Rx=7,Op=0,Cx=1,Px=2,Xi=0,Lx=1,Dx=2,Ix=3,Fp=4,Ux=5,Bp=300,ys=301,Ms=302,Pa=303,Ac=304,Za=306,$i=1e3,Jt=1001,La=1002,Rt=1003,wc=1004,ya=1005,Et=1006,kp=1007,Zi=1008,ji=1009,Nx=1010,Ox=1011,Tu=1012,zp=1013,Oi=1014,Sn=1015,Bn=1016,Hp=1017,Gp=1018,Tr=1020,Fx=1021,Mn=1023,Bx=1024,kx=1025,Er=1026,Ss=1027,zx=1028,Vp=1029,Hx=1030,Wp=1031,Xp=1033,vl=33776,yl=33777,Ml=33778,Sl=33779,Vf=35840,Wf=35841,Xf=35842,jf=35843,Gx=36196,qf=37492,Yf=37496,Kf=37808,$f=37809,Zf=37810,Jf=37811,Qf=37812,eh=37813,th=37814,nh=37815,ih=37816,rh=37817,sh=37818,oh=37819,ah=37820,lh=37821,Tl=36492,ch=36494,uh=36495,Vx=36283,fh=36284,hh=36285,dh=36286,xo=2300,Ts=2301,El=2302,ph=2400,mh=2401,_h=2402,Wx=2500,Xx=0,jp=1,Rc=2,qp=3e3,br=3001,jx=3200,qx=3201,Yp=0,Yx=1,Ar="",Ze="srgb",St="srgb-linear",Ja="display-p3",bl=7680,Kx=519,$x=512,Zx=513,Jx=514,Qx=515,ev=516,tv=517,nv=518,iv=519,Cc=35044,gh="300 es",Pc=1035,vi=2e3,Da=2001;class Ir{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xh=1234567;const so=Math.PI/180,Es=180/Math.PI;function Hn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function Ct(i,e,t){return Math.max(e,Math.min(t,i))}function Eu(i,e){return(i%e+e)%e}function rv(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function sv(i,e,t){return i!==e?(t-i)/(e-i):0}function oo(i,e,t){return(1-t)*i+t*e}function ov(i,e,t,n){return oo(i,e,1-Math.exp(-t*n))}function av(i,e=1){return e-Math.abs(Eu(i,e*2)-e)}function lv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function cv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function uv(i,e){return i+Math.floor(Math.random()*(e-i+1))}function fv(i,e){return i+Math.random()*(e-i)}function hv(i){return i*(.5-Math.random())}function dv(i){i!==void 0&&(xh=i);let e=xh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pv(i){return i*so}function mv(i){return i*Es}function Lc(i){return(i&i-1)===0&&i!==0}function Kp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ia(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _v(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),h=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Kn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const $p={DEG2RAD:so,RAD2DEG:Es,generateUUID:Hn,clamp:Ct,euclideanModulo:Eu,mapLinear:rv,inverseLerp:sv,lerp:oo,damp:ov,pingpong:av,smoothstep:lv,smootherstep:cv,randInt:uv,randFloat:fv,randFloatSpread:hv,seededRandom:dv,degToRad:pv,radToDeg:mv,isPowerOfTwo:Lc,ceilPowerOfTwo:Kp,floorPowerOfTwo:Ia,setQuaternionFromProperEuler:_v,normalize:nt,denormalize:Kn};class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=r[0],m=r[3],p=r[6],M=r[1],x=r[4],v=r[7],S=r[2],R=r[5],b=r[8];return s[0]=o*_+a*M+l*S,s[3]=o*m+a*x+l*R,s[6]=o*p+a*v+l*b,s[1]=c*_+u*M+f*S,s[4]=c*m+u*x+f*R,s[7]=c*p+u*v+f*b,s[2]=h*_+d*M+g*S,s[5]=h*m+d*x+g*R,s[8]=h*p+d*v+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+n*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*n)*_,e[2]=(a*n-r*o)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Al.makeScale(e,t)),this}rotate(e){return this.premultiply(Al.makeRotation(-e)),this}translate(e,t){return this.premultiply(Al.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Al=new Ge;function Zp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function vo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gv(){const i=vo("canvas");return i.style.display="block",i}const vh={};function ao(i){i in vh||(vh[i]=!0,console.warn(i))}function hs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const xv=new Ge().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),vv=new Ge().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function yv(i){return i.convertSRGBToLinear().applyMatrix3(vv)}function Mv(i){return i.applyMatrix3(xv).convertLinearToSRGB()}const Sv={[St]:i=>i,[Ze]:i=>i.convertSRGBToLinear(),[Ja]:yv},Tv={[St]:i=>i,[Ze]:i=>i.convertLinearToSRGB(),[Ja]:Mv},fn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return St},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Sv[e],r=Tv[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let Br;class Jp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Br===void 0&&(Br=vo("canvas")),Br.width=e.width,Br.height=e.height;const n=Br.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Br}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=hs(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hs(t[n]/255)*255):t[n]=hs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ev=0;class Qp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=Hn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Rl(r[o].image)):s.push(Rl(r[o]))}else s=Rl(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Rl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Jp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bv=0;class It extends Ir{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=Jt,r=Jt,s=Et,o=Zi,a=Mn,l=ji,c=It.DEFAULT_ANISOTROPY,u=Ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bv++}),this.uuid=Hn(),this.name="",this.source=new Qp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ao("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===br?Ze:Ar),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $i:e.x=e.x-Math.floor(e.x);break;case Jt:e.x=e.x<0?0:1;break;case La:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $i:e.y=e.y-Math.floor(e.y);break;case Jt:e.y=e.y<0?0:1;break;case La:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ao("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ze?br:qp}set encoding(e){ao("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===br?Ze:Ar}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Bp;It.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,t=0,n=0,r=1){Je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(d+1)/2,S=(p+1)/2,R=(u+h)/4,b=(f+_)/4,C=(g+m)/4;return x>v&&x>S?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=R/n,s=b/n):v>S?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=R/r,s=C/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=b/s,r=C/s),this.set(n,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-_)/M,this.z=(h-u)/M,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Av extends Ir{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(ao("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===br?Ze:Ar),this.texture=new It(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Et,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Qp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends Av{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class em extends It{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wv extends It{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*_,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const S=Math.sqrt(x),R=Math.atan2(S,p*M);m=Math.sin(m*R)/S,a=Math.sin(a*R)/S}const v=a*M;if(l=l*m+h*v,c=c*m+d*v,u=u*m+g*v,f=f*m+_*v,m===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),h=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,u=l*n+a*t-s*r,f=l*r+s*n-o*t,h=-s*t-o*n-a*r;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Cl.copy(this).projectOnVector(e),this.sub(Cl)}reflect(e){return this.sub(Cl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cl=new I,yh=new Vn;class Ai{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),kr.copy(e.boundingBox),kr.applyMatrix4(e.matrixWorld),this.union(kr);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)ai.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ai)}else r.boundingBox===null&&r.computeBoundingBox(),kr.copy(r.boundingBox),kr.applyMatrix4(e.matrixWorld),this.union(kr)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),Go.subVectors(this.max,Gs),zr.subVectors(e.a,Gs),Hr.subVectors(e.b,Gs),Gr.subVectors(e.c,Gs),Ri.subVectors(Hr,zr),Ci.subVectors(Gr,Hr),ar.subVectors(zr,Gr);let t=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-ar.z,ar.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,ar.z,0,-ar.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-ar.y,ar.x,0];return!Pl(t,zr,Hr,Gr,Go)||(t=[1,0,0,0,1,0,0,0,1],!Pl(t,zr,Hr,Gr,Go))?!1:(Vo.crossVectors(Ri,Ci),t=[Vo.x,Vo.y,Vo.z],Pl(t,zr,Hr,Gr,Go))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const oi=[new I,new I,new I,new I,new I,new I,new I,new I],ai=new I,kr=new Ai,zr=new I,Hr=new I,Gr=new I,Ri=new I,Ci=new I,ar=new I,Gs=new I,Go=new I,Vo=new I,lr=new I;function Pl(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){lr.fromArray(i,s);const a=r.x*Math.abs(lr.x)+r.y*Math.abs(lr.y)+r.z*Math.abs(lr.z),l=e.dot(lr),c=t.dot(lr),u=n.dot(lr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Rv=new Ai,Vs=new I,Ll=new I;class ii{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Rv.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);const t=Vs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Vs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ll.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(Ll)),this.expandByPoint(Vs.copy(e.center).sub(Ll))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const li=new I,Dl=new I,Wo=new I,Pi=new I,Il=new I,Xo=new I,Ul=new I;class Po{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,t),li.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Dl.copy(e).add(t).multiplyScalar(.5),Wo.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(Dl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Wo),a=Pi.dot(this.direction),l=-Pi.dot(Wo),c=Pi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Dl).addScaledVector(Wo,h),d}intersectSphere(e,t){li.subVectors(e.center,this.origin);const n=li.dot(this.direction),r=li.dot(li)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,t,n,r,s){Il.subVectors(t,e),Xo.subVectors(n,e),Ul.crossVectors(Il,Xo);let o=this.direction.dot(Ul),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,e);const l=a*this.direction.dot(Xo.crossVectors(Pi,Xo));if(l<0)return null;const c=a*this.direction.dot(Il.cross(Pi));if(c<0||l+c>o)return null;const u=-a*Pi.dot(Ul);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(e,t,n,r,s,o,a,l,c,u,f,h,d,g,_,m){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,f,h,d,g,_,m)}set(e,t,n,r,s,o,a,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),s=1/Vr.setFromMatrixColumn(e,1).length(),o=1/Vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cv,e,Pv)}lookAt(e,t,n){const r=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Li.crossVectors(n,cn),Li.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Li.crossVectors(n,cn)),Li.normalize(),jo.crossVectors(cn,Li),r[0]=Li.x,r[4]=jo.x,r[8]=cn.x,r[1]=Li.y,r[5]=jo.y,r[9]=cn.y,r[2]=Li.z,r[6]=jo.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],x=n[7],v=n[11],S=n[15],R=r[0],b=r[4],C=r[8],y=r[12],A=r[1],z=r[5],Z=r[9],O=r[13],F=r[2],B=r[6],G=r[10],H=r[14],V=r[3],le=r[7],ee=r[11],X=r[15];return s[0]=o*R+a*A+l*F+c*V,s[4]=o*b+a*z+l*B+c*le,s[8]=o*C+a*Z+l*G+c*ee,s[12]=o*y+a*O+l*H+c*X,s[1]=u*R+f*A+h*F+d*V,s[5]=u*b+f*z+h*B+d*le,s[9]=u*C+f*Z+h*G+d*ee,s[13]=u*y+f*O+h*H+d*X,s[2]=g*R+_*A+m*F+p*V,s[6]=g*b+_*z+m*B+p*le,s[10]=g*C+_*Z+m*G+p*ee,s[14]=g*y+_*O+m*H+p*X,s[3]=M*R+x*A+v*F+S*V,s[7]=M*b+x*z+v*B+S*le,s[11]=M*C+x*Z+v*G+S*ee,s[15]=M*y+x*O+v*H+S*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*h+n*c*h+r*a*d-n*l*d)+_*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+n*o*d+s*a*u-n*c*u)+p*(-r*a*u-t*l*f+t*a*h+r*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=f*m*c-_*h*c+_*l*d-a*m*d-f*l*p+a*h*p,x=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,v=u*_*c-g*f*c+g*a*d-o*_*d-u*a*p+o*f*p,S=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,R=t*M+n*x+r*v+s*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/R;return e[0]=M*b,e[1]=(_*h*s-f*m*s-_*r*d+n*m*d+f*r*p-n*h*p)*b,e[2]=(a*m*s-_*l*s+_*r*c-n*m*c-a*r*p+n*l*p)*b,e[3]=(f*l*s-a*h*s-f*r*c+n*h*c+a*r*d-n*l*d)*b,e[4]=x*b,e[5]=(u*m*s-g*h*s+g*r*d-t*m*d-u*r*p+t*h*p)*b,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*b,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*b,e[8]=v*b,e[9]=(g*f*s-u*_*s-g*n*d+t*_*d+u*n*p-t*f*p)*b,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*b,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*d-t*a*d)*b,e[12]=S*b,e[13]=(u*_*r-g*f*r+g*n*h-t*_*h-u*n*m+t*f*m)*b,e[14]=(g*a*r-o*_*r-g*n*l+t*_*l+o*n*m-t*a*m)*b,e[15]=(o*f*r-u*a*r+u*n*l-t*f*l-o*n*h+t*a*h)*b,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,_=o*u,m=o*f,p=a*f,M=l*c,x=l*u,v=l*f,S=n.x,R=n.y,b=n.z;return r[0]=(1-(_+p))*S,r[1]=(d+v)*S,r[2]=(g-x)*S,r[3]=0,r[4]=(d-v)*R,r[5]=(1-(h+p))*R,r[6]=(m+M)*R,r[7]=0,r[8]=(g+x)*b,r[9]=(m-M)*b,r[10]=(1-(h+_))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Vr.set(r[0],r[1],r[2]).length();const o=Vr.set(r[4],r[5],r[6]).length(),a=Vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Cn.copy(this);const c=1/s,u=1/o,f=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=f,Cn.elements[9]*=f,Cn.elements[10]*=f,t.setFromRotationMatrix(Cn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=vi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),h=(n+r)/(n-r);let d,g;if(a===vi)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Da)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=vi){const l=this.elements,c=1/(t-e),u=1/(n-r),f=1/(o-s),h=(t+e)*c,d=(n+r)*u;let g,_;if(a===vi)g=(o+s)*f,_=-2*f;else if(a===Da)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vr=new I,Cn=new Fe,Cv=new I(0,0,0),Pv=new I(1,1,1),Li=new I,jo=new I,cn=new I,Mh=new Fe,Sh=new Vn;class Qa{constructor(e=0,t=0,n=0,r=Qa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sh.setFromEuler(this),this.setFromQuaternion(Sh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qa.DEFAULT_ORDER="XYZ";class tm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lv=0;const Th=new I,Wr=new Vn,ci=new Fe,qo=new I,Ws=new I,Dv=new I,Iv=new Vn,Eh=new I(1,0,0),bh=new I(0,1,0),Ah=new I(0,0,1),Uv={type:"added"},Nv={type:"removed"};class ut extends Ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new I,t=new Qa,n=new Vn,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Ge}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new tm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wr.setFromAxisAngle(e,t),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,t){return Wr.setFromAxisAngle(e,t),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis(Eh,e)}rotateY(e){return this.rotateOnAxis(bh,e)}rotateZ(e){return this.rotateOnAxis(Ah,e)}translateOnAxis(e,t){return Th.copy(e).applyQuaternion(this.quaternion),this.position.add(Th.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eh,e)}translateY(e){return this.translateOnAxis(bh,e)}translateZ(e){return this.translateOnAxis(Ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qo.copy(e):qo.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Ws,qo,this.up):ci.lookAt(qo,Ws,this.up),this.quaternion.setFromRotationMatrix(ci),r&&(ci.extractRotation(r.matrixWorld),Wr.setFromRotationMatrix(ci),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Uv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nv)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,Dv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,Iv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ut.DEFAULT_UP=new I(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new I,ui=new I,Nl=new I,fi=new I,Xr=new I,jr=new I,wh=new I,Ol=new I,Fl=new I,Bl=new I;let Yo=!1;class In{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Pn.subVectors(e,t),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Pn.subVectors(r,t),ui.subVectors(n,t),Nl.subVectors(e,t);const o=Pn.dot(Pn),a=Pn.dot(ui),l=Pn.dot(Nl),c=ui.dot(ui),u=ui.dot(Nl),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,fi),fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getUV(e,t,n,r,s,o,a,l){return Yo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Yo=!0),this.getInterpolation(e,t,n,r,s,o,a,l)}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,fi),l.setScalar(0),l.addScaledVector(s,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l}static isFrontFacing(e,t,n,r){return Pn.subVectors(n,t),ui.subVectors(e,t),Pn.cross(ui).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Pn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Yo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Yo=!0),In.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return In.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Xr.subVectors(r,n),jr.subVectors(s,n),Ol.subVectors(e,n);const l=Xr.dot(Ol),c=jr.dot(Ol);if(l<=0&&c<=0)return t.copy(n);Fl.subVectors(e,r);const u=Xr.dot(Fl),f=jr.dot(Fl);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Xr,o);Bl.subVectors(e,s);const d=Xr.dot(Bl),g=jr.dot(Bl);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(jr,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return wh.subVectors(s,r),a=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(wh,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(n).addScaledVector(Xr,o).addScaledVector(jr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ov=0;class Qn extends Ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ov++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=fs,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Up,this.blendDst=Np,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=bc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bl,this.stencilZFail=bl,this.stencilZPass=bl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(n.blending=this.blending),this.side!==Mi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const nm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},Ko={h:0,s:0,l:0};function kl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,fn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=fn.workingColorSpace){return this.r=e,this.g=t,this.b=n,fn.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=fn.workingColorSpace){if(e=Eu(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=kl(o,s,e+1/3),this.g=kl(o,s,e),this.b=kl(o,s,e-1/3)}return fn.toWorkingColorSpace(this,r),this}setStyle(e,t=Ze){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ze){const n=nm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}copyLinearToSRGB(e){return this.r=wl(e.r),this.g=wl(e.g),this.b=wl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ze){return fn.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Ct(Bt.r*255,0,255))*65536+Math.round(Ct(Bt.g*255,0,255))*256+Math.round(Ct(Bt.b*255,0,255))}getHexString(e=Ze){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=fn.workingColorSpace){fn.fromWorkingColorSpace(Bt.copy(this),t);const n=Bt.r,r=Bt.g,s=Bt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=fn.workingColorSpace){return fn.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Ze){fn.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,n=Bt.g,r=Bt.b;return e!==Ze?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ln),Ln.h+=e,Ln.s+=t,Ln.l+=n,this.setHSL(Ln.h,Ln.s,Ln.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ln),e.getHSL(Ko);const n=oo(Ln.h,Ko.h,t),r=oo(Ln.s,Ko.s,t),s=oo(Ln.l,Ko.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new De;De.NAMES=nm;class Fi extends Qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Op,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xi=Fv();function Fv(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function Bv(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Ct(i,-65504,65504),xi.floatView[0]=i;const e=xi.uint32View[0],t=e>>23&511;return xi.baseTable[t]+((e&8388607)>>xi.shiftTable[t])}function kv(i){const e=i>>10;return xi.uint32View[0]=xi.mantissaTable[xi.offsetTable[e]+(i&1023)]+xi.exponentTable[e],xi.floatView[0]}const $o={toHalfFloat:Bv,fromHalfFloat:kv},vt=new I,Zo=new Pe;class Ut{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cc,this.updateRange={offset:0,count:-1},this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zo.fromBufferAttribute(this,t),Zo.applyMatrix3(e),this.setXY(t,Zo.x,Zo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class im extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class rm extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class An extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let zv=0;const gn=new Fe,zl=new ut,qr=new I,un=new Ai,Xs=new Ai,wt=new I;class Rn extends Ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zv++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zp(e)?rm:im)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ge().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return zl.lookAt(e),zl.updateMatrix(),this.applyMatrix4(zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new An(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];un.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Xs.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(un.min,Xs.min),un.expandByPoint(wt),wt.addVectors(un.max,Xs.max),un.expandByPoint(wt)):(un.expandByPoint(Xs.min),un.expandByPoint(Xs.max))}un.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(wt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)wt.fromBufferAttribute(a,c),l&&(qr.fromBufferAttribute(e,c),wt.add(qr)),r=Math.max(r,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<a;A++)c[A]=new I,u[A]=new I;const f=new I,h=new I,d=new I,g=new Pe,_=new Pe,m=new Pe,p=new I,M=new I;function x(A,z,Z){f.fromArray(r,A*3),h.fromArray(r,z*3),d.fromArray(r,Z*3),g.fromArray(o,A*2),_.fromArray(o,z*2),m.fromArray(o,Z*2),h.sub(f),d.sub(f),_.sub(g),m.sub(g);const O=1/(_.x*m.y-m.x*_.y);isFinite(O)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(O),M.copy(d).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar(O),c[A].add(p),c[z].add(p),c[Z].add(p),u[A].add(M),u[z].add(M),u[Z].add(M))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let A=0,z=v.length;A<z;++A){const Z=v[A],O=Z.start,F=Z.count;for(let B=O,G=O+F;B<G;B+=3)x(n[B+0],n[B+1],n[B+2])}const S=new I,R=new I,b=new I,C=new I;function y(A){b.fromArray(s,A*3),C.copy(b);const z=c[A];S.copy(z),S.sub(b.multiplyScalar(b.dot(z))).normalize(),R.crossVectors(C,z);const O=R.dot(u[A])<0?-1:1;l[A*4]=S.x,l[A*4+1]=S.y,l[A*4+2]=S.z,l[A*4+3]=O}for(let A=0,z=v.length;A<z;++A){const Z=v[A],O=Z.start,F=Z.count;for(let B=O,G=O+F;B<G;B+=3)y(n[B+0]),y(n[B+1]),y(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,f=new I;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Ut(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rh=new Fe,cr=new Po,Jo=new ii,Ch=new I,Yr=new I,Kr=new I,$r=new I,Hl=new I,Qo=new I,ea=new Pe,ta=new Pe,na=new Pe,Ph=new I,Lh=new I,Dh=new I,ia=new I,ra=new I;class Gt extends ut{constructor(e=new Rn,t=new Fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Qo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Hl.fromBufferAttribute(f,e),o?Qo.addScaledVector(Hl,u):Qo.addScaledVector(Hl.sub(t),u))}t.add(Qo)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(s),cr.copy(e.ray).recast(e.near),!(Jo.containsPoint(cr.origin)===!1&&(cr.intersectSphere(Jo,Ch)===null||cr.origin.distanceToSquared(Ch)>(e.far-e.near)**2))&&(Rh.copy(s).invert(),cr.copy(e.ray).applyMatrix4(Rh),!(n.boundingBox!==null&&cr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,cr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,S=x;v<S;v+=3){const R=a.getX(v),b=a.getX(v+1),C=a.getX(v+2);r=sa(this,p,e,n,c,u,f,R,b,C),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);r=sa(this,o,e,n,c,u,f,M,x,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,S=x;v<S;v+=3){const R=v,b=v+1,C=v+2;r=sa(this,p,e,n,c,u,f,R,b,C),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=m,x=m+1,v=m+2;r=sa(this,o,e,n,c,u,f,M,x,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Hv(i,e,t,n,r,s,o,a){let l;if(e.side===en?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Mi,a),l===null)return null;ra.copy(a),ra.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ra);return c<t.near||c>t.far?null:{distance:c,point:ra.clone(),object:i}}function sa(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Yr),i.getVertexPosition(l,Kr),i.getVertexPosition(c,$r);const u=Hv(i,e,t,n,Yr,Kr,$r,ia);if(u){r&&(ea.fromBufferAttribute(r,a),ta.fromBufferAttribute(r,l),na.fromBufferAttribute(r,c),u.uv=In.getInterpolation(ia,Yr,Kr,$r,ea,ta,na,new Pe)),s&&(ea.fromBufferAttribute(s,a),ta.fromBufferAttribute(s,l),na.fromBufferAttribute(s,c),u.uv1=In.getInterpolation(ia,Yr,Kr,$r,ea,ta,na,new Pe),u.uv2=u.uv1),o&&(Ph.fromBufferAttribute(o,a),Lh.fromBufferAttribute(o,l),Dh.fromBufferAttribute(o,c),u.normal=In.getInterpolation(ia,Yr,Kr,$r,Ph,Lh,Dh,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new I,materialIndex:0};In.getNormal(Yr,Kr,$r,f.normal),u.face=f}return u}class Lo extends Rn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new An(c,3)),this.setAttribute("normal",new An(u,3)),this.setAttribute("uv",new An(f,2));function g(_,m,p,M,x,v,S,R,b,C,y){const A=v/b,z=S/C,Z=v/2,O=S/2,F=R/2,B=b+1,G=C+1;let H=0,V=0;const le=new I;for(let ee=0;ee<G;ee++){const X=ee*z-O;for(let W=0;W<B;W++){const me=W*A-Z;le[_]=me*M,le[m]=X*x,le[p]=F,c.push(le.x,le.y,le.z),le[_]=0,le[m]=0,le[p]=R>0?1:-1,u.push(le.x,le.y,le.z),f.push(W/b),f.push(1-ee/C),H+=1}}for(let ee=0;ee<C;ee++)for(let X=0;X<b;X++){const W=h+X+B*ee,me=h+X+B*(ee+1),ge=h+(X+1)+B*(ee+1),Te=h+(X+1)+B*ee;l.push(W,me,Te),l.push(me,ge,Te),V+=6}a.addGroup(d,V,y),d+=V,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Kt(i){const e={};for(let t=0;t<i.length;t++){const n=bs(i[t]);for(const r in n)e[r]=n[r]}return e}function Gv(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sm(i){return i.getRenderTarget()===null?i.outputColorSpace:St}const el={clone:bs,merge:Kt};var Vv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends Qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vv,this.fragmentShader=Wv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=Gv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class om extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Lt extends om{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(so*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Es*2*Math.atan(Math.tan(so*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(so*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zr=-90,Jr=1;class Xv extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new Lt(Zr,Jr,e,t);r.layers=this.layers,this.add(r);const s=new Lt(Zr,Jr,e,t);s.layers=this.layers,this.add(s);const o=new Lt(Zr,Jr,e,t);o.layers=this.layers,this.add(o);const a=new Lt(Zr,Jr,e,t);a.layers=this.layers,this.add(a);const l=new Lt(Zr,Jr,e,t);l.layers=this.layers,this.add(l);const c=new Lt(Zr,Jr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===vi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Da)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.xr.enabled;e.xr.enabled=!1;const h=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=h,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class am extends It{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ys,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jv extends Si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(ao("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===br?Ze:Ar),this.texture=new am(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Et}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Lo(5,5,5),s=new ti({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:Wi});s.uniforms.tEquirect.value=t;const o=new Gt(r,s),a=t.minFilter;return t.minFilter===Zi&&(t.minFilter=Et),new Xv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Gl=new I,qv=new I,Yv=new Ge;class Un{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Gl.subVectors(n,t).cross(qv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Gl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Yv.getNormalMatrix(e),r=this.coplanarPoint(Gl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new ii,oa=new I;class bu{constructor(e=new Un,t=new Un,n=new Un,r=new Un,s=new Un,o=new Un){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vi){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],M=r[13],x=r[14],v=r[15];if(n[0].setComponents(l-s,h-c,m-d,v-p).normalize(),n[1].setComponents(l+s,h+c,m+d,v+p).normalize(),n[2].setComponents(l+o,h+u,m+g,v+M).normalize(),n[3].setComponents(l-o,h-u,m-g,v-M).normalize(),n[4].setComponents(l-a,h-f,m-_,v-x).normalize(),t===vi)n[5].setComponents(l+a,h+f,m+_,v+x).normalize();else if(t===Da)n[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(oa.x=r.normal.x>0?e.max.x:e.min.x,oa.y=r.normal.y>0?e.max.y:e.min.y,oa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(oa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lm(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Kv(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const f=c.array,h=c.usage,d=i.createBuffer();i.bindBuffer(u,d),i.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=i.SHORT;else if(f instanceof Uint32Array)g=i.UNSIGNED_INT;else if(f instanceof Int32Array)g=i.INT;else if(f instanceof Int8Array)g=i.BYTE;else if(f instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,d=u.updateRange;i.bindBuffer(f,c),d.count===-1?i.bufferSubData(f,0,h):(t?i.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):i.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class tl extends Rn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*h-o;for(let x=0;x<c;x++){const v=x*f-s;g.push(v,-M,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const x=M+c*p,v=M+c*(p+1),S=M+1+c*(p+1),R=M+1+c*p;d.push(x,v,R),d.push(v,S,R)}this.setIndex(d),this.setAttribute("position",new An(g,3)),this.setAttribute("normal",new An(_,3)),this.setAttribute("uv",new An(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.width,e.height,e.widthSegments,e.heightSegments)}}var $v=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zv=`#ifdef USE_ALPHAHASH
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
#endif`,Jv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ey=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ty=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ny=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ry=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ay=`#ifdef USE_IRIDESCENCE
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
#endif`,ly=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,py=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,my=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_y=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,gy=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,xy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,vy=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,My=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ty=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ey="gl_FragColor = linearToOutputTexel( gl_FragColor );",by=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ay=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,wy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ry=`#ifdef USE_ENVMAP
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
#endif`,Cy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Py=`#ifdef USE_ENVMAP
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
#endif`,Ly=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Iy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ny=`#ifdef USE_GRADIENTMAP
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
}`,Oy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Fy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,By=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ky=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Hy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Gy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,qy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yy=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ky=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$y=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Zy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,eM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,tM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rM=`#if defined( USE_POINTS_UV )
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
#endif`,sM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,cM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,uM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,fM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,hM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_M=`#ifdef USE_NORMALMAP
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
#endif`,gM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,xM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,MM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,TM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,EM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,PM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,LM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,DM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,IM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,UM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,NM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,OM=`#ifdef USE_SKINNING
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
#endif`,FM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,BM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zM=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,HM=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,GM=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,VM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YM=`uniform sampler2D t2D;
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
}`,KM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$M=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QM=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,eS=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,tS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,nS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,iS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sS=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oS=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aS=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,lS=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,cS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,uS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,fS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,hS=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,dS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,_S=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,gS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,xS=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vS=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,yS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,MS=`uniform float size;
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
}`,SS=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,TS=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,ES=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,bS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,AS=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,He={alphahash_fragment:$v,alphahash_pars_fragment:Zv,alphamap_fragment:Jv,alphamap_pars_fragment:Qv,alphatest_fragment:ey,alphatest_pars_fragment:ty,aomap_fragment:ny,aomap_pars_fragment:iy,begin_vertex:ry,beginnormal_vertex:sy,bsdfs:oy,iridescence_fragment:ay,bumpmap_pars_fragment:ly,clipping_planes_fragment:cy,clipping_planes_pars_fragment:uy,clipping_planes_pars_vertex:fy,clipping_planes_vertex:hy,color_fragment:dy,color_pars_fragment:py,color_pars_vertex:my,color_vertex:_y,common:gy,cube_uv_reflection_fragment:xy,defaultnormal_vertex:vy,displacementmap_pars_vertex:yy,displacementmap_vertex:My,emissivemap_fragment:Sy,emissivemap_pars_fragment:Ty,colorspace_fragment:Ey,colorspace_pars_fragment:by,envmap_fragment:Ay,envmap_common_pars_fragment:wy,envmap_pars_fragment:Ry,envmap_pars_vertex:Cy,envmap_physical_pars_fragment:Hy,envmap_vertex:Py,fog_vertex:Ly,fog_pars_vertex:Dy,fog_fragment:Iy,fog_pars_fragment:Uy,gradientmap_pars_fragment:Ny,lightmap_fragment:Oy,lightmap_pars_fragment:Fy,lights_lambert_fragment:By,lights_lambert_pars_fragment:ky,lights_pars_begin:zy,lights_toon_fragment:Gy,lights_toon_pars_fragment:Vy,lights_phong_fragment:Wy,lights_phong_pars_fragment:Xy,lights_physical_fragment:jy,lights_physical_pars_fragment:qy,lights_fragment_begin:Yy,lights_fragment_maps:Ky,lights_fragment_end:$y,logdepthbuf_fragment:Zy,logdepthbuf_pars_fragment:Jy,logdepthbuf_pars_vertex:Qy,logdepthbuf_vertex:eM,map_fragment:tM,map_pars_fragment:nM,map_particle_fragment:iM,map_particle_pars_fragment:rM,metalnessmap_fragment:sM,metalnessmap_pars_fragment:oM,morphcolor_vertex:aM,morphnormal_vertex:lM,morphtarget_pars_vertex:cM,morphtarget_vertex:uM,normal_fragment_begin:fM,normal_fragment_maps:hM,normal_pars_fragment:dM,normal_pars_vertex:pM,normal_vertex:mM,normalmap_pars_fragment:_M,clearcoat_normal_fragment_begin:gM,clearcoat_normal_fragment_maps:xM,clearcoat_pars_fragment:vM,iridescence_pars_fragment:yM,opaque_fragment:MM,packing:SM,premultiplied_alpha_fragment:TM,project_vertex:EM,dithering_fragment:bM,dithering_pars_fragment:AM,roughnessmap_fragment:wM,roughnessmap_pars_fragment:RM,shadowmap_pars_fragment:CM,shadowmap_pars_vertex:PM,shadowmap_vertex:LM,shadowmask_pars_fragment:DM,skinbase_vertex:IM,skinning_pars_vertex:UM,skinning_vertex:NM,skinnormal_vertex:OM,specularmap_fragment:FM,specularmap_pars_fragment:BM,tonemapping_fragment:kM,tonemapping_pars_fragment:zM,transmission_fragment:HM,transmission_pars_fragment:GM,uv_pars_fragment:VM,uv_pars_vertex:WM,uv_vertex:XM,worldpos_vertex:jM,background_vert:qM,background_frag:YM,backgroundCube_vert:KM,backgroundCube_frag:$M,cube_vert:ZM,cube_frag:JM,depth_vert:QM,depth_frag:eS,distanceRGBA_vert:tS,distanceRGBA_frag:nS,equirect_vert:iS,equirect_frag:rS,linedashed_vert:sS,linedashed_frag:oS,meshbasic_vert:aS,meshbasic_frag:lS,meshlambert_vert:cS,meshlambert_frag:uS,meshmatcap_vert:fS,meshmatcap_frag:hS,meshnormal_vert:dS,meshnormal_frag:pS,meshphong_vert:mS,meshphong_frag:_S,meshphysical_vert:gS,meshphysical_frag:xS,meshtoon_vert:vS,meshtoon_frag:yS,points_vert:MS,points_frag:SS,shadow_vert:TS,shadow_frag:ES,sprite_vert:bS,sprite_frag:AS},ve={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},qn={basic:{uniforms:Kt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Kt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new De(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Kt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Kt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Kt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new De(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Kt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Kt([ve.points,ve.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Kt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Kt([ve.common,ve.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Kt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Kt([ve.sprite,ve.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Kt([ve.common,ve.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Kt([ve.lights,ve.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};qn.physical={uniforms:Kt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const aa={r:0,b:0,g:0};function wS(i,e,t,n,r,s,o){const a=new De(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(m,p){let M=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),M=!0);const v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Za)?(u===void 0&&(u=new Gt(new Lo(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:bs(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,R,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=x.colorSpace!==Ze,(f!==x||h!==x.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,d=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Gt(new tl(2,2),new ti({name:"BackgroundMaterial",uniforms:bs(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=x.colorSpace!==Ze,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,d=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(aa,sm(i)),n.buffers.color.setClear(aa.r,aa.g,aa.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function RS(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(F,B,G,H,V){let le=!1;if(o){const ee=_(H,G,B);c!==ee&&(c=ee,d(c.object)),le=p(F,H,G,V),le&&M(F,H,G,V)}else{const ee=B.wireframe===!0;(c.geometry!==H.id||c.program!==G.id||c.wireframe!==ee)&&(c.geometry=H.id,c.program=G.id,c.wireframe=ee,le=!0)}V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(le||u)&&(u=!1,C(F,B,G,H),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function d(F){return n.isWebGL2?i.bindVertexArray(F):s.bindVertexArrayOES(F)}function g(F){return n.isWebGL2?i.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function _(F,B,G){const H=G.wireframe===!0;let V=a[F.id];V===void 0&&(V={},a[F.id]=V);let le=V[B.id];le===void 0&&(le={},V[B.id]=le);let ee=le[H];return ee===void 0&&(ee=m(h()),le[H]=ee),ee}function m(F){const B=[],G=[],H=[];for(let V=0;V<r;V++)B[V]=0,G[V]=0,H[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:G,attributeDivisors:H,object:F,attributes:{},index:null}}function p(F,B,G,H){const V=c.attributes,le=B.attributes;let ee=0;const X=G.getAttributes();for(const W in X)if(X[W].location>=0){const ge=V[W];let Te=le[W];if(Te===void 0&&(W==="instanceMatrix"&&F.instanceMatrix&&(Te=F.instanceMatrix),W==="instanceColor"&&F.instanceColor&&(Te=F.instanceColor)),ge===void 0||ge.attribute!==Te||Te&&ge.data!==Te.data)return!0;ee++}return c.attributesNum!==ee||c.index!==H}function M(F,B,G,H){const V={},le=B.attributes;let ee=0;const X=G.getAttributes();for(const W in X)if(X[W].location>=0){let ge=le[W];ge===void 0&&(W==="instanceMatrix"&&F.instanceMatrix&&(ge=F.instanceMatrix),W==="instanceColor"&&F.instanceColor&&(ge=F.instanceColor));const Te={};Te.attribute=ge,ge&&ge.data&&(Te.data=ge.data),V[W]=Te,ee++}c.attributes=V,c.attributesNum=ee,c.index=H}function x(){const F=c.newAttributes;for(let B=0,G=F.length;B<G;B++)F[B]=0}function v(F){S(F,0)}function S(F,B){const G=c.newAttributes,H=c.enabledAttributes,V=c.attributeDivisors;G[F]=1,H[F]===0&&(i.enableVertexAttribArray(F),H[F]=1),V[F]!==B&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,B),V[F]=B)}function R(){const F=c.newAttributes,B=c.enabledAttributes;for(let G=0,H=B.length;G<H;G++)B[G]!==F[G]&&(i.disableVertexAttribArray(G),B[G]=0)}function b(F,B,G,H,V,le,ee){ee===!0?i.vertexAttribIPointer(F,B,G,V,le):i.vertexAttribPointer(F,B,G,H,V,le)}function C(F,B,G,H){if(n.isWebGL2===!1&&(F.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const V=H.attributes,le=G.getAttributes(),ee=B.defaultAttributeValues;for(const X in le){const W=le[X];if(W.location>=0){let me=V[X];if(me===void 0&&(X==="instanceMatrix"&&F.instanceMatrix&&(me=F.instanceMatrix),X==="instanceColor"&&F.instanceColor&&(me=F.instanceColor)),me!==void 0){const ge=me.normalized,Te=me.itemSize,Ae=t.get(me);if(Ae===void 0)continue;const Ce=Ae.buffer,we=Ae.type,ke=Ae.bytesPerElement,pt=n.isWebGL2===!0&&(we===i.INT||we===i.UNSIGNED_INT||me.gpuType===zp);if(me.isInterleavedBufferAttribute){const Oe=me.data,E=Oe.stride,D=me.offset;if(Oe.isInstancedInterleavedBuffer){for(let k=0;k<W.locationSize;k++)S(W.location+k,Oe.meshPerAttribute);F.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Oe.meshPerAttribute*Oe.count)}else for(let k=0;k<W.locationSize;k++)v(W.location+k);i.bindBuffer(i.ARRAY_BUFFER,Ce);for(let k=0;k<W.locationSize;k++)b(W.location+k,Te/W.locationSize,we,ge,E*ke,(D+Te/W.locationSize*k)*ke,pt)}else{if(me.isInstancedBufferAttribute){for(let Oe=0;Oe<W.locationSize;Oe++)S(W.location+Oe,me.meshPerAttribute);F.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Oe=0;Oe<W.locationSize;Oe++)v(W.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,Ce);for(let Oe=0;Oe<W.locationSize;Oe++)b(W.location+Oe,Te/W.locationSize,we,ge,Te*ke,Te/W.locationSize*Oe*ke,pt)}}else if(ee!==void 0){const ge=ee[X];if(ge!==void 0)switch(ge.length){case 2:i.vertexAttrib2fv(W.location,ge);break;case 3:i.vertexAttrib3fv(W.location,ge);break;case 4:i.vertexAttrib4fv(W.location,ge);break;default:i.vertexAttrib1fv(W.location,ge)}}}}R()}function y(){Z();for(const F in a){const B=a[F];for(const G in B){const H=B[G];for(const V in H)g(H[V].object),delete H[V];delete B[G]}delete a[F]}}function A(F){if(a[F.id]===void 0)return;const B=a[F.id];for(const G in B){const H=B[G];for(const V in H)g(H[V].object),delete H[V];delete B[G]}delete a[F.id]}function z(F){for(const B in a){const G=a[B];if(G[F.id]===void 0)continue;const H=G[F.id];for(const V in H)g(H[V].object),delete H[V];delete G[F.id]}}function Z(){O(),u=!0,c!==l&&(c=l,d(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Z,resetDefaultState:O,dispose:y,releaseStatesOfGeometry:A,releaseStatesOfProgram:z,initAttributes:x,enableAttribute:v,disableUnusedAttributes:R}}function CS(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,d;if(r)h=i,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function PS(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,v=o||e.has("OES_texture_float"),S=x&&v,R=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:S,maxSamples:R}}function LS(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Un,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:n,x=M*4;let v=p.clippingState||null;l.value=v,v=u(g,h,x,d);for(let S=0;S!==x;++S)v[S]=t[S];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=d;x!==_;++x,v+=4)o.copy(f[x]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function DS(i){let e=new WeakMap;function t(o,a){return a===Pa?o.mapping=ys:a===Ac&&(o.mapping=Ms),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Pa||a===Ac)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new jv(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Au extends om{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ss=4,Ih=[.125,.215,.35,.446,.526,.582],xr=20,Vl=new Au,Uh=new De;let Wl=null;const pr=(1+Math.sqrt(5))/2,Qr=1/pr,Nh=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,pr,Qr),new I(0,pr,-Qr),new I(Qr,0,pr),new I(-Qr,0,pr),new I(pr,Qr,0),new I(-pr,Qr,0)];class Oh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Wl=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wl),e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ys||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wl=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:Bn,format:Mn,colorSpace:St,depthBuffer:!1},r=Fh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IS(s)),this._blurMaterial=US(s,e,t)}return r}_compileMaterial(e){const t=new Gt(this._lodPlanes[0],e);this._renderer.compile(t,Vl)}_sceneToCubeUV(e,t,n,r){const a=new Lt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Uh),u.toneMapping=Xi,u.autoClear=!1;const d=new Fi({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new Gt(new Lo,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Uh),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;la(r,M*x,p>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ys||e.mapping===Ms;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Gt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;la(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Vl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Nh[(r-1)%Nh.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Gt(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*xr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):xr;m>xr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xr}`);const p=[];let M=0;for(let b=0;b<xr;++b){const C=b/_,y=Math.exp(-C*C/2);p.push(y),b===0?M+=y:b<m&&(M+=2*y)}for(let b=0;b<p.length;b++)p[b]=p[b]/M;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const v=this._sizeLods[r],S=3*v*(r>x-ss?r-x+ss:0),R=4*(this._cubeSize-v);la(t,S,R,3*v,2*v),l.setRenderTarget(t),l.render(f,Vl)}}function IS(i){const e=[],t=[],n=[];let r=i;const s=i-ss+1+Ih.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-ss?l=Ih[o-i+ss-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*d),x=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let R=0;R<d;R++){const b=R%3*2/3-1,C=R>2?0:-1,y=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];M.set(y,_*g*R),x.set(h,m*g*R);const A=[R,R,R,R,R,R];v.set(A,p*g*R)}const S=new Rn;S.setAttribute("position",new Ut(M,_)),S.setAttribute("uv",new Ut(x,m)),S.setAttribute("faceIndex",new Ut(v,p)),e.push(S),r>ss&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fh(i,e,t){const n=new Si(i,e,t);return n.texture.mapping=Za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function la(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function US(i,e,t){const n=new Float32Array(xr),r=new I(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wu(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Bh(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wu(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function kh(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function wu(){return`

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
	`}function NS(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Pa||l===Ac,u=l===ys||l===Ms;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Oh(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Oh(i));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function OS(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function FS(i,e,t,n){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let x=0,v=M.length;x<v;x+=3){const S=M[x+0],R=M[x+1],b=M[x+2];h.push(S,R,R,b,b,S)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,v=M.length/3-1;x<v;x+=3){const S=x+0,R=x+1,b=x+2;h.push(S,R,R,b,b,S)}}else return;const m=new(Zp(h)?rm:im)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function BS(i,e,t,n){const r=n.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,d){i.drawElements(s,d,a,h*l),t.update(d,s,1)}function f(h,d,g){if(g===0)return;let _,m;if(r)_=i,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,d,a,h*l,g),t.update(d,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function kS(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function zS(i,e){return i[0]-e[0]}function HS(i,e){return Math.abs(e[1])-Math.abs(i[1])}function GS(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new Je,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let B=function(){O.dispose(),s.delete(u),u.removeEventListener("dispose",B)};var d=B;m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let y=0;x===!0&&(y=1),v===!0&&(y=2),S===!0&&(y=3);let A=u.attributes.position.count*y,z=1;A>e.maxTextureSize&&(z=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const Z=new Float32Array(A*z*4*_),O=new em(Z,A,z,_);O.type=Sn,O.needsUpdate=!0;const F=y*4;for(let G=0;G<_;G++){const H=R[G],V=b[G],le=C[G],ee=A*z*4*G;for(let X=0;X<H.count;X++){const W=X*F;x===!0&&(o.fromBufferAttribute(H,X),Z[ee+W+0]=o.x,Z[ee+W+1]=o.y,Z[ee+W+2]=o.z,Z[ee+W+3]=0),v===!0&&(o.fromBufferAttribute(V,X),Z[ee+W+4]=o.x,Z[ee+W+5]=o.y,Z[ee+W+6]=o.z,Z[ee+W+7]=0),S===!0&&(o.fromBufferAttribute(le,X),Z[ee+W+8]=o.x,Z[ee+W+9]=o.y,Z[ee+W+10]=o.z,Z[ee+W+11]=le.itemSize===4?o.w:1)}}m={count:_,texture:O,size:new Pe(A,z)},s.set(u,m),u.addEventListener("dispose",B)}let p=0;for(let x=0;x<h.length;x++)p+=h[x];const M=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(i,"morphTargetBaseInfluence",M),f.getUniforms().setValue(i,"morphTargetInfluences",h),f.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const g=h===void 0?0:h.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let v=0;v<g;v++)_[v]=[v,0];n[u.id]=_}for(let v=0;v<g;v++){const S=_[v];S[0]=v,S[1]=h[v]}_.sort(HS);for(let v=0;v<8;v++)v<g&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(zS);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let M=0;for(let v=0;v<8;v++){const S=a[v],R=S[0],b=S[1];R!==Number.MAX_SAFE_INTEGER&&b?(m&&u.getAttribute("morphTarget"+v)!==m[R]&&u.setAttribute("morphTarget"+v,m[R]),p&&u.getAttribute("morphNormal"+v)!==p[R]&&u.setAttribute("morphNormal"+v,p[R]),r[v]=b,M+=b):(m&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),p&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}const x=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(i,"morphTargetBaseInfluence",x),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function VS(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const cm=new It,um=new em,fm=new wv,hm=new am,zh=[],Hh=[],Gh=new Float32Array(16),Vh=new Float32Array(9),Wh=new Float32Array(4);function Fs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=zh[r];if(s===void 0&&(s=new Float32Array(r),zh[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function nl(i,e){let t=Hh[e];t===void 0&&(t=new Int32Array(e),Hh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function WS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function XS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function jS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function qS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function YS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(bt(t,n))return;Wh.set(n),i.uniformMatrix2fv(this.addr,!1,Wh),At(t,n)}}function KS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(bt(t,n))return;Vh.set(n),i.uniformMatrix3fv(this.addr,!1,Vh),At(t,n)}}function $S(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(bt(t,n))return;Gh.set(n),i.uniformMatrix4fv(this.addr,!1,Gh),At(t,n)}}function ZS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function JS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function QS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function eT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function tT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function nT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function iT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function rT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function sT(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||cm,r)}function oT(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||fm,r)}function aT(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||hm,r)}function lT(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||um,r)}function cT(i){switch(i){case 5126:return WS;case 35664:return XS;case 35665:return jS;case 35666:return qS;case 35674:return YS;case 35675:return KS;case 35676:return $S;case 5124:case 35670:return ZS;case 35667:case 35671:return JS;case 35668:case 35672:return QS;case 35669:case 35673:return eT;case 5125:return tT;case 36294:return nT;case 36295:return iT;case 36296:return rT;case 35678:case 36198:case 36298:case 36306:case 35682:return sT;case 35679:case 36299:case 36307:return oT;case 35680:case 36300:case 36308:case 36293:return aT;case 36289:case 36303:case 36311:case 36292:return lT}}function uT(i,e){i.uniform1fv(this.addr,e)}function fT(i,e){const t=Fs(e,this.size,2);i.uniform2fv(this.addr,t)}function hT(i,e){const t=Fs(e,this.size,3);i.uniform3fv(this.addr,t)}function dT(i,e){const t=Fs(e,this.size,4);i.uniform4fv(this.addr,t)}function pT(i,e){const t=Fs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function mT(i,e){const t=Fs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function _T(i,e){const t=Fs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function gT(i,e){i.uniform1iv(this.addr,e)}function xT(i,e){i.uniform2iv(this.addr,e)}function vT(i,e){i.uniform3iv(this.addr,e)}function yT(i,e){i.uniform4iv(this.addr,e)}function MT(i,e){i.uniform1uiv(this.addr,e)}function ST(i,e){i.uniform2uiv(this.addr,e)}function TT(i,e){i.uniform3uiv(this.addr,e)}function ET(i,e){i.uniform4uiv(this.addr,e)}function bT(i,e,t){const n=this.cache,r=e.length,s=nl(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||cm,s[o])}function AT(i,e,t){const n=this.cache,r=e.length,s=nl(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||fm,s[o])}function wT(i,e,t){const n=this.cache,r=e.length,s=nl(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||hm,s[o])}function RT(i,e,t){const n=this.cache,r=e.length,s=nl(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||um,s[o])}function CT(i){switch(i){case 5126:return uT;case 35664:return fT;case 35665:return hT;case 35666:return dT;case 35674:return pT;case 35675:return mT;case 35676:return _T;case 5124:case 35670:return gT;case 35667:case 35671:return xT;case 35668:case 35672:return vT;case 35669:case 35673:return yT;case 5125:return MT;case 36294:return ST;case 36295:return TT;case 36296:return ET;case 35678:case 36198:case 36298:case 36306:case 35682:return bT;case 35679:case 36299:case 36307:return AT;case 35680:case 36300:case 36308:case 36293:return wT;case 36289:case 36303:case 36311:case 36292:return RT}}class PT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=cT(t.type)}}class LT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=CT(t.type)}}class DT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Xl=/(\w+)(\])?(\[|\.)?/g;function Xh(i,e){i.seq.push(e),i.map[e.id]=e}function IT(i,e,t){const n=i.name,r=n.length;for(Xl.lastIndex=0;;){const s=Xl.exec(n),o=Xl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Xh(t,c===void 0?new PT(a,i,e):new LT(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new DT(a),Xh(t,f)),t=f}}}class Ma{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);IT(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function jh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let UT=0;function NT(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function OT(i){switch(i){case St:return["Linear","( value )"];case Ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function qh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+NT(i.getShaderSource(e),o)}else return r}function FT(i,e){const t=OT(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function BT(i,e){let t;switch(e){case Lx:t="Linear";break;case Dx:t="Reinhard";break;case Ix:t="OptimizedCineon";break;case Fp:t="ACESFilmic";break;case Ux:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function kT(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qs).join(`
`)}function zT(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function HT(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Qs(i){return i!==""}function Yh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dc(i){return i.replace(GT,WT)}const VT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function WT(i,e){let t=He[e];if(t===void 0){const n=VT.get(e);if(n!==void 0)t=He[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Dc(t)}const XT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $h(i){return i.replace(XT,jT)}function jT(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qT(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ip?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===cx?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function YT(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ys:case Ms:e="ENVMAP_TYPE_CUBE";break;case Za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function KT(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ms:e="ENVMAP_MODE_REFRACTION";break}return e}function $T(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Op:e="ENVMAP_BLENDING_MULTIPLY";break;case Cx:e="ENVMAP_BLENDING_MIX";break;case Px:e="ENVMAP_BLENDING_ADD";break}return e}function ZT(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function JT(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=qT(t),c=YT(t),u=KT(t),f=$T(t),h=ZT(t),d=t.isWebGL2?"":kT(t),g=zT(s),_=r.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qs).join(`
`),m.length>0&&(m+=`
`),p=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qs).join(`
`),p.length>0&&(p+=`
`)):(m=[Zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),p=[d,Zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?He.tonemapping_pars_fragment:"",t.toneMapping!==Xi?BT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,FT("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qs).join(`
`)),o=Dc(o),o=Yh(o,t),o=Kh(o,t),a=Dc(a),a=Yh(a,t),a=Kh(a,t),o=$h(o),a=$h(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+m+o,v=M+p+a,S=jh(r,r.VERTEX_SHADER,x),R=jh(r,r.FRAGMENT_SHADER,v);if(r.attachShader(_,S),r.attachShader(_,R),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),i.debug.checkShaderErrors){const y=r.getProgramInfoLog(_).trim(),A=r.getShaderInfoLog(S).trim(),z=r.getShaderInfoLog(R).trim();let Z=!0,O=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,S,R);else{const F=qh(r,S,"vertex"),B=qh(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+y+`
`+F+`
`+B)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(A===""||z==="")&&(O=!1);O&&(this.diagnostics={runnable:Z,programLog:y,vertexShader:{log:A,prefix:m},fragmentShader:{log:z,prefix:p}})}r.deleteShader(S),r.deleteShader(R);let b;this.getUniforms=function(){return b===void 0&&(b=new Ma(r,_)),b};let C;return this.getAttributes=function(){return C===void 0&&(C=HT(r,_)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=UT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=R,this}let QT=0;class eE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new tE(e),t.set(e,n)),n}}class tE{constructor(e){this.id=QT++,this.code=e,this.usedTimes=0}}function nE(i,e,t,n,r,s,o){const a=new tm,l=new eE,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function m(y,A,z,Z,O){const F=Z.fog,B=O.geometry,G=y.isMeshStandardMaterial?Z.environment:null,H=(y.isMeshStandardMaterial?t:e).get(y.envMap||G),V=H&&H.mapping===Za?H.image.height:null,le=g[y.type];y.precision!==null&&(d=r.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const ee=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,X=ee!==void 0?ee.length:0;let W=0;B.morphAttributes.position!==void 0&&(W=1),B.morphAttributes.normal!==void 0&&(W=2),B.morphAttributes.color!==void 0&&(W=3);let me,ge,Te,Ae;if(le){const ot=qn[le];me=ot.vertexShader,ge=ot.fragmentShader}else me=y.vertexShader,ge=y.fragmentShader,l.update(y),Te=l.getVertexShaderID(y),Ae=l.getFragmentShaderID(y);const Ce=i.getRenderTarget(),we=O.isInstancedMesh===!0,ke=!!y.map,pt=!!y.matcap,Oe=!!H,E=!!y.aoMap,D=!!y.lightMap,k=!!y.bumpMap,K=!!y.normalMap,q=!!y.displacementMap,fe=!!y.emissiveMap,ue=!!y.metalnessMap,Q=!!y.roughnessMap,ce=y.anisotropy>0,oe=y.clearcoat>0,Ee=y.iridescence>0,w=y.sheen>0,T=y.transmission>0,N=ce&&!!y.anisotropyMap,ie=oe&&!!y.clearcoatMap,re=oe&&!!y.clearcoatNormalMap,se=oe&&!!y.clearcoatRoughnessMap,ye=Ee&&!!y.iridescenceMap,he=Ee&&!!y.iridescenceThicknessMap,$=w&&!!y.sheenColorMap,L=w&&!!y.sheenRoughnessMap,ae=!!y.specularMap,Me=!!y.specularColorMap,de=!!y.specularIntensityMap,_e=T&&!!y.transmissionMap,Le=T&&!!y.thicknessMap,qe=!!y.gradientMap,U=!!y.alphaMap,Se=y.alphaTest>0,J=!!y.alphaHash,pe=!!y.extensions,xe=!!B.attributes.uv1,Ve=!!B.attributes.uv2,Qe=!!B.attributes.uv3;let st=Xi;return y.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(st=i.toneMapping),{isWebGL2:u,shaderID:le,shaderType:y.type,shaderName:y.name,vertexShader:me,fragmentShader:ge,defines:y.defines,customVertexShaderID:Te,customFragmentShaderID:Ae,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,instancing:we,instancingColor:we&&O.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Ce===null?i.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:St,map:ke,matcap:pt,envMap:Oe,envMapMode:Oe&&H.mapping,envMapCubeUVHeight:V,aoMap:E,lightMap:D,bumpMap:k,normalMap:K,displacementMap:h&&q,emissiveMap:fe,normalMapObjectSpace:K&&y.normalMapType===Yx,normalMapTangentSpace:K&&y.normalMapType===Yp,metalnessMap:ue,roughnessMap:Q,anisotropy:ce,anisotropyMap:N,clearcoat:oe,clearcoatMap:ie,clearcoatNormalMap:re,clearcoatRoughnessMap:se,iridescence:Ee,iridescenceMap:ye,iridescenceThicknessMap:he,sheen:w,sheenColorMap:$,sheenRoughnessMap:L,specularMap:ae,specularColorMap:Me,specularIntensityMap:de,transmission:T,transmissionMap:_e,thicknessMap:Le,gradientMap:qe,opaque:y.transparent===!1&&y.blending===fs,alphaMap:U,alphaTest:Se,alphaHash:J,combine:y.combine,mapUv:ke&&_(y.map.channel),aoMapUv:E&&_(y.aoMap.channel),lightMapUv:D&&_(y.lightMap.channel),bumpMapUv:k&&_(y.bumpMap.channel),normalMapUv:K&&_(y.normalMap.channel),displacementMapUv:q&&_(y.displacementMap.channel),emissiveMapUv:fe&&_(y.emissiveMap.channel),metalnessMapUv:ue&&_(y.metalnessMap.channel),roughnessMapUv:Q&&_(y.roughnessMap.channel),anisotropyMapUv:N&&_(y.anisotropyMap.channel),clearcoatMapUv:ie&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:he&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:$&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:L&&_(y.sheenRoughnessMap.channel),specularMapUv:ae&&_(y.specularMap.channel),specularColorMapUv:Me&&_(y.specularColorMap.channel),specularIntensityMapUv:de&&_(y.specularIntensityMap.channel),transmissionMapUv:_e&&_(y.transmissionMap.channel),thicknessMapUv:Le&&_(y.thicknessMap.channel),alphaMapUv:U&&_(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(K||ce),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:xe,vertexUv2s:Ve,vertexUv3s:Qe,pointsUvs:O.isPoints===!0&&!!B.attributes.uv&&(ke||U),fog:!!F,useFog:y.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:W,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,useLegacyLights:i._useLegacyLights,decodeVideoTexture:ke&&y.map.isVideoTexture===!0&&y.map.colorSpace===Ze,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===On,flipSided:y.side===en,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:pe&&y.extensions.derivatives===!0,extensionFragDepth:pe&&y.extensions.fragDepth===!0,extensionDrawBuffers:pe&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const z in y.defines)A.push(z),A.push(y.defines[z]);return y.isRawShaderMaterial===!1&&(M(A,y),x(A,y),A.push(i.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function M(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function x(y,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function v(y){const A=g[y.type];let z;if(A){const Z=qn[A];z=el.clone(Z.uniforms)}else z=y.uniforms;return z}function S(y,A){let z;for(let Z=0,O=c.length;Z<O;Z++){const F=c[Z];if(F.cacheKey===A){z=F,++z.usedTimes;break}}return z===void 0&&(z=new JT(i,A,y,s),c.push(z)),z}function R(y){if(--y.usedTimes===0){const A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),y.destroy()}}function b(y){l.remove(y)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:S,releaseProgram:R,releaseShaderCache:b,programs:c,dispose:C}}function iE(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function rE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Jh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Qh(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,h,d,g,_,m){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||rE),n.length>1&&n.sort(h||Jh),r.length>1&&r.sort(h||Jh)}function u(){for(let f=e,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function sE(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Qh,i.set(n,[o])):r>=s.length?(o=new Qh,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function oE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new De};break;case"SpotLight":t={position:new I,direction:new I,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function aE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let lE=0;function cE(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function uE(i,e){const t=new oE,n=aE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new I);const s=new I,o=new Fe,a=new Fe;function l(u,f){let h=0,d=0,g=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let _=0,m=0,p=0,M=0,x=0,v=0,S=0,R=0,b=0,C=0;u.sort(cE);const y=f===!0?Math.PI:1;for(let z=0,Z=u.length;z<Z;z++){const O=u[z],F=O.color,B=O.intensity,G=O.distance,H=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=F.r*B*y,d+=F.g*B*y,g+=F.b*B*y;else if(O.isLightProbe)for(let V=0;V<9;V++)r.probe[V].addScaledVector(O.sh.coefficients[V],B);else if(O.isDirectionalLight){const V=t.get(O);if(V.color.copy(O.color).multiplyScalar(O.intensity*y),O.castShadow){const le=O.shadow,ee=n.get(O);ee.shadowBias=le.bias,ee.shadowNormalBias=le.normalBias,ee.shadowRadius=le.radius,ee.shadowMapSize=le.mapSize,r.directionalShadow[_]=ee,r.directionalShadowMap[_]=H,r.directionalShadowMatrix[_]=O.shadow.matrix,v++}r.directional[_]=V,_++}else if(O.isSpotLight){const V=t.get(O);V.position.setFromMatrixPosition(O.matrixWorld),V.color.copy(F).multiplyScalar(B*y),V.distance=G,V.coneCos=Math.cos(O.angle),V.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),V.decay=O.decay,r.spot[p]=V;const le=O.shadow;if(O.map&&(r.spotLightMap[b]=O.map,b++,le.updateMatrices(O),O.castShadow&&C++),r.spotLightMatrix[p]=le.matrix,O.castShadow){const ee=n.get(O);ee.shadowBias=le.bias,ee.shadowNormalBias=le.normalBias,ee.shadowRadius=le.radius,ee.shadowMapSize=le.mapSize,r.spotShadow[p]=ee,r.spotShadowMap[p]=H,R++}p++}else if(O.isRectAreaLight){const V=t.get(O);V.color.copy(F).multiplyScalar(B),V.halfWidth.set(O.width*.5,0,0),V.halfHeight.set(0,O.height*.5,0),r.rectArea[M]=V,M++}else if(O.isPointLight){const V=t.get(O);if(V.color.copy(O.color).multiplyScalar(O.intensity*y),V.distance=O.distance,V.decay=O.decay,O.castShadow){const le=O.shadow,ee=n.get(O);ee.shadowBias=le.bias,ee.shadowNormalBias=le.normalBias,ee.shadowRadius=le.radius,ee.shadowMapSize=le.mapSize,ee.shadowCameraNear=le.camera.near,ee.shadowCameraFar=le.camera.far,r.pointShadow[m]=ee,r.pointShadowMap[m]=H,r.pointShadowMatrix[m]=O.shadow.matrix,S++}r.point[m]=V,m++}else if(O.isHemisphereLight){const V=t.get(O);V.skyColor.copy(O.color).multiplyScalar(B*y),V.groundColor.copy(O.groundColor).multiplyScalar(B*y),r.hemi[x]=V,x++}}M>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=g;const A=r.hash;(A.directionalLength!==_||A.pointLength!==m||A.spotLength!==p||A.rectAreaLength!==M||A.hemiLength!==x||A.numDirectionalShadows!==v||A.numPointShadows!==S||A.numSpotShadows!==R||A.numSpotMaps!==b)&&(r.directional.length=_,r.spot.length=p,r.rectArea.length=M,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=v,r.directionalShadowMap.length=v,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=v,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=R+b-C,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=C,A.directionalLength=_,A.pointLength=m,A.spotLength=p,A.rectAreaLength=M,A.hemiLength=x,A.numDirectionalShadows=v,A.numPointShadows=S,A.numSpotShadows=R,A.numSpotMaps=b,r.version=lE++)}function c(u,f){let h=0,d=0,g=0,_=0,m=0;const p=f.matrixWorldInverse;for(let M=0,x=u.length;M<x;M++){const v=u[M];if(v.isDirectionalLight){const S=r.directional[h];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),h++}else if(v.isSpotLight){const S=r.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),g++}else if(v.isRectAreaLight){const S=r.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),a.identity(),o.copy(v.matrixWorld),o.premultiply(p),a.extractRotation(o),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const S=r.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const S=r.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:r}}function ed(i,e){const t=new uE(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(f){n.push(f)}function a(f){r.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function fE(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new ed(i,e),t.set(s,[l])):o>=a.length?(l=new ed(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class hE extends Qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dE extends Qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const pE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _E(i,e,t){let n=new bu;const r=new Pe,s=new Pe,o=new Je,a=new hE({depthPacking:qx}),l=new dE,c={},u=t.maxTextureSize,f={[Mi]:en,[en]:Mi,[On]:On},h=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:pE,fragmentShader:mE}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Rn;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Gt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ip;let p=this.type;this.render=function(S,R,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const C=i.getRenderTarget(),y=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Wi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const Z=p!==di&&this.type===di,O=p===di&&this.type!==di;for(let F=0,B=S.length;F<B;F++){const G=S[F],H=G.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const V=H.getFrameExtents();if(r.multiply(V),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/V.x),r.x=s.x*V.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/V.y),r.y=s.y*V.y,H.mapSize.y=s.y)),H.map===null||Z===!0||O===!0){const ee=this.type!==di?{minFilter:Rt,magFilter:Rt}:{};H.map!==null&&H.map.dispose(),H.map=new Si(r.x,r.y,ee),H.map.texture.name=G.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const le=H.getViewportCount();for(let ee=0;ee<le;ee++){const X=H.getViewport(ee);o.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),z.viewport(o),H.updateMatrices(G,ee),n=H.getFrustum(),v(R,b,H.camera,G,this.type)}H.isPointLightShadow!==!0&&this.type===di&&M(H,b),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(C,y,A)};function M(S,R){const b=e.update(_);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Si(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(R,null,b,h,_,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(R,null,b,d,_,null)}function x(S,R,b,C){let y=null;const A=b.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(A!==void 0)y=A;else if(y=b.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const z=y.uuid,Z=R.uuid;let O=c[z];O===void 0&&(O={},c[z]=O);let F=O[Z];F===void 0&&(F=y.clone(),O[Z]=F),y=F}if(y.visible=R.visible,y.wireframe=R.wireframe,C===di?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:f[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,b.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=i.properties.get(y);z.light=b}return y}function v(S,R,b,C,y){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===di)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,S.matrixWorld);const Z=e.update(S),O=S.material;if(Array.isArray(O)){const F=Z.groups;for(let B=0,G=F.length;B<G;B++){const H=F[B],V=O[H.materialIndex];if(V&&V.visible){const le=x(S,V,C,y);i.renderBufferDirect(b,null,Z,le,S,H)}}}else if(O.visible){const F=x(S,O,C,y);i.renderBufferDirect(b,null,Z,F,S,null)}}const z=S.children;for(let Z=0,O=z.length;Z<O;Z++)v(z[Z],R,b,C,y)}}function gE(i,e,t){const n=t.isWebGL2;function r(){let U=!1;const Se=new Je;let J=null;const pe=new Je(0,0,0,0);return{setMask:function(xe){J!==xe&&!U&&(i.colorMask(xe,xe,xe,xe),J=xe)},setLocked:function(xe){U=xe},setClear:function(xe,Ve,Qe,st,an){an===!0&&(xe*=st,Ve*=st,Qe*=st),Se.set(xe,Ve,Qe,st),pe.equals(Se)===!1&&(i.clearColor(xe,Ve,Qe,st),pe.copy(Se))},reset:function(){U=!1,J=null,pe.set(-1,0,0,0)}}}function s(){let U=!1,Se=null,J=null,pe=null;return{setTest:function(xe){xe?Ce(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(xe){Se!==xe&&!U&&(i.depthMask(xe),Se=xe)},setFunc:function(xe){if(J!==xe){switch(xe){case Sx:i.depthFunc(i.NEVER);break;case Tx:i.depthFunc(i.ALWAYS);break;case Ex:i.depthFunc(i.LESS);break;case bc:i.depthFunc(i.LEQUAL);break;case bx:i.depthFunc(i.EQUAL);break;case Ax:i.depthFunc(i.GEQUAL);break;case wx:i.depthFunc(i.GREATER);break;case Rx:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=xe}},setLocked:function(xe){U=xe},setClear:function(xe){pe!==xe&&(i.clearDepth(xe),pe=xe)},reset:function(){U=!1,Se=null,J=null,pe=null}}}function o(){let U=!1,Se=null,J=null,pe=null,xe=null,Ve=null,Qe=null,st=null,an=null;return{setTest:function(ot){U||(ot?Ce(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(ot){Se!==ot&&!U&&(i.stencilMask(ot),Se=ot)},setFunc:function(ot,Wn,Xt){(J!==ot||pe!==Wn||xe!==Xt)&&(i.stencilFunc(ot,Wn,Xt),J=ot,pe=Wn,xe=Xt)},setOp:function(ot,Wn,Xt){(Ve!==ot||Qe!==Wn||st!==Xt)&&(i.stencilOp(ot,Wn,Xt),Ve=ot,Qe=Wn,st=Xt)},setLocked:function(ot){U=ot},setClear:function(ot){an!==ot&&(i.clearStencil(ot),an=ot)},reset:function(){U=!1,Se=null,J=null,pe=null,xe=null,Ve=null,Qe=null,st=null,an=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},d={},g=new WeakMap,_=[],m=null,p=!1,M=null,x=null,v=null,S=null,R=null,b=null,C=null,y=!1,A=null,z=null,Z=null,O=null,F=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,H=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=H>=1):V.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=H>=2);let le=null,ee={};const X=i.getParameter(i.SCISSOR_BOX),W=i.getParameter(i.VIEWPORT),me=new Je().fromArray(X),ge=new Je().fromArray(W);function Te(U,Se,J,pe){const xe=new Uint8Array(4),Ve=i.createTexture();i.bindTexture(U,Ve),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<J;Qe++)n&&(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)?i.texImage3D(Se,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(Se+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return Ve}const Ae={};Ae[i.TEXTURE_2D]=Te(i.TEXTURE_2D,i.TEXTURE_2D,1),Ae[i.TEXTURE_CUBE_MAP]=Te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ae[i.TEXTURE_2D_ARRAY]=Te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ae[i.TEXTURE_3D]=Te(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ce(i.DEPTH_TEST),l.setFunc(bc),q(!1),fe(Ff),Ce(i.CULL_FACE),k(Wi);function Ce(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function we(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function ke(U,Se){return d[U]!==Se?(i.bindFramebuffer(U,Se),d[U]=Se,n&&(U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Se),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Se)),!0):!1}function pt(U,Se){let J=_,pe=!1;if(U)if(J=g.get(Se),J===void 0&&(J=[],g.set(Se,J)),U.isWebGLMultipleRenderTargets){const xe=U.texture;if(J.length!==xe.length||J[0]!==i.COLOR_ATTACHMENT0){for(let Ve=0,Qe=xe.length;Ve<Qe;Ve++)J[Ve]=i.COLOR_ATTACHMENT0+Ve;J.length=xe.length,pe=!0}}else J[0]!==i.COLOR_ATTACHMENT0&&(J[0]=i.COLOR_ATTACHMENT0,pe=!0);else J[0]!==i.BACK&&(J[0]=i.BACK,pe=!0);pe&&(t.isWebGL2?i.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function Oe(U){return m!==U?(i.useProgram(U),m=U,!0):!1}const E={[is]:i.FUNC_ADD,[fx]:i.FUNC_SUBTRACT,[hx]:i.FUNC_REVERSE_SUBTRACT};if(n)E[Hf]=i.MIN,E[Gf]=i.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(E[Hf]=U.MIN_EXT,E[Gf]=U.MAX_EXT)}const D={[dx]:i.ZERO,[px]:i.ONE,[mx]:i.SRC_COLOR,[Up]:i.SRC_ALPHA,[Mx]:i.SRC_ALPHA_SATURATE,[vx]:i.DST_COLOR,[gx]:i.DST_ALPHA,[_x]:i.ONE_MINUS_SRC_COLOR,[Np]:i.ONE_MINUS_SRC_ALPHA,[yx]:i.ONE_MINUS_DST_COLOR,[xx]:i.ONE_MINUS_DST_ALPHA};function k(U,Se,J,pe,xe,Ve,Qe,st){if(U===Wi){p===!0&&(we(i.BLEND),p=!1);return}if(p===!1&&(Ce(i.BLEND),p=!0),U!==ux){if(U!==M||st!==y){if((x!==is||R!==is)&&(i.blendEquation(i.FUNC_ADD),x=is,R=is),st)switch(U){case fs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bf:i.blendFunc(i.ONE,i.ONE);break;case kf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bf:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case kf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,S=null,b=null,C=null,M=U,y=st}return}xe=xe||Se,Ve=Ve||J,Qe=Qe||pe,(Se!==x||xe!==R)&&(i.blendEquationSeparate(E[Se],E[xe]),x=Se,R=xe),(J!==v||pe!==S||Ve!==b||Qe!==C)&&(i.blendFuncSeparate(D[J],D[pe],D[Ve],D[Qe]),v=J,S=pe,b=Ve,C=Qe),M=U,y=!1}function K(U,Se){U.side===On?we(i.CULL_FACE):Ce(i.CULL_FACE);let J=U.side===en;Se&&(J=!J),q(J),U.blending===fs&&U.transparent===!1?k(Wi):k(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const pe=U.stencilWrite;c.setTest(pe),pe&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Q(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Ce(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function q(U){A!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),A=U)}function fe(U){U!==ax?(Ce(i.CULL_FACE),U!==z&&(U===Ff?i.cullFace(i.BACK):U===lx?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),z=U}function ue(U){U!==Z&&(G&&i.lineWidth(U),Z=U)}function Q(U,Se,J){U?(Ce(i.POLYGON_OFFSET_FILL),(O!==Se||F!==J)&&(i.polygonOffset(Se,J),O=Se,F=J)):we(i.POLYGON_OFFSET_FILL)}function ce(U){U?Ce(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function oe(U){U===void 0&&(U=i.TEXTURE0+B-1),le!==U&&(i.activeTexture(U),le=U)}function Ee(U,Se,J){J===void 0&&(le===null?J=i.TEXTURE0+B-1:J=le);let pe=ee[J];pe===void 0&&(pe={type:void 0,texture:void 0},ee[J]=pe),(pe.type!==U||pe.texture!==Se)&&(le!==J&&(i.activeTexture(J),le=J),i.bindTexture(U,Se||Ae[U]),pe.type=U,pe.texture=Se)}function w(){const U=ee[le];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function T(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function N(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function L(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(U){me.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),me.copy(U))}function de(U){ge.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),ge.copy(U))}function _e(U,Se){let J=f.get(Se);J===void 0&&(J=new WeakMap,f.set(Se,J));let pe=J.get(U);pe===void 0&&(pe=i.getUniformBlockIndex(Se,U.name),J.set(U,pe))}function Le(U,Se){const pe=f.get(Se).get(U);u.get(Se)!==pe&&(i.uniformBlockBinding(Se,pe,U.__bindingPointIndex),u.set(Se,pe))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},le=null,ee={},d={},g=new WeakMap,_=[],m=null,p=!1,M=null,x=null,v=null,S=null,R=null,b=null,C=null,y=!1,A=null,z=null,Z=null,O=null,F=null,me.set(0,0,i.canvas.width,i.canvas.height),ge.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ce,disable:we,bindFramebuffer:ke,drawBuffers:pt,useProgram:Oe,setBlending:k,setMaterial:K,setFlipSided:q,setCullFace:fe,setLineWidth:ue,setPolygonOffset:Q,setScissorTest:ce,activeTexture:oe,bindTexture:Ee,unbindTexture:w,compressedTexImage2D:T,compressedTexImage3D:N,texImage2D:L,texImage3D:ae,updateUBOMapping:_e,uniformBlockBinding:Le,texStorage2D:he,texStorage3D:$,texSubImage2D:ie,texSubImage3D:re,compressedTexSubImage2D:se,compressedTexSubImage3D:ye,scissor:Me,viewport:de,reset:qe}}function xE(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(w,T){return p?new OffscreenCanvas(w,T):vo("canvas")}function x(w,T,N,ie){let re=1;if((w.width>ie||w.height>ie)&&(re=ie/Math.max(w.width,w.height)),re<1||T===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const se=T?Ia:Math.floor,ye=se(re*w.width),he=se(re*w.height);_===void 0&&(_=M(ye,he));const $=N?M(ye,he):_;return $.width=ye,$.height=he,$.getContext("2d").drawImage(w,0,0,ye,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+ye+"x"+he+")."),$}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function v(w){return Lc(w.width)&&Lc(w.height)}function S(w){return a?!1:w.wrapS!==Jt||w.wrapT!==Jt||w.minFilter!==Rt&&w.minFilter!==Et}function R(w,T){return w.generateMipmaps&&T&&w.minFilter!==Rt&&w.minFilter!==Et}function b(w){i.generateMipmap(w)}function C(w,T,N,ie,re=!1){if(a===!1)return T;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let se=T;return T===i.RED&&(N===i.FLOAT&&(se=i.R32F),N===i.HALF_FLOAT&&(se=i.R16F),N===i.UNSIGNED_BYTE&&(se=i.R8)),T===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(se=i.R8UI),N===i.UNSIGNED_SHORT&&(se=i.R16UI),N===i.UNSIGNED_INT&&(se=i.R32UI),N===i.BYTE&&(se=i.R8I),N===i.SHORT&&(se=i.R16I),N===i.INT&&(se=i.R32I)),T===i.RG&&(N===i.FLOAT&&(se=i.RG32F),N===i.HALF_FLOAT&&(se=i.RG16F),N===i.UNSIGNED_BYTE&&(se=i.RG8)),T===i.RGBA&&(N===i.FLOAT&&(se=i.RGBA32F),N===i.HALF_FLOAT&&(se=i.RGBA16F),N===i.UNSIGNED_BYTE&&(se=ie===Ze&&re===!1?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)),(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function y(w,T,N){return R(w,N)===!0||w.isFramebufferTexture&&w.minFilter!==Rt&&w.minFilter!==Et?Math.log2(Math.max(T.width,T.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?T.mipmaps.length:1}function A(w){return w===Rt||w===wc||w===ya?i.NEAREST:i.LINEAR}function z(w){const T=w.target;T.removeEventListener("dispose",z),O(T),T.isVideoTexture&&g.delete(T)}function Z(w){const T=w.target;T.removeEventListener("dispose",Z),B(T)}function O(w){const T=n.get(w);if(T.__webglInit===void 0)return;const N=w.source,ie=m.get(N);if(ie){const re=ie[T.__cacheKey];re.usedTimes--,re.usedTimes===0&&F(w),Object.keys(ie).length===0&&m.delete(N)}n.remove(w)}function F(w){const T=n.get(w);i.deleteTexture(T.__webglTexture);const N=w.source,ie=m.get(N);delete ie[T.__cacheKey],o.memory.textures--}function B(w){const T=w.texture,N=n.get(w),ie=n.get(T);if(ie.__webglTexture!==void 0&&(i.deleteTexture(ie.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(N.__webglFramebuffer[re]))for(let se=0;se<N.__webglFramebuffer[re].length;se++)i.deleteFramebuffer(N.__webglFramebuffer[re][se]);else i.deleteFramebuffer(N.__webglFramebuffer[re]);N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[re])}else{if(Array.isArray(N.__webglFramebuffer))for(let re=0;re<N.__webglFramebuffer.length;re++)i.deleteFramebuffer(N.__webglFramebuffer[re]);else i.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let re=0;re<N.__webglColorRenderbuffer.length;re++)N.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[re]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let re=0,se=T.length;re<se;re++){const ye=n.get(T[re]);ye.__webglTexture&&(i.deleteTexture(ye.__webglTexture),o.memory.textures--),n.remove(T[re])}n.remove(T),n.remove(w)}let G=0;function H(){G=0}function V(){const w=G;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),G+=1,w}function le(w){const T=[];return T.push(w.wrapS),T.push(w.wrapT),T.push(w.wrapR||0),T.push(w.magFilter),T.push(w.minFilter),T.push(w.anisotropy),T.push(w.internalFormat),T.push(w.format),T.push(w.type),T.push(w.generateMipmaps),T.push(w.premultiplyAlpha),T.push(w.flipY),T.push(w.unpackAlignment),T.push(w.colorSpace),T.join()}function ee(w,T){const N=n.get(w);if(w.isVideoTexture&&oe(w),w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){const ie=w.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(N,w,T);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+T)}function X(w,T){const N=n.get(w);if(w.version>0&&N.__version!==w.version){ke(N,w,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+T)}function W(w,T){const N=n.get(w);if(w.version>0&&N.__version!==w.version){ke(N,w,T);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+T)}function me(w,T){const N=n.get(w);if(w.version>0&&N.__version!==w.version){pt(N,w,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+T)}const ge={[$i]:i.REPEAT,[Jt]:i.CLAMP_TO_EDGE,[La]:i.MIRRORED_REPEAT},Te={[Rt]:i.NEAREST,[wc]:i.NEAREST_MIPMAP_NEAREST,[ya]:i.NEAREST_MIPMAP_LINEAR,[Et]:i.LINEAR,[kp]:i.LINEAR_MIPMAP_NEAREST,[Zi]:i.LINEAR_MIPMAP_LINEAR},Ae={[$x]:i.NEVER,[iv]:i.ALWAYS,[Zx]:i.LESS,[Qx]:i.LEQUAL,[Jx]:i.EQUAL,[nv]:i.GEQUAL,[ev]:i.GREATER,[tv]:i.NOTEQUAL};function Ce(w,T,N){if(N?(i.texParameteri(w,i.TEXTURE_WRAP_S,ge[T.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ge[T.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ge[T.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Te[T.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Te[T.minFilter])):(i.texParameteri(w,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(w,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(T.wrapS!==Jt||T.wrapT!==Jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,i.TEXTURE_MAG_FILTER,A(T.magFilter)),i.texParameteri(w,i.TEXTURE_MIN_FILTER,A(T.minFilter)),T.minFilter!==Rt&&T.minFilter!==Et&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Ae[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Rt||T.minFilter!==ya&&T.minFilter!==Zi||T.type===Sn&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===Bn&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(i.texParameterf(w,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function we(w,T){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,T.addEventListener("dispose",z));const ie=T.source;let re=m.get(ie);re===void 0&&(re={},m.set(ie,re));const se=le(T);if(se!==w.__cacheKey){re[se]===void 0&&(re[se]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),re[se].usedTimes++;const ye=re[w.__cacheKey];ye!==void 0&&(re[w.__cacheKey].usedTimes--,ye.usedTimes===0&&F(T)),w.__cacheKey=se,w.__webglTexture=re[se].texture}return N}function ke(w,T,N){let ie=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ie=i.TEXTURE_3D);const re=we(w,T),se=T.source;t.bindTexture(ie,w.__webglTexture,i.TEXTURE0+N);const ye=n.get(se);if(se.version!==ye.__version||re===!0){t.activeTexture(i.TEXTURE0+N),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const he=S(T)&&v(T.image)===!1;let $=x(T.image,he,!1,u);$=Ee(T,$);const L=v($)||a,ae=s.convert(T.format,T.colorSpace);let Me=s.convert(T.type),de=C(T.internalFormat,ae,Me,T.colorSpace,T.isVideoTexture);Ce(ie,T,L);let _e;const Le=T.mipmaps,qe=a&&T.isVideoTexture!==!0,U=ye.__version===void 0||re===!0,Se=y(T,$,L);if(T.isDepthTexture)de=i.DEPTH_COMPONENT,a?T.type===Sn?de=i.DEPTH_COMPONENT32F:T.type===Oi?de=i.DEPTH_COMPONENT24:T.type===Tr?de=i.DEPTH24_STENCIL8:de=i.DEPTH_COMPONENT16:T.type===Sn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Er&&de===i.DEPTH_COMPONENT&&T.type!==Tu&&T.type!==Oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Oi,Me=s.convert(T.type)),T.format===Ss&&de===i.DEPTH_COMPONENT&&(de=i.DEPTH_STENCIL,T.type!==Tr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Tr,Me=s.convert(T.type))),U&&(qe?t.texStorage2D(i.TEXTURE_2D,1,de,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,de,$.width,$.height,0,ae,Me,null));else if(T.isDataTexture)if(Le.length>0&&L){qe&&U&&t.texStorage2D(i.TEXTURE_2D,Se,de,Le[0].width,Le[0].height);for(let J=0,pe=Le.length;J<pe;J++)_e=Le[J],qe?t.texSubImage2D(i.TEXTURE_2D,J,0,0,_e.width,_e.height,ae,Me,_e.data):t.texImage2D(i.TEXTURE_2D,J,de,_e.width,_e.height,0,ae,Me,_e.data);T.generateMipmaps=!1}else qe?(U&&t.texStorage2D(i.TEXTURE_2D,Se,de,$.width,$.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,$.width,$.height,ae,Me,$.data)):t.texImage2D(i.TEXTURE_2D,0,de,$.width,$.height,0,ae,Me,$.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){qe&&U&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,de,Le[0].width,Le[0].height,$.depth);for(let J=0,pe=Le.length;J<pe;J++)_e=Le[J],T.format!==Mn?ae!==null?qe?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,_e.width,_e.height,$.depth,ae,_e.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,de,_e.width,_e.height,$.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,_e.width,_e.height,$.depth,ae,Me,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,de,_e.width,_e.height,$.depth,0,ae,Me,_e.data)}else{qe&&U&&t.texStorage2D(i.TEXTURE_2D,Se,de,Le[0].width,Le[0].height);for(let J=0,pe=Le.length;J<pe;J++)_e=Le[J],T.format!==Mn?ae!==null?qe?t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,_e.width,_e.height,ae,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,J,de,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(i.TEXTURE_2D,J,0,0,_e.width,_e.height,ae,Me,_e.data):t.texImage2D(i.TEXTURE_2D,J,de,_e.width,_e.height,0,ae,Me,_e.data)}else if(T.isDataArrayTexture)qe?(U&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,de,$.width,$.height,$.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ae,Me,$.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,de,$.width,$.height,$.depth,0,ae,Me,$.data);else if(T.isData3DTexture)qe?(U&&t.texStorage3D(i.TEXTURE_3D,Se,de,$.width,$.height,$.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ae,Me,$.data)):t.texImage3D(i.TEXTURE_3D,0,de,$.width,$.height,$.depth,0,ae,Me,$.data);else if(T.isFramebufferTexture){if(U)if(qe)t.texStorage2D(i.TEXTURE_2D,Se,de,$.width,$.height);else{let J=$.width,pe=$.height;for(let xe=0;xe<Se;xe++)t.texImage2D(i.TEXTURE_2D,xe,de,J,pe,0,ae,Me,null),J>>=1,pe>>=1}}else if(Le.length>0&&L){qe&&U&&t.texStorage2D(i.TEXTURE_2D,Se,de,Le[0].width,Le[0].height);for(let J=0,pe=Le.length;J<pe;J++)_e=Le[J],qe?t.texSubImage2D(i.TEXTURE_2D,J,0,0,ae,Me,_e):t.texImage2D(i.TEXTURE_2D,J,de,ae,Me,_e);T.generateMipmaps=!1}else qe?(U&&t.texStorage2D(i.TEXTURE_2D,Se,de,$.width,$.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,Me,$)):t.texImage2D(i.TEXTURE_2D,0,de,ae,Me,$);R(T,L)&&b(ie),ye.__version=se.version,T.onUpdate&&T.onUpdate(T)}w.__version=T.version}function pt(w,T,N){if(T.image.length!==6)return;const ie=we(w,T),re=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+N);const se=n.get(re);if(re.version!==se.__version||ie===!0){t.activeTexture(i.TEXTURE0+N),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const ye=T.isCompressedTexture||T.image[0].isCompressedTexture,he=T.image[0]&&T.image[0].isDataTexture,$=[];for(let J=0;J<6;J++)!ye&&!he?$[J]=x(T.image[J],!1,!0,c):$[J]=he?T.image[J].image:T.image[J],$[J]=Ee(T,$[J]);const L=$[0],ae=v(L)||a,Me=s.convert(T.format,T.colorSpace),de=s.convert(T.type),_e=C(T.internalFormat,Me,de,T.colorSpace),Le=a&&T.isVideoTexture!==!0,qe=se.__version===void 0||ie===!0;let U=y(T,L,ae);Ce(i.TEXTURE_CUBE_MAP,T,ae);let Se;if(ye){Le&&qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,U,_e,L.width,L.height);for(let J=0;J<6;J++){Se=$[J].mipmaps;for(let pe=0;pe<Se.length;pe++){const xe=Se[pe];T.format!==Mn?Me!==null?Le?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,0,0,xe.width,xe.height,Me,xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,_e,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,0,0,xe.width,xe.height,Me,de,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,_e,xe.width,xe.height,0,Me,de,xe.data)}}}else{Se=T.mipmaps,Le&&qe&&(Se.length>0&&U++,t.texStorage2D(i.TEXTURE_CUBE_MAP,U,_e,$[0].width,$[0].height));for(let J=0;J<6;J++)if(he){Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,$[J].width,$[J].height,Me,de,$[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,_e,$[J].width,$[J].height,0,Me,de,$[J].data);for(let pe=0;pe<Se.length;pe++){const Ve=Se[pe].image[J].image;Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,0,0,Ve.width,Ve.height,Me,de,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,_e,Ve.width,Ve.height,0,Me,de,Ve.data)}}else{Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Me,de,$[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,_e,Me,de,$[J]);for(let pe=0;pe<Se.length;pe++){const xe=Se[pe];Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,0,0,Me,de,xe.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,_e,Me,de,xe.image[J])}}}R(T,ae)&&b(i.TEXTURE_CUBE_MAP),se.__version=re.version,T.onUpdate&&T.onUpdate(T)}w.__version=T.version}function Oe(w,T,N,ie,re,se){const ye=s.convert(N.format,N.colorSpace),he=s.convert(N.type),$=C(N.internalFormat,ye,he,N.colorSpace);if(!n.get(T).__hasExternalTextures){const ae=Math.max(1,T.width>>se),Me=Math.max(1,T.height>>se);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,se,$,ae,Me,T.depth,0,ye,he,null):t.texImage2D(re,se,$,ae,Me,0,ye,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ce(T)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,re,n.get(N).__webglTexture,0,Q(T)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,re,n.get(N).__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function E(w,T,N){if(i.bindRenderbuffer(i.RENDERBUFFER,w),T.depthBuffer&&!T.stencilBuffer){let ie=i.DEPTH_COMPONENT16;if(N||ce(T)){const re=T.depthTexture;re&&re.isDepthTexture&&(re.type===Sn?ie=i.DEPTH_COMPONENT32F:re.type===Oi&&(ie=i.DEPTH_COMPONENT24));const se=Q(T);ce(T)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,ie,T.width,T.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,se,ie,T.width,T.height)}else i.renderbufferStorage(i.RENDERBUFFER,ie,T.width,T.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,w)}else if(T.depthBuffer&&T.stencilBuffer){const ie=Q(T);N&&ce(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,T.width,T.height):ce(T)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,w)}else{const ie=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let re=0;re<ie.length;re++){const se=ie[re],ye=s.convert(se.format,se.colorSpace),he=s.convert(se.type),$=C(se.internalFormat,ye,he,se.colorSpace),L=Q(T);N&&ce(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,L,$,T.width,T.height):ce(T)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L,$,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,$,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function D(w,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ee(T.depthTexture,0);const ie=n.get(T.depthTexture).__webglTexture,re=Q(T);if(T.depthTexture.format===Er)ce(T)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(T.depthTexture.format===Ss)ce(T)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function k(w){const T=n.get(w),N=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!T.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");D(T.__webglFramebuffer,w)}else if(N){T.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ie]),T.__webglDepthbuffer[ie]=i.createRenderbuffer(),E(T.__webglDepthbuffer[ie],w,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=i.createRenderbuffer(),E(T.__webglDepthbuffer,w,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function K(w,T,N){const ie=n.get(w);T!==void 0&&Oe(ie.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&k(w)}function q(w){const T=w.texture,N=n.get(w),ie=n.get(T);w.addEventListener("dispose",Z),w.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=T.version,o.memory.textures++);const re=w.isWebGLCubeRenderTarget===!0,se=w.isWebGLMultipleRenderTargets===!0,ye=v(w)||a;if(re){N.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&T.mipmaps&&T.mipmaps.length>0){N.__webglFramebuffer[he]=[];for(let $=0;$<T.mipmaps.length;$++)N.__webglFramebuffer[he][$]=i.createFramebuffer()}else N.__webglFramebuffer[he]=i.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){N.__webglFramebuffer=[];for(let he=0;he<T.mipmaps.length;he++)N.__webglFramebuffer[he]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(se)if(r.drawBuffers){const he=w.texture;for(let $=0,L=he.length;$<L;$++){const ae=n.get(he[$]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&ce(w)===!1){const he=se?T:[T];N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let $=0;$<he.length;$++){const L=he[$];N.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[$]);const ae=s.convert(L.format,L.colorSpace),Me=s.convert(L.type),de=C(L.internalFormat,ae,Me,L.colorSpace,w.isXRRenderTarget===!0),_e=Q(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,de,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,N.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),E(N.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,T,ye);for(let he=0;he<6;he++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let $=0;$<T.mipmaps.length;$++)Oe(N.__webglFramebuffer[he][$],w,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,$);else Oe(N.__webglFramebuffer[he],w,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);R(T,ye)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){const he=w.texture;for(let $=0,L=he.length;$<L;$++){const ae=he[$],Me=n.get(ae);t.bindTexture(i.TEXTURE_2D,Me.__webglTexture),Ce(i.TEXTURE_2D,ae,ye),Oe(N.__webglFramebuffer,w,ae,i.COLOR_ATTACHMENT0+$,i.TEXTURE_2D,0),R(ae,ye)&&b(i.TEXTURE_2D)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?he=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,ie.__webglTexture),Ce(he,T,ye),a&&T.mipmaps&&T.mipmaps.length>0)for(let $=0;$<T.mipmaps.length;$++)Oe(N.__webglFramebuffer[$],w,T,i.COLOR_ATTACHMENT0,he,$);else Oe(N.__webglFramebuffer,w,T,i.COLOR_ATTACHMENT0,he,0);R(T,ye)&&b(he),t.unbindTexture()}w.depthBuffer&&k(w)}function fe(w){const T=v(w)||a,N=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ie=0,re=N.length;ie<re;ie++){const se=N[ie];if(R(se,T)){const ye=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,he=n.get(se).__webglTexture;t.bindTexture(ye,he),b(ye),t.unbindTexture()}}}function ue(w){if(a&&w.samples>0&&ce(w)===!1){const T=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],N=w.width,ie=w.height;let re=i.COLOR_BUFFER_BIT;const se=[],ye=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(w),$=w.isWebGLMultipleRenderTargets===!0;if($)for(let L=0;L<T.length;L++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let L=0;L<T.length;L++){se.push(i.COLOR_ATTACHMENT0+L),w.depthBuffer&&se.push(ye);const ae=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(ae===!1&&(w.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),$&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[L]),ae===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ye]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ye])),$){const Me=n.get(T[L]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Me,0)}i.blitFramebuffer(0,0,N,ie,0,0,N,ie,re,i.NEAREST),d&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let L=0;L<T.length;L++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.RENDERBUFFER,he.__webglColorRenderbuffer[L]);const ae=n.get(T[L]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.TEXTURE_2D,ae,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function Q(w){return Math.min(f,w.samples)}function ce(w){const T=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function oe(w){const T=o.render.frame;g.get(w)!==T&&(g.set(w,T),w.update())}function Ee(w,T){const N=w.colorSpace,ie=w.format,re=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Pc||N!==St&&N!==Ar&&(N===Ze||N===Ja?a===!1?e.has("EXT_sRGB")===!0&&ie===Mn?(w.format=Pc,w.minFilter=Et,w.generateMipmaps=!1):T=Jp.sRGBToLinear(T):(ie!==Mn||re!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),T}this.allocateTextureUnit=V,this.resetTextureUnits=H,this.setTexture2D=ee,this.setTexture2DArray=X,this.setTexture3D=W,this.setTextureCube=me,this.rebindTextures=K,this.setupRenderTarget=q,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=k,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=ce}const vE=0,Tt=1;function yE(i,e,t){const n=t.isWebGL2;function r(s,o=Ar){let a;const l=o===Ze||o===Ja?Tt:vE;if(s===ji)return i.UNSIGNED_BYTE;if(s===Hp)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Gp)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Nx)return i.BYTE;if(s===Ox)return i.SHORT;if(s===Tu)return i.UNSIGNED_SHORT;if(s===zp)return i.INT;if(s===Oi)return i.UNSIGNED_INT;if(s===Sn)return i.FLOAT;if(s===Bn)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Fx)return i.ALPHA;if(s===Mn)return i.RGBA;if(s===Bx)return i.LUMINANCE;if(s===kx)return i.LUMINANCE_ALPHA;if(s===Er)return i.DEPTH_COMPONENT;if(s===Ss)return i.DEPTH_STENCIL;if(s===Pc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===zx)return i.RED;if(s===Vp)return i.RED_INTEGER;if(s===Hx)return i.RG;if(s===Wp)return i.RG_INTEGER;if(s===Xp)return i.RGBA_INTEGER;if(s===vl||s===yl||s===Ml||s===Sl)if(l===Tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===vl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===yl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ml)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Sl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===vl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===yl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ml)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Sl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Vf||s===Wf||s===Xf||s===jf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Vf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Wf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Xf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===jf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Gx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===qf||s===Yf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===qf)return l===Tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Yf)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Kf||s===$f||s===Zf||s===Jf||s===Qf||s===eh||s===th||s===nh||s===ih||s===rh||s===sh||s===oh||s===ah||s===lh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Kf)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===$f)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Zf)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Jf)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Qf)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===eh)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===th)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===nh)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ih)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===rh)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===sh)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===oh)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ah)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===lh)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Tl||s===ch||s===uh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Tl)return l===Tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ch)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===uh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Vx||s===fh||s===hh||s===dh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Tl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===fh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===hh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===dh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Tr?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class ME extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bi extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const SE={type:"move"};class jl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(SE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class TE extends It{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:Er,u!==Er&&u!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Er&&(n=Oi),n===void 0&&u===Ss&&(n=Tr),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Rt,this.minFilter=l!==void 0?l:Rt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class EE extends Ir{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=t.getContextAttributes();let m=null,p=null;const M=[],x=[],v=new Lt;v.layers.enable(1),v.viewport=new Je;const S=new Lt;S.layers.enable(2),S.viewport=new Je;const R=[v,S],b=new ME;b.layers.enable(1),b.layers.enable(2);let C=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let W=M[X];return W===void 0&&(W=new jl,M[X]=W),W.getTargetRaySpace()},this.getControllerGrip=function(X){let W=M[X];return W===void 0&&(W=new jl,M[X]=W),W.getGripSpace()},this.getHand=function(X){let W=M[X];return W===void 0&&(W=new jl,M[X]=W),W.getHandSpace()};function A(X){const W=x.indexOf(X.inputSource);if(W===-1)return;const me=M[W];me!==void 0&&(me.update(X.inputSource,X.frame,c||o),me.dispatchEvent({type:X.type,data:X.inputSource}))}function z(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",Z);for(let X=0;X<M.length;X++){const W=x[X];W!==null&&(x[X]=null,M[X].disconnect(W))}C=null,y=null,e.setRenderTarget(m),d=null,h=null,f=null,r=null,p=null,ee.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",z),r.addEventListener("inputsourceschange",Z),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,W),r.updateRenderState({baseLayer:d}),p=new Si(d.framebufferWidth,d.framebufferHeight,{format:Mn,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let W=null,me=null,ge=null;_.depth&&(ge=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=_.stencil?Ss:Er,me=_.stencil?Tr:Oi);const Te={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Te),r.updateRenderState({layers:[h]}),p=new Si(h.textureWidth,h.textureHeight,{format:Mn,type:ji,depthTexture:new TE(h.textureWidth,h.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ae=e.properties.get(p);Ae.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ee.setContext(r),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Z(X){for(let W=0;W<X.removed.length;W++){const me=X.removed[W],ge=x.indexOf(me);ge>=0&&(x[ge]=null,M[ge].disconnect(me))}for(let W=0;W<X.added.length;W++){const me=X.added[W];let ge=x.indexOf(me);if(ge===-1){for(let Ae=0;Ae<M.length;Ae++)if(Ae>=x.length){x.push(me),ge=Ae;break}else if(x[Ae]===null){x[Ae]=me,ge=Ae;break}if(ge===-1)break}const Te=M[ge];Te&&Te.connect(me)}}const O=new I,F=new I;function B(X,W,me){O.setFromMatrixPosition(W.matrixWorld),F.setFromMatrixPosition(me.matrixWorld);const ge=O.distanceTo(F),Te=W.projectionMatrix.elements,Ae=me.projectionMatrix.elements,Ce=Te[14]/(Te[10]-1),we=Te[14]/(Te[10]+1),ke=(Te[9]+1)/Te[5],pt=(Te[9]-1)/Te[5],Oe=(Te[8]-1)/Te[0],E=(Ae[8]+1)/Ae[0],D=Ce*Oe,k=Ce*E,K=ge/(-Oe+E),q=K*-Oe;W.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(q),X.translateZ(K),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const fe=Ce+K,ue=we+K,Q=D-q,ce=k+(ge-q),oe=ke*we/ue*fe,Ee=pt*we/ue*fe;X.projectionMatrix.makePerspective(Q,ce,oe,Ee,fe,ue),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function G(X,W){W===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(W.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;b.near=S.near=v.near=X.near,b.far=S.far=v.far=X.far,(C!==b.near||y!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),C=b.near,y=b.far);const W=X.parent,me=b.cameras;G(b,W);for(let ge=0;ge<me.length;ge++)G(me[ge],W);me.length===2?B(b,v,S):b.projectionMatrix.copy(v.projectionMatrix),H(X,b,W)};function H(X,W,me){me===null?X.matrix.copy(W.matrixWorld):(X.matrix.copy(me.matrixWorld),X.matrix.invert(),X.matrix.multiply(W.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(W.projectionMatrix),X.projectionMatrixInverse.copy(W.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Es*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)};let V=null;function le(X,W){if(u=W.getViewerPose(c||o),g=W,u!==null){const me=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let ge=!1;me.length!==b.cameras.length&&(b.cameras.length=0,ge=!0);for(let Te=0;Te<me.length;Te++){const Ae=me[Te];let Ce=null;if(d!==null)Ce=d.getViewport(Ae);else{const ke=f.getViewSubImage(h,Ae);Ce=ke.viewport,Te===0&&(e.setRenderTargetTextures(p,ke.colorTexture,h.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(p))}let we=R[Te];we===void 0&&(we=new Lt,we.layers.enable(Te),we.viewport=new Je,R[Te]=we),we.matrix.fromArray(Ae.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Ae.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),Te===0&&(b.matrix.copy(we.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ge===!0&&b.cameras.push(we)}}for(let me=0;me<M.length;me++){const ge=x[me],Te=M[me];ge!==null&&Te!==void 0&&Te.update(ge,W,c||o)}V&&V(X,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),g=null}const ee=new lm;ee.setAnimationLoop(le),this.setAnimationLoop=function(X){V=X},this.dispose=function(){}}}function bE(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,sm(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function AE(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,x){const v=x.program;n.uniformBlockBinding(M,v)}function c(M,x){let v=r[M.id];v===void 0&&(g(M),v=u(M),r[M.id]=v,M.addEventListener("dispose",m));const S=x.program;n.updateUBOMapping(M,S);const R=e.render.frame;s[M.id]!==R&&(h(M),s[M.id]=R)}function u(M){const x=f();M.__bindingPointIndex=x;const v=i.createBuffer(),S=M.__size,R=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,S,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const x=r[M.id],v=M.uniforms,S=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let R=0,b=v.length;R<b;R++){const C=v[R];if(d(C,R,S)===!0){const y=C.__offset,A=Array.isArray(C.value)?C.value:[C.value];let z=0;for(let Z=0;Z<A.length;Z++){const O=A[Z],F=_(O);typeof O=="number"?(C.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,y+z,C.__data)):O.isMatrix3?(C.__data[0]=O.elements[0],C.__data[1]=O.elements[1],C.__data[2]=O.elements[2],C.__data[3]=O.elements[0],C.__data[4]=O.elements[3],C.__data[5]=O.elements[4],C.__data[6]=O.elements[5],C.__data[7]=O.elements[0],C.__data[8]=O.elements[6],C.__data[9]=O.elements[7],C.__data[10]=O.elements[8],C.__data[11]=O.elements[0]):(O.toArray(C.__data,z),z+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,y,C.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,x,v){const S=M.value;if(v[x]===void 0){if(typeof S=="number")v[x]=S;else{const R=Array.isArray(S)?S:[S],b=[];for(let C=0;C<R.length;C++)b.push(R[C].clone());v[x]=b}return!0}else if(typeof S=="number"){if(v[x]!==S)return v[x]=S,!0}else{const R=Array.isArray(v[x])?v[x]:[v[x]],b=Array.isArray(S)?S:[S];for(let C=0;C<R.length;C++){const y=R[C];if(y.equals(b[C])===!1)return y.copy(b[C]),!0}}return!1}function g(M){const x=M.uniforms;let v=0;const S=16;let R=0;for(let b=0,C=x.length;b<C;b++){const y=x[b],A={boundary:0,storage:0},z=Array.isArray(y.value)?y.value:[y.value];for(let Z=0,O=z.length;Z<O;Z++){const F=z[Z],B=_(F);A.boundary+=B.boundary,A.storage+=B.storage}if(y.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=v,b>0){R=v%S;const Z=S-R;R!==0&&Z-A.boundary<0&&(v+=S-R,y.__offset=v)}v+=A.storage}return R=v%S,R>0&&(v+=S-R),M.__size=v,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const M in r)i.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class dm{constructor(e={}){const{canvas:t=gv(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ze,this._useLegacyLights=!1,this.toneMapping=Xi,this.toneMappingExposure=1;const x=this;let v=!1,S=0,R=0,b=null,C=-1,y=null;const A=new Je,z=new Je;let Z=null;const O=new De(0);let F=0,B=t.width,G=t.height,H=1,V=null,le=null;const ee=new Je(0,0,B,G),X=new Je(0,0,B,G);let W=!1;const me=new bu;let ge=!1,Te=!1,Ae=null;const Ce=new Fe,we=new Pe,ke=new I,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return b===null?H:1}let E=n;function D(P,j){for(let te=0;te<P.length;te++){const Y=P[te],ne=t.getContext(Y,j);if(ne!==null)return ne}return null}try{const P={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Su}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",pe,!1),E===null){const j=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&j.shift(),E=D(j,P),E===null)throw D(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&E instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),E.getShaderPrecisionFormat===void 0&&(E.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let k,K,q,fe,ue,Q,ce,oe,Ee,w,T,N,ie,re,se,ye,he,$,L,ae,Me,de,_e,Le;function qe(){k=new OS(E),K=new PS(E,k,e),k.init(K),de=new yE(E,k,K),q=new gE(E,k,K),fe=new kS(E),ue=new iE,Q=new xE(E,k,q,ue,K,de,fe),ce=new DS(x),oe=new NS(x),Ee=new Kv(E,K),_e=new RS(E,k,Ee,K),w=new FS(E,Ee,fe,_e),T=new VS(E,w,Ee,fe),L=new GS(E,K,Q),ye=new LS(ue),N=new nE(x,ce,oe,k,K,_e,ye),ie=new bE(x,ue),re=new sE,se=new fE(k,K),$=new wS(x,ce,oe,q,T,h,l),he=new _E(x,T,K),Le=new AE(E,fe,K,q),ae=new CS(E,k,fe,K),Me=new BS(E,k,fe,K),fe.programs=N.programs,x.capabilities=K,x.extensions=k,x.properties=ue,x.renderLists=re,x.shadowMap=he,x.state=q,x.info=fe}qe();const U=new EE(x,E);this.xr=U,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const P=k.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=k.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(P){P!==void 0&&(H=P,this.setSize(B,G,!1))},this.getSize=function(P){return P.set(B,G)},this.setSize=function(P,j,te=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=P,G=j,t.width=Math.floor(P*H),t.height=Math.floor(j*H),te===!0&&(t.style.width=P+"px",t.style.height=j+"px"),this.setViewport(0,0,P,j)},this.getDrawingBufferSize=function(P){return P.set(B*H,G*H).floor()},this.setDrawingBufferSize=function(P,j,te){B=P,G=j,H=te,t.width=Math.floor(P*te),t.height=Math.floor(j*te),this.setViewport(0,0,P,j)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy(ee)},this.setViewport=function(P,j,te,Y){P.isVector4?ee.set(P.x,P.y,P.z,P.w):ee.set(P,j,te,Y),q.viewport(A.copy(ee).multiplyScalar(H).floor())},this.getScissor=function(P){return P.copy(X)},this.setScissor=function(P,j,te,Y){P.isVector4?X.set(P.x,P.y,P.z,P.w):X.set(P,j,te,Y),q.scissor(z.copy(X).multiplyScalar(H).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(P){q.setScissorTest(W=P)},this.setOpaqueSort=function(P){V=P},this.setTransparentSort=function(P){le=P},this.getClearColor=function(P){return P.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(P=!0,j=!0,te=!0){let Y=0;if(P){let ne=!1;if(b!==null){const be=b.texture.format;ne=be===Xp||be===Wp||be===Vp}if(ne){const be=b.texture.type,Re=be===ji||be===Oi||be===Tu||be===Tr||be===Hp||be===Gp,Ue=$.getClearColor(),Ne=$.getClearAlpha(),We=Ue.r,Ie=Ue.g,ze=Ue.b;Re?(d[0]=We,d[1]=Ie,d[2]=ze,d[3]=Ne,E.clearBufferuiv(E.COLOR,0,d)):(g[0]=We,g[1]=Ie,g[2]=ze,g[3]=Ne,E.clearBufferiv(E.COLOR,0,g))}else Y|=E.COLOR_BUFFER_BIT}j&&(Y|=E.DEPTH_BUFFER_BIT),te&&(Y|=E.STENCIL_BUFFER_BIT),E.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),re.dispose(),se.dispose(),ue.dispose(),ce.dispose(),oe.dispose(),T.dispose(),_e.dispose(),Le.dispose(),N.dispose(),U.dispose(),U.removeEventListener("sessionstart",ot),U.removeEventListener("sessionend",Wn),Ae&&(Ae.dispose(),Ae=null),Xt.stop()};function Se(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const P=fe.autoReset,j=he.enabled,te=he.autoUpdate,Y=he.needsUpdate,ne=he.type;qe(),fe.autoReset=P,he.enabled=j,he.autoUpdate=te,he.needsUpdate=Y,he.type=ne}function pe(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function xe(P){const j=P.target;j.removeEventListener("dispose",xe),Ve(j)}function Ve(P){Qe(P),ue.remove(P)}function Qe(P){const j=ue.get(P).programs;j!==void 0&&(j.forEach(function(te){N.releaseProgram(te)}),P.isShaderMaterial&&N.releaseShaderCache(P))}this.renderBufferDirect=function(P,j,te,Y,ne,be){j===null&&(j=pt);const Re=ne.isMesh&&ne.matrixWorld.determinant()<0,Ue=b_(P,j,te,Y,ne);q.setMaterial(Y,Re);let Ne=te.index,We=1;if(Y.wireframe===!0){if(Ne=w.getWireframeAttribute(te),Ne===void 0)return;We=2}const Ie=te.drawRange,ze=te.attributes.position;let ft=Ie.start*We,mt=(Ie.start+Ie.count)*We;be!==null&&(ft=Math.max(ft,be.start*We),mt=Math.min(mt,(be.start+be.count)*We)),Ne!==null?(ft=Math.max(ft,0),mt=Math.min(mt,Ne.count)):ze!=null&&(ft=Math.max(ft,0),mt=Math.min(mt,ze.count));const _n=mt-ft;if(_n<0||_n===1/0)return;_e.setup(ne,Y,Ue,te,Ne);let si,gt=ae;if(Ne!==null&&(si=Ee.get(Ne),gt=Me,gt.setIndex(si)),ne.isMesh)Y.wireframe===!0?(q.setLineWidth(Y.wireframeLinewidth*Oe()),gt.setMode(E.LINES)):gt.setMode(E.TRIANGLES);else if(ne.isLine){let je=Y.linewidth;je===void 0&&(je=1),q.setLineWidth(je*Oe()),ne.isLineSegments?gt.setMode(E.LINES):ne.isLineLoop?gt.setMode(E.LINE_LOOP):gt.setMode(E.LINE_STRIP)}else ne.isPoints?gt.setMode(E.POINTS):ne.isSprite&&gt.setMode(E.TRIANGLES);if(ne.isInstancedMesh)gt.renderInstances(ft,_n,ne.count);else if(te.isInstancedBufferGeometry){const je=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,al=Math.min(te.instanceCount,je);gt.renderInstances(ft,_n,al)}else gt.render(ft,_n)},this.compile=function(P,j){function te(Y,ne,be){Y.transparent===!0&&Y.side===On&&Y.forceSinglePass===!1?(Y.side=en,Y.needsUpdate=!0,No(Y,ne,be),Y.side=Mi,Y.needsUpdate=!0,No(Y,ne,be),Y.side=On):No(Y,ne,be)}m=se.get(P),m.init(),M.push(m),P.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights(x._useLegacyLights),P.traverse(function(Y){const ne=Y.material;if(ne)if(Array.isArray(ne))for(let be=0;be<ne.length;be++){const Re=ne[be];te(Re,P,Y)}else te(ne,P,Y)}),M.pop(),m=null};let st=null;function an(P){st&&st(P)}function ot(){Xt.stop()}function Wn(){Xt.start()}const Xt=new lm;Xt.setAnimationLoop(an),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(P){st=P,U.setAnimationLoop(P),P===null?Xt.stop():Xt.start()},U.addEventListener("sessionstart",ot),U.addEventListener("sessionend",Wn),this.render=function(P,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(U.cameraAutoUpdate===!0&&U.updateCamera(j),j=U.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,j,b),m=se.get(P,M.length),m.init(),M.push(m),Ce.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),me.setFromProjectionMatrix(Ce),Te=this.localClippingEnabled,ge=ye.init(this.clippingPlanes,Te),_=re.get(P,p.length),_.init(),p.push(_),tf(P,j,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(V,le),this.info.render.frame++,ge===!0&&ye.beginShadows();const te=m.state.shadowsArray;if(he.render(te,P,j),ge===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(_,P),m.setupLights(x._useLegacyLights),j.isArrayCamera){const Y=j.cameras;for(let ne=0,be=Y.length;ne<be;ne++){const Re=Y[ne];nf(_,P,Re,Re.viewport)}}else nf(_,P,j);b!==null&&(Q.updateMultisampleRenderTarget(b),Q.updateRenderTargetMipmap(b)),P.isScene===!0&&P.onAfterRender(x,P,j),_e.resetDefaultState(),C=-1,y=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function tf(P,j,te,Y){if(P.visible===!1)return;if(P.layers.test(j.layers)){if(P.isGroup)te=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(j);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||me.intersectsSprite(P)){Y&&ke.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ce);const Re=T.update(P),Ue=P.material;Ue.visible&&_.push(P,Re,Ue,te,ke.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||me.intersectsObject(P))){const Re=T.update(P),Ue=P.material;if(Y&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ke.copy(P.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),ke.copy(Re.boundingSphere.center)),ke.applyMatrix4(P.matrixWorld).applyMatrix4(Ce)),Array.isArray(Ue)){const Ne=Re.groups;for(let We=0,Ie=Ne.length;We<Ie;We++){const ze=Ne[We],ft=Ue[ze.materialIndex];ft&&ft.visible&&_.push(P,Re,ft,te,ke.z,ze)}}else Ue.visible&&_.push(P,Re,Ue,te,ke.z,null)}}const be=P.children;for(let Re=0,Ue=be.length;Re<Ue;Re++)tf(be[Re],j,te,Y)}function nf(P,j,te,Y){const ne=P.opaque,be=P.transmissive,Re=P.transparent;m.setupLightsView(te),ge===!0&&ye.setGlobalState(x.clippingPlanes,te),be.length>0&&E_(ne,be,j,te),Y&&q.viewport(A.copy(Y)),ne.length>0&&Uo(ne,j,te),be.length>0&&Uo(be,j,te),Re.length>0&&Uo(Re,j,te),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function E_(P,j,te,Y){const ne=K.isWebGL2;Ae===null&&(Ae=new Si(1,1,{generateMipmaps:!0,type:k.has("EXT_color_buffer_half_float")?Bn:ji,minFilter:Zi,samples:ne?4:0})),x.getDrawingBufferSize(we),ne?Ae.setSize(we.x,we.y):Ae.setSize(Ia(we.x),Ia(we.y));const be=x.getRenderTarget();x.setRenderTarget(Ae),x.getClearColor(O),F=x.getClearAlpha(),F<1&&x.setClearColor(16777215,.5),x.clear();const Re=x.toneMapping;x.toneMapping=Xi,Uo(P,te,Y),Q.updateMultisampleRenderTarget(Ae),Q.updateRenderTargetMipmap(Ae);let Ue=!1;for(let Ne=0,We=j.length;Ne<We;Ne++){const Ie=j[Ne],ze=Ie.object,ft=Ie.geometry,mt=Ie.material,_n=Ie.group;if(mt.side===On&&ze.layers.test(Y.layers)){const si=mt.side;mt.side=en,mt.needsUpdate=!0,rf(ze,te,Y,ft,mt,_n),mt.side=si,mt.needsUpdate=!0,Ue=!0}}Ue===!0&&(Q.updateMultisampleRenderTarget(Ae),Q.updateRenderTargetMipmap(Ae)),x.setRenderTarget(be),x.setClearColor(O,F),x.toneMapping=Re}function Uo(P,j,te){const Y=j.isScene===!0?j.overrideMaterial:null;for(let ne=0,be=P.length;ne<be;ne++){const Re=P[ne],Ue=Re.object,Ne=Re.geometry,We=Y===null?Re.material:Y,Ie=Re.group;Ue.layers.test(te.layers)&&rf(Ue,j,te,Ne,We,Ie)}}function rf(P,j,te,Y,ne,be){P.onBeforeRender(x,j,te,Y,ne,be),P.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ne.onBeforeRender(x,j,te,Y,P,be),ne.transparent===!0&&ne.side===On&&ne.forceSinglePass===!1?(ne.side=en,ne.needsUpdate=!0,x.renderBufferDirect(te,j,Y,ne,P,be),ne.side=Mi,ne.needsUpdate=!0,x.renderBufferDirect(te,j,Y,ne,P,be),ne.side=On):x.renderBufferDirect(te,j,Y,ne,P,be),P.onAfterRender(x,j,te,Y,ne,be)}function No(P,j,te){j.isScene!==!0&&(j=pt);const Y=ue.get(P),ne=m.state.lights,be=m.state.shadowsArray,Re=ne.state.version,Ue=N.getParameters(P,ne.state,be,j,te),Ne=N.getProgramCacheKey(Ue);let We=Y.programs;Y.environment=P.isMeshStandardMaterial?j.environment:null,Y.fog=j.fog,Y.envMap=(P.isMeshStandardMaterial?oe:ce).get(P.envMap||Y.environment),We===void 0&&(P.addEventListener("dispose",xe),We=new Map,Y.programs=We);let Ie=We.get(Ne);if(Ie!==void 0){if(Y.currentProgram===Ie&&Y.lightsStateVersion===Re)return sf(P,Ue),Ie}else Ue.uniforms=N.getUniforms(P),P.onBuild(te,Ue,x),P.onBeforeCompile(Ue,x),Ie=N.acquireProgram(Ue,Ne),We.set(Ne,Ie),Y.uniforms=Ue.uniforms;const ze=Y.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ze.clippingPlanes=ye.uniform),sf(P,Ue),Y.needsLights=w_(P),Y.lightsStateVersion=Re,Y.needsLights&&(ze.ambientLightColor.value=ne.state.ambient,ze.lightProbe.value=ne.state.probe,ze.directionalLights.value=ne.state.directional,ze.directionalLightShadows.value=ne.state.directionalShadow,ze.spotLights.value=ne.state.spot,ze.spotLightShadows.value=ne.state.spotShadow,ze.rectAreaLights.value=ne.state.rectArea,ze.ltc_1.value=ne.state.rectAreaLTC1,ze.ltc_2.value=ne.state.rectAreaLTC2,ze.pointLights.value=ne.state.point,ze.pointLightShadows.value=ne.state.pointShadow,ze.hemisphereLights.value=ne.state.hemi,ze.directionalShadowMap.value=ne.state.directionalShadowMap,ze.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,ze.spotShadowMap.value=ne.state.spotShadowMap,ze.spotLightMatrix.value=ne.state.spotLightMatrix,ze.spotLightMap.value=ne.state.spotLightMap,ze.pointShadowMap.value=ne.state.pointShadowMap,ze.pointShadowMatrix.value=ne.state.pointShadowMatrix);const ft=Ie.getUniforms(),mt=Ma.seqWithValue(ft.seq,ze);return Y.currentProgram=Ie,Y.uniformsList=mt,Ie}function sf(P,j){const te=ue.get(P);te.outputColorSpace=j.outputColorSpace,te.instancing=j.instancing,te.instancingColor=j.instancingColor,te.skinning=j.skinning,te.morphTargets=j.morphTargets,te.morphNormals=j.morphNormals,te.morphColors=j.morphColors,te.morphTargetsCount=j.morphTargetsCount,te.numClippingPlanes=j.numClippingPlanes,te.numIntersection=j.numClipIntersection,te.vertexAlphas=j.vertexAlphas,te.vertexTangents=j.vertexTangents,te.toneMapping=j.toneMapping}function b_(P,j,te,Y,ne){j.isScene!==!0&&(j=pt),Q.resetTextureUnits();const be=j.fog,Re=Y.isMeshStandardMaterial?j.environment:null,Ue=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:St,Ne=(Y.isMeshStandardMaterial?oe:ce).get(Y.envMap||Re),We=Y.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Ie=!!te.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),ze=!!te.morphAttributes.position,ft=!!te.morphAttributes.normal,mt=!!te.morphAttributes.color;let _n=Xi;Y.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(_n=x.toneMapping);const si=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,gt=si!==void 0?si.length:0,je=ue.get(Y),al=m.state.lights;if(ge===!0&&(Te===!0||P!==y)){const ln=P===y&&Y.id===C;ye.setState(Y,P,ln)}let xt=!1;Y.version===je.__version?(je.needsLights&&je.lightsStateVersion!==al.state.version||je.outputColorSpace!==Ue||ne.isInstancedMesh&&je.instancing===!1||!ne.isInstancedMesh&&je.instancing===!0||ne.isSkinnedMesh&&je.skinning===!1||!ne.isSkinnedMesh&&je.skinning===!0||ne.isInstancedMesh&&je.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&je.instancingColor===!1&&ne.instanceColor!==null||je.envMap!==Ne||Y.fog===!0&&je.fog!==be||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==ye.numPlanes||je.numIntersection!==ye.numIntersection)||je.vertexAlphas!==We||je.vertexTangents!==Ie||je.morphTargets!==ze||je.morphNormals!==ft||je.morphColors!==mt||je.toneMapping!==_n||K.isWebGL2===!0&&je.morphTargetsCount!==gt)&&(xt=!0):(xt=!0,je.__version=Y.version);let ir=je.currentProgram;xt===!0&&(ir=No(Y,j,ne));let of=!1,zs=!1,ll=!1;const jt=ir.getUniforms(),rr=je.uniforms;if(q.useProgram(ir.program)&&(of=!0,zs=!0,ll=!0),Y.id!==C&&(C=Y.id,zs=!0),of||y!==P){jt.setValue(E,"projectionMatrix",P.projectionMatrix),jt.setValue(E,"viewMatrix",P.matrixWorldInverse);const ln=jt.map.cameraPosition;ln!==void 0&&ln.setValue(E,ke.setFromMatrixPosition(P.matrixWorld)),K.logarithmicDepthBuffer&&jt.setValue(E,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&jt.setValue(E,"isOrthographic",P.isOrthographicCamera===!0),y!==P&&(y=P,zs=!0,ll=!0)}if(ne.isSkinnedMesh){jt.setOptional(E,ne,"bindMatrix"),jt.setOptional(E,ne,"bindMatrixInverse");const ln=ne.skeleton;ln&&(K.floatVertexTextures?(ln.boneTexture===null&&ln.computeBoneTexture(),jt.setValue(E,"boneTexture",ln.boneTexture,Q),jt.setValue(E,"boneTextureSize",ln.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const cl=te.morphAttributes;if((cl.position!==void 0||cl.normal!==void 0||cl.color!==void 0&&K.isWebGL2===!0)&&L.update(ne,te,ir),(zs||je.receiveShadow!==ne.receiveShadow)&&(je.receiveShadow=ne.receiveShadow,jt.setValue(E,"receiveShadow",ne.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(rr.envMap.value=Ne,rr.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),zs&&(jt.setValue(E,"toneMappingExposure",x.toneMappingExposure),je.needsLights&&A_(rr,ll),be&&Y.fog===!0&&ie.refreshFogUniforms(rr,be),ie.refreshMaterialUniforms(rr,Y,H,G,Ae),Ma.upload(E,je.uniformsList,rr,Q)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ma.upload(E,je.uniformsList,rr,Q),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&jt.setValue(E,"center",ne.center),jt.setValue(E,"modelViewMatrix",ne.modelViewMatrix),jt.setValue(E,"normalMatrix",ne.normalMatrix),jt.setValue(E,"modelMatrix",ne.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const ln=Y.uniformsGroups;for(let ul=0,R_=ln.length;ul<R_;ul++)if(K.isWebGL2){const af=ln[ul];Le.update(af,ir),Le.bind(af,ir)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ir}function A_(P,j){P.ambientLightColor.needsUpdate=j,P.lightProbe.needsUpdate=j,P.directionalLights.needsUpdate=j,P.directionalLightShadows.needsUpdate=j,P.pointLights.needsUpdate=j,P.pointLightShadows.needsUpdate=j,P.spotLights.needsUpdate=j,P.spotLightShadows.needsUpdate=j,P.rectAreaLights.needsUpdate=j,P.hemisphereLights.needsUpdate=j}function w_(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(P,j,te){ue.get(P.texture).__webglTexture=j,ue.get(P.depthTexture).__webglTexture=te;const Y=ue.get(P);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=te===void 0,Y.__autoAllocateDepthBuffer||k.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,j){const te=ue.get(P);te.__webglFramebuffer=j,te.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(P,j=0,te=0){b=P,S=j,R=te;let Y=!0,ne=null,be=!1,Re=!1;if(P){const Ne=ue.get(P);Ne.__useDefaultFramebuffer!==void 0?(q.bindFramebuffer(E.FRAMEBUFFER,null),Y=!1):Ne.__webglFramebuffer===void 0?Q.setupRenderTarget(P):Ne.__hasExternalTextures&&Q.rebindTextures(P,ue.get(P.texture).__webglTexture,ue.get(P.depthTexture).__webglTexture);const We=P.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Re=!0);const Ie=ue.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ie[j])?ne=Ie[j][te]:ne=Ie[j],be=!0):K.isWebGL2&&P.samples>0&&Q.useMultisampledRTT(P)===!1?ne=ue.get(P).__webglMultisampledFramebuffer:Array.isArray(Ie)?ne=Ie[te]:ne=Ie,A.copy(P.viewport),z.copy(P.scissor),Z=P.scissorTest}else A.copy(ee).multiplyScalar(H).floor(),z.copy(X).multiplyScalar(H).floor(),Z=W;if(q.bindFramebuffer(E.FRAMEBUFFER,ne)&&K.drawBuffers&&Y&&q.drawBuffers(P,ne),q.viewport(A),q.scissor(z),q.setScissorTest(Z),be){const Ne=ue.get(P.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ne.__webglTexture,te)}else if(Re){const Ne=ue.get(P.texture),We=j||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ne.__webglTexture,te||0,We)}C=-1},this.readRenderTargetPixels=function(P,j,te,Y,ne,be,Re){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=ue.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Re!==void 0&&(Ue=Ue[Re]),Ue){q.bindFramebuffer(E.FRAMEBUFFER,Ue);try{const Ne=P.texture,We=Ne.format,Ie=Ne.type;if(We!==Mn&&de.convert(We)!==E.getParameter(E.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Ie===Bn&&(k.has("EXT_color_buffer_half_float")||K.isWebGL2&&k.has("EXT_color_buffer_float"));if(Ie!==ji&&de.convert(Ie)!==E.getParameter(E.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===Sn&&(K.isWebGL2||k.has("OES_texture_float")||k.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=P.width-Y&&te>=0&&te<=P.height-ne&&E.readPixels(j,te,Y,ne,de.convert(We),de.convert(Ie),be)}finally{const Ne=b!==null?ue.get(b).__webglFramebuffer:null;q.bindFramebuffer(E.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(P,j,te=0){const Y=Math.pow(2,-te),ne=Math.floor(j.image.width*Y),be=Math.floor(j.image.height*Y);Q.setTexture2D(j,0),E.copyTexSubImage2D(E.TEXTURE_2D,te,0,0,P.x,P.y,ne,be),q.unbindTexture()},this.copyTextureToTexture=function(P,j,te,Y=0){const ne=j.image.width,be=j.image.height,Re=de.convert(te.format),Ue=de.convert(te.type);Q.setTexture2D(te,0),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,te.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,te.unpackAlignment),j.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,Y,P.x,P.y,ne,be,Re,Ue,j.image.data):j.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,Y,P.x,P.y,j.mipmaps[0].width,j.mipmaps[0].height,Re,j.mipmaps[0].data):E.texSubImage2D(E.TEXTURE_2D,Y,P.x,P.y,Re,Ue,j.image),Y===0&&te.generateMipmaps&&E.generateMipmap(E.TEXTURE_2D),q.unbindTexture()},this.copyTextureToTexture3D=function(P,j,te,Y,ne=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=P.max.x-P.min.x+1,Re=P.max.y-P.min.y+1,Ue=P.max.z-P.min.z+1,Ne=de.convert(Y.format),We=de.convert(Y.type);let Ie;if(Y.isData3DTexture)Q.setTexture3D(Y,0),Ie=E.TEXTURE_3D;else if(Y.isDataArrayTexture)Q.setTexture2DArray(Y,0),Ie=E.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,Y.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,Y.unpackAlignment);const ze=E.getParameter(E.UNPACK_ROW_LENGTH),ft=E.getParameter(E.UNPACK_IMAGE_HEIGHT),mt=E.getParameter(E.UNPACK_SKIP_PIXELS),_n=E.getParameter(E.UNPACK_SKIP_ROWS),si=E.getParameter(E.UNPACK_SKIP_IMAGES),gt=te.isCompressedTexture?te.mipmaps[0]:te.image;E.pixelStorei(E.UNPACK_ROW_LENGTH,gt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,gt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,P.min.x),E.pixelStorei(E.UNPACK_SKIP_ROWS,P.min.y),E.pixelStorei(E.UNPACK_SKIP_IMAGES,P.min.z),te.isDataTexture||te.isData3DTexture?E.texSubImage3D(Ie,ne,j.x,j.y,j.z,be,Re,Ue,Ne,We,gt.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),E.compressedTexSubImage3D(Ie,ne,j.x,j.y,j.z,be,Re,Ue,Ne,gt.data)):E.texSubImage3D(Ie,ne,j.x,j.y,j.z,be,Re,Ue,Ne,We,gt),E.pixelStorei(E.UNPACK_ROW_LENGTH,ze),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ft),E.pixelStorei(E.UNPACK_SKIP_PIXELS,mt),E.pixelStorei(E.UNPACK_SKIP_ROWS,_n),E.pixelStorei(E.UNPACK_SKIP_IMAGES,si),ne===0&&Y.generateMipmaps&&E.generateMipmap(Ie),q.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?Q.setTextureCube(P,0):P.isData3DTexture?Q.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Q.setTexture2DArray(P,0):Q.setTexture2D(P,0),q.unbindTexture()},this.resetState=function(){S=0,R=0,b=null,q.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ze?br:qp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===br?Ze:St}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class wE extends dm{}wE.prototype.isWebGL1Renderer=!0;class RE extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class CE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Cc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qt=new I;class Ru{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Kn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ru(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const td=new I,nd=new Je,id=new Je,PE=new I,rd=new Fe,es=new I,ql=new ii,sd=new Fe,Yl=new Po;class LE extends Gt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ai),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)es.fromBufferAttribute(t,n),this.applyBoneTransform(n,es),this.boundingBox.expandByPoint(es)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ii),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)es.fromBufferAttribute(t,n),this.applyBoneTransform(n,es),this.boundingSphere.expandByPoint(es)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ql.copy(this.boundingSphere),ql.applyMatrix4(r),e.ray.intersectsSphere(ql)!==!1&&(sd.copy(r).invert(),Yl.copy(e.ray).applyMatrix4(sd),!(this.boundingBox!==null&&Yl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Yl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Je,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;nd.fromBufferAttribute(r.attributes.skinIndex,e),id.fromBufferAttribute(r.attributes.skinWeight,e),td.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=id.getComponent(s);if(o!==0){const a=nd.getComponent(s);rd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(PE.copy(td).applyMatrix4(rd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class pm extends ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class mm extends It{constructor(e=null,t=1,n=1,r,s,o,a,l,c=Rt,u=Rt,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const od=new Fe,DE=new Fe;class Cu{constructor(e=[],t=[]){this.uuid=Hn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:DE;od.multiplyMatrices(a,t[s]),od.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Cu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Kp(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new mm(t,e,e,Mn,Sn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new pm),this.bones.push(o),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class ad extends Ut{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ts=new Fe,ld=new Fe,ca=[],cd=new Ai,IE=new Fe,js=new Gt,qs=new ii;class UE extends Gt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ad(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,IE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ts),cd.copy(e.boundingBox).applyMatrix4(ts),this.boundingBox.union(cd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ts),qs.copy(e.boundingSphere).applyMatrix4(ts),this.boundingSphere.union(qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(n),e.ray.intersectsSphere(qs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ts),ld.multiplyMatrices(n,ts),js.matrixWorld=ld,js.raycast(e,ca);for(let o=0,a=ca.length;o<a;o++){const l=ca[o];l.instanceId=s,l.object=this,t.push(l)}ca.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ad(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class _m extends Qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ud=new I,fd=new I,hd=new Fe,Kl=new Po,ua=new ii;class Pu extends ut{constructor(e=new Rn,t=new _m){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)ud.fromBufferAttribute(t,r-1),fd.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=ud.distanceTo(fd);e.setAttribute("lineDistance",new An(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(r),ua.radius+=s,e.ray.intersectsSphere(ua)===!1)return;hd.copy(r).invert(),Kl.copy(e.ray).applyMatrix4(hd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,u=new I,f=new I,h=new I,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let x=p,v=M-1;x<v;x+=d){const S=g.getX(x),R=g.getX(x+1);if(c.fromBufferAttribute(m,S),u.fromBufferAttribute(m,R),Kl.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(h);C<e.near||C>e.far||t.push({distance:C,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),M=Math.min(m.count,o.start+o.count);for(let x=p,v=M-1;x<v;x+=d){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),Kl.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(h);R<e.near||R>e.far||t.push({distance:R,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const dd=new I,pd=new I;class NE extends Pu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)dd.fromBufferAttribute(t,r),pd.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+dd.distanceTo(pd);e.setAttribute("lineDistance",new An(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class OE extends Pu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class gm extends Qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const md=new Fe,Ic=new Po,fa=new ii,ha=new I;class FE extends ut{constructor(e=new Rn,t=new gm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(r),fa.radius+=s,e.ray.intersectsSphere(fa)===!1)return;md.copy(r).invert(),Ic.copy(e.ray).applyMatrix4(md);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,_=d;g<_;g++){const m=c.getX(g);ha.fromBufferAttribute(f,m),_d(ha,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,_=d;g<_;g++)ha.fromBufferAttribute(f,g),_d(ha,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function _d(i,e,t,n,r,s,o){const a=Ic.distanceSqToPoint(i);if(a<t){const l=new I;Ic.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Lu extends Rn{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new I,u=new Pe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const d=n+f/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new An(o,3)),this.setAttribute("normal",new An(a,3)),this.setAttribute("uv",new An(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lu(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Du extends Qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yp,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class er extends Du{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Di(i,e,t){return xm(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function da(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function xm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function BE(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function gd(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function vm(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class Do{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class kE extends Do{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ph,endingEnd:ph}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case mh:s=e,a=2*t-n;break;case _h:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case mh:o=e,l=2*n-t;break;case _h:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-t)/(r-t),_=g*g,m=_*g,p=-h*m+2*h*_-h*g,M=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,x=(-1-d)*m+(1.5+d)*_+.5*g,v=d*m-d*_;for(let S=0;S!==a;++S)s[S]=p*o[u+S]+M*o[c+S]+x*o[l+S]+v*o[f+S];return s}}class zE extends Do{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}}class HE extends Do{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ri{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=da(t,this.TimeBufferType),this.values=da(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:da(e.times,Array),values:da(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new HE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xo:t=this.InterpolantFactoryMethodDiscrete;break;case Ts:t=this.InterpolantFactoryMethodLinear;break;case El:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xo;case this.InterpolantFactoryMethodLinear:return Ts;case this.InterpolantFactoryMethodSmooth:return El}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=Di(n,s,o),this.values=Di(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&xm(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=Di(this.times),t=Di(this.values),n=this.getValueSize(),r=this.getInterpolation()===El,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const f=a*n,h=f-n,d=f+n;for(let g=0;g!==n;++g){const _=t[f+g];if(_!==t[h+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*n,h=o*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=Di(e,0,o),this.values=Di(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=Di(this.times,0),t=Di(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}ri.prototype.TimeBufferType=Float32Array;ri.prototype.ValueBufferType=Float32Array;ri.prototype.DefaultInterpolation=Ts;class Bs extends ri{}Bs.prototype.ValueTypeName="bool";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=xo;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;class ym extends ri{}ym.prototype.ValueTypeName="color";class As extends ri{}As.prototype.ValueTypeName="number";class GE extends Do{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Vn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Lr extends ri{InterpolantFactoryMethodLinear(e){return new GE(this.times,this.values,this.getValueSize(),e)}}Lr.prototype.ValueTypeName="quaternion";Lr.prototype.DefaultInterpolation=Ts;Lr.prototype.InterpolantFactoryMethodSmooth=void 0;class ks extends ri{}ks.prototype.ValueTypeName="string";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=xo;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;class ws extends ri{}ws.prototype.ValueTypeName="vector";class VE{constructor(e,t=-1,n,r=Wx){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Hn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(XE(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(ri.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=BE(l);l=gd(l,1,u),c=gd(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new As(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let h=r[f];h||(r[f]=h=[]),h.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,d,g,_){if(d.length!==0){const m=[],p=[];vm(d,m,p,g),m.length!==0&&_.push(new f(h,m,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)d[h[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let M=0;M!==h[g].morphTargets.length;++M){const x=h[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}r.push(new As(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{const d=".bones["+t[f].name+"]";n(ws,d+".position",h,"pos",r),n(Lr,d+".quaternion",h,"rot",r),n(ws,d+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function WE(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return As;case"vector":case"vector2":case"vector3":case"vector4":return ws;case"color":return ym;case"quaternion":return Lr;case"bool":case"boolean":return Bs;case"string":return ks}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function XE(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=WE(i.type);if(i.times===void 0){const t=[],n=[];vm(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Rs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class jE{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const qE=new jE;class tr{constructor(e){this.manager=e!==void 0?e:qE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}tr.DEFAULT_MATERIAL_NAME="__DEFAULT";const hi={};class YE extends Error{constructor(e,t){super(e),this.response=t}}class yo extends tr{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Rs.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(hi[e]!==void 0){hi[e].push({onLoad:t,onProgress:n,onError:r});return}hi[e]=[],hi[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=hi[e],f=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=h?parseInt(h):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){M();function M(){f.read().then(({done:x,value:v})=>{if(x)p.close();else{_+=v.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let R=0,b=u.length;R<b;R++){const C=u[R];C.onProgress&&C.onProgress(S)}p.enqueue(v),M()}})}}});return new Response(m)}else throw new YE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Rs.add(e,c);const u=hi[e];delete hi[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=hi[e];if(u===void 0)throw this.manager.itemError(e),c;delete hi[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class KE extends tr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Rs.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=vo("img");function l(){u(),Rs.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class $E extends tr{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new mm,a=new yo(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Jt,o.wrapT=c.wrapT!==void 0?c.wrapT:Jt,o.magFilter=c.magFilter!==void 0?c.magFilter:Et,o.minFilter=c.minFilter!==void 0?c.minFilter:Et,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?o.colorSpace=c.colorSpace:c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Zi),c.mipmapCount===1&&(o.minFilter=Et),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,r),o}}class Iu extends tr{constructor(e){super(e)}load(e,t,n,r){const s=new It,o=new KE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Uu extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const $l=new Fe,xd=new I,vd=new I;class Nu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bu,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;xd.setFromMatrixPosition(e.matrixWorld),t.position.copy(xd),vd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vd),t.updateMatrixWorld(),$l.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($l),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($l)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ZE extends Nu{constructor(){super(new Lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Es*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class JE extends Uu{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new ZE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const yd=new Fe,Ys=new I,Zl=new I;class QE extends Nu{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pe(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ys.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ys),Zl.copy(n.position),Zl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Zl),n.updateMatrixWorld(),r.makeTranslation(-Ys.x,-Ys.y,-Ys.z),yd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yd)}}class Uc extends Uu{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new QE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class eb extends Nu{constructor(){super(new Au(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mm extends Uu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new eb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Nc{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class tb extends tr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Rs.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Rs.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class nb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Md(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Md();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Md(){return(typeof performance>"u"?Date:performance).now()}const Ou="\\[\\]\\.:\\/",ib=new RegExp("["+Ou+"]","g"),Fu="[^"+Ou+"]",rb="[^"+Ou.replace("\\.","")+"]",sb=/((?:WC+[\/:])*)/.source.replace("WC",Fu),ob=/(WCOD+)?/.source.replace("WCOD",rb),ab=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fu),lb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fu),cb=new RegExp("^"+sb+ob+ab+lb+"$"),ub=["material","materials","bones","map"];class fb{constructor(e,t,n){const r=n||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class et{constructor(e,t,n){this.path=t,this.parsedPath=n||et.parseTrackName(t),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new et.Composite(e,t,n):new et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ib,"")}static parseTrackName(e){const t=cb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);ub.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=fb;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Sd{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Su}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Su);const Td={type:"change"},Jl={type:"start"},Ed={type:"end"},pa=new Po,bd=new Un,hb=Math.cos(70*$p.DEG2RAD);class db extends Ir{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Or.ROTATE,MIDDLE:Or.DOLLY,RIGHT:Or.PAN},this.touches={ONE:Fr.ROTATE,TWO:Fr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",T),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",T),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Td),n.update(),s=r.NONE},this.update=function(){const L=new I,ae=new Vn().setFromUnitVectors(e.up,new I(0,1,0)),Me=ae.clone().invert(),de=new I,_e=new Vn,Le=new I,qe=2*Math.PI;return function(Se=null){const J=n.object.position;L.copy(J).sub(n.target),L.applyQuaternion(ae),a.setFromVector3(L),n.autoRotate&&s===r.NONE&&z(y(Se)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let pe=n.minAzimuthAngle,xe=n.maxAzimuthAngle;isFinite(pe)&&isFinite(xe)&&(pe<-Math.PI?pe+=qe:pe>Math.PI&&(pe-=qe),xe<-Math.PI?xe+=qe:xe>Math.PI&&(xe-=qe),pe<=xe?a.theta=Math.max(pe,Math.min(xe,a.theta)):a.theta=a.theta>(pe+xe)/2?Math.max(pe,a.theta):Math.min(xe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.zoomToCursor&&R||n.object.isOrthographicCamera?a.radius=le(a.radius):a.radius=le(a.radius*c),L.setFromSpherical(a),L.applyQuaternion(Me),J.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let Ve=!1;if(n.zoomToCursor&&R){let Qe=null;if(n.object.isPerspectiveCamera){const st=L.length();Qe=le(st*c);const an=st-Qe;n.object.position.addScaledVector(v,an),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const st=new I(S.x,S.y,0);st.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ve=!0;const an=new I(S.x,S.y,0);an.unproject(n.object),n.object.position.sub(an).add(st),n.object.updateMatrixWorld(),Qe=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Qe!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Qe).add(n.object.position):(pa.origin.copy(n.object.position),pa.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(pa.direction))<hb?e.lookAt(n.target):(bd.setFromNormalAndCoplanarPoint(n.object.up,n.target),pa.intersectPlane(bd,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ve=!0);return c=1,R=!1,Ve||de.distanceToSquared(n.object.position)>o||8*(1-_e.dot(n.object.quaternion))>o||Le.distanceToSquared(n.target)>0?(n.dispatchEvent(Td),de.copy(n.object.position),_e.copy(n.object.quaternion),Le.copy(n.target),Ve=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",re),n.domElement.removeEventListener("pointerdown",ue),n.domElement.removeEventListener("pointercancel",ce),n.domElement.removeEventListener("wheel",w),n.domElement.removeEventListener("pointermove",Q),n.domElement.removeEventListener("pointerup",ce),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",T),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Sd,l=new Sd;let c=1;const u=new I,f=new Pe,h=new Pe,d=new Pe,g=new Pe,_=new Pe,m=new Pe,p=new Pe,M=new Pe,x=new Pe,v=new I,S=new Pe;let R=!1;const b=[],C={};function y(L){return L!==null?2*Math.PI/60*n.autoRotateSpeed*L:2*Math.PI/60/60*n.autoRotateSpeed}function A(){return Math.pow(.95,n.zoomSpeed)}function z(L){l.theta-=L}function Z(L){l.phi-=L}const O=function(){const L=new I;return function(Me,de){L.setFromMatrixColumn(de,0),L.multiplyScalar(-Me),u.add(L)}}(),F=function(){const L=new I;return function(Me,de){n.screenSpacePanning===!0?L.setFromMatrixColumn(de,1):(L.setFromMatrixColumn(de,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(Me),u.add(L)}}(),B=function(){const L=new I;return function(Me,de){const _e=n.domElement;if(n.object.isPerspectiveCamera){const Le=n.object.position;L.copy(Le).sub(n.target);let qe=L.length();qe*=Math.tan(n.object.fov/2*Math.PI/180),O(2*Me*qe/_e.clientHeight,n.object.matrix),F(2*de*qe/_e.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(O(Me*(n.object.right-n.object.left)/n.object.zoom/_e.clientWidth,n.object.matrix),F(de*(n.object.top-n.object.bottom)/n.object.zoom/_e.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function G(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(L){if(!n.zoomToCursor)return;R=!0;const ae=n.domElement.getBoundingClientRect(),Me=L.clientX-ae.left,de=L.clientY-ae.top,_e=ae.width,Le=ae.height;S.x=Me/_e*2-1,S.y=-(de/Le)*2+1,v.set(S.x,S.y,1).unproject(n.object).sub(n.object.position).normalize()}function le(L){return Math.max(n.minDistance,Math.min(n.maxDistance,L))}function ee(L){f.set(L.clientX,L.clientY)}function X(L){V(L),p.set(L.clientX,L.clientY)}function W(L){g.set(L.clientX,L.clientY)}function me(L){h.set(L.clientX,L.clientY),d.subVectors(h,f).multiplyScalar(n.rotateSpeed);const ae=n.domElement;z(2*Math.PI*d.x/ae.clientHeight),Z(2*Math.PI*d.y/ae.clientHeight),f.copy(h),n.update()}function ge(L){M.set(L.clientX,L.clientY),x.subVectors(M,p),x.y>0?G(A()):x.y<0&&H(A()),p.copy(M),n.update()}function Te(L){_.set(L.clientX,L.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),B(m.x,m.y),g.copy(_),n.update()}function Ae(L){V(L),L.deltaY<0?H(A()):L.deltaY>0&&G(A()),n.update()}function Ce(L){let ae=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?Z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),ae=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?Z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),ae=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),ae=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),ae=!0;break}ae&&(L.preventDefault(),n.update())}function we(){if(b.length===1)f.set(b[0].pageX,b[0].pageY);else{const L=.5*(b[0].pageX+b[1].pageX),ae=.5*(b[0].pageY+b[1].pageY);f.set(L,ae)}}function ke(){if(b.length===1)g.set(b[0].pageX,b[0].pageY);else{const L=.5*(b[0].pageX+b[1].pageX),ae=.5*(b[0].pageY+b[1].pageY);g.set(L,ae)}}function pt(){const L=b[0].pageX-b[1].pageX,ae=b[0].pageY-b[1].pageY,Me=Math.sqrt(L*L+ae*ae);p.set(0,Me)}function Oe(){n.enableZoom&&pt(),n.enablePan&&ke()}function E(){n.enableZoom&&pt(),n.enableRotate&&we()}function D(L){if(b.length==1)h.set(L.pageX,L.pageY);else{const Me=$(L),de=.5*(L.pageX+Me.x),_e=.5*(L.pageY+Me.y);h.set(de,_e)}d.subVectors(h,f).multiplyScalar(n.rotateSpeed);const ae=n.domElement;z(2*Math.PI*d.x/ae.clientHeight),Z(2*Math.PI*d.y/ae.clientHeight),f.copy(h)}function k(L){if(b.length===1)_.set(L.pageX,L.pageY);else{const ae=$(L),Me=.5*(L.pageX+ae.x),de=.5*(L.pageY+ae.y);_.set(Me,de)}m.subVectors(_,g).multiplyScalar(n.panSpeed),B(m.x,m.y),g.copy(_)}function K(L){const ae=$(L),Me=L.pageX-ae.x,de=L.pageY-ae.y,_e=Math.sqrt(Me*Me+de*de);M.set(0,_e),x.set(0,Math.pow(M.y/p.y,n.zoomSpeed)),G(x.y),p.copy(M)}function q(L){n.enableZoom&&K(L),n.enablePan&&k(L)}function fe(L){n.enableZoom&&K(L),n.enableRotate&&D(L)}function ue(L){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",Q),n.domElement.addEventListener("pointerup",ce)),se(L),L.pointerType==="touch"?N(L):oe(L))}function Q(L){n.enabled!==!1&&(L.pointerType==="touch"?ie(L):Ee(L))}function ce(L){ye(L),b.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",Q),n.domElement.removeEventListener("pointerup",ce)),n.dispatchEvent(Ed),s=r.NONE}function oe(L){let ae;switch(L.button){case 0:ae=n.mouseButtons.LEFT;break;case 1:ae=n.mouseButtons.MIDDLE;break;case 2:ae=n.mouseButtons.RIGHT;break;default:ae=-1}switch(ae){case Or.DOLLY:if(n.enableZoom===!1)return;X(L),s=r.DOLLY;break;case Or.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;W(L),s=r.PAN}else{if(n.enableRotate===!1)return;ee(L),s=r.ROTATE}break;case Or.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;ee(L),s=r.ROTATE}else{if(n.enablePan===!1)return;W(L),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Jl)}function Ee(L){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;me(L);break;case r.DOLLY:if(n.enableZoom===!1)return;ge(L);break;case r.PAN:if(n.enablePan===!1)return;Te(L);break}}function w(L){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(L.preventDefault(),n.dispatchEvent(Jl),Ae(L),n.dispatchEvent(Ed))}function T(L){n.enabled===!1||n.enablePan===!1||Ce(L)}function N(L){switch(he(L),b.length){case 1:switch(n.touches.ONE){case Fr.ROTATE:if(n.enableRotate===!1)return;we(),s=r.TOUCH_ROTATE;break;case Fr.PAN:if(n.enablePan===!1)return;ke(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Fr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Oe(),s=r.TOUCH_DOLLY_PAN;break;case Fr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;E(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Jl)}function ie(L){switch(he(L),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;D(L),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;k(L),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;q(L),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;fe(L),n.update();break;default:s=r.NONE}}function re(L){n.enabled!==!1&&L.preventDefault()}function se(L){b.push(L)}function ye(L){delete C[L.pointerId];for(let ae=0;ae<b.length;ae++)if(b[ae].pointerId==L.pointerId){b.splice(ae,1);return}}function he(L){let ae=C[L.pointerId];ae===void 0&&(ae=new Pe,C[L.pointerId]=ae),ae.set(L.pageX,L.pageY)}function $(L){const ae=L.pointerId===b[0].pointerId?b[1]:b[0];return C[ae.pointerId]}n.domElement.addEventListener("contextmenu",re),n.domElement.addEventListener("pointerdown",ue),n.domElement.addEventListener("pointercancel",ce),n.domElement.addEventListener("wheel",w,{passive:!1}),this.update()}}const Ql=new WeakMap;class pb extends tr{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,r){const s=new yo(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{this.parse(o,t,r)},n,r)}parse(e,t,n){this.decodeDracoFile(e,t,null,null,Ze).catch(n)}decodeDracoFile(e,t,n,r,s=St){const o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:r||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,o).then(t)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Ql.has(e)){const l=Ql.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let r;const s=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(s,o).then(l=>(r=l,new Promise((c,u)=>{r._callbacks[s]={resolve:c,reject:u},r.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{r&&s&&this._releaseTask(r,s)}),Ql.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Rn;e.index&&t.setIndex(new Ut(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const r=e.attributes[n],s=r.name,o=r.array,a=r.itemSize,l=new Ut(o,a);s==="color"&&(this._assignVertexColorSpace(l,r.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==Ze)return;const n=new De;for(let r=0,s=e.count;r<s;r++)n.fromBufferAttribute(e,r).convertSRGBToLinear(),e.setXYZ(r,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new yo(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((r,s)=>{n.load(e,r,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const r=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=mb.toString(),o=["/* draco decoder */",r,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const r=new Worker(this.workerSourceURL);r._callbacks={},r._taskCosts={},r._taskLoad=0,r.postMessage({type:"init",decoderConfig:this.decoderConfig}),r.onmessage=function(s){const o=s.data;switch(o.type){case"decode":r._callbacks[o.id].resolve(o);break;case"error":r._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(r)}else this.workerPool.sort(function(r,s){return r._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function mb(){let i,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":i=a.decoderConfig,e=new Promise(function(u){i.onModuleLoaded=function(f){u({draco:f})},DracoDecoderModule(i)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(u=>{const f=u.draco,h=new f.Decoder;try{const d=t(f,h,new Int8Array(l),c),g=d.attributes.map(_=>_.array.buffer);d.index&&g.push(d.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:d},g)}catch(d){console.error(d),self.postMessage({type:"error",id:a.id,error:d.message})}finally{f.destroy(h)}});break}};function t(o,a,l,c){const u=c.attributeIDs,f=c.attributeTypes;let h,d;const g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)h=new o.Mesh,d=a.DecodeArrayToMesh(l,l.byteLength,h);else if(g===o.POINT_CLOUD)h=new o.PointCloud,d=a.DecodeArrayToPointCloud(l,l.byteLength,h);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||h.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const _={index:null,attributes:[]};for(const m in u){const p=self[f[m]];let M,x;if(c.useUniqueIDs)x=u[m],M=a.GetAttributeByUniqueId(h,x);else{if(x=a.GetAttributeId(h,o[u[m]]),x===-1)continue;M=a.GetAttribute(h,x)}const v=r(o,a,h,m,p,M);m==="color"&&(v.vertexColorSpace=c.vertexColorSpace),_.attributes.push(v)}return g===o.TRIANGULAR_MESH&&(_.index=n(o,a,h)),o.destroy(h),_}function n(o,a,l){const u=l.num_faces()*3,f=u*4,h=o._malloc(f);a.GetTrianglesUInt32Array(l,f,h);const d=new Uint32Array(o.HEAPF32.buffer,h,u).slice();return o._free(h),{array:d,itemSize:1}}function r(o,a,l,c,u,f){const h=f.num_components(),g=l.num_points()*h,_=g*u.BYTES_PER_ELEMENT,m=s(o,u),p=o._malloc(_);a.GetAttributeDataArrayForAllPoints(l,f,m,_,p);const M=new u(o.HEAPF32.buffer,p,g).slice();return o._free(p),{name:c,array:M,itemSize:h}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}function Ad(i,e){if(e===Xx)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Rc||e===jp){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===Rc)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class _b extends tr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Mb(t)}),this.register(function(t){return new Cb(t)}),this.register(function(t){return new Pb(t)}),this.register(function(t){return new Lb(t)}),this.register(function(t){return new Tb(t)}),this.register(function(t){return new Eb(t)}),this.register(function(t){return new bb(t)}),this.register(function(t){return new Ab(t)}),this.register(function(t){return new yb(t)}),this.register(function(t){return new wb(t)}),this.register(function(t){return new Sb(t)}),this.register(function(t){return new Rb(t)}),this.register(function(t){return new xb(t)}),this.register(function(t){return new Db(t)}),this.register(function(t){return new Ib(t)})}load(e,t,n,r){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Nc.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new yo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Sm){try{o[Ye.KHR_BINARY_GLTF]=new Ub(e)}catch(f){r&&r(f);return}s=JSON.parse(o[Ye.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new qb(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);a[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const f=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(f){case Ye.KHR_MATERIALS_UNLIT:o[f]=new vb;break;case Ye.KHR_DRACO_MESH_COMPRESSION:o[f]=new Nb(s,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:o[f]=new Ob;break;case Ye.KHR_MESH_QUANTIZATION:o[f]=new Fb;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function gb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class xb{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new De(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],St);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Mm(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Uc(u),c.distance=f;break;case"spot":c=new JE(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ni(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class vb{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return Fi}extendParams(e,t,n){const r=[];e.color=new De(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],St),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Ze))}return Promise.all(r)}}class yb{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Mb{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Pe(a,a)}return Promise.all(s)}}class Sb{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class Tb{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],St)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ze)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class Eb{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class bb{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(a[0],a[1],a[2],St),Promise.all(s)}}class Ab{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class wb{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(a[0],a[1],a[2],St),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ze)),Promise.all(s)}}class Rb{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class Cb{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class Pb{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Lb{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Db{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,f=r.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,r.mode,r.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(d),u,f,h,r.mode,r.filter),d})})}else return null}}class Ib{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const c of r.primitives)if(c.mode!==vn.TRIANGLES&&c.mode!==vn.TRIANGLE_STRIP&&c.mode!==vn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,d=[];for(const g of f){const _=new Fe,m=new I,p=new Vn,M=new I(1,1,1),x=new UE(g.geometry,g.material,h);for(let v=0;v<h;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&M.fromBufferAttribute(l.SCALE,v),x.setMatrixAt(v,_.compose(m,p,M));for(const v in l)v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);ut.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),d.push(x)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Sm="glTF",Ks=12,wd={JSON:1313821514,BIN:5130562};class Ub{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ks),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Sm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Ks,s=new DataView(e,Ks);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===wd.JSON){const c=new Uint8Array(e,Ks+o,a);this.content=n.decode(c)}else if(l===wd.BIN){const c=Ks+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Nb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=Oc[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=Oc[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[e.attributes[u]],d=ds[h.componentType];c[f]=d.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f){r.decodeDracoFile(u,function(h){for(const d in h.attributes){const g=h.attributes[d],_=l[d];_!==void 0&&(g.normalized=_)}f(h)},a,c)})})}}class Ob{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Fb{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}}class Tm extends Do{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,f=(n-t)/u,h=f*f,d=h*f,g=e*c,_=g-c,m=-2*d+3*h,p=d-h,M=1-m,x=p-h+f;for(let v=0;v!==a;v++){const S=o[_+v+a],R=o[_+v+l]*u,b=o[g+v+a],C=o[g+v]*u;s[v]=M*S+x*R+m*b+p*C}return s}}const Bb=new Vn;class kb extends Tm{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return Bb.fromArray(s).normalize().toArray(s),s}}const vn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ds={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Rd={9728:Rt,9729:Et,9984:wc,9985:kp,9986:ya,9987:Zi},Cd={33071:Jt,33648:La,10497:$i},ec={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Oc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ii={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},zb={CUBICSPLINE:void 0,LINEAR:Ts,STEP:xo},tc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Hb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Du({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mi})),i.DefaultMaterial}function fr(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ni(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Gb(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(n){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;o.push(h)}if(r){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;a.push(h)}if(s){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=f),s&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function Vb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Wb(i){let e;const t=i.extensions&&i.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+nc(t.attributes):e=i.indices+":"+nc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+nc(i.targets[n]);return e}function nc(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Fc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Xb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const jb=new Fe;class qb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new gb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||r&&s<98?this.textureLoader=new Iu(this.options.manager):this.textureLoader=new tb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new yo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};fr(s,a,r),Ni(a,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(Nc.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=ec[r.type],a=ds[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new Ut(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=ec[r.type],c=ds[r.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=r.byteOffset||0,d=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,m;if(d&&d!==f){const p=Math.floor(h/d),M="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let x=t.cache.get(M);x||(_=new c(a,p*d,r.count*d/u),x=new CE(_,d/u),t.cache.add(M,x)),m=new Ru(x,l,h%d/u,g)}else a===null?_=new c(r.count*l):_=new c(a,h,r.count*l),m=new Ut(_,l,g);if(r.sparse!==void 0){const p=ec.SCALAR,M=ds[r.sparse.indices.componentType],x=r.sparse.indices.byteOffset||0,v=r.sparse.values.byteOffset||0,S=new M(o[1],x,r.sparse.count*p),R=new c(o[2],v,r.sparse.count*l);a!==null&&(m=new Ut(m.array.slice(),m.itemSize,m.normalized));for(let b=0,C=S.length;b<C;b++){const y=S[b];if(m.setX(y,R[b*l]),l>=2&&m.setY(y,R[b*l+1]),l>=3&&m.setZ(y,R[b*l+2]),l>=4&&m.setW(y,R[b*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(s.samplers||{})[o.sampler]||{};return u.magFilter=Rd[h.magFilter]||Et,u.minFilter=Rd[h.minFilter]||Zi,u.wrapS=Cd[h.wrapS]||$i,u.wrapT=Cd[h.wrapT]||$i,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,d){let g=h;t.isImageBitmapLoader===!0&&(g=function(_){const m=new It(_);m.needsUpdate=!0,h(m)}),t.load(Nc.resolveURL(f,s.path),g,void 0,d)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),f.userData.mimeType=o.mimeType||Xb(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Ye.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new gm,Qn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new _m,Qn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Du}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[Ye.KHR_MATERIALS_UNLIT]){const f=r[Ye.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,s,t))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new De(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],St),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,Ze)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=On);const u=s.alphaMode||tc.OPAQUE;if(u===tc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===tc.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Fi&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Pe(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==Fi&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Fi){const f=s.emissiveFactor;a.emissive=new De().setRGB(f[0],f[1],f[2],St)}return s.emissiveTexture!==void 0&&o!==Fi&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ze)),Promise.all(c).then(function(){const f=new o(a);return s.name&&(f.name=s.name),Ni(f,s),t.associations.set(f,{materials:e}),s.extensions&&fr(r,f,s),f})}createUniqueName(e){const t=et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Pd(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=Wb(c),f=r[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=Pd(new Rn,c,t),r[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?Hb(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=o[d];let p;const M=c[d];if(m.mode===vn.TRIANGLES||m.mode===vn.TRIANGLE_STRIP||m.mode===vn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new LE(_,M):new Gt(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===vn.TRIANGLE_STRIP?p.geometry=Ad(p.geometry,jp):m.mode===vn.TRIANGLE_FAN&&(p.geometry=Ad(p.geometry,Rc));else if(m.mode===vn.LINES)p=new NE(_,M);else if(m.mode===vn.LINE_STRIP)p=new Pu(_,M);else if(m.mode===vn.LINE_LOOP)p=new OE(_,M);else if(m.mode===vn.POINTS)p=new FE(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Vb(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Ni(p,s),m.extensions&&fr(r,p,m),t.assignFinalMaterial(p),f.push(p)}for(let d=0,g=f.length;d<g;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return s.extensions&&fr(r,f[0],s),f[0];const h=new Bi;s.extensions&&fr(r,h,s),t.associations.set(h,{meshes:e});for(let d=0,g=f.length;d<g;d++)h.add(f[d]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Lt($p.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Au(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ni(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const h=new Fe;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Cu(a,l)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,h=r.channels.length;f<h;f++){const d=r.channels[f],g=r.samplers[d.sampler],_=d.target,m=_.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,M=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const h=f[0],d=f[1],g=f[2],_=f[3],m=f[4],p=[];for(let M=0,x=h.length;M<x;M++){const v=h[M],S=d[M],R=g[M],b=_[M],C=m[M];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const y=n._createAnimationTracks(v,S,R,b,C);if(y)for(let A=0;A<y.length;A++)p.push(y[A])}return new VE(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,jb)});for(let d=0,g=f.length;d<g;d++)u.add(f[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new pm:c.length>1?u=new Bi:c.length===1?u=c[0]:u=new ut,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(s.name&&(u.userData.name=s.name,u.name=o),Ni(u,s),s.extensions&&fr(n,u,s),s.matrix!==void 0){const f=new Fe;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new Bi;n.name&&(s.name=r.createUniqueName(n.name)),Ni(s,n),n.extensions&&fr(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)s.add(l[u]);const c=u=>{const f=new Map;for(const[h,d]of r.associations)(h instanceof Qn||h instanceof It)&&f.set(h,d);return u.traverse(h=>{const d=r.associations.get(h);d!=null&&f.set(h,d)}),f};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];Ii[s.path]===Ii.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(Ii[s.path]){case Ii.weights:c=As;break;case Ii.rotation:c=Lr;break;case Ii.position:case Ii.scale:c=ws;break;default:switch(n.itemSize){case 1:c=As;break;case 2:case 3:default:c=ws;break}break}const u=r.interpolation!==void 0?zb[r.interpolation]:Ts,f=this._getArrayFromAccessor(n);for(let h=0,d=l.length;h<d;h++){const g=new c(l[h]+"."+Ii[s.path],t.array,f,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Fc(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof Lr?kb:Tm;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Yb(i,e,t){const n=e.attributes,r=new Ai;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){const u=Fc(ds[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new I,l=new I;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],d=h.min,g=h.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),h.normalized){const _=Fc(ds[h.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new ii;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function Pd(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Oc[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return fn.workingColorSpace!==St&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${fn.workingColorSpace}" not supported.`),Ni(i,e),Yb(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?Gb(i,e.targets,t):i})}class Kb extends $E{constructor(e){super(e),this.type=Bn}parse(e){const o=function(C,y){switch(C){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(y||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(y||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(y||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(y||""))}},u=`
`,f=function(C,y,A){y=y||1024;let Z=C.pos,O=-1,F=0,B="",G=String.fromCharCode.apply(null,new Uint16Array(C.subarray(Z,Z+128)));for(;0>(O=G.indexOf(u))&&F<y&&Z<C.byteLength;)B+=G,F+=G.length,Z+=128,G+=String.fromCharCode.apply(null,new Uint16Array(C.subarray(Z,Z+128)));return-1<O?(A!==!1&&(C.pos+=F+O+1),B+G.slice(0,O)):!1},h=function(C){const y=/^#\?(\S+)/,A=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,z=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,Z=/^\s*FORMAT=(\S+)\s*$/,O=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,F={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let B,G;for((C.pos>=C.byteLength||!(B=f(C)))&&o(1,"no header found"),(G=B.match(y))||o(3,"bad initial token"),F.valid|=1,F.programtype=G[1],F.string+=B+`
`;B=f(C),B!==!1;){if(F.string+=B+`
`,B.charAt(0)==="#"){F.comments+=B+`
`;continue}if((G=B.match(A))&&(F.gamma=parseFloat(G[1])),(G=B.match(z))&&(F.exposure=parseFloat(G[1])),(G=B.match(Z))&&(F.valid|=2,F.format=G[1]),(G=B.match(O))&&(F.valid|=4,F.height=parseInt(G[1],10),F.width=parseInt(G[2],10)),F.valid&2&&F.valid&4)break}return F.valid&2||o(3,"missing format specifier"),F.valid&4||o(3,"missing image size specifier"),F},d=function(C,y,A){const z=y;if(z<8||z>32767||C[0]!==2||C[1]!==2||C[2]&128)return new Uint8Array(C);z!==(C[2]<<8|C[3])&&o(3,"wrong scanline width");const Z=new Uint8Array(4*y*A);Z.length||o(4,"unable to allocate buffer space");let O=0,F=0;const B=4*z,G=new Uint8Array(4),H=new Uint8Array(B);let V=A;for(;V>0&&F<C.byteLength;){F+4>C.byteLength&&o(1),G[0]=C[F++],G[1]=C[F++],G[2]=C[F++],G[3]=C[F++],(G[0]!=2||G[1]!=2||(G[2]<<8|G[3])!=z)&&o(3,"bad rgbe scanline format");let le=0,ee;for(;le<B&&F<C.byteLength;){ee=C[F++];const W=ee>128;if(W&&(ee-=128),(ee===0||le+ee>B)&&o(3,"bad scanline data"),W){const me=C[F++];for(let ge=0;ge<ee;ge++)H[le++]=me}else H.set(C.subarray(F,F+ee),le),le+=ee,F+=ee}const X=z;for(let W=0;W<X;W++){let me=0;Z[O]=H[W+me],me+=z,Z[O+1]=H[W+me],me+=z,Z[O+2]=H[W+me],me+=z,Z[O+3]=H[W+me],O+=4}V--}return Z},g=function(C,y,A,z){const Z=C[y+3],O=Math.pow(2,Z-128)/255;A[z+0]=C[y+0]*O,A[z+1]=C[y+1]*O,A[z+2]=C[y+2]*O,A[z+3]=1},_=function(C,y,A,z){const Z=C[y+3],O=Math.pow(2,Z-128)/255;A[z+0]=$o.toHalfFloat(Math.min(C[y+0]*O,65504)),A[z+1]=$o.toHalfFloat(Math.min(C[y+1]*O,65504)),A[z+2]=$o.toHalfFloat(Math.min(C[y+2]*O,65504)),A[z+3]=$o.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const p=h(m),M=p.width,x=p.height,v=d(m.subarray(m.pos),M,x);let S,R,b;switch(this.type){case Sn:b=v.length/4;const C=new Float32Array(b*4);for(let A=0;A<b;A++)g(v,A*4,C,A*4);S=C,R=Sn;break;case Bn:b=v.length/4;const y=new Uint16Array(b*4);for(let A=0;A<b;A++)_(v,A*4,y,A*4);S=y,R=Bn;break;default:throw new Error("THREE.RGBELoader: unsupported type: ",this.type)}return{width:M,height:x,data:S,header:p.string,gamma:p.gamma,exposure:p.exposure,type:R}}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(o,a){switch(o.type){case Sn:case Bn:o.colorSpace=St,o.minFilter=Et,o.magFilter=Et,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,s,n,r)}}class Mo extends Gt{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new Lt;const n=this,r=t.color!==void 0?new De(t.color):new De(8355711),s=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||Mo.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new Un,f=new I,h=new I,d=new I,g=new Fe,_=new I(0,0,-1),m=new Je,p=new I,M=new I,x=new Je,v=new Fe,S=this.camera,R=new Si(s,o,{samples:c,type:Bn}),b=new ti({name:l.name!==void 0?l.name:"unspecified",uniforms:el.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});b.uniforms.tDiffuse.value=R.texture,b.uniforms.color.value=r,b.uniforms.textureMatrix.value=v,this.material=b,this.onBeforeRender=function(C,y,A){if(h.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(A.matrixWorld),g.extractRotation(n.matrixWorld),f.set(0,0,1),f.applyMatrix4(g),p.subVectors(h,d),p.dot(f)>0)return;p.reflect(f).negate(),p.add(h),g.extractRotation(A.matrixWorld),_.set(0,0,-1),_.applyMatrix4(g),_.add(d),M.subVectors(h,_),M.reflect(f).negate(),M.add(h),S.position.copy(p),S.up.set(0,1,0),S.up.applyMatrix4(g),S.up.reflect(f),S.lookAt(M),S.far=A.far,S.updateMatrixWorld(),S.projectionMatrix.copy(A.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(S.projectionMatrix),v.multiply(S.matrixWorldInverse),v.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(f,h),u.applyMatrix4(S.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const z=S.projectionMatrix;x.x=(Math.sign(m.x)+z.elements[8])/z.elements[0],x.y=(Math.sign(m.y)+z.elements[9])/z.elements[5],x.z=-1,x.w=(1+z.elements[10])/z.elements[14],m.multiplyScalar(2/m.dot(x)),z.elements[2]=m.x,z.elements[6]=m.y,z.elements[10]=m.z+1-a,z.elements[14]=m.w,n.visible=!1;const Z=C.getRenderTarget(),O=C.xr.enabled,F=C.shadowMap.autoUpdate;C.xr.enabled=!1,C.shadowMap.autoUpdate=!1,C.setRenderTarget(R),C.state.buffers.depth.setMask(!0),C.autoClear===!1&&C.clear(),C.render(y,S),C.xr.enabled=O,C.shadowMap.autoUpdate=F,C.setRenderTarget(Z);const B=A.viewport;B!==void 0&&C.state.viewport(B),n.visible=!0},this.getRenderTarget=function(){return R},this.dispose=function(){R.dispose(),n.material.dispose()}}}Mo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};class So extends Gt{constructor(e,t={}){super(e),this.isRefractor=!0,this.type="Refractor",this.camera=new Lt;const n=this,r=t.color!==void 0?new De(t.color):new De(8355711),s=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||So.RefractorShader,c=t.multisample!==void 0?t.multisample:4,u=this.camera;u.matrixAutoUpdate=!1,u.userData.refractor=!0;const f=new Un,h=new Fe,d=new Si(s,o,{samples:c,type:Bn});this.material=new ti({uniforms:el.clone(l.uniforms),vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,transparent:!0}),this.material.uniforms.color.value=r,this.material.uniforms.tDiffuse.value=d.texture,this.material.uniforms.textureMatrix.value=h;const g=function(){const x=new I,v=new I,S=new Fe,R=new I,b=new I;return function(y){return x.setFromMatrixPosition(n.matrixWorld),v.setFromMatrixPosition(y.matrixWorld),R.subVectors(x,v),S.extractRotation(n.matrixWorld),b.set(0,0,1),b.applyMatrix4(S),R.dot(b)<0}}(),_=function(){const x=new I,v=new I,S=new Vn,R=new I;return function(){n.matrixWorld.decompose(v,S,R),x.set(0,0,1).applyQuaternion(S).normalize(),x.negate(),f.setFromNormalAndCoplanarPoint(x,v)}}(),m=function(){const x=new Un,v=new Je,S=new Je;return function(b){u.matrixWorld.copy(b.matrixWorld),u.matrixWorldInverse.copy(u.matrixWorld).invert(),u.projectionMatrix.copy(b.projectionMatrix),u.far=b.far,x.copy(f),x.applyMatrix4(u.matrixWorldInverse),v.set(x.normal.x,x.normal.y,x.normal.z,x.constant);const C=u.projectionMatrix;S.x=(Math.sign(v.x)+C.elements[8])/C.elements[0],S.y=(Math.sign(v.y)+C.elements[9])/C.elements[5],S.z=-1,S.w=(1+C.elements[10])/C.elements[14],v.multiplyScalar(2/v.dot(S)),C.elements[2]=v.x,C.elements[6]=v.y,C.elements[10]=v.z+1-a,C.elements[14]=v.w}}();function p(x){h.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),h.multiply(x.projectionMatrix),h.multiply(x.matrixWorldInverse),h.multiply(n.matrixWorld)}function M(x,v,S){n.visible=!1;const R=x.getRenderTarget(),b=x.xr.enabled,C=x.shadowMap.autoUpdate;x.xr.enabled=!1,x.shadowMap.autoUpdate=!1,x.setRenderTarget(d),x.autoClear===!1&&x.clear(),x.render(v,u),x.xr.enabled=b,x.shadowMap.autoUpdate=C,x.setRenderTarget(R);const y=S.viewport;y!==void 0&&x.state.viewport(y),n.visible=!0}this.onBeforeRender=function(x,v,S){S.userData.refractor!==!0&&g(S)&&(_(),p(S),m(S),M(x,v,S))},this.getRenderTarget=function(){return d},this.dispose=function(){d.dispose(),n.material.dispose()}}}So.RefractorShader={uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`

		uniform mat4 textureMatrix;

		varying vec4 vUv;

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform vec3 color;
		uniform sampler2D tDiffuse;

		varying vec4 vUv;

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};class il extends Gt{constructor(e,t={}){super(e),this.isWater=!0,this.type="Water";const n=this,r=t.color!==void 0?new De(t.color):new De(16777215),s=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.flowDirection||new Pe(1,0),c=t.flowSpeed||.03,u=t.reflectivity||.02,f=t.scale||1,h=t.shader||il.WaterShader,d=new Iu,g=t.flowMap||void 0,_=t.normalMap0||d.load("textures/water/Water_1_M_Normal.jpg"),m=t.normalMap1||d.load("textures/water/Water_2_M_Normal.jpg"),p=.15,M=p*.5,x=new Fe,v=new nb;if(Mo===void 0){console.error("THREE.Water: Required component Reflector not found.");return}if(So===void 0){console.error("THREE.Water: Required component Refractor not found.");return}const S=new Mo(e,{textureWidth:s,textureHeight:o,clipBias:a}),R=new So(e,{textureWidth:s,textureHeight:o,clipBias:a});S.matrixAutoUpdate=!1,R.matrixAutoUpdate=!1,this.material=new ti({uniforms:el.merge([ve.fog,h.uniforms]),vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,transparent:!0,fog:!0}),g!==void 0?(this.material.defines.USE_FLOWMAP="",this.material.uniforms.tFlowMap={type:"t",value:g}):this.material.uniforms.flowDirection={type:"v2",value:l},_.wrapS=_.wrapT=$i,m.wrapS=m.wrapT=$i,this.material.uniforms.tReflectionMap.value=S.getRenderTarget().texture,this.material.uniforms.tRefractionMap.value=R.getRenderTarget().texture,this.material.uniforms.tNormalMap0.value=_,this.material.uniforms.tNormalMap1.value=m,this.material.uniforms.color.value=r,this.material.uniforms.reflectivity.value=u,this.material.uniforms.textureMatrix.value=x,this.material.uniforms.config.value.x=0,this.material.uniforms.config.value.y=M,this.material.uniforms.config.value.z=M,this.material.uniforms.config.value.w=f;function b(y){x.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),x.multiply(y.projectionMatrix),x.multiply(y.matrixWorldInverse),x.multiply(n.matrixWorld)}function C(){const y=v.getDelta(),A=n.material.uniforms.config;A.value.x+=c*y,A.value.y=A.value.x+M,A.value.x>=p?(A.value.x=0,A.value.y=M):A.value.y>=p&&(A.value.y=A.value.y-p)}this.onBeforeRender=function(y,A,z){b(z),C(),n.visible=!1,S.matrixWorld.copy(n.matrixWorld),R.matrixWorld.copy(n.matrixWorld),S.onBeforeRender(y,A,z),R.onBeforeRender(y,A,z),n.visible=!0}}}il.WaterShader={uniforms:{color:{type:"c",value:null},reflectivity:{type:"f",value:0},tReflectionMap:{type:"t",value:null},tRefractionMap:{type:"t",value:null},tNormalMap0:{type:"t",value:null},tNormalMap1:{type:"t",value:null},textureMatrix:{type:"m4",value:null},config:{type:"v4",value:new Je}},vertexShader:`

		#include <common>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>

		uniform mat4 textureMatrix;

		varying vec4 vCoord;
		varying vec2 vUv;
		varying vec3 vToEye;

		void main() {

			vUv = uv;
			vCoord = textureMatrix * vec4( position, 1.0 );

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vToEye = cameraPosition - worldPosition.xyz;

			vec4 mvPosition =  viewMatrix * worldPosition; // used in fog_vertex
			gl_Position = projectionMatrix * mvPosition;

			#include <logdepthbuf_vertex>
			#include <fog_vertex>

		}`,fragmentShader:`

		#include <common>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>

		uniform sampler2D tReflectionMap;
		uniform sampler2D tRefractionMap;
		uniform sampler2D tNormalMap0;
		uniform sampler2D tNormalMap1;

		#ifdef USE_FLOWMAP
			uniform sampler2D tFlowMap;
		#else
			uniform vec2 flowDirection;
		#endif

		uniform vec3 color;
		uniform float reflectivity;
		uniform vec4 config;

		varying vec4 vCoord;
		varying vec2 vUv;
		varying vec3 vToEye;

		void main() {

			#include <logdepthbuf_fragment>

			float flowMapOffset0 = config.x;
			float flowMapOffset1 = config.y;
			float halfCycle = config.z;
			float scale = config.w;

			vec3 toEye = normalize( vToEye );

			// determine flow direction
			vec2 flow;
			#ifdef USE_FLOWMAP
				flow = texture2D( tFlowMap, vUv ).rg * 2.0 - 1.0;
			#else
				flow = flowDirection;
			#endif
			flow.x *= - 1.0;

			// sample normal maps (distort uvs with flowdata)
			vec4 normalColor0 = texture2D( tNormalMap0, ( vUv * scale ) + flow * flowMapOffset0 );
			vec4 normalColor1 = texture2D( tNormalMap1, ( vUv * scale ) + flow * flowMapOffset1 );

			// linear interpolate to get the final normal color
			float flowLerp = abs( halfCycle - flowMapOffset0 ) / halfCycle;
			vec4 normalColor = mix( normalColor0, normalColor1, flowLerp );

			// calculate normal vector
			vec3 normal = normalize( vec3( normalColor.r * 2.0 - 1.0, normalColor.b,  normalColor.g * 2.0 - 1.0 ) );

			// calculate the fresnel term to blend reflection and refraction maps
			float theta = max( dot( toEye, normal ), 0.0 );
			float reflectance = reflectivity + ( 1.0 - reflectivity ) * pow( ( 1.0 - theta ), 5.0 );

			// calculate final uv coords
			vec3 coord = vCoord.xyz / vCoord.w;
			vec2 uv = coord.xy + coord.z * normal.xz * 0.05;

			vec4 reflectColor = texture2D( tReflectionMap, vec2( 1.0 - uv.x, uv.y ) );
			vec4 refractColor = texture2D( tRefractionMap, uv );

			// multiply water color with the mix of both textures
			gl_FragColor = vec4( color, 1.0 ) * mix( refractColor, reflectColor, reflectance );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>

		}`};function mi(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Em(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var pn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Cs={duration:.5,overwrite:!1,delay:0},Bu,Vt,ht,Tn=1e8,rt=1/Tn,Bc=Math.PI*2,$b=Bc/4,Zb=0,bm=Math.sqrt,Jb=Math.cos,Qb=Math.sin,Pt=function(e){return typeof e=="string"},dt=function(e){return typeof e=="function"},Ti=function(e){return typeof e=="number"},ku=function(e){return typeof e>"u"},ni=function(e){return typeof e=="object"},tn=function(e){return e!==!1},zu=function(){return typeof window<"u"},ma=function(e){return dt(e)||Pt(e)},Am=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Wt=Array.isArray,kc=/(?:-?\.?\d|\.)+/gi,wm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,os=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ic=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Rm=/[+-]=-?[.\d]+/,Cm=/[^,'"\[\]\s]+/gi,eA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,lt,yn,zc,Hu,mn={},Ua={},Pm,Lm=function(e){return(Ua=Dr(e,mn))&&on},Gu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Na=function(e,t){return!t&&console.warn(e)},Dm=function(e,t){return e&&(mn[e]=t)&&Ua&&(Ua[e]=t)||mn},To=function(){return 0},tA={suppressEvents:!0,isStart:!0,kill:!1},Sa={suppressEvents:!0,kill:!1},nA={suppressEvents:!0},Vu={},qi=[],Hc={},Im,hn={},rc={},Ld=30,Ta=[],Wu="",Xu=function(e){var t=e[0],n,r;if(ni(t)||dt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Ta.length;r--&&!Ta[r].targetTest(t););n=Ta[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new i_(e[r],n)))||e.splice(r,1);return e},wr=function(e){return e._gsap||Xu(En(e))[0]._gsap},Um=function(e,t,n){return(n=e[t])&&dt(n)?e[t]():ku(n)&&e.getAttribute&&e.getAttribute(t)||n},nn=function(e,t){return(e=e.split(",")).forEach(t)||e},_t=function(e){return Math.round(e*1e5)/1e5||0},Dt=function(e){return Math.round(e*1e7)/1e7||0},ps=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},iA=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Oa=function(){var e=qi.length,t=qi.slice(0),n,r;for(Hc={},qi.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Nm=function(e,t,n,r){qi.length&&!Vt&&Oa(),e.render(t,n,r||Vt&&t<0&&(e._initted||e._startAt)),qi.length&&!Vt&&Oa()},Om=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Cm).length<2?t:Pt(e)?e.trim():e},Fm=function(e){return e},wn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},rA=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Dr=function(e,t){for(var n in t)e[n]=t[n];return e},Dd=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ni(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Fa=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},lo=function(e){var t=e.parent||lt,n=e.keyframes?rA(Wt(e.keyframes)):wn;if(tn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},sA=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Bm=function(e,t,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},rl=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ji=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Rr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},oA=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Gc=function(e,t,n,r){return e._startAt&&(Vt?e._startAt.revert(Sa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},aA=function i(e){return!e||e._ts&&i(e.parent)},Id=function(e){return e._repeat?Ps(e._tTime,e=e.duration()+e._rDelay)*e:0},Ps=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Ba=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},sl=function(e){return e._end=Dt(e._start+(e._tDur/Math.abs(e._ts||e._rts||rt)||0))},ol=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Dt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),sl(e),n._dirty||Rr(n,e)),e},km=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ba(e.rawTime(),t),(!t._dur||Io(0,t.totalDuration(),n)-t._tTime>rt)&&t.render(n,!0)),Rr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-rt}},$n=function(e,t,n,r){return t.parent&&Ji(t),t._start=Dt((Ti(n)?n:n||e!==lt?xn(e,n,t):e._time)+t._delay),t._end=Dt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Bm(e,t,"_first","_last",e._sort?"_start":0),Vc(t)||(e._recent=t),r||km(e,t),e._ts<0&&ol(e,e._tTime),e},zm=function(e,t){return(mn.ScrollTrigger||Gu("scrollTrigger",t))&&mn.ScrollTrigger.create(t,e)},Hm=function(e,t,n,r,s){if(qu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Vt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Im!==dn.frame)return qi.push(e),e._lazy=[s,r],1},lA=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Vc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},cA=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&lA(e)&&!(!e._initted&&Vc(e))||(e._ts<0||e._dp._ts<0)&&!Vc(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Io(0,e._tDur,t),u=Ps(l,a),e._yoyo&&u&1&&(o=1-o),u!==Ps(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Vt||r||e._zTime===rt||!t&&e._zTime){if(!e._initted&&Hm(e,t,r,n,l))return;for(f=e._zTime,e._zTime=t||(n?rt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Gc(e,t,n,!0),e._onUpdate&&!n&&bn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&bn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ji(e,1),!n&&!Vt&&(bn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},uA=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ls=function(e,t,n,r){var s=e._repeat,o=Dt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Dt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&ol(e,e._tTime=e._tDur*a),e.parent&&sl(e),n||Rr(e.parent,e),e},Ud=function(e){return e instanceof Qt?Rr(e):Ls(e,e._dur)},fA={_start:0,endTime:To,totalDuration:To},xn=function i(e,t,n){var r=e.labels,s=e._recent||fA,o=e.duration()>=Tn?s.endTime(!1):e._dur,a,l,c;return Pt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Wt(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},co=function(e,t,n){var r=Ti(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=tn(l.vars.inherit)&&l.parent;o.immediateRender=tn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new yt(t[0],o,t[s+1])},nr=function(e,t){return e||e===0?t(e):t},Io=function(e,t,n){return n<e?e:n>t?t:n},Ht=function(e,t){return!Pt(e)||!(t=eA.exec(e))?"":t[1]},hA=function(e,t,n){return nr(n,function(r){return Io(e,t,r)})},Wc=[].slice,Gm=function(e,t){return e&&ni(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ni(e[0]))&&!e.nodeType&&e!==yn},dA=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Pt(r)&&!t||Gm(r,1)?(s=n).push.apply(s,En(r)):n.push(r)})||n},En=function(e,t,n){return ht&&!t&&ht.selector?ht.selector(e):Pt(e)&&!n&&(zc||!Ds())?Wc.call((t||Hu).querySelectorAll(e),0):Wt(e)?dA(e,n):Gm(e)?Wc.call(e,0):e?[e]:[]},Xc=function(e){return e=En(e)[0]||Na("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return En(t,n.querySelectorAll?n:n===e?Na("Invalid scope")||Hu.createElement("div"):e)}},Vm=function(e){return e.sort(function(){return .5-Math.random()})},Wm=function(e){if(dt(e))return e;var t=ni(e)?e:{each:e},n=Cr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return Pt(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(h,d,g){var _=(g||t).length,m=o[_],p,M,x,v,S,R,b,C,y;if(!m){if(y=t.grid==="auto"?0:(t.grid||[1,Tn])[1],!y){for(b=-Tn;b<(b=g[y++].getBoundingClientRect().left)&&y<_;);y--}for(m=o[_]=[],p=l?Math.min(y,_)*u-.5:r%y,M=y===Tn?0:l?_*f/y-.5:r/y|0,b=0,C=Tn,R=0;R<_;R++)x=R%y-p,v=M-(R/y|0),m[R]=S=c?Math.abs(c==="y"?v:x):bm(x*x+v*v),S>b&&(b=S),S<C&&(C=S);r==="random"&&Vm(m),m.max=b-C,m.min=C,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(y>_?_-1:c?c==="y"?_/y:y:Math.max(y,_/y))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Ht(t.amount||t.each)||0,n=n&&_<0?e_(n):n}return _=(m[h]-m.min)/m.max||0,Dt(m.b+(n?n(_):_)*m.v)+m.u}},jc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Dt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Ti(n)?0:Ht(n))}},Xm=function(e,t){var n=Wt(e),r,s;return!n&&ni(e)&&(r=n=e.radius||Tn,e.values?(e=En(e.values),(s=!Ti(e[0]))&&(r*=r)):e=jc(e.increment)),nr(t,n?dt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Tn,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:o,s||u===o||Ti(o)?u:u+Ht(o)}:jc(e))},jm=function(e,t,n,r){return nr(Wt(e)?!t:n===!0?!!(n=0):!r,function(){return Wt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},pA=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},mA=function(e,t){return function(n){return e(parseFloat(n))+(t||Ht(n))}},_A=function(e,t,n){return Ym(e,t,0,1,n)},qm=function(e,t,n){return nr(n,function(r){return e[~~t(r)]})},gA=function i(e,t,n){var r=t-e;return Wt(e)?qm(e,i(0,e.length),t):nr(n,function(s){return(r+(s-e)%r)%r+e})},xA=function i(e,t,n){var r=t-e,s=r*2;return Wt(e)?qm(e,i(0,e.length-1),t):nr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Eo=function(e){for(var t=0,n="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?Cm:kc),n+=e.substr(t,r-t)+jm(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Ym=function(e,t,n,r,s){var o=t-e,a=r-n;return nr(s,function(l){return n+((l-e)/o*a||0)})},vA=function i(e,t,n,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Pt(e),a={},l,c,u,f,h;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(Wt(e)&&!Wt(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(i(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},n=t}else r||(e=Dr(Wt(e)?[]:{},e));if(!u){for(l in t)ju.call(a,e,l,"get",t[l]);s=function(g){return $u(g,a)||(o?e.p:e)}}}return nr(n,s)},Nd=function(e,t,n){var r=e.labels,s=Tn,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},bn=function(e,t,n){var r=e.vars,s=r[t],o=ht,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&qi.length&&Oa(),a&&(ht=a),u=l?s.apply(c,l):s.call(c),ht=o,u},eo=function(e){return Ji(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Vt),e.progress()<1&&bn(e,"onInterrupt"),e},as,Km=[],$m=function(e){if(zu()&&e){e=!e.name&&e.default||e;var t=e.name,n=dt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:To,render:$u,add:ju,kill:NA,modifier:UA,rawVars:0},o={targetTest:0,get:0,getSetter:Ku,aliases:{},register:0};if(Ds(),e!==r){if(hn[t])return;wn(r,wn(Fa(e,s),o)),Dr(r.prototype,Dr(s,Fa(e,o))),hn[r.prop=t]=r,e.targetTest&&(Ta.push(r),Vu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Dm(t,r),e.register&&e.register(on,r,rn)}else e&&Km.push(e)},it=255,to={aqua:[0,it,it],lime:[0,it,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,it],navy:[0,0,128],white:[it,it,it],olive:[128,128,0],yellow:[it,it,0],orange:[it,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[it,0,0],pink:[it,192,203],cyan:[0,it,it],transparent:[it,it,it,0]},sc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*it+.5|0},Zm=function(e,t,n){var r=e?Ti(e)?[e>>16,e>>8&it,e&it]:0:to.black,s,o,a,l,c,u,f,h,d,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),to[e])r=to[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&it,r&it,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&it,e&it]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(kc),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=sc(l+1/3,s,o),r[1]=sc(l,s,o),r[2]=sc(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(wm),n&&r.length<4&&(r[3]=1),r}else r=e.match(kc)||to.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/it,o=r[1]/it,a=r[2]/it,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Jm=function(e){var t=[],n=[],r=-1;return e.split(Yi).forEach(function(s){var o=s.match(os)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},Od=function(e,t,n){var r="",s=(e+r).match(Yi),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=Zm(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Jm(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Yi,"1").split(os),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Yi),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},Yi=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in to)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),yA=/hsl[a]?\(/,Qm=function(e){var t=e.join(" "),n;if(Yi.lastIndex=0,Yi.test(t))return n=yA.test(t),e[1]=Od(e[1],n),e[0]=Od(e[0],n,Jm(e[1])),!0},bo,dn=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,g=function _(m){var p=i()-r,M=m===!0,x,v,S,R;if(p>e&&(n+=p-t),r+=p,S=r-n,x=S-o,(x>0||M)&&(R=++f.frame,h=S-f.time*1e3,f.time=S=S/1e3,o+=x+(x>=s?4:s-x),v=1),M||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](S,h,R,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Pm&&(!zc&&zu()&&(yn=zc=window,Hu=yn.document||{},mn.gsap=on,(yn.gsapVersions||(yn.gsapVersions=[])).push(on.version),Lm(Ua||yn.GreenSockGlobals||!yn.gsap&&yn||{}),u=yn.requestAnimationFrame,Km.forEach($m)),l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},bo=1,g(2))},sleep:function(){(u?yn.cancelAnimationFrame:clearTimeout)(l),bo=0,c=To},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,M){var x=p?function(v,S,R,b){m(v,S,R,b),f.remove(x)}:m;return f.remove(m),a[M?"unshift":"push"](x),Ds(),x},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f}(),Ds=function(){return!bo&&dn.wake()},Ke={},MA=/^[\d.\-M][\d.\-,\s]/,SA=/["']/g,TA=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(SA,"").trim():+c,r=l.substr(a+1).trim();return t},EA=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},bA=function(e){var t=(e+"").split("("),n=Ke[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[TA(t[1])]:EA(e).split(",").map(Om)):Ke._CE&&MA.test(e)?Ke._CE("",e):n},e_=function(e){return function(t){return 1-e(1-t)}},t_=function i(e,t){for(var n=e._first,r;n;)n instanceof Qt?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},Cr=function(e,t){return e&&(dt(e)?e:Ke[e]||bA(e))||t},Ur=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return nn(e,function(a){Ke[a]=mn[a]=s,Ke[o=a.toLowerCase()]=n;for(var l in s)Ke[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ke[a+"."+l]=s[l]}),s},n_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},oc=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Bc*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*Qb((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:n_(a);return s=Bc/s,l.config=function(c,u){return i(e,c,u)},l},ac=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:n_(n);return r.config=function(s){return i(e,s)},r};nn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Ur(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ke.Linear.easeNone=Ke.none=Ke.Linear.easeIn;Ur("Elastic",oc("in"),oc("out"),oc());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};Ur("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ur("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});Ur("Circ",function(i){return-(bm(1-i*i)-1)});Ur("Sine",function(i){return i===1?1:-Jb(i*$b)+1});Ur("Back",ac("in"),ac("out"),ac());Ke.SteppedEase=Ke.steps=mn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-rt;return function(a){return((r*Io(0,o,a)|0)+s)*n}}};Cs.ease=Ke["quad.out"];nn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Wu+=i+","+i+"Params,"});var i_=function(e,t){this.id=Zb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Um,this.set=t?t.getSetter:Ku},Ao=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ls(this,+t.duration,1,1),this.data=t.data,ht&&(this._ctx=ht,ht.data.push(this)),bo||dn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ls(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Ds(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ol(this,n),!s._dp||s.parent||km(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&$n(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===rt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Nm(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Id(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Id(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Ps(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-rt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Ba(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-rt?0:this._rts,this.totalTime(Io(-Math.abs(this._delay),this._tDur,r),!0),sl(this),oA(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ds(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==rt&&(this._tTime-=rt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&$n(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(tn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ba(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=nA);var r=Vt;return Vt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Vt=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(r._ts||1),r=r._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ud(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Ud(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(xn(this,n),tn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,tn(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-rt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-rt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-rt)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this;return new Promise(function(s){var o=dt(n)?n:Fm,a=function(){var c=r.then;r.then=null,dt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){eo(this)},i}();wn(Ao.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-rt,_prom:0,_ps:!1,_rts:1});var Qt=function(i){Em(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=tn(n.sortChildren),lt&&$n(n.parent||lt,mi(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&zm(mi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return co(0,arguments,this),this},t.from=function(r,s,o){return co(1,arguments,this),this},t.fromTo=function(r,s,o,a){return co(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,lo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new yt(r,s,xn(this,o),1),this},t.call=function(r,s,o){return $n(this,yt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new yt(r,o,xn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,lo(o).immediateRender=tn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,lo(a).immediateRender=tn(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Dt(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,g,_,m,p,M,x,v,S,R,b;if(this!==lt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,v=this._start,x=this._ts,p=!x,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(R=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=Dt(u%m),u===l?(_=this._repeat,h=c):(_=~~(u/m),_&&_===u/m&&(h=c,_--),h>c&&(h=c)),S=Ps(this._tTime,m),!a&&this._tTime&&S!==_&&this._tTime-S*m-this._dur<=0&&(S=_),R&&_&1&&(h=c-h,b=1),_!==S&&!this._lock){var C=R&&S&1,y=C===(R&&_&1);if(_<S&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(b?0:Dt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&bn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;t_(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=uA(this,Dt(a),Dt(h)),M&&(u-=h-(h=M._start))),this._tTime=u,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&!s&&!_&&(bn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=-rt);break}}d=g}else{d=this._last;for(var A=r<0?r:h;d;){if(g=d._prev,(d._act||A<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(A-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(A-d._start)*d._ts,s,o||Vt&&(d._initted||d._startAt)),h!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=A?-rt:rt);break}}d=g}}if(M&&!s&&(this.pause(),M.render(h>=a?0:-rt)._zTime=h>=a?1:-1,this._ts))return this._start=v,sl(this),this.render(r,s,o);this._onUpdate&&!s&&bn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ji(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(bn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Ti(s)||(s=xn(this,s,r)),!(r instanceof Ao)){if(Wt(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Pt(r))return this.addLabel(r,s);if(dt(r))r=yt.delayedCall(0,r);else return this}return this!==r?$n(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Tn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof yt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Pt(r)?this.removeLabel(r):dt(r)?this.killTweensOf(r):(rl(this,r),r===this._recent&&(this._recent=this._last),Rr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Dt(dn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=xn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=yt.delayedCall(0,s||To,o);return a.data="isPause",this._hasPause=1,$n(this,a,xn(this,r))},t.removePause=function(r){var s=this._first;for(r=xn(this,r);s;)s._start===r&&s.data==="isPause"&&Ji(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)ki!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=En(r),l=this._first,c=Ti(s),u;l;)l instanceof yt?iA(l._targets,a)&&(c?(!ki||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=xn(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=yt.to(o,wn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||rt,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Ls(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,wn({startAt:{time:xn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Nd(this,xn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Nd(this,xn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+rt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Rr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Rr(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Tn,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,$n(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ls(o,o===lt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(lt._ts&&(Nm(lt,Ba(r,lt)),Im=dn.frame),dn.frame>=Ld){Ld+=pn.autoSleep||120;var s=lt._first;if((!s||!s._ts)&&pn.autoSleep&&dn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||dn.sleep()}}},e}(Ao);wn(Qt.prototype,{_lock:0,_hasPause:0,_forcing:0});var AA=function(e,t,n,r,s,o,a){var l=new rn(this._pt,e,t,0,1,c_,null,s),c=0,u=0,f,h,d,g,_,m,p,M;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=Eo(r)),o&&(M=[n,r],o(M,e,t),n=M[0],r=M[1]),h=n.match(ic)||[];f=ic.exec(r);)g=f[0],_=r.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?ps(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=ic.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Rm.test(r)||p)&&(l.e=0),this._pt=l,l},ju=function(e,t,n,r,s,o,a,l,c,u){dt(r)&&(r=r(s||0,e,o));var f=e[t],h=n!=="get"?n:dt(f)?c?e[t.indexOf("set")||!dt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=dt(f)?c?LA:a_:Yu,g;if(Pt(r)&&(~r.indexOf("random(")&&(r=Eo(r)),r.charAt(1)==="="&&(g=ps(h,r)+(Ht(h)||0),(g||g===0)&&(r=g))),!u||h!==r||qc)return!isNaN(h*r)&&r!==""?(g=new rn(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?IA:l_,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&Gu(t,r),AA.call(this,e,t,h,r,d,l||pn.stringFilter,c))},wA=function(e,t,n,r,s){if(dt(e)&&(e=uo(e,s,t,n,r)),!ni(e)||e.style&&e.nodeType||Wt(e)||Am(e))return Pt(e)?uo(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=uo(e[a],s,t,n,r);return o},r_=function(e,t,n,r,s,o){var a,l,c,u;if(hn[e]&&(a=new hn[e]).init(s,a.rawVars?t[e]:wA(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new rn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==as))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},ki,qc,qu=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.onUpdateParams,f=r.callbackScope,h=r.runBackwards,d=r.yoyoEase,g=r.keyframes,_=r.autoRevert,m=e._dur,p=e._startAt,M=e._targets,x=e.parent,v=x&&x.data==="nested"?x.vars.targets:M,S=e._overwrite==="auto"&&!Bu,R=e.timeline,b,C,y,A,z,Z,O,F,B,G,H,V,le;if(R&&(!g||!s)&&(s="none"),e._ease=Cr(s,Cs.ease),e._yEase=d?e_(Cr(d===!0?s:d,Cs.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!R&&!!r.runBackwards,!R||g&&!r.stagger){if(F=M[0]?wr(M[0]).harness:0,V=F&&r[F.prop],b=Fa(r,Vu),p&&(p._zTime<0&&p.progress(1),t<0&&h&&a&&!_?p.render(-1,!0):p.revert(h&&m?Sa:tA),p._lazy=0),o){if(Ji(e._startAt=yt.set(M,wn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!p&&tn(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:f,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Vt||!a&&!_)&&e._startAt.revert(Sa),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&m&&!p){if(t&&(a=!1),y=wn({overwrite:!1,data:"isFromStart",lazy:a&&!p&&tn(l),immediateRender:a,stagger:0,parent:x},b),V&&(y[F.prop]=V),Ji(e._startAt=yt.set(M,y)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Vt?e._startAt.revert(Sa):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,rt,rt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&tn(l)||l&&!m,C=0;C<M.length;C++){if(z=M[C],O=z._gsap||Xu(M)[C]._gsap,e._ptLookup[C]=G={},Hc[O.id]&&qi.length&&Oa(),H=v===M?C:v.indexOf(z),F&&(B=new F).init(z,V||b,e,H,v)!==!1&&(e._pt=A=new rn(e._pt,z,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(ee){G[ee]=A}),B.priority&&(Z=1)),!F||V)for(y in b)hn[y]&&(B=r_(y,b,e,H,z,v))?B.priority&&(Z=1):G[y]=A=ju.call(e,z,y,"get",b[y],H,v,0,r.stringFilter);e._op&&e._op[C]&&e.kill(z,e._op[C]),S&&e._pt&&(ki=e,lt.killTweensOf(z,G,e.globalTime(t)),le=!e.parent,ki=0),e._pt&&l&&(Hc[O.id]=1)}Z&&u_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!le,g&&t<=0&&R.render(Tn,!0,!0)},RA=function(e,t,n,r,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,f,h;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(c=f[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return qc=1,e.vars[t]="+=0",qu(e,a),qc=0,1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=_t(n)+Ht(u.e)),u.b&&(u.b=c.s+Ht(u.b))},CA=function(e,t){var n=e[0]?wr(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=Dr({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},PA=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(Wt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},uo=function(e,t,n,r,s){return dt(e)?e.call(t,n,r,s):Pt(e)&&~e.indexOf("random(")?Eo(e):e},s_=Wu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",o_={};nn(s_+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return o_[i]=1});var yt=function(i){Em(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:lo(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,M=r.parent||lt,x=(Wt(n)||Am(n)?Ti(n[0]):"length"in r)?[n]:En(n),v,S,R,b,C,y,A,z;if(a._targets=x.length?Xu(x):Na("GSAP target "+n+" not found. https://greensock.com",!pn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||ma(c)||ma(u)){if(r=a.vars,v=a.timeline=new Qt({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:x}),v.kill(),v.parent=v._dp=mi(a),v._start=0,h||ma(c)||ma(u)){if(b=x.length,A=h&&Wm(h),ni(h))for(C in h)~s_.indexOf(C)&&(z||(z={}),z[C]=h[C]);for(S=0;S<b;S++)R=Fa(r,o_),R.stagger=0,p&&(R.yoyoEase=p),z&&Dr(R,z),y=x[S],R.duration=+uo(c,mi(a),S,y,x),R.delay=(+uo(u,mi(a),S,y,x)||0)-a._delay,!h&&b===1&&R.delay&&(a._delay=u=R.delay,a._start+=u,R.delay=0),v.to(y,R,A?A(S,y,x):0),v._ease=Ke.none;v.duration()?c=u=0:a.timeline=0}else if(g){lo(wn(v.vars.defaults,{ease:"none"})),v._ease=Cr(g.ease||r.ease||"none");var Z=0,O,F,B;if(Wt(g))g.forEach(function(G){return v.to(x,G,">")}),v.duration();else{R={};for(C in g)C==="ease"||C==="easeEach"||PA(C,g[C],R,g.easeEach);for(C in R)for(O=R[C].sort(function(G,H){return G.t-H.t}),Z=0,S=0;S<O.length;S++)F=O[S],B={ease:F.e,duration:(F.t-(S?O[S-1].t:0))/100*c},B[C]=F.v,v.to(x,B,Z),Z+=B.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!Bu&&(ki=mi(a),lt.killTweensOf(x),ki=0),$n(M,mi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!g&&a._start===Dt(M._time)&&tn(f)&&aA(mi(a))&&M.data!=="nested")&&(a._tTime=-rt,a.render(Math.max(0,-u)||0)),m&&zm(mi(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-rt&&!u?l:r<rt?0:r,h,d,g,_,m,p,M,x,v;if(!c)cA(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(h=Dt(f%_),f===l?(g=this._repeat,h=c):(g=~~(f/_),g&&g===f/_&&(h=c,g--),h>c&&(h=c)),p=this._yoyo&&g&1,p&&(v=this._yEase,h=c-h),m=Ps(this._tTime,_),h===a&&!o&&this._initted)return this._tTime=f,this;g!==m&&(x&&this._yEase&&t_(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=o=1,this.render(Dt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Hm(this,u?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(v||this._ease)(h/c),this._from&&(this.ratio=M=1-M),h&&!a&&!s&&!g&&(bn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;x&&x.render(r<0?r:!h&&p?-rt:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Gc(this,r,s,o),bn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&bn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Gc(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Ji(this,1),!s&&!(u&&!a)&&(f||a||p)&&(bn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a){bo||dn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||qu(this,l),c=this._ease(l/this._dur),RA(this,r,s,o,a,c,l)?this.resetTo(r,s,o,a):(ol(this,0),this.parent||Bm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?eo(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ki&&ki.vars.overwrite!==!0)._first||eo(this),this.parent&&o!==this.timeline.totalDuration()&&Ls(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?En(r):a,c=this._ptLookup,u=this._pt,f,h,d,g,_,m,p;if((!s||s==="all")&&sA(a,l))return s==="all"&&(this._pt=0),eo(this);for(f=this._op=this._op||[],s!=="all"&&(Pt(s)&&(_={},nn(s,function(M){return _[M]=1}),s=_),s=CA(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){h=c[p],s==="all"?(f[p]=s,g=h,d={}):(d=f[p]=f[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&rl(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&eo(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return co(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return co(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return lt.killTweensOf(r,s,o)},e}(Ao);wn(yt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});nn("staggerTo,staggerFrom,staggerFromTo",function(i){yt[i]=function(){var e=new Qt,t=Wc.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Yu=function(e,t,n){return e[t]=n},a_=function(e,t,n){return e[t](n)},LA=function(e,t,n,r){return e[t](r.fp,n)},DA=function(e,t,n){return e.setAttribute(t,n)},Ku=function(e,t){return dt(e[t])?a_:ku(e[t])&&e.setAttribute?DA:Yu},l_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},IA=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},c_=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},$u=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},UA=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},NA=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?rl(this,t,"_pt"):t.dep||(n=1),t=r;return!n},OA=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},u_=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},rn=function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||l_,this.d=l||this,this.set=c||Yu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=OA,this.m=n,this.mt=s,this.tween=r},i}();nn(Wu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Vu[i]=1});mn.TweenMax=mn.TweenLite=yt;mn.TimelineLite=mn.TimelineMax=Qt;lt=new Qt({sortChildren:!1,defaults:Cs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});pn.stringFilter=Qm;var Pr=[],Ea={},FA=[],Fd=0,BA=0,lc=function(e){return(Ea[e]||FA).map(function(t){return t()})},Yc=function(){var e=Date.now(),t=[];e-Fd>2&&(lc("matchMediaInit"),Pr.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=yn.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),lc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Fd=e,lc("matchMedia"))},f_=function(){function i(t,n){this.selector=n&&Xc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=BA++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){dt(n)&&(s=r,r=n,n=dt);var o=this,a=function(){var c=ht,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Xc(s)),ht=o,f=r.apply(o,arguments),dt(f)&&o._r.push(f),ht=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===dt?a(o):n?o[n]=a:a},e.ignore=function(n){var r=ht;ht=null,n(this),ht=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof yt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof yt)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),r)for(var a=Pr.length;a--;)Pr[a].id===this.id&&Pr.splice(a,1)},e.revert=function(n){this.kill(n||{})},i}(),kA=function(){function i(t){this.contexts=[],this.scope=t}var e=i.prototype;return e.add=function(n,r,s){ni(n)||(n={matches:n});var o=new f_(0,s||this.scope),a=o.conditions={},l,c,u;ht&&!o.selector&&(o.selector=ht.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=yn.matchMedia(n[c]),l&&(Pr.indexOf(o)<0&&Pr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Yc):l.addEventListener("change",Yc)));return u&&r(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),ka={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return $m(r)})},timeline:function(e){return new Qt(e)},getTweensOf:function(e,t){return lt.getTweensOf(e,t)},getProperty:function(e,t,n,r){Pt(e)&&(e=En(e)[0]);var s=wr(e||{}).get,o=n?Fm:Om;return n==="native"&&(n=""),e&&(t?o((hn[t]&&hn[t].get||s)(e,t,n,r)):function(a,l,c){return o((hn[a]&&hn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=En(e),e.length>1){var r=e.map(function(u){return on.quickSetter(u,t,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=hn[t],a=wr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;as._pt=0,f.init(e,n?u+n:u,as,0,[e]),f.render(1,f),as._pt&&$u(1,as)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=on.to(e,Dr((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return lt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Cr(e.ease,Cs.ease)),Dd(Cs,e||{})},config:function(e){return Dd(pn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!hn[a]&&!mn[a]&&Na(t+" effect requires "+a+" plugin.")}),rc[t]=function(a,l,c){return n(En(a),wn(l||{},s),c)},o&&(Qt.prototype[t]=function(a,l,c){return this.add(rc[t](a,ni(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ke[e]=Cr(t)},parseEase:function(e,t){return arguments.length?Cr(e,t):Ke},getById:function(e){return lt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Qt(e),r,s;for(n.smoothChildTiming=tn(e.smoothChildTiming),lt.remove(n),n._dp=0,n._time=n._tTime=lt._time,r=lt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof yt&&r.vars.onComplete===r._targets[0]))&&$n(n,r,r._start-r._delay),r=s;return $n(lt,n,0),n},context:function(e,t){return e?new f_(e,t):ht},matchMedia:function(e){return new kA(e)},matchMediaRefresh:function(){return Pr.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Yc()},addEventListener:function(e,t){var n=Ea[e]||(Ea[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ea[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:gA,wrapYoyo:xA,distribute:Wm,random:jm,snap:Xm,normalize:_A,getUnit:Ht,clamp:hA,splitColor:Zm,toArray:En,selector:Xc,mapRange:Ym,pipe:pA,unitize:mA,interpolate:vA,shuffle:Vm},install:Lm,effects:rc,ticker:dn,updateRoot:Qt.updateRoot,plugins:hn,globalTimeline:lt,core:{PropTween:rn,globals:Dm,Tween:yt,Timeline:Qt,Animation:Ao,getCache:wr,_removeLinkedListItem:rl,reverting:function(){return Vt},context:function(e){return e&&ht&&(ht.data.push(e),e._ctx=ht),ht},suppressOverwrites:function(e){return Bu=e}}};nn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return ka[i]=yt[i]});dn.add(Qt.updateRoot);as=ka.to({},{duration:0});var zA=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},HA=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=zA(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},cc=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Pt(s)&&(l={},nn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}HA(a,s)}}}},on=ka.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Vt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},cc("roundProps",jc),cc("modifiers"),cc("snap",Xm))||ka;yt.version=Qt.version=on.version="3.12.2";Pm=1;zu()&&Ds();Ke.Power0;Ke.Power1;Ke.Power2;Ke.Power3;Ke.Power4;Ke.Linear;Ke.Quad;Ke.Cubic;Ke.Quart;Ke.Quint;Ke.Strong;Ke.Elastic;Ke.Back;Ke.SteppedEase;Ke.Bounce;Ke.Sine;Ke.Expo;Ke.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Bd,zi,ms,Zu,vr,kd,Ju,GA=function(){return typeof window<"u"},Ei={},mr=180/Math.PI,_s=Math.PI/180,ns=Math.atan2,zd=1e8,Qu=/([A-Z])/g,VA=/(left|right|width|margin|padding|x)/i,WA=/[\s,\(]\S/,Jn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Kc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},XA=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},jA=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},qA=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},h_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},d_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},YA=function(e,t,n){return e.style[t]=n},KA=function(e,t,n){return e.style.setProperty(t,n)},$A=function(e,t,n){return e._gsap[t]=n},ZA=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},JA=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},QA=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},ct="transform",Gn=ct+"Origin",ew=function i(e,t){var n=this,r=this.target,s=r.style;if(e in Ei&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Jn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=gi(r,o)}):this.tfm[e]=r._gsap.x?r._gsap[e]:gi(r,e);else return Jn.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(ct)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Gn,t,"")),e=ct}(s||t)&&this.props.push(e,t,s[e])},p_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},tw=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Qu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Ju(),(!s||!s.isStart)&&!n[ct]&&(p_(n),r.uncache=1)}},m_=function(e,t){var n={target:e,props:[],revert:tw,save:ew};return e._gsap||on.core.getCache(e),t&&t.split(",").forEach(function(r){return n.save(r)}),n},__,$c=function(e,t){var n=zi.createElementNS?zi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):zi.createElement(e);return n.style?n:zi.createElement(e)},ei=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Qu,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Is(t)||t,1)||""},Hd="O,Moz,ms,Ms,Webkit".split(","),Is=function(e,t,n){var r=t||vr,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Hd[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Hd[o]:"")+e},Zc=function(){GA()&&window.document&&(Bd=window,zi=Bd.document,ms=zi.documentElement,vr=$c("div")||{style:{}},$c("div"),ct=Is(ct),Gn=ct+"Origin",vr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",__=!!Is("perspective"),Ju=on.core.reverting,Zu=1)},uc=function i(e){var t=$c("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(ms.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),ms.removeChild(t),this.style.cssText=s,o},Gd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},g_=function(e){var t;try{t=e.getBBox()}catch{t=uc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===uc||(t=uc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Gd(e,["x","cx","x1"])||0,y:+Gd(e,["y","cy","y1"])||0,width:0,height:0}:t},x_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&g_(e))},wo=function(e,t){if(t){var n=e.style;t in Ei&&t!==Gn&&(t=ct),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Qu,"-$1").toLowerCase())):n.removeAttribute(t)}},Hi=function(e,t,n,r,s,o){var a=new rn(e._pt,t,n,0,1,o?d_:h_);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},Vd={deg:1,rad:1,turn:1},nw={grid:1,flex:1},Qi=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=vr.style,l=VA.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",g,_,m,p;return r===o||!s||Vd[r]||Vd[o]?s:(o!=="px"&&!h&&(s=i(e,t,n,"px")),p=e.getCTM&&x_(e),(d||o==="%")&&(Ei[t]||~t.indexOf("adius"))?(g=p?e.getBBox()[l?"width":"height"]:e[u],_t(d?s/g*f:s/100*g)):(a[l?"width":"height"]=f+(h?o:r),_=~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===zi||!_.appendChild)&&(_=zi.body),m=_._gsap,m&&d&&m.width&&l&&m.time===dn.time&&!m.uncache?_t(s/m.width*f):((d||o==="%")&&!nw[ei(_,"display")]&&(a.position=ei(e,"position")),_===e&&(a.position="static"),_.appendChild(vr),g=vr[u],_.removeChild(vr),a.position="absolute",l&&d&&(m=wr(_),m.time=dn.time,m.width=_[u]),_t(h?g*s/f:g&&s?f/g*s:0))))},gi=function(e,t,n,r){var s;return Zu||Zc(),t in Jn&&t!=="transform"&&(t=Jn[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ei[t]&&t!=="transform"?(s=Co(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ha(ei(e,Gn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=za[t]&&za[t](e,t,n)||ei(e,t)||Um(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Qi(e,t,s,n)+n:s},iw=function(e,t,n,r){if(!n||n==="none"){var s=Is(t,e,1),o=s&&ei(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=ei(e,"borderTopColor"))}var a=new rn(this._pt,e.style,t,0,1,c_),l=0,c=0,u,f,h,d,g,_,m,p,M,x,v,S;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(e.style[t]=r,r=ei(e,t)||r,e.style[t]=n),u=[n,r],Qm(u),n=u[0],r=u[1],h=n.match(os)||[],S=r.match(os)||[],S.length){for(;f=os.exec(r);)m=f[0],M=r.substring(l,f.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=ps(d,m)+v),p=parseFloat(m),x=m.substr((p+"").length),l=os.lastIndex-x.length,x||(x=x||pn.units[t]||v,l===r.length&&(r+=x,a.e+=x)),v!==x&&(d=Qi(e,t,_,x)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?d_:h_;return Rm.test(r)&&(a.e=0),this._pt=a,a},Wd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},rw=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Wd[n]||n,t[1]=Wd[r]||r,t.join(" ")},sw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ei[a]&&(l=1,a=a==="transformOrigin"?Gn:ct),wo(n,a);l&&(wo(n,ct),o&&(o.svg&&n.removeAttribute("transform"),Co(n,1),o.uncache=1,p_(r)))}},za={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new rn(e._pt,t,n,0,0,sw);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},Ro=[1,0,0,1,0,0],v_={},y_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Xd=function(e){var t=ei(e,ct);return y_(t)?Ro:t.substr(7).match(wm).map(_t)},ef=function(e,t){var n=e._gsap||wr(e),r=e.style,s=Xd(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ro:s):(s===Ro&&!e.offsetParent&&e!==ms&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,ms.appendChild(e)),s=Xd(e),l?r.display=l:wo(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ms.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Jc=function(e,t,n,r,s,o){var a=e._gsap,l=s||ef(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],M=l[5],x=t.split(" "),v=parseFloat(x[0])||0,S=parseFloat(x[1])||0,R,b,C,y;n?l!==Ro&&(b=d*m-g*_)&&(C=v*(m/b)+S*(-_/b)+(_*M-m*p)/b,y=v*(-g/b)+S*(d/b)-(d*M-g*p)/b,v=C,S=y):(R=g_(e),v=R.x+(~x[0].indexOf("%")?v/100*R.width:v),S=R.y+(~(x[1]||x[0]).indexOf("%")?S/100*R.height:S)),r||r!==!1&&a.smooth?(p=v-c,M=S-u,a.xOffset=f+(p*d+M*_)-p,a.yOffset=h+(p*g+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=S,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[Gn]="0px 0px",o&&(Hi(o,a,"xOrigin",c,v),Hi(o,a,"yOrigin",u,S),Hi(o,a,"xOffset",f,a.xOffset),Hi(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+S)},Co=function(e,t){var n=e._gsap||new i_(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=ei(e,Gn)||"0",u,f,h,d,g,_,m,p,M,x,v,S,R,b,C,y,A,z,Z,O,F,B,G,H,V,le,ee,X,W,me,ge,Te;return u=f=h=_=m=p=M=x=v=0,d=g=1,n.svg=!!(e.getCTM&&x_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[ct]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ct]!=="none"?l[ct]:"")),r.scale=r.rotate=r.translate="none"),b=ef(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),Jc(e,H||c,!!H||n.originIsAbsolute,n.smooth!==!1,b)),S=n.xOrigin||0,R=n.yOrigin||0,b!==Ro&&(z=b[0],Z=b[1],O=b[2],F=b[3],u=B=b[4],f=G=b[5],b.length===6?(d=Math.sqrt(z*z+Z*Z),g=Math.sqrt(F*F+O*O),_=z||Z?ns(Z,z)*mr:0,M=O||F?ns(O,F)*mr+_:0,M&&(g*=Math.abs(Math.cos(M*_s))),n.svg&&(u-=S-(S*z+R*O),f-=R-(S*Z+R*F))):(Te=b[6],me=b[7],ee=b[8],X=b[9],W=b[10],ge=b[11],u=b[12],f=b[13],h=b[14],C=ns(Te,W),m=C*mr,C&&(y=Math.cos(-C),A=Math.sin(-C),H=B*y+ee*A,V=G*y+X*A,le=Te*y+W*A,ee=B*-A+ee*y,X=G*-A+X*y,W=Te*-A+W*y,ge=me*-A+ge*y,B=H,G=V,Te=le),C=ns(-O,W),p=C*mr,C&&(y=Math.cos(-C),A=Math.sin(-C),H=z*y-ee*A,V=Z*y-X*A,le=O*y-W*A,ge=F*A+ge*y,z=H,Z=V,O=le),C=ns(Z,z),_=C*mr,C&&(y=Math.cos(C),A=Math.sin(C),H=z*y+Z*A,V=B*y+G*A,Z=Z*y-z*A,G=G*y-B*A,z=H,B=V),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=_t(Math.sqrt(z*z+Z*Z+O*O)),g=_t(Math.sqrt(G*G+Te*Te)),C=ns(B,G),M=Math.abs(C)>2e-4?C*mr:0,v=ge?1/(ge<0?-ge:ge):0),n.svg&&(H=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!y_(ei(e,ct)),H&&e.setAttribute("transform",H))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=_t(d),n.scaleY=_t(g),n.rotation=_t(_)+a,n.rotationX=_t(m)+a,n.rotationY=_t(p)+a,n.skewX=M+a,n.skewY=x+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(r[Gn]=Ha(c)),n.xOffset=n.yOffset=0,n.force3D=pn.force3D,n.renderTransform=n.svg?aw:__?M_:ow,n.uncache=0,n},Ha=function(e){return(e=e.split(" "))[0]+" "+e[1]},fc=function(e,t,n){var r=Ht(t);return _t(parseFloat(t)+parseFloat(Qi(e,"x",n+"px",r)))+r},ow=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,M_(e,t)},hr="0deg",$s="0px",dr=") ",M_=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,x=n.zOrigin,v="",S=p==="auto"&&e&&e!==1||p===!0;if(x&&(f!==hr||u!==hr)){var R=parseFloat(u)*_s,b=Math.sin(R),C=Math.cos(R),y;R=parseFloat(f)*_s,y=Math.cos(R),o=fc(M,o,b*y*-x),a=fc(M,a,-Math.sin(R)*-x),l=fc(M,l,C*y*-x+x)}m!==$s&&(v+="perspective("+m+dr),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(S||o!==$s||a!==$s||l!==$s)&&(v+=l!==$s||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+dr),c!==hr&&(v+="rotate("+c+dr),u!==hr&&(v+="rotateY("+u+dr),f!==hr&&(v+="rotateX("+f+dr),(h!==hr||d!==hr)&&(v+="skew("+h+", "+d+dr),(g!==1||_!==1)&&(v+="scale("+g+", "+_+dr),M.style[ct]=v||"translate(0, 0)"},aw=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,x=parseFloat(o),v=parseFloat(a),S,R,b,C,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=_s,c*=_s,S=Math.cos(l)*f,R=Math.sin(l)*f,b=Math.sin(l-c)*-h,C=Math.cos(l-c)*h,c&&(u*=_s,y=Math.tan(c-u),y=Math.sqrt(1+y*y),b*=y,C*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),S*=y,R*=y)),S=_t(S),R=_t(R),b=_t(b),C=_t(C)):(S=f,C=h,R=b=0),(x&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(x=Qi(d,"x",o,"px"),v=Qi(d,"y",a,"px")),(g||_||m||p)&&(x=_t(x+g-(g*S+_*b)+m),v=_t(v+_-(g*R+_*C)+p)),(r||s)&&(y=d.getBBox(),x=_t(x+r/100*y.width),v=_t(v+s/100*y.height)),y="matrix("+S+","+R+","+b+","+C+","+x+","+v+")",d.setAttribute("transform",y),M&&(d.style[ct]=y)},lw=function(e,t,n,r,s){var o=360,a=Pt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?mr:1),c=l-r,u=r+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*zd)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*zd)%o-~~(c/o)*o)),e._pt=h=new rn(e._pt,t,n,r,c,XA),h.e=u,h.u="deg",e._props.push(n),h},jd=function(e,t){for(var n in t)e[n]=t[n];return e},cw=function(e,t,n){var r=jd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[ct]=t,a=Co(n,1),wo(n,ct),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ct],o[ct]=t,a=Co(n,1),o[ct]=c);for(l in Ei)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Ht(c),g=Ht(u),f=d!==g?Qi(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new rn(e._pt,a,l,f,h-f,Kc),e._pt.u=g||0,e._props.push(l));jd(a,r)};nn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});za[e>1?"border"+i:i]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return gi(a,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var S_={name:"css",register:Zc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,d,g,_,m,p,M,x,v,S,R,b,C;Zu||Zc(),this.styles=this.styles||m_(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(hn[_]&&r_(_,t,n,r,e,s)))){if(d=typeof u,g=za[_],d==="function"&&(u=u.call(n,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Eo(u)),g)g(this,e,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Yi.lastIndex=0,Yi.test(c)||(m=Ht(c),p=Ht(u)),p?m!==p&&(c=Qi(e,_,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),C.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,e,s):l[_],Pt(c)&&~c.indexOf("random(")&&(c=Eo(c)),Ht(c+"")||(c+=pn.units[_]||Ht(gi(e,_))||""),(c+"").charAt(1)==="="&&(c=gi(e,_))):c=gi(e,_),h=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),f=parseFloat(u),_ in Jn&&(_==="autoAlpha"&&(h===1&&gi(e,"visibility")==="hidden"&&f&&(h=0),C.push("visibility",0,a.visibility),Hi(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Jn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Ei,x){if(this.styles.save(_),v||(S=e._gsap,S.renderTransform&&!t.parseTransform||Co(e,t.parseTransform),R=t.smoothOrigin!==!1&&S.smooth,v=this._pt=new rn(this._pt,a,ct,0,1,S.renderTransform,S,0,-1),v.dep=1),_==="scale")this._pt=new rn(this._pt,S,"scaleY",S.scaleY,(M?ps(S.scaleY,M+f):f)-S.scaleY||0,Kc),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(Gn,0,a[Gn]),u=rw(u),S.svg?Jc(e,u,0,R,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==S.zOrigin&&Hi(this,S,"zOrigin",S.zOrigin,p),Hi(this,a,_,Ha(c),Ha(u)));continue}else if(_==="svgOrigin"){Jc(e,u,1,R,0,this);continue}else if(_ in v_){lw(this,S,_,h,M?ps(h,M+u):u);continue}else if(_==="smoothOrigin"){Hi(this,S,"smooth",S.smooth,u);continue}else if(_==="force3D"){S[_]=u;continue}else if(_==="transform"){cw(this,u,e);continue}}else _ in a||(_=Is(_)||_);if(x||(f||f===0)&&(h||h===0)&&!WA.test(u)&&_ in a)m=(c+"").substr((h+"").length),f||(f=0),p=Ht(u)||(_ in pn.units?pn.units[_]:m),m!==p&&(h=Qi(e,_,c,p)),this._pt=new rn(this._pt,x?S:a,_,h,(M?ps(h,M+f):f)-h,!x&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?qA:Kc),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=jA);else if(_ in a)iw.call(this,e,_,c,M?M+u:u);else if(_ in e)this.add(e,_,c||e[_],M?M+u:u,r,s);else if(_!=="parseTransform"){Gu(_,u);continue}x||(_ in a?C.push(_,0,a[_]):C.push(_,1,c||e[_])),o.push(_)}}b&&u_(this)},render:function(e,t){if(t.tween._time||!Ju())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:gi,aliases:Jn,getSetter:function(e,t,n){var r=Jn[t];return r&&r.indexOf(",")<0&&(t=r),t in Ei&&t!==Gn&&(e._gsap.x||gi(e,"x"))?n&&kd===n?t==="scale"?ZA:$A:(kd=n||{})&&(t==="scale"?JA:QA):e.style&&!ku(e.style[t])?YA:~t.indexOf("-")?KA:Ku(e,t)},core:{_removeProperty:wo,_getMatrix:ef}};on.utils.checkPrefix=Is;on.core.getStyleSaver=m_;(function(i,e,t,n){var r=nn(i+","+e+","+t,function(s){Ei[s]=1});nn(e,function(s){pn.units[s]="deg",v_[s]=1}),Jn[r[13]]=i+","+e,nn(n,function(s){var o=s.split(":");Jn[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");nn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){pn.units[i]="px"});on.registerPlugin(S_);var T_=on.registerPlugin(S_)||on;T_.core.Tween;const uw=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},fw={__name:"App",setup(i){const e=new RE,t=new Lt(75,window.innerWidth/window.innerHeight,.1,1e3);t.position.set(-3.23,2.98,4.06),t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix();const n=new dm({antialias:!0});n.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(n.domElement),n.outputColorSpace=Ze,n.toneMapping=Fp,n.toneMappingExposure=.8,n.shadowMap.enabled=!0,n.physicallyCorrectLights=!0;const r=new db(t,n.domElement);r.enableDamping=!0;const s=new pb;s.setDecoderPath("./draco/");const o=new _b;o.setDRACOLoader(s),new Kb().load("./textures/sky.hdr",p=>{p.mapping=Pa,e.background=p,e.environment=p}),o.load("./model/scene.glb",p=>{const M=p.scene;M.traverse(x=>{x.name=="Plane"&&(x.visible=!1),x.isMesh&&(x.castShadow=!0,x.receiveShadow=!0)}),e.add(M)});const l=new Lu(300,32),c=new il(l,{textureWidth:1024,textureHeight:1024,color:15658751,flowDirection:new Pe(1,1),scale:100});c.rotation.x=-Math.PI/2,c.position.y=-.4,e.add(c);const u=new Mm(16777215,1);u.position.set(0,50,0),e.add(u);const f=new Uc(16777215,20);f.position.set(.1,2.4,0),f.castShadow=!0,e.add(f);const h=new Bi;h.position.set(-7.5,2.5,-.3);let d=3,g=[];for(let p=0;p<3;p++){const M=new tl(.4,.4),x=new Iu().load("./cat.jpg"),v=new Fi({map:x,transparent:!0,side:On}),S=new Gt(M,v);g.push(S),S.position.set(d*Math.cos(p*2*Math.PI/3),Math.cos(p*2*Math.PI/3),d*Math.sin(p*2*Math.PI/3));let R=new Uc(16777215,20);S.add(R),h.add(S)}e.add(h);let _={angle:0};T_.to(_,{angle:Math.PI*2,duration:10,repeat:-1,ease:"linear",onUpdate:()=>{h.rotation.y=_.angle,g.forEach((p,M)=>{p.position.set(d*Math.cos(M*2*Math.PI/3),Math.cos(M*2*Math.PI/3+_.angle*5),d*Math.sin(M*2*Math.PI/3))})}});function m(){requestAnimationFrame(m),n.render(e,t),r.update()}return m(),(p,M)=>(v0(),S0("div"))}},hw=uw(fw,[["__scopeId","data-v-f8ede581"]]);sx(hw).mount("#app");
