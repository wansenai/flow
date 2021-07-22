var e=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(a,o,t)=>o in a?e(a,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[o]=t,l=(e,a,o)=>new Promise(((t,r)=>{var s=e=>{try{l(o.next(e))}catch(a){r(a)}},i=e=>{try{l(o.throw(e))}catch(a){r(a)}},l=e=>e.done?t(e.value):Promise.resolve(e.value).then(s,i);l((o=o.apply(e,a)).next())}));import{B as n,a as c}from"./index.2bb7e54d.js";import{_ as d}from"./TableImg.fd7646bb.js";import{_ as u}from"./BasicForm.5fbfb734.js";import{u as m}from"./useTable.3ae035a0.js";import{u as p}from"./useForm.1ee1a774.js";import{b,d as f}from"./group.data.8da8dc33.js";import{b as h}from"./account.c14930c3.js";import{_ as g,g as v,s as j}from"./AclCheckboxGroup.3d95f131.js";import{j as x,bv as k,aT as C,r as S,u as A,K as y,o as T,m as I,Q as O,n as B,N as w,Y as F}from"./vendor.686fd1d4.js";/* empty css              */import{aR as M}from"./index.eb9d6ed9.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.28b3aabe.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.2aa1bf44.js";/* empty css              *//* empty css              *//* empty css              */import"./download.6cc0299c.js";import"./base64Conver.bb012c73.js";import"./index.cab36059.js";var P=x({name:"SetAclModal",components:{BasicModal:n,BasicTable:d,BasicForm:u,Select:k,Checkbox:C,CheckboxGroup:C.Group,AclCheckboxGroup:g},emits:["success","register"],setup(e,{emit:n}){const d=S(!0),u=S(""),g=S([]),x=S(!0),k=S(!1),C=S(!1),[y,{setFieldsValue:T,updateSchema:I,resetFields:O,validate:B}]=p({labelWidth:100,schemas:b,showActionButtonGroup:!1,actionColOptions:{span:0}}),[w,{getDataSource:F,setTableData:P,reload:R,expandAll:_}]=m({title:"",size:"small",dataSource:g,loading:x,immediate:!1,searchInfo:{},columns:f,formConfig:{labelWidth:120},canResize:!0,maxHeight:400,isTreeTable:!0,useSearchForm:!1,showTableSetting:!1,bordered:!1,showIndexColumn:!1,pagination:!1}),[G,{setModalProps:L,closeModal:U}]=c((e=>l(this,null,(function*(){if(O(),L({confirmLoading:!1,title:"给组【"+e.record.name+"("+e.record.sn+")】设置权限"}),d.value=!!(null==e?void 0:e.isUpdate),A(d)){let n=e.record.groups||[];n=n.map((e=>e.id)),T((l=((e,a)=>{for(var o in a||(a={}))r.call(a,o)&&i(e,o,a[o]);if(t)for(var o of t(a))s.call(a,o)&&i(e,o,a[o]);return e})({},e.record),a(l,o({groups:n})))),u.value=e.record.id}var l;x.value=!0,v({groupId:e.record.id}).then((e=>{z(e),g.value=e,x.value=!1,setTimeout((()=>{_()}))}))}))));function z(e){let a=0,o=0,t=0;M(e,(e=>{e.pvs&&e.pvs.forEach((e=>{a++,e.flag?o++:t++}))})),o===a?(C.value=!0,k.value=!1):t===a?(C.value=!1,k.value=!1):k.value=!0}return{registerTable:w,registerModal:G,indeterminate:k,registerForm:y,checkAllBox:C,handelChangeCheckAllStatus:function(){v({groupId:u.value}).then((e=>{z(e)}))},checkAll:e=>{x.value=!0,k.value=!1,j({checked:e.target.checked?1:0,aclInfo:{releaseId:A(u)}}).then((a=>{M(g.value,(a=>{a.pvs&&a.pvs.forEach((a=>{a.flag=e.target.checked}))})),P(g.value),x.value=!1,setTimeout((()=>{_()}))})).catch((()=>{x.value=!1}))},handleSubmit:function(){return l(this,null,(function*(){try{L({confirmLoading:!0});const e=yield B();e.groups=e.groups.map((e=>({id:e}))),e.userId=e.id,delete e.id,yield h(e),U(),n("success")}finally{L({confirmLoading:!1})}}))}}}});const R=F("全选");P.render=function(e,a,o,t,r,s){const i=y("Checkbox"),l=y("AclCheckboxGroup"),n=y("BasicTable"),c=y("BasicForm"),d=y("BasicModal");return T(),I(d,w(e.$attrs,{onRegister:e.registerModal,onOk:e.handleSubmit}),{default:O((()=>[B(c,{onRegister:e.registerForm},{acls:O((({model:o,field:t})=>[B(n,{value:o[t],"onUpdate:value":e=>o[t]=e,onRegister:e.registerTable},{customTitle:O((()=>[B("span",null,[B(i,{checked:e.checkAllBox,"onUpdate:checked":a[1]||(a[1]=a=>e.checkAllBox=a),indeterminate:e.indeterminate,onClick:e.checkAll},{default:O((()=>[R])),_:1},8,["checked","indeterminate","onClick"])])])),pvs:O((({record:a})=>[B(l,{onChangeCheckAllStatus:e.handelChangeCheckAllStatus,checkboxList:a.pvs.map((e=>({label:e.name,value:e.position,checked:e.flag}))),groupId:o.id,moduleSn:a.sn,moduleId:a.id},null,8,["onChangeCheckAllStatus","checkboxList","groupId","moduleSn","moduleId"])])),_:2},1032,["value","onUpdate:value","onRegister"])])),_:1},8,["onRegister"])])),_:1},16,["onRegister","onOk"])};export default P;