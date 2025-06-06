import{c as ue,e as z,f as k,T as K,j as u,U as de,r as g,z as ge,R as x}from"./index-CEJnUle6.js";import{h as L,j as pe,P as y,i as C,u as _,l as fe}from"./index-B8OU00W2.js";import{c as ve,u as U}from"./index-BFBsDBe7.js";/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Le=ue("Globe",me),be=K("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function Ue(t){const e=z.c(12);let r,o,s,n;e[0]!==t?({className:r,variant:n,asChild:s,...o}=t,e[0]=t,e[1]=r,e[2]=o,e[3]=s,e[4]=n):(r=e[1],o=e[2],s=e[3],n=e[4]);const a=(s===void 0?!1:s)?de:"span";let c;e[5]!==r||e[6]!==n?(c=k(be({variant:n}),r),e[5]=r,e[6]=n,e[7]=c):c=e[7];let l;return e[8]!==a||e[9]!==o||e[10]!==c?(l=u.jsx(a,{"data-slot":"badge",className:c,...o}),e[8]=a,e[9]=o,e[10]=c,e[11]=l):l=e[11],l}var j="rovingFocusGroup.onEntryFocus",xe={bubbles:!1,cancelable:!0},F="RovingFocusGroup",[N,B,he]=ve(F),[Ie,$]=L(F,[he]),[Te,we]=Ie(F),Z=g.forwardRef((t,e)=>u.jsx(N.Provider,{scope:t.__scopeRovingFocusGroup,children:u.jsx(N.Slot,{scope:t.__scopeRovingFocusGroup,children:u.jsx(Ce,{...t,ref:e})})}));Z.displayName=F;var Ce=g.forwardRef((t,e)=>{const{__scopeRovingFocusGroup:r,orientation:o,loop:s=!1,dir:n,currentTabStopId:i,defaultCurrentTabStopId:a,onCurrentTabStopIdChange:c,onEntryFocus:l,preventScrollOnEntryFocus:d=!1,...f}=t,v=g.useRef(null),h=ge(e,v),p=U(n),[T=null,P]=_({prop:i,defaultProp:a,onChange:c}),[b,I]=g.useState(!1),E=fe(l),ne=B(r),A=g.useRef(!1),[se,M]=g.useState(0);return g.useEffect(()=>{const m=v.current;if(m)return m.addEventListener(j,E),()=>m.removeEventListener(j,E)},[E]),u.jsx(Te,{scope:r,orientation:o,dir:p,loop:s,currentTabStopId:T,onItemFocus:g.useCallback(m=>P(m),[P]),onItemShiftTab:g.useCallback(()=>I(!0),[]),onFocusableItemAdd:g.useCallback(()=>M(m=>m+1),[]),onFocusableItemRemove:g.useCallback(()=>M(m=>m-1),[]),children:u.jsx(y.div,{tabIndex:b||se===0?-1:0,"data-orientation":o,...f,ref:h,style:{outline:"none",...t.style},onMouseDown:C(t.onMouseDown,()=>{A.current=!0}),onFocus:C(t.onFocus,m=>{const ae=!A.current;if(m.target===m.currentTarget&&ae&&!b){const O=new CustomEvent(j,xe);if(m.currentTarget.dispatchEvent(O),!O.defaultPrevented){const S=ne().filter(w=>w.focusable),ie=S.find(w=>w.active),ce=S.find(w=>w.id===T),le=[ie,ce,...S].filter(Boolean).map(w=>w.ref.current);q(le,d)}}A.current=!1}),onBlur:C(t.onBlur,()=>I(!1))})})}),Y="RovingFocusGroupItem",H=g.forwardRef((t,e)=>{const{__scopeRovingFocusGroup:r,focusable:o=!0,active:s=!1,tabStopId:n,...i}=t,a=pe(),c=n||a,l=we(Y,r),d=l.currentTabStopId===c,f=B(r),{onFocusableItemAdd:v,onFocusableItemRemove:h}=l;return g.useEffect(()=>{if(o)return v(),()=>h()},[o,v,h]),u.jsx(N.ItemSlot,{scope:r,id:c,focusable:o,active:s,children:u.jsx(y.span,{tabIndex:d?0:-1,"data-orientation":l.orientation,...i,ref:e,onMouseDown:C(t.onMouseDown,p=>{o?l.onItemFocus(c):p.preventDefault()}),onFocus:C(t.onFocus,()=>l.onItemFocus(c)),onKeyDown:C(t.onKeyDown,p=>{if(p.key==="Tab"&&p.shiftKey){l.onItemShiftTab();return}if(p.target!==p.currentTarget)return;const T=Re(p,l.orientation,l.dir);if(T!==void 0){if(p.metaKey||p.ctrlKey||p.altKey||p.shiftKey)return;p.preventDefault();let b=f().filter(I=>I.focusable).map(I=>I.ref.current);if(T==="last")b.reverse();else if(T==="prev"||T==="next"){T==="prev"&&b.reverse();const I=b.indexOf(p.currentTarget);b=l.loop?_e(b,I+1):b.slice(I+1)}setTimeout(()=>q(b))}})})})});H.displayName=Y;var Ge={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function ye(t,e){return e!=="rtl"?t:t==="ArrowLeft"?"ArrowRight":t==="ArrowRight"?"ArrowLeft":t}function Re(t,e,r){const o=ye(t.key,r);if(!(e==="vertical"&&["ArrowLeft","ArrowRight"].includes(o))&&!(e==="horizontal"&&["ArrowUp","ArrowDown"].includes(o)))return Ge[o]}function q(t,e=!1){const r=document.activeElement;for(const o of t)if(o===r||(o.focus({preventScroll:e}),document.activeElement!==r))return}function _e(t,e){return t.map((r,o)=>t[(e+o)%t.length])}var Fe=Z,Pe=H,Ee="Toggle",J=g.forwardRef((t,e)=>{const{pressed:r,defaultPressed:o=!1,onPressedChange:s,...n}=t,[i=!1,a]=_({prop:r,onChange:s,defaultProp:o});return u.jsx(y.button,{type:"button","aria-pressed":i,"data-state":i?"on":"off","data-disabled":t.disabled?"":void 0,...n,ref:e,onClick:C(t.onClick,()=>{t.disabled||a(!i)})})});J.displayName=Ee;var G="ToggleGroup",[Q,Be]=L(G,[$]),W=$(),D=x.forwardRef((t,e)=>{const{type:r,...o}=t;if(r==="single"){const s=o;return u.jsx(Ae,{...s,ref:e})}if(r==="multiple"){const s=o;return u.jsx(Se,{...s,ref:e})}throw new Error(`Missing prop \`type\` expected on \`${G}\``)});D.displayName=G;var[X,ee]=Q(G),Ae=x.forwardRef((t,e)=>{const{value:r,defaultValue:o,onValueChange:s=()=>{},...n}=t,[i,a]=_({prop:r,defaultProp:o,onChange:s});return u.jsx(X,{scope:t.__scopeToggleGroup,type:"single",value:i?[i]:[],onItemActivate:a,onItemDeactivate:x.useCallback(()=>a(""),[a]),children:u.jsx(te,{...n,ref:e})})}),Se=x.forwardRef((t,e)=>{const{value:r,defaultValue:o,onValueChange:s=()=>{},...n}=t,[i=[],a]=_({prop:r,defaultProp:o,onChange:s}),c=x.useCallback(d=>a((f=[])=>[...f,d]),[a]),l=x.useCallback(d=>a((f=[])=>f.filter(v=>v!==d)),[a]);return u.jsx(X,{scope:t.__scopeToggleGroup,type:"multiple",value:i,onItemActivate:c,onItemDeactivate:l,children:u.jsx(te,{...n,ref:e})})});D.displayName=G;var[je,Ne]=Q(G),te=x.forwardRef((t,e)=>{const{__scopeToggleGroup:r,disabled:o=!1,rovingFocus:s=!0,orientation:n,dir:i,loop:a=!0,...c}=t,l=W(r),d=U(i),f={role:"group",dir:d,...c};return u.jsx(je,{scope:r,rovingFocus:s,disabled:o,children:s?u.jsx(Fe,{asChild:!0,...l,orientation:n,dir:d,loop:a,children:u.jsx(y.div,{...f,ref:e})}):u.jsx(y.div,{...f,ref:e})})}),R="ToggleGroupItem",oe=x.forwardRef((t,e)=>{const r=ee(R,t.__scopeToggleGroup),o=Ne(R,t.__scopeToggleGroup),s=W(t.__scopeToggleGroup),n=r.value.includes(t.value),i=o.disabled||t.disabled,a={...t,pressed:n,disabled:i},c=x.useRef(null);return o.rovingFocus?u.jsx(Pe,{asChild:!0,...s,focusable:!i,active:n,ref:c,children:u.jsx(V,{...a,ref:e})}):u.jsx(V,{...a,ref:e})});oe.displayName=R;var V=x.forwardRef((t,e)=>{const{__scopeToggleGroup:r,value:o,...s}=t,n=ee(R,r),i={role:"radio","aria-checked":t.pressed,"aria-pressed":void 0},a=n.type==="single"?i:void 0;return u.jsx(J,{...a,...s,ref:e,onPressedChange:c=>{c?n.onItemActivate(o):n.onItemDeactivate(o)}})}),ze=D,ke=oe;const De=K("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",{variants:{variant:{default:"bg-transparent",outline:"border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"},size:{default:"h-9 px-2 min-w-9",sm:"h-8 px-1.5 min-w-8",lg:"h-10 px-2.5 min-w-10"}},defaultVariants:{variant:"default",size:"default"}}),re=g.createContext({size:"default",variant:"default"});function $e(t){const e=z.c(20);let r,o,s,n,i;e[0]!==t?({className:o,variant:i,size:n,children:r,...s}=t,e[0]=t,e[1]=r,e[2]=o,e[3]=s,e[4]=n,e[5]=i):(r=e[1],o=e[2],s=e[3],n=e[4],i=e[5]);let a;e[6]!==o?(a=k("group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",o),e[6]=o,e[7]=a):a=e[7];let c;e[8]!==n||e[9]!==i?(c={variant:i,size:n},e[8]=n,e[9]=i,e[10]=c):c=e[10];let l;e[11]!==r||e[12]!==c?(l=u.jsx(re.Provider,{value:c,children:r}),e[11]=r,e[12]=c,e[13]=l):l=e[13];let d;return e[14]!==s||e[15]!==n||e[16]!==a||e[17]!==l||e[18]!==i?(d=u.jsx(ze,{"data-slot":"toggle-group","data-variant":i,"data-size":n,className:a,...s,children:l}),e[14]=s,e[15]=n,e[16]=a,e[17]=l,e[18]=i,e[19]=d):d=e[19],d}function Ze(t){const e=z.c(16);let r,o,s,n,i;e[0]!==t?({className:o,children:r,variant:i,size:n,...s}=t,e[0]=t,e[1]=r,e[2]=o,e[3]=s,e[4]=n,e[5]=i):(r=e[1],o=e[2],s=e[3],n=e[4],i=e[5]);const a=g.useContext(re),c=a.variant||i,l=a.size||n,d=a.variant||i,f=a.size||n;let v;e[6]!==o||e[7]!==d||e[8]!==f?(v=k(De({variant:d,size:f}),"min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",o),e[6]=o,e[7]=d,e[8]=f,e[9]=v):v=e[9];let h;return e[10]!==r||e[11]!==s||e[12]!==c||e[13]!==l||e[14]!==v?(h=u.jsx(ke,{"data-slot":"toggle-group-item","data-variant":c,"data-size":l,className:v,...s,children:r}),e[10]=r,e[11]=s,e[12]=c,e[13]=l,e[14]=v,e[15]=h):h=e[15],h}const Ye=t=>({servers:/(?:(sr|s))_[a-zA-Z0-9]{1,7}_[0-9]{1,4}\b/g,ips:/(?:25[0-5]|2[0-4]\d|[01]?\d?\d{1})\.(?:25[0-5]|2[0-4]\d|[01]?\d?\d{1})\.(?:25[0-5]|2[0-4]\d|[01]?\d?\d{1})\.(?:25[0-5]|2[0-4]\d|[01]?\d?\d{1})/g,emails:/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g,domains:/(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-_.]+\.[a-zA-Z]{2,})/gi})[t],He=async t=>{try{return await navigator.clipboard.writeText(t),!0}catch(e){return console.error("Failed to copy:",e),!1}};export{Ue as B,Le as G,$e as T,Ze as a,He as c,Ye as g};
