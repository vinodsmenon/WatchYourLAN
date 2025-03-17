(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Se=!1,_e=(e,t)=>e===t,xe=Symbol("solid-track"),U={equals:_e};let ce=de;const I=1,F=2,fe={owned:null,cleanups:null,context:null,owner:null};var h=null;let W=null,ve=null,d=null,g=null,k=null,G=0;function H(e,t){const n=d,l=h,i=e.length===0,s=t===void 0?l:t,o=i?fe:{owned:null,cleanups:null,context:s?s.context:null,owner:s},r=i?e:()=>e(()=>T(()=>O(o)));h=o,d=null;try{return M(r,!0)}finally{d=n,h=l}}function L(e,t){t=t?Object.assign({},U,t):U;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},l=i=>(typeof i=="function"&&(i=i(n.value)),ue(n,i));return[ae.bind(n),l]}function K(e,t,n){const l=Z(e,t,!1,I);B(l)}function Ce(e,t,n){ce=Ie;const l=Z(e,t,!1,I);l.user=!0,k?k.push(l):B(l)}function j(e,t,n){n=n?Object.assign({},U,n):U;const l=Z(e,t,!0,0);return l.observers=null,l.observerSlots=null,l.comparator=n.equals||void 0,B(l),ae.bind(l)}function T(e){if(d===null)return e();const t=d;d=null;try{return e()}finally{d=t}}function Ae(e){Ce(()=>T(e))}function ke(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function ae(){if(this.sources&&this.state)if(this.state===I)B(this);else{const e=g;g=null,M(()=>V(this),!1),g=e}if(d){const e=this.observers?this.observers.length:0;d.sources?(d.sources.push(this),d.sourceSlots.push(e)):(d.sources=[this],d.sourceSlots=[e]),this.observers?(this.observers.push(d),this.observerSlots.push(d.sources.length-1)):(this.observers=[d],this.observerSlots=[d.sources.length-1])}return this.value}function ue(e,t,n){let l=e.value;return(!e.comparator||!e.comparator(l,t))&&(e.value=t,e.observers&&e.observers.length&&M(()=>{for(let i=0;i<e.observers.length;i+=1){const s=e.observers[i],o=W&&W.running;o&&W.disposed.has(s),(o?!s.tState:!s.state)&&(s.pure?g.push(s):k.push(s),s.observers&&he(s)),o||(s.state=I)}if(g.length>1e6)throw g=[],new Error},!1)),t}function B(e){if(!e.fn)return;O(e);const t=G;Ee(e,e.value,t)}function Ee(e,t,n){let l;const i=h,s=d;d=h=e;try{l=e.fn(t)}catch(o){return e.pure&&(e.state=I,e.owned&&e.owned.forEach(O),e.owned=null),e.updatedAt=n+1,be(o)}finally{d=s,h=i}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ue(e,l):e.value=l,e.updatedAt=n)}function Z(e,t,n,l=I,i){const s={fn:e,state:l,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:h?h.context:null,pure:n};return h===null||h!==fe&&(h.owned?h.owned.push(s):h.owned=[s]),s}function R(e){if(e.state===0)return;if(e.state===F)return V(e);if(e.suspense&&T(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<G);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===I)B(e);else if(e.state===F){const l=g;g=null,M(()=>V(e,t[0]),!1),g=l}}function M(e,t){if(g)return e();let n=!1;t||(g=[]),k?n=!0:k=[],G++;try{const l=e();return Ne(n),l}catch(l){n||(k=null),g=null,be(l)}}function Ne(e){if(g&&(de(g),g=null),e)return;const t=k;k=null,t.length&&M(()=>ce(t),!1)}function de(e){for(let t=0;t<e.length;t++)R(e[t])}function Ie(e){let t,n=0;for(t=0;t<e.length;t++){const l=e[t];l.user?e[n++]=l:R(l)}for(t=0;t<n;t++)R(e[t])}function V(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const l=e.sources[n];if(l.sources){const i=l.state;i===I?l!==t&&(!l.updatedAt||l.updatedAt<G)&&R(l):i===F&&V(l,t)}}}function he(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=F,n.pure?g.push(n):k.push(n),n.observers&&he(n))}}function O(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),l=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const s=i.pop(),o=n.observerSlots.pop();l<i.length&&(s.sourceSlots[o]=l,i[l]=s,n.observerSlots[l]=o)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)O(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)O(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Te(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function be(e,t=h){throw Te(e)}const De=Symbol("fallback");function ne(e){for(let t=0;t<e.length;t++)e[t]()}function Pe(e,t,n={}){let l=[],i=[],s=[],o=0,r=t.length>1?[]:null;return ke(()=>ne(s)),()=>{let f=e()||[],a=f.length,u,c;return f[xe],T(()=>{let b,_,m,v,A,$,p,w,x;if(a===0)o!==0&&(ne(s),s=[],l=[],i=[],o=0,r&&(r=[])),n.fallback&&(l=[De],i[0]=H(E=>(s[0]=E,n.fallback())),o=1);else if(o===0){for(i=new Array(a),c=0;c<a;c++)l[c]=f[c],i[c]=H(S);o=a}else{for(m=new Array(a),v=new Array(a),r&&(A=new Array(a)),$=0,p=Math.min(o,a);$<p&&l[$]===f[$];$++);for(p=o-1,w=a-1;p>=$&&w>=$&&l[p]===f[w];p--,w--)m[w]=i[p],v[w]=s[p],r&&(A[w]=r[p]);for(b=new Map,_=new Array(w+1),c=w;c>=$;c--)x=f[c],u=b.get(x),_[c]=u===void 0?-1:u,b.set(x,c);for(u=$;u<=p;u++)x=l[u],c=b.get(x),c!==void 0&&c!==-1?(m[c]=i[u],v[c]=s[u],r&&(A[c]=r[u]),c=_[c],b.set(x,c)):s[u]();for(c=$;c<a;c++)c in m?(i[c]=m[c],s[c]=v[c],r&&(r[c]=A[c],r[c](c))):i[c]=H(S);i=i.slice(0,o=a),l=f.slice(0)}return i});function S(b){if(s[c]=b,r){const[_,m]=L(c);return r[c]=m,t(f[c],_)}return t(f[c])}}}function N(e,t){return T(()=>e(t||{}))}const Oe=e=>`Stale read from <${e}>.`;function Le(e){const t="fallback"in e&&{fallback:()=>e.fallback};return j(Pe(()=>e.each,e.children,t||void 0))}function $e(e){const t=e.keyed,n=j(()=>e.when,void 0,void 0),l=t?n:j(n,void 0,{equals:(i,s)=>!i==!s});return j(()=>{const i=l();if(i){const s=e.children;return typeof s=="function"&&s.length>0?T(()=>s(t?i:()=>{if(!T(l))throw Oe("Show");return n()})):s}return e.fallback},void 0,void 0)}function Be(e,t,n){let l=n.length,i=t.length,s=l,o=0,r=0,f=t[i-1].nextSibling,a=null;for(;o<i||r<s;){if(t[o]===n[r]){o++,r++;continue}for(;t[i-1]===n[s-1];)i--,s--;if(i===o){const u=s<l?r?n[r-1].nextSibling:n[s-r]:f;for(;r<s;)e.insertBefore(n[r++],u)}else if(s===r)for(;o<i;)(!a||!a.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[s-1]&&n[r]===t[i-1]){const u=t[--i].nextSibling;e.insertBefore(n[r++],t[o++].nextSibling),e.insertBefore(n[--s],u),t[i]=n[s]}else{if(!a){a=new Map;let c=r;for(;c<s;)a.set(n[c],c++)}const u=a.get(t[o]);if(u!=null)if(r<u&&u<s){let c=o,S=1,b;for(;++c<i&&c<s&&!((b=a.get(t[c]))==null||b!==u+S);)S++;if(S>u-r){const _=t[o];for(;r<u;)e.insertBefore(n[r++],_)}else e.replaceChild(n[r++],t[o++])}else o++;else t[o++].remove()}}}const le="_$DX_DELEGATE";function Me(e,t,n,l={}){let i;return H(s=>{i=s,t===document?e():y(t,e(),t.firstChild?null:void 0,n)},l.owner),()=>{i(),t.textContent=""}}function C(e,t,n,l){let i;const s=()=>{const r=document.createElement("template");return r.innerHTML=e,r.content.firstChild},o=()=>(i||(i=s())).cloneNode(!0);return o.cloneNode=o,o}function z(e,t=window.document){const n=t[le]||(t[le]=new Set);for(let l=0,i=e.length;l<i;l++){const s=e[l];n.has(s)||(n.add(s),t.addEventListener(s,je))}}function He(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function y(e,t,n,l){if(n!==void 0&&!l&&(l=[]),typeof t!="function")return q(e,t,l,n);K(i=>q(e,t(),i,n),l)}function je(e){let t=e.target;const n=`$$${e.type}`,l=e.target,i=e.currentTarget,s=f=>Object.defineProperty(e,"target",{configurable:!0,value:f}),o=()=>{const f=t[n];if(f&&!t.disabled){const a=t[`${n}Data`];if(a!==void 0?f.call(t,a,e):f.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&s(t.host),!0},r=()=>{for(;o()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const f=e.composedPath();s(f[0]);for(let a=0;a<f.length-2&&(t=f[a],!!o());a++){if(t._$host){t=t._$host,r();break}if(t.parentNode===i)break}}else r();s(l)}function q(e,t,n,l,i){for(;typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,o=l!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,s==="string"||s==="number"){if(s==="number"&&(t=t.toString(),t===n))return n;if(o){let r=n[0];r&&r.nodeType===3?r.data!==t&&(r.data=t):r=document.createTextNode(t),n=D(e,n,l,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||s==="boolean")n=D(e,n,l);else{if(s==="function")return K(()=>{let r=t();for(;typeof r=="function";)r=r();n=q(e,r,n,l)}),()=>n;if(Array.isArray(t)){const r=[],f=n&&Array.isArray(n);if(J(r,t,n,i))return K(()=>n=q(e,r,n,l,!0)),()=>n;if(r.length===0){if(n=D(e,n,l),o)return n}else f?n.length===0?ie(e,r,l):Be(e,n,r):(n&&D(e),ie(e,r));n=r}else if(t.nodeType){if(Array.isArray(n)){if(o)return n=D(e,n,l,t);D(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function J(e,t,n,l){let i=!1;for(let s=0,o=t.length;s<o;s++){let r=t[s],f=n&&n[e.length],a;if(!(r==null||r===!0||r===!1))if((a=typeof r)=="object"&&r.nodeType)e.push(r);else if(Array.isArray(r))i=J(e,r,f)||i;else if(a==="function")if(l){for(;typeof r=="function";)r=r();i=J(e,Array.isArray(r)?r:[r],Array.isArray(f)?f:[f])||i}else e.push(r),i=!0;else{const u=String(r);f&&f.nodeType===3&&f.data===u?e.push(f):e.push(document.createTextNode(u))}}return i}function ie(e,t,n=null){for(let l=0,i=t.length;l<i;l++)e.insertBefore(t[l],n)}function D(e,t,n,l){if(n===void 0)return e.textContent="";const i=l||document.createTextNode("");if(t.length){let s=!1;for(let o=t.length-1;o>=0;o--){const r=t[o];if(i!==r){const f=r.parentNode===e;!s&&!o?f?e.replaceChild(i,r):e.insertBefore(i,n):f&&r.remove()}else s=!0}}else e.insertBefore(i,n);return[i]}const ge="",Ue=async()=>{const e=ge+"/api/all";return await(await fetch(e)).json()},se=async(e,t,n)=>{const l=ge+"/api/edit/"+e+"/"+t+"/"+n;return await(await fetch(l)).json()},[pe,Y]=L([]);L();const[we,re]=L(!1);var Fe=C('<i class="bi bi-circle-fill"style=color:var(--bs-gray-500);>'),Ke=C('<i class="bi bi-check-circle-fill"style=color:var(--bs-success);>'),Re=C("<input type=text class=form-control>"),Ve=C('<tr><td class=opacity-50>.</td><td></td><td></td><td><a target=_blank></a></td><td></td><td></td><td></td><td><div class="form-check form-switch"><input class=form-check-input type=checkbox></div></td><td></td><td><i class="bi bi-pencil-square my-btn">');function qe(e){const[t,n]=L(e.host.Name),l="http://"+e.host.IP;let i=Fe();e.host.Now==1&&(i=Ke());let s=!1;e.host.Known==1&&(s=!0);const o=async f=>{n(f),await se(e.host.ID,t(),"")},r=async()=>{await se(e.host.ID,t(),"toggle")};return(()=>{var f=Ve(),a=f.firstChild,u=a.firstChild,c=a.nextSibling,S=c.nextSibling,b=S.nextSibling,_=b.firstChild,m=b.nextSibling,v=m.nextSibling,A=v.nextSibling,$=A.nextSibling,p=$.firstChild,w=p.firstChild,x=$.nextSibling;return y(a,()=>e.index,u),y(c,N($e,{get when(){return we()},get fallback(){return t()},get children(){var E=Re();return E.$$input=Q=>o(Q.target.value),K(()=>E.value=t()),E}})),y(S,()=>e.host.Iface),He(_,"href",l),y(_,()=>e.host.IP),y(m,()=>e.host.Mac),y(v,()=>e.host.Hw),y(A,()=>e.host.Date),w.$$click=r,w.checked=s,y(x,i),f})()}z(["input","click"]);var Ge=C('<button class="btn btn-primary">Edit names'),Qe=C('<div class=row><div class="col-md mt-1 mb-1">'),We=C('<button class="btn btn-outline-primary">Edit names');function Xe(){return(()=>{var e=Qe(),t=e.firstChild;return y(t,N($e,{get when(){return we()},get fallback(){return(()=>{var n=We();return n.$$click=re,n.$$clickData=!0,n})()},get children(){var n=Ge();return n.$$click=re,n.$$clickData=!1,n}})),e})()}z(["click"]);let P=!1,X="Name";function Je(e){e!=X?(X=e,P=!P):(X="",P=!P);let t=pe();e=="IP"?t.sort((n,l)=>Ze(n,l,P)):t.sort((n,l)=>Ye(n,l,e,P)),Y([]),Y(t)}function Ye(e,t,n,l){return e[n]>t[n]?l?1:-1:l?-1:1}function Ze(e,t,n){const l=oe(e),i=oe(t);return n?l-i:i-l}function oe(e){return Number(e.IP.split(".").map(t=>`000${t}`.slice(-3)).join(""))}var ze=C('<thead><tr><th style=width:3em;></th><th>Name <i class="bi bi-sort-down-alt my-btn"></i></th><th>Iface <i class="bi bi-sort-down-alt my-btn"></i></th><th>IP <i class="bi bi-sort-down-alt my-btn"></i></th><th>MAC <i class="bi bi-sort-down-alt my-btn"></i></th><th>Hardware <i class="bi bi-sort-down-alt my-btn"></i></th><th>Date <i class="bi bi-sort-down-alt my-btn"></i></th><th>Known <i class="bi bi-sort-down-alt my-btn"></i></th><th>Online <i class="bi bi-sort-down-alt my-btn"></i></th><th style=width:2em;>');function et(){const e=t=>{Je(t)};return(()=>{var t=ze(),n=t.firstChild,l=n.firstChild,i=l.nextSibling,s=i.firstChild,o=s.nextSibling,r=i.nextSibling,f=r.firstChild,a=f.nextSibling,u=r.nextSibling,c=u.firstChild,S=c.nextSibling,b=u.nextSibling,_=b.firstChild,m=_.nextSibling,v=b.nextSibling,A=v.firstChild,$=A.nextSibling,p=v.nextSibling,w=p.firstChild,x=w.nextSibling,E=p.nextSibling,Q=E.firstChild,ee=Q.nextSibling,ye=E.nextSibling,me=ye.firstChild,te=me.nextSibling;return o.$$click=e,o.$$clickData="Name",a.$$click=e,a.$$clickData="Iface",S.$$click=e,S.$$clickData="IP",m.$$click=e,m.$$clickData="Mac",$.$$click=e,$.$$clickData="Hw",x.$$click=e,x.$$clickData="Date",ee.$$click=e,ee.$$clickData="Known",te.$$click=e,te.$$clickData="Now",t})()}z(["click"]);var tt=C('<div class="card border-primary"><div class=card-header></div><div class="card-body table-responsive"><table class="table table-striped table-hover"><tbody></tbody>');function nt(){return(()=>{var e=tt(),t=e.firstChild,n=t.nextSibling,l=n.firstChild,i=l.firstChild;return y(t,N(Xe,{})),y(l,N(et,{}),i),y(i,N(Le,{get each(){return pe()},children:(s,o)=>N(qe,{host:s,index:o})})),e})()}var lt=C('<div class=container-lg><div class=row><div class="col-md mt-4 mb-4">');function it(){return Ae(async()=>{const e=await Ue();Y(e)}),(()=>{var e=lt(),t=e.firstChild,n=t.firstChild;return y(n,N(nt,{})),e})()}const st=document.getElementById("root");Me(()=>N(it,{}),st);
