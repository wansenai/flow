import{k as e,bw as t,f as n,K as s,o as i,n as a,q as d,s as o,N as r,x as c}from"./vendor.d660e98f.js";/* empty css              */import{c as l,d as p}from"./index.ee676e78.js";import{b as f}from"./index.7e5e71fc.js";import"./index.b56394b9.js";import"./createAsyncComponent.876e5416.js";import"./index.53f91b4e.js";import"./useWindowSizeFn.4f1b8c18.js";import"./usePageContext.741f964f.js";/* empty css              */import"./useSortable.9da73453.js";import"./lock.75c574ee.js";/* empty css              */var m=e({name:"SwitchItem",components:{Switch:t},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=l("setting-switch-item"),{t:s}=p();return{prefixCls:t,t:s,handleChange:function(t){e.event&&f(e.event,t)},getBindValue:n((()=>e.def?{checked:e.def}:{}))}}});const h=c()(((e,t,n,c,l,p)=>{const f=s("Switch");return i(),a("div",{class:e.prefixCls},[d("span",null,o(e.title),1),d(f,r(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}));m.render=h,m.__scopeId="data-v-fd7354e2";export default m;
