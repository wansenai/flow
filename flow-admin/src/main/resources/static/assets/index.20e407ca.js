import o from"./LockPage.ef6ba2d1.js";import{u as e}from"./lock.75e4548a.js";import{z as a,j as t,Z as r,D as s,F as n,a3 as c,a8 as d,_ as m}from"./vendor.11d66826.js";import"./index.514e05b1.js";import"./header.d801b988.js";var u=a({name:"Lock",components:{LockPage:o},setup(){const o=e();return{getIsLock:t((()=>{var e,a;return null!=(a=null==(e=null==o?void 0:o.getLockInfo)?void 0:e.isLock)&&a}))}}});u.render=function(o,e,a,t,u,i){const k=r("LockPage");return s(),n(m,{name:"fade-bottom",mode:"out-in"},{default:c((()=>[o.getIsLock?(s(),n(k,{key:0})):d("",!0)])),_:1})};export default u;
