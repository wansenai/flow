import{av as e,a$ as s,aP as t}from"./index.f8d8fadd.js";var a,i;(i=a||(a={})).GetDicTypes="/flow/base/dicType/getDicTypes",i.SaveOrUpdate="/flow/base/dicType/saveOrUpdate",i.Delete="/flow/base/dicType/delete",i.CheckEntityExist="/flow/base/dicType/checkEntityExist";const d=i=>{const d=e.post({url:a.GetDicTypes,params:i});return Promise.resolve(d).then((e=>{const a=s(e,{id:"id",children:"children",pid:"pid"});return t(a,(e=>{0===e.children.length&&delete e.children}),{id:"id",children:"children",pid:"pid"}),a}))},r=s=>e.post({url:a.SaveOrUpdate,params:s}),p=s=>e.post({url:a.Delete,params:s}),c=s=>e.post({url:a.CheckEntityExist,params:s});export{c,p as d,d as g,r as s};
