import{az as C,a as _,cE as v,w as y,ft as B,aB as a,o as F,k as g,B as n,p as s,n as h,C as w,j as l,G as b}from"./index.da587afe.js";import{P as k}from"./index.c0d22213.js";import"./index.a0d7e8a1.js";import"./index.6d85aa5b.js";import"./useSize.dbee3c08.js";import"./eagerComputed.3bbb876f.js";import"./useWindowSizeFn.3fdab581.js";import"./useContentViewHeight.f2db75e2.js";import"./ArrowLeftOutlined.8a04d10c.js";import"./index.25a87437.js";import"./transButton.1d3b575b.js";const x=_({name:"Copy",components:{CollapseContainer:v,PageWrapper:k},setup(){const e=y(""),{createMessage:o}=b(),{clipboardRef:p,copiedRef:r}=B();function u(){const t=l(e);if(!t){o.warning("\u8BF7\u8F93\u5165\u8981\u62F7\u8D1D\u7684\u5185\u5BB9\uFF01");return}p.value=t,l(r)&&o.warning("copy success\uFF01")}return{handleCopy:u,value:e}}}),P={class:"flex justify-center"};function $(e,o,p,r,u,t){const i=a("a-input"),c=a("a-button"),m=a("CollapseContainer"),d=a("PageWrapper");return F(),g(d,{title:"\u6587\u672C\u590D\u5236\u793A\u4F8B"},{default:n(()=>[s(m,{class:"w-full h-32 bg-white rounded-md",title:"Copy Example"},{default:n(()=>[h("div",P,[s(i,{placeholder:"\u8BF7\u8F93\u5165",value:e.value,"onUpdate:value":o[0]||(o[0]=f=>e.value=f)},null,8,["value"]),s(c,{type:"primary",onClick:e.handleCopy},{default:n(()=>[w(" Copy ")]),_:1},8,["onClick"])])]),_:1})]),_:1})}var G=C(x,[["render",$]]);export{G as default};