import{k as e,bm as a,r as o,K as n,o as r,n as s,P as t,q as d}from"./vendor.d660e98f.js";/* empty css              *//* empty css              *//* empty css              */import{_ as i}from"./PageWrapper.df7b7946.js";import m from"./WorkbenchHeader.6f186ac5.js";import c from"./SystemListCard.c18186aa.js";import f from"./QuickNav.e873e741.js";import l from"./DynamicInfo.c2e177cd.js";import p from"./NoticeInfo.ad19c0ab.js";import j from"./BannerInfo.1360a10d.js";import u from"./SaleRadar.d03692e5.js";import{d as I,n as g,b}from"./data.108c606b.js";import"./index.ee676e78.js";import"./usePageContext.741f964f.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.a3bdff8d.js";import"./header.d801b988.js";/* empty css              *//* empty css              */import"./process.c572ca0f.js";/* empty css              */import"./useECharts.f4f7e126.js";var y=e({components:{PageWrapper:i,WorkbenchHeader:m,SystemListCard:c,NoticeInfo:p,BannerInfo:j,QuickNav:f,DynamicInfo:l,SaleRadar:u,Card:a},setup(){const e=o(!0);return setTimeout((()=>{e.value=!1}),1500),{loading:e,dynamicInfoItems:I,noticeInfoItems:g,bannerInfoItems:b}}});const x={class:"lg:flex"},S={class:"lg:w-7/10 w-full enter-y"},v={class:"lg:w-3/10 !pl-4"};y.render=function(e,a,o,i,m,c){const f=n("WorkbenchHeader"),l=n("NoticeInfo"),p=n("SystemListCard"),j=n("BannerInfo"),u=n("DynamicInfo"),I=n("PageWrapper");return r(),s(I,{class:"!mt-4"},{headerContent:t((()=>[d(f)])),default:t((()=>[d("div",x,[d("div",S,[d(l,{dataSource:e.noticeInfoItems,loading:e.loading,class:"!my-4 enter-y"},null,8,["dataSource","loading"]),d(p,{loading:e.loading,class:"enter-y"},null,8,["loading"])]),d("div",v,[d(j,{dataSource:e.bannerInfoItems,class:"!my-4 enter-y",loading:e.loading},null,8,["dataSource","loading"]),d(u,{dataSource:e.dynamicInfoItems,loading:e.loading,class:"!my-4 enter-y"},null,8,["dataSource","loading"])])])])),_:1})};export default y;
