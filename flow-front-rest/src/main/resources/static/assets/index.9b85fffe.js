import{A as _,aO as h,r as o,j as v,u as r,_ as y,$ as S,a0 as w,B as $,D as x,w as C,a5 as H,H as z,K as d,X as u}from"./vendor.5eb38889.js";import{p as W,a as j,_ as B,ae as E}from"./index.eb81839e.js";import{u as F}from"./useWindowSizeFn.e269959a.js";const R=_({name:"IFrame",components:{Spin:h},props:{frameSrc:W.string.def("")},setup(){const e=o(!1),l=o(50),i=o(window.innerHeight),a=o(null),{prefixCls:c}=j("iframe-page");F(s,150,{immediate:!0});const p=v(()=>({height:`${r(i)}px`}));function s(){const n=r(a);if(!n)return;let{top:t}=E(n);t+=20,l.value=t,i.value=window.innerHeight-t;const g=document.documentElement.clientHeight-t;n.style.height=`${g}px`}function f(){e.value=!1,s()}function m(){S(()=>{const n=r(a);if(!n)return;const t=n;t.attachEvent?t.attachEvent("onload",()=>{f()}):n.onload=()=>{f()}})}return y(()=>{e.value=!0,m()}),{getWrapStyle:p,loading:e,frameRef:a,prefixCls:c}}}),k=["src"];function V(e,l,i,a,c,p){const s=w("Spin");return $(),x("div",{class:d(e.prefixCls),style:u(e.getWrapStyle)},[C(s,{spinning:e.loading,size:"large",style:u(e.getWrapStyle)},{default:H(()=>[z("iframe",{src:e.frameSrc,class:d(`${e.prefixCls}__main`),ref:"frameRef"},null,10,k)]),_:1},8,["spinning","style"])],6)}var N=B(R,[["render",V],["__scopeId","data-v-4d9a5dd8"]]);export{N as default};