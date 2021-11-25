var _=Object.defineProperty;var h=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var E=(a,t,e)=>t in a?_(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,b=(a,t)=>{for(var e in t||(t={}))x.call(t,e)&&E(a,e,t[e]);if(h)for(var e of h(t))C.call(t,e)&&E(a,e,t[e]);return a};var g=(a,t,e)=>new Promise((s,l)=>{var c=u=>{try{n(e.next(u))}catch(i){l(i)}},r=u=>{try{n(e.throw(u))}catch(i){l(i)}},n=u=>u.done?s(u.value):Promise.resolve(u.value).then(c,r);n((e=e.apply(a,t)).next())});import{B as j,a as A}from"./index.30115123.js";import{B as P}from"./BasicForm.6afa01de.js";import{u as S}from"./useForm.1fd322f5.js";import{z as v,ba as N,A as R,r as q,u as B,j as $,a0 as I,B as k,a1 as K,a6 as L,w as O,a4 as T}from"./vendor.7bee64cc.js";/* empty css               */import{e as V,s as z}from"./modelInfo.10317677.js";import{a as U}from"./app.c495d461.js";import{_ as W,r as G}from"./index.9eb02b52.js";const le=[{title:"\u540D\u79F0",dataIndex:"name",align:"left"},{title:"KEY",dataIndex:"modelKey",width:100,align:"left"},{title:"\u5206\u7C7B\u540D\u79F0",dataIndex:"categoryName",width:100,align:"left"},{title:"\u7CFB\u7EDF",dataIndex:"appName",width:100,align:"left"},{title:"\u5E94\u7528\u8303\u56F4",dataIndex:"appliedRangeName",width:100,align:"left"},{title:"\u72B6\u6001",dataIndex:"statusName",width:70,align:"center",customRender:({record:a})=>{const{status:t,statusName:e}=a;var s="";return~~t==2?s="yellow":~~t==3?s="green":~~t==4?s="red":s="gray",v(N,{color:s},()=>e)}},{title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"updateTime",width:120,align:"left"}],re=[{field:"keyword",label:"\u5173\u952E\u5B57",component:"Input",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0/\u7F16\u7801"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}},{field:"appSn",label:"\u7CFB\u7EDF",component:"Select",labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],Y=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"categoryCode",label:"ID",required:!1,component:"Input",show:!1},{field:"name",label:"\u540D\u79F0",component:"Input",required:!0,rules:[{required:!0,whitespace:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{max:200,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E200\uFF01"}]},{field:"modelKey",label:"\u6807\u8BC6",component:"Input",required:!0},{field:"appSn",label:"\u6240\u5C5E\u7CFB\u7EDF",component:"Select",componentProps:{getPopupContainer:()=>document.body},required:!0}],Z=R({name:"ModelInfoModal",components:{BasicModal:j,BasicForm:P},emits:["success","register"],setup(a,{emit:t}){const e=q(!0),s=G(),[l,{setFieldsValue:c,updateSchema:r,resetFields:n,validate:u}]=S({labelWidth:100,schemas:Y,showActionButtonGroup:!1,actionColOptions:{span:23}}),i=o=>[{trigger:"blur",validator:(d,m)=>m?V({id:o.id,field:o.field,fieldValue:m,fieldName:o.fieldName}).then(F=>F?Promise.resolve():Promise.reject(o.fieldName+"\u5DF2\u5B58\u5728\uFF0C\u8BF7\u4FEE\u6539\uFF01")).catch(F=>Promise.reject(F)):Promise.resolve()}],[w,{setModalProps:f,changeLoading:p,closeModal:y}]=A(o=>g(this,null,function*(){n(),f({confirmLoading:!1}),e.value=!!(o==null?void 0:o.isUpdate),p(!0);let d=null;try{d=yield U()}finally{p(!1)}let m=o.record;yield r([{field:"appSn",componentProps:{options:d,labelField:"id"}},{field:"modelKey",dynamicRules:()=>[{required:!0,whitespace:!0,message:"\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"\u8BF7\u8F93\u5165\u82F1\u6587\u6216\u6570\u5B57\uFF01"},{max:150,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E150\uFF01"},...i({id:B(e)&&m&&m.id||"",field:"modelKey",fieldValue:"",fieldName:"\u7F16\u7801"})]}]),B(e)&&c(b({},o.record))})),D=$(()=>B(e)?"\u7F16\u8F91":"\u65B0\u589E");function M(){return g(this,null,function*(){try{f({confirmLoading:!0});const o=yield u(),d=yield z(o);s("/flowable/bpmn/designer?modelId="+d.modelId),y(),t("success")}finally{p(!1),f({confirmLoading:!1})}})}return{registerModal:w,registerForm:l,getTitle:D,handleSubmit:M}}});function H(a,t,e,s,l,c){const r=I("BasicForm"),n=I("BasicModal");return k(),K(n,T(a.$attrs,{onRegister:a.registerModal,title:a.getTitle,onOk:a.handleSubmit}),{default:L(()=>[O(r,{onRegister:a.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var J=W(Z,[["render",H]]),ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:J});export{J as M,ie as a,le as c,re as s};
