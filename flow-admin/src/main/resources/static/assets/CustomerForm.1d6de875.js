import{_ as e}from"./BasicForm.f252c294.js";import{u as o}from"./useForm.7c89f4ac.js";import{ae as r,g as s}from"./index.6992208b.js";import{k as t,ad as i,a1 as a,K as n,o as d,n as p,Q as l,q as m}from"./vendor.9d9efc92.js";import{_ as c}from"./PageWrapper.e77aca1b.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.14e97884.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              */import"./useModal.11986c6c.js";import"./useWindowSizeFn.0534066c.js";/* empty css              *//* empty css              */import"./download.f95f58dd.js";import"./StrengthMeter.505415db.js";import"./usePageContext.87ea5c45.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";const u=[{field:"field1",component:"Input",label:"render方式",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:o})=>a(i,{placeholder:"请输入",value:e[o],onChange:r=>{e[o]=r.target.value}})},{field:"field2",component:"Input",label:"render组件slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"自定义Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}];var f=t({components:{BasicForm:e,CollapseContainer:r,PageWrapper:c,[i.name]:i},setup(){const{createMessage:e}=s(),[r,{setProps:t}]=o({labelWidth:120,schemas:u,actionColOptions:{span:24}});return{register:r,schemas:u,handleSubmit:o=>{e.success("click search,values:"+JSON.stringify(o))},setProps:t}}});f.render=function(e,o,r,s,t,i){const a=n("a-input"),c=n("BasicForm"),u=n("CollapseContainer"),f=n("PageWrapper");return d(),p(f,{title:"自定义组件示例"},{default:l((()=>[m(u,{title:"自定义表单"},{default:l((()=>[m(c,{onRegister:e.register,onSubmit:e.handleSubmit},{f3:l((({model:e,field:o})=>[m(a,{value:e[o],"onUpdate:value":r=>e[o]=r,placeholder:"自定义slot"},null,8,["value","onUpdate:value"])])),_:1},8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default f;
