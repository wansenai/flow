import{k as e,bz as s,aV as a,l as o,m as r,K as t,ar as i,o as c,n as d,x as n,q as l,s as m,X as u,w as p,Y as f}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              */import _ from"./CurrentPermissionMode.123c3768.js";import{ai as y,J as P,b1 as x}from"./index.f8d8fadd.js";import{_ as h}from"./Authority.vue_vue&type=script&lang.f1194055.js";import{_ as g}from"./PageWrapper.30f94524.js";import"./usePageContext.03c6eac3.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.06aaefd7.js";var v=e({components:{Alert:s,PageWrapper:g,CurrentPermissionMode:_,Divider:a,Authority:h},setup(){const{hasPermission:e}=y(),s=P();return{hasPermission:e,permissionStore:s,changePermissionCode:function(e){s.changePermissionCode(e)},PermissionModeEnum:x}}});const C=n();o("data-v-14990cda");const j=f(" 当前拥有的code列表: "),b=f(" 点击切换按钮权限(用户id为2) "),k=f(" 点击切换按钮权限(用户id为1,默认) "),A=f("组件方式判断权限"),M=f(" 拥有code ['1000']权限可见 "),w=f(" 拥有code ['2000']权限可见 "),W=f(" 拥有code ['1000','2000']角色权限可见 "),D=f("函数方式方式判断权限"),S=f(" 拥有code ['1000']权限可见 "),q=f(" 拥有code ['2000']权限可见 "),z=f(" 拥有code ['1000','2000']角色权限可见 "),B=f("指令方式方式判断权限(该方式不能动态修改权限.)"),E=f(" 拥有code ['1000']权限可见 "),I=f(" 拥有code ['2000']权限可见 "),J=f(" 拥有code ['1000','2000']角色权限可见 ");r();const K=C(((e,s,a,o,r,n)=>{const f=t("Alert"),_=t("CurrentPermissionMode"),y=t("Divider"),P=t("a-button"),x=t("Authority"),h=t("PageWrapper"),g=i("auth");return c(),d(h,{contentBackground:"",title:"按钮权限控制",contentClass:"p-4"},{default:C((()=>[l(f,{message:"刷新后会还原","show-icon":""}),l(_),l("p",null,[j,l("a",null,m(e.permissionStore.getPermCodeList),1)]),l(y),l(f,{class:"mt-4",type:"info",message:"点击后请查看按钮变化","show-icon":""}),l(y),l(P,{type:"primary",class:"mr-2",onClick:s[1]||(s[1]=s=>e.changePermissionCode("2"))},{default:C((()=>[b])),_:1}),l(P,{type:"primary",onClick:s[2]||(s[2]=s=>e.changePermissionCode("1"))},{default:C((()=>[k])),_:1}),l(y,null,{default:C((()=>[A])),_:1}),l(x,{value:"1000"},{default:C((()=>[l(P,{type:"primary",class:"mx-4"},{default:C((()=>[M])),_:1})])),_:1}),l(x,{value:"2000"},{default:C((()=>[l(P,{color:"success",class:"mx-4"},{default:C((()=>[w])),_:1})])),_:1}),l(x,{value:["1000","2000"]},{default:C((()=>[l(P,{color:"error",class:"mx-4"},{default:C((()=>[W])),_:1})])),_:1}),l(y,null,{default:C((()=>[D])),_:1}),e.hasPermission("1000")?(c(),d(P,{key:0,type:"primary",class:"mx-4"},{default:C((()=>[S])),_:1})):u("",!0),e.hasPermission("2000")?(c(),d(P,{key:1,color:"success",class:"mx-4"},{default:C((()=>[q])),_:1})):u("",!0),e.hasPermission(["1000","2000"])?(c(),d(P,{key:2,color:"error",class:"mx-4"},{default:C((()=>[z])),_:1})):u("",!0),l(y,null,{default:C((()=>[B])),_:1}),p(l(P,{type:"primary",class:"mx-4"},{default:C((()=>[E])),_:1},512),[[g,"1000"]]),p(l(P,{color:"success",class:"mx-4"},{default:C((()=>[I])),_:1},512),[[g,"2000"]]),p(l(P,{color:"error",class:"mx-4"},{default:C((()=>[J])),_:1},512),[[g,["1000","2000"]]])])),_:1})}));v.render=K,v.__scopeId="data-v-14990cda";export default v;
