import{k as e,aH as t,r as a,I as r,K as n,ar as o,w as s,o as i,n as l,q as c}from"./vendor.9d9efc92.js";import{_ as d}from"./Tree.vue_vue&type=style&index=0&lang.e79165c2.js";import{a_ as u}from"./index.68bdfa67.js";import{g as p}from"./jobGradeType.1c48f182.js";import"./useContextMenu.edb2fdbf.js";/* empty css              */import"./useExpose.0886c4eb.js";var m=e({name:"JobGradeTypeList",components:{BasicTree:d,Spin:t},emits:["select"],setup(e,{emit:t}){const n=a([]),o=a(!1);function s(){return e=this,t=null,a=function*(){o.value=!0,p().then((e=>{n.value=e})).finally((()=>{o.value=!1}))},new Promise(((r,n)=>{var o=e=>{try{i(a.next(e))}catch(t){n(t)}},s=e=>{try{i(a.throw(e))}catch(t){n(t)}},i=e=>e.done?r(e.value):Promise.resolve(e.value).then(o,s);i((a=a.apply(e,t)).next())}));var e,t,a}return r((()=>{s()})),{treeData:n,treeLoading:o,handleSelect:function(e,a){const r=u(n.value,(t=>t.id===e[0]),{id:"id",pid:"pid",children:"children"});t("select",r)}}}});const f={class:"bg-white m-4 mr-0 overflow-hidden"};m.render=function(e,t,a,r,d,u){const p=n("BasicTree"),m=o("loading");return s((i(),l("div",f,[c(p,{title:"职级分类",toolbar:"",search:"",clickRowToExpand:!1,treeData:e.treeData,replaceFields:{key:"id",title:"name"},onSelect:e.handleSelect},null,8,["treeData","onSelect"])],512)),[[m,e.treeLoading]])};export default m;
