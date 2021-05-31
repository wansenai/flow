var e=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(a,o,t)=>o in a?e(a,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[o]=t,l=(e,a,o)=>new Promise(((t,r)=>{var s=e=>{try{l(o.next(e))}catch(a){r(a)}},i=e=>{try{l(o.throw(e))}catch(a){r(a)}},l=e=>e.done?t(e.value):Promise.resolve(e.value).then(s,i);l((o=o.apply(e,a)).next())}));import{_ as n,a as c}from"./useModal.a73129f6.js";import{_ as d}from"./TableImg.44575666.js";import{_ as u}from"./BasicForm.52dd7a78.js";import{u as m}from"./useTable.9cfd2432.js";import{u as p}from"./useForm.141421b5.js";import{b as f,d as h}from"./group.data.374fe147.js";import{b}from"./account.62c6a151.js";import{_ as g,g as v,s as j}from"./AclCheckboxGroup.440ce68a.js";import{k as x,bt as k,aT as C,r as S,u as A,f as T,K as y,o as I,n as O,Q as w,q as B,N as F,Y as M}from"./vendor.bc3b2d68.js";/* empty css              */import{aP as P}from"./index.f72cd585.js";import"./useWindowSizeFn.ade0e88c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./onMountedOrActivated.06aaefd7.js";/* empty css              */import"./useSortable.13695b66.js";import"./useExpose.c4c32617.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.8664b7cc.js";/* empty css              *//* empty css              */import"./download.a0c19fe1.js";import"./StrengthMeter.d8342dd8.js";var _=x({name:"SetAclModal",components:{BasicModal:n,BasicTable:d,BasicForm:u,Select:k,Checkbox:C,CheckboxGroup:C.Group,AclCheckboxGroup:g},emits:["success","register"],setup(e,{emit:n}){const d=S(!0),u=S("设置组"),g=S(""),x=S([]),k=S(!0),C=S(!1),y=S(!1),[I,{setFieldsValue:O,updateSchema:w,resetFields:B,validate:F}]=p({labelWidth:100,schemas:f,showActionButtonGroup:!1,actionColOptions:{span:0}}),[M,{getDataSource:_,setTableData:R,reload:G,expandAll:L}]=m({title:"",size:"small",dataSource:x,loading:k,immediate:!1,searchInfo:{},columns:h,formConfig:{labelWidth:120},canResize:!0,maxHeight:400,isTreeTable:!0,useSearchForm:!1,showTableSetting:!1,bordered:!1,showIndexColumn:!1,pagination:!1}),[E,{setModalProps:U,closeModal:z}]=c((e=>l(this,null,(function*(){if(B(),U({confirmLoading:!1}),d.value=!!(null==e?void 0:e.isUpdate),A(d)){let n=e.record.groups||[];n=n.map((e=>e.id)),O((l=((e,a)=>{for(var o in a||(a={}))r.call(a,o)&&i(e,o,a[o]);if(t)for(var o of t(a))s.call(a,o)&&i(e,o,a[o]);return e})({},e.record),a(l,o({groups:n})))),g.value=e.record.id}var l;k.value=!0,v({groupId:e.record.id}).then((e=>{W(e),x.value=e,k.value=!1,setTimeout((()=>{L()}))})),u.value="给组【"+e.record.name+"("+e.record.sn+")】设置权限"}))));let D=T((()=>A(d)?u.value:"新增"));function W(e){let a=0,o=0,t=0;P(e,(e=>{e.pvs&&e.pvs.forEach((e=>{a++,e.flag?o++:t++}))})),o===a?(y.value=!0,C.value=!1):t===a?(y.value=!1,C.value=!1):C.value=!0}return{registerTable:M,registerModal:E,indeterminate:C,registerForm:I,checkAllBox:y,getTitle:D,handelChangeCheckAllStatus:function(){v({groupId:g.value}).then((e=>{W(e)}))},checkAll:e=>{k.value=!0,C.value=!1,j({checked:e.target.checked?1:0,aclInfo:{releaseId:A(g)}}).then((a=>{P(x.value,(a=>{a.pvs&&a.pvs.forEach((a=>{a.flag=e.target.checked}))})),R(x.value),k.value=!1,setTimeout((()=>{L()}))})).catch((()=>{k.value=!1}))},handleSubmit:function(){return l(this,null,(function*(){try{U({confirmLoading:!0});const e=yield F();e.groups=e.groups.map((e=>({id:e}))),e.userId=e.id,delete e.id,yield b(e),z(),n("success")}finally{U({confirmLoading:!1})}}))}}}});const R=M("全选");_.render=function(e,a,o,t,r,s){const i=y("Checkbox"),l=y("AclCheckboxGroup"),n=y("BasicTable"),c=y("BasicForm"),d=y("BasicModal");return I(),O(d,F(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:w((()=>[B(c,{onRegister:e.registerForm},{acls:w((({model:o,field:t})=>[B(n,{value:o[t],"onUpdate:value":e=>o[t]=e,onRegister:e.registerTable},{customTitle:w((()=>[B("span",null,[B(i,{checked:e.checkAllBox,"onUpdate:checked":a[1]||(a[1]=a=>e.checkAllBox=a),indeterminate:e.indeterminate,onClick:e.checkAll},{default:w((()=>[R])),_:1},8,["checked","indeterminate","onClick"])])])),pvs:w((({record:a})=>[B(l,{onChangeCheckAllStatus:e.handelChangeCheckAllStatus,checkboxList:a.pvs.map((e=>({label:e.name,value:e.position,checked:e.flag}))),groupId:o.id,moduleSn:a.sn,moduleId:a.id},null,8,["onChangeCheckAllStatus","checkboxList","groupId","moduleSn","moduleId"])])),_:2},1032,["value","onUpdate:value","onRegister"])])),_:1},8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default _;
