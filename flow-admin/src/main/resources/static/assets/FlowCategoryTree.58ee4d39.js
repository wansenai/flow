import{y as e,aL as a,r as t,X as r,Y as n,u as l,Z as s,au as i,G as o,B as c,F as d,v as u}from"./vendor.880b4c6c.js";import{_ as m}from"./Tree.vue_vue&type=style&index=0&lang.3379d7f3.js";import{g as v}from"./category.e01854a1.js";import{b9 as p}from"./index.10e3b51a.js";import"./useContextMenu.71a4b76c.js";/* empty css              */var f=e({name:"FlowCategoryTree",components:{BasicTree:m,Spin:a},emits:["select"],setup(e,{emit:a}){const s=t([]),i=t(!1),o=t(null);function c(){return e=this,a=null,t=function*(){i.value=!0,v().then((e=>{s.value=e,n((()=>{var e;l(s).length<10&&(null==(e=l(o))||e.filterByLevel(1))}))})).finally((()=>{i.value=!1}))},new Promise(((r,n)=>{var l=e=>{try{i(t.next(e))}catch(a){n(a)}},s=e=>{try{i(t.throw(e))}catch(a){n(a)}},i=e=>e.done?r(e.value):Promise.resolve(e.value).then(l,s);i((t=t.apply(e,a)).next())}));var e,a,t}return r((()=>{c()})),{treeData:s,treeLoading:i,basicTreeRef:o,handleSelect:function(e,t){const r=p(s.value,(a=>a.id===e[0]),{id:"id",pid:"pid",children:"children"});a("select",r)}}}});const h={class:"bg-white m-4 mr-0 overflow-hidden"};f.render=function(e,a,t,r,n,l){const m=s("BasicTree"),v=i("loading");return o((c(),d("div",h,[u(m,{title:"流程分类",toolbar:"",search:"",clickRowToExpand:!1,treeData:e.treeData,replaceFields:{key:"id",title:"name"},onSelect:e.handleSelect,ref:"basicTreeRef"},null,8,["treeData","onSelect"])],512)),[[v,e.treeLoading]])};export default f;
