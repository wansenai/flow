import{B as e,_ as s}from"./BasicForm.ae4250e1.js";import{h as i}from"./index.514e05b1.js";import{u as a}from"./useForm.213a5276.js";import{P as o}from"./index.1d9afa2c.js";import{z as r,bD as n,Z as t,D as d,F as p,a3 as m,w as f}from"./vendor.11d66826.js";/* empty css              */import{u as c}from"./upload.9a842d97.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.6b57f630.js";/* empty css              *//* empty css              */import"./index.5b995397.js";import"./useWindowSizeFn.9fecf134.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.0adfd0af.js";import"./base64Conver.bb012c73.js";import"./index.ceaa815e.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.17f3c81d.js";import"./useContentViewHeight.b2883a86.js";const j=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:c}}];var l=r({components:{BasicUpload:e,BasicForm:s,PageWrapper:o,[n.name]:n},setup(){const{createMessage:e}=i(),[s]=a({labelWidth:120,schemas:j,actionColOptions:{span:16}});return{handleChange:s=>{e.info(`已上传文件${JSON.stringify(s)}`)},uploadApi:c,register:s}}});l.render=function(e,s,i,a,o,r){const n=t("a-alert"),c=t("BasicUpload"),j=t("BasicForm"),l=t("PageWrapper");return d(),p(l,{title:"上传组件示例"},{default:m((()=>[f(n,{message:"基础示例"}),f(c,{maxSize:20,maxNumber:10,onChange:e.handleChange,api:e.uploadApi,class:"my-5"},null,8,["onChange","api"]),f(n,{message:"嵌入表单,加入表单校验"}),f(j,{onRegister:e.register,class:"my-5"},null,8,["onRegister"])])),_:1})};export default l;