var w=Object.defineProperty;var j=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var B=(r,s,e)=>s in r?w(r,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[s]=e,x=(r,s)=>{for(var e in s||(s={}))v.call(s,e)&&B(r,e,s[e]);if(j)for(var e of j(s))M.call(s,e)&&B(r,e,s[e]);return r};var f=(r,s,e)=>new Promise((d,a)=>{var m=o=>{try{t(e.next(o))}catch(u){a(u)}},n=o=>{try{t(e.throw(o))}catch(u){a(u)}},t=o=>o.done?d(o.value):Promise.resolve(o.value).then(m,n);t((e=e.apply(r,s)).next())});import{B as y,a as A}from"./index.c505e96f.js";import{B as C}from"./BasicForm.0ba2e15f.js";import{u as D}from"./useForm.696aa965.js";import{f as R}from"./group.data.28418bb0.js";import{c as P,s as $}from"./group.52de35d8.js";import{_ as k}from"./index.e84e956c.js";import{A as N,r as S,u as g,j as V,a0 as b,B as G,a1 as L,a6 as O,w as U,a4 as z}from"./vendor.5879c5ca.js";import"./useWindowSizeFn.6a6adedd.js";/* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css               *//* empty css                *//* empty css                */import"./index.8b70aabd.js";/* empty css                *//* empty css                *//* empty css                *//* empty css                */import"./uuid.2b29000c.js";import"./download.e6dbd100.js";import"./base64Conver.bb012c73.js";import"./index.e83a4b09.js";const T=N({name:"GroupModal",components:{BasicModal:y,BasicForm:C},emits:["success","register"],setup(r,{emit:s}){const e=S(!0),[d,{resetFields:a,updateSchema:m,setFieldsValue:n,validate:t}]=D({labelWidth:100,schemas:R,showActionButtonGroup:!1}),o=i=>[{trigger:"blur",validator:(l,F)=>F?P({id:i.id,field:i.field,fieldValue:F,fieldName:i.fieldName}).then(p=>p?Promise.resolve():Promise.reject(i.fieldName+"\u5DF2\u5B58\u5728\uFF0C\u8BF7\u4FEE\u6539\uFF01")).catch(p=>Promise.reject(p)):Promise.resolve()}],[u,{setModalProps:c,closeModal:h}]=A(i=>f(this,null,function*(){yield a(),c({confirmLoading:!1}),e.value=!!(i==null?void 0:i.isUpdate);let l=i.record;yield m([{field:"sn",dynamicRules:()=>[{required:!0,whitespace:!0,message:"\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{trigger:["change","blur"],pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"\u8BF7\u8F93\u5165\u82F1\u6587\u6216\u6570\u5B57\uFF01"},{trigger:["change","blur"],max:64,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E64\uFF01"},...o({id:g(e)&&l&&l.id||"",field:"sn",fieldValue:"",fieldName:"\u6807\u8BC6"})]}]),g(e)&&n(x({},i.record))})),E=V(()=>g(e)?"\u4FEE\u6539":"\u65B0\u589E");function _(){return f(this,null,function*(){try{const i=yield t();c({confirmLoading:!0}),yield $(i),h(),s("success")}finally{c({confirmLoading:!1})}})}return{registerModal:u,registerForm:d,getTitle:E,handleSubmit:_}}});function W(r,s,e,d,a,m){const n=b("BasicForm"),t=b("BasicModal");return G(),L(t,z(r.$attrs,{onRegister:r.registerModal,title:r.getTitle,onOk:r.handleSubmit}),{default:O(()=>[U(n,{onRegister:r.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var je=k(T,[["render",W]]);export{je as default};