import{aw as e,b8 as r,aS as a}from"./index.10e3b51a.js";var t,s;(s=t||(t={})).GetJobGradeTypes="/flow/org/jobGradeType/getJobGradeTypes",s.SaveOrUpdate="/flow/org/jobGradeType/saveOrUpdate",s.Delete="/flow/org/jobGradeType/delete",s.CheckEntityExist="/flow/org/jobGradeType/checkEntityExist";const d=r=>e.post({url:t.GetJobGradeTypes,params:r}),o=s=>{const d=e.post({url:t.GetJobGradeTypes,params:s});return Promise.resolve(d).then((e=>{const t=r(e,{id:"id",children:"children",pid:"pid"});return a(t,(e=>{0===e.children.length&&delete e.children}),{id:"id",children:"children",pid:"pid"}),t}))},p=r=>e.post({url:t.SaveOrUpdate,params:r}),i=r=>e.post({url:t.CheckEntityExist,params:r}),l=r=>e.post({url:t.Delete,params:r});export{d as a,i as c,l as d,o as g,p as s};
