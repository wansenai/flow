import e from"./index.97f8ea61.js";import{u as a}from"./useFrameKeepAlive.0fd2dbc2.js";import{k as r,a as t,u as m,r as n,I as s,f as o,K as i,o as l,n as f,q as d}from"./vendor.9d9efc92.js";import{X as u}from"./index.6992208b.js";import{a as c}from"./modelInfo.eec14aae.js";import"./useWindowSizeFn.0534066c.js";var p=r({name:"BpmnDesigner",components:{FramePage:e},setup(){const{currentRoute:e}=t(),{query:{modelId:r}}=m(e),i=n(""),l=n({}),f=u(),d=t(),p=f.getTabList.find((e=>e.fullPath===d.currentRoute.value.fullPath));s((()=>{0!==p.meta.title.indexOf("设计流程-")&&c(r).then((e=>{p.meta.title&&-1===p.meta.title.indexOf("-"+e.name)&&(p.meta.title=p.meta.title+"-"+e.name)})).catch((()=>{}))})),i.value="/flow-bpmn/index.html/#/bpmn/designer?modelId="+r;const{getFramePages:h,hasRenderFrame:g,showIframe:F}=a(),j=o((()=>m(h).length>0));return{getFramePages:h,hasRenderFrame:g,showIframe:F,showFrame:j,url:i,frame:l}}});p.render=function(e,a,r,t,m,n){const s=i("FramePage");return l(),f("div",null,[d(s,{frameSrc:e.url},null,8,["frameSrc"])])};export default p;
