(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const _ of r.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&n(_)}).observe(document,{childList:!0,subtree:!0});function l(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=l(s);fetch(s.href,r)}})();function j(){}function ke(e){return e()}function se(){return Object.create(null)}function z(e){e.forEach(ke)}function ve(e){return typeof e=="function"}function ie(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ee(e){return Object.keys(e).length===0}function O(e,t){e.appendChild(t)}function g(e,t,l){e.insertBefore(t,l||null)}function b(e){e.parentNode&&e.parentNode.removeChild(e)}function Y(e,t){for(let l=0;l<e.length;l+=1)e[l]&&e[l].d(t)}function C(e){return document.createElement(e)}function B(e){return document.createTextNode(e)}function S(){return B(" ")}function Oe(){return B("")}function A(e,t,l,n){return e.addEventListener(t,l,n),()=>e.removeEventListener(t,l,n)}function T(e,t,l){l==null?e.removeAttribute(t):e.getAttribute(t)!==l&&e.setAttribute(t,l)}function Le(e){return Array.from(e.childNodes)}function $(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function oe(e,t){e.value=t??""}function D(e,t,l){e.classList[l?"add":"remove"](t)}let V;function K(e){V=e}function Be(){if(!V)throw new Error("Function called outside component initialization");return V}function Ae(e){Be().$$.on_mount.push(e)}const H=[],re=[],U=[],ue=[],Pe=Promise.resolve();let le=!1;function We(){le||(le=!0,Pe.then(Ce))}function ne(e){U.push(e)}const ee=new Set;let q=0;function Ce(){if(q!==0)return;const e=V;do{try{for(;q<H.length;){const t=H[q];q++,K(t),Te(t.$$)}}catch(t){throw H.length=0,q=0,t}for(K(null),H.length=0,q=0;re.length;)re.pop()();for(let t=0;t<U.length;t+=1){const l=U[t];ee.has(l)||(ee.add(l),l())}U.length=0}while(H.length);for(;ue.length;)ue.pop()();le=!1,ee.clear(),K(e)}function Te(e){if(e.fragment!==null){e.update(),z(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ne)}}const X=new Set;let Ze;function Ie(e,t){e&&e.i&&(X.delete(e),e.i(t))}function qe(e,t,l,n){if(e&&e.o){if(X.has(e))return;X.add(e),Ze.c.push(()=>{X.delete(e),n&&(l&&e.d(1),n())}),e.o(t)}else n&&n()}function He(e){e&&e.c()}function Me(e,t,l,n){const{fragment:s,after_update:r}=e.$$;s&&s.m(t,l),n||ne(()=>{const _=e.$$.on_mount.map(ke).filter(ve);e.$$.on_destroy?e.$$.on_destroy.push(..._):z(_),e.$$.on_mount=[]}),r.forEach(ne)}function we(e,t){const l=e.$$;l.fragment!==null&&(z(l.on_destroy),l.fragment&&l.fragment.d(t),l.on_destroy=l.fragment=null,l.ctx=[])}function je(e,t){e.$$.dirty[0]===-1&&(H.push(e),We(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Se(e,t,l,n,s,r,_,d=[-1]){const h=V;K(e);const c=e.$$={fragment:null,ctx:[],props:r,update:j,not_equal:s,bound:se(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:se(),dirty:d,skip_bound:!1,root:t.target||h.$$.root};_&&_(c.root);let k=!1;if(c.ctx=l?l(e,t.props||{},(p,o,...a)=>{const i=a.length?a[0]:o;return c.ctx&&s(c.ctx[p],c.ctx[p]=i)&&(!c.skip_bound&&c.bound[p]&&c.bound[p](i),k&&je(e,p)),o}):[],c.update(),k=!0,z(c.before_update),c.fragment=n?n(c.ctx):!1,t.target){if(t.hydrate){const p=Le(t.target);c.fragment&&c.fragment.l(p),p.forEach(b)}else c.fragment&&c.fragment.c();t.intro&&Ie(e.$$.fragment),Me(e,t.target,t.anchor,t.customElement),Ce()}K(h)}class Ne{$destroy(){we(this,1),this.$destroy=j}$on(t,l){if(!ve(l))return j;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(l),()=>{const s=n.indexOf(l);s!==-1&&n.splice(s,1)}}$set(t){this.$$set&&!Ee(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const te=[{type:"rifle",mode:"relative",name:"Point Strike",stats:[25,50,75,100,125,150],multiplier:1.5,state:{selected:!1,condition:[]},groupId:null},{type:"rifle",mode:"relative",name:"Critical Delay",stats:[33.3,66.7,100,133.3,166.7,200],multiplier:2,state:{selected:!1,condition:[]},groupId:null},{type:"rifle",mode:"relative",name:"Argon Scope",stats:[22.5,45,67.5,90,112.5,135],state:{selected:!1,condition:[{state:!1,multiplier:1.35,description:"On Headshot gain Critical Strike"}]},groupId:"scope"},{type:"rifle",mode:"relative",name:"Galvanized Scope",stats:[],minMultiplier:1.2,maxMultiplier:3.2,state:{selected:!1,condition:[{state:!1,multiplier:1.2,description:"On Headshot gain Critical Strike"},{state:!1,multiplier:2,description:"On Headshot kill gain Critical Strike"}]},groupId:"scope"},{type:"rifle",mode:"relative",name:"Proton Jet",stats:[],state:{selected:!1,condition:[{state:!1,multiplier:1.2,description:"On Wall Latch gain Critical"}]},groupId:null},{type:"shotgun",mode:"relative",name:"Blunderbuss",stats:[],multiplier:.9,state:{selected:!1,condition:[]},groupId:null},{type:"shotgun",mode:"relative",name:"Critical Deceleration",stats:[],multiplier:2,state:{selected:!1,condition:[]},groupId:null},{type:"shotgun",mode:"relative",name:"Laser Sight",stats:[],state:{selected:!1,condition:[{state:!1,description:"On Headshot gain Critical Strike",multiplier:1.2}]},groupId:null},{type:"shotgun",mode:"relative",name:"Motus Setup",stats:[],state:{selected:!1,condition:[{state:!1,description:"On Bullet or Double Jump gain Crit",multiplier:1}]},groupId:null}],J=[{type:"buff",mode:"absolute",name:"Cat's Eye",stats:[15,30,45,60],multiplier:.6,state:{selected:!1,condition:[]},groupId:null}],fe=["rifle","shotgun","pistol","melee","buff"];function ce(e,t,l){const n=e.slice();return n[21]=t[l],n}function ae(e,t,l){const n=e.slice();return n[24]=t[l],n}function de(e,t,l){const n=e.slice();return n[27]=t[l],n[28]=t,n[29]=l,n}function pe(e,t,l){const n=e.slice();return n[30]=t[l],n}function _e(e){let t,l=e[30]+"",n,s,r;function _(){return e[12](e[30])}return{c(){t=C("button"),n=B(l),T(t,"class","svelte-1f0qt8r"),D(t,"active",e[30]===e[0])},m(d,h){g(d,t,h),O(t,n),s||(r=A(t,"click",_),s=!0)},p(d,h){e=d,h[0]&1&&D(t,"active",e[30]===e[0])},d(d){d&&b(t),s=!1,r()}}}function me(e){let t,l=e[27].description+"",n,s,r,_,d;function h(){e[14].call(r,e[28],e[29])}function c(){return e[15](e[27])}return{c(){t=C("label"),n=B(l),s=S(),r=C("input"),T(r,"type","checkbox")},m(k,p){g(k,t,p),O(t,n),O(t,s),O(t,r),r.checked=e[27].state,_||(d=[A(r,"change",h),A(r,"click",c)],_=!0)},p(k,p){e=k,p[0]&16&&l!==(l=e[27].description+"")&&$(n,l),p[0]&16&&(r.checked=e[27].state)},d(k){k&&b(t),_=!1,z(d)}}}function he(e){let t,l=e[27].description&&e[24].state.selected&&me(e);return{c(){l&&l.c(),t=Oe()},m(n,s){l&&l.m(n,s),g(n,t,s)},p(n,s){n[27].description&&n[24].state.selected?l?l.p(n,s):(l=me(n),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null)},d(n){l&&l.d(n),n&&b(t)}}}function be(e){let t,l=e[24].name+"",n,s,r,_,d,h,c,k;function p(){return e[13](e[24])}let o=e[24].state.condition,a=[];for(let i=0;i<o.length;i+=1)a[i]=he(de(e,o,i));return{c(){t=C("button"),n=B(l),s=S();for(let i=0;i<a.length;i+=1)a[i].c();r=S(),_=C("br"),d=S(),h=C("br"),T(t,"class","svelte-1f0qt8r"),D(t,"active",e[24].state.selected)},m(i,y){g(i,t,y),O(t,n),g(i,s,y);for(let v=0;v<a.length;v+=1)a[v].m(i,y);g(i,r,y),g(i,_,y),g(i,d,y),g(i,h,y),c||(k=A(t,"click",p),c=!0)},p(i,y){if(e=i,y[0]&16&&l!==(l=e[24].name+"")&&$(n,l),y[0]&16&&D(t,"active",e[24].state.selected),y[0]&2064){o=e[24].state.condition;let v;for(v=0;v<o.length;v+=1){const P=de(e,o,v);a[v]?a[v].p(P,y):(a[v]=he(P),a[v].c(),a[v].m(r.parentNode,r))}for(;v<a.length;v+=1)a[v].d(1);a.length=o.length}},d(i){i&&b(t),i&&b(s),Y(a,i),i&&b(r),i&&b(_),i&&b(d),i&&b(h),c=!1,k()}}}function ge(e){let t,l=e[21].name+"",n,s,r;function _(){return e[16](e[21])}return{c(){t=C("button"),n=B(l),T(t,"class","svelte-1f0qt8r"),D(t,"active",e[21].state.selected)},m(d,h){g(d,t,h),O(t,n),s||(r=A(t,"click",_),s=!0)},p(d,h){e=d,h[0]&32&&l!==(l=e[21].name+"")&&$(n,l),h[0]&32&&D(t,"active",e[21].state.selected)},d(d){d&&b(t),s=!1,r()}}}function ye(e){let t,l,n,s,r,_,d,h=e[4],c=[];for(let o=0;o<h.length;o+=1)c[o]=be(ae(e,h,o));let k=e[5],p=[];for(let o=0;o<k.length;o+=1)p[o]=ge(ce(e,k,o));return{c(){for(let o=0;o<c.length;o+=1)c[o].c();t=S(),l=C("hr"),n=S();for(let o=0;o<p.length;o+=1)p[o].c();s=S(),r=C("br"),_=S(),d=C("br")},m(o,a){for(let i=0;i<c.length;i+=1)c[i].m(o,a);g(o,t,a),g(o,l,a),g(o,n,a);for(let i=0;i<p.length;i+=1)p[i].m(o,a);g(o,s,a),g(o,r,a),g(o,_,a),g(o,d,a)},p(o,a){if(a[0]&2128){h=o[4];let i;for(i=0;i<h.length;i+=1){const y=ae(o,h,i);c[i]?c[i].p(y,a):(c[i]=be(y),c[i].c(),c[i].m(t.parentNode,t))}for(;i<c.length;i+=1)c[i].d(1);c.length=h.length}if(a[0]&160){k=o[5];let i;for(i=0;i<k.length;i+=1){const y=ce(o,k,i);p[i]?p[i].p(y,a):(p[i]=ge(y),p[i].c(),p[i].m(s.parentNode,s))}for(;i<p.length;i+=1)p[i].d(1);p.length=k.length}},d(o){Y(c,o),o&&b(t),o&&b(l),o&&b(n),Y(p,o),o&&b(s),o&&b(r),o&&b(_),o&&b(d)}}}function De(e){let t,l,n,s,r,_=e[4],d,h,c,k,p,o,a,i,y,v,P,Z,F,W,G,Q,f,E,M=fe,w=[];for(let u=0;u<M.length;u+=1)w[u]=_e(pe(e,M,u));let L=ye(e);return{c(){t=C("h4"),t.textContent="Select Weapon Type",l=S();for(let u=0;u<w.length;u+=1)w[u].c();n=S(),s=C("h4"),s.textContent="Pick your mods",r=S(),L.c(),d=S(),h=C("label"),c=C("input"),k=B(`
	Include Zephyr Crit Bonus`),p=S(),o=C("br"),a=S(),i=C("label"),y=C("input"),v=B(`
	What is your Base line Crit?`),P=S(),Z=C("h4"),Z.textContent="Calculated Crit %",F=S(),W=C("p"),G=B(e[2]),Q=B("%"),T(c,"type","checkbox"),T(y,"type","text")},m(u,m){g(u,t,m),g(u,l,m);for(let I=0;I<w.length;I+=1)w[I].m(u,m);g(u,n,m),g(u,s,m),g(u,r,m),L.m(u,m),g(u,d,m),g(u,h,m),O(h,c),c.checked=e[1],O(h,k),g(u,p,m),g(u,o,m),g(u,a,m),g(u,i,m),O(i,y),oe(y,e[3]),O(i,v),g(u,P,m),g(u,Z,m),g(u,F,m),g(u,W,m),O(W,G),O(W,Q),f||(E=[A(c,"change",e[17]),A(c,"click",e[10]),A(y,"input",e[18]),A(y,"blur",e[9])],f=!0)},p(u,m){if(m[0]&257){M=fe;let I;for(I=0;I<M.length;I+=1){const R=pe(u,M,I);w[I]?w[I].p(R,m):(w[I]=_e(R),w[I].c(),w[I].m(n.parentNode,n))}for(;I<w.length;I+=1)w[I].d(1);w.length=M.length}m[0]&16&&ie(_,_=u[4])?(L.d(1),L=ye(u),L.c(),L.m(d.parentNode,d)):L.p(u,m),m[0]&2&&(c.checked=u[1]),m[0]&8&&y.value!==u[3]&&oe(y,u[3]),m[0]&4&&$(G,u[2])},i:j,o:j,d(u){u&&b(t),u&&b(l),Y(w,u),u&&b(n),u&&b(s),u&&b(r),L.d(u),u&&b(d),u&&b(h),u&&b(p),u&&b(o),u&&b(a),u&&b(i),u&&b(P),u&&b(Z),u&&b(F),u&&b(W),f=!1,z(E)}}}function ze(e){return Math.round((e+Number.EPSILON)*100)/100}function Fe(e,t,l){let{selectedWeapon:n="rifle"}=t,{isZephyr:s=!1}=t,{calculatedCrit:r=0}=t,{baseCrit:_=30}=t,{filteredMods:d=te.filter(f=>f.type===n)}=t;Ae(()=>{a()});function h(){te.map(f=>{f.state.selected=!1}),l(4,d=te.filter(f=>f.type===n)),a()}function c(f){const E=d.findIndex(M=>M.name===f.name);o(f),l(4,d[E].state.selected=!f.state.selected,d),a()}function k(f){const E=J.findIndex(M=>M.name===f.name);l(5,J[E].state.selected=!f.state.selected,J),a()}function p(f){l(0,n=f),h()}function o(f){if(f.groupId&&!f.state.selected&&f.groupId){const E=new Set([f.groupId]);d.forEach(M=>{E.has(M.groupId)&&M.state.selected&&(M.state.selected=!M.state.selected)})}}function a(){l(2,r=0);const f=_/100,E=d.filter(N=>N.state.selected),M=J.filter(N=>N.state.selected),w=E.filter(N=>N.mode==="relative"),L=E.filter(N=>N.mode==="absolute"),u=1;let m=0,I=0;w.map(N=>{N.state.condition.length>0?N.state.condition.map(x=>{x.description&&x.state&&(m=m+x.multiplier)}):m=m+N.multiplier}),L.map(N=>{I=I+N.multiplier}),M.length>0&&M.map(N=>{m=m+N.multiplier}),s&&(m=m+1.5);const R=f*(u+m)+I;l(2,r=ze(R)*100)}function i(){l(1,s=!s),a()}function y(f){f.state=!f.state,a()}const v=f=>p(f),P=f=>c(f);function Z(f,E){f[E].state=this.checked,l(4,d)}const F=f=>y(f),W=f=>k(f);function G(){s=this.checked,l(1,s)}function Q(){_=this.value,l(3,_)}return e.$$set=f=>{"selectedWeapon"in f&&l(0,n=f.selectedWeapon),"isZephyr"in f&&l(1,s=f.isZephyr),"calculatedCrit"in f&&l(2,r=f.calculatedCrit),"baseCrit"in f&&l(3,_=f.baseCrit),"filteredMods"in f&&l(4,d=f.filteredMods)},[n,s,r,_,d,J,c,k,p,a,i,y,v,P,Z,F,W,G,Q]}class Ge extends Ne{constructor(t){super(),Se(this,t,Fe,De,ie,{selectedWeapon:0,isZephyr:1,calculatedCrit:2,baseCrit:3,filteredMods:4},null,[-1,-1])}}function Je(e){let t,l,n,s;return n=new Ge({}),{c(){t=C("main"),l=C("div"),He(n.$$.fragment),T(l,"class","card")},m(r,_){g(r,t,_),O(t,l),Me(n,l,null),s=!0},p:j,i(r){s||(Ie(n.$$.fragment,r),s=!0)},o(r){qe(n.$$.fragment,r),s=!1},d(r){r&&b(t),we(n)}}}class Ke extends Ne{constructor(t){super(),Se(this,t,null,Je,ie,{})}}new Ke({target:document.getElementById("app")});