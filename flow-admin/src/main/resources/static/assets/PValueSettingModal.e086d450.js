var e=Object.defineProperty,o=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,r=(o,t,i)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i,s=(e,o,t)=>new Promise(((i,r)=>{var s=e=>{try{n(t.next(e))}catch(o){r(o)}},a=e=>{try{n(t.throw(e))}catch(o){r(o)}},n=e=>e.done?i(e.value):Promise.resolve(e.value).then(s,a);n((t=t.apply(e,o)).next())}));import{B as a,a as n}from"./index.116df12f.js";import{_ as d}from"./BasicForm.d6bc90d8.js";import{u as l}from"./useForm.1b895cf0.js";import{p as c,e as m}from"./module.data.8ee38631.js";import{g as p}from"./appPrivilegeValue.220c44c5.js";import{y as f,r as u,u as j,j as b,Z as v,B as g,F as x,a2 as y,v as h,a0 as F}from"./vendor.880b4c6c.js";import"./index.10e3b51a.js";import"./useWindowSizeFn.564cf32e.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.981ceacd.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.db26d4fe.js";import"./base64Conver.bb012c73.js";import"./index.f38aca4b.js";var P=f({name:"PValueSettingModal",components:{BasicModal:a,BasicForm:d},emits:["success","register"],setup(e,{emit:a}){const d=u(!0),[f,{resetFields:v,setFieldsValue:g,updateSchema:x,validate:y}]=l({labelWidth:100,schemas:c,showActionButtonGroup:!1}),[h,{setModalProps:F,closeModal:P}]=n((e=>s(this,null,(function*(){if(v(),F({confirmLoading:!1,title:"设置菜单【"+e.record.name+"】的权限值"}),d.value=!!(null==e?void 0:e.isUpdate),j(d)){g(((e,s)=>{for(var a in s||(s={}))t.call(s,a)&&r(e,a,s[a]);if(o)for(var a of o(s))i.call(s,a)&&r(e,a,s[a]);return e})({},e.record));let s=(yield p())||[];s.forEach((e=>{e.value=e.position,e.label=e.name}));const a=e.record.pvs.map((e=>e.position));x({field:"pvs",componentProps:{options:s}}),g({pvs:a})}}))));return{registerModal:h,registerForm:f,getTitle:b((()=>j(d)?"设置权限值":"新增")),handleSubmit:function(){return s(this,null,(function*(){try{F({confirmLoading:!0});const e=yield y();e.pvs=e.pvs.map((e=>({position:e}))),yield m(e),P(),a("success")}finally{F({confirmLoading:!1})}}))}}}});P.render=function(e,o,t,i,r,s){const a=v("BasicForm"),n=v("BasicModal");return g(),x(n,F(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:y((()=>[h(a,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default P;
