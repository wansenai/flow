import{_ as e}from"./TableImg.840b2332.js";import"./BasicForm.d12ec528.js";import{u as o}from"./useTable.14907d98.js";import{getBasicColumns as r}from"./tableData.83d6955e.js";import{d as s}from"./table.95360230.js";import{k as t,K as i,o as n,n as a,q as m}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.831c770a.js";import"./index.68bdfa67.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./useModal.40813107.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.86f4c026.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.69c99d5f.js";/* empty css              *//* empty css              */import"./download.684fb6a2.js";import"./StrengthMeter.e21abcab.js";var d=t({components:{BasicTable:e},setup(){const[e]=o({title:"表尾行合计示例",api:s,rowSelection:{type:"checkbox"},columns:r(),showSummary:!0,summaryFunc:function(e){const o=e.reduce(((e,o)=>e+=o.no),0);return[{_row:"合计",_index:"平均值",no:o},{_row:"合计",_index:"平均值",no:o}]},scroll:{x:2e3},canResize:!1});return{registerTable:e}}});const p={class:"p-4"};d.render=function(e,o,r,s,t,d){const c=i("BasicTable");return n(),a("div",p,[m(c,{onRegister:e.registerTable},null,8,["onRegister"])])};export default d;
