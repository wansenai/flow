var f=(o,c,t)=>new Promise((n,r)=>{var l=e=>{try{a(t.next(e))}catch(s){r(s)}},i=e=>{try{a(t.throw(e))}catch(s){r(s)}},a=e=>e.done?n(e.value):Promise.resolve(e.value).then(l,i);a((t=t.apply(o,c)).next())});import{az as u,a as _,b4 as h,w as d,O as v,aB as g,bS as B,y as T,o as D,i as w,p as b,an as y,j as p,fD as C}from"./index.e1964776.js";import{_ as S}from"./index.125a810f.js";import{g as $}from"./category.3b951e51.js";import"./fromPairs.daf93cb7.js";import"./index.b3d10dbf.js";import"./eagerComputed.83fd49b0.js";import"./useContextMenu.97b7e9e2.js";import"./index.41617e4d.js";import"./get.6b7894e0.js";const k=_({name:"FlowCategoryTree",components:{BasicTree:S,Spin:h},emits:["select"],setup(o,{emit:c}){const t=d([]),n=d(!1),r=d(null);function l(){return f(this,null,function*(){n.value=!0,$().then(a=>{t.value=a,y(()=>{var e;p(t).length<10&&((e=p(r))==null||e.filterByLevel(1))})}).finally(()=>{n.value=!1})})}function i(a,e){const s=C(t.value,m=>m.id===a[0],{id:"id",pid:"pid",children:"children"});c("select",s)}return v(()=>{l()}),{treeData:t,treeLoading:n,basicTreeRef:r,handleSelect:i}}}),L={class:"bg-white m-4 mr-0 overflow-hidden"};function R(o,c,t,n,r,l){const i=g("BasicTree"),a=B("loading");return T((D(),w("div",L,[b(i,{title:"\u6D41\u7A0B\u5206\u7C7B",toolbar:"",search:"",clickRowToExpand:!1,treeData:o.treeData,onSelect:o.handleSelect,ref:"basicTreeRef"},null,8,["treeData","onSelect"])])),[[a,o.treeLoading]])}var q=u(k,[["render",R]]);export{q as default};
