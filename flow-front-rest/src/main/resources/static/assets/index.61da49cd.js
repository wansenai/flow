import{k as a,bm as n,r as o,K as e,o as r,n as t,P as i,q as d}from"./vendor.d660e98f.js";/* empty css              *//* empty css              *//* empty css              */import{_ as s}from"./PageWrapper.44137319.js";import l from"./DynamicInfo.d1f20a11.js";import m from"./BannerInfo.04389775.js";import f from"./NoticeInfo.7cacfe0f.js";import c from"./ITWikiCard.d8448366.js";import g from"./ITContactCard.4fa1839b.js";import p from"./CommonDownCard.57575365.js";import{dynamicInfoItems as u,bannerList as I,noticeInfoItems as j}from"./data.efa2ba67.js";import"./index.fe7e6ae2.js";import"./usePageContext.a4ed025e.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.a3bdff8d.js";/* empty css              *//* empty css              *//* empty css              */var y=a({components:{PageWrapper:s,DynamicInfo:l,BannerInfo:m,NoticeInfo:f,ITWikiCard:c,ITContactCard:g,CommonDownCard:p,Card:n},setup(){const a=o(!0);return setTimeout((()=>{a.value=!1}),1500),{loading:a,dynamicInfoItems:u,bannerInfoItems:I,noticeInfoItems:j}}});const C={class:"lg:flex"},x={class:"lg:w-6/10 w-full !mr-4 enter-y"},w={class:"lg:w-4/10 w-full enter-y"},v={class:"lg:flex"},b={class:"lg:w-2/10 w-full !mr-4 enter-y"},D={class:"lg:w-8/10 w-full enter-y"},S=d("div",{class:"lg:flex mt-4"},[d("div",{class:"lg:w-10/10 w-full enter-y"})],-1);y.render=function(a,n,o,s,l,m){const f=e("BannerInfo"),c=e("NoticeInfo"),g=e("ITContactCard"),p=e("DynamicInfo"),u=e("CommonDownCard"),I=e("PageWrapper");return r(),t(I,null,{default:i((()=>[d("div",C,[d("div",x,[d(f,{dataSource:a.bannerInfoItems,height:"270",class:"!my-4 enter-y",loading:a.loading},null,8,["dataSource","loading"])]),d("div",w,[d(c,{dataSource:a.noticeInfoItems,loading:a.loading,class:"!my-4 enter-y"},null,8,["dataSource","loading"])])]),d("div",v,[d("div",b,[d(g,{loading:a.loading,class:"enter-y"},null,8,["loading"])]),d("div",D,[d(p,{dataSource:a.dynamicInfoItems,loading:a.loading,class:"enter-y"},null,8,["dataSource","loading"]),d(u,{loading:a.loading,class:"enter-y !mt-4"},null,8,["loading"])])]),S])),_:1})};export default y;
