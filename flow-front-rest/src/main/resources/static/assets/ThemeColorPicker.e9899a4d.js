import{c as e}from"./index.ac2432bc.js";import{b as t}from"./index.d74c04fb.js";import{k as s,bA as i,K as r,o as n,n as o,S as c,ag as a,q as p}from"./vendor.0482ef83.js";import"./index.128178c1.js";import"./createAsyncComponent.025c09bd.js";import"./index.82680ac2.js";import"./useWindowSizeFn.3a3072fc.js";import"./usePageContext.f06b7ee4.js";/* empty css              */import"./useSortable.6ab30817.js";import"./lock.44861f55.js";/* empty css              */var l=s({name:"ThemeColorPicker",components:{CheckOutlined:i},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(s){const{prefixCls:i}=e("setting-theme-picker");return{prefixCls:i,handleClick:function(e){s.event&&t(s.event,e)}}}});l.render=function(e,t,s,i,l,d){const m=r("CheckOutlined");return n(),o("div",{class:e.prefixCls},[(n(!0),o(c,null,a(e.colorList||[],(t=>(n(),o("span",{key:t,onClick:s=>e.handleClick(t),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}],style:{background:t}},[p(m)],14,["onClick"])))),128))],2)};export default l;
