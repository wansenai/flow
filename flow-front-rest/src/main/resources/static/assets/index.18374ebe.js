import{B as e,K as t,aH as o,c as s,O as r,S as i}from"./index.dd44fc8e.js";import{k as n,c2 as a,f as m,a as g,K as p,o as c,n as d,q as u,W as f,S as j}from"./vendor.d660e98f.js";import{c as l}from"./createAsyncComponent.7e34944e.js";import S from"./SessionTimeoutLogin.0db8435f.js";import"./Login.2f406615.js";import"./LoginForm.4f6c6238.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./LoginFormTitle.d34e4ce2.js";import"./ForgetPasswordForm.f68c3bbc.js";import"./CountdownInput.09f5734d.js";import"./RegisterForm.84e583f9.js";import"./StrengthMeter.33f765cc.js";import"./MobileForm.0cc7eff8.js";import"./QrCodeForm.1a6d6a2a.js";import"./download.fcebdcb4.js";var T=n({name:"LayoutFeatures",components:{BackTop:a,LayoutLockPage:l((()=>e((()=>import("./index.517e9656.js")),["/assets/index.517e9656.js","/assets/LockPage.f56bf630.js","/assets/LockPage.265a0b3b.css","/assets/vendor.d660e98f.js","/assets/vendor.859e9874.css","/assets/index.dd44fc8e.js","/assets/index.37e6979f.css","/assets/lock.c87395e3.js","/assets/header.d801b988.js"]))),SettingDrawer:l((()=>e((()=>import("./index.8f02aee9.js").then((function(e){return e.i}))),["/assets/index.8f02aee9.js","/assets/index.bc312a72.css","/assets/index.6d85b653.css","/assets/vendor.d660e98f.js","/assets/vendor.859e9874.css","/assets/index.0e8051d7.js","/assets/index.189f624f.css","/assets/index.35476bad.css","/assets/index.dd44fc8e.js","/assets/index.37e6979f.css","/assets/createAsyncComponent.7e34944e.js","/assets/index.4efa6606.js","/assets/index.0b21aa7b.css","/assets/useWindowSizeFn.4f1b8c18.js","/assets/usePageContext.913e3c16.js","/assets/useSortable.ddf51d02.js","/assets/lock.c87395e3.js"]))),SessionTimeoutLogin:S},setup(){const{getUseOpenBackTop:e,getShowSettingButton:n,getSettingButtonPosition:a,getFullContent:p}=t(),c=o(),{prefixCls:d}=s("setting-drawer-fearure"),{getShowHeader:u}=r(),f=m((()=>c.getSessionTimeout));return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:m((()=>{if(!g(n))return!1;const e=g(a);return e===i.AUTO?!g(u)||g(p):e===i.FIXED})),prefixCls:d,getIsSessionTimeout:f}}});T.render=function(e,t,o,s,r,i){const n=p("LayoutLockPage"),a=p("BackTop"),m=p("SettingDrawer"),g=p("SessionTimeoutLogin");return c(),d(j,null,[u(n),e.getUseOpenBackTop?(c(),d(a,{key:0,target:e.getTarget},null,8,["target"])):f("",!0),e.getIsFixedSettingDrawer?(c(),d(m,{key:1,class:e.prefixCls},null,8,["class"])):f("",!0),e.getIsSessionTimeout?(c(),d(g,{key:2})):f("",!0)],64)};export default T;
