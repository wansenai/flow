import{L as B,a as f,C as _,bX as w,bQ as v,h as P,aF as t,o as h,f as F,m as o,z as s,B as M,F as g}from"./index.d7db7941.js";import{b as C}from"./index.0922b999.js";import k from"./index.12fa5efe.js";import{A}from"./ApartmentOutlined.13c67030.js";import"./useWindowSizeFn.fa340538.js";import"./FullscreenOutlined.7a29164d.js";import"./index.917820ca.js";import"./index.22ef89af.js";import"./index.195c0b8d.js";import"./useSize.03a1e437.js";import"./eagerComputed.032ae1e2.js";import"./useContentViewHeight.0228a7d7.js";import"./ArrowLeftOutlined.4c107502.js";import"./index.8c506d05.js";import"./transButton.6ad260fa.js";import"./index.d0854049.js";import"./index.04fcf6e8.js";import"./useFlexGapSupport.0c54ffc5.js";import"./index.0b3f7891.js";import"./throttleByAnimationFrame.7d53cf74.js";import"./index.326da98b.js";import"./Viewer.91f06516.js";import"./process.8e8f8725.js";import"./PlusOutlined.10edf23b.js";const E=f({name:"BaseActionButtons",components:{Button:_,Tooltip:w,ApartmentOutlined:A,BpmnPreviewModal:k},setup(e,{emit:l}){const{currentRoute:a}=v(),{params:{modelKey:m},query:{taskId:c,procInstId:u}}=P(a),[r,{openModal:n,setModalProps:p}]=C();function i(){n(!0,{modelKey:m,procInstId:u||"",isUpdate:!0}),p({width:900,minHeight:400,wrapperFooterOffset:20,useWrapper:!1,title:"\u67E5\u770B - \u56FE\u9884\u89C8",showOkBtn:!1,cancelText:"\u5173\u95ED"})}function d(){return Promise.resolve(!0)}return{registerBpmnPreviewModal:r,handleCloseFunc:d,showFlowDiagram:i}}});function I(e,l,a,m,c,u){const r=t("ApartmentOutlined"),n=t("Button"),p=t("Tooltip"),i=t("BpmnPreviewModal");return h(),F(g,null,[o(p,null,{title:s(()=>[M("\u67E5\u770B\u6D41\u7A0B\u56FE")]),default:s(()=>[o(n,{type:"link",onClick:e.showFlowDiagram},{icon:s(()=>[o(r)]),_:1},8,["onClick"])]),_:1}),o(i,{onRegister:e.registerBpmnPreviewModal},null,8,["onRegister"])],64)}var Z=B(E,[["render",I]]);export{Z as default};