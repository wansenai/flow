import{B as e,_ as s}from"./BasicForm.d6bc90d8.js";import{h as i}from"./index.10e3b51a.js";import{u as o}from"./useForm.1b895cf0.js";import{P as a}from"./index.ee54ff18.js";import{y as r,bE as n,Z as t,B as p,F as d,a2 as m,v as c}from"./vendor.880b4c6c.js";/* empty css              */import{u as f}from"./upload.1dc52c5b.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.981ceacd.js";/* empty css              *//* empty css              */import"./index.116df12f.js";import"./useWindowSizeFn.564cf32e.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.db26d4fe.js";import"./base64Conver.bb012c73.js";import"./index.f38aca4b.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.8f899bfb.js";import"./useContentViewHeight.17c92794.js";const j=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:f}}];var l=r({components:{BasicUpload:e,BasicForm:s,PageWrapper:a,[n.name]:n},setup(){const{createMessage:e}=i(),[s]=o({labelWidth:120,schemas:j,actionColOptions:{span:16}});return{handleChange:s=>{e.info(`已上传文件${JSON.stringify(s)}`)},uploadApi:f,register:s}}});l.render=function(e,s,i,o,a,r){const n=t("a-alert"),f=t("BasicUpload"),j=t("BasicForm"),l=t("PageWrapper");return p(),d(l,{title:"上传组件示例"},{default:m((()=>[c(n,{message:"基础示例"}),c(f,{maxSize:20,maxNumber:10,onChange:e.handleChange,api:e.uploadApi,class:"my-5"},null,8,["onChange","api"]),c(n,{message:"嵌入表单,加入表单校验"}),c(j,{onRegister:e.register,class:"my-5"},null,8,["onRegister"])])),_:1})};export default l;
