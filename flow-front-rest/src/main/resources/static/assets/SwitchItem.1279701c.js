import{k as e,bw as t,f as n,K as s,o as i,n as a,q as d,s as o,N as r,x as c}from"./vendor.0482ef83.js";/* empty css              */import{c as f,d as l}from"./index.bfefd9f4.js";import{b as p}from"./index.c526b713.js";import"./index.255fa42c.js";import"./createAsyncComponent.05f240f7.js";import"./index.c7febf40.js";import"./useWindowSizeFn.3a3072fc.js";import"./usePageContext.2f9e0efb.js";/* empty css              */import"./useSortable.d0e38048.js";import"./lock.c6040ead.js";/* empty css              */var m=e({name:"SwitchItem",components:{Switch:t},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=f("setting-switch-item"),{t:s}=l();return{prefixCls:t,t:s,handleChange:function(t){e.event&&p(e.event,t)},getBindValue:n((()=>e.def?{checked:e.def}:{}))}}});const h=c()(((e,t,n,c,f,l)=>{const p=s("Switch");return i(),a("div",{class:e.prefixCls},[d("span",null,o(e.title),1),d(p,r(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}));m.render=h,m.__scopeId="data-v-fd7354e2";export default m;
