import{M as e}from"./index.50034253.js";import{_ as n}from"./PageWrapper.30f94524.js";import{k as a,r as t,u as o,K as r,o as s,n as i,Q as d,q as c,Y as l}from"./vendor.bc3b2d68.js";import"./index.f8d8fadd.js";import"./createAsyncComponent.dc75f7c3.js";import"./usePageContext.03c6eac3.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.06aaefd7.js";var m=a({components:{MarkDown:e,PageWrapper:n},setup(){const e=t(null),n=t("\n# title\n\n# content\n");return{value:n,toggleTheme:function(){const n=o(e);if(!n)return;n.getVditor().setTheme("dark")},markDownRef:e,handleChange:function(e){n.value=e}}}});const p=l(" 黑暗主题 ");m.render=function(e,n,a,t,o,l){const m=r("a-button"),u=r("MarkDown"),f=r("PageWrapper");return s(),i(f,{title:"MarkDown组件示例"},{default:d((()=>[c(m,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:d((()=>[p])),_:1},8,["onClick"]),c(u,{value:e.value,onChange:e.handleChange,ref:"markDownRef"},null,8,["value","onChange"])])),_:1})};export default m;
