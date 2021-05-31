var e=Object.defineProperty,r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,o=(r,i,t)=>i in r?e(r,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[i]=t,a=(e,r,i)=>new Promise(((t,o)=>{var a=e=>{try{n(i.next(e))}catch(r){o(r)}},s=e=>{try{n(i.throw(e))}catch(r){o(r)}},n=e=>e.done?t(e.value):Promise.resolve(e.value).then(a,s);n((i=i.apply(e,r)).next())}));import{_ as s,a as n}from"./useModal.9d70781f.js";import{_ as d}from"./BasicForm.312985a0.js";import{u as l}from"./useForm.a3596aad.js";import{d as m,c,s as p}from"./dictionary.3236cca5.js";import{k as f,r as u,u as j,f as b,K as g,o as y,n as h,Q as v,q as x,N as w}from"./vendor.bc3b2d68.js";import"./index.f8d8fadd.js";import"./useWindowSizeFn.ade0e88c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.7e403a5b.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./download.7c99dac2.js";import"./StrengthMeter.16507ade.js";var P=f({name:"DictionaryItemModal",components:{BasicModal:s,BasicForm:d},emits:["success","register"],setup(e,{emit:s}){const d=u(!0),[f,{setFieldsValue:g,updateSchema:y,resetFields:h,validate:v}]=l({labelWidth:100,schemas:m,showActionButtonGroup:!1,actionColOptions:{span:23}}),[x,{setModalProps:w,closeModal:P}]=n((e=>a(this,null,(function*(){yield h(),w({confirmLoading:!1}),d.value=!!(null==e?void 0:e.isUpdate);let a=e.record;yield y([{field:"code",dynamicRules:()=>{return[{required:!0,whitespace:!0,message:"名称不能为空！"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{max:32,message:"字符长度不能大于32！"},...(e={id:j(d)&&a&&a.id||"",field:"code",fieldValue:"",fieldName:"编码"},[{trigger:"blur",validator:(r,i)=>i?c({id:e.id,field:e.field,fieldValue:i,fieldName:e.fieldName}).then((r=>r?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}])];var e}}]),g(((e,a)=>{for(var s in a||(a={}))i.call(a,s)&&o(e,s,a[s]);if(r)for(var s of r(a))t.call(a,s)&&o(e,s,a[s]);return e})({},e.record))}))));return{registerModal:x,registerForm:f,getTitle:b((()=>j(d)?"修改":"新增")),handleSubmit:function(){return a(this,null,(function*(){try{w({confirmLoading:!0});const e=yield v();yield p(e),P(),s("success")}finally{w({confirmLoading:!1})}}))}}}});P.render=function(e,r,i,t,o,a){const s=g("BasicForm"),n=g("BasicModal");return y(),h(n,w(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:v((()=>[x(s,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default P;
