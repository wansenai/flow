import{k as o,b8 as e,aU as t,u as s,f as a,a as r,l as n,m as i,K as l,o as c,n as d,q as p,s as u,W as f,x as m}from"./vendor.d660e98f.js";import"./index.825dc0a7.js";import{D as C,G as _,S as x}from"./siteSetting.136c2269.js";import{d as j,K as F,c as v,o as w}from"./index.51c58f14.js";import"./createAsyncComponent.1dc0679a.js";import"./index.736ed393.js";import"./useWindowSizeFn.4f1b8c18.js";import"./usePageContext.31d72795.js";/* empty css              */import"./useSortable.27236de8.js";import"./lock.3e70f4f6.js";var y=o({name:"LayoutFooter",components:{Footer:e.Footer,GithubFilled:t},setup(){const{t:o}=j(),{getShowFooter:e}=F(),{currentRoute:t}=s(),{prefixCls:n}=v("layout-footer");return{getShowLayoutFooter:a((()=>{var o;return r(e)&&!(null==(o=r(t).meta)?void 0:o.hiddenFooter)})),prefixCls:n,t:o,DOC_URL:C,GITHUB_URL:_,SITE_URL:x,openWindow:w}}});const L=m();n("data-v-25ccc438");const S=p("div",null,"Copyright ©2021 企业数智化门户",-1);i();const U=L(((o,e,t,s,a,r)=>{const n=l("GithubFilled"),i=l("Footer");return o.getShowLayoutFooter?(c(),d(i,{key:0,class:o.prefixCls},{default:L((()=>[p("div",{class:`${o.prefixCls}__links`},[p("a",{onClick:e[1]||(e[1]=e=>o.openWindow(o.SITE_URL))},u(o.t("layout.footer.onlinePreview")),1),p(n,{onClick:e[2]||(e[2]=e=>o.openWindow(o.GITHUB_URL)),class:`${o.prefixCls}__github`},null,8,["class"]),p("a",{onClick:e[3]||(e[3]=e=>o.openWindow(o.DOC_URL))},u(o.t("layout.footer.onlineDocument")),1)],2),S])),_:1},8,["class"])):f("",!0)}));y.render=U,y.__scopeId="data-v-25ccc438";export default y;
