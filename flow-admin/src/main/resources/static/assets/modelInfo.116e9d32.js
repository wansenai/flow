import{dO as o}from"./index.7ea10544.js";const a=e=>{const t=e&&{pageNum:e.pageNum,pageSize:e.pageSize};let l=e||{};l&&(delete l.pageNum,delete l.pageSize);const s={query:t,entity:l};return o.post({url:"/flow/flowable/modelInfo/getPagerModel",params:s})};function p(e){return o.get({url:"/flow/flowable/bpmn/getBpmnByModelKey/"+e.modelKey,params:{}})}const f=e=>o.post({url:"/flow/flowable/modelInfo/saveOrUpdateModelInfo",params:e},{isReturnNativeResponse:!0}),d=e=>o.post({url:"/flow/flowable/bpmn/publishBpmn/"+e}),r=e=>o.post({url:"/flow/flowable/bpmn/stopBpmn/"+e}),m=e=>o.get({url:"/flow/flowable/modelInfo/getByModelId/"+e}),u=e=>o.post({url:"/flow/flowable/modelInfo/deleteByIds",params:e}),g=e=>o.post({url:"/flow/flowable/modelInfo/checkEntityExist",params:e});export{p as a,a as b,f as c,u as d,g as e,m as g,d as p,r as s};