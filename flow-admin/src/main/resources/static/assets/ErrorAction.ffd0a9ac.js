import{A as l,a9 as m,c2 as d,a as _,j as f,a0 as e,B as g,a1 as E,a6 as a,w as c}from"./vendor.7bee64cc.js";/* empty css                */import{_ as C,I as L,b8 as b,b as h,P as B}from"./index.9eb02b52.js";const I=l({name:"ErrorAction",components:{Icon:L,Tooltip:m,Badge:d},setup(){const{t:o}=h(),{push:n}=_(),t=b(),r=f(()=>t.getErrorLogListCount);function s(){n(B.ERROR_LOG_PAGE).then(()=>{t.setErrorLogListCount(0)})}return{t:o,getCount:r,handleToErrorList:s}}});function T(o,n,t,r,s,j){const i=e("Icon"),u=e("Badge"),p=e("Tooltip");return g(),E(p,{title:o.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:o.handleToErrorList},{default:a(()=>[c(u,{count:o.getCount,offset:[0,10],overflowCount:99},{default:a(()=>[c(i,{icon:"ion:bug-outline"})]),_:1},8,["count"])]),_:1},8,["title","mouseEnterDelay","onClick"])}var R=C(I,[["render",T]]);export{R as default};
