var u=(t,s,o)=>new Promise((p,i)=>{var c=e=>{try{r(o.next(e))}catch(m){i(m)}},n=e=>{try{r(o.throw(e))}catch(m){i(m)}},r=e=>e.done?p(e.value):Promise.resolve(e.value).then(c,n);r((o=o.apply(t,s)).next())});import{P as C}from"./index.f8f7d8f4.js";import{L as _,a as v,cM as D,dh as x,v as g,J as E,aF as h,co as B,x as M,o as P,i as $,z as d,l as F,E as y}from"./index.c5d747fc.js";import{D as l}from"./index.96abfac9.js";import{C as f}from"./index.88e0a121.js";import"./index.296ee04a.js";import"./index.57253b57.js";import{D as a}from"./index.7c3356b9.js";import b from"./ProcessHeader.746b0ace.js";import"./index.3ad95a08.js";import"./index.efb43125.js";import"./useSize.cc8786ae.js";import"./eagerComputed.10c3fbd5.js";import"./useWindowSizeFn.86d1b816.js";import"./useContentViewHeight.2f7e7c9f.js";import"./ArrowLeftOutlined.871d1f86.js";import"./index.6c8974ca.js";import"./transButton.4255c41b.js";import"./index.d8a8c0df.js";import"./index.4287c510.js";import"./useRefs.42a2da00.js";import"./PlusOutlined.20270b2a.js";import"./useFlexGapSupport.6f7d1d35.js";import"./index.eca2a50c.js";import"./process.fa055655.js";const k=v({components:{ProcessHeader:b,CollapseContainer:D,PageWrapper:C,[l.name]:l,[f.name]:f,AEmpty:x,[a.name]:a,[a.Item.name]:a.Item},setup(){const t=g(),{createMessage:s}=y();E(()=>{});function o(){return u(this,null,function*(){return s.info("\u5F00\u53D1\u4E2D\uFF0C \u656C\u8BF7\u671F\u5F85\uFF01"),Promise.reject(!1)})}return{container:t,doSubmit:o}}}),w=F("div",{class:"font-bold"},"\u57FA\u672C\u4FE1\u606F",-1),A=F("div",{class:"text-lg text-center p-20"}," \u5F00\u53D1\u4E2D\uFF0C \u656C\u8BF7\u671F\u5F85\uFF01 ",-1);function I(t,s,o,p,i,c){const n=h("CollapseContainer"),r=B("loading");return M((P(),$(n,{canExpan:!1},{title:d(()=>[w]),default:d(()=>[A]),_:1})),[[r,t.formLoading]])}var ao=_(k,[["render",I]]);export{ao as default};