import{c as e}from"./index.21f8a12f.js";import{b as t}from"./index.6a485b25.js";import{k as s,bA as i,K as r,o as n,n as o,S as a,ag as p,q as c}from"./vendor.d660e98f.js";import"./index.fd47e92e.js";import"./createAsyncComponent.a3b22c89.js";import"./index.a861f1be.js";import"./useWindowSizeFn.4f1b8c18.js";import"./usePageContext.7550f9ef.js";/* empty css              */import"./useSortable.0b13751b.js";import"./lock.889a0470.js";/* empty css              */var l=s({name:"ThemeColorPicker",components:{CheckOutlined:i},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(s){const{prefixCls:i}=e("setting-theme-picker");return{prefixCls:i,handleClick:function(e){s.event&&t(s.event,e)}}}});l.render=function(e,t,s,i,l,f){const d=r("CheckOutlined");return n(),o("div",{class:e.prefixCls},[(n(!0),o(a,null,p(e.colorList||[],(t=>(n(),o("span",{key:t,onClick:s=>e.handleClick(t),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}],style:{background:t}},[c(d)],14,["onClick"])))),128))],2)};export default l;
