import{x as U,z as I,B as j,aa as F,ab as Z,H as $,D as J,y as V,F as Y,J as q,K as O,L as D,a4 as Q,G,a6 as L,u as B,ac as W,ad as X,m as C,C as x,k as d,ae as k,af as ee,a5 as re,T as ne,ag as ae,S as H,ah as M,ai as se,o as te,aj as ie,ak as fe,al as m,am as ue}from"./DFUtl9r9.js";import{p as le}from"./DoNojlOL.js";function de(e,r,[a,n]=[0,0]){I&&a===0&&j();var s=e,t=null,f=null,v=Q,P=a>0?F:0,o=!1;const A=(u,c=!0)=>{o=!0,p(c,u)},p=(u,c)=>{if(v===(v=u))return;let b=!1;if(I&&n!==-1){if(a===0){const l=s.data;l===Z?n=0:l===$?n=1/0:(n=parseInt(l.substring(1)),n!==n&&(n=v?1/0:-1))}const S=n>a;!!v===S&&(s=J(),V(s),Y(!1),b=!0,n=-1)}v?(t?q(t):c&&(t=O(()=>c(s))),f&&D(f,()=>{f=null})):(f?q(f):c&&(f=O(()=>c(s,[a+1,n]))),t&&D(t,()=>{t=null})),b&&Y(!0)};U(()=>{o=!1,r(A),o||p(null,null)},P),I&&(s=G)}function be(e,r,a){I&&j();var n=e,s,t;U(()=>{s!==(s=r())&&(t&&(D(t),t=null),s&&(t=O(()=>a(n,s))))},F),I&&(n=G)}let T=!1;function oe(e){var r=T;try{return T=!1,[e(),T]}finally{T=r}}const ce={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set(e,r){return!1},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function he(e,r,a){return new Proxy({props:e,exclude:r},ce)}const _e={get(e,r){let a=e.props.length;for(;a--;){let n=e.props[a];if(m(n)&&(n=n()),typeof n=="object"&&n!==null&&r in n)return n[r]}},set(e,r,a){let n=e.props.length;for(;n--;){let s=e.props[n];m(s)&&(s=s());const t=L(s,r);if(t&&t.set)return t.set(a),!0}return!1},getOwnPropertyDescriptor(e,r){let a=e.props.length;for(;a--;){let n=e.props[a];if(m(n)&&(n=n()),typeof n=="object"&&n!==null&&r in n){const s=L(n,r);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,r){if(r===H||r===M)return!1;for(let a of e.props)if(m(a)&&(a=a()),a!=null&&r in a)return!0;return!1},ownKeys(e){const r=[];for(let a of e.props){m(a)&&(a=a());for(const n in a)r.includes(n)||r.push(n)}return r}};function me(...e){return new Proxy({props:e},_e)}function K(e){var r;return((r=e.ctx)==null?void 0:r.d)??!1}function Ie(e,r,a,n){var y;var s=(a&fe)!==0,t=!te||(a&ie)!==0,f=(a&ae)!==0,v=(a&se)!==0,P=!1,o;f?[o,P]=oe(()=>e[r]):o=e[r];var A=H in e||M in e,p=f&&(((y=L(e,r))==null?void 0:y.set)??(A&&r in e&&(i=>e[r]=i)))||void 0,u=n,c=!0,b=!1,S=()=>(b=!0,c&&(c=!1,v?u=B(n):u=n),u);o===void 0&&n!==void 0&&(p&&t&&W(),o=S(),p&&p(o));var l;if(t)l=()=>{var i=e[r];return i===void 0?S():(c=!0,b=!1,i)};else{var N=(s?C:x)(()=>e[r]);N.f|=X,l=()=>{var i=d(N);return i!==void 0&&(u=void 0),i===void 0?u:i}}if((a&k)===0)return l;if(p){var z=e.$$legacy;return function(i,h){return arguments.length>0?((!t||!h||z||P)&&p(h?l():i),i):l()}}var g=!1,E=!1,R=ne(o),_=C(()=>{var i=l(),h=d(R);return g?(g=!1,E=!0,h):(E=!1,R.v=i)});return f&&d(_),s||(_.equals=ee),function(i,h){if(ue!==null&&(g=E,l(),d(R)),arguments.length>0){const w=h?d(_):t&&f?le(i):i;if(!_.equals(w)){if(g=!0,re(R,w),b&&u!==void 0&&(u=w),K(_))return i;B(()=>d(_))}return i}return K(_)?_.v:d(_)}}export{be as c,de as i,Ie as p,he as r,me as s};
