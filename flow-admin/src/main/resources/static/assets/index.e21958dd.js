import{_ as e}from"./BasicForm.312985a0.js";import{u as o}from"./useForm.a3596aad.js";import{g as t}from"./index.f8d8fadd.js";import{_ as r}from"./PageWrapper.30f94524.js";import{k as n,K as a,o as s,n as i,x as l,q as p}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.7e403a5b.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              */import"./useModal.9d70781f.js";import"./useWindowSizeFn.ade0e88c.js";/* empty css              *//* empty css              */import"./download.7c99dac2.js";import"./StrengthMeter.16507ade.js";import"./usePageContext.03c6eac3.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.06aaefd7.js";const d=[{field:"title",component:"Input",label:"标题",componentProps:{placeholder:"给目标起个名字"},required:!0},{field:"time",component:"RangePicker",label:"起止日期",required:!0},{field:"target",component:"InputTextArea",label:"目标描述",componentProps:{placeholder:"请输入你的阶段性工作目标",rows:4},required:!0},{field:"metrics",component:"InputTextArea",label:"衡量标准",componentProps:{placeholder:"请输入衡量标准",rows:4},required:!0},{field:"client",component:"Input",label:"客户",helpMessage:"目标的服务对象",subLabel:"( 选填 )",componentProps:{placeholder:"请描述你服务的客户，内部客户直接 @姓名／工号"}},{field:"inviteer",component:"Input",label:"邀评人",subLabel:"( 选填 )",componentProps:{placeholder:"请直接 @姓名／工号，最多可邀请 5 人"}},{field:"weights",component:"InputNumber",label:"权重",subLabel:"( 选填 )",componentProps:{formatter:e=>e?`${e}%`:"",parser:e=>e.replace("%",""),placeholder:"请输入"}},{field:"disclosure",component:"RadioGroup",label:"目标公开",itemProps:{extra:"客户、邀评人默认被分享"},componentProps:{options:[{label:"公开",value:"1"},{label:"部分公开",value:"2"},{label:"不公开",value:"3"}]}},{field:"disclosurer",component:"Select",label:" ",show:({model:e})=>"2"===e.disclosure,componentProps:{placeholder:"公开给",mode:"multiple",options:[{label:"同事1",value:"1"},{label:"同事2",value:"2"},{label:"同事3",value:"3"}]}}];var c=n({components:{BasicForm:e,PageWrapper:r},setup(){const{createMessage:e}=t(),[r,{validate:n,setProps:a}]=o({labelCol:{span:7},wrapperCol:{span:10},schemas:d,actionColOptions:{offset:8},submitButtonOptions:{text:"提交"},submitFunc:function(){return o=this,t=null,r=function*(){try{yield n(),a({submitButtonOptions:{loading:!0}}),setTimeout((()=>{a({submitButtonOptions:{loading:!1}}),e.success("提交成功！")}),2e3)}catch(o){}},new Promise(((e,n)=>{var a=e=>{try{i(r.next(e))}catch(o){n(o)}},s=e=>{try{i(r.throw(e))}catch(o){n(o)}},i=o=>o.done?e(o.value):Promise.resolve(o.value).then(a,s);i((r=r.apply(o,t)).next())}));var o,t,r}});return{register:r}}});const m=l(),u=m(((e,o,t,r,n,l)=>{const d=a("BasicForm"),c=a("PageWrapper");return s(),i(c,{title:"基础表单",contentBackground:"",content:" 表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。",contentClass:"p-4"},{default:m((()=>[p(d,{onRegister:e.register},null,8,["onRegister"])])),_:1})}));c.render=u,c.__scopeId="data-v-acc538da";export default c;
