import{_ as e}from"./Tree.vue_vue&type=style&index=0&lang.27335687.js";import{t}from"./data.2c592186.js";import{_ as a}from"./PageWrapper.30f94524.js";import{k as r,K as s,o as c,n as o,Q as n,q as i}from"./vendor.bc3b2d68.js";import"./index.f8d8fadd.js";import"./useContextMenu.5b80cc46.js";/* empty css              */import"./useExpose.c4c32617.js";import"./usePageContext.03c6eac3.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.06aaefd7.js";var d=r({components:{BasicTree:e,PageWrapper:a},setup:()=>({treeData:t,handleCheck:function(e,t){}})});const p={class:"flex"};d.render=function(e,t,a,r,d,l){const m=s("BasicTree"),f=s("PageWrapper");return c(),o(f,{title:"Tree基础示例"},{default:n((()=>[i("div",p,[i(m,{treeData:e.treeData,title:"基础示例",class:"w-1/3"},null,8,["treeData"]),i(m,{treeData:e.treeData,title:"可勾选",checkable:!0,class:"w-1/3 mx-4",onCheck:e.handleCheck},null,8,["treeData","onCheck"]),i(m,{title:"默认展开/勾选示例",treeData:e.treeData,checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"],class:"w-1/3"},null,8,["treeData"])])])),_:1})};export default d;
