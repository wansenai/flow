import{C as e}from"./index.514e05b1.js";import{u as t}from"./useWindowSizeFn.9fecf134.js";import{r as n,j as i,u as o}from"./vendor.11d66826.js";const r=Symbol();const a=n(0),s=n(0);function u(){return{headerHeightRef:a,footerHeightRef:s,setHeaderHeight:function(e){a.value=e},setFooterHeight:function(e){s.value=e}}}function h(){const u=n(window.innerHeight),h=n(window.innerHeight),c=i((()=>o(u)-o(a)-o(s)||0));t((()=>{u.value=window.innerHeight}),100,{immediate:!0}),e({contentHeight:c,setPageHeight:function(e){return t=this,n=null,i=function*(){h.value=e},new Promise(((e,o)=>{var r=e=>{try{s(i.next(e))}catch(t){o(t)}},a=e=>{try{s(i.throw(e))}catch(t){o(t)}},s=t=>t.done?e(t.value):Promise.resolve(t.value).then(r,a);s((i=i.apply(t,n)).next())}));var t,n,i},pageHeight:h},r,{native:!0})}export{u as a,h as u};
