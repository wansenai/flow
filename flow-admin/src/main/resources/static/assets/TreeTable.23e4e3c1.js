import{_ as e}from"./TableImg.7eb6c017.js";import"./BasicForm.86cd97da.js";import{u as o}from"./useTable.5323312b.js";import{getBasicColumns as t,getTreeTableData as s}from"./tableData.83d6955e.js";import{k as i,K as a,o as r,n as d,q as n,Q as p,Y as l}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              */import"./useForm.87ab8aa1.js";import"./index.33a0330f.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.ade0e88c.js";import"./useModal.b44b8cab.js";import"./onMountedOrActivated.06aaefd7.js";/* empty css              */import"./useSortable.a66d7f9a.js";import"./useExpose.c4c32617.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.0bc8da65.js";/* empty css              *//* empty css              */import"./download.5032960b.js";import"./StrengthMeter.ae9219d5.js";var m=i({components:{BasicTable:e},setup(){const[e,{expandAll:i,collapseAll:a}]=o({title:"树形表格",isTreeTable:!0,rowSelection:{type:"checkbox"},titleHelpMessage:"树形组件不能和序列号列同时存在",columns:t(),dataSource:s(),rowKey:"id"});return{register:e,expandAll:i,collapseAll:a}}});const c={class:"p-4"},b=l("展开全部"),j=l("折叠全部");m.render=function(e,o,t,s,i,l){const m=a("a-button"),u=a("BasicTable");return r(),d("div",c,[n(u,{onRegister:e.register},{toolbar:p((()=>[n(m,{type:"primary",onClick:e.expandAll},{default:p((()=>[b])),_:1},8,["onClick"]),n(m,{type:"primary",onClick:e.collapseAll},{default:p((()=>[j])),_:1},8,["onClick"])])),_:1},8,["onRegister"])])};export default m;
