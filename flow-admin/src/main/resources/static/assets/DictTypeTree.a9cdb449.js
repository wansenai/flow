import{_ as e}from"./Tree.vue_vue&type=style&index=0&lang.7c7fa1d7.js";import{g as t}from"./dicType.947f2fad.js";import{y as a,r,X as n,Z as s,B as o,F as i,v as c}from"./vendor.880b4c6c.js";import"./index.a33a5e4d.js";import"./useContextMenu.e79ddf62.js";/* empty css              */var l=a({name:"DictTypeTree",components:{BasicTree:e},emits:["select"],setup(e,{emit:a}){const s=r([]);function o(){return e=this,a=null,r=function*(){s.value=yield t()},new Promise(((t,n)=>{var s=e=>{try{i(r.next(e))}catch(t){n(t)}},o=e=>{try{i(r.throw(e))}catch(t){n(t)}},i=e=>e.done?t(e.value):Promise.resolve(e.value).then(s,o);i((r=r.apply(e,a)).next())}));var e,a,r}return n((()=>{o()})),{treeData:s,handleSelect:function(e,t){a("select",e[0])}}}});const d={class:"bg-white m-4 mr-0 overflow-hidden"};l.render=function(e,t,a,r,n,l){const m=s("BasicTree");return o(),i("div",d,[c(m,{title:"数据分类",toolbar:"",search:"",clickRowToExpand:!1,treeData:e.treeData,replaceFields:{key:"id",title:"name"},onSelect:e.handleSelect},null,8,["treeData","onSelect"])])};export default l;
