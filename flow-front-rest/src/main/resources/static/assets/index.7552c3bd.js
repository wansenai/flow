import{_ as e}from"./PageWrapper.ffc84022.js";import{k as a,aT as t,bm as r,af as s,bi as o,r as n,I as i,K as c,aq as m,w as p,o as d,n as f,P as l,q as j}from"./vendor.0482ef83.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{ac as u,g as x}from"./index.ac2432bc.js";import b from"./ProcessHeader.e556e508.js";import"./usePageContext.f06b7ee4.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.66cf4856.js";/* empty css              */import"./process.86354d09.js";var v=a({components:{ProcessHeader:b,CollapseContainer:u,PageWrapper:e,[t.name]:t,[r.name]:r,AEmpty:s,[o.name]:o,[o.Item.name]:o.Item},setup(){const e=n(),{createMessage:a}=x();return i((()=>{})),{container:e,doSubmit:function(){return e=this,t=null,r=function*(){return a.info("开发中， 敬请期待！"),Promise.reject(!1)},new Promise(((a,s)=>{var o=e=>{try{i(r.next(e))}catch(a){s(a)}},n=e=>{try{i(r.throw(e))}catch(a){s(a)}},i=e=>e.done?a(e.value):Promise.resolve(e.value).then(o,n);i((r=r.apply(e,t)).next())}));var e,t,r}}}});const P=j("div",{class:"font-bold"},"基本信息",-1),g=j("div",{class:"text-lg text-center p-20"}," 开发中， 敬请期待！ ",-1);v.render=function(e,a,t,r,s,o){const n=c("CollapseContainer"),i=m("loading");return p((d(),f(n,{canExpan:!1},{title:l((()=>[P])),default:l((()=>[g])),_:1},512)),[[i,e.formLoading]])};export default v;
