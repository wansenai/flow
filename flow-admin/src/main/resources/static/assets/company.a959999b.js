import{a$ as e,aP as a,av as t}from"./index.f72cd585.js";var r,s;(s=r||(r={})).CompanyList="/flow/org/company/getCompanies",s.SaveOrUpdate="/flow/org/company/saveOrUpdate",s.Delete="/flow/org/company/delete",s.CheckEntityExist="/flow/org/company/checkEntityExist";const o=s=>{const o=t.post({url:r.CompanyList,params:s});return Promise.resolve(o).then((t=>{const r=e(t,{id:"id",children:"children",pid:"pid"});return a(r,(e=>{0===e.children.length&&delete e.children}),{id:"id",children:"children",pid:"pid"}),r}))},i=e=>t.post({url:r.SaveOrUpdate,params:e}),n=e=>t.post({url:r.Delete,params:e}),p=e=>t.post({url:r.CheckEntityExist,params:e});export{p as c,n as d,o as g,i as s};
