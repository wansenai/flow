import{P as e}from"./index.f67f9ef2.js";import{y as a,aX as o,b6 as s,am as r,bn as t,r as n,a as i,u as d,Z as p,av as l,G as c,B as m,F as u,a1 as f,v}from"./vendor.3dc066e5.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{g as j,h as x}from"./useForm.bdacaf58.js";import{ak as b,ag as h,h as y,f as P}from"./index.06582e88.js";import g from"./ProcessHeader.915760f0.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.c01d8630.js";import"./useWindowSizeFn.308e6090.js";import"./useContentViewHeight.efd2f5af.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.4726e763.js";import"./index.4d1e0212.js";import"./download.02309083.js";import"./index.76adba59.js";/* empty css              */import"./process.978d1578.js";const F=[{field:"applyerCode",component:"Input",label:"申请人",colProps:{span:8},show:!1},{field:"type",component:"Select",label:"类型",required:!0,colProps:{style:"width: 300px",span:20},componentProps:{options:[{label:"调休",value:"1",key:"1"},{label:"事假",value:"2",key:"2"},{label:"年假",value:"3",key:"3"}]}},{field:"startTime",component:"DatePicker",label:"开始时间",required:!0,colProps:{span:6}},{field:"endTime",component:"DatePicker",label:"结束时间",required:!0,colProps:{span:6}},{field:"days",component:"InputNumber",label:"请假天数",required:!0,colProps:{span:24}},{field:"note",component:"InputTextArea",label:"说明",required:!0,colProps:{span:13}}];var I,k;(k=I||(I={})).GetLeaveById="/front/hr/attendance/getLeaveById",k.AddLeave="/front/hr/attendance/addLeave";var w=a({components:{ProcessHeader:g,PageWrapper:e,[o.name]:o,[s.name]:s,AEmpty:r,[t.name]:t,[t.Item.name]:t.Item,BasicForm:j,CollapseContainer:h,PageWrapper:e},setup(){const e=n(null),a=n(!1),{createMessage:o}=y(),{currentRoute:s}=i(),{path:r,params:{modelKey:t}}=d(s),[p,{setProps:l,resetFields:c,updateSchema:m,setFieldsValue:u,validate:f}]=x({labelWidth:100,schemas:F,showActionButtonGroup:!1,actionColOptions:{span:24}});return{registerForm:p,handleSubmit:e=>{o.success("click search,values:"+JSON.stringify(e))},check:e,doSubmit:function(){return e=this,o=null,s=function*(){const e=yield f(),o=P(),{getUserInfo:s}=o;e.applyerCode=s.code;try{a.value=!0,yield(r=e,b.post({url:I.AddLeave,params:r}))}finally{a.value=!1}var r},new Promise(((a,r)=>{var t=e=>{try{i(s.next(e))}catch(a){r(a)}},n=e=>{try{i(s.throw(e))}catch(a){r(a)}},i=e=>e.done?a(e.value):Promise.resolve(e.value).then(t,n);i((s=s.apply(e,o)).next())}));var e,o,s},initProcessForm:function(e){var a;e&&(a=e,b.get({url:I.GetLeaveById+"/"+a,params:{}})).then((e=>{u(e)})),-1===r.indexOf("/process/launch")&&l({disabled:!0})}}}});const C=v("div",{class:"font-bold"},"基本信息",-1);w.render=function(e,a,o,s,r,t){const n=p("BasicForm"),i=p("CollapseContainer"),d=l("loading");return c((m(),u(i,{canExpan:!1},{title:f((()=>[C])),default:f((()=>[v(n,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},512)),[[d,e.formLoading]])};export default w;
