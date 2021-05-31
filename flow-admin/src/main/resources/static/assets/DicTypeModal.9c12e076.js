var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,i=(e,t,r)=>new Promise(((a,o)=>{var i=e=>{try{l(r.next(e))}catch(t){o(t)}},s=e=>{try{l(r.throw(e))}catch(t){o(t)}},l=e=>e.done?a(e.value):Promise.resolve(e.value).then(i,s);l((r=r.apply(e,t)).next())}));import{_ as s,a as l}from"./useModal.a73129f6.js";import{_ as n}from"./BasicForm.52dd7a78.js";import{u as d}from"./useForm.141421b5.js";import{c,s as m}from"./dicType.e591f397.js";import{k as u,r as p,u as f,f as g,K as b,o as h,n as y,Q as v,q as w,N as j}from"./vendor.bc3b2d68.js";const I=[{title:"名称",dataIndex:"name",align:"left"},{title:"编码",dataIndex:"code",width:100,align:"left"},{title:"排序",dataIndex:"orderNo",width:80},{title:"创建时间",dataIndex:"createTime",width:180}],P=[{field:"keyword",label:"关键字",component:"Input",componentProps:{placeholder:"请输入名称/编码"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],x=[{field:"id",label:"ID",component:"Input",show:!1},{field:"pid",label:"pid",required:!1,component:"Input",show:!1},{field:"name",label:"名称",required:!0,component:"Input",rules:[{required:!0,whitespace:!0,message:"名称不能为空！"},{max:64,message:"字符长度不能大于64！"}]},{field:"code",label:"编码",required:!0,component:"Input"},{field:"orderNo",label:"排序号",required:!1,component:"InputNumber"}];var M=u({name:"DicTypeModal",components:{BasicModal:s,BasicForm:n},emits:["success","register"],setup(e,{emit:s}){const n=p(!0),[u,{resetFields:b,updateSchema:h,setFieldsValue:y,validate:v}]=d({labelWidth:100,schemas:x,showActionButtonGroup:!1}),[w,{setModalProps:j,closeModal:I}]=l((e=>i(this,null,(function*(){yield b(),j({confirmLoading:!1}),n.value=!!(null==e?void 0:e.isUpdate);let i=e.record;yield h([{field:"code",dynamicRules:()=>{return[{required:!0,whitespace:!0,message:"编码不能为空！"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{max:64,message:"字符长度不能大于64！"},...(e={id:f(n)&&i&&i.id||"",field:"code",fieldValue:"",fieldName:"编码"},[{trigger:"blur",validator:(t,r)=>r?c({id:e.id,field:e.field,fieldValue:r,fieldName:e.fieldName}).then((t=>t?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}])];var e}}]),f(n)&&y(((e,i)=>{for(var s in i||(i={}))r.call(i,s)&&o(e,s,i[s]);if(t)for(var s of t(i))a.call(i,s)&&o(e,s,i[s]);return e})({},e.record))}))));return{registerModal:w,registerForm:u,getTitle:g((()=>f(n)?"修改":"新增")),handleSubmit:function(){return i(this,null,(function*(){try{j({confirmLoading:!0});const e=yield v();yield m(e),I(),s("success")}finally{j({confirmLoading:!1})}}))}}}});M.render=function(e,t,r,a,o,i){const s=b("BasicForm"),l=b("BasicModal");return h(),y(l,j(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:v((()=>[w(s,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:M});export{O as D,M as _,I as c,P as s};
