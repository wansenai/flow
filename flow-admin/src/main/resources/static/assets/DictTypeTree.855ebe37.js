import{_ as e}from"./Tree.vue_vue&type=style&index=0&lang.39b0f7de.js";import{g as t}from"./dicType.e591f397.js";import{k as r,r as a,I as n,K as s,o,n as c,q as i}from"./vendor.bc3b2d68.js";import"./index.f72cd585.js";import"./useContextMenu.e2a9a589.js";/* empty css              */import"./useExpose.c4c32617.js";var l=r({name:"DictTypeTree",components:{BasicTree:e},emits:["select"],setup(e,{emit:r}){const s=a([]);function o(){return e=this,r=null,a=function*(){s.value=yield t()},new Promise(((t,n)=>{var s=e=>{try{c(a.next(e))}catch(t){n(t)}},o=e=>{try{c(a.throw(e))}catch(t){n(t)}},c=e=>e.done?t(e.value):Promise.resolve(e.value).then(s,o);c((a=a.apply(e,r)).next())}));var e,r,a}return n((()=>{o()})),{treeData:s,handleSelect:function(e,t){r("select",e[0])}}}});const d={class:"bg-white m-4 mr-0 overflow-hidden"};l.render=function(e,t,r,a,n,l){const m=s("BasicTree");return o(),c("div",d,[i(m,{title:"数据分类",toolbar:"",search:"",clickRowToExpand:!1,treeData:e.treeData,replaceFields:{key:"id",title:"name"},onSelect:e.handleSelect},null,8,["treeData","onSelect"])])};export default l;
