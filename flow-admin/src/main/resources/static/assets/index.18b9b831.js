import{J as e,l as t,ba as o,c as s,$ as i}from"./index.10e3b51a.js";import{y as r,cs as a,j as n,u as m,Z as p,B as d,F as g,v as c,a8 as u,a7 as f}from"./vendor.880b4c6c.js";import{c as j,u as b}from"./index.f3665714.js";import l from"./SessionTimeoutLogin.702295c6.js";import"./index.f914bbf3.js";import"./useWindowSizeFn.564cf32e.js";import"./useFrameKeepAlive.2584f299.js";import"./useContentViewHeight.17c92794.js";/* empty css              *//* empty css              */import"./useSortable.6ed16464.js";import"./lock.ff73f06b.js";import"./Login.f41833d0.js";import"./LoginForm.ab367f33.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./LoginFormTitle.daa071d1.js";import"./ForgetPasswordForm.6b62c8e8.js";import"./index.981ceacd.js";import"./RegisterForm.5ac07789.js";import"./index.f38aca4b.js";import"./MobileForm.421f8fa9.js";import"./QrCodeForm.a00b2096.js";import"./index.e26afaa5.js";import"./download.db26d4fe.js";import"./base64Conver.bb012c73.js";var x=r({name:"LayoutFeatures",components:{BackTop:a,LayoutLockPage:j((()=>e((()=>import("./index.31e4a922.js")),["assets/index.31e4a922.js","assets/LockPage.deb218d6.js","assets/LockPage.ee8eff52.css","assets/vendor.880b4c6c.js","assets/vendor.87238d96.css","assets/index.10e3b51a.js","assets/index.ffe635a3.css","assets/lock.ff73f06b.js","assets/header.d801b988.js"]))),SettingDrawer:j((()=>e((()=>import("./index.b1a5b0b3.js").then((function(e){return e.i}))),["assets/index.b1a5b0b3.js","assets/index.4c61959e.css","assets/index.3483fc8c.js","assets/index.bb8cb3fb.css","assets/index.8ed4889a.css","assets/index.10e3b51a.js","assets/index.ffe635a3.css","assets/vendor.880b4c6c.js","assets/vendor.87238d96.css","assets/index.f3665714.js","assets/index.2341225b.css","assets/index.9bdf218b.css","assets/index.f914bbf3.js","assets/index.140aa9f4.css","assets/useWindowSizeFn.564cf32e.js","assets/useFrameKeepAlive.2584f299.js","assets/useContentViewHeight.17c92794.js","assets/useSortable.6ed16464.js","assets/lock.ff73f06b.js"]))),SessionTimeoutLogin:l},setup(){const{getUseOpenBackTop:e,getShowSettingButton:r,getSettingButtonPosition:a,getFullContent:p}=t(),d=o(),{prefixCls:g}=s("setting-drawer-fearure"),{getShowHeader:c}=b(),u=n((()=>d.getSessionTimeout));return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:n((()=>{if(!m(r))return!1;const e=m(a);return e===i.AUTO?!m(c)||m(p):e===i.FIXED})),prefixCls:g,getIsSessionTimeout:u}}});x.render=function(e,t,o,s,i,r){const a=p("LayoutLockPage"),n=p("BackTop"),m=p("SettingDrawer"),j=p("SessionTimeoutLogin");return d(),g(f,null,[c(a),e.getUseOpenBackTop?(d(),g(n,{key:0,target:e.getTarget},null,8,["target"])):u("",!0),e.getIsFixedSettingDrawer?(d(),g(m,{key:1,class:e.prefixCls},null,8,["class"])):u("",!0),e.getIsSessionTimeout?(d(),g(j,{key:2})):u("",!0)],64)};export default x;
