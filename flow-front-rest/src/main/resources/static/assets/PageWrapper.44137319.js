var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,a=(e,t)=>{for(var o in t||(t={}))s.call(t,o)&&l(e,o,t[o]);if(n)for(var o of n(t))r.call(t,o)&&l(e,o,t[o]);return e},i=(e,n)=>t(e,o(n));import{c as g,n as d,p as c}from"./index.fe7e6ae2.js";import{k as f,o as p,n as u,q as h,Q as v,x as m,bh as C,r as b,f as y,aK as $,a as x,D as H,J as j,K as F,N as P,a$ as S,ag as O,P as w,S as _,X as k,s as W,W as A}from"./vendor.d660e98f.js";import{u as B}from"./usePageContext.a4ed025e.js";/* empty css              *//* empty css              */import{o as R}from"./onMountedOrActivated.a3bdff8d.js";var N=f({name:"PageFooter",inheritAttrs:!1,setup(){const{prefixCls:e}=g("page-footer"),{getCalcContentWidth:t}=d();return{prefixCls:e,getCalcContentWidth:t}}});const q=m()(((e,t,o,n,s,r)=>(p(),u("div",{class:e.prefixCls,style:{width:e.getCalcContentWidth}},[h("div",{class:`${e.prefixCls}__left`},[v(e.$slots,"left",{},void 0,!0)],2),v(e.$slots,"default",{},void 0,!0),h("div",{class:`${e.prefixCls}__right`},[v(e.$slots,"right",{},void 0,!0)],2)],6))));N.render=q,N.__scopeId="data-v-3ebffc87";var D=f({name:"PageWrapper",components:{PageFooter:N,PageHeader:C},inheritAttrs:!1,props:{title:c.string,dense:c.bool,ghost:c.bool,content:c.string,contentStyle:{type:Object},contentBackground:c.bool,contentFullHeight:c.bool,contentClass:c.string,fixedHeight:c.bool},setup(e,{slots:t}){const o=b(null),n=b(null),s=b(0),{prefixCls:r,prefixVar:l}=g("page-wrapper"),{contentHeight:d,setPageHeight:c,pageHeight:f}=B(),p=y((()=>[r,{[`${r}--dense`]:e.dense}])),u=y((()=>(null==t?void 0:t.leftFooter)||(null==t?void 0:t.rightFooter))),h=y((()=>Object.keys($(t,"default","leftFooter","rightFooter","headerContent")))),v=y((()=>{const{contentFullHeight:t,contentStyle:o,fixedHeight:n}=e;if(!t)return a({},o);const r=`${x(f)}px`;return i(a(i(a({},o),{minHeight:r}),n?{height:r}:{}),{paddingBottom:`${x(s)}px`})})),m=y((()=>{const{contentBackground:t,contentClass:o}=e;return[`${r}-content`,o,{[`${r}-content-bg`]:t}]}));function C(){var t,r,a,i;if(!e.contentFullHeight)return;const g=x(n),f=x(o);s.value=0;const p=null==g?void 0:g.$el;p&&(s.value+=null!=(t=null==p?void 0:p.offsetHeight)?t:0);let u=0;const h=null==f?void 0:f.$el;h&&(u+=null!=(r=null==h?void 0:h.offsetHeight)?r:0);let v=0;const m="0px";let C=m,b=m;const y=document.querySelectorAll(`.${l}-page-wrapper-content`);if(y&&y.length>0){const e=y[0],t=getComputedStyle(e);C=null!=(a=null==t?void 0:t.marginBottom)?a:m,b=null!=(i=null==t?void 0:t.marginTop)?i:m}if(C){v+=Number(C.replace(/[^\d]/g,""))}if(b){v+=Number(b.replace(/[^\d]/g,""))}null==c||c(x(d)-x(s)-u-v)}return H((()=>[null==d?void 0:d.value,u.value]),(()=>{C()}),{flush:"post",immediate:!0}),R((()=>{j((()=>{C()}))})),{getContentStyle:v,footerRef:n,headerRef:o,getClass:p,getHeaderSlots:h,prefixCls:r,getShowFooter:u,pageHeight:f,omit:$,getContentClass:m}}});D.render=function(e,t,o,n,s,r){const l=F("PageHeader"),a=F("PageFooter");return p(),u("div",{class:e.getClass},[e.content||e.$slots.headerContent||e.title||e.getHeaderSlots.length?(p(),u(l,P({key:0,ghost:e.ghost,title:e.title},e.$attrs,{ref:"headerRef"}),S({default:w((()=>[e.content?(p(),u(_,{key:0},[k(W(e.content),1)],64)):v(e.$slots,"headerContent",{key:1})])),_:2},[O(e.getHeaderSlots,(t=>({name:t,fn:w((o=>[v(e.$slots,t,o)]))})))]),1040,["ghost","title"])):A("",!0),h("div",{class:["overflow-hidden",e.getContentClass],style:e.getContentStyle},[v(e.$slots,"default")],6),e.getShowFooter?(p(),u(a,{key:1,ref:"footerRef"},{left:w((()=>[v(e.$slots,"leftFooter")])),right:w((()=>[v(e.$slots,"rightFooter")])),_:1},512)):A("",!0)],2)};export{D as _};
