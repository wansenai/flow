var d=(e,p,r)=>new Promise((_,i)=>{var c=t=>{try{o(r.next(t))}catch(m){i(m)}},u=t=>{try{o(r.throw(t))}catch(m){i(m)}},o=t=>t.done?_(t.value):Promise.resolve(t.value).then(c,u);o((r=r.apply(e,p)).next())});import{P as v}from"./index.3848c581.js";import{L as y,a as A,v as B,bA as C,bQ as P,h as g,aF as n,o as E,i as b,z as a,m as s,B as l,t as k,l as f,E as w}from"./index.c57fe5f3.js";import x from"./ActionButtons.ecbc3e1f.js";import L from"./FormContainer.e3fd7bf1.js";import M from"./BaseActionButtons.e0988777.js";import N from"./ProcessBackButton.8cbfe1ab.js";import R from"./ProcessHeader.df370d39.js";import{c as S,m as $}from"./process.9fb35436.js";import"./index.76280d33.js";import"./index.57fcc66b.js";import"./useSize.21a58576.js";import"./eagerComputed.0a66574f.js";import"./useWindowSizeFn.79f9ec92.js";import"./useContentViewHeight.8526963a.js";import"./ArrowLeftOutlined.2479d1c9.js";import"./index.3e3a0ce4.js";import"./transButton.eef0876e.js";import"./index.ad34be39.js";import"./index.9aeebd75.js";import"./index.293bd36c.js";import"./useFlexGapSupport.98fd76c0.js";import"./index.b6b458e7.js";import"./CopyOutlined.41b86bd5.js";import"./index.ff970ca1.js";import"./index.54f1ec5e.js";import"./index.4230f51a.js";import"./get.3a02c577.js";import"./index.837c71ef.js";import"./index.2d15e188.js";import"./FullscreenOutlined.b80e75d8.js";import"./index.20b1eee3.js";import"./index.31823370.js";import"./index.aa898692.js";import"./throttleByAnimationFrame.62c6a4b4.js";import"./Viewer.91f06516.js";import"./ApartmentOutlined.cb9abf35.js";import"./index.10246590.js";import"./useRefs.f276032e.js";import"./index.e0d59ecb.js";const I=A({components:{ProcessHeader:R,PageWrapper:v,FormContainer:L,ActionButtons:x,BaseActionButtons:M,ProcessBackButton:N},setup(){const e=B(),p=B({}),{createMessage:r}=w(),_=C(),{currentRoute:i}=P(),{params:{modelKey:c}}=g(i);S({modelKey:c}).then(o=>{p.value=o});function u(){return d(this,null,function*(){const o=yield g(e).getFormData(!0);yield $({formData:JSON.stringify(o),processDefinitionKey:c}),r.success("\u63D0\u4EA4\u6210\u529F\uFF01"),_("/process/launched");debugger})}return{modelBaseInfo:p,formContainerRef:e,doLaunch:u}}}),K={class:"pb-2"},T={class:"desc-wrap"};function V(e,p,r,_,i,c){const u=n("ProcessBackButton"),o=n("BaseActionButtons"),t=n("action-buttons"),m=n("Tag"),F=n("Space"),h=n("FormContainer"),D=n("PageWrapper");return E(),b(D,{class:"!mt-4 process-container",loading:!0},{title:a(()=>[s(u),l(" "+k(e.modelBaseInfo.name||"-")+" ",1),s(o)]),extra:a(()=>[s(t,{onDoLaunch:e.doLaunch},null,8,["onDoLaunch"])]),footer:a(()=>[f("div",K,[s(F,null,{default:a(()=>[f("span",null,[l(" \u6D41\u7A0BBP\uFF1A"),s(m,null,{default:a(()=>[l("\u5F20\u4E09")]),_:1})]),f("span",null,[l(" \u5F52\u5C5E\u90E8\u95E8\uFF1A"),s(m,null,{default:a(()=>[l("\u674E\u56DB")]),_:1})])]),_:1})])]),default:a(()=>[f("div",T,[s(h,{ref:"formContainerRef"},null,512)])]),_:1})}var ko=y(I,[["render",V]]);export{ko as default};