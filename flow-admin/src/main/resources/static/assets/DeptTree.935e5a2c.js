import{_ as e}from"./Tree.vue_vue&type=style&index=0&lang.e8be757a.js";import{a as t}from"./system.79f5df33.js";import{k as r,r as a,I as s,K as n,o,n as i,q as l}from"./vendor.56d2c57f.js";import"./index.407e4786.js";import"./useContextMenu.553121b5.js";/* empty css              */import"./useExpose.46777d04.js";var c=r({name:"DeptTree",components:{BasicTree:e},emits:["select"],setup(e,{emit:r}){const n=a([]);function o(){return e=this,r=null,a=function*(){n.value=yield t()},new Promise(((t,s)=>{var n=e=>{try{i(a.next(e))}catch(t){s(t)}},o=e=>{try{i(a.throw(e))}catch(t){s(t)}},i=e=>e.done?t(e.value):Promise.resolve(e.value).then(n,o);i((a=a.apply(e,r)).next())}));var e,r,a}return s((()=>{o()})),{treeData:n,handleSelect:function(e,t){r("select",e[0])}}}});const d={class:"bg-white m-4 mr-0 overflow-hidden"};c.render=function(e,t,r,a,s,c){const m=n("BasicTree");return o(),i("div",d,[l(m,{title:"部门列表",toolbar:"",search:"",clickRowToExpand:!1,treeData:e.treeData,replaceFields:{key:"id",title:"deptName"},onSelect:e.handleSelect},null,8,["treeData","onSelect"])])};export default c;