import{A as l,bb as p,r as f,a0 as e,B as I,a1 as _,a5 as u,H as n,w as a}from"./vendor.5eb38889.js";/* empty css               *//* empty css               *//* empty css               */import{P as C}from"./index.a7d13475.js";import g from"./DynamicInfo.4a09f2ff.js";import j from"./BannerInfo.cbdb8f77.js";import b from"./NoticeInfo.d90b282e.js";import w from"./ITWikiCard.6d6b0b29.js";import h from"./ITContactCard.e38e01b6.js";import v from"./CommonDownCard.d9e68375.js";import{dynamicInfoItems as y,bannerList as x,noticeInfoItems as T}from"./data.76b66ccb.js";import{_ as B}from"./index.eb81839e.js";/* empty css               *//* empty css               */import"./useWindowSizeFn.e269959a.js";import"./useContentViewHeight.2add70b5.js";/* empty css                *//* empty css                *//* empty css                */const D=l({components:{PageWrapper:C,DynamicInfo:g,BannerInfo:j,NoticeInfo:b,ITWikiCard:w,ITContactCard:h,CommonDownCard:v,Card:p},setup(){const o=f(!0);return setTimeout(()=>{o.value=!1},1500),{loading:o,dynamicInfoItems:y,bannerInfoItems:x,noticeInfoItems:T}}}),W={class:"flex mt-4"},S={class:"w-2/3 flex"},k={class:"w-1/3"},N={class:"w-2/3 pl-4"},P={class:"w-1/3 pl-4"},$={class:"flex mt-4"},V={class:"w-1/4 mr-4"},H={class:"w-3/4"};function z(o,A,F,L,q,E){const t=e("ITWikiCard"),s=e("BannerInfo"),i=e("NoticeInfo"),r=e("ITContactCard"),d=e("DynamicInfo"),c=e("CommonDownCard"),m=e("PageWrapper");return I(),_(m,null,{default:u(()=>[n("div",W,[n("div",S,[n("div",k,[a(t,{loading:o.loading,class:"enter-y"},null,8,["loading"])]),n("div",N,[a(s,{dataSource:o.bannerInfoItems,height:"264",class:"enter-y",loading:o.loading},null,8,["dataSource","loading"])])]),n("div",P,[a(i,{dataSource:o.noticeInfoItems,loading:o.loading,class:"enter-y"},null,8,["dataSource","loading"])])]),n("div",$,[n("div",V,[a(r,{loading:o.loading,class:"enter-y"},null,8,["loading"])]),n("div",H,[a(d,{dataSource:o.dynamicInfoItems,loading:o.loading,class:"enter-y"},null,8,["dataSource","loading"]),a(c,{loading:o.loading,class:"enter-y !mt-4"},null,8,["loading"])])])]),_:1})}var mo=B(D,[["render",z]]);export{mo as default};