import{L as l,a as c,v as d,aF as t,o as p,i as f,z as u,l as n,m as e}from"./index.f3cc7ad7.js";import{C as I}from"./index.35061a4f.js";import"./index.077d37be.js";import"./index.3779cff5.js";import{P as _}from"./index.3c0bc9c3.js";import g from"./DynamicInfo.fa74bb52.js";import y from"./BannerInfo.32d47278.js";import h from"./NoticeInfo.c1989734.js";import C from"./ITWikiCard.25372836.js";import v from"./ITContactCard.d694a966.js";import w from"./CommonDownCard.b29d8a99.js";import{dynamicInfoItems as S,bannerList as B,noticeInfoItems as N}from"./data.ecb196ea.js";import"./index.94720a28.js";import"./index.c43829ae.js";import"./useRefs.d5c25866.js";import"./PlusOutlined.c8fb4a3b.js";import"./useFlexGapSupport.7ceb9daf.js";import"./index.84d9d03c.js";import"./index.4658f800.js";import"./useSize.489031db.js";import"./eagerComputed.14abc072.js";import"./useWindowSizeFn.2875097b.js";import"./useContentViewHeight.d9d91672.js";import"./ArrowLeftOutlined.6ca2c112.js";import"./index.b18329cd.js";import"./transButton.89d72f2f.js";import"./index.555d958b.js";import"./index.8a80424f.js";import"./index.38d72023.js";const T=c({components:{PageWrapper:_,DynamicInfo:g,BannerInfo:y,NoticeInfo:h,ITWikiCard:C,ITContactCard:v,CommonDownCard:w,Card:I},setup(){const o=d(!0);return setTimeout(()=>{o.value=!1},1500),{loading:o,dynamicInfoItems:S,bannerInfoItems:B,noticeInfoItems:N}}}),b={class:"lg:flex"},D={class:"lg:w-10/10 w-full enter-y"},P={class:"flex"},W={class:"w-1/3 mr-4 enter-y"},$={class:"w-2/3 enter-y"},k={class:"lg:flex mt-4"},L={class:"w-1/4 w-full !mr-4 enter-y"},V={class:"w-3/4 w-full enter-y"};function z(o,F,j,q,A,E){const a=t("BannerInfo"),r=t("NoticeInfo"),i=t("ITContactCard"),s=t("DynamicInfo"),m=t("PageWrapper");return p(),f(m,null,{default:u(()=>[n("div",b,[n("div",D,[e(a,{dataSource:o.bannerInfoItems,height:"400",class:"!my-4 enter-y",loading:o.loading},null,8,["dataSource","loading"])])]),n("div",P,[n("div",W,[e(a,{dataSource:o.bannerInfoItems,height:"270",class:"enter-y",loading:o.loading},null,8,["dataSource","loading"])]),n("div",$,[e(r,{dataSource:o.noticeInfoItems,loading:o.loading,class:"enter-y"},null,8,["dataSource","loading"])])]),n("div",k,[n("div",L,[e(i,{loading:o.loading,class:"enter-y"},null,8,["loading"])]),n("div",V,[e(s,{dataSource:o.dynamicInfoItems,loading:o.loading,class:"enter-y"},null,8,["dataSource","loading"])])])]),_:1})}var go=l(T,[["render",z]]);export{go as default};