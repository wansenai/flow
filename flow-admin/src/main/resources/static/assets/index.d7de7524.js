import{k as e,aH as a,r as n,f as t,I as s,u as r,J as i,K as o,o as l,n as f,q as c,x as p}from"./vendor.bc3b2d68.js";import{p as d,c as m,ab as u}from"./index.f8d8fadd.js";import{u as g}from"./useWindowSizeFn.ade0e88c.js";var v=e({name:"IFrame",components:{Spin:a},props:{frameSrc:d.string.def("")},setup(){const e=n(!1),a=n(50),o=n(window.innerHeight),l=n(null),{prefixCls:f}=m("iframe-page");g(p,150,{immediate:!0});const c=t((()=>({height:`${r(o)}px`})));function p(){const e=r(l);if(!e)return;let{top:n}=u(e);n+=20,a.value=n,o.value=window.innerHeight-n;const t=document.documentElement.clientHeight-n;e.style.height=`${t}px`}function d(){e.value=!1,p()}return s((()=>{e.value=!0,i((()=>{const e=r(l);if(!e)return;const a=e;a.attachEvent?a.attachEvent("onload",(()=>{d()})):e.onload=()=>{d()}}))})),{getWrapStyle:c,loading:e,frameRef:l,prefixCls:f}}});const h=p(),x=h(((e,a,n,t,s,r)=>{const i=o("Spin");return l(),f("div",{class:e.prefixCls,style:e.getWrapStyle},[c(i,{spinning:e.loading,size:"large",style:e.getWrapStyle},{default:h((()=>[c("iframe",{src:e.frameSrc,class:`${e.prefixCls}__main`,ref:"frameRef"},null,10,["src"])])),_:1},8,["spinning","style"])],6)}));v.render=x,v.__scopeId="data-v-4a5f3274";export default v;
