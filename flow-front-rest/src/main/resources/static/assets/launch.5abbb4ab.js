var e=Object.defineProperty,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r;import{_ as a}from"./PageWrapper.df7b7946.js";import{k as n,aT as i,bm as c,af as d,bi as m,r as p,u,a as f,K as j,o as l,n as b,P as x,q as P,a3 as B,X as v}from"./vendor.d660e98f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{P as y}from"./index.d7ab6350.js";import h from"./ActionButtons.cb1ab7bd.js";import w from"./BaseActionButtons.356b61c0.js";import g from"./ProcessBackButton.604fd217.js";import A from"./ProcessHeader.7871e642.js";import{j as O,g as k}from"./index.ee676e78.js";import"./usePageContext.741f964f.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.a3bdff8d.js";import"./index.17922187.js";import"./useForm.aaf83584.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.8522e4d7.js";import"./useModal.47c80e94.js";import"./useWindowSizeFn.4f1b8c18.js";import"./download.d883da4b.js";import"./StrengthMeter.30de6605.js";/* empty css              */import"./process.c572ca0f.js";import"./index.947c56fe.js";import"./index.8d9aebe0.js";/* empty css              *//* empty css              */import"./index.dddfca0b.js";import"./Viewer.fd8523c8.js";var F=n({components:((e,a)=>{for(var n in a||(a={}))o.call(a,n)&&s(e,n,a[n]);if(t)for(var n of t(a))r.call(a,n)&&s(e,n,a[n]);return e})({ProcessHeader:A,PageWrapper:a,[i.name]:i,[c.name]:c,AEmpty:d,[m.name]:m,[m.Item.name]:m.Item,ActionButtons:h,BaseActionButtons:w,ProcessBackButton:g},y),setup(){const e=p(""),t=p(null),{createMessage:o}=k(),r=O(),{currentRoute:s}=u(),{params:{modelKey:a}}=f(s);return e.value=a,{currentView:e,processFormRef:t,doLaunch:function(){return e=this,s=null,a=function*(){yield f(t).doSubmit(),o.success("提交成功！"),r("/process/launched")},new Promise(((t,o)=>{var r=e=>{try{i(a.next(e))}catch(t){o(t)}},n=e=>{try{i(a.throw(e))}catch(t){o(t)}},i=e=>e.done?t(e.value):Promise.resolve(e.value).then(r,n);i((a=a.apply(e,s)).next())}));var e,s,a}}}});const I=v(" 发起流程 "),L={class:"m-1 desc-wrap"};F.render=function(e,t,o,r,s,a){const n=j("ProcessBackButton"),i=j("BaseActionButtons"),c=j("action-buttons"),d=j("PageWrapper");return l(),b(d,{contentBackground:"",class:"!mt-4"},{title:x((()=>[P(n),I,P(i)])),extra:x((()=>[P(c,{onDoLaunch:e.doLaunch},null,8,["onDoLaunch"])])),footer:x((()=>[])),default:x((()=>[P("div",L,[(l(),b(B(e.currentView),{ref:"processFormRef"},null,512))])])),_:1})};export default F;
