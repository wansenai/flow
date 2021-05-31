import{B as e,p as o,c as t,d as s,O as a,f as r,o as n}from"./index.21f8a12f.js";import{k as l,at as i,au as c,f as d,K as u,o as p,n as m,q as f,P as g,W as k,s as h,S as x}from"./vendor.d660e98f.js";import{D as _}from"./siteSetting.136c2269.js";import{u as C}from"./useModal.f5d94e37.js";import{h as D}from"./header.d801b988.js";import{c as w}from"./createAsyncComponent.a3b22c89.js";import"./useWindowSizeFn.4f1b8c18.js";var y=l({name:"UserDropdown",components:{Dropdown:i,Menu:c,MenuItem:w((()=>e((()=>import("./DropMenuItem.51e441d6.js")),["/assets/DropMenuItem.51e441d6.js","/assets/vendor.d660e98f.js","/assets/vendor.859e9874.css","/assets/index.21f8a12f.js","/assets/index.37e6979f.css"]))),MenuDivider:c.Divider,LockAction:w((()=>e((()=>import("./LockModal.fe5d06d8.js")),["/assets/LockModal.fe5d06d8.js","/assets/LockModal.3de92e4a.css","/assets/index.3b1a8f7a.css","/assets/index.0edc9df2.css","/assets/index.7887402a.css","/assets/index.61b3ae45.css","/assets/index.19838f8b.css","/assets/index.5d7f7715.css","/assets/index.6d85b653.css","/assets/index.21f8a12f.js","/assets/index.37e6979f.css","/assets/vendor.d660e98f.js","/assets/vendor.859e9874.css","/assets/useModal.f5d94e37.js","/assets/useModal.7527b89b.css","/assets/useWindowSizeFn.4f1b8c18.js","/assets/useForm.87d4ef16.js","/assets/useForm.2a95f612.css","/assets/CountdownInput.9b3564b9.js","/assets/CountdownInput.05ee5bdd.css","/assets/download.03309c9a.js","/assets/StrengthMeter.10576816.js","/assets/StrengthMeter.fb6f9f1a.css","/assets/lock.889a0470.js","/assets/header.d801b988.js"])))},props:{theme:o.oneOf(["dark","light"])},setup(){const{prefixCls:e}=t("header-user-dropdown"),{t:o}=s(),{getShowDoc:l,getUseLockPage:i}=a(),c=r(),u=d((()=>{const{realName:e="",image:o,desc:t}=c.getUserInfo||{};return{realName:e,avatar:o||D,desc:t}})),[p,{openModal:m}]=C();return{prefixCls:e,t:o,getUserInfo:u,handleMenuClick:function(e){switch(e.key){case"logout":c.confirmLoginOut();break;case"doc":n(_);break;case"lock":m(!0)}},getShowDoc:l,register:p,getUseLockPage:i}}});y.render=function(e,o,t,s,a,r){const n=u("MenuItem"),l=u("MenuDivider"),i=u("Menu"),c=u("Dropdown"),d=u("LockAction");return p(),m(x,null,[f(c,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:g((()=>[f(i,{onClick:e.handleMenuClick},{default:g((()=>[e.getShowDoc?(p(),m(n,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):k("",!0),e.getShowDoc?(p(),m(l,{key:1})):k("",!0),e.getUseLockPage?(p(),m(n,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):k("",!0),f(n,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])])),_:1},8,["onClick"])])),default:g((()=>[f("span",{class:[[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"]},[f("img",{class:`${e.prefixCls}__header`,src:e.getUserInfo.avatar},null,10,["src"]),f("span",{class:`${e.prefixCls}__info hidden md:block`},[f("span",{class:[`${e.prefixCls}__name  `,"truncate"]},h(e.getUserInfo.realName),3)],2)],2)])),_:1},8,["overlayClassName"]),f(d,{onRegister:e.register},null,8,["onRegister"])],64)};export default y;
