var u=(t,s,o)=>new Promise((p,i)=>{var c=e=>{try{r(o.next(e))}catch(m){i(m)}},n=e=>{try{r(o.throw(e))}catch(m){i(m)}},r=e=>e.done?p(e.value):Promise.resolve(e.value).then(c,n);r((o=o.apply(t,s)).next())});import{P as C}from"./index.874a1287.js";import{L as _,a as v,cM as D,dh as x,v as g,J as E,aF as h,co as B,x as M,o as P,i as $,z as d,l as F,E as y}from"./index.72db8407.js";import{D as l}from"./index.9c574014.js";import{C as f}from"./index.aa3cc807.js";import"./index.a3257fd9.js";import"./index.8b7903b4.js";import{D as a}from"./index.dbd2aa4b.js";import b from"./ProcessHeader.b73f1c2a.js";import"./index.1644c3be.js";import"./index.778de78a.js";import"./useSize.540680fe.js";import"./eagerComputed.0db327f8.js";import"./useWindowSizeFn.de59245c.js";import"./useContentViewHeight.e9d9b7fd.js";import"./ArrowLeftOutlined.e4cf2a58.js";import"./index.dfa59e10.js";import"./transButton.fa38355c.js";import"./index.43cbb639.js";import"./index.bb8df062.js";import"./useRefs.a6f29f73.js";import"./useFlexGapSupport.fbfe2813.js";import"./index.c93d4b04.js";import"./process.dd434e1e.js";const k=v({components:{ProcessHeader:b,CollapseContainer:D,PageWrapper:C,[l.name]:l,[f.name]:f,AEmpty:x,[a.name]:a,[a.Item.name]:a.Item},setup(){const t=g(),{createMessage:s}=y();E(()=>{});function o(){return u(this,null,function*(){return s.info("\u5F00\u53D1\u4E2D\uFF0C \u656C\u8BF7\u671F\u5F85\uFF01"),Promise.reject(!1)})}return{container:t,doSubmit:o}}}),w=F("div",{class:"font-bold"},"\u57FA\u672C\u4FE1\u606F",-1),A=F("div",{class:"text-lg text-center p-20"}," \u5F00\u53D1\u4E2D\uFF0C \u656C\u8BF7\u671F\u5F85\uFF01 ",-1);function I(t,s,o,p,i,c){const n=h("CollapseContainer"),r=B("loading");return M((P(),$(n,{canExpan:!1},{title:d(()=>[w]),default:d(()=>[A]),_:1})),[[r,t.formLoading]])}var so=_(k,[["render",I]]);export{so as default};