import{k as o,b8 as t,aU as e,u as s,f as a,a as r,l as n,m as i,K as c,o as l,n as d,q as p,s as u,W as f,x as m}from"./vendor.d660e98f.js";import"./index.d68b8b0c.js";import{D as C,G as _,S as x}from"./siteSetting.136c2269.js";import{d as j,K as F,c as b,o as v}from"./index.491886fb.js";import"./createAsyncComponent.ad36cc26.js";import"./index.ca997d5c.js";import"./useWindowSizeFn.4f1b8c18.js";import"./usePageContext.f85f3259.js";/* empty css              */import"./useSortable.f90001d2.js";import"./lock.a4505742.js";var w=o({name:"LayoutFooter",components:{Footer:t.Footer,GithubFilled:e},setup(){const{t:o}=j(),{getShowFooter:t}=F(),{currentRoute:e}=s(),{prefixCls:n}=b("layout-footer");return{getShowLayoutFooter:a((()=>{var o;return r(t)&&!(null==(o=r(e).meta)?void 0:o.hiddenFooter)})),prefixCls:n,t:o,DOC_URL:C,GITHUB_URL:_,SITE_URL:x,openWindow:v}}});const y=m();n("data-v-25ccc438");const L=p("div",null,"Copyright ©2021 企业数智化门户",-1);i();const S=y(((o,t,e,s,a,r)=>{const n=c("GithubFilled"),i=c("Footer");return o.getShowLayoutFooter?(l(),d(i,{key:0,class:o.prefixCls},{default:y((()=>[p("div",{class:`${o.prefixCls}__links`},[p("a",{onClick:t[1]||(t[1]=t=>o.openWindow(o.SITE_URL))},u(o.t("layout.footer.onlinePreview")),1),p(n,{onClick:t[2]||(t[2]=t=>o.openWindow(o.GITHUB_URL)),class:`${o.prefixCls}__github`},null,8,["class"]),p("a",{onClick:t[3]||(t[3]=t=>o.openWindow(o.DOC_URL))},u(o.t("layout.footer.onlineDocument")),1)],2),L])),_:1},8,["class"])):f("",!0)}));w.render=S,w.__scopeId="data-v-25ccc438";export default w;
