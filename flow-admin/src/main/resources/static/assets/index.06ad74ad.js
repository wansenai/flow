import{g as e,_ as a}from"./BasicForm.86cd97da.js";import{u as s,av as o,g as r}from"./index.33a0330f.js";import{u as i}from"./useForm.87ab8aa1.js";import{_ as n}from"./PageWrapper.ba7be9e5.js";import{k as t,bz as p,K as d,o as m,n as c,Q as l,q as u}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.0bc8da65.js";import"./uuid.c53863e7.js";/* empty css              */import"./useModal.b44b8cab.js";import"./useWindowSizeFn.ade0e88c.js";/* empty css              *//* empty css              */import"./download.5032960b.js";import"./StrengthMeter.ae9219d5.js";import"./usePageContext.a11cc1be.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.06aaefd7.js";const{uploadUrl:f=""}=s();function j(e,a){return o.uploadFile({url:f,onUploadProgress:a},e)}const b=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:j}}];var g=t({components:{BasicUpload:e,BasicForm:a,PageWrapper:n,[p.name]:p},setup(){const{createMessage:e}=r(),[a]=i({labelWidth:120,schemas:b,actionColOptions:{span:16}});return{handleChange:a=>{e.info(`已上传文件${JSON.stringify(a)}`)},uploadApi:j,register:a}}});g.render=function(e,a,s,o,r,i){const n=d("a-alert"),t=d("BasicUpload"),p=d("BasicForm"),f=d("PageWrapper");return m(),c(f,{title:"上传组件示例"},{default:l((()=>[u(n,{message:"基础示例"}),u(t,{maxSize:20,maxNumber:10,onChange:e.handleChange,api:e.uploadApi,class:"my-5"},null,8,["onChange","api"]),u(n,{message:"嵌入表单,加入表单校验"}),u(p,{onRegister:e.register,class:"my-5"},null,8,["onRegister"])])),_:1})};export default g;
