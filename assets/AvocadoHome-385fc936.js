import{u as F,V as T}from"./VBtn-9a07db56.js";import{g as M,o as U,n as W,a as j,b as q,u as B,r as A,w as R,c as x,s as b,d as h,e as y,f as S,h as N,i as $,j as C,t as E,k}from"./index-c6718318.js";import{u as z}from"./settings-b937fe65.js";import{V as J,a as P,b as K}from"./VRow-02ebd454.js";function I(e){return j()?(q(e),!0):!1}function w(){const e=new Set,n=s=>{e.delete(s)};return{on:s=>{e.add(s);const a=()=>n(s);return I(a),{off:a}},off:n,trigger:s=>Promise.all(Array.from(e).map(a=>a(s)))}}function D(e){return typeof e=="function"?e():B(e)}const Q=typeof window<"u",X=()=>{};function Y(e,n=!0){M()?U(e):n?e():W(e)}function Z(e){var n;const o=D(e);return(n=o==null?void 0:o.$el)!=null?n:o}const G=Q?window:void 0;function ee(...e){let n,o,t,s;if(typeof e[0]=="string"||Array.isArray(e[0])?([o,t,s]=e,n=G):[n,o,t,s]=e,!n)return X;Array.isArray(o)||(o=[o]),Array.isArray(t)||(t=[t]);const a=[],f=()=>{a.forEach(c=>c()),a.length=0},m=(c,r,i,u)=>(c.addEventListener(r,i,u),()=>c.removeEventListener(r,i,u)),g=R(()=>[Z(n),D(s)],([c,r])=>{f(),c&&a.push(...o.flatMap(i=>t.map(u=>m(c,i,u,r))))},{immediate:!0,flush:"post"}),v=()=>{g(),f()};return I(v),v}function te(){const e=A(!1);return M()&&U(()=>{e.value=!0}),e}function ne(e){const n=te();return x(()=>(n.value,!!e()))}function oe(e={}){const{window:n=G}=e,o=ne(()=>!!n&&"Notification"in n),t=A(null),s=async()=>{o.value&&"permission"in Notification&&Notification.permission!=="denied"&&await Notification.requestPermission()},{on:a,trigger:f}=w(),{on:m,trigger:g}=w(),{on:v,trigger:c}=w(),{on:r,trigger:i}=w(),u=async p=>{if(!o.value)return;await s();const l=Object.assign({},e,p);return t.value=new Notification(l.title||"",l),t.value.onclick=f,t.value.onshow=g,t.value.onerror=c,t.value.onclose=i,t.value},d=()=>{t.value&&t.value.close(),t.value=null};if(Y(async()=>{o.value&&await s()}),I(d),o.value&&n){const p=n.document;ee(p,"visibilitychange",l=>{l.preventDefault(),p.visibilityState==="visible"&&d()})}return{isSupported:o,notification:t,show:u,close:d,onClick:a,onShow:m,onError:v,onClose:r}}const se=(e,n)=>{const o=e.__vccOpts||e;for(const[t,s]of n)o[t]=s;return o},re={class:"deco"},ie={__name:"AvocadoHome",setup(e){const n=F(),{items:o,currentItem:t,timeleft:s}=b(n),{countdown:a,setCurrentItem:f,setFinishItem:m}=n,g=z(),{selectedAlarmFile:v,notify:c}=b(g),r={STOP:0,COUNTING:1,PAUSE:2},i=A(r.STOP);let u=0;const d=()=>{i.value===r.STOP&&o.value.length>0&&f(),t.value.length!==0&&(i.value=r.COUNTING,u=setInterval(()=>{a(),s.value===0&&l()},1e3))},p=()=>{i.value=r.PAUSE,clearInterval(u)},l=()=>{clearInterval(u),i.value=r.STOP;const _=new Audio;_.src=v.value,_.play(),c.value&&L(),m(),o.value.length>0&&d()},O=x(()=>t.value.length>0?t.value:o.value.length>0?"點擊開始":"沒有事項"),H=x(()=>{const _=Math.floor(s.value/60).toString().padStart(2,"0"),V=(s.value%60).toString().padStart(2,"0");return _+":"+V}),{show:L}=oe({title:"事項完成",body:O.value,icon:"https://cdn-icons-png.flaticon.com/512/9759/9759110.png"});return(_,V)=>(h(),y(J,null,{default:S(()=>[N(K,null,{default:S(()=>[N(P,{cols:"12",class:"text-h4 text-center"},{default:S(()=>[$("首頁")]),_:1}),N(P,{cols:"12",class:"text-center"},{default:S(()=>[C("div",re,[C("h1",null,E(O.value),1),C("h1",null,E(H.value),1),i.value!==r.COUNTING?(h(),y(T,{key:0,variant:"text",icon:"mdi-play",onClick:d})):k("",!0),i.value===r.COUNTING?(h(),y(T,{key:1,variant:"text",icon:"mdi-pause",onClick:p})):k("",!0),B(t).length>0?(h(),y(T,{key:2,variant:"text",icon:"mdi-skip-next",onClick:l})):k("",!0)])]),_:1})]),_:1})]),_:1}))}},fe=se(ie,[["__scopeId","data-v-fefbdef0"]]);export{fe as default};