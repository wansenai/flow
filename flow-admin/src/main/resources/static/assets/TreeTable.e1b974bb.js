import{_ as e}from"./TableImg.69b87631.js";import"./BasicForm.ccc180d0.js";import{u as i}from"./useTable.96fb9503.js";import{getBasicColumns as o,getTreeTableData as s}from"./tableData.83d6955e.js";import{j as t,K as r,o as a,m as d,n,Q as p,Y as m}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.753834fe.js";import"./index.91a03d82.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.cf90a7d3.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.aa5494d2.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.66e49cf5.js";/* empty css              *//* empty css              *//* empty css              */import"./download.c38f734c.js";import"./base64Conver.bb012c73.js";import"./index.10e7af93.js";var l=t({components:{BasicTable:e},setup(){const[e,{expandAll:t,collapseAll:r}]=i({title:"树形表格",isTreeTable:!0,rowSelection:{type:"checkbox"},titleHelpMessage:"树形组件不能和序列号列同时存在",columns:o(),dataSource:s(),rowKey:"id"});return{register:e,expandAll:t,collapseAll:r}}});const c={class:"p-4"},j=m("展开全部"),f=m("折叠全部");l.render=function(e,i,o,s,t,m){const l=r("a-button"),b=r("BasicTable");return a(),d("div",c,[n(b,{onRegister:e.register},{toolbar:p((()=>[n(l,{type:"primary",onClick:e.expandAll},{default:p((()=>[j])),_:1},8,["onClick"]),n(l,{type:"primary",onClick:e.collapseAll},{default:p((()=>[f])),_:1},8,["onClick"])])),_:1},8,["onRegister"])])};export default l;