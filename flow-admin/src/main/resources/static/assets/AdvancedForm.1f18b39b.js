import{_ as e}from"./BasicForm.950a284a.js";import{u as o}from"./useForm.7635a38a.js";import{ag as l}from"./index.1bc1d740.js";import{P as n}from"./index.dfbcae78.js";import{z as p,Z as a,D as t,F as i,a3 as s,w as r}from"./vendor.11d66826.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.c48a0e31.js";/* empty css              *//* empty css              *//* empty css              */import"./index.037585c2.js";import"./useWindowSizeFn.9fecf134.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.aa9819c7.js";import"./base64Conver.bb012c73.js";import"./index.a66557fe.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.17f3c81d.js";import"./useContentViewHeight.a8198af7.js";var d=p({components:{BasicForm:e,CollapseContainer:l,PageWrapper:n},setup(){const[e]=o({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),[l]=o({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field10",component:"Input",label:"字段10",colProps:{span:8}},{field:"field11",component:"Input",label:"字段11",colProps:{span:8}},{field:"field12",component:"Input",label:"字段12",colProps:{span:8}},{field:"field13",component:"Input",label:"字段13",colProps:{span:8}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0});return{register:e,register1:l}}});d.render=function(e,o,l,n,p,d){const c=a("BasicForm"),m=a("CollapseContainer"),f=a("PageWrapper");return t(),i(f,{title:"可折叠表单示例"},{default:s((()=>[r(m,{title:"基础收缩示例"},{default:s((()=>[r(c,{onRegister:e.register},null,8,["onRegister"])])),_:1}),r(m,{title:"超过3行自动收起",class:"mt-4"},{default:s((()=>[r(c,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])),_:1})};export default d;
