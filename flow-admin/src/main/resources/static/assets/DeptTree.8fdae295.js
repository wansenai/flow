var m=(a,r,e)=>new Promise((n,o)=>{var s=t=>{try{i(e.next(t))}catch(p){o(p)}},c=t=>{try{i(e.throw(t))}catch(p){o(p)}},i=t=>t.done?n(t.value):Promise.resolve(t.value).then(s,c);i((e=e.apply(a,r)).next())});import{_ as l}from"./index.694f5114.js";import{a as d}from"./system.4c6c82c4.js";import{a as f,w as u,O as _,az as h,aB as D,o as B,i as T,p as v}from"./index.7ea10544.js";import"./fromPairs.daf93cb7.js";import"./index.60e2cd93.js";import"./eagerComputed.087e7096.js";import"./useContextMenu.936ed174.js";import"./index.5d6fdc93.js";import"./get.4066932b.js";const w=f({name:"DeptTree",components:{BasicTree:l},emits:["select"],setup(a,{emit:r}){const e=u([]);function n(){return m(this,null,function*(){e.value=yield d()})}function o(s){r("select",s[0])}return _(()=>{n()}),{treeData:e,handleSelect:o}}}),$={class:"m-4 mr-0 overflow-hidden bg-white"};function k(a,r,e,n,o,s){const c=D("BasicTree");return B(),T("div",$,[v(c,{title:"\u90E8\u95E8\u5217\u8868",toolbar:"",search:"",clickRowToExpand:!1,treeData:a.treeData,fieldNames:{key:"id",title:"deptName"},onSelect:a.handleSelect},null,8,["treeData","onSelect"])])}var M=h(w,[["render",k]]);export{M as default};