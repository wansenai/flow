import{ai as e}from"./index.491886fb.js";var t,n;function a(n){return e.post({url:t.Complete,params:n})}function s(n){return e.post({url:t.GetAppingTaskCont,params:n})}function o(n){return e.post({url:t.StopProcess,params:n})}function r(n){return e.get({url:t.LoadBpmnXmlByModelKey+"/"+n.modelKey,params:{}})}function d(n){return e.get({url:t.GetCommentInfosByProcessInstanceId+"/"+n.procInstId,params:{}})}function p(n){return e.get({url:t.GetHighLightedNodeVoByProcessInstanceId+"/"+n.procInstId,params:{}})}function g(n){return e.get({url:t.GetOneActivityVoByProcessInstanceIdAndActivityId+"/"+n.procInstId+"/"+n.elementId,params:{}})}(n=t||(t={})).FindMyProcessinstancesPagerModel="/front/flow/findMyProcessinstancesPagerModel",n.GetApplyedTasksPagerModel="/front/flow/getApplyedTasksPagerModel",n.GetAppingTasksPagerModel="/front/flow/getAppingTasksPagerModel",n.GetApps="/front/flow/getApps",n.Complete="/front/flow/complete",n.StopProcess="/front/flow/stopProcess",n.GetOneActivityVoByProcessInstanceIdAndActivityId="/front/flow/getOneActivityVoByProcessInstanceIdAndActivityId",n.GetCommentInfosByProcessInstanceId="/front/flow/getCommentInfosByProcessInstanceId",n.GetHighLightedNodeVoByProcessInstanceId="/front/flow/getHighLightedNodeVoByProcessInstanceId",n.LoadBpmnXmlByModelKey="/front/flow/loadBpmnXmlByModelKey",n.GetAppingTaskCont="/front/flow/getAppingTaskCont";const i=n=>e.get({url:t.GetApps,params:n}).then((e=>(e.forEach((e=>{e.label=e.name,e.value=e.sn})),Promise.resolve(e))));function l(n){const a=n&&{pageNum:n.pageNum,pageSize:n.pageSize};let s=n||{};s.dateRange&&(s.startTime=n.dateRange[0],s.endTime=n.dateRange[1]),s&&(delete s.pageNum,delete s.pageSize,delete s.dateRange);const o={query:a,entity:s};return e.post({url:t.FindMyProcessinstancesPagerModel,params:o})}function c(n){const a=n&&{pageNum:n.pageNum,pageSize:n.pageSize};let s=n||{};s.dateRange&&(s.startTime=n.dateRange[0],s.endTime=n.dateRange[1]),s&&(delete s.pageNum,delete s.pageSize,delete s.dateRange);const o={query:a,entity:s};return e.post({url:t.GetAppingTasksPagerModel,params:o})}function m(n){const a=n&&{pageNum:n.pageNum,pageSize:n.pageSize};let s=n||{};s.dateRange&&(s.startTime=n.dateRange[0],s.endTime=n.dateRange[1]),s&&(delete s.pageNum,delete s.pageSize,delete s.dateRange);const o={query:a,entity:s};return e.post({url:t.GetApplyedTasksPagerModel,params:o})}export{c as a,m as b,a as c,d,p as e,g as f,s as g,i as h,l as i,r as l,o as s};
