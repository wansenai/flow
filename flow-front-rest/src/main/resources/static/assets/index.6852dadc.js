import{B as e,p as o,c as t,d as s,O as a,f as r,o as n}from"./index.51c58f14.js";import{k as c,at as l,au as i,f as d,K as u,o as p,n as m,q as f,P as g,W as k,s as h,S as x}from"./vendor.d660e98f.js";import{D as _}from"./siteSetting.136c2269.js";import{u as C}from"./useModal.94660e74.js";import{h as D}from"./header.d801b988.js";import{c as w}from"./createAsyncComponent.1dc0679a.js";import"./useWindowSizeFn.4f1b8c18.js";var y=c({name:"UserDropdown",components:{Dropdown:l,Menu:i,MenuItem:w((()=>e((()=>import("./DropMenuItem.dcd5124c.js")),["/assets/DropMenuItem.dcd5124c.js","/assets/vendor.d660e98f.js","/assets/vendor.859e9874.css","/assets/index.51c58f14.js","/assets/index.37e6979f.css"]))),MenuDivider:i.Divider,LockAction:w((()=>e((()=>import("./LockModal.ac68c452.js")),["/assets/LockModal.ac68c452.js","/assets/LockModal.3de92e4a.css","/assets/index.3b1a8f7a.css","/assets/index.0edc9df2.css","/assets/index.7887402a.css","/assets/index.61b3ae45.css","/assets/index.19838f8b.css","/assets/index.5d7f7715.css","/assets/index.6d85b653.css","/assets/index.51c58f14.js","/assets/index.37e6979f.css","/assets/vendor.d660e98f.js","/assets/vendor.859e9874.css","/assets/useModal.94660e74.js","/assets/useModal.7527b89b.css","/assets/useWindowSizeFn.4f1b8c18.js","/assets/useForm.3d6a4ede.js","/assets/useForm.2a95f612.css","/assets/CountdownInput.fe85330d.js","/assets/CountdownInput.05ee5bdd.css","/assets/download.fca43234.js","/assets/StrengthMeter.765addc9.js","/assets/StrengthMeter.fb6f9f1a.css","/assets/lock.3e70f4f6.js","/assets/header.d801b988.js"])))},props:{theme:o.oneOf(["dark","light"])},setup(){const{prefixCls:e}=t("header-user-dropdown"),{t:o}=s(),{getShowDoc:c,getUseLockPage:l}=a(),i=r(),u=d((()=>{const{realName:e="",image:o,desc:t}=i.getUserInfo||{};return{realName:e,avatar:o||D,desc:t}})),[p,{openModal:m}]=C();return{prefixCls:e,t:o,getUserInfo:u,handleMenuClick:function(e){switch(e.key){case"logout":i.confirmLoginOut();break;case"doc":n(_);break;case"lock":m(!0)}},getShowDoc:c,register:p,getUseLockPage:l}}});y.render=function(e,o,t,s,a,r){const n=u("MenuItem"),c=u("MenuDivider"),l=u("Menu"),i=u("Dropdown"),d=u("LockAction");return p(),m(x,null,[f(i,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:g((()=>[f(l,{onClick:e.handleMenuClick},{default:g((()=>[e.getShowDoc?(p(),m(n,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):k("",!0),e.getShowDoc?(p(),m(c,{key:1})):k("",!0),e.getUseLockPage?(p(),m(n,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):k("",!0),f(n,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])])),_:1},8,["onClick"])])),default:g((()=>[f("span",{class:[[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"]},[f("img",{class:`${e.prefixCls}__header`,src:e.getUserInfo.avatar},null,10,["src"]),f("span",{class:`${e.prefixCls}__info hidden md:block`},[f("span",{class:[`${e.prefixCls}__name  `,"truncate"]},h(e.getUserInfo.realName),3)],2)],2)])),_:1},8,["overlayClassName"]),f(d,{onRegister:e.register},null,8,["onRegister"])],64)};export default y;
