import{k as n,bm as a,r as o,K as e,o as r,n as t,P as d,q as i}from"./vendor.d660e98f.js";/* empty css              *//* empty css              *//* empty css              */import{_ as s}from"./PageWrapper.df7b7946.js";import l from"./DynamicInfo.c2e177cd.js";import m from"./BannerInfo.1360a10d.js";import c from"./NoticeInfo.ad19c0ab.js";import f from"./ITWikiCard.4e4c857b.js";import g from"./ITContactCard.557250bb.js";import p from"./CommonDownCard.15bc9df6.js";import{dynamicInfoItems as u,bannerList as I,noticeInfoItems as j}from"./data.c44f2348.js";import"./index.ee676e78.js";import"./usePageContext.741f964f.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.a3bdff8d.js";/* empty css              *//* empty css              *//* empty css              */var y=n({components:{PageWrapper:s,DynamicInfo:l,BannerInfo:m,NoticeInfo:c,ITWikiCard:f,ITContactCard:g,CommonDownCard:p,Card:a},setup(){const n=o(!0);return setTimeout((()=>{n.value=!1}),1500),{loading:n,dynamicInfoItems:u,bannerInfoItems:I,noticeInfoItems:j}}});const b={class:"lg:flex"},x={class:"lg:w-10/10 w-full enter-y"},C={class:"lg:flex"},v={class:"lg:w-4/10 w-full !mr-4 enter-y"},w={class:"lg:w-6/10 w-full enter-y"},S={class:"lg:flex mt-4"},T={class:"lg:w-2/10 w-full !mr-4 enter-y"},D={class:"lg:w-8/10 w-full enter-y"};y.render=function(n,a,o,s,l,m){const c=e("BannerInfo"),f=e("NoticeInfo"),g=e("ITContactCard"),p=e("DynamicInfo"),u=e("PageWrapper");return r(),t(u,null,{default:d((()=>[i("div",b,[i("div",x,[i(c,{dataSource:n.bannerInfoItems,height:"400",class:"!my-4 enter-y",loading:n.loading},null,8,["dataSource","loading"])])]),i("div",C,[i("div",v,[i(c,{dataSource:n.bannerInfoItems,height:"270",class:"enter-y",loading:n.loading},null,8,["dataSource","loading"])]),i("div",w,[i(f,{dataSource:n.noticeInfoItems,loading:n.loading,class:"enter-y"},null,8,["dataSource","loading"])])]),i("div",S,[i("div",T,[i(g,{loading:n.loading,class:"enter-y"},null,8,["loading"])]),i("div",D,[i(p,{dataSource:n.dynamicInfoItems,loading:n.loading,class:"enter-y"},null,8,["dataSource","loading"])])])])),_:1})};export default y;
