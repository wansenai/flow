import{k as e,bz as o,K as r,o as a,n as s,Q as i,q as t,Y as n}from"./vendor.9d9efc92.js";/* empty css              */import{b as d}from"./useModal.40813107.js";import l from"./Modal1.181ae4b8.js";import p from"./Modal2.f9052fb9.js";import m from"./Modal3.809c6d25.js";import c from"./Modal4.c880c84f.js";import{_ as f}from"./PageWrapper.0a593267.js";import"./index.68bdfa67.js";import"./useWindowSizeFn.0534066c.js";import"./BasicForm.d12ec528.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.69c99d5f.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              *//* empty css              */import"./download.684fb6a2.js";import"./StrengthMeter.e21abcab.js";import"./useForm.831c770a.js";import"./usePageContext.a9e23595.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";var g=e({components:{Alert:o,Modal1:l,Modal2:p,Modal3:m,Modal4:c,PageWrapper:f},setup(){const[e,{openModal:o,setModalProps:r}]=d(),[a,{openModal:s}]=d(),[i,{openModal:t}]=d(),[n,{openModal:l}]=d();return{register1:e,openModal1:o,register2:a,openModal2:s,register3:i,openModal3:t,register4:n,openModal4:l,send:function(){l(!0,{data:"content",info:"Info"})},openModalLoading:function(){o(),r({loading:!0}),setTimeout((()=>{r({loading:!1})}),2e3)}}}});const j=n(" 打开弹窗 默认可以拖动/全屏 "),M=n(" 打开弹窗 "),u=n(" 打开弹窗 "),b=n(" 打开弹窗并传递数据 ");g.render=function(e,o,n,d,l,p){const m=r("Alert"),c=r("a-button"),f=r("Modal1"),g=r("Modal2"),x=r("Modal3"),y=r("Modal4"),C=r("PageWrapper");return a(),s(C,{title:"modal组件使用示例"},{default:i((()=>[t(m,{message:"使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable\r\n    参数进行控制是否可以拖动/全屏","show-icon":""}),t(c,{type:"primary",class:"my-4",onClick:e.openModalLoading},{default:i((()=>[j])),_:1},8,["onClick"]),t(m,{message:"内外同时同时显示隐藏","show-icon":""}),t(c,{type:"primary",class:"my-4",onClick:e.openModal2},{default:i((()=>[M])),_:1},8,["onClick"]),t(m,{message:"自适应高度","show-icon":""}),t(c,{type:"primary",class:"my-4",onClick:e.openModal3},{default:i((()=>[u])),_:1},8,["onClick"]),t(m,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),t(c,{type:"primary",class:"my-4",onClick:e.send},{default:i((()=>[b])),_:1},8,["onClick"]),t(f,{onRegister:e.register1},null,8,["onRegister"]),t(g,{onRegister:e.register2},null,8,["onRegister"]),t(x,{onRegister:e.register3},null,8,["onRegister"]),t(y,{onRegister:e.register4},null,8,["onRegister"])])),_:1})};export default g;