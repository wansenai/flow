import{_ as e,a as o}from"./useModal.0a504584.js";import{_ as s}from"./BasicForm.de2d0bb0.js";import{u as i}from"./useForm.906ec90d.js";import{k as t,r,K as n,o as a,n as d,Q as m,q as p,N as l}from"./vendor.9d9efc92.js";import"./index.1f477f84.js";import"./useWindowSizeFn.0534066c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.ed12ce5f.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./download.d21b7c84.js";import"./StrengthMeter.f927a9c9.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var f=t({components:{BasicModal:e,BasicForm:s},setup(){const e=r({}),[s,{}]=i({labelWidth:120,schemas:c,showActionButtonGroup:!1,actionColOptions:{span:24}}),[t]=o((o=>{e.value={field2:o.data,field1:o.info}}));return{register:t,schemas:c,registerForm:s,model:e}}});f.render=function(e,o,s,i,t,r){const c=n("BasicForm"),f=n("BasicModal");return a(),d(f,l(e.$attrs,{onRegister:e.register,title:"Modal Title"}),{default:m((()=>[p(c,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])),_:1},16,["onRegister"])};export default f;
