import{L as _,a as f,b1 as C,aF as e,o as n,i as c,z as s,m as l,B as x,f as h,F,aI as g,l as t,t as a,aG as y}from"./index.ad5d3368.js";import{C as d}from"./index.584f65b7.js";import"./index.d37dee69.js";import"./index.1bc3394f.js";import{groupItems as B}from"./data.c7ead8ae.js";import"./index.079b218a.js";import"./index.eda90618.js";import"./useRefs.78d96779.js";import"./useFlexGapSupport.75a62d21.js";import"./index.05897428.js";const k=f({components:{Card:d,CardGrid:d.Grid,Icon:C},setup(){return{items:B}}}),w={class:"flex"},G={class:"text-lg ml-4"},I={class:"flex mt-2 h-10 text-secondary"},$={class:"flex justify-between text-secondary"};function b(r,v,E,z,D,N){const i=e("a-button"),p=e("Icon"),u=e("CardGrid"),m=e("Card");return n(),c(m,y({title:"\u5E38\u7528\u4E0B\u8F7D"},r.$attrs),{extra:s(()=>[l(i,{type:"link",size:"small"},{default:s(()=>[x("\u66F4\u591A")]),_:1})]),default:s(()=>[(n(!0),h(F,null,g(r.items,o=>(n(),c(u,{key:o,class:"md:!w-1/3 !w-full"},{default:s(()=>[t("span",w,[l(p,{icon:o.icon,color:o.color,size:"30"},null,8,["icon","color"]),t("span",G,a(o.title),1)]),t("div",I,a(o.desc),1),t("div",$,[t("span",null,"\u6765\u6E90\uFF1A"+a(o.group),1),t("span",null,a(o.date),1)])]),_:2},1024))),128))]),_:1},16)}var K=_(k,[["render",b]]);export{K as default};