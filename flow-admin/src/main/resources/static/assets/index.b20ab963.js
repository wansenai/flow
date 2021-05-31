import{ae as e,g as n}from"./index.f8d8fadd.js";import{_ as o}from"./PageWrapper.30f94524.js";import{k as a,K as s,o as r,n as l,Q as c,q as t,Y as i}from"./vendor.bc3b2d68.js";import"./usePageContext.03c6eac3.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.06aaefd7.js";var d=a({components:{CollapseContainer:e,PageWrapper:o},setup(){const{createMessage:e,createConfirm:o,createSuccessModal:a,createInfoModal:s,createErrorModal:r,createWarningModal:l,notification:c}=n(),{info:t,success:i,warning:d,error:f}=e;return{infoMsg:t,successMsg:i,warningMsg:d,errorMsg:f,handleLoading:function(){e.loading("Loading...")},handleConfirm:function(e){o({iconType:e,title:"Tip",content:"content message..."})},handleSuccessModal:function(){a({title:"Tip",content:"content message..."})},handleErrorModal:function(){r({title:"Tip",content:"content message..."})},handleWarningModal:function(){l({title:"Tip",content:"content message..."})},handleInfoModal:function(){s({title:"Tip",content:"content message..."})},handleNotify:function(){c.success({message:"Tip",description:"content message..."})}}}});const f=i(" Info "),u=i(" Success "),m=i(" Warning "),g=i(" Error "),C=i(" Loading "),p=i(" Info "),h=i(" Warning "),M=i(" Success "),k=i(" Error "),_=i(" Info "),w=i(" Success "),W=i(" Error "),b=i(" Warning "),S=i(" Success ");d.render=function(e,n,o,a,i,d){const j=s("a-button"),E=s("CollapseContainer"),I=s("PageWrapper");return r(),l(I,{title:"消息示例"},{default:c((()=>[t(E,{class:"w-full h-32 bg-white rounded-md",title:"Message"},{default:c((()=>[t(j,{onClick:n[1]||(n[1]=n=>e.infoMsg("Info message")),class:"mr-2"},{default:c((()=>[f])),_:1}),t(j,{onClick:n[2]||(n[2]=n=>e.successMsg("Success message")),class:"mr-2",color:"success"},{default:c((()=>[u])),_:1}),t(j,{onClick:n[3]||(n[3]=n=>e.warningMsg("Warning message")),class:"mr-2",color:"warning"},{default:c((()=>[m])),_:1}),t(j,{onClick:n[4]||(n[4]=n=>e.errorMsg("Error message")),class:"mr-2",color:"error"},{default:c((()=>[g])),_:1}),t(j,{onClick:e.handleLoading,class:"mr-2",type:"primary"},{default:c((()=>[C])),_:1},8,["onClick"])])),_:1}),t(E,{class:"w-full h-32 mt-5 bg-white rounded-md",title:"Comfirm"},{default:c((()=>[t(j,{onClick:n[5]||(n[5]=n=>e.handleConfirm("info")),class:"mr-2"},{default:c((()=>[p])),_:1}),t(j,{onClick:n[6]||(n[6]=n=>e.handleConfirm("warning")),color:"warning",class:"mr-2"},{default:c((()=>[h])),_:1}),t(j,{onClick:n[7]||(n[7]=n=>e.handleConfirm("success")),color:"success",class:"mr-2"},{default:c((()=>[M])),_:1}),t(j,{onClick:n[8]||(n[8]=n=>e.handleConfirm("error")),color:"error",class:"mr-2"},{default:c((()=>[k])),_:1})])),_:1}),t(E,{class:"w-full h-32 mt-5 bg-white rounded-md",title:"Modal"},{default:c((()=>[t(j,{onClick:e.handleInfoModal,class:"mr-2"},{default:c((()=>[_])),_:1},8,["onClick"]),t(j,{onClick:e.handleSuccessModal,color:"success",class:"mr-2"},{default:c((()=>[w])),_:1},8,["onClick"]),t(j,{onClick:e.handleErrorModal,color:"error",class:"mr-2"},{default:c((()=>[W])),_:1},8,["onClick"]),t(j,{onClick:e.handleWarningModal,color:"warning",class:"mr-2"},{default:c((()=>[b])),_:1},8,["onClick"])])),_:1}),t(E,{class:"w-full h-32 mt-5 bg-white rounded-md",title:"Notification 用法与上面一致"},{default:c((()=>[t(j,{onClick:e.handleNotify,color:"success",class:"mr-2"},{default:c((()=>[S])),_:1},8,["onClick"])])),_:1})])),_:1})};export default d;
