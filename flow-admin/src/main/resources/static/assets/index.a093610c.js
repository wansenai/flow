import{_ as e}from"./BasicForm.d6bc90d8.js";import{u as o}from"./useForm.1b895cf0.js";import{h as t}from"./index.10e3b51a.js";import{P as r}from"./index.ee54ff18.js";import{y as n,Z as s,B as i,F as a,v as l,K as p}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.981ceacd.js";/* empty css              *//* empty css              *//* empty css              */import"./index.116df12f.js";import"./useWindowSizeFn.564cf32e.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.db26d4fe.js";import"./base64Conver.bb012c73.js";import"./index.f38aca4b.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.8f899bfb.js";import"./useContentViewHeight.17c92794.js";const c=[{field:"title",component:"Input",label:"标题",componentProps:{placeholder:"给目标起个名字"},required:!0},{field:"time",component:"RangePicker",label:"起止日期",required:!0},{field:"target",component:"InputTextArea",label:"目标描述",componentProps:{placeholder:"请输入你的阶段性工作目标",rows:4},required:!0},{field:"metrics",component:"InputTextArea",label:"衡量标准",componentProps:{placeholder:"请输入衡量标准",rows:4},required:!0},{field:"client",component:"Input",label:"客户",helpMessage:"目标的服务对象",subLabel:"( 选填 )",componentProps:{placeholder:"请描述你服务的客户，内部客户直接 @姓名／工号"}},{field:"inviteer",component:"Input",label:"邀评人",subLabel:"( 选填 )",componentProps:{placeholder:"请直接 @姓名／工号，最多可邀请 5 人"}},{field:"weights",component:"InputNumber",label:"权重",subLabel:"( 选填 )",componentProps:{formatter:e=>e?`${e}%`:"",parser:e=>e.replace("%",""),placeholder:"请输入"}},{field:"disclosure",component:"RadioGroup",label:"目标公开",itemProps:{extra:"客户、邀评人默认被分享"},componentProps:{options:[{label:"公开",value:"1"},{label:"部分公开",value:"2"},{label:"不公开",value:"3"}]}},{field:"disclosurer",component:"Select",label:" ",show:({model:e})=>"2"===e.disclosure,componentProps:{placeholder:"公开给",mode:"multiple",options:[{label:"同事1",value:"1"},{label:"同事2",value:"2"},{label:"同事3",value:"3"}]}}];var d=n({name:"FormBasicPage",components:{BasicForm:e,PageWrapper:r},setup(){const{createMessage:e}=t(),[r,{validate:n,setProps:s}]=o({labelCol:{span:8},wrapperCol:{span:10},schemas:c,actionColOptions:{offset:8,span:12},submitButtonOptions:{text:"提交"},submitFunc:function(){return o=this,t=null,r=function*(){try{yield n(),s({submitButtonOptions:{loading:!0}}),setTimeout((()=>{s({submitButtonOptions:{loading:!1}}),e.success("提交成功！")}),2e3)}catch(o){}},new Promise(((e,n)=>{var s=e=>{try{a(r.next(e))}catch(o){n(o)}},i=e=>{try{a(r.throw(e))}catch(o){n(o)}},a=o=>o.done?e(o.value):Promise.resolve(o.value).then(s,i);a((r=r.apply(o,t)).next())}));var o,t,r}});return{register:r}}});const m=p("data-v-e623e886"),u=m(((e,o,t,r,n,p)=>{const c=s("BasicForm"),d=s("PageWrapper");return i(),a(d,{title:"基础表单",contentBackground:"",content:" 表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。",contentClass:"p-4"},{default:m((()=>[l(c,{onRegister:e.register},null,8,["onRegister"])])),_:1})}));d.render=u,d.__scopeId="data-v-e623e886";export default d;
