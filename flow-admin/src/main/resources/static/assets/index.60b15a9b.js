import{k as e,bz as o,K as a,o as r,n as s,Q as i,q as t,Y as n}from"./vendor.bc3b2d68.js";/* empty css              */import{b as d}from"./useModal.9d70781f.js";import l from"./Modal1.1bf21cb1.js";import p from"./Modal2.2a98eb2c.js";import m from"./Modal3.7609869e.js";import c from"./Modal4.fdd810c0.js";import{_ as f}from"./PageWrapper.30f94524.js";import"./index.f8d8fadd.js";import"./useWindowSizeFn.ade0e88c.js";import"./BasicForm.312985a0.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.7e403a5b.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              *//* empty css              */import"./download.7c99dac2.js";import"./StrengthMeter.16507ade.js";import"./useForm.a3596aad.js";import"./usePageContext.03c6eac3.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.06aaefd7.js";var g=e({components:{Alert:o,Modal1:l,Modal2:p,Modal3:m,Modal4:c,PageWrapper:f},setup(){const[e,{openModal:o,setModalProps:a}]=d(),[r,{openModal:s}]=d(),[i,{openModal:t}]=d(),[n,{openModal:l}]=d();return{register1:e,openModal1:o,register2:r,openModal2:s,register3:i,openModal3:t,register4:n,openModal4:l,send:function(){l(!0,{data:"content",info:"Info"})},openModalLoading:function(){o(),a({loading:!0}),setTimeout((()=>{a({loading:!1})}),2e3)}}}});const j=n(" 打开弹窗 默认可以拖动/全屏 "),M=n(" 打开弹窗 "),u=n(" 打开弹窗 "),b=n(" 打开弹窗并传递数据 ");g.render=function(e,o,n,d,l,p){const m=a("Alert"),c=a("a-button"),f=a("Modal1"),g=a("Modal2"),x=a("Modal3"),y=a("Modal4"),C=a("PageWrapper");return r(),s(C,{title:"modal组件使用示例"},{default:i((()=>[t(m,{message:"使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable\r\n    参数进行控制是否可以拖动/全屏","show-icon":""}),t(c,{type:"primary",class:"my-4",onClick:e.openModalLoading},{default:i((()=>[j])),_:1},8,["onClick"]),t(m,{message:"内外同时同时显示隐藏","show-icon":""}),t(c,{type:"primary",class:"my-4",onClick:e.openModal2},{default:i((()=>[M])),_:1},8,["onClick"]),t(m,{message:"自适应高度","show-icon":""}),t(c,{type:"primary",class:"my-4",onClick:e.openModal3},{default:i((()=>[u])),_:1},8,["onClick"]),t(m,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),t(c,{type:"primary",class:"my-4",onClick:e.send},{default:i((()=>[b])),_:1},8,["onClick"]),t(f,{onRegister:e.register1},null,8,["onRegister"]),t(g,{onRegister:e.register2},null,8,["onRegister"]),t(x,{onRegister:e.register3},null,8,["onRegister"]),t(y,{onRegister:e.register4},null,8,["onRegister"])])),_:1})};export default g;
