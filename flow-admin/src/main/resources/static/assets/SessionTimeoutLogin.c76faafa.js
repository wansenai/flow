import o from"./Login.b00d446f.js";import{c as e,f as s,N as r,X as i,b7 as a}from"./index.e99064e4.js";import{y as t,r as n,X as d,ag as m,Z as p,B as f,F as c,v as l,_ as j,K as u}from"./vendor.880b4c6c.js";import"./LoginForm.fde876a2.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./LoginFormTitle.67b917c4.js";import"./ForgetPasswordForm.3529f755.js";import"./index.45c1baba.js";import"./RegisterForm.01262a4d.js";import"./index.d495e6fa.js";import"./MobileForm.1ad70721.js";import"./QrCodeForm.07af1ecd.js";import"./index.8d88f56c.js";import"./download.1143de04.js";import"./base64Conver.bb012c73.js";var g=t({name:"SessionTimeoutLogin",components:{Login:o},setup(){const{prefixCls:o}=e("st-login"),t=s(),p=r(),f=i(),c=n(0);return d((()=>{var o;c.value=null==(o=t.getUserInfo)?void 0:o.userId})),m((()=>{(c.value&&c.value!==t.getUserInfo.userId||f.getProjectConfig.permissionMode===a.BACK&&0===p.getLastBuildMenuTime)&&document.location.reload()})),{prefixCls:o}}});const b=u(),x=b(((o,e,s,r,i,a)=>{const t=p("Login");return f(),c(j,null,{default:b((()=>[l("div",{class:o.prefixCls},[l(t,{sessionTimeout:""})],2)])),_:1})}));g.render=x,g.__scopeId="data-v-43322cae";export default g;
