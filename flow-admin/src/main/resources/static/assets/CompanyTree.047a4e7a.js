import{k as e,aH as t,r as a,I as n,K as r,ar as o,w as s,o as i,n as l,q as c}from"./vendor.9d9efc92.js";import{_ as d}from"./Tree.vue_vue&type=style&index=0&lang.a4a9c706.js";import{g as m}from"./company.08334ec9.js";import{a_ as p}from"./index.6992208b.js";import"./useContextMenu.9975a880.js";/* empty css              */import"./useExpose.0886c4eb.js";var u=e({name:"CompanyTree",components:{BasicTree:d,Spin:t},emits:["select"],setup(e,{emit:t}){const r=a([]),o=a(!1);function s(){return e=this,t=null,a=function*(){o.value=!0,m().then((e=>{r.value=e})).finally((()=>{o.value=!1}))},new Promise(((n,r)=>{var o=e=>{try{i(a.next(e))}catch(t){r(t)}},s=e=>{try{i(a.throw(e))}catch(t){r(t)}},i=e=>e.done?n(e.value):Promise.resolve(e.value).then(o,s);i((a=a.apply(e,t)).next())}));var e,t,a}return n((()=>{s()})),{treeData:r,treeLoading:o,handleSelect:function(e,a){const n=p(r.value,(t=>t.id===e[0]),{id:"id",pid:"pid",children:"children"});t("select",n)}}}});const v={class:"company-tree bg-white m-4 mr-0 overflow-hidden"};u.render=function(e,t,a,n,d,m){const p=r("BasicTree"),u=o("loading");return s((i(),l("div",v,[c(p,{title:"公司",toolbar:"",search:"",clickRowToExpand:!1,treeData:e.treeData,replaceFields:{key:"id",title:"shortName"},onSelect:e.handleSelect},null,8,["treeData","onSelect"])],512)),[[u,e.treeLoading]])};export default u;
