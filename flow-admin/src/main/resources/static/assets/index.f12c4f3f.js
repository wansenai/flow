import{J as e,l as t,b5 as o,c as i,$ as s}from"./index.081912a1.js";import{j as r,co as n,i as a,u as m,K as p,o as d,m as g,n as u,X as c,V as j}from"./vendor.686fd1d4.js";import{c as f,u as b}from"./index.924abc7f.js";import l from"./SessionTimeoutLogin.fc0b746a.js";import"./index.970f1cb3.js";import"./useWindowSizeFn.d82e06bf.js";import"./useFrameKeepAlive.c3b11b00.js";import"./useContentViewHeight.95769b80.js";/* empty css              *//* empty css              */import"./useSortable.a0cc3f55.js";import"./lock.054be4a1.js";import"./Login.4f8ec2a7.js";import"./LoginForm.33f85303.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./LoginFormTitle.60f20770.js";import"./ForgetPasswordForm.87a1d225.js";import"./index.3784ba30.js";import"./RegisterForm.e63efa41.js";import"./index.5abcd6f5.js";import"./MobileForm.51a72cef.js";import"./QrCodeForm.e00d946e.js";import"./index.750a6093.js";import"./download.456194d0.js";import"./base64Conver.bb012c73.js";var x=r({name:"LayoutFeatures",components:{BackTop:n,LayoutLockPage:f((()=>e((()=>import("./index.9dbfde13.js")),["/assets/index.9dbfde13.js","/assets/LockPage.aa11a77c.js","/assets/LockPage.ee8eff52.css","/assets/vendor.686fd1d4.js","/assets/vendor.caa95c00.css","/assets/index.081912a1.js","/assets/index.b89ee803.css","/assets/lock.054be4a1.js","/assets/header.d801b988.js"]))),SettingDrawer:f((()=>e((()=>import("./index.3401d249.js").then((function(e){return e.i}))),["/assets/index.3401d249.js","/assets/index.6d85b653.css","/assets/index.e6724ba9.js","/assets/index.bb8cb3fb.css","/assets/index.864ac48e.css","/assets/index.081912a1.js","/assets/index.b89ee803.css","/assets/vendor.686fd1d4.js","/assets/vendor.caa95c00.css","/assets/index.924abc7f.js","/assets/index.39cf26f1.css","/assets/index.4881b566.css","/assets/index.970f1cb3.js","/assets/index.140aa9f4.css","/assets/useWindowSizeFn.d82e06bf.js","/assets/useFrameKeepAlive.c3b11b00.js","/assets/useContentViewHeight.95769b80.js","/assets/useSortable.a0cc3f55.js","/assets/lock.054be4a1.js"]))),SessionTimeoutLogin:l},setup(){const{getUseOpenBackTop:e,getShowSettingButton:r,getSettingButtonPosition:n,getFullContent:p}=t(),d=o(),{prefixCls:g}=i("setting-drawer-fearure"),{getShowHeader:u}=b(),c=a((()=>d.getSessionTimeout));return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:a((()=>{if(!m(r))return!1;const e=m(n);return e===s.AUTO?!m(u)||m(p):e===s.FIXED})),prefixCls:g,getIsSessionTimeout:c}}});x.render=function(e,t,o,i,s,r){const n=p("LayoutLockPage"),a=p("BackTop"),m=p("SettingDrawer"),f=p("SessionTimeoutLogin");return d(),g(j,null,[u(n),e.getUseOpenBackTop?(d(),g(a,{key:0,target:e.getTarget},null,8,["target"])):c("",!0),e.getIsFixedSettingDrawer?(d(),g(m,{key:1,class:e.prefixCls},null,8,["class"])):c("",!0),e.getIsSessionTimeout?(d(),g(f,{key:2})):c("",!0)],64)};export default x;