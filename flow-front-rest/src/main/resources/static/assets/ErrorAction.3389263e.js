import{k as o,R as t,br as e,u as n,f as r,K as s,o as a,n as i,P as u,q as l}from"./vendor.d660e98f.js";/* empty css              */import{m as c,d,aj as f,P as m}from"./index.51c58f14.js";var p=o({name:"ErrorAction",components:{Icon:c,Tooltip:t,Badge:e},setup(){const{t:o}=d(),{push:t}=n(),e=f();return{t:o,getCount:r((()=>e.getErrorLogListCount)),handleToErrorList:function(){t(m.ERROR_LOG_PAGE).then((()=>{e.setErrorLogListCount(0)}))}}}});p.render=function(o,t,e,n,r,c){const d=s("Icon"),f=s("Badge"),m=s("Tooltip");return a(),i(m,{title:o.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:o.handleToErrorList},{default:u((()=>[l(f,{count:o.getCount,offset:[0,10],overflowCount:99},{default:u((()=>[l(d,{icon:"ion:bug-outline"})])),_:1},8,["count"])])),_:1},8,["title","mouseEnterDelay","onClick"])};export default p;
