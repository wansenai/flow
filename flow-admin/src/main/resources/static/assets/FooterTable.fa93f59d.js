import{_ as e}from"./TableImg.7eb6c017.js";import"./BasicForm.86cd97da.js";import{u as o}from"./useTable.5323312b.js";import{getBasicColumns as r}from"./tableData.83d6955e.js";import{d as s}from"./table.2b83964f.js";import{k as t,K as i,o as a,n,q as d}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              */import"./useForm.87ab8aa1.js";import"./index.33a0330f.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.ade0e88c.js";import"./useModal.b44b8cab.js";import"./onMountedOrActivated.06aaefd7.js";/* empty css              */import"./useSortable.a66d7f9a.js";import"./useExpose.c4c32617.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.0bc8da65.js";/* empty css              *//* empty css              */import"./download.5032960b.js";import"./StrengthMeter.ae9219d5.js";var m=t({components:{BasicTable:e},setup(){const[e]=o({title:"表尾行合计示例",api:s,rowSelection:{type:"checkbox"},columns:r(),showSummary:!0,summaryFunc:function(e){const o=e.reduce(((e,o)=>e+=o.no),0);return[{_row:"合计",_index:"平均值",no:o},{_row:"合计",_index:"平均值",no:o}]},scroll:{x:2e3},canResize:!1});return{registerTable:e}}});const p={class:"p-4"};m.render=function(e,o,r,s,t,m){const c=i("BasicTable");return a(),n("div",p,[d(c,{onRegister:e.registerTable},null,8,["onRegister"])])};export default m;
