import{z as o,a5 as t,bW as e,a as n,j as r,Z as a,D as s,F as i,a3 as u,w as l}from"./vendor.11d66826.js";/* empty css              */import{_ as c,b4 as d,e as f,P as m}from"./index.514e05b1.js";var p=o({name:"ErrorAction",components:{Icon:c,Tooltip:t,Badge:e},setup(){const{t:o}=f(),{push:t}=n(),e=d();return{t:o,getCount:r((()=>e.getErrorLogListCount)),handleToErrorList:function(){t(m.ERROR_LOG_PAGE).then((()=>{e.setErrorLogListCount(0)}))}}}});p.render=function(o,t,e,n,r,c){const d=a("Icon"),f=a("Badge"),m=a("Tooltip");return s(),i(m,{title:o.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:o.handleToErrorList},{default:u((()=>[l(f,{count:o.getCount,offset:[0,10],overflowCount:99},{default:u((()=>[l(d,{icon:"ion:bug-outline"})])),_:1},8,["count"])])),_:1},8,["title","mouseEnterDelay","onClick"])};export default p;
