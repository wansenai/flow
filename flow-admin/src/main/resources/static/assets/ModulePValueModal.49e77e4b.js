var e=Object.defineProperty,o=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(o,t,r)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r,s=(e,o,t)=>new Promise(((r,i)=>{var s=e=>{try{n(t.next(e))}catch(o){i(o)}},a=e=>{try{n(t.throw(e))}catch(o){i(o)}},n=e=>e.done?r(e.value):Promise.resolve(e.value).then(s,a);n((t=t.apply(e,o)).next())}));import{_ as a,a as n}from"./useModal.b44b8cab.js";import{_ as d}from"./BasicForm.86cd97da.js";import{u as l}from"./useForm.87ab8aa1.js";import{f as m,b as c}from"./module.data.5e7b3720.js";import{k as p,r as u,u as f,f as b,K as j,o as h,n as g,Q as x,q as y,N as v}from"./vendor.bc3b2d68.js";import"./index.33a0330f.js";import"./useWindowSizeFn.ade0e88c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.0bc8da65.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./download.5032960b.js";import"./StrengthMeter.ae9219d5.js";var w=p({name:"ModuleModal",components:{BasicModal:a,BasicForm:d},emits:["success","register"],setup(e,{emit:a}){const d=u(!0),[p,{resetFields:j,setFieldsValue:h,updateSchema:g,validate:x}]=l({labelWidth:100,schemas:m,showActionButtonGroup:!1}),[y,{setModalProps:v,closeModal:w}]=n((e=>s(this,null,(function*(){j(),v({confirmLoading:!1}),d.value=!!(null==e?void 0:e.isUpdate),f(d)?(h(((e,s)=>{for(var a in s||(s={}))t.call(s,a)&&i(e,a,s[a]);if(o)for(var a of o(s))r.call(s,a)&&i(e,a,s[a]);return e})({},e.record)),g([{field:"component",show:!1},{field:"url",show:!1}])):g([{field:"component",show:!0},{field:"url",show:!0}])}))));return{registerModal:y,registerForm:p,getTitle:b((()=>f(d)?"修改":"新增")),handleSubmit:function(){return s(this,null,(function*(){try{v({confirmLoading:!0});const e=yield x();yield c(e),w(),a("success")}finally{v({confirmLoading:!1})}}))}}}});w.render=function(e,o,t,r,i,s){const a=j("BasicForm"),n=j("BasicModal");return h(),g(n,v(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:x((()=>[y(a,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default w;
