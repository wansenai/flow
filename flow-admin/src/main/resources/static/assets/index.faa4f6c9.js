import{y as e,bE as r,Z as o,B as i,F as s,a2 as a,v as t,a9 as n}from"./vendor.880b4c6c.js";/* empty css              */import{u as p}from"./index.3483fc8c.js";import m from"./Drawer1.8b3895a3.js";import d from"./Drawer2.4aa9cb7d.js";import c from"./Drawer3.b226427d.js";import f from"./Drawer4.397cac74.js";import w from"./Drawer5.85eb7138.js";import{P as D}from"./index.ee54ff18.js";import"./index.10e3b51a.js";/* empty css              */import"./BasicForm.d6bc90d8.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.981ceacd.js";/* empty css              *//* empty css              */import"./index.116df12f.js";import"./useWindowSizeFn.564cf32e.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.db26d4fe.js";import"./base64Conver.bb012c73.js";import"./index.f38aca4b.js";import"./useForm.1b895cf0.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.8f899bfb.js";import"./useContentViewHeight.17c92794.js";var j=e({components:{Alert:r,PageWrapper:D,Drawer1:m,Drawer2:d,Drawer3:c,Drawer4:f,Drawer5:w},setup(){const[e,{openDrawer:r,setDrawerProps:o}]=p(),[i,{openDrawer:s}]=p(),[a,{openDrawer:t}]=p(),[n,{openDrawer:m}]=p(),[d,{openDrawer:c}]=p();return{register1:e,openDrawer1:r,register2:i,openDrawer2:s,register3:a,openDrawer3:t,register4:n,register5:d,openDrawer5:c,send:function(){m(!0,{data:"content",info:"Info"})},openDrawerLoading:function(){r(),o({loading:!0}),setTimeout((()=>{o({loading:!1})}),2e3)}}}});const l=n(" 打开Drawer "),g=n(" 打开Drawer "),u=n(" 打开Drawer "),b=n(" 打开Drawer并传递数据 "),x=n(" 打开详情Drawer ");j.render=function(e,r,n,p,m,d){const c=o("Alert"),f=o("a-button"),w=o("Drawer1"),D=o("Drawer2"),j=o("Drawer3"),y=o("Drawer4"),R=o("Drawer5"),C=o("PageWrapper");return i(),s(C,{title:"抽屉组件使用示例"},{default:a((()=>[t(c,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),t(f,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:a((()=>[l])),_:1},8,["onClick"]),t(c,{message:"内外同时控制显示隐藏","show-icon":""}),t(f,{type:"primary",class:"my-4",onClick:r[1]||(r[1]=r=>e.openDrawer2(!0))},{default:a((()=>[g])),_:1}),t(c,{message:"自适应高度/显示footer","show-icon":""}),t(f,{type:"primary",class:"my-4",onClick:r[2]||(r[2]=r=>e.openDrawer3(!0))},{default:a((()=>[u])),_:1}),t(c,{message:"内外数据交互","show-icon":""}),t(f,{type:"primary",class:"my-4",onClick:e.send},{default:a((()=>[b])),_:1},8,["onClick"]),t(c,{message:"详情页模式","show-icon":""}),t(f,{type:"primary",class:"my-4",onClick:r[3]||(r[3]=r=>e.openDrawer5(!0))},{default:a((()=>[x])),_:1}),t(w,{onRegister:e.register1},null,8,["onRegister"]),t(D,{onRegister:e.register2},null,8,["onRegister"]),t(j,{onRegister:e.register3},null,8,["onRegister"]),t(y,{onRegister:e.register4},null,8,["onRegister"]),t(R,{onRegister:e.register5},null,8,["onRegister"])])),_:1})};export default j;
