import e from"./Login.29ece849.js";import{c as o,f as s,N as r,X as i,b2 as a}from"./index.eb9d6ed9.js";import{j as t,r as n,I as d,a3 as m,K as p,o as c,m as f,n as j,T as l,x as u}from"./vendor.686fd1d4.js";import"./LoginForm.e9ab7804.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./LoginFormTitle.f459939e.js";import"./ForgetPasswordForm.44023cb0.js";import"./index.2aa1bf44.js";import"./RegisterForm.0ad775a6.js";import"./index.cab36059.js";import"./MobileForm.fedbecc4.js";import"./QrCodeForm.3ab1e425.js";import"./index.59cf1ed9.js";import"./download.6cc0299c.js";import"./base64Conver.bb012c73.js";var b=t({name:"SessionTimeoutLogin",components:{Login:e},setup(){const{prefixCls:e}=o("st-login"),t=s(),p=r(),c=i(),f=n(0);return d((()=>{var e;f.value=null==(e=t.getUserInfo)?void 0:e.userId})),m((()=>{(f.value&&f.value!==t.getUserInfo.userId||c.getProjectConfig.permissionMode===a.BACK&&0===p.getLastBuildMenuTime)&&document.location.reload()})),{prefixCls:e}}});const g=u(),x=g(((e,o,s,r,i,a)=>{const t=p("Login");return c(),f(l,null,{default:g((()=>[j("div",{class:e.prefixCls},[j(t,{sessionTimeout:""})],2)])),_:1})}));b.render=x,b.__scopeId="data-v-43322cae";export default b;