import{_ as e}from"./PageWrapper.3afd24ed.js";import{k as a,aT as o,bm as r,af as t,bi as s,r as n,u as i,a as d,K as p,aq as l,w as c,o as m,n as u,P as f,q as b}from"./vendor.d660e98f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{f as j,g as v}from"./useForm.3d6a4ede.js";import{ai as x,ac as y,g as h,f as P}from"./index.51c58f14.js";import g from"./ProcessHeader.f146cb86.js";import"./usePageContext.31d72795.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.a3bdff8d.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.fe85330d.js";import"./useModal.94660e74.js";import"./useWindowSizeFn.4f1b8c18.js";import"./download.fca43234.js";import"./StrengthMeter.765addc9.js";/* empty css              */import"./process.9051f460.js";const I=[{field:"applyerCode",component:"Input",label:"申请人",colProps:{span:8},show:!1},{field:"type",component:"Select",label:"类型",required:!0,colProps:{style:"width: 300px",span:20},componentProps:{options:[{label:"调休",value:"1",key:"1"},{label:"事假",value:"2",key:"2"},{label:"年假",value:"3",key:"3"}]}},{field:"startTime",component:"DatePicker",label:"开始时间",required:!0,colProps:{span:6}},{field:"endTime",component:"DatePicker",label:"结束时间",required:!0,colProps:{span:6}},{field:"days",component:"InputNumber",label:"请假天数",required:!0,colProps:{span:24}},{field:"note",component:"InputTextArea",label:"说明",required:!0,colProps:{span:13}}];var w,C;(C=w||(w={})).GetLeaveById="/front/hr/attendance/getLeaveById",C.AddLeave="/front/hr/attendance/addLeave";var F=a({components:{ProcessHeader:g,PageWrapper:e,[o.name]:o,[r.name]:r,AEmpty:t,[s.name]:s,[s.Item.name]:s.Item,BasicForm:j,CollapseContainer:y,PageWrapper:e},setup(){const e=n(null),a=n(!1),{createMessage:o}=h(),{currentRoute:r}=i(),{path:t,params:{modelKey:s}}=d(r),[p,{setProps:l,resetFields:c,updateSchema:m,setFieldsValue:u,validate:f}]=v({labelWidth:100,schemas:I,showActionButtonGroup:!1,actionColOptions:{span:24}});return{registerForm:p,handleSubmit:e=>{o.success("click search,values:"+JSON.stringify(e))},check:e,doSubmit:function(){return e=this,o=null,r=function*(){const e=yield f(),o=P(),{getUserInfo:r}=o;e.applyerCode=r.code;try{a.value=!0,yield(t=e,x.post({url:w.AddLeave,params:t}))}finally{a.value=!1}var t},new Promise(((a,t)=>{var s=e=>{try{i(r.next(e))}catch(a){t(a)}},n=e=>{try{i(r.throw(e))}catch(a){t(a)}},i=e=>e.done?a(e.value):Promise.resolve(e.value).then(s,n);i((r=r.apply(e,o)).next())}));var e,o,r},initProcessForm:function(e){var a;e&&(a=e,x.get({url:w.GetLeaveById+"/"+a,params:{}})).then((e=>{u(e)})),-1===t.indexOf("/process/launch")&&l({disabled:!0})}}}});const k=b("div",{class:"font-bold"},"基本信息",-1);F.render=function(e,a,o,r,t,s){const n=p("BasicForm"),i=p("CollapseContainer"),d=l("loading");return c((m(),u(i,{canExpan:!1},{title:f((()=>[k])),default:f((()=>[b(n,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},512)),[[d,e.formLoading]])};export default F;
