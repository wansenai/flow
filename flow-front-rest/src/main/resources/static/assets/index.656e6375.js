import{B as e,K as t,aH as o,c as s,O as r,S as i}from"./index.fe7e6ae2.js";import{k as n,c2 as a,f as m,a as g,K as p,o as d,n as u,q as c,W as f,S as j}from"./vendor.d660e98f.js";import{c as l}from"./createAsyncComponent.d2690156.js";import S from"./SessionTimeoutLogin.7e113ee2.js";import"./Login.f478d15b.js";import"./LoginForm.c1096397.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./LoginFormTitle.aaa8bc13.js";import"./ForgetPasswordForm.b4154f32.js";import"./CountdownInput.3cddc062.js";import"./RegisterForm.0a2df184.js";import"./StrengthMeter.a0087382.js";import"./MobileForm.556eb706.js";import"./QrCodeForm.79575a4b.js";import"./download.a51d0688.js";var T=n({name:"LayoutFeatures",components:{BackTop:a,LayoutLockPage:l((()=>e((()=>import("./index.1ba41d1d.js")),["/assets/index.1ba41d1d.js","/assets/LockPage.a23c7d76.js","/assets/LockPage.265a0b3b.css","/assets/vendor.d660e98f.js","/assets/vendor.859e9874.css","/assets/index.fe7e6ae2.js","/assets/index.37e6979f.css","/assets/lock.6b90cbc9.js","/assets/header.d801b988.js"]))),SettingDrawer:l((()=>e((()=>import("./index.d84445c4.js").then((function(e){return e.i}))),["/assets/index.d84445c4.js","/assets/index.bc312a72.css","/assets/index.6d85b653.css","/assets/vendor.d660e98f.js","/assets/vendor.859e9874.css","/assets/index.4ee0beb4.js","/assets/index.189f624f.css","/assets/index.35476bad.css","/assets/index.fe7e6ae2.js","/assets/index.37e6979f.css","/assets/createAsyncComponent.d2690156.js","/assets/index.8363e6ca.js","/assets/index.0b21aa7b.css","/assets/useWindowSizeFn.4f1b8c18.js","/assets/usePageContext.a4ed025e.js","/assets/useSortable.f32532ef.js","/assets/lock.6b90cbc9.js"]))),SessionTimeoutLogin:S},setup(){const{getUseOpenBackTop:e,getShowSettingButton:n,getSettingButtonPosition:a,getFullContent:p}=t(),d=o(),{prefixCls:u}=s("setting-drawer-fearure"),{getShowHeader:c}=r(),f=m((()=>d.getSessionTimeout));return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:m((()=>{if(!g(n))return!1;const e=g(a);return e===i.AUTO?!g(c)||g(p):e===i.FIXED})),prefixCls:u,getIsSessionTimeout:f}}});T.render=function(e,t,o,s,r,i){const n=p("LayoutLockPage"),a=p("BackTop"),m=p("SettingDrawer"),g=p("SessionTimeoutLogin");return d(),u(j,null,[c(n),e.getUseOpenBackTop?(d(),u(a,{key:0,target:e.getTarget},null,8,["target"])):f("",!0),e.getIsFixedSettingDrawer?(d(),u(m,{key:1,class:e.prefixCls},null,8,["class"])):f("",!0),e.getIsSessionTimeout?(d(),u(g,{key:2})):f("",!0)],64)};export default T;
