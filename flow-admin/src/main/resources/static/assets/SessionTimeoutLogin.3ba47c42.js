import o from"./Login.7b662544.js";import{c as e,f as s,N as r,X as i,b7 as t}from"./index.8bbed969.js";import{y as a,r as n,X as d,ag as m,Z as p,B as b,F as c,v as l,_ as j,K as f}from"./vendor.880b4c6c.js";import"./LoginForm.ef1a86e8.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./LoginFormTitle.f1b4bbed.js";import"./ForgetPasswordForm.53c2b601.js";import"./index.a0306c89.js";import"./RegisterForm.1cbd5bde.js";import"./index.adea3535.js";import"./MobileForm.aa28b326.js";import"./QrCodeForm.0fc8e893.js";import"./index.76d3b67d.js";import"./download.92b34d7b.js";import"./base64Conver.bb012c73.js";var u=a({name:"SessionTimeoutLogin",components:{Login:o},setup(){const{prefixCls:o}=e("st-login"),a=s(),p=r(),b=i(),c=n(0);return d((()=>{var o;c.value=null==(o=a.getUserInfo)?void 0:o.userId})),m((()=>{(c.value&&c.value!==a.getUserInfo.userId||b.getProjectConfig.permissionMode===t.BACK&&0===p.getLastBuildMenuTime)&&document.location.reload()})),{prefixCls:o}}});const g=f(),x=g(((o,e,s,r,i,t)=>{const a=p("Login");return b(),c(j,null,{default:g((()=>[l("div",{class:o.prefixCls},[l(a,{sessionTimeout:""})],2)])),_:1})}));u.render=x,u.__scopeId="data-v-43322cae";export default u;