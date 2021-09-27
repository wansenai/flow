import{_ as e}from"./Tree.vue_vue&type=style&index=0&lang.3379d7f3.js";import{t}from"./data.5e96733f.js";import{P as a}from"./index.ee54ff18.js";import{y as n,b6 as r,aW as d,aV as l,aL as o,r as s,m as i,Y as u,u as p,Z as c,B as f,F as m,a2 as y,v as x,a9 as D}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              *//* empty css              */import"./index.10e3b51a.js";import"./useContextMenu.71a4b76c.js";/* empty css              *//* empty css              *//* empty css              */import"./onMountedOrActivated.8f899bfb.js";import"./useWindowSizeFn.564cf32e.js";import"./useContentViewHeight.17c92794.js";var v=n({components:{BasicTree:e,PageWrapper:a,Card:r,Row:d,Col:l,Spin:o},setup(){const e=s(null),a=s(null),n=s([]),r=s(!1);const d=s([{title:"parent ",key:"0-0"}]);return{treeData:t,handleCheck:function(e,t){},tree:d,onLoadData:function(t){return new Promise((a=>{t.children?setTimeout((()=>{const n=p(e);if(n){const e=[{title:`Child Node ${t.eventKey}-0`,key:`${t.eventKey}-0`},{title:`Child Node ${t.eventKey}-1`,key:`${t.eventKey}-1`}];n.updateNodeByKey(t.eventKey,{children:e}),n.setExpandedKeys([t.eventKey,...n.getExpandedKeys()])}a()}),1e3):a()}))},asyncTreeRef:e,asyncExpandTreeRef:a,tree2:n,loadTreeData:function(){r.value=!0,setTimeout((()=>{n.value=i(t),r.value=!1,u((()=>{var e;null==(e=p(a))||e.expandAll(!0)}))}),2e3)},treeLoading:r}}});const j=D("加载数据");v.render=function(e,t,a,n,r,d){const l=c("BasicTree"),o=c("Col"),s=c("a-button"),i=c("Spin"),u=c("Card"),p=c("Row"),D=c("PageWrapper");return f(),m(D,{title:"Tree基础示例"},{default:y((()=>[x(p,{gutter:[16,16]},{default:y((()=>[x(o,{span:8},{default:y((()=>[x(l,{title:"基础示例，默认展开第一层",treeData:e.treeData,defaultExpandLevel:"1"},null,8,["treeData"])])),_:1}),x(o,{span:8},{default:y((()=>[x(l,{title:"可勾选，默认全部展开",treeData:e.treeData,checkable:!0,defaultExpandAll:"",onCheck:e.handleCheck},null,8,["treeData","onCheck"])])),_:1}),x(o,{span:8},{default:y((()=>[x(l,{title:"指定默认展开/勾选示例",treeData:e.treeData,checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"]},null,8,["treeData"])])),_:1}),x(o,{span:8},{default:y((()=>[x(l,{title:"懒加载异步树",ref:"asyncTreeRef",treeData:e.tree,"load-data":e.onLoadData},null,8,["treeData","load-data"])])),_:1}),x(o,{span:16},{default:y((()=>[x(u,{title:"异步数据，默认展开"},{extra:y((()=>[x(s,{onClick:e.loadTreeData,loading:e.treeLoading},{default:y((()=>[j])),_:1},8,["onClick","loading"])])),default:y((()=>[x(i,{spinning:e.treeLoading},{default:y((()=>[x(l,{ref:"asyncExpandTreeRef",treeData:e.tree2},null,8,["treeData"])])),_:1},8,["spinning"])])),_:1})])),_:1})])),_:1})])),_:1})};export default v;
