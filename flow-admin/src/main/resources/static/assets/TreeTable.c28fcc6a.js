import{_ as e}from"./TableImg.8ccd808f.js";import"./BasicForm.312985a0.js";import{u as o}from"./useTable.84f74a57.js";import{getBasicColumns as t,getTreeTableData as s}from"./tableData.83d6955e.js";import{k as i,K as a,o as r,n as d,q as n,Q as p,Y as l}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              */import"./useForm.a3596aad.js";import"./index.f8d8fadd.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.ade0e88c.js";import"./useModal.9d70781f.js";import"./onMountedOrActivated.06aaefd7.js";/* empty css              */import"./useSortable.88a1af21.js";import"./useExpose.c4c32617.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.7e403a5b.js";/* empty css              *//* empty css              */import"./download.7c99dac2.js";import"./StrengthMeter.16507ade.js";var m=i({components:{BasicTable:e},setup(){const[e,{expandAll:i,collapseAll:a}]=o({title:"树形表格",isTreeTable:!0,rowSelection:{type:"checkbox"},titleHelpMessage:"树形组件不能和序列号列同时存在",columns:t(),dataSource:s(),rowKey:"id"});return{register:e,expandAll:i,collapseAll:a}}});const c={class:"p-4"},j=l("展开全部"),f=l("折叠全部");m.render=function(e,o,t,s,i,l){const m=a("a-button"),u=a("BasicTable");return r(),d("div",c,[n(u,{onRegister:e.register},{toolbar:p((()=>[n(m,{type:"primary",onClick:e.expandAll},{default:p((()=>[j])),_:1},8,["onClick"]),n(m,{type:"primary",onClick:e.collapseAll},{default:p((()=>[f])),_:1},8,["onClick"])])),_:1},8,["onRegister"])])};export default m;
