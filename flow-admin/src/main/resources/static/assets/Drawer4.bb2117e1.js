import{_ as e,a as s}from"./useDrawer.3e367858.js";import{_ as i}from"./BasicForm.52dd7a78.js";import{u as o}from"./useForm.141421b5.js";import{k as r,K as t,o as n,n as a,Q as d,q as m,N as p}from"./vendor.bc3b2d68.js";/* empty css              */import"./index.f72cd585.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.8664b7cc.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              */import"./useModal.a73129f6.js";import"./useWindowSizeFn.ade0e88c.js";/* empty css              *//* empty css              */import"./download.a0c19fe1.js";import"./StrengthMeter.d8342dd8.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var f=r({components:{BasicDrawer:e,BasicForm:i},setup(){const[e,{setFieldsValue:i}]=o({labelWidth:120,schemas:c,showActionButtonGroup:!1,actionColOptions:{span:24}}),[r]=s((e=>{i({field2:e.data,field1:e.info})}));return{register:r,schemas:c,registerForm:e}}});f.render=function(e,s,i,o,r,c){const f=t("BasicForm"),l=t("BasicDrawer");return n(),a(l,p(e.$attrs,{onRegister:e.register,title:"Drawer Title",width:"50%"}),{default:d((()=>[m("div",null,[m(f,{onRegister:e.registerForm},null,8,["onRegister"])])])),_:1},16,["onRegister"])};export default f;
