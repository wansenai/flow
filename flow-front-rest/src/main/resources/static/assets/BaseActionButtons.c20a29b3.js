import{L as B,a as _,C as f,bX as w,bQ as h,h as g,aF as o,o as v,f as P,m as t,z as s,B as M,F as C}from"./index.ad5d3368.js";import{u as k}from"./index.fc8e6058.js";import A from"./index.07936921.js";import{A as F}from"./ApartmentOutlined.4500e06b.js";import"./useWindowSizeFn.c895093f.js";import"./FullscreenOutlined.30839594.js";import"./index.db644a38.js";import"./index.8771f033.js";import"./index.07d0350c.js";import"./useSize.eed19aca.js";import"./eagerComputed.f76a85b9.js";import"./useContentViewHeight.a15e882a.js";import"./ArrowLeftOutlined.1072a2d2.js";import"./index.5201732f.js";import"./transButton.70514f39.js";import"./index.83357e8e.js";import"./index.595fe7af.js";import"./useFlexGapSupport.75a62d21.js";import"./index.2d2aa0a4.js";import"./throttleByAnimationFrame.2b4c5ed8.js";import"./index.e1a0b5ec.js";import"./Viewer.91f06516.js";import"./process.4bbfb3c2.js";const x=_({name:"BaseActionButtons",components:{Button:f,Tooltip:w,ApartmentOutlined:F,BpmnPreviewModal:A},setup(e,{emit:u}){const{currentRoute:a}=h(),{params:{modelKey:m},query:{taskId:c,procInstId:l}}=g(a),[n,{openModal:r,setModalProps:i}]=k();function p(){r(!0,{modelKey:m,procInstId:l||"",isUpdate:!0}),i({bodyStyle:{padding:"0px",margin:"0px"},width:900,height:400,showOkBtn:!1,showCancelBtn:!0,cancelText:"\u5173\u95ED"})}function d(){return Promise.resolve(!0)}return{registerBpmnPreviewModal:n,handleCloseFunc:d,showFlowDiagram:p}}});function y(e,u,a,m,c,l){const n=o("ApartmentOutlined"),r=o("Button"),i=o("Tooltip"),p=o("BpmnPreviewModal");return v(),P(C,null,[t(i,null,{title:s(()=>[M("\u67E5\u770B\u6D41\u7A0B\u56FE")]),default:s(()=>[t(r,{type:"link",onClick:e.showFlowDiagram},{icon:s(()=>[t(n)]),_:1},8,["onClick"])]),_:1}),t(p,{onRegister:e.registerBpmnPreviewModal},null,8,["onRegister"])],64)}var Y=B(x,[["render",y]]);export{Y as default};