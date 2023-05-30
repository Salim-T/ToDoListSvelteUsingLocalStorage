(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function A(){}function Ne(t,e){for(const n in e)t[n]=e[n];return t}function je(t){return t()}function fe(){return Object.create(null)}function C(t){t.forEach(je)}function ie(t){return typeof t=="function"}function K(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ze(t){return Object.keys(t).length===0}function Fe(t,...e){if(t==null)return A;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function h(t,e){t.appendChild(e)}function N(t,e,n){t.insertBefore(e,n||null)}function O(t){t.parentNode&&t.parentNode.removeChild(t)}function Ie(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function S(t){return document.createElement(t)}function W(t){return document.createTextNode(t)}function L(){return W(" ")}function G(){return W("")}function j(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function g(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function He(t){return Array.from(t.childNodes)}function re(t,e){e=""+e,t.data!==e&&(t.data=e)}function X(t,e){t.value=e??""}function ae(t,e,n){t.classList[n?"add":"remove"](e)}function Xe(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const l=document.createEvent("CustomEvent");return l.initCustomEvent(t,n,s,e),l}function V(t,e){return new t(e)}let U;function B(t){U=t}function Z(){if(!U)throw new Error("Function called outside component initialization");return U}function $e(t){Z().$$.on_mount.push(t)}function Ye(t){Z().$$.after_update.push(t)}function We(t){Z().$$.on_destroy.push(t)}function Be(){const t=Z();return(e,n,{cancelable:s=!1}={})=>{const l=t.$$.callbacks[e];if(l){const i=Xe(e,n,{cancelable:s});return l.slice().forEach(u=>{u.call(t,i)}),!i.defaultPrevented}return!0}}function de(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const F=[],_e=[];let H=[];const pe=[],Ae=Promise.resolve();let se=!1;function Ce(){se||(se=!0,Ae.then(xe))}function Te(){return Ce(),Ae}function le(t){H.push(t)}const ne=new Set;let M=0;function xe(){if(M!==0)return;const t=U;do{try{for(;M<F.length;){const e=F[M];M++,B(e),Ue(e.$$)}}catch(e){throw F.length=0,M=0,e}for(B(null),F.length=0,M=0;_e.length;)_e.pop()();for(let e=0;e<H.length;e+=1){const n=H[e];ne.has(n)||(ne.add(n),n())}H.length=0}while(F.length);for(;pe.length;)pe.pop()();se=!1,ne.clear(),B(t)}function Ue(t){if(t.fragment!==null){t.update(),C(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(le)}}function Ke(t){const e=[],n=[];H.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),H=e}const Q=new Set;let q;function oe(){q={r:0,c:[],p:q}}function ce(){q.r||C(q.c),q=q.p}function T(t,e){t&&t.i&&(Q.delete(t),t.i(e))}function R(t,e,n,s){if(t&&t.o){if(Q.has(t))return;Q.add(t),q.c.push(()=>{Q.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function Pe(t,e){const n={},s={},l={$$scope:1};let i=t.length;for(;i--;){const u=t[i],r=e[i];if(r){for(const o in u)o in r||(s[o]=1);for(const o in r)l[o]||(n[o]=r[o],l[o]=1);t[i]=r}else for(const o in u)l[o]=1}for(const u in s)u in n||(n[u]=void 0);return n}function Re(t){return typeof t=="object"&&t!==null?t:{}}const Ge=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...Ge];function Y(t){t&&t.c()}function D(t,e,n,s){const{fragment:l,after_update:i}=t.$$;l&&l.m(e,n),s||le(()=>{const u=t.$$.on_mount.map(je).filter(ie);t.$$.on_destroy?t.$$.on_destroy.push(...u):C(u),t.$$.on_mount=[]}),i.forEach(le)}function J(t,e){const n=t.$$;n.fragment!==null&&(Ke(n.after_update),C(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Qe(t,e){t.$$.dirty[0]===-1&&(F.push(t),Ce(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ee(t,e,n,s,l,i,u,r=[-1]){const o=U;B(t);const c=t.$$={fragment:null,ctx:[],props:i,update:A,not_equal:l,bound:fe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:fe(),dirty:r,skip_bound:!1,root:e.target||o.$$.root};u&&u(c.root);let d=!1;if(c.ctx=n?n(t,e.props||{},(b,k,...f)=>{const p=f.length?f[0]:k;return c.ctx&&l(c.ctx[b],c.ctx[b]=p)&&(!c.skip_bound&&c.bound[b]&&c.bound[b](p),d&&Qe(t,b)),k}):[],c.update(),d=!0,C(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const b=He(e.target);c.fragment&&c.fragment.l(b),b.forEach(O)}else c.fragment&&c.fragment.c();e.intro&&T(t.$$.fragment),D(t,e.target,e.anchor,e.customElement),xe()}B(o)}class te{$destroy(){J(this,1),this.$destroy=A}$on(e,n){if(!ie(n))return A;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const l=s.indexOf(n);l!==-1&&s.splice(l,1)}}$set(e){this.$$set&&!ze(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const z=[];function qe(t,e){return{subscribe:De(t,e).subscribe}}function De(t,e=A){let n;const s=new Set;function l(r){if(K(t,r)&&(t=r,n)){const o=!z.length;for(const c of s)c[1](),z.push(c,t);if(o){for(let c=0;c<z.length;c+=2)z[c][0](z[c+1]);z.length=0}}}function i(r){l(r(t))}function u(r,o=A){const c=[r,o];return s.add(c),s.size===1&&(n=e(l)||A),r(t),()=>{s.delete(c),s.size===0&&n&&(n(),n=null)}}return{set:l,update:i,subscribe:u}}function Je(t,e,n){const s=!Array.isArray(t),l=s?[t]:t,i=e.length<2;return qe(n,u=>{let r=!1;const o=[];let c=0,d=A;const b=()=>{if(c)return;d();const f=e(s?o[0]:o,u);i?u(f):d=ie(f)?f:A},k=l.map((f,p)=>Fe(f,m=>{o[p]=m,c&=~(1<<p),r&&b()},()=>{c|=1<<p}));return r=!0,b(),function(){C(k),d(),r=!1}})}function Ve(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,s,l,i,u=[],r="",o=t.split("/");for(o[0]||o.shift();l=o.shift();)n=l[0],n==="*"?(u.push("wild"),r+="/(.*)"):n===":"?(s=l.indexOf("?",1),i=l.indexOf(".",1),u.push(l.substring(1,~s?s:~i?i:l.length)),r+=~s&&!~i?"(?:/([^/]+?))?":"/([^/]+?)",~i&&(r+=(~s?"?":"")+"\\"+l.substring(i))):r+="/"+l;return{keys:u,pattern:new RegExp("^"+r+(e?"(?=$|/)":"/?$"),"i")}}function Ze(t){let e,n,s;const l=[t[2]];var i=t[0];function u(r){let o={};for(let c=0;c<l.length;c+=1)o=Ne(o,l[c]);return{props:o}}return i&&(e=V(i,u()),e.$on("routeEvent",t[7])),{c(){e&&Y(e.$$.fragment),n=G()},m(r,o){e&&D(e,r,o),N(r,n,o),s=!0},p(r,o){const c=o&4?Pe(l,[Re(r[2])]):{};if(o&1&&i!==(i=r[0])){if(e){oe();const d=e;R(d.$$.fragment,1,0,()=>{J(d,1)}),ce()}i?(e=V(i,u()),e.$on("routeEvent",r[7]),Y(e.$$.fragment),T(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else i&&e.$set(c)},i(r){s||(e&&T(e.$$.fragment,r),s=!0)},o(r){e&&R(e.$$.fragment,r),s=!1},d(r){r&&O(n),e&&J(e,r)}}}function et(t){let e,n,s;const l=[{params:t[1]},t[2]];var i=t[0];function u(r){let o={};for(let c=0;c<l.length;c+=1)o=Ne(o,l[c]);return{props:o}}return i&&(e=V(i,u()),e.$on("routeEvent",t[6])),{c(){e&&Y(e.$$.fragment),n=G()},m(r,o){e&&D(e,r,o),N(r,n,o),s=!0},p(r,o){const c=o&6?Pe(l,[o&2&&{params:r[1]},o&4&&Re(r[2])]):{};if(o&1&&i!==(i=r[0])){if(e){oe();const d=e;R(d.$$.fragment,1,0,()=>{J(d,1)}),ce()}i?(e=V(i,u()),e.$on("routeEvent",r[6]),Y(e.$$.fragment),T(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else i&&e.$set(c)},i(r){s||(e&&T(e.$$.fragment,r),s=!0)},o(r){e&&R(e.$$.fragment,r),s=!1},d(r){r&&O(n),e&&J(e,r)}}}function tt(t){let e,n,s,l;const i=[et,Ze],u=[];function r(o,c){return o[1]?0:1}return e=r(t),n=u[e]=i[e](t),{c(){n.c(),s=G()},m(o,c){u[e].m(o,c),N(o,s,c),l=!0},p(o,[c]){let d=e;e=r(o),e===d?u[e].p(o,c):(oe(),R(u[d],1,1,()=>{u[d]=null}),ce(),n=u[e],n?n.p(o,c):(n=u[e]=i[e](o),n.c()),T(n,1),n.m(s.parentNode,s))},i(o){l||(T(n),l=!0)},o(o){R(n),l=!1},d(o){u[e].d(o),o&&O(s)}}}function he(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let s="";return n>-1&&(s=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:s}}const ue=qe(null,function(e){e(he());const n=()=>{e(he())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}});Je(ue,t=>t.location);Je(ue,t=>t.querystring);const me=De(void 0);async function ge(t){if(!t||t.length<1||t.charAt(0)!="/"&&t.indexOf("#/")!==0)throw Error("Invalid parameter location");await Te(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=(t.charAt(0)=="#"?"":"#")+t}function nt(t){t?window.scrollTo(t.__svelte_spa_router_scrollX,t.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function st(t,e,n){let{routes:s={}}=e,{prefix:l=""}=e,{restoreScrollState:i=!1}=e;class u{constructor(w,v){if(!v||typeof v!="function"&&(typeof v!="object"||v._sveltesparouter!==!0))throw Error("Invalid component object");if(!w||typeof w=="string"&&(w.length<1||w.charAt(0)!="/"&&w.charAt(0)!="*")||typeof w=="object"&&!(w instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:$,keys:I}=Ve(w);this.path=w,typeof v=="object"&&v._sveltesparouter===!0?(this.component=v.component,this.conditions=v.conditions||[],this.userData=v.userData,this.props=v.props||{}):(this.component=()=>Promise.resolve(v),this.conditions=[],this.props={}),this._pattern=$,this._keys=I}match(w){if(l){if(typeof l=="string")if(w.startsWith(l))w=w.substr(l.length)||"/";else return null;else if(l instanceof RegExp){const P=w.match(l);if(P&&P[0])w=w.substr(P[0].length)||"/";else return null}}const v=this._pattern.exec(w);if(v===null)return null;if(this._keys===!1)return v;const $={};let I=0;for(;I<this._keys.length;){try{$[this._keys[I]]=decodeURIComponent(v[I+1]||"")||null}catch{$[this._keys[I]]=null}I++}return $}async checkConditions(w){for(let v=0;v<this.conditions.length;v++)if(!await this.conditions[v](w))return!1;return!0}}const r=[];s instanceof Map?s.forEach((a,w)=>{r.push(new u(w,a))}):Object.keys(s).forEach(a=>{r.push(new u(a,s[a]))});let o=null,c=null,d={};const b=Be();async function k(a,w){await Te(),b(a,w)}let f=null,p=null;i&&(p=a=>{a.state&&(a.state.__svelte_spa_router_scrollY||a.state.__svelte_spa_router_scrollX)?f=a.state:f=null},window.addEventListener("popstate",p),Ye(()=>{nt(f)}));let m=null,_=null;const y=ue.subscribe(async a=>{m=a;let w=0;for(;w<r.length;){const v=r[w].match(a.location);if(!v){w++;continue}const $={route:r[w].path,location:a.location,querystring:a.querystring,userData:r[w].userData,params:v&&typeof v=="object"&&Object.keys(v).length?v:null};if(!await r[w].checkConditions($)){n(0,o=null),_=null,k("conditionsFailed",$);return}k("routeLoading",Object.assign({},$));const I=r[w].component;if(_!=I){I.loading?(n(0,o=I.loading),_=I,n(1,c=I.loadingParams),n(2,d={}),k("routeLoaded",Object.assign({},$,{component:o,name:o.name,params:c}))):(n(0,o=null),_=null);const P=await I();if(a!=m)return;n(0,o=P&&P.default||P),_=I}v&&typeof v=="object"&&Object.keys(v).length?n(1,c=v):n(1,c=null),n(2,d=r[w].props),k("routeLoaded",Object.assign({},$,{component:o,name:o.name,params:c})).then(()=>{me.set(c)});return}n(0,o=null),_=null,me.set(void 0)});We(()=>{y(),p&&window.removeEventListener("popstate",p)});function E(a){de.call(this,t,a)}function x(a){de.call(this,t,a)}return t.$$set=a=>{"routes"in a&&n(3,s=a.routes),"prefix"in a&&n(4,l=a.prefix),"restoreScrollState"in a&&n(5,i=a.restoreScrollState)},t.$$.update=()=>{t.$$.dirty&32&&(history.scrollRestoration=i?"manual":"auto")},[o,c,d,s,l,i,E,x]}class lt extends te{constructor(e){super(),ee(this,e,st,tt,K,{routes:3,prefix:4,restoreScrollState:5})}}function be(t,e,n){const s=t.slice();return s[15]=e[n],s[17]=n,s}function ke(t){let e,n,s,l,i,u,r,o,c,d,b,k=t[0],f=[];for(let p=0;p<k.length;p+=1)f[p]=we(be(t,k,p));return{c(){e=S("div"),n=S("h1"),n.textContent="Lists 🚀",s=L(),l=S("div"),i=L(),u=S("ul");for(let p=0;p<f.length;p+=1)f[p].c();r=L(),o=S("li"),c=S("button"),c.textContent="+ New List",g(n,"class","title-list svelte-nxu2w8"),g(l,"class","line svelte-nxu2w8"),g(c,"class","button-add-list svelte-nxu2w8"),g(o,"class","svelte-nxu2w8"),g(u,"class","svelte-nxu2w8"),g(e,"class","lists svelte-nxu2w8")},m(p,m){N(p,e,m),h(e,n),h(e,s),h(e,l),h(e,i),h(e,u);for(let _=0;_<f.length;_+=1)f[_]&&f[_].m(u,null);h(u,r),h(u,o),h(o,c),d||(b=j(c,"click",t[10]),d=!0)},p(p,m){if(m&97){k=p[0];let _;for(_=0;_<k.length;_+=1){const y=be(p,k,_);f[_]?f[_].p(y,m):(f[_]=we(y),f[_].c(),f[_].m(u,r))}for(;_<f.length;_+=1)f[_].d(1);f.length=k.length}},d(p){p&&O(e),Ie(f,p),d=!1,b()}}}function we(t){let e,n,s=t[15].name+"",l,i,u,r,o,c;function d(){return t[8](t[15])}function b(){return t[9](t[17])}return{c(){e=S("li"),n=S("a"),l=W(s),u=L(),r=S("button"),r.innerHTML='<img src="srcassetsclose.svg" alt="" class="svelte-nxu2w8"/>',g(n,"href",i="/#/list/"+t[15].id),g(n,"class","svelte-nxu2w8"),g(r,"class","svelte-nxu2w8"),g(e,"class","svelte-nxu2w8")},m(k,f){N(k,e,f),h(e,n),h(n,l),h(e,u),h(e,r),o||(c=[j(n,"click",d),j(r,"click",b)],o=!0)},p(k,f){t=k,f&1&&s!==(s=t[15].name+"")&&re(l,s),f&1&&i!==(i="/#/list/"+t[15].id)&&g(n,"href",i)},d(k){k&&O(e),o=!1,C(c)}}}function ye(t){let e,n,s,l,i,u,r,o,c,d,b,k,f,p,m,_,y;return{c(){e=S("div"),n=S("div"),s=L(),l=S("div"),i=S("button"),i.innerHTML='<img src="srcassetsclose.svg" alt="" class="svelte-nxu2w8"/>',u=L(),r=S("h1"),r.textContent="Add a list",o=L(),c=S("div"),d=L(),b=S("label"),b.textContent="Name",k=L(),f=S("input"),p=L(),m=S("button"),m.textContent="Add",g(n,"class","overlay svelte-nxu2w8"),g(i,"class","close-modal svelte-nxu2w8"),g(r,"class","svelte-nxu2w8"),g(c,"class","under-line svelte-nxu2w8"),g(b,"for","name"),g(b,"class","svelte-nxu2w8"),g(f,"class","modal-input svelte-nxu2w8"),g(f,"type","text"),g(m,"class","modal-btn-create-list svelte-nxu2w8"),g(l,"class","modal svelte-nxu2w8"),g(e,"class","modal-container svelte-nxu2w8")},m(E,x){N(E,e,x),h(e,n),h(e,s),h(e,l),h(l,i),h(l,u),h(l,r),h(l,o),h(l,c),h(l,d),h(l,b),h(l,k),h(l,f),X(f,t[1]),h(l,p),h(l,m),_||(y=[j(n,"click",t[11]),j(i,"click",t[12]),j(f,"input",t[13]),j(m,"click",t[4])],_=!0)},p(E,x){x&2&&f.value!==E[1]&&X(f,E[1])},d(E){E&&O(e),_=!1,C(y)}}}function it(t){let e,n,s,l,i,u,r=t[3]&&ke(t),o=t[2]&&ye(t);return{c(){e=S("button"),e.innerHTML='<img src="srcassetslist.svg" alt="List icon" class="svelte-nxu2w8"/>',n=L(),r&&r.c(),s=L(),o&&o.c(),l=G(),g(e,"class","show-lists-icon svelte-nxu2w8")},m(c,d){N(c,e,d),N(c,n,d),r&&r.m(c,d),N(c,s,d),o&&o.m(c,d),N(c,l,d),i||(u=j(e,"click",t[7]),i=!0)},p(c,[d]){c[3]?r?r.p(c,d):(r=ke(c),r.c(),r.m(s.parentNode,s)):r&&(r.d(1),r=null),c[2]?o?o.p(c,d):(o=ye(c),o.c(),o.m(l.parentNode,l)):o&&(o.d(1),o=null)},i:A,o:A,d(c){c&&O(e),c&&O(n),r&&r.d(c),c&&O(s),o&&o.d(c),c&&O(l),i=!1,u()}}}function rt(t,e,n){let s=JSON.parse(localStorage.getItem("lists"))||[],l="",i=!1,u=!0;function r(){window.innerWidth>1250?n(3,u=!0):n(3,u=!1)}window.addEventListener("resize",r);function o(){l===""?alert("Please enter a todo item"):(event.preventDefault(),n(0,s=[...s,{id:s.length+1,name:l}]),n(1,l=""),localStorage.setItem("lists",JSON.stringify(s)),n(2,i=!1))}$e(()=>{const E=localStorage.getItem("lists");E&&n(0,s=JSON.parse(E))});function c(E){n(0,s=s.filter((x,a)=>a!==E)),localStorage.setItem("lists",JSON.stringify(s)),ge("/")}function d(E){ge(`/list/${E}`),setTimeout(()=>{window.location.reload()},10)}const b=()=>n(3,u=!u),k=E=>d(E.id),f=E=>c(E),p=()=>n(2,i=!i),m=()=>n(2,i=!i),_=()=>n(2,i=!i);function y(){l=this.value,n(1,l)}return[s,l,i,u,o,c,d,b,k,f,p,m,_,y]}class Me extends te{constructor(e){super(),ee(this,e,rt,it,K,{})}}function ve(t,e,n){const s=t.slice();return s[22]=e[n],s[23]=e,s[24]=n,s}function Se(t){let e;function n(i,u){return i[1]===!1?ct:ot}let s=n(t),l=s(t);return{c(){l.c(),e=G()},m(i,u){l.m(i,u),N(i,e,u)},p(i,u){s===(s=n(i))&&l?l.p(i,u):(l.d(1),l=s(i),l&&(l.c(),l.m(e.parentNode,e)))},d(i){l.d(i),i&&O(e)}}}function ot(t){let e,n,s,l;return{c(){e=S("form"),n=S("input"),g(n,"class","modifying-list-name svelte-xedi0p"),g(n,"type","text"),g(n,"placeholder","Rename list")},m(i,u){N(i,e,u),h(e,n),X(n,t[0].name),s||(l=[j(n,"input",t[10]),j(e,"submit",t[3])],s=!0)},p(i,u){u&1&&n.value!==i[0].name&&X(n,i[0].name)},d(i){i&&O(e),s=!1,C(l)}}}function ct(t){let e,n,s,l=t[0].name+"",i,u,r;return{c(){e=S("div"),n=S("h1"),s=S("button"),i=W(l),g(s,"class","button-list svelte-xedi0p"),g(e,"class","list-name svelte-xedi0p")},m(o,c){N(o,e,c),h(e,n),h(n,s),h(s,i),u||(r=j(s,"click",t[9]),u=!0)},p(o,c){c&1&&l!==(l=o[0].name+"")&&re(i,l)},d(o){o&&O(e),u=!1,r()}}}function Ee(t){let e,n=t[0].tasks,s=[];for(let i=0;i<n.length;i+=1)s[i]=Oe(ve(t,n,i));let l=null;return n.length||(l=Le()),{c(){e=S("ul");for(let i=0;i<s.length;i+=1)s[i].c();l&&l.c(),g(e,"class","task-list svelte-xedi0p")},m(i,u){N(i,e,u);for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(e,null);l&&l.m(e,null)},p(i,u){if(u&97){n=i[0].tasks;let r;for(r=0;r<n.length;r+=1){const o=ve(i,n,r);s[r]?s[r].p(o,u):(s[r]=Oe(o),s[r].c(),s[r].m(e,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=n.length,n.length?l&&(l.d(1),l=null):l||(l=Le(),l.c(),l.m(e,null))}},d(i){i&&O(e),Ie(s,i),l&&l.d()}}}function Le(t){let e;return{c(){e=W("Ajouter un item à la liste")},m(n,s){N(n,e,s)},d(n){n&&O(e)}}}function Oe(t){let e,n,s,l=t[22].name+"",i,u,r,o,c,d;function b(){return t[12](t[24])}function k(){t[13].call(n,t[23],t[24])}function f(){return t[14](t[24])}return{c(){e=S("li"),n=S("input"),s=L(),i=W(l),u=L(),r=S("button"),r.innerHTML='<img src="srcassetsclose.svg" alt="" class="svelte-xedi0p"/>',o=L(),g(n,"class","checkbox-round svelte-xedi0p"),g(n,"type","checkbox"),g(r,"class","remove-task svelte-xedi0p"),g(e,"class","task-item svelte-xedi0p"),ae(e,"checked",t[22].completed)},m(p,m){N(p,e,m),h(e,n),n.checked=t[22].completed,h(e,s),h(e,i),h(e,u),h(e,r),h(e,o),c||(d=[j(n,"click",b),j(n,"change",k),j(r,"click",f)],c=!0)},p(p,m){t=p,m&1&&(n.checked=t[22].completed),m&1&&l!==(l=t[22].name+"")&&re(i,l),m&1&&ae(e,"checked",t[22].completed)},d(p){p&&O(e),c=!1,C(d)}}}function ut(t){let e,n,s,l,i,u,r,o,c,d,b,k,f,p;e=new Me({});let m=t[0]&&Se(t),_=t[0]&&t[0].tasks&&Ee(t);return{c(){Y(e.$$.fragment),n=L(),s=S("div"),m&&m.c(),l=L(),i=S("div"),u=L(),r=S("form"),o=S("input"),c=L(),_&&_.c(),d=L(),b=S("button"),b.textContent="Duplicate list",g(i,"class","line svelte-xedi0p"),g(o,"class","list-input svelte-xedi0p"),g(o,"type","text"),g(o,"placeholder","        Add task"),g(b,"class","duplicate-button svelte-xedi0p"),g(s,"class","list svelte-xedi0p")},m(y,E){D(e,y,E),N(y,n,E),N(y,s,E),m&&m.m(s,null),h(s,l),h(s,i),h(s,u),h(s,r),h(r,o),X(o,t[2]),h(s,c),_&&_.m(s,null),h(s,d),h(s,b),k=!0,f||(p=[j(o,"input",t[11]),j(r,"submit",t[4]),j(b,"click",t[7])],f=!0)},p(y,[E]){y[0]?m?m.p(y,E):(m=Se(y),m.c(),m.m(s,l)):m&&(m.d(1),m=null),E&4&&o.value!==y[2]&&X(o,y[2]),y[0]&&y[0].tasks?_?_.p(y,E):(_=Ee(y),_.c(),_.m(s,d)):_&&(_.d(1),_=null)},i(y){k||(T(e.$$.fragment,y),k=!0)},o(y){R(e.$$.fragment,y),k=!1},d(y){J(e,y),y&&O(n),y&&O(s),m&&m.d(),_&&_.d(),f=!1,C(p)}}}function ft(t,e,n){let{params:s}=e,l=JSON.parse(localStorage.getItem("lists"))||[],i,u=!1,r="",o=[];$e(()=>{n(0,i=l.find(a=>a.id===parseInt(s.id)))});function c(){i.name===""?alert("Please enter a list name"):(event.preventDefault(),n(0,i),localStorage.setItem("lists",JSON.stringify(l)),n(1,u=!1))}function d(){if(r==="")alert("Please enter a todo item");else{event.preventDefault(),i.tasks?n(0,i.tasks=[...i.tasks],i):n(0,i.tasks=[],i);const a={id:o.length+1,name:r,completed:!1};i.tasks.push(a),n(2,r=""),localStorage.setItem("lists",JSON.stringify(l)),console.log("liste tasks"+i.tasks)}}function b(a){n(0,i.tasks=i.tasks.filter((w,v)=>v!==a),i),localStorage.setItem("lists",JSON.stringify(l))}function k(a){n(0,i.tasks[a].completed=!i.tasks[a].completed,i),localStorage.setItem("lists",JSON.stringify(l))}function f(){const a={...i},v=l.filter($=>$.name.startsWith(`${i.name} (copie`)).length+1;a.name=`${i.name} (copie ${v})`,a.id=l.length+1,l=[...l,a],localStorage.setItem("lists",JSON.stringify(l)),alert("List duplicated"),setTimeout(()=>{window.location.reload()},10)}const p=()=>n(1,u=!u);function m(){i.name=this.value,n(0,i)}function _(){r=this.value,n(2,r)}const y=a=>k(a);function E(a,w){a[w].completed=this.checked,n(0,i)}const x=a=>b(a);return t.$$set=a=>{"params"in a&&n(8,s=a.params)},[i,u,r,c,d,b,k,f,s,p,m,_,y,E,x]}class at extends te{constructor(e){super(),ee(this,e,ft,ut,K,{params:8})}}function dt(t){let e,n;return e=new lt({props:{routes:{"/":Me,"/list/:id":at}}}),{c(){Y(e.$$.fragment)},m(s,l){D(e,s,l),n=!0},p:A,i(s){n||(T(e.$$.fragment,s),n=!0)},o(s){R(e.$$.fragment,s),n=!1},d(s){J(e,s)}}}class _t extends te{constructor(e){super(),ee(this,e,null,dt,K,{})}}new _t({target:document.getElementById("app")});
