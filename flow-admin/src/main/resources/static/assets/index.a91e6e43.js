import{_ as e}from"./BasicForm.52dd7a78.js";import{u as o}from"./useForm.141421b5.js";import{g as t}from"./index.f72cd585.js";import{_ as r}from"./PageWrapper.c247b944.js";import{k as n,K as s,o as a,n as i,x as l,q as p}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.8664b7cc.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              */import"./useModal.a73129f6.js";import"./useWindowSizeFn.ade0e88c.js";/* empty css              *//* empty css              */import"./download.a0c19fe1.js";import"./StrengthMeter.d8342dd8.js";import"./usePageContext.8ab99773.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.06aaefd7.js";const c=[{field:"title",component:"Input",label:"标题",componentProps:{placeholder:"给目标起个名字"},required:!0},{field:"time",component:"RangePicker",label:"起止日期",required:!0},{field:"target",component:"InputTextArea",label:"目标描述",componentProps:{placeholder:"请输入你的阶段性工作目标",rows:4},required:!0},{field:"metrics",component:"InputTextArea",label:"衡量标准",componentProps:{placeholder:"请输入衡量标准",rows:4},required:!0},{field:"client",component:"Input",label:"客户",helpMessage:"目标的服务对象",subLabel:"( 选填 )",componentProps:{placeholder:"请描述你服务的客户，内部客户直接 @姓名／工号"}},{field:"inviteer",component:"Input",label:"邀评人",subLabel:"( 选填 )",componentProps:{placeholder:"请直接 @姓名／工号，最多可邀请 5 人"}},{field:"weights",component:"InputNumber",label:"权重",subLabel:"( 选填 )",componentProps:{formatter:e=>e?`${e}%`:"",parser:e=>e.replace("%",""),placeholder:"请输入"}},{field:"disclosure",component:"RadioGroup",label:"目标公开",itemProps:{extra:"客户、邀评人默认被分享"},componentProps:{options:[{label:"公开",value:"1"},{label:"部分公开",value:"2"},{label:"不公开",value:"3"}]}},{field:"disclosurer",component:"Select",label:" ",show:({model:e})=>"2"===e.disclosure,componentProps:{placeholder:"公开给",mode:"multiple",options:[{label:"同事1",value:"1"},{label:"同事2",value:"2"},{label:"同事3",value:"3"}]}}];var d=n({components:{BasicForm:e,PageWrapper:r},setup(){const{createMessage:e}=t(),[r,{validate:n,setProps:s}]=o({labelCol:{span:7},wrapperCol:{span:10},schemas:c,actionColOptions:{offset:8},submitButtonOptions:{text:"提交"},submitFunc:function(){return o=this,t=null,r=function*(){try{yield n(),s({submitButtonOptions:{loading:!0}}),setTimeout((()=>{s({submitButtonOptions:{loading:!1}}),e.success("提交成功！")}),2e3)}catch(o){}},new Promise(((e,n)=>{var s=e=>{try{i(r.next(e))}catch(o){n(o)}},a=e=>{try{i(r.throw(e))}catch(o){n(o)}},i=o=>o.done?e(o.value):Promise.resolve(o.value).then(s,a);i((r=r.apply(o,t)).next())}));var o,t,r}});return{register:r}}});const m=l(),u=m(((e,o,t,r,n,l)=>{const c=s("BasicForm"),d=s("PageWrapper");return a(),i(d,{title:"基础表单",contentBackground:"",content:" 表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。",contentClass:"p-4"},{default:m((()=>[p(c,{onRegister:e.register},null,8,["onRegister"])])),_:1})}));d.render=u,d.__scopeId="data-v-acc538da";export default d;
