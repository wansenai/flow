import{a$ as e,aP as r,av as t}from"./index.33a0330f.js";var d,i;(i=d||(d={})).DeptList="/flow/org/department/getAll",i.GetOrgTree="/flow/org/department/getOrgTree",i.SaveOrUpdate="/flow/org/department/saveOrUpdate",i.Delete="/flow/org/department/delete",i.CheckEntityExist="/flow/org/department/checkEntityExist";const n=i=>{const n=t.post({url:d.DeptList,params:i});return Promise.resolve(n).then((t=>{const d=e(t,{id:"id",children:"children",pid:"pid"});return r(d,(e=>{0===e.children.length&&delete e.children}),{id:"id",children:"children",pid:"pid"}),d}))},a=()=>{const i=t.get({url:d.GetOrgTree});return Promise.resolve(i).then((t=>{const d=e(t,{id:"id",children:"children",pid:"pid"});return r(d,(e=>{0===e.children.length&&delete e.children}),{id:"id",children:"children",pid:"pid"}),d}))},l=e=>t.post({url:d.SaveOrUpdate,params:e}),s=e=>t.post({url:d.Delete,params:e}),p=e=>t.post({url:d.CheckEntityExist,params:e});export{n as a,p as c,s as d,a as g,l as s};
