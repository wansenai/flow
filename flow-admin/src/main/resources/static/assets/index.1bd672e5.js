import{k as e,r as t,c6 as i,I as n,o as s,n as a,R as r,K as c,q as d,s as o,x as l}from"./vendor.9d9efc92.js";import{_ as u}from"./PageWrapper.0a593267.js";import"./index.68bdfa67.js";import"./usePageContext.a9e23595.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";var p=e({name:"ClickOutSide",emits:["mounted","clickOutside"],setup(e,{emit:s}){const a=t(null);return i(a,(()=>{s("clickOutside")})),n((()=>{s("mounted")})),{wrap:a}}});const k={ref:"wrap"};p.render=function(e,t,i,n,c,d){return s(),a("div",k,[r(e.$slots,"default")],512)};var f=e({components:{ClickOutSide:p,PageWrapper:u},setup(){const e=t("Click");return{innerClick:function(){e.value="Click Inner"},handleClickOutside:function(){e.value="Click Out Side"},text:e}}});const m=l(),C=m(((e,t,i,n,r,l)=>{const u=c("ClickOutSide"),p=c("PageWrapper");return s(),a(p,{title:"点内外部触发事件"},{default:m((()=>[d(u,{onClickOutside:e.handleClickOutside,class:"flex justify-center"},{default:m((()=>[d("div",{onClick:t[1]||(t[1]=(...t)=>e.innerClick&&e.innerClick(...t)),class:"demo-box"},o(e.text),1)])),_:1},8,["onClickOutside"])])),_:1})}));f.render=C,f.__scopeId="data-v-824d9cd0";export default f;
