import{_ as e}from"./Tree.vue_vue&type=style&index=0&lang.a4a9c706.js";import{a as t}from"./system.af21eab8.js";import{k as a,r,I as s,K as n,o,n as i,q as c}from"./vendor.9d9efc92.js";import"./index.6992208b.js";import"./useContextMenu.9975a880.js";/* empty css              */import"./useExpose.0886c4eb.js";var l=a({name:"DeptTree",components:{BasicTree:e},emits:["select"],setup(e,{emit:a}){const n=r([]);function o(){return e=this,a=null,r=function*(){n.value=yield t()},new Promise(((t,s)=>{var n=e=>{try{i(r.next(e))}catch(t){s(t)}},o=e=>{try{i(r.throw(e))}catch(t){s(t)}},i=e=>e.done?t(e.value):Promise.resolve(e.value).then(n,o);i((r=r.apply(e,a)).next())}));var e,a,r}return s((()=>{o()})),{treeData:n,handleSelect:function(e,t){a("select",e[0])}}}});const m={class:"bg-white m-4 mr-0 overflow-hidden"};l.render=function(e,t,a,r,s,l){const u=n("BasicTree");return o(),i("div",m,[c(u,{title:"部门列表",toolbar:"",search:"",clickRowToExpand:!1,treeData:e.treeData,replaceFields:{key:"id",title:"deptName"},onSelect:e.handleSelect},null,8,["treeData","onSelect"])])};export default l;
