var e=Object.defineProperty,r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(r,t,o)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o;import{k as n}from"./index.33a0330f.js";import{J as l,u as i}from"./vendor.bc3b2d68.js";function c(e,c){return{initSortable:function(){l((()=>{return l=this,u=null,s=function*(){e&&(yield n((()=>import("./sortable.esm.c87c7eb9.js")),void 0)).default.create(i(e),((e,n)=>{for(var l in n||(n={}))t.call(n,l)&&a(e,l,n[l]);if(r)for(var l of r(n))o.call(n,l)&&a(e,l,n[l]);return e})({animation:500,delay:400,delayOnTouchOnly:!0},c))},new Promise(((e,r)=>{var t=e=>{try{a(s.next(e))}catch(t){r(t)}},o=e=>{try{a(s.throw(e))}catch(t){r(t)}},a=r=>r.done?e(r.value):Promise.resolve(r.value).then(t,o);a((s=s.apply(l,u)).next())}));var l,u,s}))}}}export{c as u};
