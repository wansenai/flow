import o from"./LockPage.130c4552.js";import{u as e}from"./lock.f1d58193.js";import{j as t,i as r,K as s,o as a,m as n,Q as d,X as c,T as m}from"./vendor.686fd1d4.js";import"./index.04486bdf.js";import"./header.d801b988.js";var i=t({name:"Lock",components:{LockPage:o},setup(){const o=e();return{getIsLock:r((()=>{var e,t;return null!=(t=null==(e=null==o?void 0:o.getLockInfo)?void 0:e.isLock)&&t}))}}});i.render=function(o,e,t,r,i,u){const f=s("LockPage");return a(),n(m,{name:"fade-bottom",mode:"out-in"},{default:d((()=>[o.getIsLock?(a(),n(f,{key:0})):c("",!0)])),_:1})};export default i;