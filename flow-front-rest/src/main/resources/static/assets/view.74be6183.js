import{P as g}from"./index.065426b6.js";import{L as I,a as h,cV as F,v as m,bA as P,bQ as C,h as B,aF as o,o as k,i as S,z as t,m as r,B as n,t as w,l as a}from"./index.54e75e3e.js";import{S as V}from"./index.39b3ae58.js";import{T as b}from"./index.0ff17afb.js";import x from"./FormContainer.2aed1c96.js";import E from"./ActionButtons.e9fedc49.js";import H from"./BaseActionButtons.89ca1bc5.js";import R from"./ProcessBackButton.736d9031.js";import T from"./ApproveActionButtons.5259b51d.js";import N from"./ApprovalHistory.cb56aea5.js";import{c as $,d as D}from"./process.0c905273.js";import W from"./ProcessHeader.8797e48d.js";import"./index.5c6125f6.js";import"./index.c5343d42.js";import"./useSize.5174038b.js";import"./eagerComputed.e474cd0d.js";import"./useWindowSizeFn.42b5da8d.js";import"./useContentViewHeight.027863b0.js";import"./ArrowLeftOutlined.e237c43c.js";import"./index.24ba8bad.js";import"./transButton.f88255e1.js";import"./useFlexGapSupport.f9214675.js";import"./index.d3149b54.js";import"./index.4c5a4512.js";import"./index.e5b493c9.js";import"./CopyOutlined.b3a6a810.js";import"./index.f7634222.js";import"./index.22b16c3f.js";import"./index.1c29744d.js";import"./get.e264171e.js";import"./index.4d74564a.js";import"./index.d4677f89.js";import"./FullscreenOutlined.88a2731c.js";import"./index.f6da764c.js";import"./index.86da1d02.js";import"./throttleByAnimationFrame.d15f38b9.js";import"./Viewer.ca2e1abd.js";import"./ApartmentOutlined.72d44b75.js";import"./index.1d2ce225.js";import"./FlowDiagramModal.bb7f6c85.js";import"./ClockCircleOutlined.c0cc8f82.js";import"./index.2167587e.js";import"./useRefs.ab942c9d.js";import"./index.5a03476b.js";const K=h({components:{LeftOutlined:F,ProcessHeader:W,PageWrapper:g,FormContainer:x,ActionButtons:E,BaseActionButtons:H,ApproveActionButtons:T,ApprovalHistory:N,ProcessBackButton:R,Space:V,Tag:b},setup(){const s=m(),c=m({}),u=m({}),l=m(""),_=P(),{currentRoute:d}=C(),{params:{modelKey:f},query:{procInstId:p}}=B(d);$({modelKey:f}).then(e=>{c.value=e}),p&&D({procInstId:p}).then(e=>{u.value=e,B(s).setStartorBaseInfo(e)});function i(){history.state.back?history.back():_("/process/todo")}return{currentView:l,modelBaseInfo:c,formContainerRef:s,startorBaseInfo:u,doBack:i}}}),L={class:"pb-2"},M={class:"desc-wrap"},q={class:"desc-wrap mt-2"};function z(s,c,u,l,_,d){const f=o("ProcessBackButton"),p=o("BaseActionButtons"),i=o("Tag"),e=o("Space"),v=o("FormContainer"),y=o("ApprovalHistory"),A=o("PageWrapper");return k(),S(A,{class:"!mt-4 process-container"},{title:t(()=>[r(f),n(" "+w(s.startorBaseInfo.formName||s.modelBaseInfo.name||"-")+" ",1),r(p)]),extra:t(()=>[]),footer:t(()=>[a("div",L,[r(e,null,{default:t(()=>[a("span",null,[n(" \u6D41\u7A0BBP\uFF1A"),r(i,null,{default:t(()=>[n("\u5F20\u4E09")]),_:1})]),a("span",null,[n(" \u5F52\u5C5E\u90E8\u95E8\uFF1A"),r(i,null,{default:t(()=>[n("\u674E\u56DB")]),_:1})])]),_:1})])]),default:t(()=>[a("div",M,[r(v,{ref:"formContainerRef"},null,512)]),a("div",q,[r(y,{ref:"approvalHistoryRef"},null,512)])]),_:1})}var No=I(K,[["render",z]]);export{No as default};