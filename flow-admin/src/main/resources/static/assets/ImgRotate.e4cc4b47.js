var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(t,r,s)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s,a=(e,a)=>{for(var o in a||(a={}))r.call(a,o)&&i(e,o,a[o]);if(t)for(var o of t(a))s.call(a,o)&&i(e,o,a[o]);return e};import{d as o,bh as n,m}from"./index.bafd7c31.js";import{r as c,B as d}from"./DragVerify.29256d28.js";import{k as g,r as p,A as l,D as u,f,q as h,u as v,N as y,a2 as T}from"./vendor.d159a66e.js";import"./useExpose.0ecfeadd.js";var w=g({name:"ImgRotateDargVerify",inheritAttrs:!1,props:c,emits:["success","change","update:value"],setup(e,{emit:t,attrs:r}){const s=p(null),i=l({showTip:!1,isPassing:!1,imgStyle:{},randomRotate:0,currentRotate:0,toOrigin:!1,startTime:0,endTime:0,draged:!1}),{t:c}=o();u((()=>i.isPassing),(e=>{if(e){const{startTime:r,endTime:s}=i;t("success",{isPassing:e,time:((s-r)/1e3).toFixed(1)}),t("change",e),t("update:value",e)}}));const g=f((()=>{const{imgWrapStyle:t,imgWidth:r}=e;return a({width:`${r}px`,height:`${r}px`},t)})),w=f((()=>{const{minDegree:t,maxDegree:r}=e;return t===r?Math.floor(1+1*Math.random())/10+1:1}));function b(){i.startTime=(new Date).getTime()}function D(t){i.draged=!0;const{imgWidth:r,height:s,maxDegree:a}=e,{moveX:o}=t,m=Math.ceil(o/(r-parseInt(s))*a*v(w));i.currentRotate=m,i.imgStyle=n("transform",`rotateZ(${i.randomRotate-m}deg)`)}function P(){const{minDegree:t,maxDegree:r}=e,s=Math.floor(t+Math.random()*(r-t));i.randomRotate=s,i.imgStyle=n("transform",`rotateZ(${s}deg)`)}function x(){const{randomRotate:t,currentRotate:r}=i,{diffDegree:s}=e;Math.abs(t-r)>=(s||20)?(i.imgStyle=n("transform",`rotateZ(${t}deg)`),i.toOrigin=!0,m((()=>{i.toOrigin=!1,i.showTip=!0}),300)):(i.isPassing=!0,i.endTime=(new Date).getTime()),i.showTip=!0}function O(){i.showTip=!1;const e=v(s);e&&(i.isPassing=!1,e.resume(),P())}const S=T();return S&&(S.resume=O),()=>{const{src:t}=e,{toOrigin:o,isPassing:n,startTime:m,endTime:p}=i,l=[];o&&l.push("to-origin");const u=(p-m)/1e3;return h("div",{class:"ir-dv"},[h("div",{class:"ir-dv-img__wrap",style:v(g)},[h("img",{src:t,onLoad:P,width:parseInt(e.width),class:l,style:i.imgStyle,onClick:()=>{O()}},null),i.showTip&&h("span",{class:["ir-dv-img__tip",i.isPassing?"success":"error"]},[i.isPassing?c("component.verify.time",{time:u.toFixed(1)}):c("component.verify.error")]),!i.showTip&&!i.draged&&h("span",{class:["ir-dv-img__tip","normal"]},[c("component.verify.redoTip")])]),h(d,y({class:"ir-dv-drag__bar",onMove:D,onEnd:x,onStart:b,ref:s},a(a({},r),e),{value:n,isSlot:!0}),null)])}}});export default w;
