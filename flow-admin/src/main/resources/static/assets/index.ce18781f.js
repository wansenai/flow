import{k as e,l as t,b3 as o,c as s,U as r,W as i}from"./index.33a0330f.js";import{k as n,cl as a,f as m,u as p,K as g,o as d,n as c,q as u,X as j,V as f}from"./vendor.bc3b2d68.js";import{c as l}from"./createAsyncComponent.2cc595b8.js";import b from"./SessionTimeoutLogin.973776da.js";import"./Login.5d7bf819.js";import"./LoginForm.9486abe7.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./LoginFormTitle.6614a052.js";import"./ForgetPasswordForm.905ec6ba.js";import"./CountdownInput.0bc8da65.js";import"./RegisterForm.5f06dec0.js";import"./StrengthMeter.ae9219d5.js";import"./MobileForm.d69d35ab.js";import"./QrCodeForm.61345c08.js";import"./Qrcode.066e5ead.js";import"./download.5032960b.js";var T=n({name:"LayoutFeatures",components:{BackTop:a,LayoutLockPage:l((()=>e((()=>import("./index.4e0c8143.js")),["/assets/index.4e0c8143.js","/assets/LockPage.7400a530.js","/assets/LockPage.ee8eff52.css","/assets/vendor.bc3b2d68.js","/assets/vendor.70495537.css","/assets/index.33a0330f.js","/assets/index.69000eb3.css","/assets/lock.d7ad1662.js","/assets/header.d801b988.js"]))),SettingDrawer:l((()=>e((()=>import("./index.39b4cd66.js").then((function(e){return e.i}))),["/assets/index.39b4cd66.js","/assets/index.6d85b653.css","/assets/useDrawer.38d8f014.js","/assets/useDrawer.1b4eeea2.css","/assets/index.864ac48e.css","/assets/vendor.bc3b2d68.js","/assets/vendor.70495537.css","/assets/index.33a0330f.js","/assets/index.69000eb3.css","/assets/createAsyncComponent.2cc595b8.js","/assets/useFrameKeepAlive.fd8bfba4.js"]))),SessionTimeoutLogin:b},setup(){const{getUseOpenBackTop:e,getShowSettingButton:n,getSettingButtonPosition:a,getFullContent:g}=t(),d=o(),{prefixCls:c}=s("setting-drawer-fearure"),{getShowHeader:u}=r(),j=m((()=>d.getSessionTimeout));return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:m((()=>{if(!p(n))return!1;const e=p(a);return e===i.AUTO?!p(u)||p(g):e===i.FIXED})),prefixCls:c,getIsSessionTimeout:j}}});T.render=function(e,t,o,s,r,i){const n=g("LayoutLockPage"),a=g("BackTop"),m=g("SettingDrawer"),p=g("SessionTimeoutLogin");return d(),c(f,null,[u(n),e.getUseOpenBackTop?(d(),c(a,{key:0,target:e.getTarget},null,8,["target"])):j("",!0),e.getIsFixedSettingDrawer?(d(),c(m,{key:1,class:e.prefixCls},null,8,["class"])):j("",!0),e.getIsSessionTimeout?(d(),c(p,{key:2})):j("",!0)],64)};export default T;
