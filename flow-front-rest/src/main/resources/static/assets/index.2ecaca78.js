var u=(t,s,o)=>new Promise((p,i)=>{var c=e=>{try{r(o.next(e))}catch(m){i(m)}},n=e=>{try{r(o.throw(e))}catch(m){i(m)}},r=e=>e.done?p(e.value):Promise.resolve(e.value).then(c,n);r((o=o.apply(t,s)).next())});import{P as C}from"./index.db644a38.js";import{L as _,a as v,cM as D,dh as x,v as g,J as E,aF as h,co as B,x as M,o as P,i as $,z as d,l as F,E as y}from"./index.ad5d3368.js";import{D as l}from"./index.ef8c7e52.js";import{C as f}from"./index.584f65b7.js";import"./index.d37dee69.js";import"./index.1bc3394f.js";import{D as a}from"./index.7a54f046.js";import b from"./ProcessHeader.fdca1f17.js";import"./index.8771f033.js";import"./index.07d0350c.js";import"./useSize.eed19aca.js";import"./eagerComputed.f76a85b9.js";import"./useWindowSizeFn.c895093f.js";import"./useContentViewHeight.a15e882a.js";import"./ArrowLeftOutlined.1072a2d2.js";import"./index.5201732f.js";import"./transButton.70514f39.js";import"./index.079b218a.js";import"./index.eda90618.js";import"./useRefs.78d96779.js";import"./useFlexGapSupport.75a62d21.js";import"./index.05897428.js";import"./process.4bbfb3c2.js";const k=v({components:{ProcessHeader:b,CollapseContainer:D,PageWrapper:C,[l.name]:l,[f.name]:f,AEmpty:x,[a.name]:a,[a.Item.name]:a.Item},setup(){const t=g(),{createMessage:s}=y();E(()=>{});function o(){return u(this,null,function*(){return s.info("\u5F00\u53D1\u4E2D\uFF0C \u656C\u8BF7\u671F\u5F85\uFF01"),Promise.reject(!1)})}return{container:t,doSubmit:o}}}),w=F("div",{class:"font-bold"},"\u57FA\u672C\u4FE1\u606F",-1),A=F("div",{class:"text-lg text-center p-20"}," \u5F00\u53D1\u4E2D\uFF0C \u656C\u8BF7\u671F\u5F85\uFF01 ",-1);function I(t,s,o,p,i,c){const n=h("CollapseContainer"),r=B("loading");return M((P(),$(n,{canExpan:!1},{title:d(()=>[w]),default:d(()=>[A]),_:1})),[[r,t.formLoading]])}var so=_(k,[["render",I]]);export{so as default};