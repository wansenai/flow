var e=Object.defineProperty,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,s=(r,o,t)=>o in r?e(r,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[o]=t,i=(e,r,o)=>new Promise(((t,s)=>{var i=e=>{try{n(o.next(e))}catch(r){s(r)}},a=e=>{try{n(o.throw(e))}catch(r){s(r)}},n=e=>e.done?t(e.value):Promise.resolve(e.value).then(i,a);n((o=o.apply(e,r)).next())}));import{_ as a,a as n}from"./useModal.0a504584.js";import{_ as d}from"./BasicForm.de2d0bb0.js";import{u as c}from"./useForm.906ec90d.js";import{p as l}from"./account.data.be685cbd.js";import{a as m}from"./account.7500948a.js";import{k as p,r as u,u as f,f as j,K as b,o as g,n as w,Q as x,q as h,N as v}from"./vendor.9d9efc92.js";import"./index.1f477f84.js";import"./useWindowSizeFn.0534066c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.ed12ce5f.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./download.d21b7c84.js";import"./StrengthMeter.f927a9c9.js";var y=p({name:"AccountModal",components:{BasicModal:a,BasicForm:d},emits:["success","register"],setup(e,{emit:a}){const d=u(!0),[p,{setFieldsValue:b,resetFields:g,validate:w}]=c({labelWidth:100,schemas:l,showActionButtonGroup:!1,actionColOptions:{span:23}}),[x,{setModalProps:h,closeModal:v}]=n((e=>i(this,null,(function*(){g(),h({confirmLoading:!1,title:`给账号【${e.record.realName}(${e.record.username})】设置密码`}),d.value=!!(null==e?void 0:e.isUpdate),f(d)&&b(((e,i)=>{for(var a in i||(i={}))o.call(i,a)&&s(e,a,i[a]);if(r)for(var a of r(i))t.call(i,a)&&s(e,a,i[a]);return e})({},e.record))}))));return{registerModal:x,registerForm:p,getTitle:j((()=>f(d)?"设置密码":"新增账号")),handleSubmit:function(){return i(this,null,(function*(){try{h({confirmLoading:!0});const e=yield w();e.password=e.passwordNew,delete e.passwordNew,delete e.confirmPassword,m(e),v()}finally{h({confirmLoading:!1})}}))}}}});y.render=function(e,r,o,t,s,i){const a=b("BasicForm"),n=b("BasicModal");return g(),w(n,v(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:x((()=>[h(a,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default y;
