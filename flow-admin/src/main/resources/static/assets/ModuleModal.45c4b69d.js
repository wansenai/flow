var e=Object.defineProperty,r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(r,t,i)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i,s=(e,r,t)=>new Promise(((i,o)=>{var s=e=>{try{d(t.next(e))}catch(r){o(r)}},a=e=>{try{d(t.throw(e))}catch(r){o(r)}},d=e=>e.done?i(e.value):Promise.resolve(e.value).then(s,a);d((t=t.apply(e,r)).next())}));import{_ as a,a as d}from"./useModal.9d70781f.js";import{_ as n}from"./BasicForm.312985a0.js";import{u as l}from"./useForm.a3596aad.js";import{f as m,a as c,b as u}from"./module.data.0421bd44.js";import{k as f,r as p,u as g,f as b,K as j,o as h,n as y,Q as v,q as w,N as x}from"./vendor.bc3b2d68.js";import"./index.f8d8fadd.js";import"./useWindowSizeFn.ade0e88c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.7e403a5b.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./download.7c99dac2.js";import"./StrengthMeter.16507ade.js";var M=f({name:"ModuleModal",components:{BasicModal:a,BasicForm:n},emits:["success","register"],setup(e,{emit:a}){const n=p(!0),[f,{resetFields:j,setFieldsValue:h,updateSchema:y,validate:v}]=l({labelWidth:100,schemas:m,showActionButtonGroup:!1}),[w,{setModalProps:x,closeModal:M}]=d((e=>s(this,null,(function*(){yield j(),x({confirmLoading:!1}),n.value=!!(null==e?void 0:e.isUpdate);let s=e.record;yield y([{field:"sn",dynamicRules:()=>{return[{required:!0,whitespace:!0,message:"标识不能为空！"},{trigger:["change","blur"],pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{trigger:["change","blur"],max:64,message:"字符长度不能大于64！"},...(e={id:g(n)&&s&&s.id||"",field:"sn",fieldValue:"",fieldName:"标识"},[{trigger:"blur",validator:(r,t)=>t?c({id:e.id,field:e.field,fieldValue:t,fieldName:e.fieldName}).then((r=>r?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}])];var e}}]),g(n)&&h(((e,s)=>{for(var a in s||(s={}))t.call(s,a)&&o(e,a,s[a]);if(r)for(var a of r(s))i.call(s,a)&&o(e,a,s[a]);return e})({},e.record)),e.record.id?y([{field:"component",show:!1},{field:"url",show:!1}]):y([{field:"component",show:!0},{field:"url",show:!0}])}))));return{registerModal:w,registerForm:f,getTitle:b((()=>g(n)?"修改":"新增")),handleSubmit:function(){return s(this,null,(function*(){try{x({confirmLoading:!0});const e=yield v();e.status=e.status?1:0,e.showStatus=e.showStatus?1:0,yield u(e),M(),a("success")}finally{x({confirmLoading:!1})}}))}}}});M.render=function(e,r,t,i,o,s){const a=j("BasicForm"),d=j("BasicModal");return h(),y(d,x(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:v((()=>[w(a,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default M;
