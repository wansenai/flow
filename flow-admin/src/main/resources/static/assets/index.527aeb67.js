import e from"./index.f914bbf3.js";import{u as a}from"./useFrameKeepAlive.2584f299.js";import{y as r,a as t,u as m,r as n,X as s,j as o,Z as f,B as i,F as l,v as u}from"./vendor.880b4c6c.js";import{a0 as d}from"./index.10e3b51a.js";import{a as c}from"./modelInfo.0f2f5696.js";import"./useWindowSizeFn.564cf32e.js";var p=r({name:"BpmnDesigner",components:{FramePage:e},setup(){const{currentRoute:e}=t(),{query:{modelId:r}}=m(e),f=n(""),i=n({}),l=d(),u=t(),p=l.getTabList.find((e=>e.fullPath===u.currentRoute.value.fullPath));s((()=>{0!==p.meta.title.indexOf("设计流程-")&&c(r).then((e=>{p.meta.title&&-1===p.meta.title.indexOf("-"+e.name)&&(p.meta.title=p.meta.title+"-"+e.name)})).catch((()=>{}))})),f.value="/flow-bpmn/index.html/#/bpmn/designer?modelId="+r;const{getFramePages:h,hasRenderFrame:g,showIframe:F}=a(),b=o((()=>m(h).length>0));return{getFramePages:h,hasRenderFrame:g,showIframe:F,showFrame:b,url:f,frame:i}}});p.render=function(e,a,r,t,m,n){const s=f("FramePage");return i(),l("div",null,[u(s,{frameSrc:e.url},null,8,["frameSrc"])])};export default p;
