import{dO as t,fC as n,f5 as c}from"./index.7ea10544.js";const l=o=>{const d=t.post({url:"/flow/org/company/getCompanies",params:o});return Promise.resolve(d).then(r=>{r.forEach(e=>{e.key=e.id,e.value=e.id,e.title=e.shortName,e.icon="bx:building-house"});const s=n(r,{id:"id",children:"children",pid:"pid"});return c(s,e=>{e.children.length===0&&delete e.children},{id:"id",children:"children",pid:"pid"}),s})},a=o=>t.post({url:"/flow/org/company/saveOrUpdate",params:o}),p=o=>t.post({url:"/flow/org/company/delete",params:o}),h=o=>t.post({url:"/flow/org/company/checkEntityExist",params:o});export{h as c,p as d,l as g,a as s};