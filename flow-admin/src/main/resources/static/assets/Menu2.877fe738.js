import{_ as e}from"./PageWrapper.30f94524.js";import{b as t}from"./useModal.9d70781f.js";import{k as o,ad as s,r as n,K as r,o as i,n as a,q as d,Q as l,V as c,Y as p}from"./vendor.bc3b2d68.js";import m from"./index.cb03d555.js";import u from"./index.7e456420.js";import"./index.f8d8fadd.js";import"./usePageContext.03c6eac3.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.06aaefd7.js";import"./useWindowSizeFn.ade0e88c.js";import"./TableImg.8ccd808f.js";/* empty css              *//* empty css              */import"./BasicForm.312985a0.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.7e403a5b.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./download.7c99dac2.js";import"./StrengthMeter.16507ade.js";import"./useForm.a3596aad.js";import"./useSortable.88a1af21.js";import"./useExpose.c4c32617.js";import"./useTable.84f74a57.js";import"./personal.7f43d641.js";import"./OrgTree.abc4ec36.js";import"./Tree.vue_vue&type=style&index=0&lang.27335687.js";import"./useContextMenu.5b80cc46.js";import"./dept.050d01b8.js";var g=o({name:"Menu2Demo",components:{Input:s,PageWrapper:e,PersonalSelector:m,OrgSelector:u},setup(){const[e,{openModal:o,setModalProps:s}]=t(),[r,{openModal:i,setModalProps:a}]=t();return n([]),{registerPersonalModal:e,registerOrgModal:r,handleSelectPersonal:function(e){o(!0,{selectorProps:{multiSelect:!0,selectedList:[]}}),s({title:`设置角色【${e.name}】下的人员`,bodyStyle:{padding:"0px",margin:"0px"},width:850,height:450,showOkBtn:!0,showCancelBtn:!1})},handleSelectOrgMultiSelect:function(e){i(!0,{selectorProps:{multiSelect:!0,selectedList:[{id:"12ae3090e3e15810a9d7ebc0d291ad7e",name:"研发部"}]}}),a({title:"选择组织",bodyStyle:{padding:"0px",margin:"0px"},width:850,height:450,showOkBtn:!0,showCancelBtn:!1})},handleSelectOrg:function(e){i(!0,{selectorProps:{multiSelect:!1,selectedList:[{id:"12ae3090e3e15810a9d7ebc0d291ad7e",name:"研发部"}]}}),a({title:"选择组织",bodyStyle:{padding:"0px",margin:"0px"},width:850,height:450,showOkBtn:!0,showCancelBtn:!1})},handleSettingPersonalSuccess:function(e){},handleSettingOrgSuccess:function(e){},handleSelect:function(){}}}});const f={class:"p-4"},j=p(" 人员选择 "),S=p(" 组织选择-多选 "),h=p(" 组织选择-单选 ");g.render=function(e,t,o,s,n,p){const m=r("a-button"),u=r("PageWrapper"),g=r("PersonalSelector"),x=r("OrgSelector");return i(),a(c,null,[d(u,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:l((()=>[d("div",f,[d(m,{type:"primary",onClick:e.handleSelectPersonal},{default:l((()=>[j])),_:1},8,["onClick"]),d(m,{type:"primary",onClick:e.handleSelectOrgMultiSelect},{default:l((()=>[S])),_:1},8,["onClick"]),d(m,{type:"primary",onClick:e.handleSelectOrg},{default:l((()=>[h])),_:1},8,["onClick"])])])),_:1}),d(g,{onRegister:e.registerPersonalModal,onSuccess:e.handleSettingPersonalSuccess},null,8,["onRegister","onSuccess"]),d(x,{onRegister:e.registerOrgModal,onSuccess:e.handleSettingOrgSuccess},null,8,["onRegister","onSuccess"])],64)};export default g;
