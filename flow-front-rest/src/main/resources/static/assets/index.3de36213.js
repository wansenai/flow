import{B as e,K as t,aH as o,c as s,O as r,S as i}from"./index.bfefd9f4.js";import{k as n,c2 as a,f as m,a as c,K as g,o as p,n as d,q as u,W as f,S as j}from"./vendor.0482ef83.js";import{c as l}from"./createAsyncComponent.05f240f7.js";import S from"./SessionTimeoutLogin.2a5c9674.js";import"./Login.edd42d82.js";import"./LoginForm.dc541356.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./LoginFormTitle.97fc0bd8.js";import"./ForgetPasswordForm.ef5c5374.js";import"./CountdownInput.2c4c3183.js";import"./RegisterForm.19568d07.js";import"./StrengthMeter.97839b85.js";import"./MobileForm.a2ec60ef.js";import"./QrCodeForm.ccd1819c.js";import"./download.84b94ed6.js";var T=n({name:"LayoutFeatures",components:{BackTop:a,LayoutLockPage:l((()=>e((()=>import("./index.bac5ebbc.js")),["/assets/index.bac5ebbc.js","/assets/LockPage.9bedb9a1.js","/assets/LockPage.ee8eff52.css","/assets/vendor.0482ef83.js","/assets/vendor.859e9874.css","/assets/index.bfefd9f4.js","/assets/index.37e6979f.css","/assets/lock.c6040ead.js","/assets/header.d801b988.js"]))),SettingDrawer:l((()=>e((()=>import("./index.c526b713.js").then((function(e){return e.i}))),["/assets/index.c526b713.js","/assets/index.bc312a72.css","/assets/index.6d85b653.css","/assets/vendor.0482ef83.js","/assets/vendor.859e9874.css","/assets/index.255fa42c.js","/assets/index.0bb69dec.css","/assets/index.35476bad.css","/assets/index.bfefd9f4.js","/assets/index.37e6979f.css","/assets/createAsyncComponent.05f240f7.js","/assets/index.c7febf40.js","/assets/index.0b21aa7b.css","/assets/useWindowSizeFn.3a3072fc.js","/assets/usePageContext.2f9e0efb.js","/assets/useSortable.d0e38048.js","/assets/lock.c6040ead.js"]))),SessionTimeoutLogin:S},setup(){const{getUseOpenBackTop:e,getShowSettingButton:n,getSettingButtonPosition:a,getFullContent:g}=t(),p=o(),{prefixCls:d}=s("setting-drawer-fearure"),{getShowHeader:u}=r(),f=m((()=>p.getSessionTimeout));return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:m((()=>{if(!c(n))return!1;const e=c(a);return e===i.AUTO?!c(u)||c(g):e===i.FIXED})),prefixCls:d,getIsSessionTimeout:f}}});T.render=function(e,t,o,s,r,i){const n=g("LayoutLockPage"),a=g("BackTop"),m=g("SettingDrawer"),c=g("SessionTimeoutLogin");return p(),d(j,null,[u(n),e.getUseOpenBackTop?(p(),d(a,{key:0,target:e.getTarget},null,8,["target"])):f("",!0),e.getIsFixedSettingDrawer?(p(),d(m,{key:1,class:e.prefixCls},null,8,["class"])):f("",!0),e.getIsSessionTimeout?(p(),d(c,{key:2})):f("",!0)],64)};export default T;
