var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,i=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,n=(e,t,o)=>new Promise(((r,s)=>{var a=e=>{try{n(o.next(e))}catch(t){s(t)}},i=e=>{try{n(o.throw(e))}catch(t){s(t)}},n=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,i);n((o=o.apply(e,t)).next())}));import{_ as d,a as l}from"./useModal.a73129f6.js";import{_ as c}from"./BasicForm.52dd7a78.js";import{u as p}from"./useForm.141421b5.js";import{a as m}from"./group.data.374fe147.js";import{e as u}from"./account.62c6a151.js";import{b as f}from"./group.0a65c3a4.js";import{k as b,bt as j,r as v,u as g,f as h,K as y,o as x,n as O,Q as w,q as F,N as M}from"./vendor.bc3b2d68.js";import"./index.f72cd585.js";import"./useWindowSizeFn.ade0e88c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.8664b7cc.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./download.a0c19fe1.js";import"./StrengthMeter.d8342dd8.js";var S=b({name:"SetAccountModal",components:{BasicModal:d,BasicForm:c,Select:j},emits:["success","register"],setup(e,{emit:d}){const c=v(!0),b=v([]),j=v("设置用户"),[y,{setFieldsValue:x,updateSchema:O,resetFields:w,validate:F}]=p({labelWidth:100,schemas:m,showActionButtonGroup:!1,actionColOptions:{span:23}}),[M,{setModalProps:S,closeModal:P}]=l((e=>n(this,null,(function*(){w(),S({confirmLoading:!1}),c.value=!!(null==e?void 0:e.isUpdate),j.value="给组【"+e.record.name+"("+e.record.sn+")】分配用户";const n=yield u();if(n.forEach((e=>{e.label=e.realName+"("+e.username+")",e.value=e.id})),b.value=n,g(c)){let n=e.record.users||[];n=n.map((e=>e.id)),x((d=((e,t)=>{for(var o in t||(t={}))s.call(t,o)&&i(e,o,t[o]);if(r)for(var o of r(t))a.call(t,o)&&i(e,o,t[o]);return e})({},e.record),t(d,o({users:n}))))}var d}))));return{registerModal:M,registerForm:y,getTitle:h((()=>g(c)?j.value:"新增")),accountOptions:b,handleSubmit:function(){return n(this,null,(function*(){try{S({confirmLoading:!0});const e=yield F();e.users=e.users.map((e=>({id:e}))),e.groupId=e.id,delete e.id,yield f(e),P(),d("success")}finally{S({confirmLoading:!1})}}))}}}});S.render=function(e,t,o,r,s,a){const i=y("Select"),n=y("BasicForm"),d=y("BasicModal");return x(),O(d,M(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:w((()=>[F(n,{onRegister:e.registerForm},{users:w((({model:t,field:o})=>[F(i,{value:t[o],"onUpdate:value":e=>t[o]=e,mode:"multiple",style:{width:"100%"},placeholder:"请选择用户","option-label-prop":"label",options:e.accountOptions},null,8,["value","onUpdate:value","options"])])),_:1},8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default S;
