import{k as e,aG as a,r as n,f as s,a as t,I as r,J as i,K as o,o as l,n as c,q as f,x as p}from"./vendor.d660e98f.js";import{p as m,c as d,a9 as u}from"./index.51c58f14.js";import{u as g}from"./useWindowSizeFn.4f1b8c18.js";var v=e({name:"IFrame",components:{Spin:a},props:{frameSrc:m.string.def("")},setup(){const e=n(!1),a=n(50),o=n(window.innerHeight),l=n(null),{prefixCls:c}=d("iframe-page");g(p,150,{immediate:!0});const f=s((()=>({height:`${t(o)}px`})));function p(){const e=t(l);if(!e)return;let{top:n}=u(e);n+=20,a.value=n,o.value=window.innerHeight-n,document.documentElement.clientHeight,e.style.height="100%"}function m(){e.value=!1,p()}return r((()=>{e.value=!0,i((()=>{const e=t(l);if(!e)return;const a=e;a.attachEvent?a.attachEvent("onload",(()=>{m()})):e.onload=()=>{m()}}))})),{getWrapStyle:f,loading:e,frameRef:l,prefixCls:c}}});const h=p(),x=h(((e,a,n,s,t,r)=>{const i=o("Spin");return l(),c("div",{class:e.prefixCls,style:e.getWrapStyle},[f(i,{wrapperClassName:"custom-spin-container",spinning:e.loading,size:"large",style:e.getWrapStyle},{default:h((()=>[f("iframe",{src:e.frameSrc,class:`${e.prefixCls}__main`,ref:"frameRef"},null,10,["src"])])),_:1},8,["spinning","style"])],6)}));v.render=x,v.__scopeId="data-v-3c0be771";export default v;
